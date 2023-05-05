
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { PagesModule } from "./pages/pages.module";


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    LayoutModule,
    PagesModule,
  
  ],
  providers: []
    bootstrap: [AppComponent]
})

export class AppModule { }




