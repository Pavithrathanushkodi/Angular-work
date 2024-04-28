import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs: any = [{image : 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg',title: 'watch',description:'a portable timepiece intended to be carried or worn by a person. It' ,price:'500' ,stock:'availability'},
                
                {image : 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Shoe',description:' it is vulnerable, and shoes provide protection. Form was originally tied to function, but over time, shoes also became fashion items.', price:'700' ,stock:'availability'},

            {image: 'https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707004800&semt=sph', title:'Phone', description:'portable telephone that can make and receive calls over a radio frequency link', price:200000,stock:'availability'}]
}              
