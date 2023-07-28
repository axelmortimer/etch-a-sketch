const BLOCK_CONTAINER = document.querySelector('.grid');

let gridLength = 16;

function generateGrid() {

   // Dynamically adapts CSS to user's selected grid size
   const STYLESHEET = document.styleSheets[0];
   let gridCSS;
   let blockLength = 600 / gridLength;
   for (let i = 0; i < STYLESHEET.cssRules.length; i++) {
      if (STYLESHEET.cssRules[i].selectorText === '.block') {
         gridCSS = STYLESHEET.cssRules[i];
      }
   }
   gridCSS.style.setProperty('width', blockLength + 'px');
   gridCSS.style.setProperty('height', blockLength + 'px');


   // Iteratively creates block divs
   let newBlock;
   let totalBlocks = gridLength * gridLength;
   for (let i = 0; i < totalBlocks; i++) {
      newBlock = document.createElement('div');
      newBlock.classList.add('block');
      BLOCK_CONTAINER.appendChild(newBlock);
   }

   // Adds event listeners to all blocks
   const gridList = BLOCK_CONTAINER.querySelectorAll('div');
   gridList.forEach(function (blockInstance) {
      blockInstance.addEventListener('mouseover', () => {
         blockInstance.classList.add('hover');
      });
   });

}

// Allow user to change dimensions on button click
function changeDimensions() {
   gridLength = prompt("Enter your desired height/length (max of 100):");
   if (gridLength >= 100) {
      alert("You fucking idiot! I said no more than 100!");
      return;
   }
   reset();
}

// Resets grid
function reset() {
   const DELETED_BLOCKS = BLOCK_CONTAINER.querySelectorAll('div');
   DELETED_BLOCKS.forEach(function (blockInstance) {
      BLOCK_CONTAINER.removeChild(blockInstance);
   });
   generateGrid();
}

generateGrid();