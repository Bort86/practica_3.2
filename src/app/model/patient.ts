import {PatientRol} from "./patient-rol"

export class Patient {
  name:string;
  surname:string;
  age:number;
  address:string;
  rol: PatientRol;

  constructor (name?:string, surname?:string, age?:number, address?:string, rol?: PatientRol){
    this.setName(name);
    this.setSurname(surname);
    this.setAge(age);
    this.setAddress(address);
    this.setRol(rol);
  }

  getName() : string {
    return this.name;
  }

  getSurname(): string {
    return this.surname;
  }

  getAge(): number {
    return this.age;
  }

  getAddress(): string {
    return this.address;
  }

  getRol(): PatientRol {
    return this.rol;
  }

  setName(name:string):void{
    this.name = name;
  }

  setSurname(surname:string): void{
    this.surname =surname ;
  }

  setAge(age:number): void{
    this.age =age ;
  }

  setAddress(address:string): void{
    this.address =address ;
  }

  setRol(rol:PatientRol): void{
    this.rol = rol;
  }

}
