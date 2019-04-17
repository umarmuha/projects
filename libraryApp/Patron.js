class Patron {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.currentBook = null; // A new Patron will not have any books checked so passing null
    }

    // Methods representing a Patreon function
    checkout(book) {
        this.currentBook = book;
        book.out = true;
        book.patron = this;

        /*
         Use setter method in the Book class to make the code
         more efficient and dynamic. Instead of defining due date here
         it will be calculated and set in the setter method of Book class
        */
        // const newDueDate = new Date();
        // newDueDate.setDate(newDueDate.getDate() + 14);
        // book.dueDate = newDueDate;
    };

    returnBook(book) {
        this.currentBook = null;
        book.out = false;
        // See comment above about using Setter method in Book class
        // book.patron = null;
        // book.dueDate = null;
    };
}