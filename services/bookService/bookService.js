import axiosService from "../axiosService";
import axios from "axios";
import {
  GET_ALL_BOOK_URL,
  CREATE_TAG_URL,
  CREATE_CATEGORY_URL,
  FIND_ALL_CATEGORY_URL,
  GET_ALL_TAGS_URL,
  CREATE_PUBLISHER_URL,
  CREATE_SUPPLIER_URL,
  GET_ALL_PUBLISHER_URL,
  GET_ALL_SUPPLIER_URL,
  CREATE_AUTHOR_URL,
  GET_ALL_AUTHOR_URL,
  CREATE_BOOK_URL,
  GET_FEATURED_BOOK_URL,
  GET_SALE_BOOK_URL,
  GET_BOOK_BY_ID_URL,
  GET_SIMILAR_BOOK_URL,
  DELETE_BOOK_URL,
} from "../url";

const bookService = {
  createPublisher: async (params) => {
    return axios({
      method: "POST",
      url: CREATE_PUBLISHER_URL,
      data: params,
    });
  },

  createSupplier: async (params) => {
    return axios({
      method: "POST",
      url: CREATE_SUPPLIER_URL,
      data: params,
    });
  },

  createCategory: async (params) => {
    return axios({
      method: "POST",
      url: CREATE_CATEGORY_URL,
      data: params,
    });
  },

  createTags: async (params) => {
    return axios({
      method: "POST",
      url: CREATE_TAG_URL,
      data: params,
    });
  },

  createAuthor: async (params) => {
    return axios({
      method: "POST",
      url: CREATE_AUTHOR_URL,
      data: params,
    });
  },

  getAllAuthor: async (params) => {
    return axios({
      method: "GET",
      url: GET_ALL_AUTHOR_URL,
    });
  },

  getAllBook: async (params) => {
    return axios({
      url: GET_ALL_BOOK_URL,
      method: "GET",
      data: params,
    });
  },

  getAllPublisher: async (params) => {
    return axios({
      url: GET_ALL_PUBLISHER_URL,
      method: "GET",
    });
  },

  getAllSupplier: async (params) => {
    return axios({
      url: GET_ALL_SUPPLIER_URL,
      method: "GET",
    });
  },

  getAll: async (params) => {
    return axios({
      url: FIND_ALL_CATEGORY_URL,
      method: "GET",
      data: params,
    });
  },

  getAllTags: async (params) => {
    return axios({
      url: GET_ALL_TAGS_URL,
      method: "GET",
      data: params,
    });
  },

  findOneBook: async (params) => {
    return axios({
      url: `${FIND_ONE_POST_URL}${params.id}`,
      method: "GET",
    });
  },

  createBook: async (params) => {
    return axios({
      url: CREATE_BOOK_URL,
      method: "POST",
      data: params,
    });
  },

  findFeaturedBook: async (params) => {
    return axios({
      url: GET_FEATURED_BOOK_URL,
      method: "GET",
    });
  },

  findSaleBook: async (params) => {
    return axios({
      url: GET_SALE_BOOK_URL,
      method: "GET",
    });
  },

  findBookById: async (params) => {
    return axios({
      url: `${GET_BOOK_BY_ID_URL}${params.id}`,
      method: "GET",
    });
  },

  findSimilarBook: async (params) => {
    // console.log(params.id);
    return axios({
      url: `${GET_SIMILAR_BOOK_URL}${params.id}`,
      method: "GET",
    });
  },
};

export default bookService;
