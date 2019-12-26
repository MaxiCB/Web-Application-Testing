import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from '../components/Display';

describe("<Display />", () => {
    it("<Display/> Renders", () => {
      render(<Display />);
    });
  });