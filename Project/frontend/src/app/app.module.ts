import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { WeaponTextComponent } from './components/weapon-text/weapon-text.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageTableComponent } from './components/image-table/image-table.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: { title: "MH Weapon Randomizer"}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    WeaponTextComponent,
    ToggleComponent,
    ImageTableComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
