import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/footer";
import Signup from "../components/signup";
import SignIn from '../components/signin';
import { login } from "../actions/auth";
import SignUp from "../components/signup";

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
	const keyword = screen.getByText(/Have/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Signup/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/an/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Signup/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/account?/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Signup/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/sign in/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Signup/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/Google/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Signup/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/with/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Signup/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/continue/i);
  expect(keyword).toBeInTheDocument();
});

describe("Signin", () => {
	it("should render the correct content", async () => {
	  render(
		<BrowserRouter>
		<SignIn />
	  </BrowserRouter>
	  )
	})
  })

  it('should render same text ', () => {
	render(
		<BrowserRouter>
			<SignIn/>
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/Sign in/i);
  expect(keyword.length).toBe(2);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<SignIn/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/Not/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<SignIn/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/member/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<SignIn/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/Forgot/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<SignIn/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/Register/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<SignIn/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/continue/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<SignIn/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/Google/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<SignIn/>
		</BrowserRouter>
	);
	const keyword = screen.getByText(/with/i);
  expect(keyword).toBeInTheDocument();
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<SignIn/>
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/\?/i);
  expect(keyword.length).toBe(2);
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


const mockedProfile = jest.fn();

it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <SignUp genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Email/i);
    fireEvent.select(emailElement, { target: { value: "zahramomeninezhad@gmail.com" } });
    expect(emailElement.value).toBe("zahramomeninezhad@gmail.com");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <SignIn genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Password/i);
    fireEvent.select(emailElement, { target: { value: "zahra1380" } });
    expect(emailElement.value).toBe("zahra1380");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <SignIn genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Email/i);
    fireEvent.select(emailElement, { target: { value: "zahramomeninezhad@gmail.com" } });
    expect(emailElement.value).toBe("zahramomeninezhad@gmail.com");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <SignUp genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/First Name/i);
    fireEvent.select(emailElement, { target: { value: "zahra" } });
    expect(emailElement.value).toBe("zahra");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <SignUp genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/First Name/i);
    fireEvent.select(emailElement, { target: { value: "zahra" } });
    expect(emailElement.value).toBe("zahra");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <SignUp genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Last Name/i);
    fireEvent.select(emailElement, { target: { value: "momeni" } });
    expect(emailElement.value).toBe("momeni");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <SignUp genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/User Name/i);
    fireEvent.select(emailElement, { target: { value: "zahra_mnd" } });
    expect(emailElement.value).toBe("zahra_mnd");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <SignUp genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Confirm Password/i);
    fireEvent.select(emailElement, { target: { value: "zahra1380" } });
    expect(emailElement.value).toBe("zahra1380");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <SignIn genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Password/i);
    fireEvent.select(emailElement, { target: { value: "zahra1380" } });
    expect(emailElement.value).toBe("zahra1380");
  });

