import React from 'react';
import SchedulesCard from './ScheduleCard/ScheduleCard';
import './Schedules.css'
import SchedulesTable from './ScheduleTable/ScheduleTable';
export default function Schedules() {
    //TODO: Realizar a tela de ActualPeriod, seguindo o layout

    return (
        <div className="Schedules__container">
            <h1>Horário das Aulas</h1>
            <div className="Schedules__content">
                <SchedulesTable/>
                <SchedulesCard/>            
            </div>
        </div>

    )
}