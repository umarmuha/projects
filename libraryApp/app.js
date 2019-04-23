$(document).ready(function () {
    const library = new Library();
    const book = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', '978-0439708180');
    const patron = new Patron('Johnny Bravo', 'awesome@awesome.com');

    // console.log(library);
    // console.log(book);
    // console.log(patron);

    library.addBook(book);
    library.addPatron(patron);
    //console.log(library);

    patron.checkout(book);
    //console.log(book);

    // patron.returnBook(book);
    // console.log(book);

    
    console.log(patron);
    console.log(library.chargeFines());
    console.log(library.chargeFines());
    console.log(library.chargeFines());
});