import { useState } from 'react';
import * as Styles from '../styles/home/styles'
import MatchList from '../../components/MatchList/MatchList';
import MatchFilter from '../../components/MatchFilter/MatchFilter';
import Head from 'next/head'

// Home component with filter functionality
const Home = ({ sportsData }) => {


  // State to manage active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Function to handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      {/* Meta tag title */}
      <Head>
        <title>Spinbet Coding Challenge</title>
      </Head>
      <Styles.Container>
        <Styles.FilterContainer>
          <MatchFilter activeFilter={activeFilter} onFilterChange={handleFilterChange} matches={sportsData} />
        </Styles.FilterContainer>
        <Styles.MainContainer>
          <Styles.H1>Match List</Styles.H1>
          <MatchList matches={sportsData} activeFilter={activeFilter} />
        </Styles.MainContainer>
      </Styles.Container>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    // Define the API endpoint
    const apiUrl = `${process.env.BASE_URL}/api/matches/sports`;

    // Fetch data from the API
    const response = await fetch(apiUrl);
    const sportsData = await response.json();

    return {
      props: {
        sportsData,
      },
    };
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    return {
      props: {
        sportsData: [],
      },
    };
  }
}
