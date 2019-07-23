import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutPage} from '../about/about';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  dataUrl: string = 'https://apiv2.apifootball.com/?action=get_players&player_name=ronaldo cristiano&APIkey=8b6a3a9ebbc419b16b81f8ffa24a9f5f30f3f55b58c8adea3c38f0165631be33';
  data1Url: string = 'https://apiv2.apifootball.com/?action=get_statistics&match_id=24562&APIkey=8b6a3a9ebbc419b16b81f8ffa24a9f5f30f3f55b58c8adea3c38f0165631be33';

  data2Url: string  = 'https://newsapi.org/v2/top-headlines?country=us&category=TECHNOLOGY&apiKey=ef081ebd06ed4dcab1ec355e7d275507';

  
  player: any;
  stats: any;
  article:any;
  img2: any;
  img3: any;
  

      constructor(public navCtrl: NavController, private http:Http) {
     this.http.get(this.dataUrl).map((res)=> res.json()).subscribe((val)=> {
      
      this.player = val;

    });
    this.http.get(this.data1Url).map((res)=> res.json()).subscribe((val)=> {
      
      this.stats = val['24562']['statistics'];
       console.log(val['24562']['statistics']);

    });

    this.http.get(this.data2Url).map((res)=> res.json()).subscribe((val)=> {
      
      this.article = val;
      console.log(val.articles);
      this.img2 = val.articles[0].content;
      this.img3 = val.articles[1].content;
   

    });


  
  }
}
