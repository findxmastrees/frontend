import React, {useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DatePickerComponent = ({...props}) => {
  const [date, setDate] = useState('');

  const handleDate = (d) => {
    let tempState = JSON.parse(JSON.stringify(props.detail));
    tempState[props.state] = getFormatDate(d);
    props.setDetail(tempState);
    setDate(d);
  }

  const getFormatDate = (date) => {
    let year = date.getFullYear();              //yyyy
    let month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    let day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '' + month + '' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }

  return (
    <DatePicker
      selected={date}
      onChange={d => handleDate(d)}
      dateFormat={'yyyy-MM-dd'}
      placeholderText={'선택안함'}
    />
  );
};
