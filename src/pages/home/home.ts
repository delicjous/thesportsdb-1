import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Sport } from '../../models/sport';
import { UrlService } from '../../services/url.service';
import { RestService } from '../../services/rest.api';
import { AppStoreService } from '../../services/app.store';
import { Pages } from '../../static/pages';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  sports:Array<Sport>;  
  countries:Array<string>  
  constructor(
    public navCtrl: NavController,
    private urlService:UrlService,
    private rest:RestService,
    public appStore:AppStoreService
  ) {

  }

  ngOnInit(): void {    
    this.countries = [
      'France',
      'England',
      'Spain',
      'Italy'
    ];
    
    this.getSportList();
  }

  getSportList(){
    let url = this.urlService.getAllSports();
    this.rest.get(url).subscribe(
      success =>{
        if(success && success.sports){
          this.sports = success.sports;
        }
      },
      error =>{
        console.error(error)
      }
    )
  }

  onSportChanged(){
    this.navCtrl.push(Pages.leagues);
  }

  
}
