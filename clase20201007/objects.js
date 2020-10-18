var myCar = {
    brand: "Honda",
    model: "City",
    year: "2020"
};

myCar.model;

var myCar = {
    brand: "Honda",
    model: "City",
    year: "2020",

    details: function() {
        console.log(`Car ${this.model} ${this.year}`);
    }
};

myCar.details();