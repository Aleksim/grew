import React from "react"
import "../../css/main.css"


{/*myH2 */}
const myH2 = ({ children, title }) => {
  if (title) {
    return (
      <div className="headings-two">
        <h2>{children}</h2>
        <div className="headings-underline">
        </div>
      </div>
    )
  }
  return (
    <h2
      style={{
        margin: "2rem 0",
        color: "var(--clr-grey-5)",
      }}
    >
      {children}
    </h2>
  )
}



{/*myH4 */}
const myH4 = props => {
  return (
    <h3 style={{ margin: "2rem 0", color: "blue" }}>
      {props.children}
    </h3>
  )
}

export { myH2, myH4 }
