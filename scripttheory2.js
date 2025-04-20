const words = {
    'backdown': {
      word: "back down",
      pronunciation: "/bæk daʊn/",
      translation: "відступити",
      image: "https://media.istockphoto.com/id/1308774720/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%81%D1%82%D1%80%D0%B5%D1%81-%D0%BD%D0%B0%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-%D1%82%D1%80%D0%B8%D0%B2%D0%BE%D0%B3%D0%B0-%D0%B2%D1%96%D0%B4-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%96-%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B8-%D1%96-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0-%D0%B2.jpg?s=612x612&w=0&k=20&c=QX96fs5N95-m__8Bv6M4zUPhzuqAxbVlsveXFvfMrkU=",
      example: "Example: She finally had to back down in the argument."
    },
    'dosomethingonpurpose': {
      word: "do something on purpose",
      pronunciation: "/duː ˈsʌm.θɪŋ ɒn ˈpɜː.pəs/",
      translation: "зробити щось навмисно",
      image: "https://cdn.abo.media/upload/article/res/770-430/o_1e6rpqgpp1edp5tc4k1i04erm58.jpg",
      example: "Example: He did it on purpose to annoy me."
    },
    'failure': {
      word: "failure",
      pronunciation: "/ˈfeɪ.ljər/",
      translation: "невдача",
      image: "https://img.freepik.com/premium-vector/businessman-painting-word-failure_70921-268.jpg",
      example: "Example: The project was a complete failure."
    },
    'getapointacross': {
      word: "get (a point) across",
      pronunciation: "/ɡet ə pɔɪnt əˈkrɒs/",
      translation: "донести думку",
      image: "https://img.freepik.com/free-vector/man-with-vote-paper_24877-76498.jpg?t=st=1745174838~exp=1745178438~hmac=00d73a545badf9407751e8f111c0fbf94b96669b98adf71634f36227286de668&w=1060",
      example: "Example: He struggled to get his point across."
    },
    'invadeyourprivacy': {
      word: "invade your privacy",
      pronunciation: "/ɪnˈveɪd jɔː ˈprɪv.ə.si/",
      translation: "порушувати особистий простір",
      image: "https://img.freepik.com/free-vector/illustrated-hacker-activity-concept_23-2148534299.jpg?t=st=1745174871~exp=1745178471~hmac=c2e8cfa2cc501a5dba26946e750d2883558bec50d64a46a8bd8b72f272bd99cf&w=1060",
      example: "Example: The paparazzi often invade celebrities' privacy."
    },
    'loseyourtemper': {
      word: "lose your temper",
      pronunciation: "/luːz jɔː ˈtem.pər/",
      translation: "втратити терпіння",
      image: "https://img.freepik.com/free-vector/angry-woman-concept-illustration_114360-17662.jpg?t=st=1745174969~exp=1745178569~hmac=9eff11f9e965ec7ad10df58bddb3b3c2a72f087ab75c42f76e30473e95657fa7&w=1060",
      example: "Example: He lost his temper during the meeting."
    },
    'respond': {
      word: "respond",
      pronunciation: "/rɪˈspɒnd/",
      translation: "відповідати",
      image: "https://img.freepik.com/premium-vector/respond-citizen-complaints-abstract-concept-vector-illustration-local-government-representative-talking-with-citizen-politician-occupation-city-council-embassy-sector-abstract-metaphor_107173-55055.jpg?w=1800",
      example: "Example: She didn't respond to my message."
    },
    'screamat': {
      word: "scream (at)",
      pronunciation: "/skriːm æt/",
      translation: "кричати (на)",
      image: "https://img.freepik.com/premium-vector/trendy-vintage-collage-concept-halftone-screaming-female-mouth-retro-newspaper-torn-paper-elements-banners-posters-social-networks_511725-2075.jpg?w=1060",
      example: "Example: He screamed at the referee in anger."
    },
    'anger': {
      word: "anger",
      pronunciation: "/ˈæŋ.ɡər/",
      translation: "злість",
      image: "https://img.freepik.com/free-photo/mad-outraged-young-woman-looking-with-scorn-hatred-clench-teeth-cross-arms-chest-hate-someone_176420-26479.jpg?t=st=1745175116~exp=1745178716~hmac=db876a267e449840c1b3daf9773b2f5224308dc0522e852130a3ee95aa54ec3c&w=1800",
      example: "Example: He couldn’t control his anger."
    },
    'appreciate': {
      word: "appreciate",
      pronunciation: "/əˈpriː.ʃi.eɪt/",
      translation: "цінувати",
      image: "https://img.freepik.com/free-vector/thank-you-card-concept-illustration_114360-27845.jpg?t=st=1745175160~exp=1745178760~hmac=a0ee49e5db900355392d21baed1d32f0980b9acbcde136580f21e60e22e8785f&w=1060",
      example: "Example: I appreciate your help."
    },
    'expectation': {
      word: "expectation",
      pronunciation: "/ˌek.spekˈteɪ.ʃən/",
      translation: "очікування",
      image: "https://img.freepik.com/free-vector/decision-fatigue-concept-illustration_114360-8909.jpg?t=st=1745175213~exp=1745178813~hmac=2be5cc78091011be28482214122781812833e3188761ec59d10ef7e07c50eca4&w=1060",
      example: "Example: The results exceeded our expectations."
    },
    'frustration': {
      word: "frustration",
      pronunciation: "/frʌsˈtreɪ.ʃən/",
      translation: "розчарування",
      image: "https://img.freepik.com/free-photo/stressed-young-businessman-overworking_53876-47129.jpg?t=st=1745175262~exp=1745178862~hmac=3033b73e38be00a67d2aacffbe6c82f6120bbb7ffd5c2c21d7ac5998e74314c0&w=1800",
      example: "Example: She expressed her frustration with the process."
    },
    'getonmynerves': {
      word: "get on my nerves",
      pronunciation: "/ɡet ɒn maɪ nɜːvz/",
      translation: "діяти мені на нерви",
      image: "https://img.freepik.com/premium-photo/depressed-man-with-palms-his-cheeks-is-thinking_266732-27228.jpg?w=1060",
      example: "Example: His constant talking gets on my nerves."
    },
    'heartsinks': {
      word: "(your) heart sinks",
      pronunciation: "/hɑːt sɪŋks/",
      translation: "тобі стає сумно",
      image: "https://img.freepik.com/free-vector/flat-blue-monday-illustration_52683-151006.jpg?t=st=1745175327~exp=1745178927~hmac=c6790b9e0b2769f30e8c2aa01fc9a3cd5f5610d07d097f1332b39df36d8f6cc2&w=1060",
      example: "Example: My heart sank when I saw the test results."
    },
    'irritated': {
      word: "irritated",
      pronunciation: "/ˈɪr.ɪ.teɪ.tɪd/",
      translation: "роздратований",
      image: "https://img.freepik.com/free-vector/angry-man-concept-illustration_114360-30221.jpg?t=st=1745175374~exp=1745178974~hmac=5939452dc356eb36f55d7a3eca48e9f06c5cd949f9a68e71dcf9dbbe7e7d1b20&w=1060",
      example: "Example: He was clearly irritated by the delay."
    },
    'irritating': {
      word: "irritating",
      pronunciation: "/ˈɪr.ɪ.teɪ.tɪŋ/",
      translation: "дратівливий",
      image: "https://img.freepik.com/premium-vector/angry-man-woman-arguing-having-conflict-with-somebody-vector-illustration_178650-60861.jpg?w=1060",
      example: "Example: The sound of dripping water is irritating."
    },
    'passionateabout': {
      word: "passionate about",
      pronunciation: "/ˈpæʃ.ən.ət əˈbaʊt/",
      translation: "захоплений чимось",
      image: "https://img.freepik.com/premium-photo/portrait-young-woman-standing-against-buildings_1048944-23739773.jpg?w=1800",
      example: "Example: She is passionate about art."
    },
    'pressure': {
      word: "pressure",
      pronunciation: "/ˈpreʃ.ər/",
      translation: "тиск",
      image: "https://img.freepik.com/free-vector/stress-concept-illustration_114360-28949.jpg?t=st=1745175503~exp=1745179103~hmac=b489289187153a004eca9c942a680fad2a663c07ab5089d311f2f746f2bef61f&w=1060",
      example: "Example: He works well under pressure."
    },
    'thrilling': {
      word: "thrilling",
      pronunciation: "/ˈθrɪl.ɪŋ/",
      translation: "захопливий",
      image: "https://img.freepik.com/free-photo/young-man-exercising-indoor-climbing-gym_654080-262.jpg?t=st=1745175578~exp=1745179178~hmac=6ac449e1108ff3da3392a88b525f2d4d180557c0d7a7183a37ae6a55e5f51b6d&w=1800",
      example: "Example: Skydiving was a thrilling experience."
    }
  };
  

