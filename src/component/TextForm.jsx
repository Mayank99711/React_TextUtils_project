import {useState} from "react";
function TextForm(props){

  const [text,setText]=useState("");
  const handleUpClick = () => {
    // convert current text to uppercase
   let newText=text.toUpperCase();
   setText(newText);
   props.showAlert("Converted to Uppercase","success");
  }
  //for handle extra spaces
  let handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }
  let handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  let handleClearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text cleared","success");
  }
  let handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }
  let handleTitleClick=()=>{
    let words=text.split(" ");
    let Capital = words.map(word=>{
      if(word.length === 0) {return "";}
      else{
        props.showAlert("Converted to Title Case","success");
      return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
      }
    });
    setText(Capital.join(" "));
  }
  const handleOnChange = (event) => {
    // update state with textarea value
    setText(event.target.value);
  }
  const myStyle = {
    color: props.mode === 'dark' || props.mode === 'red' ? 'white' : '#042743',
  }
  const textareaStyle = {
    backgroundColor: props.mode === 'dark' ? '#13466e' : (props.mode === 'red' ? '#e6ecedff' : 'white'),
    color: props.mode === 'dark' || props.mode === 'red' ? 'white' : '#042743',
  }
  const btnClass = props.mode === 'red' ? 'btn btn-danger' : (props.mode === 'green' ? 'btn btn-success' : (props.mode === 'blue' ? 'btn btn-primary' : (props.mode === 'dark' ? 'btn btn-light' : 'btn btn-primary')));
  return(
    <>
    <div className="container" style={myStyle} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={textareaStyle}></textarea>
    </div>
    <button className={`${btnClass} mx-1`} onClick={handleUpClick}>Convert To Uppercase</button>
    <button className={`${btnClass} mx-1`} onClick={handleLoClick}>Convert To Lowercase</button>
    <button className={`${btnClass} mx-1`} onClick={handleClearClick}>Clear</button>
    <button className={`${btnClass} mx-1`} onClick={handleTitleClick}>Convert to Title Case</button>
     <button className={`${btnClass} mx-1`} onClick={handleCopy}>copy text</button>
     <button className={`${btnClass} mx-1`} onClick={handleExtraSpace}>Remove Extra Spaces</button>
    <div className="container my-3"><h2> Your text summary</h2>
      <p>{text.length===0?0:text.split(" ").length} word and {text.length} character</p>
      <p>{0.008 *text.split(" ").length }MInutes read the text</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </div>
    </>
  );
}
export default TextForm;