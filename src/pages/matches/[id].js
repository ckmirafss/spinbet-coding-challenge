import * as Styles from '../../styles/matches/styles'
import { MATCHES_STATUS, TIME_STAMP_OPTIONS, addDaySuffix } from '../../../utils/constant'
import Head from 'next/head'
const MatchDetails = ({ data }) => {
  const { status, liveStatus, timestamp, country, name, homeScore, awayScore, homeTeam, awayTeam } = data;
  // Extract the "type" from data's "status" field
  const { type } = status;

  // Extract live status and determine if it has a value
  const hasValue = liveStatus === 'FT' ? '100' : liveStatus === 'HT' ? '50' : liveStatus === '-' || liveStatus === 'Canceled' ? '0' : liveStatus;

  // Format the date using the defined options
  const formattedDate = new Date(timestamp).toLocaleString('en-US', TIME_STAMP_OPTIONS);

  // Extract and format the day with suffix
  const DAY = new Date(timestamp).getDate();
  const formattedDay = addDaySuffix(DAY);

  // Replace the day with the formatted day in the final date
  const finalFormattedDate = formattedDate.replace(DAY, formattedDay);

  return (
    <>
      {/* Meta tag title */}
      <Head>
        <title>{name}</title>
      </Head>
      <Styles.Container>
        <Styles.MatchDetailsContainer>
          {/* Display the country name */}
          <Styles.MatchCountry>{country}</Styles.MatchCountry>

          {/* Display the match name */}
          <Styles.MatchTitle>{name}</Styles.MatchTitle>

          {/* Display the match status with dynamic content */}
          <Styles.MatchStatus type={type}>
            {type === MATCHES_STATUS.NOT_STARTED ? finalFormattedDate
              : type === MATCHES_STATUS.FINISHED ? 'Ended'
                : type === MATCHES_STATUS.INPROGRESS ? 'Live'
                  : type === MATCHES_STATUS.CANCELED ? 'Cancelled'
                    : ''}
          </Styles.MatchStatus>

          {/* Display the match score */}
          <Styles.MatchScore>
            {homeScore.current || 0} - {awayScore.current || 0}
          </Styles.MatchScore>

          {/* Display match team information and status indicator */}
          <Styles.MatchInfo>
            <Styles.MatchTeam>{homeTeam.name}</Styles.MatchTeam>{' '}
            {/* Status indicator with dynamic style */}
            <Styles.StatusIndicator status={liveStatus} style={{ '--p': hasValue === '-' ? 0 : hasValue }}>
              {liveStatus === '-' || liveStatus === 'Canceled' ? ''
                : !isNaN(liveStatus) ? liveStatus + "'" : liveStatus}
            </Styles.StatusIndicator>
            <Styles.MatchTeam>{awayTeam.name}</Styles.MatchTeam>
          </Styles.MatchInfo>
        </Styles.MatchDetailsContainer>
      </Styles.Container>
    </>
  );
};

export default MatchDetails;

// Server-side function for fetching match data
export async function getServerSideProps(context) {
  try {
    // Get the "id" parameter from the context
    const { id } = context.params;

    // Define the API endpoint
    const apiUrl = `${process.env.BASE_URL}/api/matches/${id}`;

    // Fetch match data from the API using the "id"
    const res = await fetch(apiUrl);

    // Check if the response status code indicates success (HTTP 200-299)
    if (!res.ok) {
      // If the response status code is not in the 200-299 range, throw an error
      throw new Error(`API request failed with status: ${res.status}`);
    }

    // Parse the API response as JSON
    const data = await res.json();

    // Return the data as props for the component
    return { props: { data } };
  } catch (error) {
    // Handle any errors that may occur during the fetch and provide a custom error message
    throw new Error(`An error occurred while fetching data: ${error.message}`);
  }
}
