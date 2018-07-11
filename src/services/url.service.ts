import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
    private allSports:string = 'https://www.thesportsdb.com/api/v1/json/1/all_sports.php';
    private allLeagues:string = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    private allLeaguesPerCountry:string = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c={0}&s={1}';
    private allTeamsInALeague:string = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l={0}';
    private allPlayersinATeam:string = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t={0}';

    constructor(){}

    getAllSports(){
        return this.allSports;
    }


    getAllTeamMembers(teamName){
        return encodeURI(this.format(this.allPlayersinATeam,[teamName]));         
    }
    getAllLeaguesForCountryUrl(country:string,sports:string):string{
        return encodeURI(this.format(this.allLeaguesPerCountry,[country,sports]));         
    }

    getAllTeamsInLeaugeUrl(league:string):string{
        return encodeURI(this.format(this.allTeamsInALeague,[league]));
        
    }

    private format = (string, parameters) => {
        var formatted = string;
        if (parameters && parameters.length) {
            for (var i = 0; i < parameters.length; i++) {
            var regexp = new RegExp("\\{" + i + "\\}", "gi");
            formatted = formatted.replace(regexp, parameters[i]);
            }
        }
        return formatted;
    };

}