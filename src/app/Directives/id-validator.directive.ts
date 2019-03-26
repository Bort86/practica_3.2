import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appIdValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: IdValidatorDirective, multi: true}]
})
export class IdValidatorDirective implements Validator {

  constructor() { }

  validate(formFieldToValidate: AbstractControl): {[key: string] : any}{

    let validInput : boolean = false;

    if (formFieldToValidate.value!=undefined && !isNaN(formFieldToValidate.value)){
      validInput = true;
    }

    return validInput?null:{'IsNotNumber': true};
  }

}
