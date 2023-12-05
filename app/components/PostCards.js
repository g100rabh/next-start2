"use client";
import { useRouter } from "next/navigation";
import classes from "./PostCards.module.css";

const PostCards = (props) => {
  const router = useRouter();

  const deleteHandler = async () => {
    console.log(props.post.id);
    try {
      const res = await fetch(`/api/posts/${props.post.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editHandler = () => {
    
    router.push(`/edit-post/${props.post.id}`);
  };

  return (
    <div className={classes.cardCon}>
      <h2>{props.post.title}</h2>
      <p>{props.post.content}</p>
      {/* <span>user: {props.post.author}</span> */}
      <span className={classes.actionCon}>
        <button onClick={editHandler}>Edit</button>
        <button style={{ color: "red" }} onClick={deleteHandler}>
          Delete
        </button>
      </span>
    </div>
  );
};

export default PostCards;
