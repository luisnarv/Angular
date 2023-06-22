import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailComponent } from './components/detail/detail.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CategoryComponent } from './components/category/category.component';
import { OffersComponent } from './components/offers/offers.component';
import { MarketComponent } from './components/market/market.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { HelpComponent } from './components/help/help.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomepageComponent,
    FooterComponent,
    DetailComponent,
    CommentsComponent,
    CategoryComponent,
    OffersComponent,
    MarketComponent,
    FashionComponent,
    HelpComponent,
    SearchComponent,
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
