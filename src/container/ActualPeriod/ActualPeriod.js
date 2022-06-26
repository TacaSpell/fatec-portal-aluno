import React from 'react';
import './ActualPeriod.css';
import PartialNotes from './PartialNotes/PartialNotes';
import PartialAbsences from './PartialAbsences/PartialAbsences';
import Schedules from './Schedules/Schedules';
import { useState } from 'react';
import '../../style/global.css';

export default function ActualPeriod() {
    //TODO: Realizar a tela de ActualPeriod, seguindo o layout
    const [viewModeType, setViewModeType] = useState('partialnotes');

    return (
        <div >
            <div className="ActualPeriod__buttons">
                <button
                    className={`${viewModeType === 'partialnotes' ? 'ActualPeriod__partialnotes_button--active' : ''}`}
                    onClick={() => { setViewModeType('partialnotes') }}
                >
                    Notas Parciais
                </button>

                <button
                    className={` ${viewModeType === 'partialabsences' ? 'ActualPeriod__partialabsences_button--active' : ''}`}
                    onClick={() => { setViewModeType('partialabsences') }}
                >
                    Faltas Parciais
                </button>
                <button
                    className={` ${viewModeType === 'schedules' ? 'ActualPeriod__schedules_button--active' : ''}`}
                    onClick={() => { setViewModeType('schedules') }}
                >
                    Horários
                </button>
            </div>
            <div>
                {viewModeType === 'partialnotes' ?
                    <PartialNotes />
                    : viewModeType === 'partialabsences' ?
                        <PartialAbsences />
                        : <Schedules />
                }
            </div>
        </div>
    )
}