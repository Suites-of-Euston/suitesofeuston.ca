function weather()
{
  function setup()
  {
    var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
  }

  alert(process.env.FOO);

  window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
  window.myWidgetParam.push( {id: 15,cityid: '5920288',appid: '2b46ac37788852681158f7d632d4c0af',units: 'metric',containerid: 'weather',  });  
  setup();
}
