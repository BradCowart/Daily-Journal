import { saveEntry } from "./JournalDataProvider.js"
const contentTarget = document.querySelector(".entryForm")
const eventHub = document.querySelector(".container")
/*
let visibility = true

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
        const date = document.querySelector("#Date").value
        const concept = document.querySelector("#Concept").value
        const entry = document.querySelector("#Entry").value
        const mood = document.querySelector("#Mood").value
        
        // Make a new object representation of entry
        const newEntry = {
            date:date,
            concept: concept,
            entry:entry,
            Mood:mood

        }

        // Change API state and application state
        saveEntry(newEntry)
    }
})

const render = () => {
    //contentTarget.classList.add("invisible")
    contentTarget.innerHTML = `
        <fieldset>
            <label for="journalDate">Date</label>
            <input type="date" name="Date" id="Date">    
        </fieldset>
        <fieldset>
            <label for="Concept">Concept:</label>
            <input type="text" id="Concept">
        </fieldset>
        <fieldset>
            <label for="Entry">Entry:</label>
            <input type="text" id="Entry">
        </fieldset>
        <fieldset>
        <label for="Mood">Mood</label>
            <select id="Mood">                      
                <option value="">-- Select --</option>
                <option value=Happy>Happy</li>
                <option value="Fair">Fair</li>
                <option value="Tired">Tired</li>
                <option value="Distraught">Distraught</li>
            </select>
        </fieldset>
        <button id="saveEntry">Save Entry</button>
    `
}

const EntryForm = () => {
    render()
}

export default EntryForm                       
