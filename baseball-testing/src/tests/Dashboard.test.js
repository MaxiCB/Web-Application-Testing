import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from '../components/Dashboard';

describe("<Dashboard/>", () => {
    it("<Dashboard/> Renders", () => {
      render(<Dashboard />);
    });
  });