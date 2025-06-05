const questions = [
    { word: "closely associated", correct: "тісно пов’язаний", options: ["частково пов’язаний", "випадково пов’язаний", "тісно пов’язаний"] },
    { word: "closely linked", correct: "тісно пов’язаний", options: ["поверхнево пов’язаний", "незалежний", "тісно пов’язаний"] },
    { word: "closely related", correct: "тісно пов’язаний", options: ["слабо пов’язаний", "випадково пов’язаний", "тісно пов’язаний"] },
    
    { word: "completely different", correct: "повністю відмінний", options: ["частково схожий", "майже однаковий", "повністю відмінний"] },
    { word: "completely normal", correct: "повністю нормальний", options: ["дивний", "частково нормальний", "повністю нормальний"] },
    { word: "completely separate", correct: "повністю окремий", options: ["пов’язані", "частково об'єднаний", "повністю окремий"] },
    
    { word: "deeply affected", correct: "глибоко вражений", options: ["злегка стурбований", "спокійний", "глибоко вражений"] },
    { word: "deeply concerned", correct: "глибоко стурбований", options: ["байдужий", "легко схвильований", "глибоко стурбований"] },
    { word: "deeply hurt", correct: "глибоко поранений", options: ["злегка засмучений", "байдужий", "глибоко поранений"] },
    
    { word: "fully awake", correct: "повністю прокинувся", options: ["напівсонний", "сонний", "повністю прокинувся"] },
    { word: "fully aware", correct: "повністю усвідомлює", options: ["частково усвідомлює", "не знає", "повністю усвідомлює"] },
    { word: "fully responsible", correct: "повністю відповідальний", options: ["безвідповідальний", "частково відповідальний", "повністю відповідальний"] },
    { word: "fully understand", correct: "повністю розуміти", options: ["погано розуміти", "частково розуміти", "повністю розуміти"] },
    
    { word: "highly effective", correct: "надзвичайно ефективний", options: ["неефективний", "частково ефективний", "надзвичайно ефективний"] },
    { word: "highly likely", correct: "дуже ймовірний", options: ["неможливий", "малоймовірний", "дуже ймовірний"] },
    { word: "highly unusual", correct: "надзвичайно незвичний", options: ["звичний", "нормальний", "надзвичайно незвичний"] },
    
    { word: "incredibly interesting", correct: "неймовірно цікавий", options: ["нудний", "звичайний", "неймовірно цікавий"] },
    
    { word: "widely believed (to be)", correct: "широко вважається (що)", options: ["рідко вважається", "ніколи не вважалося", "широко вважається (що)"] },
    { word: "widely considered (to be)", correct: "широко розглядається (як)", options: ["вузько розглядається", "ніколи не розглядається", "широко розглядається (як)"] },
    { word: "widely known (for)", correct: "широко відомий (за)", options: ["маловідомий", "невідомий", "широко відомий (за)"] },
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
  