import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../CategoryService/category.service';

@Component({
  selector: 'app-category-insert',
  templateUrl: './category-insert.component.html',
  styleUrls: ['./category-insert.component.css']
})
export class CategoryInsertComponent implements OnInit {
public categoryId:any;
public categoryById:any;
public allCategoryData:any;
public catName:string;
public catDescription:string;
public catCreateBy:number;

  constructor(public categoryService:CategoryService, private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.categoryId){
        this.getCategoryDataById(this.categoryId);
    }
  }

  public getCategoryData:any =()=>{
    this.categoryService.getAllData().subscribe(
      data=>{
        this.allCategoryData = data;
      }
    )
  }

  public insertCatData:any = ()=>{
    let catData:any= {
      "Name":this.catName,
      "Description":this.catDescription,
      "CreatedBy":""
    }
    this.categoryService.insertData(catData).subscribe(
      data=>{
        console.log("Creation Successful");
        setTimeout(()=>{
          this.router.navigate(['/categorydetails'])
        },2000);
      },
      error=>{
        console.log("Error in Insertion");
      }
    )
  }

  public updateCatData:any = ()=>{
    let catData:any= {
        "Id":this.categoryId,
        "Name":this.catName,
        "Description":this.catDescription,
        "CreatedBy":""
      }
    this.categoryService.updateData(catData).subscribe(
      data=>{
        console.log("Updation Successful");
        setTimeout(()=>{
          this.router.navigate(['/categorytview'])
        },2000);
      },
      error=>{
        console.log("Error in Updation");
      }
    )
  }

  public getCategoryDataById:any = (id:Number)=>{
    this.categoryService.getDataById(id).subscribe(
      data=>{
        console.log(data);
        this.categoryById = data;
        this.categoryId = data.Id;
        this.catName = data.Name;
        this.catDescription = data.Description;
      },
      error=>{
        console.log("Error in getCategorDataById:- ");
        console.log(error.errorMessage);
      }
    )
  }


}
