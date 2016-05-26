<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!-- Content Header (Page header) -->
<section class="content-header">
	<h1>
		配置摄像头 <small>Camera Config</small>
	</h1>
</section>

<!-- Main content -->
<section class="content">

	<!-- Your Page Content Here -->
	<div class="row">
		<!-- left column -->
		<div class="col-md-6">
			<!-- general form elements -->
			<div class="box box-primary">
				<div class="box-header with-border">
					<h3 class="box-title">添加摄像头</h3>
				</div>
				<!-- /.box-header -->
				<!-- form start -->
				<form role="form" action="/OpenCVInWeb/setCamera.action"
					id="setCameraForm">
					<div class="box-body">
						<div class="form-group">
							<label for="cameraName">摄像头名称</label>
							<div class="input-group">
								<div class="input-group-btn">
									<button type="button" class="btn btn-warning dropdown-toggle"
										data-toggle="dropdown" aria-expanded="false" id="type">
										Type <span class="fa fa-caret-down"></span>
									</button>
									<ul class="dropdown-menu">
										<li><a href="javascript:void(0);"
											onclick="changeCameraType('1')">普通摄像头</a></li>
										<li><a href="javascript:void(0);"
											onclick="changeCameraType('2')">双目摄像头</a></li>
										<li><a href="javascript:void(0);"
											onclick="changeCameraType('3')">GPS摄像头</a></li>
										<li><a href="javascript:void(0);"
											onclick="changeCameraType('4')">GPS双目摄像头</a></li>
									</ul>
								</div>
								<!-- /btn-group -->
								<input type="text" class="form-control" id="name" name="name"
									placeholder="Enter Camera Name">
							</div>
						</div>
						<div class="form-group" id="RTMP">
							<label for="rtmpPath">RTMP视频流路径</label> <input type="text"
								class="form-control" id="rtmpPath" name="rtmpPath"
								placeholder="RTMP Path">
						</div>
						<div class="form-group">
							<label>识别算法</label> <select class="form-control select2"
								style="width: 100%;">
								<option selected="selected">不使用</option>
								<option>运动监测</option>
								<option>火焰监测</option>
								<option>烟雾监测</option>
							</select>
						</div>
					</div>
					<!-- /.box-body -->

					<div class="box-footer">
						<button type="submit" class="btn btn-primary">提交</button>
						<a class="btn btn-primary" href="javascript:void(0);"
							onclick="send('sendMessage.action')">测试推送报警</a>
					</div>
				</form>
			</div>
			<!-- /.box -->
		</div>
	</div>
</section>
