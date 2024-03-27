import React from 'react'

import { MENU_ITEMS } from '../../../constants/menu'
import clsx from 'clsx'



export default function BadgeSection({ style,  active, refetch }) {
  console.log(style);
  const routes = MENU_ITEMS
  return (
    <div className={style.badge__wrapper}>
      {routes.map(route => (
        <button
          key={route.href}
          className={clsx(
            style.badge__menu,
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
