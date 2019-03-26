export class PatientRol {
  id: number;
  rol: string;

  constructor (id?: number, rol?: string){
    this.setId(id);
    this.setRol(rol);
  }

  getId():number{
    return this.id;
  }

  getRol(): string {
    return this.rol;
  }
  setId(id:number):void{
    this.id=id;
  }

  setRol(rol:string):void{
    this.rol = rol;
  }
}
