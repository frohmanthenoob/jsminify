import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinifyFileComponent } from './minify-file/minify-file.component';
import { MinifyInputTextComponent } from './minify-input-text/minify-input-text.component';
import { MinifyDownloadedComponent } from './minify-downloaded/minify-downloaded.component';

@NgModule({
  declarations: [
    AppComponent,
    MinifyFileComponent,
    MinifyInputTextComponent,
    MinifyDownloadedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
