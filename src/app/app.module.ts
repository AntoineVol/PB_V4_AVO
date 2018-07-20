import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatIconModule} from '@angular/material'; //Pensez à mettre les élements utilisés

import { AppComponent } from './app.component';
import { ClientService } from './Services/client.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule //Pensez à mettre les élements utilisés

  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
