import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductComponent } from './components/product/product.component';
import { DetailComponent } from './components/detail/detail.component';
import { CategoryComponent } from './components/category/category.component';
import { OffersComponent } from './components/offers/offers.component';
import { MarketComponent } from './components/market/market.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  {path:"home", component: HomepageComponent},
  {path:"Product", component: ProductComponent},
  {path:"product/:id", component: DetailComponent},
  {path:"category", component: CategoryComponent},
  {path:"offers", component: OffersComponent},
  {path:"market", component: MarketComponent},
  {path:"fashion", component: FashionComponent},
  {path:"help", component: HelpComponent},
];  

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
