import { render } from "@testing-library/react";
import MatchList from "./MatchList";

describe("MatchList Component", () => {
  it("renders a list of matches", () => {
    const matches = [
      { id: 1, name: "Match 1", status: { type: "finished" } },
      { id: 2, name: "Match 2", status: { type: "inprogress" } },
    ];

    const { getAllByTestId } = render(<MatchList matches={matches} activeFilter="Result" />);

    const matchElements = getAllByTestId("match-card");
    expect(matchElements.length).toBe(1); // Only one match should be displayed based on the "Result" filter.
  });
});
