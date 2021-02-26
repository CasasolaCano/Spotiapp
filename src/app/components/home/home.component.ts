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

  newReleases: any[] = [];
  loading: boolean;

  error:boolean;
  messageError:string = '';

  constructor(private spotify:SpotifyService) {

    this.loading = true;
    this.error = false;
    
    this.spotify.getNewReleases().subscribe((data:any) => {
      console.log(data);
      this.newReleases = data;
      this.loading = false;
    }, (errorService) => {
      this.loading = false;
      this.error = true;
      this.messageError = errorService.error.error.message;
    });
   }

   ngOnInit():void {

   };

}
