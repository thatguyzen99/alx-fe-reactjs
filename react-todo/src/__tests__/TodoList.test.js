import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  const heading = screen.getByText(/Todo List/i);
  expect(heading).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add new todo/i), { target: { value: 'Test Todo' } });
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText(/Test Todo/i)).toBeInTheDocument();
});

test('toggles todo completion status', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText(/Learn React/i));
  expect(screen.getByText(/Learn React/i)).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getAllByText(/Delete/i)[0]);
  expect(screen.queryByText(/Learn React/i)).toBeNull();
});

test('does not add an empty todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.queryByText('')).toBeNull();
});
