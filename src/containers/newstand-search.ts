import { connect } from "react-redux";
import NewsStand from "../components/news-stand/news-stand";
import { IAppState } from '../models/view/IAppState';

const mapsStateToProps = (state: IAppState) => ({
  articleCards: state.news.newsArticles,
  standSize: state.options.newsStandSize
});

export default connect(mapsStateToProps, null)(NewsStand)