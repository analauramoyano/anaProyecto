import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anaProyecto';
  items = ['ana', 'laura', 'claudia'];
  power = 10;



  products: Product[] = [
    {
        id: '1',
        image: 'assets/images/muffin_de_vainilla.png',
        title: 'muffin de vainilla',
        price: 100,
        description: 'dulce'
    },
    {
      id: '2',
      image: 'assets/images/cupcake.png',
      title: 'cupcacke',
      price: 200,
      description: 'dulce caro'
    }






  ];
  addItem()
  {
    this.items.push('nuevo item');
  }
  deleteItem(index: number)
  {
    this.items.splice(index, 1);
  }

  clickProduct(id: number)
  {
    console.log('product');
    console.log(id);
  }

}
