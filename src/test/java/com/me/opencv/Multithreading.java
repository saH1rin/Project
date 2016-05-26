package com.me.opencv;

import org.junit.Before;
import org.junit.Test;

public class Multithreading {
	
	static{
		System.loadLibrary("OpencvJNI");
	}
	@Test
	public void threadTest(){
		new OpenCVThread("rtmp://localhost/live/test").start();
		new OpenCVThread("rtmp://localhost/live/test1").start();
		System.out.println("11111");
	}
}
