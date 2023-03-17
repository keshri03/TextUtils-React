import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpclick = () => {
        // console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    };
    const handleLoclick = () => {
        // console.log("uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    };
    const handleclearclick = () => {
        // console.log("uppercase was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text was cleared","success");
    };
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
        // props.showAlert("Extra Spaces were removed","success");
    };
    const HandleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/); // rejex
        setText(newText.join(" "));
    }
    function wordCount(content){ 
        if(content===""){
          return 0;
        }
        let arr = content.split(" ");
        let len = arr.length;
        let count=0;
        
        for(let i=0;i<len;i++){
          if(arr[i]==='' || arr[i]===' '){
             count++;
          }
        }
        return len-count;
      }
    const [text, setText] = useState("");
    // text="random text"; wrong
    // setText('new text 2');

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white' : '#011827e8'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{backgroundColor: props.mode==='dark'?'grey': 'white',color: props.mode==='dark'?'white': '#011827e8'}}
                        id="myBox"
                        rows="8"
                    ></textarea>
                    <button className="btn-primary mx-2 my-1" onClick={handleUpclick}>
                        Convert to uppercase
                    </button>
                    <button className="btn-primary mx-2 my-1" onClick={handleLoclick}>
                        Convert to lowercasecase
                    </button>
                    <button className="btn-primary mx-2 my-1" onClick={handleclearclick}>
                        clear Text
                    </button>
                    <button className="btn-primary mx-2 my-1" onClick={HandleExtraSpaces}>
                        Remove Extra Spaces
                    </button>
                </div>
            </div>
            <div className="continer my-3" style={{color: props.mode==='dark'?'white' : '#011827e8'}}>
                <h2>Your text summary</h2>
                <p>
                    {wordCount(text)} words and {text.length} charcters
                </p>
                <p>{0.008 * wordCount(text)} Minutes read</p>
                <h2>Preview</h2>
                <p>{wordCount(text)>0?text: "Enter something in textbox above to preview here"}</p>
            </div>
        </>
    );
}
