const questions = [
  { word: "keep on top of", correct: "мати в пріоритеті, не відставати, контролювати", options: ["мати в пріоритеті, не відставати, контролювати", "ігнорувати", "забути"] },
  { word: "at the top of her voice", correct: "кричати на все горло", options: ["кричати на все горло", "шепотіти", "мовчати"] },
  { word: "take it out on", correct: "виливати негатив на", options: ["виливати негатив на", "подякувати комусь", "ігнорувати когось"] },
  { word: "make up my mind", correct: "зібратись з думками, вирішити", options: ["зібратись з думками, вирішити", "розгубитись", "відкласти рішення"] },
  { word: "look down on", correct: "дивитись зверха на", options: ["дивитись зверха на", "захоплюватись кимось", "ігнорувати когось"] },
  { word: "look up to", correct: "рівнятись на когось, поважати, захоплюватись", options: ["рівнятись на когось, поважати, захоплюватись", "зневажати когось", "ігнорувати когось"] },
  { word: "get in the way of", correct: "ставати на шляху, перешкоджати", options: ["ставати на шляху, перешкоджати", "допомагати", "ігнорувати"] },
  { word: "there’s no way", correct: "нізащо, ніяким чином", options: ["нізащо, ніяким чином", "можливо", "без сумніву"] },
  { word: "take it easy", correct: "розслабитись", options: ["розслабитись", "напружитись", "злитися"] },
  { word: "let somebody down", correct: "розчарувати, підвести когось", options: ["розчарувати, підвести когось", "підтримати когось", "надихнути когось"] },
  { word: "don’t mind", correct: "не проти", options: ["не проти", "категорично проти", "не впевнений"] },
  { word: "to make out", correct: "розгледіти, зрозуміти", options: ["розгледіти, зрозуміти", "ігнорувати", "забути"] },
  { word: "smth doesn’t make sense", correct: "щось не має сенсу", options: ["щось не має сенсу", "це логічно", "це очевидно"] },
  { word: "it’s about time", correct: "саме час, настав час", options: ["саме час, настав час", "занадто рано", "запізно"] },
  { word: "you could do with a new one", correct: "тобі б не завадило мати новий", options: ["тобі б не завадило мати новий", "у тебе є найкращий", "тобі це не потрібно"] },
  { word: "it was thoughtful of you", correct: "це було уважно/люб’язно/турботливо з твого боку", options: ["це було уважно/люб’язно/турботливо з твого боку", "це було грубо", "це було випадково"] }
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