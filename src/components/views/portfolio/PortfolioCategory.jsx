import { portfolioCategory } from '@/constants/data/portfolioCategory';
import { useRouter } from 'next/router';

const PortfolioCategory = ({ filter, active }) => {
    const { locale } = useRouter();
    return (
        <div className="flex gap-4 mb-6 justify-center sm:justify-start">
            {portfolioCategory.map((category, index) => (
                <div key={index} className="category">
                    <button data-umami-event={`Click Portfolio Category - ${category.label}`} onClick={() => filter(category.slug)} title={category.label} className={`text-lg sm:text-base badge !px-4 !py-3 sm:!px-3 sm:!py-2 ${active === category.slug ? '!text-primary' : ''}`}>
                        <i className={category.icon}></i>
                        <span className='hidden sm:block'>{category.label[locale]}</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PortfolioCategory;
