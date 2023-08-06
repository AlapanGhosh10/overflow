import { Link } from 'react-router-dom';
import './Top.css'
function Top() {
    return (
        <div className='top-section'>
            <div className="top-topsection">
                <h1>Recent Questions</h1>
                <button>
                    <Link to="/ask" style={{ textDecoration: 'none' }}>Ask Question</Link>
                </button>
            </div> 
            <hr />
            <div className="sort-options">
            </div>
        </div>
    )
}

export default Top;