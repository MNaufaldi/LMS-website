import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Posts from "./components/Posts"
import ScoresTable from "./components/ScoresTable"
import ScheduleList from "./components/ScheduleList"
import LoginForm from "./components/LoginForm"
import { useState } from 'react'

function App() {
    // List of dummy data that will be removed later
    // posts
    const [posts, setPosts] = useState([
        // Will be using API later but for now this will do
        {
            id: 1,
            teacherName: "Teacher",
            subject: "Math",
            title: "Chapter 3 Assignment",
            content: "Do q1-q10",
            due: "3/27/2021"
        },
        {
            id: 2,
            teacherName: "Teacher2",
            subject: "English",
            title: "Chapter 1 Assignment",
            content: "Do q1-q10",
            due: "3/27/2021"
        }
    ])
    // schedules
    const [schedules, setSchedules] = useState([
        {
            id: 1,
            subject: "Math",
            time: "08:00 - 10:30"
        },
        {
            id: 2,
            subject: "English",
            time: "10:30 - 11:45"
        }
    ])
    // scores from student page
    const [subjects, setSubjects] = useState([
        {
            id: 1,
            name: "Math",
            scores: [100, 98, 80, 90]
        },
        {
            id: 2,
            name: "English",
            scores: [90, 88, 80, 70]
        }
    ])

    return (
        <div className="ui grid">
          <div className="row">
                <div className="left floated three wide stretched column side">
                    <Navbar />
                </div>

                <div className="thirteen wide column head">
                    <Header />
                  <div className="ui grid content-grid">
                      <div className="twelve wide column ">
                            <div className="ui segment">
                                <Posts posts={posts} />
                            </div>
                            <div className="ui segment">
                                <ScoresTable subjects={subjects} />
                            </div>
                      </div>
                      <div className="four wide column">
                            <div className="ui segment">
                                <ScheduleList schedules={schedules} />
                            </div>
                            
                      </div>
                  </div>
                </div>
          </div>            

        </div>
    )
}

export default App;
