const Post = ({ post }) => {
    return (
        <div className="column" style={{marginBottom: '5%'}}>
            <div className="ui card" style={{position: 'relative', width: '100%'}}>
                <div className="content">
                    <img src="#" className="left floated mini ui image"></img>
                    <div className="header">
                        {post.teacherName}
                    </div>
                    <div className="meta">
                        {post.subject}
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        {post.title}
                    </div>
                    <div className="meta">
                        {post.due}
                    </div>
                    <div className="description">
                        <p>{post.content}</p>
                    </div>

                </div>


            </div>

        </div>
    )
}

    export default Post