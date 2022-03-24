const quoteContainer = document.getElementById("container")
const quoteText = document.getElementById("quote")
const quoteAuthor = document.getElementById("Author")
const quoteBtn = document.getElementById("new-quote")
const quoteLoader = document.getElementById("loader")

let apiQuoates = [];

function showLoaderSp(){
    quoteLoader.hidden = false ;
    quoteContainer.hidden = true ;
}

function removeLoaderSp(){
    quoteLoader.hidden = true ;
    quoteContainer.hidden = false ;
}

async function getQuotes(){
    showLoaderSp() ;
    const apiUrl = "https://type.fit/api/quotes" ;
    try{
        const response = await fetch(apiUrl) ;
        apiQuoates = await response.json() ;
        newQuotes() ;
    }catch(error){
        console.log(error) ;
    }
}

function newQuotes(){
    showLoaderSp() ;
    setTimeout(function (){
        const quote = apiQuoates[Math.floor(Math.random()*apiQuoates.length)] ;  
        if(!quote.author){
            quoteAuthor.textContent = 'Unknow' ;
        }else{
            quoteAuthor.innerText = quote.author ;
           // quoteAuthor.textContent = quote.author ;
        }
        // if(quote.text.length>100){
        //     quoteText.classList.add("long-quote") ;
        // }else{
        //     quoteText.classList.remove("long-quote") ;
        // }
        quoteText.innerHTML = quote.text ;
        //quoteText.textContent = quote.text ;
        removeLoaderSp() ;
    } ,800)
}


getQuotes() ;
quoteBtn.addEventListener("click" ,newQuotes)
