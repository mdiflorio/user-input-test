import React from "react";

const InputDisplay = ({ userInputs }) => (
    <div className="max-w-lg mt-10 mx-auto p-6 bg-gray-100 p-10 rounded-lg shadow-lg">
        <h3 className="font-bold text-xl mb-2">Numbers</h3>
        {userInputs.map((userInput, index) => (
            <p className="mt-2 break-all" key={index}>
                {userInput}
            </p>
        ))}
    </div>
);

export default InputDisplay;
