//Turns HTML elements into variables to make them easier to access
const displayBox = document.getElementById("text-display");
const inputBox = document.getElementById("input-box");
const timerText = document.getElementById("timer");
const selectionContainer = document.getElementById("selection-button-container");

//Test Selection Screen Buttons
const randomWordsButton = document.getElementById("select-random-words-button");
const quotesButton = document.getElementById("select-quotes-button");
const paragraphsButton = document.getElementById("select-paragraphs-button");

const timeButton = document.getElementById("select-time-button");
const textButton = document.getElementById("select-text-button");

const limit1Button = document.getElementById("limit-1-button");
const limit2Button = document.getElementById("limit-2-button");
const limit3Button = document.getElementById("limit-3-button");
const limit4Button = document.getElementById("limit-4-button");


//List of top 200 words used for tests with the "Random Words" text type
const wordsList = ["the", "be", "of", "and", "a", "to", "in", "he", "have", "it", "that", "for", "they", "I", "with", "as", "not", "on", "she", "at", "by", "this", "we", "you", "do", "but", "from", "or", "which", "one", "would", "all", "will", "there", "say", "who", "make", "when", "can", "more", "if", "no", "man", "out", "other", "so", "what", "time", "up", "go", "about", "than", "into", "could", "state", "only", "new", "year", "some", "take", "come", "these", "know", "see", "use", "get", "like", "then", "first", "any", "work", "now", "may", "such", "give", "over", "think", "most", "even", "find", "day", "also", "after", "way", "many", "must", "look", "before", "great", "back", "through", "long", "where", "much", "should", "well", "people", "down", "own", "just", "because", "good", "each", "those", "feel", "seem", "how", "high", "too", "place", "little", "world", "very", "still", "nation", "hand", "old", "life", "tell", "write", "become", "here", "show", "house", "both", "between", "need", "mean", "call", "develop", "under", "last", "right", "move", "thing", "general", "school", "never", "same", "another", "begin", "while", "number", "part", "turn", "real", "leave", "might", "want", "point", "form", "off", "child", "few", "small", "since", "against", "ask", "late", "home", "interest", "large", "person", "end", "open", "public", "follow", "during", "present", "without", "again", "hold", "govern", "around", "possible", "head", "consider", "word", "program", "problem", "however", "lead", "system", "set", "order", "eye", "plan", "run", "keep", "face", "fact", "group", "play", "stand", "increase", "early", "course", "change", "help", "line"];

const quotesList = ["There is only one good, knowledge, and one evil, ignorance.", "It is one thing to show a man that he is in error, and another to put him in possession of truth.", "He who thinks great thoughts, often makes great errors.", "No man's knowledge here can go beyond his experience.", "It is the mark of an educated mind to be able to entertain a thought without accepting it.", "Whenever you point your finger at someone, you have three pointed at yourself.", "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.", "The great aim of education is not knowledge but action.", "Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.", "The person attempting to travel two roads at once will get nowhere.", "Nothing great in the world has ever been accomplished without passion", "No man ever steps in the same river twice, for it's not the same river and he's not the same man.", "I think, therefore I am.", "The only true wisdom is in knowing you know nothing.", "There is no easy way from the earth to the stars.", "The highest activity a human being can attain is learning for understanding, because to understand is to be free.", "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.", "The flame that burns Twice as bright burns half as long.", "The happiness of your life depends upon the quality of your thoughts.", "The greater the difficulty, the more glory in surmounting it.", "If you don’t sacrifice for what you want, what you want becomes the sacrifice…"];

