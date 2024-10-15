import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { useState,useEffect } from "react";
import { db } from "./data/db";

function App() {
const initialCart = JSON.parse(localStorage.getItem("carrito")) || [];

  const [data, setData] = useState(db);
  const [cart, setCart] = useState(initialCart);



  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart))
  }, [cart]);

  // Función para agregar guitarras al carrito
  function addToCart(item) {
    const itemExists = cart.findIndex((guitarra) => guitarra.id === item.id);
    if (itemExists >= 0) {
      //existe en el carrito
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
    
  }

  function deleteItem(id){
    setCart(cart.filter(guitarra => guitarra.id !== id))
  }

  function increaseQuantity(id){
    const incrementandoCantidad = cart.map(guitarra => {
      if(guitarra.id === id){
        return {...guitarra, quantity: guitarra.quantity + 1}
      }
      return guitarra
    })
    setCart(incrementandoCantidad)

  }
  

  function decreaseQuantity(id){
    const decrementandoCantidad = cart.map(guitarra => {
      if(guitarra.id === id && guitarra.quantity > 1){
      
          return {...guitarra, quantity: guitarra.quantity - 1}
        
        
        
      }
      return guitarra
    })
    setCart(decrementandoCantidad)
  }

  function deleteAll(){
   setCart([])
  }


  

  return (
    <>
      <Header
      cart={cart}
      deleteItem={deleteItem}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity} 
      deleteAll={deleteAll}/>
      

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitarra) => (
            <Guitar
              key={guitarra.id} // Idealmente, usa un id único desde db
              guitarra={guitarra}
              addToCart={addToCart}
              
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
