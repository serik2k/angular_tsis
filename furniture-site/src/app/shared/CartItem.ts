import { Furn } from "./Furn";

export class CartItem{
    constructor(furn:Furn){
      this.furn = furn;  
    }
    furn:Furn;
    quantity:number = 1;

    get price():number{
        return this.furn.price * this.quantity;
    }
}