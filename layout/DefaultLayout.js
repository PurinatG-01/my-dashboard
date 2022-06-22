import React from "react"

export default function DefaultLayout(props) {
  return (
    <>
      <nav>
        <h1 className="p-4 mx-auto max-w-lg w-full text-center uppercase text-gray-700 text-xl tracking-widest">
          My Dashboard
        </h1>
      </nav>
      <main>{props.children}</main>
      <footer className="p-4 mx-auto w-full text-right absolute bottom-0 z-50">
        <a
          href="https://chofongsua-blog.netlify.app/"
          className="text-sm underline text-gray-700"
          title="Purinat Sanbundit Profile's website"
        >
          by Purinat Sanbundit
        </a>
      </footer>
    </>
  )
}
