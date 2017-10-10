/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Services */
import { DespesaService } from './despesa.service';

/* Components */
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

/* LocalStorage */
import { LocalStorageModule } from 'angular-2-local-storage';
import { DecimalBrPipe } from './decimal-br.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    DecimalBrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    NgbModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'despesasApp',
      storageType: 'localStorage'
    })
  ],
  providers: [DespesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
