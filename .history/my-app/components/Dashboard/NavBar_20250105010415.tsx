import React, { useState } from 'react';

const MainNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { title: "Home", link: "/home" },
    {
      title: "Status",
      link: "#",
      dropdown: [
        { title: "Active", link: "/status/active" },
        { title: "Inactive", link: "/status/inactive" },
        { title: "Leave", link: "/status/leave" },
      ],
    },
    {
      title: "Appointments",
      link: "#",
      dropdown: [
        { title: "Upcoming", link: "/appointments/upcoming" },
        { title: "Completed", link: "/appointments/completed" },
        { title: "Cancelled", link: "/appointments/cancelled" },
      ],
    },
    {
      title: "Reports",
      link: "#",
      dropdown: [
        { title: "Daily", link: "/reports/daily" },
        { title: "Monthly", link: "/reports/monthly" },
        { title: "Yearly", link: "/reports/yearly" },
      ],
    },
    {
      title: "Others",
      link: "#",
      dropdown: [
        { title: "Settings", link: "/others/settings" },
        { title: "Help", link: "/others/help" },
      ],
    },
  ];

  const toggleDropdown = (index: number | React.SetStateAction<null>) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/home" className="text-xl font-bold">Logo</a>
        <ul className="flex space-x-4">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {item.dropdown ? (
                <>
                  <button
                    className="hover:text-blue-500 focus:outline-none"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.title}
                  </button>
                  {activeDropdown === index && (
                    <ul className="absolute bg-white shadow rounded mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <li key={dropdownIndex}>
                          <a
                            href={dropdownItem.link}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {dropdownItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a href={item.link} className="hover:text-blue-500">
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;

