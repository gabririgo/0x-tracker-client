import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import useLocation from 'react-use/lib/useLocation';

import { colors } from '../styles/constants';
import Link from './link';

const NavigationLink = styled(Link)`
  color: ${props => (props.active ? 'currentColor' : colors.stormGray)};
  display: inline-block;
  margin-right: 1rem;

  &:hover {
    color: currentColor;
    text-decoration: none;
  }
`;

const NavigationItem = ({ href, title }) => {
  const location = useLocation();
  const active = location.pathname.startsWith(href);

  return (
    <NavigationLink active={active} aria-current={active} href={href}>
      {title}
    </NavigationLink>
  );
};

NavigationItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavigationItem;
