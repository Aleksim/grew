import React from "react"
import "../../css/mdx.css"


{/*Basic text */}
const myP = ({children, list}) => {
    if(list){
          return (
    <p
      style={{
        fontSize: '1.25rem',
        fontWeight: '400',
        color: "#292929",
        lineHeight: '1.6',
        marginBottom: '35px',
        marginTop: '35px',
        color: "hotpink"
      }}
    >
      {children}
    </p>
          )
    }  return (
    <p
      style={{
        fontSize: '1.25rem',
        marginTop:"15px",
        fontWeight: '400',
        color: "#292929",
        lineHeight: '1.6',

      }}
    >
      {children}
    </p>
  )
}


export { myP }
