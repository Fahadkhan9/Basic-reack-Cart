import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
     constructor(){
        super();
//!state is an object which contains the property of a specific item
         this.state = {
           products : [
              {
                price : 99,
                title : 'Watch',
                qty : 5,
                img : '',
                id : 1
              },
              {
                price : 999,
                title : 'Mobile',
                qty : 10,
                img : '',
                id : 2
              },
              {
                price : 9999,
                title : 'Laptop',
                qty : 11,
                img : '',
                id : 3
              }
           ]
        }
    }
    handleIncreaseQuantity = (product) =>{
       console.log("the quantity of the product should be increased",product);
       const {products} = this.state;
       const index = products.indexOf(product);
       products[index].qty += 1;

       this.setState({
        products : products
       })

    }
    //* for decreasing the quantity
    handleDecreaseQuantity = (product) =>{
       console.log("the quantity of the product should be Decreased",product);
       const {products} = this.state;
       const index = products.indexOf(product);
       if(products[index].qty>0){
        return;
      }
       products[index].qty -= 1;
       this.setState({
        products : products
       })
    }
    //*for deleting a product
    handleDeleteProduct = (id) =>{
      const {products} = this.state;
      const items = products.filter((item)=> item.id !== id);

      this.setState({
        products : items
      })
    }

    render(){
        const{products} = this.state;
         return(
               <div className="cart">
                     {
                        products.map((product)=>{
                            return (<CartItem 
                            product = {product}
                             key = {product.id}
                             onIncreaseQuantity  = {this.handleIncreaseQuantity}
                             onDecreaseQuantity = {this.handleDecreaseQuantity}
                             onDeleteProduct = {this.handleDeleteProduct}
                             />
                            )
                        })}
               </div>
         );
    }
        
    
    
}

export default Cart;