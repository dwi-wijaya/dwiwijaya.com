import React from 'react'

import { MENU_ITEMS } from '@/constants/data/menu'
import clsx from 'clsx'



export default function BadgeSection({ active, refetch }) {
    const routes = MENU_ITEMS
    return (
        <div className='flex gap-2 mb-3 overflow-y-hidden scrollbar-hide'>
            {routes.map(route => (
                <button
                    data-umami-event={`Click Pagespeed - ${route.label}`}
                    key={route.href}
                    className={clsx(
                        'badge !px-4',
                        active === route.href
                            ? '!text-green-500'
                            : ''
                    )}
                    onClick={() => refetch(route.href)}
                >
                    <i className={route.iconClass}></i>
                    {route.label}
                </button>
            ))}
        </div>
    )
}
