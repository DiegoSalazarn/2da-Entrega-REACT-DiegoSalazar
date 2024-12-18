import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <p>Aquí pronto verás nuestros productos destacados.</p>
    </div>
  );
}


export default ItemListContainer;