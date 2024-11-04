export const SurnameInput=({value,handlesurname})=>{
    return(
        <input type="text" value={value} className="value" onChange={handlesurname} />

    )
    }