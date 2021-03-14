

const Post = () => {
    return (
        <div className="column" style={{marginBottom: '5%'}}>
            <div className="ui card" style={{position: 'relative', width: '100%'}}>
                <div className="content">
                    <img src="#" className="left floated mini ui image"></img>
                    <div className="header">
                        Teacher's name
                    </div>
                    <div className="meta">
                        Subject
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        Title
                    </div>
                    <div className="meta">
                        due date
                    </div>
                    <div className="description">
                        <p>Content</p>
                    </div>
                    
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Post
