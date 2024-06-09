import React from 'react';

export default function LoadingSpeedInsight() {
  const DummyCategory = [
    { title: 'Performance' },
    { title: 'Accessibility' },
    { title: 'Best Practices' },
    { title: 'SEO' }
  ];

  return (
    <div className="my-2 flex items-center justify-start text-xs gap-4 overflow-y-hidden scrollbar-hide">
      {DummyCategory.map((item,index) => (
        <div key={item.title} className="mt-2 flex flex-col items-center justify-start text-xs gap-3">
          <div className="whitespace-nowrap">{item.title}</div>
          <div className="h-16 !mt-0 w-16 animate-pulse rounded-full bg-transparent p-2 md:h-20 md:w-20">
            <div className="flex h-full w-full items-center outline outline-slate-300 dark:outline-container !outline-[0.5rem] justify-center rounded-full bg-transparent">
              <i className='outline-slate-400 dark:outline-slate-400 text-xl bx bx-dots-horizontal-rounded' ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
