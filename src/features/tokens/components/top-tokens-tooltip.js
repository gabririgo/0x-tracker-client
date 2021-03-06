import _ from 'lodash';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';

import ChartTooltip from '../../../components/chart-tooltip';
import formatCurrency from '../../../util/format-currency';
import formatToken from '../../../util/format-token';

const TopTokensTooltip = ({ currency, payload }) => {
  if (_.isNil(payload) || _.isEmpty(payload)) {
    return null;
  }

  const { share, token, tokenVolume, volume } = payload[0].payload;

  return (
    <ChartTooltip
      items={[
        {
          label: 'share',
          value:
            share === 0 ? 'Unknown' : `${numeral(share).format('0.[00]')}%`,
        },
        {
          label: `volume (${currency})`,
          value: volume === 0 ? 'Unknown' : formatCurrency(volume, currency),
        },
        {
          label: `volume (${token.symbol})`,
          value: formatToken(tokenVolume),
        },
      ]}
      title={token.name}
    />
  );
};

TopTokensTooltip.propTypes = {
  currency: PropTypes.string.isRequired,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      payload: PropTypes.shape({
        share: PropTypes.number.isRequired,
        token: PropTypes.shape({
          name: PropTypes.string.isRequired,
          symbol: PropTypes.string.isRequired,
        }).isRequired,
        tokenVolume: PropTypes.string.isRequired,
        volume: PropTypes.number.isRequired,
      }),
    }),
  ),
};

TopTokensTooltip.defaultProps = {
  payload: undefined,
};

export default TopTokensTooltip;
