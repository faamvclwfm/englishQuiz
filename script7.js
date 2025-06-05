const questions = [
    { word: "considerable", correct: "значний", options: ["незначний", "сумнівний", "значний"] },
    { word: "memorable", correct: "пам’ятний", options: ["забутній", "звичайний", "пам’ятний"] },
    { word: "recognisable", correct: "впізнаваний", options: ["невідомий", "впізнаваний", "невизначений"] },
    { word: "understandable", correct: "зрозумілий", options: ["незрозумілий", "заплутаний", "зрозумілий"] },
  
    { word: "apparent", correct: "очевидний", options: ["таємний", "очевидний", "незрозумілий"] },
    { word: "evident", correct: "явний", options: ["непомітний", "таємний", "явний"] },
    { word: "significant", correct: "важливий", options: ["незначний", "марний", "важливий"] },
    { word: "violent", correct: "жорстокий", options: ["мирний", "спокійний", "жорстокий"] },
  
    { word: "cheeky", correct: "нахабний", options: ["ввічливий", "нахабний", "тихий"] },
    { word: "chilly", correct: "прохолодний", options: ["спекотний", "теплий", "прохолодний"] },
    { word: "smiley", correct: "усміхнений", options: ["сумний", "усміхнений", "злий"] },
    { word: "stormy", correct: "буремний", options: ["тихий", "сонячний", "буремний"] },
    { word: "tricky", correct: "хитрий / складний", options: ["простий", "хитрий / складний", "однозначний"] },
    { word: "wealthy", correct: "багатий", options: ["бідний", "звичайний", "багатий"] },
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
   
    document.getElementById('result').innerText=`✅ Правильних відповідей: ${correctCount} з ${questions.length}`
    
  }
  