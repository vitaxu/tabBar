(function($){
  var tabBar = window['tabBar'] = function(o){
        return new _tabBar(o);
      },
      _tabBar = function(o){
        this.wrap     = $("#" + o.wrap);
        this.num      = o.num;
        this.prevBtn  = $("#" + o.prevBtn);
        this.nextBtn  = $("#" + o.nextBtn);
        this.ul       = this.wrap.find('ul');
        this.li       = this.wrap.find('li');
        this.len      = this.li.length;
        this.nowIndex = 0;
        this.flag     = true;
        this.width    = parseInt(this.li.width()) + parseInt(this.li.css('margin-right'));
        this.init();
      };
  _tabBar.prototype = {
    init: function(){
      var _this = this;
      if(_this.len > _this.num){
        _this.cloneElm();
        if(_this.ul.find('li').length > _this.len){
          _this.moveEvent(_this.nextBtn, 1);
          _this.moveEvent(_this.prevBtn, -1);
        }else{
          return;
        }
      }else{
        _this.prevBtn.css({'display':'none'});
        _this.nextBtn.css({'display':'none'});
        _this.ul.css({width: _this.len * _this.width});
      }
    },
    cloneElm: function() {
      var _this = this, $cloneLi = _this.ul.clone().html();
      _this.ul.append($cloneLi).prepend($cloneLi).css({
        left: -_this.len * _this.width,
        width: _this.len * 3 * _this.width
      });
    },
    moveEvent: function (elm, direct) {
      var _this = this, _target = direct * _this.len;
      elm.off().on('click', function () {
        if(direct < 0){
          _this.nowIndex --;
          if(_this.nowIndex < _target){
            _this.goBack(direct);
          }
        }else{
          _this.nowIndex ++;
          if(_this.nowIndex > _target){
            _this.goBack(direct);
          }
        }
        _this.showPics(_this.nowIndex);
      });
    },
    goBack: function(direct) {
      var _this = this;
      _this.nowIndex = direct;
      _this.ul.css({left: -_this.len * _this.width});
    },
    showPics: function(index) {
      var _this = this, _left = (-index-_this.len) * _this.width;
      _this.ul.stop(true, false).animate({left: _left}, 300, function () {
        setTimeout(function () {
          _this.flag = true;
        }, 200);
      });
    }
  }
})(jQuery);
