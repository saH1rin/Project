package com.me.action;


import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.me.dao.CameraDao;
import com.me.opencv.OpenCVThreadWeb;
import com.me.pojo.Camera;

@Controller
public class SetCamera {
	static{
		System.loadLibrary("OpencvJNI");
	}
	@Resource(name="com.me.dao.impl.CameraDaoImpl")
	private CameraDao cameraDao;
	
	@RequestMapping(value="/setCamera")
	public String saveCamera(Camera c){
		cameraDao.save(c);
		new OpenCVThreadWeb(c.getRtmpPath()).start();
		return "setCamera.jsp";
	}
}
