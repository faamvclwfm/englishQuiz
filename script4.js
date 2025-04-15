const questions = [
    { word: "come out in (red spots)", correct: "покритися (червоними плямами)", options: ["зникнути", "посилитися", "покритися (червоними плямами)"] },
    { word: "come up against (a problem)", correct: "зіткнутися з (проблемою)", options: ["уникнути (проблеми)", "вирішити (проблему)", "зіткнутися з (проблемою)"] },
    { word: "come up with (an idea)", correct: "придумати (ідею)", options: ["відкинути (ідею)", "забути (ідею)", "придумати (ідею)"] },
    { word: "do away with", correct: "покінчити з, позбутися", options: ["зберегти", "підтримувати", "покінчити з, позбутися"] },
    { word: "face up to (a problem)", correct: "зустрітися віч-на-віч з (проблемою)", options: ["ігнорувати (проблему)", "уникнути (проблеми)", "зустрітися віч-на-віч з (проблемою)"] },
    { word: "get over (an illness)", correct: "одужати від (хвороби)", options: ["захворіти на (хворобу)", "жити з (хворобою)", "одужати від (хвороби)"] },
    { word: "give off (a gas)", correct: "виділяти (газ)", options: ["поглинати (газ)", "зберігати (газ)", "виділяти (газ)"] },
    { word: "go down with (an illness)", correct: "захворіти на (хворобу)", options: ["одужати від (хвороби)", "уникнути (хвороби)", "захворіти на (хворобу)"] },
    { word: "put (you) off", correct: "відштовхувати (вас)", options: ["приваблювати (вас)", "зацікавлювати (вас)", "відштовхувати (вас)"] },
    { word: "show off", correct: "хизуватися", options: ["скромничати", "приховувати", "хизуватися"] },
    { word: "work something out", correct: "розробити щось, вирішити щось", options: ["заплутати щось", "проігнорувати щось", "розробити щось, вирішити щось"] },
    { word: "address (an issue)", correct: "розглядати (проблему)", options: ["ігнорувати (проблему)", "уникати (проблеми)", "розглядати (проблему)"] },
    { word: "affect", correct: "впливати", options: ["не впливати", "ігнорувати", "впливати"] },
    { word: "alternative", correct: "альтернативний", options: ["основний", "єдиний", "альтернативний"] },
    { word: "banned", correct: "заборонений", options: ["дозволений", "обов'язковий", "заборонений"] },
    { word: "carbon footprint", correct: "вуглецевий слід", options: ["водний баланс", "екологічна програма", "вуглецевий слід"] },
    { word: "cut down", correct: "скоротити", options: ["збільшити", "підвищити", "скоротити"] },
    { word: "environmentally friendly", correct: "екологічно чистий", options: ["шкідливий для довкілля", "забруднюючий", "екологічно чистий"] },
    { word: "filter", correct: "фільтр / фільтрувати", options: ["насос / качати", "труба / проводити", "фільтр / фільтрувати"] },
    { word: "impact", correct: "вплив / впливати", options: ["причина / спричиняти", "наслідок / слідувати", "вплив / впливати"] },
    { word: "natural disaster", correct: "стихійне лихо", options: ["техногенна катастрофа", "екологічна проблема", "стихійне лихо"] },
    { word: "poison", correct: "отрута", options: ["ліки", "антидот", "отрута"] },
    { word: "polluted", correct: "забруднений", options: ["чистий", "безпечний", "забруднений"] },
    { word: "solar", correct: "сонячний", options: ["вітряний", "водний", "сонячний"] },
    { word: "supply", correct: "постачання / постачати", options: ["споживання / споживати", "виробництво / виробляти", "постачання / постачати"] },
    { word: "survival kit", correct: "набір для виживання", options: ["аптечка", "набір інструментів", "набір для виживання"] },
    { word: "water filter", correct: "водний фільтр", options: ["повітряний фільтр", "масляний фільтр", "водний фільтр"] },
    { word: "water shortage", correct: "нестача води", options: ["надлишок води", "забруднення води", "нестача води"] },
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
    </div>`

    quizContainer.appendChild(container)
})
function markSelected(radio) {
    const allOptions = radio.closest(".space-y-3").querySelectorAll(".option-btn");
    allOptions.forEach((opt)=>{ opt.classList.remove('selected')})
    radio.nextElementSibling.classList.add('selected')
}
function updateProgress() {
    let total = questions.length;
    let answered=0;
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
    document.getElementById('result').innerText=`✅ Правильних відповідей: ${correctCount} з ${questions.length}`
}