import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayersPage } from './players';
import { PipeModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [
    PlayersPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayersPage),
    PipeModule
  ],
})
export class PlayersPageModule {}
