import React from 'react'

const Footer = () => {
  return (
    <footer className='footer' style={{ justifyContent: 'center', fontSize: '0.8rem', opacity: 0.6 }}>
      © {new Date().getFullYear()} || Nada ,_,
    </footer>
  )
}

export default Footer