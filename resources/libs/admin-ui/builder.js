#!/usr/bin/env node
const builder = require('@wperalta/builder')

const command = process.argv[2]

if (command === '--watch') {
  console.log('watching')
  builder.watch()
} else {
  console.log('building')
  builder.build()
}
