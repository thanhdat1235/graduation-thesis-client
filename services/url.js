const API_URL = "http://localhost:4001";
// const API_URL = "http://192.168.100.4:4001";
// const API_URL = "http://192.168.100.47:4001";

// POST_URL
const UPLOAD_IMAGE_URL = `${API_URL}/file-upload/images`;
const FIND_ALL_CATEGORY_URL = `${API_URL}/category/get-all-categories`;
const GET_ALL_POST_URL = `${API_URL}/post`;
const CREATE_POST_URL = `${API_URL}/post/create`;
const GET_ALL_TAGS_URL = `${API_URL}/tag`;
const CREATE_CATEGORY_URL = `${API_URL}/category/create`;
const CREATE_TAG_URL = `${API_URL}/tag/create`;
const FIND_ONE_POST_URL = `${API_URL}/post/`;
const UPDATE_POST_URL = `${API_URL}/post/update/`;
const DELETE_POST_URL = `${API_URL}/post/delete/`;
const DELETE_MANY_POST_URL = `${API_URL}/post/delete-many`;
// PUBLISHER
const CREATE_PUBLISHER_URL = `${API_URL}/publisher/create`;
const GET_ALL_PUBLISHER_URL = `${API_URL}/publisher`;
// SUPPLIER
const CREATE_SUPPLIER_URL = `${API_URL}/supplier/create`;
const GET_ALL_SUPPLIER_URL = `${API_URL}/supplier`;
// AUTHOR
const CREATE_AUTHOR_URL = `${API_URL}/author/create`;
const GET_ALL_AUTHOR_URL = `${API_URL}/author`;
// BOOK_URL
const GET_ALL_BOOK_URL = `${API_URL}/book`;
const CREATE_BOOK_URL = `${API_URL}/book/create`;
const GET_FEATURED_BOOK_URL = `${API_URL}/book/featured`;
const GET_SALE_BOOK_URL = `${API_URL}/book/sale`;
const GET_BOOK_BY_ID_URL = `${API_URL}/book/`;
const GET_SIMILAR_BOOK_URL = `${API_URL}/book/similar/`;
const DELETE_BOOK_URL = `${API_URL}/book/`;

export {
  // Users
  API_URL,
  // Upload Files
  UPLOAD_IMAGE_URL,
  // Categories
  FIND_ALL_CATEGORY_URL,
  CREATE_CATEGORY_URL,
  // Tags
  GET_ALL_TAGS_URL,
  CREATE_TAG_URL,
  // Posts
  GET_ALL_POST_URL,
  CREATE_POST_URL,
  FIND_ONE_POST_URL,
  UPDATE_POST_URL,
  DELETE_POST_URL,
  DELETE_MANY_POST_URL,
  //  PUBLISHER
  CREATE_PUBLISHER_URL,
  GET_ALL_PUBLISHER_URL,
  // SUPPLIER
  CREATE_SUPPLIER_URL,
  GET_ALL_SUPPLIER_URL,
  // AUTHOR
  CREATE_AUTHOR_URL,
  GET_ALL_AUTHOR_URL,
  // BOOK
  GET_ALL_BOOK_URL,
  CREATE_BOOK_URL,
  GET_FEATURED_BOOK_URL,
  GET_SALE_BOOK_URL,
  GET_BOOK_BY_ID_URL,
  GET_SIMILAR_BOOK_URL,
  DELETE_BOOK_URL,
};
