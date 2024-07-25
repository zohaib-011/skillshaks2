 
const eventItem=(props)=>{
    let {title,imgUrl,description}=props;

return (
   
    <>
    <div className="eventItem">
     <div>
     <img src= {imgUrl}  alt="" />   
        </div>   
   <div>
    <h5>{title}</h5>
    <p>{description}</p>

    </div> 
    
    </div>
     
    </>
)
}
export default eventItem