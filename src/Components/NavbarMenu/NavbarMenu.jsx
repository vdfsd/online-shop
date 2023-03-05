import { NavLink } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
import { useState, useEffect } from 'react';
import { Navbar, MobileNav, Typography, IconButton } from '@material-tailwind/react';
import { useSelector } from 'react-redux';

export const NavbarMenu = () => {
    const [openNav, setOpenNav] = useState(false);
    const quantityGoods = useSelector((state) => state.cart.quantityGoods);
    // console.log(quantityGoods);

    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink
                    to="/"
                    className="flex flex-row items-center font-inter text-base font-medium traking-normal leading-none text-center mr-4"
                >
                    Home
                </NavLink>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink
                    to="/cabinet"
                    className="flex flex-row items-center font-inter text-base font-medium traking-normal leading-none text-center mr-4"
                >
                    Cabinet
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal relative"
            >
                <NavLink className="flex flex-row items-center cursor-pointer " to="/cart">
                    <span className="absolute right-[130px] font-inter text-base font-medium traking-normal leading-none text-center mr-4">
                        {quantityGoods !== 0 ? quantityGoods : null}
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#000000"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                    </svg>
                    <p className=" font-inter text-base font-medium traking-normal leading-none text-center mr-2">
                        Shopping cart
                    </p>
                </NavLink>
            </Typography>
        </ul>
    );

    return (
        <div className=" flex justify-center">
            <Navbar className="mx-auto w-[85%] py-2 px-4 lg:px-8 lg:py-4 z-40 fixed ">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography className="mr-4 cursor-pointer py-1.5 font-normal">
                        <NavLink to="/">
                            <span>Material Tailwind</span>
                        </NavLink>
                    </Typography>
                    <div className="hidden lg:block">{navList}</div>
                    <NavLink to="/authorization" className="hidden lg:inline-block">
                        <span>Sign in</span>
                    </NavLink>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <NavLink to="/authorization" variant="gradient" size="sm" className="mb-2">
                            <span>Sign in</span>
                        </NavLink>
                    </div>
                </MobileNav>
            </Navbar>
        </div>
    );
};