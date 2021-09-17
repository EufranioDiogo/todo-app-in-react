function Button({text, textColor, background, onClick}) {
    return (<button onClick={onClick} className="btn" style={{backgroundColor: background,  color: textColor }}>{text}</button>)
}

Button.defaultProps = {
    text: 'Add',
    textColor: 'white',
    background: 'black'
}
export default Button;