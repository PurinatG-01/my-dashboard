import React from "react"
import CardViewer from "./CardViewer"

export default function Dashboard() {
  return (
    <ul
      title="Dashboard list"
      className="flex flex-wrap justify-start items-center bg-gray-100 mx-16 rounded-md"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <li key={index} className="m-8">
          <CardViewer />
        </li>
      ))}
    </ul>
  )
}
