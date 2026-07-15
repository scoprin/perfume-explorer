import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1 className="main-title">SILLAGE</h1>
                </Link>
                <p className="subtitle">THE ARCHITECTURE OF NICHE SCENT</p>
            </div>
        </header>
    );
}
