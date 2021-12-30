import { useState } from 'react';
import { useSelector } from 'react-redux';
import './AddUser.css';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams();
    const URL = `https://61cd450a7067f600179c59d9.mockapi.io/users/${id}`;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');

    const users = useSelector(state => state.users)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(URL, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({createdAt: '',name, email, address, contact, avatar: 'http://placeimg.com/640/480/nature', id: String(users.length)})
        }).then(() => navigate('/')) ;
    }

    return (
        <div className='addUser'>
            <form onSubmit={handleSubmit}>
                <h1>Edit User</h1>
                <div className='user__info'>
                    <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='Contact' onChange={(e) => setAddress(e.target.value)} />
                    <input type="text" placeholder='Address' onChange={(e) => setContact(e.target.value)} />
                    <button className='btn btn-info'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default EditUser;