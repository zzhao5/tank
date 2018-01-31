window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
!(function(){

    function ahTank(config){
        config = $.extend({
            box:"#tankBox",
            moveSpeed:2, //运动速度
            shootSpeed:10, //炮弹速度
            layout: [],
            name:[]
        }, config);
        this.$box = $(config.box);
        this.$layout = config.layout;
        this.mSpeed = config.moveSpeed;
        this.sSpeed = config.shootSpeed;
        this.name = config.name;


        this.tankNum = this.$layout.length;
        this.moveSpeed = new Array(this.tankNum);
        this.shootSpeed = new Array(this.tankNum);
        this.init();
    }
    ahTank.prototype = {
        init: function(){
            var _this = this;
            _this.setFn();
            log('游戏开始，祝好运~');
        },
        setFn:function(){
            var _this = this;
            function setTank(){
                var fn = [
                    //各坦克参数
                    function(){


                        log('坦克1设置完成！')
                    },
                    function(){


                        log('坦克2设置完成！')
                    }
                ];
                for(var i=0; i<_this.tankNum;i++){
                    fn[i]();
                }
                //requestAnimationFrame(setTank);
            }
            setTank();
        },
        over:function(name){
            log(name+'被击中，游戏结束。')
        }
    };
    window.ahTank = ahTank;
    //控制台输出
    var $console = document.getElementById('console');
    function log(t){
        $console.innerHTML = '<p>'+ t +'</p>' + $console.innerHTML;
    }
})();