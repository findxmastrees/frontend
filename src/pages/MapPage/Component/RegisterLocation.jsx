import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { addTree } from '../../../store/slices/treeSlice'

// CSS
import './index.css'
import axios from "axios";

export const RegisterLocation = ({ ...props }) => {
  const location = props['location'];
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [detail, setDetail] = useState({
    name: '',
    detailAddress: '',
  });
  console.log(props);

  const handleClick = async () => {
    const url =
      'https://whatevertree.herokuapp.com/trees'
    axios
      .post(url, {
        "tree_name" : detail['name'],
        "tree_addr" : location['address_name'],
        "tree_detail_addr" : detail['detailAddress'],
        "tree_x" : location['y'], //위도
        "tree_y" : location['x'], //경도
        "outdoor_yn" : "Y",
        "pet_yn" : "N",
        "able_days" : "월,화,수",
        "start_date" : "2022.12.01",
        "end_date" : "2022-12-25",
        "etc" : "추가정보를 적습니다.",
        "user_id" : "admin"
      })
      .then(function (response) {
        // setKeywordList(response.data?.documents)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handleState = (state, value) => {
    let tempState = JSON.parse(JSON.stringify(detail));
    tempState[state] = value;
    setDetail(tempState);
  }

  return (
    <div className={'registerContainer'}>
      <div className={'top'}>
        <img
          src={'/icon/ico-left-arrow.png'}
          alt={'left arrow icon'}
          onClick={() => props.setPage('main')}
        />
        <div className={'title'}>트리 위치</div>
      </div>
      {/*<div className={'divide'}></div>*/}
      <div className={'bottom'}>
        <div className={'keywordItem'}>
          <div className={'placeName'}>{location['place_name']}</div>
          <div className={'addressName'} style={{'color': '#8778787'}}>
            <div className={'tagName'}>도로명</div>
            <div className={'detailAddress'}>{location['address_name']}</div>
          </div>
        </div>
        <input className={'detailInput'} placeholder={'상세 주소 입력(선택)'} value={detail['detailAddress'] || ''} onChange={(e) => handleState('detailAddress', e.target.value)} />
      </div>
      <div className={'top'}>
        <div className={'title'}>트리 정보 <span style={{'color':'red'}}>*</span></div>
      </div>
      <div className={'bottom detail'}>
        <span>트리 이름</span>
        <input
          className={'detailInput'}
          placeholder={'장소나 건물명 등 특징적인 이름을 지어주세요. ex) 더현대 서울 트리'}
          value={detail['name'] || ''}
          onChange={(e) => handleState('name', e.target.value)}
        />
        <span>전시 기간 <span style={{'color':'#878787'}}>(선택)</span></span>
        <input
          className={'detailInput'}
          placeholder={'장소나 건물명 등 특징적인 이름을 지어주세요. ex) 더현대 서울 트리'}
          value={detail['name'] || ''}
          onChange={(e) => handleState('name', e.target.value)}
        />
        <span>트리 공간 <span style={{'color':'#878787'}}>(선택)</span></span>
        <input
          className={'detailInput'}
          placeholder={'장소나 건물명 등 특징적인 이름을 지어주세요. ex) 더현대 서울 트리'}
          value={detail['name'] || ''}
          onChange={(e) => handleState('name', e.target.value)}
        />
        <span>영업일 <span style={{'color':'#878787'}}>(선택)</span></span>
        <input
          className={'detailInput'}
          placeholder={'장소나 건물명 등 특징적인 이름을 지어주세요. ex) 더현대 서울 트리'}
          value={detail['name'] || ''}
          onChange={(e) => handleState('name', e.target.value)}
        />
        <span>반려동물 동반 <span style={{'color':'#878787'}}>(선택)</span></span>
        <input
          className={'detailInput'}
          placeholder={'장소나 건물명 등 특징적인 이름을 지어주세요. ex) 더현대 서울 트리'}
          value={detail['name'] || ''}
          onChange={(e) => handleState('name', e.target.value)}
        />
        <span>추가 정보 <span style={{'color':'#878787'}}>(선택)</span></span>
        <input
          className={'detailInput'}
          placeholder={'ex. 찾아 가는 길, 매장 전화번호, 주변 볼거리 등'}
          value={detail['name'] || ''}
          onChange={(e) => handleState('name', e.target.value)}
        />
      </div>

      {/*<div className={'locate'}>*/}
      {/*  <div className={'input gps'} onClick={() => props.setPage('map')}>*/}
      {/*    <img src={'/icon/ico-pin.png'} alt={'pin icon'} />*/}
      {/*    <span>현재 위치로 설정</span>*/}
      {/*    <img src={'/icon/ico-right-arrow.png'} alt={'right-arrow icon'} />*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className={'btnContainer'}>*/}
      <div className={'button'} onClick={() => handleClick()}>
        트리 등록하기
      </div>
      {/*</div>*/}
    </div>
  )
}
