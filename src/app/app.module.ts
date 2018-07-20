import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material'; //Pensez à mettre les élements utilisés

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule //Pensez à mettre les élements utilisés
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
