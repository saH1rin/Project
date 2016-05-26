package com.me.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

public interface MongoCommonDao<T> {

	void save(T t);

	List<T> find(T t);
	
}
