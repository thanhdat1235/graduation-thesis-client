import React, { Fragment, useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import bookService from "../../services/bookService/bookService";
import { convertQueryToJson } from "../../utils/convertQueryToJson";

const bookDetails = () => {
  const url = convertQueryToJson();
  const [book, setBook] = useState("");
  const [similarBook, setSimilarBook] = useState([]);
  useEffect(() => {
    getBookById();
  }, []);
  const getBookById = async () => {
    try {
      const response = await bookService.findBookById({
        id: url.id,
      });
      setBook(response.data);
      getSimilarBook(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarBook = async (id) => {
    try {
      const response = await bookService.findSimilarBook({
        id,
      });
      setSimilarBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <Header />
      <section>
        <div className="container">
          <div className="left">
            <div className="photo">
              <img src={book.avatar_photo} alt="Book" />
              <div className="rating">
                <p>Rate this book</p>
                <div className="stars">
                  <ul>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="far fa-star"></i>
                    </li>
                    <li>
                      <i className="far fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="authors">
              <h2 className="title">{book.name}</h2>
              <h4 className="author">by {book?.authors?.name_author}</h4>
            </div>

            <div className="rating">
              <div className="stars">
                <ul>
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <i className="far fa-star"></i>
                  </li>
                  <li>
                    <i className="far fa-star"></i>
                  </li>
                </ul>
              </div>
              <p>12,781 ratings</p>
              <h3 className="price">
                Giá bán: {Intl.NumberFormat("en-US").format(book.price)} VND
              </h3>
            </div>

            <p className="description">
              <span className="desc">Tác giả:</span> {book?.authors?.introduce}
            </p>
            <p className="description">
              <span className="desc">Tác phẩm:</span> {book.description}
            </p>
          </div>
        </div>
      </section>

      <main>
        <div className="book-section-container">
          <div className="book-section section-c">
            <h2>Similar Books</h2>
            <div className="card-wraper">
              {similarBook.map((item) => (
                <div className="card" key={item._id}>
                  <img
                    src={item.avatar_photo}
                    alt="Book"
                    srcSet={item.avatar_photo}
                  />
                  <h3>{item.name}</h3>
                  <p>by {item.authors.name_author}</p>
                  <div className="btn btn-primary">Read More</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default bookDetails;
