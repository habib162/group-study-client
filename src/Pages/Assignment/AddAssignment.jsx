
import SideBar from "./SideBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

const AddAssignment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleAddAssignment =(e)=>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const imageUrl = form.imageUrl.value;
        const mark = form.mark.value;
        const difficultLevel = form.difficultLevel.value;
        const description = form.description.value;
        const date = form.date.value;

        const newAssignment = { title, imageUrl, mark, difficultLevel, description, date };
        
        // fetch('https://b8a10-brandshop-server-side-habib162.vercel.app/product', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newProduct)
        // })
        axios.post('http://localhost:5000/assignment',newAssignment)
            .then(function (response) {
                toast.success("Assignment inserted successfully")
              })
              .catch(function (error) {
                toast(error)
              })
    }
    return (
        <div className="grid grid-cols-5">
            <div className="my-16 ml-6">
                <SideBar></SideBar>
            </div>
            <div className="flex items-center justify-center min-h-screen  col-span-4">
                <div className=" bg-white w-[75%] p-8 rounded-md py-10 shadow-xl">
                    <form onSubmit={handleAddAssignment}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name='title' placeholder="Enter title" className="input input-bordered border-2 border-emerald-300 focus:outline-none focus:border-emerald-500 rounded-md py-2 px-4  appearance-none leading-normal" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name='imageUrl' placeholder="Enter Image URL" className="input input-bordered border-2 border-emerald-300 focus:outline-none focus:border-emerald-500 rounded-md py-2 px-4  appearance-none leading-normal" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Marks</span>
                                </label>
                                <input type="number" name='mark' placeholder="Enter mark" className="input input-bordered border-2 border-emerald-300 focus:outline-none focus:border-emerald-500 rounded-md py-2 px-4  appearance-none leading-normal" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Level</span>
                                </label>
                                <select name="difficultLevel" className="select border-2 border-emerald-300 focus:outline-none focus:border-emerald-500 rounded-md py-2 px-4  appearance-none leading-normal">
                                    <option disabled>Pick your difficulty level</option>
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
                            </div>
                            <div className="mb-6 col-span-2">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Description"
                                    className="w-full border-2 border-emerald-300 focus:outline-none focus:border-emerald-500 rounded-md py-2 px-4  appearance-none leading-normal" required
                                    rows="3"
                                ></textarea>
                            </div>


                        </div>
                        <div className="mb-6">
                            <label className="label">
                                <span className="label-text">Due Date</span>
                            </label>                             
                               <DatePicker name="date" className="w-full border-2 border-emerald-300 focus:outline-none focus:border-emerald-500 rounded-md py-2 px-4  appearance-none leading-normal" required
                                selected={selectedDate} onChange={handleDateChange} />

                        </div>
                        <button
                            type="submit"
                            className="w-full bg-emerald-500 text-white font-bold py-2 px-4 rounded-md hover:bg-em  erald-700 focus:outline-none focus:shadow-outline"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddAssignment;