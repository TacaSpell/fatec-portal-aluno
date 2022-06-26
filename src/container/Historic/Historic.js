import React, { useState } from 'react';
import './Historic.css';
import '../../style/global.css';
import HistoricComplete from './HistoricComplete/HistoricComplete';
import HistoricGrid from './HistoricGrid/HistoricGrid';


export default function Historic() {
    //TODO: Realizar a tela de Historic, seguindo o layout
    const [viewModeType, setViewModeType] = useState('complete');

    return (
        <div className="Historic__container">
            <div className="Historic__buttons">
                <button
                    className={` ${viewModeType === 'complete' ? 'Historic__complete_button--active' : ''}`}
                    onClick={() => { setViewModeType('complete') }}
                >
                    Histórico Completo
                </button>

                <button
                    className={` ${viewModeType === 'grid' ? 'Historic__grid_button--active' : ''}`}
                    onClick={() => { setViewModeType('grid') }}
                >
                    Histórico em Grade
                </button>
            </div>
            <div>
                {viewModeType === 'complete' ?
                    (
                        <HistoricComplete />
                    ) : (
                        <HistoricGrid />
                    )}
            </div>
        </div>
    )
}