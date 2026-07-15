import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PerfumeCard({ perfume }) {
    return (
        <Link to={`/perfume/${perfume.id}`}>
            <motion.div 
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="house">{perfume.brand}</div>
                <h3>{perfume.name}</h3>
                
                <div className="accord-container">
                    {perfume.accords.map((accord, index) => (
                        <div className="accord-row" key={index}>
                            <span className="accord-label">{accord.name}</span>
                            <div className="accord-bar-bg">
                                <motion.div 
                                    className="accord-bar-fill" 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${accord.val}%` }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                ></motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Link>
    );
}
