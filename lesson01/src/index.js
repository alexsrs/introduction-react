import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function primeiroJSX() {
    return (
        <div>
            Alex Sandro - Introdução ao ReactJS
            <h1 className="teste">A soma é: {sum(10, 2)}</h1>
        </div>
    )
}

function sum(a, b){
    return a + b
}

const App = () => {
    return (
        <div className="App">
        {primeiroJSX()}
        
        </div>
    )
}

const rootElemment = document.getElementById("root")
ReactDOM.render(<App />, rootElemment)