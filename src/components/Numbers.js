export default function Numbers({ currentStep }) {
  return (
    <div className="numbers">
      <Number
        className={`steps-1 ${currentStep >= 1 ? "active" : ""}`}
        value={1}
      />
      <Number
        className={`steps-2 ${currentStep >= 2 ? "active" : ""}`}
        value={2}
      />
      <Number
        className={`steps-3 ${currentStep >= 3 ? "active" : ""}`}
        value={3}
      />
    </div>
  )
}

function Number({ className, value }) {
  return <div className={className}>{value}</div>
}
