package com.me.pojo;

public class Camera {
	String name;
	String rtmpPath;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRtmpPath() {
		return rtmpPath;
	}
	public void setRtmpPath(String rtmpPath) {
		this.rtmpPath = rtmpPath;
	}
	public Camera(String name, String rtmpPath) {
		super();
		this.name = name;
		this.rtmpPath = rtmpPath;
	}
	public Camera(){
		
	}
}
