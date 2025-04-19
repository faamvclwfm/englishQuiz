const words = {
    'fireworks':{
        name: "Fireworks",
        pronunciation: "/ˈfaɪərwɜːks/",
        translation: "феєрверки",
        image: "https://japaclip.com/en/files/fireworks.png",
        example: "Example: We watched the fireworks light up the night sky."
    },
    'anxiety':{
        name: "Anxiety",
        pronunciation: "/æŋˈzaɪ.ə.ti/",
        translation: "тривожність",
        image: "https://sakurasakunihongo.com/wp-content/uploads/2022/04/image-9.png?w=400",
        example: "Example: He felt a surge of anxiety before the exam."
    }
}





function openCard(word){
    const container= document.getElementById('card')
    container.innerHTML=''
    const item=words[word]
    const mainWord=document.createElement('p')
    mainWord.classList.add('word-title')
    mainWord.innerText=item.name
    const closeButton=document.createElement('button')
    closeButton.textContent='Close'
    closeButton.classList.add('close-button')
    closeButton.addEventListener('click',closeCard)

    const pronunciationWord=document.createElement('p')
    pronunciationWord.innerText=item.pronunciation

    const translationWord=document.createElement('p')
    translationWord.innerText=item.translation

    const imageWord=document.createElement('img')
    imageWord.src=item.image

    const exampleWord=document.createElement('p')
    exampleWord.innerText=item.example

    container.appendChild(mainWord)
    container.appendChild(pronunciationWord)
    container.appendChild(translationWord)
    container.appendChild(imageWord)
    container.appendChild(exampleWord)
    container.appendChild(closeButton)
    document.getElementById('modal').style.display='flex'
}
function closeCard(){
    document.getElementById('modal').style.display='none'
}