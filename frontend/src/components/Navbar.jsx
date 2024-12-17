import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function DesktopMenu({ menu }) {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link"
      onHoverStart={() => {
        toggleHoverMenu();
      }}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      {menu?.path && (
        <Link to={menu.path}>
          <span className="flex-center gap-1 hover:bg-[#95A5A6] hover:text-[#FFFFFF] cursor-pointer px-3 py-1 rounded-xl text-[#34495E]">
            {menu.name}
          </span>
        </Link>
      )}
      {hasSubMenu && (
        <span className="flex-center gap-1 hover:bg-[#95A5A6] hover:text-[#FFFFFF] cursor-pointer px-3 py-1 rounded-xl text-[#34495E]">
          {menu.name}
          <FiChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-20 text-white0" />
        </span>
      )}
      {hasSubMenu && (
        <motion.div
          className="absolute top-[4.2rem] p-[15px] rounded-[6px] origin-[50%_-170px] backdrop-blur-2xl bg-white/[0.04]"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {hasSubMenu &&
              menu.subMenu.map((submenu, i) => (
                <div
                  className="relative cursor-pointer hover:text-[#2980B9]"
                  key={i}
                >
                  {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                    <p className="text-sm mb-4 text-[#34495E]">
                      {menu?.subMenuHeading?.[i]}
                    </p>
                  )}
                  <Link
                    className="flex-center gap-x-4 group/menubox"
                    to={submenu.path}
                  >
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-[#2980B9] group-hover/menubox:text-[#FFFFFF] duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold">{submenu.name}</h6>
                      <p className="text-sm">{submenu.desc}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
