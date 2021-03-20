import React from 'react'

const LoginForm = () => {
    return (
        <form className="ui large form">
            <div className="ui stacked segment">
                <div className="field">
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input type="text" name="username" placeholder="Username"></input>
                    </div>
                </div>
                <div className="field">
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input type="password" name="password" placeholder="Password"></input>
                    </div>
                </div>
            </div>
            <div className="ui fluid large submit button">Submit</div>
        </form>
    )
}

export default LoginForm
