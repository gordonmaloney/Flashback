import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from '../../actions/posts'

export const CreateUser = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }

  return (
    <div>
        <h3>Create User</h3>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setPostData({ ...postData, name: e.target.value })
        }
      />
            <input
        type="text"
        placeholder="Code"
        onChange={(e) =>
          setPostData({ ...postData, code: e.target.value })
        }
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
