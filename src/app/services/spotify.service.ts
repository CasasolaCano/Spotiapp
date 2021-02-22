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

   getQuery(query:string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer token'
    })

    return this.http.get(url, {headers});
   }

   getNewReleases() {
     
    return this.getQuery("browse/new-releases").pipe(map((data:any) => 

    data.albums.items
    ));

   }

   getArtists(termino:string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data:any) => 

    data.artists.items
    ));

   }

   getArtist(id: string) {

    return this.getQuery(`artists/${id}`);/*.pipe(map((data:any) => 

      data.artists.items
      ));
      */
   }
}
