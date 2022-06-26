import React from 'react';
import './PartialCardNotes.css'

export default function PartialCardNotes() {
    //TODO: Realizar a tela de ActualPeriod, seguindo o layout
    const PartialNoteArray = [{
        title: 'AAG001',
        course: 'Administração Geral',
        finalscore: '7.90',
        absences: 16,
        percent: '80%',
        evaluation: [
            {
                evaluationName: 'PR',
                releaseDate: '21/06/22',
                note: '0,0',
            },
            {
                evaluationName: 'AT',
                releaseDate: '21/06/22',
                note: '0,0',
            },
            {
                evaluationName: 'P1',
                releaseDate: '21/06/22',
                note: '0,0',
            },
            {
                evaluationName: 'P2',
                releaseDate: '21/06/22',
                note: '0,0',
            }
        ]
    },
    {
        title: 'GTS032',
        course: 'Gestão do Tempo',
        finalscore: '8.30',
        absences: 11,
        percent: '95%',
        evaluation: [
            {
                evaluationName: 'PR',
                releaseDate: '11/03/22',
                note: '8,25',
            },
            {
                evaluationName: 'AT',
                releaseDate: '03/04/22',
                note: '6,5',
            },
            {
                evaluationName: 'P1',
                releaseDate: '07/05/22',
                note: '8,4',
            },
            {
                evaluationName: 'P2',
                releaseDate: '21/06/22',
                note: '7,2',
            },
        ]
    },
    {
        title: 'ILP516',
        course: 'Programação dispositivos móveis',
        finalscore: '9.25',
        absences: 5,
        percent: '93%',
        evaluation: [
            {
                evaluationName: 'PR',
                releaseDate: '12/06/22',
                note: '10',
            },
            {
                evaluationName: 'AT',
                releaseDate: '16/06/22',
                note: '8,95',
            },
            {
                evaluationName: 'P1',
                releaseDate: '18/06/22',
                note: '9,5',
            },
            {
                evaluationName: 'P2',
                releaseDate: '21/06/22',
                note: '10',
            },
        ]
    },
    {
        title: 'TII543',
        course: 'Tecnologia da Informação',
        finalscore: '9.80',
        absences: 1,
        percent: '100%',
        evaluation: [
            {
                evaluationName: 'PR',
                releaseDate: '01/06/22',
                note: '10',
            },
            {
                evaluationName: 'AT',
                releaseDate: '04/06/22',
                note: '9',
            },
            {
                evaluationName: 'P1',
                releaseDate: '07/06/22',
                note: '9',
            },
            {
                evaluationName: 'P2',
                releaseDate: '21/06/22',
                note: '10',
            },
        ]
    }, {
        title: 'POO300',
        course: 'Programação Orientada a Objetos',
        finalscore: '7.90',
        absences: 16,
        percent: '75%',
        evaluation: [
            {
                evaluationName: 'PR',
                releaseDate: '20/04/22',
                note: '7,3',
            },
            {
                evaluationName: 'AT',
                releaseDate: '13/05/22',
                note: '8,5',
            },
            {
                evaluationName: 'P1',
                releaseDate: '24/05/22',
                note: '7,45',
            },
            {
                evaluationName: 'P2',
                releaseDate: '11/06/22',
                note: '7',
            },
        ]
    }];

    return (
        <div className="PartialCardNotes__container">
            {PartialNoteArray.map((item, index) => (
                <div key={index} className="PartialCardNotes__content">
                    <div className="PartialCardNotes__card_title">
                        <h2>{item.course}</h2>
                        <h2>{item.title}</h2>
                    </div>
                    <div className="PartialCardNotes__card_notesinfo">
                        <table className="PartialCardNotes__card_table">
                            <thead>
                                <tr className="PartialCardNotes__card_table_th_title_avaluation">
                                    <th>Avaliação</th>
                                    <th>Data de lançamento</th>
                                    <th>Nota</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item.evaluation.map((item, i) => (
                                    <tr key={i} className="PartialCardNotes__card_table_tr_avaluation">
                                        <td>{item.evaluationName}</td>
                                        <td>{item.releaseDate}</td>
                                        <td>{item.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="PartialCardNotes__card_additionalinfos">
                            <div className="PartialCardNotes__card_finalscore">
                                <h3><b>Média Final:</b></h3>
                                <span>{item.finalscore}</span>
                            </div>
                            <div className="PartialCardNotes__card_absences">
                                <h3><b>Quantidade de Faltas:</b></h3>
                                <span>{item.absences}</span>
                            </div>
                            <div className="PartialCardNotes__card_media_percent">
                                <h3><b>Frequência:</b></h3>
                                <span>{item.percent}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}