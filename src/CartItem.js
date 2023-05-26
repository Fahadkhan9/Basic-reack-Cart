import React from "react";

class CartItem extends React.Component{
    // constructor(){
    //     super();
// //!state is an object which contains the property of a specific item
//         //*prev this.state = {
        //     price : 999,
        //     title : 'Phone',
        //     qty : 1,
        //     img : ''
        // }
    // }
//     //! by using the arrow function we can bind it automatically without using the bind
//      increaseQuantity = () =>{
//         //* if we  want to increase the quantity what we will do 
//         //* this.state.qty += 1;
//         //! this will increase the quantity but it will not rerender it 
//         //? so what we will do for this we use SET STATE

        // this.setState({
        //     qty : this.state.qty +1
        //    // it will do only the shallow merging and this state method is only used 
        //    // when previous value is not needed
        // })

//         this.setState((prevState)  => { 
                      // it will do only the shallow merging and this state method is only used 
            // when previous value is  needed
//             return{ 
//              qty : prevState.qty +1
    
//             }
//      })
//     }
 
//     //! note if the set state function is called more then one time then this process is known
//     //! as batching the react calls only the set state which is present at last
//     //! but again note :: only inside the first form of set state(object method)

//     decreaseQuantity = () =>{
//         const {qty} = this.state;
//         this.setState((prevState)  => { 
           
// //   if(prevState.qty>0){ 
 
//  if(qty === 0)
// {
//     return;
// }
//   return{ 
//    qty : prevState.qty - 1
//   }
// // }
// // else{
// //     return 0           my method
// // }
// },() => {
//     // we can also call a callback function for set state 
//     //* as javascript is asynchronous in nature
// })
//     }

   //!note in second form if the set state is called multiple times it is called in
   //! the form of queue, if called multiple times it will call upto the no of times
   //!** note in promises the set state works as synchronous call and it does'nt performs batching when it is called multiple times in promise
    render(){ 
        // const{price,title,qty} = this.state;
        console.log(this.props);
         const{price,title,qty} = this.props.product;
         const{
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
         } = this.props;
        return(
           <div className="cart-item ">
            <div className="left-block">
                <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize : 25}}>{title}</div>
                <div style={{color : '#777'}}>Rs {price}</div>
                <div style={{color : '#777'}}>Qty: {qty}</div> 
                <div className="cart-item-actions">
                    {/*Buttons*/}
    <img 
    alt="increase"  
    className="action-icons" 
    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
    onClick={() => onIncreaseQuantity(product)}  //.bind(this)}
    // * bind function is used to bind the object with the reference function otherwise it will show undefined
    ></img>

    <img alt="decrease" 
     className="action-icons" 
     src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
     onClick={() => onDecreaseQuantity(product)} ></img>

    <img alt="delete"
      className="action-icons" 
      src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
      onClick={() => onDeleteProduct(product.id)}></img>

                </div>
            </div>
           </div>
        );

        
    }
    
}

const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'

    }
}

export default CartItem;