const questions = [
    { word: "be of interest to", correct: "цікавити", options: ["цікавити", "допомагати", "спричиняти"] },
    { word: "go on to", correct: "перейти до чогось (у майбутньому)", options: ["перейти до чогось", "здатися", "зупинитися"] },
    { word: "get a degree", correct: "отримати ступінь", options: ["отримати ступінь", "провалити курс", "почати навчання"] },
    { word: "dissertation", correct: "дисертація", options: ["дисертація", "резюме", "доклад"] },
    { word: "have a passion for something", correct: "мати пристрасть до чогось", options: ["мати пристрасть", "не цікавитися", "боятись"] },
    { word: "to be passionate about something", correct: "бути захопленим чимось", options: ["бути захопленим", "бути байдужим", "бути здивованим"] },
    { word: "sit exams", correct: "здавати іспити", options: ["здавати іспити", "писати твори", "грати в ігри"] },
    { word: "enrol on this course", correct: "записатися на курс", options: ["записатися на курс", "пропустити курс", "покинути навчання"] },
    { word: "deepen your knowledge", correct: "поглибити свої знання", options: ["поглибити знання", "забути все", "відволіктись"] },
    { word: "go into music industry", correct: "піти в музичну індустрію", options: ["піти в музичну індустрію", "змінити школу", "залишити країну"] },
    { word: "swot", correct: "зубрити", options: ["зубрити", "відпочивати", "не вчити"] },
    { word: "to get expelled", correct: "бути відрахованим", options: ["бути відрахованим", "отримати диплом", "продовжити навчання"] },
    { word: "lenient", correct: "поблажливий", options: ["поблажливий", "суворий", "байдужий"] },
    { word: "settle down", correct: "осісти / заспокоїтись", options: ["осісти", "поїхати", "злитися"] },
    { word: "scraped through", correct: "ледь скласти", options: ["ледь скласти", "завалити", "успішно пройти"] },
    { word: "major in", correct: "спеціалізуватись у", options: ["спеціалізуватись у", "покинути курс", "бути відрахованим"] },
    { word: "give up on", correct: "відмовитись від", options: ["відмовитись від", "розвивати", "цінувати"] }
  ];
  
  const quizContainer = document.getElementById('quizForm'
  )

  questions.forEach((q,index)=>{
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    const question = document.createElement('div')
    question.innerHTML=`
    <div class="p-6 bg-gray-50 rounded-2xl shadow-md">
    <p class="text-xl font-semibold text-gray-800 mb-4">${index+1}. ${q.word}</p>
    <div class="space-y-3">
    ${shuffled.map(opt => 
        `
         <label class='block'>
            <input type='radio' name='q${index}' value='${opt}' class='hidden' onchange="markSelected(this); updateProgress()"  >
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
         </label>
        
        `
    ).join('')}
    </div>
    </div>
    `
    quizContainer.appendChild(question)
  })

  function markSelected(radio){
    const allOptions = radio.closest(".space-y-3").querySelectorAll(".option-btn");
    allOptions.forEach(opt=>{
        opt.classList.remove('selected')
    })
    radio.nextElementSibling.classList.add('selected')
}
function updateProgress() {
    const total = questions.length;
    let answered = 0;
    for (let i = 0; i < total; i++) {
      const radios = document.getElementsByName(`q${i}`);
      if ([...radios].some(r => r.checked)) answered++;
    }
    const percent = Math.round((answered / total) * 100);
    document.getElementById("progressBar").style.width = percent + "%";
  }

  function checkAnswers(){
    let correctCount=0
    questions.forEach((q,index)=>{
        const radios = document.getElementsByName( `q${index}`)
        radios.forEach(radio =>{
            const parentDiv = radio.nextElementSibling
            parentDiv.classList.remove('correct','incorrect')
            if(radio.checked){
                if(radio.value===q.correct){
                    correctCount++
                    parentDiv.classList.add('correct')
                } else {
                    parentDiv.classList.add('incorrect')
                }
            } else if(radio.value===q.correct){
                parentDiv.classList.add('correct')
            }
        })
    })

    document.getElementById('result').innerText=`✅ Правильних відповідей: ${correctCount} з ${questions.length}`
  }