// // <script>
// //  <!--
//
// $(document).ready(function(){
// 	$('.nav.nav-tabs li:first-child a').tab('show');
// });
// var owl = $("#owl-images");
// owl.owlCarousel({
//   responsiveBaseWidth: '.container',
//   itemsCustom: [[0, 2], [448, 3], [650, 3], [750, 3], [970, 4]],
//   navigation : true,
//   navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
//   pagination: false
// });
//
// $('select[name=\'recurring_id\'], input[name="quantity"]').change(function(){
// 	$.ajax({
// 		url: 'index.php?route=product/product/getRecurringDescription',
// 		type: 'post',
// 		data: $('input[name=\'product_id\'], input[name=\'quantity\'], select[name=\'recurring_id\']'),
// 		dataType: 'json',
// 		beforeSend: function() {
// 			$('#recurring-description').html('');
// 		},
// 		success: function(json) {
// 			$('.alert, .text-danger').remove();
//
// 			if (json['success']) {
// 				$('#recurring-description').html(json['success']);
// 			}
// 		}
// 	});
// });
//
// $('.date').datetimepicker({
// 	pickTime: false
// });
//
// $('.datetime').datetimepicker({
// 	pickDate: true,
// 	pickTime: true
// });
//
// $('.time').datetimepicker({
// 	pickDate: false
// });
//
// $('button[id^=\'button-upload\']').on('click', function() {
// 	var node = this;
//
// 	$('#form-upload').remove();
//
// 	$('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>');
//
// 	$('#form-upload input[name=\'file\']').trigger('click');
//
// 	if (typeof timer != 'undefined') {
//     	clearInterval(timer);
// 	}
//
// 	timer = setInterval(function() {
// 		if ($('#form-upload input[name=\'file\']').val() != '') {
// 			clearInterval(timer);
//
// 			$.ajax({
// 				url: 'index.php?route=tool/upload',
// 				type: 'post',
// 				dataType: 'json',
// 				data: new FormData($('#form-upload')[0]),
// 				cache: false,
// 				contentType: false,
// 				processData: false,
// 				beforeSend: function() {
// 					$(node).button('loading');
// 				},
// 				complete: function() {
// 					$(node).button('reset');
// 				},
// 				success: function(json) {
// 					$('.text-danger').remove();
//
// 					if (json['error']) {
// 						$(node).parent().find('input').after('<div class="text-danger">' + json['error'] + '</div>');
// 					}
//
// 					if (json['success']) {
// 						alert(json['success']);
//
// 						$(node).parent().find('input').attr('value', json['code']);
// 					}
// 				},
// 				error: function(xhr, ajaxOptions, thrownError) {
// 					alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
// 				}
// 			});
// 		}
// 	}, 500);
// });
//
// $('#review').delegate('.pagination a', 'click', function(e) {
//     e.preventDefault();
//
//     $('#review').fadeOut('slow');
//
//     $('#review').load(this.href);
//
//     $('#review').fadeIn('slow');
// });
//
// $('#review').load('index.php?route=product/product/review&product_id=454');
//
// $('#button-review').on('click', function() {
// 	$.ajax({
// 		url: 'index.php?route=product/product/write&product_id=454',
// 		type: 'post',
// 		dataType: 'json',
// 		data: $(".form-review").serialize(),
// 		beforeSend: function() {
// 			$('#button-review').button('loading');
// 		},
// 		complete: function() {
// 			$('#button-review').button('reset');
// 		},
// 		success: function(json) {
// 			$('.alert-success, .alert-danger').remove();
//
// 			if (json['error']) {
// 				get_revpopup_notification('alert-danger', 'Ошибка', json['error']);
// 			}
//
// 			if (json['success']) {
// 				get_revpopup_notification('alert-success', 'Спасибо за отзыв', json['success']);
//
// 				$('input[name=\'name\']').val('');
// 				$('textarea[name=\'text\']').val('');
// 				$('input[name=\'rating\']:checked').prop('checked', false);
//
// 				$('#post-review-box').slideUp(300);
// 				$('#new-review').focus();
// 				$('#open-review-box').fadeIn(100);
// 				$('#close-review-box').hide();
// 				$('#ratings-hidden').val('');
// 				$('.stars .glyphicon').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
//
// 			}
// 		}
// 	});
// });
//
// $('#button-answers').on('click', function() {
// 	$.ajax({
// 		url: 'index.php?route=revolution/revstorereview/writeanswer&product_id=454',
// 		type: 'post',
// 		dataType: 'json',
// 		data: $(".form-answers").serialize(),
// 		beforeSend: function() {
// 			$('#button-answers').button('loading');
// 		},
// 		complete: function() {
// 			$('#button-answers').button('reset');
// 		},
// 		success: function(json) {
// 			$('.alert-success, .alert-danger').remove();
// 			if (json['error']) {
// 				get_revpopup_notification('alert-danger', 'Ошибка', json['error']);
// 			}
// 			if (json['success']) {
// 				get_revpopup_notification('alert-success', 'Спасибо за вопрос', json['success']);
// 				$('input[name=\'name_answer\']').val('');
// 				$('textarea[name=\'text_answer\']').val('');
// 				$('#post-answers-box').slideUp(300);
// 				$('#new-answers').focus();
// 				$('#open-answers-box').fadeIn(100);
// 				$('#close-answers-box').hide();
// 			}
// 		}
// 	});
// });
//
// $('.thumbnails .main-image').magnificPopup({
// 	type:'image',
// 	removalDelay: 170,
// 	callbacks: {
// 	beforeOpen: function() {
// 	   this.st.mainClass = 'mfp-zoom-in';
// 	},
// 	open: function() {
// 		$('body').addClass('razmiv2');
// 		$('#pagefader2').fadeIn(70);
// 		if (document.body.scrollHeight > document.body.offsetHeight) {
//
// 				$('#top3').css('right', '8.5px');
//
// 		}
// 	},
// 	close: function() {
// 		$('body').removeClass('razmiv2');
// 		$('#pagefader2').fadeOut(70);
// 		$('#top3').css('right', 'initial');
// 	}
// 	}
// });
// $('.thumbnails .images-additional').magnificPopup({
// 	type:'image',
// 	delegate: 'a',
// 	gallery: {
// 		enabled:true
// 	},
// 	removalDelay: 170,
// 	callbacks: {
// 	beforeOpen: function() {
// 	   this.st.mainClass = 'mfp-zoom-in';
// 	},
// 	open: function() {
// 		$('body').addClass('razmiv2');
// 		$('#pagefader2').fadeIn(70);
// 		if (document.body.scrollHeight > document.body.offsetHeight) {
//
// 				$('#top3').css('right', '8.5px');
//
// 		}
// 	},
// 	close: function() {
// 		$('body').removeClass('razmiv2');
// 		$('#pagefader2').fadeOut(70);
// 		$('#top3').css('right', 'initial');
// 	}
// 	}
// });
//
// 	if ($(window).width() > 991) {
// 		$('#imageWrap > a').addClass('cloud-zoom');
//
// 		$('.images-additional img').click(function(){
// 			var oldsrc = $(this).attr('src');
// 			newsrc = $(this).parent().attr('id');
// 			newhref = $(this).parent().attr('href');
// 			number = $(this).attr('data-number');
//
// 			$('#imageWrap img').attr('src', newsrc);
//
// 			$('.main-image img').attr('src', newsrc);
// 			$('.main-image').attr('href', newhref);
// 			$('.main-image').attr('data-number', number);
// 			$('.cloud-zoom').CloudZoom();
// 			return false;
// 		});
// 		$('#imageWrap.image').bind('click',function(){
// 			if ($('.images-additional').length > 0) {
// 				var startnumber = $('.cloud-zoom.main-image').attr('data-number');
// 				$('.images-additional').magnificPopup('open', startnumber);
// 				return false
// 			} else {
// 				$('.cloud-zoom.main-image').magnificPopup('open');
// 				return false
// 			}
// 		});
// 		$('.cloud-zoom').attr('rel','position:\'inside\'').CloudZoom();
// 	} else {
// 		$('.thumbnails .main-image img').click(function(){
// 			if ($('.images-additional').length > 0) {
// 				var startnumber = $(this).parent().attr('data-number');
// 				$('.images-additional').magnificPopup('open', startnumber);
// 				return false
// 			} else {
// 				$('.main-image').magnificPopup('open');
// 				return false
// 			}
// 		});
// 	}
//
//
// function get_revpopup_cart_quantity() {
// 	input_val = $('.product-info.product_informationss .plus-minus').val();
// 	quantity  = parseInt(input_val);
// 	return quantity;
// }
// function validate_pole(val, product_id, znak, minimumvalue, maximumvalue) {
// 	val.value = val.value.replace(/[^\d,]/g, '');
// 	if (val.value == '') val.value = minimumvalue;
// 	maximumvalue = Number($('.product_informationss .pr_quantity').text());
// 	if (maximumvalue < 1) maximumvalue = 9999;
// 	input_val = $('.product-info.product_informationss .plus-minus');
// 	quantity = parseInt(input_val.val());
//
// 	if(znak=='+' && input_val.val() < maximumvalue) input_val.val(quantity+1);
// 	else if(znak=='-' && input_val.val() > minimumvalue) input_val.val(quantity-1);
// 	else if(znak=='=' && input_val.val() < maximumvalue && input_val.val() < maximumvalue) input_val.val(input_val.val());
// 	if (quantity < 1 || quantity < minimumvalue) {
// 		input_val.val(minimumvalue);
// 		val.value = minimumvalue;
// 	} else if (quantity > maximumvalue) {
// 		input_val.val(maximumvalue);
// 		val.value = maximumvalue;
// 	}
//
//
// 	update_quantity(product_id, input_val.val());
// }
// function update_quantity(product_id, quantity) {
// 	var minimumvalue = 1;
// 	if (quantity == 0 || quantity < minimumvalue) {
// 		quantity = $('.product-info.product_informationss .plus-minus').val(minimumvalue);
// 		return;
// 	} else if (quantity < 1) {
// 		quantity = 1;
// 		return;
// 	}
//
// 	data = $('.product-info.product_informationss input[type=\'text\'], .product-info.product_informationss input[type=\'hidden\'], .product-info.product_informationss input[type=\'radio\']:checked, .product-info.product_informationss input[type=\'checkbox\']:checked, .product-info.product_informationss select, .product-info.product_informationss textarea'),
// 	$.ajax({
// 	  url: 'index.php?route=product/product/update_prices',
// 	  type: 'post',
// 	  dataType: 'json',
// 	  data: data.serialize() + '&product_id=' + product_id + '&quantity=' + quantity,
// 	  success: function(json) {
//
//
//
//
//
//
// 				var weight = json['weight'];
//
// 					var start_weight = parseFloat($('.product_informationss .pr_weight').attr('data-weight'));
// 					$({val:start_weight}).animate({val:weight}, {
// 						duration: 500,
// 						easing: 'swing',
// 						step: function(val) {
// 							$('.product_informationss .pr_weight').html(weight_format(val));
// 						}
// 					});
// 					$('.product_informationss .pr_weight').attr('data-weight', json['weight']);
//
//
//
//
//
// 					var price = json['price_n'];
//
//
// 					var start_price = parseFloat($('.product_informationss .update_price').html().replace(/\s*/g,''));
// 					$({val:start_price}).animate({val:price}, {
// 						duration: 500,
// 						easing: 'swing',
// 						step: function(val) {
// 							$('.product_informationss .update_price').html(price_format(val));
// 						}
// 					});
//
//
// 				var special = json['special_n'];
//
// 					var start_special = parseFloat($('.product_informationss .update_special').html().replace(/\s*/g,''));
// 					$({val:start_special}).animate({val:special}, {
// 						duration: 500,
// 						easing: 'swing',
// 						step: function(val) {
// 							$('.product_informationss .update_special').html(price_format(val));
// 						}
// 					});
//
//
//
//
// 	  }
// 	});
// }
// function update_prices_product(product_id, minimumvalue) {
// 	input_val = $('.product-info.product_informationss .plus-minus').val();
// 	if (input_val > minimumvalue) {
// 		input_val = minimumvalue;
// 		$('.product-info.product_informationss .plus-minus').val(minimumvalue);
// 	}
//
// 	quantity = parseInt(input_val);
//
// 	data = $('.product-info.product_informationss input[type=\'text\'], .product-info.product_informationss input[type=\'hidden\'], .product-info.product_informationss input[type=\'radio\']:checked, .product-info.product_informationss input[type=\'checkbox\']:checked, .product-info.product_informationss select, .product-info.product_informationss textarea');
// 	$.ajax({
// 	  type: 'post',
// 	  url:  'index.php?route=product/product/update_prices',
// 	  data: data.serialize() + '&product_id=' + product_id + '&quantity=' + quantity,
// 	  dataType: 'json',
// 	  success: function(json) {
//
// 		$('.product_informationss .thumbnails a.main-image').attr('href', json['opt_image_2_big']);
// 		$('.product_informationss .thumbnails a.main-image img').attr('src', json['opt_image_2']);
//
// 		$('.product_informationss .thumbnails .images-additional .owl-item:first-child a').attr('href', json['opt_image_2_big']);
// 		$('.product_informationss .thumbnails .images-additional .owl-item:first-child a img').attr('src', json['opt_image_2']).css('width', 74).css('height', 74);
//
//
//
// 		$('.product_informationss .thumbnails .images-additional .owl-item:first-child a').attr('id', json['opt_image_2']);
//
// 		$('.product_informationss .cloud-zoom').CloudZoom();
//
//
// 		var end_quantity = json['option_quantity'];
//
// 			var start_quantity = parseFloat($('.product_informationss .pr_quantity').html().replace(/\s*/g,''));
// 			$({val:start_quantity}).animate({val:end_quantity}, {
// 				duration: 500,
// 				easing: 'swing',
// 				step: function(val) {
// 					$('.product_informationss .pr_quantity').html(number_format(val, product_id));
// 				}
// 			});
//
//
//
//
//
// 			$('.product_informationss .pr_model').html(json['opt_model']);
//
//
//
// 			var weight = json['weight'];
//
// 				var start_weight = parseFloat($('.product_informationss .pr_weight').attr('data-weight'));
// 				$({val:start_weight}).animate({val:weight}, {
// 					duration: 500,
// 					easing: 'swing',
// 					step: function(val) {
// 						$('.product_informationss .pr_weight').html(weight_format(val));
// 					}
// 				});
// 				$('.product_informationss .pr_weight').attr('data-weight', json['weight']);
//
//
//
//
//
//
// 					var price = json['price_n'];
//
//
// 					var start_price = parseFloat($('.product_informationss .update_price').html().replace(/\s*/g,''));
// 					$({val:start_price}).animate({val:price}, {
// 						duration: 500,
// 						easing: 'swing',
// 						step: function(val) {
// 							$('.product_informationss .update_price').html(price_format(val));
// 						}
// 					});
//
//
// 				var special = json['special_n'];
//
// 					var start_special = parseFloat($('.product_informationss .update_special').html().replace(/\s*/g,''));
// 					$({val:start_special}).animate({val:special}, {
// 						duration: 500,
// 						easing: 'swing',
// 						step: function(val) {
// 							$('.product_informationss .update_special').html(price_format(val));
// 						}
// 					});
//
//
//
// 	  }
// 	});
// }
//
// function price_format(n) {
// 	c = 0;
//     d = '.';
//     t = '';
//     s_left = '';
//     s_right = ' р.';
//     n = n * 1.00000000;
//     i = parseInt(n = Math.abs(n).toFixed(c)) + '';
//     j = ((j = i.length) > 3) ? j % 3 : 0;
//     return s_left + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '') + s_right;
// }
// function weight_format(n, product_id) {
//     c = 2;
//     d = '.';
//     t = ',';
//     i = parseInt(n = Math.abs(n).toFixed(c)) + '';
//     j = ((j = i.length) > 3) ? j % 3 : 0;
//     return (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
// }
// function number_format(n, product_id) {
//     i = parseInt(n = Math.abs(n).toFixed(0)) + '';
//     return i;
// }
//
// 	$('.product_related .owlproduct').owlCarousel({
// 		items: 1,
// 		singleItem: true,
// 		mouseDrag: false,
// 		touchDrag: false,
// 		autoPlay: false,
// 		navigation: true,
// 		navigationText: ['<i class="fa fa-chevron-left fa-3x"></i>', '<i class="fa fa-chevron-right fa-3x"></i>'],
// 		pagination: false
// 	});
// 	$('.viewed_products .owlproduct').owlCarousel({
// 		items: 1,
// 		singleItem: true,
// 		mouseDrag: false,
// 		touchDrag: false,
// 		autoPlay: false,
// 		navigation: true,
// 		navigationText: ['<i class="fa fa-chevron-left fa-3x"></i>', '<i class="fa fa-chevron-right fa-3x"></i>'],
// 		pagination: false
// 	});
//
// --></script>
// </section>
//
// <footer>
//
//
// 	<div class="footer">
// 		<div class="container">
// 			<div class="row">
//
// 				<div class="not_dops_snot_dops_s">
//
//
// 						<div class="footer_links col-sm-12 col-xs-12 ">
//
//
// 									<a href="http://ip-tele.ru/o_nas/">О нас</a>
//
// 									<a href="http://ip-tele.ru/oplata/">Оплата</a>
//
// 									<a href="http://ip-tele.ru/dostavka/">Доставка</a>
//
// 									<a href="http://ip-tele.ru/garantiya/">Гарантия</a>
//
//
//
//
// 									<a href="https://ip-tele.ru/kontakty/">Контакты</a>
//
//
// 						</div>
//
//
// 				</div>
//
//
//
// 				<div style="text-align:left" class="powered col-sm-12 col-xs-12">ip-tele.ru - IP-АТС, IP телефоны, проводные и беспроводные гарнитуры. &copy; 2020</div>
// 			</div>
// 		</div>
// 	</div>
// </footer>
//
// </div>
//
// 	<div class="popup-phone-wrapper" data-toggle="tooltip" data-placement="left"  title="Заказать звонок">
// 		<span class="scroll-top-inner">
// 			<i class="fa fa-phone"></i>
// 		</span>
// 	</div>
//
//
// 	<div class="scroll-top-wrapper ">
// 		<span class="scroll-top-inner">
// 			<i class="fa fa-arrow-circle-up"></i>
// 		</span>
// 	</div>
//
//
// 	<script src="catalog/view/javascript/revolution/javascript_min.js"></script>
//
//
//
// <script><!--
// if (!localStorage.getItem('display')) {
//
// 	localStorage.setItem('display', 'grid');
//
// }
//
// 	$("#top3 #menu .nav").removeClass('dblock_zadergkaoff').addClass('dblock_zadergka');
// 	var global_menu2_button;
// 	$("#top3 #menu .nav > li").hover(function(){
// 		var this_li = $(this);
// 		global_menu2_button = setTimeout(function() {
// 		this_li.find('.mmmenu .dropdown-menu').addClass('dblockdr');
// 	}, 250)
// 	},function(){
// 		$(this).find('.mmmenu .dropdown-menu').removeClass('dblockdr');
// 		clearTimeout(global_menu2_button);
// 	});
//
// $(function () {
//   $("#menu .nav > li .mmmenu").mouseenter(function(){
// 		$('#pagefader').fadeIn(70);
// 		$('body').addClass('razmiv');
//    });
// 	$("#menu .nav > li .mmmenu").mouseleave(function(){
// 		$('#pagefader').fadeOut(70);
// 		$('body').removeClass('razmiv');
//    });
// });
//
// 	$('.footer-category').append($('.category_description'));
// 	$('.category_description').removeClass('dnone');
//
//
// 	function podgon_img(){
// 		$('.owlproduct').each(function(indx, element){
// 			var data = $(element).data('owlCarousel');
// 			data && data.reinit({navigation: true})
// 		});
//
// 	}
//
//
// 	//$('.product-thumb > .image').css('width', 228);
// 	$('#content .owlproduct').owlCarousel({
// 		beforeInit: true,
// 		items: 1,
// 		singleItem: true,
// 		mouseDrag: false,
// 		autoPlay: false,
// 		navigation: true,
// 		navigationText: ['<i class="fa fa-chevron-left fa-3x"></i>', '<i class="fa fa-chevron-right fa-3x"></i>'],
// 		pagination: false
// 	});
//
// function list_view(){
// 	$('#content .products_category .product-grid > .clearfix').remove();
// 	$('#content .products_category .product-grid, #content .products_category .product-price').attr('class', 'product-layout product-list col-xs-12');
// 	$('#content .product-list .cart > a').attr('data-toggle', 'none');
// 	$('#content .product-list .cart > a').attr('title', '');
// 	$(document).ready(function() {
// 		var w_list_img = $('.product-list .product-thumb .image').outerWidth();
//
// 			$('.product-layout .product-thumb > .image').css('width', 228);
// 			podgon_img();
//
// 	});
// 	$('.product-list .product-thumb h4').css('height', 'initial');
// 	$('.product-list .product-thumb .product_buttons').css('height', 'initial');
// 	$('.product-list .product-thumb .caption').css('margin-left', 228);
// 	$('.product-list .product-thumb .description_options').addClass('view_list_options');
// 	$('.product-list .product-thumb .description_options').css('height', 'initial');
// 	$('.product-layout.product-list').css('height', 'initial');
// 	$('#grid-view, #price-view').removeClass('active');
// 	$('#list-view').addClass('active');
// 	localStorage.setItem('display', 'list');
// }
// function grid_view(){
// 	cols = $('#column-right, #column-left').length;
// 	if (cols == 2) {
// 		$('#content .product-list, #content .product-price').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
// 	} else if (cols == 1) {
// 		$('#content .product-list, #content .product-price').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
// 	} else {
// 		$('#content .product-list, #content .product-price').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
// 	}
//
// 		if ($(window).width() > 294 && $(window).width() < 975) {
// 			$('#content .product-layout.product-grid').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-4 col-xs-6');
// 		}
//
// 	$('.product-grid .product-thumb .caption').css('margin-left', 'initial');
// 	$('.product-grid .product-thumb .description_options').removeClass('view_list_options');
// 	var product_grid_width = $('.product-layout .product-thumb').outerWidth();
// 	var product_item_width = $('.rev_slider .item .product-thumb').outerWidth();
// 	if (product_grid_width < 240) {
// 		$('.product-layout').addClass('new_line');
// 		$('.rev_slider .item').addClass('new_line');
// 	} else {
// 		$('.product-layout').removeClass('new_line');
// 		$('.rev_slider .item').removeClass('new_line');
// 	}
// 	if (product_item_width < 240) {
// 		$('.rev_slider .item').addClass('new_line');
// 	} else {
// 		$('.rev_slider .item').removeClass('new_line');
// 	}
//
// 		$('.product-layout .product-thumb > .image').css('width', '100%');
// 		var product_grid_width = $('.product-layout .product-thumb').outerWidth();
// 		if (localStorage.getItem('display') == 'price') {
// 			if (product_grid_width < 240) {window.setTimeout(function() {podgon_img();},150)} else {podgon_img();}
// 		} else {
// 			podgon_img();
// 		}
//
// 	max_height_div('.product-grid .product-thumb h4');
// 	max_height_div('.product-grid .product-thumb .price');
// 	max_height_div('.product-grid .product-thumb .product_buttons');
//
// 	setTimeout(function() {
// 		max_height_div('.product-grid .product-thumb .description_options');
// 	}, 10);
//
// 	$('#list-view, #price-view').removeClass('active');
// 	$('#grid-view').addClass('active');
// 	localStorage.setItem('display', 'grid');
// }
// function price_view(){
// 	$('#content .products_category .product-grid > .clearfix').remove();
// 	$('#content .products_category .product-list, #content .products_category .product-grid').attr('class', 'product-layout product-price col-xs-12');
// 	$('#content .product-view .cart > a').attr('data-toggle', 'none');
// 	$('#content .product-view .cart > a').attr('title', '');
// 	$('.product-price .product-thumb h4').css('height', 'initial');
// 	$('.product-price .product-thumb .caption').css('margin-left', 'initial');
// 	$('.product-price .product-thumb .product_buttons').css('height', 'initial');
// 	$('.product-price .product-thumb .description_options').removeClass('view_list_options');
// 	$('.product-price .product-thumb .description_options').css('height', 'initial');
// 	$('.product-layout.product-price').css('height', 'initial');
// 	$('#list-view, #grid-view').removeClass('active');
// 	$('#price-view').addClass('active');
// 	localStorage.setItem('display', 'price');
// }
// $('#list-view').click(function() {
// 	list_view();
// });
// $('#grid-view').click(function() {
// 	grid_view();
// });
// $('#price-view').click(function() {
// 	price_view();
// });
//
// 	$('html').removeClass('opacity_minus').addClass('opacity_plus');
//
//
//
// 	NProgress.start();
// 	$(window).load(function() {
// 		NProgress.done();
// 		$('html').removeClass('opacity_plus');
// 	});
//
//
// 	if($(window).width() > 768) {
// 		$('#top3').affix({
// 			offset: {
//
// 					top: $('#top').outerHeight()+$('#top2').outerHeight()+$('html.common-home #menu2.inhome').outerHeight()
//
// 			}
// 		});
// 	}
//
// 	var win_shopcart = $(window).height();
// 	var win_shopcart2 = $('#top').outerHeight()+$('#top2').outerHeight()+$('#top3').outerHeight();
// 	//$('#cart .dropdown-menu > li').css('max-height', win_shopcart-win_shopcart2).css('overflow-y', 'auto');
// 	$('#top3 #menu2 .child-box').css('max-height', win_shopcart-win_shopcart2).css('overflow-y', 'auto');
//
// $(function() {
// 	if (localStorage.getItem('display') == 'list') {
// 		list_view();
// 	} else if (localStorage.getItem('display') == 'price') {
// 		price_view();
// 	} else if (localStorage.getItem('display') == 'grid') {
// 		grid_view();
// 	} else {
//
// 			grid_view();
//
// 	}
//
// 	podgon_fona();
// 	$(window).resize(podgon_fona);
// });
// function podgon_fona() {
// 	toggle_ellipses();
// 	var h_top5 = $('.inhome #menu2').outerHeight();
// 	if (h_top5) {
// 		$('#top5').css('min-height', h_top5+20);
// 	}
//
// 		var h_top4 = $('#top4').outerHeight();
// 		$('html.common-home #menu2.inhome').css('min-height', h_top4+50);
//
// 	var m2inh = $('html.common-home #menu2.inhome').outerHeight();
// 	$('html.common-home #menu2.inhome .podmenu2').css('height', m2inh);
// 	var m2inhw = $('html.common-home #menu2_button').outerWidth();
// 	$('html.common-home #menu2.inhome .podmenu2').css('min-width', m2inhw-0.5);
//
// 		$('html.common-home #top3.affix #menu2.inhome').css('min-height', 'initial');
// 		var m2inh = $('html.common-home #menu2.inhome').outerHeight();
// 		$('html.common-home #top3.affix #menu2.inhome .podmenu2').css('height', m2inh);
// 		$(document).on('scroll', function(){
// 			var home_amazon_height = $('#top').outerHeight()+$('#top2').outerHeight()+$('html.common-home #top3 #menu2.inhome').outerHeight();
// 			if ($(window).scrollTop() > home_amazon_height) {
// 				$('html.common-home #top3.affix #menu2.inhome').css('min-height', 'initial');
// 				$('html.common-home #top3.affix #menu2.inhome .podmenu2').css('min-height', 'initial');
// 			} else {
// 				var h_top4 = $('#top4').outerHeight();
// 				$('html.common-home #top3 #menu2.inhome').css('min-height', h_top4+50);
// 				$('html.common-home #top3 #menu2.inhome .podmenu2').css('min-height', h_top4+50);
// 			}
// 		});
//
//
// 		var h_top3 = $('#top3').outerHeight();
//
// 		$('.main-content').css('padding-top', h_top3+25);
//
//
//
// 		$('#top3').addClass('absolutpo');
//
// 	if($(window).width() < 767) {
// 		grid_view();
// 	}
//
// 		if ($(window).width() > 294 && $(window).width() < 975) {
// 			$('#content .product-layout.product-grid').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-4 col-xs-6');
// 		}
//
//
//
// 	var product_grid_width = $('.product-layout .product-thumb').outerWidth();
// 	var product_item_width = $('.rev_slider .item .product-thumb').outerWidth();
// 	if (product_grid_width < 240) {
// 		$('.product-layout').addClass('new_line');
// 		$('.rev_slider .item').addClass('new_line');
// 	} else {
// 		$('.product-layout').removeClass('new_line');
// 		$('.rev_slider .item').removeClass('new_line');
// 	}
// 	if (product_item_width < 240) {
// 		$('.rev_slider .item').addClass('new_line');
// 	} else {
// 		$('.rev_slider .item').removeClass('new_line');
// 	}
// 	max_height_div('.product-grid .product-thumb h4');
// 	max_height_div('.product-grid .product-thumb .price');
// 	max_height_div('.product-grid .product-thumb .product_buttons');
//
// 	setTimeout(function() {
// 		max_height_div('.product-grid .product-thumb .description_options');
// 	}, 300);
//
// 	max_height_div('#content .refine_categories.clearfix a > span');
// }
// function toggle_ellipses() {
//   var ellipses1 = $('.br_ellipses');
//   var howlong = $('.breadcrumb li:hidden').length;
//   if ($('.breadcrumb li:hidden').length > 1) {
//     ellipses1.show().css('display', 'inline');
//   } else {
//     ellipses1.hide();
//   }
// }
//
// $(document).on('scroll', function() {
// 	if ($(window).scrollTop() > 100) {
// 		$('.scroll-top-wrapper').addClass('show');
// 	} else {
// 		$('.scroll-top-wrapper').removeClass('show');
// 	}
// });
//
// $('.scroll-top-wrapper').on('click', scrollToTop);
// $('.popup-phone-wrapper').on('click', get_revpopup_phone);
// function scrollToTop() {
// 	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
// 	element = $('body');
// 	offset = element.offset();
// 	offsetTop = offset.top;
// 	$('html, body').animate({scrollTop: offsetTop}, 200, 'linear');
// };
// function get_revpopup_notification(m_class, m_header, message) {
// 	if (document.body.scrollHeight > document.body.offsetHeight) {
// 		$('#top3.absolutpo').css('right', '8.5px');
// 		if ($(window).width() < 768) {
// 			$('#top #cart_mobi').css('margin-right', '17px');
// 		}
// 	}
// 	$('.tooltip').hide();
// 	$.magnificPopup.open({
// 		removalDelay: 170,
// 		callbacks: {
// 			beforeOpen: function() {
// 			   this.st.mainClass = 'mfp-zoom-in';
// 			},
// 			open: function() {
// 				$('body').addClass('razmiv2');
// 				$('#pagefader2').fadeIn(70);
// 			},
// 			close: function() {
// 				$('body').removeClass('razmiv2');
// 				$('#pagefader2').fadeOut(70);
// 				$('#top3.absolutpo').css('right', 'initial');
// 				if ($(window).width() < 768) {
// 					$('#top #cart_mobi').css('margin-right', 'initial');
// 				}
// 			}
// 		},
// 		tLoading: '',
// 		items: {
// 			src: $('<div class="popup_notification"><div class="popup_notification_heading '+m_class+'">'+m_header+'</div><div class="popup_notification_message">'+message+'</div></div>'),
// 			type: 'inline'
// 		}
// 	});
// }
// function get_revpopup_phone() {
// 	if (document.body.scrollHeight > document.body.offsetHeight) {
// 		$('#top3.absolutpo').css('right', '8.5px');
// 		if ($(window).width() < 768) {
// 			$('#top #cart_mobi').css('margin-right', '17px');
// 		}
// 	}
// 	$('.tooltip').hide();
// 	$.magnificPopup.open({
// 		removalDelay: 170,
// 		callbacks: {
// 			beforeOpen: function() {
// 				this.st.mainClass = 'mfp-zoom-in';
// 				$('.dropdown-menu.dop_contss').fadeOut(70);
// 			},
// 			open: function() {
// 				$('body').addClass('razmiv2');
// 				$('#pagefader2').fadeIn(70);
// 			},
// 			close: function() {
// 				$('body').removeClass('razmiv2');
// 				$('#pagefader2').fadeOut(70);
// 				$('#top3.absolutpo').css('right', 'initial');
// 				if ($(window).width() < 768) {
// 					$('#top #cart_mobi').css('margin-right', 'initial');
// 				}
// 				$('.dropdown-menu.dop_contss').css('display', '');
// 			}
// 		},
// 		tLoading: '',
// 		items: {
// 			src: 'index.php?route=revolution/revpopupphone',
// 			type: 'ajax'
// 		}
// 	});
// }
// function get_revpopup_view(product_id) {
// 	if (document.body.scrollHeight > document.body.offsetHeight) {
// 		$('#top3.absolutpo').css('right', '8.5px');
// 		if ($(window).width() < 768) {
// 			$('#top #cart_mobi').css('margin-right', '17px');
// 		}
// 	}
// 	$('.tooltip').hide();
// 	$.magnificPopup.open({
// 		removalDelay: 170,
// 		callbacks: {
// 			beforeOpen: function() {
// 			   this.st.mainClass = 'mfp-zoom-in';
// 			},
// 			open: function() {
// 				$('body').addClass('razmiv2');
// 				$('#pagefader2').fadeIn(70);
// 			},
// 			close: function() {
// 				$('body').removeClass('razmiv2');
// 				$('#pagefader2').fadeOut(70);
// 				$('#top3.absolutpo').css('right', 'initial');
// 				if ($(window).width() < 768) {
// 					$('#top #cart_mobi').css('margin-right', 'initial');
// 				}
// 			}
// 		},
// 		tLoading: '',
// 		items: {
// 			src: 'index.php?route=revolution/revpopupview&revproduct_id='+product_id,
// 			type: 'ajax'
// 		}
// 	});
// }
// function get_revpopup_purchase(product_id) {
// 	if (document.body.scrollHeight > document.body.offsetHeight) {
// 		$('#top3.absolutpo').css('right', '8.5px');
// 		if ($(window).width() < 768) {
// 			$('#top #cart_mobi').css('margin-right', '17px');
// 		}
// 	}
// 	$('.tooltip').hide();
// 	$.magnificPopup.open({
// 		removalDelay: 170,
// 		callbacks: {
// 			beforeOpen: function() {
// 			   this.st.mainClass = 'mfp-zoom-in';
// 			},
// 			open: function() {
// 				$('body').addClass('razmiv2');
// 				$('#pagefader2').fadeIn(70);
// 			},
// 			close: function() {
// 				$('body').removeClass('razmiv2');
// 				$('#pagefader2').fadeOut(70);
// 				$('#top3.absolutpo').css('right', 'initial');
// 				if ($(window).width() < 768) {
// 					$('#top #cart_mobi').css('margin-right', 'initial');
// 				}
// 			}
// 		},
// 		tLoading: '',
// 		items: {
// 			src: 'index.php?route=revolution/revpopuporder&revproduct_id='+product_id,
// 			type: 'ajax'
// 		}
// 	});
// }
// function get_revpopup_cartquick() {
// 	$('#cart .dropdown-menu').css('display', 'none');
// 	if (document.body.scrollHeight > document.body.offsetHeight) {
// 		$('#top3.absolutpo').css('right', '8.5px');
// 		if ($(window).width() < 768) {
// 			$('#top #cart_mobi').css('margin-right', '17px');
// 		}
// 	}
// 	$('.tooltip').hide();
// 	$.magnificPopup.open({
// 		removalDelay: 170,
// 		callbacks: {
// 			beforeOpen: function() {
// 			   this.st.mainClass = 'mfp-zoom-in';
// 			},
// 			open: function() {
// 				$('body').addClass('razmiv2');
// 				$('#pagefader2').fadeIn(70);
// 			},
// 			close: function() {
// 				$('body').removeClass('razmiv2');
// 				$('#pagefader2').fadeOut(70);
// 				$('#top3.absolutpo').css('right', 'initial');
// 				if ($(window).width() < 768) {
// 					$('#top #cart_mobi').css('margin-right', 'initial');
// 				}
// 				$('#cart .dropdown-menu').css('display', '');
// 			}
// 		},
// 		tLoading: '',
// 		items: {
// 			src: 'index.php?route=revolution/revpopupcartquick',
// 			type: 'ajax'
// 		}
// 	});
// }
// function get_revpopup_cart( product_id, action, quantity, block_id ) {
// 	$('.tooltip').hide();
// 	quantity = typeof(quantity) != 'undefined' ? quantity : 1;
// 	if ( action == "catalog" ) {
// 		data = $('.products_category .product_'+product_id+' .options input[type=\'text\'], .products_category .product_'+product_id+' .options input[type=\'hidden\'], .products_category .product_'+product_id+' .options input[type=\'radio\']:checked, .products_category .product_'+product_id+' .options input[type=\'checkbox\']:checked, .products_category .product_'+product_id+' .options select');
// 		$.ajax({
// 			url: 'index.php?route=checkout/cart/add',
// 			type: 'post',
// 			data: data.serialize() + '&product_id=' + product_id + '&quantity=' + quantity,
// 			dataType: 'json',
// 			success: function( json ) {
// 				$('.alert, .text-danger').remove();
// 				$('.form-group').removeClass('has-error');
// 				$('.success, .warning, .attention, information, .error').remove();
//
// 				if (localStorage.getItem('display') == 'price' || block_id) {
// 					if ( json['redirect'] ) {
// 						location = json['redirect'];
// 					}
//
// 				} else if (localStorage.getItem('display') == 'grid') {
// 					if ( json['redirect'] ) {
// 						location = json['redirect'];
// 					}
//
// 				} else {
// 					$('.products_category .form-group.required').removeClass('opt_required');
// 					if (json['error']) {
// 						$('body').removeClass('razmiv2');
// 						$('#pagefader2').fadeOut(70);
// 						$('#top3.absolutpo').css('right', 'initial');
// 						if ($(window).width() < 768) {
// 							$('#top #cart_mobi').css('margin-right', 'initial');
// 						}
// 						if (json['error']['option']) {
// 							if ($(window).width() < 768) {
// 								if (json['redirect']) {
// 									location = json['redirect'];
// 								}
// 							} else {
// 								for (i in json['error']['option']) {
// 									$('.products_category #input-option' + i).parent().addClass('opt_required');
// 								}
// 							}
// 						}
// 					}
// 				}
//
// 				if ( json['success'] ) {
//
// 						if (document.body.scrollHeight > document.body.offsetHeight) {
// 							$('#top3.absolutpo').css('right', '8.5px');
// 							if ($(window).width() < 768) {
// 								$('#top #cart_mobi').css('margin-right', '17px');
// 							}
// 						}
// 						$.magnificPopup.open({
// 						removalDelay: 170,
// 						callbacks: {
// 							beforeOpen: function() {
// 							   this.st.mainClass = 'mfp-zoom-in';
// 							},
// 							close: function() {
// 								$('body').removeClass('razmiv2');
// 								$('#pagefader2').fadeOut(70);
// 								$('#top3.absolutpo').css('right', 'initial');
// 								if ($(window).width() < 768) {
// 									$('#top #cart_mobi').css('margin-right', 'initial');
// 								}
// 							}
// 						},
// 						tLoading: '',
// 						items: {
// 							src: 'index.php?route=revolution/revpopupcart',
// 							type: 'ajax'
// 						}
// 						});
//
// 					$('#top #cart-total_mobi').html(json['total']);
// 					$('#top3 #cart-total').html(json['total']);
// 					$('#top3 #cart-total-popup').html(json['total']);
// 					$('#cart > ul').load('index.php?route=common/cart/info ul li');
//
// 				}
// 			}
// 		});
// 	}
// 	if ( action == "catalog_mod" ) {
// 		data = $('.products_category .product_'+product_id+' .options input[type=\'text\'], .products_category .product_'+product_id+' .options input[type=\'hidden\'], .products_category .product_'+product_id+' .options input[type=\'radio\']:checked, .products_category .product_'+product_id+' .options input[type=\'checkbox\']:checked, .products_category .product_'+product_id+' .options select');
// 		$.ajax({
// 			url: 'index.php?route=checkout/cart/add',
// 			type: 'post',
// 			data: data.serialize() + '&product_id=' + product_id + '&quantity=' + quantity,
// 			dataType: 'json',
// 			success: function( json ) {
// 				$('.alert, .text-danger').remove();
// 				$('.form-group').removeClass('has-error');
// 				$('.success, .warning, .attention, information, .error').remove();
//
// 				if ( json['redirect'] ) {
// 					location = json['redirect'];
// 				}
//
// 				if ( json['success'] ) {
//
// 						if (document.body.scrollHeight > document.body.offsetHeight) {
// 							$('#top3.absolutpo').css('right', '8.5px');
// 							if ($(window).width() < 768) {
// 								$('#top #cart_mobi').css('margin-right', '17px');
// 							}
// 						}
// 						$.magnificPopup.open({
// 						removalDelay: 170,
// 						callbacks: {
// 							beforeOpen: function() {
// 							   this.st.mainClass = 'mfp-zoom-in';
// 							},
// 							close: function() {
// 								$('body').removeClass('razmiv2');
// 								$('#pagefader2').fadeOut(70);
// 								$('#top3.absolutpo').css('right', 'initial');
// 								if ($(window).width() < 768) {
// 									$('#top #cart_mobi').css('margin-right', 'initial');
// 								}
// 							}
// 						},
// 						tLoading: '',
// 						items: {
// 							src: 'index.php?route=revolution/revpopupcart',
// 							type: 'ajax'
// 						}
// 						});
//
// 					$('#top #cart-total_mobi').html(json['total']);
// 					$('#top3 #cart-total').html(json['total']);
// 					$('#top3 #cart-total-popup').html(json['total']);
// 					$('#cart > ul').load('index.php?route=common/cart/info ul li');
//
// 				}
// 			}
// 		});
// 	}
// 	if ( action == "product" ) {
// 		data = $('.product_informationss .product-info input[type=\'text\'], .product_informationss .product-info input[type=\'hidden\'], .product_informationss .product-info input[type=\'radio\']:checked, .product_informationss .product-info input[type=\'checkbox\']:checked, .product_informationss .product-info select, .product_informationss .product-info textarea'),
// 		$.ajax({
// 			url: 'index.php?route=checkout/cart/add',
// 			type: 'post',
// 			data: data.serialize() + '&product_id=' + product_id + '&quantity=' + quantity,
// 			dataType: 'json',
//
// 			beforeSend: function(){
// 				$('body').addClass('razmiv2');
// 				$('#pagefader2').fadeIn(70);
// 			},
//
// 			success: function( json ) {
// 				$('.alert, .text-danger').remove();
// 				$('.form-group').removeClass('has-error');
// 				$('.success, .warning, .attention, information, .error').remove();
// 				if (json['error']) {
// 					$('body').removeClass('razmiv2');
// 					$('#pagefader2').fadeOut(70);
// 					$('#top3.absolutpo').css('right', 'initial');
// 					if ($(window).width() < 768) {
// 						$('#top #cart_mobi').css('margin-right', 'initial');
// 					}
// 					if (json['error']['option']) {
// 						for (i in json['error']['option']) {
// 							$('#input-option' + i).before('<span class="error bg-danger">' + json['error']['option'][i] + '</span>');
// 							if ($(window).width() < 768) {
// 								$('html, body').animate({scrollTop:$('.error').offset().top - 40}, 'linear');
// 							}
// 						}
// 					}
// 				}
// 				if ( json['success'] ) {
//
// 						if (document.body.scrollHeight > document.body.offsetHeight) {
// 							$('#top3.absolutpo').css('right', '8.5px');
// 							if ($(window).width() < 768) {
// 								$('#top #cart_mobi').css('margin-right', '17px');
// 							}
// 						}
// 						$.magnificPopup.open({
// 							removalDelay: 170,
// 							callbacks: {
// 								beforeOpen: function() {
// 								   this.st.mainClass = 'mfp-zoom-in';
// 								},
// 								close: function() {
// 									$('body').removeClass('razmiv2');
// 									$('#pagefader2').fadeOut(70);
// 									$('#top3.absolutpo').css('right', 'initial');
// 									if ($(window).width() < 768) {
// 										$('#top #cart_mobi').css('margin-right', 'initial');
// 									}
// 								}
// 							},
// 							tLoading: '',
// 							items: {
// 								src: 'index.php?route=revolution/revpopupcart',
// 								type: 'ajax'
// 							}
// 						});
//
// 					$('#top #cart-total_mobi').html(json['total']);
// 					$('#top3 #cart-total').html(json['total']);
// 					$('#top3 #cart-total-popup').html(json['total']);
// 					$('#cart > ul').load('index.php?route=common/cart/info ul li');
//
// 				}
// 			}
// 		});
// 	}
// 	if ( action == "popup_product" ) {
// 		data = $('#popup-view-wrapper .product-info input[type=\'text\'], #popup-view-wrapper .product-info input[type=\'hidden\'], #popup-view-wrapper .product-info input[type=\'radio\']:checked, #popup-view-wrapper .product-info input[type=\'checkbox\']:checked, #popup-view-wrapper .product-info select, #popup-view-wrapper .product-info textarea');
// 		$.ajax({
// 			url: 'index.php?route=checkout/cart/add',
// 			type: 'post',
// 			data: data.serialize() + '&product_id=' + product_id + '&quantity=' + quantity,
// 			dataType: 'json',
//
// 			beforeSend: function(){
// 				$('body').addClass('razmiv2');
// 				$('#pagefader2').fadeIn(70);
// 			},
//
// 			success: function( json ) {
// 				$('.alert, .text-danger').remove();
// 				$('.form-group').removeClass('has-error');
// 				$('.success, .warning, .attention, information, .error').remove();
// 				if (json['error']) {
// 					$('body').removeClass('razmiv2');
// 					$('#pagefader2').fadeOut(70);
// 					$('#top3.absolutpo').css('right', 'initial');
// 					if ($(window).width() < 768) {
// 						$('#top #cart_mobi').css('margin-right', 'initial');
// 					}
// 					if (json['error']['option']) {
// 						if ($(window).width() < 768) {
// 							if (json['redirect']) {
// 								location = json['redirect'];
// 							}
// 						} else {
// 							for (i in json['error']['option']) {
// 								$('#input-option' + i).before('<span class="error bg-danger">' + json['error']['option'][i] + '</span>');
// 							}
// 						}
// 					}
// 				}
// 				if ( json['success'] ) {
//
// 						if (document.body.scrollHeight > document.body.offsetHeight) {
// 							$('#top3.absolutpo').css('right', '8.5px');
// 							if ($(window).width() < 768) {
// 								$('#top #cart_mobi').css('margin-right', '17px');
// 							}
// 						}
// 						$.magnificPopup.open({
// 							removalDelay: 170,
// 							callbacks: {
// 								beforeOpen: function() {
// 								   this.st.mainClass = 'mfp-zoom-in';
// 								},
// 								close: function() {
// 									$('body').removeClass('razmiv2');
// 									$('#pagefader2').fadeOut(70);
// 									$('#top3.absolutpo').css('right', 'initial');
// 									if ($(window).width() < 768) {
// 										$('#top #cart_mobi').css('margin-right', 'initial');
// 									}
// 								}
// 							},
// 							tLoading: '',
// 							items: {
// 								src: 'index.php?route=revolution/revpopupcart',
// 								type: 'ajax'
// 							}
// 						});
//
// 					$('#top #cart-total_mobi').html(json['total']);
// 					$('#top3 #cart-total').html(json['total']);
// 					$('#top3 #cart-total-popup').html(json['total']);
// 					$('#cart > ul').load('index.php?route=common/cart/info ul li');
//
// 				}
// 			}
// 		});
// 	}
// 	if ( action == "show_cart" ) {
// 		if (document.body.scrollHeight > document.body.offsetHeight) {
// 			$('#top3.absolutpo').css('right', '8.5px');
// 			if ($(window).width() < 768) {
// 				$('#top #cart_mobi').css('margin-right', '17px');
// 			}
// 		}
// 		$.magnificPopup.open({
// 			removalDelay: 170,
// 			callbacks: {
// 				beforeOpen: function() {
// 				   this.st.mainClass = 'mfp-zoom-in';
// 				},
// 				open: function() {
// 					$('body').addClass('razmiv2');
// 					$('#pagefader2').fadeIn(70);
// 				},
// 				close: function() {
// 					$('body').removeClass('razmiv2');
// 					$('#pagefader2').fadeOut(70);
// 					$('#top3.absolutpo').css('right', 'initial');
// 					if ($(window).width() < 768) {
// 						$('#top #cart_mobi').css('margin-right', 'initial');
// 					}
// 				}
// 			},
// 			tLoading: '',
// 			items: {
// 				src: 'index.php?route=revolution/revpopupcart',
// 				type: 'ajax'
// 			}
// 		});
// 	}
// 	if ( action == "redirect_cart" ) {
// 		  window.location.href = "/index.php?route=checkout/checkout"
// 	}
// 	if ( action == "module" ) {
// 		quantity = typeof(quantity) != 'undefined' ? quantity : 1;
// 		data = $('#'+block_id+' .product_'+product_id+' .options input[type=\'text\'], #'+block_id+' .product_'+product_id+' .options input[type=\'hidden\'], #'+block_id+' .product_'+product_id+' .options input[type=\'radio\']:checked, #'+block_id+' .product_'+product_id+' .options input[type=\'checkbox\']:checked, #'+block_id+' .product_'+product_id+' .options select');
// 		$.ajax({
// 			url: 'index.php?route=checkout/cart/add',
// 			type: 'post',
// 			data: data.serialize() + '&product_id=' + product_id + '&quantity=' + quantity,
// 			dataType: 'json',
// 			success: function( json ) {
// 				$('.alert, .text-danger').remove();
// 				$('.form-group').removeClass('has-error');
// 				$('.success, .warning, .attention, information, .error').remove();
//
// 				if ( json['redirect'] ) {
// 					location = json['redirect'];
// 				}
//
// 				if ( json['success'] ) {
//
// 						if (document.body.scrollHeight > document.body.offsetHeight) {
// 							$('#top3.absolutpo').css('right', '8.5px');
// 							if ($(window).width() < 768) {
// 								$('#top #cart_mobi').css('margin-right', '17px');
// 							}
// 						}
// 						$.magnificPopup.open({
// 						removalDelay: 170,
// 						callbacks: {
// 							beforeOpen: function() {
// 							   this.st.mainClass = 'mfp-zoom-in';
// 							},
// 							close: function() {
// 								$('body').removeClass('razmiv2');
// 								$('#pagefader2').fadeOut(70);
// 								$('#top3.absolutpo').css('right', 'initial');
// 								if ($(window).width() < 768) {
// 									$('#top #cart_mobi').css('margin-right', 'initial');
// 								}
// 							}
// 						},
// 						tLoading: '',
// 						items: {
// 							src: 'index.php?route=revolution/revpopupcart',
// 							type: 'ajax'
// 						}
// 						});
//
// 					$('#top #cart-total_mobi').html(json['total']);
// 					$('#top3 #cart-total').html(json['total']);
// 					$('#top3 #cart-total-popup').html(json['total']);
// 					$('#cart > ul').load('index.php?route=common/cart/info ul li');
//
// 				}
// 			}
// 		});
// 	}
// 	if ( action == "module_in_product" ) {
// 		quantity = typeof(quantity) != 'undefined' ? quantity : 1;
// 		data = $('#'+block_id+' .product_'+product_id+' .options input[type=\'text\'], #'+block_id+' .product_'+product_id+' .options input[type=\'hidden\'], #'+block_id+' .product_'+product_id+' .options input[type=\'radio\']:checked, #'+block_id+' .product_'+product_id+' .options input[type=\'checkbox\']:checked, #'+block_id+' .product_'+product_id+' .options select');
// 		$.ajax({
// 			url: 'index.php?route=checkout/cart/add',
// 			type: 'post',
// 			data: data.serialize() + '&product_id=' + product_id + '&quantity=' + quantity,
// 			dataType: 'json',
//
// 			beforeSend: function(){
// 				$('body').addClass('razmiv2');
// 				$('#pagefader2').fadeIn(70);
// 			},
//
// 			success: function( json ) {
// 				$('.alert, .text-danger').remove();
// 				$('.form-group').removeClass('has-error');
// 				$('.success, .warning, .attention, information, .error').remove();
//
// 				if ( json['redirect'] ) {
// 					location = json['redirect'];
// 				}
//
// 				if ( json['success'] ) {
//
// 						if (document.body.scrollHeight > document.body.offsetHeight) {
// 							$('#top3.absolutpo').css('right', '8.5px');
// 							if ($(window).width() < 768) {
// 								$('#top #cart_mobi').css('margin-right', '17px');
// 							}
// 						}
// 						$.magnificPopup.open({
// 						removalDelay: 170,
// 						callbacks: {
// 							beforeOpen: function() {
// 							   this.st.mainClass = 'mfp-zoom-in';
// 							},
// 							close: function() {
// 								$('body').removeClass('razmiv2');
// 								$('#pagefader2').fadeOut(70);
// 								$('#top3.absolutpo').css('right', 'initial');
// 								if ($(window).width() < 768) {
// 									$('#top #cart_mobi').css('margin-right', 'initial');
// 								}
// 							}
// 						},
// 						tLoading: '',
// 						items: {
// 							src: 'index.php?route=revolution/revpopupcart',
// 							type: 'ajax'
// 						}
// 						});
//
// 					$('#top #cart-total_mobi').html(json['total']);
// 					$('#top3 #cart-total').html(json['total']);
// 					$('#top3 #cart-total-popup').html(json['total']);
// 					$('#cart > ul').load('index.php?route=common/cart/info ul li');
//
// 				}
// 			}
// 		});
// 	}
// }
// function get_revpopup_cart_option (opt_id, option, quantity, product_id) {
// 	$('.tooltip').hide();
// 	$('.options_buy .pro_'+option+' input[name=\'option['+opt_id+']\']').val(option);
// 	data = $('.product-info .options_buy .pro_'+option+' input[type=\'text\'], .product-info .options_buy .pro_'+option+' input[type=\'hidden\'], .product-info .options_buy .pro_'+option+' input[type=\'radio\']:checked, .product-info .options_buy .pro_'+option+' input[type=\'checkbox\']:checked, .product-info .options_buy .pro_'+option+' select, .product-info .options_buy .pro_'+option+' textarea');
//     $.ajax({
//         url: 'index.php?route=checkout/cart/add',
//         type: 'post',
// 		data: data.serialize() + '&product_id=' + product_id + '&quantity=' + quantity,
//         dataType: 'json',
//
// 			beforeSend: function(){
// 				$('body').addClass('razmiv2');
// 				$('#pagefader2').fadeIn(70);
// 			},
//
//         success: function( json ) {
// 			$('.alert, .text-danger').remove();
// 			$('.form-group').removeClass('has-error');
// 			$('.success, .warning, .attention, information, .error').remove();
// 			if (json['error']) {
// 				$('body').removeClass('razmiv2');
// 				$('#pagefader2').fadeOut(70);
// 				$('#top3.absolutpo').css('right', 'initial');
// 				if ($(window).width() < 768) {
// 					$('#top #cart_mobi').css('margin-right', 'initial');
// 				}
// 			}
// 			if ( json['success'] ) {
//
// 					if (document.body.scrollHeight > document.body.offsetHeight) {
// 						$('#top3.absolutpo').css('right', '8.5px');
// 						if ($(window).width() < 768) {
// 							$('#top #cart_mobi').css('margin-right', '17px');
// 						}
// 					}
// 					$.magnificPopup.open({
// 						removalDelay: 170,
// 						callbacks: {
// 							beforeOpen: function() {
// 							   this.st.mainClass = 'mfp-zoom-in';
// 							},
// 							close: function() {
// 								$('body').removeClass('razmiv2');
// 								$('#pagefader2').fadeOut(70);
// 								$('#top3.absolutpo').css('right', 'initial');
// 								if ($(window).width() < 768) {
// 									$('#top #cart_mobi').css('margin-right', 'initial');
// 								}
// 							}
// 						},
// 						tLoading: '',
// 						items: {
// 							src: 'index.php?route=revolution/revpopupcart',
// 							type: 'ajax'
// 						}
// 					});
//
// 				$('#top #cart-total_mobi').html(json['total']);
// 				$('#top3 #cart-total').html(json['total']);
// 				$('#top3 #cart-total-popup').html(json['total']);
// 				$('#cart > ul').load('index.php?route=common/cart/info ul li');
//
// 			}
// 		}
//     });
// }
// function get_revpopup_login() {
// 	if (document.body.scrollHeight > document.body.offsetHeight) {
// 		$('#top3.absolutpo').css('right', '8.5px');
// 		if ($(window).width() < 768) {
// 			$('#top #cart_mobi').css('margin-right', '17px');
// 		}
// 	}
// 	$('.tooltip').hide();
// 	$.magnificPopup.open({
// 		removalDelay: 170,
// 		callbacks: {
// 			beforeOpen: function() {
// 			   this.st.mainClass = 'mfp-zoom-in';
// 			},
// 			open: function() {
// 				$('body').addClass('razmiv2');
// 				$('#pagefader2').fadeIn(70);
// 			},
// 			close: function() {
// 				$('body').removeClass('razmiv2');
// 				$('#pagefader2').fadeOut(70);
// 				$('#top3.absolutpo').css('right', 'initial');
// 				if ($(window).width() < 768) {
// 					$('#top #cart_mobi').css('margin-right', 'initial');
// 				}
// 			}
// 		},
// 		tLoading: '',
// 		items: {
// 			src: 'index.php?route=revolution/revpopuplogin',
// 			type: 'ajax'
// 		}
// 	});
// }
// $(document).on('click', '.tel .dropdown-menu', function (e) {
// 	$(this).hasClass('dropdown-menu-right') && e.stopPropagation();
// });
//
//
//
//
//
//
// 		var button_more = true; var pagination_exist = true; var autoscroll = false;
//
// 		var window_height = 0; var product_block_offset = 0; var product_block = '.row > .product-layout'; var pages_count = 0; var pages = [];
// 		function gettNextProductPage(pages, pages_count) {
// 			if (pages_count >= pages.length) return;
// 			masked('.row > .product-layout > .product-thumb', true);
// 			$.ajax({
// 				url:pages[pages_count],
// 				type:"GET",
// 				data:'',
// 				beforeSend: function(){
// 					$('.load_more .fa-refresh').addClass('fa-spin');
// 				},
// 				success:function (data) {
// 					$data = $(data);
// 					masked('.row > .product-layout > .product-thumb', false);
// 					$data.find('.row > .product-layout > .product-thumb').addClass('op_dblock1');
// 					if ($data) {
// 						if (localStorage.getItem('display') == 'list') {
// 							$(product_block).parent().append($data.find('#content .product-layout').parent().html());
// 							list_view();
// 							if (product_block == '.product-grid') {grid_view();};
// 						} else if (localStorage.getItem('display') == 'price') {
// 							$(product_block).parent().append($data.find('#content .product-layout').parent().html());
// 							price_view();
// 						} else {
// 							$(product_block).parent().append($data.find('#content .product-layout').parent().html());
// 							grid_view();
// 						}
// 						if (pagination_exist) {
// 							$('.pagination').html($data.find('.pagination'));
// 						}
// 						$('.load_more .fa-refresh').removeClass('fa-spin').css('hover');
// 						if (pages_count+1 >= pages.length) {$('.load_more').hide();};
// 						setTimeout(function() {
// 							$('.row > .product-layout > .product-thumb').removeClass('op_dblock1').addClass('op_dblock2');
// 						}, 220)
// 					}
// 				}
// 			});
// 		}
// 		$(document).ready(function(){
// 			window_height = $(window).height();
// 			var button_more_block = $('#load_more').html();
// 			if ($(product_block).length > 0) {
// 				product_block_offset = $(product_block).offset().top;
// 				var href = $('.pagination').find('li:last a').attr('href');
// 				$('.pagination').each(function(){
// 					if (href) {
// 						TotalPages = href.substring(href.indexOf("page=")+5);
// 						First_index = $(this).find('li.active span').html();
// 						i = parseInt(First_index) + 1;
// 						while (i <= TotalPages) {
// 							pages.push(href.substring(0,href.indexOf("page=")+5) + i);
// 							i++;
// 						}
// 					}
// 				});
// 				if (button_more && href) {
// 					$('.pagination').parent().parent().before(button_more_block);
// 					if (!pagination_exist) {
// 						$('.pagpages').addClass('dnone');
// 					}
// 					$(".load_more").click(function(event) {
// 						event.preventDefault();
// 						gettNextProductPage(pages, pages_count);
// 						pages_count++;
// 						setTimeout(function() {
// 							if (pages_count > 0) {
// 								var $next = $(".pagpages .pagination li.active").next("li").children("a");
// 								if ($next.length == 0) return;
// 								$.get($next.attr("href"), function(data) {
// 									$data = $(data);
// 									var pag = $data.find(".pagpages > *");
// 									var pag2 = pag.filter(".text-right").html();
// 									var pag_ch =  pag2.substr(0,pag2.indexOf(" по")).replace(/[^\d.]/ig, '');
// 									pag2 = pag2.replace(pag_ch, "1");
// 									$(".pagpages").html(pag);
// 									$(".pagpages .text-right").html(pag2);
// 									$(".owlproduct").not(".owl-theme").owlCarousel({
// 										beforeInit: true,
// 										items: 1,
// 										singleItem: true,
// 										mouseDrag: false,
// 										autoPlay: false,
// 										navigation: true,
// 										navigationText: ['<i class="fa fa-chevron-left fa-3x"></i>', '<i class="fa fa-chevron-right fa-3x"></i>'],
// 										pagination: false
// 									});
// 								}, "html")
// 							}
// 						}, 350);
// 					});
// 				} else if (autoscroll) {
// 					$('.pagpages .pagination').hide();
// 					autoscroll_loading = false;
// 					$(window).scroll(function() {
// 						if(inZone('.pagpages') && !autoscroll_loading) {
// 							autoscroll_loading = true;
// 							setTimeout(function() {
// 								gettNextProductPage(pages, pages_count);
// 								pages_count++;
// 								if (pages_count > 0) {
// 									var $next = $(".pagpages .pagination li.active").next("li").children("a");
// 									if ($next.length == 0) return;
// 									$.get($next.attr("href"), function(data) {
// 										$data = $(data);
// 										var pag = $data.find(".pagpages > *");
// 										var pag2 = pag.filter(".text-right").html();
// 										var pag_ch =  pag2.substr(0,pag2.indexOf(" по")).replace(/[^\d.]/ig, '');
// 										pag2 = pag2.replace(pag_ch, "1");
// 										$(".pagpages .text-right").html(pag2);
// 										$(".owlproduct").not(".owl-theme").owlCarousel({
// 											beforeInit: true,
// 											items: 1,
// 											singleItem: true,
// 											mouseDrag: false,
// 											autoPlay: false,
// 											navigation: true,
// 											navigationText: ['<i class="fa fa-chevron-left fa-3x"></i>', '<i class="fa fa-chevron-right fa-3x"></i>'],
// 											pagination: false
// 										});
// 										autoscroll_loading = false;
// 									}, "html")
// 								}
// 							}, 350);
// 						}
// 					});
// 				}
// 			}
// 		});
// 		function inZone(el){
// 			if($(el).length) {
// 				var scrollTop = $(window).scrollTop();
// 				var windowHeight = $(window).height();
// 				var offset = $(el).offset();
// 				if(scrollTop <= offset.top && ($(el).height() + offset.top) < (scrollTop + windowHeight))
// 				return true;
// 			};
// 			return false;
// 		}
//
//
//
// function get_revpopup_predzakaz(product_id) {
// 	if (document.body.scrollHeight > document.body.offsetHeight) {
// 		$('#top3.absolutpo').css('right', '8.5px');
// 		if ($(window).width() < 768) {
// 			$('#top #cart_mobi').css('margin-right', '17px');
// 		}
// 	}
// 	$.magnificPopup.open({
// 		removalDelay: 170,
// 		callbacks: {
// 			beforeOpen: function() {
// 			   this.st.mainClass = 'mfp-zoom-in';
// 			},
// 			open: function() {
// 				$('body').addClass('razmiv2');
// 				$('#pagefader2').fadeIn(70);
// 			},
// 			close: function() {
// 				$('body').removeClass('razmiv2');
// 				$('#pagefader2').fadeOut(70);
// 				$('#top3.absolutpo').css('right', 'initial');
// 				if ($(window).width() < 768) {
// 					$('#top #cart_mobi').css('margin-right', 'initial');
// 				}
// 			}
// 		},
// 		tLoading: '',
// 		items: {
// 			src: 'index.php?route=revolution/revpopuppredzakaz&revproduct_id='+product_id,
// 			type: 'ajax'
// 		}
// 	});
// }
//
// 	function get_product_option_id(product_id) {
// 		var sel_option_id = document.getElementById('soption_'+product_id);
// 		var option_id = sel_option_id.options[sel_option_id.selectedIndex].getAttribute('product_option_id');
// 		sel_option_id.setAttribute('name', 'option['+option_id+']');
// 		update_prices_product(product_id,1);
// 	}
// 	(function($){
// 		$.fn.revFilter = function(f) {
// 			var g = this.selector;
// 			var h = $(g).attr('action');
// 			$(document).ready(function() {
// 				init_revfilter();
// 			});
// 			$(document).on('submit', g, function(e) {
// 				e.preventDefault();
// 				var a = $(this).serialize();
// 				loadProds(h,a,f.revload);
// 			});
// 			$(document).on('click', '#'+f.reset_id, function(e) {
// 				$(g+' input, '+g+' select').not('[type=hidden]').each(function(a) {
// 					if ($(this).hasClass('irs-hidden-input')) {
// 						var b = $(this).data('ionRangeSlider');
// 						b.reset();
// 						}
// 					if ($(this).is(':checkbox') || $(this).is(':radio')) {
// 						$(this).removeAttr("checked");
// 					} else {
// 						$(this).val('');
// 					}
// 				});
// 				var c = $(g).serialize();
// 				loadProds(h,c,f.revload);
// 			});
// 			if (f.mode == 'auto') {
// 				$(document).on('change', g+' input:not([type=hidden]):not(.irs-hidden-input), '+g+' select', function() {
// 					$(g).submit();
// 				})
// 			}
// 			function init_revfilter() {
//
//
// 					var a = $('#load_more').html();
// 					$('.pagination').parent().parent().before(a);
//
// 				$('#input-sort').removeAttr('onchange');
// 				$('#input-limit').removeAttr('onchange');
// 				$(f.selector).addClass('revcontainer');
// 				if (localStorage.getItem('display') == 'list') {
// 					list_view();
// 				} else if (localStorage.getItem('display') == 'price') {
// 					price_view();
// 				} else if (localStorage.getItem('display') == 'grid') {
// 					grid_view();
// 				} else {
//
// 						grid_view();
//
// 				}
//
// 					$('#content .owlproduct').owlCarousel( {
// 						beforeInit: true,
// 						items: 1,
// 						singleItem: true,
// 						mouseDrag: false,
// 						autoPlay: false,
// 						navigation: true,
// 						navigationText: ['<i class="fa fa-chevron-left fa-3x"></i>','<i class="fa fa-chevron-right fa-3x"></i>'],
// 						pagination: false
// 					});
//
// 						if (localStorage.getItem('display')=='grid') {
// 							$('.product-thumb > .image').css('width','initial');
// 						}
//
// 					podgon_img();
//
// 				podgon_fona();
// 				$('#column-left #revfilter_box .mobil_wellsm .well.well-sm').remove();
// 				if ($(window).width() < 991) {
// 					$('#column-left #revfilter_box .mobil_wellsm .collapsible').append($('.revfilter_container > .well.well-sm'));
// 				}
//
// 			}
// 			function loadProds(c,d,e) {
// 				d = d || '';
// 				e = e || false;
// 				filterurl = c + '&isrevfilter=1';
// 				$.ajax({
// 					url: filterurl,
// 					type: 'get',
// 					data: d,
// 					processData: false,
// 					dataType: e ? 'json' : 'html',
// 					beforeSend: function() {
// 						$(g+' button').button('loading');
// 						masked('.products_category > .product-layout > .product-thumb',true);
// 						$('.load_more .fa-refresh').addClass('fa-spin');
// 					},
// 					success: function(a) {
// 						var b = $.parseHTML((e && (typeof a.html != 'undefined')) ? a.html : a);
// 						$(f.selector).children().remove();
// 						$(f.selector).append($(b).find(f.selector).children());
// 						init_revfilter();
// 					},
// 					complete: function() {
// 						setTimeout(function() {
// 							masked('.products_category > .product-layout > .product-thumb',false);
// 							autoscroll_loading = false;
// 							$(g+' button').button('reset');
// 							var pr_opts_cat = $('.products_category .options_buy')
// 							pr_opts_cat.find('select:first').each(function() {
// 								this.onchange();
// 							});
// 						},250);
// 						if (f.mode == 'manual' && $(window).width() > 767) {
// 							element = $('.breadcrumb');
// 							offset = element.offset();
// 							offsetTop = offset.top;
// 							//$('html, body').animate({scrollTop:offsetTop}, 250, 'linear');
// 						};
// 						$('.load_more .fa-refresh').removeClass('fa-spin').css('hover');
//
// 											}
// 				})
// 			}
// 			$(document).on('change', '#input-sort', function(e) {
// 				var a = $(this).val();
// 				sort = a.match('sort=([A-Za-z.]+)');
// 				$('input[name="sort"]').val(sort[1]);
// 				order = a.match('order=([A-Z]+)');
// 				$('input[name="order"]').val(order[1]);
// 				loadProds(a, null, true);
// 			});
// 			$(document).on('change', '#input-limit', function(e) {
// 				var a = $(this).val();
// 				if (a) {
// 					limit = a.match('limit=([0-9]+)');
// 					$('input[name="limit"]').val(limit[1]);
// 				}
// 				loadProds(a, null, true);
// 			});
//
// 				var i = $('#input-limit').val();
// 				if (i) {
// 					limit = i.match('limit=([0-9]+)');
// 					$i = limit[1];
// 				}
// 				$(document).on('click', '.load_more', function(e) {
// 					e.preventDefault();
// 					var a = $('#input-limit').val();
// 					if (a) {
// 						limit = a.match('limit=([0-9]+)');
// 					}
// 					limit3 = $('#revfilter input[name="limit"]').val();
// 					if (limit3) {
// 						limit21 = limit3;
// 					} else {
// 						limit21 = limit[1];
// 						$('#revfilter input[name="limit"]').val(limit21);
// 					}
// 					limit2 = Number(limit21)+Number($i);
// 					limitnumber = 'limit='+limit21;
// 					a = a.replace('limit='+$i,'');
// 					a = a.replace(limitnumber,'');
// 					var b = a+'limit='+limit2;
// 					$('#revfilter input[name="limit"]').val(limit2);
// 					loadProds(b, null, true);
// 				});
//
//
// 			function inZone(a) {
// 				if ($(a).length) {
// 				var b = $(window).scrollTop();
// 				var c = $(window).height();
// 				var d = $(a).offset();
// 				if (b<=d.top&&($(a).height()+d.top)<(b+c)) return true
// 				};
// 				return false;
// 			}
// 			$(document).on('click','#list-view',function() {
// 				list_view();
// 			});
// 			$(document).on('click', '#grid-view', function() {
// 				grid_view();
// 			});
// 			$(document).on('click', '#price-view', function() {
// 				price_view();
// 			});
// 		}
// 	})(jQuery);
//
// //--></script>