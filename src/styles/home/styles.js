import styled from 'styled-components';
// Styled container for layout
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  padding: 1rem;
`;

// Styled container for filters
const FilterContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

// Styled container for the main container
const MainContainer = styled.div`
  flex: 2;
  padding: 1rem;
`;

// Styled h1 element
const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export { Container, FilterContainer, MainContainer, H1 }