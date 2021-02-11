import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("Service ready");
   }


   getNewReleases() {
     
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer token'
    })

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers}).pipe(map((data:any) => 

       data.albums.items
    ));

   }

   getArtist(termino:string) {

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer token'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers}).pipe(map((data:any) => 

       data.artists.items
    ));

   }
}
