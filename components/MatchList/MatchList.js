import MatchCard from '../MatchCard/MatchCard';
import { ACTIVE_FILTER } from '../../utils/constant';

// MatchList component filters and displays a list of matches
const MatchList = ({ matches, activeFilter }) => {
  // Filter matches based on the active filter
  const filterCriteria = ACTIVE_FILTER[activeFilter];
  const filteredMatches = matches.filter((match) => {
    return filterCriteria === 'All' || match.status.type === filterCriteria;
  });

  // Render the filtered matches as MatchCard components
  return (
    <>
      {filteredMatches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </>
  );
};

export default MatchList;
