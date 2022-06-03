import React from "react";
import { useState } from "react";
import UserDel from "./UserDel";

const AllUsersRow = ({ user, refetch }) => {
  const { name, email, role, mobile } = user;
  const [userDell, setUserDell] = useState();
  return (
    <>
      {/*  <!-- row 1 --> */}
      <tr className="hover">
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>

        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="https://i.ibb.co/nmtcHxY/8.jpg" />
              </div>
            </div>
            <div>
              <div class="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{email}</td>
        <td>{mobile}</td>
        <td>{role}</td>
        <td>
          <label
            className="btn btn-square btn-outline btn-error text-white btn-modal"
            for="userDelete"
            onClick={() => setUserDell(email)}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </td>
      </tr>
      {userDell && (
        <UserDel
          setUserDell={setUserDell}
          userDell={userDell}
          user={user}
          refetch={refetch}
        ></UserDel>
      )}
    </>
  );
};

export default AllUsersRow;
