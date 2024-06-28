import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: MovieApiService) { }

  arrMovieDetailData: any[] = [];
  arrMovieCastData: any[] = [];
  arrMovieVideoData: any;

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get("id");

    this.getMovieDetailData(param);
    this.getMovieCastData(param);
    this.getMovieVideoData(param);

  }

  getMovieDetailData(param: any) {

    this.service.getMovieDetailApi(param).subscribe((movieDetailResult) => {


      this.arrMovieDetailData.push(movieDetailResult);

      console.log(this.arrMovieDetailData, "moviedetail");
    })

  }

  getMovieCastData(param: any) {

    this.service.getMovieCastApi(param).subscribe((movieCastResult) => {

      this.arrMovieCastData = movieCastResult.cast;

      console.log(this.arrMovieCastData, "movieCast");


    })

  }

  getMovieVideoData(param: any) {

    this.service.getMovieVideoApi(param).subscribe((movieVideoResult) => {


      this.arrMovieVideoData = movieVideoResult.results


      this.arrMovieVideoData.forEach((element: any) => {

        if (element.type == "Trailer") {


          this.arrMovieVideoData = element.key;

        }


      })

    })

  }

}
