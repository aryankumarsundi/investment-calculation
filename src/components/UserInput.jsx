import { useState } from "react";
export default function UserInput({onUserInput, userInputs}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initail Investment</label>
                    <input type="number" required onChange={(e) => onUserInput('initialInvestment', e.target.value)} value={userInputs.initialInvestment}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required onChange={(e) => onUserInput('annualInvestment', e.target.value)} value={userInputs.annualInvestment}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required onChange={(e) => onUserInput('expectedReturn', e.target.value)} value={userInputs.expectedReturn}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required onChange={(e) => onUserInput('duration', e.target.value)} value={userInputs.duration}/>
                </p>
            </div>
        </section>
    );
}