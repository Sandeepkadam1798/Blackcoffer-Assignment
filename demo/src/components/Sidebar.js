import React, { useEffect, useState } from "react";
import maskgroup from "../Images/Mask group.svg";
import arrow from "../Images/arrow.svg";
import Product from "../Images/Product.svg";
import OrderManagementsvg from "../Images/OrderManagement.svg";
import CustomerManagementsvg from "../Images/CustomerManagement.svg";
import PromotionsDiscountssvg from "../Images/PromotionsDiscounts.svg";
import UserRolesvg from "../Images/UserRole.svg";
import EmailTemplatessvg from "../Images/EmailTemplates.svg";
import FeedbackReviewssvg from "../Images/FeedbackReview.svg";

import Navbtn from "../Images/Navbtn.svg";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProductManagement from "./ProductManagement";
import OrderManagement from "./OrderManagement";
import SearchIcon from "../Images/Search icon.svg";
import belimage from "../Images/belimage.svg";
import Hero from "../Images/Hero.png";
import CategoryManagement from "./CategoryManagement";
import CustomerManagement from "./CustomerManagement";
import PromotionsDiscounts from "./PromotionsDiscounts";
import UserRole from "./UserRole";
import EmailTemplates from "./EmailTemplates";
import FeedbackReviews from "./FeedbackReviews";

