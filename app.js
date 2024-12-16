const quotes = [
    "The only way to do great work is to love what you do",
    "Life is what happens when youre busy making other plans.",
    "the future belongs to those who belive in the beauty of their dreams",
    "It does not matter how slowly you go as you do not stop ",
    "In the end , its not the years in your life that count. Its the life in your years",
    "the purpose of our lives is to be happy.",
    "Get busy living or get busy Dying",
    "You only live once, but if you do it right once is enough.",
    "Many of lifes failure are people who did not realise how close they were to success when they gave up",
    "If you want to live a happy life tie it to a goal not to people or things",
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {

    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }

    while(true){
        const randomIdx = Math.floor(Math.random() * quotes.length)
        
        if (usedIndexes.has(randomIdx))continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
    }
    
}