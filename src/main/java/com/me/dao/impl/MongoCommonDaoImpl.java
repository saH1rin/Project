package com.me.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.me.dao.MongoCommonDao;

public class MongoCommonDaoImpl<T> implements MongoCommonDao<T>{
	
	@Autowired
	MongoTemplate mongoTemplate;
	
	@Override
	public void save(T t) {
		mongoTemplate.save(t);
	}

	@Override
	public List<T> find(T t) {
		return (List<T>) mongoTemplate.findAll(t.getClass());
	}

}
