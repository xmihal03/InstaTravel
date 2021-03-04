import React, { useRef, useEffect } from 'react'

import { StyledMap } from './styles'

const Map = ({ center, zoom }) => {
  const mapRef = useRef()
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    })

    new window.google.maps.Marker({ position: center, map })
  }, [center, zoom])

  return <StyledMap ref={mapRef}></StyledMap>
}
export default Map
