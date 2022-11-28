import React, {useEffect, useState} from 'react'

// CSS
import './index.css'


export const Map = ({...props}) => {
  const {kakao} = window;
  const [lat, setLat] = useState({
    x: 37.525872071029134,
    y: 126.92844612411159
  });

  useEffect(() => {
    if (kakao) {
      let mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(lat['x'], lat['y']), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };

      // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      let map = new kakao.maps.Map(mapContainer, mapOption);

      // 마커가 표시될 위치입니다
      let markerPosition  = new kakao.maps.LatLng(lat['x'], lat['y']);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        position: markerPosition
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 지도가 이동해도, 핀은 중앙에 고정
      kakao.maps.event.addListener(map, 'dragend', function() {
        // 지도 중심좌표를 얻어옵니다
        let position = map.getCenter();
        marker.setPosition(position);
        setLat({
          x: position?.La,
          y: position?.Ma,
        })
      });

      // 지도가 축소/확대해도, 핀은 중앙에 고정
      kakao.maps.event.addListener(map, 'zoom_changed', function() {
        // 지도 중심좌표를 얻어옵니다
        let position = map.getCenter();
        marker.setPosition(position);
        setLat({
          x: position?.La,
          y: position?.Ma,
        })
      });
    }
  }, [kakao]);

  const handleTree = () => {
    props.setPage('detail');

    // 위도, 경도 -> 주소로 변환
    let geocoder = new kakao.maps.services.Geocoder();
    let coord = new kakao.maps.LatLng(lat['y'], lat['x']);

    geocoder.coord2Address(coord.getLng(), coord.getLat(), function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let tempState = JSON.parse(JSON.stringify(result[0].road_address ? result[0].road_address : result[0].address));
        tempState['place_name'] = tempState['building_name']? tempState['building_name']: tempState['address_name'];
        tempState['road_address_name'] = tempState['address_name'];
        tempState['x'] = lat['y'];
        tempState['y'] = lat['x'];
        props.setSelectedLocation(tempState)
      }
    });
  }

  return (
    <div className={'registerContainer'}>
      <div className={'top'}>
        <img src={'/icon/ico-left-arrow.png'} alt={'left arrow icon'} onClick={() => props.setPage('main')}/>
        <div className={'title'}>트리 등록</div>
      </div>
      <div id={'map'}> <div className={'button'} onClick={() => handleTree()}>이 장소로 등록하기</div></div>
    </div>
  )
}
