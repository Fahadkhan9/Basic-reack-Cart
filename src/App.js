import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
// import { render } from "@testing-library/react";
import firebase from 'firebase/compat/app';

// import 'firebase/compat/firestore';



class App extends React.Component{
  constructor(){
    super();
//!state is an object which contains the property of a specific item
     this.state = {
       products : [
          // { //instead of this products array of objects we will use the product from the firebase database
          //   price : 99,
          //   title : 'Watch',
          //   qty : 5,
          //   img : 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
          //   id : 1
          // },
          // {
          //   price : 999,
          //   title : 'Mobile',
          //   qty : 10,
          //   img : 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          //   id : 2
          // },
          // {
          //   price : 9999,
          //   title : 'Laptop',
          //   qty : 11,
          //   img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
          //   id : 3
          // }
       ],
       loading : true

    };

    this.db= firebase.firestore();
}

componentDidMount() {
  this.db.collection("products").onSnapshot(snapshot => {
    const products = snapshot.docs.map(doc => {
      const data = doc.data();
      data["id"] = doc.id;
      console.log(data);
      console.log(doc.data());
      return data; 
    });
    this.setState({ products: products, loading: false });
  });
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
   if(products[index].qty===0){
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
  const items = products.filter((product)=> product.id !== id);

  this.setState({
    products : items
  })
}

//*for getting the cart count
getCartCount = () =>{
 
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
    count = count + product.qty;
  })
  return count;
}

//* for getting the total amount of the Cart
getCartTotal = () =>{   
  const {products} = this.state;
  let CartTotal = 0;
  products.map((product) => {
   CartTotal = CartTotal + product.qty*product.price;
  })
  return CartTotal;
}
   
addProduct = () => {
  this.db
    .collection("products")
    .add({
      img: "",
      price: 900,
      qty: 3,
      title: "Washing Machine"
    })
    .then(docRef => {
      docRef.get().then(snapshot => {
        console.log("Product has been added", snapshot.data());
      });
    })
    .catch(error => {
      console.log(error);
    });
};

  render(){
    const {products,loading} = this.state;
  return (
    <div className="App">
      <Navbar count = {this.getCartCount()}/>
      <button onClick={this.addProduct}>add new product</button>
      <Cart
      products  = {products}
      onIncreaseQuantity  = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}/>
       
       {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getCartTotal()}
        </div>
      {/* <div style={{fontSize : 20 , padding : 10}}>TOTAL: {this.getCartTotal()}</div> */}
    </div>
    
  );
}
}

export default App;
