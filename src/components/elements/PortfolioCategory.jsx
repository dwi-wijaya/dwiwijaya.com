import { portfolioCategory } from '@/constants/portfolioCategory';

const PortfolioCategory = ({ filter, active }) => {
    return (
        <div className="flex gap-4 mb-6 justify-center lg:justify-start">
            {console.log(active)}
            {portfolioCategory.map((category, index) => (
                <div key={index} className="category">
                    <button onClick={() => filter(category.slug)} title={category.label} className={`text-3xl sm:text-base badge ${active === category.slug ? '!text-primary' : ''}`}>
                        <i className={category.icon}></i>
                        <span className='hidden sm:block'>{category.label}</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PortfolioCategory;
