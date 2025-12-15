import { useState, useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

//initial form values
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
};
//validation schema
const ContactSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
        .email("Put a valid email address")
        .required("I need your email address"),
    message: Yup.string().required("Tell me what's on your mind"),
});

export default function Contact() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        // Initialize EmailJS with public key
        emailjs.init({
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center px-4 pt-24 lg:pt-32">
            <div className="w-full max-w-[900px]">
                <h1 className="mb-2 md:mb-4 text-3xl md:text-4xl max-w-2xl">
                    Ready to eliminate tedious work and accelerate your operations?
                </h1>
                <h1 className="mb-12 text-3xl md:text-4xl bg-gradient-to-r from-[#4f8df0] to-[#5cd4ec] bg-clip-text text-transparent">
                                     
                        Let's automate it.
                 
                </h1>

                <Formik
                    initialValues={initialValues}
                    validationSchema={ContactSchema}
                    onSubmit={(values, { resetForm }) => {
                        emailjs
                            .send(
                                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                                {
                                    from_name: `${values.firstName} ${values.lastName}`,
                                    from_email: values.email,
                                    message: values.message,
                                }
                            )
                            .then(() => {
                                resetForm();
                                setShowSuccess(true);
                                setError(false);
                            })
                            .catch((err) => {
                                setError(true);
                                setShowSuccess(false);
                                console.error(err);
                            });
                    }}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form className="space-y-6" ref={formRef}>
                            {/* Name Fields */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="flex-1">
                                    <label
                                        htmlFor="firstName"
                                        className="block"
                                    >
                                        First Name *
                                    </label>
                                    <Field
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className={`w-full text-xl md:text-2xl py-2 bg-transparent border-0 border-b-[1px] ${
                                            errors.firstName &&
                                            touched.firstName
                                                ? "border-b-red-500"
                                                : "border-b-slate-600"
                                        } focus:outline-none focus:border-b-sky-400 transition-colors`}
                                        placeholder="Jane"
                                    />
                                    <ErrorMessage
                                        name="firstName"
                                        component="p"
                                        className="mt-2 text-sm text-red-500"
                                    />
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="lastName" className="block">
                                        Last Name *
                                    </label>
                                    <Field
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className={`w-full text-xl md:text-2xl py-2 bg-transparent border-0 border-b-[1px] ${
                                            errors.lastName && touched.lastName
                                                ? "border-b-red-500"
                                                : "border-b-slate-600"
                                        } focus:outline-none focus:border-b-sky-400 transition-colors`}
                                        placeholder="Smith"
                                    />
                                    <ErrorMessage
                                        name="lastName"
                                        component="p"
                                        className="mt-2 text-sm text-red-500"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block">
                                    Email *
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`w-full text-xl md:text-2xl py-2 bg-transparent border-0 border-b-[1px] ${
                                        errors.email && touched.email
                                            ? "border-b-red-500"
                                            : "border-b-slate-600"
                                    } focus:outline-none focus:border-b-sky-400 transition-colors`}
                                    placeholder="janesmith@email.com"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="mt-2 text-sm text-red-500"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block">
                                    Message *
                                </label>
                                <Field
                                    as="textarea"
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className={`w-full text-xl md:text-2xl py-2 bg-transparent border-0 border-b-[1px] ${
                                        errors.message && touched.message
                                            ? "border-b-red-500"
                                            : "border-b-slate-600"
                                    } focus:outline-none focus:border-b-sky-400 transition-colors resize-none`}
                                    placeholder="My message"
                                />
                                <ErrorMessage
                                    name="message"
                                    component="p"
                                    className="mt-2 text-sm text-red-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <div className="relative inline-block w-[140px] h-[44px]">
                                    {/* Main button that morphs into loader */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || showSuccess}
                                        className={`
        absolute inset-0 flex items-center justify-center
        rounded-full border-2 transition-all duration-300
        disabled:cursor-not-allowed
        ${
            isSubmitting
                ? "w-10 h-10 left-1/2 -translate-x-1/2 bg-transparent border-none text-[0px]"
                : "w-full h-full bg-white border-white text-slate-800 hover:bg-slate-300 text-sm font-semibold"
        }
        ${showSuccess ? "scale-0 opacity-0" : "scale-100 opacity-100"}
      `}
                                    >
                                        {isSubmitting ? (
                                            <span
                                                className="
                                                  block w-6 h-6 rounded-full
                                                  border-2 border-white
                                                  border-b-transparent border-l-transparent
                                                  animate-spin
                                                "
                                            />
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>

                                    {/* Success check icon (appears after loading) */}
                                    <div
                                        className={`
                                          absolute inset-0 flex items-center justify-center
                                          text-emerald-400 text-2xl
                                          transition-all duration-300
                                          ${
                                              showSuccess
                                                  ? "scale-100 opacity-100"
                                                  : "scale-0 opacity-0"
                                          }
                                        `}
                                    >
                                        {/* Simple SVG checkmark */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-7 h-7"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {showSuccess && (
                                <p className="text-emerald-400 text-lg font-medium">
                                    ✓ Your message was sent successfully! I'll be in touch soon.
                                </p>
                            )}

                            {error && (
                                <p className="text-red-500">Something went wrong, please try again.</p>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
