import { getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header';
import {doc , getDoc, collection , query , orderBy , limit, getDocs , addDoc , serverTimestamp , updateDoc} from "firebase/firestore";
import {db} from "../firebase.config";

import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import { toast } from 'react-toastify';
const Tasks = () => {
    const auth = getAuth();
    const [title, setTitle] = useState();
    const [des, setDes] = useState();
    const [date, setDate] = useState();
    const [level, setLevel] = useState();
    const [assign , setAssign] = useState();
    const [loaging, setLoading] = useState(true);
    const [users , setUsers] = useState();

        useEffect(()=>{
            const fetchUser = async()=>{
                const userRef = collection(db, "users");
                const q = query(userRef , orderBy("timestamp", "desc"), limit(10));
                const querySnap = await getDocs(q);
                let userList = []; 
                querySnap.forEach((doc)=> userList.push(doc.data()));
                setUsers(userList)
                console.log(querySnap)
                    }
                    fetchUser();
            }
            
       , [])
       const  sumitHandler = async(e)=>{ 
            e.preventDefault();
        const data = {
            title, description: des, dueDate: date,priorityLevel: level ,assign,status: "pennding" 
        }
        const docRef = await addDoc(collection(db , "tasks"), data);
        setLoading(false);
        toast.success("add tasks");
        console.log(data);
       }
  return (
    <div>
    <Header/>
    <div className='template'>
        <NavigationMenu />
            <div> <form >
                    <input type='text' placeholder='title' onChange={(e)=> setTitle(e.target.value)} />
                    <input type='text' placeholder='description' onChange={(e)=>setDes(e.target.value)} />
                    <input  type="datetime-local" onChange={(e)=> setDate(e.target.value)} />
                    <select name="priority" id="priorty" onChange={(e)=>setLevel(e.target.value)}>
                        <option value="low">Low</option>
                        <option value="mid">mid</option>
                        <option value="high">High</option>
                       
                    </select>
               
                    {users && <select name="priority" id="priorty" onChange={(e)=>setAssign(e.target.value)}>
                        {
                            users.map((user)=> <option key={user.username} value={user.username}>{user.username}</option>)
                        }
                       
                    </select>}3
                    <button onClick={updateHandler} ></button>
                    <button onClick={sumitHandler}> Add</button>
                    </form>
            </div>

        </div>
        </div>
  )
}

export default Tasks