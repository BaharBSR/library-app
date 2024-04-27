// hooks
import { useState } from "react";

// styles
import styles from "./BookCard.module.css";

// icons
import { AiFillHeart } from "react-icons/ai";

const BookCard = ({ data, handelLikedList }) => {
  const { title, author, language, image, pages } = data;
  
  const [like, setLike] = useState(false);

  function likeHandler() {
    handelLikedList(data, like);
    setLike((like) => !like);
  }

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart fontSize="1.8rem" color={like ? "red" : "#e0e0e0"} />
      </button>
    </div>
  );
};

export default BookCard;
