export class User {
    name:string
    age:number
    password:string
    height:number
    weight:number

    constructor(name:string, age:number, password:string, height:number, weight:number){
        this.name = name
        this.age = age
        this.password = password
        this.height = height
        this.weight = weight
    }

    isOld():Boolean{
        return this.age >= 60
    }
    
    isHealth():Boolean{
        return this.height/this.weight >= 2 && this.height/this.weight <= 3.5
    }
}
