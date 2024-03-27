import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import LogoDark from '../../assets/logo-dark.webp';
import LogoLight from '../../assets/logo-light.webp';

const SidebarBrand = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme();
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
  return (
    <Image width={'2.5rem'} height={'2.5rem'} src={resolvedTheme == 'dark' ? LogoDark : LogoLight} alt="Dwi-logo" />

  )
}

export default SidebarBrand