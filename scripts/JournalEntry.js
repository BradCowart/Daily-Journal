const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            ${entry.concept}
            ${entry.entry}
        </section>
    `
}

export default JournalEntryComponent