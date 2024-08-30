import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditGroup = ({ groupId, adminId, onRefresh }) => {
  const navigate = useNavigate();
  const [group, setGroup] = useState({
    name: "",
    description: "",
    privacy: "",
    memberLimit: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroupDetails = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`http://localhost:4000/groups/${groupId}`);
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        const data = await response.json();
        setGroup(data);
      } catch (error) {
        console.error("Failed to fetch group details:", error);
        setError("Failed to fetch group details");
      } finally {
        setIsLoading(false);
      }
    };

    if (groupId) {
      fetchGroupDetails();
    }
  }, [groupId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGroup((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/update-group/${groupId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(group),
        }
      );
      if (response.ok) {
        alert("Group updated successfully!");
        onRefresh();
        navigate("/MainPage");
      }
      // throw new Error("Failed to update group");
    } catch (error) {
      console.error("Error updating group:", error);
      setError("Error updating group");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this group?")) {
      try {
        const response = await fetch(
          `http://localhost:4000/delete-group/${groupId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete group");
        }
        alert("Group deleted successfully!");
        onRefresh();
        navigate(`/MainPage`);
      } catch (error) {
        console.error("Error deleting group:", error);
        setError("Error deleting group");
      }
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
              value={group.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className=" ms-24 mb-3">
          <label className="form-label">
            Description:
            <input
              className="form-control"
              type="text"
              name="description"
              value={group.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="ms-24 mb-3">
          <label className="form-label">
            Privacy:
            <select
              className="form-control"
              name="privacy"
              value={group.privacy}
              onChange={handleChange}
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </label>
        </div>
        <div className="ms-24 mb-3">
          <label className="form-label">
            Member Limit:
            <input
              className="form-control"
              type="number"
              name="memberLimit"
              value={group.memberLimit}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="d-flex justify-content-center  gap-2">
          <button className="btn btn-primary" type="submit">
            Save Changes
          </button>
          <button
            className="btn btn-dark "
            type="button"
            onClick={handleDelete}
          >
            Delete Group
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditGroup;
