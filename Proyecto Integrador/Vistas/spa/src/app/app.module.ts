
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,

    LayoutModule,
    PagesModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }




>>>>>>> 999d5e9e3aff64a63b5d55004513bd872badaf67
