import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTree } from '../../../store/slices/treeSlice'

// CSS
import './index.css'

export const RegisterLocation = ({ ...props }) => {
  const location = props['location']
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const handleClick = () => {
    dispatch(
      addTree({
        name,
        address: location.address_name,
        roadAddress: location.road_address_name,
        lat: Number(location.y),
        lng: Number(location.x),
      }),
    )
    navigate('/')
  }

  return (
    <div className={'registerContainer'}>
      <div className={'top'}>
        <img
          src={'/icon/ico-left-arrow.png'}
          alt={'left arrow icon'}
          onClick={() => props.setPage('main')}
        />
        <div className={'title'}>트리 등록</div>
      </div>
      <div className={'divide'}></div>
      <div className={'bottom'}>
        <div className={'keywordItem'}>
          <div className={'placeName'}>{location['place_name']}</div>
          <div className={'addressName'}>
            <div className={'tagName'}>도로명</div>
            <div className={'detailAddress'}>{location['address_name']}</div>
          </div>
        </div>
        <input className={'detailInput'} placeholder={'상세 주소 입력'} />
      </div>
      <div className={'bottom'}>
        <span>트리 이름</span>
        <input
          className={'detailInput'}
          placeholder={'ex. 더현대 서울 트리'}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={'locate'}>
        <div className={'input gps'} onClick={() => props.setPage('map')}>
          <img src={'/icon/ico-pin.png'} alt={'pin icon'} />
          <span>현재 위치로 설정</span>
          <img src={'/icon/ico-right-arrow.png'} alt={'right-arrow icon'} />
        </div>
      </div>
      <div>aknd</div>
      {/*<div className={'btnContainer'}>*/}
      <div className={'button'} onClick={handleClick}>
        트리 등록하기
      </div>
      {/*</div>*/}
    </div>
  )
}
