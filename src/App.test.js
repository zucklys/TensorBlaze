// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TensorBlaze title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TensorBlaze/i);
    expect(titleElement).toBeInTheDocument();
});
