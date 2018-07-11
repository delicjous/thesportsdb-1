import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Player } from '../../models/player';

/**
 * Generated class for the PlayerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-details',
  templateUrl: 'player-details.html',
})
export class PlayerDetailsPage implements OnInit {
  player : Player  
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerDetailsPage');
  }

  ngOnInit(): void {
    if(this.navParams.get("player")){
      this.player = this.navParams.get("player");
    }else{
      console.error('Could not open this page as the playe is missing');
    }    
  }

  close(){
    this.viewCtrl.dismiss();
  }

  openPage(url){
    window.open(url);
  }

}
