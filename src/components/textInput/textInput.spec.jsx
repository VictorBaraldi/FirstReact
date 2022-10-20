const { render, screen } = require('@testing-library/react');
const { default: userEvent } = require('@testing-library/user-event');
const { TextInput } = require('./app');

describe('<Posts />', () => {
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="um valor qualquer" />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue="um valor qualquer" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
