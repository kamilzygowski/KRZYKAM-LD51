"use strict";(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[179],{494:(e,t,n)=>{var r=new Image;r.src="https://i.postimg.cc/dQ4q9QH1/top.png";var a=new Image;a.src="https://i.postimg.cc/tJSpRDZP/topLeft.png";var i=new Image;i.src="https://i.postimg.cc/9fZmPGK5/topright.png";var o=new Image;o.src="https://i.postimg.cc/j2dRrB5t/right.png";var c=new Image;c.src="https://i.postimg.cc/tTGg8rW4/bottom-Right.png";var s=new Image;s.src="https://i.postimg.cc/DwD0Pfzs/bottom.png";var m=new Image;m.src="https://i.postimg.cc/90WQQrx3/bottom-Left.png";var l=new Image;l.src="https://i.postimg.cc/Y97pdvB4/left.png";var g=new Image;g.src="https://i.postimg.cc/63VQKdfL/center.png";var h=new Image;h.src="https://i.postimg.cc/Kz5mwmm0/water.png";var p=new Image;p.src="https://i.postimg.cc/KjJvkxV1/d-Bottom-Left.png";var d=new Image;d.src="https://i.postimg.cc/fTqRMWmF/d-Bottom-Right.png";var u=new Image;u.src="https://i.postimg.cc/439dLCK0/dBottom1.png";var w=new Image;w.src="https://i.postimg.cc/qMv7f6hy/dBottom2.png";var v=new Image;v.src="https://i.postimg.cc/GmZ3sMMx/dTopLeft.png";var y=new Image;y.src="https://i.postimg.cc/jSWd2Vhj/d-Top-Right.png";var f=new Image;f.src="https://i.postimg.cc/4453FQdX/dTop1.png";var I=new Image;I.src="https://i.postimg.cc/5yFjPH6z/hp-2.png";var b=new Image;b.src="https://i.postimg.cc/LsWMXx8t/player.png";var S=new Image;S.src="https://i.postimg.cc/432h3RcW/player2.png";var x=new Image;x.src="https://i.postimg.cc/xdpBLnNB/playerL.png";var k=new Image;k.src="https://i.postimg.cc/T25vqL90/player2L.png";var q=new Image;q.src="https://i.postimg.cc/W1qxPQDv/ston2.png";var E=new Image;E.src="https://i.postimg.cc/V6mhnvKf/stone1.png";var R=new Image;R.src="https://i.postimg.cc/YScZ2bgm/stone3.png";var L=new Image;L.src="https://i.postimg.cc/pdD7mzYc/stone4.png";var C=new Image;C.src="https://i.postimg.cc/jj7WPdLF/rston1.png";var B=new Image;B.src="https://i.postimg.cc/T3SLKWYb/rstone2.png";var T=new Image;T.src="https://i.postimg.cc/6pT46hww/rstone3.png";var F=new Image;F.src="https://i.postimg.cc/rmdv8sFQ/enemy1.png";var M=new Image;M.src="https://i.postimg.cc/VLzmFsHV/enemy2.png";var P=new Image;P.src="https://i.postimg.cc/SsGH479B/redBar.png";var K=new Image;K.src="https://i.postimg.cc/59G4HbT6/meta.png";var D=new Image;D.src="https://i.postimg.cc/Zn23p04N/coiny1.png";var A=new Image;A.src="https://i.postimg.cc/rpH4RQcm/coiny2.png";var W=function(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)<e.width/2+t.width/2};function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n,r,a,i,o,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.width=r,this.height=a,this.speed=i,this.hp=o,this.img=c,this.underColor="#F8EFBA",this.deathReason="your mistake"}var t,n;return t=e,n=[{key:"drawPlayer",value:function(e){e.fillStyle=this.underColor,e.fillRect(this.x,this.y,32,32),e.drawImage(this.img,this.x,this.y-6,this.width+8,this.height+8)}},{key:"move",value:function(e){"north"===e&&(this.y-=this.speed),"west"===e&&(this.x-=this.speed),"south"===e&&(this.y+=this.speed),"east"===e&&(this.x+=this.speed)}}],n&&j(t.prototype,n),e}();function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=function(){function e(t,n,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.width=r,this.height=a}var t,n;return t=e,n=[{key:"drawBar",value:function(e,t){e.beginPath(),e.fillStyle="darkred",e.rect(this.x,this.y,this.width,this.height),e.fill(),e.drawImage(P,this.x,this.y,this.width,this.height)}},{key:"move",value:function(e){this.y+=e}}],n&&G(t.prototype,n),e}();function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.img=r,this.width=32,this.height=32,this.rng=Math.floor(2*Math.random()),this.movePattern=0==this.rng?[33,33,33,-33,-33,-33]:[-33,-33,-33,33,33,33],this.moveIndex=0}var t,n;return t=e,n=[{key:"drawEnemy",value:function(e){e.drawImage(this.img,this.x,this.y,this.width,this.height)}},{key:"moveEnemy",value:function(){this.y+=this.movePattern[this.moveIndex],this.moveIndex>=5?this.moveIndex=0:this.moveIndex++}}],n&&Y(t.prototype,n),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.img=r,this.width=32,this.height=32}var t,n;return t=e,n=[{key:"drawCoin",value:function(e){e.drawImage(this.img,this.x,this.y,this.width,this.height)}}],n&&H(t.prototype,n),e}(),Z=document.createElement("canvas"),V=document.createElement("canvas"),X=[[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,3,3,3,3,97,3,3,3,3,3,3,3,99,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,99,3,3,3,3,3,3,3,101,3,3,3,3,3,3,3,3,3,3,3,3,3,102,3,3,3,3,3,3,3,100,3,3,3,3,3,3,101,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,96,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,101,3,3,3,3,3,3,3,3,3,101,3,3,3,102,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,3,3,97,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,99,3,3,3,3,3,3,102,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,101,3,3,3,3,3,3,101,3,3,3,3,3,100,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,102,3,3,3,3,3,3,3,102,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,99,3,3,3,3,3,99,3,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,99,3,3,3,3,3,3,3,3,98,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,101,3,3,3,3,101,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,100,3,3,3,3,3,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,96,3,3,3,3,3,3,3,3,3,97,3,3,3,3,3,3,3,3,3,96,3,3,97,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,97,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,102,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,101,3,3,3,102,3,3,3,3,3,3,3,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,99,3,3,3,3,3,3,3,97,3,3,3,3,3,3,3,3,3,97,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,99,3,3,3,97,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,97,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,100,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,98,3,3,97,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,99,3,3,3,3,3,3,3,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,3,3,3,3,3,97,3,3,3,3,3,3,3,3,3,3,3,3,98,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,98,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,102,3,3,3,3,102,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,99,3,3,101,3,3,3,3,3,3,3,999,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,99,3,3,3,3,3,3,3,3,3,3,3,3,3,3,97,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,98,3,3,3,3,3,3,3,3,3,3,3,3,101,3,3,3,3,3,3,3,3,3,3,3,3,3,3,98,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,999,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,99,3,3,3,3,3,99,3,3,3,3,3,3,97,3,3,3,3,3,3,3,3,3,3,99,3,3,3,3,3,3,3,99,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,99,3,3,3,3,3,3,3,3,3,102,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,999,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,100,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,102,3,3,3,3,99,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,100,3,3,3,3,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,99,3,3,3,3,3,3,3,3,3,101,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,99,3,3,3,3,3,3,3,98,3,3,3,3,3,3,3,3,3,3,3,3,99,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,100,3,3,3,3,3,3,102,3,3,3,3,3,3,3,3,3,96,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,96,3,3,3,3,3,3,3,3,3,3,98,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,100,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,101,3,3,3,3,102,3,3,3,3,3,3,3,3,3,3,102,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,3,3,96,3,3,3,3,99,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,101,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,100,3,3,3,3,3,3,3,99,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,97,3,3,3,3,3,3,3,3,3,3,3,3,3,3,100,97,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,99,3,3,3,98,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,100,3,3,3,3,3,3,101,3,3,3,3,3,3,99,3,3,3,3,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,98,3,3,99,3,3,3,3,3,3,3,3,3,98,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,96,3,3,3,98,3,3,3,99,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,102,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,101,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,3,3,3,3,99,3,3,3,3,3,98,97,3,3,3,3,3,3,3,3,3,3,3,3,3,99,3,3,3,3,3,3,3,3,3,3,98,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,97,3,3,3,3,3,96,3,3,3,3,3,3,3,3,97,3,3,3,3,101,3,3,3,3,3,3,3,3,3,3,3,3,3,3,101,3,3,3,3,3,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,3,98,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,97,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,98,3,3,3,3,3,3,97,3,3,96,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,100,3,3,3,3,3,102,3,3,3,3,3,3,3,3,3,3,3,3,3,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,14,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,14,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,12,12,12,12,13,12,12,12,12,12,12,12,13,12,12,12,13,12,12,12,12,12,12,12,12,12,12,12,13,12,12,13,12,12,12,12,13,12,12,12,12,12,12,12,12,13,12,12,12,13,12,12,12,12,12,12,12,12,13,12,12,12,12,12,12,12,12,13,12,12,13,12,12,12,12,13,12,12,12,13,12,12,13,12,12,12,12,13,12,12,12,13,12,12,13,12,12,12,12,13,12,12,12,13,12,12,13,12,12,12,12,13,12,12,11,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]],J=0,_=[[7.5,7.5,7.5,7.5,7.5,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,4,4,4,4,4,4,4],[6,3,5,2,2,2,2,2,9,7,3,6,2,2,2,2,2,8,5,8,3,3,2.1,3,6,3,3,2.1,2.1,6,3,3,2.1,3,7,4,4,4,4,4,4,4,4,3],[6.5,6.5,6.5,6.2,6.5,6.5,6.2,6.2,6.2,6.2,6.2,6.2,6.2,6.2,6.2,6.2,6.2],[4.5,4.5,4.5,4.5,4,5,3.5,2.5,2.5,2.5,4.5,4.5,4.5,6,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,5,5,4,4.5,4,4.5,4,4.5],[6.5,6.5,6.5,6.5,6.5,6.5,6.5,2.5,2.5,3,20,2.5,3,2.5,14,2.5,12,2.5,3,13,2.5,3.2,3,3],[2,6,10,2,8,10,2,7.5,10,5,5,5,5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4,4,4,4,3,2,2,2,2,3,4,3.5,2],[2.5,6,2,2,6,2.5,6,2,2,6,2.5,6.2,2,2,10,2.5,2.5,2.5,3,2,3,2,2.5,6,2,2,6,2.5,6,2,2,6,2.5,6.2,2,2,4,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5],[4,2,3,4.5,2,3,3,5,3,6,3,9,3,4,2,3,3,7,3,7,3,7,3,5,3,4,3]],U=[new N(594,99,D),new N(1188,594,D),new N(1782,99,D),new N(2376,528,D),new N(3003,165,D),new N(3960,330,D),new N(4785,627,D)],$=[new z(1122,363,F),new z(1551,462,F),new z(891,165,F),new z(1782,198,F),new z(1584,297,F),new z(2079,165,F),new z(2112,561,F),new z(2376,429,F),new z(2508,297,F),new z(2673,165,F),new z(2706,528,F),new z(2871,396,F),new z(3003,165,F),new z(3069,462,F),new z(3201,264,F),new z(3366,165,F),new z(3465,429,F),new z(3663,165,F),new z(3729,363,F),new z(3927,165,F),new z(4092,528,F),new z(4158,462,F)],ee=new O(792,363,28,28,33,3,b);Z.width=1205,Z.height=726;var te=Z.getContext("2d");te.fillStyle="#121212",te.fillRect(0,0,Z.width,Z.height);var ne,re=0;V.width=200,V.height=700,V.style.marginLeft="15px",V.style.marginBottom="15px";var ae=V.getContext("2d");ae.fillStyle="#121215",ae.fillRect(-300,0,V.width,V.height);var ie=new Image;ie.src="https://i.postimg.cc/8kvg1PTX/bar.png";var oe,ce,se=new Image;se.src="https://i.postimg.cc/sDYgn48c/greenbar.png",ae.drawImage(ie,0,0,200,700),ae.drawImage(se,15,700,170,50);var me=!1;function le(){if(!me){te.save(),te.translate(-ee.x,-Z.height/2),te.translate(Z.width/2,Z.height/2),te.clearRect(0,0,6*Z.width,Z.height),function(e,t,n,I){e.forEach((function(e,b){e.forEach((function(e,S){0===e?t.drawImage(a,(n+1)*S,(n+1)*b,n,n):1===e?t.drawImage(r,(n+1)*S,(n+1)*b,n,n):2===e?t.drawImage(i,(n+1)*S,(n+1)*b,n,n):3===e?t.drawImage(g,(n+1)*S,(n+1)*b,n,n):4===e?t.drawImage(s,(n+1)*S,(n+1)*b,n,n):5===e?t.drawImage(m,(n+1)*S,(n+1)*b,n,n):6===e?t.drawImage(c,(n+1)*S,(n+1)*b,n,n):7===e?t.drawImage(l,(n+1)*S,(n+1)*b,n,n):8===e?t.drawImage(o,(n+1)*S,(n+1)*b,n,n):9===e?t.drawImage(h,(n+1)*S,(n+1)*b,n,n):10===e?t.drawImage(p,(n+1)*S,(n+1)*b,n,n):11===e?t.drawImage(d,(n+1)*S,(n+1)*b,n,n):12===e?t.drawImage(u,(n+1)*S,(n+1)*b,n,n):13===e?t.drawImage(w,(n+1)*S,(n+1)*b,n,n):14===e?t.drawImage(v,(n+1)*S,(n+1)*b,n,n):15===e?t.drawImage(y,(n+1)*S,(n+1)*b,n,n):16===e?t.drawImage(f,(n+1)*S,(n+1)*b,n,n):96===e?t.drawImage(q,(n+1)*S,(n+1)*b,n,n):97===e?t.drawImage(E,(n+1)*S,(n+1)*b,n,n):98===e?t.drawImage(R,(n+1)*S,(n+1)*b,n,n):99===e?t.drawImage(L,(n+1)*S,(n+1)*b,n,n):100===e?t.drawImage(C,(n+1)*S,(n+1)*b,n,n):101===e?t.drawImage(B,(n+1)*S,(n+1)*b,n,n):102===e?t.drawImage(T,(n+1)*S,(n+1)*b,n,n):999===e&&(t.drawImage(K,(n+1)*S,(n+1)*b,n,n),W(I,{x:(n+1)*S,y:(n+1)*b,width:n,height:n})&&(clearInterval(ge),clearInterval(ce),clearInterval(oe),document.querySelector(".wonScreen").style.display="block"))}))}))}(X,te,32,ee);for(var e=1;e<=ee.hp;e++)te.drawImage(I,ee.x+Z.width/2-(75+55*e),25,50,50);ee.drawPlayer(te),ee.hp<=0&&(ee.deathReason="Watch the rythm",Ce()),U.forEach((function(e,t){e.drawCoin(te)})),$.forEach((function(e,t){e.drawEnemy(te),W(e,ee)&&(ee.deathReason="Killed by Evil Doggy",Ce())})),te.fillStyle="#fffa65",te.font="50px Georgia",te.fillText("".concat(J),ee.x+Z.width/2-555,60),te.restore()}}setTimeout((function(){me=!0}),500);var ge=setInterval(le,100),he=-1,pe=500,de=[],ue=0;function we(){ae.save(),null==(pe=_[ue][he+=1])||Ee?Ee&&(ue=Ie,he=-1,pe=500,de=[]):(pe*=100,de.push(new Q(15,0,170,50))),clearInterval(oe),oe=setInterval(we,pe),ae.restore()}function ve(){ae.save(),ae.fillStyle="#121212",ae.fillRect(0,0,V.width,V.height),ae.drawImage(ie,0,0,200,700),ae.translate(0,-100),de.forEach((function(e,t){if(e.y>800)return re=0,de.splice(t,1),void(ee.hp-=1);e.drawBar(ae,V.height),e.move(4)})),ae.drawImage(se,15,700,170,50),re>0&&(ae.fillStyle="#fffa65",ae.font="small-caps bold 26px inter",ae.fontWeight="bold",ae.fillText("Combo x ".concat(re),30,777.5)),ae.restore()}function ye(e,t){return 9===X[e][t]||15===X[e][t]||14===X[e][t]||16===X[e][t]||96===X[e][t]||97===X[e][t]||98===X[e][t]||99===X[e][t]||100===X[e][t]||101===X[e][t]||102===X[e][t]}function fe(){if(0!=de.length){var e=de[0].y;e<710&&e>690?("good"===ne&&re++,J+=100,document.querySelector("#perfect").volume=.05,document.querySelector("#perfect").play(),ne="good"):e<730&&e>670?("good"===ne&&re++,J+=75,document.querySelector("#perfect").volume=.05,document.querySelector("#perfect").play(),ne="good"):e<750&&e>650?("good"===ne&&re++,J+=50,document.querySelector("#perfect").volume=.05,document.querySelector("#perfect").play(),ne="good"):(re=0,ee.hp-=1,document.querySelector("#bad").volume=.25,document.querySelector("#bad").play(),ne="bad"),de.splice(0,1)}}document.addEventListener("keydown",(function(e){if(!me){var t=Math.ceil((ee.x-16.5)/33),n=Math.ceil((ee.y-16.5)/33);if(U.forEach((function(e,r){var a=Math.ceil((e.x-16.5)/33),i=Math.ceil((e.y-16.5)/33);a==t&&i==n&&(document.querySelector("#coin").volume=.25,document.querySelector("#coin").play(),J+=5e3,U.splice(r,1))})),"ArrowUp"===e.key||"w"===e.key){if(fe(),ye(n-1,t))return;ee.move("north")}if("ArrowDown"===e.key||"s"===e.key){if(fe(),ye(n+1,t))return;ee.move("south")}if("ArrowLeft"===e.key||"a"===e.key){if(ee.isFacingRight=!1,fe(),ye(n,t-1))return;ee.move("west")}if("ArrowRight"===e.key||"d"===e.key){if(fe(),ye(n,t+1))return;ee.isFacingRight=!0,ee.move("east")}ee.isFacingRight?ee.img===b?ee.img=S:ee.img=b:ee.isFacingRight||(ee.img===x?ee.img=k:ee.img=x),"#F8EFBA"===ee.underColor?ee.underColor="#5f27cd":ee.underColor="#F8EFBA",$.forEach((function(e,t){e.img===F?e.img=M:e.img=F,e.moveEnemy()})),U.forEach((function(e,t){e.img===D?e.img=A:e.img=D}))}}));var Ie,be=["#music1","#music2","#music3","#music4","#music5","#music6","#music7","#music8"],Se=["Imagine Dragons - Enemy","Eine Kleine Nachtmusik - Mozart","Hypnotize - Biggie","Forgot about dre - Eminem","Do I Wanna Know - Arctic Monkeys","The Offspring - You're Gonna Go Far, Kid","Caravan Palace - Lone Digger","Omori OST - By Your Side."],xe=document.querySelector("#vinyl"),ke=[],qe=document.querySelector(".startButton");qe.addEventListener("click",(function(){document.querySelector(".vinylRewind").style.display="block",me=!0,xe.volume=.4,xe.play(),document.querySelector("#vinyl").onended=function(){Re(),me=!1},document.querySelector(".notStartedGame").style.display="none",qe.style.display="none"}));var Ee=!1;function Re(){Le||(document.querySelector(".vinylRewind").style.display="none",Ie=Math.floor(Math.random()*(be.length-1)),ke.includes(Ie)?Re():(document.querySelector(".title").textContent="Ludum Dare 51 - KRZYKAM | Currently playing: ".concat(Se[Ie]),ue=Ie,Ee=!1,clearInterval(ce),clearInterval(oe),oe=setInterval(we,pe),ce=setInterval(ve,12.5),ke.push(Ie),ke.length==be.length-1&&(ke=[]),console.log(Ie),document.querySelector(be[Ie]).volume=.2,document.querySelector(be[Ie]).play(),document.querySelector(be[Ie]).onended=function(){me=!0,document.querySelector(".vinylRewind").style.display="block",Ee=!0,Le||(xe.volume=.6,xe.play(),xe.onended=function(){Re(),me=!1})}))}var Le=!1;function Ce(){Le=!0,document.querySelector("#hit").volume=.65,document.querySelector("#hit").play(),clearInterval(ge),clearInterval(ce),clearInterval(oe),document.querySelector(".restart").classList.add("restartAnim"),document.querySelector(".gameOver").style.display="block",document.querySelector(".gameOverScoreSpan").textContent="".concat(J),document.querySelector(".gameOverDeathCauseSpan").textContent="".concat(ee.deathReason),console.log("Game Over Screen")}var Be=n(365);(new Image).src=Be;var Te=document.createElement("h1");Te.className="title",Te.textContent="Ludum Dare 51 - KRZYKAM";var Fe=document.createElement("div");Fe.className="instructionsButton";var Me=document.createElement("div");Me.className="restart",Me.style.animation="smallBump 0.75s infinite ease-in-out;",Fe.addEventListener("click",(function(){"block"===Pe.style.display?Pe.style.display="none":Pe.style.display="block"}));var Pe=document.querySelector(".instructions");Pe.addEventListener("click",(function(e){"instructions"===e.target.className&&(Pe.style.display="none")})),Me.addEventListener("click",(function(){Me.classList.remove("restartAnim"),ge=setInterval(le,100),oe=setInterval(we,pe),ce=setInterval(ve,12.5),window.location.reload()})),document.querySelector("#root").append(Te,Z,V,Fe,Me)},365:(e,t,n)=>{e.exports=n.p+"2ab4fc5b6691be58b815.png"}},e=>{e(e.s=494)}]);