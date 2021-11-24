import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
cardItemlist:any=[];
productlist=new BehaviorSubject<any>([]);
search=new BehaviorSubject<string>('');
  constructor(private http:HttpClient) { }
  getproduct(){
    return this.productlist.asObservable();
  }
  addtocart(product:any){
    this.cardItemlist.push(product);
    this.productlist.next(this.cardItemlist);
    this.gettotalprice();
    console.log(this.cardItemlist);
  }
  gettotalprice():number{
    let grandtotal=0;
    this.cardItemlist.map((a:any)=>
    {
      grandtotal +=a.total;
    })
    return grandtotal;
  }
  removecartitem(product:any){
    this.cardItemlist.map((a:any,index:any)=>
    {
      if(product.id==a.id){
        this.cardItemlist.splice(index,1)
      }
    })
    this.productlist.next(this.cardItemlist);

  }
  removeallcartitem(){
    this.cardItemlist=[];
    this.productlist.next(this.cardItemlist);
  }
  api=' https://fakestoreapi.com/products/';

  Getproduct(){
    return this.http.get<any>(this.api).pipe(map((res:any)=>{
      return res;

    }));
  }
  
}
