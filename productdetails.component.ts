import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
product : any =[{image:'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg',name:'WOMAN FLEUR Light watch',price:'400',category:'womens.round'},
{image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdB0msIZDCsaZ-IEZkpfg8RimKnc-xYZ-QykPKUUAAvqfBfDJ7eHML5FxxXU6Mk5dAJGOD8_3PaW_uKo2C2WyC2pNBhtPegziMX8_kbEhu7nA1lPm7lURhLthLMicmBJ1L7PDzaw&usqp=CAc', name:'ORSRA WOMAN FLEUR Pink watch',price:'500',category:'womens'},
{image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQNaATAWsoRxQ3Cs0H8t9LAB_kHll0DT9YUHbwZYDUNUlCx4anTdktzx05vs9O87nrinsdXdnnuIHSg1IL97z9OWAma9fUheiDXmkhqwDOQmYujHK0b9AFyPG6hVf93iG8ecLUOoQ&usqp=CAc', name:'ORSRA WOMAN FLEUR Pink Dial watch',price:'700',category:'womens.round'},
{image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQNaATAWsoRxQ3Cs0H8t9LAB_kHll0DT9YUHbwZYDUNUlCx4anTdktzx05vs9O87nrinsdXdnnuIHSg1IL97z9OWAma9fUheiDXmkhqwDOQmYujHK0b9AFyPG6hVf93iG8ecLUOoQ&usqp=CAc', name:'Pink dial watch flural woman',price:'1000',category:'college Girls'}]

productdetailcategory:string=''
productdetailprice:string=''
  constructor(private value : ActivatedRoute){

  }
  ngOnInit(){
    // console.log(this.value.snapshot.params)
    
    // this.productdetailname=(this.value.snapshot.params['name'])   //paramter pass
   
    this.productdetailcategory=(this.value.snapshot.queryParams['category'])   
    this.productdetailprice=(this.value.snapshot.queryParams['price'])   

    this.value.params.subscribe((Params:Params)=>{
      console.log(Params);
      const productdetailcategory = Params['category'];
      const productdetailprice = Params['price'];

    })

    
  }

}
