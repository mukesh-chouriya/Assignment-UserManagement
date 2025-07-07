import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function UserFormModal({ show, onHide, onSubmit, user }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', age: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) setFormData(user);
    else setFormData({ name: '', email: '', phone: '', age: '' });
    setErrors({});
  }, [user, show]);

  const validate = () => {
    let err = {};
    if (!formData.name.trim()) err.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = 'Invalid email format';
    if (!/^\d{10}$/.test(formData.phone)) err.phone = 'Phone must be 10 digits';
    const ageNum = parseInt(formData.age);
    if (!(ageNum >= 1 && ageNum <= 100)) err.age = 'Age must be between 1–100';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSubmit(formData);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{user ? 'Edit' : 'Add'} User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {['name', 'email', 'phone', 'age'].map(field => (
            <Form.Group key={field} className="mb-3">
              <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
              <Form.Control
                type={field === 'email' ? 'email' : field === 'age' ? 'number' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                isInvalid={!!errors[field]}
              />
              <Form.Control.Feedback type="invalid">{errors[field]}</Form.Control.Feedback>
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="success" onClick={handleSubmit}>
          {user ? 'Update' : 'Add'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserFormModal;
