import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppStoreService } from '../../services/app.store';
import { RestService } from '../../services/rest.api';
import { UrlService } from '../../services/url.service';
import { Pages } from '../../static/pages';
import { League } from '../../models/league';

/**
 * Generated class for the LeaguesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leagues',
  templateUrl: 'leagues.html',
})
export class LeaguesPage implements OnInit{
  leagues : Array<League>
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private urlService:UrlService,
    private rest:RestService,
    public appStore:AppStoreService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaguesPage');
  }

  ngOnInit(): void {
    if(this.appStore.currentCountry && this.appStore.currentSport){
      this.getLeaguesForCurrentCountry();    
    }else{
      this.navCtrl.setRoot(Pages.home);
    }
    
  }

  getLeaguesForCurrentCountry(){
    let url = this.urlService.getAllLeaguesForCountryUrl(this.appStore.currentCountry,this.appStore.currentSport);
    this.rest.get(url).subscribe(
      success =>{
        //API responds with a top object countrys.
        //We would expect it to be leagues
        if(success && success.countrys){
          this.leagues = success.countrys
        }
      },
      error =>{
        //display error
      }
    )
  }

  selectLeague(league:League){
    this.appStore.currentLeague = league;
    this.navCtrl.push(Pages.teams);
  }

}
