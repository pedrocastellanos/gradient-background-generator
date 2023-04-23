import { useState } from 'react'
import './App.css'

function App() {
  const [gradient, setGradient] = useState({
    direction: "to left top",
    inputLeftColor: "#5665E9",
    inputRightColor: "#A271F8"
  })

  const handleChange = (e)=>{
    setGradient({
      ...gradient,
      [e.target.name]: e.target.value
    })
  }

  const backgroundGradient = `linear-gradient(${gradient.direction}, ${gradient.inputLeftColor}, ${gradient.inputRightColor})`

  const handleCopy = (e) =>{
      navigator.clipboard.writeText(`background: ${backgroundGradient};`)
      e.target.innerText = "Copied!"
      setTimeout(()=>{
        e.target.innerText = "Copy Code"
      }, 2000)
  }

  const getRandomColor = () => "#" + Math.floor(Math.random()*16777215).toString(16);
  
  const handleGenerate = ()=>{
    setGradient({
      ...gradient,
      inputLeftColor: getRandomColor(),
      inputRightColor: getRandomColor()
    })
  }

  
  return (
    <div className="wrapper">
      <div className="gradient-box" style={{background: backgroundGradient}}></div>
        <div className="row options">
          <div className="column direction">
            <p>Direction</p>
            <div className="select-box">
              <select name="direction" onChange={handleChange} defaultValue={gradient.direction}>
                <option value="to top">Top</option>
                <option value="to right top">Right Top</option>
                <option value="to right">Right</option>
                <option value="to right bottom">Right Bottom</option>
                <option value="to bottom">Bottom</option>
                <option value="to left bottom">Left Bottom</option>
                <option value="to left">Left</option>
                <option value="to left top">Left Top</option>
              </select>
            </div>
          </div>
          <div className="column colors">
            <p>Colors</p>
            <div className="inputs">
              <input name="inputLeftColor" type="color" value={gradient.inputLeftColor} onChange={handleChange}/>
              <input name="inputRightColor" type="color" value={gradient.inputRightColor} onChange={handleChange}/>
            </div>
          </div>
        </div>
        <textarea disabled className="row" value={`background: ${backgroundGradient};`}></textarea>
        <div className="row buttons">
          <button className="refresh" onClick={handleGenerate}>Refresh Colors</button>
          <button className="copy" onClick={handleCopy}>Copy Code</button>
        </div>
    </div>
  )
}

export default App
