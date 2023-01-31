function handleChange(event){
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
            <input type="password"
             name ="enter"
             onChange={handleChange}/>    
        </div>
    )
}

export default Keypad;