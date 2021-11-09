const Card = ({ imageURL, name, year, rating }) => {
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
      <button>Buy Now</button>
    </div>
  );
};

export default Card;
