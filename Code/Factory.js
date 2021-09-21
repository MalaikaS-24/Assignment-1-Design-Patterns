import { Item } from './Item.js';
import { ItemPrices } from './ItemPrices';

export class Factory {
    itemPrices
    constructor(itemPrices){
        this.itemPrices = new ItemPrices();
    }

    createItem(){
        if (Math.floor(Math.random() * 101)%2 === 0){
            const item = new Item('itemA');
            item.price = this.itemPrices.getPrice(this.item.name);
        }else{
            const item = new Item('itemB');
            item.price = this.itemPrices.getPrice(this.item.name);
        }
        return item;
    }
}