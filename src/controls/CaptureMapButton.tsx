import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface CaptureMapButtonProps {
  mapContainerRef: React.RefObject<HTMLElement | null>;
  filename: string;
}

const CaptureMapButton: React.FC<CaptureMapButtonProps> = ({
  mapContainerRef,
  filename,
}) => {
  const [isCapturing, setIsCapturing] = useState(false);

  const handleCapture = async () => {
    // In case does not find the container
    if (isCapturing || !mapContainerRef.current) return;
    setIsCapturing(true);

    try {
      const mapDiv = mapContainerRef.current;
      const canvas = await html2canvas(mapDiv, { useCORS: true });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(filename);
    } catch (err) {
      console.error("Error al capturar el mapa", err);
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <button onClick={handleCapture} disabled={isCapturing} id="capture-map-btn">
      {isCapturing ? "Capturando…" : "Capturar"}
    </button>
  );
};

export default CaptureMapButton;
