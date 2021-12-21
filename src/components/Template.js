import React, { useState, useEffect, Fragment } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  HiChevronRight,
  HiOutlineHome,
  HiOutlineUser,
  HiLockOpen,
  HiOutlineUserGroup,
  HiMenuAlt1,
  HiMenu,
  HiPencilAlt,
  HiLogout,
  HiLogin,
  HiOutlineShoppingCart,
  HiTag,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";

import whiteLogo from "../assets/white-logo.png";
import meeeeee from "../assets/me.jpg";
import DrawerButton from "./DrawerButton";
import DrawerDropdown from "./DrawerDropdown";

const Template = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  // UI STATE & FUNCTION
  const [sidebarClose, setSidebarClose] = useState(false);
  const [sidebarOnHover, setSidebarOnHover] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [outletDropdown, setOutletDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [cmsDropdown, setCmsDropdown] = useState(false);
  const [reportDropdown, setReportDropdown] = useState(false);
  const lg = useMediaQuery({ query: "(max-width: 1023px)" });
  // State untuk sidebar button yg active
  const [active, setActive] = useState("");
  const [activeDropdown, setActiveDropdown] = useState("");

  // Function When Sidebar On Hover
  const handleMouseOverSidebar = () => {
    setSidebarOnHover(true);
    if (sidebarClose) {
      if (pathname.startsWith("/admin/user")) setUserDropdown(true);
      if (pathname.startsWith("/admin/outlet")) setOutletDropdown(true);
      if (pathname.startsWith("/admin/product")) setProductDropdown(true);
      if (pathname.startsWith("/admin/cms")) setCmsDropdown(true);
      if (pathname.startsWith("/admin/report")) setReportDropdown(true);
    }
  };

  // Function When Mouse Leave
  const handleMouseLeaveSidebar = () => {
    if (sidebarClose) {
      setUserDropdown(false);
      setOutletDropdown(false);
      setProductDropdown(false);
      setCmsDropdown(false);
      setReportDropdown(false);
    }
    setSidebarOnHover(false);
  };

  // Handle Toggle Sidebar
  const handleOpenSidebar = () => {
    setSidebarClose(!sidebarClose);
    if (sidebarClose) {
      if (pathname.startsWith("/admin/user")) setUserDropdown(true);
      if (pathname.startsWith("/admin/outlet")) setOutletDropdown(true);
      if (pathname.startsWith("/admin/product")) setProductDropdown(true);
      if (pathname.startsWith("/admin/cms")) setCmsDropdown(true);
      if (pathname.startsWith("/admin/report")) setReportDropdown(true);
    }
  };

  //UseEffect When Sidebar toggling
  useEffect(() => {
    if (sidebarClose) {
      setUserDropdown(false);
      setOutletDropdown(false);
      setProductDropdown(false);
      setCmsDropdown(false);
      setReportDropdown(false);
    }
  }, [sidebarClose]);

  // UseEffect for set active sidebar when path changes
  useEffect(() => {
    if (pathname === "/admin/dashboard") setActive("dashboard");
    if (pathname === "/admin/customers") setActive("customers");
    if (pathname === "/admin/notification") setActive("notification");

    if (pathname.startsWith("/admin/user")) {
      setUserDropdown(true);
      setActiveDropdown("userDropdown");
      if (pathname === "/admin/user/role") setActive("user-role");
      if (pathname === "/admin/user/list") setActive("user-list");
      return;
    }
    if (pathname.startsWith("/admin/outlet")) {
      setOutletDropdown(true);
      setActiveDropdown("outletDropdown");
      if (pathname === "/admin/outlet/brand") setActive("outlet-brand");
      if (pathname === "/admin/outlet/list") setActive("outlet-list");
      return;
    }
    if (pathname.startsWith("/admin/product")) {
      setProductDropdown(true);
      setActiveDropdown("productDropdown");
      if (pathname === "/admin/product/category") setActive("product-category");
      if (pathname === "/admin/product/list") setActive("product-list");
      if (pathname === "/admin/product/promo") setActive("product-promo");
      if (pathname === "/admin/product/favorite") setActive("product-favorite");
      return;
    }
    if (pathname.startsWith("/admin/cms")) {
      setCmsDropdown(true);
      setActiveDropdown("cmsDropdown");
      if (pathname === "/admin/cms/onboarding") setActive("cms-onboarding");
      if (pathname === "/admin/cms/banner") setActive("cms-banner");
      if (pathname === "/admin/cms/about-us") setActive("cms-about-us");
      if (pathname === "/admin/cms/contact-us") setActive("cms-contact-us");
      if (pathname === "/admin/cms/faq") setActive("cms-faq");
      if (pathname === "/admin/cms/term-of-service")
        setActive("cms-term-of-service");
      return;
    }
    if (pathname.startsWith("/admin/report")) {
      setReportDropdown(true);
      setActiveDropdown("reportDropdown");
      if (pathname === "/admin/report/order") setActive("report-order");
      if (pathname === "/admin/report/product") setActive("report-product");
      if (pathname === "/admin/report/outlet") setActive("report-outlet");
      if (pathname === "/admin/report/customer") setActive("report-customer");
      if (pathname === "/admin/report/payment") setActive("report-payment");
      return;
    }
    setActiveDropdown("");
  }, [pathname]);

  // UseEffect to close sidebar for large screen below
  useEffect(() => {
    if (lg) {
      setSidebarClose(true);
    }
  }, [lg]);

  return (
    <div className="min-w-full min-h-screen m-0 p-0 relative">
      <div
        className={`fixed ${
          !sidebarClose &&
          "lg:w-screen lg:h-screen lg:z-50 lg:bg-black lg:bg-opacity-10"
        } `}
        onClick={setSidebarClose.bind(this, true)}
      ></div>
      <div
        className={`fixed top-0 left-0 min-h-screen z-50 lg:z-[1000] transition-all duration-300 bg-white overflow-hidden ${
          !sidebarClose ? "w-72" : "w-16 hover:w-72 lg:w-0"
        }`}
        onMouseOver={handleMouseOverSidebar}
        onMouseLeave={handleMouseLeaveSidebar}
      >
        <div className="h-16 flex items-center  text-2xl font-bold bg-secondary-500 text-white uppercase overflow-hidden">
          <div style={{ minWidth: "4rem" }} className="text-center"></div>
          <div className="w-56">
            <img
              src={whiteLogo}
              alt="logo mangkokku"
              className="min-w-[10rem] w-40"
            />
          </div>
        </div>
        <div
          className={`flex flex-col transition-all duration-300 h-[calc(100vh-4rem)] custom-scroll-bar pb-8 border-r border-r-gray-200 pt-4 overflow-auto ${
            sidebarClose && !sidebarOnHover ? "px-0" : "px-4"
          }`}
        >
          {/* DASHBOARD */}
          <DrawerButton
            href="/admin/dashboard"
            icon={<HiOutlineHome className="text-xl" />}
            text="Dashboard"
            active={active === "dashboard"}
          />

          {/* USER DROPDOWN */}
          <DrawerDropdown.DropDown
            open={userDropdown}
            onClick={setUserDropdown.bind(this, !userDropdown)}
          >
            <DrawerDropdown.Button
              icon={<HiOutlineUser className="text-xl" />}
              text="User"
              active={activeDropdown === "userDropdown"}
            >
              <HiChevronRight className="ml-auto" />
            </DrawerDropdown.Button>
            <DrawerDropdown.Container>
              <DrawerDropdown.Link
                href="/admin/user/role"
                text="Role"
                active={active === "user-role"}
              />
              <DrawerDropdown.Link
                href="/admin/user/list"
                text="User List"
                active={active === "user-list"}
              />
            </DrawerDropdown.Container>
          </DrawerDropdown.DropDown>

          {/* CUSTOMERS */}
          <DrawerButton
            href="/admin/customers"
            icon={<HiOutlineUserGroup className="text-xl" />}
            text="Customers"
            active={active === "customers"}
          />

          {/* OUTLET DROPDOWN */}
          <DrawerDropdown.DropDown
            open={outletDropdown}
            onClick={setOutletDropdown.bind(this, !outletDropdown)}
          >
            <DrawerDropdown.Button
              icon={<HiOutlineShoppingCart className="text-xl" />}
              text="Outlet"
              active={activeDropdown === "outletDropdown"}
            >
              <HiChevronRight className="ml-auto" />
            </DrawerDropdown.Button>
            <DrawerDropdown.Container>
              <DrawerDropdown.Link
                href="/admin/outlet/brand"
                text="Brand"
                active={active === "outlet-brand"}
              />
              <DrawerDropdown.Link
                href="/admin/outlet/list"
                text="Outlet List"
                active={active === "outlet-list"}
              />
            </DrawerDropdown.Container>
          </DrawerDropdown.DropDown>

          {/* PRODUCT DROPDOWN */}
          <DrawerDropdown.DropDown
            open={productDropdown}
            onClick={setProductDropdown.bind(this, !productDropdown)}
          >
            <DrawerDropdown.Button
              icon={<HiTag className="text-xl" />}
              text="Product"
              active={activeDropdown === "productDropdown"}
            >
              <HiChevronRight className="ml-auto" />
            </DrawerDropdown.Button>
            <DrawerDropdown.Container>
              <DrawerDropdown.Link
                href="/admin/product/category"
                text="Category"
                active={active === "product-category"}
              />
              <DrawerDropdown.Link
                href="/admin/product/list"
                text="Product List"
                active={active === "product-list"}
              />
              <DrawerDropdown.Link
                href="/admin/product/promo"
                text="Promo"
                active={active === "product-promo"}
              />
              <DrawerDropdown.Link
                href="/admin/product/favorite"
                text="Favorite"
                active={active === "product-favorite"}
              />
            </DrawerDropdown.Container>
          </DrawerDropdown.DropDown>

          {/* NOTIFICATION */}
          <DrawerButton
            href="/admin/notification"
            icon={<HiOutlineBell className="text-xl" />}
            text="Notification"
            active={active === "notification"}
          />

          {/* CMS DROPDOWN */}
          <DrawerDropdown.DropDown
            open={cmsDropdown}
            onClick={setCmsDropdown.bind(this, !cmsDropdown)}
          >
            <DrawerDropdown.Button
              icon={<HiOutlineCog className="text-xl" />}
              text="CMS"
              active={activeDropdown === "cmsDropdown"}
            >
              <HiChevronRight className="ml-auto" />
            </DrawerDropdown.Button>
            <DrawerDropdown.Container>
              <DrawerDropdown.Link
                href="/admin/cms/onboarding"
                text="Onboarding"
                active={active === "cms-onboarding"}
              />
              <DrawerDropdown.Link
                href="/admin/cms/banner"
                text="Banner"
                active={active === "cms-banner"}
              />
              <DrawerDropdown.Link
                href="/admin/cms/about-us"
                text="About Us"
                active={active === "cms-about-us"}
              />
              <DrawerDropdown.Link
                href="/admin/cms/contact-us"
                text="Contact Us"
                active={active === "cms-contact-us"}
              />
              <DrawerDropdown.Link
                href="/admin/cms/faq"
                text="FAQ"
                active={active === "cms-faq"}
              />
              <DrawerDropdown.Link
                href="/admin/cms/term-of-service"
                text="Term Of Service"
                active={active === "cms-term-of-service"}
              />
            </DrawerDropdown.Container>
          </DrawerDropdown.DropDown>

          {/* REPORT DROPDOWN */}
          <DrawerDropdown.DropDown
            open={reportDropdown}
            onClick={setReportDropdown.bind(this, !reportDropdown)}
          >
            <DrawerDropdown.Button
              icon={<HiOutlineDocumentReport className="text-xl" />}
              text="Report"
              active={activeDropdown === "reportDropdown"}
            >
              <HiChevronRight className="ml-auto" />
            </DrawerDropdown.Button>
            <DrawerDropdown.Container>
              <DrawerDropdown.Link
                href="/admin/report/order"
                text="Report Order"
                active={active === "report-order"}
              />
              <DrawerDropdown.Link
                href="/admin/report/product"
                text="Report Product"
                active={active === "report-product"}
              />
              <DrawerDropdown.Link
                href="/admin/report/outlet"
                text="Report Outlet"
                active={active === "report-outlet"}
              />
              <DrawerDropdown.Link
                href="/admin/report/customer"
                text="Report Customer"
                active={active === "report-customer"}
              />
              <DrawerDropdown.Link
                href="/admin/report/payment"
                text="Report Payment"
                active={active === "report-payment"}
              />
            </DrawerDropdown.Container>
          </DrawerDropdown.DropDown>

          <DrawerButton
            href="/login"
            icon={<HiLogin className="text-xl" />}
            text="Login"
          />
        </div>
      </div>
      <div className="flex">
        <div
          className={`transition-all duration-300 ${
            !sidebarClose ? "w-72 lg:w-0" : "w-16 lg:w-0"
          }`}
        ></div>
        <div
          className={`relative w-full transition-all duration-300 ${
            !sidebarClose ? "ml-12" : "ml-0"
          }`}
        >
          {/* Navbar */}
          <div
            className={`w-full h-16 bg-tertiary-500 z-30 fixed m-0 top-0 left-0 flex justify-between transition-all lg:pl-4 duration-300 px-4 shadow ${
              !sidebarClose ? "pl-72" : `${sidebarOnHover ? "pl-72" : "pl-16"}`
            }`}
          >
            <button
              className="text-white text-2xl px-4"
              onClick={handleOpenSidebar}
            >
              {sidebarClose ? <HiMenuAlt1 /> : <HiMenu />}
            </button>
            <div className="flex justify-end items-center h-full">
              <Menu>
                <Menu.Button className="relative flex items-center gap-4">
                  <div className="flex flex-col justify-end text-right sm:hidden">
                    <h6 className="font-medium text-base text-white tracking-wide leading-4">
                      John Doe
                    </h6>
                    <span className="font-light text-white text-sm">Admin</span>
                  </div>
                  <img
                    src={meeeeee}
                    alt="foto admin"
                    className="rounded-full w-12 h-12"
                  />
                  <div className="absolute w-3 h-3 border border-white rounded-full bg-green-400 bottom-0 right-0 animate-ping-slow"></div>
                  <div className="absolute w-3 h-3 border border-white rounded-full bg-green-400 bottom-0 right-0"></div>
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 "
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 "
                  leaveTo="opacity-0"
                >
                  <Menu.Items>
                    <div
                      className={
                        "bg-white flex flex-col rounded-md p-1 absolute bottom-[-7.5rem] right-4 shadow-md"
                      }
                    >
                      <Menu.Item>
                        <button className="py-2 px-4 text-gray-600 flex gap-2 hover:bg-gray-100">
                          <HiPencilAlt className="text-xl" />
                          <span>Edit Profile</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button className="py-2 px-4 text-gray-600 flex gap-2 hover:bg-gray-100">
                          <HiLockOpen className="text-xl" />
                          <span>Change Password</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className="py-2 px-4 text-gray-600 flex gap-2 hover:bg-gray-100"
                          onClick={handleLogout}
                        >
                          <HiLogout className="text-xl" />
                          <span>Logout</span>
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          {/* Navbar Mixins */}
          <div className="w-full h-20"></div>
          <div
            className={`px-8 lg:px-4 transition-all duration-300 ${
              !sidebarClose ? "w-[calc(100vw-18rem)]" : "w-full"
            }`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
