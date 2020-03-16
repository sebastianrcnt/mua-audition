import React from 'react';
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
            <header>
                <div className="nav">
                    <div className="nav-item nav-title">무아 오디션</div>
                    <div className="nav-item"><Link to='/applicants'>지원자 보기</Link></div>
                </div>
            </header>
        );
    }
}

export default Navigation;