import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { ButtonComponent } from './components/button/button.component';
import { WeaponTextComponent } from './components/weapon-text/weapon-text.component';

@NgModule({
  declarations: [
    AppComponent,
    WheelComponent,
    ButtonComponent,
    WeaponTextComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [WeaponTextComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
