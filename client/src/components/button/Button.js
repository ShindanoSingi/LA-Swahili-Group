import React from "react";

const Button = ({ background, onClick, text, type, width, icon }) => {
      let buttonStyle = `py-2 p-4 rounded-full w-${width} flex text-center items-center justify-center`;

      switch (type) {
            case "success":
                  buttonStyle += "border-green-700 flex justify-center gap-2  bg-green-700 flex justify-center hover:bg-green-900";
                  break;
            case "default":
                  buttonStyle += "border-gray-500 flex justify-center gap-2  bg-gray-500 hover:bg-gray-700";
                  break;
            case "disabled":
                  buttonStyle +=
                        " border-gray-500 flex justify-center gap-2   text-gray-500 cursor-not-allowed";
                  break;
            case "danger":
                  buttonStyle += "border-red-700 flex justify-center gap-2   bg-red-700 hover:bg-red-900";
                  break;
            case "warning":
                  buttonStyle += "border-orange-700 flex justify-center gap-2   bg-orange-700 hover:bg-orange-900";
                  break;
            case "light-blue":
                  buttonStyle += "border-blue-400 flex justify-center gap-2   bg-blue-400 hover:bg-blue-500";
                  break;
            case "submitted":
                  buttonStyle += "border-blue-700 flex justify-center gap-2   bg-blue-700 hover:bg-blue-900";
                  break;
            case "pending":
                  buttonStyle += "border-yellow-700 flex justify-center gap-2   bg-yellow-700 hover:bg-yellow-900";
                  break;
            case "complete":
                  buttonStyle += "border-green-700 flex justify-center gap-2   bg-green-700 hover:bg-green-900";
                  break;
            case "outline":
                  buttonStyle +=
                        "border border-2 border-gray-500 flex justify-center gap-2   text-gray-500 hover:text-black hover:bg-gray-500 flex justify-center items-center";
                  break;
            default:
                  buttonStyle += " bg-gray-500 flex justify-center gap-2   hover:bg-gray-700";
                  break;
      }

      return (
            <button
                  className={buttonStyle}
                  onClick={onClick}
                  disabled={type === "disabled"}
            >
                  {icon && <span className="icon p-[.3rem]">{icon}</span>}
                  {text}
            </button>
      );
};

export default Button;
