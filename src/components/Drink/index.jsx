import './style.css';
import { Layer } from '../Layer';

export const Drink = ({ name, image, layers }) => {
    return (
        <div className="drink">
          <div className="drink__product">
            <div className="drink__cup">
              <img src={image} alt={name} />
            </div>
            <div className="drink__info">
            <h3>{name}</h3>
             {layers.map((layer, index) => (
          <Layer key={index} color={layer.color} label={layer.label} />
             ))}
            </div>
          </div>
          <div className="drink__controls">
            <button className="order-btn">Objednat</button>
          </div>
        </div>
    )};