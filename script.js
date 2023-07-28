const BLOCK_CONTAINER = document.querySelector('.grid');

let gridLength = 16;

// Dynamically adapts CSS to user's selected grid size
const STYLESHEET = document.styleSheets[0];
let gridCSS;
let blockLength = 720 / gridLength;
for (let i = 0; i < STYLESHEET.cssRules.length; i++) {
   if (STYLESHEET.cssRules[i].selectorText === '.block') {
      gridCSS = STYLESHEET.cssRules[i];
   }
}
gridCSS.style.setProperty('width', blockLength + 'px');
gridCSS.style.setProperty('height', blockLength + 'px');


// Iteratively creates BLOCK divs
let totalBlocks = gridLength * gridLength;
for (let i = 0; i < totalBlocks; i++) {
   let newBlock = document.createElement('div');
   newBlock.classList.add('block');
   BLOCK_CONTAINER.appendChild(newBlock);
}