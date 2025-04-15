const questions = [
    { word: "fireworks", correct: "феєрверки", options: ["ліки", "феєрверки", "ліхтарі"] },
    { word: "homemade", correct: "домашній", options: ["магазинний", "фабричний", "домашній"] },
    { word: "lifetime", correct: "життя, тривалість життя", options: ["життя, тривалість життя", "щодня", "народження"] },
    { word: "never-ending", correct: "безкінечний", options: ["швидкий", "безкінечний", "радісний"] },
    { word: "teaspoon", correct: "чайна ложка", options: ["велика ложка", "тарілка", "чайна ложка"] },
    { word: "underestimate", correct: "недооцінювати", options: ["переоцінювати", "недооцінювати", "розраховувати"] },
    { word: "well aware", correct: "добре обізнаний", options: ["не обізнаний", "добре обізнаний", "злий"] },
    { word: "widespread", correct: "широко розповсюджений", options: ["рідкісний", "широко розповсюджений", "локальний"] },
    { word: "chew up", correct: "жувати, гризти", options: ["кусати", "ковтати", "жувати, гризти"] },
    { word: "chilli pepper", correct: "перець чилі", options: ["огірок", "перець чилі", "цибуля"] },
    { word: "spice", correct: "пряний", options: ["пряний", "солодкий", "солоний"] },
    { word: "sweat", correct: "піт / пітніти", options: ["зморшка", "піт / пітніти", "слина"] },
    { word: "sweets", correct: "цукерки", options: ["горіхи", "цукерки", "молоко"] },
    { word: "whole", correct: "цілий", options: ["половина", "цілий", "кусочок"] },
    { word: "fine", correct: "штраф", options: ["гроші", "штраф", "дозвіл"] },
    { word: "freedom", correct: "свобода", options: ["в'язниця", "свобода", "обов'язок"] },
    { word: "health and safety", correct: "здоров'я та безпека", options: ["закони", "здоров'я та безпека", "фінанси"] },
    { word: "over the speed limit", correct: "поза лімітом швидкості", options: ["поза лімітом швидкості", "аварія", "ремонт"] },
    { word: "speeding", correct: "перевищення швидкості", options: ["паркування", "перевищення швидкості", "вибух"] },
    { word: "terms and conditions", correct: "правила та умови", options: ["права людини", "правила та умови", "резюме"] },
  ];

  const quizForm = document.getElementById("quizForm");

  questions.forEach((q, index) => {
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    const block = document.createElement("div");
    block.innerHTML = `
      <div class="p-6 bg-gray-50 rounded-2xl shadow-md">
        <p class="text-xl font-semibold text-gray-800 mb-4">${index + 1}. <span class="text-blue-600">${q.word}</span></p>
        <div class="space-y-3">
          ${shuffled
            .map(
              (opt) => `
              <label class="block">
                <input type="radio" name="q${index}" value="${opt}" class="hidden" onchange="markSelected(this); updateProgress()">
                <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
              </label>
            `
            )
            .join("")}
        </div>
      </div>
    `;
    quizForm.appendChild(block);
  });

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

  function checkAnswers() {
    let correctCount = 0;
    questions.forEach((q, index) => {
      const radios = document.getElementsByName(`q${index}`);
      radios.forEach((radio) => {
        const parentDiv = radio.nextElementSibling;
        parentDiv.classList.remove("correct", "incorrect");
        if (radio.checked) {
          if (radio.value === q.correct) {
            correctCount++;
            parentDiv.classList.add("correct");
          } else {
            parentDiv.classList.add("incorrect");
          }
        } else if (radio.value === q.correct) {
          parentDiv.classList.add("correct");
        }
      });
    });
    document.getElementById("result").innerText = `✅ Правильних відповідей: ${correctCount} з ${questions.length}`;
  }

  