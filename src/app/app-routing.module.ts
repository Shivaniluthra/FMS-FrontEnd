import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { SearchScheduledFlightComponent } from './search-scheduled-flight/search-scheduled-flight.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { ShowScheduledFlightsComponent } from './show-scheduled-flights/show-scheduled-flights.component';
import { ModifyScheduledFlightComponent } from './modify-scheduled-flight/modify-scheduled-flight.component';


const routes: Routes = [
    {path: '', component: WelcomeAdminComponent},
    {path:'scheduledFlight/add', component:AddScheduledFlightComponent},
    {path:'scheduledFlight/show', component:ShowScheduledFlightsComponent},
    {path:'scheduledFlight/search', component:SearchScheduledFlightComponent},
    {path:'welcomeAdmin', component:WelcomeAdminComponent},
    {path: 'scheduledFlight/modify', component: ModifyScheduledFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [
  AddScheduledFlightComponent, 
  SearchScheduledFlightComponent,
  ShowScheduledFlightsComponent,
  WelcomeAdminComponent,
  ModifyScheduledFlightComponent
]
