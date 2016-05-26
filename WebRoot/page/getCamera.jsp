<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			摄像头状态<small>Camera Situation</small>
		</h1>
	</section>

			<!-- Main content -->
			<section class="content" >

				<!-- Your Page Content Here -->
				<div class="row">
					<!-- left column -->
					<div class="col-md-6">
						<!-- general form elements -->
						<div class="box box-primary">
							<div class="box-header with-border">
								<h3 class="box-title" id="boxHeaderName">${cameras[0].name }</h3>
							</div>
							<!-- /.box-header -->
							<!-- form start -->
							<div class="callout callout-info">
								<h4 id="boxFormName">${cameras[0].rtmpPath }</h4>
				
								<video id="example_video_1" class="video-js vjs-default-skin"
									controls preload="none" width="480" height="320">
									<source src=${cameras[0].rtmpPath } type="rtmp/flv" />
				
									<p class="vjs-no-js">
										To view this video please enable JavaScript, and consider
										upgrading to a web browser that <a
											href="http://videojs.com/html5-video-support/" target="_blank">supports
											HTML5 video</a>
									</p>
								</video>
							</div>
						</div>
						<!-- /.box -->
					</div>
					<!-- right column -->
					<div class="col-md-6">
						<div class="box">
							<div class="box-header">
								<h3 class="box-title">注册摄像头</h3>
				
								<div class="box-tools">
									<ul class="pagination pagination-sm no-margin pull-right">
										<li><a href="#">&laquo;</a></li>
										<li><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">&raquo;</a></li>
									</ul>
								</div>
							</div>
							<!-- /.box-header -->
							<div class="box-body no-padding">
								<table class="table">
									<tr>
										<th style="width: 10px">#</th>
										<th>名称</th>
										<th>RTMP地址</th>
										<th style="width: 40px">状态</th>
									</tr>
									<c:forEach items="${cameras}" var="s" varStatus="idx">
										<tr>
											<td>${idx.count }.</td>
											<td>${s.name }</td>
											<td>${s.rtmpPath }</td>
											<td><a class="badge bg-red" href="javascript:void(0)"
												onclick="changeVideo(this)">watch</span></td>
										</tr>
									</c:forEach>
								</table>
							</div>
							<!-- /.box-body -->
						</div>
						<!-- /.box -->
					</div>
				</div>
			</section>
