import * as Styles from './styles'
// Filter button component with text, activation, and count
const FilterButton = ({ text, active, onClick, count }) => {
  return (
    <Styles.Button active={active} onClick={onClick}>
      {text} <Styles.Span active={active}>{count}</Styles.Span>
    </Styles.Button>
  );
};

export default FilterButton;
