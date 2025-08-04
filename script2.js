const questions = [
    { word: "back down", correct: "відступити", options: ["відступити", "вигукувати", "мовчати"] },
    { word: "do something on purpose", correct: "зробити щось навмисно", options: ["випадково зробити", "зробити щось навмисно", "не зробити нічого"] },
    { word: "failure", correct: "невдача", options: ["успіх", "невдача", "спроба"] },
    { word: "get (a point) across", correct: "донести думку", options: ["перебити", "ігнорувати", "донести думку"] },
    { word: "invade your privacy", correct: "порушувати особистий простір", options: ["захищати дані", "порушувати особистий простір", "допомагати"] },
    { word: "lose your temper", correct: "втратити терпіння", options: ["розслабитись", "втратити терпіння", "заспокоїтись"] },
    { word: "respond", correct: "відповідати", options: ["відповідати", "кричати", "відмовчуватись"] },
    { word: "scream (at)", correct: "кричати (на)", options: ["усміхатись", "кричати (на)", "сміятись"] },
    { word: "anger", correct: "злість", options: ["радість", "злість", "спокій"] },
    { word: "anxiety", correct: "тривожність", options: ["щастя", "тривожність", "злість"] },
    { word: "appreciate", correct: "цінувати", options: ["ігнорувати", "цінувати", "забувати"] },
    { word: "expectation", correct: "очікування", options: ["реальність", "очікування", "розчарування"] },
    { word: "frustration", correct: "розчарування", options: ["захоплення", "спокій", "розчарування"] },
    { word: "get on my nerves", correct: "діяти мені на нерви", options: ["допомагати", "діяти мені на нерви", "вразити"] },
    { word: "(your) heart sinks", correct: "тобі стає сумно", options: ["тобі стає сумно", "ти злишся", "ти радієш"] },
    { word: "irritated", correct: "роздратований", options: ["спокійний", "роздратований", "байдужий"] },
    { word: "irritating", correct: "дратівливий", options: ["дратівливий", "приємний", "сумний"] },
    { word: "passionate about", correct: "захоплений чимось", options: ["нудьгуючий", "захоплений чимось", "байдужий"] },
    { word: "pressure", correct: "тиск", options: ["веселість", "тиск", "підтримка"] },
    { word: "thrilling", correct: "захопливий", options: ["нудний", "захопливий", "спокійний"] },
  ];
const quizContainer=document.getElementById('quizForm')
questions.forEach((q,index)=>{
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    const container=document.createElement('div')
    container.innerHTML=`
    <div class="p-6 bg-gray-50 rounded-2xl shadow-md">
        <p class="text-xl font-semibold text-gray-800 mb-4">${index+1}. ${q.word}</p>
        <div class="space-y-3">
        ${shuffled.map((opt)=>`
            <label class='block'>
                <input type="radio" name='q${index}' value='${opt}' class="hidden" onchange="markSelected(this); updateProgress()">
                <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label>`).join("")}
        </div>
    </div>
    `
    quizContainer.appendChild(container)
})
function markSelected(radio) {
    const allOptions = radio.closest(".space-y-3").querySelectorAll(".option-btn");
    allOptions.forEach(opt => opt.classList.remove("selected"));
    radio.nextElementSibling.classList.add("selected");
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