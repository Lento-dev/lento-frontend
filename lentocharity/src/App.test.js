import { render, screen } from '@testing-library/react';
import App from './App';

const getAboutUsLink = require("./indexx");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});


const isInteger = require("./isInteger");

test("isInteger passes for integer value", () => {
    expect(isInteger(1)).toBe(true);
});


// const editprofile = require("./components/editprofile");

// test("string", () => {
//   expect(editprofile("zahra").toBe("zahra"))
// })


it("keeps submit disabled when only password provided", () => {
  const { getByTestId } = render(<FormTest />);

  const password = getByTestId("account-delete-password");
  const submit = getByTestId("account-delete-submit");

  fireEvent.change(password, { target: { value: "password" } });
  expect(submit).toHaveClass("Mui-disabled");
});