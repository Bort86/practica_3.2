import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

var protein_code = new RegExp("[^FLSYCWPHQRIMTNKVADEG]", "i");

@Directive({
  selector: '[ProteinValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ProteinValidatorDirective, multi: true}]
})
export class ProteinValidatorDirective implements Validator{

  constructor() { }

  validate(formFieldToValidate: AbstractControl): {[key: string] : any}{

    let validInput : boolean = true;

    if (formFieldToValidate.value!=undefined){

        if (protein_code.test(formFieldToValidate.value)){
          validInput = false;
          return validInput?null:{'IsNotCorrect': true}
        }

    }

    return validInput?null:{'IsNotCorrect': true};
  }

}
