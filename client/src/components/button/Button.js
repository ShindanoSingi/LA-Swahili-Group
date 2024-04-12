import React from 'react'

const Button = ({background, color, width, text, onClick, type}) => {
    const buttonStyle = {
        color: color ||'lightgrey',
        width: width || '120px',
        padding: '0.25rem 0.75rem',
        borderRadius: '100px',
        height:'30px',
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: background || 'none',
        onClick: onClick || null
    }

    if (type === 'default') {
        return (
            <button style={buttonStyle}>{text}</button>
        )
    }


  return (
    <button
                                    className="bg-gray-400 hover:bg-gray-700 mt-2 text-white w-full font-bold px-3 py-1 rounded-full"
                                    onClick={() => {
                                          window.history.back();
                                    }}
                              >
                                    Back
                              </button>
  )
}

export default Button