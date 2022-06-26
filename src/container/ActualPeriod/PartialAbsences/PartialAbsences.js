import React, { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import './PartialAbsences.css'

export default function PartialAbsences() {
    const { courseUser } = useContext(UserContext);

    return (

        <div className="PartialAbsences__table_container">
            <h1>Extrato de Faltas Parciais</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sigla</th>
                        <th>Disciplina</th>
                        <th>Presenças</th>
                        <th>Ausências</th>
                    </tr>
                </thead>
                <tbody>
                    {courseUser.map((item, i) => (
                        <tr key={i}>
                            <td>{item.course_initials}</td>
                            <td>{item.course_name}</td>
                            <td>{item.presence}</td>
                            <td>{item.absence}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}