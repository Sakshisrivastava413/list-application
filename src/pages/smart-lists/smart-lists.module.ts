import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmartListsPage } from './smart-lists';

@NgModule({
  declarations: [
    SmartListsPage,
  ],
  imports: [
    IonicPageModule.forChild(SmartListsPage),
  ],
})
export class SmartListsPageModule {}
