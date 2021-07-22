const ImgUpload =({
  onChange,
  src,
})=>{
  return(
    <label for="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src}/>
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  );
}
const Profile =({
  onSubmit,
  src,
})=>{
  return(
   <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img for="photo-upload" src={src}/>
        </div>
      </label>
      <button type="submit" className="edit">Edit Profile </button>
    </form>
   </div>
  );
}
      
const Edit =({
  onSubmit,
  children,
})=>{
  return(
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
        {children}
        <button type="submit" className="save">Save </button>
      </form>
    </div>
  );
}
