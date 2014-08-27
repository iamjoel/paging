$(document).ready(function () {
    var pager = $('#paging-odd-wrap').paging({
        pageNum: 20,
        onPageChange: function(pageAt){
            console.log(pageAt);
        }
    });
    var $selectPager = $('#page-num');
    $selectPager.change(function(){
        pager.setPageAt(parseInt(this.value, 10));
    });
    $('#paging-even-wrap').paging({
        pageNum: 4,
        showPagingNavNum: 6
    });
});

