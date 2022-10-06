import React, {useState} from "react"


export default function TextFrom(props) {
    const handleupclick = () =>{
        //console.log("Uppercase was clicked "+ text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase","success");
    }

    const handleloclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClclick = () => {
        let newtext = "";
        setText(newtext);
        props.showAlert("Text Clear","success");
    }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value)
    }

    const handleExtraSpace = () => {
       let newtext = text.split(/[ ]+/);
       setText(newtext.join(" ")) 
       props.showAlert("Clear Extra Space","success");
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);        
       props.showAlert("Copy Text","success");
    }

    const [text, setText] = useState('Enter A Text');
    return(
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"value ={text} style={{backgroundColor : props.mode === 'dark'?'lightgrey':'white',color: props.mode ==='dark'?'blue':'Red'}} onChange={handleOnChange} id="mybox" rows="10"></textarea>
             </div> 
             <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleupclick}>Convert To Uppercase</button>
             <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleloclick}>Convert To Lowercase</button>
             <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleClclick}>Clear Text</button>
             <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleExtraSpace}>Remove Extra Spaces</button>
             <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleCopyText}>Copy Text</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>Your Text Summarry</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} Word And {text.length} Character</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes Read</p>
            <h1>Preview</h1>
            <p>{text.length > 0 ? text:"Enter a Text In TextBox"}</p>
        </div>
        </>
    )
}