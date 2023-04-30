import React from "react";
import { ContactProps } from "../interfaces/ContactProps";
import APIClient from "../classes/APIClient";
import { useLoaderData } from "react-router-dom";

const ApiClient = new APIClient("data/contact.json");

export const loader = async (): Promise<ContactProps[]> => {
  const contactData = await ApiClient.getData();
  const contact: ContactProps[] = contactData?.contactData || [];
  return contact;
};

const Contact: React.FC = () => {
  const contact: ContactProps[] = useLoaderData() as ContactProps[];
  return (
    <div className="contact">
      <h2 className="contact__header">Get in touch!</h2>
      {contact ? (
        contact.map((cont) => (
          <div>
            <div>{cont.name}</div>
            <div>{cont.title}</div>
            <div>{cont.email}</div>
            <div>{cont.phone}</div>
            <div>{cont.address}</div>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Contact;
