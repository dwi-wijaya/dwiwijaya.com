import React from 'react';

const Categories = [
    {
        icon: 'bx bx-grid',
        slug: 'all',
        label: 'All'
    },
    {
        icon: 'bx bx-code-alt',
        slug: 'code',
        label: 'Code',
    },
    {
        icon: 'bx bx-palette',
        slug: 'uiux',
        label: 'UI-UX',
    },
    {
        icon: 'bx bx-pen',
        slug: 'design',
        label: 'Design',
    },
    {
        icon: 'bx bx-customize',
        slug: 'others',
        label: 'Others',
    }
];

const Category = ({ filter, active }) => {
    return (
        <div className="categories">
            {Categories.map((category, index) => (
                <div key={index} className="category">
                    <button onClick={() => filter(category.slug)} title={category.label} className={`btn-filter ${active === category.slug ? 'active' : ''}`}>
                        <i className={category.icon}></i>
                        <span className='catname'>{category.label}</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Category;
