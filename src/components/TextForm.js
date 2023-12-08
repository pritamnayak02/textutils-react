import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleTitleCase = () => {
        let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(newText)
        props.showAlert("Converted to titlecase!", "success");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed!", "success");
    }
    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied to clipboard!", "success");
    }
    const handleClear = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared!", "success");
    }
    
    return (
        <div style={{color: props.mode === 'light'? 'black' : 'white'}}>
            <div className='container'>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control"  style={{backgroundColor: props.mode === 'light'? 'white' : 'grey', color: props.mode === 'light'? 'black' : 'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className={`btn btn-${ props.mode === 'light' ? 'secondary' : 'dark'} btn-sm mx-1`} onClick={handleUpperCase}>Convert to UpperCase</button>
                <button className={`btn btn-${ props.mode === 'light' ? 'secondary' : 'dark'} btn-sm mx-1`} onClick={handleLowerCase}>Convert to LowerCase</button>
                <button className={`btn btn-${ props.mode === 'light' ? 'secondary' : 'dark'} btn-sm mx-1`} onClick={handleTitleCase}>Convert to TitleCase</button>
                <button className={`btn btn-${ props.mode === 'light' ? 'secondary' : 'dark'} btn-sm mx-1`} onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className={`btn btn-${ props.mode === 'light' ? 'secondary' : 'dark'} btn-sm mx-1`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-${ props.mode === 'light' ? 'secondary' : 'dark'} btn-sm mx-1`} onClick={handleClear}>Clear Text</button>
            </div>
            <div className='container my-3'>
                <h3>Your Text Summary</h3>
                <p>{text.split(' ').length} words and {text.length} characters.</p>
                <p>{0.004 * text.split(' ').length} minutes read.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </div>
    )
}