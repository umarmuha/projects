class Library {
    constructor(books, patrons, dailyFine, overdue) {
        this.books = [];
        this.patrons = [];
        this.dailyFine = 0.1;
        this.overdue = [];
    }

    // Methods that represent library function
    addBook(book) {
        this.books.push(book);
    };

    addPatron(patron) {
        this.patrons.push(patron);
    };
    /*
        TODO:   
        Add a method called chargeFines() to the Library class 
        that finds all Patrons with overdue books and 
        charges them the daily fine for every day their book is late.
    */

    chargeFines() {

        // Switching to the array filter method instead of using $.each JQ method
        // JQ method will require duplication and also the "this" keyword in the JQ
        // method points to the element and not the Library class
        const today = new Date();
        const latePatrons = this.patrons.filter(patron => patron.currentBook !== null && patron.currentBook.dueDate < today);

        // Challenge: run chargesfine() method without doubling the fine for the patron
        const lateChragedPatron = [];
        console.log(lateChragedPatron);
        
        // Using for .. of loop to iterate over array objects. Not using
        // for..in since that iterated over properties
        for (const latePatron of latePatrons) {
            // If patron is already charged, charge him only for the difference of days since last check
            if (lateChragedPatron.includes(latePatron.name)) {
                console.log("Dont Charge")
            } else {
                const daysLate = today.getDate() - latePatron.currentBook.dueDate.getDate();
                latePatron.balance += (daysLate * this.dailyFine);
                lateChragedPatron.push(latePatron.name);              
            }
            
            console.log(lateChragedPatron);
        }





        //     let latePatrons = [];
        //     $.each(this.patrons, function (key, patron) {   
        //         const today = new Date();
        //         if (patron.currentBook !== null && patron.currentBook.dueDate < today) {
        //             latePatrons.push(this);
        //         }
        //     });
        //     for (const patron of latePatrons) {
        //         console.log(patron);
        //         console.log(this);
        //     }
        // }
        // // const dateDiff = today.getDate() - patron.currentBook.dueDate.getDate();
        // // console.log(typeof (dateDiff));
        // // patron.balance += (this * dateDiff).toFixed(5);
        // // console.log(patron.balance)

    };
}