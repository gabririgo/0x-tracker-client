import PropTypes from 'prop-types';
import React from 'react';

import { URL } from '../../../constants';
import Card from '../../../components/card';
import CardHeading from '../../../components/card-heading';
import LatestNews from './latest-news';
import Link from '../../../components/link';
import Pill from '../../../components/pill';

const LatestNewsCard = ({ className, compact, showImages }) => (
  <Card
    className={className}
    header={
      <>
        <CardHeading>Latest News</CardHeading>
        <Pill as={Link} href={URL.NEWS}>
          View More
        </Pill>
      </>
    }
    padded
  >
    <LatestNews compact={compact} showImages={showImages} />
  </Card>
);

LatestNewsCard.propTypes = {
  className: PropTypes.string,
  compact: PropTypes.bool,
  showImages: PropTypes.bool,
};

LatestNewsCard.defaultProps = {
  className: undefined,
  compact: undefined,
  showImages: undefined,
};

export default LatestNewsCard;
