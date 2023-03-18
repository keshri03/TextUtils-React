import React, { useState } from 'react'


export default function About(props) {

    // let myStyle={
    //     color: props.mode==='dark'?'white':'black',
    //     bacgroundColor: props.mode==='dark'?'black':'white'
    // }


    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'

    // })
    let myStyle={
        color: props.mode==='dark'?'white':'#011827',
        backgroundColor: props.mode==='dark'?'rgba(32,73,100,0.91)':'white'
    }
  

    return (
        <div className='container' >
            <h1 className='my-3' style={{color: props.mode==='dark'?'white':'#011827'}}>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed"  type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>Analyze your Text</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils give you a way to analyze your text quickly and efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is free character counter tool that provides instant character count and word count ststistics.


                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Browser comaptible</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
