import React from 'react'
import ScoresTableRow from './ScoresTableRow'

const ScoresTable = ( {subjects} ) => {
    return (
        // Table length is 16 total
        <table className="ui fixed celled structured table">
            <thead>
                <tr>
                    <th rowSpan="2" className="three wide">Subject</th>
                    <th colSpan="6" className="center aligned">Assignment</th>
                </tr>
                <tr>
                    {/* Ill figure this out later with counting the passed data first maybe */}
                    <th className="one wide">1</th>
                    <th className="one wide">2</th>
                    <th className="one wide">3</th>
                    <th className="one wide">4</th>
                    <th className="one wide">5</th>
                </tr>
            </thead>
            <tbody>
                {subjects.map((subject) => (
                    <ScoresTableRow key={subject.id} subject={subject}/>
                ))}
            </tbody>
        </table>
    )
}

export default ScoresTable
