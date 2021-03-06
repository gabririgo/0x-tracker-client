import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import { BASE_CURRENCY } from '../../currencies/constants';
import { colors } from '../../../styles/constants';
import formatToken from '../../../util/format-token';
import LocalisedAmount from '../../currencies/components/localised-amount';
import TokenAmount from './token-amount';

const TokenListItemVolume = ({ token }) => {
  const tradeCount = _.get(token, 'stats.24h.trades', 0);
  const volume = _.get(token, 'stats.24h.volume');

  if (tradeCount === 0) {
    return '-';
  }

  if (volume[BASE_CURRENCY] === 0) {
    return (
      <>
        {formatToken(volume.token)} {token.symbol}
      </>
    );
  }

  return (
    <>
      <LocalisedAmount amount={volume[BASE_CURRENCY]} />
      <br />
      <span
        css={`
          color: ${colors.stormGray};
          font-size: 0.8rem;
        `}
      >
        <TokenAmount amount={volume.token} linked={false} token={token} />
      </span>
    </>
  );
};

TokenListItemVolume.propTypes = {
  token: PropTypes.object.isRequired,
};

export default TokenListItemVolume;
