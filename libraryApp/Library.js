class Library {
    constructor(books, patrons, dailyFine) {
        this.books = [];
        this.patrons = [];
        this.dailyFine = 0.1;
    }

    // Methods that represent library function
    addBook(book) {
        this.books.push(book);
    };

    addPatron(patron) {
        this.patrons.push(patron);
    };

    chargeFines(){
        
    };
}