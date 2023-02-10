import { render, screen } from "@testing-library/react";
import FormBox from "./FormBox.component";

describe('FormBox component', () => {
  it('should render a form with a single input', () => {
    render(<FormBox getCityWeather={jest.fn()} />);

    const formBox = screen.getByTestId('form-box');

    expect(formBox).toBeInTheDocument();
  });
});
