import React, { useState } from 'react'

function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        padding: '10px'
        // border : '2px solid',
        // borderColor : props.mode === 'dark'?'#042743':'white'
    }
    let codeStyle = {
        color: props.mode === 'dark' ? '#ffc107' : '#d63384',
    }
    // style={myStyle} #ffc107  rgb(248 200 55 / 83%)
    return (
        <>
            {/* <div className="container" style= {{ border : '1px solid red'}}> */}
            <div className="container my-10" >

                <h2 className='my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743', textAlign: 'center' }}>ABOUT WEBAPP</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item"  >
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                <strong> Who am i ?</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>I'm Just an average guy, with a crazy big dream
                                </strong> Currently i'm pursuing b.tech in Computer science and Engineering at JIS College of Engineering. I'm always trying to learn new things. I'm passionate about learning new things,especially developmenet.
                                After learning JavaScript i switched to react.js (JavaScript library) , and this is my first react app.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                <strong>Purpose of this webApp</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong> Simplifying things </strong> The one and only purpose of this web application is to help people across the globe. I know this is a very basic app but sometimes this webapp is very needful like you want to instanntly shorten your text URI or remove the extra space on your sentence. In future i'll add more and more features in this react app.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                <strong >Reference and Links</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong> Github : <code style={{ color: props.mode === 'dark' ? '#ffc107' : '#d63384' }}>mondalCodeHub</code></strong><br />
                                <strong> Contact Number </strong>  :<code style={{ color: props.mode === 'dark' ? '#ffc107' : '#d63384' }}> 77XXXXXXX12</code> <br />
                                <strong> Instructor : <code style={{ color: props.mode === 'dark' ? '#ffc107' : '#d63384' }}> CodeWithHarry</code></strong> <br />
                                <strong> Instagram : <code style={{ color: props.mode === 'dark' ? '#ffc107' : '#d63384' }}> mondalCodeHub(not_activated)</code></strong> <br />
                                <strong> Facebook : <code style={{ color: props.mode === 'dark' ? '#ffc107' : '#d63384' }}> fb.com/mondalCodeHub(not_activated)</code></strong> <br />
                                <strong> Telelgram : <code style={{ color: props.mode === 'dark' ? '#ffc107' : '#d63384' }}> te.com/mondalCodeHub</code></strong> <br />
                                <strong> Email : .................. <code style={{ color: props.mode === 'dark' ? '#ffc107' : '#d63384' }}> </code></strong> <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
//ARUP MONDAL (@mondalCodeHub)[30thAug]