import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokelistComponent} from "./pokelist/pokelist.component";
import {PokedexComponent} from "./pokedex/pokedex.component";

const routes: Routes = [
  { path: '', component: PokelistComponent},
  { path: 'pokedex', component: PokedexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
