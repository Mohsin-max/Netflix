import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiService) { }

  arrBannerData: any[] = [];
  arrTrendingData: any[] = [];
  arrActionData: any[] = [];
  arrAdventureData: any[] = [];
  arrAnimationData: any[] = [];
  arrComedyData: any[] = [];
  arrDocumentaryData: any[] = [];
  arrsciFiData: any[] = [];
  arrThrillerData: any[] = [];

  ngOnInit(): void {

    this.getBannerApiData();
    this.getTrendingApiData();
    this.getActionApiData();
    this.getAdventureApiData();
    this.getAnimationApiData();
    this.getComedyApiData();
    this.getDocumentaryApiData();
    this.getSciFiApiData();
    this.getThrillerData();

  }

  // BANNER

  getBannerApiData() {

    this.service.getBannerApi().subscribe((bannerResult) => {

      this.arrBannerData = bannerResult.results;

    })

  }

  // TRENDING 

  getTrendingApiData() {

    this.service.getTrendingApi().subscribe((trendingResult) => {

      this.arrTrendingData = trendingResult.results;

    })

  }

  // ACTION

  getActionApiData() {

    this.service.getActionApi().subscribe((actionResult) => {


      this.arrActionData = actionResult.results

    })

  }

  // ADVENTURE

  getAdventureApiData() {

    this.service.getAdventureApi().subscribe((adventureResult) => {


      this.arrAdventureData = adventureResult.results

    })

  }


  // ANIMATION

  getAnimationApiData() {

    this.service.getAnimationApi().subscribe((animationResult) => {


      this.arrAnimationData = animationResult.results

    })

  }


  // COMEDY

  getComedyApiData() {

    this.service.getComedyApi().subscribe((comedyResult) => {


      this.arrComedyData = comedyResult.results

    })

  }


  // DOCUMENTARY

  getDocumentaryApiData() {

    this.service.getDocumentaryApi().subscribe((documentaryResult) => {


      this.arrDocumentaryData = documentaryResult.results

    })

  }


  // SCI-FI

  getSciFiApiData() {

    this.service.getSciFiApi().subscribe((sciFiResult) => {


      this.arrsciFiData = sciFiResult.results

    })

  }

  // THRILLER

  getThrillerData() {

    this.service.getThrillerApi().subscribe((thrillerResult) => {


      this.arrThrillerData = thrillerResult.results

    })

  }
}
