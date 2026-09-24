import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

function Modal({ isOpen, onClose, children}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleEscape);
    document.body.classList.add('body-hidden');

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('body-hidden');
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return createPortal (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal__window">
        <button type="button" className="modal__close button-reset" aria-label="Закрыть модальное окно" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.502098 0.502098C1.17158 -0.167366 2.257 -0.167366 2.92648 0.502098L12 9.57567L21.0736 0.502098C21.743 -0.167366 22.8285 -0.167366 23.4979 0.502098C24.1674 1.17158 24.1674 2.257 23.4979 2.92648L14.4244 12L23.4979 21.0736C24.1674 21.743 24.1674 22.8285 23.4979 23.4979C22.8285 24.1674 21.743 24.1674 21.0736 23.4979L12 14.4244L2.92648 23.4979C2.257 24.1674 1.17158 24.1674 0.502098 23.4979C-0.167366 22.8285 -0.167366 21.743 0.502098 21.0736L9.57567 12L0.502098 2.92648C-0.167366 2.257 -0.167366 1.17158 0.502098 0.502098Z" fill="#101010"/>
          </svg>
        </button>

        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal;