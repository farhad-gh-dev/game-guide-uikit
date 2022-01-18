import React from "react";
import DefaultProfileImage from "../../Assets/default-profile-image.png";
import { StyledAvatar, StyledProfileType } from "./Avatar.styled";

type Props = {
  type?: string;
  imageSrc?: string;
};

const Avatar: React.FC<Props> = ({ type = "", imageSrc = "" }) => {
  return (
    <StyledAvatar imageSrc={imageSrc ? imageSrc : DefaultProfileImage}>
      {type ? <StyledProfileType>{type}</StyledProfileType> : null}
    </StyledAvatar>
  );
};

export default Avatar;
