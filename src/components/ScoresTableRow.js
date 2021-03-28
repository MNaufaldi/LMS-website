
const ScoresTableRow = ({ subject }) => {
    return (
        <tr>
            <td>
                <div className="content">
                    {subject.name}
                </div>
            </td>
            {subject.scores.map((score) => (
                    <td>{score}</td>
                ))}
        </tr>
    )
}

export default ScoresTableRow
