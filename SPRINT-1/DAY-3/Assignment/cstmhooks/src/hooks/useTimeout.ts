import React, { useEffect, useState } from 'react'

export const useTimeout = (time: number) => {
  const [ready, setReady] = useState(false)

  useEffect(()=>{
    let id = setTimeout(()=>{
        setReady(true)
    },time*1000)

    return ()=> clearTimeout(id)
  },[])

  return ready;
}
