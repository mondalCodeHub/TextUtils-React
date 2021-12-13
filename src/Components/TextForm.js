import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    //function-01- for textarea
    const onChangehandler = (event) => {
        console.log("On change handler");
        setText(event.target.value);

    }
    // function-02 -for button
    const onClickButton = () => {
        // alert("This will converted your text into uppercase ")
        console.log("Button clicked : (text=>) ", text);
        let newText = text.toUpperCase();
        // console.log(newText);
        setText(newText)
        props.showAlert("Converted into uppercase", "success");

    }


    //function-03 : lower class button
    const onLowerButton = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into lowercase", "success");

    }

    //function -4 : onClearButton ();
    const onClearButton = () => {
        let newText = ' ';
        setText(newText)
        props.showAlert("cleared", "info");

    }

    //onEncodeURI
    const onEncodeURI = () => {
        let newText = encodeURI(text);
        setText(newText)
        props.showAlert("URL Encoded", "info");

    }

    //onDecodeURI
    const onDecodeURI = () => {
        let newText = decodeURI(text);
        setText(newText)
        props.showAlert("URL Decoded", "info");

    }


    //HandleCopy-function-[not mine]
    const handleCopy = () => {
        var text = document.getElementById('myMsg');
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "info");

    }

    //removeExspace
    const removeExspace = () => {
        // let newText = text.trim();
        // console.log(newText);
        // document.getElementById('myMsg').innerHTML=newText.trim();
        // console.log(newText);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");

    }



    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.headingOne}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myMsg" rows="8" value={text} onChange={onChangehandler} style={{ backgroundColor: props.mode === 'dark' ? '#032e58' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}> </textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1 " onClick={onClickButton}>Upper case converter</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1 " onClick={onLowerButton}>Lower case converter</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1 " onClick={onEncodeURI}>Encode URl</button>
                <button disabled={text.length === 0} className="btn btn-info  mx-1 my-1 " onClick={onDecodeURI}>Decode URl</button>
                <button disabled={text.length === 0} className="btn btn-info  mx-1 my-1 " onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-info  mx-1 my-1 " onClick={removeExspace}>Remove Space</button>
                {/* <button className="btn btn-info  my-2" onClick={texClipBoard}>ClipBoard</button> */}
                {/* // Add more features  */}
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={onClearButton}>Clear Everything</button>
                <hr />
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Text Summary</h3>
                <p style={{ color: props.mode === 'dark' ? 'cyan' : 'black' }} >Total words = <b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} </b> Total characters = <b>{text.length}</b> Total sentences <b>{text.split(". ").length - 1}</b></p>
                {/* <p>Total Sentences <b></b> </p> */}

                <p style={{ color: props.mode === 'dark' ? 'cyan' : 'black' }}>Approximate time to read : <b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> Mins</p>
                <hr />
                <h3>Preveiew</h3>
                <p style={{ color: props.mode === 'dark' ? 'cyan' : 'black' }}>{text.length > 0 ? text : 'Nothing to preview'}</p>

            </div>
        </>
    )
}
//mchreact-date :23rd August 2021 //
//ARUP MONDAL (@mondalCodeHub)