import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaClipboardCheck,
  FaUser,
  FaLayerGroup,
  FaCog,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome size={22} /> },
    { name: "Review", path: "/review", icon: <FaClipboardCheck size={22} /> },
    { name: "Dashboard", path: "/dashboard", icon: <FaUser size={22} /> },
    { name: "Templates", path: "/templates", icon: <FaLayerGroup size={22} /> },
    { name: "Settings", path: "/settings", icon: <FaCog size={22} /> },
    { name: "Login / SignUp", path: "/login", icon: <FaSignInAlt size={22} /> },
    { name: "Sign Up", path: "/signup", icon: <FaUserPlus size={22} /> },
  ];

  return (
    <div
      className={`fixed h-full transition-all duration-300 ${
        isOpen ? "w-56" : "w-16"
      } bg-gradient-to-b from-red-600 to-purple-700 text-white backdrop-blur-lg`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul className="mt-10 space-y-6">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-white/20 transition-all"
            >
              {item.icon}
              {isOpen && <span className="text-lg">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";  // Import useTranslation
// import {
//   FaHome,
//   FaClipboardCheck,
//   FaUser,
//   FaLayerGroup,
//   FaCog,
//   FaSignInAlt,
//   FaUserPlus,
// } from "react-icons/fa";

// const Sidebar = () => {
//   const { t } = useTranslation(); // Initialize translation hook
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { name: t("Home"), path: "/", icon: <FaHome size={22} /> },
//     { name: t("Review"), path: "/review", icon: <FaClipboardCheck size={22} /> },
//     { name: t("Dashboard"), path: "/dashboard", icon: <FaUser size={22} /> },
//     { name: t("Templates"), path: "/templates", icon: <FaLayerGroup size={22} /> },
//     { name: t("Settings"), path: "/settings", icon: <FaCog size={22} /> },
//     { name: t("Login / SignUp"), path: "/login", icon: <FaSignInAlt size={22} /> },
//     { name: t("Sign Up"), path: "/signup", icon: <FaUserPlus size={22} /> },
//   ];

//   return (
//     <div
//       className={`fixed h-full transition-all duration-300 ${
//         isOpen ? "w-56" : "w-16"
//       } bg-gradient-to-b from-red-600 to-purple-700 text-white backdrop-blur-lg`}
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <ul className="mt-10 space-y-6">
//         {menuItems.map((item) => (
//           <li key={item.name}>
//             <Link
//               to={item.path}
//               className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-white/20 transition-all"
//             >
//               {item.icon}
//               {isOpen && <span className="text-lg">{item.name}</span>}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
