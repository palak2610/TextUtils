import React, {useState} from 'react'


export default function TextForm(props) {

    const handleLoClick = () =>
    {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to LowerCase! ", "success");
    }
    
    const handleUpClick = ()=> 
    {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to UpperCase! ", "success");

    }

    const handleClClick = () =>
    {
        let newText = "";
        setText(newText);
        props.showAlert(" Text is Cleared! ", "success");
    }

    const handleCopy = ()=>
    {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text is Copied! ", "success");

    }

    const handleExtraSpaces = ()=>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra spaces is cleared! ", "success");
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleOnChange = (event) => 
    {
        setText(event.target.value);
    }
  const [text,setText] = useState('');
  return (
    <>
        <div className='container'style={{color:props.mode === 'dark'? "white":"#080c29"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? "#33354b":"white",color:props.mode === 'dark'?'white':'#080c29'}}></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleClClick}>Clear</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleSpeak}>Read Aloud</button>


        </div>
        <div className='container my-3' style={{color:props.mode === 'dark'? "white":"#080c29"}}>
            <h2>Your text summary</h2>
            <p>{text.length===0 ? 0 : text.split(" ").length} words and {text.length} characters</p>
        </div>
    </>
  )
}
