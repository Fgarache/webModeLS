import { useState } from 'react';
import { FaQuestionCircle, FaTimes } from 'react-icons/fa';
import './textInfoModal.css';

function TextInfoModal({
  title,
  paragraphs = [],
  buttonLabel = 'Mas informacion',
  triggerClassName = '',
}) {
  const [open, setOpen] = useState(false);
  const content = Array.isArray(paragraphs) ? paragraphs : [paragraphs];

  return (
    <>
      <button
        type="button"
        className={`help-icon-button ${triggerClassName}`.trim()}
        aria-label={buttonLabel}
        title={buttonLabel}
        onClick={() => setOpen(true)}
      >
        <FaQuestionCircle />
      </button>

      {open && (
        <div className="text-info-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="text_info_modal_title">
          <div className="text-info-modal-card">
            <button
              type="button"
              className="text-info-modal-close"
              aria-label="Cerrar informacion"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>

            <h3 id="text_info_modal_title">{title}</h3>

            <div className="text-info-modal-copy">
              {content.filter(Boolean).map((paragraph, index) => (
                <p key={`${title}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TextInfoModal;