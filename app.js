

let form1 = document.getElementById("myForm");
const handelForm = (e) => {
    e.preventDefault();
    const word1 = document.forms['myForm']['text'].value;
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '69fd728e7cmsh13bf028a5362847p16344fjsnaa4959723957',
            'X-RapidAPI-Host': 'english-synonyms.p.rapidapi.com'
        }
    };
    
    fetch(`https://english-synonyms.p.rapidapi.com/${word1}`, options)
        .then(response => response.json())
        .then(response => {
            
                response.synonyms.map((cval) =>{
                    document.getElementById('result1').innerHTML+=`
                    
                    <h1>${cval}</h1>
                    `
                })
            
        
        })
        .catch(err => console.error(err));
 

    }
form1.addEventListener('submit', handelForm)