const Style = {
  navstyle:
    "font-Poppins text-gray-500 text-base font-Poppins  py-3 px-4 hover:bg-orange-color hover:text-white-color flex flex-wrap justify-between items-center ",
  activeLink: "bg-orange-color text-white-color", // Define the styles for active link
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();

  const isActiveLink = (path) => {
    return pathname === path;
  };

  useEffect(() => {
   
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setOpen(!mediaQuery.matches);

    
    const handleResize = () => {
      setOpen(!mediaQuery.matches);
    };

    mediaQuery.addListener(handleResize);

 
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative flex h-full">
        {/* Sidebar */}
        <div
          className={`${
            open ? " w-72  " : "hidden md:block w-14 "
          } bg-white-color shrink-0 shadow-md bg-opacity-75 duration-300 `}
        >
          <div className="flex gap-2 justify-center p-3 ">
            <div
              className="text-center text-green-color text-3xl font-bold font-integral"
              style={{ fontFamily: "Integral CF Regular" }}
            >
              Black
            </div>
            <div
              className="text-center text-orange-color text-3xl font-bold font-integral"
              style={{ fontFamily: "Integral CF Regular" }}
            >
              coffer
            </div>
          </div>

          <nav>
            <Link
              className={`${Style.navstyle} ${isActiveLink('/') ? Style.activeLink : ''}`}
              to="/"
            >
              <div className="flex gap-2">
                <img src={maskgroup} alt="Square" />
                <p className={`${!open && "hidden"} origin-left duration-200`}>
                  Dashboard
                </p>
              </div>
              <div>
                <img
                  className={`${!open && "hidden"} origin-left duration-200`}
                  src={arrow}
                  alt="Square"
                />
              </div>
            </Link>
            <Link
              className={`${Style.navstyle} ${isActiveLink('/productmanagement') ? Style.activeLink : ''}`}
              to="/productmanagement"
            >
              <div className="flex gap-2">
                <img src={Product} alt="Square" />
                <p className={`${!open && "hidden"} origin-left duration-200`}>
                Data Visualization 
                </p>
              </div>
              <div>
                <img
                  className={`${!open && "hidden"} origin-left duration-200`}
                  src={arrow}
                  alt="Square"
                />
              </div>
            </Link>
            <Link
              className={`${Style.navstyle} ${isActiveLink('/ordermanagement') ? Style.activeLink : ''}`}
              to="/ordermanagement"
            >
              <div className="flex gap-2">
                <img src={OrderManagementsvg} alt="Square" />
                <p className={`${!open && "hidden"} origin-left duration-200`}>
                  Order Management
                </p>{" "}
              </div>
              <div>
                <img
                  className={`${!open && "hidden"} origin-left duration-200`}
                  src={arrow}
                  alt="Square"
                />
              </div>
            </Link>
            <Link
              className={`${Style.navstyle} ${isActiveLink('/CustomerManagement') ? Style.activeLink : ''}`}
              to="/CustomerManagement"
            >
              <div className="flex gap-2">
                <img src={CustomerManagementsvg} alt="Square" />
                <p className={`${!open && "hidden"} origin-left duration-200`}>
                  Customer Management
                </p>{" "}
              </div>
              <div>
                <img
                  className={`${!open && "hidden"} origin-left duration-200`}
                  src={arrow}
                  alt="Square"
                />
              </div>
            </Link>
            <Link
              className={`${Style.navstyle} ${isActiveLink('/CategoryManagement') ? Style.activeLink : ''}`}
              to="/CategoryManagement"
            >
              <div className="flex gap-2">
                <img src={maskgroup} alt="Square" />
                <p className={`${!open && "hidden"} origin-left duration-200`}>
                Category Management
                </p>{" "}
              </div>
              <div>
                <img
                  className={`${!open && "hidden"} origin-left duration-200`}
                  src={arrow}
                  alt="Square"
                />
              </div>
            </Link>
            <Link
              className={`${Style.navstyle} ${isActiveLink('/PromotionsDiscounts') ? Style.activeLink : ''}`}
              to="/PromotionsDiscounts"
            >
              <div className="flex gap-2">
                <img src={PromotionsDiscountssvg} alt="Square" />
                <p className={`${!open && "hidden"} origin-left duration-200`}>
                Promotions & Discounts
                </p>{" "}
              </div>
              <div>
                <img
                  className={`${!open && "hidden"} origin-left duration-200`}
                  src={arrow}
                  alt="Square"
                />
              </div>
            </Link>
            <Link
              className={`${Style.navstyle} ${isActiveLink('/UserRole') ? Style.activeLink : ''}`}
              to="/UserRole"
            >
              <div className="flex gap-2">
                <img src={UserRolesvg} alt="Square" />
                <p className={`${!open && "hidden"} origin-left duration-200`}>
                User Role
                </p>{" "}
              </div>
              <div>
                <img
                  className={`${!open && "hidden"} origin-left duration-200`}
                  src={arrow}
                  alt="Square"
                />
              </div>
            </Link>
            <Link
              className={`${Style.navstyle} ${isActiveLink('/EmailTemplates') ? Style.activeLink : ''}`}
              to="/EmailTemplates"
            >
              <div className="flex gap-2">
                <img src={EmailTemplatessvg} alt="Square" />
                <p className={`${!open && "hidden"} origin-left duration-200`}>
                Email Templates
                </p>{" "}
              </div>
              <div>
                <img
                  className={`${!open && "hidden"} origin-left duration-200`}
                  src={arrow}
                  alt="Square"
                />
              </div>
            </Link>
            <Link
              className={`${Style.navstyle} ${isActiveLink('/FeedbackReviews') ? Style.activeLink : ''}`}
              to="FeedbackReviews"
            >
              <div className="flex gap-2">
                <img src={FeedbackReviewssvg} alt="Square" />
                <p className={`${!open && "hidden"} origin-left duration-200`}>
                Feedback & Reviews
                </p>{" "}
              </div>
              <div>
                <img
                  className={`${!open && "hidden"} origin-left duration-200`}
                  src={arrow}
                  alt="Square"
                />
              </div>
            </Link>
            {/* ... (other links) */}
          </nav>
        </div>

        {/* header */}
        <div className="flex-1 ">
          <div className=" shadow px-2 py-4 flex h-16">
            <img
              src={Navbtn}
              onClick={() => setOpen(!open)}
              className="cursor-pointer p-1"
            />

            <div className="flex items-center">
              <div className="relative">
                <img
                  src={SearchIcon}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 "
                />
                <input
                  type="text"
                  className="pl-8 pr-4 py-2 border rounded-full focus:outline-none  focus:border-orange-color h-10 w-80"
                  placeholder="Search..."
                />
              </div>
            </div>

            <div className="flex  items-center ml-auto">
              <img src={belimage} alt="belimage" className="mr-2" />
              <img
                src={Hero}
                alt="Hero"
                className="rounded-full w-8 h-8 mr-2"
              />
              <span className="font-Poppins leading-8">Henry</span>
            </div>
          </div>

          <div>
            <Routes>
              <Route path="/" element={[<Dashboard />]} />
              <Route
                path="/productmanagement"
                element={[<ProductManagement />]}
              />
              <Route path="/ordermanagement" element={[<OrderManagement />]} />
              <Route path="/CustomerManagement" element={[<CustomerManagement />]} />
              <Route path="/CategoryManagement" element={[<CategoryManagement />]} />
              <Route path="/PromotionsDiscounts" element={[<PromotionsDiscounts />]} />
              <Route path="/UserRole" element={[<UserRole />]} />
              <Route path="/EmailTemplates" element={[<EmailTemplates />]} />
              <Route path="/FeedbackReviews" element={[<FeedbackReviews/>]} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
