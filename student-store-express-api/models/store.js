const express = require("express")
const data = require("../data/db.json")

class Store{
   static fetchProducts() {
    return data;

   }
   static fetchProductById(productId){
    return data.fetchProducts[productId-1];
   }

 /*  static purchaseOrder(){
    const purchase = await storage.get("purchases").value()
    return purchase
   }*/

}
module.exports = Store