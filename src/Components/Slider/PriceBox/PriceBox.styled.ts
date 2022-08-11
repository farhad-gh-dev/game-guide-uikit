import styled from "styled-components";
import { color, typography, breakpoint } from "../../../Styles/styles";

export const StyledPriceBox = styled.div`
  position: relative;
  display: inline-block;
  padding: 7px 50px 7px 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);
  background-color: ${color.lightest};
  border-radius: 10px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    padding: 11px 90px 11px 30px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    padding: 12px 105px 12px 35px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }
`;

export const TextArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 116px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    width: 191px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    width: 214px;
  }

  .price-label {
    opacity: 0.55;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    color: black;
    @media (min-width: ${breakpoint.laptopScreen}px) {
      font-size: ${typography.size.text_18};
    }
    @media (min-width: ${breakpoint.largeScreen}px) {
      font-size: ${typography.size.text_20};
    }
  }
  div {
    width: 1px;
    height: 25px;
    background-color: rgba(0, 0, 0, 0.3);
    margin-left: 8px;

    @media (min-width: ${breakpoint.laptopScreen}px) {
      height: 45px;
      margin-left: 25px;
    }
    @media (min-width: ${breakpoint.largeScreen}px) {
      height: 55px;
      margin-left: 31px;
    }
  }
`;

export const ButtonContainer = styled.div<{ isInBasket?: boolean }>`
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: ${breakpoint.laptopScreen}px) {
    right: -60px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    right: -75px;
  }

  button,
  a {
    width: 70px;
    height: 30px;

    @media (min-width: ${breakpoint.laptopScreen}px) {
      width: 130px;
      height: 52px;
    }
    @media (min-width: ${breakpoint.largeScreen}px) {
      width: 150px;
      height: 60px;
    }

    ${(props) =>
      props.isInBasket &&
      `
        background-color: ${color.lightest};
        color: ${color.primary};
        border: 2px solid ${color.primary};
        font-weight: ${typography.weight.regular};

        @media (min-width: ${breakpoint.laptopScreen}px) {
          border: 3px solid ${color.primary};
          font-weight: ${typography.weight.bold};
        }
    `};
  }
`;
