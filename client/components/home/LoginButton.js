import React from 'react'
import Link from 'next/link'

const LoginButton = () => {
  return (
    <div>
        <Link href='/user/login'><button className='bg-blue-700 hover:text-lg text-sm text-white p-3 rounded-xl '>Giriş Yap</button></Link>

    </div>
  )
}

export default LoginButton