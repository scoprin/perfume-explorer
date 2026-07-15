import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PerfumeCard({ perfume }) {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <Link to={`/perfume/${perfume.id}`}>
            <motion.div 
                className="card"
                variants={itemVariants}
                whileHover={{ scale: 1.03, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
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
