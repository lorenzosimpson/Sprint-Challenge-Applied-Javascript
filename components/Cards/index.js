// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response, 'cards data')
})
.catch(err => {
    console.log(err)
})

function createCard(obj) {

    //create dom elements
    const newCard = document.createElement('div');
    const newHeadline = document.createElement('div')
    const newAuthor = document.createElement('div');
    const newImgContainer = document.createElement('div');
    const newImage = document.createElement('img');
    const newAuthorName = document.createElement('span');

    //add classes 
    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    newImgContainer.classList.add('img-container');
    
    //add content to elements

    //append to parent elements
    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(newImgContainer);
    newImgContainer.appendChild(newImage);
    newAuthor.appendChild(newAuthorName);


    return newCard;
}