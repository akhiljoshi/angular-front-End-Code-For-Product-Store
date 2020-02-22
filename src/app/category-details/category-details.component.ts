import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../CategoryService/category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  public allCategoryData:any;

  constructor(public categoryService:CategoryService, public router:Router) { 
    console.log("Category Constructor");
  }

  ngOnInit() {
    this.getCategoryData();
  }

  public getCategoryData:any = ()=>{
    this.categoryService.getAllData().subscribe(
      data=>{
        console.log(data);
        this.allCategoryData = data;
      },
      error=>{
        console.log("Error in getAllData:- ");
        console.log(error.errorMessage);
      }
    )
  }

  public deleteCategory:any = (id:number)=>{
    this.categoryService.deleteData(id).subscribe(
      data=>{
        console.log("Success Deletion");
        setTimeout(()=>{
          this.router.navigate(['/categorydetails']);
        },2000);
      },
      error=>{
        console.log("Error Deletion:- ");
        console.log(error.errorMessage);
      }
    )
  }

}
