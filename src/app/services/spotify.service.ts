import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service listo C:');
   }
   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBFtU701khVoL9oamwIgYfulbz4i7o760zn4renrCkBshYNL3OLF_M8eD60OgtBokF1lHsIyvSBM8egM1k'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
        .subscribe( data =>{
          console.log(data);
        });

   }
}
