import { useState } from "react"
import "./App.css"
import Buttons from "./components/Buttons"
import Numbers from "./components/Numbers"

const messages = [
  " React öğren ⚛️",
  "İşlere başvur 💼",
  "Paran ile yatırım yap 🤑",
]

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <div className="steps">
      <Numbers currentStep={currentStep} />
      <p className="message">
        {`Step ${currentStep}: ${messages[currentStep - 1]}`}
      </p>
      <Buttons currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  )
}

export default App
