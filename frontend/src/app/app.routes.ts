import { Routes } from '@angular/router';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { HomeComponent } from './components/home/home.component';
import { ListeProductComponent } from './components/liste-product/liste-product.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inscription', component: FormulaireComponent },
    { path: 'catalogue', component: ListeProductComponent }
];
