import './App.css'
import { useState } from 'react';
import InputCom from './component/input'

function App() {

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    nomor: '',
    ttl: '',
    gender: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className="container">
        <header>Registration Form</header>
        <form onSubmit={handleSubmit} className="form">
          <InputCom
            label="Full Name"
            type="text"
            name="nama"
            placeholder="Enter full name"
            required
            value={formData.nama}
            onChange={handleInputChange}
          />
          <InputCom
            label="Email Address"
            type="text"
            name="email"
            placeholder="Enter email address"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="column">
            <InputCom
              label="Phone Number"
              type="number"
              name="nomor"
              placeholder="Enter phone number"
              required
              value={formData.nomor}
              onChange={handleInputChange}
            />
            <InputCom
              label="Birth Date"
              type="date"
              name="ttl"
              placeholder="Enter birth date"
              required
              value={formData.ttl}
              onChange={handleInputChange}
            />
          </div>
          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input
                  type="radio"
                  id="check-male"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                />
                <label htmlFor="check-male">male</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-female"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                />
                <label htmlFor="check-female">Female</label>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}

export default App
