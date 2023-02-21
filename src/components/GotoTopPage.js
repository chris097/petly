import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GotoTopPage = ({children}) => {
    const location = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [location]);
  
    return <div>{children}</div>;
}

export default GotoTopPage