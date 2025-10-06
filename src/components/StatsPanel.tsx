import { useState, useEffect } from "react";
import { useMapEvents } from "react-leaflet";
import L from "leaflet";
import SectorStats from "@/components/statistics/SectorStats";
import { mockData, type StatsData } from "@/services/statistics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function StatsControl() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeOverlay, setActiveOverlay] = useState<StatsData | null>(null);

  const map = useMapEvents({
    overlayadd: () => updateStats(),
    overlayremove: () => updateStats(),
  });

  const updateStats = () => {
    const layers: L.Layer[] = [];
    map.eachLayer((layer) => layers.push(layer));

    const hasStatLayer = layers.some(
      (layer) =>
        layer instanceof L.TileLayer.WMS &&
        ["cc_sectorrural", "av_zonahomogeneafisicarural"].some((name) =>
          layer.wmsParams?.layers?.includes(name)
        )
    );

    setActiveOverlay(hasStatLayer ? mockData : null);
  };

  useEffect(() => {
    updateStats();
  }, []);

  return (
    <>
      <div className={`stats-container ${isCollapsed ? "collapsed" : ""}`}>
        <h4>Estadísticas por Sector Rural</h4>

        <div id="stats-content">
          {!activeOverlay ? (
            <div className="no-data-message">
              Activa las capas de Sector Rural o Zona Homogénea para ver las
              estadísticas.
            </div>
          ) : (
            Object.entries(activeOverlay).map(([sector, data]) => (
              <SectorStats key={sector} sector={sector} data={data} />
            ))
          )}
        </div>
      </div>

      <button
        type="button"
        className="toggle-stats"
        title="Mostrar/Ocultar Estadísticas"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <FontAwesomeIcon
          icon={isCollapsed ? faChevronLeft : faChevronRight}
          size="lg"
        />
      </button>
    </>
  );
}

export default StatsControl;
