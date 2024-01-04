import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [
    {
      id: 1,
      name: "kashmir",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tour_duration: "6",
      price: 160,
      discountPrice:140,
      Number_of_locations: 3,
      Avg_rating:4.7,
      Num_bookings:9,
      imageURL: "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/kashmir.jpg",
    },
    {
      id: 2,
      name: "Delhi",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tour_duration: "4",
      price: 160,
      discountPrice:140,
      Number_of_locations: 6,
      Avg_rating:4.1,
      Num_bookings:5,
      imageURL: "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Delhi.jpg",
      slug: "nike-react-miler"
    },
    {
      id: 3,
      name: "varanasi",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tour_duration: "6",
      price: 160,
      discountPrice:140,
      Number_of_locations: 3,
      Avg_rating:4.4,
      Num_bookings:10,
      imageURL: "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/varanasi.jpg",
      slug: "nike-air-zoom-pegasus-37"
    },
    {
      id: 4,
      name: "mysore-palace",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tour_duration: "6",
      price: 160,
      discountPrice:140,
      Number_of_locations: 3,
      Avg_rating:4.8,
      Num_bookings:9,
      imageURL: "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/mysore-palace.jpg",
      slug: "nike-joyride-run-flyknit"
    },
    {
      id: 5,
      name: "Hawa-Mahal-Palace-Jaipur",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tour_duration: "6",
      price: 160,
      discountPrice:140,
      Number_of_locations: 3,
      Avg_rating:4.3,
      Num_bookings:7,
      imageURL: "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Hawa-Mahal-Palace-Jaipur.jpg",
      slug: "nike-mercurial-vapor-13-elite-fg"
    },
    {
      id: 6,
      name: "City-Palace-Udaipur",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tour_duration: "6",
      price: 160,
      discountPrice:140,
      Number_of_locations: 3,
      Avg_rating:4.2,
      Num_bookings:6,
      imageURL: "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/City-Palace-Udaipur.jpg",
      slug: "nike-phantom-vision-elite-dynamic-fit-fg"
    },
  ];
totalProducts=this.products.length;
heighestRated=this.products.filter(p=>p.Avg_rating>4.5).length
mostBooked=this.products.filter(p=>p.Num_bookings>8).length
}
