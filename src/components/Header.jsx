import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="sidewise">
                <h1 id="main-icon" style={{color: "white"}}><Link to="/">Overflow</Link></h1>
                <div id="search-bar">
                    <input type="text" />
                </div>
                <button>Search</button>
            </div>
        </header>
    )
}

export default Header;