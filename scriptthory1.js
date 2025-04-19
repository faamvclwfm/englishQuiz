const words = {
    'fireworks':{
        word: "fireworks",
        pronunciation: "/ˈfaɪərwɜːks/",
        translation: "феєрверки",
        image: "https://japaclip.com/en/files/fireworks.png",
        example: "Example: We watched the fireworks light up the night sky."
    },
    'anxiety':{
        word: "anxiety",
        pronunciation: "/æŋˈzaɪ.ə.ti/",
        translation: "тривожність",
        image: "https://sakurasakunihongo.com/wp-content/uploads/2022/04/image-9.png?w=400",
        example: "Example: He felt a surge of anxiety before the exam."
    },
    'lifetime': {
      word: "lifetime",
      pronunciation: "/ˈlaɪf.taɪm/",
      translation: "життя, тривалість життя",
      image: "https://st3.depositphotos.com/4488031/33245/v/450/depositphotos_332450178-stock-illustration-modern-vector-illustration-of-old.jpg",
      example: "Example: He traveled the world during his lifetime."
    },
    'neverending': {
      word: "never-ending",
      pronunciation: "/ˌnev.ərˈen.dɪŋ/",
      translation: "безкінечний",
      image: "https://st.depositphotos.com/1007113/2988/i/450/depositphotos_29882447-stock-illustration-never-ending-art-deco-corridor.jpg",
      example: "Example: It felt like a never-ending journey."
    },
    'teaspoon': {
      word: "teaspoon",
      pronunciation: "/ˈtiː.spuːn/",
      translation: "чайна ложка",
      image: "https://st.depositphotos.com/32990740/55251/v/450/depositphotos_552511948-stock-illustration-metal-spoon-design.jpg",
      example: "Example: Add a teaspoon of honey."
    },
    'underestimate': {
      word: "underestimate",
      pronunciation: "/ˌʌn.dəˈres.tɪ.meɪt/",
      translation: "недооцінювати",
      image: "https://thumbs.dreamstime.com/b/don-t-underestimate-opponents-2405972.jpg",
      example: "Example: Don't underestimate her abilities."
    },
    'wellaware': {
      word: "well aware",
      pronunciation: "/wel əˈweər/",
      translation: "добре обізнаний",
      image: "https://st.depositphotos.com/1663755/3197/i/450/depositphotos_31972313-stock-photo-3d-man-showing-stack-of.jpg",
      example: "Example: She was well aware of the risks."
    },
    'widespread': {
      word: "widespread",
      pronunciation: "/ˌwaɪdˈspred/",
      translation: "широко розповсюджений",
      image: "https://art-fotoshpalery.com.ua/61139-large_default/product-3501010128.jpg",
      example: "Example: The disease became widespread."
    },
    'chewup': {
      word: "chew up",
      pronunciation: "/ʧuː ʌp/",
      translation: "жувати, гризти",
      image: "https://alexandrialivingmagazine.com/downloads/201/download/Champ%20chewing.jpg?cb=71323211f4a82e09dee6ab5a067e1fd1&w=3024",
      example: "Example: The dog started to chew up the pillows."
    },
    'chillipepper': {
      word: "chilli pepper",
      pronunciation: "/ˈʧɪl.i ˈpep.ər/",
      translation: "перець чилі",
      image: "https://img.freepik.com/premium-vector/red-hot-chili-pepper-realistic-image_98292-2560.jpg",
      example: "Example: Chilli peppers can be very spicy."
    },
    'spice': {
      word: "spice",
      pronunciation: "/spaɪs/",
      translation: "пряний",
      image: "https://t4.ftcdn.net/jpg/01/02/58/91/360_F_102589163_hk02O92vzEYP0rZbVyvDTbkje1GaUDk1.jpg",
      example: "Example: This dish has a lot of spice."
    },
    'sweat': {
      word: "sweat",
      pronunciation: "/swet/",
      translation: "піт / пітніти",
      image: "https://hips.hearstapps.com/hmg-prod/images/articles/2016/06/sweating-1508864602.jpg?resize=640:*",
      example: "Example: He began to sweat under pressure."
    },
    'sweets': {
      word: "sweets",
      pronunciation: "/swiːts/",
      translation: "цукерки",
      image: "https://www.sweets4me.co.uk/cdn/shop/collections/traditionalloose.jpg?v=1634895788",
      example: "Example: Children love eating sweets."
    },
    'whole': {
      word: "whole",
      pronunciation: "/hoʊl/",
      translation: "цілий",
      image: "https://snrpizza.com/images/products/65cd986d3c446_1707972717.jpg",
      example: "Example: He ate the whole cake."
    },
    'fine': {
      word: "fine",
      pronunciation: "/faɪn/",
      translation: "штраф",
      image: "https://img.freepik.com/premium-vector/stressed-businessman-getting-fine-ticket_175634-43097.jpg",
      example: "Example: He had to pay a fine for speeding."
    },
    'freedom': {
      word: "freedom",
      pronunciation: "/ˈfriː.dəm/",
      translation: "свобода",
      image: "https://t4.ftcdn.net/jpg/01/46/72/35/360_F_146723571_zB8yGSQye44pWBiUWZBdWIMxSdSm8Vuy.jpg",
      example: "Example: They fought for their freedom."
    },
    'healthandsafety': {
      word: "health and safety",
      pronunciation: "/helθ ənd ˈseɪf.ti/",
      translation: "здоров'я та безпека",
      image: "https://i0.wp.com/stockwellsafety.com/wp-content/uploads/2018/08/tumblr_inline_owbkhyKBub1v4eupn_540.png?fit=540%2C341&ssl=1",
      example: "Example: Health and safety rules must be followed."
    },
    'overthespeedlimit': {
      word: "over the speed limit",
      pronunciation: "/ˈoʊ.vər ðə spiːd ˈlɪ.mɪt/",
      translation: "поза лімітом швидкості",
      image: "https://www.adci.com/hubfs/Posted%20Speed%20Limit%20Database%20Entry.jpg",
      example: "Example: He was driving over the speed limit."
    },
    'speeding': {
      word: "speeding",
      pronunciation: "/ˈspiː.dɪŋ/",
      translation: "перевищення швидкості",
      image: "https://www.myimprov.com/wp-content/uploads/2014/12/speeding.jpg",
      example: "Example: Speeding is a common traffic violation."
    },
    'termsandconditions': {
      word: "terms and conditions",
      pronunciation: "/tɜːmz ənd kənˈdɪʃ.ənz/",
      translation: "правила та умови",
      image: "https://cdn.betterproposals.io/blog/media.npr.org/assets/img/2020/03/04/accept_terms_wide-d65e4c6e4c775f09d49a6bf8b299cebe037f4459-s800-c85.jpg",
      example: "Example: Read the terms and conditions carefully."
    }
}

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