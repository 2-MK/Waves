const express = require('express');
const {
  signup,
  signin,
  logout,
  getProfile,
  checkAdmin,
  checkUser,
} = require('../controllers/authController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);

// Protected routes
router.get('/profile', protect, getProfile);
router.get('/check-user', protect, checkUser);
router.get('/check-admin', protect, authorize('admin'), checkAdmin);

module.exports = router;