import '../Index.css'; 
function Button({ onPress }){
    const handleClick = () => {
        onPress();
    }
    return <div className='btnContainer'>
        <button onClick={handleClick}></button>
    </div>;
}
export default Button;