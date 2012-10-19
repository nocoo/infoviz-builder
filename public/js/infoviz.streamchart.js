define(function(b,a,c){b.async(["infoviz.core"],function(d){a.draw_streamchart=function(A,s,Q,o,n,t){if(!A||!Q){return idb("Paper or Data is empty.")}var h=d.merge_options(o),C=[],w,v;var K,J,I,N,G=0;var D=s["top-left"][0]+h.streamchart["padding-left"];var F=s["bottom-left"][1]-h.streamchart["padding-bottom"];var u={};for(K=0;K<Q.data.length;++K){N=Q.data[K];for(J=0;J<N.data.length;++J){if(!u[N.data[J][Q.horizontal_field]]){u[N.data[J][Q.horizontal_field]]={sum:0,max:-Infinity,min:Infinity,y:F};G++}}}for(K=0;K<Q.data.length;++K){N=Q.data[K];var M;for(J=0;J<N.data.length;++J){M=u[N.data[J][Q.horizontal_field]];M.sum+=N.data[J][Q.value_field];M.max=(N.data[J][Q.value_field]>M.max)?N.data[J][Q.value_field]:M.max;M.min=(N.data[J][Q.value_field]<M.min)?N.data[J][Q.value_field]:M.min}}var z=[];for(K=0;K<Q.data.length;++K){N=Q.data[K];var g,L=d.filter_node(N,["data"]);L.data=[];L.areas=[];var r=0;for(g in u){L.data[r++]=0}for(J=0;J<N.data.length;++J){L.data[J]={stream:K,field:N.data[J][Q.horizontal_field],ratio:N.data[J][Q.value_field]/u[N.data[J][Q.horizontal_field]]["sum"]}}z.push(L)}var P=F-s["top-left"][1]-h.streamchart["padding-top"];var m=P/(h.streamchart["vertical-label-count"]-1);var f=1/(h.streamchart["vertical-label-count"]-1);f=Math.round(f*Math.pow(10,2))/Math.pow(10,2);C=[];w=s["top-left"][0]-h.streamchart["vertical-bar-width"];v=F;var e=0;for(K=0;K<h.streamchart["vertical-label-count"];++K){C.push("M"+w+","+v+"L"+s["top-left"][0]+","+v);A.path(C.join("")).attr({stroke:h.grid["axis-color"],"stroke-opacity":h.grid["axis-alpha"],"stroke-width":h.grid["axis-width"]}).translate(0.5,0.5);A.text(w-h.streamchart["vertical-bar-width"],v,e).attr({"text-anchor":"end",fill:h.grid["vertical-label-color"],"font-size":h.grid["vertical-label-size"]}).translate(0.5,0.5);v-=m;e+=f}var D=s["top-left"][0]+h.streamchart["padding-left"];var O=Math.floor((s.width-h.streamchart["padding-left"]-h.streamchart["padding-right"])/(G-1));w=D;for(N in u){v=Math.floor(s["bottom-right"][1]+h.grid["horizontal-name-size"]/2+h.grid["horizontal-label-margin"]*2);A.text(w,v,N).attr({"text-anchor":"middle","text-weight":"normal","font-size":h.grid["horizontal-label-size"],fill:h.grid["horizontal-label-color"]}).translate(0.5,0.5);w+=O}var l=[];for(K=0;K<z.length;++K){var L=z[K];var q=h.color[(K%h.color.length)];for(J=0;J<L.data.length-1;++J){C=[];C.push("M"+(D+J*O)+","+u[L.data[J]["field"]]["y"]);C.push("L"+(D+(J+1)*O)+","+u[L.data[J+1]["field"]]["y"]);C.push("L"+(D+(J+1)*O)+","+(u[L.data[J+1]["field"]]["y"]-P*L.data[J+1]["ratio"]));C.push("L"+(D+J*O)+","+(u[L.data[J]["field"]]["y"]-P*L.data[J]["ratio"]));C.push("Z");u[L.data[J]["field"]]["y"]-=P*L.data[J]["ratio"];if(J===L.data.length-2){u[L.data[J+1]["field"]]["y"]-=P*L.data[J+1]["ratio"]}var B=A.path(C.join("")).attr({stroke:q.color,"stroke-opacity":q["dark-alpha"],"stroke-width":h.streamchart["border-width"],fill:q.color,"fill-opacity":q["light-alpha"]}).translate(0.5,0.5);if(n&&typeof(n)==="function"){B.data("info",{x:(D+J*O),y:u[L.data[J]["field"]]["y"],stream:L,area:Q.data[K]["data"][J],that:t,callback:n});B.click(d.element_action)}if(Q.tooltip_title||Q.tooltip_content){var R=Q.tooltip_title;var H=Q.tooltip_content;for(var E in L){R=R.replace("{"+E+"}",L[E]);H=H.replace("{"+E+"}",L[E])}for(var E in Q.data[K]["data"][J]){R=R.replace("{"+E+"}",Q.data[K]["data"][J][E]);H=H.replace("{"+E+"}",Q.data[K]["data"][J][E])}B.data("tooltip",{id:"s"+K+"a"+J,title:R,content:H,color:q,x:(D+J*O)+O/2,y:u[L.data[J]["field"]]["y"],element:B,options:h,paper:A});B.hover(d.element_tooltip)}B.data("animation",{stream:K,dark:q["dark-alpha"],light:q["light-alpha"]});L.areas.push(B)}l.unshift({label:L[Q.stream_field],color:q,type:"area"})}d.draw_legend(A,s,l,h)}})});