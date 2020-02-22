import { Component, OnInit } from '@angular/core';
import { ProductService } from '../ProductService/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../CategoryService/category.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public allProductData: any;
  public productById: any;

  constructor(public productService: ProductService, public router: Router) { }

  ngOnInit() {
    console.log("Product Details : \n");
    this.getProductData();
  }

  public getProductData: any = () => {
    this.productService.getAllData().subscribe(
      data => {
        console.log(data);
        this.allProductData = data;
      },
      error => {
        console.log("Error in getAllData:- ");
        console.log(error.errorMessage);
      }
    )
  }

  public deleteProduct: any = (id: number) => {
    this.productService.deleteData(id).subscribe(
      data => {
        console.log("Success Deletion");
        setTimeout(() => {
          this.router.navigate(['/productdetails']);
        }, 2000);
      },
      error => {
        console.log("Error Deletion:- ");
        console.log(error.errorMessage);
      }
    )
  }


}
