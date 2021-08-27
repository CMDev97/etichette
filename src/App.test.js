import { render, screen } from '@testing-library/react';

import SelectProvince from "./component/select/SelectProvince";

test('render select province', () => {
  render(<SelectProvince />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
