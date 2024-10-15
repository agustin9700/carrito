import PropTypes from "prop-types";

export default function Guitar({ guitarra, addToCart }) {
  const { name, image, description, price } = guitarra;

  // const handleClick = function(guitarra) {
  //   setCart([...cart,setCart])
  // }

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => addToCart(guitarra)} // Pasamos el id en lugar de guitarra
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

// Definimos las propTypes para validar las props que recibe el componente
Guitar.propTypes = {
  guitarra: PropTypes.shape({
    id: PropTypes.number.isRequired, // id debe ser un número y es requerido
    name: PropTypes.string.isRequired, // name debe ser una cadena y es requerido
    image: PropTypes.string.isRequired, // image debe ser una cadena y es requerido
    description: PropTypes.string.isRequired, // description debe ser una cadena y es requerido
    price: PropTypes.number.isRequired, // price debe ser un número y es requerido
  }).isRequired, // guitarra es un objeto requerido
};
