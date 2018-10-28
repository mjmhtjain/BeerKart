export class InventoryClass{
    _id: String = "";
    productId:String = "";
    productName : String = "";
    productImage: String = "";
    productInfo: String = "";
    CPU: number = 0;
}

export interface Inventory{
    _id: String ;
    productId:String ;
    productName : String ;
    productImage: String ;
    productInfo: String ;
    CPU: number ;

}