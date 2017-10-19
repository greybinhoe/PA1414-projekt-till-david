import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { AppDevelopersComponent } from './app-developers/app-developers.component';
import { CompanyComponent } from './company/company.component';
import { HelpComponent } from './help/help.component';
import { routes } from'./app.router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    AppDevelopersComponent,
    CompanyComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
	CommonModule,
	FormsModule,
	routes,
	AgmCoreModule.forRoot({
		apiKey: 'SKRIV IN DIN GOOGLE MAP API KEY HÄR'
	})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
