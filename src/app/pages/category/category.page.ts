import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
public registerCategoryForm: FormGroup
public showFormCategory=false
public showListCategory=false
public btnRegister=false
public btnUpdate=false

public listAllCategories:any
public showSpinner=false


  public categoryName:AbstractControl
  public categoryState:AbstractControl
  constructor(private categoryservices: CategoryService,private formBuilder: FormBuilder) { this.registerCategoryForm = this.formBuilder.group({
    idCategory: [''],
    categoryName: ['', Validators.compose( [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')] )],
    categoryState: ['', Validators.compose( [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')] )],
    
  })

  this.categoryName = this.registerCategoryForm.controls['categoryName']
  this.categoryState = this.registerCategoryForm.controls['categoryState']
 }

  ngOnInit() {
    this.listCategory()
  }

  listCategory()
  {
    this.showSpinner = true
    this.categoryservices.getCategories().subscribe((res:any) => {
      this.showListCategory = true
      this.listAllCategories = res
      this.showSpinner = false
   })

  }

  /* registerCategory()
  {
    this.showSpinner = true
    if(this.registerCategoryForm.value.idCategory)
    {
      this.categoryservices.putCategory(this.registerCategoryForm.value)
       .subscribe( (res:any) => {
        this.listCategory()
        this.showListCategory = true
        this.showFormCategory = false
        this.showSpinner = false
        })
    }
    else
    {
     console.log(this.registerCategoryForm.value)
      this.createCategory(this.registerCategoryForm.value)
    }
  }

  async createCategory(data:any)
  {
    console.log(data);
    await this.categoryservices.registerCategories(data)
          .subscribe( (res:any) => {
          this.listCategory()
          this.showListCategory = true
          this.showFormCategory = false
          this.showSpinner = false
    })
  } */

  addCategory()
  {
    this.resetForm(this.registerCategoryForm)
    this.btnRegister = true
    if(this.showFormCategory===false)
    {
      this.showListCategory = false
      this.showFormCategory = true
      this.btnUpdate = false
    }
    else
    {
      this.showListCategory = true
      this.showFormCategory = false
    }
  }
  resetForm(form: any)
  {
    if(form)
    {
      form.reset()
    }
  }
  editCategory(category:any)
  {
  
    this.showSpinner = true
    this.showListCategory = false
    this.showFormCategory = true
    this.registerCategoryForm.setValue({ 
      idCategory:category.idcategory,
      categoryName: category.category_name,
      categoryState: category.category_state,
    })
    
    this.showSpinner = false
    this.btnUpdate = true
    this.btnRegister = false
  }

}
