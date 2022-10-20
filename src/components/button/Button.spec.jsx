const { render, screen } = require('@testing-library/react');
const { default: userEvent } = require('@testing-library/user-event');
const { Button } = require('./app');

describe('<Button />', () => {
  it('should render the button with the text', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('should be desable when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More" disabled={true} onClick={fn} />);
    expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled();
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load More" disabled={true} onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
