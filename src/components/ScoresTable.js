import React from 'react'

const ScoresTable = () => {
    return (
        // Table length is 16 total
        <table className="ui celled structured table">
            <thead>
                <tr>
                    <th rowSpan="2" className="one wide">Name</th>
                    <th colSpan="6" className="center aligned">Assignment</th>
                </tr>
          {/* Turn into list of assignment fetched from API */}
                <tr>
                    <th className="one wide">1</th>
                    <th className="one wide">2</th>
                    <th className="one wide">3</th>
                    <th className="one wide">4</th>
                    <th className="one wide">5</th>
                </tr>
            </thead>
            <tbody>
                {/* Turn into Student row component */}
                <tr>
                    {/* Turn into Student name in the table component */}
                    <td>
                        <h4 className="ui image header">
                        <img src="/images/avatar2/small/lena.png" class="ui mini rounded image"></img> 
                        <div className="content">
                            Name
                            <div className="sub header">
                                ID
                            </div>
                        </div>
                        </h4>
                    </td>
                    {/* Turn into scores component */}
                    <td>
                        Score
                    </td>
                    <td>
                        Score
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ScoresTable
