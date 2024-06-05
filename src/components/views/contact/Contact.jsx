import React, { useRef, useState } from 'react'
import useEmailService from '@/services/EmailService';
import { Socials } from '@/constants/data/socials';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
    const formRef = useRef();
    const { sendEmail, loading } = useEmailService();

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(formRef.current);
    };

    return (
        <>
            <div className="contact__container">
                <div className="mb-8">
                    <h3 className="mb-4 font-semibold">Find me on social media</h3>
                    <div className="flex md:flex-row gap-2 justify-center">
                        {Socials.map((social, index) => (
                            <Link title={social.label} href={social.link} target='_blank' className={`w-full flex gap-2 justify-center p-2 text-white rounded-md`} style={{ backgroundColor: social.background }} key={index}>
                                <Image src={social.icon} alt="" srcSet="" />
                                <div className="hidden md:block">{social.label}</div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <h3 className="mb-4 font-semibold">Or send me a message</h3>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="contact__form">
                        <div className="flex-col flex md:flex-row md:gap-4 justify-evenly"
                        >
                            <div className="form-control">
                                <div className="form-label">Name</div>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Insert your name *"
                                    name="name"
                                    required={true}
                                />
                            </div>
                            <div className="form-control">
                                <div className="form-label">Mail</div>
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="Insert your email *"
                                    name="email"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="form-control !h-40">
                            <div className="form-label">Project Description</div>
                            <textarea
                                name="project"
                                id=""
                                cols="30"
                                rows="10"
                                required={true}
                                placeholder="Write me your project description *"
                                className="form-input resize-none "
                            ></textarea>
                        </div>
                        <button className="btn !w-full md:!w-fit text-center justify-center">
                            {loading ? (
                                <i className="bx bx-loader bx-spin"></i>
                            ) : (
                                <i className="bx bx-mail-send"></i>
                            )}{" "}
                            {loading ? "Sending..." : "Send a Message"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact