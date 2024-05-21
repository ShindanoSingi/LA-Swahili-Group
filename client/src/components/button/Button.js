import React from "react";

const Button = ({ background, onClick, text, type, width, icon }) => {
      let buttonStyle = `p-2 rounded-full w-${width} flex items-center justify-center`;

      switch (type) {
            case "success":
                  buttonStyle += " bg-green-700 hover:bg-green-900";
                  break;
            case "default":
                  buttonStyle += " bg-gray-500 hover:bg-gray-700";
                  break;
            case "disabled":
                  buttonStyle +=
                        " border-gray-500 text-gray-500 cursor-not-allowed";
                  break;
            case "danger":
                  buttonStyle += " bg-red-700 hover:bg-red-900";
                  break;
            case "warning":
                  buttonStyle += " bg-orange-700 hover:bg-orange-900";
                  break;
            case "light-blue":
                  buttonStyle += " bg-blue-400 hover:bg-blue-500";
                  break;
            case "submitted":
                  buttonStyle += " bg-blue-700 hover:bg-blue-900";
                  break;
            case "pending":
                  buttonStyle += " bg-yellow-700 hover:bg-yellow-900";
                  break;
            case "complete":
                  buttonStyle += " bg-green-700 hover:bg-green-900";
                  break;
            case "outline":
                  buttonStyle +=
                        " border border-gray-500 text-gray-500 hover:text-black hover:bg-gray-500";
                  break;
            default:
                  buttonStyle += " bg-gray-500 hover:bg-gray-700";
                  break;
      }

      return (
            <button
                  className={buttonStyle}
                  onClick={onClick}
                  disabled={type === "disabled"}
            >
                  {icon && <span className="icon">{icon}</span>}
                  {text}
            </button>
      );
};

export default Button;
