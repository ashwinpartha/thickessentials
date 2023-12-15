import React,{useState,useEffect} from 'react'
import { cart } from '../assets/images'
import { logo } from '../assets/images'
const Header = () => {

  const [isSticky, setSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change the value below to the scroll position where you want the header to become non-sticky
      const triggerPoint = 200;

      setSticky(scrollPosition > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

    <div className='flex justify-between sticky top-0 px-20 h-16 items-center bg-white'>
        <img className='h-12 w-24'  src={logo} alt='img'></img>
        <img className='h-6 w-6' src={cart} alt='cart' onClick={()=>{console.log("cart pressed");}}></img>
    </div>

    
  )
}

export default Header