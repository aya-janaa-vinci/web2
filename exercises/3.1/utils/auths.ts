/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import jwt from "jsonwebtoken";
import { readOneUserFromUsername } from "../services/users";
import { NextFunction, RequestHandler, Response } from "express";
import { AuthenticatedRequest, JwtPayload, User } from "../types";

const jwtSecret = "ilovemypizza!";

const authorize = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.get("authorization"); //recupère "authorization" dans le corps de la requete
  if (!token) { //si pas présent dans le corps, accès refusé
    return res.sendStatus(401);
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload; //Si le token est valide, jwt.verify retourne le payload décodé.
    const { username } = decoded;

    const existingUser = readOneUserFromUsername(username);

    if (!existingUser) {
      return res.sendStatus(401);
    }

    req.user = existingUser; // request.user object is available in all other middleware functions
    return next();
  } catch (err) {
    console.error("authorize: ", err);
    return res.sendStatus(401);
  }
};

const isAdmin: RequestHandler = (req: AuthenticatedRequest, res, next) => {
  const { username } = req.user as User;

  if (username !== "admin") {
    return res.sendStatus(403);
  }
  return next();
};

export { authorize, isAdmin };