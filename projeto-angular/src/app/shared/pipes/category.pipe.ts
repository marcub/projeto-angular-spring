import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Supermercado': return 'shopping_cart';
      case 'Compras': return 'shopping_basket'
      case 'Restaurante': return 'restaurant'
    }
    return 'category';
  }

}
