import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerDetailsPage } from './player-details';
import { PipeModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [
    PlayerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerDetailsPage),
    PipeModule
  ],
})
export class PlayerDetailsPageModule {}
