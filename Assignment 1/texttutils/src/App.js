//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Form from './components/Form';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const removebodyclass = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };

  const togglemode = (cls) => {
    removebodyclass();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is Enabled", "success");
      //document.title = "TextUtils : Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is Enabled", "success");
      //document.title = "TextUtils : Light Mode"
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="textutil"
          abouttext="About"
          mode={mode}
          togglemod={togglemode}
        />
        {/*<Navbar />*/}
        <Alert Alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/About" element={<About mode={mode} />}></Route>

            <Route
              exact
              path="/"
              element={
                <TextFrom
                  showAlert={showAlert}
                  heading="Enter The Text"
                  mode={mode}
                />
              }
            ></Route>
            {/* <Route exact path="/Form" element={<Form />}></Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
