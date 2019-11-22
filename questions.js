// Set up question pages
// Include a space for the score
// Keep track of which question they're on
// Allow the page to refresh when user chooses

// Create a variable for the user's score
let score = 0;
// Create variable to store user's choice.
let choice;

// Abstract the clicked button, and add an event listener to store the value of the choice variable when clicked
function selectAns(event) {
    choice = event.target.id;
}
document.querySelector(".nested").addEventListener("click", (event) => {
    choice = event.target.id;
    answer();
});



const openResults = document.getElementById("finResults");
const modal = document.getElementById("modal");
const closeResults = document.getElementById("close");

// Establish functions to open and close modal
const openModal = () => {
    modal.style.display = "block";
};

const closeModal = (evt) => {
    evt.preventDefault();
}

// Include two buttons in the results modal
// One button to exit the game which takes you back to the start up page
// Another button to the questions
// Add event listeners to buttons to run above functions
openResults.addEventListener("click", openModal);
closeResults.addEventListener("click", closeModal);

// Make a function to evaluate the user's choice, whether it is right or wrong, and award points accordingly.
function answer() {
    if (choice === qArr[index].correct) {
        score += 100;
        document.getElementById("results").innerHTML = `Great job!`
    } else {
        document.getElementById("results").innerText = `Wrong! The correct answer is ${qArr[index].rightAns}.`
    }
}
// Make a variable for the class instance index for an event listener to update everything once the next button is clicked.
let index = 0;

// Make a variable for the Next button
let next = document.querySelector("#next");

// Make an event listener to advance to the next question and clear the previous question's stored data

next.addEventListener("click", (event) => {
    if (index < qArr.length - 1) {
        choice = "";
        index += 1
        openResults.style.display = "none";
        document.getElementById("results").innerHTML = "";
        document.getElementById("pic").src = qArr[index].currentPic;
        document.getElementById("triviaQs").innerHTML = qArr[index].question;
        document.getElementById("buttonA").innerHTML = qArr[index].choiceA;
        document.getElementById("buttonB").innerHTML = qArr[index].choiceB;
        document.getElementById("buttonC").innerHTML = qArr[index].choiceC;
        document.getElementById("buttonD").innerHTML = qArr[index].choiceD;
        // Update score and question number
        document.getElementById("score").innerHTML = score;
        document.getElementById("qNum").innerHTML = qArr[index].currentNum;
    } else {
        event.preventDefault();
        next.style.display = "none";
        openResults.style.display = "block";
        // Consolidate 264-268 to a function using the index
        function resultsModal (score) {
            document.getElementById("resultsHead").innerHTML = finalResults[0].resultsName;
            document.getElementById("finalImg").src = finalResults[0].resultsFace;
            document.getElementById("resultsPgr").innerHTML = finalResults[0].resultsPara;
            document.getElementById("finalImg").alt = finalResults[0].resultsAlt;
        }

        if (score <= 300) {
            let finalScore = 0
            // Make this into an object
            document.getElementById("resultsHead").innerHTML = finalResults[0].resultsName;
            document.getElementById("finalImg").src = finalResults[0].resultsFace;
            document.getElementById("resultsPgr").innerHTML = finalResults[0].resultsPara;
            document.getElementById("finalImg").alt = finalResults[0].resultsAlt;
        } else if (score < 800) {
            document.getElementById("resultsHead").innerHTML = finalResults[1].resultsName;
            document.getElementById("finalImg").src = finalResults[1].resultsFace;
            document.getElementById("resultsPgr").innerHTML = finalResults[1].resultsPara;
            document.getElementById("finalImg").alt = finalResults[1].resultsAlt;
        } else if (score < 1200) {
            document.getElementById("resultsHead").innerHTML = finalResults[2].resultsName;
            document.getElementById("finalImg").src = finalResults[2].resultsFace;
            document.getElementById("resultsPgr").innerHTML = finalResults[2].resultsPara;
            document.getElementById("finalImg").alt = finalResults[2].resultsAlt;
        } else {
            document.getElementById("resultsHead").innerHTML = finalResults[3].resultsName;
            document.getElementById("finalImg").src = finalResults[3].resultsFace;
            document.getElementById("resultsPgr").innerHTML = finalResults[3].resultsPara;
            document.getElementById("finalImg").alt = finalResults[3].resultsAlt;
        }
    }
})

function startQs() {
    // for (let i = 0; i < qArr.length; i++) {
        function updateImage() {
            document.getElementById("pic").src = qArr[0].currentPic;
        }
        updateImage();

        openResults.style.display = "none";
        document.getElementById("triviaQs").innerHTML = qArr[0].question;
        document.getElementById("buttonA").innerHTML = qArr[0].choiceA;
        document.getElementById("buttonB").innerHTML = qArr[0].choiceB;
        document.getElementById("buttonC").innerHTML = qArr[0].choiceC;
        document.getElementById("buttonD").innerHTML = qArr[0].choiceD;
        // Update score and question number
        document.getElementById("score").innerHTML = score;
        document.getElementById("qNum").innerHTML = qArr[0].currentNum;

    // }
}
startQs();

