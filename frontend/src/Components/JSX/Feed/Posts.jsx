import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import "../../CSS/Posts/GroupPosts.css";
const GroupPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [commentInputs, setCommentInputs] = useState([]);
  const [userName, setUserName] = useState("");
  const [showCommentInputs, setShowCommentInputs] = useState([]);
  const [likingInProgress, setLikingInProgress] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const userId = localStorage.getItem("userId");
      const body =
        props.groupId === "feed"
          ? { userId }
          : { groupId: props.groupId, userId };

      const response = await fetch(
        props.groupId === "feed"
          ? "http://localhost:4000/fetch-user-all-posts"
          : "http://localhost:4000/fetch-posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();
      if (JSON.stringify(data.posts) !== JSON.stringify(posts)) {
        setPosts(data.posts);
        if (data.posts.length !== posts.length) {
          setShowCommentInputs(data.posts.map(() => false));
        }
      }
    };

    fetchPosts();
    const storedUserName = localStorage.getItem("name");
    if (storedUserName) {
      setUserName(storedUserName);
    }
    const intervalId = setInterval(fetchPosts, 3000);

    return () => clearInterval(intervalId);
  }, [props.groupId, posts]);

  const handleLike = async (postId, index) => {
    if (likingInProgress.includes(postId)) return;
    setLikingInProgress((prev) => [...prev, postId]);

    try {
      const response = await fetch(
        `http://localhost:4000/like-post/${postId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: localStorage.getItem("userId"),
            action: posts[index].likedByUser ? "unlike" : "like",
          }),
        }
      );
      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      // Update the post based on the response
      setPosts((prevPosts) =>
        prevPosts.map((post, idx) =>
          idx === index
            ? {
                ...post,
                likes: data.likes,
                likedByUser: !post.likedByUser,
              }
            : post
        )
      );
    } catch (error) {
      console.error("Error toggling like:", error);
    } finally {
      setLikingInProgress((prev) => prev.filter((id) => id !== postId));
    }
  };

  const handleComment = async (postId, index) => {
    try {
      const response = await fetch(
        `http://localhost:4000/add-comment/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: commentInputs[index],
            userName: userName,
          }),
        }
      );
      if (response.ok) {
        setCommentInputs((prevInputs) =>
          prevInputs.map((input, i) => (i === index ? "" : input))
        );

        setPosts((prevPosts) =>
          prevPosts.map((post, i) =>
            i === index
              ? {
                  ...post,
                  comments: [
                    ...post.comments,
                    { text: commentInputs[index], userName: userName },
                  ],
                }
              : post
          )
        );
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const toggleCommentSection = (index) => {
    setShowCommentInputs((prevInputs) =>
      prevInputs.map((input, idx) => (idx === index ? !input : input))
    );
  };

  return (
    <div className="container">
      {posts &&
        posts.map((post, index) => (
          <div key={post._id} className="card-container">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">{post.title}</h5>
              </div>

              <div className="card-body">
                {post.image && (
                  <img
                    src={`http://localhost:4000/${post.image}`}
                    className="card-img"
                    alt="Post"
                  />
                )}
                {post.video && (
                  <video controls className="card-video">
                    <source
                      src={`http://localhost:4000/${post.video}`}
                      alt="Video"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
                <p className="card-text">{post.content}</p>
              </div>
              <div className="card-footer">
                <button
                  onClick={() => handleLike(post._id, index)}
                  className={`btn btn-like ${post.likedByUser ? "liked" : ""}`}
                  disabled={likingInProgress.includes(post._id)}
                >
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span className="ms-1">{post.likes}</span>
                </button>
                <button
                  onClick={() => toggleCommentSection(index)}
                  className="btn btn-comment"
                >
                  <FontAwesomeIcon icon={faComment} className="comment-icon" />
                  <span className="ms-1">Comment</span>
                </button>
              </div>
              {showCommentInputs[index] && (
                <div className="comments">
                  {post.comments.map((comment, i) => (
                    <div key={i} className="comment">
                      <strong>{comment.userName}: </strong>
                      {comment.text}
                    </div>
                  ))}
                </div>
              )}
              {showCommentInputs[index] && (
                <div className="add-comment">
                  <input
                    type="text"
                    value={commentInputs[index]}
                    onChange={(e) => {
                      const newInputs = [...commentInputs];
                      newInputs[index] = e.target.value;
                      setCommentInputs(newInputs);
                    }}
                    placeholder="Add a comment..."
                    required
                  />
                  <button onClick={() => handleComment(post._id, index)}>
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default GroupPosts;
