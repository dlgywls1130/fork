

$(document).ready(function(){
 
  // 모바일메뉴

  $(".material-symbols-outlined.menu").click(function(){
    $(".mobile_header > div").animate({
      'left' : '0'
    })
  });
  $(".close, .mobile_header a").click(function(){
    $(".mobile_header > div").animate({
      'left' : '-100%'
    })
  })


})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
