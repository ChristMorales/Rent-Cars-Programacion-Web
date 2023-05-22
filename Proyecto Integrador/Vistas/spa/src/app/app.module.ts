
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModuleTsModule } from './app-routing.module.ts.module';
AppRoutingModuleTsModule
LayoutModule
PagesModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    LayoutModule,
    AppRoutingModuleTsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }









