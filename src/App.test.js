import React from "react"
import ReactDom from "react-dom"
import App from './App';
test("render App",()=>{
  const div = ReactDom.createRoot(document.createElement("div"))
  div.render(<App />)
})

