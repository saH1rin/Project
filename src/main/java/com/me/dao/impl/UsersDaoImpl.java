package com.me.dao.impl;


import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.me.dao.UsersDao;
import com.me.pojo.Users;

@Repository
public class UsersDaoImpl extends MongoCommonDaoImpl<Users> implements UsersDao{

	@Override
	public Users findUsersByEmail(String email) {
		Query query = new Query(Criteria.where("email").is(email));
		Users users = mongoTemplate.findOne(query, Users.class);
		return users;
	}

}
