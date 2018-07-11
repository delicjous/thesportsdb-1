import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaguesPage } from './leagues';
import { PipeModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [
    LeaguesPage
  ],
  imports: [
    IonicPageModule.forChild(LeaguesPage),
    PipeModule
  ],
})
export class LeaguesPageModule {}
