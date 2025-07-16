const questions = [
    { word: "vivid / clear memory", correct: "яскрава або чітка пам’ять", options: ["яскрава або чітка пам’ять", "погана пам’ять", "вигадка"] },
    { word: "vague / distant memory", correct: "розмита або нечітка пам’ять", options: ["розмита пам’ять", "ясний спогад", "нове враження"] },
    { word: "memory like a sieve", correct: "пам’ять як решето", options: ["пам’ять як решето", "фотографічна пам’ять", "відмінна пам’ять"] },
    { word: "lose memory", correct: "втратити пам’ять", options: ["втратити пам’ять", "відновити пам’ять", "зберегти спогади"] },
    { word: "jog memory", correct: "освіжити пам’ять", options: ["освіжити пам’ять", "забути", "вигадати"] },
    { word: "photographic memory", correct: "фотографічна пам’ять", options: ["фотографічна пам’ять", "вибіркова пам’ять", "відсутність пам’яті"] },
    { word: "have a good / terrible memory for sth", correct: "мати хорошу або жахливу пам’ять про щось", options: ["мати хорошу або жахливу пам’ять", "ніколи не пам’ятати", "не знати"] },
    { word: "somebody’s earliest memory", correct: "чийсь найдавніший спогад", options: ["найдавніший спогад", "недавній досвід", "майбутня подія"] },
    { word: "bear in mind", correct: "тримати в голові / пам’ятати", options: ["пам’ятати", "забути", "вигадати"] },
    { word: "ring a bell", correct: "звучати знайомо", options: ["звучати знайомо", "дивувати", "не мати значення"] },
    { word: "escape you", correct: "не могти згадати", options: ["не могти згадати", "ясно пам’ятати", "відволіктись"] },
    { word: "draw a blank", correct: "забути щось повністю", options: ["забути щось", "пригадати", "вигадати"] },
    { word: "slipped somebody’s memory", correct: "забути про щось", options: ["забути про щось", "нагадати собі", "вивчити напам’ять"] },
    { word: "learn by heart", correct: "вивчити напам’ять", options: ["вивчити напам’ять", "переписати", "вигадати"] },
    { word: "think back to sth", correct: "намагатись щось згадати", options: ["намагатись згадати", "вимислити", "забути"] }
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