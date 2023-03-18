// import './App.css';np
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import { 
  BrowserRouter as Router,
   Route, 
   Routes
  } from "react-router-dom";
 



function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const changegreen = ()=>{
    document.body.style.backgroundColor = '#35C649'
  }
  const changeyellow = ()=>{
    document.body.style.backgroundColor = '#CAB911'
  }
  const changered = ()=>{
    document.body.style.backgroundColor = '#C15031'
  }
  
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);

  }

  const toggleMode = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#011827e8';
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
    }
  }
  return (
    <>
  
  <Router>
  {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
<Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} changegreen={changegreen} changeyellow={changeyellow} changered={changered} />
<Alert alert={alert} />
<div className="container mt-3">
  <Routes>
    <Route exact path="/about" element={<About mode={Mode} />}> </Route>
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils- Word counter, character counter, Remove extra spaces" mode={Mode}/>}> </Route>
    </Routes>
</div>
</Router>
  </>   
  );
}

export default App;
