import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ExpensesPageModule } from '../expenses/expenses.module';
import { MessagesPageModule } from '../messages/messages.module';
import { PeoplePageModule } from '../people/people.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    PeoplePageModule,
    ExpensesPageModule,
    MessagesPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
