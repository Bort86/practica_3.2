import {Patient} from "./patient"

export class DnaForm {
  id: number;
  sequence: string;
  entryDate: any;
  patient: Patient;

  constructor(id?:number, sequence?: string, entryDate?: any, patient?: Patient){
    this.setId(id);
    this.setSequence(sequence);
    this.setEntryDate(entryDate);
    this.setPatient(patient);
  }

  getId() : number{
    return this.id;
  }

  getSequence() : string{
    return this.sequence;
  }

  getentryDate() : any{
    return this.entryDate;
  }

  getPatient() : Patient{
    return this.patient;
  }

  setId(id:number):void{
    this.id = id;
  }

  setSequence(sequence:string):void{
    this.sequence = sequence;
  }

  setEntryDate(entryDate:any):void{
    this.entryDate = entryDate;
  }

  setPatient(patient:Patient):void{
    this.patient = patient;
  }
}
