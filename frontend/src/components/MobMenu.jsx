import { useState } from "react";
import { motion } from "motion/react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[9999] relative" onClick={toggleDrawer}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#FFFFFF] backdrop-blur p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, path, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className="">
                {path && (
                  <Link to={path}>
                    <span
                      className="flex-center-between p-4 hover:bg-[#95A5A6] hover:text-[#FFFFFF] rounded-md cursor-pointer relative"
                      onClick={() => setClicked(isClicked ? null : i)}
                    >
                      {name}
                    </span>
                  </Link>
                )}
                {hasSubMenu && (
                  <span
                    className="flex-center-between p-4 hover:bg-[#95A5A6] hover:text-[#FFFFFF] rounded-md cursor-pointer relative"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    {name}
                    <FiChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  </span>
                )}

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon, path }) => (
                      <Link to={path} key={name}>
                        <li className="p-2 flex-center hover:bg-white/5 hover:text-[#2980B9] rounded-md gap-x-2 cursor-pointer">
                          <Icon size={17} />
                          {name}
                        </li>
                      </Link>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
