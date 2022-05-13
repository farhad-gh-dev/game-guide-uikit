import React from "react";
import DefaultProfileImage from "./DefaultAvatar";
import { StyledAvatar, StyledProfileType } from "./Avatar.styled";

export type AvatarProps = {
  userType?: string;
  imageSrc?: string;
};

const Avatar: React.FC<AvatarProps> = ({ userType = "", imageSrc = "" }) => {
  return (
    <StyledAvatar imageSrc={imageSrc}>
      {!imageSrc && <DefaultProfileImage />}
      {userType ? <StyledProfileType>{userType}</StyledProfileType> : null}
    </StyledAvatar>
  );
};

export default Avatar;
