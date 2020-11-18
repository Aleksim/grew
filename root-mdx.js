import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {Headings, Example} from './src/components/Complete/'


const Testing = ({children})=>{
return <div className="code">{children}</div>
}

const components ={
    h2: Headings.myH2,
    h4: Headings.myH4,
    inlineCode: Testing,
    blockquote: Testing,
    pre: Example
}

export const wrapMDX = ({element}) =>{
    return <MDXProvider components={components}>{element}</MDXProvider>
}