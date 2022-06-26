import React from 'react';
import { isStudentNotStudiedCourseYet } from '../../../../utils/utils';

import './HistoricGridCard.css';

export default function HistoricGridCard(props) {


  return (
    <div className={`HistoricGrid__card_container`}>
      <div className="HistoricGrid__card_title">
        <h2>{props.courseInitials}</h2>
        <span>AS: {props.utilizationOfStudy}</span>
      </div>

      <div className="HistoricGrid__card_coursename">
        <span>{props.courseName?.length > 33 ? props.courseName?.substring(0, 30) + '...' : props.courseName}</span>
      </div>

      <div className="HistoricGrid__card_status">
        <span className={`HistoricGrid__card_status${props.status}`}>{!isStudentNotStudiedCourseYet(props.courseStatus) ? props.courseStatus : 'Não cursado'}</span>
      </div>

      {!isStudentNotStudiedCourseYet(props.courseStatus) && <div className="HistoricGrid__card_infos">
        <span><b>NF:</b> {props.finalScoreAverage}</span>
        <span><b>FR:</b> {props.frequency}% </span>
        <span><b>PE:</b> {props.period}</span>
      </div>
      }
    </div>
  )
}