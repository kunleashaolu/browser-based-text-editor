const genId = () => Math.random().toString(16).slice(2)

// export default class notes {
//     constructor(data) {
//         this.data = [
//             {title: 'Notes 1', id: genId()},
//             {title: 'Notes 2', id: genId()},
//             {title: 'Notes 3', id: genId()}
//         ]
//     }
//
//     getNotes() {
//         return this.data
//     }
//
//     addNote(data) {
//         const newNote = {...data, id: genId() }
//         this.data = [...this.data, newNote]
//     }
//
// }