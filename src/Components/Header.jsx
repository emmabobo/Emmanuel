import React,{useState} from 'react'
import { Link } from 'react-router'
// import logo from '../assets/logoW.png'
// import logoText from '../assets/logoWhite.png'




function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const handleMobileMenu = () => {
    // Get the element by its ID (replace 'yourElementId' with the actual ID)
    const elementId = document.getElementById('navLink');
    if (mobileMenuOpen) {
      elementId.classList.remove('hidden');
    }
    else{
      elementId.classList.add('hidden');
    }

    setMobileMenuOpen(!mobileMenuOpen);
  };

 



  return (
    <div className='fixed  bg-black top-0 right-0 left-0  h-[10vh]'>
      <nav className='h-full mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 '>
        
        {/* Logo section */}
        <div onClick={handleMobileMenu} className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">La_Drogo</span>
            {/* <img className=" h-8 w-auto lg:hidden " src={logo} alt="" />
            <img className='h-5 w-auto hidden lg:block' src={logoText} alt='' /> */}
          </Link>
        </div>

         {/* Menu Items*/}
         <div id='navLink' className='hidden bg-black absolute top-[10vh] left-0 right-0 h-[90vh] overscroll-none items-center text-center  text-white   p-8 text-2xl flex flex-col gap-8 md:top-0 md:flex md:relative md:flex-row md:text-2xl md:h-0 md:p-0 '>
        


           <Link to='/' onClick={handleMobileMenu} className='w-full border-b-4 pb-3  hover:text-blue-600  hover:-translate-y-1 transition-all md:border-none md:pb-0' >Home</Link>
          <Link to='/Projects' onClick={handleMobileMenu} className='w-full border-b-4 pb-3 hover:text-blue-600  hover:-translate-y-1 transition-all md:border-none md:pb-0'>Projects</Link>
          <Link to='/about' onClick={handleMobileMenu} className='w-full border-b-4 pb-3 hover:text-blue-600  hover:-translate-y-1 transition-all md:border-none md:pb-0 '>About</Link>
          <Link to='/contact' onClick={handleMobileMenu} className=' w-full border-b-4 pb-3 hover:text-blue-600 hover:-translate-y-1 transition-all md:border-none md:pb-0'>Contact</Link>
        </div>

        {/* Hamburger-menu */}
        <div className=" flex md:hidden" >
          <button type="button" onClick={handleMobileMenu} class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

       


      </nav>
    </div>
  )
}

export default Header


