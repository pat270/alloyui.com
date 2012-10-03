/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("charts-legend",function(a){var c=a.config.doc,p="top",h="right",f="bottom",j="left",s="external",u="horizontal",q="vertical",b="width",n="height",m="position",i="x",g="y",e="px",l={setter:function(w){var v=this.get("legend");if(v){v.destroy(true);}if(w instanceof a.ChartLegend){v=w;v.set("chart",this);}else{w.chart=this;if(!w.hasOwnProperty("render")){w.render=this.get("contentBox");w.includeInChartLayout=true;}v=new a.ChartLegend(w);}return v;}},t={_positionLegendItems:function(K,T,N,w,X,H,E,A,Q,G){var R=0,L=0,V,O,y,P,S,M=this.get("width"),F,D,z,C,J,v=H.top-A,U=M-(H.left+H.right),x,I,W,B;t._setRowArrays(K,U,E);F=t.rowArray;C=t.totalWidthArray;D=F.length;for(;L<D;++L){v+=A;z=F[L];S=z.length;J=t.getStartPoint(M,C[L],Q,H);for(R=0;R<S;++R){V=z[R];O=V.node;y=V.width;P=V.height;V.x=J;V.y=0;x=!isNaN(x)?Math.min(x,J):J;I=!isNaN(I)?Math.min(I,v):v;W=!isNaN(W)?Math.max(J+y,W):J+y;B=!isNaN(B)?Math.max(v+P,B):v+P;O.setStyle("left",J+e);O.setStyle("top",v+e);J+=y+E;}v+=V.height;}this._contentRect={left:x,top:I,right:W,bottom:B};if(this.get("includeInChartLayout")){this.set("height",v+H.bottom);}},_setRowArrays:function(B,v,D){var F=B[0],C=[[F]],x=1,w=0,z=B.length,y=F.width,A,E=[[y]];for(;x<z;++x){F=B[x];A=F.width;if((y+D+A)<=v){y+=D+A;C[w].push(F);}else{y=D+A;if(C[w]){w+=1;}C[w]=[F];}E[w]=y;}t.rowArray=C;t.totalWidthArray=E;},getStartPoint:function(x,v,A,z){var y;switch(A){case j:y=z.left;break;case"center":y=(x-v)*0.5;break;case h:y=x-v-z.right;break;}return y;}},o={_positionLegendItems:function(M,T,N,x,X,I,E,C,Q,G){var R=0,F=0,V,O,P,B,S,L=this.get("height"),v,y,w,H,A,Y=I.left-E,K,U=L-(I.top+I.bottom),z,J,W,D;o._setColumnArrays(M,U,C);v=o.columnArray;H=o.totalHeightArray;y=v.length;for(;F<y;++F){Y+=E;w=v[F];S=w.length;A=o.getStartPoint(L,H[F],G,I);K=0;for(R=0;R<S;++R){V=w[R];O=V.node;P=V.height;B=V.width;V.y=A;V.x=Y;z=!isNaN(z)?Math.min(z,Y):Y;J=!isNaN(J)?Math.min(J,A):A;W=!isNaN(W)?Math.max(Y+B,W):Y+B;D=!isNaN(D)?Math.max(A+P,D):A+P;O.setStyle("left",Y+e);O.setStyle("top",A+e);A+=P+C;K=Math.max(K,V.width);}Y+=K;}this._contentRect={left:z,top:J,right:W,bottom:D};if(this.get("includeInChartLayout")){this.set("width",Y+I.right);}},_setColumnArrays:function(C,x,z){var F=C[0],D=[[F]],y=1,v=0,A=C.length,B=F.height,w,E=[[B]];for(;y<A;++y){F=C[y];w=F.height;if((B+z+w)<=x){B+=z+w;D[v].push(F);}else{B=z+w;if(D[v]){v+=1;}D[v]=[F];}E[v]=B;}o.columnArray=D;o.totalHeightArray=E;},getStartPoint:function(w,v,z,y){var x;switch(z){case p:x=y.top;break;case"middle":x=(w-v)*0.5;break;case f:x=w-v-y.bottom;break;}return x;}},d=a.Base.create("cartesianChartLegend",a.CartesianChart,[],{_redraw:function(){if(this._drawing){this._callLater=true;return;}this._drawing=true;this._callLater=false;var L=this.get("width"),V=this.get("height"),D=this._getLayoutBoxDimensions(),T=D.left,C=D.right,Z=D.top,x=D.bottom,v=this.get("leftAxesCollection"),J=this.get("rightAxesCollection"),K=this.get("topAxesCollection"),Y=this.get("bottomAxesCollection"),U=0,R,E,A="visible",B=this.get("graph"),G,M,S,Q,H,I,X,W,P=this.get("allowContentOverflow"),N,y,ab,O,F,z=this.get("legend"),aa={};if(v){ab=[];R=v.length;for(U=R-1;U>-1;--U){ab.unshift(T);T+=v[U].get("width");}}if(J){y=[];R=J.length;U=0;for(U=R-1;U>-1;--U){C+=J[U].get("width");y.unshift(L-C);}}if(K){O=[];R=K.length;for(U=R-1;U>-1;--U){O.unshift(Z);Z+=K[U].get("height");}}if(Y){F=[];R=Y.length;for(U=R-1;U>-1;--U){x+=Y[U].get("height");F.unshift(V-x);}}H=L-(T+C);I=V-(x+Z);aa.left=T;aa.top=Z;aa.bottom=V-x;aa.right=L-C;if(!P){G=this._getTopOverflow(v,J);M=this._getBottomOverflow(v,J);S=this._getLeftOverflow(Y,K);Q=this._getRightOverflow(Y,K);N=G-Z;if(N>0){aa.top=G;if(O){U=0;R=O.length;for(;U<R;++U){O[U]+=N;}}}N=M-x;if(N>0){aa.bottom=V-M;if(F){U=0;R=F.length;for(;U<R;++U){F[U]-=N;}}}N=S-T;if(N>0){aa.left=S;if(ab){U=0;R=ab.length;for(;U<R;++U){ab[U]+=N;}}}N=Q-C;if(N>0){aa.right=L-Q;if(y){U=0;R=y.length;for(;U<R;++U){y[U]-=N;}}}}H=aa.right-aa.left;I=aa.bottom-aa.top;X=aa.left;W=aa.top;if(z){if(z.get("includeInChartLayout")){switch(z.get("position")){case"left":z.set("y",W);z.set("height",I);break;case"top":z.set("x",X);z.set("width",H);break;case"bottom":z.set("x",X);z.set("width",H);break;case"right":z.set("y",W);z.set("height",I);break;}}}if(K){R=K.length;U=0;for(;U<R;U++){E=K[U];if(E.get("width")!==H){E.set("width",H);}E.get("boundingBox").setStyle("left",X+e);E.get("boundingBox").setStyle("top",O[U]+e);}if(E._hasDataOverflow()){A="hidden";}}if(Y){R=Y.length;U=0;for(;U<R;U++){E=Y[U];if(E.get("width")!==H){E.set("width",H);}E.get("boundingBox").setStyle("left",X+e);E.get("boundingBox").setStyle("top",F[U]+e);}if(E._hasDataOverflow()){A="hidden";}}if(v){R=v.length;U=0;for(;U<R;++U){E=v[U];E.get("boundingBox").setStyle("top",W+e);E.get("boundingBox").setStyle("left",ab[U]+e);if(E.get("height")!==I){E.set("height",I);}}if(E._hasDataOverflow()){A="hidden";}}if(J){R=J.length;U=0;for(;U<R;++U){E=J[U];E.get("boundingBox").setStyle("top",W+e);E.get("boundingBox").setStyle("left",y[U]+e);if(E.get("height")!==I){E.set("height",I);}}if(E._hasDataOverflow()){A="hidden";}}this._drawing=false;if(this._callLater){this._redraw();return;}if(B){B.get("boundingBox").setStyle("left",X+e);B.get("boundingBox").setStyle("top",W+e);B.set("width",H);B.set("height",I);B.get("boundingBox").setStyle("overflow",A);}if(this._overlay){this._overlay.setStyle("left",X+e);this._overlay.setStyle("top",W+e);this._overlay.setStyle("width",H+e);this._overlay.setStyle("height",I+e);}},_getLayoutBoxDimensions:function(){var x={top:0,right:0,bottom:0,left:0},C=this.get("legend"),z,B,v,E,D=this.get(b),y=this.get(n),A;if(C&&C.get("includeInChartLayout")){A=C.get("styles").gap;z=C.get(m);if(z!=s){B=C.get("direction");v=B==u?n:b;E=C.get(v);x[z]=E+A;switch(z){case p:C.set(g,0);break;case f:C.set(g,y-E);break;case h:C.set(i,D-E);break;case j:C.set(i,0);break;}}}return x;},destructor:function(){var v=this.get("legend");if(v){v.destroy(true);}}},{ATTRS:{legend:l}});a.CartesianChart=d;var k=a.Base.create("pieChartLegend",a.PieChart,[],{_redraw:function(){if(this._drawing){this._callLater=true;
return;}this._drawing=true;this._callLater=false;var N=this.get("graph"),K=this.get("width"),B=this.get("height"),M,v,J=this.get("legend"),H=0,E=0,D=0,C=0,L,I,z,G,A,F;if(N){if(J){A=J.get("position");F=J.get("direction");M=N.get("width");v=N.get("height");L=J.get("width");I=J.get("height");G=J.get("styles").gap;if((F=="vertical"&&(M+L+G!==K))||(F=="horizontal"&&(v+I+G!==B))){switch(J.get("position")){case j:z=Math.min(K-(L+G),B);I=B;H=L+G;J.set(n,I);break;case p:z=Math.min(B-(I+G),K);L=K;E=I+G;J.set(b,L);break;case h:z=Math.min(K-(L+G),B);I=B;D=z+G;J.set(n,I);break;case f:z=Math.min(B-(I+G),K);L=K;C=z+G;J.set(b,L);break;}N.set(b,z);N.set(n,z);}else{switch(J.get("position")){case j:H=L+G;break;case p:E=I+G;break;case h:D=M+G;break;case f:C=v+G;break;}}}else{N.set(i,0);N.set(g,0);N.set(b,K);N.set(n,B);}}this._drawing=false;if(this._callLater){this._redraw();return;}if(N){N.set(i,H);N.set(g,E);}if(J){J.set(i,D);J.set(g,C);}}},{ATTRS:{legend:l}});a.PieChart=k;a.ChartLegend=a.Base.create("chartlegend",a.Widget,[a.Renderer],{initializer:function(){this._items=[];},renderUI:function(){var y=this.get("boundingBox"),v=this.get("contentBox"),x=this.get("styles").background,w=new a.Rect({graphic:v,fill:x.fill,stroke:x.border});y.setStyle("display","block");y.setStyle("position","absolute");this.set("background",w);},bindUI:function(){this.get("chart").after("seriesCollectionChange",this._updateHandler);this.after("stylesChange",this._updateHandler);this.after("positionChange",this._positionChangeHandler);this.after("widthChange",this._handleSizeChange);this.after("heightChange",this._handleSizeChange);},syncUI:function(){var v=this.get("width"),x=this.get("height");if(isFinite(v)&&isFinite(x)&&v>0&&x>0){this._drawLegend();}},_updateHandler:function(v){if(this.get("rendered")){this._drawLegend();}},_positionChangeHandler:function(x){var w=this.get("chart"),v=this._parentNode;if(v&&((w&&this.get("includeInChartLayout")))){this.fire("legendRendered");}else{if(this.get("rendered")){this._drawLegend();}}},_handleSizeChange:function(x){var w=x.attrName,z=this.get(m),v=z==j||z==h,y=z==f||z==p;if((y&&w==b)||(v&&w==n)){this._drawLegend();}},_drawLegend:function(){if(this._drawing){this._callLater=true;return;}this._drawing=true;this._callLater=false;if(this.get("includeInChartLayout")){this.get("chart")._itemRenderQueue.unshift(this);}var ad=this.get("chart"),V=this.get("contentBox"),W=ad.get("seriesCollection"),A,S=this.get("styles"),Z=S.padding,L=S.item,X,z=L.hSpacing,B=L.vSpacing,F=S.hAlign,O=S.vAlign,ae=S.marker,H=L.label,T,U=this._layout[this.get("direction")],aa,I,N,J,D,R,G,E,ab,w,v,K=[],Q=ae.width,x=ae.height,C=0-z,P=0-B,M=0,Y=0,y,ac;if(ae&&ae.shape){J=ae.shape;}this._destroyLegendItems();if(ad instanceof a.PieChart){A=W[0];T=A.get("categoryAxis").getDataByKey(A.get("categoryKey"));X=A.get("styles").marker;ab=X.fill.colors;w=X.border.colors;v=X.border.weight;aa=0;I=T.length;J=J||a.Circle;N=a.Lang.isArray(J);for(;aa<I;++aa){J=N?J[aa]:J;G={color:ab[aa]};E={colors:w[aa],weight:v};T=ad.getSeriesItems(A,aa).category.value;R=this._getLegendItem(V,this._getShapeClass(J),G,E,H,Q,x,T);y=R.width;ac=R.height;M=Math.max(M,y);Y=Math.max(Y,ac);C+=y+z;P+=ac+B;K.push(R);}}else{aa=0;I=W.length;for(;aa<I;++aa){A=W[aa];X=this._getStylesBySeriesType(A,J);if(!J){J=X.shape;if(!J){J=a.Circle;}}D=a.Lang.isArray(J)?J[aa]:J;R=this._getLegendItem(V,this._getShapeClass(J),X.fill,X.border,H,Q,x,A.get("valueDisplayName"));y=R.width;ac=R.height;M=Math.max(M,y);Y=Math.max(Y,ac);C+=y+z;P+=ac+B;K.push(R);}}this._drawing=false;if(this._callLater){this._drawLegend();}else{U._positionLegendItems.apply(this,[K,M,Y,C,P,Z,z,B,F,O]);this._updateBackground(S);this.fire("legendRendered");}},_updateBackground:function(C){var D=C.background,z=this._contentRect,E=C.padding,v=z.left-E.left,F=z.top-E.top,A=z.right-v+E.right,B=z.bottom-F+E.bottom;this.get("background").set({fill:D.fill,stroke:D.border,width:A,height:B,x:v,y:F});},_getStylesBySeriesType:function(w){var x=w.get("styles"),v;if(w instanceof a.LineSeries||w instanceof a.StackedLineSeries){x=w.get("styles").line;v=x.color||w._getDefaultColor(w.get("graphOrder"),"line");return{border:{weight:1,color:v},fill:{color:v}};}else{if(w instanceof a.AreaSeries||w instanceof a.StackedAreaSeries){x=w.get("styles").area;v=x.color||w._getDefaultColor(w.get("graphOrder"),"slice");return{border:{weight:1,color:v},fill:{color:v}};}else{x=w.get("styles").marker;return{fill:x.fill,border:{weight:x.border.weight,color:x.border.color,shape:x.shape},shape:x.shape};}}},_getLegendItem:function(x,E,K,A,F,H,C,I){var z=a.one(c.createElement("div")),y=a.one(c.createElement("span")),D,B,G,v,J;z.setStyle(m,"absolute");y.setStyle(m,"absolute");y.setStyles(F);y.appendChild(c.createTextNode(I));z.appendChild(y);x.appendChild(z);B=y.get("offsetHeight");G=B-C;v=H+G+2;y.setStyle("left",v+e);z.setStyle("height",B+e);z.setStyle("width",(v+y.get("offsetWidth"))+e);D=new E({fill:K,stroke:A,width:H,height:C,x:G*0.5,y:G*0.5,w:H,h:C,graphic:z});y.setStyle("left",B+e);J={node:z,width:z.get("offsetWidth"),height:z.get("offsetHeight"),shape:D,textNode:y,text:I};this._items.push(J);return J;},_getShapeClass:function(){var v=this.get("background").get("graphic");return v._getShapeClass.apply(v,arguments);},_getDefaultStyles:function(){var v={padding:{top:8,right:8,bottom:8,left:9},gap:10,hAlign:"center",vAlign:"top",marker:this._getPlotDefaults(),item:{hSpacing:10,vSpacing:5,label:{color:"#808080",fontSize:"85%",whiteSpace:"nowrap"}},background:{shape:"rect",fill:{color:"#faf9f2"},border:{color:"#dad8c9",weight:1}}};return v;},_getPlotDefaults:function(){var v={width:10,height:10};return v;},_destroyLegendItems:function(){var v;if(this._items){while(this._items.length>0){v=this._items.shift();v.shape.get("graphic").destroy();v.node.empty();v.node.destroy(true);v.node=null;v=null;}}this._items=[];},_layout:{vertical:o,horizontal:t},destructor:function(){var v=this.get("background"),w;this._destroyLegendItems();if(v){w=v.get("graphic");if(w){w.destroy();
}else{v.destroy();}}}},{ATTRS:{includeInChartLayout:{value:false},chart:{setter:function(v){this.after("legendRendered",a.bind(v._itemRendered,v));return v;}},direction:{value:"vertical"},position:{lazyAdd:false,value:"right",setter:function(v){if(v==p||v==f){this.set("direction",u);}else{if(v==j||v==h){this.set("direction",q);}}return v;}},width:{getter:function(){var w=this.get("chart"),v=this._parentNode;if(v){if((w&&this.get("includeInChartLayout"))||this._width){if(!this._width){this._width=0;}return this._width;}else{return v.get("offsetWidth");}}return"";},setter:function(v){this._width=v;return v;}},height:{valueFn:"_heightGetter",getter:function(){var w=this.get("chart"),v=this._parentNode;if(v){if((w&&this.get("includeInChartLayout"))||this._height){if(!this._height){this._height=0;}return this._height;}else{return v.get("offsetHeight");}}return"";},setter:function(v){this._height=v;return v;}},x:{lazyAdd:false,value:0,setter:function(w){var v=this.get("boundingBox");if(v){v.setStyle(j,w+e);}return w;}},y:{lazyAdd:false,value:0,setter:function(w){var v=this.get("boundingBox");if(v){v.setStyle(p,w+e);}return w;}},items:{getter:function(){return this._items;}},background:{}}});function r(v){if(v.type!="pie"){return new a.CartesianChart(v);}else{return new a.PieChart(v);}}a.Chart=r;},"3.7.1pr1",{requires:["charts-base"]});