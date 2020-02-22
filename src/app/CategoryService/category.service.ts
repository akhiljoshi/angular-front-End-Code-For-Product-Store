import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public baseUrl:any = "http://localhost/tanveer.productstore.internalservice.data/api/category"

  constructor(private http:HttpClient) { 
    console.log("Category service constructor called");
  }

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

 public insertData(data:any):Observable<any>{
   let url = `${this.baseUrl}`;
   return this.http.post(url, data);
 }

 public deleteData(id:number){
   let url = `${this.baseUrl}?delId=${id}`;
  return this.http.get(url);
}

}