const paragraphsList = ["He walked down the steps from the train station in a bit of a hurry knowing the secrets in the briefcase must be secured as quickly as possible. Bounding down the steps, he heard something behind him and quickly turned in a panic. There was nobody there but a pair of old worn-out shoes which were placed neatly on the steps he had just come down from. Had he passed them without seeing them? It didn't seem possible. He was about to turn and be on his way when a deep chill filled his body.",
                        "Green vines attached to the trunk of the tree had wound themselves toward the top of the canopy. Ants used the vine as their private highway, avoiding all the creases and crags of the bark, to freely move at top speed from top to bottom or bottom to top depending on their current chore. At least this was the way it was supposed to be. Something had damaged the vine overnight halfway up the tree leaving a gap in the once pristine ant highway.",
                        "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
                        "The wave roared towards them with speed and violence they had not anticipated. They both turned to run but by that time it was too late. The wave crashed into their legs sweeping both of them off of their feet. They now found themselves in a washing machine of saltwater, getting tumbled and not knowing what was up or down. Both were scared, not knowing how this was going to end, but it was by far the best time of the trip thus far.",
                        "The rain was coming. Everyone thought this would be a good thing. It hadn't rained in months and the earth was dry as a bone. It wasn't a surprise that everyone thought a good rain was what was needed, but they never expected how much rain would actually arrive.",
                        "Sometimes that's just the way it has to be. Sure, there were probably other options, but he didn't let them enter his mind. It was done and that was that. It was just the way it had to be.",
                        "It was a good idea. At least, they all thought it was a good idea at the time. Hindsight would reveal that in reality, it was an unbelievably terrible idea, but it would take another week for them to understand that. Right now, at this very moment, they all agreed that it was the perfect course of action for the current situation.",
                        "Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.",
                        "The choice was red, green, or blue. It didn't seem like an important choice when he was making it, but it was a choice nonetheless. Had he known the consequences at that time, he would likely have considered the choice a bit longer. In the end, he didn't and ended up choosing blue.", 
                        "Dave found joy in the daily routine of life. He awoke at the same time, ate the same breakfast and drove the same commute. He worked at a job that never seemed to change and he got home at 6 pm sharp every night. It was who he had been for the last ten years and he had no idea that was all about to change."];

var totalCharacters = 0;
var correctCharacters = 0;
var runningTotalCharacters = 0;
var runningCorrectCharacters = 0;
var seconds = 0;

var selectedLimit = 1;
var textType = "randomWords";
var limitType = "text";

var testsTaken = 0;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Test Selection Screen Button Functions


//Function activated by clicking the Random Words button
function selectRandomWords() {
    textType = "randomWords"; //Sets text type to random words

    limitTextChanger(); //Changes limit buttons
    //Changes colour of random words button to indicate it has been selected
    randomWordsButton.style.backgroundColor = "#031B26";
    randomWordsButton.style.color = "#1CC4A8";

    //Changes colour of other buttons to their default colours
    quotesButton.style.backgroundColor = "#354045";
    quotesButton.style.color = "#DFD3CD";
    paragraphsButton.style.backgroundColor = "#354045";
    paragraphsButton.style.color = "#DFD3CD";

    limitGetter();
    console.log(limit)
}


//Function activated by clicking the Quotes button
function selectQuotes() {
    textType = "quotes"; //Sets text type to quotes

    limitTextChanger(); //Changes limit buttons
    //Changes colour of quotes button to indicate it has been selected
    quotesButton.style.backgroundColor = "#031B26";
    quotesButton.style.color = "#1CC4A8";

    //Changes colour of other buttons to their default colours
    randomWordsButton.style.backgroundColor = "#354045";
    randomWordsButton.style.color = "#DFD3CD";
    paragraphsButton.style.backgroundColor = "#354045";
    paragraphsButton.style.color = "#DFD3CD";

    limitGetter();
    console.log(limit)
}


//Function activated by clicking the Paragraphs button
function selectParagraphs() {
    textType = "paragraphs"; //Sets text type to paragraphs

    limitTextChanger(); //Changes limit buttons
    //Changes colour of paragraphs button to indicate it has been selected
    paragraphsButton.style.backgroundColor = "#031B26";
    paragraphsButton.style.color = "#1CC4A8";

    //Changes colour of other buttons to their default colours
    randomWordsButton.style.backgroundColor = "#354045";
    randomWordsButton.style.color = "#DFD3CD";
    quotesButton.style.backgroundColor = "#354045";
    quotesButton.style.color = "#DFD3CD";

    limitGetter();
    console.log(limit)
}



//Function activated by clicking the Time button
function selectTime() {
    limitType = "time"; //Sets limit type to time

    limitTextChanger() //Changes limit buttons
    //Changes colour of time button to indicate it has been selected
    timeButton.style.backgroundColor = "#031B26";
    timeButton.style.color = "#1CC4A8";

    //Changes colour of the other button to default colour
    textButton.style.backgroundColor = "#354045";
    textButton.style.color = "#DFD3CD";

    limitGetter();
    console.log(limit)
}

//Function activated by clicking the Text button
function selectText() {
    limitType = "text"; //Sets limit type to text

    limitTextChanger(); //Changes limit buttons
    //Changes colour of text button to indicate it has been selected
    textButton.style.backgroundColor = "#031B26";
    textButton.style.color = "#1CC4A8";

    //Changes colour of the other button to default colour
    timeButton.style.backgroundColor = "#354045";
    timeButton.style.color = "#DFD3CD";

    limitGetter();
    console.log(limit)
}