const container = document.getElementById('container-word');
for (const key in words) {
  if (words.hasOwnProperty(key)) {
    const element = `
      <div class="word-card">
        <p class="word-title">${words[key].word}</p>
        <button class="details-button" onclick="openCard('${key}')">Details</button>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', element);
  }
}



function openCard(word1){
    const container= document.getElementById('card')
    container.innerHTML=''
    const item=words[word1]
    const mainWord=document.createElement('p')
    mainWord.classList.add('word-title')
    mainWord.innerText=item.word
    const closeButton=document.createElement('button')
    closeButton.textContent='Close'
    closeButton.classList.add('close-button')
    closeButton.addEventListener('click',closeCard)

    const pronunciationWord=document.createElement('p')
    pronunciationWord.innerText=item.pronunciation

    const translationWord=document.createElement('p')
    translationWord.innerText=item.translation
    translationWord.style.marginBottom='1.5rem'

    const imageWord=document.createElement('img')
    imageWord.src=item.image
    imageWord.style.marginBottom='1.5rem'

    const exampleWord=document.createElement('p')
    exampleWord.innerText=item.example

    container.appendChild(mainWord)
    container.appendChild(pronunciationWord)
    container.appendChild(translationWord)
    container.appendChild(imageWord)
    container.appendChild(exampleWord)
    container.appendChild(closeButton)
    document.getElementById('modal').style.display='flex'
}
function closeCard(){
    document.getElementById('modal').style.display='none'
}