import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import deleteUser from "./redux/actions/deleteUser";
import getUsers from "./redux/actions/getUsers";
import './Home.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const URL = 'https://61cd450a7067f600179c59d9.mockapi.io/users';
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                dispatch(getUsers(data));
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [URL, dispatch]);

    const handleDelete = id => {
        fetch(`${URL}/${id}`, {
            method: 'DELETE'
        }).then(() => {
            dispatch(deleteUser(id))
        }).catch(err => console.log(err))
    }

    const users = useSelector(state => state.users);

    return (
        <div className="home">
            <h1>Random Users <span>Total Users: {users ? users.length : '-'}</span></h1>
            {loading ? '' : <div className="home__add"><p onClick={() => navigate('/add')} className="btn btn-success">Add User</p></div>}
            {loading ? <h5>Loading Users...</h5> :             
                <div className="container">
                    <div className="row">
                        {users?.map(user => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={user.id}>
                                <div className="card">
                                    <img src={user.avatar} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{user.name}</h5>
                                        <p className="card-text"><i className="fas fa-envelope"></i> {user.email}</p>
                                        <p className="card-text"><i className="fas fa-phone"></i> {user.contact}</p>
                                        <p className="card-text"><i className="fas fa-map-marker-alt"></i> {user.address}</p>
                                        <div className="home__buttons">
                                            <p onClick={() => navigate(`/edit/${user.id}`)} className="btn btn-primary">Edit</p>
                                            <p onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default Home;