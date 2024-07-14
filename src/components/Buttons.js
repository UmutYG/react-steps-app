export default function Buttons({ setCurrentStep }) {
  const stepHandler = (sign) => {
    setCurrentStep((prevStep) => {
      const nextStep = sign === "next" ? prevStep + 1 : prevStep - 1
      if (nextStep > 0 && nextStep <= 3) return nextStep
      return prevStep
    })
  }

  return (
    <div className="buttons">
      <button className="previous" onClick={stepHandler.bind(null, "prev")}>
        Previous
      </button>
      <button className="next" onClick={stepHandler.bind(null, "next")}>
        Next
      </button>
    </div>
  )
}
