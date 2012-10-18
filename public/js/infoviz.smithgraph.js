define(function(b,a,c){b.async(["infoviz.core"],function(d){a.draw_smithgraph=function(h,u,aj,O,W,U){if(!h||!aj){return idb("Paper or Data is empty.")}var M=d.merge_options(O),v=[],Y,V,ah,P,ac,l=Math.PI/180;var G=M.smithgraph["hole-radius"];var J=u["top-left"][0]+u.width/2+M.smithgraph["horizontal-offset"];var H=u["top-left"][1]+u.height/2+M.smithgraph["vertical-offset"];if(u.width>u.height){ac=Math.floor(u.height/2)*M.smithgraph["size-factor"]}else{ac=Math.floor(u.width/2)*M.smithgraph["size-factor"]}var ai=-Infinity,K=Infinity,ae=0;var F={};for(ah=0;ah<aj.data.length;++ah){P=aj.data[ah];if(P[aj.node_value_field]>ai){ai=P[aj.node_value_field]}if(P[aj.node_value_field]<K){K=P[aj.node_value_field]}ae+=P[aj.node_value_field];if(!F[P[aj.node_id_field]]){F[P[aj.node_id_field]]={node:P,out:P.edges.length,"in":0}}else{console.log("node id: "+P[aj.node_id_field]+" is not unique. skip.");continue}}var B,ab,o;var N=-Infinity,g=Infinity,I=0;for(ah=0;ah<aj.data.length;++ah){P=aj.data[ah];B=-Infinity,ab=Infinity,o=0;for(j=0;j<P.edges.length;++j){if(!F[P.edges[j]["to"]]){console.log("destination node id: "+P.edges[j]["to"]+" not found. skip.");continue}F[P.edges[j]["to"]]["in"]++;var aa=P.edges[j][aj.edge_value_field];if(aa>B){B=aa}if(aa<ab){ab=aa}o+=aa}F[P[aj.node_id_field]]["edge_max"]=B;F[P[aj.node_id_field]]["edge_min"]=ab;F[P[aj.node_id_field]]["edge_sum"]=o;if(B>N){N=B}if(ab<g){g=ab}I+=o}var w=360/aj.data.length;var T=M.smithgraph["bar-width"]?M.smithgraph["bar-width"]:w;var q=(ac-G-M.smithgraph["bar-min-height"])/(ai-K);var s=0,L,an=[],S;var D,am,C,al,A,ak,ag,f;var r,af,X;var Z=[];for(ah=0;ah<aj.data.length;++ah){P=aj.data[ah][aj.node_value_field];f=G+M.smithgraph["bar-min-height"]+q*(P-K);L=M.color[(ah%M.color.length)];v=[];Y=J+G*Math.cos(s*l);V=H+G*Math.sin(s*l);v.push("M"+Y+","+V);Y=J+f*Math.cos(s*l);V=H+f*Math.sin(s*l);v.push("L"+Y+","+V);Y=J+f*Math.cos((s+T)*l);V=H+f*Math.sin((s+T)*l);v.push("L"+Y+","+V);Y=J+G*Math.cos((s+T)*l);V=H+G*Math.sin((s+T)*l);v.push("L"+Y+","+V);v.push("Z");r=h.path(v.join("")).attr({fill:L.color,"fill-opacity":L["light-alpha"],stroke:L.color,"stroke-opacity":L["dark-alpha"],"stroke-width":M.smithgraph["bar-border-width"]}).translate(0.5,0.5);r.data("color-alpha",L["light-alpha"]);r.data("index",ah);an.push(r);if(W&&typeof(W)==="function"){r.data("info",{type:"node",start:s,angle:T,value:aj.data[ah][aj.node_value_field],data:aj.data[ah],callback:W,that:U});r.click(d.element_action)}Z.push({label:aj.data[ah][aj.node_label_field],color:L,type:"box"});if(aj.node_tooltip_title||aj.node_tooltip_content){var R=aj.node_tooltip_title;var t=aj.node_tooltip_content;for(var ad in aj.data[ah]){R=R.replace("{"+ad+"}",aj.data[ah][ad]);t=t.replace("{"+ad+"}",aj.data[ah][ad])}r.data("tooltip",{id:ah,title:R,content:t,color:L,x:J+ac*Math.cos((s+T/2)*l),y:H+ac*Math.sin((s+T/2)*l),element:r,options:M,paper:h});r.hover(d.element_tooltip)}F[aj.data[ah][aj.node_id_field]]["start"]=s;F[aj.data[ah][aj.node_id_field]]["end"]=s+w;s+=w}s=0;for(ah=0;ah<aj.data.length;++ah){var Q=F[aj.data[ah][aj.node_id_field]],n;var k=w/Q.edge_sum;var E,m,z=s,e;var ao=G-M.smithgraph["edge-margin"];if(k==Infinity){k=w}for(j=0;j<Q.node["edges"].length;++j){E=Q.node["edges"][j];n=F[E.to];m=k*E[aj.edge_value_field];L=M.smithgraph["edge-color"][Math.floor((M.smithgraph["edge-color"].length-1)*(E[aj.edge_value_field]-g)/(N-g))];v=[];Y=J+ao*Math.cos(z*l);V=H+ao*Math.sin(z*l);v.push("M"+Y+","+V);D=J+ao*Math.cos((n.start+n.end)/2*l);am=H+ao*Math.sin((n.start+n.end)/2*l);v.push("L"+D+","+am);A=J+ao*Math.cos((z+m)*l);ak=H+ao*Math.sin((z+m)*l);v.push("L"+A+","+ak);v.push("Z");e=h.path(v.join("")).attr({fill:L.color,"fill-opacity":M.smithgraph["edge-background-alpha"],stroke:L.color,"stroke-opacity":L["dark-alpha"],"stroke-width":M.smithgraph["edge-border-width"]}).translate(0.5,0.5);z+=m}s+=w}d.draw_legend(h,u,Z,M)}})});