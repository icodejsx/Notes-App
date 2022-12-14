import NotesView from "./NotesView.js";




export default class App {
    constructor(root){
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handlers());
    }


    _handlers(){
        return {
            noNoteSelect: noteId => {
                console.log("note selected: " + noteId);
            },
            noNoteAdd: () => {
                console.log("Note add");
            },
            noNoteEdit: (title, body) => {
                console.log(title, body);
            },
            noNoteDelete: noteId => {
                console.log("note Delete: " + noteId);
            },
        }
    }
} 