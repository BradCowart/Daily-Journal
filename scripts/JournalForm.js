import { saveEntry } from "./JournalDataProvider.js"
const contentTarget = document.querySelector(".entryForm")
const eventHub = document.querySelector(".container")

let visibility = true
/*
eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})*/

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        const concept = document.querySelector("#Concept").value
        const entry = document.querySelector("#Entry").value
        
        // Make a new object representation of entry
        const newEntry = {
            concept: concept,
            entry:entry
            //criminal: criminalName,
            //timestamp: Date.now()
        }

        // Change API state and application state
        saveEntry(newEntry)
    }
})

const render = () => {
    //contentTarget.classList.add("invisible")
    contentTarget.innerHTML = `
        <fieldset>
            <label for="Concept">Concept:</label>
            <input type="text" id="Concept">
        </fieldset>
        <fieldset>
            <label for="Entry">Entry:</label>
            <input type="text" id="Entry">
        </fieldset>
        <button id="saveEntry">Save Entry</button>
    `
}

const EntryForm = () => {
    render()
}

export default EntryForm                       
