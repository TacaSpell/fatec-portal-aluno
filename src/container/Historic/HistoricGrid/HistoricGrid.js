import React, { useContext } from 'react';
import './HistoricGrid.css';
// import { AiOutlineBarChart, AiOutlineCarryOut, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import MessageAlert from '../../../component/MessageAlert/MessageAlert';
import HistoricGridCard from './HistoricGridCard/HistoricGridCard';
import { UserContext } from '../../../context/UserContext';
import { getPercent } from '../../../utils/utils';

export default function HistoricGrid() {
  const { courseUser } = useContext(UserContext);

  const getStatus = (statusType) => {
    switch (statusType) {
      case 'aprovado':
        return '--approved';
      case 'reprovado':
        return '--disapproved';
      case 'dispensado':
        return '--exempted';
      case 'cursando':
        return '--progress';
      default: return '--default';
    }
  }

  const renderHistoricGridCard = (semester) => {
    return courseUser.map((item, i) => {
      const percent = item.presence + item.absence > 0 ? getPercent(item.presence, (item.presence + item.absence)) : 0;

      return semester === Number(item.period_semester) && (
        <HistoricGridCard
          key={i}
          status={getStatus(item.status)}
          courseInitials={item.course_initials}
          courseName={item.course_name}
          courseStatus={item.status}
          finalScoreAverage={item.final_score_average}
          frequency={percent}
          period={item.period}
          utilizationOfStudy={item.utilization_of_study}
        />
      )
    })
  }

  return (
    <div className="HistoricGrid__container">
      <h1>Histórico em Grade</h1>
      <MessageAlert>
        <b>NF:</b> Nota Final | <b>FR:</b> Frequência(%) | <b>PE:</b> Período(Ano/Semestre) | <b>AE:</b> Aproveitamento de Estudo
        {/* Dispensado AE	Aprovado	Não Cursada	Em Curso */}
      </MessageAlert>
      <div className="HistoricGrid__content">

        <hr />
        <div className="HistoricGrid__title">1º Semestre</div>
        <div className="HistoricGrid__card_group">
          {renderHistoricGridCard(1)}
        </div>
        <hr />

        <div className="HistoricGrid__title">2º Semestre</div>
        <div className="HistoricGrid__card_group">
          {renderHistoricGridCard(2)}
        </div>
        <hr />

        <div className="HistoricGrid__title">3º Semestre</div>
        <div className="HistoricGrid__card_group">
          {renderHistoricGridCard(3)}
        </div>
        <hr />

        <div className="HistoricGrid__title">4º Semestre</div>
        <div className="HistoricGrid__card_group">
          {renderHistoricGridCard(4)}
        </div>
        <hr />

        <div className="HistoricGrid__title">5º Semestre</div>
        <div className="HistoricGrid__card_group">
          {renderHistoricGridCard(5)}
        </div>
        <hr />

        <div className="HistoricGrid__title">6º Semestre</div>
        <div className="HistoricGrid__card_group">
          {renderHistoricGridCard(6)}
        </div>

      </div>
    </div>
  )
}