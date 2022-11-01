import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
// import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
// import { PersonViewComponent } from './person-view/person-view.component';
import { PersonViewpageComponent } from './person-viewpage/person-viewpage.component';





@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    // PersonViewComponent,
    PersonViewpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent,]
  // entryComponents : [PersonViewComponent,];
})
export class AppModule { }
