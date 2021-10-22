import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper Case","success");
  };

  const bold = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) newText += text[i];

    setText(newText);
    props.showAlert("Reverse String","success");
  };

  const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    console.log("lowercase");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower Case","success");
  };

  const copytext=()=>{
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()
    props.showAlert("Copied to Clipboard","success");
  }

  const [text, setText] = useState("");
  //setText("tanuu");
  return (
    <>
      <div className="container" >
        <h1 style={{color: props.mode==='dark'?'white':'black'}} >{props.heading} </h1>
        <div className="mb-3">
          <label className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: (props.mode === 'light' ? 'white' : '#13466e'),
              color: (props.mode==='dark'?'white':'black')
            }}
            id="exampleFormControlTextarea1"
            rows="8"></textarea>
        </div>

        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert To UpperCase  </button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={bold}> Reverse String  </button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={copytext}> Copy Text  </button>
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words , {text.length} characters ,{" "}
          {text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} Mintues
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:" Enter Text Above"}</p>
      </div>
    </>
  );
}
