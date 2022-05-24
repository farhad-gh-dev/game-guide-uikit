import React from "react";
import DefaultProfileImage from "./DefaultAvatar";
import { StyledAvatar, ProfileBadge } from "./Avatar.styled";

export type AvatarProps = {
  userType?: string;
  imageSrc?: string;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  userType = "",
  imageSrc = "",
  className = "",
}) => {
  return (
    <StyledAvatar imageSrc={imageSrc} className={className}>
      {!imageSrc && <DefaultProfileImage />}
      {userType ? (
        <ProfileBadge data-testid="avatar-type">{userType}</ProfileBadge>
      ) : null}
    </StyledAvatar>
  );
};

export default Avatar;
