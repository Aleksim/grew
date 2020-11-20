import React from "react"
import "../../css/mdx.css"


{/*myH1 */}
const basicList = props => {
  return (
    <ul
        className="basic-list"
    >
      {props.children}
    </ul>
  )
}


export { basicList }
