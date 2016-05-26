package com.me.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.me.dao.CameraDao;
import com.me.pojo.Camera;

@Controller
public class GetCamera {
	
	@Resource(name="com.me.dao.impl.CameraDaoImpl")
	private CameraDao cameraDao;
	
	@RequestMapping(value="/getCamera")
	public String getCamera(Camera c ,Model model){
		List<Camera> list = cameraDao.find(c);
		model.addAttribute("cameras",list);
		return "getCamera.jsp";
	}
}
