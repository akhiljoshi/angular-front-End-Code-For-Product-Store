import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../CategoryService/category.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

public categoryById:any;
public categoryId:any;

  constructor(private categoryService:CategoryService, private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.categoryId){
        console.log(this.categoryId);
        this.getCategoryDataById(this.categoryId);
    }else{
      console.log("No ID Found");
    }
  }

  public getCategoryDataById:any = (id:Number)=>{
    this.categoryService.getDataById(id).subscribe(
      data=>{
        console.log(data);
        this.categoryById = data;
      },
      error=>{
        console.log("Error in getCategorDataById:- ");
        console.log(error.errorMessage);
      }
    )
  }


}
