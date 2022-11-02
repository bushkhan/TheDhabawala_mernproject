import React from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { useState, Fragment } from "react";

const Read = ({ contact, handleEditClick, handleDeleteClick }) => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3500/api/reservations/')
          .then((res) => {
            setMyData(res.data);
            console.log(res.data);
          }).catch(err => {
            console.log(err);
          })
      }, []);
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.newCode}</td>
      <td>{contact.mobile}</td>
      <td>{contact.email}</td>
      <td>{contact.noOfPeople}</td>
      <td>
        {/* <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button> */}
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Read;