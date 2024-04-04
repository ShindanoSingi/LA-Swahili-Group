import React from 'react'

const Button = ({background, color, width, text, onClick, type}) => {
    const buttonStyle = {
        color: color ||'lightgrey',
        width: width || '120px',
        padding: '10px 20px',
        borderRadius: '100px',
        height:'30px',
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: background || 'none',
    }

    if (type === 'green') {
        buttonStyle.backgroundColor = '#38556c'
    }
    if (type === 'inactive') {
        buttonStyle.backgroundColor = 'red'
    }
    if (type === 'warning') {
        buttonStyle.backgroundColor = 'orange'
    }
    if (type === 'success') {
        buttonStyle.backgroundColor = 'green'
    }
    if (type === 'info') {
        buttonStyle.backgroundColor = 'lightblue'
    }
    if (type === 'dark') {
        buttonStyle.backgroundColor = 'black'
    }
    if (type === 'light') {
        buttonStyle.backgroundColor = 'white'
    }
    if (type === 'primary') {
        buttonStyle.backgroundColor = 'blue'
    }
    if (type === 'secondary') {
        buttonStyle.backgroundColor = 'grey'
    }
    if (type === 'tertiary') {
        buttonStyle.backgroundColor = 'lightgrey'
    }
    if (type === 'outline') {
        buttonStyle.backgroundColor = 'none'
        buttonStyle.border = '1px solid grey'
    }
    if (type === 'default') {
        buttonStyle.backgroundColor = 'none'
        buttonStyle.border = '1px solid grey'
    }
  return (
    <button style={buttonStyle} onClick={onClick} type={type}>
        {text}
    </button>
  )
}

export default Button