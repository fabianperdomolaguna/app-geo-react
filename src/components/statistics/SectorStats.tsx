import { type StatsData } from "@/services/statistics";

function SectorStats({
  sector,
  data,
}: {
  sector: string;
  data: StatsData[keyof StatsData];
}) {
  return (
    <div className="sector-stats">
      <div>
        <b>{sector}</b>
      </div>

      <div className="stat-item">
        <span className="stat-label">Área Total:</span>
        <span className="stat-value">{data["Área Total"]}</span>
      </div>

      <div className="stat-item">
        <span className="stat-label">Uso Principal:</span>
        <span className="stat-value">{data["Uso Principal"]}</span>
      </div>

      <div className="stat-distribution">
        <div className="distribution-title">Distribución de Uso:</div>
        {Object.entries(data.Distribucion as Record<string, number>).map(
          ([uso, porcentaje]) => (
            <div className="stat-item" key={uso}>
              <span className="stat-label">{uso}:</span>
              <span className="stat-value">{porcentaje}%</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${porcentaje}%` }}
                ></div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SectorStats;
