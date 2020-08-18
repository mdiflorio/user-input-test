import React, { useState } from "react";

const UserInput = ({ submitUserInput, error }) => {
    const [userInput, setUserInput] = useState("");

    const handleSubmitInput = (event) => {
        submitUserInput(userInput);
        setUserInput("");
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmitInput}>
            <div className="max-w-lg mx-auto p-6 bg-gray-100 mt-10 rounded-lg shadow-lg">
                {error !== "" && (
                    <p className="text-red-600 m-2 whitespace-normal">
                        {error}
                    </p>
                )}

                <div className="w-full flex">
                    <input
                        value={userInput}
                        type="number"
                        onChange={(event) => setUserInput(event.target.value)}
                        placeholder="Enter a new number"
                        className="flex-auto appearance-none bg-gray-200 text-gray-700 border rounded py-2 px-4 m-2 leading-tight focus:outline-none focus:bg-white "
                    ></input>
                    <button
                        onClick={handleSubmitInput}
                        type="submit"
                        className="flex-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 border border-blue-700 rounded"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default UserInput;
