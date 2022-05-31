import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/footer";
import Signup from "../components/signup";
import { login } from "../actions/auth";

describe("Footer", () => {
  it("should render the correct content", async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
});

describe("Signup", () => {
  it("should render the correct content", async () => {
    render(
      <BrowserRouter>
      <Signup />
    </BrowserRouter>
    )
  })
})

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Signup/>
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/Sign up/i);
  expect(keyword.length).toBe(2);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Signup/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/Have an account?/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/Lento/i);
  expect(keyword.length).toBe(2);
});
