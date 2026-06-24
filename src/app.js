const noteInput = document.getElementById('note');
const addNoteButton = document.getElementById('addNoteButton');
const notesList = document.getElementById('notes');
const errorDiv = document.getElementById('errorDiv');

const handleAddNoteClick = () => {
  const currentValue = noteInput.value;
  notesList.innerHTML = `${notesList.innerHTML}<li>${currentValue}</li>`;
};

if (addNoteButton) {
  addNoteButton.addEventListener('click', handleAddNoteClick);
}
