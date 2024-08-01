mixitup('#mix-wrapper', {
    load: {
        sort: 'order:asc'
    },
      animation: {
      effects: 'fade rotateY(-60deg)',
      duration: 200
    },
    classNames: {
      block: 'product-cart',
      elementFilter: 'filter-btn',
      elementSort: 'sort-btn'
    },
    selectors: {
      target: '.mix-target'
    }
  });

        var d = new Date();
            if (d.getHours() >= 0 && d.getHours() <= 19) {
                $(".hours").show();
                $(".message").hide();
            }
            else {
                $(".hours").hide();
                $(".message").show();
            }

            (function () {
                var start = new Date;
                start.setHours(10, 19, 0); // 11am

                function pad(num) {
                    return ("0" + parseInt(num)).substr(-2);
                }

                function tick() {
                    var now = new Date;
                    if (now > start) { // too late, go to tomorrow
                        start.setDate(start.getDate() + 1);
                    }
                    var remain = ((start - now) / 1000);
                    var hh = pad((remain / 60 / 60) % 60);
                    var mm = pad((remain / 60) % 60);
                    var ss = pad(remain % 60);
                    document.getElementById('time').innerHTML =
                      hh+  ":" +  mm + " : " + ss;
                    setTimeout(tick, 1000);
                }

                document.addEventListener('DOMContentLoaded', tick);
            })();

            function forms2(){
              alert("You are signed up. Congratulations")
          }