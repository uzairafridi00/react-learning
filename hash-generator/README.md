# Hashing (Hash Function)

Hash functions are often used to produce digital fingerprints of data.

Hashing is used most notably in the blockchain, which uses transaction information such as the amount being sent, transaction timestamps, and the sending and receiving address to generate a transaction ID. This information is combined and run through to a hash function to produce the ID, which is used to identify if the transaction has happened. Thus, this ID should be immutable, unique, secure, and free from collisions.

Some of the Hashing algorithms are as following: <br />
SHA-1, SHA-256, SHA-384, and SHA-512

## What is hashing?

Hashing is the processing of converting a given random input value to generate completely unique keys. Hashing uses special mathematical functions called hashing algorithms, also known as hash functions, which are computations that converts an input value into a fixed-length, unique, and immutable hashed string. The input value can be a large number, a long string of text, or a combination of both. The function will always create a fixed-sized output, regardless of the length of the input value.

## Difference between Hashing and Encryption

Hashing differs from the concept of data encryption. The hashing process is always non-reversible, while encrypted data can be. Encryption is intended to function in two ways: you can encrypt data to keep it safe, and you can also decrypt the same data to reveal the original input.

<br />

`npm install crypto-hash` 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.