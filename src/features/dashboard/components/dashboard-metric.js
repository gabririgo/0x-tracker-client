import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/constants';
import Card from '../../../components/card';

const DashboardMetricTitle = styled.dt`
  color: ${colors.stormGray};
  font-size: 0.8rem;
  font-weight: normal;
  margin: 0;
  text-transform: uppercase;
`;

const DashboardMetricValue = styled.dd`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

const DashboardMetric = ({ className, title, children }) => (
  <Card className={className} padded>
    <dl css="margin: 0;">
      <DashboardMetricTitle>{title}</DashboardMetricTitle>
      <DashboardMetricValue>{children}</DashboardMetricValue>
    </dl>
  </Card>
);

DashboardMetric.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

DashboardMetric.defaultProps = {
  className: undefined,
};

export default DashboardMetric;
