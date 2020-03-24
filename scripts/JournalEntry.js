const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            ${entry.date}
            ${entry.concept}
            ${entry.entry}
            ${entry.Mood}
            <p>
                <button id="deleteEvent--${entry.id}">Delete</button>
            </p>
        </section>
    `
}

export default JournalEntryComponent