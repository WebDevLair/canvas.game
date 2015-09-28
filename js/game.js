window.onload = init;

var map;
var ctxMap;

var drawBtn;
var clearBtn;


function init()
{ 
      map = document.getElementById("map");
      ctxMap = map.getContext("2d");

      drawBtn = document.getElementById("drawBtn");
      clearBtn = document.getElementById("clearBtn");

      drawBtn.addEventListener("click", drawRect, false);
      clearBtn.addEventListener("click", clearRect, false);      
}

function drawRect()
{
      ctxMap.fillStyle = "#3d3d3d";
      ctxMap.fillRect(10, 10, 100, 100);
}

function clearRect()
{
      ctxMap.clearRect(0, 0, 800, 500);
}