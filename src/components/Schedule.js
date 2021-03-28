
const Schedule = ({ schedule }) => {
    return (
        <div className="item">
            <div className="content">
                <div className="header">
                    {schedule.subject}
                </div>
                <div className="description">
                    {schedule.time}
                </div>
            </div>
        </div>
    )
}

export default Schedule
