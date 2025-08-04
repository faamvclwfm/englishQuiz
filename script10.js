const questions = [
    { word: "to be dazzled by", correct: "бути осліпленим", options: ["бути осліпленим", "бути здивованим", "бути байдужим"] },
    { word: "get in to", correct: "прибувати", options: ["прибувати", "виходити", "запізнюватись"] },
    { word: "pull down", correct: "зруйнувати", options: ["зруйнувати", "відремонтувати", "пофарбувати"] },
    { word: "put up with", correct: "змиритись", options: ["змиритись", "уникати", "переконати"] },
    { word: "leave out", correct: "пропустити", options: ["пропустити", "підкреслити", "записати"] },
    { word: "tell someone off", correct: "відчитати когось", options: ["відчитати когось", "похвалити", "ігнорувати"] },
    { word: "recount", correct: "розповідати", options: ["розповідати", "забути", "вигадати"] },
    { word: "postpone", correct: "відкласти", options: ["відкласти", "прискорити", "не змінювати"] },
    { word: "I have been up to my eyes in work", correct: "я мав справ по горло", options: ["я мав справ по горло", "мені було нудно", "я нічого не робив"] }
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
    let progressValue = document.querySelector('.progress-value'),
    circuralProgress = document.querySelector('.circular-progress'),
    progress;
    let result= ( (correctCount * 100) / questions.length);
    let progressStartValue = 0;
    clearInterval(progress)
     progress=setInterval(()=>{
    
            progressStartValue++;
            if(progressStartValue>=result){
                clearInterval(progress)
            }
            progressValue.textContent=result===0 ? `0%` : `${progressStartValue}%`;
            circuralProgress.style.background=progressStartValue>60 ? `conic-gradient(#2ae84a ${progressStartValue * 3.6}deg,#ededed  0deg)` : `conic-gradient( #e82929 ${progressStartValue * 3.6}deg,#ededed  0deg)`
        
    },10)

    document.getElementById('tryagain').style.display='block'

    document.getElementById('result').innerText=`✅ Правильних відповідей: ${correctCount} з ${questions.length}`
  }

  function tryAgain(){
    window.location.reload()
  }