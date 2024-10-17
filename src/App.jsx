import { useState } from "react";
import Header from "./components/header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {

  const [userInputs, setUserInputs] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
  });

  function handleUserInput(inputIdentifier, newValue) {
    setUserInputs({
      ...userInputs,
      [inputIdentifier]: +newValue
    })
  }

  const validDuration = userInputs.duration > 0;
  return (
    <>
      <Header />
      <UserInput onUserInput={handleUserInput} userInputs={userInputs}/>
      { !validDuration && <p className="center error">Please enter a valid duration</p> }
      { validDuration && <Results input={userInputs}/> }
    </>
  );
}

export default App;
