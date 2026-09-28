class Person{

constructor(firstName,lastName,age){

    this.firstName=firstName
    this.lastName=lastName
    this.age=age
}
fullname(){
    return this.firstName+''+this.lastName
}
 getLocation(){
    return 'pune'
 }

}
let person=new Person('deepali','pandit',32);
console.log(person.fullname())
console.log(person.getLocation())
console.log(person.lastName)

let person1=new Person('abc','xyz',23)
console.log(person1.fullname())