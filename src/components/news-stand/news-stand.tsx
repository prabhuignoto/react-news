import * as React from 'react';

import { IArticleCard } from '../../models/view/IArticleCard';
import { INewsStand } from '../../models/view/INewsStand';
import ArticleCard from './article-card';
import { ArticlesWrapper, NewsStandWrapper } from './styles';

const NewsStand: React.SFC<INewsStand> = ({articleCards, standSize}) => {
  return (
    <NewsStandWrapper>
      <ArticlesWrapper>
        {articleCards.map<React.ReactElement<IArticleCard>>(
          article => <ArticleCard {...article} key={article.id} size={standSize} />)
        }
      </ArticlesWrapper>
    </NewsStandWrapper>
  )
}

export default NewsStand;
