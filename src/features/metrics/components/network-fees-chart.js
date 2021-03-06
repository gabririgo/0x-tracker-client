import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { format as formatDate } from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../../styles/constants';
import formatCurrency from '../../../util/format-currency';
import NetworkFeesTooltip from './network-fees-tooltip';
import padMetrics from '../util/pad-metrics';
import sharedPropTypes from '../../../prop-types';

const formatAxisDate = date => formatDate(date, 'MMM DD');

const NetworkFeesChart = ({ data, localCurrency, period }) => {
  const paddedMetrics = padMetrics(data, period, {
    fees: '0',
    localizedFees: 0,
  });
  const sanitizedData = paddedMetrics.map(dataPoint => ({
    ...dataPoint,
    date: dataPoint.date.toISOString(),
  }));

  const formatYAxis = amount =>
    amount === 0 ? '' : formatCurrency(amount, localCurrency);

  return (
    <ResponsiveContainer>
      <AreaChart
        data={sanitizedData}
        margin={{ bottom: 0, left: 0, right: 0, top: 0 }}
      >
        <Area
          animationDuration={0}
          dataKey="localizedFees"
          fill={colors.periwinkleGray}
          fillOpacity={1}
          stroke={colors.indigo}
          strokeOpacity={0.6}
          strokeWidth={2}
          type="monotone"
        />
        <XAxis
          axisLine={false}
          dataKey="date"
          minTickGap={60}
          tick={{ fill: 'currentColor', fontSize: '0.9em' }}
          tickFormatter={formatAxisDate}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          dataKey="localizedFees"
          minTickGap={20}
          mirror
          padding={{ top: 25 }}
          tick={{ fill: 'currentColor', fontSize: '0.9em' }}
          tickFormatter={formatYAxis}
          tickLine={false}
        />
        <Tooltip
          content={<NetworkFeesTooltip localCurrency={localCurrency} />}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

NetworkFeesChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date).isRequired,
      fees: PropTypes.string.isRequired,
      localizedFees: PropTypes.number.isRequired,
    }),
  ).isRequired,
  localCurrency: PropTypes.string.isRequired,
  period: sharedPropTypes.timePeriod.isRequired,
};

export default NetworkFeesChart;
