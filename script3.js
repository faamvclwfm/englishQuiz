const questions = [
    { word: "cheer", correct: "підбадьорювати", options: ["свистіти", "критикувати", "підбадьорювати"] },
    { word: "loyal (fans)", correct: "віддані (фанати)", options: ["байдужі (фанати)", "тимчасові (фанати)", "віддані (фанати)"] },
    { word: "a mass (of fans)", correct: "маса (фанатів)", options: ["кілька (фанатів)", "група (фанатів)", "маса (фанатів)"] },
    { word: "opponent", correct: "суперник", options: ["партнер", "товариш", "суперник"] },
    { word: "(sports) results", correct: "(спортивні) результати", options: ["(спортивні) плани", "(спортивні) проблеми", "(спортивні) результати"] },
    { word: "a season ticket", correct: "абонемент на сезон", options: ["одноразовий квиток", "запрошення", "абонемент на сезон"] },
    { word: "support (a team)", correct: "підтримувати (команду)", options: ["ігнорувати (команду)", "критикувати (команду)", "підтримувати (команду)"] },
    { word: "controversial", correct: "суперечливий", options: ["очевидний", "зрозумілий", "суперечливий"] },
    { word: "financial", correct: "фінансовий", options: ["емоційний", "соціальний", "фінансовий"] },
    { word: "practical", correct: "практичний", options: ["теоретичний", "складний", "практичний"] },
    { word: "psychological", correct: "психологічний", options: ["фізичний", "хімічний", "психологічний"] },
    { word: "cheerful", correct: "веселий", options: ["сумний", "серйозний", "веселий"] },
    { word: "colourful", correct: "барвистий", options: ["однотонний", "тьмяний", "барвистий"] },
    { word: "doubtful", correct: "сумнівний", options: ["впевнений", "очевидний", "сумнівний"] },
    { word: "dreadful", correct: "жахливий", options: ["чудовий", "прекрасний", "жахливий"] },
    { word: "harmful", correct: "шкідливий", options: ["корисний", "безпечний", "шкідливий"] },
    { word: "academic", correct: "академічний", options: ["розважальний", "побутовий", "академічний"] },
    { word: "athletic", correct: "атлетичний", options: ["слабкий", "неспортивний", "атлетичний"] },
    { word: "dramatic", correct: "драматичний", options: ["звичайний", "спокійний", "драматичний"] },
    { word: "enthusiastic", correct: "захоплений", options: ["байдужий", "апатичний", "захоплений"] },
    { word: "encouraging", correct: "заохочувальний", options: ["знеохочувальний", "критичний", "заохочувальний"] },
    { word: "threatening", correct: "загрозливий", options: ["безпечний", "мирний", "загрозливий"] },
    { word: "worrying", correct: "тривожний", options: ["спокійний", "безпечний", "тривожний"] },
    { word: "aggressive", correct: "агресивний", options: ["мирний", "спокійний", "агресивний"] },
    { word: "competitive", correct: "конкурентний", options: ["спільний", "дружній", "конкурентний"] },
    { word: "effective", correct: "ефективний", options: ["неефективний", "марний", "ефективний"] },
    { word: "impressive", correct: "вражаючий", options: ["звичайний", "непомітний", "вражаючий"] },
    { word: "representative", correct: "представницький", options: ["індивідуальний", "особистий", "представницький"] },
    { word: "adventurous", correct: "авантюрний", options: ["обережний", "боязкий", "авантюрний"] },
    { word: "ridiculous", correct: "смішний, безглуздий", options: ["серйозний", "важливий", "смішний, безглуздий"] },
    { word: "suspicious", correct: "підозрілий", options: ["довірливий", "відкритий", "підозрілий"] },
    { word: "various", correct: "різноманітний", options: ["однаковий", "схожий", "різноманітний"] },
];
const quizContainer=document.getElementById('quizForm')
questions.forEach((q,index)=>{
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    const container=document.createElement('div')
    container.innerHTML=`
    <div class="p-6 bg-gray-50 rounded-2xl shadow-md">
        <p class="text-xl font-semibold text-gray-800 mb-4">${index+1}.${q.word}</p>
        <div class="space-y-3">${shuffled.map((opt)=>
            `<label class="block">
                <input type="radio" name='q${index}' value='${opt}' class="hidden" onchange="markSelected(this); updateProgress()">
                <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label>`
        ).join("")}
        </div>
    </div>
    `
    quizContainer.appendChild(container)
})
function markSelected(radio){
    const allOptions = radio.closest(".space-y-3").querySelectorAll(".option-btn");
    allOptions.forEach((opt)=>{ opt.classList.remove('selected')})
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
        const radios = document.getElementsByName(`q${index}`)
        radios.forEach(radio =>{
            const parentDiv=radio.nextElementSibling
            if(radio.checked){
                if(radio.value=== q.correct){
                    correctCount++
                    parentDiv.classList.add('correct')
                }else{
                    parentDiv.classList.add('incorrect')
                }
            }else if(radio.value=== q.correct){
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