export default class App {
    constructor(root){
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root);
    }
}