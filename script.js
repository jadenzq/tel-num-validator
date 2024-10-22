const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const checkUserInput = (str) => {
    
    const usTelNumRegex = /^((1|(1\s))?([0-9]{3}|\([0-9]{3}\)))(\s|\-)?[0-9]{3}(\s|\-)?[0-9]{4}$/;

    return str.match(usTelNumRegex);
}


// display validation result in results-div
checkBtn.addEventListener("click", (e) => {

    e.preventDefault();

    if (userInput.value === "") {
        alert("Please provide a phone number");
    }
    else{
        const pTag = document.createElement("p");

        if (checkUserInput(userInput.value)){
            pTag.classList.add("valid");
            pTag.innerText = `Valid US number: ${userInput.value}`;
        }
        else {
            pTag.classList.add("invalid");
            pTag.innerText = `Invalid US number: ${userInput.value}`;
        }

        userInput.value = "";
    resultsDiv.appendChild(pTag);
    }
});


// clear all p tags in results-div
clearBtn.addEventListener("click", (e) => {

    resultsDiv.innerHTML = "";

});