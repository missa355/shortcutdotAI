import { useEffect, useRef, useState } from 'react'
import * as tf from "@tensorflow/tfjs"
import * as handpose from "@tensorflow-models/handpose"
import './App.css'
import React from "react";
import Webcam from "react-webcam";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  return (
    <div className="App">
      <h1>Yo</h1>
      <Webcam ref={webcamRef}
      style = {{
        position: "absolute", 
        marginLeft:"auto", 
        marginRight:"auto", 
        left: 0,
        right: 0, 
        textAlign: "centre", 
        zIndex:9, 
        width: 640, 
        height: 480
      }}/>
      <canvas ref={canvasRef} 
      style = {{
        position: "absolute", 
        marginLeft:"auto", 
        marginRight:"auto", 
        left: 0,
        right: 0, 
        textAlign: "centre", 
        zIndex:9, 
        width: 640, 
        height: 480
      }}/>
    </div>
  )
}

export default App
