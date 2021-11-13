const Card = ({
  imageURL,
  name,
  year,
  rating,
  cartItems,
  setCartItems,
  id,
  setAdded,
}) => {
  const buyNowHandler = () => {
    let found = false;
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 900);
    for (let i = 0; i < cartItems.length; i++) {
      let item = cartItems[i];
      if (item.id === id) {
        found = true;
        item.quantity += 1;
        break;
      }
    }
    if (found) return;

    setCartItems([
      ...cartItems,
      {
        name: name,
        background_image: imageURL,
        quantity: 1,
        id: id,
      },
    ]);
  };
  return (
    <div className="card">
      <div className="background-image">
        <img src={imageURL} alt={name} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <div className="minor-detail">
          <h5>
            <span>Released:</span> {year}{" "}
          </h5>
          <h5>
            <span>rating:</span> {rating}{" "}
          </h5>
        </div>
      </div>
      <button onClick={buyNowHandler}>Buy Now</button>
    </div>
  );
};

export default Card;
