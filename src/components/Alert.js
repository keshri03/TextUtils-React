import React from 'react'

export default function Alert(props) {
    const capitalise=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);

    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}
   
</div>
  )
}

{/* <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container mt-3">
  <Routes>
    <Route exact path="/about" element={<About />}> </Route>
    <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />}></Route>
  </Routes>
</div>
</Router>
</>

this is my code which is working just fine check it and make correction in your code agar ab bhi error aaye to....

1. react router ka dom ka latest version install h ki nhi check krna ya dobara install kr lena
2. kuch syntex error kr rakhi hogi khi pe dhyan se dekho ho jati h kabhi kabhi mistake aur pta nhi chlta h
3. import bhi check kr lena 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; */}
