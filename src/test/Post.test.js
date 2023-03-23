import { render, screen } from '@testing-library/react';
import Posts from '../components/Posts.js'

test('Posts has title', () => {
  render(<Posts />);
  const titleElements = screen.getAllByText(/Posts/i);
  expect(titleElements).toHaveLength(2);

});
