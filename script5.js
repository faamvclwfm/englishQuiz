const questions = [
    { word: "germs", correct: "мікроби", options: ["мікроби", "ліки", "вітаміни"] },
    { word: "in due course", correct: "у встановленому порядку", options: ["негайно", "у встановленому порядку", "ніколи"] },
    { word: "live up to", correct: "виправдовувати (очікування)", options: ["критикувати", "ігнорувати", "виправдовувати (очікування)"] },
    { word: "fell behind", correct: "відставати", options: ["відставати", "наздоганяти", "перевершувати"] },
    { word: "play truant", correct: "прогулювати школу", options: ["відвідувати заняття", "прогулювати школу", "готуватись до іспиту"] },
    { word: "truant", correct: "прогульник", options: ["учитель", "прогульник", "відмінник"] },
    { word: "occasions", correct: "випадки", options: ["звички", "випадки", "причини"] },
    { word: "to endure", correct: "витримувати", options: ["уникати", "витримувати", "насолоджуватись"] },
    { word: "be unaware", correct: "не усвідомлювати", options: ["знати", "розуміти", "не усвідомлювати"] },
    { word: "to confess", correct: "зізнаватись", options: ["брехати", "зізнаватись", "забути"] },
    { word: "assume", correct: "припускати", options: ["заперечувати", "припускати", "знати точно"] },
    { word: "imply", correct: "натякати", options: ["мовчати", "запитувати", "натякати"] },
    { word: "beforehand", correct: "заздалегідь", options: ["після", "тепер", "заздалегідь"] },
    { word: "in advance", correct: "заздалегідь", options: ["пізніше", "заздалегідь", "раптом"] },
    { word: "shrank", correct: "зменшився", options: ["зменшився", "виріс", "зник"] },
    { word: "exaggeration", correct: "перебільшення", options: ["перебільшення", "зменшення", "недооцінка"] },
    { word: "white lie", correct: "невинна брехня", options: ["відкрита правда", "невинна брехня", "плітка"] },
    { word: "upmarket", correct: "елітний", options: ["елітний", "дешевий", "застарілий"] },
    { word: "consequences", correct: "наслідки", options: ["випадки", "наслідки", "переваги"] },
    { word: "to call in sick", correct: "взяти лікарняний", options: ["звільнитися", "взяти лікарняний", "поїхати у відпустку"] },
    { word: "underestimate", correct: "недооцінювати", options: ["переоцінювати", "ігнорувати", "недооцінювати"] },
    { word: "overestimate", correct: "переоцінювати", options: ["переоцінювати", "недооцінювати", "зневажати"] },
    { word: "to let (someone) down", correct: "підвести когось", options: ["підтримати", "підвести когось", "вразити"] },
  ];
const quizContainer=document.getElementById('quizForm')  

questions.forEach((q,index)=>{
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    const container=document.createElement('div')
    container.innerHTML=`
    <div class="p-6 bg-gray-50 rounded-2xl shadow-md">
        <p class="text-xl font-semibold text-gray-800 mb-4">${index+1}.${q.word}</p>
        <div class="space-y-3">
        ${shuffled.map(opt=>
            `<label class='block'>
                <input type='radio' name='q${index}' value='${opt}' class="hidden" onchange="markSelected(this); updateProgress()" >
                <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label>`).join('')}
        </div>
    </div>
    `
    quizForm.appendChild(container)
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
        const radios=document.getElementsByName(`q${index}`)
        radios.forEach((radio)=>{
            const parentDiv = radio.nextElementSibling;
            parentDiv.classList.remove("correct", "incorrect");
            if(radio.checked){
                if(radio.value===q.correct){
                    correctCount++
                    parentDiv.classList.add("correct")
                }else{
                    parentDiv.classList.add("incorrect")
                }
            }else if(radio.value===q.correct){
                parentDiv.classList.add("correct")
            }
            
        });
        
    });
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