package com.me.dao;

import com.me.pojo.Users;

public interface UsersDao extends MongoCommonDao<Users>{
	public Users findUsersByEmail(String email);
}
