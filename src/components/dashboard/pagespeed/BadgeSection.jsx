import React from 'react'

import { MENU_ITEMS } from '../../../constants/menu'
import clsx from 'clsx'
import './_badge_section.css'



export default function BadgeSection({ active, refetch }) {
  const routes = MENU_ITEMS
  return (
    <div className="badge__wrapper">
      {routes.map(route => (
        <button
          key={route.href}
          className={clsx(
            'badge__menu',
            active === route.href
              ? 'active'
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
