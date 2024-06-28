import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  constructor(private service:MovieApiService){}

  arrSearchResult:any[]=[];

  searchFailed:boolean = false;

  ngOnInit(): void {

  }

  searchForm = new FormGroup({

    "movieName": new FormControl(null)

  })

  getSearchedMovie(){

    this.service.getSearchMovieApi(this.searchForm.value).subscribe((searchResult)=>{

      this.arrSearchResult = searchResult.results;
   
      // if (this.arrSearchResult.length > 0) {
      

      // } else {
        
      //   this.searchFailed = true

      // }

    })

  }

}

