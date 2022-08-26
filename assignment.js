let students = [
    {
        name: "Siddharth Abhimanyu",
        age: 21
    },
    {
        name: "Malar",
        age: 25
    },
    {
        name: "Maari",
        age: 18
    },
    {
        name: "Bhallala Deva",
        age: 17
    },
    {
        name: "Baahubali",
        age: 16
    },
    {
        name: "AAk chandran",
        age:  23
    },
    {
        name: "Gabbar singh",
        age: 33
    },
    {
        name: "Mogambo",
        age: 53
    },
    {
        name: "Munnabhai",
        age: 40
    },
    {
        name: "Sher Khan",
        age:  20
    },
    {
        name: "Chulbul Pandey",
        age:   19
    },
    {
        name: "Anthony",
        age:   28
    },
    {
        name: "Devdas",
        age:  "56"
    }
]
 const lessThan20 = ()=>{
for(let i=0;i<students.length;i++){
    console.log(students[i].age)
    let final = students[i].age;
    final <20 && console.log(students[i])
}
 }

 let person = 
    {
        name: "chiwendu",
        gender: "female",
        age:  35
    }
 

 const getKey = ()=>{
    let realKeys = Object.keys(person)
    console.log(realKeys)
 }

 getKey()