import Avatar from 'react-avatar';
import styles from './ticket-profile.module.css';


class CardProfile extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       file: '',
       imagePreviewUrl: 'http://www.unikunst.no/wp-content/uploads/2015/05/kari-nordmann.jpg',
       active: 'edit'
    };
  }
  photoUpload (e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    this.setState({
      active: activeP,
    })
  }
  
  render() {
    const {imagePreviewUrl, 
           name, 
           status, 
           active} = this.state;
    return (
      <div>
        {(active === 'edit')  
          ?<Edit onSubmit={(e)=>this.handleSubmit(e)}>
              <ImgUpload onChange={(e)=>this.photoUpload(e)} src={imagePreviewUrl}  style={{maxWidth: '100px', height: '110px',  borderRadius:'50px'}} />
           
            </Edit>
          :<Profile onSubmit={(e)=>this.handleSubmit(e)} src={imagePreviewUrl} name={name} status={status}/>}
        
      </div>
    )
  }
}

export default CardProfile;

const ImgUpload =({
  onChange,
  src,
})=>{
  return(
    <label for="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload"   src={src}   style={{maxWidth: '100px', height: '110px', borderRadius:'50px', margin: '-20px 10px 0 0'}} />
      </div>
      <input id="photo-upload" type="file" onChange={onChange} style={{opacity: 0}} /> 
    </label>
  );
}

      
const Edit =({
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
