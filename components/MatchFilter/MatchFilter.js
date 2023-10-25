import FilterButton from '../FilterButton/FilterButton'
import * as Styles from './styles'
import { ACTIVE_FILTER, MATCHES_STATUS } from '../../utils/constant'
//  Calculates the count of matches based on the selected filter.
const getFilterCount = (matches, filter) => {
  if (filter === 'All') {
    return matches.length;
  }
  const statusToCount = ACTIVE_FILTER[filter];

  return matches.filter((match) => match.status.type === statusToCount).length;
};



const MatchFilter = ({ activeFilter, onFilterChange, matches }) => {
  return (
    <Styles.FilterContainer>
      {/* Display the heading for filters */}
      <Styles.FiltersHeading>Filters</Styles.FiltersHeading>

      {/* Filter button for "All" with dynamic activation and count */}
      <FilterButton text={ACTIVE_FILTER.All} active={activeFilter === ACTIVE_FILTER.All} onClick={() => onFilterChange(ACTIVE_FILTER.All)} count={getFilterCount(matches, ACTIVE_FILTER.All)} />

      {/* Filter button for "Result" with dynamic activation and count */}
      <FilterButton text="Result" active={activeFilter === 'Result'} onClick={() => onFilterChange('Result')} count={getFilterCount(matches, 'Result')} />

      {/* Filter button for "Live" with dynamic activation and count */}
      <FilterButton text="Live" active={activeFilter === 'Live'} onClick={() => onFilterChange('Live')} count={getFilterCount(matches, 'Live')} />

      {/* Filter button for "Upcoming" with dynamic activation and count */}
      <FilterButton text="Upcoming" active={activeFilter === 'Upcoming'} onClick={() => onFilterChange('Upcoming')} count={getFilterCount(matches, 'Upcoming')} />
    </Styles.FilterContainer>

  );
};

export default MatchFilter;
