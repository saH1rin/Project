<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- Content Header (Page header) -->
<section class="content-header">
	<h1>
		总览 <small>Survey</small>
	</h1>
</section>

<!-- Main content -->
<section class="content">
	<!-- Your Page Content Here -->
	<div class="row">
		<!-- upper column -->
		<div class="col-md-8">
			<!-- general form elements -->
			<div class="box box-success">
				<div class="box-header with-border">
					<h3 class="box-title">监视点位置</h3>
					<div class="box-tools pull-right">
						<button type="button" class="btn btn-box-tool"
							data-widget="collapse">
							<i class="fa fa-minus"></i>
						</button>

					</div>
				</div>
				<!-- /.box-header -->
				<div class="box-body no-padding">

					<div class="pad">
						<!-- Map will be created here -->
						<div id="china-map-markers" style="height: 325px;"></div>
					</div>

				</div>
				<!-- /.box-body -->
			</div>
			<!-- /.box -->
		</div>
		<!-- end col9 -->
		<div class="col-lg-4 col-xs-6">
			<!-- small box -->
			<div class="small-box bg-aqua">
				<div class="inner">
					<h3>上海市</h3>

					<p>东华大学#1摄像头</p>
				</div>
				<div class="icon">
					<i class="ion ion-ios-location"></i>
				</div>
				<a href="#" class="small-box-footer"> More info <i
					class="fa fa-arrow-circle-right"></i>
				</a>
			</div>
		</div>
		<!-- ./col -->
		<!-- right row -->
		<div class="col-md-4">
			<div class="info-box bg-green">
				<span class="info-box-icon"><i class="ion ion-thermometer"></i></span>

				<div class="info-box-content">
					<span class="info-box-text">温度正常</span> <span
						class="info-box-number">25</span>

					<div class="progress">
						<div class="progress-bar" style="width: 25%"></div>
					</div>
					<span class="progress-description" id="time"> </span>
				</div>
				<!-- /.info-box-content -->
			</div>
			<!-- /.info-box -->
		</div>
		<div class="col-lg-4 col-xs-6">
			<!-- small box -->
			<div class="small-box bg-red">
				<div class="inner">
					<h3>2</h3>

					<p>本月报警次数</p>
				</div>
				<div class="icon">
					<i class="ion ion-pie-graph"></i>
				</div>
				<a href="#" class="small-box-footer"> More info <i
					class="fa fa-arrow-circle-right"></i>
				</a>
			</div>
		</div>
		<!-- ./col -->
		<!-- right row end -->
		<!-- down column -->
		<div class="col-md-12">
			<!-- general form elements -->
			<div id="information"></div>
		</div>
	</div>
</section>
<!-- /.content -->
