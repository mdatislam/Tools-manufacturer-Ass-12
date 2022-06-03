import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const UserDel = ({ userDell, setUserDell, user, refetch }) => {
  const { email } = user;

  const handleToDelete = (email) => {
    fetch(`http://localhost:5000/user/${email}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success("Delete success");
        } else {
          toast("Not delete");
        }
        setUserDell(null);
        refetch();
      });
  };
  return (
    <div>
      <input type="checkbox" id="userDelete" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            {" "}
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </span>{" "}
            <span>Warning!</span>
          </h3>
          <p class="py-4">Are You Sure Delete it!</p>

          <div class="modal-action">
            <label for="userDelete" class="btn ">
              Cancel
            </label>
            <label onClick={()=>handleToDelete(email)} class="btn btn-error">
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDel;
