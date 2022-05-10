import { render, screen } from '@testing-library/react';
import App from './App';

const getAboutUsLink = require("./indexx");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});

