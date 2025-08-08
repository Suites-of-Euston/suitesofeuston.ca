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
  window.myWidgetParam.push( {id: 15,cityid: '5920288',appid: process.env.API_KEY_WEATHER_0000,units: 'metric',containerid: 'weather',  });  
  setup();
}
