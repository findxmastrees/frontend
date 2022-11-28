import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ZoomButton } from '../../components/MainZoom/index'
import TreeInfos from '../../components/treeInfos'

const options = {
  center: new window.kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
}

export const MainPage = () => {
  const [_map, setMap] = useState()
  const container = useRef(null)

  useEffect(() => {
    const map = new window.kakao.maps.Map(container.current, options)
    setMap(map)
    return () => {}
  }, [])

  return (
    <Container ref={container}>
      <ZoomButton map={_map} />
      <TreeInfos />
    </Container>
  )
}

const Container = styled.main`
  width: 421px;
  height: 852px;
  padding: 24px 14px 14px 0;
  border: 1px solid black;
  position: relative;
`
