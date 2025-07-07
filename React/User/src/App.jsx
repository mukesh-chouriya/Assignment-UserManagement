import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Alert } from 'react-bootstrap';
import UserTable from './components/UserTable';
import UserFormModal from './components/UserFormModal';

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/users');
      setUsers(res.data);
    } catch (err) {
      setError('Error fetching users. Check server/database connection.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowModal(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      fetchUsers();
    } catch (err) {
      setError('Error deleting user.');
    }
  };

  const handleSubmit = async (data) => {
    try {
      if (selectedUser) {
        await axios.put(`http://localhost:5000/users/${selectedUser._id}`, data);
      } else {
        await axios.post('http://localhost:5000/users', data);
      }
      fetchUsers();
      setShowModal(false);
    } catch (err) {
      setError('Submission failed. Check input or server.');
    }
  };

  return (
    <Container className="mt-5">
      <h2>User Management Dashboard</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button variant="primary" onClick={handleAddUser} className="my-3">Add User</Button>
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      <UserFormModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSubmit={handleSubmit}
        user={selectedUser}
      />
    </Container>
  );
}

export default App;
