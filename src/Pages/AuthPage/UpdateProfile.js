import React from "react";
import { toast } from "react-toastify";

const UpdateProfile = ({ user, setProfile }) => {
  const handleSubmit = (event) => {
      event.preventDefault(); 
      const mobile = event.target.mobile.value;
      const address = event.target.address.value;
      const role = event.target.role.value;

      const updateUser={
          name:user.displayName, 
          email:user.email,
          mobile:mobile, 
          role:role,
          address:address
      }
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateUser),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            toast(" User update Successfully");
          } else {
            toast.error(" Something Wrong");
          }
        });
    
      setProfile('');
  };

  return (
    <div>
      <input type="checkbox" id="profileUpdate" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="profileUpdate"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold text-center mb-5 ">
            {" "}
            <span className="text-pink-600">Fill Up What You Want to Update</span>{" "}
            
          </h3>

          <form onSubmit={handleSubmit}>
            <div class="form-control w-full max-w-xs mx-auto">
              <input
                type="text"
                value={user.displayName}
                disabled
                class="input input-bordered w-full max-w-xs mb-2"
              />
              <input
                type="email"
                value={user.email}
                disabled
                class="input input-bordered w-full max-w-xs mb-2"
              />
              <input
                type="text"
                placeholder="type here your Mobile no"
                required
                name="mobile"
                class="input input-bordered w-full max-w-xs mb-2"
              />
              <input
                type="text"
                placeholder="type Role"
                required
                name="role"
                class="input input-bordered w-full max-w-xs mb-2"
              />
              <textarea
                type="text"
                placeholder="type here your address"
                name="address"
                class="input input-bordered w-full max-w-xs mb-2"
              />
              <button
                type="submit"
                class="btn btn-success text-white font-bold  w-full max-w-xs mb-2"
              >
                Save Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
