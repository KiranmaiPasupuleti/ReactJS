
const ProfileDisplay = (props) => {
    const {image,job,name,text} = props.data
    
    console.log(image,job,name,text)
  return (
    <div style={{"margin":"20px","width":"50%","textAlign": "center",border:"1px solid blue",display:"flex","alignItems":"center",flexDirection:"column"}}>
        profile display
        <img style={{borderRadius:"120px"}} height={"150px"} width={"150px"} src={image} />
        <h3>{name}</h3>
        <p>{job}</p>
        <p>{text}</p>
        
    </div>
  )
}

export default ProfileDisplay