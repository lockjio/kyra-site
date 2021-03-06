import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const TopScroll = props => {
  return (
    <>
      <div id="top" className="top-0"></div>
      {props.children}
      <div className="fixed bottom-0 w-screen text-center mb-1 text-silvered font-body text-xs hover:text-golden opacity-75 mb-5 z-40">
        <p id="scroll-to-top" onClick={() => scrollTo("#top")}>
          scroll to top ↑
        </p>
      </div>
    </>
  )
}

export default TopScroll
