// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id attribute of the <h1> element to 'victory'
newHeader.setAttribute('id', 'victory');

// Set the text content of the <h1> element to "YOUR-NAME is the champion"
const yourName = "John Doe"; // Replace 'John Doe' with your desired name
newHeader.textContent = `${yourName} is the champion`;

// Append the <h1> element to the document body (or any other desired location)
document.body.appendChild(newHeader);
