import React from "react"

export default function DefaultLayout(props) {
  return (
    <>
      <nav>Nav</nav>
      <main className="page-container">{props.children}</main>
      <footer></footer>
    </>
  )
}
