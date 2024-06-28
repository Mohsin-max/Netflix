import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService implements OnInit {

  constructor(private http: HttpClient) { }

  baseurl: any = "https://api.themoviedb.org/3";
  apikey: any = "173a8d7812ad61f437e5577c967816c9";

  ngOnInit(): void {



  }

  getBannerApi(): Observable<any> {

    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)

  }

  getTrendingApi(): Observable<any> {

    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)

  }

  getSearchMovieApi(data: any): Observable<any> {

    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)

  }

  getMovieDetailApi(data: any): Observable<any> {

    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)

  }

  getMovieCastApi(data: any): Observable<any> {

    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)

  }

  getMovieVideoApi(data: any): Observable<any> {

    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`);

  }

  getActionApi(): Observable<any> {

    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)

  }

  getAdventureApi(): Observable<any> {

    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)

  }

  getAnimationApi(): Observable<any> {

    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)

  }

  getComedyApi(): Observable<any> {

    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)

  }

  getDocumentaryApi(): Observable<any> {

    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)

  }

  getSciFiApi(): Observable<any> {

    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)

  }

  getThrillerApi(): Observable<any> {

    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)

  }

}
