const questions = [
  { word: "envelope", correct: "оболонка, обгортка, конверт", options: ["оболонка, обгортка, конверт", "листівка", "пакунок"] },
  { word: "hand in", correct: "вручати, здавати", options: ["вручати, здавати", "брати", "відкладати"] },
  { word: "hand out", correct: "роздавати, втрачувати", options: ["роздавати, втрачувати", "отримувати", "збирати"] },
  { word: "handkerchief", correct: "носовичок", options: ["носовичок", "рушник", "шарф"] },
  { word: "enquiry", correct: "запит, розслідування", options: ["запит, розслідування", "відповідь", "наказ"] },
  { word: "cleft", correct: "ущелина, щілина", options: ["ущелина, щілина", "гора", "печера"] },
  { word: "singing nettle", correct: "кропива", options: ["кропива", "полин", "м'ята"] },
  { word: "departure", correct: "виїзд, вирушання", options: ["виїзд, вирушання", "прибуття", "зупинка"] },
  { word: "by all means", correct: "у всіх сенсах", options: ["у всіх сенсах", "ні в якому разі", "можливо"] },
  { word: "loan", correct: "позика, кредит", options: ["позика, кредит", "заробіток", "знижка"] },
  { word: "raincoat", correct: "дощовий плащ", options: ["дощовий плащ", "куртка", "пальто"] },
  { word: "slippery", correct: "слизький", options: ["слизький", "сухий", "шорсткий"] }
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