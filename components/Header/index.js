// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headContainer = document.querySelector('.header-container')
headContainer.appendChild(Header());

function Header() {
    //create elements according to html tree
    const newHeader = document.createElement('div');
    const newDate = document.createElement('span');
    const newTitle = document.createElement('h1');
    const newTemp = document.createElement('span');

    //add class names
    newHeader.classList.add('header');
    newDate.classList.add('date');
    newTemp.classList.add('temp');

    //add content to elements
    newDate.textContent = 'March 28, 2019';
    newTitle.textContent = 'Lambda Times';
    newTemp.textContent = '98°';

    //append children to newHeader element
    newHeader.appendChild(newDate);
    newHeader.appendChild(newTitle);
    newHeader.appendChild(newTemp);


    return newHeader;
}
