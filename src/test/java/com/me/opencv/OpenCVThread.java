package com.me.opencv;

public class OpenCVThread extends Thread{
	private String path;
	@Override
	public void run() {
		OpencvTest op = new OpencvTest();
		op.opencvCapture(path);
	}
	public OpenCVThread(String path) {
		super();
		this.path = path;
	}

}
