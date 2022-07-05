import React from "react";

export default function Toggler(){
const [num, setNum] = React.useState(0)

    return(
    <div>
           <nav className="bg-primary text-light navbar-expand-md navbar-dark fixed-sticky">
        <div className="container d-sm-flex bg-primary">
            <h3 className="navbar-brand">Responde</h3>
            <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>

            </button>

         <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a href="#learn" className="nav-link">What you'll Learn
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#menu" className="nav-link">Menu</a>
                </li>
                <li className="nav-item">
                    <a href="#settings" className="nav-link">Settings</a>
                </li>
            </ul>
         </div>

        </div>
        

    </nav>

    </div>)
}