import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { PeoplePage } from '../people/people.page';
import { MessagesPage } from '../messages/messages.page';
import { ExpensesPage } from '../expenses/expenses.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/pages/(people:people)',
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
    path: 'tabs',
    redirectTo: '/tabs/pages/(people:people)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
