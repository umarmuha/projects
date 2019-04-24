$(document).ready(function () {
    const library = new Library();
    const book = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', '978-0439708180');
    const patron = new Patron('Johnny Bravo', 'awesome@awesome.com');


    const book2 = new Book('Talent is overrated', 'David', '979-0439708180');
    const patron2 = new Patron('Gumby', 'sauce@awesome.com');

    // console.log(library);
    // console.log(book);
    // console.log(patron);

    library.addBook(book);
    library.addPatron(patron);

    library.addBook(book2);
    library.addPatron(patron2);
    console.log(library);

    patron.checkout(book);
    patron2.checkout(book2);
    //console.log(book);

    // patron.returnBook(book);
    // console.log(book);

    
    console.log(patron);
    console.log(patron2);
    console.log(library.chargeFines());
    console.log(library.chargeFines());
    console.log(library.chargeFines());

    console.log(library.overdue);
});