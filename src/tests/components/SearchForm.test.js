import { render } from "@testing-library/react";
import React from "react";
import SearchForm from "../../components/SearchForm";
import setSearchText from "../../components/App";
import handleCitySearch from "../../components/App";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText=""
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("button displays correct text", () => {
    const { getByText } = render(
      <SearchForm
        searchText=""
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
    );
    expect(getByText("Search")).toBeInstanceOf(HTMLButtonElement);
  });
});
