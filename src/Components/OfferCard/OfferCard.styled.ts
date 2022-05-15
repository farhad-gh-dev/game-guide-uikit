import styled from "styled-components";
import { typography, breakpoint } from "../../Styles/styles";

export const StyledOfferCard = styled.div`
  padding-right: 15px;
  margin-bottom: 40px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    padding-right: 20px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    padding-right: 25px;
    margin-bottom: 70px;
  }
`;

export const StyledImageContainer = styled.a`
  position: relative;
  height: 184px;
  border-radius: 16px;
  background-color: gray;
  margin-bottom: 20px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    height: 190px;
    border-radius: 20px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    height: 225px;
    border-radius: 25px;
    margin-bottom: 25px;
  }
`;

export const StyledCardImage = styled.div<{
  CardImageSrc?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    border-radius: 20px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    border-radius: 25px;
  }

  div {
    width: 100%;
    height: 100%;
    transition: 200ms ease-in-out;

    ${(props) =>
      props.CardImageSrc &&
      `
      background-image: url(${props.CardImageSrc});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    `};

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const StyledRatingContainer = styled.div`
  position: absolute;
  bottom: 13px;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledTextArea = styled.div`
  @media (min-width: ${breakpoint.laptopScreen}px) {
    margin-left: 7px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    margin-left: 15px;
  }
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (min-width: ${breakpoint.largeScreen}px) {
    margin-bottom: 25px;
  }

  .offer-card-title {
    letter-spacing: 0.03em;
  }
`;

export const StyledPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .offer-price-label {
    letter-spacing: 0.03em;
    opacity: 0.5;
  }

  .offer-price {
    font-size: ${typography.size.text_14};
    font-weight: ${typography.weight.extra_bold};

    @media (min-width: ${breakpoint.laptopScreen}px) {
      font-size: ${typography.size.text_18};
    }

    @media (min-width: ${breakpoint.largeScreen}px) {
      font-size: ${typography.size.text_20};
    }
  }
`;
