class TeamMember{
    name;
   
    // address= 'BD';

    constructor(name, address){
this.name = name;
this.address = address;

}

}




class Support extends TeamMember{
    designation = 'support web Dev';
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
    designation = 'studentCare web Dev';

    buildAroutine(student){
        console.log(this.name,'Build a routine for ',student); 
    }
}

class NeptuneDev extends TeamMember{
    designation = 'Neptune web Dev';
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

console.log(amir);
 console.log(salman);
 console.log(alia);

console.log(ash);
ash.releaseApp('6.5');