import { useJournalEntries, getEntries, deleteEvent } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector("#entryLog")

const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEvent--")) {
        const [_, eventId] = clickEvent.target.id.split("--")
        deleteEvent(eventId)
    }
})

eventHub.addEventListener("eventStateChanged", customEvent => {
    render()
})

const render = () => {
    getEntries().then(() => {
        const allTheEntries = useJournalEntries()

        contentTarget.innerHTML = allTheEntries.map(
            currentEntryObject => {
                return JournalEntryComponent(currentEntryObject)
            }
        ).join("")
    })
}

const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries().then(()=> {
        const entries = useJournalEntries()
        for (const entry of entries) {
            /*
                Invoke the component that returns an
                HTML representation of a single entry
            */
            entryLog.innerHTML += JournalEntryComponent(entry)
        }
    })
        

}

export default EntryListComponent