import { postComment, deleteComment, getComments } from "./comments";

import {
  postStatus,
  getStatus,
  deletePost,
  getPosts,
  getSingleStatus,
} from "./posts";

import {
  getAllUsers,
  getSingleUser,
  postUserData,
  getCurrentUser,
  editProfile,
} from "./users";

import { likePost, getLikesByUser } from "./likes";

import { uploadImage, uploadPostImage } from "./image-upload";

export {
  postComment,
  deleteComment,
  getComments,
  postStatus,
  getStatus,
  deletePost,
  getPosts,
  getSingleStatus,
  getAllUsers,
  getSingleUser,
  postUserData,
  getCurrentUser,
  editProfile,
  likePost,
  getLikesByUser,
  uploadImage,
  uploadPostImage,
};
