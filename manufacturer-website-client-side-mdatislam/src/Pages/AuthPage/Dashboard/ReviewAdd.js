import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";

import auth from "../../../firebase.init";
import Loading from "../../CommonPage/Loading";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ReviewAdd = () => {
  const [user, loading] = useAuthState(auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      name: user?.displayName,
      email: user?.email,
      photoUrl: e.target.url.value,
      comment: e.target.comment.value,
      ratting: e.target.rate.value,
    };
    console.log(reviewData);

    fetch(`https://still-spire-24654.herokuapp.com/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // 'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(" Review update Successfully");
      });
    e.target.reset();
  };

  return (
    <div>
      <div class="card w-96 bg-[#a4953f] text-black mx-auto mt-16">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Review this product!!</h2>
          <small>Share your thoughts with other customers</small>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={`Name: ${user?.displayName}`}
              disabled
              hidden
              class="input input-bordered input-md w-full max-w-xs mb-2"
            />

            <input
              type="text"
              value={`Email: ${user?.email}`}
              disabled
              hidden
              class="input input-bordered input-md w-full max-w-xs mb-2"
            />
            <input
              type="text"
              name="url"
              placeholder="provide Photo URL"
              class="input input-bordered input-md w-full max-w-xs mb-2"
            />

            <textarea
              type="text"
              name="comment"
              placeholder="Tell us what you think"
              class="input input-bordered input-lg w-full max-w-xs mb-2"
            />
            <input
              type="number"
              name="rate"
              required
              placeholder="Put Ratting between 1 to 4 ."
              class="input input-bordered input-md w-full max-w-xs mb-2"
            />
            <div class="card-actions justify-center">
              <button class="btn btn-primary upperCase mb-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewAdd;
