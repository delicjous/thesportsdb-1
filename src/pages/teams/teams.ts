import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Team } from '../../models/team';
import { UrlService } from '../../services/url.service';
import { RestService } from '../../services/rest.api';
import { AppStoreService } from '../../services/app.store';
import { _localeFactory } from '@angular/core/src/application_module';
import { Pages } from '../../static/pages';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage implements OnInit {
  teams : Array<Team>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private urlService:UrlService,
    private rest:RestService,
    public appStore:AppStoreService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  ngOnInit(): void {
    if(this.appStore.currentLeague){
      this.getTeams();    
    }else{
      this.navCtrl.setRoot(Pages.home)
    }
    
  }

  getTeams(){
    let url = this.urlService.getAllTeamsInLeaugeUrl(this.appStore.currentLeague.strLeague);
    this.rest.get(url)
    .subscribe(
      success =>{
        this.teams = success.teams;
      },
      error =>{
        console.log('errpr',error);

      }
    )
  }

  selectTeam(team:Team){
    this.appStore.currentTeam = team;
    this.navCtrl.push(Pages.players);
  }

}
