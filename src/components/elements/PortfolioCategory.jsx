import { portfolioCategory } from '@/constants/portfolioCategory';

const PortfolioCategory = ({ filter, active }) => {
    return (
        <div className="flex gap-4 mb-6">
            {console.log(active)}
            {portfolioCategory.map((category, index) => (
                <div key={index} className="category">
                    <button onClick={() => filter(category.slug)} title={category.label} className={`badge ${active === category.slug ? '!text-primary' : ''}`}>
                        <i className={category.icon}></i>
                        <span className='catname'>{category.label}</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PortfolioCategory;
