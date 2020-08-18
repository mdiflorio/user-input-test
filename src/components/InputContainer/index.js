import React, { useState } from "react";
import InputDisplay from "../InputDisplay";
import UserInput from "../UserInput";
import { isNumber } from "../../utils/helpers";

const InputContainer = () => {
    const [userInputs, setUserInputs] = useState([]);
    const [error, setError] = useState("");

    const submitUserInput = (newUserInput) => {
        setError("");

        if (newUserInput.length > 64) {
            setError("Cannot be greater than 64 characters long");
            return;
        }

        if (!isNumber(newUserInput)) {
            setError("The input can only be a number");
            return;
        }

        // Sort by largest to smallest and take only the 5 most recent user inputs.
        const updatedUserInputs = [newUserInput, ...userInputs]
            .slice(0, 5)
            .sort((a, b) => b - a);

        setUserInputs(updatedUserInputs);
    };

    return (
        <div className="m-auto">
            <UserInput submitUserInput={submitUserInput} error={error} />
            <InputDisplay userInputs={userInputs} />
        </div>
    );
};

export default InputContainer;
