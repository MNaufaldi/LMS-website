import Schedule from './Schedule'

const ScheduleList = ({ schedules }) => {
    return (
        <div className="ui relaxed divided list">
            {schedules.map((schedule) => (
                <Schedule key={schedule.id} schedule={schedule}/>
            ))}
        </div>
    )
}

export default ScheduleList
