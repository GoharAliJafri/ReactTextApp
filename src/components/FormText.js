import React, { useState } from "react";

export default function FormText(props) {
  const handleClickUpper = () => {
    let newText = text.toUpperCase();
    settext(newText);
  };

  const handleClickLower = () => {
    let newText = text.toLowerCase();
    settext(newText);
  };

  const handleClear = () => {
    let newText = "";
    settext(newText);
  };

  const handleSentenceCase = () => {
    let newText = text;
    newText = newText.toLowerCase().split(". ");
    let totalLength=newText.length;
    for(let i=0; i < totalLength; i++){
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    newText = newText.join(". ");
    console.log(newText);
    settext(newText);
  };

  const handleTitleCase = () => {
    let newText = text;
    newText = newText.toLowerCase().split(" ");
    for(let i=0; i < newText.length; i++){
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
     }
     newText = newText.join(" ");
    settext(newText);
  };

  const handleCopyText = () => {
    var newText = document.getElementById("mybox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const handleExtraSpaces = () => {
    let newText = text;
    newText = newText.split(/[ ]+/);
    console.log(newText);
    settext(newText.join(" "));
  };

  const handleOnChange = (event) => {
    settext(event.target.value); 
  };

  const [text, settext] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="10"
          style={{backgroundColor: props.mode==='light'?'white':'#0b1924', color: props.mode==='light'?'black':'white'}}
        ></textarea>
      </div> 
      <div className="inline-block">
        <button className="btn btn-primary mx-1 my-1" onClick={handleClickUpper}>
          CONVERT TO UPPERCASE
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClickLower}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSentenceCase}>
          Sentence Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleTitleCase}>
          Title Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
    </div>

    <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
      <h2>{props.summaryhead}</h2>
      <p>{text.split(" ").length-1} <b>words</b> and {text.length} <b>characters</b></p>
      <p>Text takes {0.008 * text.split(" ").length} Minutes to read </p>

      <h2>Preview text</h2>
      <p>{text.length>0?text:"Enter some text above to preview here"}</p>
    </div>
    </>
  );
}
