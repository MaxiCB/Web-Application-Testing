import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from '../components/Display';

describe("<Display />", () => {
    it("<Display/> Renders", () => {
      render(<Display />);
    });

    it("DISPLAYS HOME", () => {
      const display = render(<Display />);
      display.getByText(/HOME/);
    });

    it("DISPLAYS AWAY", () => {
      const display = render(<Display />);
      display.getByText(/AWAY/);
    });

    it("DISPLAYS INNING", () => {
      const display = render(<Display />);
      display.getByText(/INNING/);
    });

    it("DISPLAYS BALL", () => {
      const display = render(<Display />);
      display.getByText(/BALL/);
    });

    it("DISPLAYS STRIKE", () => {
      const display = render(<Display />);
      display.getByText(/STRIKE/);
    });

    it("DISPLAYS PUT", () => {
      const display = render(<Display />);
      display.getByText(/OUT/);
    });
});