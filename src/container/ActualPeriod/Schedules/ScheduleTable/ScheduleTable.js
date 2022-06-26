import React from "react";
import './ScheduleTable.css'

export default function ScheduleTable() {
    const selectSubjects = [
        {
            initials: 'IES300',
            subject: "Engenharia de Software III - 4hs/aula",
            schoolclasses: 'A',
            teacher: 'SIMONE MENDES DA SILVA'
        },
        {
            initials: 'ILP125',
            subject: 'Programação WEB - 4hs/aula',
            schoolclasses: 'A',
            teacher: 'SIMONE MENDES DA SILVA',
        },
        {
            initials: 'ISA002',
            subject: "Auditoria de Sistemas (Escolha 3) - 4hs/aula",
            schoolclasses: 'A',
            teacher: 'LINCON MOREIRA PERETTO',
        },
        {
            initials: 'TTG103',
            subject: 'Trabalho de Graduação II - 4hs/aula',
            schoolclasses: 'A',
            teacher: 'MICHEL MORON MUNHOZ',
        },
    ]
    return (
        <div className="ScheduleTable__Container">
            <table>
                <thead>
                    <tr>
                        <th>Sigla</th>
                        <th>Disciplina</th>
                        <th>Turma</th>
                        <th>Professor</th>
                    </tr>
                </thead>
                <tbody>
                    {selectSubjects.map((item, i) => (
                        <tr key={i}>
                            <td>{item.initials}</td>
                            <td>{item.subject}</td>
                            <td>{item.schoolclasses}</td>
                            <td>{item.teacher}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}