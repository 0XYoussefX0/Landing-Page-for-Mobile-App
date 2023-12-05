import Button from "./Button.jsx"
import { useState } from "react"
function Newsletter() {
  const [emailInput, setEmailInput] = useState("")
  const [emailIsValid, setEmailIsValid] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch("http://localhost:8000/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailInput }),
    })
    setEmailInput("")
  }
  const handleEmailValidity = () => {
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/
    console.log(
      regex.test(emailInput),
      "checking if it is working or not",
      emailInput
    )
    if (regex.test(emailInput)) {
      setEmailIsValid(true)
    } else {
      setEmailIsValid(false)
    }
  }
  return (
    <form className="newsletterForm" method="post" onSubmit={handleSubmit}>
      <input
        className="formInput"
        type="email"
        placeholder="Email Address"
        value={emailInput}
        onChange={(e) => {
          setEmailInput(e.target.value)
          handleEmailValidity()
        }}
        required
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
      />
      <div className="absolute-position">
        <Button emailIsValid={emailIsValid} />
      </div>
    </form>
  )
}

export default Newsletter
