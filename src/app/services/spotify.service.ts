import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("Service ready");
   }


   getNewReleases() {
     
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQD2b_pyzUInpDxXM-ZSdNY8o7xM-K_P1KdW2HvcX3WEisvA52vMsfROEzZso0R7byUmPrQLmed8A6E6-Ws'
    })

    this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers}).subscribe(data => {

      console.log(data);
    
    })

   }
}
