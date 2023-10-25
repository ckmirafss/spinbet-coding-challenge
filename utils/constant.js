// Constants for match statuses
export const MATCHES_STATUS = {
  NOT_STARTED: 'notstarted',
  FINISHED: 'finished',
  INPROGRESS: 'inprogress',
  CANCELED: 'canceled'
}

// Constants for active filter options
export const ACTIVE_FILTER = {
  All: 'All',
  Result: MATCHES_STATUS.FINISHED,
  Live: MATCHES_STATUS.INPROGRESS,
  Upcoming: MATCHES_STATUS.NOT_STARTED
}


// Extract timestamp and define formatting options
export const TIME_STAMP_OPTIONS = {
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

// Function to add suffix to the day (e.g., "st," "nd," "rd," or "th")
export const addDaySuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  }
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};
