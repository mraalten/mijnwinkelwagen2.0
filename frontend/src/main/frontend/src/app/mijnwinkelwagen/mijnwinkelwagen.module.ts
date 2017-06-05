import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MijnWinkelwagenComponent} from "./mijnwinkelwagen.component";
import {OverviewComponent} from "./overview/overview.component";
import {BoodschappenLijstComponent} from "./lijst/lijst.component";
import {ProduktGroepenComponent} from "./produktgroepen/produktgroepen.component";
import {LijstProduktGroepenComponent} from "./lijst/lijst-produktgroepen/lijst-produktgroepen.component";
import {LijstProduktenComponent} from "./lijst/lijst-produkten/lijst-produkten.component";
import {ProduktenComponent} from "./produkten/produkten.component";

const mijnWinkelwagenRoutes: Routes = [
  {
    path: 'mijnwinkelwagen',
    children: [
      {
        path: '',
        component: LijstProduktGroepenComponent
      },
      // ,
      // {
      //   path: 'list',
      //   component: LijstProduktGroepenComponent
      // },
      {
        path: 'switchProduktGroep/:id',
        component: LijstProduktenComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(mijnWinkelwagenRoutes)
  ],
  declarations: [
    MijnWinkelwagenComponent,
    OverviewComponent,
    BoodschappenLijstComponent,
    ProduktGroepenComponent,
    ProduktenComponent,
    LijstProduktGroepenComponent,
    LijstProduktenComponent
  ],
})
export class MijnWinkelwagenModule {}
