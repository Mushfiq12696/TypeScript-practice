let  myMoney=50;
myMoney=10;
const isFamous:boolean=true;
let famous:boolean;


// function add (num1:number | string, num2:number | string):number|string{
//     return num1 + num2;
// }

// add(3,76);
// add('adam','sand');
// add(3,' Some one');


function getFullName (firstName:string, lastName:string):string{
    return firstName +' '+ lastName;
}

const user = getFullName('Mushfiq','Foysal');
console.log(user);


function doubleIt(num:number):void{
    const result=num*2;
    console.log(result);
}

const output = doubleIt(50);
console.log(output);

let multiply:(x:number,y:number)=>number;
 multiply=(x,y)=>x*y;

 console.log(multiply(10,20));

 const multiply2=(x:number,y:number):number=>x*y;
 console.log(multiply2(25,4));

 const friends:string[]=['George','Jeff','Bill','Abdul'];
 let megaName :string='';
 for (let index = 0; index < friends.length; index++) {
    const friend = friends[index];
    if(friend.length>megaName.length){
        megaName=friend;
    }

 }
 console.log(megaName);


 //object
 let player:{
    club:string,
    salary:number
 }={
    club:'Real Madrid',
    salary:56000
 }
 console.log(player);

//  player={
//     club:'Real Madrid',
//     salary:56000
//  }
//  console.log(player);

interface Player{
    name:string,
    club:string,
    salary:number,
    isPlaying:boolean,
    wife?:string
}

const player1:Player ={
    name:'Messi',
    club:'PSG',
    salary:4500000,
    wife:'Anotlina',
    isPlaying:true
}

console.log(player1);
const player2:Player ={
    name:'Ronaldo',
    club:'Al-Naser',
    salary:500000,
    // wife:'Anotlina',
    isPlaying:true
}

console.log(player2);

function getBonus(player:Player){
    return player.salary*0.5;
}
const result=getBonus(player1);
console.log(result);


class Person {
    name:string;
    private _partner : string;
    readonly fatherName:string;
    constructor(name:string,father:string){
        this.name=name;
        this._partner = name;
        this.fatherName=father;
    }

    getName():string{
        return this.name;
    }
}

const sam = new Person('Samuel','Ben')
console.log('name',sam.name,'fatherName:',sam.fatherName);
sam.name="Stokes";

const samName:string = sam.getName();
console.log('Name',samName);