import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
    console.log("Product service constructor called");
   }

   public baseUrl: any = "http://localhost/tanveer.productstore.internalservice.data/api/product";

   public getAllData():Observable<any>{
     return this.http.get(this.baseUrl);
   }

   public getDataById(id:Number):Observable<any>{
    let url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  public updateData(newData:any):Observable<any>{
    return this.http.post(this.baseUrl, newData);
  }

  public insertData(data:any){
    return this.http.post(this.baseUrl, data);
  }
  
  public deleteData(id:number){
    return this.http.get(this.baseUrl+"?delId="+id);
  }

}
