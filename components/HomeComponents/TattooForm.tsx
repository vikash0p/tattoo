'use client'

// TattooForm.tsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Calendar } from "@/components/ui/calendar";


interface FormValues {
  name: string;
  email: string;
  date: string;
  time: string;
  tattooType: string;
  tattooPersonName: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  tattooType: Yup.string().required('Tattoo type is required'),
  tattooPersonName: Yup.string().required('Tattoo person name is required'),
});

const TattooForm: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    date: '',
    time: '',
    tattooType: '',
    tattooPersonName: '',
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // You can handle form submission logic here
  };

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="bg-white   px-10 py-12  ">
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="name"
                ></label>
                <Field
                  className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* email */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="email"
                ></label>
                <Field
                  className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              {/* date */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="date"
                ></label>
                <Field
                  className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                  type="date"
                  name="date"
                  id="date"
                  placeholder="date"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              {/* time */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="time"
                ></label>
                <Field
                  className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                  type="time"
                  name="time"
                  id="time"
                  placeholder="time"
                />
                <ErrorMessage
                  name="time"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              {/* tattoo types */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="tattooType"
                ></label>
                <Field
                  as="select"
                  name="tattooType"
                  id="tattooType"
                  className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                >
                  <option value="">Select tattoo type</option>
                  <option value="Design 1">Design 1</option>
                  <option value="Design 2">Design 2</option>
                  <option value="Design 3">Design 3</option>
                </Field>
                <ErrorMessage
                  name="tattooType"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* tattoo person name */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="tattooPersonName"
                ></label>
                <Field
                  as="select"
                  name="tattooPersonName"
                  id="tattooPersonName"
                  className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                >
                  <option value="">Select artiest name</option>
                  <option value="Binny">Binny</option>
                  <option value=" Brijesh">Brijesh</option>
                  <option value="Guru">Grue</option>
                </Field>
                <ErrorMessage
                  name="tattooPersonName"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              {/* Add other fields similarly */}
            </div>
            <div className="w-full py-8">
              <button
                type="submit"
                className="bg-orange-500 w-full hover:bg-orange-700 text-white font-bold py-4 px-4 focus:outline-none focus:-outline"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TattooForm;
