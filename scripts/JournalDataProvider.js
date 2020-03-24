let entries = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const eventStateChangedEvent = new CustomEvent("eventStateChanged")

    eventHub.dispatchEvent(eventStateChangedEvent)
}
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
    }

export const getEntries = () => {
    return fetch('http://localhost:8088/entries')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })
    }
        
    export const deleteEvent = entryId => {
        return fetch(`http://localhost:8088/entries/${entryId}`, {
            method: "DELETE"
        })
            .then(getEntries)
            .then(dispatchStateChangeEvent)
    }
    
    
    export const saveEntry = entry => {
            return fetch('http://localhost:8088/entries', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            .then(getEntries)
            .then(dispatchStateChangeEvent)
}