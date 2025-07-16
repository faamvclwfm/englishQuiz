const questions = [
    { word: "be left unconscious", correct: "бути залишеним непритомним", options: ["бути залишеним непритомним", "заснути", "втратити зір"] },
    { word: "be found unconscious", correct: "бути знайденим без свідомості", options: ["бути знайденим без свідомості", "бути пораненим", "бути живим"] },
    { word: "be struck by lightning", correct: "бути ураженим блискавкою", options: ["бути ураженим блискавкою", "бути укушеним", "бути зляканим"] },
    { word: "fall into a coma", correct: "впасти в кому", options: ["впасти в кому", "прокинутись", "втратити пам’ять"] },
    { word: "come out of a coma", correct: "вийти з коми", options: ["вийти з коми", "впасти у сон", "вийти з кімнати"] },
    { word: "feel an urge", correct: "відчувати сильне бажання", options: ["відчувати сильне бажання", "не хотіти", "відчувати втому"] },
    { word: "get an urge", correct: "отримати сильне бажання", options: ["отримати сильне бажання", "відмовитись від бажання", "проігнорувати емоцію"] },
    { word: "lose consciousness", correct: "втратити свідомість", options: ["втратити свідомість", "позіхнути", "вийти надвір"] },
    { word: "regain consciousness", correct: "повернутись до свідомості", options: ["повернутись до свідомості", "впасти", "впасти в кому"] },
    { word: "remain a mystery", correct: "залишатись загадкою", options: ["залишатись загадкою", "стати очевидним", "розкритися"] },
    { word: "solve a mystery", correct: "розгадати таємницю", options: ["розгадати таємницю", "створити проблему", "обдурити когось"] },
    { word: "suffer an injury", correct: "отримати травму", options: ["отримати травму", "уникнути шкоди", "вилікуватись"] },
    { word: "recover from an injury", correct: "одужати після травми", options: ["одужати після травми", "зламати щось", "отримати нову травму"] }
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
  