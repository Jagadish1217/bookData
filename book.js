const readline = require('readline');

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const EventEmitter = require("events");


const eventEmitterFirst = new EventEmitter();



var books = ["Rich dad poor dad", "Yaana", "Angulimala", "Bhagavadgita"];


eventEmitterFirst.on("listening story", () => {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i]);
    }

});

eventEmitterFirst.on("try", () => {
    allBook();

});

var j = 0;

function allBook() {

    console.log("Press 1 , 2, or 3");
    console.log("1. Show All books");
    console.log("2. Add a new Book");
    console.log("3. Quit");

    readline1.question("Write the option: ", (option) => {
        if (option == "1") {
            eventEmitterFirst.emit("listening story");
            eventEmitterFirst.emit("try");

        } else if (option == "2") {
            readline1.question("Write the name of the book: ", (bookname) => {
                books.push(bookname);
                //console.log(books);
                console.log("Your book has been succesfully added");
                allBook();
            });


        } else if (option == "3") {
            readline1.question("Are you sure you want to quit(Y/N): ", (check) => {
                if (check == "Y" || check == "y") readline1.close();
                else allBook();
            });

        }
        else {
            console.log("Input option not correct, Please input 1 , 2 or 3");
            allBook();
        }

    })

    readline1.on("close", () => {
        console.log("Bye,Bye");
    })

}

allBook();