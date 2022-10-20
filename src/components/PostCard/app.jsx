import P from 'prop-types';
import './style.css';

export const PostCard = ({ title, body, id, cover }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>
          {title} {id}
        </h1>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
  cover: P.string.isRequired,
};
