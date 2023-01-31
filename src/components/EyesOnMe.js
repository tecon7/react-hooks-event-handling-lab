import React from "react"

function focusChange(event) {
    console.log('Good!')
}

function blurChange(event) {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe() {
    return (
        <button onFocus={focusChange} onBlur={blurChange}>Eyes on me</button>
    )
}
export default EyesOnMe