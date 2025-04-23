import React, { useEffect, useRef, useState } from 'react'


export default function Page({ children }) {
  return (
    <div className='overflow-hidden'>{children}</div>
  )
}
