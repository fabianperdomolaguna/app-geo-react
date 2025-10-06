import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MapControl from '@/MapControl'
import '@/assets/global.css'
import '@/map.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapControl />
  </StrictMode>
)
