import {
  postComment,
  deleteComment,
  updateComment,
  getComments,
} from "./comments";

import {
  postStatus,
  getStatus,
  deletePost,
  getPosts,
  updatePost,
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
  updateComment,
  getComments,
  postStatus,
  getStatus,
  deletePost,
  getPosts,
  updatePost,
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
