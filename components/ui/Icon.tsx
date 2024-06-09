"use client";

import { FC } from "react";
import { IconContext } from "react-icons";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { IoKeypad } from "react-icons/io5";

export const iconNames = ["menu", "close", "location", "keypad"] as const;

export type IconName = (typeof iconNames)[number];

export const iconSizes = ["large", "small"] as const;

export type IconSize = (typeof iconSizes)[number];

export type IconPropTypes = {
  name: IconName | string;
  color?: string;
  size?: IconSize;
  onClick?: any;
  pointer?: boolean;
};

const selectIcon = (
  iconName: IconPropTypes["name"],
  size: IconSize | string
): JSX.Element => {
  switch (iconName) {
    case "menu":
      return <MdMenu />;
    case "close":
      return <MdOutlineClose />;
    case "location":
      return <FaLocationArrow />;
    case "keypad":
      return <IoKeypad />;
    default:
      return <></>;
  }
};

const selectIconSize = (iconSize?: string) => {
  switch (iconSize) {
    case "small":
      return "12px";
    case "large":
      return "50px";
    default:
      return "20px";
  }
};

const IconWrapper = ({ pointer, ...props }: any) => (
  <span style={pointer ? { cursor: "pointer" } : {}} {...props} />
);

const Icon: FC<IconPropTypes> = ({ name, color, size, onClick, pointer }) => (
  <IconContext.Provider
    value={{ color: color || "#fffff", size: selectIconSize(size) }}
  >
    <IconWrapper pointer={pointer} onClick={onClick}>
      {selectIcon(name, selectIconSize(size))}
    </IconWrapper>
  </IconContext.Provider>
);

export default Icon;
