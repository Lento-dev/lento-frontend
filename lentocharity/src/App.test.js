import React from 'react'
import { cleanup,render, screen, act ,wait,click,fireEvent} from '@testing-library/react';
import App from './App';
import ScrollableTabsButtonForce from './components/tabs';
import axios from 'axios';
import Reprofile from './components/Reprofile';
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import SignIn from "./components/signin";
import { connect } from 'react-redux';
import { shallow } from 'enzyme';

afterEach(cleanup)

jest.mock('axios')

// test('renders tabs in profile', () => {
//   render(<ScrollableTabsButtonForce data={{bio: "**************************", city: "naghadeh",country: "Iran",cover: null,date_birth: "2022-05-10",date_joined: "2022-05-05T07:38:07.995707Z",education: null,email: "jalal@gmail.com",experience: "------------------------------",first_name: "fatemeh",gender: "female",image: "http://127.0.0.1:8000/media/a2.jpg",job: "student",last_name: "jalalvand",phone: null,province: "azarbaijan gharbi",region: null,username: "jalal"}} />);
//   const linkElement = screen.getByText( /fatemeh/i);
//   expect(linkElement).toBeInTheDocument();
// });


// describe('Reprofile testing => ' , () => {
//   it(' Click the View Details button , Go to the details page ', () => {
  
  
//   const { history } = render(<Reprofile />)

//     expect(axios).toHaveBeenCalledTimes(1)  
   
//   })
// });


// describe(' Test component page ', () => {
// it(' sigin axios ', () => {

// const { history } = render(connect(<SignIn />))
//     // wait(() => {
//       expect(axios).toHaveBeenCalledTimes(0)
//     // })

// render(connect(<SignIn />));

// })
// });



// describe(' Test component page ', () => {
//   it(' sign in location ', () => {
  
//   const history = createMemoryHistory()
  
//   render(connect(<SignIn />));
  
//   expect(history.location.pathname).toEqual("/") // Assert the specified route 
   
//   })
//   });
  
  
  // test('increment counter', () => {
  //   render(connect(<SignIn />));
 
  //   const signin = screen.getByRole('button',{name:'Sign in'});

  //   fireEvent.click(signin);
  //   expect(history.location.pathname).toEqual("/profile")
  //   expect(screen.getByTestId("signin")).toHaveTextContent("");
  // });