import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    const heading = screen.getByText(/Todo List/i);
    expect(heading).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add new todo/i);
    const addButton = screen.getByText(/Add Todo/i);
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);
    expect(screen.getByText(/Test Todo/i)).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    const todoText = screen.getByText(/Learn React/i);
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoText); // Added reverse toggle check
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/Delete/i)[0];
    fireEvent.click(deleteButton);
    expect(screen.queryByText(/Learn React/i)).toBeNull();
  });

  test('does not add an empty todo', () => {
    render(<TodoList />);
    const addButton = screen.getByText(/Add Todo/i);
    fireEvent.click(addButton);
    expect(screen.queryAllByRole('listitem').length).toBe(2); // Matches your 2 initial todos
  });
});