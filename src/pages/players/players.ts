import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AppStoreService } from '../../services/app.store';
import { RestService } from '../../services/rest.api';
import { UrlService } from '../../services/url.service';
import { Pages } from '../../static/pages';
import { Player } from '../../models/player';

/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage implements OnInit {
  players:Array<Player>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private urlService:UrlService,
    private rest:RestService,
    public appStore:AppStoreService,
    private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayersPage');
  }

  ngOnInit(): void {
    if(this.appStore.currentTeam){
      this.getTeamMembers();
    }else{
      this.navCtrl.setRoot(Pages.home);
    }    
  }

  getTeamMembers(){
    let url = this.urlService.getAllTeamMembers(this.appStore.currentTeam.strTeam);
    this.rest.get(url)
    .subscribe(
      success =>{
        this.players = success.player
      },
      error =>{

      }
    )
  }


  playerDetails(player:Player){
    let modal = this.modal.create(Pages.playerDetails, {
      player : player
    });

    modal.present();
  }


}
