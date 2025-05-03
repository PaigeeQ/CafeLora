import './style.css';

export const Drink = ({ name, image }) => {
  return (
    <Drink
    id={0}
    name="Romano"
    ordered={false}
    image="./img/cups/romano.png"
    layers={[
      { color: '#fbdf5b', label: 'citrón' },
      { color: '#613916', label: 'espresso' },
    ]}
  />
  
  );
};
