<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="box box-success">
	<div class="box-header with-border">
		<h3 class="box-title">监视点信息</h3>

		<div class="box-tools pull-right">
			<button type="button" class="btn btn-box-tool" data-widget="collapse">
				<i class="fa fa-minus"></i>
			</button>
		</div>
	</div>
	<!-- /.box-header -->
	<div class="box-body no-padding">

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
		<div class="box box-primary">
            <div class="box-header with-border">
              <i class="fa fa-bar-chart-o"></i>

              <h3 class="box-title">温度信息</h3>

              <div class="box-tools pull-right">
                Real time
                <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                  <button type="button" class="btn btn-default btn-xs active" data-toggle="on">On</button>
                  <button type="button" class="btn btn-default btn-xs" data-toggle="off">Off</button>
                </div>
              </div>
            </div>
            <div class="box-body">
              <div id="interactive" style="height: 300px;"></div>
            </div>
            <!-- /.box-body-->
          </div>
          <!-- /.box -->
	</div>
	<!-- /.col -->
</div>

	</div>
	<!-- /.box-body -->
</div>
<!-- /.box -->


