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
      'Authorization': 'Bearer BQAd1folrFcb1v0dl0Td381VAFT8LSzw-VFu6ZR75bV-Ei_r2312NMLvERHF9jeqaIVpWLejU4ukXM6qYiM'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

  getArtista( termino: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAd1folrFcb1v0dl0Td381VAFT8LSzw-VFu6ZR75bV-Ei_r2312NMLvERHF9jeqaIVpWLejU4ukXM6qYiM'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}
