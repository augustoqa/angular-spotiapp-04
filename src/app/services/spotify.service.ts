import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service');
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAtadrGTeXbyfPF41sZXtpeBV2zUOEeUiuhSVsh2I1uxM3EPPnVe3b3S8_-tbCnckgBRIPkMHBuJV9MO7Q'
    });

    return this.http.get(url, {headers});

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ));

  }

  getArtista( termino: string ) {
    
    return this.getQuery(`search?q=${termino }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items ) );

  }
}
