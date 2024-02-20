import React from "react";

function Contact() {
      return (
            <div className="mt-[4rem] min-h-[100vh] bg-cyan-700">
                  <div className="mx-5 min-h-screen grid place-content-center">
                        <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-md mx-auto">
                              <img
                                    className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
                                    src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt="User avatar"
                              />
                              <p className="capitalize text-xl mt-1">
                                    essie walton
                              </p>
                        </div>
                  </div>
            </div>
      );
}

export default Contact;
