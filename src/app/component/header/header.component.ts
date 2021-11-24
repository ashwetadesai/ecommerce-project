import { Component, HostListener, OnInit } from '@angular/core';
import { windowWhen } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarfixed:boolean=false;
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY>100){
      this.navbarfixed=true;
    }
    else{
      this.navbarfixed=false;
    }
  }
totalitem:number=0;
searchtern !:string;
  constructor(private srvice:ApiService) { }

  ngOnInit(): void {
    this.srvice.getproduct().subscribe(res=>{
this.totalitem=res.length;
    })

  
  }

  search(event:any){
    this.searchtern=(event.target as HTMLInputElement).value;
    this.srvice.search.next(this.searchtern);
  }

}
