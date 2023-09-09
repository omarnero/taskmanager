import { getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import ImageUpload from '../components/ImageUpload/ImageUpload';
function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}
function getBase64Image(file) {
    const fr = new FileReader();
    fr.readAsDataURL(file);
    return fr;
    console.log(fr)
    
}
const Profile = () => {
    const [image , setImage] = useState(null);
    const [user, setUser] = useState();
    const [bio , setBio] = useState();
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(()=>{
        setUser(auth.currentUser);
    } ,[]);
   const  logoutHandler = ()=>{
            auth.signOut();
            navigate("/");
   }
   useEffect(()=>{
    if(image){

      
        localStorage.setItem("image", image);
    }
    const setBios = async()=>{
        if(bio){

            await timeout(40000);    
            localStorage.setItem("bio",bio)
        }
    }
    setBios();

    
   }, [image , bio])

  
    if(user){
        return (
            <div>
                <Header name={user.displayName}/>
                <div className='template'>
                    <NavigationMenu />
                    <div className='profileform'>
                        
                        <p>{user.displayName}</p>  
                         
                         {localStorage.getItem("image")?<img className='profileImg' src={localStorage.getItem("image")} />: <ImageUpload onChange={(event)=> setImage(event) }/> }
                                {
                                    !localStorage.getItem("bio") ? <div className='bio'>

                                    <span>bio</span>
                                    <textarea onChange={(e)=> setBio(e.target.value)}></textarea>
                                        </div>: 
                                        <p> {localStorage.getItem("bio")}</p>
                                }
                                
                    </div>
                </div>
                <div>

              
                </div>
            </div>

        )
    }
  return (
    <div>Profile</div>
  )
}

export default Profile