import axios from 'axios'
import React from 'react'
import {toast,Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


const UserListing = () => {
const [users,setusers]=React.useState([]);
const [data,viewData]=React.useState(false);
const navigate = useNavigate();

    const getAllUsers = async () => {
        await axios.get("http://localhost:5000/users")
        .then((res)=>{
            console.log(res);
            setusers(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const deleteUser = async (e) =>{
        await axios.delete(`http://localhost:5000/users/${e.id}`)
        .then((res)=>{
            toast.success('user deleted');
            viewData(!data)
        }).catch((err)=>{
            toast.error(err.message);
        })
    }

    React.useEffect(()=>{
        getAllUsers();
    },[data]);

  return (
    <>
    <div className='container text-center my-2'>
        <button className='btn btn-primary' onClick={()=>navigate("/create-user")}>Add new user</button>
    </div>
    <div className='container my-5'>
      <table className='table table-striped'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Number</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((e)=>{
                    return(
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td>{e.number}</td>
                            <td>
                                <span style={{cursor:"pointer"}}><box-icon name='edit'></box-icon></span>
                            </td>
                            <td>
                                <span style={{cursor:"pointer"}} onClick={()=>deleteUser(e)}><box-icon name='trash'></box-icon></span>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
      {
        users.length===0 && (<h1 className='text-danger text-center'>No Data found!</h1>)
      }
    </div>
    <Toaster/>
    </>
  )
}

export default UserListing
