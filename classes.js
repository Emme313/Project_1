// Make a Question object so that you can iterate through an array of instances
// Update the image with each question
// Update Questions to Question
// Use an object and update to this.choices instead of lines 29-32
class Question {
    constructor(currentPic, currentNum, question, choices, correct, rightAns) {
        this.currentPic = currentPic;
        this.currentNum = currentNum;
        this.question = question;
        this.choices = {
            choices: [ 
            "choiceA",
            "choiceB",
            "choiceC",
            "choiceD"]
        };
        this.correct = correct;
        this.rightAns = rightAns;
    }
}

// Make a variable for the array of Question/class instances
// Update to questionsArray
const questionsArray = [
    new Questions(
        "./images/GG_1.jpeg",
        "1",
        "What is the name of the retirement home where Sophia stayed?",
        "Shady Business",
        "Shaded Pines",
        "Shady Pines",
        "Shady Palms",
        "buttonC",
        "Shady Pines"),

    new Question(
        "./images/GG_2.webp",
        "2",
        "Why did Sophia have to leave Shady Pines?",
        "She violated the terms",
        "It burned down",
        "Her roommate died",
        "The facility was shut down",
        "buttonB",
        "that it burned down"),

    new Question(
        "./images/GG_3.jpg",
        "3",
        "What tastes great if you eat it while holding your nose?",
        "Herring Krispies",
        "Herring Chunkies",
        "Herring Tarts",
        "Herring Crisps",
        "buttonA",
        "Herring Krispies"),

    new Question(
        "./images/GG_4.jpg",
        "4",
        "Complete this lyric: Miami, Miami, you’ve got style…",
        "...You’re cuter than an intrauterine.",
        "...So I'll say it thrice.",
        "...Palm trees, sunshine, great sand by the mile.",
        "...Blue skies, sunshine, white sand by the mile.",
        "buttonD",
        "...Blue skies, sunshine, white sand by the mile"),

    new Question(
        "./images/GG_5.jpg",
        "5",
        "Finish this quote: “There are two things in this world a Sicilian knows. When pasta sticks to a wall, it’s done…",
        "...When a body sticks to cement, it's dead.",
        "...When a body sticks to the ground, it's dead.",
        "...When a body sticks to its clothes, it's dead.",
        "...When a body sticks to the tennis court, it's dead.",
        "buttonA",
        "...When a body sticks to cement, it's dead"),

    new Question(
        "./images/GG_6.jpg",
        "6",
        "What curse did Sophia put on her late husband's best friend, Max?",
        "That he tripped over his shoes every morning",
        "That his socks would forever fall down",
        "That all his wives would cheat",
        "That his ears would never pop on an airplane",
        "buttonB",
        "that his socks would forever fall down"),

    new Question(
        "./images/GG_7.jpg",
        "7",
        "What profession did Sophia's brother/Dorothy's uncle Angelo falsely claim?",
        "Vacuum Salesman",
        "Entrepreneur",
        "Lawyer",
        "Priest",
        "buttonD",
        "priest"),

    new Question(
        "./images/GG_8.png",
        "8",
        "How did Rose's late husband Charlie die?",
        "Of old age",
        "In a car accident",
        "Of a heart attack during an act of intimacy",
        "While serving the country",
        "buttonC",
        "a heart attack during an act of intimacy"),

    new Question(
        "./images/GG_9.jpg",
        "9",
        "What nickname did Sophia’s late husband tell her to call Dorothy that only he would know?",
        "Moose",
        "Spumoni Face",
        "Tortellini",
        "Spaghetti Face",
        "buttonB",
        "Spumoni Face"),

    new Question(
        "./images/GG_10.JPG",
        "10",
        "Actor Harold Gould played Rose's boyfriend twice! What were their names?",
        "Arnie/Miles",
        "Arnold/Milton",
        "Arnie/Milton",
        "Arnold/Miles",
        "buttonA",
        "Arnie/Miles"),

    new Question(
        "./images/GG_11.jpg",
        "11",
        "What type of prize animal did Rose's Uncle Higgeblotter leave her upon his death?",
        "Horse",
        "Goat",
        "Sheep",
        "Pig",
        "buttonD",
        "that Baby was a pig"),

    new Question(
        "./images/GG_12.jpg",
        "12",
        "Who played the officer who got shot during an undercover sting in which the Girls helped?",
        "Burt Reynolds",
        "George Clooney",
        "Mario Lopez",
        "Leslie Nielsen",
        "buttonB",
        "George Clooney"),

    new Question(
        "./images/GG_13.jpg",
        "13",
        "What item does Dorothy find under her bed that the housekeeper Marguerite says is to help her get restful sleep?",
        "A painted rock",
        "A scented candle",
        "A sack of relics",
        "A painted figurine",
        "buttonA",
        "Sophia's painted rock"),

    new Question(
        "./images/GG_14.jpg",
        "14",
        "What body part of Rose's prized teddy bear does Sunshine Cadet Daisy send back as a threat?",
        "Nose",
        "Foot",
        "Ear",
        "Hand",
        "buttonC",
        "an ear"),

    new Question(
        "./images/GG_15.webp",
        "15",
        "Name the actresses from youngest to oldest in real life, using their characters' names:",
        "Sophia, Dorothy, Blanche, Rose",
        "Blanche, Sophia, Dorothy, Rose",
        "Dorothy, Blanche, Sophia, Rose",
        "Rose, Dorothy, Sophia, Blanche",
        "buttonB",
        "Blanche, Sophia, Dorothy, then Rose"),
]

class Final {
    constructor(resultsName, resultsFace, resultsPara, resultsAlt) {
        this.resultsName = resultsName;
        this.resultsFace = resultsFace;
        this.resultsPara = resultsPara;
        this.resultsAlt = resultsAlt;
    }
}

// Make a variable for the array of results/class instances
const finalResults = [
    new Final(
        "You scored like Rose Nylund",
        "./images/Rose.jpg",
        "What a ditz! Did you even watch this show?",
        "Rose Nylund of The Golden Girls"),

    new Final(
        "You scored like Blanche Devereaux",
        "./images/Blanche.jpg",
        "Well, some people are only good at one thing, and this ain’t it for you.",
        "Blanche Devereaux of The Golden Girls"),

    new Final(
        "You scored like Sophia Petrillo",
        "./images/Sophia.jpg",
        "While you have a sharp wit, it wasn’t quite sharp enough for The Golden Girls Trivia!",
        "Sophia Petrillo of The Golden Girls"),

    new Final(
        "You scored like Dorothy Zbornak",
        "./images/Dorothy.jpg",
        "Well, you’ve certainly got the brains to be a substitute teacher! Congratulazioni!",
        "Dorothy Zbornak of The Golden Girls")
]
