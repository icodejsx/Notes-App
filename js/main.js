import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd(){
        console.log("lets Add a a New Note ")
    },

    onNoteEdit(newTitle, newBody){
        console.log(newTitle)
        console.log(newBody)
    }
});

view.updateNoteList(NotesAPI.getAllNotes());