import React from 'react';
import { Table, Button } from 'react-bootstrap';

function UserTable({ users, onEdit, onDelete }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Phone</th><th>Age</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.age}</td>
            <td>
              <Button variant="warning" size="sm" onClick={() => onEdit(user)}>Edit</Button>{' '}
              <Button variant="danger" size="sm" onClick={() => onDelete(user._id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserTable;
