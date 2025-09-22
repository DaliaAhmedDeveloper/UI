$(document).ready(function(){
	$('.dropdown-title').click(function(){
		$(this).parent().find('ul').slideToggle();
		$(this).find('.sidebar-arrow').toggleClass('rotate');
	});


	$('.menu_menu').click(function(){
		$('.sidebar').animate({right : 0} , 600);
		$('.m-overlay').animate({right : 0} , 500);
    });
    $('.close-menu').click(function(){
	  $('.sidebar').animate({right : "-320px"} , 500);
	  $('.m-overlay').animate({right : "-100%"} , 600);
  });

  $('.sett i').click(function(){
	  $('.sett ul').toggleClass('slidee');
  });
    
     $('table').DataTable({
         "language": {
                 "sEmptyTable":     "ليست هناك بيانات متاحة في الجدول",
                    "sLoadingRecords": "جارٍ التحميل...",
                    "sProcessing":   "جارٍ التحميل...",
                    "sLengthMenu":   "أظهر _MENU_ مدخلات",
                    "sZeroRecords":  "لم يعثر على أية سجلات",
                    "sInfo":         "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
                    "sInfoEmpty":    "يعرض 0 إلى 0 من أصل 0 سجل",
                    "sInfoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
                    "sInfoPostFix":  "",
                    "sSearch":       "ابحث:",
                    "sUrl":          "",
                    "oPaginate": {
                        "sFirst":    "الأول",
                        "sPrevious": "السابق",
                        "sNext":     "التالي",
                        "sLast":     "الأخير"
                    },
                    "oAria": {
                        "sSortAscending":  ": تفعيل لترتيب العمود تصاعدياً",
                        "sSortDescending": ": تفعيل لترتيب العمود تنازلياً"
                    }
         }
     });

  $('.t-status').click(function(){
	$(this).find('ul').toggleClass('slidee');
	$(this).find('i').fadeToggle(0);
	$(this).find('img').fadeToggle(0);
	$(this).toggleClass('nb');
});

    
    

});