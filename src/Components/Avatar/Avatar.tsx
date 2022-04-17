import React from "react";
import DefaultProfileImage from "../../Assets/default-profile-image.png";
import { StyledAvatar, StyledProfileType } from "./Avatar.styled";

type Props = {
  userType?: string;
  imageSrc?: string;
  defaultImage?: string;
};

const Avatar: React.FC<Props> = ({
  userType = "",
  imageSrc = "",
  defaultImage = "",
}) => {
  return (
    <StyledAvatar imageSrc={imageSrc ? imageSrc : defaultImage}>
      {userType ? <StyledProfileType>{userType}</StyledProfileType> : null}
    </StyledAvatar>
  );
};

export default Avatar;
