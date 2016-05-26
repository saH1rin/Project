package com.me.opencv;

public class OpenCVThreadWeb extends Thread{
	private String path;
	@Override
	public void run() {
		OpencvTest op = new OpencvTest();
		op.opencvCapture(path);
	}
	public OpenCVThreadWeb(String path) {
		super();
		this.path = path;
	}

}
