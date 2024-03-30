import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FormStep1Component } from './form/form.component';

const routes: Routes = [
  { path: 'panel', component: AdminPanelComponent },
  { path: '', component: FormStep1Component, pathMatch: 'full' }, // Anasayfa URL'si için yönlendirme
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
