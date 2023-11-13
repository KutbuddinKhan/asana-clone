import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const logo = () => {
  return (
    <Link
        href={'/'}
    >
      <Image 
        src="/images/bird-logo.png"
        alt='logo'
        width={80}
        height={80}
        className="mr-6"
      />
    </Link>
  )
}

export default logo
