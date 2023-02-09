import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import FormBox from './components/FormBox/FormBox.component';

describe('App component', () => {
  it('should render the app component', () => {
    render(<App />);

    const appContainer = screen.getByTestId('app-container');

    expect(appContainer).toBeInTheDocument();
  });

  it('should render the FormBox', () => {
    render(<App />);

    const formBoxComponent = screen.getByTestId('form-box');

    expect(formBoxComponent).toBeInTheDocument();
  });
});

