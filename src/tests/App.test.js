import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/footer";
import Signup from "../components/signup";
import SignIn from '../components/signin';
import SignUp from "../components/signup";
import UserInfo from '../components/editprofile';
import Setting from '../components/setting';
import Forms from "../components/forms";
import MediaControlCard from '../components/adcard';
import Foodadvertisment from '../components/foodadvertisment';
import Clothadvertisement from '../components/clothadvertisement';
import Serviceadvertisement from '../components/Serviceadvertisement';
import Formtabs from "../components/formstab";
import Navbar from '../components/navbar';


describe("Footer", () => {
  it("should render the correct content", async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
});

describe("Footer", () => {
  it("should render the correct content", async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
});


it('should render same text ', () => {
  render(
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
  );
  const keyword = screen.getAllByText(/LentoCharity/i);
  expect(keyword.length).toBe(1);
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
			<SignUp/>
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/\?/i);
  expect(keyword.length).toBe(1);
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
	const keyword = screen.getAllByText(/Contact/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/@/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/gmail/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/com/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/2022/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/©/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/Iran/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/is/i);
  expect(keyword.length).toBe(1);
});

// it('should render same text ', () => {
// 	render(
// 		<BrowserRouter>
// 			<Footer />
// 		</BrowserRouter>
// 	);
// 	const keyword = screen.getAllByText(/a/i);
//   expect(keyword.length).toBe(2);
// });

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/Tehran/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/Univeristy/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/of/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/use/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/technology/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/and/i);
  expect(keyword.length).toBe(2);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/science/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/to/i);
  expect(keyword.length).toBe(3);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/help/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/people/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/enjoy/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/Use/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/helping/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/people/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/098/i);
  expect(keyword.length).toBe(1);
});

it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/09912366384/i);
  expect(keyword.length).toBe(1);
});




