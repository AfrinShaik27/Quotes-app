function generateQuote()
{
    let Quotecontaier=document.getElementById("quote");
    let mainauthor=document.getElementById("author");
    let mainauthorOne=document.getElementById("author-1");

    let mainauthorTwo=document.getElementById("author-2");

    let mainauthorThree=document.getElementById("author-3");

    // Quotecontaier.innerHTML = "Life is not easy to everyone";
    // mainauthor.innerHTML = "afrin";
    let randomNumber=Math.floor(Math.random()*10)
    // console.log(randomNumber)

    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      Quotecontaier.innerHTML =data[randomNumber].text
      mainauthor.innerHTML=data[randomNumber].author
      mainauthorOne.innerHTML=data[randomNumber-1].author

      mainauthorTwo.innerHTML=data[randomNumber+1].author

      mainauthorThree.innerHTML=data[randomNumber+2].author


      console.log(data[randomNumber].text);
    });
}