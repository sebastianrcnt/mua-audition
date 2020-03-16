import React from 'react';

function Field(props) {
    var fieldBank = {
      'vocal': '보컬',
      'guitar': '기타',
      'keyboard': '키보드',
      'percussion': '퍼커션',
      'videoteam': '영상',
    }
    return (
      <div className='field-item'>
        {fieldBank[props.text]}
      </div>
    );
  }
  

export default Field