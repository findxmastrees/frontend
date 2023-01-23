import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { addTree } from '../../../store/slices/treeSlice'

import {DatePickerComponent} from './DatePicker/DatePicker';

// CSS
import './index.css'
import axios from "axios";

export const RegisterLocation = ({...props}) => {
  const location = props['location'];
  const navigate = useNavigate();
  const [day, setDay] = useState([]);
  const [detail, setDetail] = useState({
    name: '',
    detailAddress: '',
    startDate: '',
    endDate: '',
    outdoor_yn: 'Y',
    pet_yn: 'Y'
  });

  const handleClick = async () => {
    const url =
      'https://whatevertree.herokuapp.com/trees'
    axios
      .post(url, {
        "tree_name": detail['name'],
        "tree_addr": location['address_name'],
        "tree_detail_addr": detail['detailAddress'],
        "tree_x": location['y'], //위도
        "tree_y": location['x'], //경도
        "outdoor_yn": detail['outdoor_yn'],
        "pet_yn": detail['pet_yn'],
        "able_days": day.toString(),
        "start_date": detail['startDate'] || null,
        "end_date": detail['endDate'] || null,
        "etc": detail['etc'],
        "user_id": "admin"
      })
      .then(function (response) {
        alert('저장되었습니다.');
        navigate('/home');
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

  const handleDay = (value) => {
    let tempState = JSON.parse(JSON.stringify(day));
    if(day.includes(value)) tempState = tempState.filter(d => d !== value);
    else tempState.push(value);
    setDay(tempState);
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

      <div className={'bottom'}>
        <div className={'keywordItem'}>
          <div className={'placeName'}>{location['place_name']}</div>
          <div className={'addressName'} style={{'color': '#8778787'}}>
            <div className={'tagName'}>도로명</div>
            <div className={'detailAddress'}>{location['address_name']}</div>
          </div>
        </div>
        <input className={'detailInput'} placeholder={'상세 주소 입력(선택)'} value={detail['detailAddress'] || ''}
               onChange={(e) => handleState('detailAddress', e.target.value)}/>
      </div>
      <div className={'top'}>
        <div className={'title'}>트리 정보 <span style={{'color': 'red'}}>*</span></div>
      </div>
      <div className={'bottom detail'}>
        <span>트리 이름</span>
        <input
          className={'detailInput'}
          placeholder={'장소나 건물명 등 특징적인 이름을 지어주세요. ex) 더현대 서울 트리'}
          value={detail['name'] || ''}
          onChange={(e) => handleState('name', e.target.value)}
        />
        <span>전시 기간 <span style={{'color': '#878787'}}>(선택)</span></span>
        <div style={{'display': 'flex'}}>
          <DatePickerComponent detail={detail} setDetail={setDetail} state={'startDate'}/>
          <div>-</div>
          <DatePickerComponent detail={detail} setDetail={setDetail} state={'endDate'}/>
        </div>
        <span>트리 공간 <span style={{'color': '#878787'}}>(선택)</span></span>
        <div className={'outContainer'}>
          <div className={detail['outdoor_yn'] === 'Y' ? 'outBtn on' : 'outBtn'} onClick={() => handleState('outdoor_yn', 'Y')}>야외</div>
          <div className={detail['outdoor_yn'] === 'N' ? 'outBtn on' : 'outBtn'} onClick={() => handleState('outdoor_yn', 'N')}>실내</div>
        </div>
        <span>영업일 <span style={{'color': '#878787'}}>(선택)</span></span>
        <div className={'dayContainer'}>
          <div className={day.includes('월') ? 'day on' : 'day'} onClick={() => handleDay('월')}>월</div>
          <div className={day.includes('화') ? 'day on' : 'day'} onClick={() => handleDay('화')}>화</div>
          <div className={day.includes('수') ? 'day on' : 'day'} onClick={() => handleDay('수')}>수</div>
          <div className={day.includes('목') ? 'day on' : 'day'} onClick={() => handleDay('목')}>목</div>
          <div className={day.includes('금') ? 'day on' : 'day'} onClick={() => handleDay('금')}>금</div>
          <div className={day.includes('토') ? 'day on' : 'day'} onClick={() => handleDay('토')}>토</div>
          <div className={day.includes('일') ? 'day on' : 'day'} onClick={() => handleDay('일')}>일</div>
        </div>
        <span>반려동물 동반 <span style={{'color': '#878787'}}>(선택)</span></span>
        <div className={'petContainer'}>
          <div className={detail['pet_yn'] === 'Y' ? 'petBtn on' : 'petBtn'} onClick={() => handleState('pet_yn', 'Y')}>동반 가능</div>
          <div className={detail['pet_yn'] === 'N' ? 'petBtn on' : 'petBtn'} onClick={() => handleState('pet_yn', 'N')}>동반 불가능</div>
        </div>
        <span>추가 정보 <span style={{'color': '#878787'}}>(선택)</span></span>
        <input
          className={'detailInput'}
          placeholder={'ex. 찾아 가는 길, 매장 전화번호, 주변 볼거리 등'}
          value={detail['etc'] || ''}
          onChange={(e) => handleState('etc', e.target.value)}
        />
      </div>

      <div className={'button'} onClick={() => handleClick()}>
        트리 등록하기
      </div>
    </div>
  )
}
