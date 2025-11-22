import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import About from "./component/About";
import { useState } from "react";
import Alert from "./component/Alert";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  let showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  let toggleMode=(color)=>{
    // If a specific color/mode is passed, switch to that mode.
    if(color){
      setMode(color);
      const bgMap = {
        light: 'white',
        dark: 'grey',
        red: '#8B0000',
        blue: '#617799ff',
        green: '#3c6150ff'
      }
      document.body.style.backgroundColor = bgMap[color] || 'white';
      showAlert(`${color.charAt(0).toUpperCase()+color.slice(1)} mode has been enabled`,`success`);
      return;
    }
    // default toggle between light and dark
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
      </div>
      {/* <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>} />
        </Routes>
      </div> */}
    </>
  );
}

export default App
