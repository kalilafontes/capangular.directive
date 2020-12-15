import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeTextDirective } from './shared/directives/change-text/change-text.directive';
import { ChildComponent } from './components/child/child.component';
import { ChangeColorDirective } from './shared/directives/changeColor/change-color.directive';
import { SomaNumerosDirective } from './shared/directives/somaNmeros/soma-numeros.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    ChildComponent,
    ChangeColorDirective,
    SomaNumerosDirective,
    
  ],
  exports:[ChangeColorDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
