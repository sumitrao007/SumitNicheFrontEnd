import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    document.body.style.backgroundColor="white";
  }

  products = [
    {
      name: 'Wireless Headphones',
      price: 150,
      description: 'High-quality wireless headphones with noise cancellation.',
      category: 'Electronics',
      discountPrice: 120,
      image: 'assets/images/product3.jpg',
      quantity: 1
    },
    {
      name: 'Running Shoes',
      price: 80,
      description: 'Comfortable and lightweight running shoes for daily wear.',
      category: 'Footwear',
      discountPrice: 65,
      image: 'assets/images/product4.png',
      quantity: 2
    }
  ];

  incrementQuantity(product: any): void {
    product.quantity++;
  }

  decrementQuantity(product: any): void {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  calculateTotal(): number {
    return this.products.reduce((total, product) => {
      return total + product.discountPrice * product.quantity;
    }, 0);
  }

  onRemove(item:any,index:any){
   
  }


}
