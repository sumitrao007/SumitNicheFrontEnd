import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  product = {
    productTitle: '',
    originalPrice: null,
    description: '',
    productCategory: '',
    discountPercentage: null,
    sellingPrice:null,
    productQuantity: null,
    ratings: 0,
    
  };
  previewImage: string | ArrayBuffer | null|undefined = null;

  onSubmit(form: any,inputFile:any){

  }

  setRating(star:any){

  }

  onImageChange1(inputFile:any){

  }

 

}
