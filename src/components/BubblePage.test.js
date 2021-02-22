import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import userEvent from "@testing-library/user-event";
import { fetchColors as mockFetchColors } from '../api/fetchColors';

jest.mock('../api/fetchColors');

test("Renders BubblePage without errors", () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce({data: []});
  render(<BubblePage />);

  expect(() => screen.getByText('Loading...')).not.toThrow();
});


test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  
  mockFetchColors.mockResolvedValueOnce({
    data: [
      {
        color: "blueviolet",
        code: {
          hex: "#8a2be2",
        },
        id: 1,
      },
    ],
  });
  render(<BubblePage />);

  const bubble = await waitFor(() => screen.getAllByTestId('bubble'));

  expect(bubble).toHaveLength(1)
  
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading