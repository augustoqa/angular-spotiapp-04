import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBNroI2EPXBW-DCjQGWzhACCTXHxHc1i_9sif80clx2EPVq35vrlDDZG8JM2KtP_gsjrjW2m-SBS224oNE'
    })

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( data => {
        console.log(data);
      });

  }
}
