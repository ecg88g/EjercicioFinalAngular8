import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';
import { RouterModule } from '@angular/router';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatNavList, MatListModule } from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [Vista1Component, Vista2Component,MenuLateralComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
 
    
    RouterModule.forChild([
      {path: "uno", component: Vista1Component},  
      {path: "dos", component: Vista2Component},
      {path: 'menu-lateral', component: MenuLateralComponent}
    ])
  ]
})
export class MenuModule { }
