webpackJsonp([1],{"C/op":function(e,n){},HAmy:function(e,n){},IhWs:function(e,n){},JROc:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),i=t("bOdI"),r=t.n(i),a=t("woOf"),s=t.n(a),c=t("Ml+6"),l=t("Gu7T"),v=t.n(l),d={name:"Scene",data:function(){return{}},props:{currentShape:{required:!0,type:Object},currentShader:{required:!0,type:Object}},watch:{currentShape:function(e,n){e.class!==n.class&&(this.addMesh(),this.mesh.material=this.currentShader)},currentShader:function(e,n){this.mesh.material=e}},methods:{setupScene:function(){this.renderer=new c.WebGLRenderer({antialias:!0}),this.camera=new c.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=400,this.scene=new c.Scene,this.light=new c.AmbientLight(4210752),this.scene.add(this.light),this.light1=new c.PointLight(16711680),this.scene.add(this.light1),this.pointLightHelper1=new c.PointLightHelper(this.light1,10),this.scene.add(this.pointLightHelper1),this.light2=new c.PointLight(65280),this.scene.add(this.light2),this.pointLightHelper2=new c.PointLightHelper(this.light2,10),this.scene.add(this.pointLightHelper2),this.material=new c.MeshBasicMaterial,this.addMesh(),window.addEventListener("resize",this.sizeRenderer.bind(this),!1)},addMesh:function(){Boolean(this.mesh)&&this.scene.remove(this.mesh);var e=this.currentShape;this.geometry=new(Function.prototype.bind.apply(c[e.class],[null].concat(v()(e.args)))),this.mesh=new c.Mesh(this.geometry,this.material),this.scene.add(this.mesh)},sizeRenderer:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},animate:function(){var e=5e-4*Date.now();this.mesh.rotation.x+=.005,this.mesh.rotation.y+=.01,this.light1.position.x=250*Math.cos(e),this.light1.position.z=250*Math.sin(e),this.light2.position.y=250*Math.cos(1.25*e),this.light2.position.z=250*Math.sin(1.25*e),this.$emit("animate"),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this))}},mounted:function(){this.setupScene(),this.sizeRenderer(),this.$refs.scenecontainer.appendChild(this.renderer.domElement),this.animate()}},m={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"scenecontainer"})},staticRenderFns:[]};var u=t("VU/8")(d,m,!1,function(e){t("Slbh")},null,null).exports,f={name:"Stats",data:function(){return{fps:0}},methods:{end:function(){this.frames++;var e=(performance||Date).now();if(e>=this.prevTime+1e3){var n=1e3*this.frames/(e-this.prevTime);this.prevTime=e,this.frames=0,this.fps=n.toFixed(0)}return e},update:function(){this.beginTime=this.end()},loop:function(){var e=this;this.update(),this._frameId=window.requestAnimationFrame(function(){e.loop()})}},mounted:function(){this.beginTime=this.prevTime=(performance||Date).now(),this.frames=0,this.loop()},beforeDestoryed:function(){window.cancelAnimationFrame(this._frameId)}},h={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"stats"}},[this._v(this._s(this.fps)+" fps\n")])},staticRenderFns:[]};var g=t("VU/8")(f,h,!1,function(e){t("vARa")},"data-v-74ad385a",null).exports,p={name:"guiSelect",props:{label:{type:String},options:{type:Array},onChange:{type:Function}},computed:{listOptions:function(){return this.options}},methods:{handleSelect:function(e){this.$emit("optionSelected",e.target.value)}}},x={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"gui-item gui-select"},[t("div",{staticClass:"gui-label"},[e._v(e._s(e.label))]),e._v(" "),t("div",{staticClass:"gui-controller"},[t("select",{on:{change:e.handleSelect}},e._l(e.listOptions,function(n,o){return t("option",{key:o},[e._v(e._s(n))])}))])])},staticRenderFns:[]};var y=t("VU/8")(p,x,!1,function(e){t("hXxZ")},"data-v-e9cd7eaa",null).exports,z={name:"guiNumberRange",props:{label:{type:String,default:""},value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:.1}},methods:{valueChange:function(e){var n=parseFloat(e.target.value);isNaN(n)||(n<this.min?n=this.min:n>this.max&&(n=this.max),this.$refs.range.value=this.$refs.text.value=n,this.$emit("change",this.label,n))}}},w={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"gui-item gui-number-range"},[t("div",{staticClass:"gui-label"},[e._v(e._s(e.label))]),e._v(" "),t("div",{staticClass:"gui-controller"},[t("input",{ref:"range",attrs:{type:"range",min:e.min,max:e.max,step:e.step},domProps:{value:e.value},on:{input:e.valueChange}}),e._v(" "),t("input",{ref:"text",attrs:{type:"text"},domProps:{value:e.value},on:{change:e.valueChange}})])])},staticRenderFns:[]};var S=t("VU/8")(z,w,!1,function(e){t("HAmy")},"data-v-37e80d5e",null).exports,_={name:"Color",components:{guiNumberRange:S},data:function(){return{state:{expanded:!1,red:0,green:0,blue:0}}},props:{label:{type:String,default:""},red:{type:Number,default:0},green:{type:Number,default:0},blue:{type:Number,default:0}},watch:{red:{immediate:!0,handler:function(e,n){e!==this.state.red&&(this.state.red=e)}},green:{immediate:!0,handler:function(e,n){e!==this.state.green&&(this.state.green=e)}},blue:{immediate:!0,handler:function(e,n){e!==this.state.blue&&(this.state.blue=e)}}},computed:{colorBackgroundStyle:function(){return{background:"rgb(\n          "+this.state.red+",\n          "+this.state.green+",\n          "+this.state.blue+")"}}},methods:{colorInputChange:function(e,n){this.state[e]!==n&&(this.state[e]=n,this.$emit("change",this.label,{red:this.state.red,green:this.state.green,blue:this.state.blue}))},toggleExpanded:function(){this.state.expanded=!this.state.expanded}}},b={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"gui-item gui-color"},[t("div",{staticClass:"gui-label"},[e._v(e._s(e.label))]),e._v(" "),t("div",{staticClass:"gui-controller"},[t("div",{staticClass:"gui-color-toggle",style:e.colorBackgroundStyle,on:{click:e.toggleExpanded}},[e._v(e._s(e.state.red)+", "+e._s(e.state.green)+", "+e._s(e.state.blue))]),e._v(" "),t("div",{staticClass:"gui-color-sliders",class:{closed:!e.state.expanded}},[t("gui-number-range",{attrs:{label:"red",value:e.state.red,min:0,max:255,step:1},on:{change:e.colorInputChange}}),e._v(" "),t("gui-number-range",{attrs:{label:"green",value:e.state.green,min:0,max:255,step:1},on:{change:e.colorInputChange}}),e._v(" "),t("gui-number-range",{attrs:{label:"blue",value:e.state.blue,min:0,max:255,step:1},on:{change:e.colorInputChange}})],1)])])},staticRenderFns:[]};var P=t("VU/8")(_,b,!1,function(e){t("JROc")},"data-v-72509d16",null).exports,C={name:"guiButton",props:{label:{type:String,required:!0}},methods:{handleClick:function(e){this.$emit("click",e)}}},M={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"gui-item"},[n("div",{staticClass:"gui-label"}),this._v(" "),n("div",{staticClass:"gui-controller gui-button"},[n("div",{on:{click:this.handleClick}},[this._v(this._s(this.label))])])])},staticRenderFns:[]};var U={name:"Controls",components:{guiSelect:y,guiNumberRange:S,guiColor:P,guiButton:t("VU/8")(C,M,!1,function(e){t("rbFo")},"data-v-843fc42e",null).exports},props:{shapes:{type:Array,required:!0},shaders:{type:Array,required:!0},currentShader:{type:Object,required:!0}},computed:{shapeNames:function(){return this.shapes.map(function(e){return e.name})},shaderNames:function(){return this.shaders.map(function(e){return e.name})},customUniforms:function(){return void 0!==this.currentShader.customUniforms?this.currentShader.customUniforms:{}}},methods:{shapeSelected:function(e){this.$emit("shapeSelected",e)},shaderSelected:function(e){this.$emit("shaderSelected",e)},numberUniformChange:function(e,n){this.currentShader.uniforms[e].value=n},colorUniformChange:function(e,n){this.currentShader.uniforms[e].value.setRGB(n.red/256,n.green/256,n.blue/256)},codeButtonClick:function(e){this.$emit("codeButtonClick",e)}}},F={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{color:"#fff"},attrs:{id:"controls"}},[t("gui-select",{attrs:{label:"Shape",options:e.shapeNames},on:{optionSelected:e.shapeSelected}}),e._v(" "),t("gui-select",{attrs:{label:"Shader",options:e.shaderNames},on:{optionSelected:e.shaderSelected}}),e._v(" "),e._l(e.customUniforms,function(n,o){return t("div",{key:o},["f"!=n.type||Boolean(n.hidden)?e._e():t("gui-number-range",{attrs:{label:o,value:n.value,min:n.min,max:n.max,step:n.step},on:{change:e.numberUniformChange}}),e._v(" "),"c"!=n.type||Boolean(n.hidden)?e._e():t("gui-color",{attrs:{label:o,red:parseInt(256*n.value.r,10),green:parseInt(256*n.value.g,10),blue:parseInt(256*n.value.b,10)},on:{change:e.colorUniformChange}})],1)}),e._v(" "),t("gui-button",{attrs:{label:"view shader code"},on:{click:e.codeButtonClick}})],2)},staticRenderFns:[]};var N=t("VU/8")(U,F,!1,function(e){t("C/op")},null,null).exports,I={name:"CodeView",props:{visible:{type:Boolean,default:!1},shaderName:{type:String,default:""},vertexShader:{type:String,default:""},fragmentShader:{type:String,default:""}},methods:{close:function(e){this.$emit("close",e)}}},j={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{style:{display:e.visible?"block":"none"},attrs:{id:"codeviewcontainer"}},[t("div",{attrs:{id:"closebar"}},[t("div",{attrs:{id:"bartitle"}},[e._v(e._s(this.shaderName))]),e._v(" "),t("div",{attrs:{id:"closebutton"},on:{click:e.close}},[e._v("Close")])]),e._v(" "),t("div",{attrs:{id:"codeview"}},[t("div",{staticClass:"pane"},[t("div",{attrs:{id:"vertex-shader"}},[t("h3",[e._v("Vertex Shader")]),e._v(" "),t("pre",[e._v(e._s(this.vertexShader))])])]),e._v(" "),t("div",{staticClass:"pane"},[t("div",{attrs:{id:"fragment-shader"}},[t("h3",[e._v("Fragment Shader")]),e._v(" "),t("pre",[e._v(e._s(this.fragmentShader))])])])])])},staticRenderFns:[]};var A,D=t("VU/8")(I,j,!1,function(e){t("IhWs")},"data-v-631f503e",null).exports,L={name:"Basic Color",uniforms:{diffuse:{type:"c",value:new c.Color(16711680)}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nuniform vec3 diffuse;\nvoid main() {\n  gl_FragColor = vec4(diffuse.x, diffuse.y, diffuse.z, 1.0);\n}"},R={name:"Basic color with lights",uniforms:{diffuse:{type:"c",value:new c.Color(255)}},vertexShader:"\nvarying vec2 vUv;\nvarying vec3 vPos;\nvarying vec3 vNormal;\nvoid main() {\n  vUv = uv;\n  vNormal = normalMatrix * normal;\n  vPos = (modelViewMatrix * vec4(position, 1.0 )).xyz;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nuniform vec3 diffuse;\nvarying vec3 vPos;\nvarying vec3 vNormal;\n\nstruct PointLight {\n  vec3 position;\n  vec3 color;\n  float distance;\n  float decay;\n  int shadow;\n  float shadowBias;\n  float shadowRadius;\n  vec2 shadowMapSize;\n};\nuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\nvoid main() {\n  vec4 addedLights = vec4(0.0,0.0,0.0, 1.0);\n\n  for(int l = 0; l < NUM_POINT_LIGHTS; l++) {\n    float diffuseCoefficient = max( 1.0 - (distance(pointLights[l].position,vPos) / 500.0 ), 0.0);\n    addedLights.rgb += diffuseCoefficient * pointLights[l].color;\n  }\n  gl_FragColor = mix(vec4(diffuse.x, diffuse.y, diffuse.z, 1.0), addedLights, addedLights);\n}\n"},V={name:"Checker",uniforms:{color1:{type:"c",value:new c.Color(16777215)},color2:{type:"c",value:new c.Color(0)},scale:{type:"f",value:5,min:1,max:50,step:.5}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nuniform vec3 color1;\nuniform vec3 color2;\nuniform float scale;\nvarying vec2 vUv;\nvoid main() {\n  vec2 center = -1.0 + 2.0 * vUv;\n  vec2 uv = floor(center.xy * scale);\n  if(mod(uv.x + uv.y, 2.0) > 0.5){\n    gl_FragColor = vec4(color1, 1.0);\n  }else{\n    gl_FragColor = vec4(color2, 1.0);\n  }\n}"},T={name:"Dots",uniforms:{color1:{type:"c",value:new c.Color(16777215)},color2:{type:"c",value:new c.Color(0)},radius1:{type:"f",value:.3,min:0,max:1,step:.01},radius2:{type:"f",value:.32,min:0,max:1,step:.01},amount:{type:"f",value:5,min:1,max:100,step:1}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nuniform vec3 color1;\nuniform vec3 color2;\nuniform float radius1;\nuniform float radius2;\nuniform float amount;\nvarying vec2 vUv;\nvoid main() {\n  float p = smoothstep(radius1, radius2, length(fract(amount*vUv)-0.5));\n  vec3 col = mix(color1, color2, vec3(p));\n  gl_FragColor = vec4(col, 1.0);\n}"},k={name:"Simple lines",uniforms:{color1:{type:"c",value:new c.Color(16777215)},alpha1:{type:"f",value:1,min:0,max:1,step:.1},color2:{type:"c",value:new c.Color(0)},alpha2:{type:"f",value:1,min:0,max:1,step:.1},lines:{type:"f",value:14,min:1,max:100,step:1},linewidth:{type:"f",value:5,min:0,max:100,step:1}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nuniform vec3 color1;\nuniform float alpha1;\nuniform vec3 color2;\nuniform float alpha2;\nuniform float lines;\nuniform float linewidth;\nvarying vec2 vUv;\nvoid main() {\n  float p = abs(fract(lines*vUv.y)*2.0-1.0);\n  if(p < linewidth / 100.0){\n    gl_FragColor = vec4(color1, alpha1);\n  }else{\n    gl_FragColor = vec4(color2, alpha2);\n  }\n}"},q={name:"Faded lines",uniforms:{color1:{type:"c",value:new c.Color(16777215)},color2:{type:"c",value:new c.Color(0)},amount:{type:"f",value:5,min:1,max:100,step:1}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nuniform vec3 color1;\nuniform vec3 color2;\nuniform float amount;\nvarying vec2 vUv;\nvoid main() {\n  float p = abs(fract(amount*vUv.x)*2.0-1.0);\n  vec3 col = mix(color1, color2, vec3(p));\n  gl_FragColor = vec4(col, 1.0);\n}"},O={name:"Starburst",uniforms:{color1:{type:"c",value:new c.Color(16777215)},color2:{type:"c",value:new c.Color(0)},amount:{type:"f",value:40,min:1,max:100,step:1}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nuniform vec3 color1;\nuniform vec3 color2;\nuniform float amount;\nvarying vec2 vUv;\nvoid main() {\n  float angle = atan(vUv.y - 0.5,vUv.x - 0.5);\n  float intensity = pow(sin(angle*amount) * 0.5 + 0.5, 2.0);\n  vec3 col = mix(color1, color2, intensity);\n  gl_FragColor = vec4(col, 1.0);\n}"},E={name:"Matrix",uniforms:{colour:{type:"c",value:new c.Color(9043849)},rows:{type:"f",value:15,min:1,max:100,step:1},glow:{type:"f",value:1,min:0,max:1,step:.1},glowRadius:{type:"f",value:1,min:0,max:1,step:.1},charDetail:{type:"f",value:3,min:0,max:10,step:.1},speed:{type:"f",value:10,min:0,max:100,step:1},iGlobalTime:{type:"f",value:0,hidden:1}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nuniform vec3 colour;\nuniform float rows;\nuniform float glow;\nuniform float glowRadius;\nuniform float charDetail;\nuniform float speed;\nuniform float iGlobalTime;\nvarying vec2 vUv;\n\nfloat random(in float x){\n    return fract(sin(x)*43758.5453);\n}\n\nfloat random(in vec2 st){\n    return fract(sin(dot(st.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat randomChar(in vec2 outer,in vec2 inner){\n    float grid = charDetail;\n    vec2 margin = vec2(.2,.05);\n    float seed = 23.;\n    vec2 borders = step(margin,inner)*step(margin,1.-inner);\n    return step(.5,random(outer*seed+floor(inner*grid))) * borders.x * borders.y;\n}\n\nvec3 matrix(in vec2 st){\n    vec2 ipos = floor(st*rows)+vec2(1.,0.);\n\n    ipos += vec2(.0,floor(iGlobalTime*speed*random(ipos.x)));\n\n    vec2 fpos = fract(st*rows);\n    vec2 center = (.5-fpos);\n\n    float pct = random(ipos);\n    float glowamount = (glowRadius-dot(center,center)*3.)*glow;\n\n    return vec3(randomChar(ipos,fpos) * pct * glowamount) * colour;\n}\n\nvoid main() {\n    gl_FragColor = vec4(matrix(vUv),1.0);\n}",update:function(e,n){e.iGlobalTime.value=n.getElapsedTime()}},B={name:"Normal",path:"!normal",uniforms:{},vertexShader:"\nvarying vec3 transformedNormal;\nvoid main() {\n  transformedNormal = normalMatrix * normal;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nvarying vec3 transformedNormal;\nvoid main() {\n  gl_FragColor = vec4(normalize(transformedNormal), 1.0);\n}"},G={name:"Voronoise",path:"!voronoise",uniforms:{amount:{type:"f",value:24,min:0,max:100,step:1},jitter:{type:"f",value:1,min:0,max:1,step:.1},blur:{type:"f",value:1,min:0,max:1,step:.1}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nvarying vec2 vUv;\nuniform float amount;\nuniform float jitter;\nuniform float blur;\nvec3 hash3( vec2 p )\n{\n    vec3 q = vec3( dot(p,vec2(127.1,311.7)),\n            dot(p,vec2(269.5,183.3)),\n            dot(p,vec2(419.2,371.9)) );\n  return fract(sin(q)*43758.5453);\n}\n\nfloat iqnoise( in vec2 x, float u, float v )\n{\n    vec2 p = floor(x);\n    vec2 f = fract(x);\n\n  float k = 1.0+63.0*pow(1.0-v,4.0);\n\n  float va = 0.0;\n  float wt = 0.0;\n    for( int j=-2; j<=2; j++ )\n    for( int i=-2; i<=2; i++ )\n    {\n        vec2 g = vec2( float(i),float(j) );\n    vec3 o = hash3( p + g )*vec3(u,u,1.0);\n    vec2 r = g - f + o.xy;\n    float d = dot(r,r);\n    float ww = pow( 1.0-smoothstep(0.0,1.414,sqrt(d)), k );\n    va += o.z*ww;\n    wt += ww;\n  }\n\n    return va/wt;\n}\n\nvoid main(void)\n{\n  vec2 p = 0.5 - 0.5*sin( vUv );\n\n  p = p*p*(3.0-2.0*p);\n  p = p*p*(3.0-2.0*p);\n  p = p*p*(3.0-2.0*p);\n\n  float f = iqnoise( amount*vUv, jitter, blur );\n\n  gl_FragColor = vec4( f, f, f, 1.0 );\n}"},$={name:"Wood grain",uniforms:{scale:{type:"f",value:1.038,min:.1,max:2,step:.001},frequency:{type:"f",value:7.6,min:0,max:10,step:.1},noiseScale:{type:"f",value:6.4,min:.1,max:10,step:.1},ringScale:{type:"f",value:.6,min:0,max:1,step:.1},color1:{type:"c",value:new c.Color(7353856)},color2:{type:"c",value:new c.Color(15368225)}},vertexShader:"\nuniform float scale;\nvarying vec3 vPosition;\nvoid main() {\n  vPosition = normalize(position) * scale;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nuniform vec3 color1;\nuniform vec3 color2;\nuniform float frequency;\nuniform float noiseScale;\nuniform float ringScale;\nvarying vec3 vPosition;\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n      return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvoid main() {\n  float n = snoise(vPosition);\n  float ring = fract(frequency * vPosition.z + noiseScale * n);\n  ring *= 4.0 * (1.0 - ring);\n  // Adjust ring smoothness and shape, and add some noise\n  float lrp = pow(ring, ringScale) + n;\n  vec3 base = mix(color1, color2, lrp);\n  gl_FragColor = vec4(base, 1.0);\n}"},H={name:"Simplex Noise 3D",uniforms:{scale:{type:"f",value:10,min:1,max:100,step:1}},vertexShader:"\nvarying vec3 vPosition;\nvoid main() {\n  vPosition = normalize(position);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\nvarying vec3 vPosition;\nuniform float scale;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}\n\nvoid main() {\n  float n = snoise(vPosition * scale);\n  gl_FragColor = vec4(1.0 * n, 1.0 * n, 1.0 * n, 1.0);\n}"},W={name:"Perlin Noise 3D",uniforms:{scale:{type:"f",value:10,min:1,max:100,step:1}},vertexShader:"\nvarying vec3 vPosition;\nvoid main() {\n  vPosition = normalize(position);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:'\n  varying vec3 vPosition;\n  uniform float scale;\n\n  //\n  // GLSL textureless classic 3D noise "cnoise",\n  // with an RSL-style periodic variant "pnoise".\n  // Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n  // Version: 2011-10-11\n  //\n  // Many thanks to Ian McEwan of Ashima Arts for the\n  // ideas for permutation and gradient selection.\n  //\n  // Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n  // Distributed under the MIT license. See LICENSE file.\n  // https://github.com/ashima/webgl-noise\n  //\n\n  vec3 mod289(vec3 x)\n  {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n  }\n\n  vec4 mod289(vec4 x)\n  {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n  }\n\n  vec4 permute(vec4 x)\n  {\n    return mod289(((x*34.0)+1.0)*x);\n  }\n\n  vec4 taylorInvSqrt(vec4 r)\n  {\n    return 1.79284291400159 - 0.85373472095314 * r;\n  }\n\n  vec3 fade(vec3 t) {\n    return t*t*t*(t*(t*6.0-15.0)+10.0);\n  }\n\n  // Classic Perlin noise\n  float cnoise(vec3 P)\n  {\n    vec3 Pi0 = floor(P); // Integer part for indexing\n    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n  }\n\n\n  void main() {\n    float n = cnoise(vPosition * scale);\n    gl_FragColor = vec4(1.0 * n, 1.0 * n, 1.0 * n, 1.0);\n  }'},X={name:"Perlin Vertex Displacement",uniforms:{scale:{type:"f",value:10,min:1,max:10,step:1},displacement:{type:"f",value:20,min:-100,max:100,step:1}},vertexShader:'\nuniform float scale;\nuniform float displacement;\n// send noise value to fragment with vNoise.\nvarying float vNoise;\n\n//\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nvoid main() {\n  vNoise = cnoise(normalize(position) * scale);\n  vec3 pos = position + normal * vNoise * vec3(displacement);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);\n}',fragmentShader:"\nvarying float vNoise;\nvoid main() {\n  gl_FragColor = vec4(vec3(1.0) * vNoise, 1.0);\n}"},J={name:"Polka Noise",uniforms:{color1:{type:"c",value:new c.Color(16777215)},color2:{type:"c",value:new c.Color(0)},amount:{type:"f",value:8,min:1,max:100,step:1},radius1:{type:"f",value:1,min:0,max:1,step:.1},radius2:{type:"f",value:.5,min:0,max:1,step:.1},box:{type:"i",value:0,checkbox:!0}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"\n// This was found at:\n// https://github.com/BrianSharpe/GPU-Noise-Lib\n// https://briansharpe.wordpress.com/2011/12/24/polkadot-and-star-noises/\n\nvarying vec2 vUv;\nuniform vec3 color1;\nuniform vec3 color2;\nuniform float amount;\nuniform float radius1;\nuniform float radius2;\nuniform bool box;\n\n\nvec4 FAST32_hash_2D_Cell( vec2 gridcell )\t//\tgenerates 4 different random numbers for the single given cell point\n{\n  //\tgridcell is assumed to be an integer coordinate\n  const vec2 OFFSET = vec2( 26.0, 161.0 );\n  const float DOMAIN = 71.0;\n  const vec4 SOMELARGEFLOATS = vec4( 951.135664, 642.949883, 803.202459, 986.973274 );\n  vec2 P = gridcell - floor(gridcell * ( 1.0 / DOMAIN )) * DOMAIN;\n  P += OFFSET.xy;\n  P *= P;\n  return fract( (P.x * P.y) * ( 1.0 / SOMELARGEFLOATS.xyzw ) );\n}\n\nfloat Falloff_Xsq_C2( float xsq ) { xsq = 1.0 - xsq; return xsq*xsq*xsq; }  // ( 1.0 - x*x )^3.   NOTE: 2nd derivative is 0.0 at x=1.0, but non-zero at x=0.0\n\nfloat PolkaDot2D( \tvec2 P,\n  float radius_low,\t\t//\tradius range is 0.0->1.0\n  float radius_high\t)\n{\n  //\testablish our grid cell and unit position\n  vec2 Pi = floor(P);\n  vec2 Pf = P - Pi;\n\n  //\tcalculate the hash.\n  //\t( various hashing methods listed in order of speed )\n  vec4 hash = FAST32_hash_2D_Cell( Pi );\n\n  //\tuser variables\n  float RADIUS = max( 0.0, radius_low + hash.z * ( radius_high - radius_low ) );\n  float VALUE = RADIUS / max( radius_high, radius_low );\t//\tnew keep value in proportion to radius.  Behaves better when used for bumpmapping, distortion and displacement\n\n  //\tcalc the noise and return\n  RADIUS = 2.0/RADIUS;\n  Pf *= RADIUS;\n  Pf -= ( RADIUS - 1.0 );\n  Pf += hash.xy * ( RADIUS - 2.0 );\n  if(box){\n    Pf *= Pf;   //  this gives us a cool box looking effect\n  }\n  return Falloff_Xsq_C2( min( dot( Pf, Pf ), 1.0 ) ) * VALUE;\n}\n\nvoid main() {\n  float n = PolkaDot2D(vUv*amount, radius1, radius2);\n  gl_FragColor = vec4(mix(color2, color1, n), 1.0);\n}"},K={name:"Fresnel 2 Color",uniforms:{color1:{type:"c",value:new c.Color(16777215)},color2:{type:"c",value:new c.Color(255)},fresnelBias:{type:"f",value:.1,min:0,max:1,step:.1},fresnelScale:{type:"f",value:1,min:0,max:10,step:1},fresnelPower:{type:"f",value:2,min:0,max:10,step:1}},vertexShader:"\nuniform float fresnelBias;\nuniform float fresnelScale;\nuniform float fresnelPower;\n\nvarying float vReflectionFactor;\n\nvoid main() {\n  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n  vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\n\n  vec3 I = worldPosition.xyz - cameraPosition;\n\n  vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );\n\n  gl_Position = projectionMatrix * mvPosition;\n}",fragmentShader:"\nuniform vec3 color1;\nuniform vec3 color2;\n\nvarying float vReflectionFactor;\n\nvoid main() {\n  gl_FragColor = vec4(mix(color2, color1, vec3(clamp( vReflectionFactor, 0.0, 1.0 ))), 1.0);\n}"},Z={name:"App",components:{Scene:u,Stats:g,Controls:N,CodeView:D},data:function(){return{shaders:[L,R,V,T,k,q,O,B,E,G,$,H,W,X,J,K],shapes:[{name:"Cube",class:"BoxGeometry",args:[200,200,200,50,50,50]},{name:"Sphere",class:"SphereGeometry",args:[150,32,32]},{name:"Cylinder",class:"CylinderGeometry",args:[100,100,200,32,100]},{name:"Torus Knot",class:"TorusKnotGeometry",args:[100,30,100,16]}],state:{currentShader:{},currentShaderObject:{},currentShape:{name:"Cube",class:"BoxGeometry",args:[200,200,200,50,50,50]},showCode:!1},clock:new c.Clock,threeVersion:c.REVISION}},methods:(A={getShaderFromName:function(e){return this.shaders.find(function(n){return n.name===e})},setShaderFromName:function(e){var n=this.getShaderFromName(e),t={vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,lights:!0};"uniforms"in n&&(t.uniforms=c.UniformsUtils.merge([c.UniformsLib.lights,n.uniforms]));var o=new c.ShaderMaterial(t);o.customUniforms=n.uniforms,this.state=s()(this.state,{currentShader:o,currentShaderObject:n})},getShapeFromName:function(e){return this.shapes.find(function(n){return n.name===e})},animateCallback:function(){Boolean(this.state.currentShaderObject)&&Boolean(this.state.currentShaderObject.update)&&this.state.currentShaderObject.update(this.state.currentShader.uniforms,this.clock)}},r()(A,"getShapeFromName",function(e){return this.shapes.find(function(n){return n.name===e})}),r()(A,"changeShape",function(e){this.state.currentShape=this.getShapeFromName(e)}),r()(A,"showCode",function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.state.showCode=e}),A),mounted:function(){this.setShaderFromName("Basic Color")}},Q={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("scene",{attrs:{currentShape:e.state.currentShape,currentShader:e.state.currentShader},on:{animate:e.animateCallback}}),e._v(" "),t("stats"),e._v(" "),t("controls",{attrs:{shapes:e.shapes,shaders:e.shaders,currentShader:e.state.currentShader},on:{shapeSelected:e.changeShape,shaderSelected:e.setShaderFromName,codeButtonClick:function(n){e.showCode(!0)}}}),e._v(" "),t("div",{attrs:{id:"info"}},[e._v("\n        Three.js ShaderMaterial experiments."),t("br"),e._v("\n        Originals at\n        "),t("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://2pha.com/blog/experimenting-threejs-shaders-and-shadermaterial/"}},[e._v("\n          this blog post\n        ")]),e._v(" "),t("br"),e._v("\n        Build with Three.js "+e._s(this.threeVersion)+" and Vue.js"),t("br"),e._v(" "),t("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/2pha/vue-three-shaders"}},[e._v("\n          https://github.com/2pha/vue-three-shaders\n        ")])]),e._v(" "),t("code-view",{attrs:{visible:e.state.showCode,shaderName:e.state.currentShaderObject.name,vertexShader:e.state.currentShaderObject.vertexShader,fragmentShader:e.state.currentShaderObject.fragmentShader},on:{close:function(n){e.showCode(!1)}}})],1)},staticRenderFns:[]};var Y=t("VU/8")(Z,Q,!1,function(e){t("lzdt")},null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:Y},template:"<App/>"})},Slbh:function(e,n){},hXxZ:function(e,n){},lzdt:function(e,n){},rbFo:function(e,n){},vARa:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.11cd66a3b02be7afcebb.js.map