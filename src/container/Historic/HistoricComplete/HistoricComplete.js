import React, { useContext } from 'react';
import './HistoricComplete.css';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { UserContext } from '../../../context/UserContext';
import { getPercent, isStudentNotStudiedCourseYet } from '../../../utils/utils';

export default function HistoricComplete() {
  const { courseUser } = useContext(UserContext);

  return (
    <div className="Historic__table_container">
      <h1>Extrato Histórico Completo</h1>
      <table>
        <thead>
          <tr>
            <th>Sigla</th>
            <th>Disciplina</th>
            <th>Período</th>
            <th>Aprovado</th>
            <th>Média Final</th>
            <th>Frequência(%)</th>
            <th>Qtd.Faltas</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          {courseUser.map((item, i) => {
            const percent = (item.presence + item.absence) === 0 ? 0 : getPercent(item.presence, (item.presence + item.absence));

            const statusIcon = Number(item.final_score_average) > 7 ?
              <AiOutlineCheck color="green" size={20} /> :
              <AiOutlineClose color="red" size={20} />

            return !isStudentNotStudiedCourseYet(item.status) && (
                <tr key={item.id}>
                  <td>{item.course_initials}</td>
                  <td>{item.course_name}</td>
                  <td>{item.period}</td>
                  <td>{statusIcon}</td>
                  <td>{item.final_score_average}</td>
                  <td>{percent}</td>
                  <td>{item.absence}</td>
                  <td>{item.note}</td>
                </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  )
}