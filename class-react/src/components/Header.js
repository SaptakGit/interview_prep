import React, {Component} from "react"
import {Link} from "react-router-dom"

class Header extends Component {
    render(){
        return(
            <div>
                <Link to="/">Dashboard</Link>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default Header