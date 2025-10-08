import { useState } from "react";
import { useMap } from "react-leaflet";
import domtoimage from "dom-to-image-more";
import jsPDF from "jspdf";

function CaptureMapButton({ filename }: { filename: string }) {
  const [isCapturing, setIsCapturing] = useState(false);
  const map = useMap();

  const handleCapture = async () => {
    if (isCapturing) return;
    setIsCapturing(true);

    try {
      const mapDiv = map.getContainer();

      const dataUrl = await domtoimage.toPng(mapDiv, {
        quality: 4,
        cacheBust: true,
        bgcolor: "#ffffff",
      });

      const img = new Image();
      img.src = dataUrl;

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = reject;
      });

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [img.width, img.height],
      });

      pdf.addImage(img, "PNG", 0, 0, img.width, img.height);
      pdf.save(filename.endsWith(".pdf") ? filename : `${filename}.pdf`);
    } catch (err) {
      console.error("Error al capturar el mapa:", err);
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <button onClick={handleCapture} disabled={isCapturing} id="capture-map-btn">
      {isCapturing ? "Capturando…" : "Capturar"}
    </button>
  );
}

export default CaptureMapButton;
