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
      'Authorization' : 'Bearer BQBfJ0JKFVIvFU3Ivf6GBZhgr5eQHZbNK8OH-7KHfbPAJJ98N7vtnMKYin0TsJ-wxr6QI8NlK7QxwouGevk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
   }
}
