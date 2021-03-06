import _ from 'lodash';
import { compose, withProps } from 'recompose';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import qs from 'qs';

import { URL } from '../../../constants';
import Card from '../../../components/card';
import LoadingPage from '../../../components/loading-page';
import PageLayout from '../../../components/page-layout';
import TokenList from './token-list';
import TokensLoader from './tokens-loader';

const PAGE_SIZE = 50;

const TokensPage = ({ history, page }) => {
  const setPage = newPage => {
    history.push(`${URL.TOKENS}?page=${newPage}`);
  };

  return (
    <>
      <Helmet>
        <title>Traded Tokens</title>
      </Helmet>
      <TokensLoader limit={PAGE_SIZE} page={page}>
        {({ loadedPage, loading, pageCount, pageSize, recordCount, tokens }) =>
          loading ? (
            <LoadingPage />
          ) : (
            <PageLayout
              breadcrumbItems={[{ title: 'Tokens', url: URL.TOKENS }]}
              title="Traded Tokens"
            >
              <Card fullHeight>
                <TokenList
                  onPageChange={setPage}
                  page={loadedPage}
                  pageCount={pageCount}
                  pageSize={pageSize}
                  recordCount={recordCount}
                  tokens={tokens}
                />
              </Card>
            </PageLayout>
          )
        }
      </TokensLoader>
    </>
  );
};

TokensPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  page: PropTypes.number.isRequired,
};

const enhance = compose(
  withProps(({ location }) => ({
    querystring: qs.parse(location.search.substring(1)),
  })),
  withProps(({ querystring }) => ({
    page: _.toNumber(querystring.page) || 1,
  })),
);

export default enhance(TokensPage);
