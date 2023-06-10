
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModuleTsModule } from './app-routing.module.ts.module';
import { AuthModule } from './auth/auth.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestApiService } from './servicios/test-api.service';

AuthModule
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
    AppRoutingModuleTsModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [TestApiService,],
  bootstrap: [AppComponent]
})
export class AppModule { }









