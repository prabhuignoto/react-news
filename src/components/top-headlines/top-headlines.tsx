import * as React from "react";

import DarkMode from "../../containers/dark-mode";
import Filters from "../../containers/filters";
import NewsStandSizer from "../../containers/newsstand-sizer";
import NewsStand from '../../containers/newstand-headlines';
import SearchBox from "../../containers/search-box";
import { AppMode } from "../../enums/appMode";
import ITopHeadlines from "../../models/view/ITopHeadlines";
import SearchNews from "../news-stand/search-news";
import {
  AppModeWrapper,
  DarkModeBackdrop,
  FilterWrapper,
  Toolbar,
  Wrapper
} from "./styles";

const TopHeadlines: React.SFC<ITopHeadlines> = ({ appMode, searchTerm }) => {
  return (
    <Wrapper data-testid="rt-top-headlines">
      <FilterWrapper>
        <Filters />
      </FilterWrapper>
      <Toolbar appMode={appMode} className="columns is-multiline">
        <div className="column is-5-desktop is-12-tablet">
          <SearchBox />
        </div>
        <div className="column is-12-mobile is-6-tablet is-3-desktop">
          <AppModeWrapper>
            <DarkMode />
          </AppModeWrapper>
        </div>
        <div className="column is-12-mobile is-6-tablet is-4-desktop">
          <NewsStandSizer />
        </div>
      </Toolbar>
      { searchTerm ? <SearchNews appMode={appMode} term={searchTerm}/> : <NewsStand />}
      
      <DarkModeBackdrop show={appMode.value === AppMode.DARK ? 1 : 0} />
    </Wrapper>
  );
};

export default TopHeadlines;
