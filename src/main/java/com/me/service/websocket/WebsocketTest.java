package com.me.service.websocket;

import javax.annotation.Resource;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class WebsocketTest {
	@Resource
    private SimpMessagingTemplate simpMessagingTemplate;   
	
	@MessageMapping("/topic")  //前面我们全局配置中指定了服务端接收的连接以 app开头，所以客户端发送公告的请求连接应该是/app/change-notice。
	@SendTo("/topic/notice")
	public String testMessage(){
		//this.simpMessagingTemplate.convertAndSend("hello");
		return "hello!";
	}
}
