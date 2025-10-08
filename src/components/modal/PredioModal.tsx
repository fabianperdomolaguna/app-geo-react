import { useEffect } from "react";
import { createPortal } from "react-dom";

interface PredioProps {
  visible: boolean;
  onClose: () => void;
  info?: {
    etiqueta?: string;
    area_terreno?: number | string;
  };
}

function PredioModal({ visible, onClose, info }: PredioProps) {
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  if (!visible) return null;

  return createPortal(
    <div
      className="predio-modal"
      style={{ display: visible ? "block" : "none" }}
    >
      <div className="modal-content">
        <button id="close-modal" onClick={onClose}>
          &times;
        </button>
        <div id="modal-body">
          <b>Información del Predio:</b>
          <p>
            <b>Etiqueta:</b> {info?.etiqueta ?? "-"}
          </p>
          <p>
            <b>Área Terreno:</b> {info?.area_terreno ?? "-"} m²
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("map")!
  );
}

export default PredioModal