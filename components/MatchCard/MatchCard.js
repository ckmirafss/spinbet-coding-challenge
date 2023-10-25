import Link from 'next/link';
import * as Styles from './styles'
// MatchCard component displays a link to a match
const MatchCard = ({ match }) => {
  return (
    <Styles.MatchCardContainer data-testid="match-card">
      {/* Create a link to the specific match using its "id" */}
      <Link href={`/matches/${match.id}`}>
        {/* Display the match name as a link */}
        <Styles.MatchNameLink>{match.name}</Styles.MatchNameLink>
      </Link>
    </Styles.MatchCardContainer>
  );
};

export default MatchCard;
