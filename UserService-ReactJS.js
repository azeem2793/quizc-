import React, { useState, useEffect } from 'react';

const useUserService = () => {
  const apiUrl = 'https://api.example.com/users';

  const getUsers = async () => {
    try {
      const response = await fetch(apiUrl);
      const users = await response.json();
      return users.map(user => ({
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        avatarUrl: user.avatar
      }));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const saveUser = async (user) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.status === 200) {
        const res = await response.json();
        return {
          id: res.id,
          name: `${res.first_name} ${res.last_name}`,
          email: res.email,
          avatarUrl: res.avatar
        };
      } else {
        throw new Error('Error saving user');
      }
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return { getUsers, saveUser };
};

export default useUserService;
