const { render, screen } = require('@testing-library/react');
const { PostCard } = require('./app');
const { postCardMock } = require('./mock');

const mock = postCardMock;

describe('<PostCard / >', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...mock} />);

    expect(screen.getByRole('img', { name: /title/i })).toHaveAttribute('src', mock.cover);
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
    expect(screen.getByText('body1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
