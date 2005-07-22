// Title: COOLjsTree
// URL: http://javascript.cooldev.com/scripts/cooltree/
// Version: 2.6.3
// Last Modify: 3 Mar 2005
// Author: Alex Kunin <alx@cooldev.com>
// Notes: Registration needed to use this script on your web site.
// Copyright (c) 2001-2005 by CoolDev.Com
// Copyright (c) 2001-2005 by Sergey Nosenko

// Options: STANDARD, COMPRESSED, WATERMARK

function COOLjsTree(_a,_e,_3){this.name=this._a=_a;this.bw=new _1j();var _9={};_9.left=_3[0];_9.top=_3[1];_9._I={nb:_3[2],nf:_3[5]};_9.clB=_3[3][0];_9.exB=_3[3][1];_9.iE=_3[3][2];_9._10=_3[4][0];_9._13=_3[4][1];_9.Ew=_3[4][2];_9.clF=_3[6][0];_9.exF=_3[6][1];_9.iF=_3[6][2];_9._18=_3[7][0];_9._11=_3[7][1];_9.ident=_3[8];_9._12=_3[10];_9._2a=_3[11];_9.so=_3[12];_9.pg=_3[13][0];_9.sp=_3[13][1];if(_9._I.nb)_1l(_3[3]);if(_9._I.nf)_1l(_3[6]);this._3=_9;if(!this.bw._E)this._w=new _1s(_3[9],this);if(_d(window.CTrees))window.CTrees=[];window.CTrees[_a]=this;this.jsPath="window.CTrees['"+_a+"']";this.Nodes=this._e=[];this._21=-1;this._1V=0;this._1e={};this._h=this._N(([{id:null},'',null,null,{format:{}}]).concat(_e));this._z=this.bw._L?'':'px';this._1b=this.bw.dom&&!this.bw._L;this._1m=document.body&&document.body.dir=='rtl';this._x=-1;this.init();this._2g=true;this.draw()};$=COOLjsTree.prototype;$._U={};$._G=function(_1o,_b,_17){return _V('on'+_1o,'return '+this.jsPath+'.'+_b+'_on'+_1o+'('+_17+')')};$._1i=function(_b,_17){if(_d(this._U[_b])){this._U[_b]={};for(var _G in this)if(_G.match(new RegExp('^'+_b+'_on(.+)$')))this._U[_b][RegExp.$1]=true};var _8='';for(var _G in this._U[_b])_8+=this._G(_G,_b,_17);return _8};$.getAdditionalColumns=function(_){return''};$.getRoot=$._16=function(){if(!this._v){this._h._g=this._v=new _1a(this._h,this,null);this._v._A(true)};return this._v};$._1n=function(_4){var _k=this._1c('n',_4,this._h._2);if(!_k)return null;var _5=this._h,i=0;for(var i=0;i<_k.length-1;i++)_5=_5._2[_k[i]];return[_5,_k[i]]};$._R=function(_){if(this._v&&_._4==this._v._4)this._v=null;if(_._g){_._g._1g();_._1f=null;_._g=null};for(var i in _._2)if(_._2[i]._g)this._R(_._2[i])};$._2t=function(_1p,_o,_6){var _5;if(_1p==this._h._4)_5=this._h;else{var _u=this._1n(_1p);if(_u)_5=_u[0]._2[_u[1]]};if(_5){this._R(_5);for(var i in _6)_6[i]=this._N(_6[i]);_o=Math.max(0,Math.min(_o,_5._2.length));if(_o==_5._2.length){_5._2=_5._2.concat(_6)}else{var _2=_5._2;_5._2=[];for(var i in _2){if(i==_o)_5._2=_5._2.concat(_6);_5._2[_5._2.length]=_2[i]}};return _o}else return null};$._2k=function(_4,_6,_2h,_2l,_2d){var _u=this._1n(_4);if(_u){var _5=_u[0],_2=_5._2,_4=_u[1];this._R(_5);var _6=this._N(_6);if(_2h)_6[0]=_5._2[_4][0];if(_2l)_6[4]=_5._2[_4][4];if(_2d)_6._2=_5._2[_4]._2;_5._2[_4]=_6}};$._2B=function(_5,_4){if(!_d(_5._2[_4])){var _2=_5._2;this._R(_5);_5._2=[];for(var i in _2)if(i!=_4)_5._2[_5._2.length]=_2[i]}};$.dump=function(_,_b){var _8='';if(!_){_=this._h;_b=''};_8=_b+"{"+_._4+"} - [";if(_[0].id!==null)_8+='{id:'+_[0].id+'}, ';_8+='"'+_[1]+'", ';_8+=(_[2]===null?'null':'"'+_[2]+'"')+', ';_8+=_[3]===null?'null':'"'+_[3]+'"';if(_._2.length){_8+=",\n";for(var i in _._2)_8+=this.dump(_._2[i],_b+"\t");_8+=_b+"],\n"}else _8+="],\n";return _8};$.getSelectedNode=function(){return this.nodeByIndex(this._1r)};$._2q=function(_){return this._1r===_._4};$._1k=function(_J){for(var i in _J){this._14[_J[i].id]=_J[i];if(_J[i].layers)this._1k(_J[i].layers)}};$._1q=function(_j){if(this.bw.ns4){if(!this._14){this._14={};this._1k(document.layers)};return this._14[_j]}else return(document.all&&document.all[_j])||document.getElementById(_j)};$.moveTo=function(x,y){this._w.top=y;this._w.left=y;this._w.moveTo(x,y);this._3.top=y;this._3.left=x;this.draw()};$.ensureVisible=function(_4,_1X){var _=this.nodeByIndex(_4);var _q=false;while(_){_=_._1f;if(_._W())break;if(!_._m()){this.expandNode(_._4,1);_q=true}};if(_q&&!_1X)this.draw()};$._1c=function(_K,_7,_e){for(var i in _e){if(typeof(_7)!='object'?_e[i][_K]==_7:(''+_e[i][_K]).match(_7))return[i];var _1x=this._1c(_K,_7,_e[i]._2);if(_1x)return[i].concat(_1x)};return null};$._T=function(_K,_7){return this._16()._1T(this._1c(_K,_7,this._h._2))};$.nbn=$.nodeByName=function(_7){return this._T('c',_7)};$.nodeByID=function(_7){return this._T('i',_7)};$.nodeByURL=function(_7){return this._T('u',_7)};$.nodeByIndex=function(_7){if(!this._e[_7])this._e[_7]=this._T('n',_7);return this._e[_7]};$.nodeByXY=function(_X,_Y){for(var i in this._e)if(this._e[i])with(this._e[i])if(visible&&_n<=_X&&_f<=_Y&&_n+w>_X&&_f+h>_Y)return this._e[i];return null};$._q=function(_f){if(!this._1S)this._1S=window.setTimeout(this.jsPath+'.draw()',1);if(typeof(_f)=='number')this._x=Math.min(_f,this._x);else this._x=-1};$._1g=function(_){if(this._1t)_._F();else{this._1e[_._4]=true;this._q()}};$._F=function(){if(this._1b)for(var _4 in this._1e){var _=this.nodeByIndex(_4);if(_)_._F()};this._1e={}};$.draw=function(){if(this.bw._E||!this._2g)return;this._F();this._1t=true;this._t=0;this._p=0;with(this._16()){draw(true);if(this._1m)draw(true)};this._w._20(this._p,this._t);this._1S=null;this._x=10000000;if(this.ondraw)this.ondraw(this);this._1t=false};$.expandNode=function(_4,_2v,_1Q){if(!this.bw._E){var _=this.nodeByIndex(_4);if(_1Q)this.selectNode(_4);if(_&&_._O()){var _2m=!_._m();if(this._3.so){this.collapseAll();this.ensureVisible(_.index,true)};_._A(_2m);this._q(_._f)}}};$._1Q=$.selectNode=function(_4){this._1r=_4;this._q()};$._2p=function(_1R,_5,_1P){var _=this._e[_1R._4]=new _1a(_1R,this,_5);_._1P=_1P;_._2j();return _};$._1U=function(_l,_){for(var i in _._2){this._1U(_l,_._2[i]);if(_._2[i]._2.length)if(_._2[i]._g)_._2[i]._g._A(_l);else _._2[i][4].format.expanded=_l}};$._1u=function(_l){this._1U(_l,this._h);this._q()};$.collapseAll=function(){this._1u(false)};$.expandAll=function(){this._1u(true)};$._N=function(_){if(_d(_[_.length-1]))_=_.slice(0,_.length-1);if(_d(_[0].id))_=([{id:null}]).concat(_);if(_d(_[4])||_d(_[4].format))_=_.slice(0,4).concat([{format:{}}]).concat(_.slice(4));var _4=this._21++;var _2=_.slice(5);_=_.slice(0,5);_._2=[];for(var i in _2)_._2[i]=this._N(_2[i]);_.i=_[0].id;_.c=_[1];_.u=_[2];_.t=_[3];_.f=_[4].format;_.n=_._4=_4;_._g=null;return _};$.init=function(){var s=this._16()._1d(!this._1b);if(!this.bw._E)s=this._w._2i(s);if(this.bw.ns4)s='<div id="'+this._a+'dummytreediv" style="position:absolute;"></div>'+s;document.write(s)};$._2u=function(_a){return document.cookie.match(new RegExp('(\\W|^)'+this._a+_a+'=([^;]+)'))?RegExp.$2:null};$._2s=function(_a,_7){document.cookie=this._a+_a+'='+_7+'; path=/'};$._1A=function(_){var _8='';for(var i in _._2)if(_._2[i]._2.length)_8+=(_._2[i][4].format.expanded?1:0)+this._1A(_._2[i]);return _8};$._2w=function(){return this._1A(this._h)};$._1B=function(_,_l,_4){for(var i in _._2){if(_._2[i]._2.length){if(_._2[i]._g)_._2[i]._g._A(_l.charAt(_4)=='1');else _._2[i][4].format.expanded=_l.charAt(_4)=='1';_4=this._1B(_._2[i],_l,_4+1)}};return _4};$._2z=function(_l){this._1B(this._h,_l||'',0)};$.image_onclick=$.button_onclick=$.caption_onclick=function(_){this.expandNode(_.index,1,1);return true};$.button_onclick=function(_){this.expandNode(_.index);return true};$.image_onmouseover=$.button_onmouseover=$.caption_onmouseover=function(_){window.status=_.text;return true};$.image_onmouseout=$.button_onmouseout=$.caption_onmouseout=function(node){window.status=window.defaultStatus;return true};function _1a(_6,_1,_5){var _4=_6._4;this._6=_6;this._4=this.index=_4;this.jsPath=_1.jsPath+'.nodeByIndex('+_4+')';this.treeView=this._1=_1;this._1f=this.parentNode=_5;this.text=_6[1];this.url=_6[2];this.target=_6[3];this.nodeID=_6[0].id;this._3=_6[4].format;this._M=null;this._A(this._6[4].format.expanded);this.children=this._2=[];this._r=this.level=_5?_5._r+1:-1;this.visible=false;this._C={};this._1C=false;this._Q={}};$=_1a.prototype;$._W=function(){return this._1._h._4==this._4};$._m=function(){return this._6[4].format.expanded};$.id=function(){return this._j};$._Z=function(_1z,_B,_1y){this._1._2k(this._4,[_d(_1z)?this._2e():_1z,_d(_B)?this._2f():_B,_d(_1y)?this._2c():_1y],true,true,true);this._1._q()};$.getTree=function(){return this._1};$.getParent=function(){return this._1f};$.getId=function(){return this._6[0].id};$._2e=$.getCaption=function(){return this._6[1]};$._2f=$.getUrl=function(){return this._6[2]};$._2c=$.getTarget=function(){return this._6[3]};$.getFormat=function(){return this._6[4].format};$.setCaption=function(_7){this._Z(_7,this._y,this._y)};$.setUrl=function(_7){this._Z(this._y,_7,this._y)};$.setTarget=function(_7){this._Z(this._y,this._y,_7)};$.hasChildren=$._O=function(){return!!this._6._2.length};$._1v=function(){return this._O()||this._6[4].format.isFolder};$._1T=function(_k){if(_k)return _k.length?this._1h(_k[0])._1T(_k.slice(1)):this;return null};$._A=function(_7){this.expanded=this._6[4].format.expanded=!!_7;if(this._D){this._1w('nb',this._1O());this._1w('nf',this._1D())}};$._1O=function(){if(!this._1._3._I.nb||this._3.nobuttons)return null;if(!this._O())return null;if(this._3.buttons)return this._m()?this._3.buttons[1]:this._3.buttons[0];else return this._m()?this._1._3.exB:this._1._3.clB};$._1D=function(){if(!this._1._3._I.nf||this._3.nofolders)return null;if(this._3.folders)return this._1v()?(this._m()?this._3.folders[1]:this._3.folders[0]):this._3.folders[2];else return this._1v()?(this._m()?this._1._3.exF:this._1._3.clF):this._1._3.iF};$._1w=function(_c,_$){if(_$){var _15=(this._i().document||document).images[this._j+_c];if(this._1._3._I[_c]&&_15&&_15.src!=_$)this._Q[_c]={_2r:_15,_k:_$}}};$._2j=function(){this._10=_d(this._3.bsize)?this._1._3._10:this._3.bsize[0];this._13=_d(this._3.bsize)?this._1._3._13:this._3.bsize[1];this._18=_d(this._3.fsize)?this._1._3._18:this._3.fsize[0];this._11=_d(this._3.fsize)?this._1._3._11:this._3.fsize[1]};$._1d=function(_1E){var _8='';if(!this._W()){this._j='nt'+this._1._a+'_'+this._1._1V++;_8+=this._1.bw._E?this._1K():'<div'+this._1._1i('layer',this.jsPath)+' id="'+this._j+'d" style="position:absolute;visibility:hidden;z-index:'+(this.index+10)+';">'+this._1K()+'</div>'};if(_1E)for(var i=0;i<this._19();i++)_8+=this._1h(i)._1d(_1E);return _8};$._1L=function(_B,_b,_2n,_12,_2o){return'<a'+this._1._1i(_b,this.jsPath)+' href="'+(_B||'javascript:void(0)')+'"'+_V('target',_B&&this.target)+_V('id',_2o&&(this._j+'an'))+_V('class',_12)+'>'+_2n+'</a>'};$.__=function(_b,_c,_1M,_2b,_1Y,w,h,_2x){if(!w||!_1M)return'';var i='<img'+(_c?' name="'+this._j+_c+'" id="'+this._j+_c+'"':'')+' src="'+_1M+'" width="'+w+'" height="'+h+'" border="0"'+(this._1.bw.ns4?'':' style="display: block"')+' />';return'<td style="font-size: 1px;" width="'+w+'">'+(_2b?this._1L(_1Y&&this.url,_b,i):i)+'</td>'};$._1Z=function(){with(this._1._3)return _d(ident[this._r])?ident[0]*this._r:ident[this._r]};$._1K=function(){var s='<table cellpadding="'+this._1._3.pg+'" cellspacing="'+this._1._3.sp+'" border="0" class="cls'+this._1._a+'_w'+this._r+'"><tbody><tr>';s+=this.__('','',this._1._3.iE,false,false,this._1Z()+(this._O()?0:this._1._3.Ew),1);s+=this.__('button','nb',this._1O(),true,false,this._10,this._13,'');s+=this.__('image','nf',this._1D(),true,true,this._18,this._11,'');s+='<td nowrap="nowrap"><div id="'+this._j+'a" style="position:relative;">'+this._1L(this.url,'caption',this.text,this._1_(),true)+'</div></td>';return s+this._1.getAdditionalColumns(this).replace(/\{node\}/g,this.jsPath)+'</tr></tbody></table>'};$._1_=function(){var _8;with(this._1._3)_8=_2a[this._r]||_12;if(typeof(_8)!='string')_8=_8[this._r];return _8||''};$._1W=function(_n,_f){if(this._n!=_n||this._f!=_f){with(this._i())if(this._1.bw.ns4)moveTo(_n,_f);else{style.left=_n+this._1._z;style.top=_f+this._1._z};this._n=_n;this._f=_f}};$._1$=function(){if(!this._D){if(this._1._1b){var _S=this._S=document.createElement('div');_S.style.position='absolute';_S.innerHTML=this._1d();this._1._w._i().appendChild(_S)};this._D=true;this._C={}}};$._1g=function(){this._1._1g(this)};$._F=function(){if(this._D&&this._i()){with(this._i()){style.visibility='hidden';innerHTML=''};this._D=false;this._C={};this.w=this.h=0;this._n=this._f=0}};$._1N=function(){with(this._i())if(this._1.bw.ns4)visibility=this.visible?'show':'hide';else style.visibility=this.visible?'visible':'hidden';if(this.visible){for(var i in this._Q)with(this._Q[i])_2r.src=_k;this._Q={}}};$._1J=function(){this._1W(this._1._1m?(this._1.bw.gecko?this._1._p:0)-this.w:0,this._1._P)};$._1I=function(_27){if(!this.h||_27){if(this._1.bw.gecko)with(this._i().childNodes[0]){this.w=offsetWidth;this.h=offsetHeight}else if(this._1.bw.ns4)with(this._i()){this.w=clip.width;this.h=clip.height}else with(this._i()){this.w=offsetWidth||scrollWidth||style.pixelWidth;this.h=offsetHeight||scrollHeight||style.pixelHeight}}};$.draw=function(_s){var _28=this.visible!=_s;var _29=this._D;var _2y=this._1C;if(this._W()){this._1._P=0;this.visible=_s}else if(this._f<this._1._x){this._1._P=this._f+this.h;this._1._p=this._p;this._1._t=this._t}else if(this.visible||_s){this._1._x=-1;this.visible=_s;this._1N();if(this.visible){this._1J();this._1I();if(this._1C&&this._M!=this._m()&&_29){this._F();this.visible=_s;this._1I();this._1J();this._1N()};this._1._p=Math.max(this._1._3.left+this.w,this._1._p);this._1._P+=this.h;this._1._t=Math.max(this._1._P,this._1._t);this._p=this._1._p;this._t=this._1._t}};if((this.visible&&(this._M||this._m()))||(!this.visible&&_28&&this._M))this._26(this._m()&&this.visible);this._M=this._m()};$._26=function(_s){for(var i=0;i<this._19();i++)this._1h(i).draw(_s)};$._2A=function(){return this._1._2q(this)};$._19=function(){return this._6._2.length};$._1h=function(_o){with(this._6._2[_o]){if(!_g)_g=this._1._2p(this._6._2[_o],this,_o<this._19()-1);return _g}};$.getLayer=$._i=function(_c){if(!_c)_c='d';if(!this._C[_c]){this._1$();return this._C[_c]=this._1._1q(this._j+_c)};return this._C[_c]};function _1s(_25,_1){this._1=_1;this.left=_1._3.left;this.top=_1._3.top;this._a='cls'+_1._a+'_w';this.color=_25};$=_1s.prototype;$._i=function(_c){return this._1._1q(this._a+(_c||''))};$._20=function(_1F,_H){if(this._1.bw._L&&!this._22){this._22=true}else{with(this._i('c')){if(this._1.bw.ns4)moveTo(0,_H);else style.top=_H+this._1._z};_H+=7;with(this._i()){if(this._1.bw.ns4)resizeTo(_1F,_H);else{style.width=_1F+this._1._z;style.height=_H+this._1._z}}}};$._2i=function(_23){var p='relative',l=0,t=0,w=1,h=1;l=this.left;t=this.top;p='absolute';var _8='<div style="overflow:'+(this._1._L?'scroll':'hidden')+';'+(this.color==""?"":(this._1.bw.ns4?'layer-':'')+'background-color:'+this.color+";")+'position:'+p+';top:'+t+'px;left:'+l+'px;width:'+w+'px;height:'+h+'px;z-index:0;" id="'+this._a+'">'+(this._1.bw.ns4?'<img src="'+this._1._3.iE+'" width="'+w+'" height="'+h+'" />':'')+'<div id="'+this._a+'c" style="position:absolute;font:7px arial,helvetica;color:#d0d0d0;line-height:7px;">'+unescape(('434f4f4c6a7354726565').replace(/(..)/g,'%$1'))+'</div>';return _8+'</div>'+_23};function _d(_7){return typeof(_7)=='undefined'};_V=function(_a,_7){return _7?' '+_a+'="'+_7+'"':''};function _1j(){var _24=parseInt(navigator.appVersion);this.ver=navigator.appVersion;this.agent=navigator.userAgent;this.dom=document.getElementById?1:0;this.opera=window.opera?1:0;this.ie5=this.ver.match(/MSIE 5/)&&this.dom&&!this.opera;this.ie6=this.ver.match(/MSIE 6/)&&this.dom&&!this.opera;this.ie4=document.all&&!this.dom&&!this.opera;this.ie=this.ie4||this.ie5||this.ie6;this.ie3=this.ver.match(/MSIE/)&&_24<4;this.hotjava=this.agent.match(/hotjava/i);this.ns4=document.layers&&!this.dom&&!this.hotjava;this._E=this.hotjava||this.ie3;this.opera7=this.agent.match(/opera.7/i);this.gecko=this.agent.match(/gecko/i);this._L=this.opera&&!this.opera7};function _1l(_1G){for(var i in _1G)(new Image()).src=_1G[i]};window._1H=window.onload;window.onload=function(){var bw=new _1j();if(typeof(window._1H)=='function')window._1H()}