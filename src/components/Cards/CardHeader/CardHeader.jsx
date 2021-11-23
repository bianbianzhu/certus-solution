import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7eb0cc;
  font-size: 2rem;

  span {
    font-size: ${(props) =>
      props.icon ? (props.isExpand ? "1.5rem" : "1.6rem") : "1.5rem"};
    font-weight: ${(props) =>
      props.icon ? (props.isExpand ? "700" : "400") : "700"};
    text-transform: uppercase;
    letter-spacing: ${(props) =>
      props.icon ? (props.isExpand ? ".32rem" : "0") : ".32rem"};
    color: #224a7e;
  }

  button {
    display: inline-block;
    outline: none;
    background: unset;
    border: none;
    color: currentColor;
    font-size: inherit;
    line-height: inherit;
    padding: unset;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    transform: rotate(${(props) => (props.isIconRotated ? "180deg" : "0deg")});
    transition: all 0.5s linear;
  }
`;

const CardHeader = ({
  textContent,
  icon,
  isExpand,
  toggleHeight,
  isIconRotated,
  setIsIconRotated,
  disabled = false,
}) => {
  const buttonClickHandler = () => {
    toggleHeight();
    !isIconRotated ? setIsIconRotated(true) : setIsIconRotated(false);
  };

  return (
    <StyledHeader icon={icon} isExpand={isExpand} isIconRotated={isIconRotated}>
      <span>{textContent}</span>
      {isExpand && (
        <button
          disabled={disabled}
          onClick={() => {
            buttonClickHandler();
          }}
        >
          {icon}
        </button>
      )}
      {!isExpand && <button>{icon}</button>}
    </StyledHeader>
  );
};

export default CardHeader;
