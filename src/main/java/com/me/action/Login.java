package com.me.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.me.pojo.Users;
import com.me.service.UsersService;

@Controller
public class Login {
	
	@Autowired
	private UsersService usersService;
	
	@RequestMapping(value="/login")
	public String authenticate(String email,String password,HttpServletRequest request){
		HttpSession session = request.getSession();
		Users users = usersService.findUsersByEmail(email);
		if(null != users){
			if(users.getPassword().equals(password)){
				session.setAttribute("user", users);
				return "/starter.jsp";
			}
			return "/login.html"; //密码错误
		}
		return "/login.html"; //用户不存在
	}
}
