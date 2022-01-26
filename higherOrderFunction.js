// Higher order Array functions


const companies = [
    {
        name:"Company1",
        category:"retail",
        start:"2000",
        end:"2020"
    },
    {
        name:"Company2",
        category:"Finance",
        start:"1971",
        end:"2010"
    },
    {
        name:"CompanyU",
        category:"Finance",
        start:"1980",
        end:"2013"

    },
    {
        name:"CompanyX",
        category:"retail",
        start:"1991",
        end:"2017"
    }
]

const ages = [12,18,3,5,19,45,67,78,13,34]
// Basic for loop

for(let i = 0; i < companies.length; i++){
    // console.log(companies[i])
}


// forEach - loop through data
// function can take three arguments the index, object element in each company and the entirearray
companies.forEach(function(company){
    console.log(company)
})
// Filter 
// normal way

// let canDrink = [];

// for(let i =0; i< ages.length; i++){
//     if(ages[i] >= 18){

//        canDrink.push(ages[i])
//     }
// }

// Filter method 
const canDrink = ages.filter((age) => {
    return age === 18
})

console.log("can drink: ",canDrink)

const retailCompany = companies.filter((company) => {
    if(company.category === 'retail'){
        return true;
    }
})

console.log(...retailCompany);
// map

const companyNames = companies.map((company) => {
    return `${company.name} - [${company.start}]`
})

console.log({companyNames});
// sort

const startYear = companies.sort(function(a,b){
    if(a.start > b.start){
        return 1
    }else{
        return -1
    }
})
console.log(startYear)

const agesSort = ages.sort((a,b) => {
    return b-a
})

console.log(agesSort)

// reduce

// const sumAges = 0;

// for(let i=0; i< ages.length; i++){
//     return sumAges = sumAges + ages[i];
// }

// const sumAges = ages.reduce((accum, age) => {
//     return accum+ age
// },0)

// const sumAges = ages.reduce((accum,age) => accum + age, 0)

// console.log("Total ages:", sumAges)

// const totalYears = companies.reduce(function(accum, copmany){
//     return accum + (copmany.end - copmany.start)
// },0);

const totalYears = companies.reduce((accum, company) => {
    return accum + (company.end- company.start)
}, 0);

console.log(totalYears);