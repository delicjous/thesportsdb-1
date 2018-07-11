import { Injectable } from '@angular/core';
import { League } from '../models/league';
import { Team } from '../models/team';

//This class will be responsable for holding the state of the app 
//as the user navigates from a page to another

@Injectable()
export class AppStoreService {

    currentCountry:string = 'France';
    currentSport:string = 'Soccer';
    currentLeague:League;
    currentTeam : Team;
}