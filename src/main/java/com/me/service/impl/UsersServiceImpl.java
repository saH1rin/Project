package com.me.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.me.dao.UsersDao;
import com.me.pojo.Users;
import com.me.service.UsersService;

@Service
public class UsersServiceImpl implements UsersService{
	@Autowired
	private UsersDao usersDao;
	
	public void saveUsers(Users users){
		usersDao.save(users);
	}

	@Override
	public Users findUsersByEmail(String email) {
		Users users = usersDao.findUsersByEmail(email);
		return users;
	}

}
