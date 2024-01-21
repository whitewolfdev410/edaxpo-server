#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel').default;
const typescript = require("@rollup/plugin-typescript");

const currentWorkingPath = process.cwd();
const { src, name, builder: {typescript: useTs} } = require(path.join(currentWorkingPath, 'package.json'));

const inputPath = path.join(currentWorkingPath, src);

// Little workaround to get package name without scope
const fileName = name.replace('@demo/', '').replace('@logicpanel/', '');

// see below for details on the options
const plugins = [
  resolve(),
  commonjs()
]
if(useTs){
  console.log('with typescript');
  plugins.push(
    typescript({
      tsconfig: './tsconfig.json',
      declarationDir: '.',
      // declaration: true,
      // declarationDir: 'dist',
    })
  )
  plugins.push(
    babel({
      presets: ['@babel/preset-env', ['@babel/preset-react',{development: true}]],
      plugins: [[
        'react-dev-inspector/plugins/babel',
        {
          excludes: [
            /node_modules/,
          ],
        },
      ]],
      extensions: [
        '.js', 
        '.jsx',
        '.ts',
        '.tsx'
      ],
      inputSourceMap: false,
      babelHelpers: 'bundled',
    })
  )
}else{
  console.log('no typescript');
  plugins.push(
    babel({
      presets: ['@babel/preset-env', ['@babel/preset-react',{development: true}]],
      plugins: [[
        'react-dev-inspector/plugins/babel',
        {
          excludes: [
            /node_modules/,
          ],
        },
      ]],
      inputSourceMap: false,
      babelHelpers: 'bundled',
    })
  )
}



const inputOptions = {
  input: inputPath,
  external: ['react','react-dom','formik','antd','lodash','react-router-dom','qs','react-helmet'],
  plugins,
};

const outputOptions = [
  {
    file: `dist/${fileName}.cjs.js`,
    sourcemap: true,
    format: 'cjs'
  },
  {
    file: `dist/${fileName}.esm.js`,
    sourcemap: true,
    format: 'esm'
  },
];

async function build() {
  // create bundle
  const bundle = await rollup.rollup(inputOptions);
  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

async function watch() {
  console.log("watching",fileName);
  // create bundle
  const watcher = await rollup.watch({
    ...inputOptions,
    output: outputOptions,
  })
  watcher.on('event', event => {
    console.log(fileName,event.code, event.code === "ERROR"? event: null);
  });
  // This will make sure that bundles are properly closed after each run
  watcher.on('event', ({ result }) => {
    if (result) {
      result.close();
    }
  });


  async function exitHandler(options, exitCode) {
    if (options.cleanup) {
      // stop watching
      await watcher.close();
    }
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
  }

//do something when app is closing
  process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
  process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// catches "kill pid" (for example: nodemon restart)
  process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
  process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
  process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

}

// get first command line argument
const command = process.argv[2];

if(command === '--watch'){
  watch();
}else {
  build();
}

