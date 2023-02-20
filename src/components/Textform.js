
import React, { useState } from 'react'


export default function Textform(props) {

    const [text, setText] = useState('');



    const handleUpclick = () => {

        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloclick = () => {

        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const handleboldclick = () => {

        let newText = text.tp();
        setText(newText);
    }

    const handlechange = (event) => {

        setText(event.target.value);
    }
    // setText("new text");
    return (
        <>
            <div>

                <h1>{props.heading}</h1>


                <div className="form-group">

                    <textarea className="form-control" onChange={handlechange} value={text} id="MY-form" rows="8"></textarea>
                </div>
                <button className="btn btn primary mx-2" onClick={handleUpclick}> Convert to uppercase</button>
                <button className="btn btn primary mx-2" onClick={handleloclick}> Convert to lowercase</button>
                <button className="btn btn primary mx-2" onClick={handleboldclick}> Convert to Bold</button>
            </div>
            <div className="container mp3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
