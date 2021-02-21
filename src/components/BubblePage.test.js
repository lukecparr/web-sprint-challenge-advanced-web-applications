import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import userEvent from "@testing-library/user-event";
import { getColors as mockGetColors } from '../api/getColors';

jest.mock('../api/getColors');

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  render(<BubblePage />);

  mockGetColors.mockResolvedValueOnce({
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
  
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading