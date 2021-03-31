import { AbstractControl } from "@angular/forms";

export function forbidenNameValidator(control: AbstractControl):{ [key: string]: any} | null {
const forbiden = /admin/ .test (control.value);
return forbiden ? { 'fobidenName': { value: control.value}} : null ;
}