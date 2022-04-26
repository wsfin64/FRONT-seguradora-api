import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import { PortadorComponent } from './portador/portador.component';
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import { CadastrarPortadorComponent } from './cadastrar-portador/cadastrar-portador.component';
import { AssistenciaComponent } from './assistencia/assistencia.component';
import { HomeComponent } from './home/home.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";



@NgModule({
  declarations: [
    PortadorComponent,
    CadastrarPortadorComponent,
    AssistenciaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule,
    MDBBootstrapModule
  ]
})
export class ComponentsModule { }
