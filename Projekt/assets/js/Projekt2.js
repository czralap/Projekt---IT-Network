class Datasource {
    constructor() {
        this.data = [];

    }
    GetAll() {
        return this.data
    }
    AddPerson(person) {
        this.data.push(person)
    }
}

class Person {
    constructor(firstName, lastName, age, phone) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.phone = phone
    }
    getName() {
        return this.firstName + " " + this.lastName
    }
}

class TablePrinter {
    CreateTable(data, element) {
        let table = `
        <table><tr><th>Jméno a příjmení</th><th>Telefon</th><th>Věk</th></tr>
        `
        for (let person of data) {
            table += `
            <tr><td>${person.getName()}</td><td>${person.phone}</td><td>${person.age}</td></tr>
            `
        }
        table += "</table>"

        element.innerHTML = table
    }
}

