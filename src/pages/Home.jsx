import { useState } from 'react';
import { perfumes } from '../data/perfumes';
import PerfumeCard from '../components/PerfumeCard';
import { motion } from 'framer-motion';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('All');

    const brands = ['All', ...new Set(perfumes.map(p => p.brand))];

    const filteredPerfumes = perfumes.filter(perfume => {
        const matchesSearch = perfume.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              perfume.brand.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesBrand = selectedBrand === 'All' || perfume.brand === selectedBrand;
        return matchesSearch && matchesBrand;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <main className="container">
            <div className="search-wrapper">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search by name or house..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            
            <div className="brand-filters">
                {brands.map(brand => (
                    <button 
                        key={brand}
                        className={`filter-btn ${selectedBrand === brand ? 'active' : ''}`}
                        onClick={() => setSelectedBrand(brand)}
                    >
                        {brand}
                    </button>
                ))}
            </div>

            <motion.div 
                className="grid"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {filteredPerfumes.map(perfume => (
                    <PerfumeCard key={perfume.id} perfume={perfume} />
                ))}
            </motion.div>
            
            {filteredPerfumes.length === 0 && (
                <p style={{textAlign: 'center', color: 'var(--text-dim)', marginTop: '2rem'}}>No perfumes found.</p>
            )}
        </main>
    );
}
