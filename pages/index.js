import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bookService from "../services/bookService/bookService";

export default function Home() {
  const [dataMustRead, setDataMustRead] = useState([]);
  const [dataBestSale, setDataBestSale] = useState([]);
  const [dataAllBook, setDataAllBook] = useState([]);
  useEffect(() => {
    getFeaturedBook();
    getSaleBook();
    getAllBook();
  }, []);
  const getFeaturedBook = async (req, res, next) => {
    try {
      const response = await bookService.findFeaturedBook({});
      setDataMustRead(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSaleBook = async () => {
    try {
      const response = await bookService.findSaleBook({});
      setDataBestSale(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBook = async () => {
    try {
      const response = await bookService.getAllBook({});
      setDataAllBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <div className="hero"></div>
      <main>
        <div className="book-section-container">
          <div className="book-section section-a">
            <h2>Must Read</h2>
            <div className="card-wraper">
              {dataMustRead.map((item) => (
                <div className="card" key={item._id}>
                  <img
                    src={item.avatar_photo}
                    alt="Book"
                    srcSet={item.avatar_photo}
                  />
                  <h3>{item.name}</h3>
                  <p>by {item.authors.name_author}</p>
                  <p className="text-danger">
                    Giá bán:{" "}
                    <span className="mini-price">
                      {Intl.NumberFormat("en-US").format(item.price)} VND
                    </span>
                  </p>
                  <a
                    className="btn btn-primary"
                    href={`/books/book-detail?id=${item._id}`}
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="book-section section-b">
            <h2>Best Selling Books</h2>
            <div className="card-wraper">
              {dataBestSale.map((item) => (
                <div className="card" key={item._id}>
                  <img
                    src={item.avatar_photo}
                    alt="Book"
                    srcSet={item.avatar_photo}
                  />
                  <h3>{item.name}</h3>
                  <p>by {item.authors.name_author}</p>
                  <p className="text-danger">
                    Giá bán:{" "}
                    <span className="mini-price">
                      {Intl.NumberFormat("en-US").format(item.price)} VND
                    </span>
                  </p>
                  <a
                    className="btn btn-primary"
                    href={`/books/book-detail?id=${item._id}`}
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="book-section section-c">
            <h2>Popular This Month</h2>
            <div className="card-wraper">
              {dataAllBook.map((item) => (
                <div className="card" key={item._id}>
                  <img
                    src={item.avatar_photo}
                    alt="Book"
                    srcSet={item.avatar_photo}
                  />
                  <h3>{item.name}</h3>
                  <p>by {item.authors.name_author}</p>
                  <p className="text-danger">
                    Giá bán:{" "}
                    <span className="mini-price">
                      {Intl.NumberFormat("en-US").format(item.price)} VND
                    </span>
                  </p>
                  <a
                    className="btn btn-primary"
                    href={`/books/book-detail?id=${item._id}`}
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
