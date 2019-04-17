class Book {
    constructor(title, author, isbn, out, dueDate, patron) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.out = false;
        this.dueDate = null;
        this.patron = null;
    }

    get out(){
        return this._out;
    }
    set out(boolean){
        this._out = boolean;
        if (this._out = true) {
            const newDueDate = new Date();
            newDueDate.setDate(newDueDate.getDate() + 14);
            this.dueDate = newDueDate;
        } else {
            this.dueDate = false;
            this.patron = null;
        }
    };
}