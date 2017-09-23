import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinifyFileComponent } from './minify-file/minify-file.component';
import { MinifyInputTextComponent } from './minify-input-text/minify-input-text.component';
import { MinifyDownloadedComponent } from './minify-downloaded/minify-downloaded.component';

const routes: Routes = [
  { path: '', redirectTo: '/layout', pathMatch: 'full' },
  { path: 'UploadFile', component: MinifyFileComponent },
  { path: 'InputText', component: MinifyInputTextComponent },
  { path: 'DownloadFile', component: MinifyDownloadedComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
