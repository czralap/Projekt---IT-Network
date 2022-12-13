const datasource = new Datasource()
const tablePrinter = new TablePrinter()
const tableContainer = document.getElementById("table")
const form = document.getElementById("form")

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const data=new FormData(form)
    const person = new Person(data.get("firstName"), data.get("lastName"), data.get("age"), data.get("phone"))
    datasource.AddPerson(person)
    tablePrinter.CreateTable(datasource.GetAll(),tableContainer)
    form.reset()
})
tablePrinter.CreateTable(datasource.GetAll(),tableContainer)
