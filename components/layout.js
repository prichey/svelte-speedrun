import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      padding: '1em',
      textAlign: 'center',
      overflow: 'scroll'
    }}>
    {children}
  </div>
)