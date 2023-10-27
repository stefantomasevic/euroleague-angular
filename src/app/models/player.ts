export class Player{
      id: number;
    firstname: string;
    lastname: string;
    age: number;
    position: string;
    nationality: string;
    imagepath: string;
  
   
    
    constructor(  id: number, firstname: string,lastname: string,age: number,position: string,nationality: string,imagepath: string) {
        this.id=id,
        this.firstname=firstname,
        this.lastname=lastname,
        this.age=age,
        this.position=position,
        this.nationality=nationality,
        this.imagepath=imagepath
    }

}