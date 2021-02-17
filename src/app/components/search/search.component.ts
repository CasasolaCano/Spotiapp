import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean = true;

  constructor(private spotify:SpotifyService) { }

  search(termino: string) {

    this.loading = true;
    console.log(termino);
    this.spotify.getArtist(termino).subscribe((data:any) => {
      this.artists = data;
      this.loading = false;
    })
  }

}
