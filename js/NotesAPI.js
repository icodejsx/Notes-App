export default class NotesAPI{
    static getAllNotes(){
        const notes = JSON.parse(localStorage.getItem('notesapp-notes') || "[]"); 

        return notes.sort((a,b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        }) ; 
    }
    //  saving the notes to a localStorage 
    static saveNote (noteToSave){
        const notes = NotesAPI.getAllNotes();
        const exisiting = notes.find(note => note.id == noteToSave.id);

        // editing and upating
        if(exisiting){
            exisiting.title = noteToSave.title;
            exisiting.body = noteToSave.body;
            exisiting.updated = new Date ().toISOString();
        }
        else{
           // creating a local storage and adding the name of the local soragte 
        noteToSave.id = Math.floor(Math.random () * 1000000);
        noteToSave.updated = new Date ().toISOString();
        notes.push(noteToSave);
        }

       
        localStorage.setItem("notesapp-notes", JSON.stringify(notes))
    }


    // for the delete Note
    static deleteNote(id){
         const notes = NotesAPI.getAllNotes();
         const newNotes = notes.filter(note => note.id != id);

              
        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes))
    }
}