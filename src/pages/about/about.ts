import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  dataUrl: string = 'https://apiv2.apifootball.com/?action=get_players&player_name=ronaldo cristiano&APIkey=8b6a3a9ebbc419b16b81f8ffa24a9f5f30f3f55b58c8adea3c38f0165631be33';
  data1Url: string = 'https://apiv2.apifootball.com/?action=get_statistics&match_id=24562&APIkey=8b6a3a9ebbc419b16b81f8ffa24a9f5f30f3f55b58c8adea3c38f0165631be33';

  data2Url: string  = 'https://newsapi.org/v2/top-headlines?country=us&language=en&category=technology&apiKey=ef081ebd06ed4dcab1ec355e7d275507';

  player: any;
  stats: any;
  title:any;
  id: number;

      constructor(public navCtrl: NavController, private http:Http) {
     this.http.get(this.dataUrl).map((res)=> res.json()).subscribe((val)=> {
      
      this.player = val;

    });
    this.http.get(this.data1Url).map((res)=> res.json()).subscribe((val)=> {
      
      this.stats = val['24562']['statistics'];
      //  console.log(val['24562']['statistics']);

    });
    // 

    this.http.get(this.data2Url).map((res)=> res.json()).subscribe((val)=> {
      
      this.title = val.articles;
      console.log('About articles = ', val.articles);
     this.id = val.articles.content;
    });


  
  }
  toContent(){
    this.navCtrl.push(SettingsPage, data => {
        this.id;
    });
  }
    



  }