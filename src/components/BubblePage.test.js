import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import App from '../App';
import userEvent from "@testing-library/user-event";

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)

  const colors = screen.getByText('colors');
  const bubbles = screen.getByText('bubbles');

  expect(colors).toBeInTheDocument();
  expect(bubbles).toBeInTheDocument();
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  render(<App />);

  const username = screen.getByPlaceholderText('Luke');
  const password = screen.getByPlaceholderText('password');
  const button = screen.getByRole('button');

  userEvent.type(username, 'Lambda School');
  userEvent.type(password, 'i<3Lambd4');

  expect(username).toHaveValue('Lambda School');
  expect(password).toHaveValue('i<3Lambd4');

  userEvent.click(button);

  const colors = screen.getByText('colors');
  const bubbles = screen.getByText('bubbles');

  expect(colors).toBeInTheDocument();
  expect(bubbles).toBeInTheDocument();
  
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading