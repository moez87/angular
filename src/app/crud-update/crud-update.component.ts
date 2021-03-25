import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-crud-update',
  templateUrl: './crud-update.component.html',
  styleUrls: ['./crud-update.component.css']
})
export class CrudUpdateComponent implements OnInit {

  index;
  submitted = false;
  updateCrudForm: FormGroup= new FormGroup({
    id: new FormControl(''),
    productName: new FormControl('',[Validators.required]),
    productDescription: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required]),
  });
  constructor(private activatedRoute: ActivatedRoute, private router: Router,private productService:ProductService ) { }

  ngOnInit(): void {
    // fist way
    this.index = this.activatedRoute.snapshot.params['i'];
    // console.log(this.index);
    this.loadCrud();

    // secend way
    // this.activatedRoute.params.subscribe((params)=>{
    //     this.index = params['index'];
    //     console.log(this.index);
    //     this.loadTodoData();
    //   });
    
  }

  loadCrud()
  {
    // let cruds = JSON.parse(localStorage.getItem('crud') || '[]');
    // let todoData = cruds[this.index];
    let productData = this.productService.getProductByindex(this.index) ;
    this.updateCrudForm.patchValue(productData);

    
  }

  saveCrud()
  {
    this.submitted = true;
    if(this.updateCrudForm.invalid)
    {
      return ;
    }

    let cruds = JSON.parse(localStorage.getItem('crud') || '[]');
    cruds.splice(this.index, 1, this.updateCrudForm.value);
    localStorage.setItem('crud', JSON.stringify(cruds));

    // vider form 
    this.updateCrudForm.reset();
    this.submitted = false;

    // redirect to list
     this.router.navigate(['/crud-list'])

  }

}