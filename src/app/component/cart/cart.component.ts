import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
product:any=[];
 grandtotal !:number;
  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.service.getproduct().subscribe(res=>{
      this.product=res;
      this.grandtotal=this.service.gettotalprice();
    })
  }
  removeitem(item:any){
    this.service.removecartitem(item);
  }

  removeallcartitem(){
    this.service.removeallcartitem();
  }


}
