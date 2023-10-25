import styled from 'styled-components';

// Define a styled component for the MatchCard container
const MatchCardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
  &:hover {
    background-color: #ccc;
  }
`;

// Define a styled component for the match name with a link
const MatchNameLink = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
`;

export { MatchCardContainer, MatchNameLink }