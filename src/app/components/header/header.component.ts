import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navbg:any;

  @HostListener("document:scroll") Scrollover(){

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {

      this.navbg = {

        'background-color':'#000000'

      }
    }else{

      this.navbg = {

      }

    }

  }

}
