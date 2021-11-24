import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:ApiService) { }
 productlist:any;
 searchKey:string='';
 filterCategory:any;
  ngOnInit(): void {
    this.service.Getproduct().subscribe(res=>{
      this.productlist=res;
      this. filterCategory=res;
      this.productlist.forEach((a:any) => {
        if(a.category==="women's clothing" || a.category=== "men's clothing"){
          a.category='fashion';
        }

         Object.assign(a,{quantity:1,total:a.price})
      });
    });
    this.service.search.subscribe(val=>{
      this.searchKey=val;
    })
  }
  addtocard(item:any){
    this.service.addtocart(item);
  }

  filter(category:string){
    this.filterCategory=this.productlist.filter((a:any)=>{
      if(a.category == category || category ==''){
        return a;
      }
    })
  }


}
