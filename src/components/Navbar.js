const Navbar = () => {
    return (
        <div>
            <div className="ui left fixed vertical menu" style={{width: '17%'}}>
                <div className="item acc" style= {{marginTop: '5%'}}>
                    Acc info
                </div>
                <a className="active item">
                    Home / Dashboard (Undecided)
                </a>
                <a className="item">
                    Schedule / Calendar (Undecided)
                </a>
                <a className="item">
                    Scores
                </a>
            </div>
        </div>
    )
}

export default Navbar
