import styled from 'styled-components';
// Container for match details
const Container = styled.div`
  width: 100%;
  background-color: #3d3d3d;
  color: #fff;
`;

// Container for match details display
const MatchDetailsContainer = styled.div`
  text-align: center;
  height: 100vh;
  height: 100vh;
  width: 100%;
  max-width: 50rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Match title
const MatchTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

// Display match country
const MatchCountry = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  text-transform: uppercase;
`;

// Display match score
const MatchScore = styled.h2`
  font-size: 4rem;
  margin: 2rem 0;
`;

// Container for match information
const MatchInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

// Display match team
const MatchTeam = styled.span`
  flex: 1;
  font-size: 1.6rem;
`;

// Display match status with dynamic color
const MatchStatus = styled.span`
  font-size: 1.6rem;
  text-transform: uppercase;
  color: ${props => {
    if (props.type === 'finished') {
      return '#43cd5b';
    } else if (props.type === 'inprogress') {
      return '#cbba25';
    } else if (props.type === 'canceled') {
      return '#f57586';
    } else {
      return '#fff';
    }
  }};
`;

// Status indicator with dynamic gradient and color
const StatusIndicator = styled.span.attrs((props) => ({
  status: props.status,
}))`
  // CSS custom property for calculating gradient angles
  --v: calc(((18 / 5) * var(--p) - 90) * 1deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 3px;
  font-size: 2rem;
  // Define background gradient based on the "status" prop
  background: linear-gradient(#3d3d3d, #3d3d3d) content-box,
${({ status }) => {
    if (status === 'FT') {
      return `
        linear-gradient(var(--v), transparent 50%, #43cd5b 0) 0/min(100%, (50 - var(--p)) * 100%),
        linear-gradient(to right, #43cd5b 50%, #43cd5b 0);
      `;
    } else if (status === 'HT') {
      return `
        linear-gradient(var(--v), transparent 50%, #43cd5b 0) 0/min(100%, (var(--p) - 50) * 100%),
        linear-gradient(to right, #f2f2f2 50%, #43cd5b 0);
      `;
    } else if (status === '-' || status === 'Canceled') {
      return `
        linear-gradient(var(--v), transparent 50%, #f2f2f2 0) 0/min(100%, (50 - var(--p)) * 100%),
        linear-gradient(to right, gray 50%, #f2f2f2 0);
      `;
    } else {
      return `
        linear-gradient(var(--v), transparent 50%, #43cd5b 0) 0/min(100%, (var(--p) - 50) * 100%),
    linear-gradient(to right, #f2f2f2 50%, #43cd5b 0)
      `;
    }
  }};
  color: ${({ status }) => (status === 'FT' ? '#43cd5b' : '#fff')};
`;


export { Container, MatchDetailsContainer, MatchTitle, MatchCountry, MatchScore, MatchInfo, MatchTeam, MatchStatus, StatusIndicator };