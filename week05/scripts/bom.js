document.title = "The Book of Mormon"

//document.body.style.backgroundColor = "black";
console.log(document);

// 1. References to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2. Initialize the array by calling getChapterList, or an empty array if null
let chaptersArray = getChapterList() || [];

// 3. Populate the displayed list from the stored array
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// 4. Button Click Event Listener
button.addEventListener('click', () => {
    if (input.value !== '') { // Check if input is not empty
        displayList(input.value); // Output the submitted chapter to the UI
        chaptersArray.push(input.value); // Add the chapter to our logic array
        setChapterList(); // Sync the array to localStorage
        input.value = ''; // Clear the input
        input.focus(); // Return focus to the input field
    }
});

// 5. Function to create and display a list item
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');

    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');

    li.append(deletebutton);
    list.append(li);

    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        // Call deleteChapter to remove it from the array and localStorage
        deleteChapter(li.textContent); 
        input.focus();
    });
}

// 6. Function to save the array to localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// 7. Function to get the array from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// 8. Function to remove a specific chapter
function deleteChapter(chapter) {
    // Slices off the ❌ character at the end of the string
    chapter = chapter.slice(0, chapter.length - 1);

    // Filter the array to keep everything except the deleted chapter
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    // Update localStorage with the new filtered array
    setChapterList();
}
