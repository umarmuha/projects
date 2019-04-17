class Library {
    constructor(books, patrons) {
        this.books = [];
        this.patrons = [];
    }

    // Methods that represent library function
    addBook(book) {
        this.books.push(book);
    };

    addPatron(patron) {
        this.patrons.push(patron);
    };
}