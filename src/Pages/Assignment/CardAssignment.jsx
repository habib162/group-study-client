import Aos from 'aos';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const CardAssignment = ({ assignment }) => {
    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
    });
    return (

       <div data-aos="zoom-in-up">
         <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={assignment.photoUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <motion.h2 className="card-title">{assignment.title}</motion.h2>
                <motion.p>Level: {assignment.difficultLevel}</motion.p>
                <motion.p>Mark: {assignment.mark}</motion.p>
                <div className="card-actions">
                    <Link to={`/show-assignment/${assignment._id}`}><motion.button className="btn btn-success btn-sm" >View Assignment</motion.button></Link>
                    {/* <motion.button className="btn btn-success btn-sm">View Assignment</motion.button> */}
                </div>
            </div>
        </motion.div>
       </div>
    );
}

export default CardAssignment;
{/* <motion.div
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
className="bg-white w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
>
<img
  src={assignment.imageUrl}
  alt="assignment thumbnail"
  className="w-full h-56 object-cover object-center"
/>
<div className="p-4">
  <h2 className="text-gray-800 text-lg font-semibold">{assignment.title}</h2>
  <p className="mt-2 text-gray-600">{assignment.description}</p>
  <p className="mt-2 text-gray-600">Marks: {assignment.mark}</p>
  <p className="mt-2 text-gray-600">Difficulty Level: {assignment.difficultLevel}</p>
  <p className="mt-2 text-gray-600">Due Date: {assignment.date}</p>
</div>
</motion.div> */}