import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from '../components/Dashboard';

describe("<Dashboard />", () => {
    it("<Dashboard/> Renders", () => {
      render(<Dashboard/>);
    });

    it("Dashboard STRIKE", () => {
      const strike = render(<Dashboard/>);
      strike.getByText(/STRIKE/);
    });

    it("Dashboard AWAY", () => {
      const away = render(<Dashboard />);
      away.getByText(/BALL/);
    });

    it("Dashboard INNING", () => {
      const inning = render(<Dashboard />);
      inning.getByText(/FOUL/);
    });

    it("Dashboard BALL", () => {
      const ball = render(<Dashboard />);
      ball.getByText(/HIT/);
    });
});