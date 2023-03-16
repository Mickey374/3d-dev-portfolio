import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send(
      'service_fc4mj2p',
      'template_wh8tcu5',
      {
        from_name: form.name,
        to_name: 'Michael',
        from_email: form.email,
        to_email: 'asantemichael37483@gmail.com',
        message: form.message,
      },
      'EovCyzazF7qmo0tbX').then(() => {
        setLoading(false);
        alert('Thank you. I will revert as soon as I can.');

        setForm({
          name: "",
          email: "",
          message: "",
        });

      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Ooops something went wrong.')
      })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Hire me Now</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          action=""
        >
          <label className='flex flex-col' htmlFor="">
            <span className="font-medium mb-4 text-white">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your Full Name'
              className="bg-tertiary mb-4 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className='flex flex-col' htmlFor="">
            <span className="font-medium mb-4 text-white">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your Email'
              className="bg-tertiary mb-4 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className='flex flex-col' htmlFor="">
            <span className="font-medium mb-4 text-white">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder='Describe your Message/Need'
              className="bg-tertiary mb-4 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary rounded-xl border border-solid border-gray-300"
            type="submit">
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
