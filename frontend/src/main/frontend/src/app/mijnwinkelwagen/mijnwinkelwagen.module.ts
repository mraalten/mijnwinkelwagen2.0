import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MijnWinkelwagenPageComponent} from "./boodschappenlijst-page.component";
import {BoodschappenLijstComponent} from "./overview/boodschappenlijst.component";

const mijnWinkelwagenRoutes: Routes = [
  {
    path: 'mijnwinkelwagen',
    // component: MijnWinkelwagenPageComponent,
    children: [
      {
        path: '',
        component: BoodschappenLijstComponent
      }
      // ,
      // {
      //   path: 'add',
      //   component: CraftsmanAddComponent
      // },
      // {
      //   path: 'edit/:id',
      //   component: CraftsmanEditComponent,
      //   resolve: {
      //     craftsman: CraftsmanResolver
      //   }
      // }
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
    MijnWinkelwagenPageComponent,
    BoodschappenLijstComponent
  ],
})
export class MijnWinkelwagenModule {}
