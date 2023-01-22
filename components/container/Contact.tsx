import React, { useState } from 'react';
import hocWrapper from '../hoc/hocWrapper';
import Heading from '../ui/Heading';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { client } from '../../utils/client';
import { motion } from 'framer-motion';

interface formData {
  username: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<formData>({
    username: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { username, email, message } = formData;

  const handleChangeInput = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: username,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsSubmitted(true);
      })
      .catch(err => setError(err || 'Something went wrong'));
  };

  return (
    <div className="flex flex-col items-center md:w-[700px] justify-center">
      <Heading>Contact me in to sanity</Heading>
      <div className="flex items-center  gap-8 text-white/80 flex-col md:flex-row">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="flex items-center justify-center gap-2 bg-black/60 px-6 py-4 rounded-xl hover:text-white transition-all"
        >
          <AiOutlineMail className="w-8 h-8 " />
          <a href="mailto:Danevac@seznam.cz" className="">
            Danevac@seznam.cz
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="flex items-center justify-center gap-2 bg-black/60 px-6 py-4 rounded-xl hover:text-white transition-all"
        >
          <AiOutlinePhone className="w-8 h-8 " />
          <a href="tel:+420 605 523 247" className="">
            +420 605 523 247
          </a>
        </motion.div>
      </div>
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col justify-center gap-4 mt-10 mb-10 w-full"
        >
          <motion.div
            whileInView={{ x: [50, 0] }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            <input
              className="w-full py-4 px-6 rounded-lg outline-none bg-black/60 text-white/80"
              type="text"
              name="username"
              value={username}
              onChange={handleChangeInput}
              placeholder="Your name"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-50, 0] }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              className="w-full py-4 px-6 rounded-lg outline-none bg-black/60 text-white/80"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [50, 0] }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            <textarea
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              className="w-full py-4 px-6 rounded-lg outline-none h-48 bg-black/60 text-white/80"
            />
          </motion.div>
          <motion.button
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="bg-black/60 py-4 px-6 rounded-xl text-white/80 hover:bg-black/80 hover:text-white transition-all"
            type="button"
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </motion.button>
          {error && <p>{error}</p>}
        </form>
      ) : (
        <div className="h-64 flex items-center justify-center">
          <p className="text-2xl font-semibold">
            Thank you for getting in touch!
          </p>
        </div>
      )}
    </div>
  );
};

export default hocWrapper(Contact);
