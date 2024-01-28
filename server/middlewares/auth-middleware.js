import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized user, please login.",
    });
  }

  console.log("Token from middleware:", token);

  const jwtToken = token.replace("Bearer", "").trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);
    console.log(isVerified);

    const data = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    console.log(data);

    if (!data) {
      return res.status(401).json({
        message: "User not found.",
      });
    }

    req.user = data;
    req.token = token;
    req.id = data._id;

    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    return res.status(401).json({
      message: "Invalid token.",
    });
  }
};


export const adminMiddleware = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user || !user.isAdmin) {
      return res.status(403).json({
        message: "You are not authorized to access this resource.",
      });
    }

    next();
  } catch (error) {
    console.error("Error in admin middleware:", error);
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};