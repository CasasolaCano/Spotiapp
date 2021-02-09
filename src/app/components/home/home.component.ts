//Import necesarioi para usar las peticiones http
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  countries: any[] = [];

  constructor(private http:HttpClient) {
    //Petición http get de angular para recoger datos de paises.
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data:any) => {
      this.countries = data;
      console.log(data);
    })
   }

  ngOnInit(): void {
  }

}
