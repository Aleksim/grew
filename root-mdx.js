import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {Headings, Texts, Code, Lists} from './src/components/Complete/'
import { basicH2 } from './src/components/Complete/Headings'



const components ={
    h1: Headings.myH1,
    p: Texts.myP,
    h2: basicH2,
    h4: Headings.myH4,
    pre: Code,
    ul: Lists.basicList
}

export const wrapMDX = ({element}) =>{
    return <MDXProvider components={components}>{element}</MDXProvider>
}