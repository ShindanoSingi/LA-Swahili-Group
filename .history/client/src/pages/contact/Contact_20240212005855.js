import React from "react";

function Contact() {
      return (
            <div className="mt-[4rem] pt-2 px-2 min-h-[100vh] bg-cyan-700">

                        <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg sm:-translate-y-24 max-w-sm w-full mx-auto">
                              <img
                                    className="w-25 h-25 object-cover mx-auto shadow-lg"
                                    src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt="User avatar"
                              />
                              <div class="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
  <h1 class="text-3xl mb-3">Hi George</h1>
  <p class="text-lg">You can contact us whenever you need help or just curious about something.</p>
</div>
                        </div>
                  </div>

      );
}

export default Contact;
