import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'People', loadChildren: './people/people.module#PeoplePageModule' },
  { path: 'Messages', loadChildren: './messages/messages.module#MessagesPageModule' },
  { path: 'Expenses', loadChildren: './expenses/expenses.module#ExpensesPageModule' },
  { path: 'Time', loadChildren: './time/time.module#TimePageModule' },
  { path: 'TimeOff', loadChildren: './time-off/time-off.module#TimeOffPageModule' },
  { path: 'Settings', loadChildren: './settings/settings.module#SettingsPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
