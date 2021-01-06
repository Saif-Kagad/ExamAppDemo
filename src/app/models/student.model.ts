export class Student{
    email:string;
    fullname:string;
    password:string;
    age:number;
    gender:string;
    city:string;
    state:string;
    dob:Date;
    qualification:string;
    year:number;
    
    constructor(email:string="",
        fullname:string="",
        password:string="",
        age:number=0,
        gender:string="",
        city:string="",
        state:string="",
        dob:Date=new Date("Fri Dec 08 2020 07:44:57"),
    qualification:string="",
    year:number=0)
    {
        this.email=email;
        this.fullname=fullname;
        this.password=password;
        this.age=age;
        this.gender=gender;
        this.city=city;
        this.state=state;
        this.dob=dob;
        this.qualification=qualification;
        this.year=year;
    }

    
}