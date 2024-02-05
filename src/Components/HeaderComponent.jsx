'use client'
import React,{useState} from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaCog } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";


const HeaderComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [menuItems,setMenuItems]=useState([
    "Stock Video",
    "video Template",
    "Music",
    "Sound Effects",
    "Graphic Templates",
    "Graphic",
    "Presentation",
    "Photos",
    "Fonts",
    "Add Ons"
  ])
  return (
   <>
      <div className="bg-#FFFFFF text-black p-4  flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center">
        <div className="ms-4 p-2" style={{backgroundColor:"blue",borderRadius:"10px",opacity:"0.7"}}>
        <span  style={{width:"200px",color:"white"}}>  <IoSettings/></span>
        </div>
        <div>
          {/* Your Text */}
          <p className="text-lg font-bold ms-2 font-size: 0.75rem">ZinTools</p>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex-1 hidden md:flex justify-center items-center">
        {/* Search Bar with Icon on the right side */}
        <div className="relative flex items-center w-1/2 justify-center">
          <div className="relative flex items-center" style={{backgroundColor:"#f2f2f2",borderRadius:"20px"}}>
            <input
              type="text"
              placeholder="Search..."
              className="px-5 py-2 border  w-96"
              style={{backgroundColor:"#f2f2f2", borderRadius:"20px"}}
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
              {/* React Icons search icon */}
              <BsSearch size={20} />
            </span>
          </div>
        </div>
      </div>

      {/* Right Section - Hide on small screens, show in toggle bar */}
      <div className="hidden md:flex items-center">
        {/* Signup or Login Buttons */}
        <button className="px-4 text-white py-2 bg-blue-500 rounded-lg mr-4">
          Sign Up
        </button>
        <button className="px-4   py-2 hover:bg-blue-500 hover:text-white rounded-lg">Login</button>
      </div>

      {/* Mobile Toggle Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Responsive Drawer */}
      {isMenuOpen && (
  <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 w-100">
    <div className="p-4">
      {/* Close Drawer Button */}
      <button onClick={toggleMenu} className="text-2xl absolute top-4 right-4">
        ✕
      </button>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border rounded-lg my-4 w-full"
      />

      {/* Menu Items */}
      <div className="flex flex-col space-y-4">
        {/* Signup Button */}
        <button className="px-4 py-2 bg-blue-500 rounded-lg">
          Sign Up
        </button>

        {/* Login Button */}
        <button className="px-4 py-2 hover:bg-blue-500 rounded-lg">
          Login
        </button>

        {/* Existing Menu Items */}
        {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white"
                  >
                    <ul><li style={{textDecoration:"underline"}}>{item}</li></ul> 
                  </a>
                ))}
       
        
      </div>
    </div>
  </div>
)}

    </div>
    <div className="hidden md:flex bg-white-400 text-black p-5 flex items-center justify-between shadow-xl ">
      <div className="flex items-center justify-between bg-white-700">
        {menuItems.map((item,index)=>
        <span key={index} className="md:mx-4 lg:px-2 lg:py-2">{item}</span>
        )}
      </div>
</div>
   </>
  );
};

export default HeaderComponent;