it('should render same text ', () => {
	render(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);
	const keyword = screen.getAllByText(/Copyright/i);
  expect(keyword.length).toBe(1);
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
    fireEvent.select(emailElement, { target: { value: "parmidaasanaye@gmail.com" } });
    expect(emailElement.value).toBe("parmidaasanaye@gmail.com");
  });

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

  describe("edit profile", () => {
    it("should render the correct content", async () => {
      render(
        <BrowserRouter>
        <UserInfo />
      </BrowserRouter>
      )
    })
  })

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <UserInfo/>
      </BrowserRouter>
    );
    const keyword = screen.getByText(/Edit/i);
    expect(keyword).toBeInTheDocument();
  });

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <UserInfo/>
      </BrowserRouter>
    );
    const keyword = screen.getByText(/Profile/i);
    expect(keyword).toBeInTheDocument();
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <UserInfo genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/First Name/i);
    fireEvent.select(emailElement, { target: { value: "zahra" } });
    expect(emailElement.value).toBe("zahra");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <UserInfo genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Last Name/i);
    fireEvent.select(emailElement, { target: { value: "momeni" } });
    expect(emailElement.value).toBe("momeni");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <UserInfo genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/City/i);
    fireEvent.select(emailElement, { target: { value: "tehran" } });
    expect(emailElement.value).toBe("tehran");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <UserInfo genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Job/i);
    fireEvent.select(emailElement, { target: { value: "programmer" } });
    expect(emailElement.value).toBe("programmer");
  });


  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <UserInfo genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Job/i);
    fireEvent.select(emailElement, { target: { value: "doctor" } });
    expect(emailElement.value).toBe("doctor");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <UserInfo genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/About me/i);
    fireEvent.select(emailElement, { target: { value: "i am a good developer." } });
    expect(emailElement.value).toBe("i am a good developer.");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <UserInfo genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Phone Number/i);
    fireEvent.select(emailElement, { target: { value: "09912366384" } });
    expect(emailElement.value).toBe("09912366384");
  });
  
  
  // it("should render correct birthdate", async () => {
  //   render(
  //     <BrowserRouter>
  //       <UserInfo birthdate={null} setBirthdate={mockedProfile} />
  //     </BrowserRouter>
  //   );
  //   const ProfileElement = screen.getByLabelText(/Birthdate/i);
  //   fireEvent.select(ProfileElement, { target: { value: "05/13/2022" } });
  //   expect(ProfileElement.value).toBe("05/13/2022");
  // });
  
  // it("should render correct gender", async () => {
  //   render(
  //     <BrowserRouter>
  //       <UserInfo genValue={null} setGenValue={mockedProfile} />
  //     </BrowserRouter>
  //   );
  //   const ProfileElement = screen.getByLabelText(/Gender/i);
  //   fireEvent.select(ProfileElement, { target: { value: "Female" } });
  //   expect(ProfileElement.value).toBe("Female");
  // });

  // it("should render correct gender", async () => {
  //   render(
  //     <BrowserRouter>
  //       <UserInfo genValue={null} setGenValue={mockedProfile} />
  //     </BrowserRouter>
  //   );
  //   const ProfileElement = screen.getByLabelText(/Select Marital Status/i);
  //   fireEvent.select(ProfileElement, { target: { value: "Single" } });
  //   expect(ProfileElement.value).toBe("Single");
  // });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <UserInfo genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Phone Number/i);
    fireEvent.select(emailElement, { target: { value: "09123846632" } });
    expect(emailElement.value).toBe("09123846632");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <UserInfo genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Phone Number/i);
    fireEvent.select(emailElement, { target: { value: "0983333333" } });
    expect(emailElement.value).toBe("0983333333");
  });

  describe("edit profile", () => {
    it("should render the correct content", async () => {
      render(
        <BrowserRouter>
        <Setting />
      </BrowserRouter>
      )
    })
  })


  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <UserInfo genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Phone Number/i);
    fireEvent.select(emailElement, { target: { value: "87654321" } });
    expect(emailElement.value).toBe("87654321");
  });

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Setting/>
      </BrowserRouter>
    );
    const keyword = screen.getByText(/General/i);
    expect(keyword).toBeInTheDocument();
  });


  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Setting/>
      </BrowserRouter>
    );
    const keyword = screen.getByText(/General/i);
    expect(keyword).toBeInTheDocument();
  });

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Setting/>
      </BrowserRouter>
    );
    const keyword = screen.getByText(/Permission/i);
    expect(keyword).toBeInTheDocument();
  });


  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Setting/>
      </BrowserRouter>
    );
    const keyword = screen.getAllByText(/your/i);
    expect(keyword.length).toBe(2);
  });

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Setting/>
      </BrowserRouter>
    );
    const keyword = screen.getAllByText(/Change/i);
    expect(keyword.length).toBe(4);
  });

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Setting/>
      </BrowserRouter>
    );
    const keyword = screen.getAllByText(/email/i);
    expect(keyword.length).toBe(4);
  });

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Setting/>
      </BrowserRouter>
    );
    const keyword = screen.getAllByText(/Change/i);
    expect(keyword.length).toBe(4);
  });

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Setting/>
      </BrowserRouter>
    );
    const keyword = screen.getAllByText(/address/i);
    expect(keyword.length).toBe(3);
  });

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Setting/>
      </BrowserRouter>
    );
    const keyword = screen.getAllByText(/password/i);
    expect(keyword.length).toBe(8);
  });
  
  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <Setting genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Email Address/i);
    fireEvent.select(emailElement, { target: { value: "zahramomeninezhad@gmail.com" } });
    expect(emailElement.value).toBe("zahramomeninezhad@gmail.com");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <Setting genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Email Address/i);
    fireEvent.select(emailElement, { target: { value: "Parmida@gmail.com" } });
    expect(emailElement.value).toBe("Parmida@gmail.com");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <Setting genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Old password/i);
    fireEvent.select(emailElement, { target: { value: "zahraa1380" } });
    expect(emailElement.value).toBe("zahraa1380");
  });

  // it("should render correct username", async () => {
  //   render(
  //     <BrowserRouter>
  //       <Setting genValue={null} setGenValue={mockedProfile} />
  //     </BrowserRouter>
  //   );
  //   const emailElement = screen.getByLabelText(/New password/i);
  //   fireEvent.select(emailElement, { target: { value: "zahraa1381" } });
  //   expect(emailElement.value).toBe("zahraa1381");
  // });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <Setting genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Confirm new password/i);
    fireEvent.select(emailElement, { target: { value: "zahra1381" } });
    expect(emailElement.value).toBe("zahra1381");
  });

  describe("edit profile", () => {
    it("should render the correct content", async () => {
      render(
        <BrowserRouter>
        <Forms />
      </BrowserRouter>
      )
    })
  })

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Forms/>
      </BrowserRouter>
    );
    const keyword = screen.getAllByText(/food/i);
    expect(keyword.length).toBe(1);
  });

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Forms/>
      </BrowserRouter>
    );
    const keyword = screen.getAllByText(/cloth/i);
    expect(keyword.length).toBe(1);
  });

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Forms/>
      </BrowserRouter>
    );
    const keyword = screen.getAllByText(/service/i);
    expect(keyword.length).toBe(1);
  });

  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Forms/>
      </BrowserRouter>
    );
    const keyword = screen.getAllByText(/save/i);
    expect(keyword.length).toBe(1);
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <Forms genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/advertisement title/i);
    fireEvent.select(emailElement, { target: { value: "food" } });
    expect(emailElement.value).toBe("food");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <Forms genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Neighborhood address/i);
    fireEvent.select(emailElement, { target: { value: "mahalati" } });
    expect(emailElement.value).toBe("mahalati");
  });

  it("should render correct username", async () => {
    render(
      <BrowserRouter>
        <Forms genValue={null} setGenValue={mockedProfile} />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText(/Description/i);
    fireEvent.select(emailElement, { target: { value: "this is a test." } });
    expect(emailElement.value).toBe("this is a test.");
  });


  // describe("user pro", () => {
  //   it("should render the correct content", async () => {
  //     render(
  //       <BrowserRouter>
  //       <UserProfile />
  //     </BrowserRouter>
  //     )
  //   })
  // })

  // describe("edit profile", () => {
  //   it("should render the correct content", async () => {
  //     render(
  //       <BrowserRouter>
  //       <Navbar />
  //     </BrowserRouter>
  //     )
  //   })
  // })

  describe("food form", () => {
    it("should render the correct content", async () => {
      render(
        <BrowserRouter>
        <Foodadvertisment />
      </BrowserRouter>
      )
    })
  })





  describe("cloth form", () => {
    it("should render the correct content", async () => {
      render(
        <BrowserRouter>
        <Clothadvertisement />
      </BrowserRouter>
      )
    })
  })
  describe("service form", () => {
    it("should render the correct content", async () => {
      render(
        <BrowserRouter>
        <Serviceadvertisement />
      </BrowserRouter>
      )
    })
  })
  describe("form tabs", () => {
    it("should render the correct content", async () => {
      render(
        <BrowserRouter>
        <Formtabs />
      </BrowserRouter>
      )
    })
  })

  describe("form tabs", () => {
    it("should render the correct content", async () => {
      render(
        <BrowserRouter>
        <Formtabs />
      </BrowserRouter>
      )
    })
  })

  test('renders adcard', () => {
    render(<BrowserRouter>
      <MediaControlCard data={{Image : null , Title: 'blue' ,province:'Tehran',resourcetype:'cloth',expiration_date:'04.02.2022'}} key={2} />
    </BrowserRouter>);
    const linkElement = screen.getByText( /Tehran/i);
    expect(linkElement).toBeInTheDocument();
  })

  
  it('should render same text ', () => {
    render(
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
    );
    const keyword = screen.getAllByText(/LentoCharity/i);
    expect(keyword.length).toBe(1);
  });





  
  