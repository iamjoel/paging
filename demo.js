require.config({
	paths: { // 配置路径的缩写
		paging : 'ractive-paging'
	}
	, map: { // 配置插件
		'*': {
		    'css': 'vendor/require-css', // 加载css插件
		    'text': 'vendor/require-text' // 加载模板文件插件
	  	}
	}
});

require(['paging'], function(Paging){
	var paging = new Paging({
		el: 'paging-odd-wrap',
		pageNum: 10
	});

	var paging = new Paging({
		el: 'paging-even-wrap',
		pageNum: 10,
		showPagingNavNum: 6
	});
});