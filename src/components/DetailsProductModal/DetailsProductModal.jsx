import Modal from '../Modal/Modal.jsx'
import {formatPrice} from "../../utils/formatPrice.js";
import './DetailsProductModal.scss'

function DetailsProductModal({ product, isOpen, onClose}) {
  if (!product) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal__content details">
        <div className="details__image">
          <img width={220} src={product.image} alt={"Изображение " + product.title}/>
        </div>

        <div className="details__info">
          <h3 className="details__title">{product.title}</h3>
          <p className="details__description">{product.description}</p>
          <span className="details__price">{formatPrice(product.price)}</span>
        </div>
      </div>
    </Modal>
  )
}

export default DetailsProductModal;