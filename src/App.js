import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Post from "./components/Post"
import ScoresTable from "./components/ScoresTable"
import ScheduleList from "./components/ScheduleList"

function App() {
    return (
        <div className="ui grid">
          {/* Parts seperated with Segment later */}
          {/* Grid will be changed later for now im just making components */}
            <div className="three wide column">
                <div className="column">
                    <Navbar/>
                </div>
            </div>
            <div
                className="nine wide column top"
                style={{
                marginTop: '5%'
            }}>
                Header (WIP) Might be changed to Rails, I might do it like nightbot site
                <Header />
                Posts
                <Post />
                Scores table (Teachers Page)
                (Might be modified for student page)
                <ScoresTable />
            </div>
            <div
                className="four wide column"
                style={{
                marginTop: '5%'
            }}>
                <p>Courses</p>
                <ScheduleList />
            </div>

        </div>
    )
}

export default App;
