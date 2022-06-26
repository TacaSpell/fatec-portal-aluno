import React from 'react';
import './PartialNotes.css'
import PartialCardNotes from './PartialCardNotes/PartialCardNotes';
import MessageAlert from '../../../component/MessageAlert/MessageAlert';


export default function PartialNotes() {
    //TODO: Realizar a tela de ActualPeriod, seguindo o layout

    return (
        <div className="PartialNotes__container">
            <h2 className="PartialNotes__h2_container">
                Extrato de Notas Parciais
            </h2>
            <MessageAlert>
                <b>Fórmula</b> (P1 * 0.35) + (AT * 0.10) + (PR * 0.20) + (P2 * 0.35)
            </MessageAlert>
            <MessageAlert>
                <b>Observações</b> P1 - Avaliação 1 AT - Atividades PI - Projeto Integrado P2 - Avaliação 2
            </MessageAlert>

            <div className="PartialNotes__content">
                <PartialCardNotes />
            </div>
        </div>
    )
}