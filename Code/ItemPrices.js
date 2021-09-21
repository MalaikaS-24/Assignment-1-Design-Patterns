export class ItemPrices {
    items
    constructor () {
        fetchItems();
    }

    async getItems(){
        this.items = await fetch('./items.json');
    }

    getPrice(name){
        return this.items[name];
    }

}