//Functions activated by clicking the limit buttons
function selectLimit1() {
    selectedLimit = 1 //Change limit to the limit of the selected button

    limit1Button.style.backgroundColor = "#031B26";
    limit1Button.style.color = "#1CC4A8";

    limit2Button.style.backgroundColor = "#354045";
    limit2Button.style.color = "#DFD3CD";
    limit3Button.style.backgroundColor = "#354045";
    limit3Button.style.color = "#DFD3CD";
    limit4Button.style.backgroundColor = "#354045";
    limit4Button.style.color = "#DFD3CD";

    limitGetter();
    console.log(limit)
}

function selectLimit2() {
    selectedLimit = 2 //Change limit to the limit of the selected button

    limit2Button.style.backgroundColor = "#031B26";
    limit2Button.style.color = "#1CC4A8";

    limit1Button.style.backgroundColor = "#354045";
    limit1Button.style.color = "#DFD3CD";
    limit3Button.style.backgroundColor = "#354045";
    limit3Button.style.color = "#DFD3CD";
    limit4Button.style.backgroundColor = "#354045";
    limit4Button.style.color = "#DFD3CD";

    limitGetter();
    console.log(limit)
}

function selectLimit3() {
    selectedLimit = 3 //Change limit to the limit of the selected button

    limit3Button.style.backgroundColor = "#031B26";
    limit3Button.style.color = "#1CC4A8";

    limit1Button.style.backgroundColor = "#354045";
    limit1Button.style.color = "#DFD3CD";
    limit2Button.style.backgroundColor = "#354045";
    limit2Button.style.color = "#DFD3CD";
    limit4Button.style.backgroundColor = "#354045";
    limit4Button.style.color = "#DFD3CD";

    limitGetter();
    console.log(limit)
}

function selectLimit4() {
    selectedLimit = 4 //Change limit to the limit of the selected button

    limit4Button.style.backgroundColor = "#031B26";
    limit4Button.style.color = "#1CC4A8";

    limit1Button.style.backgroundColor = "#354045";
    limit1Button.style.color = "#DFD3CD";
    limit2Button.style.backgroundColor = "#354045";
    limit2Button.style.color = "#DFD3CD";
    limit3Button.style.backgroundColor = "#354045";
    limit3Button.style.color = "#DFD3CD";

    limitGetter();
    console.log(limit)
}

//Gets the limit from the currently selected limit button
function limitGetter(){
    switch(selectedLimit){
        case 1:
            limit = limit1Button.innerText;
            break;
        case 2:
            limit = limit2Button.innerText;
            break;
        case 3:
            limit = limit3Button.innerText;
            break;
        case 4:
            limit = limit4Button.innerText;
            break;
    }
}



