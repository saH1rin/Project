package com.me.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.me.pojo.Users;
import com.me.service.UsersService;

@Controller
public class Regist {
	
	@Autowired
	private UsersService usersService;
	
	@RequestMapping(value="/regist")
	public String regist(Users users){
		usersService.saveUsers(users);
		return "login.html";
	}

}
