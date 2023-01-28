import React, { FormEvent, useEffect, useState } from 'react';
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
  const [error, setError] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
      .catch(err => setError(true))
      .finally(() => setFormData({ username: '', email: '', message: '' }));
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);
  return (
    <div className="flex flex-col items-center w-[500px] md:w-[700px] justify-center">
      <Heading>Contact me</Heading>
      <div className="flex items-center gap-8 text-white/80 flex-col md:flex-row">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="linkWrapperClass"
        >
          <AiOutlineMail className="w-8 h-8 " />
          <a href="mailto:Danevac@seznam.cz" className="">
            Danevac@seznam.cz
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="linkWrapperClass"
        >
          <AiOutlinePhone className="w-8 h-8 " />
          <a href="tel:+420 605 523 247" className="">
            +420 605 523 247
          </a>
        </motion.div>
      </div>
      {!isSubmitted && !error ? (
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
              className="actionClass"
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
              className="actionClass"
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
              className="actionClass h-48"
            />
          </motion.div>
          <motion.button
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="actionClass w-max hover:text-white transition-all"
            type="submit"
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </motion.button>
          {error && <p>Something went wrong!</p>}
        </form>
      ) : (
        <div className="h-64 flex items-center justify-center">
          <p className="text-2xl font-semibold text-white/90">
            Thank you for message!
          </p>
        </div>
      )}
    </div>
  );
};

export default hocWrapper(Contact);
