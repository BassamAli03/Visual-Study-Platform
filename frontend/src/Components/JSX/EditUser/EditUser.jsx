import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUser = ({ onRefresh }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    profilepic: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:4000/user/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
        setError("Failed to fetch user details");
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/update-user/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      alert("User updated successfully!");
      onRefresh();
      navigate("/MainPage");
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Error updating user");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <form
        className="w-100 max-w-md border shadow p-3 rounded"
        onSubmit={handleSubmit}
      >
        <div className="ms-24 mb-3">
          <label className="form-label">
            Name:
            <input
              className="form-control"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="ms-24 mb-3">
          <label className="form-label">
            Email:
            <input
              className="form-control"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="ms-24 mb-3">
          <label className="form-label">
            ProfilePic:
            <input
              className="form-control"
              type="profilepic"
              name="profilepic"
              value={user.profilepic}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="d-flex justify-content-center  gap-2">
          <button className="btn btn-primary" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
