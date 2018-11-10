import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { PeoplePage } from '../people/people.page';
import { MessagesPage } from '../messages/messages.page';
import { ExpensesPage } from '../expenses/expenses.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(people:people)',
        pathMatch: 'full',
      },
      {
        path: 'people',
        outlet: 'people',
        component: PeoplePage
      },
      {
        path: 'messages',
        outlet: 'messages',
        component: MessagesPage
      },
      {
        path: 'expenses',
        outlet: 'expenses',
        component: ExpensesPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
