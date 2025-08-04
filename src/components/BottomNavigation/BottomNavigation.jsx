import React from 'react'
import { Link } from "react-router-dom"

const BottomNavigation = () => {
    return (
        <div className="dock dock-md">
            <Link to="/" className='dock-active text-primary scale-75'>
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
                        <polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></polyline>
                        <path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path>
                        <line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></line>
                    </g>
                </svg>
                <span className="dock-label">Home</span>
            </Link>

            <Link to="/categories" className="">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
                        <rect x="3" y="3" width="7" height="7" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></rect>
                        <rect x="14" y="3" width="7" height="7" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></rect>
                        <rect x="14" y="14" width="7" height="7" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></rect>
                        <rect x="3" y="14" width="7" height="7" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></rect>
                    </g>
                </svg>
                <span className="dock-label">Categories</span>
            </Link>

            <Link to="/favorites" className="">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
                        <path d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06A5.5,5.5,0,0,0,20.84,4.61Z" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path>
                    </g>
                </svg>
                <span className="dock-label">Favorites</span>
            </Link>

            <Link to="/basket" className="relative">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
                        <path d="M6,2L3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6L18,2Z" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path>
                        <path d="M16,10a4,4,0,0,1-8,0" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path>
                    </g>
                </svg>
                {/* Badge for cart items count */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">3</span>
                <span className="dock-label">Basket</span>
            </Link>

            <Link to="/profile">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
                        <path d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path>
                        <circle cx="12" cy="7" r="4" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></circle>
                    </g>
                </svg>
                <span className="dock-label">Profile</span>
            </Link>
        </div>
    )
}

export default BottomNavigation