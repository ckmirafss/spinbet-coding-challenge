import styled, { css } from 'styled-components';

// Styled button component with conditional styling
const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight:bold;
  ${({ active }) =>
    active
      ? css`
          background-color: #ccc;
          color: #333;
        `
      : css`
          background-color: #fff;
          color: #333;
          border-bottom: 1px solid #ccc;
        `}
`;

// Styled span component for label
const Span = styled.span`
  font-weight: bold;
  background-color: #333;
  padding: 5px 10px;
  color: #fff;
`;

export { Button, Span }