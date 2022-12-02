import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreateRestreamComponent } from './create-restream/create-restream.component';
import { ServerComponent } from './server/server.component';

const routes: Routes = [
  {
    path:'',component:MainComponent,
    children: [
      { path: 'Home', component: HomeComponent },
      { path: 'About', component: AboutComponent },
      { path: 'CreateRestream', component: CreateRestreamComponent},
      { path: 'Server', component: ServerComponent},
      { path: '',   redirectTo: '/Home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
