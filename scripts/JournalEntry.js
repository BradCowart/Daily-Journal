const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            ${entry.date}
            ${entry.concept}
            ${entry.entry}
            ${entry.Mood}
        </section>
    `
}

export default JournalEntryComponent