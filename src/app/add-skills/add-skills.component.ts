import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {

  submitted = false;
  AddSkillsForm: FormGroup = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    skills: new FormArray([])
  });
  constructor() { }

  ngOnInit(): void {
  }
  saveUser() {
    this.submitted = true;
    if (this.AddSkillsForm.invalid) {
      return;
    }

    console.log(this.AddSkillsForm.value);
  }

  get getskills(): FormArray {
    return this.AddSkillsForm.get('skills') as FormArray;
  }

  addSkills() {

    this.getskills.push(new FormGroup({
      skill: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required]),
    }))

  }

  removeLastskills() {

    this.getskills.removeAt(this.getskills.length - 1)
  }
  removeskills(i) {

    this.getskills.removeAt(i)
  }
  removeallskills(){
for (let index= this.getskills.length;index >=0;index--){
  this.getskills.removeAt(index);
}

  }

}
