document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById("submit")
    const wordDiv = document.querySelector('.word')
    const sentenceDiv = document.querySelector('.sentence')
    const div = document.querySelector('.text')
    const form = document.getElementById('form')
    submitBtn.style.margin = '10px'
    wordDiv.style.margin = '10px'
    sentenceDiv.style.margin = '10px'
    
    let wordCounter = function(word, sentence){
        const lowerCaseWord = word.toLowerCase()
        const lowerCaseSent = sentence.toLowerCase()
        const allWords = lowerCaseSent.split(/\W+/)
        let count = 0
    
        allWords.forEach(currentWord => {
            if (currentWord === lowerCaseWord){
                count++
            }
        })
    
        return count
    } 
    
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const wordInput = document.getElementById('word')
        const wordValue = wordInput.value
        const sentenceInput = document.getElementById('sentence')
        const sentValue  = sentenceInput.value
        let count = wordCounter(wordValue, sentValue)
        div.textContent = `The word ${wordValue} has appeared a total of ${count} times`
    })
})

