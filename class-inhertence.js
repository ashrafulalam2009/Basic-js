class TeamMember{
    name;
    designation = 'support web Dev';
    // address= 'BD';

    constructor(name, address){
this.name = name;
this.address = address;

}

}




class Support extends TeamMember{
   
    groupSupportTime;
    constructor(name,address,time){
        super(name,address)
        this.groupSupportTime = time;
    
    }
// method
    startSession(){
        console.log('start a support  session');
    }
}
class StudentCare extends TeamMember{
    
    buildAroutine(student){
        console.log(this.name,'Build a routine for ',student); 
    }
}

class NeptuneDev extends TeamMember{
    codeEditor;
    constructor(name,address,editor){
        super(name,address)
        this.codeEditor = editor;
        
    }
    releaseApp(version){
        console.log(this.name,'Build a routine for ',version) ;
    }
}




const amir = new Support("Amir khan","India", 9);
const salman = new Support("Salman khan","bd", 10);

const alia = new StudentCare('Alia Bhatt','Mumbai');

const ash = new NeptuneDev('Ashraful','Dhaka', 'vs code');

// console.log(amir);
// console.log(salman);
// console.log(alia);

console.log(ash);