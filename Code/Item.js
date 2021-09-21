export class Item {
    name 
    price
    constructor (name) {
        this.name = name;
        this.price = this.getPrice();
    }

    setPrice(price) {
        this.price = price;
    }

}