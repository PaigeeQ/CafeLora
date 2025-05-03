import './style.css';

export const Drink = ({ name, image, layers }) => {
    return (
      <>
        <div className="drink">
          <div className="drink__product">
            <div className="drink__cup">
              <img src={image} alt={name} />
            </div>
            <div className="drink__info">
              <h3>{name}</h3>
              {layers.map((layer, index) => (
                <div className="layer" key={index}>
                 <div className="layer__color" style={{ backgroundColor: layer.color }} />
                 <div className="layer__label">{layer.label}</div>
                </div>
             ))}
            </div>
          </div>
          <div className="drink__controls">
            <button className="order-btn">Objednat</button>
          </div>
        </div>
      </>
    );
  };