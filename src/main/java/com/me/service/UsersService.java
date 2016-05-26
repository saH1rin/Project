package com.me.service;

import com.me.pojo.Users;

public interface UsersService {
	public void saveUsers(Users users);
	public Users findUsersByEmail(String email);
}
