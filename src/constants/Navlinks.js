import React from "react"
import { Link } from "gatsby"
import "../pages/mystyles.scss"

const data = [
  {
    id: 1,
    text: "Writings",
    url: "/",
  },
  {
    id: 2,
    text: "Other",
    url: "/github/",
  },
  {
    id: 3,
    text: "See all",
    url: "/posts/",
  },

]

const tempLinks = data.map(link => {
  return (
    <div classNameName="navbar-item" key={link.id}>
      <a href={link.url}>{link.text}</a>
    </div>
  )
})

export default () => {
  return <div classNameName="navbar-start">{tempLinks}</div>
}
