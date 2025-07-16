const questions = [
    { word: "gifted", correct: "обдарований", options: ["обдарований", "байдужий", "неслухняний"] },
    { word: "bully", correct: "хуліган", options: ["хуліган", "герой", "учитель"] },
    { word: "obey", correct: "підкорятись", options: ["підкорятись", "ігнорувати", "сміятись"] },
    { word: "people skills", correct: "навички спілкування з людьми", options: ["навички спілкування з людьми", "мовні помилки", "емоції"] },
    { word: "disruptive", correct: "неслухняний", options: ["неслухняний", "старанний", "спокійний"] },
    { word: "scholarship", correct: "стипендія", options: ["стипендія", "екзамен", "канікули"] }
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