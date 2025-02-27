import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../product/product.component";
import { ProductItemComponent } from "../product-item/product-item.component";
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  handleDeleteProduct(product: Product) {
    this.products = this.products.filter(p => p._id !== product._id)
  }

  products: Product[] = []

  constructor() {

  }

  ngOnInit(): void {
    this.products = [
      {
        _id: '1255452',
        name: 'Robe à imprimé floral à nœud découpe',
        description: 'Robe à imprimé floral à nœud découpe.',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_1/1.webp',
          '/assets/images/products/robe_1/2.webp',
          '/assets/images/products/robe_1/3.webp',
          '/assets/images/products/robe_1/4.webp'
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date()
      },
      {
        _id: '185452',
        name: 'Robe portefeuille à volants fleuri',
        description: 'Robe portefeuille à volants fleuri',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_2/1.webp',
          '/assets/images/products/robe_2/2.webp',
          '/assets/images/products/robe_2/3.webp',
          '/assets/images/products/robe_2/4.webp'
        ],
        sold_price: 1999,
        regular_price: 2999,
        created_at: new Date()
      },
      {
        _id: '854122',
        name: 'Robe fendue à fines brides avec boutons',
        description: 'Robe fendue à fines brides avec boutons',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_3/1.webp',
          '/assets/images/products/robe_3/2.webp',
          '/assets/images/products/robe_3/3.webp',
          '/assets/images/products/robe_3/4.webp'
        ],
        sold_price: 1299,
        regular_price: 4599,
        created_at: new Date()
      },
      {
        _id: '785426',
        name: 'Robe avec tulle à col carré évasé',
        description: 'Robe avec tulle à col carré évasé',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_4/1.webp',
          '/assets/images/products/robe_4/2.webp',
          '/assets/images/products/robe_4/3.webp',
          '/assets/images/products/robe_4/4.webp'
        ],
        sold_price: 8299,
        regular_price: 25599,
        created_at: new Date()
      },
      {
        _id: '1257542',
        name: 'Robe de bal ceinturée en mousseline avec manches papillon',
        description: 'Robe de bal ceinturée en mousseline avec manches papillon',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_5/1.webp',
          '/assets/images/products/robe_5/2.webp',
          '/assets/images/products/robe_5/3.webp',
          '/assets/images/products/robe_5/4.webp'
        ],
        sold_price: 2999,
        regular_price: 4999,
        created_at: new Date()
      },
      {
        _id: '1257452',
        name: 'Robe manches dolman plissé',
        description: 'Robe manches dolman plissé',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_6/1.webp',
          '/assets/images/products/robe_6/2.webp',
          '/assets/images/products/robe_6/3.webp',
          '/assets/images/products/robe_6/4.webp'
        ],
        sold_price: 3599,
        regular_price: 6399,
        created_at: new Date()
      },
      {
        _id: '3655452',
        name: 'Robe trapèze fleuri ceinturé',
        description: 'Robe trapèze fleuri ceinturé',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_7/1.webp',
          '/assets/images/products/robe_7/2.webp',
          '/assets/images/products/robe_7/3.webp',
          '/assets/images/products/robe_7/4.webp'
        ],
        sold_price: 8599,
        regular_price: 9699,
        created_at: new Date()
      },
      {
        _id: '1546352',
        name: 'Robe à fines brides à imprimé tropical en dentelle',
        description: 'Robe à fines brides à imprimé tropical en dentelle',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_8/1.webp',
          '/assets/images/products/robe_8/2.webp',
          '/assets/images/products/robe_8/3.webp',
          '/assets/images/products/robe_8/4.webp'
        ],
        sold_price: 2599,
        regular_price: 6899,
        created_at: new Date()
      },
      {
        _id: '8549632',
        name: ' Robe à manches chauve-souris fendu fleuri',
        description: ' Robe à manches chauve-souris fendu fleuri',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_9/1.webp',
          '/assets/images/products/robe_9/2.webp',
          '/assets/images/products/robe_9/3.webp',
          '/assets/images/products/robe_9/4.webp'
        ],
        sold_price: 5399,
        regular_price: 7599,
        created_at: new Date()
      },
      {
        _id: '745847896',
        name: ' Robe à manches chauve-souris fendu fleuri',
        description: ' Robe à manches chauve-souris fendu fleuri',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_10/1.webp',
          '/assets/images/products/robe_10/2.webp',
          '/assets/images/products/robe_10/3.webp',
          '/assets/images/products/robe_10/4.webp'
        ],
        sold_price: 2699,
        regular_price: 8599,
        created_at: new Date()
      },
      {
        _id: '12748596',
        name: 'Robe moulante décolletée à paillettes à ruché métallique',
        description: 'Robe moulante décolletée à paillettes à ruché métallique',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_11/1.webp',
          '/assets/images/products/robe_11/2.webp',
          '/assets/images/products/robe_11/3.webp',
          '/assets/images/products/robe_11/4.webp'
        ],
        sold_price: 2399,
        regular_price: 4699,
        created_at: new Date()
      },
      {
        _id: '84956235',
        name: 'Robe cache-cœur à imprimé avec nœud',
        description: 'Robe cache-cœur à imprimé avec nœud',
        category: [ 'Robes', 'Femmes' ],
        imageUrl: [
          '/assets/images/products/robe_12/1.webp',
          '/assets/images/products/robe_12/2.webp',
          '/assets/images/products/robe_12/3.webp',
          '/assets/images/products/robe_12/4.webp'
        ],
        sold_price: 8599,
        regular_price: 14299,
        created_at: new Date()
      }
    ]
  }
 

}
