import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { ProductService } from './ProductService/product.service';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryInsertComponent } from './category-insert/category-insert.component';
import{FormsModule} from '@angular/forms';
import { CategoryViewComponent } from './category-view/category-view.component';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    LoginComponent,
    ProductInsertComponent,
    CategoryDetailsComponent,
    CategoryInsertComponent,
    CategoryViewComponent,
    ProductViewComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,

    RouterModule.forRoot([
      {path:"", component:LoginComponent},
      {path:"login", component:LoginComponent},
      {path:"productdetails", component:ProductDetailsComponent},
      {path:"productview/:id", component:ProductViewComponent},
      {path:"productinsert", component:ProductInsertComponent},
      {path:"productupdate/:id", component:ProductInsertComponent},
      {path:"categorydetails", component:CategoryDetailsComponent},
      {path:"categoryview/:id", component:CategoryViewComponent},
      {path:"categoryinsert", component:CategoryInsertComponent},
      {path:"categoryupdate/:id", component:CategoryInsertComponent},
      {path:"*", component:LoginComponent}

    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
