
(function ($) {
	$.cPager = {
		pn					: 1,		//默认显示的页码
		total				: 10,		//总页码
		showMax				: 7,		//一次最多显示的页码
		showFirstPage 		: true,		//显示首页按钮
		showLastPage		: true,		//显示尾页按钮
		showPrePage			: true,		//显示上一页按钮
		showNextPage		: true,		//显示下一页按钮
		showGotoPage		: true,		//显示跳转页面输入框和按钮
		color				: "#2a9ce3",
		pnName				: "page",
		config : {
			firstPageText	: "首页",
			lastPageText	: "尾页",
			prePageText		: "上一页",
			nextPageText	: "下一页",
			gotoBtnText		: "确定",
            getCurrentPage:$.noop,
		},
		// 绘制 html控件
		show: function (conf) {
			if (conf) {
				this.user(conf);
			}

			if (this.getPage()) this.pn = this.getPage();

			var btn_first = '', btn_pre = '', btn_next = '', btn_last = '', pgBtn = '', pgBtndiv = '', pgInput = '';
			if (this.showFirstPage) {	//显示首页按钮
				btn_first = this.pn == 1 ? '<a class="disable">'+ this.config.firstPageText +'</a>' : '<a class="pgBtn" onclick="$.cPager.gotoPage(1)">'+ this.config.firstPageText +'</a>';
			}
			if (this.showPrePage) {		//显示上一页按钮
				btn_pre = this.pn == 1 ? '<a class="disable">'+ this.config.prePageText +'</a>' : '<a class="pgBtn" onclick="$.cPager.gotoPage('+ (this.pn - 1) +')">'+ this.config.prePageText +'</a>';
			}
			if (this.showLastPage) {	//显示尾页按钮
				btn_last = this.pn == this.total ? '<a class="disable">'+ this.config.lastPageText +'</a>': '<a class="pgBtn" onclick="$.cPager.gotoPage('+ this.total +')">'+ this.config.lastPageText +'</a>';
			}
			if (this.showNextPage) {	//显示下一页按钮
				var nextNum = parseInt(this.pn) + 1;
				btn_next = this.pn == this.total ? '<a class="disable">'+ this.config.nextPageText +'</a>' : '<a class="pgBtn" onclick="$.cPager.gotoPage('+ nextNum +')">'+ this.config.nextPageText +'</a>';
			}

			if (this.total <= this.showMax) {		// 总页码小于显示Max
				for (var i = 1; i <= this.total; i++) {
					if (i == this.pn) {
						actBtn();
					} else {
						pgb();
					}
				}
			} else {								// 总页码大于显示Max
				if (this.pn <= this.showMax / 2 + 1) {
					for (var i = 1; i <= this.showMax; i++) {
						if (i == this.pn) {
							actBtn();
						} else {
							pgb();
						}
					}
					ellipsis();
				} else {
					if (this.pn > this.total - parseInt(this.showMax / 2) - 1) {
						ellipsis();
						var p = this.total - this.showMax + 1;
						for (var i = p; i <= this.total; i++) {
							if (i == this.pn) {
								actBtn();
							} else {
								pgb();
							}
						}
					} else {
						ellipsis();
						if (this.showMax % 2) {
							var p = this.pn - parseInt(this.showMax / 2);
						} else {
							var p = this.pn - parseInt(this.showMax / 2) + 1;
						}
						for (var i = p; i < this.showMax + p; i++) {
							if (i == this.pn) {
								actBtn();
							} else {
								pgb();
							}
						}
						ellipsis();
					}
				}
			}

			function pgb() {
				pgBtn += '<a class="pgBtn" onclick="$.cPager.gotoPage('+ i +')">'+ i +'</a>'; 
			}

			function actBtn() {
				pgBtn += '<a class="active">'+ i +'</a>'; 
			}
			
			function ellipsis() {
				pgBtn += '<a class="active">···</a>';
			}

			pgBtndiv += '<div id="pgBtndiv">'+ btn_first + btn_pre + pgBtn + btn_next + btn_last +'</div>';
			$('#cPager').append(pgBtndiv);
			var color = this.color;
			$('#cPager').find('.pgBtn').hover(function() {
				$(this).css("background-color", color);
			}, function() {
				$(this).css("background-color", "white");
			});

			if (this.showGotoPage) {
				pgInput += '<div id="pgInput"> 共'+ this.total +'页，'+' 跳到第 <input type="text" id="gotoPage"> 页'+
							' <button id="gotoBtn" onclick="$.cPager.gotoPage()">'+ $.cPager.config.gotoBtnText +'</button></div>';
				$('#cPager').append(pgInput);
				$('#gotoBtn').css("background-color", this.color);
			}
		},

		// 用户设置
		user: function (conf) {
			if (conf.pn) this.pn = conf.pn;
			if (conf.total) this.total = conf.total;
			if (conf.showMax) this.showMax = conf.showMax;
			if (conf.color) this.color = conf.color;
			if (conf.pnName) this.pnName = conf.pnName;
			if (conf.showFirstPage != undefined) this.showFirstPage = conf.showFirstPage;
			if (conf.showLastPage != undefined) this.showLastPage = conf.showLastPage;
			if (conf.showPrePage != undefined) this.showPrePage = conf.showPrePage;
			if (conf.showNextPage != undefined) this.showNextPage = conf.showNextPage;
			if (conf.showGotoPage != undefined) this.showGotoPage = conf.showGotoPage;
			if (conf.config) {
				if (conf.config.firstPageText) this.config.firstPageText = conf.config.firstPageText;
				if (conf.config.lastPageText) this.config.lastPageText = conf.config.lastPageText;
				if (conf.config.prePageText) this.config.prePageText = conf.config.prePageText;
				if (conf.config.nextPageText) this.config.nextPageText = conf.config.nextPageText;
				if (conf.config.gotoBtnText) this.config.gotoBtnText = conf.config.gotoBtnText;
			}
		},

		// 页面跳转
		gotoPage: function (pn) {
			if (pn) {

                if(this.config.getCurrentPage){
                    this.config.getCurrentPage(pn);
				}
                //window.location.href = this.getUrl(pn);
                this.pnName=pn;
                this.show(this.config)

			} else {
				var pgNum = $("#gotoPage").val();
				if (pgNum) {

                    if(this.config.getCurrentPage){
                        this.config.getCurrentPage(pn);
                    }
                    //window.location.href = this.getUrl(pgNum);
                    this.pnName=pn;
                    this.show(this.config)
				}
			}
		},

		getPage: function () {
			var reg = new RegExp("(^|&)"+ this.pnName +"=([^&]*)($|&)");
			var pn = window.location.search.substr(1).match(reg);
			if (pn) {
				pn = pn[2];
				return pn;
			} else if (!pn) {
				return null;
			}
		},

		getUrl: function (pn) {
			var localUrl = window.location.href;
			if (localUrl.indexOf('?') == -1) {
				localUrl += "?" + this.pnName + "=" + pn;
			} else {
				if (localUrl.indexOf(this.pnName) == -1) {
					localUrl += "&" + this.pnName + "=" + pn;
				} else {
					localUrl = localUrl.substr(0, localUrl.lastIndexOf(this.pnName)) + this.pnName + "=" + pn + localUrl.substr(localUrl.lastIndexOf(this.pnName) + this.getPage().length + this.pnName.length + 1);
				}
			}
			return localUrl;
		}

	}
})(jQuery);