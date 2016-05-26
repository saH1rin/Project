package com.me.service.websocket;

import javax.annotation.Resource;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SendMessage {
	@Resource
    private SimpMessagingTemplate simpMessagingTemplate;  
	

	@RequestMapping("/sendMessage")  
	public void testMessage(){
		this.simpMessagingTemplate.convertAndSend("/topic/notice","hello");
	}
}