//Function to change the text of the limit buttons depending on the test types
function limitTextChanger(){
    //Changes limit buttons for the Random Words Text Limit
    if(textType == "randomWords" && limitType == "text") {
        limit1Button.innerText = "10";
        limit2Button.innerText = "20";
        limit3Button.innerText = "50";
        limit4Button.innerText = "100";


    }

    //Changes limit buttons for the Paragraphs or Quotes Text Limit
    else if((textType == "paragraphs" || textType == "quotes") && limitType == "text"){
        limit1Button.innerText = "1";
        limit2Button.innerText = "2";
        limit3Button.innerText = "3";
        limit4Button.innerText = "4";


    }

    else if((limitType == "time")){
        limit1Button.innerText = "15";
        limit2Button.innerText = "30";
        limit3Button.innerText = "60";
        limit4Button.innerText = "120";


    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//Function to generate random text
function generateRandomText(textList, textLimit) {
    var generatedText = []; //Initially empty as no text generated
    for (let i = 0; i < textLimit; i++) { //Loop to generate number of texts corresponding to textLimit
        let index = Math.floor(Math.random() * textList.length); //Picks a random number to use as index 
        generatedText.push(textList[index]); //Uses random index to select a random text and add it to the array
    }
    return generatedText.join(" "); //Returns generated text and removes commas
}


//Timer function
function startTimer() {
    timer = setInterval(updateTimer, 100);//updateTimer called every 0.1 seconds
}
//Function called when the timer counts up
function updateTimer() {
    if(limitType == "text"){ //For text limit tests
    seconds = seconds + 0.1; //Increment by 1/10ths of a second
    timerText.innerHTML = seconds.toFixed(1); //Change timer text to rounded timer value
    }
    else if(limitType == "time"){ //For time limit tests
        seconds = seconds + 0.1; //Increment by 1/10ths of a second
        timerText.innerHTML = (limit - seconds).toFixed(1) //Timer counts down instead of up
        if(seconds >= limit){ //If timer has exceeded the time limit
            runningTotalCharacters = runningTotalCharacters + totalCharacters;
            runningCorrectCharacters = runningCorrectCharacters + correctCharacters;
            testEnder(); //End test
        }
    }
}




//Checks each character that is typed 
function characterChecker() {
    //Creates arrays from input and display boxes
    const displayArray = displayBox.querySelectorAll("span");
    const inputArray = inputBox.value.split("");
    var correctCharacterCount = 0; //Initially correct characters are 0
    var totalCharacterCount = 0; //Initially total characters are 0
    //Performed for each value in displayArray
    displayArray.forEach((characterSpan, index) => {
        const character = inputArray[index];//Selects current character
        if (character == null) { //If character not typed yet
            //Ensures colour of character is default
            characterSpan.classList.remove("correctCharacter");
            characterSpan.classList.remove("incorrectCharacter");
        }
        else if (character === characterSpan.innerText) { //If correct
            //Changes colour of character
            characterSpan.classList.add("correctCharacter");
            characterSpan.classList.remove("incorrectCharacter");
            //Increment correct and total character count
            correctCharacterCount = correctCharacterCount + 1;
            totalCharacterCount = totalCharacterCount + 1;
            //console.log("Correct:", correctCharacterCount);
            //console.log("Total", totalCharacterCount);
        }
        else { //If incorrect
            //Changes colour of character
            characterSpan.classList.remove("correctCharacter");
            characterSpan.classList.add("incorrectCharacter");
            //Increment total character count
            totalCharacterCount = totalCharacterCount + 1
            //console.log("Total", totalCharacterCount);
        }
    }
    )
    correctCharacters = correctCharacterCount
    totalCharacters = totalCharacterCount
}


//Calls other functions each time a character is typed
function typingDetector() {
    //Detects when a character is typed in the input box
    inputBox.addEventListener("input", () => {
        characterChecker();
        endOfTextChecker();
    })
}



//Generates text and splits the individual characters so their colours can be changed
function textGenerateAndSplit() {
    if(limitType == "text"){
        if(textType == "randomWords"){
            displayText = generateRandomText(wordsList, limit);
        }
        else if(textType == "quotes"){
            displayText = generateRandomText(quotesList, 1); //Only 1 quote generated each time
        }
        else if(textType == "paragraphs"){
            displayText = generateRandomText(paragraphsList, 1); //Only 1 paragraph generated each time
        }
    }
    else if(limitType == "time"){
        if(textType == "randomWords"){
            displayText = generateRandomText(wordsList, 50); //50 Words generated each time
        }
        else if(textType == "quotes"){
            displayText = generateRandomText(quotesList, 1); //1 quote generated each time
        }
        else if(textType == "paragraphs"){
            displayText = generateRandomText(paragraphsList, 1); //1 paragraph generated each time
        }
    }
    displayText.split("").forEach(character => { //Splits text into characters
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character;
        displayBox.appendChild(characterSpan); //Displays each character on screen
    })
}



//Checks if the user has typed all the text in the display box
function endOfTextChecker(){ 
    //Checks if the number of displayed characters has been typed
    if((displayBox.innerText).length === totalCharacters){
        if(limitType == "text" && textType == "randomWords"){ //For randomWords text type tests, this ends the test
            testEnder();
        }
        else if(limitType == "time"){ //For time limit tests, this generates new text
            runningCorrectCharacters = runningCorrectCharacters + correctCharacters
            runningTotalCharacters = runningTotalCharacters + totalCharacters
            displayBox.innerHTML = "";
            inputBox.value = "";
            textGenerateAndSplit();
        }
        else if(textType == "quotes" || textType == "paragraphs"){
            textCount = textCount + 1 //Icrement textCount
            if(textCount < limit){ //If more quotes / paragraphs left to be typed
                runningCorrectCharacters = runningCorrectCharacters + correctCharacters
                runningTotalCharacters = runningTotalCharacters + totalCharacters
                displayBox.innerHTML = "";
                inputBox.value = "";
                textGenerateAndSplit();
            }
            else if(textCount == limit){ //If final quote / paragraph was typed
                runningCorrectCharacters = runningCorrectCharacters + correctCharacters
                runningTotalCharacters = runningTotalCharacters + totalCharacters
                testEnder();
            }
        }
        
    }
}



function testEnder(){
    inputBox.style.display = "none"; //Makes the input box invisible
    displayBox.style.height = "auto"; //Increases size of displayBox
    displayBox.style.fontSize = "50px";
    



    //Display Results
    if(limitType == "text"){
        time = timerText.innerHTML

        if(textType == "quotes" || textType == "paragraphs"){
            correctCharacters = runningCorrectCharacters;
            totalCharacters = runningTotalCharacters;
        }
    }
    else if(limitType == "time"){
        time = limit //The time taken to complete a time limit test is always the limit
        correctCharacters = runningCorrectCharacters;
        totalCharacters = runningTotalCharacters;
    }

    myWpm = WPMcalculator(correctCharacters,time);


    displayBox.innerText = ("WPM: " + WPMcalculator(correctCharacters,time)) + "\n"
                             + "Accuracy: " + accuracyCalculator(totalCharacters, correctCharacters) + "%" + "\n"
                            + "Time: " + time + "s" + "\n"
                            + "Experience Gained: " + correctCharacters + "\n"
                            + "Characters: ";



    //Sends results to database
    var results = {};
    results.wpm = WPMcalculator(correctCharacters,time);
    results.accuracy = accuracyCalculator(totalCharacters, correctCharacters);
    results.time = time;
    results.textType = textType;
    results.limitType = limitType;
    results.limitValue = limit; 
    results.experienceGained = correctCharacters;



    $.ajax({
        url: "insert.php",
        type: "POST",
        data: results,
        success: function(response) {
            console.log(response);
        },
        error: function(xhr, status, error) {
            console.log(error);
        }
    });

    //Displays the number of correct characters in a blue colour
    const correctSpan = document.createElement("span2");
    correctSpan.innerText = correctCharacters;
    displayBox.appendChild(correctSpan);
    correctSpan.classList.add("correctCharacter");

    displayBox.append(" | ") //Adds divider between correct and incorrect character numbers

    //Display the number of incorrect characters in a red colour
    const incorrectSpan = document.createElement("span2");
    incorrectSpan.innerText = (totalCharacters - correctCharacters);
    displayBox.appendChild(incorrectSpan)
    incorrectSpan.classList.add("incorrectCharacter")
    incorrectSpan.style.textDecoration = "none";

    clearInterval(timer); //Stops the timer
    timerText.innerText = "Test Completed"; //Changes timer text to signify that the test has ended
    

}   




//Calculates typing speed
function WPMcalculator(characters, seconds){
    words = characters / 5; //Converts characters into words
    minutes = seconds / 60; //Converts seconds into minutes
    wpm = words / minutes; //Calculates words per minute
    return(Math.round(wpm)); //Returns rounded wpm
}


//Calculates accuracy
function accuracyCalculator(totalCharacters, correctCharacters){
    accuracy = ((correctCharacters / totalCharacters) * 100);
    return(Math.round(accuracy)); //Return rounded accuracy
}



//Function that is called when a test is started
function startTest() { 

    //Resets all counts to 0
    seconds = 0;
    runningTotalCharacters = 0;
    runningCorrectCharacters = 0;
    textCount = 0;
    correctCharacters = 0;
    totalCharacters = 0;

    selectionContainer.style.display = "none"; //Hides selection screen
    displayBox.style.display = "block";
    displayBox.innerHTML = ""; //Clears display box

    //Change displayBox to original style
    displayBox.style.height = "auto";
    displayBox.style.fontSize = "30px";

    
    textGenerateAndSplit();
    inputBox.removeEventListener("input", characterChecker); //Removes previous event listener
    inputBox.value = ""; //Clears input box
    inputBox.style.display = "block"; //Displays input box
    typingDetector(); //Starts the typing detector
    clearInterval(timer); //Stops previous timer 
    startTimer(); //Starts timer
    inputBox.focus(); //Focuses cursor on the input box
}




//Called when Test Type button is pressed
function showSelectionScreen() {
    //Hides input and display boxes
    inputBox.style.display = "none";
    displayBox.style.display = "none";

    clearInterval(timer); //Stops timer
    timerText.innerText = "Test Selection"; 

    selectionContainer.style.display = "block"; //Shows the selection screen
}






selectRandomWords();
selectText();
selectLimit1();

startTest();




