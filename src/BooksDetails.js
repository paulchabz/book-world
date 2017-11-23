/* Search Book Component where books will be rendered  */
/* on the main page of the app */
import React, { Component } from "react";
import { string } from "prop-types";
import { Link } from "react-router-dom";
import "./BooksDetails.css";

const BooksDetails = props => (
  <Link to={`/details/${props.bkId}`}>
    <div className="books">
      <img
        alt={`${props.title}`}
        src={require(`./images/posters/${props.poster}`)}
      />
      <div>
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  </Link>
);

BooksDetails.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  author: string.isRequired,
  description: string.isRequired
};

export default BooksDetails;
