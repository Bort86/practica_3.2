import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

var rna_code = new RegExp("[^ACGU]", "i");

@Directive({
  selector: '[RnaValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: RnaValidatorDirective, multi: true}]
})
export class RnaValidatorDirective implements Validator {

  constructor() { }

  validate(formFieldToValidate: AbstractControl): {[key: string] : any}{

    let validInput : boolean = true;

    if (formFieldToValidate.value!=undefined){

        if (rna_code.test(formFieldToValidate.value)){
          validInput = false;
          return validInput?null:{'IsNotCorrect': true}
        }

    }

    return validInput?null:{'IsNotCorrect': true};
  }

}
