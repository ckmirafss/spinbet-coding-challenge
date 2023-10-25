import styled from 'styled-components';

// Define a styled component for the Filters heading
const FiltersHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #000;
  padding-bottom: 1rem;
`;

// Define a styled component for the container div
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export { FiltersHeading, FilterContainer }