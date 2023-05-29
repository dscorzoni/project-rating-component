// Finding Elements

const submitButton = document.querySelector("button");
const votingPage = document.querySelector(".voting-page");
const resultPage = document.querySelector(".result-page");
const radioOption = document.querySelectorAll("[name=rating]");
const displayResult = document.querySelector(".display-result");


// Adding events listener;

submitButton.addEventListener('click', (e) => {
    // Preventing form to be submitted and page refreshed
    e.preventDefault();
    
    // Iterating over each radio button option
    radioOption.forEach((option) => {
        // Changing the span tag on results page with the selected option
        if (option.checked) {
            displayResult.innerHTML = option.value;
        }
    })
    // Hiding voting page and showing result page
    votingPage.classList.toggle('hidden');
    resultPage.classList.toggle('hidden');
})
