import { useState } from "react";
import { useMap } from "react-leaflet"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function CaptureMapButton ({ filename }: { filename: string }) {
  const [isCapturing, setIsCapturing] = useState(false);
  const map = useMap();

  const handleCapture = async () => {
    // In case does not find the container
    if (isCapturing) return;
    setIsCapturing(true);

    try {
      const mapDiv = map.getContainer();
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
