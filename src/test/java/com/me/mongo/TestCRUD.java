package com.me.mongo;

import java.net.UnknownHostException;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

import com.me.pojo.Camera;
import com.mongodb.Mongo;
import com.mongodb.MongoClient;

public class TestCRUD {

	@Test
	public void insert() throws UnknownHostException {
		MongoOperations mongoOps = new MongoTemplate(new SimpleMongoDbFactory(
				new MongoClient(), "test"));
		Camera c = new Camera("Joe", "aaa");
		// Insert is used to initially store the object into the database.
		mongoOps.insert(c);
		// log.info("Insert: " + p);
	}
	@Test
	public void find() throws UnknownHostException {
		MongoOperations mongoOps = new MongoTemplate(new SimpleMongoDbFactory(
				new MongoClient(), "test"));
		Camera c = new Camera("Joe", "aaa");
		// Find
		c = mongoOps.findById(c.getName(), Camera.class);
		// log.info("Found: " + p);
	}
	@Test
	public void update() throws UnknownHostException {
		MongoOperations mongoOps = new MongoTemplate(new SimpleMongoDbFactory(
				new MongoClient(), "test"));
		Camera c = new Camera("Joe", "aaa");
		// Update
		//mongoOps.updateFirst(query(where("name").is("Joe")), update("age", 35),
		//		Camera.class);
		//c = mongoOps.findOne(query(where("name").is("Joe")), Camera.class);
		// log.info("Updated: " + p);
	}
	@Test
	public void delete() throws UnknownHostException {
		MongoOperations mongoOps = new MongoTemplate(new SimpleMongoDbFactory(
				new MongoClient(), "test"));
		Camera c = new Camera("Joe", "aaa");
		// Delete
		mongoOps.remove(c);

		// Check that deletion worked
		List<Camera> camera = mongoOps.findAll(Camera.class);
		// log.info("Number of people = : " + people.size());
		mongoOps.dropCollection(Camera.class);
	}

}
