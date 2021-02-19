import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { InstructionsComponent } from './instructions/instructions.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: AppComponent},
  {path: 'conditions', component: ConditionsComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'camera', component: CameraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
