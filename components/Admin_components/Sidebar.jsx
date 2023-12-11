import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.svg";
import { GoSidebarCollapse } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";

import { CiEdit } from "react-icons/ci";

import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdCreate } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { MdOutlineDiscount } from "react-icons/md";

import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import { SlLogout } from "react-icons/sl";

const menuItems = [
  { id: 2, label: "Product Lists", icon: MdProductionQuantityLimits, link: "/admin/products" },
  { id: 3, label: "Create Products ", icon: CiEdit, link: "/admin/create" },
  { id: 4, label: "Orders", icon: CiUser, link: "/admin/orders" },
  { id: 5, label: "Discount", icon: MdOutlineDiscount, link: "/admin/discount" }

];

const Sidebar = () => {
  const router = useRouter();
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const WrapperClasses = classNames(
    "h-auto px-4 pt-8 pb-4 bg-gray-200 flex justify-between flex-col  ",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );
  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };
  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap",
      {
        "hover:text-yellow-500": !toggleCollapse,
      }
    );
  };
  return (
    <div
      className={WrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center p-1 gap-4 ">
            <div className="flex items-center gap-3 ">
              <div className="flex items-center pl-1 gap-4">
                <Image
                  src={logo}
                  alt="logo"
                  width={50}
                  height={50}
                  className={classNames("mt-2 text-lg font-medium text-text", {
                    hidden: toggleCollapse,
                  })}
                />
                <span
                  className={classNames("mt-2 text-lg font-medium text-text", {
                    hidden: toggleCollapse,
                  })}
                >
                  SNEAKACE
                </span>
              </div>
              {isCollapsible && (
                <button
                  className={collapseIconClasses}
                  onClick={handleSidebarToggle}
                >
                  <GoSidebarCollapse className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-24">
          <div>
            <Link href="/admin">
              <div className="flex py-4 px-3 items-center w-full h-full transition duration-300 ease-in-out ">
                <div style={{ width: "2.5rem" }}>
                  <MdOutlineSpaceDashboard className="w-5 h-5" />
                </div>
                {!toggleCollapse && (
                  <span
                    className={classNames(
                      "text-md font-medium text-text-light"
                    )}
                  >
                    Home
                  </span>
                )}
              </div>
            </Link>
          </div>
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={menu.id}>
                <Link href={menu.link}>
                  <div className="flex py-4 px-3 items-center w-full h-full transition duration-300 ease-in-out hover:text-yellow-500">
                    <div style={{ width: "2.5rem" }}>
                      <Icon className="w-5 h-5 " />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${getNavItemClasses(
          {}
        )} px-3 py-4 transition duration-300 ease-in-out hover:text-yellow-500 mt-[90vh]`}
      >
        <div style={{ width: "2.5rem" }}>
          <SlLogout />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
