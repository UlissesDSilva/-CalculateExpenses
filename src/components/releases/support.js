function Launch(name, value){
    this.name = name
    this.value = value
}

function FinancialCycle(month, year = 2020){
    this.month = month
    this.year = year
    this.releases = []

    this.addReleases = function(...releases){
        releases.forEach(el => this.releases.push(el))
    }

    this.summary = function(){
        let finalValue = 0
        this.releases.forEach(el => finalValue += el.value)

        return finalValue
    }
}

const salario = new Launch('salario' , 1000)
const agua = new Launch('agua', -50)
const luz = new Launch('luz', - 70)

const contas = new FinancialCycle(6)
contas.addReleases(salario, agua, luz)
console.log(contas.summary())