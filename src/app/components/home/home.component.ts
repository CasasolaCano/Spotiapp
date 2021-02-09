//Import necesarioi para usar las peticiones http
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  countries: any[] = [];

  constructor(private spotify:SpotifyService) {
    
    this.spotify.getNewReleases();
   }

}
