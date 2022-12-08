import "../style/productCard.scss"


// Home section burry here ohh dear
const ProductCard = ({ name, price, handler, imgSrc,id }) => {
    return (
      <div className="porductCard">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({ name,quantity:1, price, imgSrc,id })}>Add to Cart</button>
      </div>
    );
  };

  export default ProductCard