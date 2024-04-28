import { Component } from '@angular/core';
interface cusobj {title:string , body:string, image: string, price: number, discount:string};
@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {
 product : cusobj = {title:'Phone' , body : 'Vivo Y21', image : 'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-y21-0002.jpg', price:250000, discount: '20%'};
 
 product2 : cusobj = {title:'Phone' , body : 'Vivo latest Model', image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4Womneqch1GwGkmdLFQYbNCAjww2J0oXxm2l8wXP3duEFpJsIgKrF-FVZvjbPv1_aIDZJGxSDO1YMhzPPRN0jUF_V3K9MEJ64e4ZVoOWhffKxifbXcodW', price:850000, discount: '20%'};
receivedData: string = '';

handleData(data: string) {
  this.receivedData = data;
}
}

