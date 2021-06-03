//CLOCK
class DigitalClock {
    constructor(element) {
        this.element = element;
    }
    start () {
        this.update ();
        setInterval(() => {
            this.update();
        }, 500)
    }
    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";
        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }
    getTimeParts(){
        const now = new Date();
        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
}
const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock (clockElement);
clockObject.start();

//TO DO LIST

function todoList() {
  var item = document.getElementById("todoInput").value 
  var text = document.createTextNode(item)
  var newItem = document.createElement("li")
  newItem.appendChild(text)
  document.getElementById("todoList").appendChild(newItem)
}

//QUOTES

let quotesArray = [
'“ The purpose of our lives is to be happy.” — Dalai Lama.',
'“ You only live once, but if you do it right, once is enough.” — Mae West.',
'“ Money and success don’t change people; they merely amplify what is already there.” — Will Smith',
'“ If you want to live a happy life, tie it to a goal, not to people or things.”– Albert Einstein',
'“ Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs',
'“ Everything negative – pressure, challenges – is all an opportunity for me to rise.” — Kobe Bryant',
'“ I like criticism. It makes you strong.” — LeBron James', 
'“ My mama always said, life is like a box of chocolates. You never know what you’re gonna get.” — Forrest Gump',
'“ In three words I can sum up everything I’ve learned about life: It goes on.” ― Robert Frost',
'“ Life is ten percent what happens to you and ninety percent how you respond to it.” — Charles Swindoll'
];


let quotetext = document.getElementById('QuotesList1');
let buttonQuote = document.getElementById('button-quote');
buttonQuote.addEventListener('click', function showQuotes() {
    let i = Math.floor(Math.random() * (quotesArray.length));
    let quote = quotesArray[i];
    quotetext.textContent = quote;
    

}); 

let buttonNewQuote = document.getElementById('button-NewQuote');
buttonNewQuote.addEventListener('click', function(addNewEvent){
    addNewEvent.preventDefault();
    let quote = document.getElementById('quoteInput').value;
    quotesArray.push(quote);
    quotetext.textContent = quote;

})








