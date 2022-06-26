import './ScheduleCard.css'
import {AiOutlineClockCircle,AiOutlineCalendar,AiOutlineRead,AiOutlineTeam} from 'react-icons/ai'
export default function SchedulesCard(){
    const daysweek =[
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sábado', 
    ]
    const schedules =[
        {
            schedules: '19:00-19:50',
            subjectinitial:'ILP125',
            schoolclasses:'A',
        },
        {
            schedules: '19:50-20:40',
            subjectinitial:'ISA002',
            schoolclasses:'A',
        },
        {
            schedules: '20:50-21:40',
            subjectinitial:'IES300',
            schoolclasses:'A',
        },
        {
            schedules: '21:40-22:30',
            subjectinitial:'TTG103',
            schoolclasses:'A',
        },

    ]
    return(
        <div className="ScheduleCard__container">
            {daysweek.map( (item,index) =>(
            <div key={index} className="ScheduleCard__card">
                <div className="ScheduleCard__card_title">
                    <AiOutlineCalendar  size={20}/>
                    <h3>{item}</h3>
                </div>
                <table className="ScheduleCard__table">
                    <thead>
                        <tr>
                            <th><b>Horário</b><AiOutlineClockCircle size={15}/></th>
                            <th><b>Disciplina</b><AiOutlineRead size={15}/></th>
                            <th><b>Turma</b><AiOutlineTeam size={15}/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map( (item,index2) =>(
                        <tr key={index2}>
                            <td>{item.schedules}</td>
                            <td>{item.subjectinitial}</td>
                            <td>{item.schoolclasses}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            ))}
        </div>
    )
}