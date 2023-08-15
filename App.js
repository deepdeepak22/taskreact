import "./App.css";

function App() {
  const product =  {
    name: "Iphone 14 Pro Max",
    price: "1,27,999",
    poster: "https://m.media-amazon.com/images/I/71T5NVOgbpL._SX679_.jpg",
    category: "Electronics",
    rating: 8,
    description:
      "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion,48MP Main camera for up to 4x greater resolution",
    }
    
  return <div className="App">
    <Description product={product}/>
  </div>;
}
function Description({product}){
  return(
    <div className="overview">
          <div className="poster"><img className="product-poster" src={product.poster} alt= {product.poster} /></div>
          <div className="product-desc">
             <div className="product-name"><h1>{product.name}</h1></div>
             <div className="product-price"> <h2>Rs.{product.price}</h2></div>
             <div className="product-category"><h5>{product.category} ⭐{product.rating}</h5></div>
             <div className="product-description">{product.description}</div>
          </div>

    </div>
  )
}

export default App;
