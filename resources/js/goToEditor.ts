// @ts-ignore
import launchEditorEndpoint from 'react-dev-utils/launchEditorEndpoint'
import type {CodeInfo} from "react-dev-inspector/src/Inspector/utils/inspect";

type CodeInfoLike = CodeInfo | { codeInfo: CodeInfo }

const getCodeInfo = (_codeInfo: CodeInfoLike): CodeInfo => (
    'codeInfo' in _codeInfo
        ? _codeInfo.codeInfo
        : _codeInfo
)


export const gotoServerEditor = (_codeInfo?: CodeInfoLike) => {
    if (!_codeInfo) return
    const codeInfo = getCodeInfo(_codeInfo)

    const {
        lineNumber,
        columnNumber,
        relativePath,
        absolutePath,
    } = codeInfo

    const isRelative = Boolean(relativePath)
    const fileName = isRelative ? relativePath : absolutePath

    if (!fileName) {
        console.error(`[react-dev-inspector] Cannot open editor without source fileName`, codeInfo)
        return
    }

    const launchParams = {
        fileName,
        lineNumber,
        colNumber: columnNumber,
    }

    /**
     * api path in '@react-dev-inspector/middlewares' launchEditorMiddleware
     */
    const apiRoute = isRelative
        ? `${launchEditorEndpoint}/relative`
        : launchEditorEndpoint

    const w = window.open(`http://[::1]:5173${apiRoute}?${new URLSearchParams(launchParams)}`, "_blank",'height=200,width=200')
    w?.close()
}
