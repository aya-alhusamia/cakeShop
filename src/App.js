import products from "./products";
import "./App.css";
import pic4 from "./Pic/pic4.jfif";
function App() {
  console.log("products", products);
  const newProduct = products.map((product) => (
    <div>
      <img src={product.image} className="cakes" />
      <p className="cake4">{product.name} </p>
      <p>{product.price}$</p>
    </div>
  ));
  return (
    <div className="cake1">
      <titele>CAKE SHOP</titele>
      <p>This is my first cake shop app</p>
      <img className="cake-imeg" src={pic4} />
      <p className="list">{newProduct}</p>
    </div>
  );
}

export default App;
