export const PasswordInput=({value,handlepassword})=>{
    return(
        <input type="password" value={value} className="value"   onChange={handlepassword} />
    )
    }