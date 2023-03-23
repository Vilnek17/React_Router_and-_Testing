 import { render, screen } from '@testing-library/react';
 import {MemoryRouter} from 'react-router-dom';
 import Posts from '../components/Posts';
 import SinglePost from "../components/SinglePost"

 describe( 'TEST POSTS', () => {
   test('Posts has title', () => {
     render(<Posts />);
     const titleElement = screen.getAllByText(/Posts/i)[0];
     expect(titleElement).toBeInTheDocument(); 
   });

   test('Posts has links', async () => {
       render(<MemoryRouter> <Posts /> </MemoryRouter>);
       const link = await screen.findAllByTestId('link');
       expect(link.length > 1);
  });
 })

