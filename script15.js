const questions = [
    { word: "laid-back", correct: "спокійний, розслаблений", options: ["напружений, тривожний", "спокійний, розслаблений", "збуджений, енергійний"] },
    { word: "trusting", correct: "довірливий", options: ["підозрілий", "довірливий", "байдужий"] },
    { word: "to make people feel at ease", correct: "робити щоб люди почувались спокійно", options: ["робити щоб люди нервували", "робити щоб люди почувались спокійно", "змушувати людей мовчати"] },
    { word: "tactful", correct: "тактовний", options: ["грубий", "тактовний", "неуважний"] },
    { word: "affectionate", correct: "лагідний, ніжний, ласкавий", options: ["черствий, байдужий", "лагідний, ніжний, ласкавий", "зарозумілий"] },
    { word: "daring", correct: "сміливий, відважний", options: ["обережний", "сміливий, відважний", "нерішучий"] },
    { word: "perceptive", correct: "проникливий", options: ["поверхневий", "проникливий", "байдужий"] },
    { word: "intellectual", correct: "інтелектуальний", options: ["антиосвічений", "інтелектуальний", "звичайний"] },
    { word: "level-headed", correct: "розважливий, розсудливий", options: ["імпульсивний", "розважливий, розсудливий", "збуджений"] },
    { word: "witty", correct: "дотепний", options: ["нудний", "дотепний", "безглуздий"] },
    { word: "moody", correct: "примхливий", options: ["стабільний", "примхливий", "беземоційний"] },
    { word: "to be the life and soul of the party", correct: "бути душею компанії", options: ["бути осторонь", "бути душею компанії", "бути тихим спостерігачем"] },
    { word: "to be full of yourself", correct: "бути самовпевненим", options: ["бути скромним", "бути самовпевненим", "бути ввічливим"] },
    { word: "self-centred", correct: "егоїстичний, егоцентричний", options: ["альтруїстичний", "егоїстичний, егоцентричний", "доброчесний"] },
    { word: "thorough", correct: "ретельний", options: ["поверхневий", "ретельний", "недбалий"] },
    { word: "to excel", correct: "досягти успіху", options: ["зазнати поразки", "досягти успіху", "залишитись на місці"] },
    { word: "humble / modest", correct: "скромний", options: ["зарозумілий", "скромний", "нахабний"] },
    { word: "to be self-conscious", correct: "бути самосвідомим", options: ["бути безтурботним", "бути самосвідомим", "бути розгубленим"] },
    { word: "fair-minded", correct: "справедливий", options: ["упереджений", "справедливий", "байдужий"] },
    { word: "strong-willed", correct: "рішучий", options: ["слабовольний", "рішучий", "нерішучий"] },
    { word: "spontaneous", correct: "спонтанний", options: ["передбачуваний", "спонтанний", "планомірний"] },
    { word: "short-tempered", correct: "неврівноважений, запальний", options: ["стриманий", "неврівноважений, запальний", "спокійний"] },
    { word: "compound", correct: "з’єднувати", options: ["роз'єднувати", "з’єднувати", "змішувати випадково"] },
    { word: "good-natured", correct: "добродушний", options: ["злобний", "добродушний", "черствий"] },
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