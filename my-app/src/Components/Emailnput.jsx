export const EmailInput=({value,handleemail})=>{
return(
    <input type="email" value={value}  className="value" onChange={handleemail} />
)
}