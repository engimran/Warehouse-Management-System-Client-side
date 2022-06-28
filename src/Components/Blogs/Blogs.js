import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Difference between javascript and nodejs:</h2>
            <p>Javascript:</p>
            <p>JavaScript is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feel.</p>
            <p>node.js:</p>
            <p>NodeJs is an open source, cross-platform environment that allows you to create server-side applications and tools using JavaScript.</p>
            <h2>Differences between sql and nosql databases:</h2>
            <p>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases whereas NoSQL is a Non-relational or Distributed Database.

                Comparing SQL vs NoSQL database, SQL databases are table based databases whereas NoSQL databases can be document based, key-value pairs, graph databases.
                SQL databases are vertically scalable while NoSQL databases are horizontally scalable.
                SQL databases have a predefined schema whereas NoSQL databases use dynamic schema for unstructured data.
                Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>

            <h2>What is the purpose of jwt and how does it work</h2>
            <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>

        </div>
    );
};

export default Blogs;