import * as React from "react"
import { Link } from "gatsby"


const IndexPage = () => {
  return (
    <main >
      <h1 >
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
        <div>
      <Link to="/assignment1/">Assignment 1</Link>
    </div>

      </h1>
     
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
