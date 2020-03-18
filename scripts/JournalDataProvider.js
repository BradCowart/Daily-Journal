/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
let entries = [
   /* {
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Tired"
    },

    {
        date: "02/24/2020",
        concept: "GitHub",
        entry: "Introduced and worked with GitHub.",
        mood: "Tired"
    },
    {
        date: "02/25/2020",
        concept: "Project 1",
        entry: "Worked in groups to create simple web page.",
        mood: "Tired"
    },
    {
        date: "02/26/2020",
        concept: "Dynamic javascript",
        entry: "Introduced and worked on dynamic javascript.",
        mood: "Tired"
    }
*/
]

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
    return fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })
    }
        export const saveEntry = entry => {
            return fetch('http://localhost:3000/entries', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            .then(getEntries)
            .then(dispatchStateChangeEvent)
}