import notes from "./state";
import {NoteListItem} from './components/note-list-item'

const notes_list = document.querySelector('.notes-list')

export function addNote(data) {}
export function deleteNote(id) {}
export function editNote(id) {}

export function loadNotes() {
    const _notes = new notes().getNotes()

    _notes.map((data) => {
        notes_list.innerHTML += NoteListItem(data)
    })
}