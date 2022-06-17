import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  {path:'',component:AppComponent},
  {path:'searchResult',component:HousingListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
