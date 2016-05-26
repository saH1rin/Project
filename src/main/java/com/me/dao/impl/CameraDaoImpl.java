package com.me.dao.impl;

import org.springframework.stereotype.Repository;

import com.me.dao.CameraDao;
import com.me.pojo.Camera;

@Repository("com.me.dao.impl.CameraDaoImpl")
public class CameraDaoImpl extends MongoCommonDaoImpl<Camera> implements CameraDao {

}
