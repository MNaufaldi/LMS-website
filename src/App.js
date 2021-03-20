import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Post from "./components/Post"
import ScoresTable from "./components/ScoresTable"
import ScheduleList from "./components/ScheduleList"
import LoginForm from "./components/LoginForm"

function App() {
    return (
        <div className="ui grid">
          {/* Parts seperated with Segment later */}
          {/* Grid will be changed later for now im just making components */}
          <div className="row">
                <div className="left floated three wide stretched column side">
                    <Navbar />
                </div>

                <div className="thirteen wide column head">
                    <Header />
                  <div className="ui grid content-grid">
                      <div className="twelve wide column ">
                            <div className="ui segment">
                                <ScoresTable />
                            </div>
                      </div>
                      <div className="four wide column">
                            <div className="ui segment">
                                <ScheduleList />
                            </div>
                            
                      </div>
                  </div>
                </div>
          </div>            

        </div>
    )
}

export default App;
