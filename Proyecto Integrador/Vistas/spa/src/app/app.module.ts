import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModuleTsModule } from './app-routing.module.ts.module';
import { AuthModule } from './auth/auth.module';
import { TestApiService } from './servicios/test-api.service';
import { FormsModule } from '@angular/forms';

// AuthModule
// AppRoutingModuleTsModule
// LayoutModule
// PagesModule
// HttpClientModule

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
    CookieModule.withOptions(),
    FormsModule,
  ],

  providers: [TestApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }









