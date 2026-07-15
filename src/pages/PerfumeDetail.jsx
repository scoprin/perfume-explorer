import { useParams, Link } from 'react-router-dom';
import { perfumes } from '../data/perfumes';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function PerfumeDetail() {
    const { id } = useParams();
    const perfume = perfumes.find(p => p.id === id);

    if (!perfume) return <div className="container" style={{textAlign: 'center', marginTop: '100px'}}>Perfume not found.</div>;

    return (
        <motion.div 
            className="detail-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <Link to="/" className="back-btn">
                    <ArrowLeft size={18} /> BACK TO ARCHIVE
                </Link>

                <div className="detail-content">
                    <div className="detail-header">
                        <div className="detail-meta">{perfume.brand} • {perfume.year}</div>
                        <h2>{perfume.name}</h2>
                    </div>

                    {perfume.image && (
                        <img src={perfume.image} alt={perfume.name} className="detail-image" />
                    )}

                    <p className="description">{perfume.description}</p>

                    <div className="pyramid-grid">
                        <div className="pyramid-tier">
                            <h4>TOP NOTES</h4>
                            <p>{perfume.pyramid.top.join(' • ')}</p>
                        </div>
                        <div className="pyramid-tier">
                            <h4>HEART NOTES</h4>
                            <p>{perfume.pyramid.heart.join(' • ')}</p>
                        </div>
                        <div className="pyramid-tier">
                            <h4>BASE NOTES</h4>
                            <p>{perfume.pyramid.base.join(' • ')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
