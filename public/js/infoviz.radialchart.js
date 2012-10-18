define(function(b,a,c){b.async(["infoviz.core"],function(d){a.draw_radialchart=function(h,r,Y,G,O,L){if(!h||!Y){return idb("Paper or Data is empty.")}var F=d.merge_options(G),s=[],Q,N,W,H,S,k=Math.PI/180;var B=F.radialchart["hole-radius"];var D=r["top-left"][0]+r.width/2+F.radialchart["horizontal-offset"];var C=r["top-left"][1]+r.height/2+F.radialchart["vertical-offset"];if(r.width>r.height){S=Math.floor(r.height/2)*F.radialchart["size-factor"]}else{S=Math.floor(r.width/2)*F.radialchart["size-factor"]}var l=-Infinity,J=Infinity,j=0;for(W=0;W<Y.data.length;++W){H=Y.data[W];if(H[Y.value_field]>l){l=H[Y.value_field]}if(H[Y.value_field]<J){J=H[Y.value_field]}j+=H[Y.value_field]}var u=360/Y.data.length;var K=F.radialchart["bar-width"]?F.radialchart["bar-width"]:u;var m=(S-B-F.radialchart["bar-min-height"])/(l-J);var o=0,E,ab=[],A=[],t=[];var z,ac,w,aa,v,Z,V,g;var n,U,P;var R=[];for(W=0;W<Y.data.length;++W){H=Y.data[W][Y.value_field];g=B+F.radialchart["bar-min-height"]+m*(H-J);E=F.color[(W%F.color.length)];s=[];Q=D+B*Math.cos(o*k);N=C+B*Math.sin(o*k);s.push("M"+Q+","+N);Q=D+g*Math.cos(o*k);N=C+g*Math.sin(o*k);s.push("L"+Q+","+N);Q=D+g*Math.cos((o+K)*k);N=C+g*Math.sin((o+K)*k);s.push("L"+Q+","+N);Q=D+B*Math.cos((o+K)*k);N=C+B*Math.sin((o+K)*k);s.push("L"+Q+","+N);s.push("Z");n=h.path(s.join("")).attr({fill:E.color,"fill-opacity":E["light-alpha"],stroke:E.color,"stroke-opacity":E["dark-alpha"],"stroke-width":F.radialchart["bar-border-width"]}).translate(0.5,0.5);n.data("color-alpha",E["light-alpha"]);n.data("index",W);ab.push(n);if(O&&typeof(O)==="function"){n.data("info",{start:o,angle:K,value:Y.data[W][Y.value_field],data:Y.data[W],callback:O,that:L});n.click(d.element_action)}R.push({label:Y.data[W][Y.label_field],color:E,type:"box"});var f=o+K/2;if(F.radialchart["label-enabled"]){Q=D+(g+F.radialchart["label-distance"])*Math.cos(f*k);N=C+(g+F.radialchart["label-distance"])*Math.sin(f*k);z=D+(g+F.radialchart["label-distance"]+F.radialchart["label-bar-length1"])*Math.cos(f*k);ac=C+(g+F.radialchart["label-distance"]+F.radialchart["label-bar-length1"])*Math.sin(f*k);if(Q>D){w=z+F.radialchart["label-bar-length2"]}else{w=z-F.radialchart["label-bar-length2"]}aa=ac;s=[];s.push("M"+Q+","+N);s.push("L"+z+","+ac);s.push("L"+w+","+aa);U=h.path(s.join("")).attr({stroke:F.radialchart["label-bar-color"],"stroke-opacity":F.radialchart["label-bar-color"],"stroke-width":F.radialchart["label-bar-width"]}).translate(0.5,0.5);A.push(U);if(Q>D){v=w+F.radialchart["label-distance"];V="start"}else{v=w-F.radialchart["label-distance"];V="end"}Z=aa;P=h.text(v,Z,Y.data[W][Y.label_field]).attr({"text-anchor":V,fill:E.color,"font-size":F.radialchart["label-size"]}).translate(0.5,0.5);t.push(P)}if(Y.tooltip_title||Y.tooltip_content){var I=Y.tooltip_title;var q=Y.tooltip_content;for(var T in Y.data[W]){I=I.replace("{"+T+"}",Y.data[W][T]);q=q.replace("{"+T+"}",Y.data[W][T])}n.data("tooltip",{id:W,title:I,content:q,color:E,x:D+F.radialchart["tooltip-position"]*S*Math.cos(f*k),y:C+F.radialchart["tooltip-position"]*S*Math.sin(f*k),element:n,options:F,paper:h});n.hover(d.element_tooltip)}o+=u}d.draw_legend(h,r,R,F);var X=Raphael.animation({transform:"s1.1 1.1 "+D+" "+C},F.layout["speed"],">");var M=Raphael.animation({transform:""},F.layout["speed"],"<");var e;for(W=0;W<ab.length;++W){(function(i){i.mouseover(function(){U=A[i.data("index")];if(U){U.stop().animate(X)}P=t[i.data("index")];if(P){P.stop().animate(X)}e=X;e.anim["100"]["fill-opacity"]=1;i.stop().animate(e);delete e.anim["100"]["fill-opacity"]});i.mouseout(function(){U=A[i.data("index")];if(U){U.stop().animate(M)}P=t[i.data("index")];if(P){P.stop().animate(M)}e=M;e.anim["100"]["fill-opacity"]=i.data("color-alpha");i.stop().animate(e);delete e.anim["100"]["fill-opacity"]})})(ab[W])}}})});