import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@/components/atoms/icon/index";
import { IconList } from "@/components/atoms/icon/constant";

interface LinkProps {
  name: IconList;
  to: string;
}

export const IconLink: React.FC<LinkProps> = ({ to, name }) => {
  return (
    <>
      <Link to={to}>
        <Icon name={name} width="l" height="l" />
      </Link>
    </>
  );
};
