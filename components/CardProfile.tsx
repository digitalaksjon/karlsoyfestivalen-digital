import Avatar from 'react-avatar';
import styles from './ticket-profile.module.css';
import React, { useState } from 'react';
import avatarImage from '../public/avatar.png';

 
function CardProfile (props) {

  const [file, setFile] = useState(0);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(avatarImage)
  const [active, setActive] = useState('edit');

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(avatarImage);
    }
    reader.readAsDataURL(file);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let activeP = active === 'edit' ? 'profile' : 'edit';
    setActive(activeP);

  }
  

    return (
      <div>
        {(active === 'edit')  
          ?<Edit onSubmit={(e)=>handleSubmit(e)}>
              <ImgUpload onChange={(e)=>photoUpload(e)} src={imagePreviewUrl}   />
           
            </Edit>
          :<Profile onSubmit={(e)=>handleSubmit(e)} src={imagePreviewUrl} />}
        
      </div>
    )

}

export default CardProfile;

export function ImgUpload =({
  onChange,
  src,
})=>{
  return(
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img data-for="photo-upload"   src={src}   style={{maxWidth: '100px', height: '110px', borderRadius:'50px', margin: '-20px 10px 0 0'}} />
      </div>
      <input id="photo-upload" type="file" onChange={onChange} style={{opacity: 0}} /> 
    </label>
  );
}}


      
export function Edit =({
  onSubmit,
  children,
})=>{
  return(
    <div className="card">
      <form onSubmit={onSubmit} className="profile-from">
 
        {children}
      </form>
    </div>
  );
}


export function Profile =({
  onSubmit,
  src,
})=>{
  return(
   <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img data-for="photo-upload" src={src}/>
        </div>
      </label>
      <button type="submit" className="edit">Edit Profile </button>
    </form>
   </div>
  );
}

export  {}