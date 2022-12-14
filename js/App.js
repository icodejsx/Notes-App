import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";




export default class App {
    constructor(root){
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handlers());

        this._refreshNotes();
    }

        _refreshNotes() {
            const notes = NotesAPI.getAllNotes();

            this._setNotes(notes);

            if (notes.length > 0 ){
                this-_setActiveNotes(notes[0]);
            }
        }


        _setNotes(notes) {
            this.notes = notes;
            this.view.updateActiveNote(notes);
            this.view.updateNotePreviewVisibility(notes.length > 0);
        }

        _setActiveNotes (note){
            this.activeNote = note;
            this.view.updateActiveNote(note);
        }

    _handlers(){
        return {
            noNoteSelect: noteId => {
                console.log("note selected: " + noteId);
            },
            onNoteAdd: () => {
                console.log("Note add");
            },
            onNoteEdit: (title, body) => {
                console.log(title, body);
            },
            onNoteDelete: noteId => {
                console.log("note Delete: " + noteId);
            },
        }
    }
} 