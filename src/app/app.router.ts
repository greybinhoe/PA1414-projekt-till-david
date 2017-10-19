import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppDevelopersComponent } from './app-developers/app-developers.component';
import { CompanyComponent } from './company/company.component';
import { HelpComponent } from './help/help.component';


export const router: Routes = [
	{path: '', redirectTo: 'about', pathMatch: 'full'},
	{path: 'about', component: AboutComponent},
	{path: 'app-Developers', component: AppDevelopersComponent},
	{path: 'company' , component: CompanyComponent},
	{path: 'help' , component: HelpComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
