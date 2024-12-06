import "@testing-library/jest-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";
import ItemForm from "../components/ItemForm"; // Ensure the path is correct
import App from "../components/App"; // Ensure the path is correct

// Test: Verify the `onItemFormSubmit` callback is called correctly
test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.getByLabelText(/Category/i), {
    target: { value: "Dessert" },
  });

  fireEvent.submit(screen.getByRole("button", { name: /Add to List/i }));

  // Check if the callback was called with the correct data
  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: "Ice Cream",
      category: "Dessert",
    })
  );
});

// Test: Verify that a new item is added to the list when the form is submitted
test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  // Scope the query to the specific form for adding new items
  const form = screen.getByRole("form", { name: /add new item/i });

  // Count the number of items with the 'Dessert' category before adding a new one
  const dessertCount = screen.queryAllByText(/Dessert/i).length;

  // Simulate user input within the specific form
  fireEvent.change(within(form).getByLabelText(/Name/i), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(within(form).getByLabelText(/Category/i), {
    target: { value: "Dessert" },
  });

  // Submit the form
  fireEvent.submit(within(form).getByRole("button", { name: /Add to List/i }));

  // Verify the new item is in the document
  expect(screen.getByText(/Ice Cream/i)).toBeInTheDocument();

  // Verify the number of items with 'Dessert' has increased
  expect(screen.queryAllByText(/Dessert/i).length).toBe(dessertCount + 1);
});
