import { Component, OnInit } from '@angular/core';

//model
import {DnaForm} from '../model/dna-form';
import {Patient} from '../model/patient';
import {PatientRol} from '../model/patient-rol';

//Cookies
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dna-form',
  templateUrl: './dna-form.component.html',
  styleUrls: ['./dna-form.component.css']
})
export class DnaFormComponent implements OnInit {
  cookieValue = 'UNKNOWN';

  //properties
  dna : DnaForm;
  patients : Patient[]=[];

  constructor(private cookieService : CookieService) { 
  }

  ngOnInit() {
    this.dna = new DnaForm();
    //we format the entry date first
    let date = new Date();
    this.dna.setEntryDate(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());

    //then we fill the patients array for the select with new patients
    this.patients.push(new Patient ('Marc', 'Codina', 26, 'Calle Aquí, 3, BCN', new PatientRol(1,'sick')));
    this.patients.push(new Patient ('Pablo', 'Rodriguez', 33, 'Calle Allí, 5, Guinardó', new PatientRol(2,'healthy')));
    this.patients.push(new Patient ('Marc', 'Rodriguez', 30, 'Calle Pacá, 9, Madrid', new PatientRol(3,'urgent')));

    //Looking for cookies
    if (this.cookieService.check('dnaForm')){
      let CookieObj : any = JSON.parse(this.cookieService.get('dnaForm'));
      Object.assign(this.dna, CookieObj);
      //Setting up the id
      this.dna.setId(CookieObj.id)
      this.dna.setEntryDate(CookieObj.date)
      this.dna.setSequence(CookieObj.sequence)
      //TODO
      this.dna.setPatient(CookieObj.patient)
    }

  }

  dnaIntro() : void{
    //console.log(this.dna);
    this.cookieService.set('dnaForm', JSON.stringify(this.dna))
    this.cookieValue = this.cookieService.get('dnaForm');
    console.log(this.cookieValue);
  }

}
