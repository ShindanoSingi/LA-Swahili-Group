import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import './About.css';

function About() {
    const [about, setAbout] = useState('')

    const getAbout = async () => {
        try {
            const response = await axios.get(`/api/com/all`);
            setAbout(response.data.about)
        } catch (error) {
            toast.error(error.message)
        }
    }
    if(about){
        console.log(about);
    }

    useEffect(() => {
        getAbout()
    },[]);

      return (
            <div className="mt-[4rem] p-2 dark:bg-gray-800 min-h-[100vh]">
                  <div className="block about-card p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              About Us
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                {about ? about : <Loader />}
                        </p>
                  </div>
            </div>
      );
}

export default About;
