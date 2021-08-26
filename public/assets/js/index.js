let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

//to show an element
const show = (elem) => {
    elem.style.display = 'none';
};

//to hide an element
const hide = (elem) => {
    elem.style.display = 'none';
};

//activeNote used to track of the notes in the text area
let activeNote = {};

const getNotes = () =>
    fetch('/api/notes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

const saveNote = (note) =>
    fetch('api/notes', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(note),
    });

const deleteNote = (id) =>
    fetch('/api/notes/${id}', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });

const renderActiveNote = () => {
    hide(saveNoteBtn);

    if (activateNote.id) {
        noteTitle.setAttribute('readonly', true);
        noteText.setAttribute('readonly', true);
        noteTitle.value = '';
        noteText.value = '';
    }
};

const handleNoteSave = () => {
    const newNote = {
        title: noteTitle.value,
        text: noteText.value,
    };
    console.log("click btn work")
    saveNote(newNote).then(() => {
        getAndRenderNotes();
        renderActiveNote();
    });
}