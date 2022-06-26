import React, { createContext, useState } from 'react';
import { getCourseUserByUserId } from '../services/api/courseUserAction';
import { getUserById } from '../services/api/userAction';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //TODO: working on return only authenticated user
  const [user, setUser] = useState({});
  const [courseUser, setCourseUser] = useState([]);

  const loadUserById = async (id) => {
    try {
      const result = await getUserById(id);
      setUser(result);
    } catch (err) {
      console.error(err);
    }
  }

  const loadCourseUserByUserId = async (userId) => {
    try {
      const result = await getCourseUserByUserId(userId);
      setCourseUser(result);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        courseUser,
        loadUserById,
        loadCourseUserByUserId
      }}
    >
      {children}
    </UserContext.Provider>
  )
}