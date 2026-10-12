(()=>{var Qc="170";var Hf=0,$h=1,zf=2;var od=1,th=2,ai=3,Ui=0,un=1,Be=2,Yn=0,Os=1,En=2,Zh=3,Kh=4,Gf=5,ts=100,Vf=101,Wf=102,Xf=103,qf=104,Yf=200,$f=201,Zf=202,Kf=203,Rl=204,Cl=205,Jf=206,jf=207,Qf=208,tp=209,ep=210,np=211,ip=212,sp=213,rp=214,Pl=0,Il=1,Ll=2,zs=3,Dl=4,Ul=5,Nl=6,kl=7,ad=0,op=1,ap=2,Li=0,eh=1,nh=2,ih=3,zr=4,lp=5,sh=6,rh=7;var ld=300,Gs=301,Vs=302,Ol=303,Fl=304,oa=306,Pr=1e3,ci=1001,Bl=1002,vn=1003,cp=1004;var $r=1005;var Xn=1006,qa=1007;var ns=1008;var fi=1009,cd=1010,hd=1011,Ir=1012,oh=1013,is=1014,qn=1015,Bn=1016,ah=1017,lh=1018,Ws=1020,ud=35902,dd=1021,fd=1022,kn=1023,pd=1024,md=1025,Fs=1026,Xs=1027,ch=1028,hh=1029,gd=1030,uh=1031;var dh=1033,To=33776,Ao=33777,Ro=33778,Co=33779,Hl=35840,zl=35841,Gl=35842,Vl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37808,$l=37809,Zl=37810,Kl=37811,Jl=37812,jl=37813,Ql=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,Po=36492,ac=36494,lc=36495,yd=36283,cc=36284,hc=36285,uc=36286;var Io=2300,dc=2301,Ya=2302,Jh=2400,jh=2401,Qh=2402;var hp=3200,up=3201;var vd=0,dp=1,Pi="",hn="srgb",ir="srgb-linear",aa="linear",fe="srgb";var gs=7680;var tu=519,fp=512,pp=513,mp=514,xd=515,gp=516,yp=517,vp=518,xp=519,fc=35044;var eu="300 es",hi=2e3,Lo=2001,Ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $a=Math.PI/180,Do=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function _p(i,t){return(i%t+t)%t}function Za(i,t,e){return(1-e)*i+e*t}function Wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var J=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],y=s[0],g=s[3],m=s[6],x=s[1],_=s[4],v=s[7],A=s[2],E=s[5],T=s[8];return r[0]=o*y+a*x+l*A,r[3]=o*g+a*_+l*E,r[6]=o*m+a*v+l*T,r[1]=c*y+h*x+u*A,r[4]=c*g+h*_+u*E,r[7]=c*m+h*v+u*T,r[2]=d*y+f*x+p*A,r[5]=d*g+f*_+p*E,r[8]=d*m+f*v+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ka=new Yt;function _d(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mp(){let i=Uo("canvas");return i.style.display="block",i}var nu={};function Er(i){i in nu||(nu[i]=!0,console.warn(i))}function bp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Sp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pi?aa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var iu=[.64,.33,.3,.6,.15,.06],su=[.2126,.7152,.0722],ru=[.3127,.329],ou=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[ir]:{primaries:iu,whitePoint:ru,transfer:aa,toXYZ:ou,fromXYZ:au,luminanceCoefficients:su,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:iu,whitePoint:ru,transfer:fe,toXYZ:ou,fromXYZ:au,luminanceCoefficients:su,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}});var ys,pc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ys===void 0&&(ys=Uo("canvas")),ys.width=t.width,ys.height=t.height;let n=ys.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ys}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ep=0,No=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tp=0,dn=class i extends Ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ci,s=ci,r=Xn,o=ns,a=kn,l=fi,c=i.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ui(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ld)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pr:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pr:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=ld;dn.DEFAULT_ANISOTROPY=1;var ye=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(f+1)/2,A=(m+1)/2,E=(h+d)/4,T=(u+y)/4,P=(p+g)/4;return _>v&&_>A?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=T/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=T/r,s=P/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mc=class extends Ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new No(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ko=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gc=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==p){let g=1-a,m=l*d+c*f+h*p+u*y,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let A=Math.sqrt(_),E=Math.atan2(A,m*x);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}let v=a*x;if(l=l*g+d*v,c=c*g+f*v,h=h*g+p*v,u=u*g+y*v,g===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ja=new R,lu=new Tn,pi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),Kr.subVectors(this.max,mr),vs.subVectors(t.a,mr),xs.subVectors(t.b,mr),_s.subVectors(t.c,mr),wi.subVectors(xs,vs),Ei.subVectors(_s,xs),Yi.subVectors(vs,_s);let e=[0,-wi.z,wi.y,0,-Ei.z,Ei.y,0,-Yi.z,Yi.y,wi.z,0,-wi.x,Ei.z,0,-Ei.x,Yi.z,0,-Yi.x,-wi.y,wi.x,0,-Ei.y,Ei.x,0,-Yi.y,Yi.x,0];return!Qa(e,vs,xs,_s,Kr)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,vs,xs,_s,Kr))?!1:(Jr.crossVectors(wi,Ei),e=[Jr.x,Jr.y,Jr.z],Qa(e,vs,xs,_s,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ni=[new R,new R,new R,new R,new R,new R,new R,new R],Dn=new R,Zr=new pi,vs=new R,xs=new R,_s=new R,wi=new R,Ei=new R,Yi=new R,mr=new R,Kr=new R,Jr=new R,$i=new R;function Qa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$i.fromArray(i,r);let a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),h=n.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ap=new pi,gr=new R,tl=new R,$n=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ap.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);let e=gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(tl)),this.expandByPoint(gr.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ii=new R,el=new R,jr=new R,Ti=new R,nl=new R,Qr=new R,il=new R,Oo=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){el.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(el);let r=t.distanceTo(e)*.5,o=-this.direction.dot(jr),a=Ti.dot(this.direction),l=-Ti.dot(jr),c=Ti.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(el).addScaledVector(jr,d),f}intersectSphere(t,e){ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){nl.subVectors(e,t),Qr.subVectors(n,t),il.crossVectors(nl,Qr);let o=this.direction.dot(il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);let l=a*this.direction.dot(Qr.crossVectors(Ti,Qr));if(l<0)return null;let c=a*this.direction.dot(nl.cross(Ti));if(c<0||l+c>o)return null;let h=-a*Ti.dot(il);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,y,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),o=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,y=c*u;e[0]=d+y*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,y=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rp,t,Cp)}lookAt(t,e,n){let s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ai.crossVectors(n,gn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ai.crossVectors(n,gn)),Ai.normalize(),to.crossVectors(gn,Ai),s[0]=Ai.x,s[4]=to.x,s[8]=gn.x,s[1]=Ai.y,s[5]=to.y,s[9]=gn.y,s[2]=Ai.z,s[6]=to.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],y=n[6],g=n[10],m=n[14],x=n[3],_=n[7],v=n[11],A=n[15],E=s[0],T=s[4],P=s[8],S=s[12],M=s[1],L=s[5],D=s[9],U=s[13],F=s[2],X=s[6],G=s[10],nt=s[14],q=s[3],ct=s[7],_t=s[11],Tt=s[15];return r[0]=o*E+a*M+l*F+c*q,r[4]=o*T+a*L+l*X+c*ct,r[8]=o*P+a*D+l*G+c*_t,r[12]=o*S+a*U+l*nt+c*Tt,r[1]=h*E+u*M+d*F+f*q,r[5]=h*T+u*L+d*X+f*ct,r[9]=h*P+u*D+d*G+f*_t,r[13]=h*S+u*U+d*nt+f*Tt,r[2]=p*E+y*M+g*F+m*q,r[6]=p*T+y*L+g*X+m*ct,r[10]=p*P+y*D+g*G+m*_t,r[14]=p*S+y*U+g*nt+m*Tt,r[3]=x*E+_*M+v*F+A*q,r[7]=x*T+_*L+v*X+A*ct,r[11]=x*P+_*D+v*G+A*_t,r[15]=x*S+_*U+v*nt+A*Tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],y=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+y*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],y=t[13],g=t[14],m=t[15],x=u*g*c-y*d*c+y*l*f-a*g*f-u*l*m+a*d*m,_=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,v=h*y*c-p*u*c+p*a*f-o*y*f-h*a*m+o*u*m,A=p*u*l-h*y*l-p*a*d+o*y*d+h*a*g-o*u*g,E=e*x+n*_+s*v+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=x*T,t[1]=(y*d*r-u*g*r-y*s*f+n*g*f+u*s*m-n*d*m)*T,t[2]=(a*g*r-y*l*r+y*s*c-n*g*c-a*s*m+n*l*m)*T,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*T,t[4]=_*T,t[5]=(h*g*r-p*d*r+p*s*f-e*g*f-h*s*m+e*d*m)*T,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*T,t[8]=v*T,t[9]=(p*u*r-h*y*r-p*n*f+e*y*f+h*n*m-e*u*m)*T,t[10]=(o*y*r-p*a*r+p*n*c-e*y*c-o*n*m+e*a*m)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*T,t[12]=A*T,t[13]=(h*y*s-p*u*s+p*n*d-e*y*d-h*n*g+e*u*g)*T,t[14]=(p*a*s-o*y*s-p*n*l+e*y*l+o*n*g-e*a*g)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,y=o*h,g=o*u,m=a*u,x=l*c,_=l*h,v=l*u,A=n.x,E=n.y,T=n.z;return s[0]=(1-(y+m))*A,s[1]=(f+v)*A,s[2]=(p-_)*A,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+m))*E,s[6]=(g+x)*E,s[7]=0,s[8]=(p+_)*T,s[9]=(g-x)*T,s[10]=(1-(d+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ms.set(s[0],s[1],s[2]).length(),o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);let c=1/r,h=1/o,u=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=hi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,p;if(a===hi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Lo)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=hi){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,p,y;if(a===hi)p=(o+r)*u,y=-2*u;else if(a===Lo)p=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ms=new R,Un=new jt,Rp=new R(0,0,0),Cp=new R(1,1,1),Ai=new R,to=new R,gn=new R,cu=new jt,hu=new Tn,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hu.setFromEuler(this),this.setFromQuaternion(hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Fo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pp=0,uu=new R,bs=new Tn,si=new jt,eo=new R,yr=new R,Ip=new R,Lp=new Tn,du=new R(1,0,0),fu=new R(0,1,0),pu=new R(0,0,1),mu={type:"added"},Dp={type:"removed"},Ss={type:"childadded",child:null},sl={type:"childremoved",child:null},Xe=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new An,n=new Tn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Yt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(du,t)}rotateY(t){return this.rotateOnAxis(fu,t)}rotateZ(t){return this.rotateOnAxis(pu,t)}translateOnAxis(t,e){return uu.copy(t).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(du,t)}translateY(t){return this.translateOnAxis(fu,t)}translateZ(t){return this.translateOnAxis(pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?eo.copy(t):eo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(yr,eo,this.up):si.lookAt(eo,yr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(si),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mu),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dp),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mu),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,Ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new R(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new R,ri=new R,rl=new R,oi=new R,ws=new R,Es=new R,gu=new R,ol=new R,al=new R,ll=new R,cl=new ye,hl=new ye,ul=new ye,Ii=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ri.subVectors(n,e),rl.subVectors(t,e);let o=Nn.dot(Nn),a=Nn.dot(ri),l=Nn.dot(rl),c=ri.dot(ri),h=ri.dot(rl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,n),ul.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(hl,r.y),o.addScaledVector(ul,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ri.subVectors(t,e),Nn.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Nn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ws.subVectors(s,n),Es.subVectors(r,n),ol.subVectors(t,n);let l=ws.dot(ol),c=Es.dot(ol);if(l<=0&&c<=0)return e.copy(n);al.subVectors(t,s);let h=ws.dot(al),u=Es.dot(al);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ws,o);ll.subVectors(t,r);let f=ws.dot(ll),p=Es.dot(ll);if(p>=0&&f<=p)return e.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Es,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return gu.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(gu,a);let m=1/(g+y+d);return o=y*m,a=d*m,e.copy(n).addScaledVector(ws,o).addScaledVector(Es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},no={h:0,s:0,l:0};function dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=_p(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=dl(o,r,t+1/3),this.g=dl(o,r,t),this.b=dl(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let n=Md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return ie.fromWorkingColorSpace(nn.copy(this),t),Math.round(je(nn.r*255,0,255))*65536+Math.round(je(nn.g*255,0,255))*256+Math.round(je(nn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=hn){ie.fromWorkingColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,s=nn.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(no);let n=Za(Ri.h,no.h,e),s=Za(Ri.s,no.s,e),r=Za(Ri.l,no.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Ut;Ut.NAMES=Md;var Up=0,mi=class extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=ui(),this.name="",this.blending=Os,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rl&&(n.blendSrc=this.blendSrc),this.blendDst!==Cl&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ce=class extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new R,io=new J,Ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}};var Bo=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ho=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Np=0,wn=new jt,fl=new Xe,Ts=new R,yn=new pi,vr=new pi,Ke=new R,Pe=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_d(t)?Ho:Bo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return fl.lookAt(t),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(yn.min,vr.min),yn.expandByPoint(Ke),Ke.addVectors(yn.max,vr.max),yn.expandByPoint(Ke)):(yn.expandByPoint(vr.min),yn.expandByPoint(vr.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ke.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),Ke.add(Ts)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new R,l[P]=new R;let c=new R,h=new R,u=new R,d=new J,f=new J,p=new J,y=new R,g=new R;function m(P,S,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),a[P].add(y),a[S].add(y),a[M].add(y),l[P].add(g),l[S].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,S=x.length;P<S;++P){let M=x[P],L=M.start,D=M.count;for(let U=L,F=L+D;U<F;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let _=new R,v=new R,A=new R,E=new R;function T(P){A.fromBufferAttribute(s,P),E.copy(A);let S=a[P];_.copy(S),_.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(E,S);let L=v.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,L)}for(let P=0,S=x.length;P<S;++P){let M=x[P],L=M.start,D=M.count;for(let U=L,F=L+D;U<F;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yu=new jt,Zi=new Oo,so=new $n,vu=new R,ro=new R,oo=new R,ao=new R,pl=new R,lo=new R,xu=new R,co=new R,V=class extends Xe{constructor(t=new Pe,e=new ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(pl.fromBufferAttribute(u,t),o?lo.addScaledVector(pl,h):lo.addScaledVector(pl.sub(e),h))}e.add(lo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(so.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(so,vu)===null||Zi.origin.distanceToSquared(vu)>(t.far-t.near)**2))&&(yu.copy(r).invert(),Zi.copy(t.ray).applyMatrix4(yu),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let g=d[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,A=_;v<A;v+=3){let E=a.getX(v),T=a.getX(v+1),P=a.getX(v+2);s=ho(this,m,t,n,c,h,u,E,T,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let x=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=ho(this,o,t,n,c,h,u,x,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let g=d[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,A=_;v<A;v+=3){let E=v,T=v+1,P=v+2;s=ho(this,m,t,n,c,h,u,E,T,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let x=g,_=g+1,v=g+2;s=ho(this,o,t,n,c,h,u,x,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function kp(i,t,e,n,s,r,o,a){let l;if(t.side===un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ui,a),l===null)return null;co.copy(a),co.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(co);return c<e.near||c>e.far?null:{distance:c,point:co.clone(),object:i}}function ho(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ro),i.getVertexPosition(l,oo),i.getVertexPosition(c,ao);let h=kp(i,t,e,n,ro,oo,ao,xu);if(h){let u=new R;Ii.getBarycoord(xu,ro,oo,ao,u),s&&(h.uv=Ii.getInterpolatedAttribute(s,a,l,c,u,new J)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,a,l,c,u,new J)),o&&(h.normal=Ii.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};Ii.getNormal(ro,oo,ao,d.normal),h.face=d,h.barycoord=u}return h}var ae=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function p(y,g,m,x,_,v,A,E,T,P,S){let M=v/T,L=A/P,D=v/2,U=A/2,F=E/2,X=T+1,G=P+1,nt=0,q=0,ct=new R;for(let _t=0;_t<G;_t++){let Tt=_t*L-U;for(let Wt=0;Wt<X;Wt++){let he=Wt*M-D;ct[y]=he*x,ct[g]=Tt*_,ct[m]=F,c.push(ct.x,ct.y,ct.z),ct[y]=0,ct[g]=0,ct[m]=E>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Wt/T),u.push(1-_t/P),nt+=1}}for(let _t=0;_t<P;_t++)for(let Tt=0;Tt<T;Tt++){let Wt=d+Tt+X*_t,he=d+Tt+X*(_t+1),K=d+(Tt+1)+X*(_t+1),rt=d+(Tt+1)+X*_t;l.push(Wt,he,rt),l.push(he,K,rt),q+=6}a.addGroup(f,q,S),f+=q,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=qs(i[e]);for(let s in n)t[s]=n[s]}return t}function Op(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Fi={clone:qs,merge:on},Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qe=class extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=Op(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zo=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ci=new R,_u=new J,Mu=new J,Qe=class extends zo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,_u,Mu),e.subVectors(Mu,_u)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($a*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},As=-90,Rs=1,yc=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(As,Rs,t,e);s.layers=this.layers,this.add(s);let r=new Qe(As,Rs,t,e);r.layers=this.layers,this.add(r);let o=new Qe(As,Rs,t,e);o.layers=this.layers,this.add(o);let a=new Qe(As,Rs,t,e);a.layers=this.layers,this.add(a);let l=new Qe(As,Rs,t,e);l.layers=this.layers,this.add(l);let c=new Qe(As,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Go=class extends dn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vc=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Go(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ae(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Yn});r.uniforms.tEquirect.value=e;let o=new V(s,r),a=e.minFilter;return e.minFilter===ns&&(e.minFilter=Xn),new yc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ml=new R,Hp=new R,zp=new Yt,li=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ml.subVectors(n,e).cross(Hp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||zp.getNormalMatrix(t),s=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new $n,uo=new R,ss=class{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],y=s[10],g=s[11],m=s[12],x=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,g-f,v-m).normalize(),n[1].setComponents(l+r,d+c,g+f,v+m).normalize(),n[2].setComponents(l+o,d+h,g+p,v+x).normalize(),n[3].setComponents(l-o,d-h,g-p,v-x).normalize(),n[4].setComponents(l-a,d-u,g-y,v-_).normalize(),e===hi)n[5].setComponents(l+a,d+u,g+y,v+_).normalize();else if(e===Lo)n[5].setComponents(a,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(uo.x=s.normal.x>0?t.max.x:t.min.x,uo.y=s.normal.y>0?t.max.y:t.min.y,uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],y=u[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ht=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],y=[],g=[];for(let m=0;m<h;m++){let x=m*d-o;for(let _=0;_<c;_++){let v=_*u-r;p.push(v,-x,0),y.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let _=x+c*m,v=x+c*(m+1),A=x+1+c*(m+1),E=x+1+c*m;f.push(_,v,E),f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(y,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,im=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,a0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Vp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:qp,alphatest_fragment:Yp,alphatest_pars_fragment:$p,aomap_fragment:Zp,aomap_pars_fragment:Kp,batching_pars_vertex:Jp,batching_vertex:jp,begin_vertex:Qp,beginnormal_vertex:tm,bsdfs:em,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:om,clipping_planes_vertex:am,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:hm,color_vertex:um,common:dm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:ym,emissivemap_pars_fragment:vm,colorspace_fragment:xm,colorspace_pars_fragment:_m,envmap_fragment:Mm,envmap_common_pars_fragment:bm,envmap_pars_fragment:Sm,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Nm,envmap_vertex:Em,fog_vertex:Tm,fog_pars_vertex:Am,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Im,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Um,lights_toon_fragment:km,lights_toon_pars_fragment:Om,lights_phong_fragment:Fm,lights_phong_pars_fragment:Bm,lights_physical_fragment:Hm,lights_physical_pars_fragment:zm,lights_fragment_begin:Gm,lights_fragment_maps:Vm,lights_fragment_end:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:$m,map_fragment:Zm,map_pars_fragment:Km,map_particle_fragment:Jm,map_particle_pars_fragment:jm,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:t0,morphinstance_vertex:e0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:o0,normal_fragment_maps:a0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:y0,premultiplied_alpha_fragment:v0,project_vertex:x0,dithering_fragment:_0,dithering_pars_fragment:M0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:E0,shadowmap_vertex:T0,shadowmask_pars_fragment:A0,skinbase_vertex:R0,skinning_pars_vertex:C0,skinning_vertex:P0,skinnormal_vertex:I0,specularmap_fragment:L0,specularmap_pars_fragment:D0,tonemapping_fragment:U0,tonemapping_pars_fragment:N0,transmission_fragment:k0,transmission_pars_fragment:O0,uv_pars_fragment:F0,uv_pars_vertex:B0,uv_vertex:H0,worldpos_vertex:z0,background_vert:G0,background_frag:V0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:Y0,depth_vert:$0,depth_frag:Z0,distanceRGBA_vert:K0,distanceRGBA_frag:J0,equirect_vert:j0,equirect_frag:Q0,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:yg,shadow_vert:vg,shadow_frag:xg,sprite_vert:_g,sprite_frag:Mg},ut={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Vn={basic:{uniforms:on([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:on([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:on([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:on([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:on([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:on([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:on([ut.points,ut.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:on([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:on([ut.common,ut.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:on([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:on([ut.sprite,ut.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:on([ut.common,ut.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:on([ut.lights,ut.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Vn.physical={uniforms:on([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var fo={r:0,b:0,g:0},Ji=new An,bg=new jt;function Sg(i,t,e,n,s,r,o){let a=new Ut(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function y(x){let _=!1,v=p(x);v===null?m(a,l):v&&v.isColor&&(m(v,1),_=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,_){let v=p(_);v&&(v.isCubeTexture||v.mapping===oa)?(h===void 0&&(h=new V(new ae(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:qs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ji.copy(_.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Ji)),h.material.toneMapped=ie.getTransfer(v.colorSpace)!==fe,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new V(new Ht(2,2),new qe({name:"BackgroundMaterial",uniforms:qs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,_){x.getRGB(fo,bd(i)),n.buffers.color.setClear(fo.r,fo.g,fo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:y,addToRenderList:g}}function wg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,L,D,U,F){let X=!1,G=u(U,D,L);r!==G&&(r=G,c(r.object)),X=f(M,U,D,F),X&&p(M,U,D,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(M,L,D,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,D){let U=D.wireframe===!0,F=n[M.id];F===void 0&&(F={},n[M.id]=F);let X=F[L.id];X===void 0&&(X={},F[L.id]=X);let G=X[U];return G===void 0&&(G=d(l()),X[U]=G),G}function d(M){let L=[],D=[],U=[];for(let F=0;F<e;F++)L[F]=0,D[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,L,D,U){let F=r.attributes,X=L.attributes,G=0,nt=D.getAttributes();for(let q in nt)if(nt[q].location>=0){let _t=F[q],Tt=X[q];if(Tt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),_t===void 0||_t.attribute!==Tt||Tt&&_t.data!==Tt.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function p(M,L,D,U){let F={},X=L.attributes,G=0,nt=D.getAttributes();for(let q in nt)if(nt[q].location>=0){let _t=X[q];_t===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));let Tt={};Tt.attribute=_t,_t&&_t.data&&(Tt.data=_t.data),F[q]=Tt,G++}r.attributes=F,r.attributesNum=G,r.index=U}function y(){let M=r.newAttributes;for(let L=0,D=M.length;L<D;L++)M[L]=0}function g(M){m(M,0)}function m(M,L){let D=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;D[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),F[M]!==L&&(i.vertexAttribDivisor(M,L),F[M]=L)}function x(){let M=r.newAttributes,L=r.enabledAttributes;for(let D=0,U=L.length;D<U;D++)L[D]!==M[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function _(M,L,D,U,F,X,G){G===!0?i.vertexAttribIPointer(M,L,D,F,X):i.vertexAttribPointer(M,L,D,U,F,X)}function v(M,L,D,U){y();let F=U.attributes,X=D.getAttributes(),G=L.defaultAttributeValues;for(let nt in X){let q=X[nt];if(q.location>=0){let ct=F[nt];if(ct===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){let _t=ct.normalized,Tt=ct.itemSize,Wt=t.get(ct);if(Wt===void 0)continue;let he=Wt.buffer,K=Wt.type,rt=Wt.bytesPerElement,At=K===i.INT||K===i.UNSIGNED_INT||ct.gpuType===oh;if(ct.isInterleavedBufferAttribute){let at=ct.data,Nt=at.stride,Gt=ct.offset;if(at.isInstancedInterleavedBuffer){for(let Bt=0;Bt<q.locationSize;Bt++)m(q.location+Bt,at.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Bt=0;Bt<q.locationSize;Bt++)g(q.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,he);for(let Bt=0;Bt<q.locationSize;Bt++)_(q.location+Bt,Tt/q.locationSize,K,_t,Nt*rt,(Gt+Tt/q.locationSize*Bt)*rt,At)}else{if(ct.isInstancedBufferAttribute){for(let at=0;at<q.locationSize;at++)m(q.location+at,ct.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let at=0;at<q.locationSize;at++)g(q.location+at);i.bindBuffer(i.ARRAY_BUFFER,he);for(let at=0;at<q.locationSize;at++)_(q.location+at,Tt/q.locationSize,K,_t,Tt*rt,Tt/q.locationSize*at*rt,At)}}else if(G!==void 0){let _t=G[nt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(q.location,_t);break;case 3:i.vertexAttrib3fv(q.location,_t);break;case 4:i.vertexAttrib4fv(q.location,_t);break;default:i.vertexAttrib1fv(q.location,_t)}}}}x()}function A(){P();for(let M in n){let L=n[M];for(let D in L){let U=L[D];for(let F in U)h(U[F].object),delete U[F];delete L[D]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let D in L){let U=L[D];for(let F in U)h(U[F].object),delete U[F];delete L[D]}delete n[M.id]}function T(M){for(let L in n){let D=n[L];if(D[M.id]===void 0)continue;let U=D[M.id];for(let F in U)h(U[F].object),delete U[F];delete D[M.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function Eg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let y=0;y<u;y++)p+=h[y]*d[y];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==kn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let P=T===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==fi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==qn&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:A,maxSamples:E}}function Ag(i){let t=this,e=null,n=0,s=!1,r=!1,o=new li,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let x=r?0:n,_=x*4,v=m.clippingState||null;l.value=v,v=h(p,d,_,f);for(let A=0;A!==_;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=f+y*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=f;_!==y;++_,v+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function Rg(i){let t=new WeakMap;function e(o,a){return a===Ol?o.mapping=Gs:a===Fl&&(o.mapping=Vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ol||a===Fl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new vc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ys=class extends zo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ns=4,bu=[.125,.215,.35,.446,.526,.582],es=20,gl=new Ys,Su=new Ut,yl=null,vl=0,xl=0,_l=!1,Qi=(1+Math.sqrt(5))/2,Cs=1/Qi,wu=[new R(-Qi,Cs,0),new R(Qi,Cs,0),new R(-Cs,0,Qi),new R(Cs,0,Qi),new R(0,Qi,-Cs),new R(0,Qi,Cs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Vo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,vl,xl),this._renderer.xr.enabled=_l,t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Bn,format:kn,colorSpace:ir,depthBuffer:!1},s=Eu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Pg(r,t,e)}return s}_compileMaterial(t){let e=new V(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,n,s){let a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Su),h.toneMapping=Li,h.autoClear=!1;let f=new ce({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),p=new V(new ae,f),y=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,y=!0):(f.color.copy(Su),y=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let _=this._cubeSize;po(s,x*_,m>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gs||t.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new V(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;po(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,gl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wu[(s-r-1)%wu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new V(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),y=r/p,g=isFinite(r)?1+Math.floor(h*y):es;g>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);let m=[],x=0;for(let T=0;T<es;++T){let P=T/y,S=Math.exp(-P*P/2);m.push(S),T===0?x+=S:T<g&&(x+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;let v=this._sizeLods[s],A=3*v*(s>_-Ns?s-_+Ns:0),E=4*(this._cubeSize-v);po(e,A,E,3*v,2*v),l.setRenderTarget(e),l.render(u,gl)}};function Cg(i){let t=[],e=[],n=[],s=i,r=i-Ns+1+bu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ns?l=bu[o-i+Ns-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,y=3,g=2,m=1,x=new Float32Array(y*p*f),_=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let E=0;E<f;E++){let T=E%3*2/3-1,P=E>2?0:-1,S=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(S,y*p*E),_.set(d,g*p*E);let M=[E,E,E,E,E,E];v.set(M,m*p*E)}let A=new Pe;A.setAttribute("position",new Ge(x,y)),A.setAttribute("uv",new Ge(_,g)),A.setAttribute("faceIndex",new Ge(v,m)),t.push(A),s>Ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Eu(i,t,e){let n=new an(i,t,e);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pg(i,t,e){let n=new Float32Array(es),s=new R(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Tu(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Au(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function fh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ig(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ol||l===Fl,h=l===Gs||l===Vs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Vo(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Vo(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Lg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let y=d.morphAttributes[p];for(let g=0,m=y.length;g<m;g++)t.remove(y[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let y=f[p];for(let g=0,m=y.length;g<m;g++)t.update(y[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let _=0,v=x.length;_<v;_+=3){let A=x[_+0],E=x[_+1],T=x[_+2];d.push(A,E,E,T,T,A)}}else if(p!==void 0){let x=p.array;y=p.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let A=_+0,E=_+1,T=_+2;d.push(A,E,E,T,T,A)}}else return;let g=new(_d(d)?Ho:Bo)(d,1);g.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ug(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,y){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,p);let m=0;for(let x=0;x<p;x++)m+=f[x]*y[x];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ng(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kg(i,t,e){let n=new WeakMap,s=new ye;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),y===!0&&(_=3);let v=a.attributes.position.count*_,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*A*4*u),T=new ko(E,v,A,u);T.type=qn,T.needsUpdate=!0;let P=_*4;for(let M=0;M<u;M++){let L=g[M],D=m[M],U=x[M],F=v*A*4*M;for(let X=0;X<L.count;X++){let G=X*P;f===!0&&(s.fromBufferAttribute(L,X),E[F+G+0]=s.x,E[F+G+1]=s.y,E[F+G+2]=s.z,E[F+G+3]=0),p===!0&&(s.fromBufferAttribute(D,X),E[F+G+4]=s.x,E[F+G+5]=s.y,E[F+G+6]=s.z,E[F+G+7]=0),y===!0&&(s.fromBufferAttribute(U,X),E[F+G+8]=s.x,E[F+G+9]=s.y,E[F+G+10]=s.z,E[F+G+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new J(v,A)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Og(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Wo=class extends dn{constructor(t,e,n,s,r,o,a,l,c,h=Fs){if(h!==Fs&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fs&&(n=is),n===void 0&&h===Xs&&(n=Ws),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wd=new dn,Ru=new Wo(1,1),Ed=new ko,Td=new gc,Ad=new Go,Cu=[],Pu=[],Iu=new Float32Array(16),Lu=new Float32Array(9),Du=new Float32Array(4);function sr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Cu[s];if(r===void 0&&(r=new Float32Array(s),Cu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function la(i,t){let e=Pu[t];e===void 0&&(e=new Int32Array(t),Pu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function Gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;Du.set(n),i.uniformMatrix2fv(this.addr,!1,Du),$e(e,n)}}function Vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;Lu.set(n),i.uniformMatrix3fv(this.addr,!1,Lu),$e(e,n)}}function Wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;Iu.set(n),i.uniformMatrix4fv(this.addr,!1,Iu),$e(e,n)}}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function Zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function Qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ru.compareFunction=xd,r=Ru):r=wd,e.setTexture2D(t||r,s)}function ty(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Td,s)}function ey(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ad,s)}function ny(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ed,s)}function iy(i){switch(i){case 5126:return Fg;case 35664:return Bg;case 35665:return Hg;case 35666:return zg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return $g;case 5125:return Zg;case 36294:return Kg;case 36295:return Jg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ny}}function sy(i,t){i.uniform1fv(this.addr,t)}function ry(i,t){let e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function oy(i,t){let e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function ay(i,t){let e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function ly(i,t){let e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cy(i,t){let e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hy(i,t){let e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function uy(i,t){i.uniform1iv(this.addr,t)}function dy(i,t){i.uniform2iv(this.addr,t)}function fy(i,t){i.uniform3iv(this.addr,t)}function py(i,t){i.uniform4iv(this.addr,t)}function my(i,t){i.uniform1uiv(this.addr,t)}function gy(i,t){i.uniform2uiv(this.addr,t)}function yy(i,t){i.uniform3uiv(this.addr,t)}function vy(i,t){i.uniform4uiv(this.addr,t)}function xy(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wd,r[o])}function _y(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Td,r[o])}function My(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ad,r[o])}function by(i,t,e){let n=this.cache,s=t.length,r=la(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ed,r[o])}function Sy(i){switch(i){case 5126:return sy;case 35664:return ry;case 35665:return oy;case 35666:return ay;case 35674:return ly;case 35675:return cy;case 35676:return hy;case 5124:case 35670:return uy;case 35667:case 35671:return dy;case 35668:case 35672:return fy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return yy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return by}}var xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=iy(e.type)}},_c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sy(e.type)}},Mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ml=/(\w+)(\])?(\[|\.)?/g;function Uu(i,t){i.seq.push(t),i.map[t.id]=t}function wy(i,t,e){let n=i.name,s=n.length;for(Ml.lastIndex=0;;){let r=Ml.exec(n),o=Ml.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Uu(e,c===void 0?new xc(a,i,t):new _c(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Mc(a),Uu(e,u)),e=u}}}var Hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);wy(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Nu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ey=37297,Ty=0;function Ay(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ku=new Yt;function Ry(i){ie._getMatrix(ku,ie.workingColorSpace,i);let t=`mat3( ${ku.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case aa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ou(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ay(i.getShaderSource(t),o)}else return s}function Cy(i,t){let e=Ry(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Py(i,t){let e;switch(t){case eh:e="Linear";break;case nh:e="Reinhard";break;case ih:e="Cineon";break;case zr:e="ACESFilmic";break;case sh:e="AgX";break;case rh:e="Neutral";break;case lp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mo=new R;function Iy(){ie.getLuminanceCoefficients(mo);let i=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function Dy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Uy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Tr(i){return i!==""}function Fu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(Ny,Oy)}var ky=new Map;function Oy(i,t){let e=Zt[t];if(e===void 0){let n=ky.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bc(e)}var Fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(i){return i.replace(Fy,By)}function By(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===od?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===th?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function zy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Vs:t="ENVMAP_TYPE_CUBE";break;case oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function Vy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ad:t="ENVMAP_BLENDING_MULTIPLY";break;case op:t="ENVMAP_BLENDING_MIX";break;case ap:t="ENVMAP_BLENDING_ADD";break}return t}function Wy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xy(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Hy(e),c=zy(e),h=Gy(e),u=Vy(e),d=Wy(e),f=Ly(e),p=Dy(r),y=s.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Tr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Tr).join(`
`),m.length>0&&(m+=`
`)):(g=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),m=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Li?Py("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Cy("linearToOutputTexel",e.outputColorSpace),Iy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tr).join(`
`)),o=bc(o),o=Fu(o,e),o=Bu(o,e),a=bc(a),a=Fu(a,e),a=Bu(a,e),o=Hu(o),a=Hu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+o,v=x+m+a,A=Nu(s,s.VERTEX_SHADER,_),E=Nu(s,s.FRAGMENT_SHADER,v);s.attachShader(y,A),s.attachShader(y,E),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(L){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(y).trim(),U=s.getShaderInfoLog(A).trim(),F=s.getShaderInfoLog(E).trim(),X=!0,G=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,E);else{let nt=Ou(s,A,"vertex"),q=Ou(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+nt+`
`+q)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||F==="")&&(G=!1);G&&(L.diagnostics={runnable:X,programLog:D,vertexShader:{log:U,prefix:g},fragmentShader:{log:F,prefix:m}})}s.deleteShader(A),s.deleteShader(E),P=new Hs(s,y),S=Uy(s,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Ey)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ty++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=E,this}var qy=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wc(t),e.set(t,n)),n}},wc=class{constructor(t){this.id=qy++,this.code=t,this.usedTimes=0}};function Yy(i,t,e,n,s,r,o){let a=new Fo,l=new Sc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,L,D,U){let F=D.fog,X=U.geometry,G=S.isMeshStandardMaterial?D.environment:null,nt=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),q=nt&&nt.mapping===oa?nt.image.height:null,ct=p[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let _t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Tt=_t!==void 0?_t.length:0,Wt=0;X.morphAttributes.position!==void 0&&(Wt=1),X.morphAttributes.normal!==void 0&&(Wt=2),X.morphAttributes.color!==void 0&&(Wt=3);let he,K,rt,At;if(ct){let pe=Vn[ct];he=pe.vertexShader,K=pe.fragmentShader}else he=S.vertexShader,K=S.fragmentShader,l.update(S),rt=l.getVertexShaderID(S),At=l.getFragmentShaderID(S);let at=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Gt=U.isInstancedMesh===!0,Bt=U.isBatchedMesh===!0,oe=!!S.map,Q=!!S.matcap,st=!!nt,I=!!S.aoMap,Lt=!!S.lightMap,et=!!S.bumpMap,St=!!S.normalMap,lt=!!S.displacementMap,Ot=!!S.emissiveMap,Mt=!!S.metalnessMap,C=!!S.roughnessMap,b=S.anisotropy>0,B=S.clearcoat>0,$=S.dispersion>0,tt=S.iridescence>0,Z=S.sheen>0,Rt=S.transmission>0,pt=b&&!!S.anisotropyMap,bt=B&&!!S.clearcoatMap,Qt=B&&!!S.clearcoatNormalMap,it=B&&!!S.clearcoatRoughnessMap,wt=tt&&!!S.iridescenceMap,Ft=tt&&!!S.iridescenceThicknessMap,zt=Z&&!!S.sheenColorMap,Et=Z&&!!S.sheenRoughnessMap,se=!!S.specularMap,$t=!!S.specularColorMap,xe=!!S.specularIntensityMap,N=Rt&&!!S.transmissionMap,mt=Rt&&!!S.thicknessMap,Y=!!S.gradientMap,j=!!S.alphaMap,xt=S.alphaTest>0,gt=!!S.alphaHash,Xt=!!S.extensions,ke=Li;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ke=i.toneMapping);let tn={shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:he,fragmentShader:K,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:At,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&U._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&U.instanceColor!==null,instancingMorph:Gt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ir,alphaToCoverage:!!S.alphaToCoverage,map:oe,matcap:Q,envMap:st,envMapMode:st&&nt.mapping,envMapCubeUVHeight:q,aoMap:I,lightMap:Lt,bumpMap:et,normalMap:St,displacementMap:d&&lt,emissiveMap:Ot,normalMapObjectSpace:St&&S.normalMapType===dp,normalMapTangentSpace:St&&S.normalMapType===vd,metalnessMap:Mt,roughnessMap:C,anisotropy:b,anisotropyMap:pt,clearcoat:B,clearcoatMap:bt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:it,dispersion:$,iridescence:tt,iridescenceMap:wt,iridescenceThicknessMap:Ft,sheen:Z,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:se,specularColorMap:$t,specularIntensityMap:xe,transmission:Rt,transmissionMap:N,thicknessMap:mt,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Os&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:xt,alphaHash:gt,combine:S.combine,mapUv:oe&&y(S.map.channel),aoMapUv:I&&y(S.aoMap.channel),lightMapUv:Lt&&y(S.lightMap.channel),bumpMapUv:et&&y(S.bumpMap.channel),normalMapUv:St&&y(S.normalMap.channel),displacementMapUv:lt&&y(S.displacementMap.channel),emissiveMapUv:Ot&&y(S.emissiveMap.channel),metalnessMapUv:Mt&&y(S.metalnessMap.channel),roughnessMapUv:C&&y(S.roughnessMap.channel),anisotropyMapUv:pt&&y(S.anisotropyMap.channel),clearcoatMapUv:bt&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&y(S.sheenRoughnessMap.channel),specularMapUv:se&&y(S.specularMap.channel),specularColorMapUv:$t&&y(S.specularColorMap.channel),specularIntensityMapUv:xe&&y(S.specularIntensityMap.channel),transmissionMapUv:N&&y(S.transmissionMap.channel),thicknessMapUv:mt&&y(S.thicknessMap.channel),alphaMapUv:j&&y(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(St||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(oe||j),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:oe&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===fe,decodeVideoTextureEmissive:Ot&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Be,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Xt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&S.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return tn.vertexUv1s=c.has(1),tn.vertexUv2s=c.has(2),tn.vertexUv3s=c.has(3),c.clear(),tn}function m(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(x(M,S),_(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let M=p[S.type],L;if(M){let D=Vn[M];L=Fi.clone(D.uniforms)}else L=S.uniforms;return L}function A(S,M){let L;for(let D=0,U=h.length;D<U;D++){let F=h[D];if(F.cacheKey===M){L=F,++L.usedTimes;break}}return L===void 0&&(L=new Xy(i,M,S,r),h.push(L)),L}function E(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:P}}function $y(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,p,y,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:y,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=y,m.group=g),t++,m}function a(u,d,f,p,y,g){let m=o(u,d,f,p,y,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,p,y,g){let m=o(u,d,f,p,y,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Zy),n.length>1&&n.sort(d||Gu),s.length>1&&s.sort(d||Gu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ky(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Vu,i.set(n,[o])):s>=r.length?(o=new Vu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ut};break;case"SpotLight":e={position:new R,direction:new R,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function jy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Qy=0;function tv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ev(i){let t=new Jy,e=jy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new jt,o=new jt;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,y=0,g=0,m=0,x=0,_=0,v=0,A=0,E=0,T=0;c.sort(tv);for(let S=0,M=c.length;S<M;S++){let L=c[S],D=L.color,U=L.intensity,F=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=D.r*U,u+=D.g*U,d+=D.b*U;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],U);T++}else if(L.isDirectionalLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,q=e.get(L);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=L.shadow.matrix,x++}n.directional[f]=G,f++}else if(L.isSpotLight){let G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(D).multiplyScalar(U),G.distance=F,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[y]=G;let nt=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,nt.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[y]=nt.matrix,L.castShadow){let q=e.get(L);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=X,v++}y++}else if(L.isRectAreaLight){let G=t.get(L);G.color.copy(D).multiplyScalar(U),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=G,g++}else if(L.isPointLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let nt=L.shadow,q=e.get(L);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,q.shadowCameraNear=nt.camera.near,q.shadowCameraFar=nt.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=L.shadow.matrix,_++}n.point[p]=G,p++}else if(L.isHemisphereLight){let G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(U),G.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[m]=G,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==x||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==A||P.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,P.directionalLength=f,P.pointLength=p,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=x,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=A,P.numLightProbes=T,n.version=Qy++)}function l(c,h){let u=0,d=0,f=0,p=0,y=0,g=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let _=c[m];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function Wu(i){let t=new ev(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Wu(i),t.set(s,[a])):r>=o.length?(a=new Wu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ec=class extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tc=class extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rv(i,t,e){let n=new ss,s=new J,r=new J,o=new ye,a=new Ec({depthPacking:up}),l=new Tc,c={},h=e.maxTextureSize,u={[Ui]:un,[un]:Ui,[Be]:Be},d=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Pe;p.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new V(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=od;let m=this.type;this.render=function(E,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Yn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=m!==ai&&this.type===ai,F=m===ai&&this.type!==ai;for(let X=0,G=E.length;X<G;X++){let nt=E[X],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ct=q.getFrameExtents();if(s.multiply(ct),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,q.mapSize.y=r.y)),q.map===null||U===!0||F===!0){let Tt=this.type!==ai?{minFilter:vn,magFilter:vn}:{};q.map!==null&&q.map.dispose(),q.map=new an(s.x,s.y,Tt),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let _t=q.getViewportCount();for(let Tt=0;Tt<_t;Tt++){let Wt=q.getViewport(Tt);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),D.viewport(o),q.updateMatrices(nt,Tt),n=q.getFrustum(),v(T,P,q.camera,nt,this.type)}q.isPointLightShadow!==!0&&this.type===ai&&x(q,P),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,M,L)};function x(E,T){let P=t.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new an(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,P,d,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,P,f,y,null)}function _(E,T,P,S){let M=null,L=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let D=M.uuid,U=T.uuid,F=c[D];F===void 0&&(F={},c[D]=F);let X=F[U];X===void 0&&(X=M.clone(),F[U]=X,T.addEventListener("dispose",A)),M=X}if(M.visible=T.visible,M.wireframe=T.wireframe,S===ai?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=i.properties.get(M);D.light=P}return M}function v(E,T,P,S,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ai)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let U=t.update(E),F=E.material;if(Array.isArray(F)){let X=U.groups;for(let G=0,nt=X.length;G<nt;G++){let q=X[G],ct=F[q.materialIndex];if(ct&&ct.visible){let _t=_(E,ct,S,M);E.onBeforeShadow(i,E,T,P,U,_t,q),i.renderBufferDirect(P,null,U,_t,E,q),E.onAfterShadow(i,E,T,P,U,_t,q)}}}else if(F.visible){let X=_(E,F,S,M);E.onBeforeShadow(i,E,T,P,U,X,null),i.renderBufferDirect(P,null,U,X,E,null),E.onAfterShadow(i,E,T,P,U,X,null)}}let D=E.children;for(let U=0,F=D.length;U<F;U++)v(D[U],T,P,S,M)}function A(E){E.target.removeEventListener("dispose",A);for(let P in c){let S=c[P],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var ov={[Pl]:Il,[Ll]:Nl,[Dl]:kl,[zs]:Ul,[Il]:Pl,[Nl]:Ll,[kl]:Dl,[Ul]:zs};function av(i,t){function e(){let N=!1,mt=new ye,Y=null,j=new ye(0,0,0,0);return{setMask:function(xt){Y!==xt&&!N&&(i.colorMask(xt,xt,xt,xt),Y=xt)},setLocked:function(xt){N=xt},setClear:function(xt,gt,Xt,ke,tn){tn===!0&&(xt*=ke,gt*=ke,Xt*=ke),mt.set(xt,gt,Xt,ke),j.equals(mt)===!1&&(i.clearColor(xt,gt,Xt,ke),j.copy(mt))},reset:function(){N=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let N=!1,mt=!1,Y=null,j=null,xt=null;return{setReversed:function(gt){if(mt!==gt){let Xt=t.get("EXT_clip_control");mt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);let ke=xt;xt=null,this.setClear(ke)}mt=gt},getReversed:function(){return mt},setTest:function(gt){gt?at(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(gt){Y!==gt&&!N&&(i.depthMask(gt),Y=gt)},setFunc:function(gt){if(mt&&(gt=ov[gt]),j!==gt){switch(gt){case Pl:i.depthFunc(i.NEVER);break;case Il:i.depthFunc(i.ALWAYS);break;case Ll:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case Dl:i.depthFunc(i.EQUAL);break;case Ul:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=gt}},setLocked:function(gt){N=gt},setClear:function(gt){xt!==gt&&(mt&&(gt=1-gt),i.clearDepth(gt),xt=gt)},reset:function(){N=!1,Y=null,j=null,xt=null,mt=!1}}}function s(){let N=!1,mt=null,Y=null,j=null,xt=null,gt=null,Xt=null,ke=null,tn=null;return{setTest:function(pe){N||(pe?at(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(pe){mt!==pe&&!N&&(i.stencilMask(pe),mt=pe)},setFunc:function(pe,In,ti){(Y!==pe||j!==In||xt!==ti)&&(i.stencilFunc(pe,In,ti),Y=pe,j=In,xt=ti)},setOp:function(pe,In,ti){(gt!==pe||Xt!==In||ke!==ti)&&(i.stencilOp(pe,In,ti),gt=pe,Xt=In,ke=ti)},setLocked:function(pe){N=pe},setClear:function(pe){tn!==pe&&(i.clearStencil(pe),tn=pe)},reset:function(){N=!1,mt=null,Y=null,j=null,xt=null,gt=null,Xt=null,ke=null,tn=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,y=!1,g=null,m=null,x=null,_=null,v=null,A=null,E=null,T=new Ut(0,0,0),P=0,S=!1,M=null,L=null,D=null,U=null,F=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=nt>=2);let ct=null,_t={},Tt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),he=new ye().fromArray(Tt),K=new ye().fromArray(Wt);function rt(N,mt,Y,j){let xt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(N,gt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<Y;Xt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(mt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return gt}let At={};At[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(zs),et(!1),St($h),at(i.CULL_FACE),I(Yn);function at(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Nt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Gt(N,mt){return u[N]!==mt?(i.bindFramebuffer(N,mt),u[N]=mt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Bt(N,mt){let Y=f,j=!1;if(N){Y=d.get(mt),Y===void 0&&(Y=[],d.set(mt,Y));let xt=N.textures;if(Y.length!==xt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Xt=xt.length;gt<Xt;gt++)Y[gt]=i.COLOR_ATTACHMENT0+gt;Y.length=xt.length,j=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,j=!0);j&&i.drawBuffers(Y)}function oe(N){return p!==N?(i.useProgram(N),p=N,!0):!1}let Q={[ts]:i.FUNC_ADD,[Vf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};Q[Xf]=i.MIN,Q[qf]=i.MAX;let st={[Yf]:i.ZERO,[$f]:i.ONE,[Zf]:i.SRC_COLOR,[Rl]:i.SRC_ALPHA,[ep]:i.SRC_ALPHA_SATURATE,[Qf]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[Cl]:i.ONE_MINUS_SRC_ALPHA,[tp]:i.ONE_MINUS_DST_COLOR,[jf]:i.ONE_MINUS_DST_ALPHA,[np]:i.CONSTANT_COLOR,[ip]:i.ONE_MINUS_CONSTANT_COLOR,[sp]:i.CONSTANT_ALPHA,[rp]:i.ONE_MINUS_CONSTANT_ALPHA};function I(N,mt,Y,j,xt,gt,Xt,ke,tn,pe){if(N===Yn){y===!0&&(Nt(i.BLEND),y=!1);return}if(y===!1&&(at(i.BLEND),y=!0),N!==Gf){if(N!==g||pe!==S){if((m!==ts||v!==ts)&&(i.blendEquation(i.FUNC_ADD),m=ts,v=ts),pe)switch(N){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case En:i.blendFunc(i.ONE,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case En:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,_=null,A=null,E=null,T.set(0,0,0),P=0,g=N,S=pe}return}xt=xt||mt,gt=gt||Y,Xt=Xt||j,(mt!==m||xt!==v)&&(i.blendEquationSeparate(Q[mt],Q[xt]),m=mt,v=xt),(Y!==x||j!==_||gt!==A||Xt!==E)&&(i.blendFuncSeparate(st[Y],st[j],st[gt],st[Xt]),x=Y,_=j,A=gt,E=Xt),(ke.equals(T)===!1||tn!==P)&&(i.blendColor(ke.r,ke.g,ke.b,tn),T.copy(ke),P=tn),g=N,S=!1}function Lt(N,mt){N.side===Be?Nt(i.CULL_FACE):at(i.CULL_FACE);let Y=N.side===un;mt&&(Y=!Y),et(Y),N.blending===Os&&N.transparent===!1?I(Yn):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let j=N.stencilWrite;a.setTest(j),j&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function St(N){N!==Hf?(at(i.CULL_FACE),N!==L&&(N===$h?i.cullFace(i.BACK):N===zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),L=N}function lt(N){N!==D&&(G&&i.lineWidth(N),D=N)}function Ot(N,mt,Y){N?(at(i.POLYGON_OFFSET_FILL),(U!==mt||F!==Y)&&(i.polygonOffset(mt,Y),U=mt,F=Y)):Nt(i.POLYGON_OFFSET_FILL)}function Mt(N){N?at(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function C(N){N===void 0&&(N=i.TEXTURE0+X-1),ct!==N&&(i.activeTexture(N),ct=N)}function b(N,mt,Y){Y===void 0&&(ct===null?Y=i.TEXTURE0+X-1:Y=ct);let j=_t[Y];j===void 0&&(j={type:void 0,texture:void 0},_t[Y]=j),(j.type!==N||j.texture!==mt)&&(ct!==Y&&(i.activeTexture(Y),ct=Y),i.bindTexture(N,mt||At[N]),j.type=N,j.texture=mt)}function B(){let N=_t[ct];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(N){he.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),he.copy(N))}function Et(N){K.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function se(N,mt){let Y=c.get(mt);Y===void 0&&(Y=new WeakMap,c.set(mt,Y));let j=Y.get(N);j===void 0&&(j=i.getUniformBlockIndex(mt,N.name),Y.set(N,j))}function $t(N,mt){let j=c.get(mt).get(N);l.get(mt)!==j&&(i.uniformBlockBinding(mt,j,N.__bindingPointIndex),l.set(mt,j))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,_t={},u={},d=new WeakMap,f=[],p=null,y=!1,g=null,m=null,x=null,_=null,v=null,A=null,E=null,T=new Ut(0,0,0),P=0,S=!1,M=null,L=null,D=null,U=null,F=null,he.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Nt,bindFramebuffer:Gt,drawBuffers:Bt,useProgram:oe,setBlending:I,setMaterial:Lt,setFlipSided:et,setCullFace:St,setLineWidth:lt,setPolygonOffset:Ot,setScissorTest:Mt,activeTexture:C,bindTexture:b,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:tt,texImage2D:wt,texImage3D:Ft,updateUBOMapping:se,uniformBlockBinding:$t,texStorage2D:Qt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:Rt,compressedTexSubImage2D:pt,compressedTexSubImage3D:bt,scissor:zt,viewport:Et,reset:xe}}function Xu(i,t,e,n){let s=lv(n);switch(e){case dd:return i*t;case pd:return i*t;case md:return i*t*2;case ch:return i*t/s.components*s.byteLength;case hh:return i*t/s.components*s.byteLength;case gd:return i*t*2/s.components*s.byteLength;case uh:return i*t*2/s.components*s.byteLength;case fd:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case dh:return i*t*4/s.components*s.byteLength;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:case Vl:return Math.max(i,16)*Math.max(t,8)/4;case Hl:case Gl:return Math.max(i,8)*Math.max(t,8)/2;case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Po:case ac:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yd:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case hc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lv(i){switch(i){case fi:case cd:return{byteLength:1,components:1};case Ir:case hd:case Bn:return{byteLength:2,components:1};case ah:case lh:return{byteLength:2,components:4};case is:case oh:case qn:return{byteLength:4,components:1};case ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function cv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,b){return f?new OffscreenCanvas(C,b):Uo("canvas")}function y(C,b,B){let $=1,tt=Mt(C);if((tt.width>B||tt.height>B)&&($=B/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Z=Math.floor($*tt.width),Rt=Math.floor($*tt.height);u===void 0&&(u=p(Z,Rt));let pt=b?p(Z,Rt):u;return pt.width=Z,pt.height=Rt,pt.getContext("2d").drawImage(C,0,0,Z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+Rt+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,b,B,$,tt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=b;if(b===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),b===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),b===i.RGBA){let Rt=tt?aa:ie.getTransfer($);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=Rt===fe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(C,b){let B;return C?b===null||b===is||b===Ws?B=i.DEPTH24_STENCIL8:b===qn?B=i.DEPTH32F_STENCIL8:b===Ir&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===is||b===Ws?B=i.DEPTH_COMPONENT24:b===qn?B=i.DEPTH_COMPONENT32F:b===Ir&&(B=i.DEPTH_COMPONENT16),B}function A(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==vn&&C.minFilter!==Xn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function E(C){let b=C.target;b.removeEventListener("dispose",E),P(b),b.isVideoTexture&&h.delete(b)}function T(C){let b=C.target;b.removeEventListener("dispose",T),M(b)}function P(C){let b=n.get(C);if(b.__webglInit===void 0)return;let B=C.source,$=d.get(B);if($){let tt=$[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(C),Object.keys($).length===0&&d.delete(B)}n.remove(C)}function S(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let B=C.source,$=d.get(B);delete $[b.__cacheKey],o.memory.textures--}function M(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let tt=0;tt<b.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let B=C.textures;for(let $=0,tt=B.length;$<tt;$++){let Z=n.get(B[$]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(C)}let L=0;function D(){L=0}function U(){let C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function F(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function X(C,b){let B=n.get(C);if(C.isVideoTexture&&lt(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){let $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,C,b);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function G(C,b){let B=n.get(C);if(C.version>0&&B.__version!==C.version){K(B,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function nt(C,b){let B=n.get(C);if(C.version>0&&B.__version!==C.version){K(B,C,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function q(C,b){let B=n.get(C);if(C.version>0&&B.__version!==C.version){rt(B,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}let ct={[Pr]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},_t={[vn]:i.NEAREST,[cp]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},Tt={[fp]:i.NEVER,[xp]:i.ALWAYS,[pp]:i.LESS,[xd]:i.LEQUAL,[mp]:i.EQUAL,[vp]:i.GEQUAL,[gp]:i.GREATER,[yp]:i.NOTEQUAL};function Wt(C,b){if(b.type===qn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Xn||b.magFilter===qa||b.magFilter===$r||b.magFilter===ns||b.minFilter===Xn||b.minFilter===qa||b.minFilter===$r||b.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ct[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ct[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ct[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,_t[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vn||b.minFilter!==$r&&b.minFilter!==ns||b.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function he(C,b){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",E));let $=b.source,tt=d.get($);tt===void 0&&(tt={},d.set($,tt));let Z=F(b);if(Z!==C.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[Z].usedTimes++;let Rt=tt[C.__cacheKey];Rt!==void 0&&(tt[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&S(b)),C.__cacheKey=Z,C.__webglTexture=tt[Z].texture}return B}function K(C,b,B){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);let tt=he(C,b),Z=b.source;e.bindTexture($,C.__webglTexture,i.TEXTURE0+B);let Rt=n.get(Z);if(Z.version!==Rt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);let pt=ie.getPrimaries(ie.workingColorSpace),bt=b.colorSpace===Pi?null:ie.getPrimaries(b.colorSpace),Qt=b.colorSpace===Pi||pt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let it=y(b.image,!1,s.maxTextureSize);it=Ot(b,it);let wt=r.convert(b.format,b.colorSpace),Ft=r.convert(b.type),zt=_(b.internalFormat,wt,Ft,b.colorSpace,b.isVideoTexture);Wt($,b);let Et,se=b.mipmaps,$t=b.isVideoTexture!==!0,xe=Rt.__version===void 0||tt===!0,N=Z.dataReady,mt=A(b,it);if(b.isDepthTexture)zt=v(b.format===Xs,b.type),xe&&($t?e.texStorage2D(i.TEXTURE_2D,1,zt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,zt,it.width,it.height,0,wt,Ft,null));else if(b.isDataTexture)if(se.length>0){$t&&xe&&e.texStorage2D(i.TEXTURE_2D,mt,zt,se[0].width,se[0].height);for(let Y=0,j=se.length;Y<j;Y++)Et=se[Y],$t?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,Y,zt,Et.width,Et.height,0,wt,Ft,Et.data);b.generateMipmaps=!1}else $t?(xe&&e.texStorage2D(i.TEXTURE_2D,mt,zt,it.width,it.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,wt,Ft,it.data)):e.texImage2D(i.TEXTURE_2D,0,zt,it.width,it.height,0,wt,Ft,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,zt,se[0].width,se[0].height,it.depth);for(let Y=0,j=se.length;Y<j;Y++)if(Et=se[Y],b.format!==kn)if(wt!==null)if($t){if(N)if(b.layerUpdates.size>0){let xt=Xu(Et.width,Et.height,b.format,b.type);for(let gt of b.layerUpdates){let Xt=Et.data.subarray(gt*xt/Et.data.BYTES_PER_ELEMENT,(gt+1)*xt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,gt,Et.width,Et.height,1,wt,Xt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,it.depth,wt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,zt,Et.width,Et.height,it.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,it.depth,wt,Ft,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,zt,Et.width,Et.height,it.depth,0,wt,Ft,Et.data)}else{$t&&xe&&e.texStorage2D(i.TEXTURE_2D,mt,zt,se[0].width,se[0].height);for(let Y=0,j=se.length;Y<j;Y++)Et=se[Y],b.format!==kn?wt!==null?$t?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,Y,zt,Et.width,Et.height,0,wt,Ft,Et.data)}else if(b.isDataArrayTexture)if($t){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,zt,it.width,it.height,it.depth),N)if(b.layerUpdates.size>0){let Y=Xu(it.width,it.height,b.format,b.type);for(let j of b.layerUpdates){let xt=it.data.subarray(j*Y/it.data.BYTES_PER_ELEMENT,(j+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,wt,Ft,xt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,wt,Ft,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,it.width,it.height,it.depth,0,wt,Ft,it.data);else if(b.isData3DTexture)$t?(xe&&e.texStorage3D(i.TEXTURE_3D,mt,zt,it.width,it.height,it.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,wt,Ft,it.data)):e.texImage3D(i.TEXTURE_3D,0,zt,it.width,it.height,it.depth,0,wt,Ft,it.data);else if(b.isFramebufferTexture){if(xe)if($t)e.texStorage2D(i.TEXTURE_2D,mt,zt,it.width,it.height);else{let Y=it.width,j=it.height;for(let xt=0;xt<mt;xt++)e.texImage2D(i.TEXTURE_2D,xt,zt,Y,j,0,wt,Ft,null),Y>>=1,j>>=1}}else if(se.length>0){if($t&&xe){let Y=Mt(se[0]);e.texStorage2D(i.TEXTURE_2D,mt,zt,Y.width,Y.height)}for(let Y=0,j=se.length;Y<j;Y++)Et=se[Y],$t?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,wt,Ft,Et):e.texImage2D(i.TEXTURE_2D,Y,zt,wt,Ft,Et);b.generateMipmaps=!1}else if($t){if(xe){let Y=Mt(it);e.texStorage2D(i.TEXTURE_2D,mt,zt,Y.width,Y.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ft,it)}else e.texImage2D(i.TEXTURE_2D,0,zt,wt,Ft,it);g(b)&&m($),Rt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function rt(C,b,B){if(b.image.length!==6)return;let $=he(C,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let Z=n.get(tt);if(tt.version!==Z.__version||$===!0){e.activeTexture(i.TEXTURE0+B);let Rt=ie.getPrimaries(ie.workingColorSpace),pt=b.colorSpace===Pi?null:ie.getPrimaries(b.colorSpace),bt=b.colorSpace===Pi||Rt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let j=0;j<6;j++)!Qt&&!it?wt[j]=y(b.image[j],!0,s.maxCubemapSize):wt[j]=it?b.image[j].image:b.image[j],wt[j]=Ot(b,wt[j]);let Ft=wt[0],zt=r.convert(b.format,b.colorSpace),Et=r.convert(b.type),se=_(b.internalFormat,zt,Et,b.colorSpace),$t=b.isVideoTexture!==!0,xe=Z.__version===void 0||$===!0,N=tt.dataReady,mt=A(b,Ft);Wt(i.TEXTURE_CUBE_MAP,b);let Y;if(Qt){$t&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,se,Ft.width,Ft.height);for(let j=0;j<6;j++){Y=wt[j].mipmaps;for(let xt=0;xt<Y.length;xt++){let gt=Y[xt];b.format!==kn?zt!==null?$t?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,0,0,gt.width,gt.height,zt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,se,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,0,0,gt.width,gt.height,zt,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,se,gt.width,gt.height,0,zt,Et,gt.data)}}}else{if(Y=b.mipmaps,$t&&xe){Y.length>0&&mt++;let j=Mt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,se,j.width,j.height)}for(let j=0;j<6;j++)if(it){$t?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,wt[j].width,wt[j].height,zt,Et,wt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,se,wt[j].width,wt[j].height,0,zt,Et,wt[j].data);for(let xt=0;xt<Y.length;xt++){let Xt=Y[xt].image[j].image;$t?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,0,0,Xt.width,Xt.height,zt,Et,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,se,Xt.width,Xt.height,0,zt,Et,Xt.data)}}else{$t?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,zt,Et,wt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,se,zt,Et,wt[j]);for(let xt=0;xt<Y.length;xt++){let gt=Y[xt];$t?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,0,0,zt,Et,gt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,se,zt,Et,gt.image[j])}}}g(b)&&m(i.TEXTURE_CUBE_MAP),Z.__version=tt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function At(C,b,B,$,tt,Z){let Rt=r.convert(B.format,B.colorSpace),pt=r.convert(B.type),bt=_(B.internalFormat,Rt,pt,B.colorSpace),Qt=n.get(b),it=n.get(B);if(it.__renderTarget=b,!Qt.__hasExternalTextures){let wt=Math.max(1,b.width>>Z),Ft=Math.max(1,b.height>>Z);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,bt,wt,Ft,b.depth,0,Rt,pt,null):e.texImage2D(tt,Z,bt,wt,Ft,0,Rt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,tt,it.__webglTexture,0,et(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,tt,it.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(C,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){let $=b.depthTexture,tt=$&&$.isDepthTexture?$.type:null,Z=v(b.stencilBuffer,tt),Rt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=et(b);St(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Z,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,C)}else{let $=b.textures;for(let tt=0;tt<$.length;tt++){let Z=$[tt],Rt=r.convert(Z.format,Z.colorSpace),pt=r.convert(Z.type),bt=_(Z.internalFormat,Rt,pt,Z.colorSpace),Qt=et(b);B&&St(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,bt,b.width,b.height):St(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,bt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,bt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);let tt=$.__webglTexture,Z=et(b);if(b.depthTexture.format===Fs)St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(b.depthTexture.format===Xs)St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Gt(C){let b=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let $=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=$}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Nt(b.__webglFramebuffer,C)}else if(B){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),at(b.__webglDepthbuffer[$],C,!1);else{let tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),at(b.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(C,b,B){let $=n.get(C);b!==void 0&&At($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Gt(C)}function oe(C){let b=C.texture,B=n.get(C),$=n.get(b);C.addEventListener("dispose",T);let tt=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Rt=tt.length>1;if(Rt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let bt=0;bt<b.mipmaps.length;bt++)B.__webglFramebuffer[pt][bt]=i.createFramebuffer()}else B.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)B.__webglFramebuffer[pt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let pt=0,bt=tt.length;pt<bt;pt++){let Qt=n.get(tt[pt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&St(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<tt.length;pt++){let bt=tt[pt];B.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);let Qt=r.convert(bt.format,bt.colorSpace),it=r.convert(bt.type),wt=_(bt.internalFormat,Qt,it,bt.colorSpace,C.isXRRenderTarget===!0),Ft=et(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,wt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),at(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)At(B.__webglFramebuffer[pt][bt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt);else At(B.__webglFramebuffer[pt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let pt=0,bt=tt.length;pt<bt;pt++){let Qt=tt[pt],it=n.get(Qt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Wt(i.TEXTURE_2D,Qt),At(B.__webglFramebuffer,C,Qt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),g(Qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,$.__webglTexture),Wt(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)At(B.__webglFramebuffer[bt],C,b,i.COLOR_ATTACHMENT0,pt,bt);else At(B.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,pt,0);g(b)&&m(pt),e.unbindTexture()}C.depthBuffer&&Gt(C)}function Q(C){let b=C.textures;for(let B=0,$=b.length;B<$;B++){let tt=b[B];if(g(tt)){let Z=x(C),Rt=n.get(tt).__webglTexture;e.bindTexture(Z,Rt),m(Z),e.unbindTexture()}}}let st=[],I=[];function Lt(C){if(C.samples>0){if(St(C)===!1){let b=C.textures,B=C.width,$=C.height,tt=i.COLOR_BUFFER_BIT,Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(C),pt=b.length>1;if(pt)for(let bt=0;bt<b.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let bt=0;bt<b.length;bt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);let Qt=n.get(b[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,tt,i.NEAREST),l===!0&&(st.length=0,I.length=0,st.push(i.COLOR_ATTACHMENT0+bt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(st.push(Z),I.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let bt=0;bt<b.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);let Qt=n.get(b[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function et(C){return Math.min(s.maxSamples,C.samples)}function St(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function lt(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Ot(C,b){let B=C.colorSpace,$=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==ir&&B!==Pi&&(ie.getTransfer(B)===fe?($!==kn||tt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function Mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=nt,this.setTextureCube=q,this.rebindTextures=Bt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=St}function hv(i,t){function e(n,s=Pi){let r,o=ie.getTransfer(s);if(n===fi)return i.UNSIGNED_BYTE;if(n===ah)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ud)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cd)return i.BYTE;if(n===hd)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===oh)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===dd)return i.ALPHA;if(n===fd)return i.RGB;if(n===kn)return i.RGBA;if(n===pd)return i.LUMINANCE;if(n===md)return i.LUMINANCE_ALPHA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===ch)return i.RED;if(n===hh)return i.RED_INTEGER;if(n===gd)return i.RG;if(n===uh)return i.RG_INTEGER;if(n===dh)return i.RGBA_INTEGER;if(n===To||n===Ao||n===Ro||n===Co)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===zl||n===Gl||n===Vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===Xl)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ql)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yl||n===$l||n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===ac||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yd||n===cc||n===hc||n===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ac=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},dt=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},uv={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new dn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new qe({vertexShader:dv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new V(new Ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cc=class extends Ni{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,y=new Rc,g=e.getContextAttributes(),m=null,x=null,_=[],v=[],A=new J,E=null,T=new Qe;T.viewport=new ye;let P=new Qe;P.viewport=new ye;let S=[T,P],M=new Ac,L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let rt=_[K];return rt===void 0&&(rt=new Ar,_[K]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(K){let rt=_[K];return rt===void 0&&(rt=new Ar,_[K]=rt),rt.getGripSpace()},this.getHand=function(K){let rt=_[K];return rt===void 0&&(rt=new Ar,_[K]=rt),rt.getHandSpace()};function U(K){let rt=v.indexOf(K.inputSource);if(rt===-1)return;let At=_[rt];At!==void 0&&(At.update(K.inputSource,K.frame,c||o),At.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",X);for(let K=0;K<_.length;K++){let rt=v[K];rt!==null&&(v[K]=null,_[K].disconnect(rt))}L=null,D=null,y.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,x=null,he.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new an(f.framebufferWidth,f.framebufferHeight,{format:kn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let rt=null,At=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?Xs:Fs,At=g.stencil?Ws:is);let Nt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new an(d.textureWidth,d.textureHeight,{format:kn,type:fi,depthTexture:new Wo(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(K){for(let rt=0;rt<K.removed.length;rt++){let At=K.removed[rt],at=v.indexOf(At);at>=0&&(v[at]=null,_[at].disconnect(At))}for(let rt=0;rt<K.added.length;rt++){let At=K.added[rt],at=v.indexOf(At);if(at===-1){for(let Gt=0;Gt<_.length;Gt++)if(Gt>=v.length){v.push(At),at=Gt;break}else if(v[Gt]===null){v[Gt]=At,at=Gt;break}if(at===-1)break}let Nt=_[at];Nt&&Nt.connect(At)}}let G=new R,nt=new R;function q(K,rt,At){G.setFromMatrixPosition(rt.matrixWorld),nt.setFromMatrixPosition(At.matrixWorld);let at=G.distanceTo(nt),Nt=rt.projectionMatrix.elements,Gt=At.projectionMatrix.elements,Bt=Nt[14]/(Nt[10]-1),oe=Nt[14]/(Nt[10]+1),Q=(Nt[9]+1)/Nt[5],st=(Nt[9]-1)/Nt[5],I=(Nt[8]-1)/Nt[0],Lt=(Gt[8]+1)/Gt[0],et=Bt*I,St=Bt*Lt,lt=at/(-I+Lt),Ot=lt*-I;if(rt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ot),K.translateZ(lt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Nt[10]===-1)K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Mt=Bt+lt,C=oe+lt,b=et-Ot,B=St+(at-Ot),$=Q*oe/C*Mt,tt=st*oe/C*Mt;K.projectionMatrix.makePerspective(b,B,$,tt,Mt,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ct(K,rt){rt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(rt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let rt=K.near,At=K.far;y.texture!==null&&(y.depthNear>0&&(rt=y.depthNear),y.depthFar>0&&(At=y.depthFar)),M.near=P.near=T.near=rt,M.far=P.far=T.far=At,(L!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,D=M.far),T.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,M.layers.mask=T.layers.mask|P.layers.mask;let at=K.parent,Nt=M.cameras;ct(M,at);for(let Gt=0;Gt<Nt.length;Gt++)ct(Nt[Gt],at);Nt.length===2?q(M,T,P):M.projectionMatrix.copy(T.projectionMatrix),_t(K,M,at)};function _t(K,rt,At){At===null?K.matrix.copy(rt.matrixWorld):(K.matrix.copy(At.matrixWorld),K.matrix.invert(),K.matrix.multiply(rt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Do*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let Tt=null;function Wt(K,rt){if(h=rt.getViewerPose(c||o),p=rt,h!==null){let At=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let at=!1;At.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Gt=0;Gt<At.length;Gt++){let Bt=At[Gt],oe=null;if(f!==null)oe=f.getViewport(Bt);else{let st=u.getViewSubImage(d,Bt);oe=st.viewport,Gt===0&&(t.setRenderTargetTextures(x,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(x))}let Q=S[Gt];Q===void 0&&(Q=new Qe,Q.layers.enable(Gt),Q.viewport=new ye,S[Gt]=Q),Q.matrix.fromArray(Bt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Bt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(oe.x,oe.y,oe.width,oe.height),Gt===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(Q)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let Gt=u.getDepthInformation(At[0]);Gt&&Gt.isValid&&Gt.texture&&y.init(t,Gt,s.renderState)}}for(let At=0;At<_.length;At++){let at=v[At],Nt=_[At];at!==null&&Nt!==void 0&&Nt.update(at,rt,c||o)}Tt&&Tt(K,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),p=null}let he=new Sd;he.setAnimationLoop(Wt),this.setAnimationLoop=function(K){Tt=K},this.dispose=function(){}}},ji=new An,pv=new jt;function mv(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,bd(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,v=x.envMapRotation;_&&(g.envMap.value=_,ji.copy(v),ji.x*=-1,ji.y*=-1,ji.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),g.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(ji)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let v=_.program;n.uniformBlockBinding(x,v)}function c(x,_){let v=s[x.id];v===void 0&&(p(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",g));let A=_.program;n.updateUBOMapping(x,A);let E=t.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){let _=u();x.__bindingPointIndex=_;let v=i.createBuffer(),A=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let _=s[x.id],v=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,T=v.length;E<T;E++){let P=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,M=P.length;S<M;S++){let L=P[S];if(f(L,E,S,A)===!0){let D=L.__offset,U=Array.isArray(L.value)?L.value:[L.value],F=0;for(let X=0;X<U.length;X++){let G=U[X],nt=y(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,D+F,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,F),F+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,_,v,A){let E=x.value,T=_+"_"+v;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{let P=A[T];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return A[T]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function p(x){let _=x.uniforms,v=0,A=16;for(let T=0,P=_.length;T<P;T++){let S=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,L=S.length;M<L;M++){let D=S[M],U=Array.isArray(D.value)?D.value:[D.value];for(let F=0,X=U.length;F<X;F++){let G=U[F],nt=y(G),q=v%A,ct=q%nt.boundary,_t=q+ct;v+=ct,_t!==0&&A-_t<nt.storage&&(v+=A-_t),D.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=nt.storage}}}let E=v%A;return E>0&&(v+=A-E),x.__size=v,x.__cache={},this}function y(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){let _=x.target;_.removeEventListener("dispose",g);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Xo=class{constructor(t={}){let{canvas:e=Mp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=Li,this.toneMappingExposure=1;let v=this,A=!1,E=0,T=0,P=null,S=-1,M=null,L=new ye,D=new ye,U=null,F=new Ut(0),X=0,G=e.width,nt=e.height,q=1,ct=null,_t=null,Tt=new ye(0,0,G,nt),Wt=new ye(0,0,G,nt),he=!1,K=new ss,rt=!1,At=!1,at=new jt,Nt=new jt,Gt=new R,Bt=new ye,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function st(){return P===null?q:1}let I=n;function Lt(w,k){return e.getContext(w,k)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),I===null){let k="webgl2";if(I=Lt(k,w),I===null)throw Lt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,St,lt,Ot,Mt,C,b,B,$,tt,Z,Rt,pt,bt,Qt,it,wt,Ft,zt,Et,se,$t,xe,N;function mt(){et=new Lg(I),et.init(),$t=new hv(I,et),St=new Tg(I,et,t,$t),lt=new av(I,et),St.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),Ot=new Ng(I),Mt=new $y,C=new cv(I,et,lt,Mt,St,$t,Ot),b=new Rg(v),B=new Ig(v),$=new Gp(I),xe=new wg(I,$),tt=new Dg(I,$,Ot,xe),Z=new Og(I,tt,$,Ot),zt=new kg(I,St,C),it=new Ag(Mt),Rt=new Yy(v,b,B,et,St,xe,it),pt=new mv(v,Mt),bt=new Ky,Qt=new nv(et),Ft=new Sg(v,b,B,lt,Z,f,l),wt=new rv(v,Z,St),N=new gv(I,Ot,St,lt),Et=new Eg(I,et,Ot),se=new Ug(I,et,Ot),Ot.programs=Rt.programs,v.capabilities=St,v.extensions=et,v.properties=Mt,v.renderLists=bt,v.shadowMap=wt,v.state=lt,v.info=Ot}mt();let Y=new Cc(v,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(G,nt,!1))},this.getSize=function(w){return w.set(G,nt)},this.setSize=function(w,k,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,nt=k,e.width=Math.floor(w*q),e.height=Math.floor(k*q),H===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(G*q,nt*q).floor()},this.setDrawingBufferSize=function(w,k,H){G=w,nt=k,q=H,e.width=Math.floor(w*H),e.height=Math.floor(k*H),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Tt)},this.setViewport=function(w,k,H,z){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,k,H,z),lt.viewport(L.copy(Tt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Wt)},this.setScissor=function(w,k,H,z){w.isVector4?Wt.set(w.x,w.y,w.z,w.w):Wt.set(w,k,H,z),lt.scissor(D.copy(Wt).multiplyScalar(q).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(w){lt.setScissorTest(he=w)},this.setOpaqueSort=function(w){ct=w},this.setTransparentSort=function(w){_t=w},this.getClearColor=function(w){return w.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(w=!0,k=!0,H=!0){let z=0;if(w){let O=!1;if(P!==null){let ot=P.texture.format;O=ot===dh||ot===uh||ot===hh}if(O){let ot=P.texture.type,yt=ot===fi||ot===is||ot===Ir||ot===Ws||ot===ah||ot===lh,Ct=Ft.getClearColor(),Pt=Ft.getClearAlpha(),Vt=Ct.r,qt=Ct.g,It=Ct.b;yt?(p[0]=Vt,p[1]=qt,p[2]=It,p[3]=Pt,I.clearBufferuiv(I.COLOR,0,p)):(y[0]=Vt,y[1]=qt,y[2]=It,y[3]=Pt,I.clearBufferiv(I.COLOR,0,y))}else z|=I.COLOR_BUFFER_BIT}k&&(z|=I.DEPTH_BUFFER_BIT),H&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),bt.dispose(),Qt.dispose(),Mt.dispose(),b.dispose(),B.dispose(),Z.dispose(),xe.dispose(),N.dispose(),Rt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Hh),Y.removeEventListener("sessionend",zh),qi.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Ot.autoReset,k=wt.enabled,H=wt.autoUpdate,z=wt.needsUpdate,O=wt.type;mt(),Ot.autoReset=w,wt.enabled=k,wt.autoUpdate=H,wt.needsUpdate=z,wt.type=O}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xt(w){let k=w.target;k.removeEventListener("dispose",Xt),ke(k)}function ke(w){tn(w),Mt.remove(w)}function tn(w){let k=Mt.get(w).programs;k!==void 0&&(k.forEach(function(H){Rt.releaseProgram(H)}),w.isShaderMaterial&&Rt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,H,z,O,ot){k===null&&(k=oe);let yt=O.isMesh&&O.matrixWorld.determinant()<0,Ct=Of(w,k,H,z,O);lt.setMaterial(z,yt);let Pt=H.index,Vt=1;if(z.wireframe===!0){if(Pt=tt.getWireframeAttribute(H),Pt===void 0)return;Vt=2}let qt=H.drawRange,It=H.attributes.position,le=qt.start*Vt,_e=(qt.start+qt.count)*Vt;ot!==null&&(le=Math.max(le,ot.start*Vt),_e=Math.min(_e,(ot.start+ot.count)*Vt)),Pt!==null?(le=Math.max(le,0),_e=Math.min(_e,Pt.count)):It!=null&&(le=Math.max(le,0),_e=Math.min(_e,It.count));let we=_e-le;if(we<0||we===1/0)return;xe.setup(O,z,Ct,H,Pt);let cn,ue=Et;if(Pt!==null&&(cn=$.get(Pt),ue=se,ue.setIndex(cn)),O.isMesh)z.wireframe===!0?(lt.setLineWidth(z.wireframeLinewidth*st()),ue.setMode(I.LINES)):ue.setMode(I.TRIANGLES);else if(O.isLine){let Dt=z.linewidth;Dt===void 0&&(Dt=1),lt.setLineWidth(Dt*st()),O.isLineSegments?ue.setMode(I.LINES):O.isLineLoop?ue.setMode(I.LINE_LOOP):ue.setMode(I.LINE_STRIP)}else O.isPoints?ue.setMode(I.POINTS):O.isSprite&&ue.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ue.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ue.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Dt=O._multiDrawStarts,ei=O._multiDrawCounts,de=O._multiDrawCount,Ln=Pt?$.get(Pt).bytesPerElement:1,ms=Mt.get(z).currentProgram.getUniforms();for(let mn=0;mn<de;mn++)ms.setValue(I,"_gl_DrawID",mn),ue.render(Dt[mn]/Ln,ei[mn])}else if(O.isInstancedMesh)ue.renderInstances(le,we,O.count);else if(H.isInstancedBufferGeometry){let Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ei=Math.min(H.instanceCount,Dt);ue.renderInstances(le,we,ei)}else ue.render(le,we)};function pe(w,k,H){w.transparent===!0&&w.side===Be&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,Yr(w,k,H),w.side=Ui,w.needsUpdate=!0,Yr(w,k,H),w.side=Be):Yr(w,k,H)}this.compile=function(w,k,H=null){H===null&&(H=w),m=Qt.get(H),m.init(k),_.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let z=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ot=O.material;if(ot)if(Array.isArray(ot))for(let yt=0;yt<ot.length;yt++){let Ct=ot[yt];pe(Ct,H,O),z.add(Ct)}else pe(ot,H,O),z.add(ot)}),_.pop(),m=null,z},this.compileAsync=function(w,k,H=null){let z=this.compile(w,k,H);return new Promise(O=>{function ot(){if(z.forEach(function(yt){Mt.get(yt).currentProgram.isReady()&&z.delete(yt)}),z.size===0){O(w);return}setTimeout(ot,10)}et.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let In=null;function ti(w){In&&In(w)}function Hh(){qi.stop()}function zh(){qi.start()}let qi=new Sd;qi.setAnimationLoop(ti),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(w){In=w,Y.setAnimationLoop(w),w===null?qi.stop():qi.start()},Y.addEventListener("sessionstart",Hh),Y.addEventListener("sessionend",zh),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,P),m=Qt.get(w,_.length),m.init(k),_.push(m),Nt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(Nt),At=this.localClippingEnabled,rt=it.init(this.clippingPlanes,At),g=bt.get(w,x.length),g.init(),x.push(g),Y.enabled===!0&&Y.isPresenting===!0){let ot=v.xr.getDepthSensingMesh();ot!==null&&Xa(ot,k,-1/0,v.sortObjects)}Xa(w,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ct,_t),Q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Q&&Ft.addToRenderList(g,w),this.info.render.frame++,rt===!0&&it.beginShadows();let H=m.state.shadowsArray;wt.render(H,w,k),rt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=g.opaque,O=g.transmissive;if(m.setupLights(),k.isArrayCamera){let ot=k.cameras;if(O.length>0)for(let yt=0,Ct=ot.length;yt<Ct;yt++){let Pt=ot[yt];Vh(z,O,w,Pt)}Q&&Ft.render(w);for(let yt=0,Ct=ot.length;yt<Ct;yt++){let Pt=ot[yt];Gh(g,w,Pt,Pt.viewport)}}else O.length>0&&Vh(z,O,w,k),Q&&Ft.render(w),Gh(g,w,k);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,k),xe.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(m=_[_.length-1],rt===!0&&it.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Xa(w,k,H,z){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){z&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Nt);let yt=Z.update(w),Ct=w.material;Ct.visible&&g.push(w,yt,Ct,H,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){let yt=Z.update(w),Ct=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Bt.copy(yt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ct)){let Pt=yt.groups;for(let Vt=0,qt=Pt.length;Vt<qt;Vt++){let It=Pt[Vt],le=Ct[It.materialIndex];le&&le.visible&&g.push(w,yt,le,H,Bt.z,It)}}else Ct.visible&&g.push(w,yt,Ct,H,Bt.z,null)}}let ot=w.children;for(let yt=0,Ct=ot.length;yt<Ct;yt++)Xa(ot[yt],k,H,z)}function Gh(w,k,H,z){let O=w.opaque,ot=w.transmissive,yt=w.transparent;m.setupLightsView(H),rt===!0&&it.setGlobalState(v.clippingPlanes,H),z&&lt.viewport(L.copy(z)),O.length>0&&qr(O,k,H),ot.length>0&&qr(ot,k,H),yt.length>0&&qr(yt,k,H),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Vh(w,k,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new an(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Bn:fi,minFilter:ns,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let ot=m.state.transmissionRenderTarget[z.id],yt=z.viewport||L;ot.setSize(yt.z,yt.w);let Ct=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(F),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Ft.render(H);let Pt=v.toneMapping;v.toneMapping=Li;let Vt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),rt===!0&&it.setGlobalState(v.clippingPlanes,z),qr(w,H,z),C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot),et.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let It=0,le=k.length;It<le;It++){let _e=k[It],we=_e.object,cn=_e.geometry,ue=_e.material,Dt=_e.group;if(ue.side===Be&&we.layers.test(z.layers)){let ei=ue.side;ue.side=un,ue.needsUpdate=!0,Wh(we,H,z,cn,ue,Dt),ue.side=ei,ue.needsUpdate=!0,qt=!0}}qt===!0&&(C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot))}v.setRenderTarget(Ct),v.setClearColor(F,X),Vt!==void 0&&(z.viewport=Vt),v.toneMapping=Pt}function qr(w,k,H){let z=k.isScene===!0?k.overrideMaterial:null;for(let O=0,ot=w.length;O<ot;O++){let yt=w[O],Ct=yt.object,Pt=yt.geometry,Vt=z===null?yt.material:z,qt=yt.group;Ct.layers.test(H.layers)&&Wh(Ct,k,H,Pt,Vt,qt)}}function Wh(w,k,H,z,O,ot){w.onBeforeRender(v,k,H,z,O,ot),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(v,k,H,z,w,ot),O.transparent===!0&&O.side===Be&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,v.renderBufferDirect(H,k,z,O,w,ot),O.side=Ui,O.needsUpdate=!0,v.renderBufferDirect(H,k,z,O,w,ot),O.side=Be):v.renderBufferDirect(H,k,z,O,w,ot),w.onAfterRender(v,k,H,z,O,ot)}function Yr(w,k,H){k.isScene!==!0&&(k=oe);let z=Mt.get(w),O=m.state.lights,ot=m.state.shadowsArray,yt=O.state.version,Ct=Rt.getParameters(w,O.state,ot,k,H),Pt=Rt.getProgramCacheKey(Ct),Vt=z.programs;z.environment=w.isMeshStandardMaterial?k.environment:null,z.fog=k.fog,z.envMap=(w.isMeshStandardMaterial?B:b).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",Xt),Vt=new Map,z.programs=Vt);let qt=Vt.get(Pt);if(qt!==void 0){if(z.currentProgram===qt&&z.lightsStateVersion===yt)return qh(w,Ct),qt}else Ct.uniforms=Rt.getUniforms(w),w.onBeforeCompile(Ct,v),qt=Rt.acquireProgram(Ct,Pt),Vt.set(Pt,qt),z.uniforms=Ct.uniforms;let It=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=it.uniform),qh(w,Ct),z.needsLights=Bf(w),z.lightsStateVersion=yt,z.needsLights&&(It.ambientLightColor.value=O.state.ambient,It.lightProbe.value=O.state.probe,It.directionalLights.value=O.state.directional,It.directionalLightShadows.value=O.state.directionalShadow,It.spotLights.value=O.state.spot,It.spotLightShadows.value=O.state.spotShadow,It.rectAreaLights.value=O.state.rectArea,It.ltc_1.value=O.state.rectAreaLTC1,It.ltc_2.value=O.state.rectAreaLTC2,It.pointLights.value=O.state.point,It.pointLightShadows.value=O.state.pointShadow,It.hemisphereLights.value=O.state.hemi,It.directionalShadowMap.value=O.state.directionalShadowMap,It.directionalShadowMatrix.value=O.state.directionalShadowMatrix,It.spotShadowMap.value=O.state.spotShadowMap,It.spotLightMatrix.value=O.state.spotLightMatrix,It.spotLightMap.value=O.state.spotLightMap,It.pointShadowMap.value=O.state.pointShadowMap,It.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=qt,z.uniformsList=null,qt}function Xh(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=Hs.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function qh(w,k){let H=Mt.get(w);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function Of(w,k,H,z,O){k.isScene!==!0&&(k=oe),C.resetTextureUnits();let ot=k.fog,yt=z.isMeshStandardMaterial?k.environment:null,Ct=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ir,Pt=(z.isMeshStandardMaterial?B:b).get(z.envMap||yt),Vt=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,qt=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),It=!!H.morphAttributes.position,le=!!H.morphAttributes.normal,_e=!!H.morphAttributes.color,we=Li;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(we=v.toneMapping);let cn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=cn!==void 0?cn.length:0,Dt=Mt.get(z),ei=m.state.lights;if(rt===!0&&(At===!0||w!==M)){let Sn=w===M&&z.id===S;it.setState(z,w,Sn)}let de=!1;z.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ei.state.version||Dt.outputColorSpace!==Ct||O.isBatchedMesh&&Dt.batching===!1||!O.isBatchedMesh&&Dt.batching===!0||O.isBatchedMesh&&Dt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Dt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Dt.instancing===!1||!O.isInstancedMesh&&Dt.instancing===!0||O.isSkinnedMesh&&Dt.skinning===!1||!O.isSkinnedMesh&&Dt.skinning===!0||O.isInstancedMesh&&Dt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Dt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Dt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Dt.instancingMorph===!1&&O.morphTexture!==null||Dt.envMap!==Pt||z.fog===!0&&Dt.fog!==ot||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==it.numPlanes||Dt.numIntersection!==it.numIntersection)||Dt.vertexAlphas!==Vt||Dt.vertexTangents!==qt||Dt.morphTargets!==It||Dt.morphNormals!==le||Dt.morphColors!==_e||Dt.toneMapping!==we||Dt.morphTargetsCount!==ue)&&(de=!0):(de=!0,Dt.__version=z.version);let Ln=Dt.currentProgram;de===!0&&(Ln=Yr(z,k,O));let ms=!1,mn=!1,fr=!1,Ee=Ln.getUniforms(),Gn=Dt.uniforms;if(lt.useProgram(Ln.program)&&(ms=!0,mn=!0,fr=!0),z.id!==S&&(S=z.id,mn=!0),ms||M!==w){lt.buffers.depth.getReversed()?(at.copy(w.projectionMatrix),Sp(at),wp(at),Ee.setValue(I,"projectionMatrix",at)):Ee.setValue(I,"projectionMatrix",w.projectionMatrix),Ee.setValue(I,"viewMatrix",w.matrixWorldInverse);let bi=Ee.map.cameraPosition;bi!==void 0&&bi.setValue(I,Gt.setFromMatrixPosition(w.matrixWorld)),St.logarithmicDepthBuffer&&Ee.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ee.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,mn=!0,fr=!0)}if(O.isSkinnedMesh){Ee.setOptional(I,O,"bindMatrix"),Ee.setOptional(I,O,"bindMatrixInverse");let Sn=O.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ee.setValue(I,"boneTexture",Sn.boneTexture,C))}O.isBatchedMesh&&(Ee.setOptional(I,O,"batchingTexture"),Ee.setValue(I,"batchingTexture",O._matricesTexture,C),Ee.setOptional(I,O,"batchingIdTexture"),Ee.setValue(I,"batchingIdTexture",O._indirectTexture,C),Ee.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Ee.setValue(I,"batchingColorTexture",O._colorsTexture,C));let pr=H.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&zt.update(O,H,Ln),(mn||Dt.receiveShadow!==O.receiveShadow)&&(Dt.receiveShadow=O.receiveShadow,Ee.setValue(I,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Gn.envMap.value=Pt,Gn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&k.environment!==null&&(Gn.envMapIntensity.value=k.environmentIntensity),mn&&(Ee.setValue(I,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&Ff(Gn,fr),ot&&z.fog===!0&&pt.refreshFogUniforms(Gn,ot),pt.refreshMaterialUniforms(Gn,z,q,nt,m.state.transmissionRenderTarget[w.id]),Hs.upload(I,Xh(Dt),Gn,C)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Hs.upload(I,Xh(Dt),Gn,C),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ee.setValue(I,"center",O.center),Ee.setValue(I,"modelViewMatrix",O.modelViewMatrix),Ee.setValue(I,"normalMatrix",O.normalMatrix),Ee.setValue(I,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Sn=z.uniformsGroups;for(let bi=0,Si=Sn.length;bi<Si;bi++){let Yh=Sn[bi];N.update(Yh,Ln),N.bind(Yh,Ln)}}return Ln}function Ff(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Bf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,k,H){Mt.get(w.texture).__webglTexture=k,Mt.get(w.depthTexture).__webglTexture=H;let z=Mt.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=H===void 0,z.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){let H=Mt.get(w);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,H=0){P=w,E=k,T=H;let z=!0,O=null,ot=!1,yt=!1;if(w){let Pt=Mt.get(w);if(Pt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(Pt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Pt.__hasExternalTextures)C.rebindTextures(w,Mt.get(w.texture).__webglTexture,Mt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let It=w.depthTexture;if(Pt.__boundDepthTexture!==It){if(It!==null&&Mt.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(yt=!0);let qt=Mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[k])?O=qt[k][H]:O=qt[k],ot=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?O=Mt.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?O=qt[H]:O=qt,L.copy(w.viewport),D.copy(w.scissor),U=w.scissorTest}else L.copy(Tt).multiplyScalar(q).floor(),D.copy(Wt).multiplyScalar(q).floor(),U=he;if(lt.bindFramebuffer(I.FRAMEBUFFER,O)&&z&&lt.drawBuffers(w,O),lt.viewport(L),lt.scissor(D),lt.setScissorTest(U),ot){let Pt=Mt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pt.__webglTexture,H)}else if(yt){let Pt=Mt.get(w.texture),Vt=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.__webglTexture,H||0,Vt)}S=-1},this.readRenderTargetPixels=function(w,k,H,z,O,ot,yt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){lt.bindFramebuffer(I.FRAMEBUFFER,Ct);try{let Pt=w.texture,Vt=Pt.format,qt=Pt.type;if(!St.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-z&&H>=0&&H<=w.height-O&&I.readPixels(k,H,z,O,$t.convert(Vt),$t.convert(qt),ot)}finally{let Pt=P!==null?Mt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,k,H,z,O,ot,yt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){let Pt=w.texture,Vt=Pt.format,qt=Pt.type;if(!St.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-z&&H>=0&&H<=w.height-O){lt.bindFramebuffer(I.FRAMEBUFFER,Ct);let It=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,It),I.bufferData(I.PIXEL_PACK_BUFFER,ot.byteLength,I.STREAM_READ),I.readPixels(k,H,z,O,$t.convert(Vt),$t.convert(qt),0);let le=P!==null?Mt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(I.FRAMEBUFFER,le);let _e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await bp(I,_e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,It),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ot),I.deleteBuffer(It),I.deleteSync(_e),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,H=0){w.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);let z=Math.pow(2,-H),O=Math.floor(w.image.width*z),ot=Math.floor(w.image.height*z),yt=k!==null?k.x:0,Ct=k!==null?k.y:0;C.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,yt,Ct,O,ot),lt.unbindTexture()},this.copyTextureToTexture=function(w,k,H=null,z=null,O=0){w.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],k=arguments[2],O=arguments[3]||0,H=null);let ot,yt,Ct,Pt,Vt,qt,It,le,_e,we=w.isCompressedTexture?w.mipmaps[O]:w.image;H!==null?(ot=H.max.x-H.min.x,yt=H.max.y-H.min.y,Ct=H.isBox3?H.max.z-H.min.z:1,Pt=H.min.x,Vt=H.min.y,qt=H.isBox3?H.min.z:0):(ot=we.width,yt=we.height,Ct=we.depth||1,Pt=0,Vt=0,qt=0),z!==null?(It=z.x,le=z.y,_e=z.z):(It=0,le=0,_e=0);let cn=$t.convert(k.format),ue=$t.convert(k.type),Dt;k.isData3DTexture?(C.setTexture3D(k,0),Dt=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Dt=I.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Dt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);let ei=I.getParameter(I.UNPACK_ROW_LENGTH),de=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ln=I.getParameter(I.UNPACK_SKIP_PIXELS),ms=I.getParameter(I.UNPACK_SKIP_ROWS),mn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,we.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,we.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt);let fr=w.isDataArrayTexture||w.isData3DTexture,Ee=k.isDataArrayTexture||k.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Gn=Mt.get(w),pr=Mt.get(k),Sn=Mt.get(Gn.__renderTarget),bi=Mt.get(pr.__renderTarget);lt.bindFramebuffer(I.READ_FRAMEBUFFER,Sn.__webglFramebuffer),lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Si=0;Si<Ct;Si++)fr&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(w).__webglTexture,O,qt+Si),w.isDepthTexture?(Ee&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(k).__webglTexture,O,_e+Si),I.blitFramebuffer(Pt,Vt,ot,yt,It,le,ot,yt,I.DEPTH_BUFFER_BIT,I.NEAREST)):Ee?I.copyTexSubImage3D(Dt,O,It,le,_e+Si,Pt,Vt,ot,yt):I.copyTexSubImage2D(Dt,O,It,le,_e+Si,Pt,Vt,ot,yt);lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ee?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Dt,O,It,le,_e,ot,yt,Ct,cn,ue,we.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Dt,O,It,le,_e,ot,yt,Ct,cn,we.data):I.texSubImage3D(Dt,O,It,le,_e,ot,yt,Ct,cn,ue,we):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,It,le,ot,yt,cn,ue,we.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,It,le,we.width,we.height,cn,we.data):I.texSubImage2D(I.TEXTURE_2D,O,It,le,ot,yt,cn,ue,we);I.pixelStorei(I.UNPACK_ROW_LENGTH,ei),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,ms),I.pixelStorei(I.UNPACK_SKIP_IMAGES,mn),O===0&&k.generateMipmaps&&I.generateMipmap(Dt),lt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,H=null,z=null,O=0){return w.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,z=arguments[1]||null,w=arguments[2],k=arguments[3],O=arguments[4]||0),Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,H,z,O)},this.initRenderTarget=function(w){Mt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),lt.unbindTexture()},this.resetState=function(){E=0,T=0,P=null,lt.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}},$s=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Zs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ks=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},qo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new R,Lr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rs=class extends mi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ps,xr=new R,Is=new R,Ls=new R,Ds=new J,_r=new J,Rd=new jt,go=new R,Mr=new R,yo=new R,qu=new J,bl=new J,Yu=new J,Js=class extends Xe{constructor(t=new rs){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new Pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qo(e,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new Lr(n,3,0,!1)),Ps.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=Ps,this.material=t,this.center=new J(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),Rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Ls.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;vo(go.set(-.5,-.5,0),Ls,o,Is,s,r),vo(Mr.set(.5,-.5,0),Ls,o,Is,s,r),vo(yo.set(.5,.5,0),Ls,o,Is,s,r),qu.set(0,0),bl.set(1,0),Yu.set(1,1);let a=t.ray.intersectTriangle(go,Mr,yo,!1,xr);if(a===null&&(vo(Mr.set(-.5,.5,0),Ls,o,Is,s,r),bl.set(0,1),a=t.ray.intersectTriangle(go,yo,Mr,!1,xr),a===null))return;let l=t.ray.origin.distanceTo(xr);l<t.near||l>t.far||e.push({distance:l,point:xr.clone(),uv:Ii.getInterpolation(xr,go,Mr,yo,qu,bl,Yu,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function vo(i,t,e,n,s,r){Ds.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(_r.x=r*Ds.x-s*Ds.y,_r.y=s*Ds.x+r*Ds.y):_r.copy(Ds),i.copy(t),i.x+=_r.x,i.y+=_r.y,i.applyMatrix4(Rd)}var Pc=class extends dn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=vn,h=vn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dr=class extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Us=new jt,$u=new jt,xo=[],Zu=new pi,yv=new jt,br=new V,Sr=new $n,Yo=class extends V{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),Zu.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(Zu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),Sr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),t.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),$u.multiplyMatrices(n,Us),br.matrixWorld=$u,br.raycast(t,xo);for(let o=0,a=xo.length;o<a;o++){let l=xo[o];l.instanceId=r,l.object=this,e.push(l)}xo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pc(new Float32Array(s*this.count),s,this.count,ch,qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ur=class extends mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ku=new jt,Ic=new Oo,_o=new $n,Mo=new R,$o=class extends Xe{constructor(t=new Pe,e=new Ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;Ku.copy(s).invert(),Ic.copy(t.ray).applyMatrix4(Ku);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,y=f;p<y;p++){let g=c.getX(p);Mo.fromBufferAttribute(u,g),Ju(Mo,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,y=f;p<y;p++)Mo.fromBufferAttribute(u,p),Ju(Mo,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ju(i,t,e,n,s,r,o){let a=Ic.distanceSqToPoint(i);if(a<e){let l=new R;Ic.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gi=class extends dn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new J:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,l=new jt;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(je(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Nr=class extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new J){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Lc=class extends Nr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ph(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var bo=new R,Sl=new ph,wl=new ph,El=new ph,Dc=class extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),c=bo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),g<1e-4&&(g=y),Sl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,y,g),wl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,y,g),El.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,y,g)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),El.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Sl.calc(l),wl.calc(l),El.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ju(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function vv(i,t){let e=1-i;return e*e*t}function xv(i,t){return 2*(1-i)*i*t}function _v(i,t){return i*i*t}function Rr(i,t,e,n){return vv(i,t)+xv(i,e)+_v(i,n)}function Mv(i,t){let e=1-i;return e*e*e*t}function bv(i,t){let e=1-i;return 3*e*e*i*t}function Sv(i,t){return 3*(1-i)*i*i*t}function wv(i,t){return i*i*i*t}function Cr(i,t,e,n,s){return Mv(i,t)+bv(i,e)+Sv(i,n)+wv(i,s)}var Zo=class extends Rn{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Uc=class extends Rn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y),Cr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ko=class extends Rn{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nc=class extends Rn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends Rn{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},js=class extends Rn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y),Rr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ju(a,l.x,c.x,h.x,u.x),ju(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new J().fromArray(s))}return this}},Qo=Object.freeze({__proto__:null,ArcCurve:Lc,CatmullRomCurve3:Dc,CubicBezierCurve:Zo,CubicBezierCurve3:Uc,EllipseCurve:Nr,LineCurve:Ko,LineCurve3:Nc,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:js,SplineCurve:jo}),kc=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Qo[s.type]().fromJSON(s))}return this}},yi=class extends kc{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ko(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Jo(this.currentPoint.clone(),new J(t,e),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Zo(this.currentPoint.clone(),new J(t,e),new J(n,s),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new jo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Nr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},kr=class i extends Pe{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=je(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,d=new J,f=new R,p=new R,y=new R,g=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-g,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(p)}for(let x=0;x<=e;x++){let _=n+x*h*s,v=Math.sin(_),A=Math.cos(_);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*A,o.push(u.x,u.y,u.z),d.x=x/e,d.y=E/(t.length-1),a.push(d.x,d.y);let T=l[3*E+0]*v,P=l[3*E+1],S=l[3*E+0]*A;c.push(T,P,S)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){let v=_+x*t.length,A=v,E=v+t.length,T=v+t.length+1,P=v+1;r.push(A,E,P),r.push(T,P,E)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Cn=class i extends kr{constructor(t=1,e=1,n=4,s=8){let r=new yi;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},vi=class i extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new J;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},re=class i extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,y=[],g=n/2,m=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function x(){let v=new R,A=new R,E=0,T=(e-t)/n;for(let P=0;P<=r;P++){let S=[],M=P/r,L=M*(e-t)+t;for(let D=0;D<=s;D++){let U=D/s,F=U*l+a,X=Math.sin(F),G=Math.cos(F);A.x=L*X,A.y=-M*n+g,A.z=L*G,u.push(A.x,A.y,A.z),v.set(X,T,G).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-M),S.push(p++)}y.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let M=y[S][P],L=y[S+1][P],D=y[S+1][P+1],U=y[S][P+1];(t>0||S!==0)&&(h.push(M,L,U),E+=3),(e>0||S!==r-1)&&(h.push(L,D,U),E+=3)}c.addGroup(m,E,0),m+=E}function _(v){let A=p,E=new J,T=new R,P=0,S=v===!0?t:e,M=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;let L=p;for(let D=0;D<=s;D++){let F=D/s*l+a,X=Math.cos(F),G=Math.sin(F);T.x=S*G,T.y=g*M,T.z=S*X,u.push(T.x,T.y,T.z),d.push(0,M,0),E.x=X*.5+.5,E.y=G*.5*M+.5,f.push(E.x,E.y),p++}for(let D=0;D<s;D++){let U=A+D,F=L+D;v===!0?h.push(F,F+1,U):h.push(F+1,F,U),P+=3}c.addGroup(m,P,v===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},On=class i extends re{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oc=class i extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let _=new R,v=new R,A=new R;for(let E=0;E<e.length;E+=3)f(e[E+0],_),f(e[E+1],v),f(e[E+2],A),l(_,v,A,x)}function l(x,_,v,A){let E=A+1,T=[];for(let P=0;P<=E;P++){T[P]=[];let S=x.clone().lerp(v,P/E),M=_.clone().lerp(v,P/E),L=E-P;for(let D=0;D<=L;D++)D===0&&P===E?T[P][D]=S:T[P][D]=S.clone().lerp(M,D/L)}for(let P=0;P<E;P++)for(let S=0;S<2*(E-P)-1;S++){let M=Math.floor(S/2);S%2===0?(d(T[P][M+1]),d(T[P+1][M]),d(T[P][M])):(d(T[P][M+1]),d(T[P+1][M+1]),d(T[P+1][M]))}}function c(x){let _=new R;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(x),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let x=new R;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let v=g(x)/2/Math.PI+.5,A=m(x)/Math.PI+.5;o.push(v,1-A)}p(),u()}function u(){for(let x=0;x<o.length;x+=6){let _=o[x+0],v=o[x+2],A=o[x+4],E=Math.max(_,v,A),T=Math.min(_,v,A);E>.9&&T<.1&&(_<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,_){let v=x*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function p(){let x=new R,_=new R,v=new R,A=new R,E=new J,T=new J,P=new J;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),E.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),A.copy(x).add(_).add(v).divideScalar(3);let L=g(A);y(E,M+0,x,L),y(T,M+2,_,L),y(P,M+4,v,L)}}function y(x,_,v,A){A<0&&x.x===1&&(o[_]=x.x-1),v.x===0&&v.z===0&&(o[_]=A/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},ta=class i extends Oc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Zn=class extends yi{constructor(t){super(t),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new yi().fromJSON(s))}return this}},Ev={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Cd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=Pv(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],d=i[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Or(r,o,e,a,l,f,0),o}};function Cd(i,t,e,n,s){let r,o;if(s===zv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Qu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Qu(r,i[r],i[r+1],o);return o&&ca(o,o.next)&&(Br(o),o=o.next),o}function os(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ca(e,e.next)||Le(e.prev,e,e.next)===0)){if(Br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Or(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Nv(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Av(i,n,s,r):Tv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Br(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Rv(os(i),t,e),Or(i,t,e,n,s,r,2)):o===2&&Cv(i,t,e,n,s,r):Or(os(i),t,e,n,s,r,1);break}}}function Tv(i){let t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ks(s,a,r,l,o,c,p.x,p.y)&&Le(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Av(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Le(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,y=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=Fc(f,p,t,e,n),x=Fc(y,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=m&&v&&v.z<=x;){if(_.x>=f&&_.x<=y&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&ks(a,h,l,u,c,d,_.x,_.y)&&Le(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=y&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ks(a,h,l,u,c,d,v.x,v.y)&&Le(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=y&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&ks(a,h,l,u,c,d,_.x,_.y)&&Le(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ks(a,h,l,u,c,d,v.x,v.y)&&Le(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Rv(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ca(s,r)&&Pd(s,n,n.next,r)&&Fr(s,r)&&Fr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Br(n),Br(n.next),n=i=r),n=n.next}while(n!==i);return os(n)}function Cv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fv(o,a)){let l=Id(o,a);o=os(o,o.next),l=os(l,l.next),Or(o,t,e,n,s,r,0),Or(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Pv(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Cd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ov(c));for(s.sort(Iv),r=0;r<s.length;r++)e=Lv(s[r],e);return e}function Iv(i,t){return i.x-t.x}function Lv(i,t){let e=Dv(i,t);if(!e)return t;let n=Id(e,i);return os(n,n.next),os(e,e.next)}function Dv(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ks(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Fr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Uv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Uv(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function Nv(i,t,e,n){let s=i;do s.z===0&&(s.z=Fc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kv(s)}function kv(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Fc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ov(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ks(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Fv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Bv(i,t)&&(Fr(i,t)&&Fr(t,i)&&Hv(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||ca(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ca(i,t){return i.x===t.x&&i.y===t.y}function Pd(i,t,e,n){let s=wo(Le(i,t,e)),r=wo(Le(i,t,n)),o=wo(Le(e,n,i)),a=wo(Le(e,n,t));return!!(s!==r&&o!==a||s===0&&So(i,e,t)||r===0&&So(i,n,t)||o===0&&So(e,i,n)||a===0&&So(e,t,n))}function So(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wo(i){return i>0?1:i<0?-1:0}function Bv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fr(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function Hv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Id(i,t){let e=new Bc(i.i,i.x,i.y),n=new Bc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qu(i,t,e,n){let s=new Bc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Di=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];td(t),ed(n,t);let o=t.length;e.forEach(td);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ed(n,e[l]);let a=Ev.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function td(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ed(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Qs=class i extends Pe{constructor(t=new Zn([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Gv,_,v=!1,A,E,T,P;m&&(_=m.getSpacedPoints(h),v=!0,d=!1,A=m.computeFrenetFrames(h,!1),E=new R,T=new R,P=new R),d||(g=0,f=0,p=0,y=0);let S=a.extractPoints(c),M=S.shape,L=S.holes;if(!Di.isClockWise(M)){M=M.reverse();for(let Q=0,st=L.length;Q<st;Q++){let I=L[Q];Di.isClockWise(I)&&(L[Q]=I.reverse())}}let U=Di.triangulateShape(M,L),F=M;for(let Q=0,st=L.length;Q<st;Q++){let I=L[Q];M=M.concat(I)}function X(Q,st,I){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(st,I)}let G=M.length,nt=U.length;function q(Q,st,I){let Lt,et,St,lt=Q.x-st.x,Ot=Q.y-st.y,Mt=I.x-Q.x,C=I.y-Q.y,b=lt*lt+Ot*Ot,B=lt*C-Ot*Mt;if(Math.abs(B)>Number.EPSILON){let $=Math.sqrt(b),tt=Math.sqrt(Mt*Mt+C*C),Z=st.x-Ot/$,Rt=st.y+lt/$,pt=I.x-C/tt,bt=I.y+Mt/tt,Qt=((pt-Z)*C-(bt-Rt)*Mt)/(lt*C-Ot*Mt);Lt=Z+lt*Qt-Q.x,et=Rt+Ot*Qt-Q.y;let it=Lt*Lt+et*et;if(it<=2)return new J(Lt,et);St=Math.sqrt(it/2)}else{let $=!1;lt>Number.EPSILON?Mt>Number.EPSILON&&($=!0):lt<-Number.EPSILON?Mt<-Number.EPSILON&&($=!0):Math.sign(Ot)===Math.sign(C)&&($=!0),$?(Lt=-Ot,et=lt,St=Math.sqrt(b)):(Lt=lt,et=Ot,St=Math.sqrt(b/2))}return new J(Lt/St,et/St)}let ct=[];for(let Q=0,st=F.length,I=st-1,Lt=Q+1;Q<st;Q++,I++,Lt++)I===st&&(I=0),Lt===st&&(Lt=0),ct[Q]=q(F[Q],F[I],F[Lt]);let _t=[],Tt,Wt=ct.concat();for(let Q=0,st=L.length;Q<st;Q++){let I=L[Q];Tt=[];for(let Lt=0,et=I.length,St=et-1,lt=Lt+1;Lt<et;Lt++,St++,lt++)St===et&&(St=0),lt===et&&(lt=0),Tt[Lt]=q(I[Lt],I[St],I[lt]);_t.push(Tt),Wt=Wt.concat(Tt)}for(let Q=0;Q<g;Q++){let st=Q/g,I=f*Math.cos(st*Math.PI/2),Lt=p*Math.sin(st*Math.PI/2)+y;for(let et=0,St=F.length;et<St;et++){let lt=X(F[et],ct[et],Lt);at(lt.x,lt.y,-I)}for(let et=0,St=L.length;et<St;et++){let lt=L[et];Tt=_t[et];for(let Ot=0,Mt=lt.length;Ot<Mt;Ot++){let C=X(lt[Ot],Tt[Ot],Lt);at(C.x,C.y,-I)}}}let he=p+y;for(let Q=0;Q<G;Q++){let st=d?X(M[Q],Wt[Q],he):M[Q];v?(T.copy(A.normals[0]).multiplyScalar(st.x),E.copy(A.binormals[0]).multiplyScalar(st.y),P.copy(_[0]).add(T).add(E),at(P.x,P.y,P.z)):at(st.x,st.y,0)}for(let Q=1;Q<=h;Q++)for(let st=0;st<G;st++){let I=d?X(M[st],Wt[st],he):M[st];v?(T.copy(A.normals[Q]).multiplyScalar(I.x),E.copy(A.binormals[Q]).multiplyScalar(I.y),P.copy(_[Q]).add(T).add(E),at(P.x,P.y,P.z)):at(I.x,I.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let st=Q/g,I=f*Math.cos(st*Math.PI/2),Lt=p*Math.sin(st*Math.PI/2)+y;for(let et=0,St=F.length;et<St;et++){let lt=X(F[et],ct[et],Lt);at(lt.x,lt.y,u+I)}for(let et=0,St=L.length;et<St;et++){let lt=L[et];Tt=_t[et];for(let Ot=0,Mt=lt.length;Ot<Mt;Ot++){let C=X(lt[Ot],Tt[Ot],Lt);v?at(C.x,C.y+_[h-1].y,_[h-1].x+I):at(C.x,C.y,u+I)}}}K(),rt();function K(){let Q=s.length/3;if(d){let st=0,I=G*st;for(let Lt=0;Lt<nt;Lt++){let et=U[Lt];Nt(et[2]+I,et[1]+I,et[0]+I)}st=h+g*2,I=G*st;for(let Lt=0;Lt<nt;Lt++){let et=U[Lt];Nt(et[0]+I,et[1]+I,et[2]+I)}}else{for(let st=0;st<nt;st++){let I=U[st];Nt(I[2],I[1],I[0])}for(let st=0;st<nt;st++){let I=U[st];Nt(I[0]+G*h,I[1]+G*h,I[2]+G*h)}}n.addGroup(Q,s.length/3-Q,0)}function rt(){let Q=s.length/3,st=0;At(F,st),st+=F.length;for(let I=0,Lt=L.length;I<Lt;I++){let et=L[I];At(et,st),st+=et.length}n.addGroup(Q,s.length/3-Q,1)}function At(Q,st){let I=Q.length;for(;--I>=0;){let Lt=I,et=I-1;et<0&&(et=Q.length-1);for(let St=0,lt=h+g*2;St<lt;St++){let Ot=G*St,Mt=G*(St+1),C=st+Lt+Ot,b=st+et+Ot,B=st+et+Mt,$=st+Lt+Mt;Gt(C,b,B,$)}}}function at(Q,st,I){l.push(Q),l.push(st),l.push(I)}function Nt(Q,st,I){Bt(Q),Bt(st),Bt(I);let Lt=s.length/3,et=x.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);oe(et[0]),oe(et[1]),oe(et[2])}function Gt(Q,st,I,Lt){Bt(Q),Bt(st),Bt(Lt),Bt(st),Bt(I),Bt(Lt);let et=s.length/3,St=x.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);oe(St[0]),oe(St[1]),oe(St[3]),oe(St[1]),oe(St[2]),oe(St[3])}function Bt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function oe(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qo[s.type]().fromJSON(s)),new i(n,t.options)}},Gv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new J(r,o),new J(a,l),new J(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],y=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-u),new J(d,1-p),new J(y,1-m)]:[new J(a,1-l),new J(h,1-u),new J(f,1-p),new J(g,1-m)]}};function Vv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ea=class i extends Pe{constructor(t=new Zn([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;Di.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let x=p[g];Di.isClockWise(x)===!0&&(p[g]=x.reverse())}let y=Di.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let x=p[g];f=f.concat(x)}for(let g=0,m=f.length;g<m;g++){let x=f[g];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,m=y.length;g<m;g++){let x=y[g],_=x[0]+u,v=x[1]+u,A=x[2]+u;n.push(_,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Wv(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Wv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var te=class i extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,d=new R,f=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){let x=[],_=m/n,v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){let E=A/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(E+v,1-_),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let _=h[m][x+1],v=h[m][x],A=h[m+1][x],E=h[m+1][x+1];(m!==0||o>0)&&f.push(_,v,E),(m!==n-1||l<Math.PI)&&f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(y,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var xn=class i extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let y=p/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let y=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,x=(s+1)*f+p;o.push(y,g,x),o.push(g,m,x)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var na=class i extends Pe{constructor(t=new js(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new J,h=new R,u=[],d=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function y(){for(let _=0;_<e;_++)g(_);g(r===!1?e:0),x(),m()}function g(_){h=t.getPointAt(_/e,h);let v=o.normals[_],A=o.binormals[_];for(let E=0;E<=s;E++){let T=E/s*Math.PI*2,P=Math.sin(T),S=-Math.cos(T);l.x=S*v.x+P*A.x,l.y=S*v.y+P*A.y,l.z=S*v.z+P*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let A=(s+1)*(_-1)+(v-1),E=(s+1)*_+(v-1),T=(s+1)*_+v,P=(s+1)*(_-1)+v;p.push(A,E,P),p.push(E,T,P)}}function x(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)c.x=_/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Qo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ia=class extends qe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ht=class extends mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Eo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var tr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hc=class extends tr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jh,endingEnd:Jh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case jh:r=t,a=2*e-n;break;case Qh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:o=t,l=2*n-e;break;case Qh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),y=p*p,g=y*p,m=-d*g+2*d*y-d*p,x=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*y+.5*p,v=f*g-f*y;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+x*o[c+A]+_*o[l+A]+v*o[u+A];return r}},zc=class extends tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Gc=class extends tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Eo(e,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Eo(t.times,Array),values:Eo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Io:e=this.InterpolantFactoryMethodDiscrete;break;case dc:e=this.InterpolantFactoryMethodLinear;break;case Ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Xv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let y=e[u+p];if(y!==e[d+p]||y!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=dc;var as=class extends Fn{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Io;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends Fn{};Vc.prototype.ValueTypeName="color";var Wc=class extends Fn{};Wc.prototype.ValueTypeName="number";var Xc=class extends tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},sa=class extends Fn{InterpolantFactoryMethodLinear(t){return new Xc(this.times,this.values,this.getValueSize(),t)}};sa.prototype.ValueTypeName="quaternion";sa.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Fn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Io;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends Fn{};qc.prototype.ValueTypeName="vector";var Yc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},qv=new Yc,$c=class{constructor(t){this.manager=t!==void 0?t:qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$c.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ki=class extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Tl=new jt,nd=new R,id=new R,Hr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;nd.setFromMatrixPosition(t.matrixWorld),e.position.copy(nd),id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(id),e.updateMatrixWorld(),Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zc=class extends Hr{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Do*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},er=class extends cs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},sd=new jt,wr=new R,Al=new R,Kc=class extends Hr{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(t.matrixWorld),n.position.copy(wr),Al.copy(n.position),Al.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Al),n.updateMatrixWorld(),s.makeTranslation(-wr.x,-wr.y,-wr.z),sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd)}},Oe=class extends cs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Jc=class extends Hr{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ra=class extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Oi=class extends cs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var nr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=rd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function rd(){return performance.now()}var mh="\\[\\]\\.:\\/",Yv=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",$v="[^"+mh.replace("\\.","")+"]",Zv=/((?:WC+[\/:])*)/.source.replace("WC",gh),Kv=/(WCOD+)?/.source.replace("WCOD",$v),Jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),jv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),Qv=new RegExp("^"+Zv+Kv+Jv+jv+"$"),tx=["material","materials","bones","map"],jc=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yv,"")}static parseTrackName(t){let e=Qv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=jc;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ix=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);var Ze=(i,t,e)=>Math.max(t,Math.min(e,i)),Ve=(i,t,e)=>i+(t-i)*e,sn=(i,t,e,n)=>Ve(i,t,1-Math.exp(-e*n)),rr=(i=0,t=1)=>i+Math.random()*(t-i);function Te(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ld(i,t){let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}var W=(i,t=document)=>t.querySelector(i),ha=(i,t=document)=>[...t.querySelectorAll(i)];function Jt(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var fn=i=>new Promise(t=>setTimeout(t,i));function Bi(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Dd=()=>typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;var hs={linear:i=>i,in:i=>i*i*i,out:i=>1-Math.pow(1-i,3),inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,sine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),outElastic:i=>i===0||i===1?i:Math.pow(2,-10*i)*Math.sin((i*10-.75)*(2*Math.PI/3))+1},ua=class{constructor(){this.time=0,this.waits=[],this.tweens=[],this.skipping=!1}reset(){this.waits=[],this.tweens=[],this.skipping=!1}update(t){if(this.time+=t,this.waits.length){let e=[];this.waits=this.waits.filter(n=>n.t<=this.time||n.cond&&n.cond()?(e.push(n),!1):!0);for(let n of e)n.resolve()}if(this.tweens.length){let e=[];for(let n of this.tweens){n.t+=t;let s=Math.min(1,n.t/n.d);n.fn(n.ease(s)),s>=1&&e.push(n)}if(e.length){this.tweens=this.tweens.filter(n=>!e.includes(n));for(let n of e)n.resolve()}}}wait(t){return this.skipping||t<=0?Promise.resolve():new Promise(e=>this.waits.push({t:this.time+t,resolve:e}))}until(t){return t()?Promise.resolve():new Promise(e=>this.waits.push({t:1/0,cond:t,resolve:e}))}tween(t,e,n=hs.inOut){return this.skipping||t<=0?(e(1),Promise.resolve()):(e(0),new Promise(s=>this.tweens.push({t:0,d:t,fn:e,ease:n,resolve:s})))}skipAll(){this.skipping=!0;let t=this.tweens;this.tweens=[];for(let n of t)n.fn(1),n.resolve();let e=this.waits.filter(n=>!n.cond);this.waits=this.waits.filter(n=>n.cond);for(let n of e)n.resolve()}};var da=class{constructor(t){this.canvas=t,this.down=new Set,this.pressed=new Set,this.mdx=0,this.mdy=0,this.locked=!1,this.isTouch=Dd(),this.stick={x:0,y:0},this.onLockChange=null,this.onKey=null,addEventListener("keydown",e=>{e.repeat||(this.down.add(e.code),this.pressed.add(e.code),this.onKey?.(e),this.locked&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.down.delete(e.code)),addEventListener("blur",()=>this.down.clear()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.onLockChange?.(this.locked)}),addEventListener("mousemove",e=>{(this.locked||this.dragging&&e.buttons&1)&&(this.mdx+=Ze(e.movementX,-200,200),this.mdy+=Ze(e.movementY,-200,200))}),t.addEventListener("mousedown",e=>{e.button===0&&(this.dragging=!0),this.pressed.add("Mouse"+e.button),this.down.add("Mouse"+e.button)}),addEventListener("mouseup",e=>{this.down.delete("Mouse"+e.button),e.button===0&&(this.dragging=!1)}),this.isTouch&&this._setupTouch()}requestLock(){if(!(this.isTouch||this.locked))try{let t=this.canvas.requestPointerLock?.();t&&t.catch&&t.catch(()=>{})}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}isDown(...t){return t.some(e=>this.down.has(e))}wasPressed(...t){return t.some(e=>this.pressed.has(e))}endFrame(){this.pressed.clear(),this.mdx=0,this.mdy=0}moveAxis(){let t=0,e=0;this.isDown("KeyW","ArrowUp")&&(e+=1),this.isDown("KeyS","ArrowDown")&&(e-=1),this.isDown("KeyD","ArrowRight")&&(t+=1),this.isDown("KeyA","ArrowLeft")&&(t-=1),t+=this.stick.x,e+=-this.stick.y;let n=Math.hypot(t,e);return n>1&&(t/=n,e/=n),{x:t,z:e}}showTouch(t){this.touchRoot&&(this.touchRoot.dataset.mode=t||"off")}_setupTouch(){let t=document.getElementById("touch");if(!t)return;this.touchRoot=t;let e=t.querySelector(".stick"),n=t.querySelector(".knob"),s=null,r=null,o=0,a=0,l=0,c=0,h=null,u=p=>{let y=t.dataset.mode;for(let g of p.changedTouches)if(!g.target.closest(".tbtn")){if(y==="runner"){h={id:g.identifier,x:g.clientX,y:g.clientY,done:!1};continue}y==="explore"&&(g.clientX<innerWidth*.45&&s===null?(s=g.identifier,o=g.clientX,a=g.clientY,e.style.left=o+"px",e.style.top=a+"px",e.classList.add("on")):r===null&&(r=g.identifier,l=g.clientX,c=g.clientY))}},d=p=>{for(let y of p.changedTouches)if(y.identifier===s){let g=y.clientX-o,m=y.clientY-a,x=55,_=Math.hypot(g,m)||1,v=Math.min(1,_/x);this.stick.x=g/_*v,this.stick.y=m/_*v,n.style.transform=`translate(${this.stick.x*x}px, ${this.stick.y*x}px)`}else if(y.identifier===r)this.mdx+=(y.clientX-l)*2.2,this.mdy+=(y.clientY-c)*2.2,l=y.clientX,c=y.clientY;else if(h&&y.identifier===h.id&&!h.done){let g=y.clientX-h.x,m=y.clientY-h.y;Math.hypot(g,m)>28&&(h.done=!0,Math.abs(g)>Math.abs(m)?this.pressed.add(g>0?"SwipeRight":"SwipeLeft"):this.pressed.add(m>0?"SwipeDown":"SwipeUp"))}t.dataset.mode!=="off"&&p.preventDefault()},f=p=>{for(let y of p.changedTouches)y.identifier===s&&(s=null,this.stick.x=0,this.stick.y=0,n.style.transform="",e.classList.remove("on")),y.identifier===r&&(r=null),h&&y.identifier===h.id&&(h=null)};addEventListener("touchstart",u,{passive:!0}),addEventListener("touchmove",d,{passive:!1}),addEventListener("touchend",f),addEventListener("touchcancel",f);for(let p of t.querySelectorAll(".tbtn")){let y=p.dataset.code;p.addEventListener("touchstart",m=>{m.preventDefault(),this.pressed.add(y),this.down.add(y),p.classList.add("on")},{passive:!1});let g=()=>{this.down.delete(y),p.classList.remove("on")};p.addEventListener("touchend",g),p.addEventListener("touchcancel",g)}}};var me=i=>440*Math.pow(2,(i-69)/12),Fe=Math.random,fa=class{constructor(){this.ctx=null,this.track=null,this.trackName=null,this.pendingMusic=null,this.ambientNodes=[],this.vol={master:.8,music:.6,sfx:.9}}get now(){return this.ctx?this.ctx.currentTime:0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;if(this.out=e.createDynamicsCompressor(),this.out.threshold.value=-12,this.out.ratio.value=4,this.out.connect(e.destination),this.master=e.createGain(),this.master.connect(this.out),this.musicBus=e.createGain(),this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.ambBus=e.createGain(),this.ambBus.connect(this.sfxBus),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(2.6,2.4),this.revGain=e.createGain(),this.revGain.gain.value=.5,this.reverb.connect(this.revGain),this.revGain.connect(this.master),this.noiseBuf=this._noise(2),this.brownBuf=this._brown(4),this.distCurve=this._curve(60),this.setVolumes(this.vol),this._seq=setInterval(()=>this._tick(),25),this.pendingMusic){let n=this.pendingMusic;this.pendingMusic=null,this.playMusic(n)}this.pendingAmbient&&this.setAmbient(this.pendingAmbient)}setVolumes(t){Object.assign(this.vol,t),this.ctx&&(this.master.gain.value=this.vol.master,this.musicBus.gain.value=this.vol.music*.9,this.sfxBus.gain.value=this.vol.sfx)}setReverb(t){this.revGain&&this.revGain.gain.setTargetAtTime(t,this.now,.3)}_noise(t){let e=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),n=e.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Fe()*2-1;return e}_brown(t){let e=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),n=e.getChannelData(0),s=0;for(let r=0;r<n.length;r++)s=(s+.02*(Fe()*2-1))/1.02,n[r]=s*3.5;return e}_impulse(t,e){let n=this.ctx.sampleRate,s=n*t,r=this.ctx.createBuffer(2,s,n);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++)a[l]=(Fe()*2-1)*Math.pow(1-l/s,e)}return r}_curve(t){let n=new Float32Array(1024);for(let s=0;s<1024;s++){let r=s*2/1024-1;n[s]=(3+t)*r*20*(Math.PI/180)/(Math.PI+t*Math.abs(r))}return n}_route(t,e,n){if(t.connect(e||this.sfxBus),n){let s=this.ctx.createGain();s.gain.value=n,t.connect(s),s.connect(this.reverb)}}tone({type:t="sine",f:e=440,f2:n=null,t:s=this.now,a:r=.005,d:o=.3,g:a=.3,dest:l,send:c=0,detune:h=0,vib:u=0,vibRate:d=5,filter:f=null}){if(!this.ctx)return;let p=this.ctx,y=p.createOscillator();if(y.type=t,y.frequency.setValueAtTime(e,s),n&&y.frequency.exponentialRampToValueAtTime(Math.max(1,n),s+r+o),y.detune.value=h,u){let x=p.createOscillator(),_=p.createGain();x.frequency.value=d,_.gain.value=u,x.connect(_),_.connect(y.frequency),x.start(s),x.stop(s+r+o+.1)}let g=p.createGain();g.gain.setValueAtTime(1e-4,s),g.gain.linearRampToValueAtTime(a,s+r),g.gain.exponentialRampToValueAtTime(1e-4,s+r+o);let m=y;if(f){let x=p.createBiquadFilter();x.type=f.type||"lowpass",x.frequency.value=f.f,x.Q.value=f.q||.7,y.connect(x),m=x}return m.connect(g),this._route(g,l,c),y.start(s),y.stop(s+r+o+.05),y}noise({t=this.now,a:e=.005,d:n=.2,g:s=.3,type:r="bandpass",f:o=1e3,f2:a=null,q:l=1,dest:c,send:h=0,brown:u=!1}){if(!this.ctx)return;let d=this.ctx,f=d.createBufferSource();f.buffer=u?this.brownBuf:this.noiseBuf,f.playbackRate.value=.8+Fe()*.4;let p=d.createBiquadFilter();p.type=r,p.frequency.setValueAtTime(o,t),a&&p.frequency.exponentialRampToValueAtTime(a,t+e+n),p.Q.value=l;let y=d.createGain();y.gain.setValueAtTime(1e-4,t),y.gain.linearRampToValueAtTime(s,t+e),y.gain.exponentialRampToValueAtTime(1e-4,t+e+n),f.connect(p),p.connect(y),this._route(y,c,h),f.start(t,Fe()*1.5),f.stop(t+e+n+.05)}pluck(t,e,n,s,r,o="triangle"){this.tone({type:o,f:e,t,a:.003,d:n,g:s,dest:r})}bell(t,e,n,s){this.tone({type:"sine",f:e,t,a:.002,d:1.6,g:n,dest:s,send:.3}),this.tone({type:"sine",f:e*2.76,t,a:.002,d:.6,g:n*.35,dest:s})}pad(t,e,n,s,r,o=900){if(!this.ctx)return;let a=this.ctx,l=a.createBiquadFilter();l.type="lowpass",l.frequency.value=o;let c=a.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(s,t+Math.min(1.2,n*.3)),c.gain.setValueAtTime(s,t+n*.75),c.gain.linearRampToValueAtTime(1e-4,t+n),l.connect(c),c.connect(r);for(let h of e)for(let u of[-8,8]){let d=a.createOscillator();d.type="sawtooth",d.frequency.value=me(h),d.detune.value=u,d.connect(l),d.start(t),d.stop(t+n+.05)}}kick(t,e,n){this.tone({type:"sine",f:150,f2:42,t,a:.002,d:.28,g:e,dest:n})}snare(t,e,n){this.noise({t,d:.16,g:e,type:"highpass",f:1400,dest:n}),this.tone({type:"triangle",f:210,f2:150,t,d:.08,g:e*.6,dest:n})}hat(t,e,n,s=!1){this.noise({t,d:s?.18:.04,g:e,type:"highpass",f:7500,dest:n})}bass(t,e,n,s,r,o=700){this.tone({type:"sawtooth",f:e,t,a:.005,d:n,g:s,dest:r,filter:{f:o,q:4}})}distBass(t,e,n,s,r){if(!this.ctx)return;let o=this.ctx,a=o.createOscillator();a.type="sawtooth",a.frequency.value=e;let l=o.createWaveShaper();l.curve=this.distCurve;let c=o.createBiquadFilter();c.type="lowpass",c.frequency.value=1200;let h=o.createGain();h.gain.setValueAtTime(s,t),h.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(l),l.connect(c),c.connect(h),h.connect(r),a.start(t),a.stop(t+n+.05)}play(t,e={}){if(!this.ctx)return;let n=this.now+(e.delay||0),s=e.vol??1;switch(t){case"step":{let r=e.surface||"marble",o=r==="wood"?450:r==="concrete"?1300:r==="carpet"?300:950;this.noise({t:n,a:.002,d:r==="carpet"?.05:.09,g:.14*s,type:"bandpass",f:o*(.85+Fe()*.3),q:1.3,send:.25}),this.tone({type:"sine",f:120,f2:55,t:n,d:.07,g:.12*s});break}case"click":this.tone({type:"square",f:1900,t:n,d:.025,g:.05*s,filter:{f:3e3}});break;case"hover":this.tone({type:"sine",f:1300,t:n,d:.04,g:.035*s});break;case"select":this.tone({type:"triangle",f:660,t:n,d:.08,g:.1*s}),this.tone({type:"triangle",f:990,t:n+.06,d:.12,g:.1*s});break;case"back":this.tone({type:"triangle",f:700,t:n,d:.08,g:.08*s}),this.tone({type:"triangle",f:470,t:n+.06,d:.12,g:.08*s});break;case"chime":{[72,76,79,84,88].forEach((r,o)=>{this.tone({type:"triangle",f:me(r),t:n+o*.07,d:.7,g:.12*s,send:.4}),this.tone({type:"sine",f:me(r+12),t:n+o*.07,d:.4,g:.04*s})});break}case"unlock":this.tone({type:"square",f:300,t:n,d:.05,g:.08*s,filter:{f:1500}}),this.tone({type:"square",f:180,t:n+.08,d:.08,g:.1*s,filter:{f:1200}}),this.noise({t:n+.08,d:.1,g:.15*s,f:2500,q:2});break;case"error":this.tone({type:"square",f:150,t:n,d:.13,g:.07*s,filter:{f:900}}),this.tone({type:"square",f:112,t:n+.15,d:.22,g:.07*s,filter:{f:900}});break;case"tick":this.tone({type:"sine",f:2400,t:n,d:.015,g:.05*s});break;case"type":this.noise({t:n,d:.03,g:.12*s,f:3e3+Fe()*1500,q:3});break;case"munch":for(let r=0;r<4;r++)this.noise({t:n+r*(.09+Fe()*.05),d:.06,g:.22*s,f:1500+Fe()*2e3,q:1.5});this.tone({type:"sine",f:300,f2:120,t:n+.42,d:.12,g:.12*s});break;case"pickup":this.tone({type:"sine",f:520,f2:1500,t:n,d:.16,g:.12*s}),[88,91,96].forEach((r,o)=>this.tone({type:"triangle",f:me(r),t:n+.08+o*.05,d:.3,g:.06*s,send:.4}));break;case"coin":this.tone({type:"square",f:me(83+(e.pitch||0)),t:n,d:.05,g:.05*s,filter:{f:4e3}}),this.tone({type:"square",f:me(88+(e.pitch||0)),t:n+.05,d:.14,g:.05*s,filter:{f:4e3}});break;case"flashlight":this.noise({t:n,d:.02,g:.25*s,f:3500,q:4}),this.noise({t:n+.05,d:.02,g:.18*s,f:2500,q:4});break;case"roar":this._roar(n,s,e.short);break;case"growl":this._roar(n,s*.45,!0,!0);break;case"stomp":this.tone({type:"sine",f:70,f2:28,t:n,a:.005,d:.6,g:.7*s,send:.5}),this.noise({t:n,d:.5,g:.35*s,type:"lowpass",f:220,send:.6,brown:!0});break;case"clatter":for(let r=0;r<16;r++){let o=n+Fe()*1.4*(r/16+.2);this.noise({t:o,d:.05+Fe()*.05,g:(.15+Fe()*.15)*s,f:1200+Fe()*2600,q:6,send:.7})}for(let r=0;r<4;r++)this.tone({type:"sine",f:90+Fe()*40,f2:40,t:n+Fe()*1.2,d:.3,g:.3*s,send:.6});break;case"creak":this.tone({type:"sawtooth",f:70,f2:95,t:n,a:.2,d:1.2,g:.05*s,vib:18,vibRate:13,filter:{type:"bandpass",f:700,q:6},send:.6});break;case"whoosh":this.noise({t:n,a:.12,d:.35,g:.3*s,f:400,f2:2500,q:1.5});break;case"heartbeat":this.tone({type:"sine",f:60,f2:40,t:n,d:.14,g:.5*s}),this.tone({type:"sine",f:55,f2:38,t:n+.22,d:.18,g:.4*s});break;case"beep":this.tone({type:"sine",f:760,t:n,a:.004,d:e.dur||.1,g:.14*s});break;case"static":this.noise({t:n,d:e.dur||.35,g:.12*s,type:"highpass",f:2500});break;case"radio":this.noise({t:n,d:.25,g:.14*s,type:"bandpass",f:1800,q:.8}),this.tone({type:"square",f:1200,t:n+.25,d:.06,g:.04*s});break;case"gate":this.tone({type:"sawtooth",f:55,f2:75,t:n,a:.1,d:1.6,g:.12*s,filter:{type:"bandpass",f:400,q:3},send:.4}),this.noise({t:n,a:.1,d:1.6,g:.08*s,f:900,q:4,send:.3}),this.tone({type:"sine",f:90,f2:40,t:n+1.6,d:.3,g:.4*s,send:.4});break;case"bonk":this.tone({type:"sine",f:420,f2:90,t:n,d:.25,g:.4*s}),this.noise({t:n,d:.2,g:.3*s,f:800});break;case"crash":this.noise({t:n,d:1.2,g:.6*s,type:"lowpass",f:3e3,f2:200,send:.6}),this.tone({type:"sine",f:80,f2:30,t:n,d:.8,g:.8*s});for(let r=0;r<10;r++)this.noise({t:n+.1+Fe()*.9,d:.08,g:.12*s,f:2e3+Fe()*3e3,q:5,send:.5});break;case"scratch":this.noise({t:n,a:.01,d:.25,g:.4*s,f:3e3,f2:600,q:2}),this.tone({type:"sawtooth",f:900,f2:120,t:n,d:.25,g:.1*s});break;case"wahwah":{[55,54,53].forEach((r,o)=>this.tone({type:"sawtooth",f:me(r),t:n+o*.55,a:.05,d:.5,g:.12*s,filter:{f:1100}})),this.tone({type:"sawtooth",f:me(52),t:n+1.65,a:.05,d:1.5,g:.12*s,vib:6,vibRate:6,filter:{f:1e3}});break}case"kick":this.noise({t:n,a:.05,d:.2,g:.4*s,f:600,f2:3e3}),this.tone({type:"sine",f:160,f2:40,t:n+.22,d:.5,g:.9*s}),this.noise({t:n+.22,d:.4,g:.5*s,type:"lowpass",f:1500});break;case"crt":this.tone({type:"sine",f:9e3,f2:300,t:n,d:.4,g:.05*s}),this.tone({type:"sine",f:90,f2:30,t:n,d:.3,g:.4*s});break;case"glitch":for(let r=0;r<6;r++)this.tone({type:"square",f:100+Fe()*2e3,t:n+r*.04,d:.035,g:.05*s});break;case"alarm":for(let r=0;r<(e.n||3);r++)this.tone({type:"sawtooth",f:620,t:n+r*.8,d:.38,g:.05*s,filter:{f:1800}}),this.tone({type:"sawtooth",f:830,t:n+r*.8+.4,d:.38,g:.05*s,filter:{f:1800}});break;case"yawn":this.tone({type:"sawtooth",f:330,f2:160,t:n,a:.3,d:1.3,g:.06*s,filter:{type:"bandpass",f:800,q:2}});break;case"sparkle":for(let r=0;r<6;r++)this.tone({type:"sine",f:me(84+Math.floor(Fe()*14)),t:n+r*.05,d:.2,g:.04*s,send:.5});break;case"drip":this.tone({type:"sine",f:1400+Fe()*500,f2:600,t:n,d:.12,g:.06*s,send:.8});break;case"thud":this.tone({type:"sine",f:100,f2:45,t:n,d:.25,g:.4*s,send:.3}),this.noise({t:n,d:.12,g:.2*s,type:"lowpass",f:500});break;case"buzz":this.tone({type:"sawtooth",f:120,t:n,d:.25,g:.05*s,filter:{f:800}});break;case"sting":this.tone({type:"sawtooth",f:me(45),t:n,a:.01,d:2.2,g:.12*s,filter:{f:900},send:.5}),this.tone({type:"sawtooth",f:me(46),t:n,a:.01,d:2.2,g:.1*s,filter:{f:900},send:.5}),this.tone({type:"sine",f:me(81),t:n,a:.01,d:1.5,g:.06*s,vib:8,send:.5}),this.noise({t:n,d:.6,g:.3*s,type:"lowpass",f:400,brown:!0});break;default:break}}_roar(t,e,n=!1,s=!1){let r=this.ctx,o=n?1.2:2.4,a=r.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.9*e,t+.25),a.gain.setValueAtTime(.9*e,t+o*.6),a.gain.exponentialRampToValueAtTime(1e-4,t+o);let l=r.createGain();l.gain.value=.7;let c=r.createOscillator();c.frequency.value=s?9:22;let h=r.createGain();h.gain.value=.3,c.connect(h),h.connect(l.gain),c.start(t),c.stop(t+o);let u=r.createWaveShaper();u.curve=this.distCurve;let d=r.createBiquadFilter();d.type="lowpass",d.Q.value=3,d.frequency.setValueAtTime(350,t),d.frequency.linearRampToValueAtTime(s?600:1700,t+.4),d.frequency.linearRampToValueAtTime(300,t+o),u.connect(d),d.connect(l),l.connect(a),this._route(a,null,.7);for(let[f,p]of[[68,0],[91,12],[113,-9],[46,4]]){let y=r.createOscillator();y.type="sawtooth",y.frequency.setValueAtTime(f*.8,t),y.frequency.linearRampToValueAtTime(f*1.25,t+.35),y.frequency.linearRampToValueAtTime(f*.7,t+o),y.detune.value=p,y.connect(u),y.start(t),y.stop(t+o+.05)}this.noise({t,a:.2,d:o,g:.35*e,type:"bandpass",f:700,f2:300,q:.8,send:.6})}babble(t,e,n){if(!this.ctx)return 0;let s={guard:210,dev:150,aaron:260,museos:520,narrator:180}[e]||200,r=e==="museos"?"sine":e==="dev"?"sawtooth":"triangle",o=this.now+.02,a=String(t).split(/\s+/);for(let l of a){let c=Math.max(1,Math.round(l.replace(/[^a-z]/gi,"").length/2.6));for(let h=0;h<c;h++){let u=s*(.85+Fe()*.45)*(l===l.toUpperCase()&&l.length>1?1.25:1);this.tone({type:r,f:u,f2:u*(.9+Fe()*.2),t:o,a:.01,d:.07,g:.06,dest:n,filter:{f:1800}}),o+=.085}o+=/[.,!?…]$/.test(l)?.22:.05}return o-this.now}playMusic(t,e=1.5){if(!this.ctx){this.pendingMusic=t;return}if(this.trackName===t)return;let n=this.now,s=this.track;if(s){s.dead=!0;let a=s.gain.gain;a.cancelScheduledValues(n),a.setValueAtTime(a.value,n),a.linearRampToValueAtTime(0,n+e),setTimeout(()=>s.gain.disconnect(),e*1e3+400)}this.trackName=t;let r=ex[t];if(!r){this.track=null;return}let o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(r.vol??.8,n+Math.max(.05,e*.5)),o.connect(this.musicBus),this.track={def:r,gain:o,step:0,next:n+.08,dead:!1}}stopMusic(t=1){this.playMusic(null,t)}_tick(){let t=this.track;if(!t||t.dead||!this.ctx)return;let e=60/t.def.bpm/4;for(t.next<this.now-.3&&(t.next=this.now+.05);t.next<this.now+.15;){try{t.def.step(this,t.step,t.next,e,t.gain)}catch(n){console.warn(n)}t.step++,t.next+=e}}setAmbient(t){if(!this.ctx){this.pendingAmbient=t;return}let e=this.now;for(let s of this.ambientNodes)try{s.g.gain.setTargetAtTime(0,e,.4),setTimeout(()=>s.src.stop(),2e3)}catch{}this.ambientNodes=[],this.ambientKind=t;let n=(s,r,o,a,l,c=1)=>{let h=this.ctx.createBufferSource();h.buffer=s,h.loop=!0,h.playbackRate.value=c;let u=this.ctx.createBiquadFilter();u.type=r,u.frequency.value=o,u.Q.value=a;let d=this.ctx.createGain();return d.gain.setValueAtTime(0,e),d.gain.linearRampToValueAtTime(l,e+2),h.connect(u),u.connect(d),d.connect(this.ambBus),h.start(),this.ambientNodes.push({src:h,g:d,fl:u}),{src:h,g:d,fl:u}};if(t==="night")n(this.brownBuf,"lowpass",200,.5,.12),n(this.noiseBuf,"bandpass",5e3,.5,.006);else if(t==="office"){n(this.brownBuf,"lowpass",180,.5,.08);let s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=60;let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=240;let o=this.ctx.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.025,e+2),s.connect(r),r.connect(o),o.connect(this.ambBus),s.start(),this.ambientNodes.push({src:s,g:o})}else if(t==="day"){let s=n(this.brownBuf,"bandpass",500,.6,.18,1.6),r=this.ctx.createOscillator(),o=this.ctx.createGain();r.frequency.value=.3,o.gain.value=.05,r.connect(o),o.connect(s.g.gain),r.start(),this.ambientNodes.push({src:r,g:o}),n(this.noiseBuf,"bandpass",1400,2,.01)}else t==="maze"?(n(this.brownBuf,"lowpass",110,.7,.22),n(this.noiseBuf,"bandpass",300,4,.01)):t==="runner"&&n(this.noiseBuf,"bandpass",600,.4,.04)}},ex={menu:{bpm:76,vol:.7,step(i,t,e,n,s){let r=Math.floor(t/16)%4,o=t%16,l=[[57,60,64],[53,57,60],[50,53,57],[52,56,59]][r];if(o===0&&(i.pad(e,l.map(c=>c-12),n*16,.035,s,700),i.tone({type:"sine",f:me(l[0]-24),t:e,a:.1,d:n*15,g:.12,dest:s})),o%2===0){let c=[0,1,2,1,2,1,0,2];i.pluck(e,me(l[c[o/2%8]]+12),.5,.045,s)}o===10&&r%2===1&&i.bell(e,me(l[2]+24),.03,s)}},explore:{bpm:54,vol:.75,step(i,t,e,n,s){let r=t%64;r===0&&i.pad(e,[33,40],n*64,.03,s,400);let o=Math.sin(t*12.9898)*43758.5453,a=o-Math.floor(o);if(t%4===0&&a<.3){let l=[69,72,74,76,79,81,84];i.bell(e,me(l[Math.floor(a*23)%l.length]),.025,s)}r===32&&i.tone({type:"triangle",f:me(45),t:e,a:.01,d:2,g:.08,dest:s})}},tension:{bpm:84,vol:.8,step(i,t,e,n,s){let r=t%16;r===0&&i.kick(e,.35,s),r===3&&i.kick(e,.22,s),t%32===0&&i.pad(e,[45,46,57],n*32,.03,s,600),t%2===0&&i.tone({type:"sawtooth",f:me(81+(t%8===0?1:0)),t:e,d:n*1.5,g:.012,dest:s,filter:{f:2e3}})}},chase:{bpm:156,vol:.85,step(i,t,e,n,s){let r=t%16,o=Math.floor(t/16)%4,l=[40,36,38,35][o];r%4===0&&i.kick(e,.55,s),(r===4||r===12)&&i.snare(e,.3,s),r%2===1&&i.hat(e,.08,s,r===15);let c=[0,0,12,0,0,12,0,7,0,0,12,0,10,12,7,5];if(i.bass(e,me(l+c[r]-12),n*.9,.13,s,900),Math.floor(t/64)%2===1&&r%2===0){let h=[64,67,71,67,76,74,71,67];i.pluck(e,me(h[r/2%8]+(o===1?-4:o===2?-2:o===3?-5:0)),.14,.05,s,"square")}r===0&&o===0&&i.tone({type:"sawtooth",f:me(76),f2:me(64),t:e,d:n*8,g:.03,dest:s,filter:{f:2500}})}},maze:{bpm:92,vol:.75,step(i,t,e,n,s){let r=t%16,o=Math.floor(t/16)%4;if(r%2===0&&i.hat(e,r%4===0?.04:.02,s),r%4===0&&i.bass(e,me([33,33,34,32][o]),n*3,.1,s,400),r===8&&o%2===1){let a=[69,72,75,78][Math.floor(t/32)%4];i.tone({type:"sine",f:me(a),t:e,a:.2,d:1.6,g:.05,dest:s,vib:5,vibRate:5,send:.4})}r===0&&o===0&&i.pad(e,[45,51],n*64,.025,s,500)}},morning:{bpm:112,vol:.7,step(i,t,e,n,s){let r=t%16,o=Math.floor(t/16)%4,l=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]][o];r%4===0&&i.bass(e,me(l[0]-24),n*2,.1,s,500),[0,3,6,8,11,14].includes(r)&&l.forEach(c=>i.pluck(e,me(c+12),.25,.03,s)),r%4===2&&i.hat(e,.03,s),(r===4||r===12)&&i.snare(e,.06,s),r%8===0&&i.kick(e,.25,s)}},meta:{bpm:100,vol:.7,step(i,t,e,n,s){let r=t%16,o=Math.floor(t/16)%4,l=[[60,64,67,71],[57,60,64,67],[50,53,57,60],[55,59,62,65]][o];[0,6,10].includes(r)&&l.forEach(c=>i.tone({type:"sine",f:me(c),t:e,a:.01,d:.6,g:.03,dest:s,vib:3,vibRate:4})),r%4===0&&i.pluck(e,me(l[0]-24+(r===8?7:0)),.4,.12,s,"sine"),r%4===3&&i.noise({t:e,d:.02,g:.05,f:4e3,q:4,dest:s})}},angry:{bpm:150,vol:.9,step(i,t,e,n,s){let r=t%16;r%4===0&&i.kick(e,.7,s),(r===4||r===12)&&i.snare(e,.4,s),r%2===0&&i.distBass(e,me([28,28,31,28,34,28,33,31][r/2%8]),n*1.8,.12,s),i.hat(e,.06,s)}}};var Ud=4;function Nd(i){Ud=Math.min(8,i||4)}function ve(i,t,e){let n=document.createElement("canvas");return n.width=i,n.height=t,[n,n.getContext("2d",e)]}function Me(i,{repeat:t=[1,1],srgb:e=!0}={}){let n=new gi(i);return n.wrapS=n.wrapT=Pr,n.repeat.set(t[0],t[1]),e&&(n.colorSpace=hn),n.anisotropy=Ud,n}function Hn(i,t,e,n,s){let r=i.getImageData(0,0,t,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=(s()-.5)*n;o[a]+=l,o[a+1]+=l,o[a+2]+=l}i.putImageData(r,0,0)}var yh=new Map;function nx(i,t){return yh.has(i)||yh.set(i,t()),yh.get(i)}function be(i,t=1,e=1){let s=nx(i,()=>ix[i]()).clone();return s.repeat.set(t,e),s.needsUpdate=!0,s}var ix={marble(){let[t,e]=ve(512,512),n=Te(7);for(let s=0;s<2;s++)for(let r=0;r<2;r++){let o=(s+r)%2===1;e.fillStyle=o?"#2b2f38":"#ddd6c8",e.fillRect(s*256,r*256,256,256),e.strokeStyle=o?"rgba(255,255,255,0.10)":"rgba(80,70,60,0.18)";for(let a=0;a<7;a++){e.lineWidth=.6+n()*1.6,e.beginPath();let l=s*256+n()*256,c=r*256;e.moveTo(l,c);for(let h=0;h<8;h++)l+=(n()-.5)*70,c+=32,e.lineTo(l,c);e.stroke()}}e.strokeStyle="rgba(0,0,0,0.5)",e.lineWidth=2;for(let s=0;s<=2;s++)e.beginPath(),e.moveTo(s*256,0),e.lineTo(s*256,512),e.stroke(),e.beginPath(),e.moveTo(0,s*256),e.lineTo(512,s*256),e.stroke();return Hn(e,512,512,14,n),Me(t)},stone(){let[t,e]=ve(512,512),n=Te(3),s=4,r=512/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=120+n()*30;e.fillStyle=`rgb(${l+12},${l+6},${l-6})`,e.fillRect(o*r,a*r,r,r);for(let c=0;c<30;c++)e.fillStyle=`rgba(${n()>.5?255:0},${n()>.5?240:0},200,0.04)`,e.beginPath(),e.arc(o*r+n()*r,a*r+n()*r,4+n()*16,0,7),e.fill()}e.strokeStyle="rgba(30,25,20,0.7)",e.lineWidth=3;for(let o=0;o<=s;o++)e.beginPath(),e.moveTo(o*r,0),e.lineTo(o*r,512),e.stroke(),e.beginPath(),e.moveTo(0,o*r),e.lineTo(512,o*r),e.stroke();return Hn(e,512,512,22,n),Me(t)},wood(){let[t,e]=ve(512,512),n=Te(11),s=8,r=512/s;for(let o=0;o<s;o++){let a=n()*512;for(let l=-1;l<2;l++){let c=70+n()*30;e.fillStyle=`rgb(${c+50},${c+22},${c-10})`,e.fillRect(a+l*512*.6-512*.3,o*r,512*.6,r),e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(a+l*512*.6-512*.3,o*r,2,r)}for(let l=0;l<14;l++){e.strokeStyle=`rgba(40,20,5,${.1+n()*.15})`,e.lineWidth=1,e.beginPath();let c=o*r+n()*r;e.moveTo(0,c),e.bezierCurveTo(512*.3,c+(n()-.5)*8,512*.6,c+(n()-.5)*8,512,c),e.stroke()}e.fillStyle="rgba(0,0,0,0.5)",e.fillRect(0,o*r,512,2)}return Hn(e,512,512,10,n),Me(t)},plaster(){let[t,e]=ve(256,256),n=Te(5);return e.fillStyle="#ffffff",e.fillRect(0,0,256,256),Hn(e,256,256,18,n),Me(t)},mosaic(){let[t,e]=ve(512,512),n=Te(9);e.fillStyle="#3a2a20",e.fillRect(0,0,512,512);let s=16,r=["#c96f3b","#d9a066","#e8d3b0","#8c3b2a","#e8d3b0","#e8d3b0","#5a6e7a"];for(let o=0;o<512/s;o++)for(let a=0;a<512/s;a++){let l=o-512/s/2+.5,c=a-512/s/2+.5,h=Math.floor(Math.max(Math.abs(l),Math.abs(c))),u=r[(h+(Math.abs(l)===Math.abs(c)?3:0))%r.length];h>13&&(u=(o+a)%2?"#8c3b2a":"#e8d3b0"),e.fillStyle=u,e.fillRect(o*s+1+n()*1.2,a*s+1+n()*1.2,s-2.5,s-2.5)}return Hn(e,512,512,18,n),Me(t)},concrete(){let[t,e]=ve(512,512),n=Te(13);e.fillStyle="#6d6a64",e.fillRect(0,0,512,512);for(let s=0;s<400;s++)e.fillStyle=`rgba(${n()>.5?255:0},${n()>.5?255:0},${n()>.5?255:0},0.03)`,e.beginPath(),e.arc(n()*512,n()*512,2+n()*30,0,7),e.fill();e.strokeStyle="rgba(20,20,20,0.35)";for(let s=0;s<5;s++){e.beginPath();let r=n()*512,o=n()*512;e.moveTo(r,o);for(let a=0;a<6;a++)r+=(n()-.5)*60,o+=(n()-.5)*60,e.lineTo(r,o);e.stroke()}return Hn(e,512,512,30,n),Me(t)},shelves(){let[e,n]=ve(512,512),s=Te(21);n.fillStyle="#1b1612",n.fillRect(0,0,512,512);let r=4,o=512/r,a=["#a4824f","#b8955e","#8f6c3c","#c4a574","#9a7a52","#6b5a48"];for(let l=0;l<r;l++){let c=6;for(;c<492;){let h=40+s()*80,u=o*(.45+s()*.45);if(s()<.15){c+=h*.6;continue}n.fillStyle=a[Math.floor(s()*a.length)],n.fillRect(c,(l+1)*o-10-u,h-4,u),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(c,(l+1)*o-10-u,h-4,5),s()<.6&&(n.fillStyle="#efe6cf",n.fillRect(c+h*.2,(l+1)*o-10-u*.6,h*.45,14),n.fillStyle="#333",n.font="bold 9px monospace",n.fillText(["ARCH","FOSSIL","MISC","1974","DO NOT","VASE","BONES?"][Math.floor(s()*7)],c+h*.22,(l+1)*o-10-u*.6+10)),c+=h}n.fillStyle="#5b5550",n.fillRect(0,(l+1)*o-12,512,12),n.fillStyle="rgba(255,255,255,0.15)",n.fillRect(0,(l+1)*o-12,512,2)}return n.fillStyle="#4a4540",n.fillRect(0,0,10,512),n.fillRect(502,0,10,512),Hn(n,512,512,16,s),Me(e)},crate(){let[t,e]=ve(256,256),n=Te(17);e.fillStyle="#8a6a40",e.fillRect(0,0,256,256);for(let s=0;s<6;s++)e.fillStyle=s%2?"#7d5f38":"#94744a",e.fillRect(0,s*(256/6),256,256/6-2);return e.strokeStyle="#4b3820",e.lineWidth=18,e.strokeRect(9,9,238,238),e.beginPath(),e.moveTo(9,9),e.lineTo(247,247),e.stroke(),e.fillStyle="rgba(20,10,0,0.7)",e.font="bold 26px monospace",e.fillText("FRAGILE",70,140),Hn(e,256,256,20,n),Me(t)},carpet(){let[e,n]=ve(512,512),s=Te(23);n.fillStyle="#6e1420",n.fillRect(0,0,512,512),n.fillStyle="#c9a24a",n.fillRect(0,0,14,512),n.fillRect(498,0,14,512),n.fillStyle="#5a0f19",n.fillRect(512/3-3,0,6,512),n.fillRect(2*512/3-3,0,6,512),n.fillStyle="rgba(201,162,74,0.35)";for(let r=0;r<8;r++)for(let o=0;o<3;o++){let a=(o+.5)*170.66666666666666,l=(r+.5)*(512/8);n.beginPath(),n.moveTo(a,l-14),n.lineTo(a+14,l),n.lineTo(a,l+14),n.lineTo(a-14,l),n.closePath(),n.fill()}return Hn(n,512,512,26,s),Me(e)},ceiling(){let[t,e]=ve(256,256),n=Te(31);return e.fillStyle="#cfcac0",e.fillRect(0,0,256,256),e.strokeStyle="#8d877c",e.lineWidth=4,e.strokeRect(0,0,256,256),e.strokeRect(256/2,0,.1,256),e.strokeRect(0,256/2,256,.1),Hn(e,256,256,20,n),Me(t)},bone(){let[t,e]=ve(128,128),n=Te(41);e.fillStyle="#d8ccb0",e.fillRect(0,0,128,128);for(let s=0;s<60;s++)e.fillStyle=`rgba(${n()>.5?120:255},${n()>.5?100:240},80,0.12)`,e.fillRect(n()*128,n()*128,1+n()*10,1+n()*3);return Hn(e,128,128,30,n),Me(t)}};function sx(i,t,e){let n=String(t).split(" "),s=[],r="";for(let o of n){let a=r?r+" "+o:o;i.measureText(a).width>e&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function vh({title:i,body:t="",w:e=512,h:n=320,bg:s="#1c1a17",fg:r="#e9dfc8",accent:o="#c9a24a",titleFont:a="bold 40px Georgia, serif",bodyFont:l="22px Georgia, serif",align:c="left"}){let[h,u]=ve(e,n);u.fillStyle=s,u.fillRect(0,0,e,n),u.strokeStyle=o,u.lineWidth=6,u.strokeRect(10,10,e-20,n-20),u.fillStyle=o,u.font=a,u.textAlign=c;let d=c==="center"?e/2:36;u.fillText(i,d,70),u.fillRect(36,88,e-72,2),u.fillStyle=r,u.font=l;let f=128;for(let p of String(t).split(`
`))for(let y of sx(u,p,e-72))u.fillText(y,d,f),f+=parseInt(l,10)*1.35;return Me(h,{repeat:[1,1]})}function Ae(i,{w:t=512,h:e=128,bg:n="#111",fg:s="#fff",font:r="bold 56px Arial Black, Arial, sans-serif",border:o=null}={}){let[a,l]=ve(t,e);l.fillStyle=n,l.fillRect(0,0,t,e),o&&(l.strokeStyle=o,l.lineWidth=8,l.strokeRect(6,6,t-12,e-12)),l.fillStyle=s,l.font=r,l.textAlign="center",l.textBaseline="middle";let c=String(i).split(`
`),h=e/(c.length+.4);return c.forEach((u,d)=>l.fillText(u,t/2,e/2+(d-(c.length-1)/2)*h)),Me(a)}function kd(i,t="landscape"){let e=Te(i),n=256,s=t==="portrait"?320:192,[r,o]=ve(n,s);if(t==="portrait"){let a=o.createLinearGradient(0,0,0,s);a.addColorStop(0,`hsl(${e()*60+20},30%,25%)`),a.addColorStop(1,`hsl(${e()*60},30%,10%)`),o.fillStyle=a,o.fillRect(0,0,n,s),o.fillStyle=`hsl(${e()*360},40%,30%)`,o.beginPath(),o.ellipse(n/2,s*.95,n*.42,s*.38,0,0,7),o.fill(),o.fillStyle="#d9b38c",o.beginPath(),o.ellipse(n/2,s*.42,n*.17,s*.16,0,0,7),o.fill(),o.fillStyle=`hsl(${e()*40},40%,${10+e()*30}%)`,o.beginPath(),o.ellipse(n/2,s*.33,n*.19,s*.1,0,Math.PI,0),o.fill(),o.fillStyle="#222",o.fillRect(n/2-22,s*.42,8,6),o.fillRect(n/2+14,s*.42,8,6),e()<.5&&(o.fillStyle="#c9a24a",o.fillRect(n/2-30,s*.22,60,14))}else{let a=o.createLinearGradient(0,0,0,s),l=e()*360;a.addColorStop(0,`hsl(${l},50%,${50+e()*20}%)`),a.addColorStop(.6,`hsl(${l+30},50%,70%)`),o.fillStyle=a,o.fillRect(0,0,n,s),o.fillStyle=`hsl(${e()*60+30},70%,70%)`,o.beginPath(),o.arc(n*(.2+e()*.6),s*.3,18,0,7),o.fill();for(let c=0;c<3;c++){o.fillStyle=`hsl(${100+e()*60},${30+c*10}%,${35-c*9}%)`,o.beginPath(),o.moveTo(0,s);for(let h=0;h<=n;h+=16)o.lineTo(h,s*(.5+c*.12)+Math.sin(h*.03+e()*6)*14+e()*10);o.lineTo(n,s),o.fill()}}for(let a=0;a<900;a++)o.fillStyle=`rgba(0,0,0,${e()*.08})`,o.fillRect(e()*n,e()*s,3,3);return Me(r)}function Od(i=128,t=.12){let[e,n]=ve(i,i),s=n.createImageData(i,i);for(let r=0;r<s.data.length;r+=4){let o=Math.random()*255;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=t*255}return n.putImageData(s,0,0),e.toDataURL()}var pa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},rx=new Ys(-1,1,1,-1,0,1),xh=class extends Pe{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}},ox=new xh,Hi=class{constructor(t){this._mesh=new V(ox,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,rx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ma=class extends _n{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Fi.clone(t.uniforms),this.material=new qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Hi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Gr=class extends _n{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ga=class extends _n{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ya=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new J);this._width=n.width,this._height=n.height,e=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ma(pa),this.copyPass.material.blending=Yn,this.clock=new nr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Gr!==void 0&&(o instanceof Gr?n=!0:o instanceof ga&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var va=class extends _n{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ut}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Fd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var or=class i extends _n{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new J(t.x,t.y):new J(256,256),this.clearColor=new Ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new an(r,o,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new an(r,o,{type:Bn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new an(r,o,{type:Bn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Fd;this.highPassUniforms=Fi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new J(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=pa;this.copyUniforms=Fi.clone(h.uniforms),this.blendMaterial=new qe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:En,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ut,this.oldClearAlpha=1,this.basic=new ce,this.fsQuad=new Hi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new qe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new qe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};or.BlurDirectionX=new J(1,0);or.BlurDirectionY=new J(0,1);var Bd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var xa=class extends _n{constructor(){super();let t=Bd;this.uniforms=Fi.clone(t.uniforms),this.material=new ia({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Hi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===eh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _a=["REX","1974","ZAP","NAP","DONUT","???"],Ma=class{constructor(t){this.game=t,this.root=W("#hud"),this.meterEl=W("#meter"),this.meterFill=W(".meter-fill"),this.meterPct=W(".meter-pct"),this.meterDonut=W(".meter-donut"),this.clockEl=W("#clock"),this.objEl=W("#objective"),this.objText=W(".obj-text"),this.fragEl=W("#fragments"),this.fragSlots=W(".frag-slots"),this.prompt=W("#prompt"),this.promptText=W(".prompt-text"),this.cross=W("#crosshair"),this.compass=W("#compass"),this.compassMarker=W(".compass-marker"),this.chase=W("#chase"),this.arrow=W("#arrow"),this.big=W("#bigtext"),this.hint=W("#controls-hint"),this.toasts=W("#toasts"),this.titleEl=W("#titlecard"),this.captionEl=W("#caption"),this.donutCount=W("#donut-count"),this.fade=W("#fx-fade"),this.flashEl=W("#fx-flash"),this.drowsy=W("#fx-drowsy"),this.lids=[W("#fx-eyelids .top"),W("#fx-eyelids .bottom")],this.letterbox=W("#letterbox"),W("#fx-grain").style.backgroundImage=`url(${Od(160,.5)})`,this.target=null,this.lastMeter=-1;for(let e=0;e<6;e++)this.fragSlots.append(Jt("div","frag","\xB7".repeat(Math.min(5,_a[e].length))))}show(t){this.root.classList.toggle("off",!t)}showMeter(t){this.meterEl.classList.toggle("off",!t)}showClock(t){this.clockEl.classList.toggle("off",!t)}setMeter(t){let e=Math.round(t);e!==this.lastMeter&&(e>this.lastMeter&&this.lastMeter>=0&&(this.meterEl.classList.remove("bump"),this.meterEl.offsetWidth,this.meterEl.classList.add("bump")),this.lastMeter=e,this.meterFill.style.width=Ze(t,0,100)+"%",this.meterPct.textContent=e+"%",this.meterEl.classList.toggle("low",t<25),this.meterDonut.classList.toggle("bitten",t<60))}setClock(t){this.clockEl.textContent=t}objective(t,e=null){if(this.target=e,!t){this.objEl.classList.add("off"),this.compass.classList.add("off");return}this.objEl.classList.remove("off","new"),this.objEl.offsetWidth,this.objEl.classList.add("new"),this.objText.textContent=t,this.compass.classList.toggle("off",!e||!this.game.save.settings.marker),this.game.audio.play("select",{vol:.6})}setFragments(t,{show:e=!0,missing:n=!1}={}){this.fragEl.classList.toggle("off",!e),[...this.fragSlots.children].forEach((s,r)=>{let o=t.includes(_a[r]),a=s.classList.contains("got");s.textContent=o?_a[r]:n&&r===5?"???":"\xB7".repeat(Math.min(5,_a[r].length)),s.classList.toggle("got",o),s.classList.toggle("missing",n&&r===5),o&&!a&&(s.style.animation="none",s.offsetWidth,s.style.animation="")})}setPrompt(t){if(!t){this.prompt.classList.add("off"),this.cross.classList.remove("hot");return}(this.promptText.textContent!==t||this.prompt.classList.contains("off"))&&(this.promptText.textContent=t,this.prompt.classList.remove("off")),this.cross.classList.add("hot"),this.prompt.querySelector("kbd").textContent=this.game.input.isTouch?"USE":"E"}crosshair(t){this.cross.classList.toggle("hidden",!t)}toast(t,e=""){let n=Jt("div","toast "+e,t);this.toasts.append(n),setTimeout(()=>n.remove(),3100)}titleCard(t,e){W(".tc-chapter",this.titleEl).textContent=t,W(".tc-title",this.titleEl).textContent=e,this.titleEl.classList.remove("show"),this.titleEl.offsetWidth,this.titleEl.classList.add("show"),this.game.audio.play("sting",{vol:.5})}caption(t){this.captionEl.textContent=t||""}bigText(t){this.big.textContent=t,this.big.classList.remove("show"),this.big.offsetWidth,this.big.classList.add("show")}controlsHint(t){if(!t){this.hint.classList.add("off");return}this.hint.innerHTML=t.map(e=>`<span>${e}</span>`).join(""),this.hint.classList.remove("off")}loadingTip(t,e){let n=W("#loadtip");if(!t){n.classList.add("off");return}W(".lt-chapter",n).textContent=t,W(".lt-tip",n).innerHTML=e?"\u{1F4A1} "+e:"",n.classList.remove("off")}setFade(t,e=.2){t===0&&this.loadingTip(null),this.fade.style.transition=`opacity ${e}s linear`,this.fade.style.opacity=t}flash(t="rgba(255,255,255,0.6)",e=.5){let n=this.flashEl;n.style.transition="none",n.style.background=t,n.style.opacity=1,n.offsetWidth,n.style.transition=`opacity ${e}s`,n.style.opacity=0}setDrowsy(t){this.drowsy.style.opacity=Ze(t,0,1)}setLids(t,e=.25){for(let n of this.lids)n.style.transition=`transform ${e}s ease-in-out`;this.lids[0].style.transform=`translateY(${-101+t*101}%)`,this.lids[1].style.transform=`translateY(${101-t*101}%)`}setLetterbox(t){this.letterbox.classList.toggle("on",t)}showChase(t){this.chase.classList.toggle("off",!t)}setChase(t,e,n){let s=Ze(t,0,1)*100;W(".chase-fill",this.chase).style.width=s+"%",W(".chase-you",this.chase).style.left=s+"%",W(".chase-rex",this.chase).style.left=Math.max(0,s-4-(1-e)*26)+"%",W(".danger-fill",this.chase).style.width=e*100+"%",W(".chase-dist",this.chase).textContent=Math.round(t*880)+" m",n!=null&&this.setDonutCount(`\u{1F369} \xD7 ${n}`)}setSpeedLines(t){W("#fx-speed").style.opacity=Ze(t,0,1)}showArrow(t){this.arrow.classList.toggle("off",!t)}setDonutCount(t){this.donutCount.classList.toggle("off",!t),t&&(this.donutCount.textContent=t)}update(){let t=this.game;if(!this.target||this.compass.classList.contains("off")||!t.player)return;let e=t.player,n=Math.atan2(-(this.target.x-e.pos.x),-(this.target.z-e.pos.z)),s=Ld(e.yaw,n),r=Ze(50-s/(Math.PI/2)*50,-10,110);this.compassMarker.style.left=r+"%",this.compassMarker.style.opacity=Math.abs(s)>Math.PI/2?.25:1;let o=Math.hypot(this.target.x-e.pos.x,this.target.z-e.pos.z);this.compassMarker.textContent=o<3?"\u25CF":"\u25BC"}};var ax=typeof window<"u"&&window.LOCKED_OUT_CONFIG||{},zi={guardName:"YOU (GUARD)",devName:"THE DEV",title:["LOCKED","OUT"],...ax};var Vr={guard:{name:()=>zi.guardName,color:"gold"},dev:{name:()=>zi.devName,color:"pink"},aaron:{name:()=>"AARON",color:"sky"},museos:{name:()=>"MUSE-OS",color:"mint"}},us={guard01:{who:"guard",mood:"happy",text:"Mmm. Number three is the T-Rex. Obviously. Nothing beats the King."},aaron01:{who:"aaron",mood:"normal",text:"Yo, it's Aaron. Heads up \u2014 IT is changing all the computer passwords tonight. So, uh... don't let your session time out. Okay byeee."},guard02:{who:"guard",mood:"normal",text:"Yeah, yeah. Like that's gonna happen."},museos01:{who:"museos",mood:"normal",text:"SESSION EXPIRED."},guard03:{who:"guard",mood:"annoyed",text:"Ugh. Whatever. I'll just log back in."},guard04:{who:"guard",mood:"confused",text:"Huh? Donut-one-two-three. That's literally always my password."},guard05:{who:"guard",mood:"shock",text:"WHAT?! Who changed my password?!"},museos02:{who:"museos",mood:"normal",text:"Password reset protocol activated. To recover access... SOLVE THE PUZZLES."},museos03:{who:"museos",mood:"normal",text:"Puzzle number one sleeps where giants once walked."},guard06:{who:"guard",mood:"happy",text:"Where giants once walked... the Dino exhibit! Oh yeah, I like the Dino exhibit."},guard07:{who:"guard",mood:"happy",text:"Flashlight: check. Donuts: check. Let's go."},guard08:{who:"guard",mood:"happy",text:"Whoa. Never gets old. Hey, big guy."},museos04:{who:"museos",mood:"normal",text:"Fragment one: REX. Next puzzle: the Roman Empire hall."},guard09:{who:"guard",mood:"normal",text:"Roman Hall. Got it. Easy."},guard10:{who:"guard",mood:"confused",text:"...What was that?"},guard11:{who:"guard",mood:"shock",text:"Wait. Where's the T-Rex?"},guard12:{who:"guard",mood:"scared",text:"Oh crap. Oh crap oh crap. This is like Night at the Museum."},guard13:{who:"guard",mood:"scared",text:"Okay. Totally normal. Big dinosaur's just... on a walk. I'm gonna go to the Roman Hall. Quickly."},guard14:{who:"guard",mood:"scared",text:"Nope. Nope nope nope nope."},guard15:{who:"guard",mood:"normal",text:"Okay. Romans. Romans are chill. Romans never chased anybody."},museos05:{who:"museos",mood:"normal",text:"Fragment two: 1974. The remaining puzzles lie... beyond the walls."},guard16:{who:"guard",mood:"confused",text:"Beyond the walls? What does that even mea\u2014"},guard17:{who:"guard",mood:"shock",text:"OH MY GOSH."},guard18:{who:"guard",mood:"scared",text:"AAAAAAAAAAH!"},guard19:{who:"guard",mood:"scared",text:"Why is this hallway so LONG?!"},guard20:{who:"guard",mood:"shock",text:"There! A hole shaped exactly like me! That is SO convenient!"},guard21:{who:"guard",mood:"happy",text:"HA! You can't fit, big guy! Shoulda done more cardio! ...Wait, you don't have lungs."},museos06:{who:"museos",mood:"normal",text:"Welcome to the archives, guard. Three puzzles remain. Also, your sugar levels are... concerning."},guard22:{who:"guard",mood:"annoyed",text:"My sugar levels are FINE."},guard23:{who:"guard",mood:"scared",text:"Is that... an EYE?! Go away! Shoo!"},museos07:{who:"museos",mood:"normal",text:"Fragment three: ZAP."},museos08:{who:"museos",mood:"normal",text:"Fragment four: NAP. ...Interesting word choice."},guard24:{who:"guard",mood:"sleepy",text:"Why would a password have NAP in it... *yaaawn*"},museos09:{who:"museos",mood:"normal",text:"Fragment five: DONUT. Please proceed to the break room."},guard25:{who:"guard",mood:"happy",text:"THE. LAST. DONUT. It is beautiful."},guard26:{who:"guard",mood:"shock",text:"It's... it's PLASTIC?!"},museos10:{who:"museos",mood:"normal",text:"Exhibit 404: replica donut. Not for eating."},guard27:{who:"guard",mood:"sleepy",text:"So... sleepy... just gonna... rest my eyes... five minutes..."},guard28:{who:"guard",mood:"confused",text:"Mmh... huh? It's MORNING?!"},guard29:{who:"guard",mood:"confused",text:"The T-Rex is back. Like nothing happened. ...Is that MY HAT?"},aaron02:{who:"aaron",mood:"normal",text:"Dude. Did you sleep in the dinosaur exhibit? Again?"},guard30:{who:"guard",mood:"shock",text:"Aaron! The T-Rex was ALIVE! It chased me! There was a maze! And a PLASTIC DONUT!"},aaron03:{who:"aaron",mood:"normal",text:"Sure, buddy. Also, your computer's been beeping all morning. You should probably log in."},museos11:{who:"museos",mood:"normal",text:"Fragments entered: five of six. You did not solve the puzzles."},guard31:{who:"guard",mood:"shock",text:"WHAT? I solved like FIVE puzzles!"},museos12:{who:"museos",mood:"normal",text:"Five is not six. Goodbye."},dev01:{who:"dev",mood:"happy",text:"Oh hey! Welcome to my game. I made it myself. It's really good, I promise."},guard32:{who:"guard",mood:"confused",text:"Wait... that's it? That game was WAY too short."},guard33:{who:"guard",mood:"shock",text:"Oh my gosh. Are you serious? This is really it? That's the WHOLE game?!"},dev02:{who:"dev",mood:"tired",text:"Bro, I was up all night making this."},guard34:{who:"guard",mood:"annoyed",text:"...I could do better."},dev03:{who:"dev",mood:"angry",text:"HELL NAW."},dev04:{who:"dev",mood:"angry",text:"GET OUT OF MY GAME!"},dev05:{who:"dev",mood:"annoyed",text:"...Oh. You're back. Fine. You can play it again. But NO complaining."},dev06:{who:"dev",mood:"annoyed",text:"Stop poking the TV."},dev07:{who:"dev",mood:"happy",text:"Psst. Try the Clip Studio. You can put YOURSELF in the game."}};function ba(i,t,e,n){i.beginPath(),i.arc(t,e,n,0,Math.PI*2)}function Hd(i,t,e,{mood:n,blink:s,t:r,sep:o=26,look:a=0}){for(let l of[-1,1]){let c=t+l*o,h=e,u=1-s;(n==="sleepy"||n==="tired")&&(u*=.35),(n==="shock"||n==="scared")&&(u*=1.25);let d=13,f=14*u;if(i.fillStyle="#fff",i.beginPath(),i.ellipse(c,h,d,Math.max(1.5,f),0,0,Math.PI*2),i.fill(),u>.15){i.fillStyle="#1a1210";let p=n==="shock"||n==="scared"?4.5:6.5;ba(i,c+a*4,h+1,Math.min(p,f)),i.fill(),i.fillStyle="#fff",ba(i,c+a*4+2,h-2,1.8),i.fill()}i.strokeStyle="#2a1a12",i.lineWidth=2,i.beginPath(),i.ellipse(c,h,d,Math.max(1.5,f),0,0,Math.PI*2),i.stroke()}}function zd(i,t,e,n,s="#2a1a12",r=26){i.strokeStyle=s,i.lineWidth=6,i.lineCap="round";for(let o of[-1,1]){let a=0,l=0;(n==="angry"||n==="annoyed")&&(a=8,l=-4),(n==="shock"||n==="scared")&&(a=-10,l=-8),n==="confused"&&(a=o>0?-8:2,l=o>0?-12:0),(n==="tired"||n==="sleepy")&&(a=-3,l=4),i.beginPath(),i.moveTo(t+o*(r-14),e-22+a),i.lineTo(t+o*(r+12),e-24+l),i.stroke()}}function Gd(i,t,e,n,s){i.fillStyle="#5a1e1e",i.strokeStyle="#2a1010",i.lineWidth=3;let r=s==="shock"||s==="scared"?14:22,o=3+n*16+(s==="shock"?10:0);if(n<.05&&s==="happy"){i.beginPath(),i.arc(t,e-6,18,.2*Math.PI,.8*Math.PI),i.stroke();return}if(n<.05&&(s==="angry"||s==="annoyed")){i.beginPath(),i.moveTo(t-16,e+2),i.lineTo(t+16,e-2),i.stroke();return}i.beginPath(),i.ellipse(t,e,r,o,0,0,Math.PI*2),i.fill(),i.stroke(),o>8&&(i.fillStyle="#ff7a8a",i.beginPath(),i.ellipse(t,e+o*.45,r*.55,o*.35,0,0,Math.PI*2),i.fill())}function _h(i,t,e){let n=i.createLinearGradient(0,0,0,256);n.addColorStop(0,t),n.addColorStop(1,e),i.fillStyle=n,i.fillRect(0,0,256,256)}function Vd(i,t,{t:e=0,talk:n=0,mood:s="normal",blink:r=0}={}){i.save(),i.clearRect(0,0,256,256);let o=Math.sin(e*2)*2+n*2;if(t==="museos"){_h(i,"#031208","#062a14"),i.fillStyle="#0c3a1f",i.fillRect(40,50,176,140),i.strokeStyle="#6dff9e",i.lineWidth=4,i.strokeRect(40,50,176,140),i.fillStyle="#6dff9e";let u=r>.5;i.fillRect(84,92,22,u?4:22),i.fillRect(150,92,22,u?4:22),i.beginPath(),i.lineWidth=4,i.strokeStyle="#6dff9e";for(let d=0;d<=40;d++){let f=78+d*2.5,p=152+Math.sin(d*.9+e*20)*n*14;d?i.lineTo(f,p):i.moveTo(f,p)}i.stroke();for(let d=0;d<256;d+=4)i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(0,d,256,2);i.fillStyle="#6dff9e",i.font="bold 18px monospace",i.fillText("MUSE-OS",92,222),i.restore();return}let a=128,l=132+o;if(t==="dev"){let u=s==="angry";_h(i,u?"#4a0000":"#14162a",u?"#1a0000":"#2a1640"),i.fillStyle=u?"rgba(255,60,60,0.3)":"rgba(80,160,255,0.25)",i.fillRect(150,30,100,70),i.fillStyle=u?"#6a1030":"#3a2a5a",i.beginPath(),i.ellipse(a,270+o,110,90,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(a,l-6,78,86,0,0,Math.PI*2),i.fill(),i.fillStyle=u?"#e8907a":"#f0c4a0",i.beginPath(),i.ellipse(a,l+4,56,62,0,0,Math.PI*2),i.fill(),i.fillStyle="#2a1a10",i.beginPath(),i.moveTo(a-60,l-20);for(let d=0;d<=10;d++){let f=Math.PI+d/10*Math.PI,p=64+(d%2?16:0)+Math.sin(e*3+d)*2;i.lineTo(a+Math.cos(f)*p,l-14+Math.sin(f)*p*.85)}i.lineTo(a+60,l-20),i.quadraticCurveTo(a,l-38,a-60,l-20),i.fill(),i.strokeStyle="#111",i.lineWidth=10,i.beginPath(),i.arc(a,l+60,50,.1*Math.PI,.9*Math.PI),i.stroke(),i.fillStyle="#ff6fae",i.fillRect(a-62,l+62,22,30),i.fillRect(a+40,l+62,22,30),Hd(i,a,l,{mood:s,blink:r,t:e,sep:24}),i.strokeStyle="rgba(90,40,90,0.6)",i.lineWidth=3;for(let d of[-1,1])i.beginPath(),i.arc(a+d*24,l+14,12,.15*Math.PI,.85*Math.PI),i.stroke();if(zd(i,a,l,s,"#2a1a10",24),Gd(i,a,l+36,n,s),u){i.strokeStyle="#b00000",i.lineWidth=4;let d=a+34,f=l-40;i.beginPath(),i.moveTo(d-8,f),i.lineTo(d-2,f),i.moveTo(d+2,f),i.lineTo(d+8,f),i.moveTo(d,f-8),i.lineTo(d,f-2),i.moveTo(d,f+2),i.lineTo(d,f+8),i.stroke()}s==="tired"&&(i.fillStyle="#fff",i.font="bold 26px Arial",i.fillText("z",200,60+Math.sin(e*2)*6),i.font="bold 18px Arial",i.fillText("z",220,40+Math.sin(e*2+1)*6)),i.fillStyle="#eee",i.fillRect(196,190+o,34,40),i.strokeStyle="#eee",i.lineWidth=5,i.beginPath(),i.arc(232,210+o,9,-Math.PI/2,Math.PI/2),i.stroke(),i.fillStyle="#c33",i.font="bold 11px Arial",i.fillText("DEV",202,214+o),i.restore();return}let c=t==="aaron";_h(i,c?"#3a5a7a":"#0e1a30",c?"#1a2a3a":"#050a14"),c||(i.fillStyle="rgba(80,255,140,0.12)",i.fillRect(10,30,70,50),i.fillRect(176,30,70,50)),i.fillStyle="#8fb3e0",i.beginPath(),i.ellipse(a,280+o,112,95,0,0,Math.PI*2),i.fill(),i.fillStyle="#6f93c0",i.beginPath(),i.moveTo(a-30,196+o),i.lineTo(a,226+o),i.lineTo(a+30,196+o),i.fill(),i.fillStyle="#ffd34d",i.beginPath(),i.moveTo(a-62,214+o),i.lineTo(a-48,208+o),i.lineTo(a-36,214+o),i.lineTo(a-40,232+o),i.lineTo(a-58,232+o),i.fill();let h=c?"#b07a52":"#e3b48f";i.fillStyle=h,i.fillRect(a-18,l+40,36,30),i.beginPath(),i.ellipse(a-58,l+6,10,16,0,0,Math.PI*2),i.ellipse(a+58,l+6,10,16,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(a,l+4,58,64,0,0,Math.PI*2),i.fill(),(s==="scared"||s==="shock")&&(i.fillStyle="rgba(120,180,255,0.9)",i.beginPath(),i.ellipse(a+50,l-18+e*40%30,5,8,0,0,Math.PI*2),i.fill()),s==="happy"&&(i.fillStyle="rgba(255,120,120,0.35)",ba(i,a-36,l+22,10),i.fill(),ba(i,a+36,l+22,10),i.fill()),Hd(i,a,l,{mood:s,blink:r,t:e}),zd(i,a,l,s),i.fillStyle=c?"#8a5a3a":"#c99070",i.beginPath(),i.ellipse(a,l+16,7,9,0,0,Math.PI*2),i.fill(),c&&(i.fillStyle="#1a1210",i.beginPath(),i.ellipse(a,l+30,24,7,0,0,Math.PI*2),i.fill()),Gd(i,a,l+40,n,s),i.fillStyle="#1b2440",i.beginPath(),i.ellipse(a,l-44,64,40,0,Math.PI,0),i.fill(),i.fillRect(a-64,l-46,128,12),i.beginPath(),i.ellipse(a,l-34,72,12,0,0,Math.PI),i.fill(),i.fillStyle="#ffd34d",i.beginPath(),i.moveTo(a,l-76),i.lineTo(a+12,l-66),i.lineTo(a+8,l-52),i.lineTo(a-8,l-52),i.lineTo(a-12,l-66),i.fill(),c&&(i.fillStyle="#111",i.fillRect(a-50,l-70,40,14),i.fillRect(a+10,l-70,40,14),i.fillStyle="#fff",i.font="bold 13px Arial",i.fillText("DAY SHIFT",a-34,248)),s==="sleepy"&&(i.fillStyle="#fff",i.font="bold 26px Arial",i.fillText("Z",200,70+Math.sin(e*2)*6)),i.restore()}var Wr=class{constructor(t,{canvas:e,img:n,video:s,root:r=t,nameEl:o=null}){this.root=r,this.frame=t,this.canvas=e,this.ctx=e.getContext("2d"),this.img=n,this.video=s,this.nameEl=o,this.who="guard",this.mood="normal",this.talk=0,this.speaking=!1,this.blinkT=2,this.blink=0,this.t=0}setMode(t){this.frame.classList.toggle("has-video",t==="video"),this.frame.classList.toggle("has-img",t==="img")}update(t){this.t+=t,this.blinkT-=t,this.blinkT<0&&(this.blink=1,this.blinkT<-.12&&(this.blink=0,this.blinkT=2+Math.random()*3));let e=this.speaking?Math.abs(Math.sin(this.t*17))*(.5+Math.random()*.5):0;this.talk+=(e-this.talk)*Math.min(1,t*25),this.frame.classList.toggle("talking",this.speaking),Vd(this.ctx,this.who,{t:this.t,talk:this.talk,mood:this.mood,blink:this.blink})}},Sa=class{constructor(t){this.game=t,this.sub=W("#subtitle"),this.subName=W(".sub-name",this.sub),this.subText=W(".sub-text",this.sub),this.fcRoot=W("#facecam");let e=W(".fc-frame",this.fcRoot);if(this.facecam=new Wr(e,{canvas:W("canvas",e),img:W("img",e),video:W("video",e),root:this.fcRoot,nameEl:W(".fc-name",this.fcRoot)}),this.tv=null,this.current=null,this.typeT=0,this.fullText="",this.voices=[],this.allowClickSkip=!1,"speechSynthesis"in window){let s=()=>{this.voices=speechSynthesis.getVoices().filter(r=>/^en/i.test(r.lang))};s(),speechSynthesis.onvoiceschanged=s}let n=s=>{!this.current||!this.allowClickSkip||s.target.closest&&s.target.closest("button, .modal, #menu")||this.skipLine()};addEventListener("mousedown",n),addEventListener("touchstart",n,{passive:!0})}stationFor(t){return this.tv&&(t==="dev"||this.forceTv)?this.tv:this.facecam}skipLine(){this.current&&this.current.skip()}stop(){this.skipLine()}update(t){if(this.current){this.typeT+=t;let e=Math.min(this.fullText.length,Math.floor(this.typeT*55));e!==this.shown&&(this.shown=e,this.subText.textContent=this.fullText.slice(0,e),this.sub.classList.toggle("done",e>=this.fullText.length))}this.fcRoot.classList.contains("off")||this.facecam.update(t),this.tv&&this.tv.update(t)}say(t,e={}){let n=us[t]||{who:e.who||"guard",text:t,mood:"normal"};return this.sayRaw(n.who,n.text,{mood:n.mood,clip:us[t]?t:null,...e})}async sayRaw(t,e,{mood:n="normal",clip:s=null,hold:r=.35,showCam:o=!0}={}){let a=this.game;if(a.sched.skipping)return;this.skipLine();let l,c=new Promise(m=>l=m),h={skipped:!1,skip:()=>{h.skipped=!0,l()}};this.current=h;let u=this.stationFor(t);u.who=t,u.mood=n;let d=Vr[t]?.name()||t.toUpperCase(),f=a.save.settings.subtitles!=="off";this.sub.classList.toggle("off",!f),this.sub.dataset.who=t,this.subName.textContent=d,this.fullText=e,this.typeT=0,this.shown=-1,this.subText.textContent="",this.sub.classList.remove("done"),this.sub.style.animation="none",this.sub.offsetWidth,this.sub.style.animation="",u===this.facecam?(this.fcRoot.classList.toggle("off",!o),this.fcRoot.dataset.who=t,u.nameEl.textContent=d,this.fcRoot.style.animation="none",this.fcRoot.offsetWidth,this.fcRoot.style.animation=""):this.tvBubble?.(e);let p=s?await a.clips.resolve(s):null;if(h.skipped)return this._end(h,u);let y=a.clips.portrait(t),g=m=>new Promise(x=>setTimeout(x,m*1e3));if(p){u.setMode("video");let m=u.video;m.src=p.url,m.muted=!1,m.volume=Math.min(1,a.save.settings.master*1.1),m.currentTime=0,u.speaking=!1;let x=new Promise(_=>{m.onended=_,m.onerror=_});try{await m.play()}catch{m.muted=!0,m.play().catch(()=>{})}await Promise.race([x,c,g(30)]),m.pause()}else{y?(u.setMode("img"),u.img.src=y.url):u.setMode("canvas"),u.speaking=!0;let m=1.2+e.length*.055,x=a.save.settings.voice||"tts",_;if(x==="tts"&&"speechSynthesis"in window&&this.voices.length&&!this.ttsBroken)_=Promise.race([this._tts(t,e),g(m*1.8+2)]).then(v=>{if(v==="nostart"&&!h.skipped)return this.ttsBroken=!0,g(Math.max(a.audio.babble(e,t),.6))});else if(x!=="off"){let v=a.audio.babble(e,t);_=g(Math.max(v,.6))}else _=g(m);await Promise.race([_,c]),"speechSynthesis"in window&&speechSynthesis.cancel(),u.speaking=!1,this.subText.textContent=e,this.sub.classList.add("done"),h.skipped||await Promise.race([g(r),c])}return this._end(h,u)}_end(t,e){this.current===t&&(this.current=null,this.sub.classList.add("off"),e===this.facecam?this.fcRoot.classList.add("off"):this.tvBubble?.(null),e.speaking=!1,e.setMode(this.game.clips.portrait(e.who)?"img":"canvas"))}_tts(t,e){return new Promise(n=>{let s=e.replace(/\*[^*]+\*/g,"").replace(/—/g,", ").replace(/MUSE-OS/g,"Muse O S"),r=new SpeechSynthesisUtterance(s),o=this.voices,a={guard:0,dev:1,aaron:2,museos:3};r.voice=o[(a[t]??0)%o.length],r.pitch={guard:1.05,dev:.85,aaron:1.3,museos:.4}[t]??1,r.rate={guard:1.08,dev:1,aaron:1.12,museos:.88}[t]??1,r.volume=Math.min(1,(this.game.save.settings.master??.8)*1.1);let l=!1;r.onstart=()=>{l=!0},r.onend=()=>n("end"),r.onerror=()=>n(l?"end":"nostart"),speechSynthesis.cancel(),speechSynthesis.speak(r),setTimeout(()=>{!l&&!speechSynthesis.speaking&&(speechSynthesis.cancel(),n("nostart"))},1500)})}setPaused(t){let e=this.facecam.video;t?(e.pause(),"speechSynthesis"in window&&speechSynthesis.pause()):(this.current&&e.src&&!e.ended&&this.facecam.frame.classList.contains("has-video")&&e.play().catch(()=>{}),"speechSynthesis"in window&&speechSynthesis.resume())}};var ar="assets/clips/",lx=["mp4","webm","mov"],cx=["png","jpg","jpeg","webp"],hx=["guard","dev","aaron"];function ux(){return new Promise((i,t)=>{if(!("indexedDB"in window))return t(new Error("no indexedDB"));let e=indexedDB.open("locked-out-clips",1);e.onupgradeneeded=()=>e.result.createObjectStore("clips"),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}function Wd(i,t){return new Promise(e=>{let n=!1,s=document.createElement(t==="video"?"video":"img"),r=o=>{if(!n){if(n=!0,t==="video"){s.removeAttribute("src");try{s.load()}catch{}}e(o)}};t==="video"?(s.preload="metadata",s.muted=!0,s.onloadedmetadata=()=>r(!0)):s.onload=()=>r(!0),s.onerror=()=>r(!1),setTimeout(()=>r(!1),8e3),s.src=i})}var wa=class{constructor(){this.files={},this.recorded={},this.probes={},this.db=null,this.listeners=new Set}async init(){try{this.db=await ux();let t=await this._req(e=>e.getAllKeys());for(let e of t){let n=await this._req(s=>s.get(e));n&&this._setRecorded(e,n)}}catch(t){console.info("[clips] browser storage unavailable \u2014 recording disabled",t?.message||t)}this._probeAll()}_req(t,e="readonly"){return new Promise((n,s)=>{let r=this.db.transaction("clips",e),o=t(r.objectStore("clips"));o.onsuccess=()=>n(o.result),o.onerror=()=>s(o.error)})}_setRecorded(t,e){this.recorded[t]&&URL.revokeObjectURL(this.recorded[t].url),this.recorded[t]={url:URL.createObjectURL(e),blob:e,type:e.type||"",source:"recorded"}}async _probeAll(){let t=[];for(let s of Object.keys(us))t.push(()=>this._probeVideo(s));for(let s of hx)t.push(()=>this._probeImage(s));let e=0,n=async()=>{for(;e<t.length;)await t[e++]()};await Promise.all([n(),n(),n(),n()]),this._emit()}_probeVideo(t){return this.probes[t]||(this.probes[t]=(async()=>{for(let e of lx){let n=`${ar}${t}.${e}`;if(await Wd(n,"video")){this.files[t]={url:n,source:"file"};return}}})()),this.probes[t]}_probeImage(t){let e="portrait_"+t;return this.probes[e]||(this.probes[e]=(async()=>{for(let n of cx){let s=`${ar}${t}.${n}`;if(await Wd(s,"img")){this.files[e]={url:s,source:"file"};return}}})()),this.probes[e]}async resolve(t){if(this.recorded[t])return this.recorded[t];if(this.files[t])return this.files[t];let e=this._probeVideo(t);return await Promise.race([e,new Promise(n=>setTimeout(n,350))]),this.recorded[t]||this.files[t]||null}get(t){return this.recorded[t]||this.files[t]||null}portrait(t){let e="portrait_"+t;return this.recorded[e]||this.files[e]||null}async save(t,e){this._setRecorded(t,e),this.db&&await this._req(n=>n.put(e,t),"readwrite"),this._emit()}async remove(t){this.recorded[t]&&URL.revokeObjectURL(this.recorded[t].url),delete this.recorded[t],this.db&&await this._req(e=>e.delete(t),"readwrite"),this._emit()}get canStore(){return!!this.db}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}_emit(){for(let t of this.listeners)t()}};function Ea(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Pe,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Xd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let p=Xd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Xd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ge(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let y=h.getComponent(d,p);a.setComponent(d+u,p,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function dx(i){return Object.keys(i.attributes).sort().map(e=>e+i.attributes[e].itemSize).join(",")+(i.index?"|i":"|n")}function xi(i,t=()=>!1){i.updateMatrixWorld(!0);let e=new jt().copy(i.matrixWorld).invert(),n=new Map,s=l=>{if(!(l!==i&&t(l))){if(l.isMesh&&!l.isInstancedMesh&&!l.isSkinnedMesh&&l!==i&&l.visible&&l.children.length===0&&!Array.isArray(l.material)&&!l.material.transparent&&!l.userData.noBatch&&l.geometry?.attributes?.position){let c=`${l.material.uuid}|${l.castShadow}|${l.receiveShadow}|${l.renderOrder}|${dx(l.geometry)}`;n.has(c)||n.set(c,[]),n.get(c).push(l)}for(let c of[...l.children])c.visible&&s(c)}};s(i);let r=0,o=0,a=new jt;for(let l of n.values()){if(l.length<2)continue;let c=l.map(f=>{let p=f.geometry.clone();for(let y of Object.keys(p.morphAttributes))delete p.morphAttributes[y];return a.multiplyMatrices(e,f.matrixWorld),p.applyMatrix4(a),p}),h;try{h=Ea(c,!1)}catch{h=null}for(let f of c)f.dispose();if(!h)continue;let u=l[0],d=new V(h,u.material);d.castShadow=u.castShadow,d.receiveShadow=u.receiveShadow,d.renderOrder=u.renderOrder,d.name="batched",i.add(d);for(let f of l)f.parent?.remove(f),o++;r++}return{merged:r,removed:o}}function Ta(i,t=[]){let e=new Set(i),n=new Set(t),s=0;for(let r of i){let o=xi(r,a=>e.has(a)||n.has(a));s+=o.removed}return s}var qd={},Se=(i,t)=>qd[i]||(qd[i]=t()),Mh={};function ee(i,t){return Mh[i]||(Mh[i]=new ht(t)),Mh[i]}var ft={marble:()=>ee("marble",{color:15657698,roughness:.35}),stoneWhite:()=>ee("stoneWhite",{color:14275527,roughness:.6}),darkWood:()=>ee("darkWood",{color:4861724,roughness:.6}),wood:()=>ee("wood",{color:9067059,roughness:.7}),metal:()=>ee("metal",{color:9146262,roughness:.35,metalness:.8}),black:()=>ee("black",{color:1381653,roughness:.6}),brass:()=>ee("brass",{color:13214282,roughness:.35,metalness:.9}),velvet:()=>ee("velvet",{color:9048098,roughness:.9}),glass:()=>ee("glass",{color:11193565,roughness:.05,metalness:.1,transparent:!0,opacity:.18,depthWrite:!1}),plant:()=>ee("plant",{color:3107636,roughness:.8,side:Be}),terracotta:()=>ee("terracotta",{color:11884591,roughness:.75}),bronze:()=>ee("bronze",{color:9071162,roughness:.4,metalness:.7}),red:()=>ee("red",{color:10230812,roughness:.8}),dough:()=>ee("dough",{color:13933148,roughness:.7})};function Re(i,t=!0,e=!0){return i.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),i}function vt(i,t,e,n,s=0,r=0,o=0){let a=new V(new ae(i,t,e),n);return a.position.set(s,r+t/2,o),a}var Yd=[16744118,7027230,16774112,8049663,16765773],$d=[16726843,3918335,16769357,8257387,16777215,12086271];function Kn({frosting:i=0,glow:t=!1,scale:e=1}={}){let n=new dt,s=new V(Se("dough",()=>new xn(.12,.062,12,24)),ft.dough());s.rotation.x=Math.PI/2,n.add(s);let r=Yd[i%Yd.length],o=ee("frost"+r+t,{color:r,roughness:.3,emissive:t?r:0,emissiveIntensity:t?.35:0}),a=new V(Se("frost",()=>new xn(.12,.058,10,24,Math.PI*2)),o);a.rotation.x=Math.PI/2,a.scale.set(1.03,1.03,.62),a.position.y=.022,n.add(a);let l=Se("sprinkles"+i%5,()=>{let c=Te(i*31+7),h=new Cn(.006,.022,2,4),u=[],d=new Ut,f=new jt,p=new Tn,y=new An;for(let g=0;g<14;g++){let m=c()*Math.PI*2,x=.09+c()*.06;d.set($d[Math.floor(c()*$d.length)]);let _=h.clone();p.setFromEuler(y.set(Math.PI/2,0,c()*Math.PI)),_.applyMatrix4(f.compose(new R(Math.cos(m)*x,.06,Math.sin(m)*x),p,new R(1,1,1)));let v=_.attributes.position.count,A=new Float32Array(v*3);for(let E=0;E<v;E++)A[E*3]=d.r,A[E*3+1]=d.g,A[E*3+2]=d.b;_.setAttribute("color",new Ge(A,3)),u.push(_)}return Ea(u,!1)});return n.add(new V(l,ee("sprinkleMat"+t,{vertexColors:!0,roughness:.4,emissive:t?4473924:0}))),n.scale.setScalar(e),n}var bh=null;function Zd(i=0){let t=new dt,e=Kn({frosting:i,glow:!0,scale:1.3});if(e.rotation.x=.5,t.add(e),!bh){let[s,r]=ve(128,128),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,190,220,0.9)"),o.addColorStop(.4,"rgba(255,120,180,0.25)"),o.addColorStop(1,"rgba(255,120,180,0)"),r.fillStyle=o,r.fillRect(0,0,128,128),bh=Me(s)}let n=new Js(new rs({map:bh,transparent:!0,depthWrite:!1,blending:En}));return n.scale.set(.9,.9,1),t.add(n),t.userData.spin=e,t.userData.halo=n,t}function Sh(i=7,t=.45,e=ft.marble()){let n=new dt;n.add(vt(t*2.6,.35,t*2.6,e));let s=new V(Se("colshaft"+i+t,()=>new re(t*.88,t,i-.8,20)),e);return s.position.y=.35+(i-.8)/2,n.add(s),n.add(vt(t*2.4,.15,t*2.4,e,0,i-.45,0)),n.add(vt(t*2.7,.3,t*2.7,e,0,i-.3,0)),Re(n)}function ds(i=.8,t=1.1,e=ft.marble()){let n=new dt;return n.add(vt(i*1.15,.1,i*1.15,e)),n.add(vt(i,t-.2,i,e,0,.1,0)),n.add(vt(i*1.15,.1,i*1.15,e,0,t-.1,0)),Re(n)}function Aa(i,t=15328474){let e=new dt,n=ee("bust"+t,{color:t,roughness:.45});e.add(ds(.7,1.2));let s=new V(Se("bustsh",()=>new te(.32,16,10,0,Math.PI*2,0,Math.PI/2)),n);s.scale.set(1.1,.6,.65),s.position.y=1.2,e.add(s);let r=new V(Se("bustneck",()=>new re(.08,.1,.2,10)),n);r.position.y=1.42,e.add(r);let o=new V(Se("busthead",()=>new te(.15,16,12)),n);o.scale.set(.9,1.1,1),o.position.y=1.62,e.add(o);let a=new V(Se("bustnose",()=>new On(.03,.08,6)),n);a.rotation.x=Math.PI/2,a.position.set(0,1.62,.15),e.add(a);let l=new V(Se("laurel",()=>new xn(.15,.02,6,16)),ft.brass());if(l.rotation.x=Math.PI/2-.2,l.position.y=1.72,e.add(l),i){let c=new V(new Ht(.6,.12),new ht({map:Ae(i,{w:256,h:52,bg:"#2a241c",fg:"#e9d7a8",font:"bold 26px Georgia, serif"}),roughness:.5}));c.position.set(0,.95,.357),e.add(c)}return Re(e)}function Kd(){let i=[],t=[[0,0],[.08,0],[.12,.08],[.22,.3],[.26,.5],[.22,.75],[.1,.92],[.08,1.05],[.11,1.1]];for(let[s,r]of t)i.push(new J(s,r));let e=new dt,n=new V(Se("amph",()=>new kr(i,18)),ft.terracotta());e.add(n);for(let s of[-1,1]){let r=new V(Se("amphh",()=>new xn(.1,.02,6,12,Math.PI)),ft.terracotta());r.position.set(s*.12,.88,0),r.rotation.z=s>0?-Math.PI/2:Math.PI/2,e.add(r)}return Re(e)}function Ra(i=2.2){let t=new dt;t.add(vt(i,.08,.5,ft.darkWood(),0,.42,0));for(let e of[-1,1])t.add(vt(.08,.42,.42,ft.metal(),e*(i/2-.2),0,0));return Re(t)}function lr(){let i=new dt;i.add(new V(Se("stanb",()=>new re(.16,.18,.04,14)),ft.brass()));let t=new V(Se("stanp",()=>new re(.03,.03,.95,8)),ft.brass());t.position.y=.48,i.add(t);let e=new V(Se("stant",()=>new te(.05,10,8)),ft.brass());return e.position.y=.98,i.add(e),Re(i)}function Xr(i){let t=new js(new R(0,.92,0),new R(i/2,.62,0),new R(i,.92,0)),e=new V(new na(t,12,.025,6),ft.velvet());return e.castShadow=!0,e}function wh(i=1){let t=new dt,e=Te(i),n=Se("leaf",()=>{let r=new Zn;return r.moveTo(0,0),r.quadraticCurveTo(.12,.4,0,.9),r.quadraticCurveTo(-.12,.4,0,0),new ea(r,4)});for(let r=0;r<9;r++){let o=new V(n,ft.plant()),a=r/9*Math.PI*2+e();o.rotation.set(0,a,0),o.rotateX(-.6-e()*.5),o.scale.setScalar(.8+e()*.7),t.add(o)}let s=new V(Se("pot",()=>new re(.25,.2,.35,12)),ft.terracotta());return s.position.y=.17,t.add(s),t.children.forEach((r,o)=>{o<9&&(r.position.y=.33)}),Re(t,!0,!1)}function Eh(i=1,t=1){let e=Te(i),n=new ta(.6*t,1),s=n.attributes.position;for(let o=0;o<s.count;o++)s.setXYZ(o,s.getX(o)*(.8+e()*.4),s.getY(o)*(.6+e()*.3),s.getZ(o)*(.8+e()*.4));n.computeVertexNormals();let r=new V(n,ee("rock",{color:6050634,roughness:.95,flatShading:!0}));return r.position.y=.2*t,r.castShadow=r.receiveShadow=!0,r}function Ca(i=1.4,t=1,e=.8,n=null){let s=new dt;s.add(vt(i,.9,e,ft.darkWood()));let r=vt(i,t,e,ft.glass(),0,.9,0);return r.castShadow=!1,s.add(r),s.add(vt(i+.04,.04,e+.04,ft.brass(),0,.9+t,0)),n&&(n.position.y=.9,s.add(n)),Re(s),r.castShadow=!1,s}function fs(i,t,e={}){let n=new dt,s=vt(.08,.9,.08,ft.black());n.add(s);let r=new V(new Ht(.9,.56),new ht({map:vh({title:i,body:t,...e}),roughness:.6,emissive:16777215,emissiveIntensity:.02}));r.position.set(0,1.05,.05),r.rotation.x=-.5,n.add(r);let o=new V(new ae(.96,.6,.03),ft.black());return o.position.z=-.02,r.add(o),Re(n,!0,!0)}function cr(i,t,e=2,n=1.25,s={}){return new V(new Ht(e,n),new ht({map:vh({title:i,body:t,w:512,h:Math.round(512*n/e),...s}),roughness:.6,emissive:16777215,emissiveIntensity:.03}))}function Th({title:i="PUZZLE",color:t="#6dff9e"}={}){let e=new dt;e.add(vt(.7,1,.5,ft.black()));let n=vt(.8,.08,.6,ft.metal(),0,1,0);e.add(n);let[s,r]=ve(320,200),o=Me(s),a=new ce({map:o,toneMapped:!1}),l=new V(new Ht(.62,.39),a);l.position.set(0,1.32,.03),l.rotation.x=-.45;let c=vt(.7,.46,.06,ft.black(),0,1.08,0);c.rotation.x=-.45,c.position.set(0,1.31,-.005),e.add(c),e.add(l);let h=new Oe(t,.8,3.5,2);h.position.set(0,1.5,.5),e.add(h);let u=0,d=(f,p=t,y="")=>{r.fillStyle="#05080a",r.fillRect(0,0,320,200),r.strokeStyle=p,r.lineWidth=6,r.strokeRect(6,6,308,188),r.fillStyle=p,r.font='bold 26px "Courier New", monospace',r.textAlign="center",r.fillText(i,160,48),r.font='bold 22px "Courier New", monospace',f.forEach((g,m)=>r.fillText(g,160,98+m*30)),y&&(r.font='18px "Courier New", monospace',r.fillText(y,160,178));for(let g=0;g<200;g+=4)r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,g,320,2);o.needsUpdate=!0,h.color.set(p)};return d(["LOCKED"],t,"[E] INSPECT"),Re(e),l.castShadow=!1,{group:e,draw:d,light:h,update(f){u+=f,a.color.setScalar(.85+Math.sin(u*6)*.15)}}}function Jd(){let i=new dt,t=ft.bronze(),e=vt(1.3,.9,1.1,t,0,.55,0);i.add(e);for(let s of[-1,1]){let r=new V(Se("wheel",()=>new xn(.55,.06,8,24)),ft.darkWood());r.position.set(s*.75,.6,0),r.rotation.y=Math.PI/2,i.add(r);for(let o=0;o<4;o++){let a=vt(.04,1.1,.04,ft.darkWood(),s*.75,.05,0);a.rotation.x=o*Math.PI/4,a.position.set(s*.75,.6,0),i.add(a)}}let n=vt(.08,.08,2.2,ft.darkWood(),0,.5,1.6);return i.add(n),Re(i)}function jd(){let i=new dt,t=ee("trik",{color:13221019,roughness:.8,map:be("bone",1,1)}),e=new V(Se("frill",()=>new vi(.85,24,0,Math.PI)),ee("frillm",{color:12760207,roughness:.8,side:Be}));e.position.set(0,.5,-.2),e.rotation.x=-.3,i.add(e);let n=new V(Se("trihead",()=>new On(.35,1.2,10)),t);n.rotation.x=Math.PI/2+.3,n.position.set(0,.35,.5),i.add(n);let s=Se("horn",()=>new On(.07,.8,8));for(let o of[-1,1]){let a=new V(s,t);a.position.set(o*.22,.7,.2),a.rotation.set(1.1,0,-o*.2),i.add(a)}let r=new V(s,t);return r.scale.set(.8,.45,.8),r.position.set(0,.5,.95),r.rotation.x=.6,i.add(r),Re(i)}function Qd(){let i=new dt,t=ee("ammo",{color:11046506,roughness:.6});for(let e=0;e<4;e++){let n=new V(new xn(.06+e*.045,.02+e*.012,6,18),t);n.position.y=.25,i.add(n)}return i}function tf(){let i=new dt,t=ee("sarc",{color:13935674,roughness:.35,metalness:.7}),e=ee("sarcb",{color:2047370,roughness:.5}),n=new V(Se("sarcb",()=>new Cn(.32,1.4,4,12)),t);n.scale.set(1,1,.55),n.position.y=1.05,i.add(n);let s=new V(Se("sarcf",()=>new te(.2,12,10)),t);s.position.set(0,1.62,.12),s.scale.set(1,1.2,.6),i.add(s);for(let o of[-1,1]){let a=vt(.12,.6,.05,e,o*.2,1.35,.13);i.add(a)}let r=new V(Se("sarce",()=>new ae(.22,.03,.02)),ee("sarceye",{color:1118481}));return r.position.set(0,1.66,.24),i.add(r),Re(i)}function Ah(i=1){let t=Te(i),e=new dt,n=ee("sheet",{color:14210252,roughness:.95}),s=1.6+t()*.6,r=new re(.18,.5,s,12,6),o=r.attributes.position;for(let c=0;c<o.count;c++){let h=o.getY(c),u=Math.atan2(o.getZ(c),o.getX(c)),d=1+Math.sin(u*5+h*3)*.06;o.setX(c,o.getX(c)*d),o.setZ(c,o.getZ(c)*d)}r.computeVertexNormals();let a=new V(r,n);a.position.y=s/2,e.add(a);let l=new V(Se("sheethead",()=>new te(.22,12,10)),n);if(l.position.y=s+.1,e.add(l),t()<.5){let c=new V(Se("sheetarm",()=>new Cn(.07,.5,4,6)),n);c.position.set(.3,s*.75,.15),c.rotation.set(-.9,0,-.5),e.add(c)}return Re(e)}function Rh(i=1){let t=ee("crate",{map:be("crate"),roughness:.85}),e=new V(Se("crate",()=>new ae(1,1,1)),t);return e.scale.setScalar(i),e.position.y=i/2,e.castShadow=e.receiveShadow=!0,e}function Ch(i=1.8,t=.8){let e=new dt;e.add(vt(i,.06,t,ft.darkWood(),0,.74,0));for(let n of[-1,1])e.add(vt(.06,.74,t-.05,ft.darkWood(),n*(i/2-.05),0,0));return e.add(vt(.5,.6,t-.1,ft.darkWood(),i/2-.35,.08,0)),Re(e)}function ef(){let i=new dt,t=ee("chairseat",{color:2238e3,roughness:.7});i.add(vt(.5,.08,.5,t,0,.45,0));let e=vt(.5,.6,.07,t,0,.55,-.24);i.add(e);let n=new V(new re(.03,.03,.4,8),ft.metal());n.position.y=.25,i.add(n);for(let s=0;s<5;s++){let r=vt(.04,.03,.32,ft.metal(),0,.03,0);r.rotation.y=s/5*Math.PI*2,r.position.set(Math.sin(r.rotation.y)*.16,.03,Math.cos(r.rotation.y)*.16),i.add(r)}return Re(i)}function nf(i=.95,t=.6,e=1024,n=640){let s=new dt;s.add(vt(.25,.03,.2,ft.black())),s.add(vt(.05,.25,.05,ft.black(),0,.03,-.03));let r=vt(i+.06,t+.06,.05,ft.black(),0,.25,-.03);s.add(r);let[o,a]=ve(e,n),l=Me(o),c=new V(new Ht(i,t),new ce({map:l,toneMapped:!1}));c.position.set(0,.28+t/2,0),s.add(c);let h=new Oe(10471167,1.2,4,2);return h.position.set(0,.6,.5),s.add(h),Re(s),c.castShadow=!1,{group:s,canvas:o,ctx:a,texture:l,screen:c,glow:h}}function Gi(){let i=new dt,t=new V(new re(.028,.03,.26,12),ee("flbody",{color:1842204,roughness:.4,metalness:.6}));t.rotation.x=Math.PI/2,i.add(t);let e=new V(new re(.045,.03,.08,14),ee("flhead",{color:2763306,roughness:.3,metalness:.8}));e.rotation.x=Math.PI/2,e.position.z=-.16,i.add(e);let n=new V(new vi(.04,16),new ce({color:16774876}));n.position.z=-.201,n.rotation.y=Math.PI,i.add(n);let s=new V(new re(.031,.031,.1,12),ee("flgrip",{color:3355443,roughness:.9}));return s.rotation.x=Math.PI/2,s.position.z=.06,i.add(s),i.userData.lens=n,i}function Pa(){return new V(new ae(.7,.25,.08),[ft.black(),ft.black(),ft.black(),ft.black(),new ce({map:Ae("EXIT",{w:256,h:96,bg:"#0a3d1c",fg:"#6dff9e",font:"bold 64px Arial Black, Arial"}),toneMapped:!1}),ft.black()])}function Ph(i,t=""){let e=new dt;e.add(vt(.06,1.6,.06,ft.brass()));let n=new V(new Ht(1.5,.45),new ht({map:Ae(i+(t?"  "+t:""),{w:512,h:150,bg:"#1d2433",fg:"#f3e6c4",font:"bold 44px Arial Black, Arial",border:"#c9a24a"}),roughness:.5,emissive:16777215,emissiveIntensity:.05,side:Be}));return n.position.y=1.6,e.add(n),Re(e)}function sf(){let i=new dt;i.add(Ch(1.4,.7));let t=vt(.4,.06,.25,ft.darkWood(),0,.77,0);i.add(t);let e=vt(.25,.03,.05,ft.brass(),0,.86,0);i.add(e);let n=new V(new re(.035,.035,.03,12),ft.black());n.position.set(.12,.9,0),i.add(n);let s=new ht({color:3348992,emissive:16755251,emissiveIntensity:0}),r=new V(new te(.09,14,10),s);r.position.set(-.45,1,0),i.add(r);let o=new V(new re(.05,.07,.2,10),ft.brass());o.position.set(-.45,.86,0),i.add(o);let a=new Oe(16755251,0,6,2);return a.position.set(-.45,1.15,.2),i.add(a),Re(i),{group:i,setLamp(l){s.emissiveIntensity=l?3:0,a.intensity=l?3:0}}}function rf(){let i=new dt,t=new V(new te(.6,16,12),ee("beanbag",{color:12729194,roughness:.9}));return t.scale.set(1,.55,1),t.position.y=.3,i.add(t),Re(i)}function of(){let i=new dt;i.add(vt(1,2,.8,ee("vend",{color:11739178,roughness:.5})));let t=new V(new Ht(.62,1.3),new ce({map:Ae(`OUT OF
ORDER
(sorry)`,{w:256,h:512,bg:"#1a2a3a",fg:"#ff6b6b",font:"bold 54px Arial Black, Arial"}),toneMapped:!1}));return t.position.set(-.12,1.15,.401),i.add(t),Re(i)}function Jn(i,t,e,n=2){let s=new ae(i,t,e),r=s.attributes.uv,o=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;r.setXY(c,r.getX(c)*o[a][0]/n,r.getY(c)*o[a][1]/n)}return s}function Ia(i,t,e=2){let n=new Ht(i,t),s=n.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*i/e,s.getY(r)*t/e);return n}var Vi=class{constructor(t){this.game=t,this.scene=new Ks,this.colliders=[],this.interactables=[],this.triggers=[],this.updaters=[],this.collectibles=[],this.surface="marble",this.surfaceAt=null,this.wallT=.4}add(t,e=0,n=0,s=0,r=0){return t.position.set(e,n,s),t.rotation.y=r,this.scene.add(t),t}addCollider(t,e,n,s,r=null){let o={minX:Math.min(t,e),maxX:Math.max(t,e),minZ:Math.min(n,s),maxZ:Math.max(n,s),tag:r,enabled:!0};return this.colliders.push(o),o}addBoxCollider(t,e,n,s,r=0){let o=Math.abs(Math.sin(r))>.7,a=(o?s:n)/2,l=(o?n:s)/2;return this.addCollider(t-a,t+a,e-l,e+l)}addInteractable(t){let e={radius:2.4,enabled:!0,height:1.2,...t};return this.interactables.push(e),e}addTrigger(t){let e={once:!0,fired:!1,enabled:!0,...t};return this.triggers.push(e),e}addUpdater(t){return this.updaters.push(t),t}addCollectible(t,e,n,s,r=0){if(this.game.save.donuts.includes(t))return null;let o=Zd(r);o.position.set(e,n,s),this.scene.add(o);let a={id:t,obj:o,base:n,t:Math.random()*6,taken:!1};return this.collectibles.push(a),a}wallX(t,e,n,s,r,o=[],a=2){this._wall("x",t,e,n,s,r,o,a)}wallZ(t,e,n,s,r,o=[],a=2){this._wall("z",t,e,n,s,r,o,a)}_wall(t,e,n,s,r,o,a,l){let c=this.wallT,h=[],u=Math.min(n,s),d=Math.max(n,s);for(let f of[...a].sort((p,y)=>p.c-y.c)){let p=f.c-f.w/2,y=f.c+f.w/2;p>u&&h.push([u,p,0,r]),f.h<r&&h.push([p,y,f.h,r]),u=y}u<d&&h.push([u,d,0,r]);for(let[f,p,y,g]of h){let m=p-f,x=(f+p)/2,_=g-y,v=t==="x"?Jn(m,_,c,l):Jn(c,_,m,l),A=new V(v,o);t==="x"?A.position.set(x,y+_/2,e):A.position.set(e,y+_/2,x),A.receiveShadow=!0,A.castShadow=y>0,this.scene.add(A),y===0&&(t==="x"?this.addCollider(f,p,e-c/2,e+c/2):this.addCollider(e-c/2,e+c/2,f,p))}}floor(t,e,n,s,r,o=0,a=2){let l=e-t,c=s-n,h=new V(Ia(l,c,a),r);return h.rotation.x=-Math.PI/2,h.position.set((t+e)/2,o,(n+s)/2),h.receiveShadow=!0,this.scene.add(h),h}ceiling(t,e,n,s,r,o,a=2){let l=e-t,c=s-n,h=new V(Ia(l,c,a),o);return h.rotation.x=Math.PI/2,h.position.set((t+e)/2,r,(n+s)/2),this.scene.add(h),h}update(t){for(let s of this.updaters)s(t);let e=this.game,n=e.player;for(let s of this.collectibles)if(!s.taken&&(s.t+=t,s.obj.position.y=s.base+Math.sin(s.t*2)*.08,s.obj.userData.spin.rotation.y+=t*1.6,s.obj.userData.halo.material.opacity=.6+Math.sin(s.t*4)*.3,n&&n.enabled)){let r=n.pos.x-s.obj.position.x,o=n.pos.z-s.obj.position.z;r*r+o*o<1.1*1.1&&Math.abs(s.obj.position.y-1)<1.6&&(s.taken=!0,this.scene.remove(s.obj),e.collectDonut(s.id))}if(n&&n.enabled)for(let s of this.triggers){if(!s.enabled||s.once&&s.fired)continue;let r;s.r!=null?r=Math.hypot(n.pos.x-s.x,n.pos.z-s.z)<s.r:r=n.pos.x>s.minX&&n.pos.x<s.maxX&&n.pos.z>s.minZ&&n.pos.z<s.maxZ,r&&!s.inside&&(s.fired=!0,s.onEnter?.()),s.inside=r}}dispose(){this.scene.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){let e=Array.isArray(t.material)?t.material:[t.material];for(let n of e)n.map&&!n.map.userData?.keep&&n.map.dispose(),n.dispose()}})}};var La=null;function Da(){return La||(La={bone:new ht({color:15129796,roughness:.72,map:be("bone",1,2)}),dark:new ht({color:1380364,roughness:1}),tooth:new ht({color:16183518,roughness:.35}),eye:new ht({color:16723984,emissive:16722432,emissiveIntensity:5})},La)}var af={};function Je(i,t){return af[i]||(af[i]=t())}function Lh(i,t,e,n,s,r=0){let o=new ae(i,t,e,6,6,10);o.translate(0,0,e/2);let a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l)/(i/2),h=a.getY(l)/(t/2),u=Math.pow(Math.pow(Math.abs(c),2.6)+Math.pow(Math.abs(h),2.6),1/2.6);if(u>1e-6){let p=Math.max(Math.abs(c),Math.abs(h))/u;a.setX(l,a.getX(l)*p),a.setY(l,a.getY(l)*p)}let d=a.getZ(l)/e;a.setX(l,a.getX(l)*(1+(n-1)*d));let f=a.getY(l)*(1+(s-1)*d);f>0&&(f-=r*d*d),a.setY(l,f)}return o.computeVertexNormals(),o}function He(i,t,e=!0){let n=new V(i,t);return n.castShadow=e,n.receiveShadow=!1,n}function Wi(i,t,e,n){let s=new dt,r=He(Je(`shaft${i}${t}${e}`,()=>new re(e,t,i,8)),n);r.position.y=-i/2,s.add(r);let o=He(Je(`knob${t}`,()=>new te(t*1.35,10,8)),n);s.add(o);let a=He(Je(`knob${e}`,()=>new te(e*1.35,10,8)),n);return a.position.y=-i,s.add(a),s}function Dh(i,t){let e=new dt,n=He(Je("vcent",()=>new te(.13,10,8)),t);n.scale.set(1,.85,1.25),e.add(n);let s=He(Je("vspine",()=>new ae(.05,.34,.11)),t);s.position.y=.2,e.add(s);let r=He(Je("vtrans",()=>new ae(.42,.05,.07)),t);return r.position.y=.05,e.add(r),e.scale.setScalar(i),e}function Uh(i=Da()){let t=new dt,e=1.65,n=He(Je("skull",()=>Lh(.62,.72,e,.55,.62,.12)),i.bone);n.position.z=-.1,t.add(n);let s=He(Je("crest",()=>Lh(.46,.16,1,.5,.6)),i.bone);s.position.set(0,.36,-.08),t.add(s);let r=Je("sph",()=>new te(.12,10,8)),o=[];for(let h of[-1,1]){let u=He(r,i.dark,!1);u.position.set(h*.25,.16,.36),u.scale.set(.7,.95,1.1),t.add(u);let d=new V(Je("eye",()=>new te(.06,10,8)),i.eye);d.position.set(h*.29,.16,.39),d.visible=!1,t.add(d),o.push(d);let f=He(r,i.dark,!1);f.position.set(h*.2,0,.88),f.scale.set(.55,.75,1.9),t.add(f);let p=He(r,i.dark,!1);p.position.set(h*.08,.1,1.46),p.scale.set(.35,.3,.45),t.add(p);let y=He(r,i.bone);y.position.set(h*.3,-.18,.05),y.scale.set(.8,1.2,1.4),t.add(y)}let a=Je("tooth",()=>{let h=new On(.035,.17,6);return h.rotateX(Math.PI),h});for(let h of[-1,1])for(let u=0;u<10;u++){let d=.3+u*.125,f=(d+.1)/e,p=He(a,i.tooth,!1);p.position.set(h*(.31*(1-.45*f)-.035),-.36*(1-.38*f)-.06,d),p.scale.setScalar(u<2||u>7?.75:1.05),t.add(p)}let l=new dt;l.position.set(0,-.2,-.05),t.add(l);let c=He(Je("jaw",()=>Lh(.56,.2,1.55,.5,.8)),i.bone);c.position.set(0,-.27,0),l.add(c);for(let h of[-1,1])for(let u=0;u<9;u++){let d=.35+u*.125,f=d/1.55,p=He(a,i.tooth,!1);p.rotation.x=Math.PI,p.position.set(h*(.28*(1-.5*f)-.04),-.27+.1*(1-.2*f)+.06,d),p.scale.setScalar(.85),l.add(p)}return{head:t,jaw:l,eyes:o}}var ps=class{constructor({eyeLight:t=!0}={}){let e=Da();this.group=new dt,this.body=new dt,this.body.position.y=3.42,this.group.add(this.body),this.alive=!1;let n=He(Je("pelvis",()=>new te(.45,14,10)),e.bone);n.scale.set(.9,.75,1.45),n.position.z=.05,this.body.add(n);for(let u of[-1,1]){let d=He(Je("ilium",()=>new te(.5,12,10)),e.bone);d.scale.set(.14,.55,1.35),d.position.set(u*.26,.14,.05),this.body.add(d);let f=He(Je("pubis",()=>new re(.05,.08,1,6)),e.bone);f.position.set(u*.15,-.55,.35),f.rotation.x=.5,this.body.add(f)}let s=[];for(let u=0;u<11;u++){let d=u/10,f=-.25+d*3,p=.38+Math.sin(d*Math.PI)*.1+d*.32;s.push([f,p]);let y=Dh(1.05-.15*d,e.bone);y.position.set(0,p,f),y.rotation.x=-.1,this.body.add(y)}let r=Math.PI*2-.9;for(let u=0;u<9;u++){let d=u/8,f=.3+d*2.3,p=.38+Math.sin((f+.25)/3*Math.PI)*.1+(f+.25)/3*.32,y=.48+.34*Math.sin((.15+d*.75)*Math.PI),g=Je(`rib${u}`,()=>new xn(y,.04,6,22,r)),m=He(g,e.bone);m.rotation.order="XYZ",m.rotation.x=.38,m.rotation.z=Math.PI/2+.45,m.scale.set(.58,1.12,1),m.position.set(0,p-y*1.05+.05,f-.15),this.body.add(m)}let o=new R(0,.86,2.85),a=new R(0,1.55,3.42);for(let u=0;u<5;u++){let d=o.clone().lerp(a,u/4),f=Dh(.95,e.bone);f.position.copy(d),f.rotation.x=-.9,this.body.add(f)}this.headPivot=new dt,this.headPivot.position.set(0,1.72,3.5),this.body.add(this.headPivot);let l=Uh(e);this.headPivot.add(l.head),this.jaw=l.jaw,this.eyes=l.eyes,this.eyeLight=null,t&&(this.eyeLight=new Oe(16722432,0,9,1.6),this.eyeLight.position.set(0,.2,.9),l.head.add(this.eyeLight)),this.arms=[];for(let u of[-1,1]){let d=new dt;d.position.set(u*.5,.15,2.45),d.rotation.set(-.6,0,u*.2),this.body.add(d),d.add(Wi(.45,.05,.04,e.bone));let f=new dt;f.position.y=-.45,f.rotation.x=-1.1,d.add(f),f.add(Wi(.36,.04,.035,e.bone));for(let p of[-1,1]){let y=Wi(.14,.02,.015,e.bone);y.position.set(p*.03,-.36,0),y.rotation.x=-.6,f.add(y)}this.arms.push(d)}this.tail=[];let c=this.body;for(let u=0;u<14;u++){let d=new dt;u===0?d.position.set(0,.32,-.5):d.position.set(0,0,-.5*(1-u*.03)),c.add(d);let f=Dh(1-u*.062,e.bone);if(d.add(f),u<9){let p=He(Je("chev",()=>new ae(.04,.32,.08)),e.bone);p.position.y=-.2*(1-u*.08),p.rotation.x=-.4,d.add(p)}this.tail.push(d),c=d}this.legs=[-1,1].map(u=>this._leg(u,e)),this.anim={mode:"pose",phase:0,speed:0,roar:0,roarT:0,headYaw:.28,headPitch:.05,jaw:.28,targetYaw:.28,targetPitch:.05,breathe:0,time:0,lean:0},this.applyPose(0);let h=[this.body,this.headPivot,this.jaw,...this.tail,...this.arms,...this.legs.flatMap(u=>[u.hip,u.knee,u.ankle,u.foot])];Ta(h,this.eyes)}_leg(t,e){let n=new dt;n.position.set(t*.44,-.05,.15),this.body.add(n);let s=Wi(1.45,.2,.12,e.bone);n.add(s);let r=new dt;r.position.y=-1.45,n.add(r),r.add(Wi(1.55,.12,.075,e.bone));let o=Wi(1.4,.04,.03,e.bone);o.position.set(0,-.05,-.1),r.add(o);let a=new dt;a.position.y=-1.55,r.add(a),a.add(Wi(.8,.08,.07,e.bone));let l=new dt;l.position.y=-.8,a.add(l);for(let c of[-.13,0,.13]){let h=new dt;h.position.set(c,-.04,0),h.rotation.set(Math.PI/2+.1,c*-1.6,0),h.rotation.order="YXZ",l.add(h),h.add(Wi(c===0?.55:.45,.05,.035,e.bone));let u=He(Je("claw",()=>new On(.035,.14,5)),e.tooth,!1);u.position.y=c===0?-.6:-.5,u.rotation.x=Math.PI,h.add(u)}return{hip:n,knee:r,ankle:a,foot:l,side:t}}setAlive(t){this.alive=t;for(let e of this.eyes)e.visible=t;this.eyeLight&&(this.eyeLight.intensity=t?6:0)}setMode(t,e=0){this.anim.mode=t,this.anim.speed=e}roar(t=2.2){this.anim.roar=t,this.anim.roarT=0}lookAt(t){let e=this.group.worldToLocal(t.clone()),n=new R(0,5.3,3.5),s=e.sub(n);this.anim.targetYaw=Math.max(-.8,Math.min(.8,Math.atan2(s.x,s.z))),this.anim.targetPitch=Math.max(-.4,Math.min(.6,-Math.atan2(s.y,Math.hypot(s.x,s.z))))}update(t){this.anim.time+=t,this.applyPose(t)}applyPose(t){let e=this.anim,n=e.mode,s=0,r=0,o=0,a=0,l=0,c=0;n==="walk"?(c=e.speed/3.6,s=.45,r=.55,o=.12,a=.04,l=.06):n==="run"&&(c=e.speed/6.5,s=.7,r=.9,o=.22,a=.16,l=.04),e.phase+=c*Math.PI*2*t;let h=e.phase;for(let g of this.legs){let m=h+(g.side>0?Math.PI:0),x=Math.max(0,Math.cos(m)),_=-.5-s*Math.sin(m),v=1.1+r*x,A=-.95-r*.6*x;g.hip.rotation.x=_-a,g.knee.rotation.x=v,g.ankle.rotation.x=A,g.foot.rotation.x=-(_-a+v+A)}e.lean=t?sn(e.lean,a,4,t):a,this.body.rotation.x=e.lean;let u=3.42-o*Math.abs(Math.sin(h));this.alive&&n==="idle"&&(u+=Math.sin(e.time*1.6)*.04),this.body.position.y=u;let d=n==="pose"?.05:0;this.tail.forEach((g,m)=>{g.rotation.y=l*Math.sin(h+m*.45)+d*(m>6?1:.3)+(this.alive&&n==="idle"?Math.sin(e.time*.9+m*.3)*.03:0),g.rotation.x=m<5?.035:-.018});let f=n==="pose"?.28:.1,p=e.targetPitch,y=e.targetYaw;if(n==="run"&&(p=.15+Math.sin(h*2)*.05,y=0,f=.35+Math.max(0,Math.sin(h))*.2),n==="walk"&&(p+=Math.sin(h*2)*.04),this.alive&&n==="idle"&&(f=.12+Math.max(0,Math.sin(e.time*.8))*.1),e.roar>0){e.roarT+=t;let g=e.roarT/e.roar;if(g>=1)e.roar=0;else{let m=g<.15?g/.15:g>.8?(1-g)/.2:1;p=-.45*m+(1-m)*p,f=.95*m+Math.sin(e.roarT*40)*.05*m,y+=Math.sin(e.roarT*9)*.08*m}}t?(e.headYaw=sn(e.headYaw,y,6,t),e.headPitch=sn(e.headPitch,p,e.roar>0?10:5,t),e.jaw=sn(e.jaw,f,14,t)):(e.headYaw=y,e.headPitch=p,e.jaw=f),this.headPivot.rotation.set(e.headPitch,e.headYaw,0,"YXZ"),this.jaw.rotation.x=e.jaw;for(let g of this.arms)g.rotation.x=-.6+Math.sin(h*2)*(n==="run"?.3:.05)}};var Nh=new Map;function We(i,t=.8){let e=i+":"+t;return Nh.has(e)||Nh.set(e,new ht({color:i,roughness:t})),Nh.get(e)}var lf={},De=(i,t)=>lf[i]||(lf[i]=t());function Ue(i,t){let e=new V(i,t);return e.castShadow=!0,e}var hr=class{constructor(t={}){let e=this.opts={shirt:8365785,pants:1911364,skin:14725519,hair:2825492,shoes:1381653,cap:!1,badge:!1,hairStyle:"short",scale:1,nameTag:null,...t};this.group=new dt;let n=this.root=new dt;n.scale.setScalar(e.scale),this.group.add(n);let s=this.hips=new dt;s.position.y=.92,n.add(s);let r=Ue(De("pelvis",()=>new ae(.34,.2,.21)),We(e.pants));s.add(r);let o=this.torso=new dt;o.position.y=.08,s.add(o);let a=Ue(De("chest",()=>new Cn(.18,.3,4,10)),We(e.shirt));a.scale.set(1.05,1,.72),a.position.y=.27,o.add(a);let l=Ue(De("belt",()=>new ae(.36,.06,.24)),We(1118481,.5));if(l.position.y=.02,o.add(l),e.badge){let v=Ue(De("badge",()=>new ae(.06,.07,.02)),new ht({color:16765773,metalness:.8,roughness:.3}));v.position.set(-.09,.38,.135),o.add(v);let A=Ue(De("radio",()=>new ae(.05,.1,.03)),We(2236962));A.position.set(.1,.4,.13),o.add(A)}if(e.nameTag){let v=Ue(De("tag",()=>new ae(.09,.035,.01)),We(16777215));v.position.set(.09,.4,.135),o.add(v)}let c=Ue(De("neck",()=>new re(.055,.06,.1,8)),We(e.skin));c.position.y=.6,o.add(c);let h=this.head=new dt;h.position.y=.64,o.add(h);let u=Ue(De("head",()=>new te(.135,16,12)),We(e.skin));u.scale.set(.95,1.08,1),u.position.y=.12,h.add(u);let d=De("eye",()=>new te(.018,8,6));for(let v of[-1,1]){let A=Ue(d,We(1118481,.3));A.position.set(v*.048,.14,.122),h.add(A)}let f=Ue(De("nose",()=>new te(.022,8,6)),We(e.skin));if(f.position.set(0,.1,.135),h.add(f),this.mouth=Ue(De("mouth",()=>new ae(.05,.012,.01)),We(5909034)),this.mouth.position.set(0,.055,.125),h.add(this.mouth),e.hairStyle!=="bald"){let v=Ue(De("hair",()=>new te(.145,16,10,0,Math.PI*2,0,Math.PI*.55)),We(e.hair));if(v.position.set(0,.13,-.012),h.add(v),e.hairStyle==="long"){let A=Ue(De("hairlong",()=>new ae(.26,.28,.08)),We(e.hair));A.position.set(0,0,-.09),h.add(A)}}if(e.cap){let v=We(1778752,.7),A=Ue(De("cap",()=>new te(.148,16,8,0,Math.PI*2,0,Math.PI*.5)),v);A.scale.set(1.04,.62,1.08),A.position.y=.19,h.add(A);let E=Ue(De("capband",()=>new re(.152,.152,.035,16)),We(922406,.6));E.position.y=.19,h.add(E);let T=Ue(De("brim",()=>new re(.11,.11,.014,16,1,!1,-Math.PI/2,Math.PI)),v);T.scale.set(1.1,1,1.2),T.position.set(0,.185,.12),T.rotation.x=.12,h.add(T);let P=Ue(De("capbadge",()=>new ae(.045,.035,.01)),new ht({color:16765773,metalness:.8,roughness:.3}));P.position.set(0,.235,.152),h.add(P),this.cap={crown:A,brim:T,cb:P}}let p=De("arm",()=>new Cn(.058,.2,4,8)),y=De("fore",()=>new Cn(.052,.19,4,8)),g=De("hand",()=>new te(.055,8,6));this.arms=[-1,1].map(v=>{let A=new dt;A.position.set(v*.235,.5,0),o.add(A);let E=Ue(p,We(e.shirt));E.position.y=-.14,A.add(E);let T=new dt;T.position.y=-.29,A.add(T);let P=Ue(y,We(e.sleeves==="short"?e.skin:e.shirt));P.position.y=-.13,T.add(P);let S=new dt;return S.position.y=-.28,T.add(S),S.add(Ue(g,We(e.skin))),{sh:A,el:T,hand:S,side:v}});let m=De("thigh",()=>new Cn(.075,.3,4,8)),x=De("shin",()=>new Cn(.066,.3,4,8)),_=De("foot",()=>new ae(.11,.07,.25));this.legs=[-1,1].map(v=>{let A=new dt;A.position.set(v*.095,-.06,0),s.add(A);let E=Ue(m,We(e.pants));E.position.y=-.21,A.add(E);let T=new dt;T.position.y=-.42,A.add(T);let P=Ue(x,We(e.pants));P.position.y=-.2,T.add(P);let S=Ue(_,We(e.shoes,.5));return S.position.set(0,-.42,.05),T.add(S),{hip:A,knee:T,side:v}}),this.anim={mode:"idle",phase:0,speed:0,time:0,talk:0,blend:{}},Ta([s,o,h,...this.arms.flatMap(v=>[v.sh,v.el,v.hand]),...this.legs.flatMap(v=>[v.hip,v.knee])],[this.mouth]),this.update(0)}attachToHand(t,e=1){return this.arms.find(s=>s.side===e).hand.add(t),t}setMode(t,e=0){this.anim.mode=t,this.anim.speed=e}update(t){let e=this.anim;e.time+=t;let n=e.time,s=e.mode,r=0;s==="walk"&&(r=e.speed/1.5),s==="run"&&(r=e.speed/3.2),e.phase+=r*Math.PI*2*t;let o=e.phase,a={hipsY:.92,hipsRX:0,torsoRX:0,headRX:0,headRY:0,legs:[[0,0],[0,0]],arms:[[0,.15,0],[0,.15,0]]};if(s==="idle")a.hipsY=.92+Math.sin(n*2)*.005,a.headRY=Math.sin(n*.5)*.15,a.arms=[[.05,-.15,.1],[.05,-.15,-.1]];else if(s==="walk"){let h=Math.sin(o);a.legs=[[-.5*h,Math.max(0,-Math.cos(o))*.7],[.5*h,Math.max(0,Math.cos(o))*.7]],a.arms=[[.4*h,-.2,.08],[-.4*h,-.2,-.08]],a.hipsY=.92-Math.abs(Math.cos(o))*.03}else if(s==="run"){let h=Math.sin(o);a.legs=[[-.95*h,.4+Math.max(0,-Math.cos(o))*1.3],[.95*h,.4+Math.max(0,Math.cos(o))*1.3]],a.arms=[[.9*h,-1.3,.1],[-.9*h,-1.3,-.1]],a.torsoRX=.25,a.hipsY=.9-Math.abs(Math.cos(o))*.08}else if(s==="jump")a.legs=[[-.9,1.4],[-.3,.9]],a.arms=[[-2.6,-.3,.3],[-2.6,-.3,-.3]],a.torsoRX=.1;else if(s==="slide")a.hipsY=.35,a.hipsRX=-1.15,a.legs=[[-.4,.2],[-.2,.6]],a.arms=[[-1.6,-.3,.3],[-1.6,-.3,-.3]],a.torsoRX=.1,a.headRX=.7;else if(s==="sit"||s==="eat"||s==="type"){if(a.hipsY=.55,a.legs=[[-1.57,1.57],[-1.57,1.57]],a.torsoRX=.08,a.arms=[[-.7,-.8,.1],[-.7,-.8,-.1]],s==="eat"){let h=(Math.sin(n*2.2)+1)/2;a.arms[1]=[-.4-1.5*h,-1.2-.9*h,-.25*h],a.headRX=.1*h}s==="type"&&(a.arms[0]=[-.9+Math.sin(n*18)*.05,-.7,.15],a.arms[1]=[-.9+Math.sin(n*15+1)*.05,-.7,-.15],a.headRX=.12)}else s==="sleep"?(a.hipsY=.55,a.legs=[[-1.4,1.5],[-1.5,1.4]],a.torsoRX=.5,a.headRX=.6,a.arms=[[-.2,-.3,.2],[-.2,-.3,-.2]]):s==="shock"?(a.arms=[[-2.8,-.3,.4],[-2.8,-.3,-.4]],a.headRX=-.15,a.hipsY=.92+Math.abs(Math.sin(n*20))*.02):s==="point"?(a.arms[1]=[-1.55,0,0],a.headRY=.1):s==="shrug"&&(a.arms=[[-.2,-1.6,.6],[-.2,-1.6,-.6]],a.headRX=-.1);let l=t?1-Math.exp(-14*t):1,c=(h,u,d)=>{h[u]+=(d-h[u])*l};c(this.hips.position,"y",a.hipsY),c(this.hips.rotation,"x",a.hipsRX),c(this.torso.rotation,"x",a.torsoRX),c(this.head.rotation,"x",a.headRX),c(this.head.rotation,"y",a.headRY),this.legs.forEach((h,u)=>{c(h.hip.rotation,"x",a.legs[u][0]),c(h.knee.rotation,"x",a.legs[u][1])}),this.arms.forEach((h,u)=>{c(h.sh.rotation,"x",a.arms[u][0]),c(h.el.rotation,"x",a.arms[u][1]),c(h.sh.rotation,"z",a.arms[u][2]+h.side*.08)}),e.talk>0?(e.talk-=t,this.mouth.scale.y=1+Math.abs(Math.sin(n*22))*5):this.mouth.scale.y=sn(this.mouth.scale.y,1,10,t||1)}},Ua=(i={})=>new hr({shirt:9417696,pants:1778752,cap:!0,badge:!0,hair:3810322,...i}),fx=[14832981,5613672,15905076,9202646,2864051,15895729,16777215,3355443,16747069,5209049],px=[2832981,3355443,7035464,1907997,4878245],mx=[15845284,14725519,13012580,9263675,6044196,16243136],gx=[2825492,1118481,9132587,14266986,7027487,10066329];function cf(i=Math.random){let t=n=>n[Math.floor(i()*n.length)],e=i()<.35;return new hr({shirt:t(fx),pants:t(px),skin:t(mx),hair:t(gx),hairStyle:i()<.4?"long":i()<.1?"bald":"short",sleeves:i()<.5?"short":"long",scale:e?.62+i()*.12:.95+i()*.1})}function jn(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function hf(i,t,e){let n=i.canvas.width,s=i.canvas.height;i.fillStyle="#0f0f0f",i.fillRect(0,0,n,s),i.fillStyle="#ff2b2b",jn(i,24,18,54,38,10),i.fill(),i.fillStyle="#fff",i.beginPath(),i.moveTo(44,27),i.lineTo(62,37),i.lineTo(44,47),i.fill(),i.font="bold 30px Arial",i.fillText("MeTube",88,48),i.fillStyle="#222",jn(i,300,18,440,40,20),i.fill(),i.fillStyle="#aaa",i.font="20px Arial",i.fillText("dinosaurs that could beat you in a race",322,45);let r=24,o=76,a=660,l=372,c=i.createLinearGradient(0,o,0,o+l);c.addColorStop(0,"#ff9a5a"),c.addColorStop(1,"#ffd98a"),i.fillStyle=c,i.fillRect(r,o,a,l),i.fillStyle="#c8763a",i.fillRect(r,o+l*.72,a,l*.28),i.fillStyle="#6b3b2a",i.beginPath(),i.moveTo(r+380,o+l*.72),i.lineTo(r+480,o+120),i.lineTo(r+520,o+120),i.lineTo(r+640,o+l*.72),i.fill(),i.fillStyle="rgba(80,60,60,0.6)",i.beginPath(),i.arc(r+500+Math.sin(t)*10,o+90-t*20%40,26,0,7),i.fill();let h=t*140%(a+300)-150,u=o+l*.72;i.save(),i.translate(r+h,u),i.fillStyle="#2b1d14";let d=Math.abs(Math.sin(t*12))*6;i.beginPath(),i.ellipse(0,-70-d,55,30,-.1,0,7),i.fill(),i.beginPath(),i.moveTo(-50,-75-d),i.lineTo(-130,-60-d),i.lineTo(-48,-60-d),i.fill(),i.beginPath(),i.ellipse(52,-105-d,30,18,-.2,0,7),i.fill(),i.fillRect(20,-100-d,18,30);let f=Math.sin(t*12)*18;i.fillRect(-10+f,-50-d,12,50+d),i.fillRect(10-f,-50-d,12,50+d),i.fillStyle="#ff3b3b",i.beginPath(),i.arc(64,-110-d,4,0,7),i.fill(),i.restore(),i.save(),i.translate(r+h+170,u),i.strokeStyle="#1a1a1a",i.lineWidth=5,i.beginPath(),i.arc(0,-62,10,0,7),i.stroke(),i.beginPath(),i.moveTo(0,-52),i.lineTo(0,-25),i.stroke();let p=Math.sin(t*16)*12;if(i.beginPath(),i.moveTo(0,-25),i.lineTo(p,0),i.moveTo(0,-25),i.lineTo(-p,0),i.stroke(),i.beginPath(),i.moveTo(0,-45),i.lineTo(-p,-32),i.moveTo(0,-45),i.lineTo(p,-30),i.stroke(),i.restore(),i.fillStyle="rgba(0,0,0,0.6)",jn(i,r+16,o+16,120,44,8),i.fill(),i.fillStyle="#fff",i.font="bold 30px Arial",i.fillText("#3",r+52,o+50),i.fillStyle="#444",i.fillRect(r,o+l-6,a,6),i.fillStyle="#ff2b2b",i.fillRect(r,o+l-6,a*(.42+t*.004%.5),6),i.fillStyle="#fff",i.font="bold 24px Arial",i.fillText("TOP 10 DINOSAURS THAT COULD BEAT YOU IN A RACE",r,o+l+40),i.fillText("(#1 WILL SHOCK YOU)",r,o+l+70),i.fillStyle="#aaa",i.font="18px Arial",i.fillText("DinoFacts4Kids  \u2022  2.1M views  \u2022  3 years ago",r,o+l+100),i.fillStyle="#fff",jn(i,r+470,o+l+80,120,36,18),i.fill(),i.fillStyle="#000",i.font="bold 18px Arial",i.fillText("Subscribe",r+488,o+l+104),[["I SURVIVED 24 HRS IN A MUSEUM","#3a6"],["Donut tier list (honest)","#d58"],["Is the T-Rex REAL?? (not clickbait)","#a63"],["Night guard falls asleep on cam","#36a"],["How to remember passwords","#777"]].forEach(([g,m],x)=>{let _=80+x*108;i.fillStyle=m,jn(i,708,_,150,86,8),i.fill(),i.fillStyle="rgba(255,255,255,0.3)",i.beginPath(),i.arc(783,_+43,18,0,7),i.fill(),i.fillStyle="#eee",i.font="bold 16px Arial";let v=g.split(" "),A="",E=_+20;for(let T of v)i.measureText(A+T).width>140&&(i.fillText(A,868,E),A="",E+=20),A+=T+" ";i.fillText(A,868,E),i.fillStyle="#999",i.font="14px Arial",i.fillText(`${(x*3.7+1.2).toFixed(1)}M views`,868,E+22)}),e!=null){let g=e<=5;i.fillStyle=g&&Math.floor(t*4)%2?"#ff2b2b":"#ffcc4d",jn(i,n-360,s-92,340,72,10),i.fill(),i.fillStyle="#111",i.font="bold 22px Arial",i.fillText("\u26A0 MUSE-OS SESSION",n-340,s-62),i.font="bold 22px Arial",i.fillText(`Expires in 0:${String(Math.max(0,Math.ceil(e))).padStart(2,"0")}`,n-340,s-34)}}function Na(i,t,e="SESSION EXPIRED",n="Please log in again."){let s=i.canvas.width,r=i.canvas.height,o=i.createLinearGradient(0,0,s,r);o.addColorStop(0,"#0d2340"),o.addColorStop(1,"#2a0f3d"),i.fillStyle=o,i.fillRect(0,0,s,r),i.fillStyle="rgba(255,255,255,0.06)";for(let a=0;a<12;a++)i.beginPath(),i.arc((a*173+t*20)%s,a*97%r,60+a%3*30,0,7),i.fill();i.textAlign="center",i.fillStyle="#fff",i.font="bold 54px Arial",i.fillText("\u{1F512}",s/2,r/2-90),i.font="bold 48px Arial",i.fillText(e,s/2,r/2),i.font="28px Arial",i.fillStyle="#c9d6ff",i.fillText(n,s/2,r/2+50),i.font='22px "Courier New", monospace',i.fillStyle="#7fa0d0",i.fillText("MUSE-OS v2.3 \u2014 City Museum of Natural History",s/2,r-40),i.textAlign="left"}function uf(i,t,e="",n="",s="#ff6b6b"){Na(i,t,"","");let r=i.canvas.width,o=i.canvas.height;i.fillStyle="rgba(0,0,0,0.45)",jn(i,r/2-260,o/2-170,520,340,18),i.fill(),i.textAlign="center",i.fillStyle="#fff",i.font="bold 34px Arial",i.fillText("NIGHT_GUARD",r/2,o/2-110),i.fillStyle="#fff",jn(i,r/2-200,o/2-70,400,56,10),i.fill(),i.fillStyle="#222",i.font="bold 34px Arial",i.fillText("\u2022".repeat(e.length)+(Math.floor(t*2)%2?"|":""),r/2,o/2-30),i.fillStyle="#4c8dff",jn(i,r/2-200,o/2+6,190,50,10),i.fill(),i.fillStyle="#ffcc4d",jn(i,r/2+10,o/2+6,190,50,10),i.fill(),i.fillStyle="#fff",i.font="bold 24px Arial",i.fillText("LOG IN",r/2-105,o/2+40),i.fillStyle="#111",i.fillText("HINT?",r/2+105,o/2+40),n&&(i.fillStyle=s,i.font="bold 26px Arial",i.fillText(n,r/2,o/2+120)),i.textAlign="left"}function df(i,t){let e=i.canvas.width,n=i.canvas.height;i.fillStyle="#000",i.fillRect(0,0,e,n),i.textAlign="center";let s=Math.random()<.1?(Math.random()-.5)*30:0;i.fillStyle="#6dff9e",i.font='bold 64px "Courier New", monospace',i.fillText("SOLVE THE PUZZLES",e/2+s,n/2-20),i.fillStyle="#ff3b6b",i.fillText("SOLVE THE PUZZLES",e/2-s*.5+3,n/2-20+2),i.fillStyle="#6dff9e",i.font='28px "Courier New", monospace',i.fillText("PUZZLE #1 SLEEPS WHERE GIANTS ONCE WALKED",e/2,n/2+50),i.fillText("> DINOSAUR HALL",e/2,n/2+100);for(let r=0;r<n;r+=4)i.fillStyle="rgba(0,0,0,0.3)",i.fillRect(0,r,e,2);i.textAlign="left"}function ff(i,t){let e=i.canvas.width,n=i.canvas.height;i.fillStyle=Math.floor(t*3)%2?"#3a0000":"#1a0000",i.fillRect(0,0,e,n),i.textAlign="center",i.fillStyle="#ff3b3b",i.font="bold 72px Arial",i.fillText("ACCESS DENIED",e/2,n/2),i.font="28px Arial",i.fillText("Password fragments: 5 / 6",e/2,n/2+60),i.textAlign="left"}function pf(i,t,{trexGone:e=!1,day:n=!1}={}){let s=i.canvas.width,r=i.canvas.height,o=s/3,a=r/2,l=["CAM 1 LOBBY","CAM 2 DINO HALL","CAM 3 ROMAN","CAM 4 ENTRANCE","CAM 5 ARCHIVES","CAM 6 PARKING"];for(let c=0;c<6;c++){let h=c%3*o,u=Math.floor(c/3)*a;i.fillStyle=n?"#3a4a3a":"#0c1410",i.fillRect(h,u,o,a),i.fillStyle=n?"#5a6a5a":"#16241c",i.fillRect(h+10,u+a*.6,o-20,a*.35),c===1&&!e&&(i.strokeStyle=n?"#d8d0b8":"#5a7a66",i.lineWidth=3,i.beginPath(),i.ellipse(h+o*.5,u+a*.45,26,14,0,0,7),i.moveTo(h+o*.5+20,u+a*.4),i.lineTo(h+o*.72,u+a*.25),i.moveTo(h+o*.5-24,u+a*.45),i.lineTo(h+o*.2,u+a*.55),i.moveTo(h+o*.48,u+a*.55),i.lineTo(h+o*.46,u+a*.85),i.moveTo(h+o*.55,u+a*.55),i.lineTo(h+o*.57,u+a*.85),i.stroke());let d=i.getImageData(h,u,o,a),f=d.data;for(let p=0;p<f.length;p+=16){let y=(Math.random()-.5)*(n?30:60);f[p]+=y,f[p+1]+=y,f[p+2]+=y}i.putImageData(d,h,u),i.fillStyle=n?"#ffffff":"#9dffb8",i.font="bold 13px monospace",i.fillText(l[c],h+8,u+18),Math.floor(t*2)%2&&(i.fillStyle="#ff3b3b",i.beginPath(),i.arc(h+o-14,u+13,5,0,7),i.fill()),i.strokeStyle="#000",i.lineWidth=4,i.strokeRect(h,u,o,a)}}var ne={officeChair:new R(-17.9,0,0),officeStart:new R(-17.2,0,.3),lobbyNorth:new R(0,0,-7.5),dinoDoor:new R(0,0,-12),dinoPanel:new R(2.4,0,-20.6),trex:new R(0,.5,-31),romanDoor:new R(13.5,0,0),romanPanel:new R(37.4,0,0),computer:new R(-18.75,1.05,0)},_i=class extends Vi{constructor(t,{time:e="night"}={}){super(t),this.time=e,this.night=e==="night",this.refs={},this.surfaceAt=(o,a)=>o<-12?"wood":o>12?"marble":a<-10?"stone":"marble";let n=this.scene;n.background=new Ut(this.night?131848:12571366),n.fog=this.night?new $s(197899,.028):new Zs(13622248,40,140),this.mats={officeWall:new ht({map:be("plaster"),color:12169626,roughness:.9}),lobbyWall:new ht({map:be("plaster"),color:9410726,roughness:.85}),dinoWall:new ht({map:be("plaster"),color:8023646,roughness:.9}),romanWall:new ht({map:be("plaster"),color:11828316,roughness:.85}),wood:new ht({map:be("wood"),roughness:.7}),marble:new ht({map:be("marble"),roughness:.25,metalness:.05}),stone:new ht({map:be("stone"),roughness:.8}),mosaic:new ht({map:be("mosaic"),roughness:.6}),ceiling:new ht({map:be("ceiling"),roughness:.9,color:10131086}),darkCeil:new ht({color:this.night?1907482:12170150,roughness:1}),trim:new ht({color:2761760,roughness:.6})},this._lights(),this._office(),this._lobby(),this._dino(),this._roman(),this._collectibles(),this.night||this._visitors();let s=this.refs,r=new Set([s.trex.group,s.guard.group,s.donutBox,s.deskFlashlight,s.footprints,...this.collectibles.map(o=>o.obj),...(this.visitors||[]).map(o=>o.p.group)]);xi(this.scene,o=>r.has(o))}_lights(){let t=this.scene,e=this.night;this.ambient=new Oi(e?7372976:16777215,e?.32:.9),t.add(this.ambient),this.hemi=new ki(e?5925530:15266047,e?1446416:9075302,e?.45:1.4),t.add(this.hemi);let n=new ra(e?9414911:16773592,e?.55:2.4);n.position.set(12,30,40),n.target.position.set(0,0,-20),t.add(n,n.target),this.sun=n;let s=(r,o,a,l,c,h)=>{let u=new Oe(r,o,a,2);return u.position.set(l,c,h),t.add(u),u};e?(s(6981375,6,22,0,9,-40),s(16756848,5,14,37,5,0),s(6981375,3,16,0,6,6),this.officeLamp=s(16762746,3.5,7,-18.4,1.4,.9),this.fluoro=s(14674175,2.5,8,-16,3.1,0)):(s(16777215,30,40,0,11,-28),s(16773853,20,30,26,8,0),s(16777215,12,25,0,7,0),this.officeLamp=s(16762746,2,6,-18.4,1.4,.9),this.fluoro=s(16777215,6,10,-16,3.1,0))}_office(){let t=this.mats;this.floor(-20,-12,-5,5,t.wood,0,3),this.ceiling(-20,-12,-5,5,3.4,t.ceiling,1.2),this.wallX(-5,-20,-12,3.4,t.officeWall),this.wallX(5,-20,-12,3.4,t.officeWall),this.wallZ(-20,-5,5,3.4,t.officeWall);let e=new V(new ae(1.4,.06,.4),new ce({color:15397631}));e.position.set(-16,3.36,0),this.scene.add(e),this.refs.fluoroMesh=e;let n=Ch(1.9,.85);this.add(n,-18.75,0,0,Math.PI/2),this.addBoxCollider(-18.75,0,1.9,.85,Math.PI/2);let s=nf(.95,.6);this.add(s.group,-18.95,.77,0,Math.PI/2),this.refs.monitor=s;let r=ef();this.add(r,-17.9,0,0,-Math.PI/2),this.refs.chair=r,this.add(vt(.18,.02,.5,ft.black()),-18.55,.77,0);let o=new dt;o.add(vt(.15,.03,.15,ft.black()));let a=vt(.03,.45,.03,ft.black(),0,.03,0);o.add(a);let l=new V(new On(.12,.16,12,1,!0),new ht({color:2841914,side:Be}));l.position.set(.05,.5,0),l.rotation.z=-.5,o.add(l),this.add(o,-18.9,.77,.75);let c=new dt,h=new ht({color:16230600,roughness:.8});c.add(vt(.55,.07,.38,h));let u=new V(new ae(.55,.01,.38),new ht({map:Ae(`DOZEN
DELUXE`,{w:256,h:180,bg:"#f7a8c8",fg:"#b3125a",font:"bold 52px Arial Black, Arial"})}));u.position.set(0,.25,-.2),u.rotation.x=-1.2,c.add(u),this.refs.boxDonuts=[];for(let P=0;P<6;P++){let S=Kn({frosting:P,scale:.55});S.position.set(-.17+P%3*.17,.08,-.08+Math.floor(P/3)*.17),c.add(S),this.refs.boxDonuts.push(S)}this.add(c,-18.6,.77,-.65,Math.PI/2),this.refs.donutBox=c;let d=Gi();d.position.set(-18.45,.81,.45),d.rotation.y=.6,this.scene.add(d),this.refs.deskFlashlight=d;let f=new V(new re(.045,.04,.1,12),new ht({color:16777215}));f.position.set(-18.5,.82,-.2),this.scene.add(f);let[p,y]=ve(384,192,{willReadFrequently:!0}),g=Me(p),m=new V(new Ht(2.6,1.3),new ce({map:g,toneMapped:!1}));m.position.set(-16.5,1.95,-4.78),this.scene.add(m),this.add(vt(2.75,1.45,.1,ft.black()),-16.5,1.25,-4.84);let x=0,_=0;this.cctvState={trexGone:!1,day:!this.night},this.addUpdater(P=>{x+=P,_+=P,_>.12&&(_=0,pf(y,x,this.cctvState),g.needsUpdate=!0)});for(let P=0;P<4;P++){let S=vt(.6,2,.5,new ht({color:5202547,roughness:.5,metalness:.4}));this.add(S,-19.4+P*.62,0,4.7)}this.addCollider(-19.8,-16.9,4.4,5);let v=(P,S,M,L,D,U,F)=>{let X=new V(new Ht(.8,1.05),new ht({map:Ae(P,{w:256,h:340,bg:U,fg:F,font:"bold 34px Arial Black, Arial",border:F})}));X.position.set(S,M,L),X.rotation.y=D,this.scene.add(X)};v(`EMPLOYEE
OF THE
MONTH:
AARON`,-13.5,1.8,-4.78,0,"#ffe08a","#7a4b00"),v(`STAY
AWAKE
(seriously)`,-19.78,2,-3,Math.PI/2,"#16324f","#ffcc4d"),v(`NO
DINOSAURS
IN THE
OFFICE`,-14.8,1.8,4.78,Math.PI,"#fff","#c81e1e");let A=new V(new vi(.25,24),new ce({map:Ae("11:58",{w:128,h:128,bg:"#fff",fg:"#111",font:"bold 34px Arial"})}));A.position.set(-19.78,2.5,1.5),A.rotation.y=Math.PI/2,this.scene.add(A);let E=Ua();E.group.position.set(-17.95,0,0),E.group.rotation.y=-Math.PI/2,E.setMode("sit"),E.update(0),this.scene.add(E.group),this.refs.guard=E,this.addUpdater(P=>{E.group.visible&&E.update(P)}),this.refs.computerIt=this.addInteractable({id:"computer",pos:new R(-18.7,1.1,0),prompt:"Log in",enabled:!1});let T=new V(new Ht(2.2,.5),new ht({map:Ae("SECURITY",{w:512,h:116,bg:"#1d2433",fg:"#ffcc4d",font:"bold 64px Arial Black, Arial",border:"#ffcc4d"}),emissive:16777215,emissiveIntensity:.08}));T.position.set(-11.78,2.85,0),T.rotation.y=Math.PI/2,this.scene.add(T)}_lobby(){let t=this.mats,e=this.scene;this.floor(-12,12,-10,10,t.marble,0,4),this.ceiling(-12,12,-10,10,8,t.darkCeil),this.wallX(-10,-12,12,8,t.lobbyWall,[{c:0,w:6,h:6.2}],3),this.wallZ(12,-10,-9,8,t.lobbyWall,[],3),this.wallZ(12,9,10,8,t.lobbyWall,[],3),this.wallZ(-12,-10,10,8,t.lobbyWall,[{c:0,w:2.2,h:2.4}],3),this.wallX(10,-12,12,8,t.lobbyWall,[{c:-7.5,w:4,h:6.5},{c:0,w:6,h:4.2},{c:7.5,w:4,h:6.5}],3);let n=new ce({color:this.night?1846874:15922943,toneMapped:!this.night});for(let y of[-7.5,7.5]){let g=new V(new Ht(4,6.5),n);g.position.set(y,3.25,10.1),g.rotation.y=Math.PI,e.add(g),e.add(vt(.12,6.5,.15,t.trim,y,0,10));for(let m of[2.2,4.4])e.add(vt(4,.1,.15,t.trim,y,m,10));e.add(vt(4,.1,.4,t.trim,y,0,10))}this.addCollider(-9.5,-5.5,9.8,10.2),this.addCollider(5.5,9.5,9.8,10.2);let s=ft.glass();for(let y of[-1.5,1.5]){let g=vt(2.9,4.1,.08,s,y,0,10);g.castShadow=!1,e.add(g),e.add(vt(.08,4.1,.1,ft.metal(),y-1.45,0,10)),e.add(vt(.06,.5,.12,ft.brass(),y+(y<0?1.3:-1.3),1.1,9.92))}let r=new V(new Ht(6,4.2),n);r.position.set(0,2.1,10.3),r.rotation.y=Math.PI,e.add(r),this.addCollider(-3,3,9.8,10.2);let o=vt(1.5,2.55,.1,new ht({color:3881794,metalness:.5,roughness:.4}));o.rotation.y=Math.PI/2,o.position.set(-11.78,1.275,6.5),e.add(o);let a=new V(new Ht(1.4,.35),new ht({map:Ae(`ARCHIVES
STAFF ONLY`,{w:256,h:64,bg:"#a01818",fg:"#fff",font:"bold 22px Arial"})}));a.position.set(-11.75,2.85,6.5),a.rotation.y=Math.PI/2,e.add(a);let l=(y,g,m,x,_,v=5.6)=>{let A=new V(new Ht(v,1.2),new ht({map:Ae(y,{w:1024,h:220,bg:"#14100c",fg:"#e9cf8a",font:"bold 120px Georgia, serif",border:"#c9a24a"}),emissive:16769184,emissiveIntensity:this.night?.12:.02}));A.position.set(g,m,x),A.rotation.y=_,e.add(A)};l("DINOSAUR HALL",0,7.1,-9.77,0),l("ROMAN EMPIRE",11.77,7.1,0,-Math.PI/2);let c=new dt;c.add(vt(4.6,1.1,1,t.trim)),c.add(vt(4.8,.08,1.2,ft.marble(),0,1.1,0));let h=new V(new Ht(3.2,.5),new ht({map:Ae("INFORMATION",{w:512,h:80,bg:"#2a2420",fg:"#c9a24a",font:"bold 48px Georgia, serif"})}));h.position.set(0,.62,-.51),h.rotation.y=Math.PI,c.add(h),Re(c),this.add(c,0,0,4.2),this.addBoxCollider(0,4.2,4.8,1.2);for(let y of[-8,8])for(let g of[-6,6])this.add(Sh(8,.5),y,0,g),this.addBoxCollider(y,g,1.2,1.2);for(let y of[-6,6])this.add(Ra(2.2),y,0,0,Math.PI/2),this.addBoxCollider(y,0,2.2,.55,Math.PI/2);for(let[y,g]of[[-11,-9],[11,-9],[-11,9],[11,9],[-4.2,-9],[4.2,-9]])this.add(wh(y*7+g),y,0,g),this.addBoxCollider(y,g,.6,.6);let u=Ph("DINOSAURS","\u2191");this.add(u,-2.3,0,-4.5),this.addBoxCollider(-2.3,-4.5,.3,.3);let d=Ph("ROMAN EMPIRE","\u2192");this.add(d,5,0,-2.6),this.addBoxCollider(5,-2.6,.3,.3);let f=new V(new Ht(3,5),new ht({map:Ae(`HISTORY
COMES
ALIVE!`,{w:300,h:500,bg:"#7a1022",fg:"#ffd98a",font:"bold 64px Georgia, serif"}),side:Be}));f.position.set(-6,5,-2),f.rotation.y=.3,e.add(f);let p=cr("MUSEUM MAP",`\u2191 North: Dinosaur Hall
\u2192 East: Roman Empire
\u2190 West: Security Office
\u2193 South: Exit (locked at night)`,2.4,1.6,{bg:"#16202e",fg:"#dfe8ff",accent:"#6dc2ff"});p.position.set(11.78,2.2,6.5),p.rotation.y=-Math.PI/2,e.add(p);for(let[y,g,m,x]of[[0,4.55,9.77,Math.PI],[-11.75,2.65,0,Math.PI/2]]){let _=Pa();_.position.set(y,g,m),_.rotation.y=x,x===Math.PI/2&&(_.position.y=3.3),e.add(_)}}_dino(){let t=this.mats,e=this.scene;this.floor(-15,15,-46,-10,t.stone,0,4),this.ceiling(-15,15,-46,-10,13,t.darkCeil),this.wallX(-46,-15,15,13,t.dinoWall,[],3),this.wallZ(-15,-46,-10,13,t.dinoWall,[],3),this.wallZ(15,-46,-10,13,t.dinoWall,[],3),this.wallX(-10,-15,-12,13,t.dinoWall,[],3),this.wallX(-10,12,15,13,t.dinoWall,[],3),this.wallX(-10.01,-12,12,13,t.dinoWall,[{c:0,w:24.5,h:8}],3);let[n,s]=ve(64,256),r=s.createImageData(64,256);for(let D=0;D<256;D++)for(let U=0;U<64;U++){let F=Math.pow(Math.sin(U/63*Math.PI),2.2),X=Math.pow(1-D/255,1.6),G=(D*64+U)*4;r.data[G]=r.data[G+1]=r.data[G+2]=255,r.data[G+3]=255*F*X}s.putImageData(r,0,0);let o=Me(n,{srgb:!1});o.wrapS=o.wrapT=ci;let a=new ce({map:o,color:this.night?7377151:16773320,transparent:!0,opacity:this.night?.05:.12,blending:En,depthWrite:!1,side:Be,fog:!1});for(let D of[-18,-30,-40])for(let U of[0,1]){let F=new V(new Ht(7,14),a);F.position.set(1.5,6.1,D-2.2),F.rotation.set(0,U*Math.PI/2,.22),U&&F.position.set(1.5,6.1,D-2.2),e.add(F)}for(let D of[-18,-30,-40]){let U=new V(new Ht(8,4),new ce({color:this.night?1978982:16777215,toneMapped:!this.night}));U.position.set(0,12.95,D),U.rotation.x=Math.PI/2,e.add(U)}let l=new V(Jn(9,.5,15,3),new ht({map:be("stone"),color:9075306,roughness:.85}));l.position.set(0,.25,-30),l.receiveShadow=!0,e.add(l),e.add(vt(9.2,.1,15.2,t.trim,0,.36,-30)),this.addCollider(-4.6,4.6,-37.6,-22.4,"platform");let c=[];for(let D=-5.2;D<=5.21;D+=2.6)c.push([D,-21.8]);for(let[D,U]of c)this.add(lr(),D,0,U);for(let D=0;D<c.length-1;D++){let U=Xr(2.6);U.position.set(c[D][0],0,c[D][1]),e.add(U)}let h=Te(5);for(let D=0;D<10;D++){let U=Eh(D+3,.6+h()*.8);U.position.set((h()-.5)*8,.5+U.position.y,-30+(h()-.5)*14),Math.abs(U.position.x)<1.6&&(U.position.x+=2.8*Math.sign(U.position.x||1)),e.add(U)}for(let D=0;D<6;D++){let U=wh(D+40);U.children.forEach(F=>{F.geometry?.type==="CylinderGeometry"&&(F.visible=!1)}),U.position.set(D%2?3.6:-3.6,.2,-24-D*2.3),U.scale.setScalar(1.6),e.add(U)}let u=new ps;u.group.position.copy(ne.trex),u.group.rotation.y=.3,u.setMode("pose"),e.add(u.group),this.refs.trex=u,this.addUpdater(D=>u.update(D));let d=fs("TYRANNOSAURUS REX",`"The Tyrant Lizard King." 12 m long, 8 tonnes, teeth like bananas.
Fun fact: despite its size, T. rex had only TWO fingers on each tiny hand.`,{bodyFont:"24px Georgia, serif"});this.add(d,-2.4,0,-20.6),this.addBoxCollider(-2.4,-20.6,.5,.4);let f=Th({title:"DINO-LOCK 3000",color:"#6dff9e"});this.add(f.group,ne.dinoPanel.x,0,ne.dinoPanel.z),this.addBoxCollider(ne.dinoPanel.x,ne.dinoPanel.z,.8,.6),this.addUpdater(D=>f.update(D)),this.refs.console1=f,this.refs.panel1It=this.addInteractable({id:"panel1",pos:new R(ne.dinoPanel.x,1.2,ne.dinoPanel.z),prompt:"Inspect cipher panel",enabled:!1}),this.add(ds(2.2,.9,new ht({color:5984841,roughness:.9})),-10,0,-19);let p=jd();p.scale.setScalar(1.4),this.add(p,-10,.9,-19,.5),this.addBoxCollider(-10,-19,2.5,2.5),this.add(fs("TRICERATOPS","Three horns, one frill, zero chill. Ate plants. Probably fine."),-10,0,-16.6),this.add(ds(2.6,.7,new ht({color:5984841,roughness:.9})),10,0,-20);let y=new ps({eyeLight:!1});y.group.scale.setScalar(.3),y.anim.headYaw=y.anim.targetYaw=-.5,y.applyPose(0),this.add(y.group,10,.7,-20,-.8),this.addBoxCollider(10,-20,2.9,2.9),this.add(fs("VELOCIRAPTOR","Turkey-sized. Feathery. Smaller than the movies told you. Still bites."),10,0,-17.6),this.add(ds(1.1,1),10,0,-40);let g=Eh(77,.8);g.material=new ht({color:3814962,roughness:.6,metalness:.4,flatShading:!0}),this.add(g,10,1,-40),this.addBoxCollider(10,-40,1.3,1.3),this.add(fs("REAL METEORITE","Fell from space 66 million years ago. Please do not lick the meteorite."),10,0,-38.2),this.add(Ca(1.6,.8,.9,Qd()),-10,0,-40),this.addBoxCollider(-10,-40,1.7,1),this.add(fs("AMMONITES","Ancient squid in spiral shells. Basically sea cinnamon rolls."),-10,0,-38.3);let[m,x]=ve(1024,400),_=x.createLinearGradient(0,0,0,400);_.addColorStop(0,"#3a1f4d"),_.addColorStop(.6,"#d9663a"),_.addColorStop(1,"#f2b25a"),x.fillStyle=_,x.fillRect(0,0,1024,400),x.fillStyle="#2a1410",x.beginPath(),x.moveTo(560,300),x.lineTo(700,120),x.lineTo(740,120),x.lineTo(900,300),x.fill(),x.fillStyle="#ff7a2a",x.beginPath(),x.arc(720,110,30,0,7),x.fill(),x.fillStyle="#1a0f0a",x.fillRect(0,300,1024,100);for(let D=0;D<6;D++)x.beginPath(),x.moveTo(D*180,300),x.lineTo(D*180+40,200-D%2*40),x.lineTo(D*180+80,300),x.fill();x.fillStyle="#f3e6c4",x.font="bold 72px Georgia, serif",x.textAlign="center",x.fillText("THE AGE OF DINOSAURS",512,80),x.font="italic 30px Georgia, serif",x.fillText("252 \u2013 66 million years ago (and, apparently, tonight)",512,125);let v=new V(new Ht(22,8.6),new ht({map:Me(m),roughness:.8}));v.position.set(0,6,-45.78),e.add(v);let A=Pa();A.position.set(0,6.6,-10.25),A.rotation.y=0,e.add(A);let[E,T]=ve(128,128);T.fillStyle="rgba(30,20,12,0.85)",T.beginPath(),T.ellipse(64,84,22,28,0,0,7),T.fill();for(let[D,U]of[[-.45,52],[0,60],[.45,52]])T.save(),T.translate(64,70),T.rotate(D),T.beginPath(),T.ellipse(0,-U*.6,9,U*.45,0,0,7),T.fill(),T.restore();let P=new ce({map:Me(E),transparent:!0,depthWrite:!1,opacity:.85}),S=new dt,M=[];for(let D=0;D<6;D++)M.push([(D%2?.7:-.7)+Math.sin(D*.3)*.5,-21+D*2.3]);for(let D=0;D<12;D++)M.push([.8+D*1.25,-7.6+D*.65+(D%2?.45:-.45)]);let L=new Ht(1.1,1.1);M.forEach(([D,U],F)=>{let X=new V(L,P);X.rotation.x=-Math.PI/2,X.position.set(D,.02,U);let[G,nt]=M[F+1]?[D,U]:M[F-1],[q,ct]=M[F+1]||[D,U];X.rotation.z=Math.atan2(-(q-G),-(ct-nt)),S.add(X)}),S.visible=!1,e.add(S),this.refs.footprints=S}_roman(){let t=this.mats,e=this.scene;this.floor(12,40,-9,9,t.mosaic,0,4),this.ceiling(12,40,-9,9,9,t.darkCeil),this.wallX(-9,12,40,9,t.romanWall,[],3),this.wallX(9,12,40,9,t.romanWall,[],3),this.wallZ(40,-9,9,9,t.romanWall,[],3),this.wallZ(12,-9,9,9,t.romanWall,[{c:0,w:6,h:6.2}],3);let n=new ht({color:9190186,roughness:.7});for(let f of[-3.2,3.2])e.add(vt(24,.012,.3,n,26,0,f));for(let f of[16.5,22,27.5,33])for(let p of[-5.6,5.6])this.add(Sh(9,.48,ft.stoneWhite()),f,0,p),this.addBoxCollider(f,p,1.25,1.25);let s=[["JULIUS CAESAR",19.25,-8],["AUGUSTUS",24.75,-8],["NERO",30.25,-8],["MARCUS AURELIUS",19.25,8],["CALIGULA",24.75,8],["HADRIAN",30.25,8]];for(let[f,p,y]of s)this.add(Aa(f),p,0,y,y>0?Math.PI:0),this.addBoxCollider(p,y,.85,.85);this.add(Jd(),25,0,0,Math.PI/2+.2),this.addCollider(23.2,27.4,-1.1,1.1);for(let[f,p]of[[22,-2.6],[28,-2.6],[22,2.6],[28,2.6]])this.add(lr(),f,0,p);for(let[f,p]of[[22,-2.6],[22,2.6]]){let y=Xr(6);y.position.set(f,0,p),e.add(y)}this.add(fs("ROMAN CHARIOT","Top speed: 40 km/h. Seatbelts: none. Cupholders: also none."),20.8,0,0,-Math.PI/2);for(let[f,p]of[[36.5,-7.8],[37.4,-7.6],[36.5,7.8],[37.4,7.6],[14,-8],[14,8]])this.add(Kd(),f,0,p,f*3),this.addBoxCollider(f,p,.5,.5);let[r,o]=ve(1024,512);o.fillStyle="#cfc6b4",o.fillRect(0,0,1024,512);for(let f=0;f<3e3;f++)o.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,o.fillRect(Math.random()*1024,Math.random()*512,3,3);o.strokeStyle="#8f8676",o.lineWidth=14,o.strokeRect(20,20,984,472),o.fillStyle="#3d3528",o.textAlign="center",o.font="bold 86px Georgia, serif",o.fillText("MVSEVM",512,150),o.fillText("CONDITVM ANNO",512,260),o.font="bold 120px Georgia, serif",o.fillText("MCMLXXIV",512,410);let a=new V(new Ht(5.4,2.7),new ht({map:Me(r),roughness:.9}));a.position.set(39.77,3.6,0),a.rotation.y=-Math.PI/2,e.add(a),e.add(vt(.3,.3,5.8,ft.stoneWhite(),39.7,2.1,0));for(let f of[-4.2,4.2]){let p=new V(new Ht(1.8,4.5),new ht({map:Ae(`S
P
Q
R`,{w:200,h:500,bg:"#8a1022",fg:"#e9c46a",font:"bold 90px Georgia, serif",border:"#e9c46a"}),side:Be}));p.position.set(39.7,4.6,f),p.rotation.y=-Math.PI/2,e.add(p)}let l=cr("ROMAN NUMERALS 101",`I = 1    V = 5    X = 10    L = 50
C = 100    D = 500    M = 1000
Add them up, biggest first: XVI = 10+5+1 = 16.
Small BEFORE big means subtract: IV = 4, IX = 9, XC = 90, CM = 900.`,3.2,2,{bodyFont:"23px Georgia, serif",bg:"#2a1c14",accent:"#e9c46a"});l.position.set(15.6,2.2,-8.78),e.add(l);let c=cr("GLADIATOR SHIELD",`Property of Maximus. Do not borrow.
Won XXIII fights. Lost I (to a goose).`,2.6,1.2,{bg:"#2a1c14",accent:"#e9c46a"});c.position.set(15.6,2.2,8.78),c.rotation.y=Math.PI,e.add(c);let h=new V(new re(.7,.7,.08,24),new ht({color:9048098,roughness:.6}));h.rotation.x=Math.PI/2,h.position.set(19,2.6,8.75),e.add(h);let u=Th({title:"AQVILA LOCK",color:"#ffcc4d"});this.add(u.group,ne.romanPanel.x,0,ne.romanPanel.z,-Math.PI/2),this.addBoxCollider(ne.romanPanel.x,ne.romanPanel.z,.8,.6,Math.PI/2),this.addUpdater(f=>u.update(f)),this.refs.console2=u,this.refs.panel2It=this.addInteractable({id:"panel2",pos:new R(ne.romanPanel.x,1.2,ne.romanPanel.z),prompt:"Inspect numeral lock",enabled:!1});let d=Pa();d.position.set(12.25,6.6,0),d.rotation.y=Math.PI/2,e.add(d)}_collectibles(){this.night&&(this.addCollectible("lobby_desk",1.6,1.45,4.2,0),this.addCollectible("office_locker",-14.5,.6,3.6,3),this.addCollectible("dino_tri",-12.6,.8,-21.5,1),this.addCollectible("dino_meteor",12.3,.6,-42.8,4),this.addCollectible("dino_mural",-13,.6,-44.5,2),this.addCollectible("roman_caligula",24.75,2,8,0),this.addCollectible("roman_chariot",25,1.55,0,3),this.addCollectible("roman_amphora",38.3,.6,-6.6,1))}_visitors(){let t=Te(99);this.visitors=[];let e=[{minX:-9,maxX:9,minZ:-8,maxZ:2},{minX:-12,maxX:12,minZ:-44,maxZ:-12,avoid:{minX:-5.5,maxX:5.5,minZ:-38,maxZ:-21}},{minX:14,maxX:38,minZ:-7,maxZ:7,avoid:{minX:22,maxX:28.5,minZ:-2,maxZ:2}}],n=s=>{for(let r=0;r<20;r++){let o=s.minX+t()*(s.maxX-s.minX),a=s.minZ+t()*(s.maxZ-s.minZ);if(!(s.avoid&&o>s.avoid.minX&&o<s.avoid.maxX&&a>s.avoid.minZ&&a<s.avoid.maxZ))return new R(o,0,a)}return new R((s.minX+s.maxX)/2,0,s.maxZ)};for(let s=0;s<14;s++){let r=e[s%3===0?0:s%3===1?1:2],o=cf(t),a=n(r);o.group.position.copy(a),this.scene.add(o.group),this.visitors.push({p:o,area:r,target:n(r),wait:t()*4})}this.addUpdater(s=>{for(let r of this.visitors){let o=r.p.group;if(r.wait>0)r.wait-=s,r.p.setMode("idle");else{let l=r.target.clone().sub(o.position),c=l.length();if(c<.3)r.wait=2+t()*5,r.target=n(r.area);else{l.normalize(),o.position.addScaledVector(l,Math.min(c,1.1*s));let u=Math.atan2(l.x,l.z)-o.rotation.y;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;o.rotation.y+=u*Math.min(1,s*6),r.p.setMode("walk",1.1)}}let a=this.game.player;if(a){let l=a.pos.x-o.position.x,c=a.pos.z-o.position.z,h=Math.hypot(l,c);h<.6&&h>.001&&(a.pos.x+=l/h*(.6-h),a.pos.z+=c/h*(.6-h))}r.p.update(s)}})}makeAaron(){return new hr({shirt:9417696,pants:1778752,cap:!0,badge:!0,nameTag:!0,hair:1118481,skin:13012580})}};var pn=[-2.2,0,2.2],Mn=24,mf=8,ln=880;function kh(i=1.15){let t=[[-.45,0],[-.2,0],[-.07,.78],[.07,.78],[.2,0],[.45,0],[.26,.95],[.3,1.38],[.66,.98],[.79,1.1],[.38,1.66],[.12,1.72]];for(let e=1;e<12;e++){let n=-.55+e/12*(Math.PI+1.1);t.push([Math.cos(n)*.23,1.92+Math.sin(n)*.23])}return t.push([-.12,1.72],[-.38,1.66],[-.79,1.1],[-.66,.98],[-.3,1.38],[-.26,.95]),t.map(([e,n])=>[e*i,n*i])}var ka=class extends Vi{constructor(t){super(t);let e=this.scene;e.background=new Ut(328714),e.fog=new Zs(328714,25,120),this.ownsCamera=!0,this.surface="carpet",this.rng=Te(1974),e.add(new ki(8949952,2759188,1.3)),e.add(new Oi(16777215,.25)),this.headLight=new Oe(16767136,60,40,1.6),e.add(this.headLight),this.alarm=new Oe(16719904,0,30,1.5),e.add(this.alarm),this.mats={floor:new ht({map:be("marble"),roughness:.3}),carpet:new ht({map:be("carpet"),roughness:.9}),wall:new ht({map:be("plaster"),color:7035514,roughness:.85}),ceil:new ht({color:1578012,roughness:1}),lamp:new ce({color:16773320}),frame:new ht({color:13214282,metalness:.8,roughness:.35})},this.paintMats=[];for(let f=0;f<8;f++)this.paintMats.push(new ht({map:kd(500+f,f%3===0?"portrait":"landscape"),roughness:.7}));this.chunks=[];for(let f=0;f<mf;f++){let p=this._chunk(f);p.position.z=-f*Mn,e.add(p),this.chunks.push(p)}this.guard=Ua(),e.add(this.guard.group),this.guard.group.rotation.y=Math.PI,this.guard.setMode("run",8);let n=Gi();n.rotation.x=Math.PI/2,n.scale.setScalar(1.3),this.guard.attachToHand(n,1);let[s,r]=[document.createElement("canvas"),null];s.width=s.height=128;let o=s.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(0,0,0,0.85)"),a.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=a,o.fillRect(0,0,128,128),this.blob=new V(new Ht(1,1),new ce({map:new gi(s),transparent:!0,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.03,e.add(this.blob),this.trex=new ps,this.trex.setAlive(!0),this.trex.group.rotation.y=Math.PI,e.add(this.trex.group);let l=Uh(Da());for(let f of l.eyes)f.visible=!0;this.lunge=new dt;let c=new dt;c.rotation.y=Math.PI/2+.35,c.add(l.head),this.lunge.add(c),this.lungeJaw=l.jaw,this.lungeHead=l.head,this.lunge.visible=!1,this.lungeT=-1,this.trexBehind=6,this.hideTrex=!1,this._buildWall();let[h]=[document.createElement("canvas")];h.width=h.height=32;let u=h.getContext("2d"),d=u.createRadialGradient(16,16,0,16,16,16);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(.3,"rgba(255,150,210,0.9)"),d.addColorStop(1,"rgba(255,100,180,0)"),u.fillStyle=d,u.fillRect(0,0,32,32),this.sparkTex=new gi(h),this.sparks=[];for(let f=0;f<48;f++){let p=new Js(new rs({map:this.sparkTex,transparent:!0,depthWrite:!1,blending:En}));p.visible=!1,p.scale.setScalar(.35),this.scene.add(p),this.sparks.push({s:p,v:new R,life:0})}this.sparkIdx=0,this.stepT=0,this.wasAir=!1,this.roll=0,this.obstacles=[],this.donuts=[],this.plan=this._plan(),this.planIdx=0,this.debris=[],this.st={phase:"idle",z:0,x:0,lane:1,prevLane:1,y:0,vy:0,slide:0,speed:0,danger:.25,invuln:0,slow:0,stompT:0,t:0,donutCount:0,arrowShown:!1,alarmT:0},this.camPos=new R,this.camLook=new R}_chunk(t){let e=new dt,n=this.mats,s=new V(Ia(10,Mn,4),n.floor);s.rotation.x=-Math.PI/2,s.position.z=-Mn/2,s.receiveShadow=!0,e.add(s);let r=new V(new Ht(7.2,Mn),n.carpet);r.material.map.repeat.set(1,Mn/7.2),r.rotation.x=-Math.PI/2,r.position.set(0,.012,-Mn/2),e.add(r);for(let a of[-1,1]){let l=new V(Jn(.4,7,Mn,3),n.wall);l.position.set(a*5.2,3.5,-Mn/2),e.add(l);for(let c=0;c<3;c++){let h=-4-c*8,u=vt(.5,7,.7,ft.stoneWhite(),a*4.9,0,h);if(e.add(u),c<2){let d=this.paintMats[(t*2+c+(a>0?3:0))%this.paintMats.length],f=d.map.image.height>200,p=f?1.6:2.6,y=f?2:1.6,g=new V(new Ht(p,y),d);g.position.set(a*4.98,3,h-4),g.rotation.y=-a*Math.PI/2,e.add(g);let m=vt(.08,y+.2,p+.2,n.frame,a*5,3-(y+.2)/2,h-4);e.add(m);let x=new V(new te(.12,8,6),n.lamp);x.position.set(a*4.85,4.6,h-4),e.add(x)}}}let o=new V(new Ht(10.4,Mn),n.ceil);o.rotation.x=Math.PI/2,o.position.set(0,7,-Mn/2),e.add(o);for(let a=0;a<2;a++){let l=vt(2.4,.08,.5,n.lamp,0,6.9,-6-a*12);e.add(l)}return xi(e),e}_buildWall(){let t=new Zn;t.moveTo(-5.4,0),t.lineTo(5.4,0),t.lineTo(5.4,7),t.lineTo(-5.4,7),t.lineTo(-5.4,0);let e=new yi;kh(1.18).forEach(([c,h],u)=>u===0?e.moveTo(pn[2]+c,h+.001):e.lineTo(pn[2]+c,h+.001)),e.closePath(),t.holes.push(e);let s=new Qs(t,{depth:.6,bevelEnabled:!1}),r=new V(s,new ht({map:be("plaster"),color:9076594,roughness:.9}));r.material.map.repeat.set(.25,.25),r.position.z=-ln-.6,r.castShadow=r.receiveShadow=!0,this.scene.add(r),this.wall=r;let o=new V(new Ht(4,.9),new ht({map:Ae("ARCHIVES \u2014 STAFF ONLY",{w:1024,h:200,bg:"#a01818",fg:"#fff",font:"bold 84px Arial Black, Arial"})}));o.position.set(-1,4.8,-ln+.02),this.scene.add(o);let a=new V(new Ht(14,8),new ce({color:0}));a.position.set(0,3.5,-ln-5),this.scene.add(a);let l=new V(new Ht(6,2),new ce({map:Ae("GO RIGHT \u279C",{w:1024,h:340,bg:"#ffcc4d",fg:"#111",font:"bold 170px Arial Black, Arial"}),toneMapped:!1,side:Be}));l.position.set(0,5.5,-ln+30),this.scene.add(l),this.arrow3d=l}_plan(){let t=this.rng,e=[],n=-70;for(;n>-(ln-90);){let s=-n/ln,r=t(),o={z:n,items:[]},a=Math.floor(t()*3);if(r<.3){for(let l=0;l<3;l++)l!==a&&o.items.push({type:t()<.5?"case":t()<.5?"statue":"cart",lane:l});o.donutLane=a}else if(r<.48){for(let l=0;l<3;l++)o.items.push({type:"rope",lane:l});o.donutArc=Math.floor(t()*3)}else if(r<.64){for(let l=0;l<3;l++)o.items.push({type:"banner",lane:l});o.donutLane=a}else if(r<.8){o.items.push({type:"case",lane:a});let l=(a+1+Math.floor(t()*2))%3;o.items.push({type:t()<.5?"bench":"column",lane:l}),o.donutArc=l}else{let l=["rope","banner","case"],c=Math.floor(t()*3);for(let h=0;h<3;h++)o.items.push({type:l[(h+c)%3],lane:h});o.donutLane=(2-c+3)%3}e.push(o),n-=Ve(30,19,s)+t()*6}return e}_spawnRow(t){for(let e of t.items){let n=this._makeObstacle(e.type);n.mesh.position.set(pn[e.lane],0,t.z),this.scene.add(n.mesh),this.obstacles.push({...n,lane:e.lane,z:t.z,type:e.type,hit:!1})}if(t.donutLane!=null)for(let e=0;e<5;e++)this._spawnDonut(pn[t.donutLane],.9,t.z+14-e*2.4);if(t.donutArc!=null)for(let e=0;e<5;e++){let n=e/4;this._spawnDonut(pn[t.donutArc],.9+Math.sin(n*Math.PI)*1.3,t.z+4-n*8)}}_burst(t){for(let e=0;e<8;e++){let n=this.sparks[this.sparkIdx++%this.sparks.length];n.s.position.copy(t),n.s.visible=!0,n.v.set((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*3-this.st.speed*.6),n.life=.5+Math.random()*.3}}_spawnDonut(t,e,n){let s=Kn({frosting:Math.floor(Math.random()*5),glow:!0,scale:1.6});s.rotation.x=Math.PI/2,s.position.set(t,e,n),this.scene.add(s),this.donuts.push({obj:s,taken:!1})}_makeObstacle(t){let e=new dt,n=0,s=2,r=1,o=1.7;if(t==="case"){let a=new V(new te(.28,14,10),new ht({color:14274472,roughness:.6}));a.scale.y=1.3,a.position.y=.36;let l=new dt;l.add(a);let c=Ca(1.6,1.1,1,l);e.add(c),s=2.1,r=1}else if(t==="statue")e.add(Aa(null)),s=1.9,r=.9,o=1;else if(t==="cart"){e.add(vt(1.4,1.1,.9,ee("cart",{color:15909166,roughness:.5}),0,.15,0));let a=vt(.06,1.6,.06,ft.wood(),.4,.2,.2);a.rotation.z=.2,e.add(a),e.add(new V(new xn(.12,.03,6,12),ft.black()).translateY(.12).translateX(-.5));let l=new V(new Ht(.9,.5),new ht({map:Ae("WET FLOOR",{w:256,h:140,bg:"#ffd400",fg:"#111",font:"bold 44px Arial Black, Arial"})}));l.position.set(0,.8,.46),e.add(l),s=1.4,r=.9,o=1.5}else if(t==="rope"){let a=lr(),l=lr();a.position.x=-.95,l.position.x=.95,e.add(a,l);let c=Xr(1.9);c.position.x=-.95,e.add(c),s=1,r=.3,o=2}else if(t==="bench"){let a=Ra(1.9);e.add(a),s=.55,r=.5,o=1.9}else if(t==="column"){let a=new V(new re(.38,.38,2,16),ft.stoneWhite());a.rotation.z=Math.PI/2,a.position.y=.38,a.castShadow=!0,e.add(a),s=.76,r=.76,o=2}else if(t==="banner"){let a=new V(new Ht(2.1,1.7),new ht({map:Ae(`EXHIBIT
CLOSED`,{w:300,h:240,bg:"#14243d",fg:"#ffcc4d",font:"bold 62px Arial Black, Arial",border:"#ffcc4d"}),side:Be}));a.position.y=2.25,e.add(a);for(let l of[-.9,.9])e.add(vt(.03,3.6,.03,ft.metal(),l,3.1,0));n=1.3,s=3.6,r=.3,o=2.1}return Re(e,!0,!1),xi(e),{mesh:e,y0:n,y1:s,d:r,w:o}}start(){let t=this.st;return t.phase="intro",t.t=0,this.game.camera.add(this.lunge),this.lunge.position.set(0,2.4,-2.8),this.scene.add(this.game.camera),new Promise(e=>this.resolve=e)}beginRun(){this.st.phase="run",this.st.speed=13}update(t){super.update(t);let e=this.game,n=this.st,s=e.input;n.t+=t;let r=e.camera;for(;this.planIdx<this.plan.length&&this.plan[this.planIdx].z>n.z-130;)this._spawnRow(this.plan[this.planIdx]),this.planIdx++;for(let c of this.chunks)c.position.z-Mn>n.z+30&&(c.position.z-=mf*Mn),c.visible=c.position.z>-ln-Mn;if(n.phase==="intro")n.speed=9,n.z-=n.speed*t,this.trex.group.visible=!this.hideTrex,this.trex.group.position.set(.5,0,n.z+this.trexBehind),this.trex.setMode("run",9);else if(n.phase==="run"){let c=-n.z/ln,h=Ve(13.5,20,Ze(c,0,1))*(n.slow>0?.6:1);n.speed=sn(n.speed,h,2,t),n.slow-=t,n.z-=n.speed*t;let u=s.wasPressed("KeyA","ArrowLeft","SwipeLeft"),d=s.wasPressed("KeyD","ArrowRight","SwipeRight"),f=s.wasPressed("KeyW","ArrowUp","Space","SwipeUp"),p=s.wasPressed("KeyS","ArrowDown","SwipeDown");u&&n.lane>0&&(n.prevLane=n.lane,n.lane--,e.audio.play("whoosh",{vol:.4})),d&&n.lane<2&&(n.prevLane=n.lane,n.lane++,e.audio.play("whoosh",{vol:.4})),f&&n.y<=.001&&(n.vy=10.5,n.slide=0,e.audio.play("whoosh",{vol:.5})),p&&(n.y>.05&&(n.vy=-18),n.slide=.75),n.danger=Ze(n.danger-t*.045,0,1),n.invuln-=t,n.stompT-=t,n.stompT<=0&&(n.stompT=Ve(.62,.36,n.danger),e.audio.play("stomp",{vol:.25+n.danger*.6}),e.shake(.05+n.danger*.18,.25)),Math.random()<t*.08&&e.audio.play("growl",{vol:.5+n.danger}),this._collisions(),!n.arrowShown&&n.z<-(ln-95)&&(n.arrowShown=!0,e.hud.showArrow(!0),e.audio.play("alarm",{n:2})),n.z<-ln+1.2&&(n.lane===2&&Math.abs(n.x-pn[2])<.6?this._escape():this._caught(!0)),e.hud.setChase(Ze(-n.z/ln,0,1),n.danger,n.donutCount)}else if(n.phase==="escape"){let c=sn(n.z,-ln-3.4,2.6,t);n.speed=(n.z-c)/Math.max(t,1e-4),n.z=c}n.vy-=32*t,n.y=Math.max(0,n.y+n.vy*t),n.y===0&&(n.vy=Math.max(0,n.vy));let o=n.y>.02;this.wasAir&&!o&&n.phase==="run"&&(e.audio.play("thud",{vol:.35}),e.shake(.06,.15)),this.wasAir=o,n.phase==="run"&&!o&&(this.stepT+=t*n.speed,this.stepT>3.4&&(this.stepT=0,e.audio.play("step",{surface:"carpet",vol:.8})));for(let c of this.sparks)c.life<=0||(c.life-=t,c.v.y-=9*t,c.s.position.addScaledVector(c.v,t),c.s.material.opacity=Math.min(1,c.life*2.5),c.life<=0&&(c.s.visible=!1));if(n.phase==="run"){let c=(n.speed-13)/7;e.hud.setSpeedLines(.15+c*.55),r.fov=sn(r.fov,70+c*9,3,t),r.updateProjectionMatrix()}else e.hud.setSpeedLines(0);this.roll=sn(this.roll,(pn[n.lane]-n.x)*-.035,8,t),n.slide-=t,n.x=sn(n.x,pn[n.lane],14,t);let a=this.guard;a.group.position.set(n.x,n.y,n.z),n.phase==="escape"&&n.speed<1?a.setMode("idle"):n.y>.05?a.setMode("jump"):n.slide>0?a.setMode("slide"):a.setMode("run",n.speed),a.group.visible=n.invuln<=0||Math.floor(n.t*12)%2===0,a.update(t);let l=1.5+n.danger*5;this.blob.scale.set(l,l*1.6,1),this.blob.position.set(n.x*.5,.03,n.z+3-n.danger*2.5),this.blob.material.opacity=n.phase==="run"?.25+n.danger*.55:0;for(let c of this.donuts)c.taken||(c.obj.rotation.z+=t*3,Math.abs(c.obj.position.z-n.z)<.9&&Math.abs(c.obj.position.x-n.x)<.9&&Math.abs(c.obj.position.y-(n.y+.9))<1.1&&(c.taken=!0,this.scene.remove(c.obj),n.donutCount++,e.meter.add(4),this._burst(c.obj.position),e.audio.play("coin",{pitch:n.donutCount%5*2})),c.obj.position.z>n.z+12&&(c.taken=!0,this.scene.remove(c.obj)));this.obstacles=this.obstacles.filter(c=>c.z>n.z+15?(this.scene.remove(c.mesh),!1):!0);for(let c of this.debris)c.v.y-=20*t,c.m.position.addScaledVector(c.v,t),c.m.rotation.x+=t*6,c.m.position.y<0&&(c.m.position.y=0,c.v.multiplyScalar(.4));if(this.headLight.position.set(n.x*.4,5.5,n.z-7),n.alarmT+=t,this.alarm.position.set(0,6,n.z+6),this.alarm.intensity=n.phase==="run"?Math.sin(n.alarmT*8)>0?25:4:0,this.camMode==="front"?(this.camPos.set(2.3,1.7,n.z-6.8),this.camLook.set(0,3.1,n.z+4)):this.camMode==="chase"&&(this.camPos.set(n.x*.55,3.3+n.y*.3,n.z+6.4),this.camLook.set(n.x*.8,1.2+n.y*.5,n.z-7)),this.camMode!=="free"&&(this.camBlend!=null?(r.position.lerpVectors(this.camFrom,this.camPos,this.camBlend),this._look.lerpVectors(this.lookFrom,this.camLook,this.camBlend),r.lookAt(this._look)):(r.position.copy(this.camPos),r.lookAt(this.camLook),this.camMode==="chase"&&r.rotateZ(this.roll))),n.phase==="run"&&(this.trex.group.visible=!1),this.trex.update(t),this.lungeT>=0){this.lungeT+=t;let c=this.lungeT,h=this.lungeDur,u=c<.25?c/.25:c<h-.3?1:Math.max(0,(h-c)/.3);this.lunge.visible=!0,this.lunge.position.set(Ve(-3.4,this.lungeFull?-.9:-1.1,u),Ve(2.2,this.lungeFull?.2:.5,u),-2.5),this.lunge.rotation.z=Ve(.25,-.3,u),this.lungeJaw.rotation.x=c<.3?.9:c<.42?Ve(.9,0,(c-.3)/.12):.1,c>h&&(this.lungeT=-1,this.lunge.visible=!1)}}_collisions(){let t=this.st,e=this.game;if(t.invuln>0)return;let n=t.slide>0&&t.y<.1?.8:1.7;for(let s of this.obstacles){if(s.hit||Math.abs(s.z-t.z)>s.d/2+.35||Math.abs(s.mesh.position.x-t.x)>s.w/2+.25)continue;let r=t.y;if(t.y+n<=s.y0||r>=s.y1)continue;s.hit=!0,Math.abs(t.x-pn[t.lane])>.5&&t.prevLane!==t.lane&&s.lane===t.lane?(t.lane=t.prevLane,this._stumble(.18,!1,s)):this._stumble(.34,!0,s);return}}_stumble(t,e,n){let s=this.st,r=this.game;if(s.danger+=t,s.invuln=1.2,r.audio.play("bonk"),r.shake(.35,.4),r.hud.flash("rgba(255,40,40,0.35)"),e){s.slow=1,r.audio.play("crash",{vol:.5}),n.mesh.visible=!1;for(let o=0;o<10;o++){let a=new V(new ae(.2,.2,.2),ft.darkWood());a.position.set(n.mesh.position.x,.8,n.z),this.scene.add(a),this.debris.push({m:a,v:new R((Math.random()-.5)*8,4+Math.random()*6,-Math.random()*10)})}}if(s.danger>=1){this._caught(!1);return}this.lungeT=0,this.lungeDur=.75,this.lungeFull=!1,r.audio.play("roar",{short:!0,vol:.8})}_caught(t){let e=this.st,n=this.game;e.phase==="run"&&(e.phase="caught",e.speed=0,n.hud.showArrow(!1),t&&(n.audio.play("bonk"),n.audio.play("crash",{vol:.6})),n.audio.play("roar"),this.lungeT=0,this.lungeDur=1.4,this.lungeFull=!0,n.shake(.6,1),setTimeout(()=>this.resolve?.("caught"),1300))}_escape(){let t=this.st;t.phase="escape",this.game.hud.showArrow(!1),this.resolve?.("escaped")}setCam(t){this.camMode=t,this.camBlend=null}blendCam(t){this.camFrom=this.game.camera.position.clone();let e=new R;this.game.camera.getWorldDirection(e),this.lookFrom=this.game.camera.position.clone().addScaledVector(e,10),this._look=new R,this.camMode=t,this.camBlend=0}dispose(){this.game.camera.remove(this.lunge),super.dispose()}};var kt=3.2,Ne=7,Qn=5,ur=3,bn=3,Ie=.3,Oa=class extends Vi{constructor(t){super(t);let e=this.scene;this.surface="concrete",e.background=new Ut(65794),e.fog=new $s(131587,.07);let n=this.rng=Te(4242);e.add(new Oi(8425648,.22)),e.add(new ki(4214896,1051656,.3)),this.mats={wall:new ht({map:be("shelves"),roughness:.85}),floor:new ht({map:be("concrete"),roughness:.9}),ceil:new ht({map:be("concrete"),color:5592405,roughness:1}),pipe:new ht({color:5922920,roughness:.5,metalness:.6}),bulb:new ce({color:16764800})};let s=Qn*ur;this.R=s;let r=[],o=[];for(let v=0;v<s;v++)r.push(new Array(Ne).fill(!0)),o.push(new Array(Ne).fill(!0));this.entries=[{c:3,r:0}],this.exits=[];for(let v=0;v<ur;v++){let A=v*Qn,E=A+Qn-1,T=this.entries[v],P=new Set([`${T.c},${T.r}`]),S=[T];for(;S.length;){let D=S[S.length-1],U=[[1,0],[-1,0],[0,1],[0,-1]].map(([X,G])=>({c:D.c+X,r:D.r+G,dc:X,dr:G})).filter(X=>X.c>=0&&X.c<Ne&&X.r>=A&&X.r<=E&&!P.has(`${X.c},${X.r}`));if(!U.length){S.pop();continue}let F=U[Math.floor(n()*U.length)];F.dc===1&&(o[D.r][D.c]=!1),F.dc===-1&&(o[D.r][F.c]=!1),F.dr===1&&(r[D.r][D.c]=!1),F.dr===-1&&(r[F.r][F.c]=!1),P.add(`${F.c},${F.r}`),S.push({c:F.c,r:F.r})}for(let D=0;D<4;D++){let U=A+Math.floor(n()*(Qn-1)),F=Math.floor(n()*(Ne-1));n()<.5?o[U][F]=!1:r[U][F]=!1}let M=this._bfs(T,r,o,A,E),L=null;for(let D=0;D<Ne;D++){let U=M[`${D},${E}`];(L==null||U>L.d)&&(L={c:D,r:E,d:U})}this.exits.push(L),this.entries.push({c:L.c,r:E+1}),this[`dead${v}`]=Object.entries(M).map(([D,U])=>{let[F,X]=D.split(",").map(Number);return{c:F,r:X,d:U}}).filter(D=>this._openings(D.c,D.r,r,o,A,E)===1&&!(D.c===L.c&&D.r===L.r)&&!(D.c===T.c&&D.r===T.r)).sort((D,U)=>U.d-D.d)}this.north=r,this.east=o;let a=-kt/2,l=(Ne-1)*kt+kt/2,c=-(s-1)*kt-kt/2-2*kt,h=kt/2;this.floor(a-1,l+1,c-1,h+4,this.mats.floor,0,3),this.ceiling(a-1,l+1,c-1,h+4,bn,this.mats.ceil,3);let u=[],d=(v,A)=>u.push({x:A*kt,z:-v*kt-kt/2,rot:0}),f=(v,A)=>u.push({x:A*kt+kt/2,z:-v*kt,rot:Math.PI/2});this.gates=[];for(let v=0;v<s;v++){for(let A=0;A<Ne;A++){let E=v%Qn===Qn-1;if(r[v][A]){let T=this.exits[Math.floor(v/Qn)];E&&T.c===A&&T.r===v?this._gateWall(v,A,Math.floor(v/Qn)):d(v,A)}A<Ne-1&&o[v][A]&&f(v,A)}f(v,-1),f(v,Ne-1)}for(let v=0;v<Ne;v++)v!==this.entries[0].c&&d(-1,v);let p=Jn(kt+Ie,bn,Ie,1.6),y=new Yo(p,this.mats.wall,u.length),g=new jt,m=new Tn,x=new R(1,1,1);u.forEach((v,A)=>{m.setFromAxisAngle(new R(0,1,0),v.rot),g.compose(new R(v.x,bn/2,v.z),m,x),y.setMatrixAt(A,g);let E=(kt+Ie)/2,T=Ie/2;v.rot===0?this.addCollider(v.x-E,v.x+E,v.z-T,v.z+T):this.addCollider(v.x-T,v.x+T,v.z-E,v.z+E)}),y.receiveShadow=!0,y.castShadow=!0,e.add(y),this.wallSegs=u,this._entranceWall(),this._finalRoom(),this._stations(),this._decorate();let _=new Set([this.lastDonut,...this.gates.map(v=>v.mesh),...this.collectibles.map(v=>v.obj)]);xi(this.scene,v=>_.has(v))}_bfs(t,e,n,s,r){let o={[`${t.c},${t.r}`]:0},a=[t];for(;a.length;){let l=a.shift(),c=o[`${l.c},${l.r}`],h=[];l.c<Ne-1&&!n[l.r][l.c]&&h.push([l.c+1,l.r]),l.c>0&&!n[l.r][l.c-1]&&h.push([l.c-1,l.r]),l.r<r&&!e[l.r][l.c]&&h.push([l.c,l.r+1]),l.r>s&&!e[l.r-1][l.c]&&h.push([l.c,l.r-1]);for(let[u,d]of h){let f=`${u},${d}`;o[f]==null&&(o[f]=c+1,a.push({c:u,r:d}))}}return o}_openings(t,e,n,s,r,o){let a=0;return t<Ne-1&&!s[e][t]&&a++,t>0&&!s[e][t-1]&&a++,e<o&&!n[e][t]&&a++,e>r&&!n[e-1][t]&&a++,a}cellPos(t,e){return new R(t*kt,0,-e*kt)}_gateWall(t,e,n){let s=this.scene,r=e*kt,o=-t*kt-kt/2,a=1.5,l=(kt+Ie-a)/2;for(let p of[-1,1]){let y=new V(Jn(l,bn,Ie,1.6),this.mats.wall);y.position.set(r+p*(a/2+l/2),bn/2,o),s.add(y),this.addCollider(r+p*(a/2+l/2)-l/2,r+p*(a/2+l/2)+l/2,o-Ie/2,o+Ie/2)}let c=vt(a,bn-2.3,Ie,ft.metal(),r,2.3,o);s.add(c);let h=new dt,u=new re(.035,.035,2.3,6);for(let p=0;p<8;p++){let y=new V(u,ft.metal());y.position.set(-a/2+.1+p*((a-.2)/7),1.15,0),y.castShadow=!0,h.add(y)}for(let p of[.3,1.2,2.1])h.add(vt(a,.06,.06,ft.metal(),0,p,0));h.position.set(r,0,o),s.add(h);let d=this.addCollider(r-a/2,r+a/2,o-.2,o+.2),f=new V(new Ht(a,.5),new ce({map:Ae("",{w:128,h:32,bg:"#ffcc00"}),color:16763904}));f.rotation.x=-Math.PI/2,f.position.set(r,.01,o+.5),s.add(f),this.gates[n]={mesh:h,collider:d,open:!1,x:r,z:o}}openGate(t,e=!1){let n=this.gates[t];return!n||n.open?Promise.resolve():(n.open=!0,n.collider.enabled=!1,e?(n.mesh.position.y=2.25,Promise.resolve()):(this.game.audio.play("gate"),this.game.tween(1.6,s=>{n.mesh.position.y=2.25*s})))}_entranceWall(){let t=this.scene,n=this.entries[0].c*kt,s=kt/2,r=new Zn,o=(kt+Ie)/2;r.moveTo(-o,0),r.lineTo(o,0),r.lineTo(o,bn),r.lineTo(-o,bn),r.lineTo(-o,0);let a=new yi;kh(1.18).forEach(([f,p],y)=>y===0?a.moveTo(f,p+.001):a.lineTo(f,p+.001)),r.holes.push(a);let l=new Qs(r,{depth:Ie,bevelEnabled:!1}),c=new V(l,new ht({map:be("plaster"),color:9076594,roughness:.9}));c.position.set(n,0,s-Ie/2),t.add(c),this.addCollider(n-o,n+o,s-Ie/2,s+Ie/2);let h=new Oe(16723984,4,6,2);h.position.set(n,1.4,s+1.2),t.add(h),this.entranceLight=h;let u=new V(new Ht(4,3),new ce({color:1705219}));u.position.set(n,1.5,s+2.5),u.rotation.y=Math.PI,t.add(u);let d=new V(new te(.12,14,10),new ht({color:16723984,emissive:16722432,emissiveIntensity:6}));d.position.set(n,1.9,s+.5),d.visible=!1,t.add(d),this.holeEye=d}_finalRoom(){let t=this.scene,e=this.exits[ur-1],n=Math.max(0,Math.min(Ne-3,e.c-1)),s=-(this.R-1)*kt-kt/2,r=n*kt-kt/2,o=(n+3)*kt-kt/2,a=s,l=s-2*kt,c=(_,v,A,E)=>{let T=Math.hypot(A-_,E-v),P=new V(Jn(T+Ie,bn,Ie,1.6),this.mats.wall);P.position.set((_+A)/2,bn/2,(v+E)/2),_===A&&(P.rotation.y=Math.PI/2),t.add(P),this.addCollider(Math.min(_,A)-Ie/2,Math.max(_,A)+Ie/2,Math.min(v,E)-Ie/2,Math.max(v,E)+Ie/2)};c(r,l,o,l),c(r,a,r,l),c(o,a,o,l);let h=(r+o)/2,u=(a+l)/2;this.finalRoom={x0:r,x1:o,z0:a,z1:l,cx:h,cz:u};let d=new Oe(16756848,8,12,2);d.position.set(h,2.6,u),t.add(d);let f=new V(new te(.1,10,8),this.mats.bulb);f.position.set(h,2.7,u),t.add(f);let p=new V(new Ht(2.4,.6),new ht({map:Ae("BREAK ROOM",{w:512,h:128,bg:"#2a1a12",fg:"#ffcf80",font:"bold 64px Arial Black, Arial"}),emissive:16764800,emissiveIntensity:.15}));p.position.set(h,2.3,l+Ie/2+.02),t.add(p),this.add(ds(.7,1.05),h,0,u-.6),this.addBoxCollider(h,u-.6,.8,.8);let y=new V(new re(.32,.32,.6,20,1,!0),ft.glass());y.position.set(h,1.35,u-.6),t.add(y);let g=Kn({frosting:0,glow:!0,scale:1.4});g.position.set(h,1.2,u-.6),g.rotation.x=.4,t.add(g),this.lastDonut=g;let m=new er(16766704,10,6,.4,.5,1.5);m.position.set(h,2.9,u-.6),m.target=g,t.add(m);let x=cr("EXHIBIT 404",`THE LAST DONUT
(c. 1974)`,1.2,.6,{bg:"#1c1a17",titleFont:"bold 46px Georgia, serif",bodyFont:"40px Georgia, serif"});x.position.set(h,.6,u-.6+.42),t.add(x),this.beanbag=this.add(rf(),r+1.1,0,l+1.2),this.add(of(),o-.7,0,l+.6),this.addBoxCollider(o-.7,l+.6,1,.8),this.lastDonutIt=this.addInteractable({id:"lastdonut",pos:new R(h,1.2,u-.6),prompt:"Take THE LAST DONUT",enabled:!0,radius:2.2}),this.addUpdater(_=>{g.rotation.y+=_})}_stations(){let t=this.scene;this.stations=[];let e=["lightsout","morse","slider"];for(let n=0;n<ur;n++){let s=this.exits[n],r=s.c*kt,o=-s.r*kt-kt/2,a=r-1.15,l=o+Ie/2+.02,c=new dt,h=e[n],u=null;if(h==="lightsout"){c.add(vt(.7,.9,.18,ee("fusebox",{color:6976640,metalness:.5,roughness:.5}),0,1,.09));let p=new V(new Ht(.5,.25),new ce({map:Ae("\u26A1 FUSES",{w:256,h:128,bg:"#ffcc00",fg:"#111",font:"bold 50px Arial Black, Arial"})}));p.position.set(0,1.7,.19),c.add(p);for(let y=0;y<9;y++){let g=new V(new te(.03,6,4),new ce({color:y%3===1?4521830:16724787}));g.position.set(-.18+y%3*.18,1.2-Math.floor(y/3)*.18,.19),c.add(g)}}else if(h==="morse"){c.add(vt(.9,.06,.5,ft.darkWood(),0,.95,.25)),c.add(vt(.06,.95,.06,ft.darkWood(),-.38,0,.45)),c.add(vt(.06,.95,.06,ft.darkWood(),.38,0,.45));let p=sf();p.group.children[0].visible=!1,p.group.position.set(.1,.2,.25),p.group.scale.setScalar(1),c.add(p.group),u=p;let y=new V(new Ht(.7,.9),new ht({map:Ae(`MORSE
CODE
.- -...`,{w:256,h:330,bg:"#efe6cf",fg:"#222",font:"bold 44px Courier New, monospace"})}));y.position.set(0,1.8,.02),c.add(y)}else{let p=vt(1,1.2,.08,ft.brass(),0,.9,.04);c.add(p);let[y,g]=ve(256,300);g.fillStyle="#222",g.fillRect(0,0,256,300);for(let x=0;x<9;x++)g.fillStyle=`hsl(${x*40},50%,50%)`,g.fillRect(x%3*85+2,Math.floor(x/3)*100+2,81,96);g.fillStyle="#fff",g.font="bold 30px Arial",g.textAlign="center",g.fillText("???",128,160);let m=new V(new Ht(.9,1.1),new ht({map:Me(y)}));m.position.set(0,1.5,.09),c.add(m)}c.position.set(a,0,l),t.add(c),this.addBoxCollider(a,l+.25,.8,.5);let d=new Oe(h==="morse"?16755251:h==="lightsout"?6750105:16742348,3,5,2);d.position.set(a,2.4,l+.8),t.add(d);let f=this.addInteractable({id:"station"+n,pos:new R(a,1.2,l+.1),prompt:["Fix the fuse box","Use the telegraph","Restore the poster"][n],enabled:!0,radius:2.3});this.stations.push({kind:h,it:f,lamp:u,light:d,band:n,pos:new R(a,0,l+1.2)})}}_decorate(){let t=this.scene,e=this.rng;for(let s=0;s<4;s++){let r=-s*kt*4-kt,o=new V(new re(.08,.08,Ne*kt+2,8),this.mats.pipe);o.rotation.z=Math.PI/2,o.position.set((Ne-1)*kt/2,bn-.2,r),t.add(o)}for(let s=0;s<18;s++){let r=Math.floor(e()*Ne),o=Math.floor(e()*this.R),a=new V(new te(.06,8,6),this.mats.bulb);a.position.set(r*kt,bn-.45,-o*kt),t.add(a);let l=vt(.01,.4,.01,ft.black(),r*kt,bn-.42,-o*kt);t.add(l)}this.donutCells=[];for(let s=0;s<ur;s++){let r=this[`dead${s}`];r.slice(0,2).forEach((o,a)=>{let l=this.cellPos(o.c,o.r);this.addCollectible(`maze_${s}_${a}`,l.x,.9,l.z,(s*2+a)%5),this.donutCells.push(o)}),r.slice(2,6).forEach((o,a)=>{let l=this.cellPos(o.c,o.r),c=(s*3+a)%4,h;c===0?h=Ah(s*10+a):c===1?h=Rh(.9):c===2&&s===1?h=tf():h=Ah(s*7+a+3),h.position.add(new R(l.x,0,l.z)),t.add(h),this.addBoxCollider(l.x,l.z,.9,.9)})}for(let s=0;s<16;s++){let r=Math.floor(e()*Ne),o=Math.floor(e()*this.R),a=this.cellPos(r,o),l=Rh(.5);l.position.x=a.x+(e()<.5?-1:1)*1.15,l.position.z=a.z+(e()-.5)*1.6,l.rotation.y=e(),t.add(l)}this.peeks=[];let n=new ce({color:0});for(let s=0;s<ur;s++){let r=s*Qn+1+Math.floor(e()*3),o=e()<.5,a=o?-kt/2+Ie/2+.01:(Ne-1)*kt+kt/2-Ie/2-.01,l=-r*kt+(e()-.5),c=new V(new vi(.28,14),n);c.position.set(a,1.7,l),c.rotation.y=o?Math.PI/2:-Math.PI/2,c.scale.set(1.4,.8,1),t.add(c);let h=new V(new te(.1,12,8),new ht({color:16723984,emissive:16722432,emissiveIntensity:6}));h.position.set(a+(o?.02:-.02),1.7,l),h.visible=!1,t.add(h),this.peeks.push({x:o?a+1.5:a-1.5,z:l,eye:h,done:!1})}}_mapCell(t,e){return{c:Math.round(t/kt),r:Math.round(-e/kt)}}revealAround(t,e){this.seen||(this.seen=new Set);let{c:n,r:s}=this._mapCell(t,e);this.seen.add(`${n},${s}`),s>=0&&s<this.R&&n>=0&&n<Ne&&(n<Ne-1&&!this.east[s][n]&&this.seen.add(`${n+1},${s}`),n>0&&!this.east[s][n-1]&&this.seen.add(`${n-1},${s}`),s<this.R-1&&!this.north[s][n]&&this.seen.add(`${n},${s+1}`),s>0&&!this.north[s-1][n]&&this.seen.add(`${n},${s-1}`))}drawMap(t,e){let r=this.R+2,o=t.canvas.width,a=t.canvas.height;t.clearRect(0,0,o,a),t.fillStyle="rgba(239,228,200,0.92)",t.fillRect(0,0,o,a);let l=g=>8+g*12,c=g=>8+(r-1-g)*12,h=this.finalRoom,u=Math.round((h.x0+kt/2)/kt),d=this.seen||new Set;for(let g of d){let[m,x]=g.split(",").map(Number);m<0||m>=Ne||x<0||x>=r||(t.fillStyle=x>=this.R?"#ffd9ec":"#fffaf0",t.fillRect(l(m),c(x),12,12))}t.strokeStyle="#3b2a1a",t.lineWidth=2,t.lineCap="round";let f=(g,m,x,_)=>{t.beginPath(),t.moveTo(g,m),t.lineTo(x,_),t.stroke()};for(let g of d){let[m,x]=g.split(",").map(Number);if(m<0||m>=Ne||x<0)continue;let _=l(m),v=c(x);if(x>=this.R){m===u&&f(_,v,_,v+12),m===u+2&&f(_+12,v,_+12,v+12),x===this.R+1&&f(_,v,_+12,v);continue}if(this.north[x][m])if(this.exits.some(E=>E.c===m&&E.r===x)){let E=this.gates[Math.floor(x/Qn)]?.open;t.strokeStyle=E?"#2fbf71":"#ff8a00",t.lineWidth=3,f(_,v,_+12,v),t.strokeStyle="#3b2a1a",t.lineWidth=2}else f(_,v,_+12,v);(m===Ne-1||this.east[x][m])&&f(_+12,v,_+12,v+12),m===0&&f(_,v,_,v+12),x===0&&m!==this.entries[0].c&&f(_,v+12,_+12,v+12)}t.font="10px sans-serif",t.textAlign="center",t.textBaseline="middle",this.stations.forEach((g,m)=>{let x=this.exits[m];d.has(`${x.c},${x.r}`)&&t.fillText(["\u26A1","\u{1F4DF}","\u{1F5BC}\uFE0F"][m],l(x.c)+12/2,c(x.r)+12/2)});for(let g of this.collectibles){if(g.taken)continue;let{c:m,r:x}=this._mapCell(g.obj.position.x,g.obj.position.z);d.has(`${m},${x}`)&&(t.fillStyle="#ff4f9a",t.beginPath(),t.arc(l(m)+12/2,c(x)+12/2,3,0,7),t.fill())}d.has(`${u+1},${this.R}`)&&t.fillText("\u{1F369}",l(u+1)+12/2,c(this.R+1)+12/2);let p=8+(e.pos.x/kt+.5)*12,y=8+(r-1+e.pos.z/kt+.5)*12;t.save(),t.translate(p,y),t.rotate(-e.yaw),t.fillStyle="#e8262b",t.beginPath(),t.moveTo(0,-6),t.lineTo(4,4),t.lineTo(0,2),t.lineTo(-4,4),t.closePath(),t.fill(),t.restore()}spawnFor(t){if(t===0){let n=this.cellPos(this.entries[0].c,0);return{x:n.x,z:n.z+.6,yaw:0}}let e=this.stations[t-1];return{x:e.pos.x+.4,z:e.pos.z+.4,yaw:0}}};var Fa=class{constructor(t){this.game=t,this.modal=null}open(){this.close();let t=this.modal=Jt("div","modal");t.style.background="rgba(0,0,0,0.75)",t.innerHTML='<div class="computer"><div class="screen"></div></div>',W("#modal-root").append(t),this.screen=W(".screen",t),this.showLogin()}close(){this.modal?.remove(),this.modal=null}showLogin(){this.screen.className="screen",this.screen.innerHTML=`
      <div class="login-box">
        <div class="login-avatar">\u{1F482}</div>
        <div class="login-user">NIGHT_GUARD</div>
        <div class="login-pw"><span class="dots"></span><span class="caret"></span></div>
        <div class="login-btns"><button class="lb login">LOG IN</button><button class="lb hint">HINT?</button></div>
        <div class="login-msg"></div>
      </div>`,this.dots=W(".dots",this.screen),this.msg=W(".login-msg",this.screen)}async type(t,{visible:e=!1,speed:n=.11}={}){let s=this.game;for(let r of t){if(s.sched.skipping)break;this.dots.textContent+=e?r:"\u2022",s.audio.play("type"),await s.wait(n+Math.random()*.06)}s.sched.skipping&&(this.dots.textContent=e?t:"\u2022".repeat(t.length))}clear(){this.dots&&(this.dots.textContent="")}setMsg(t,e=!1){if(this.msg.textContent=t,this.msg.classList.toggle("ok",e),!e&&t){this.game.audio.play("error");let n=W(".login-box",this.screen);n.classList.remove("shake"),n.offsetWidth,n.classList.add("shake")}}async press(t){let e=W(`.lb.${t}`,this.screen);e&&(e.classList.add("press"),this.game.audio.play("click"),await fn(160),e.classList.remove("press"))}showHint(){this.screen.className="screen",this.screen.style.background="#000",this.screen.innerHTML='<div class="museos-hint"><span class="glitch">SOLVE THE PUZZLES</span>PUZZLE #1 SLEEPS WHERE GIANTS ONCE WALKED<br><br>&gt; DINOSAUR HALL_</div>',this.game.audio.play("glitch")}showDenied(t){this.screen.className="screen denied",this.screen.style.background="",this.screen.innerHTML=`<div class="denied-text">ACCESS DENIED</div>
      <div class="museos-hint" style="color:#ff8a8a;text-shadow:none">PASSWORD FRAGMENTS: ${t.length} / 6<br><span style="font-size:.7em">${t.join(" \xB7 ")} \xB7 ???</span></div>`,this.game.audio.play("error"),this.game.audio.play("glitch",{delay:.2})}};function Ba(i,{title:t="GAME OVER",sub:e="",buttons:n=[]}){return new Promise(s=>{let r=Jt("div","",`<div class="go-title">${t}</div><div class="go-sub">${e}</div><div class="row" style="gap:14px;justify-content:center;display:flex;flex-wrap:wrap"></div>`);r.id="gameover-scr";let o=r.querySelector(".row");for(let a of n){let l=Jt("button","btn big "+(a.cls||""),a.label);l.onclick=()=>{i.audio.play("select"),r.remove(),s(a.value)},o.append(l)}document.body.append(r)})}var Xi=[{id:"intro",name:"Prologue \u2014 Session Expired",blurb:"The security office, 11:52 PM"},{id:"dino",name:"Chapter 1 \u2014 The King",blurb:"Dinosaur Hall"},{id:"roman",name:"Chapter 2 \u2014 All Roads",blurb:"The Roman Empire"},{id:"chase",name:"Chapter 3 \u2014 RUN",blurb:"It is right behind you"},{id:"maze",name:"Chapter 4 \u2014 Behind the Walls",blurb:"The Archives"},{id:"morning",name:"Chapter 5 \u2014 Morning Shift",blurb:"7 hours later\u2026"}],yx={intro:"Headphones on. It's a quiet night... for now.",dino:"Read the plaques \u2014 museums <b>love</b> fun facts.",roman:"Roman numerals: M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1.",chase:"\u2190 \u2192 switch lanes \xB7 \u2191 jump \xB7 \u2193 slide. Hitting things lets the T-Rex catch up.",maze:"Dead ends often hide donuts. Your map fills in as you explore (M).",morning:"Good morning! Your shift ended two hours ago."},gf=["There are <b>14 hidden donuts</b>. They glow pink.","Sprinting burns your donut meter about twice as fast.","Stuck on a puzzle? A hint costs a little donut.","Want to star in this game? Try the <b>Clip Studio</b> in the menu.","Aaron has been Employee of the Month 11 months in a row."];function _f(i){return Math.random()<.6?yx[i]:gf[Math.floor(Math.random()*gf.length)]}var Oh={intro:{meter:100,fragments:[]},dino:{meter:100,fragments:[]},roman:{meter:85,fragments:["REX"]},chase:{meter:80,fragments:["REX","1974"]},maze:{meter:75,fragments:["REX","1974"]},morning:{meter:0,fragments:["REX","1974","ZAP","NAP","DONUT"]}},vx=i=>i.input.isTouch?["Left side: move","Right side: look","USE: interact","\u{1F526}: flashlight","RUN: sprint (eats donuts!)"]:["<kbd>W A S D</kbd> move","<kbd>Mouse</kbd> look","<kbd>E</kbd> use","<kbd>F</kbd> flashlight","<kbd>Shift</kbd> sprint (burns donuts!)"];function Mf(i,t,e){let n={intro:xx,dino:wf,roman:Ef,chase:_x,maze:Mx,morning:bx}[t];return n(i,null,e)}var yf=new ss,vf=new jt;function bf(i,t,e=2){return i.camera.updateMatrixWorld(),vf.multiplyMatrices(i.camera.projectionMatrix,i.camera.matrixWorldInverse),yf.setFromProjectionMatrix(vf),yf.intersectsSphere(new $n(t,e))}function Ha(i,t,e=.9){return t.clone().sub(i.camera.position).normalize().dot(i.player.forward())>e}function xf(i,t){return Math.hypot(i.player.pos.x-t.x,i.player.pos.z-t.z)}function Fh(i,t,e){if(t.screenState)return Object.assign(t.screenState,e),t.screenState;t.screenState=e;let n=t.refs.monitor,s=0,r=0;return t.addUpdater(o=>{if(s+=o,r+=o,r<1/15)return;r=0;let a=n.ctx;e.mode==="metube"?hf(a,s,e.countdown):e.mode==="expired"?Na(a,s):e.mode==="login"?uf(a,s,e.pw||"",e.msg||""):e.mode==="hint"?df(a,s):e.mode==="denied"?ff(a,s):Na(a,s,"LOCKED","Solve the puzzles to log in."),n.texture.needsUpdate=!0}),e}function Sf(i,t){i.audio.setAmbient("night"),i.hud.show(!0),i.hud.showMeter(!0),i.hud.setFragments(i.save.fragments),i.meter.enabled=!0,i.meter.drain=.5,i.meter.onEmpty=()=>i.failed("YOU FELL ASLEEP","Your donut meter hit zero and you dozed off on the job.<br>Tip: hidden donuts glow pink \u2014 grab them! Sprinting burns donuts faster."),i.player.giveFlashlight(!0),i.camera.fov=i.save.settings.fov,i.camera.updateProjectionMatrix(),t.refs.guard.group.visible=!1;for(let e of t.refs.boxDonuts)e.visible=!1;t.refs.deskFlashlight.visible=!1,Fh(i,t,{mode:"locked"})}async function xx(i){let t=new _i(i,{time:"night"});await i.loadLevel(t),i.hud.setFade(1,0),i.audio.setAmbient("office"),i.audio.stopMusic(.5);let e={mode:"metube",countdown:45};Fh(i,t,e);let n=t.refs.guard,s=Kn({frosting:0,scale:.6});s.position.set(0,-.06,.05),n.attachToHand(s,1),n.setMode("eat");let r=0;return t.addUpdater(o=>{n.anim.mode!=="eat"||!n.group.visible||(r+=o,r>2.86&&(r=0,i.audio.play("munch",{vol:.5})))}),i.player.enabled=!1,i.player.hasFlashlight=!1,i.player.setFlash(!1),i.player.flModel.visible=!1,i.camera.fov=55,i.camera.updateProjectionMatrix(),await i.cutscene(async()=>{i.camSet([-13.6,2.5,3.6],[-18.2,1,-.2]),i.hud.caption(`CITY MUSEUM OF NATURAL HISTORY
11:52 PM`),i.audio.play("tick"),await i.wait(2.8),i.hud.caption("Night shift #47."),await i.wait(2.2),i.hud.caption(""),i.fadeIn(2),i.audio.playMusic("menu"),i.camTo([-15.2,2,2.2],[-18.4,1.1,-.1],7,hs.sine),await i.wait(1.5),await i.say("guard01"),i.audio.play("radio"),await i.wait(.4),await i.say("aaron01"),i.audio.play("radio"),await i.say("guard02"),i.audio.stopMusic(1.5),await i.camTo([-17.75,1.42,-.62],[-18.95,1.16,.02],1.6),e.countdown=10;for(let a=10;a>0;a--)e.countdown=a,i.audio.play(a<=5?"beep":"tick",{dur:.06}),await i.wait(.55);e.countdown=0,e.mode="expired",i.audio.play("error"),n.setMode("sit"),await i.say("museos01"),await i.camTo([-16.6,1.75,1.5],[-18.5,1.15,-.1],1.2),await i.say("guard03"),n.setMode("type"),e.mode="login",await i.wait(.5),i.computer.open(),await i.wait(.6),await i.computer.type("donut123"),await i.computer.press("login"),i.computer.setMsg("INCORRECT PASSWORD"),await i.say("guard04"),i.computer.clear(),i.computer.setMsg(""),await i.computer.type("donut123",{speed:.2}),await i.computer.press("login"),i.computer.setMsg("INCORRECT PASSWORD (attempt 2 of \u221E)"),i.shake(.08,.3),await i.say("guard05"),await i.wait(.4),await i.computer.press("hint"),i.computer.showHint(),i.audio.play("sting",{vol:.6}),await i.say("museos02"),await i.say("museos03"),i.computer.close(),e.mode="hint",n.setMode("idle"),n.group.position.set(-17.45,0,.1),n.group.rotation.y=Math.PI/2,i.camSet([-15.7,1.65,.6],[-17.45,1.5,.1]),await i.wait(.4),n.setMode("point"),await i.say("guard06"),n.setMode("idle"),t.refs.deskFlashlight.visible=!1;let o=Gi();o.rotation.x=Math.PI/2,n.attachToHand(o,1),s.visible=!1,i.audio.play("flashlight");for(let a of t.refs.boxDonuts)a.visible=!1;i.audio.play("pickup"),await i.say("guard07"),await i.camTo([-17.45,1.65,.1],[-12,1.55,.1],1.4),n.group.visible=!1}),i.player.setPose(-17.45,.1,-Math.PI/2,-.03),wf(i,t,"fromIntro")}async function wf(i,t,e){let n=e==="fromIntro";t||(t=new _i(i,{time:"night"}),await i.loadLevel(t),i.player.setPose(ne.officeStart.x,ne.officeStart.z,-Math.PI/2)),i.checkpoint("dino"),Sf(i,t),i.setClock(0,!0),i.hud.setFade(0,.8),i.audio.playMusic("explore"),i.setMode("explore"),i.objective("Go to the Dinosaur Hall",ne.dinoDoor),(n||e==="fresh")&&(i.hud.toast("\u{1F369} This is your <b>DONUT METER</b>. It drains over time. If it hits zero, you fall asleep!","gold"),i.hud.controlsHint(vx(i)),i.wait(9).then(()=>i.hud.controlsHint(null)));let s=t.refs.trex,r=new R(ne.trex.x+1.4,5.3,ne.trex.z+4.8);t.addTrigger({minX:-15,maxX:15,minZ:-46,maxZ:-10.6,onEnter:()=>{i.hud.titleCard("CHAPTER 1","THE KING"),i.objective("Find the puzzle in the Dinosaur Hall",ne.dinoPanel),t.refs.panel1It.enabled=!0}});let o=!1;t.addUpdater(()=>{!o&&i.mode==="explore"&&i.player.pos.z<-11&&Ha(i,r,.93)&&xf(i,ne.trex)<24&&(o=!0,i.audio.play("sting",{vol:.5}),i.say("guard08"))});let a=await new Promise(c=>{t.refs.panel1It.onUse=async()=>{await i.openPuzzle("caesar","REX")&&(t.refs.panel1It.enabled=!1,c(!0))}});t.refs.console1.draw(["SOLVED","KEY: REX"],"#6dff9e","NEXT: ROMAN HALL"),await i.say("museos04"),i.say("guard09"),i.objective("Go to the Roman Empire hall",ne.romanDoor),await i.until(()=>xf(i,ne.dinoPanel)>6||i.player.pos.z>-16),await i.until(()=>!bf(i,new R(ne.trex.x,3,ne.trex.z),5.5)),s.group.visible=!1,t.refs.footprints.visible=!0,t.cctvState.trexGone=!0,i.audio.play("clatter"),i.audio.play("stomp",{delay:.6,vol:.6}),i.shake(.15,.6),i.player.flicker(1.2),i.audio.stopMusic(.3),await i.wait(.8),i.say("guard10"),i.objective("...Turn around.",ne.trex);let l=i.sched.time;return await i.until(()=>Ha(i,new R(ne.trex.x,2.5,ne.trex.z),.86)||i.sched.time-l>9),i.audio.play("sting"),i.audio.play("heartbeat",{delay:.4}),i.audio.playMusic("tension"),i.objective(""),await i.say("guard11"),await i.say("guard12"),i.checkpoint("roman"),i.say("guard13"),Ef(i,t,"carry")}async function Ef(i,t,e){t||(t=new _i(i,{time:"night"}),await i.loadLevel(t),Sf(i,t),t.refs.trex.group.visible=!1,t.refs.footprints.visible=!0,t.cctvState.trexGone=!0,t.refs.console1.draw(["SOLVED","KEY: REX"],"#6dff9e","NEXT: ROMAN HALL"),i.player.setPose(0,-12,Math.PI),i.setClock(62,!0),i.hud.setFade(0,.8),i.audio.playMusic("tension"),i.setMode("explore")),i.checkpoint("roman"),i.objective("Get to the Roman Hall. Quickly.",ne.romanDoor);let n=t.refs.trex;t.addTrigger({minX:-11,maxX:11.5,minZ:-9,maxZ:9,onEnter:()=>{i.audio.play("stomp",{vol:.8}),i.audio.play("stomp",{vol:.6,delay:.7}),i.audio.play("growl",{delay:1.1}),i.shake(.2,1.2),i.player.flicker(.8),i.wait(1.4).then(()=>i.say("guard14"))}}),await new Promise(l=>t.addTrigger({minX:12.6,maxX:40,minZ:-9,maxZ:9,onEnter:()=>{i.hud.titleCard("CHAPTER 2","ALL ROADS"),i.audio.playMusic("explore"),i.objective("Crack the Roman lock (it's at the far end)",ne.romanPanel),t.refs.panel2It.enabled=!0,i.wait(2).then(()=>i.say("guard15")),l()}})),await new Promise(l=>{t.refs.panel2It.onUse=async()=>{await i.openPuzzle("roman","1974")&&(t.refs.panel2It.enabled=!1,l())}}),t.refs.console2.draw(["SOLVED","KEY: 1974"],"#ffcc4d","BEYOND THE WALLS..."),i.audio.stopMusic(2),i.player.speedMul=0,await i.say("museos05"),i.say("guard16"),await i.wait(1.6),i.dialogue.stop(),i.audio.play("growl",{vol:.8}),i.objective("...Something is breathing behind you. Turn around.",ne.romanDoor);let s=new R(16,4,0);await i.until(()=>!bf(i,s,3.5)),n.group.position.set(16.8,0,.3),n.group.rotation.y=Math.PI/2-.12,n.group.visible=!0,n.setAlive(!0),n.setMode("idle"),n.anim.jaw=.2;let r=new Oe(16723992,0,16,1.6);r.position.set(21,3.5,2.5),t.scene.add(r);let o=new R(21.5,5,.2);t.addUpdater(()=>n.lookAt(i.camera.position));let a=i.sched.time;if(await i.until(()=>Ha(i,o,.8)||i.sched.time-a>10),!Ha(i,o,.8)){let l=i.player.yaw,h=Math.atan2(-(o.x-i.player.pos.x),-(o.z-i.player.pos.z))-l;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;i.player.enabled=!1,await i.tween(.6,u=>{i.player.yaw=l+h*u,i.player.applyCamera(0)})}i.setMode("cutscene"),i.hud.setLetterbox(!0),i.player.flicker(1.5),i.tween(.8,l=>{r.intensity=40*l}),i.audio.play("sting"),await i.wait(.6),n.roar(2.4),i.audio.play("roar"),i.shake(.5,2.2),i.hud.objective(null),await i.wait(.9),i.say("guard17"),await i.wait(1.4),i.hud.bigText("RUN!"),n.setMode("walk",3),t.addUpdater(l=>{n.anim.mode==="walk"&&(n.group.position.x+=3*l)}),i.audio.play("stomp"),await i.wait(1.1),i.hud.setLetterbox(!1),i.startChapter("chase",{mode:"carry"})}async function _x(i,t,e){let n=new ka(i);await i.loadLevel(n),i.checkpoint("chase"),i.setClock(122,!1),i.hud.show(!0),i.hud.showMeter(!0),i.hud.setFragments(i.save.fragments),i.meter.enabled=!0,i.meter.drain=.25,i.meter.onEmpty=null,i.player.flModel.visible=!1,i.player.setFlash(!1),i.camera.fov=70,i.camera.updateProjectionMatrix(),i.audio.setAmbient("runner"),i.audio.setReverb(.35),i.audio.playMusic("chase",.2),i.setMode("runner");let s=n.start();n.setCam("front"),n.trexBehind=6,i.hud.setFade(0,.25),n.trex.roar(1.6),i.audio.play("roar"),i.audio.play("alarm",{n:3}),i.shake(.3,1.5),i.hud.titleCard("CHAPTER 3","RUN"),i.say("guard18"),await i.wait(2.8),n.blendCam("chase"),await i.tween(1.1,u=>{n.camBlend=u,n.trexBehind=Ve(6,26,Math.min(1,u*2))}),n.camBlend=null,n.hideTrex=!0,n.beginRun(),i.hud.showChase(!0),i.hud.controlsHint(i.input.isTouch?["Swipe \u2190 \u2192 change lanes","Swipe \u2191 jump","Swipe \u2193 slide"]:["<kbd>A</kbd><kbd>D</kbd> / <kbd>\u2190</kbd><kbd>\u2192</kbd> change lanes","<kbd>W</kbd> / <kbd>Space</kbd> jump","<kbd>S</kbd> / <kbd>\u2193</kbd> slide"]),i.wait(6).then(()=>i.hud.controlsHint(null)),i.until(()=>n.st.z<-ln*.45).then(()=>n.st.phase==="run"&&i.say("guard19")),i.until(()=>n.st.arrowShown).then(()=>n.st.phase==="run"&&i.say("guard20"));let r=await i._guard(s);if(i.hud.showChase(!1),i.hud.controlsHint(null),r==="caught")return i.audio.stopMusic(.2),i.hud.flash("rgba(120,0,0,0.9)",1.5),i.hud.setFade(1,.6),await i.wait(.7),i.failed("CHOMP.","The T-Rex got you. (Hit stuff and it catches up. Collect donuts, dodge, and at the end \u2014 GO RIGHT.)");i.setMode("cutscene"),i.hud.setLetterbox(!0),i.meter.enabled=!1,i.audio.stopMusic(.6),n.camMode="free";let o=-ln;i.camSet([-3.4,2.6,o+13],[1.2,2.4,o]);let a=n.trex;a.group.visible=!0,a.group.position.set(.8,0,o+24),a.group.rotation.y=Math.PI,a.setMode("run",14),await i.tween(1.15,u=>{a.group.position.z=Ve(o+24,o+5.4,u)},hs.linear),a.setMode("idle"),i.audio.play("crash"),i.audio.play("clatter"),i.shake(.9,1.4),i.hud.flash("rgba(255,255,255,0.7)",.4);let l=a.body.rotation.x;await i.tween(.35,u=>{a.body.rotation.x=l-.35*Math.sin(u*Math.PI),a.group.position.z=o+5.4+Math.sin(u*Math.PI)*1.2}),a.group.position.z=o+6.5,await i.wait(.5),n.guard.group.rotation.y=0,n.guard.setMode("idle"),i.camSet([pn[2]-1.6,1.7,o-7.2],[pn[2],1.5,o-1]);let c=new V(new te(.13,12,8),new ht({color:16723984,emissive:16722432,emissiveIntensity:7}));c.position.set(pn[2]+.05,1.95,o+1.4),n.scene.add(c);let h=new Oe(16719872,6,5,2);h.position.set(pn[2],1.8,o+1),n.scene.add(h),i.audio.play("growl"),await i.wait(.6),n.guard.setMode("point"),await i.say("guard21"),i.audio.play("roar",{short:!0}),i.shake(.3,.8),n.guard.setMode("shock"),await i.wait(.8),c.visible=!1,h.intensity=0,i.audio.play("stomp",{vol:.6}),i.audio.play("stomp",{vol:.4,delay:.6}),await i.wait(1.2),i.hud.setLetterbox(!1),i.startChapter("maze",{mode:"carry"})}async function Mx(i,t,e){let n=new Oa(i);await i.loadLevel(n),i.checkpoint("maze");let s=i.save.solved||(i.save.solved={}),r=[0,1,2].filter(m=>s["maze"+m]).length;for(let m=0;m<r;m++)n.openGate(m,!0);let o=n.spawnFor(r);i.player.setPose(o.x,o.z,o.yaw),i.setClock(135+r*15,!0),i.hud.show(!0),i.hud.showMeter(!0),i.hud.setFragments(i.save.fragments),i.meter.enabled=!0,i.meter.drain=.48,i.meter.onEmpty=()=>i.failed("YOU FELL ASLEEP","Right there in the archives. The T-Rex is very disappointed in you.<br>Tip: dead ends often hide donuts."),i.player.giveFlashlight(!0),i.camera.fov=i.save.settings.fov,i.camera.updateProjectionMatrix(),i.audio.setAmbient("maze"),i.audio.setReverb(.25),i.audio.playMusic("maze"),i.hud.setFade(0,.8),i.setMode("explore");let a=["Find the fuse box to open the first gate","Find the old telegraph to open the next gate","Find the torn poster to open the last gate","Get to the break room"];i.objective(a[r]),r===0&&(i.hud.titleCard("CHAPTER 4","BEHIND THE WALLS"),n.holeEye.visible=!0,i.audio.play("growl",{vol:.8}),i.wait(2.5).then(()=>{n.holeEye.visible=!1}),i.wait(1.2).then(async()=>{i.audio.play("radio"),await i.say("museos06"),await i.say("guard22")}));let l=document.getElementById("minimap"),c=l.querySelector("canvas").getContext("2d");l.classList.remove("off"),i.hud.toast("\u{1F5FA}\uFE0F Your map fills in as you explore. Press <b>M</b> to hide it.","gold");let h=1;n.addUpdater(m=>{i.input.wasPressed("KeyM")&&l.classList.toggle("off"),n.revealAround(i.player.pos.x,i.player.pos.z),h+=m,h>.1&&!l.classList.contains("off")&&(h=0,n.drawMap(c,i.player))});let u=!1,d=18;n.addUpdater(m=>{if(i.mode==="explore"){for(let x of n.peeks)x.done||Math.hypot(i.player.pos.x-x.x,i.player.pos.z-x.z)<3.2&&(x.done=!0,x.eye.visible=!0,i.audio.play("growl",{vol:.9}),i.shake(.15,.6),u||(u=!0,i.say("guard23")),setTimeout(()=>x.eye.visible=!1,2200));d-=m,d<0&&(d=22+Math.random()*20,i.audio.play("stomp",{vol:.5}),i.audio.play("stomp",{vol:.35,delay:.7}),i.shake(.12,1)),Math.random()<m*.15&&i.audio.play("drip")}});let f=!1,p=["ZAP","NAP","DONUT"],y=["museos07","museos08","museos09"];n.stations.forEach((m,x)=>{m.it.onUse=async()=>{if(s["maze"+x]){i.hud.toast("Already fixed! \u2714","mint");return}await i.openPuzzle(m.kind,p[x])&&(s["maze"+x]=!0,i.persist(),m.light.color.set(6750105),r=Math.max(r,x+1),await n.openGate(x),f||i.objective(a[Math.min(3,x+1)]),i.audio.play("radio"),await i.say(y[x]),x===1&&await i.say("guard24"))}});let g=n.finalRoom;n.addTrigger({minX:g.x0,maxX:g.x1,minZ:g.z1,maxZ:g.z0-.3,onEnter:()=>{f=!0,i.objective("Take THE LAST DONUT"),i.audio.playMusic("menu"),i.say("guard25")}}),await new Promise(m=>{n.lastDonutIt.onUse=m}),n.lastDonutIt.enabled=!1,i.meter.onEmpty=null,await i.cutscene(async()=>{i.player.enabled=!1;let m=n.lastDonut,x=m.position.clone();i.audio.play("pickup"),await i.tween(.8,E=>{m.position.lerpVectors(x,new R(i.camera.position.x,i.camera.position.y-.25,i.camera.position.z).lerp(x,.55),E)}),i.audio.play("bonk"),i.audio.play("thud",{delay:.15}),await i.say("guard26"),i.audio.play("radio"),await i.say("museos10"),i.audio.stopMusic(3);let _=i.meter.value;i.audio.play("yawn"),await i.tween(2.6,E=>{i.meter.set(Ve(_,0,E)),i.hud.setDrowsy(E*.9)});let v=n.beanbag.position,A=i.player.pos.clone();i.say("guard27"),await i.tween(2.4,E=>{i.player.pos.lerpVectors(A,new R(v.x+.3,0,v.z+.4),E),i.player.eyeOffset=-.95*E,i.player.pitch=Ve(0,.35,E),i.player.applyCamera(0)});for(let E of[.7,.2,.85,.4,1])i.hud.setLids(E,.5),await i.wait(.6);i.audio.play("yawn"),i.hud.setFade(1,1.5),await i.wait(1.6)}),i.hud.setDrowsy(0),i.startChapter("morning",{mode:"carry"})}async function bx(i){let t=new _i(i,{time:"day"});await i.loadLevel(t),i.checkpoint("morning"),i.save.fragments=Oh.morning.fragments.slice(),i.hud.setFade(1,0),i.hud.show(!0),i.hud.setLids(1,0),i.hud.setFragments(i.save.fragments),i.meter.enabled=!1,i.audio.setAmbient("day"),i.audio.setReverb(.45),i.player.giveFlashlight(!1),i.player.flModel.visible=!1,i.camera.fov=i.save.settings.fov,i.camera.updateProjectionMatrix(),t.refs.guard.group.visible=!1;for(let u of t.refs.boxDonuts)u.visible=!1;t.refs.deskFlashlight.visible=!1;let e={mode:"locked"};Fh(i,t,e);let n=t.refs.trex,s=new dt,r=new ht({color:1778752,roughness:.7}),o=new V(new re(.2,.23,.15,16),r);s.add(o);let a=vt(.3,.02,.2,r,0,-.07,.2);s.add(a);let l=vt(.07,.06,.01,ft.brass(),0,0,.21);s.add(l),s.position.set(0,.5,.35),s.rotation.z=.2,n.headPivot.children[0].add(s);let c=Kn({frosting:0,scale:.6});c.position.set(.25,-.35,1.2),c.rotation.z=Math.PI/2,n.headPivot.children[0].add(c);let h=t.makeAaron();h.group.position.set(5.5,0,-14),h.group.rotation.y=Math.PI*.8,t.scene.add(h.group),t.addUpdater(u=>h.update(u)),i.player.setPose(.6,-19.6,.05,.55),i.player.eyeOffset=-1.3,i.player.applyCamera(0),i.setClock(0,!1),i.audio.playMusic("morning"),await i.cutscene(async()=>{i.hud.caption("7 HOURS LATER"),i.hud.setFade(.6,0),await i.wait(2.2),i.hud.caption(""),i.hud.setFade(0,1.5);for(let x of[.6,1,.3,.8,0])i.hud.setLids(x,.45),await i.wait(.55);await i.say("guard28");let u=i.player.pitch;await i.tween(1.4,x=>{i.player.eyeOffset=Ve(-1.3,0,x),i.player.pitch=Ve(u,.25,x),i.player.applyCamera(0)});let d=i.player.yaw,f=Math.atan2(-(ne.trex.x+1.5-i.player.pos.x),-(ne.trex.z+4-i.player.pos.z));await i.tween(1.2,x=>{i.player.yaw=Ve(d,f,x),i.player.pitch=Ve(.25,.32,x),i.player.applyCamera(0)}),await i.say("guard29");let p=h.group.position.clone(),y=new R(3.4,0,-18.7);h.setMode("walk",1.3),h.group.rotation.y=Math.atan2(y.x-p.x,y.z-p.z);let g=i.player.yaw,m=Math.atan2(-(y.x-i.player.pos.x),-(y.z-i.player.pos.z));await i.tween(2.4,x=>{h.group.position.lerpVectors(p,y,x),i.player.yaw=Ve(g,m,x),i.player.pitch=Ve(.32,.05,x),i.player.applyCamera(0)},hs.linear),h.setMode("idle"),h.group.rotation.y=Math.atan2(i.player.pos.x-y.x,i.player.pos.z-y.z),h.anim.talk=3,await i.say("aaron02"),await i.say("guard30"),h.anim.talk=3,h.setMode("shrug"),await i.say("aaron03"),h.setMode("idle")}),i.setMode("explore"),i.objective("Log in to your computer (Security Office)",ne.computer),t.refs.computerIt.enabled=!0,await new Promise(u=>{t.refs.computerIt.onUse=u}),t.refs.computerIt.enabled=!1,await i.cutscene(async()=>{i.computer.open(),await i.wait(.5),await i.computer.type("REX1974ZAPNAPDONUT",{visible:!0,speed:.08}),await i.wait(.4),await i.computer.press("login"),i.computer.showDenied(i.save.fragments),e.mode="denied",i.hud.setFragments(i.save.fragments,{missing:!0}),i.audio.stopMusic(.2),await i.say("museos11"),await i.say("guard31"),await i.say("museos12"),i.computer.close()}),i.setMode("cutscene"),i.audio.play("wahwah"),i.save.flags.ending="pending",i.persist(),await i._guard(Ba(i,{title:"GAME OVER",sub:'You did not solve the puzzles.<br><span style="color:var(--dim)">(5 of 6 password fragments. So close. So, so close.)</span>',buttons:[{label:"BACK TO MENU",value:"menu",cls:"pink"}]})),i.toMenu()}var Sx=[["guard","THE SECURITY GUARD (you)"],["dev","THE DEV in the menu TV (also you)"],["aaron","AARON (get a friend!)"],["museos","MUSE-OS, the museum computer"]];function wx(i){return/webm/.test(i)?"webm":/mp4/.test(i)?"mp4":/quicktime/.test(i)?"mov":/png/.test(i)?"png":/jpe?g/.test(i)?"jpg":/webp/.test(i)?"webp":"bin"}function Cf(i){let t=i.clips,e=zn(`
    <h2>\u{1F3AC} CLIP STUDIO</h2>
    <div class="sub">Put yourself in the game! Record (or upload) a clip for any line \u2014 it replaces the cartoon actor in cutscenes and in the menu TV.</div>
    <div class="help">${t.canStore?"":`<b style="color:var(--red)">This browser blocked storage, so recordings can't be saved here \u2014 use the file method below.</b><br>`}
      <b>Two ways to add clips:</b><br>
      1. Press <b>\u25CF REC</b> to film with your webcam, or <b>\u2B06</b> to upload a video. Saved in this browser.<br>
      2. For everyone who plays your game: put files in <code>${ar}</code> named after the line id, e.g. <code>${ar}guard05.mp4</code>. Press <b>\u2B07</b> to download a recording with the right name.<br>
      Photos work too: <code>${ar}guard.png</code> / <code>dev.png</code> become your face when there's no video.</div>
    <div class="clip-group">YOUR FACE (photos)</div>
    <div class="clip-list portraits"></div>
    <div class="lines"></div>`,()=>o()),n=W(".portraits",e.panel),s=W(".lines",e.panel),r=()=>{n.innerHTML="";for(let a of["guard","dev","aaron"]){let l="portrait_"+a,c=t.portrait(a),h=Jt("div","clip-row",`
        <div><div class="line">${Vr[a].name()} \u2014 photo</div>
        <div class="meta">${c?`<span class="ok">\u2713 ${c.source==="file"?"from file":"saved in browser"}</span>`:"using the cartoon face"} \xB7 file name: <code>${a}.png</code></div></div>
        <div class="acts"></div>`),u=W(".acts",h);u.append(Mi("\u{1F4F7} Snap",()=>Rf(i,l,`Smile! This photo becomes ${Vr[a].name()}'s face.`,!0).then(r),!t.canStore)),u.append(Mi("\u2B06",()=>Af(i,l,"image/*").then(r),!t.canStore,"Upload a photo")),t.recorded[l]&&(u.append(Mi("\u2B07",()=>Tf(l,t.recorded[l]),!1,"Download")),u.append(Mi("\u{1F5D1}",()=>t.remove(l).then(r),!1,"Delete"))),n.append(h)}s.innerHTML="";for(let[a,l]of Sx){s.append(Jt("div","clip-group",l));let c=Jt("div","clip-list");for(let[h,u]of Object.entries(us)){if(u.who!==a)continue;let d=t.get(h),f=Jt("div","clip-row",`
          <div><div class="line">\u201C${Bi(u.text)}\u201D</div>
          <div class="meta">id <code>${h}</code> \xB7 ${d?`<span class="ok">\u2713 ${d.source==="file"?"video file found":"recorded"}</span>`:"cartoon + voice"}</div></div>
          <div class="acts"></div>`),p=W(".acts",f);p.append(Mi("\u25CF REC",()=>Rf(i,h,u.text).then(r),!t.canStore)),p.append(Mi("\u2B06",()=>Af(i,h,"video/*").then(r),!t.canStore,"Upload a video")),d&&p.append(Mi("\u25B6",()=>Ex(d.url),!1,"Play")),t.recorded[h]&&(p.append(Mi("\u2B07",()=>Tf(h,t.recorded[h]),!1,"Download with the right file name")),p.append(Mi("\u{1F5D1}",()=>t.remove(h).then(r),!1,"Delete"))),c.append(f)}s.append(c)}},o=t.onChange(r);r()}function Mi(i,t,e=!1,n=""){let s=Jt("button","btn small",i);return s.disabled=e,n&&(s.title=n),s.onclick=t,s}function Tf(i,t){let e=document.createElement("a");e.href=t.url,e.download=`${i.replace(/^portrait_/,"")}.${wx(t.type)}`,document.body.append(e),e.click(),e.remove()}function Ex(i){let t=zn(`<h2>\u25B6 PREVIEW</h2><div class="rec-stage"><video class="playback" controls autoplay playsinline src="${i}"></video></div>`);W("video",t.panel).play().catch(()=>{})}function Af(i,t,e){return new Promise(n=>{let s=document.createElement("input");s.type="file",s.accept=e,s.onchange=async()=>{let r=s.files?.[0];r&&(await i.clips.save(t,r),i.audio.play("chime")),n()},s.click()})}async function Rf(i,t,e,n=!1){let s;try{s=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!n})}catch(r){zn(`<h2>NO CAMERA \u{1F622}</h2><div class="sub">The browser didn't let the game use your camera${n?"":"/microphone"}.</div>
      <div class="help">Check the camera permission next to the address bar and try again \u2014 or use the \u2B06 button to upload a ${n?"photo":"video"} instead.<br><br>(${Bi(r?.message||r)})</div>`);return}return i.audio.stopMusic(.3),new Promise(r=>{let o=null,a=[],l=null,c=null,h=zn(`<h2>${n?"\u{1F4F7} SNAP A PHOTO":"\u25CF RECORD A LINE"}</h2>
      <div class="rec-stage" style="position:relative">
        <div class="rec-line">${n?Bi(e):`Say: \u201C${Bi(e)}\u201D`}</div>
        <video autoplay muted playsinline></video>
        <div class="rec-count"></div>
        <div class="row rec-btns" style="justify-content:center"></div>
        <div class="help rec-status">${n?"Center your face, then press SNAP.":"Press RECORD, wait for 3-2-1, say the line, then press STOP. Act it out! \u{1F3AD}"}</div>
      </div>`,()=>{s.getTracks().forEach(v=>v.stop()),clearInterval(c),i.audio.playMusic("menu"),r()}),u=W("video",h.panel),d=W(".rec-btns",h.panel),f=W(".rec-count",h.panel),p=W(".rec-status",h.panel);u.srcObject=s;let y=v=>{d.innerHTML="",v.forEach(A=>d.append(A))},g=async()=>{await i.clips.save(t,l),i.audio.play("chime"),h.close()},m=()=>{u.classList.remove("playback"),u.removeAttribute("src"),u.srcObject=s,u.muted=!0,u.controls=!1,u.play().catch(()=>{}),y([_]),p.textContent="Ready when you are!"},x=async()=>{for(let v of["3","2","1"])f.textContent=v,i.audio.play("beep",{dur:.08}),await fn(700);f.textContent=""},_=Jt("button","btn pink",n?"\u{1F4F7} SNAP":"\u25CF RECORD");_.onclick=async()=>{if(y([]),await x(),n){let T=document.createElement("canvas"),P=Math.min(u.videoWidth,u.videoHeight)||480;T.width=T.height=512;let S=T.getContext("2d");S.translate(512,0),S.scale(-1,1),S.drawImage(u,(u.videoWidth-P)/2,(u.videoHeight-P)/2,P,P,0,0,512,512),i.audio.play("flashlight"),i.hud.flash("rgba(255,255,255,0.9)",.3),l=await new Promise(L=>T.toBlob(L,"image/png")),u.srcObject=null,u.src=URL.createObjectURL(l),u.poster=u.src,p.textContent="Looking good!";let M=Jt("img");M.src=URL.createObjectURL(l),M.style.cssText="width:240px;border-radius:16px;border:3px solid var(--gold)",u.replaceWith(M),y([Jt("button","btn mint","\u2713 USE THIS"),Jt("button","btn ghost","\u21BA RETAKE")]),d.children[0].onclick=g,d.children[1].onclick=()=>{M.replaceWith(u),m()};return}let v=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm","video/mp4"].find(T=>window.MediaRecorder?.isTypeSupported?.(T))||"";try{o=new MediaRecorder(s,v?{mimeType:v}:void 0)}catch{p.textContent="Recording is not supported in this browser. Try uploading a video instead.";return}a=[],o.ondataavailable=T=>T.data.size&&a.push(T.data),o.onstop=()=>{clearInterval(c),l=new Blob(a,{type:o.mimeType||"video/webm"}),u.srcObject=null,u.src=URL.createObjectURL(l),u.muted=!1,u.controls=!0,u.classList.add("playback"),u.play().catch(()=>{}),p.textContent="How was that? Save it or try again.";let T=Jt("button","btn mint","\u2713 USE THIS"),P=Jt("button","btn ghost","\u21BA RETAKE");T.onclick=g,P.onclick=m,y([T,P])},o.start(200);let A=0;p.innerHTML='<span class="rec-dot">\u25CF REC</span> 0s',c=setInterval(()=>{A++,p.innerHTML=`<span class="rec-dot">\u25CF REC</span> ${A}s`,A>=20&&o.state==="recording"&&o.stop()},1e3);let E=Jt("button","btn pink","\u25A0 STOP");E.onclick=()=>o.state==="recording"&&o.stop(),y([E])},y([_])})}var za=class{constructor(t){this.game=t,this.root=W("#menu"),this.speaker=null,this.open=!1}_buildSpeaker(){if(this.speaker)return;let t=this.speaker=Jt("div","",`
      <div class="tv">
        <div class="tv-screen"><canvas width="256" height="256"></canvas><img alt=""><video playsinline></video></div>
        <div class="tv-label">${zi.devName} \xB7 LIVE</div>
        <div class="tv-knobs"><i></i><i></i></div>
      </div>`);t.id="speaker",document.body.append(t);let e=W(".tv-screen",t),n=new Wr(e,{canvas:W("canvas",e),img:W("img",e),video:W("video",e),root:t});n.who="dev",n.mood="happy",this.game.dialogue.tv=n;let s=this.game.clips.portrait("dev");n.setMode(s?"img":"canvas"),s&&(n.img.src=s.url);let r=0;t.addEventListener("click",()=>{this.busy||this.game.dialogue.current||(this.game.audio.play("static",{dur:.15}),this.game.say(r++%2?"dev07":"dev06"))})}_removeSpeaker(){this.speaker?.remove(),this.speaker=null,this.game.dialogue.tv=null}show(){let t=this.game,e=t.save;this.open=!0,this._buildSpeaker();let n=e.reached||[],s=e.chapter&&e.chapter!=="intro"?Xi.find(a=>a.id===e.chapter):null,[r,o]=zi.title;this.root.innerHTML=`
      <div class="menu-left">
        <div class="logo">${r.replace(/O/,'<span class="donut-o"></span>')}<span class="l2">${o.replace(/^O/,'<span class="donut-o"></span>')}</span></div>
        <div class="tagline">One night. One password. Way too many donuts.</div>
        <div class="menu-badges">${e.flags.kicked?'<span class="menu-badge">\u{1F3C1} YOU BEAT THE GAME (KIND OF)</span>':""}${e.donuts.length?`<span class="menu-badge ${e.donuts.length>=14?"gold":"dim"}">\u{1F369} ${e.donuts.length}/14 donuts${e.donuts.length>=14?" \u2014 DONUT HUNTER":""}</span>`:""}</div>
        ${s?`<button class="btn menu-btn pink" data-act="continue">\u25B6 CONTINUE <small>${s.name}</small></button>`:""}
        <button class="btn menu-btn ${s?"":"pink"}" data-act="new">${s?"NEW GAME":"\u25B6 PLAY"} <small>Prologue</small></button>
        <button class="btn menu-btn" data-act="chapters">CHAPTERS <small>${n.length}/${Xi.length}</small></button>
        <button class="btn menu-btn mint" data-act="clips">\u{1F3AC} CLIP STUDIO <small>put yourself in the game</small></button>
        <button class="btn menu-btn" data-act="settings">SETTINGS</button>
        <button class="btn menu-btn ghost" data-act="credits">CREDITS</button>
        <div class="menu-foot">${t.input.isTouch?"Touch controls on \xB7 landscape recommended":"WASD move \xB7 Mouse look \xB7 E use \xB7 F flashlight \xB7 Shift sprint"}</div>
      </div>`,this.root.classList.remove("off");for(let a of ha("[data-act]",this.root))a.addEventListener("mouseenter",()=>t.audio.play("hover")),a.addEventListener("click",()=>this._act(a.dataset.act));t.audio.playMusic(e.flags.ending==="pending"?"meta":"menu"),e.flags.ending==="pending"?this._metaEnding():e.flags.welcomed?e.flags.kicked&&!e.flags.backAgain&&(e.flags.backAgain=!0,t.persist(),setTimeout(()=>this.open&&t.say("dev05"),1200)):(e.flags.welcomed=!0,t.persist(),setTimeout(()=>this.open&&!this.busy&&t.say("dev01"),1200))}hide(){this.open=!1,this.root.classList.add("off"),this._removeSpeaker(),this.game.dialogue.stop()}_act(t){let e=this.game;this.busy||(e.audio.play("select"),t==="new"?e.startChapter("intro"):t==="continue"?e.startChapter(e.save.chapter):t==="chapters"?this.chapters():t==="settings"?this.settings():t==="clips"?Cf(e):t==="credits"&&this.credits())}chapters(){let t=this.game,e=zn(`<h2>CHAPTERS</h2><div class="sub">Replay any part of the night you've reached.</div><div class="chapters"></div>`),n=W(".chapters",e.panel);Xi.forEach((s,r)=>{let o=t.save.reached.includes(s.id)||r===0,a=Jt("button",`btn chapter-btn ${o?"":"locked"}`,`<span>${s.name}</span><small>${o?s.blurb:"\u{1F512} locked"}</small>`);a.onclick=()=>{e.close(),t.audio.play("select"),t.startChapter(s.id)},n.append(a)})}settings(t){let e=this.game,n=e.save.settings,s=zn('<h2>SETTINGS</h2><div class="sub">Saved automatically.</div><div class="settings"></div>',t),r=W(".settings",s.panel),o=(c,h,u,d,f,p=y=>Math.round(y*100)+"%")=>{let y=Jt("div","setting",`<span>${h}</span><input type="range" min="${u}" max="${d}" step="${f}" value="${n[c]}"><span class="val">${p(n[c])}</span>`),g=W("input",y);g.oninput=()=>{n[c]=Number(g.value),W(".val",y).textContent=p(n[c]),e.applySettings()},r.append(y)},a=(c,h,u)=>{let d=Jt("div","setting",`<span>${h}</span><select>${u.map(([p,y])=>`<option value="${p}" ${String(n[c])===String(p)?"selected":""}>${y}</option>`).join("")}</select><span></span>`),f=W("select",d);f.onchange=()=>{let p=f.value;n[c]=p==="true"?!0:p==="false"?!1:p,e.applySettings(),e.audio.play("click")},r.append(d)};o("master","Master volume",0,1,.05),o("music","Music",0,1,.05),o("sfx","Sound effects",0,1,.05),a("voice","Character voices",[["tts","Robot voices (text-to-speech)"],["babble","Cute beeps"],["off","Off (subtitles only)"]]),a("subtitles","Subtitles",[["medium","On"],["large","Large"],["off","Off"]]),o("sensitivity","Mouse sensitivity",.2,3,.1,c=>c.toFixed(1)+"\xD7"),a("invertY","Invert mouse Y",[[!1,"No"],[!0,"Yes"]]),o("fov","Field of view",60,100,1,c=>c+"\xB0"),o("brightness","Brightness",.7,1.8,.05,c=>Math.round(c*100)+"%"),a("quality","Graphics",[["high","High (glow + shadows)"],["medium","Medium (shadows)"],["low","Fast (for slow computers)"]]),a("shake","Camera shake",[[!0,"On"],[!1,"Reduced"]]),a("marker","Objective compass",[[!0,"On"],[!1,"Off"]]);let l=Jt("button","btn small ghost","Reset save data");l.style.marginTop="18px",l.onclick=()=>{confirm("Erase your progress, collected donuts and the ending? (Clips you recorded are kept.)")&&(e.resetSave(),s.close(),this.show())},r.append(l)}credits(){zn(`<h2>CREDITS</h2>
      <div class="sub">LOCKED OUT \u2014 a night guard story</div>
      <p style="font-weight:800;line-height:1.7">
        Story, ideas, starring, directing & yelling: <b style="color:var(--pink)">${zi.devName}</b> (who was up all night)<br>
        The Security Guard: <b style="color:var(--gold)">you</b><br>
        The T-Rex: <b>a bunch of cylinders</b><br>
        Aaron: <b>Aaron</b><br>
        Donuts eaten during development: <b>too many</b><br><br>
        Built with three.js. Every sound and song is synthesized in your browser.<br>
        Record yourself in the \u{1F3AC} CLIP STUDIO to replace the cartoon actors!
      </p>`)}async _metaEnding(){let t=this.game;this.busy=!0,ha("[data-act]",this.root).forEach(c=>c.disabled=!0);let e=W("#facecam");e.classList.add("menu-pos"),await fn(1500),await t.say("guard32");let n=Jt("button","btn pink","\u{1F9E9} +1 BONUS PUZZLE?");n.id="bonus-btn",document.body.append(n);let s=Jt("div","psst","\u2191 psst\u2026 there's more!");document.body.append(s),t.audio.play("sparkle"),await new Promise(c=>n.onclick=c),n.remove(),s.remove(),t.audio.play("select");let r=zn(`<h2>BONUS PUZZLE #6</h2><div class="sub">Loading the final puzzle\u2026</div>
      <div style="height:22px;border-radius:12px;background:#111;border:2px solid var(--gold);overflow:hidden"><div class="ld" style="height:100%;width:0;background:linear-gradient(90deg,var(--pink),var(--gold));transition:width .3s"></div></div>
      <div class="ldtxt help" style="margin-top:10px">0%</div><div class="res"></div>`,null,{noClose:!0}),o=W(".ld",r.panel),a=W(".ldtxt",r.panel);for(let c=0;c<=99;c+=3+Math.floor(Math.random()*9))o.style.width=c+"%",a.textContent=c+"% \u2014 "+["loading puzzle\u2026","generating fun\u2026","adding donuts\u2026","almost there\u2026","reticulating splines\u2026"][Math.floor(c/22)],t.audio.play("tick"),await fn(180);o.style.width="99%",a.textContent="99% \u2014 ...",await fn(1600),t.audio.play("error"),W(".res",r.panel).innerHTML=`<div class="hintbox" style="border-color:var(--red);color:#ffb0b0;font-size:18px;text-align:center">
      <div style="font:30px var(--title);color:var(--red)">ERROR 404: PUZZLE NOT FOUND</div><br>
      There is no puzzle #6.<br>That's it. That was the whole game.<br>Thanks for playing! \u{1F369}</div>
      <div style="text-align:center;margin-top:16px"><button class="btn ok">\u2026what?</button></div>`,await new Promise(c=>W(".ok",r.panel).onclick=c),r.close(),await t.say("guard33"),await fn(300),await t.say("dev02"),await fn(200),await t.say("guard34"),t.audio.stopMusic(.05),t.audio.play("scratch"),await fn(700),this.speaker.classList.add("angry"),t.dialogue.tv.mood="angry",await t.say("dev03"),t.audio.playMusic("angry",.1),t.shake(.2,2),ha(".menu-left > *",this.root).forEach((c,h)=>{c.style.setProperty("--rot",Math.random()*80-40+"deg"),setTimeout(()=>{c.classList.add("fall"),t.audio.play("thud",{vol:.4})},h*120)}),this.speaker.classList.add("huge"),await t.say("dev04");let l=Jt("div","boot-kick","\u{1F97E}");document.body.append(l),l.offsetWidth,l.classList.add("go"),await fn(380),t.audio.play("kick"),t.hud.flash("rgba(255,255,255,0.9)",.4);for(let c of[this.root,this.speaker,W("#game"),e,W("#dialogue")])c?.classList.add("kicked-away");await fn(900),l.remove(),t.audio.stopMusic(.05),t.audio.play("crt"),document.body.classList.add("crt-off"),await fn(800),t.save.flags.ending="done",t.save.flags.kicked=!0,t.persist(),this.kickedScreen()}kickedScreen(){let t=W("#kicked");document.body.classList.remove("crt-off");let e=[["C:\\MUSEUM\\LOCKED_OUT.EXE",""],["> Process terminated by: "+zi.devName+" (angry)",""],['> Reason: player said "i could do better"',""],["> Exit code: HELL_NAW","err"],["",""],["The developer has kicked you out of the game.","err"]];t.innerHTML=e.map(([n,s],r)=>`<div class="line ${s}" style="animation-delay:${.6+r*.7}s">${n||"&nbsp;"}</div>`).join("")+'<button class="btn ghost">[ reopen game ]</button>',t.classList.remove("off"),W("button",t).onclick=()=>location.reload()}};function zn(i,t,{noClose:e=!1}={}){let n=Jt("div","modal"),s=Jt("div","panel",(e?"":'<button class="close">\u2715</button>')+i);n.append(s),W("#modal-root").append(n);let r=()=>{n.remove(),removeEventListener("keydown",o,!0),t?.()},o=a=>{a.code!=="Escape"||e||W("#modal-root").lastElementChild!==n||(a.stopImmediatePropagation(),r())};return addEventListener("keydown",o,!0),e||(W(".close",s).onclick=r,n.addEventListener("mousedown",a=>{a.target===n&&r()})),{el:n,panel:s,close:r}}var Pf=10;function Lf(i,t,{fragment:e="",onSolvedLine:n=null}={}){let s=Tx[t];return new Promise(r=>{let o=W("#modal-root"),a=Jt("div","modal"),l=Jt("div","panel puzzle");l.innerHTML=`
      <button class="close" title="Close (Esc)">\u2715</button>
      <h2>${s.title}</h2>
      <div class="sub">${s.sub}</div>
      <div class="pz-body"></div>
      <div class="pz-hint"></div>
      <div class="panel-foot">
        <button class="btn small pz-hintbtn">\u{1F4A1} Hint <small style="opacity:.7">(\u2212${Pf}% \u{1F369})</small></button>
        <span class="help">${i.input.isTouch?"Tap to interact":s.keys||"Esc to close"}</span>
      </div>`,a.append(l),o.append(a);let c=W(".pz-body",l);c.classList.add("pz-"+t);let h=W(".pz-hint",l),u=0,d=!1,f=()=>{removeEventListener("keydown",g,!0),m.dispose?.(),a.remove()},p=()=>{d||(d=!0,i.audio.play("back"),f(),r(!1))},y=()=>{d||(d=!0,m.dispose?.(),i.audio.play("chime"),i.audio.play("unlock",{delay:.1}),W(".pz-hintbtn",l).remove(),h.innerHTML="",c.innerHTML=`
        <div class="solved-banner">
          <div class="big">PUZZLE SOLVED!</div>
          <div class="help" style="margin-top:8px">Password fragment unlocked:</div>
          <div class="frag-reveal">${Bi(e)}</div>
          <div style="font-weight:900;font-size:20px;color:var(--pink)">+1 DONUT \u{1F369}</div>
          <div style="margin-top:18px"><button class="btn big mint pz-continue">CONTINUE</button></div>
        </div>`,W(".pz-continue",c).onclick=()=>{i.audio.play("select"),f(),r(!0)},W(".pz-continue",c).focus())},g=x=>{if(x.code==="Escape"){x.stopPropagation(),p();return}if(d){(x.code==="Enter"||x.code==="Space")&&(x.preventDefault(),W(".pz-continue",c)?.click());return}m.onKey?.(x)};addEventListener("keydown",g,!0),W(".close",l).onclick=p,a.addEventListener("mousedown",x=>{x.target===a&&p()}),W(".pz-hintbtn",l).onclick=()=>{let x=m.hints();if(u>=x.length){i.audio.play("error");return}i.meter.add(-Pf),i.audio.play("select"),h.innerHTML=x.slice(0,++u).map(_=>`<div class="hintbox">\u{1F4A1} ${_}</div>`).join(""),m.onHint?.(u)};let m=s.build({game:i,body:c,solve:y,panel:l})})}var dr="ABCDEFGHIJKLMNOPQRSTUVWXYZ",If=(i,t)=>dr.includes(i)?dr[(dr.indexOf(i)+t+26*10)%26]:i,Tx={caesar:{title:"DINO-LOCK 3000",sub:"An encrypted message is glowing on the screen. Turn the bone wheel to decode it.",keys:"\u2190 \u2192 turn the wheel \xB7 Esc close",build({game:i,body:t,solve:e}){let r=[..."NEXT PUZZLE: ROMAN HALL. KEY IS REX"].map(y=>If(y,4)).join(""),o=0,a=null;t.innerHTML=`
        <div class="terminal">
          <div style="text-align:center;margin-bottom:8px">&gt; INCOMING TRANSMISSION \u2014 ENCRYPTED</div>
          <div class="cipher-text"></div>
          <div style="text-align:center;color:#ffcc4d">"SHIFT EACH LETTER BACK BY THE NUMBER OF FINGERS ON <u>BOTH</u> OF THE KING'S HANDS."</div>
        </div>
        <div class="wheel-wrap">
          <button class="btn rotbtn rl">\u25C0</button>
          <div class="wheel"><div class="pointer"></div><div class="ring outer"></div><div class="ring inner"></div><div class="hub">SHIFT<b>0</b></div></div>
          <button class="btn rotbtn rr">\u25B6</button>
        </div>
        <div class="help" style="text-align:center">Outer ring = encrypted letter \xB7 inner ring = real letter</div>`;let l=W(".ring.outer",t),c=W(".ring.inner",t),h=W(".hub b",t),u=W(".cipher-text",t),d=(t.querySelector(".wheel").offsetWidth||250)/2;for(let y=0;y<26;y++){let g=y/26*360,m=Jt("div","lt",dr[y]);m.style.transform=`rotate(${g}deg) translateY(-${d*.83}px)`,m.style.marginTop="-12px",l.append(m);let x=Jt("div","lt",dr[y]);x.style.transform=`rotate(${g}deg) translateY(-${d*.54}px)`,x.style.marginTop="-12px",c.append(x)}let f=()=>{c.style.transform=`rotate(${o*(360/26)}deg)`,h.textContent=o,u.innerHTML=[...r].map(y=>y===" "?'<div class="sp"></div>':`<div class="ch">${y}<small>${dr.includes(y)?If(y,-o):y}</small></div>`).join(""),u.classList.toggle("solved",o===4),o===4&&a==null?(i.audio.play("sparkle"),a=setTimeout(e,1100)):o!==4&&a!=null&&(clearTimeout(a),a=null)},p=y=>{o=(o+y+26)%26,i.audio.play("tick"),i.audio.play("click",{vol:.6}),f()};return W(".rl",t).onclick=()=>p(-1),W(".rr",t).onclick=()=>p(1),t.querySelector(".wheel").addEventListener("wheel",y=>{y.preventDefault(),p(y.deltaY>0?1:-1)},{passive:!1}),f(),{onKey(y){(y.code==="ArrowLeft"||y.code==="KeyA")&&p(-1),(y.code==="ArrowRight"||y.code==="KeyD")&&p(1)},hints:()=>["The plaque next to the T-Rex has a fun fact about its hands.","T. rex had TWO fingers on each hand. Two hands... 2 + 2 = ?","Turn the wheel until the hub says 4."],dispose(){clearTimeout(a)}}}},roman:{title:"AQVILA LOCK",sub:'"ENTER THE YEAR THIS MVSEVM WAS FOVNDED, CITIZEN." \u2014 in normal numbers.',keys:"Click \u25B2\u25BC or type digits \xB7 Esc close",build({game:i,body:t,solve:e,panel:n}){let s=[1,9,7,4],r=[0,0,0,0],o=0,a=!1;t.innerHTML='<div class="aquila">\u{1F985} S \xB7 P \xB7 Q \xB7 R \u{1F985}</div><div class="dials"></div><div class="help" style="text-align:center">Psst \u2014 the founding year is carved somewhere in this hall.</div>';let l=W(".dials",t),c=[];for(let d=0;d<4;d++){let f=Jt("div","dial",'<button class="up">\u25B2</button><div class="num">0</div><button class="dn">\u25BC</button>');l.append(f);let p=W(".num",f);c.push(p),W(".up",f).onclick=()=>u(d,r[d]+1),W(".dn",f).onclick=()=>u(d,r[d]-1),p.addEventListener("wheel",y=>{y.preventDefault(),u(d,r[d]+(y.deltaY>0?-1:1))},{passive:!1})}let h=()=>{!a&&r.every((d,f)=>d===s[f])&&(a=!0,i.audio.play("sparkle"),setTimeout(e,700))},u=(d,f)=>{r[d]=(f+10)%10,c[d].textContent=r[d],c[d].classList.remove("pop"),c[d].offsetWidth,c[d].classList.add("pop"),i.audio.play("tick"),h()};return{onKey(d){(/^Digit\d$/.test(d.code)||/^Numpad\d$/.test(d.code))&&(u(o%4,Number(d.code.slice(-1))),o++,o%4===0&&!r.every((f,p)=>f===s[p])&&(i.audio.play("error"),n.classList.remove("shake"),n.offsetWidth,n.classList.add("shake")))},hints:()=>["Look at the big stone tablet on the far (east) wall. The last line is the year.","Use the ROMAN NUMERALS 101 sign by the entrance. M = 1000, CM = 900...","MCMLXXIV = M (1000) + CM (900) + LXX (70) + IV (4) = 1974."]}}},lightsout:{title:"FUSE BOX",sub:"Turn ALL nine fuses green to power the gate. Each switch also flips its neighbors (up, down, left, right).",keys:"Click the switches \xB7 Esc close",build({game:i,body:t,solve:e}){let s=new Array(9).fill(!0),r=(u,d)=>{let f=Math.floor(d/3),p=d%3,y=u.slice();for(let[g,m]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){let x=f+g,_=p+m;x>=0&&x<3&&_>=0&&_<3&&(y[x*3+_]=!y[x*3+_])}return y};for(let u of[0,4,8,5])s=r(s,u);t.innerHTML='<div class="lights"></div><div class="help" style="text-align:center">Green = power on. Make them all green!</div>';let o=W(".lights",t),a=[],l=!1;for(let u=0;u<9;u++){let d=Jt("button","light");d.onclick=()=>{l||(s=r(s,u),i.audio.play("buzz"),i.audio.play("click"),c(),s.every(Boolean)&&(l=!0,setTimeout(e,600),i.audio.play("sparkle")))},o.append(d),a.push(d)}let c=()=>a.forEach((u,d)=>{u.classList.toggle("on",s[d]),u.classList.remove("hint")});c();let h=()=>{let u=null;for(let d=0;d<512;d++){let f=s.slice(),p=0;for(let y=0;y<9;y++)d&1<<y&&(f=r(f,y),p++);f.every(Boolean)&&(u==null||p<u.n)&&(u={m:d,n:p})}return u?[...Array(9).keys()].filter(d=>u.m&1<<d):[]};return{hints:()=>["Try pressing the switches in the CORNERS and the CENTER first.","The glowing dashed switch is part of the solution. Press it!","Keep asking \u2014 each hint shows another correct switch."],onHint(){let u=h();c(),u.length&&a[u[0]].classList.add("hint")}}}},morse:{title:"TELEGRAPH",sub:"An old telegraph lamp is blinking a word over and over. Decode it with the chart and type it in.",keys:"Type the word \xB7 Enter to submit \xB7 Esc close",build({game:i,body:t,solve:e,panel:n}){let s={A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--.."},r="NAP";t.innerHTML=`
        <div class="morse-lamp"></div>
        <div class="morse-tape"></div>
        <div class="morse-chart">${Object.entries(s).map(([x,_])=>`<div><b>${x}</b> ${_}</div>`).join("")}</div>
        <div class="morse-input"><input maxlength="8" spellcheck="false" autocomplete="off" placeholder="???"><button class="btn mint">SEND</button></div>
        <div class="help" style="text-align:center;margin-top:8px">Short flash = dot ( . ) \xB7 Long flash = dash ( - )</div>`;let o=W(".morse-lamp",t),a=W(".morse-tape",t),l=W("input",t);setTimeout(()=>l.focus(),50);let c=.24,h=[];for(let x of r){let _=s[x];[..._].forEach((v,A)=>{h.push({on:!0,d:v==="."?c:c*3,sym:v}),h.push({on:!1,d:A<_.length-1?c:c*3,gap:A===_.length-1})})}h[h.length-1].d=c*9,h[h.length-1].reset=!0;let u=0,d=null,f=!0,p="",y=i.level?.stations?.[1]?.lamp,g=()=>{if(!f)return;let x=h[u];o.classList.toggle("on",x.on),y?.setLamp(x.on),x.on?(i.audio.play("beep",{dur:x.d}),p+=x.sym):x.gap&&(p+="   "),a.textContent=p,x.reset&&(p=""),u=(u+1)%h.length,d=setTimeout(g,x.d*1e3)};d=setTimeout(g,600);let m=()=>{l.value.trim().toUpperCase()===r?(f=!1,y?.setLamp(!1),e()):(i.audio.play("error"),n.classList.remove("shake"),n.offsetWidth,n.classList.add("shake"),l.select())};return W(".morse-input .btn",t).onclick=m,l.addEventListener("keydown",x=>{x.key==="Enter"&&m(),x.stopPropagation()}),{hints:()=>["The word has 3 letters. The tape under the lamp shows the dots and dashes.","The first letter is  - .  which is N.","N (-.) \xB7 A (.-) \xB7 P (.--.)  \u2192  something you want to do right now..."],dispose(){f=!1,clearTimeout(d),y?.setLamp(!1)}}}},slider:{title:"TORN POSTER",sub:"Someone cut up the museum's most famous poster. Slide the pieces back into place.",keys:"Click a tile next to the gap (or arrow keys) \xB7 Esc close",build({game:i,body:t,solve:e}){let n=Rx(),s=[1,2,3,4,5,6,7,8,0],r=p=>[p-3,p+3,p%3?p-1:-1,p%3<2?p+1:-1].filter(y=>y>=0&&y<9),o=-1;for(let p=0;p<34;p++){let y=s.indexOf(0),g=r(y).filter(x=>x!==o),m=g[Math.floor(Math.random()*g.length)];[s[y],s[m]]=[s[m],s[y]],o=y}if(s.join()==="1,2,3,4,5,6,7,8,0"){let p=s.indexOf(0),y=r(p)[0];[s[p],s[y]]=[s[y],s[p]]}t.innerHTML='<div class="slider"></div><div class="help" style="text-align:center">Tiny numbers show where each piece belongs.</div>';let a=W(".slider",t),l=!1,c=[];for(let p=0;p<9;p++){let y=Jt("div","tile");y.onclick=()=>u(p),a.append(y),c.push(y)}let h=()=>{c.forEach((p,y)=>{let g=s[y];if(p.classList.toggle("empty",g===0),p.classList.remove("hint"),g){let m=g-1;p.style.backgroundImage=`url(${n})`,p.style.backgroundPosition=`${m%3*50}% ${Math.floor(m/3)*50}%`,p.innerHTML=`<span class="n">${g}</span>`}else p.style.backgroundImage="",p.innerHTML=""})},u=p=>{if(l)return;let y=s.indexOf(0);if(!r(y).includes(p)){i.audio.play("tick");return}[s[y],s[p]]=[s[p],s[y]],i.audio.play("click"),i.audio.play("thud",{vol:.25}),h(),s.join()==="1,2,3,4,5,6,7,8,0"&&(l=!0,h(),i.audio.play("sparkle"),setTimeout(e,700))};h();let d=null,f=()=>{d||(d=Ax());let p=s.join(""),y=d.get(p);if(y==null)return-1;let g=s.indexOf(0);return y.split("").indexOf("0")!==g?y.split("").indexOf("0"):-1};return{onKey(p){let y=s.indexOf(0),g={ArrowUp:y+3,ArrowDown:y-3,ArrowLeft:y%3<2?y+1:-1,ArrowRight:y%3?y-1:-1};g[p.code]!=null&&g[p.code]>=0&&g[p.code]<9&&(p.preventDefault(),u(g[p.code]))},hints:()=>["Solve the TOP row first (1, 2, 3), then don't touch it.","The glowing tile is the best next move. Ask again for more!","Still glowing \u2014 keep following the hints and it will solve itself."],onHint(){let p=f();h(),p>=0&&c[p].classList.add("hint")}}}}};function Ax(){let i="123456780",t=new Map([[i,null]]),e=[i],n=s=>[s-3,s+3,s%3?s-1:-1,s%3<2?s+1:-1].filter(r=>r>=0&&r<9);for(let s=0;s<e.length;s++){let r=e[s],o=r.indexOf("0");for(let a of n(o)){let l=r.split("");[l[o],l[a]]=[l[a],l[o]];let c=l.join("");t.has(c)||(t.set(c,r),e.push(c))}}return t}var Ga=null;function Rx(){if(Ga)return Ga;let i=document.createElement("canvas");i.width=i.height=360;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,360);e.addColorStop(0,"#ff9a5a"),e.addColorStop(1,"#7a1f4d"),t.fillStyle=e,t.fillRect(0,0,360,360),t.fillStyle="rgba(255,255,255,0.15)";for(let s=0;s<12;s++)t.beginPath(),t.moveTo(180,200),t.arc(180,200,300,s*.52,s*.52+.26),t.fill();t.fillStyle="#d49a5c",t.beginPath(),t.arc(180,220,90,0,7),t.fill(),t.fillStyle="#ff7eb6",t.beginPath(),t.arc(180,214,82,0,7),t.fill(),t.fillStyle="#7a1f4d",t.beginPath(),t.arc(180,216,30,0,7),t.fill();let n=["#3bc9ff","#ffe14d","#7dff6b","#fff","#b86bff"];for(let s=0;s<40;s++){let r=Math.random()*7,o=40+Math.random()*36;t.save(),t.translate(180+Math.cos(r)*o,214+Math.sin(r)*o),t.rotate(Math.random()*3),t.fillStyle=n[s%5],t.fillRect(-6,-2,12,4),t.restore()}t.fillStyle="#2b1d14",t.beginPath(),t.moveTo(260,120),t.lineTo(350,90),t.lineTo(360,150),t.lineTo(300,175),t.lineTo(250,160),t.fill(),t.fillStyle="#fff";for(let s=0;s<5;s++)t.beginPath(),t.moveTo(262+s*16,160-s*3),t.lineTo(268+s*16,175-s*3),t.lineTo(274+s*16,158-s*3),t.fill();return t.fillStyle="#ff3b3b",t.beginPath(),t.arc(320,110,7,0,7),t.fill(),t.fillStyle="#fff",t.font="bold 50px Arial Black, Arial",t.textAlign="center",t.strokeStyle="#2b1d14",t.lineWidth=8,t.strokeText("DONUT DAY",180,64),t.fillText("DONUT DAY",180,64),t.font="bold 30px Arial Black, Arial",t.strokeText("MUSEUM GIFT SHOP",180,344),t.fillText("MUSEUM GIFT SHOP",180,344),Ga=i.toDataURL(),Ga}var Va=class{constructor(t){this.game=t,this.camera=t.camera,this.pos=new R,this.vel=new R,this.yaw=0,this.pitch=0,this.height=1.65,this.radius=.32,this.enabled=!1,this.lookEnabled=!0,this.bobT=0,this.stepAcc=0,this.sprinting=!1,this.speedMul=1,this.eyeOffset=0;let e=this.spot=new er(16773590,0,36,.48,.6,1.2);e.position.set(.18,-.15,.1),e.target.position.set(.05,-.2,-6),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.bias=-4e-4,e.shadow.normalBias=.02,e.shadow.camera.near=.3,e.shadow.camera.far=34,this.camera.add(e,e.target),this.fill=new Oe(16770752,0,7,2),this.fill.position.set(0,0,-3),this.camera.add(this.fill),this.flModel=Gi(),this.flModel.scale.setScalar(.7),this.flModel.position.set(.24,-.22,-.45),this.camera.add(this.flModel),this.flModel.visible=!1,this._makeDust(),this.flashOn=!1,this.hasFlashlight=!1,this.flickerT=0,this.baseIntensity=32,this.swayX=0,this.swayY=0}_makeDust(){let e=new Float32Array(420);this.dustSeed=new Float32Array(140*3);for(let l=0;l<140;l++)this.dustSeed[l*3]=Math.random(),this.dustSeed[l*3+1]=Math.random(),this.dustSeed[l*3+2]=Math.random();let n=new Pe;n.setAttribute("position",new Ge(e,3));let s=document.createElement("canvas");s.width=s.height=32;let r=s.getContext("2d"),o=r.createRadialGradient(16,16,0,16,16,16);o.addColorStop(0,"rgba(255,240,210,1)"),o.addColorStop(1,"rgba(255,240,210,0)"),r.fillStyle=o,r.fillRect(0,0,32,32);let a=new Ur({size:.014,map:new gi(s),transparent:!0,opacity:.32,depthWrite:!1,blending:En,sizeAttenuation:!0});this.dust=new $o(n,a),this.dust.frustumCulled=!1,this.dust.visible=!1,this.camera.add(this.dust),this.dustT=0}updateDust(t){let e=this.flashOn&&this.flModel.visible&&["explore","cutscene","puzzle"].includes(this.game.mode);if(this.dust.visible=e,!e)return;this.dustT+=t;let n=this.dust.geometry.attributes.position,s=this.dustSeed,r=this.dustT;for(let o=0;o<n.count;o++){let a=s[o*3],l=s[o*3+1],h=-.6-(s[o*3+2]*7+r*.12*(.5+a))%7,u=Math.tan(.4)*-h*Math.sqrt(l),d=a*Math.PI*2+r*.15*(l-.5);n.setXYZ(o,.1+Math.cos(d)*u+Math.sin(r*.7+o)*.03,-.15+Math.sin(d)*u*.9+Math.cos(r*.5+o*1.3)*.03,h)}n.needsUpdate=!0}setPose(t,e,n,s=0){this.pos.set(t,0,e),this.vel.set(0,0,0),this.yaw=n,this.pitch=s,this.applyCamera(0)}faceToward(t,e){this.yaw=Math.atan2(-(t-this.pos.x),-(e-this.pos.z))}giveFlashlight(t=!0){this.hasFlashlight=!0,this.flModel.visible=!0,this.setFlash(t)}setFlash(t){this.hasFlashlight||(t=!1),this.flashOn=t,this.spot.intensity=t?this.baseIntensity:0,this.fill.intensity=t?.5:0,this.flModel.userData.lens.material.color.set(t?16774876:3355443)}flicker(t=1.2){this.flickerT=t}forward(){return new R(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}update(t,e){let n=this.game,s=n.input,r=n.save.settings;if(this.enabled&&this.lookEnabled){let l=.0022*(r.sensitivity||1);this.yaw-=s.mdx*l,this.pitch-=s.mdy*l*(r.invertY?-1:1),this.pitch=Ze(this.pitch,-1.45,1.45),this.swayX=sn(this.swayX,Ze(s.mdx*.002,-.05,.05),10,t),this.swayY=sn(this.swayY,Ze(s.mdy*.002,-.05,.05),10,t)}let o=0;if(this.enabled){let l=s.moveAxis();this.sprinting=s.isDown("ShiftLeft","ShiftRight")&&l.z>.1&&n.meter.value>0;let c=(this.sprinting?5.6:3.3)*this.speedMul,h=Math.sin(this.yaw),u=Math.cos(this.yaw),d=(-h*l.z+u*l.x)*c,f=(-u*l.z-h*l.x)*c,p=1-Math.exp(-10*t);if(this.vel.x+=(d-this.vel.x)*p,this.vel.z+=(f-this.vel.z)*p,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,e)for(let y=0;y<2;y++)Cx(this.pos,this.radius,e);o=Math.hypot(this.vel.x,this.vel.z),s.wasPressed("KeyF")&&this.hasFlashlight&&(this.setFlash(!this.flashOn),n.audio.play("flashlight"))}else this.vel.set(0,0,0);this.bobT+=t*o*2.1,this.stepAcc+=o*t;let a=this.sprinting?2.1:1.65;if(this.stepAcc>a){this.stepAcc=0;let l=n.level,c=l?.surfaceAt?l.surfaceAt(this.pos.x,this.pos.z):l?.surface||"marble";n.audio.play("step",{surface:c,vol:this.sprinting?1.2:.9})}this.flickerT>0&&(this.flickerT-=t,this.flashOn&&(this.spot.intensity=Math.random()<.45?rr(0,8):this.baseIntensity),this.flickerT<=0&&this.flashOn&&(this.spot.intensity=this.baseIntensity)),this.applyCamera(t,o)}applyCamera(t,e=0){let n=this.camera,s=Math.min(1,e/3.3),r=Math.sin(this.bobT*2)*.045*s,o=Math.cos(this.bobT)*.03*s;n.position.set(this.pos.x+o,this.height+this.eyeOffset+r,this.pos.z),n.rotation.set(this.pitch,this.yaw,0,"YXZ"),this.flModel.position.set(.27-this.swayX+o*.4,-.25+this.swayY+r*.6,-.5),this.flModel.rotation.set(.05+this.swayY,.08-this.swayX*2,0)}};function Cx(i,t,e){for(let n of e){if(!n.enabled)continue;let s=Math.max(n.minX,Math.min(i.x,n.maxX)),r=Math.max(n.minZ,Math.min(i.z,n.maxZ)),o=i.x-s,a=i.z-r,l=o*o+a*a;if(!(l>=t*t))if(l>1e-9){let c=Math.sqrt(l);i.x+=o/c*(t-c),i.z+=a/c*(t-c)}else{let c=i.x-n.minX,h=n.maxX-i.x,u=i.z-n.minZ,d=n.maxZ-i.z,f=Math.min(c,h,u,d);f===c?i.x=n.minX-t:f===h?i.x=n.maxX+t:f===u?i.z=n.minZ-t:i.z=n.maxZ+t}}}var Uf="locked-out.save.v1",Df=14;function Nf(){return{chapter:null,reached:[],solved:{},donuts:[],fragments:[],flags:{},settings:{master:.8,music:.6,sfx:.9,voice:"tts",subtitles:"medium",sensitivity:1,invertY:!1,fov:75,quality:"high",marker:!0,shake:!0,brightness:1.15}}}function Px(){let i=Nf();try{let t=JSON.parse(localStorage.getItem(Uf)||"null");if(t)return{...i,...t,settings:{...i.settings,...t.settings||{}},flags:{...t.flags||{}}}}catch{}return i}var Bh=class{constructor(t){this.g=t,this.value=100,this.drain=0,this.enabled=!1,this.onEmpty=null,this.blinkT=5}set(t){this.value=Ze(t,0,100),this.g.hud.setMeter(this.value)}add(t){this.set(this.value+t),t>0&&(this.fired=!1)}update(t){let e=this.g;if(!this.enabled||!["explore","runner"].includes(e.mode))return;let n=e.player?.sprinting&&e.mode==="explore"?2.4:1;this.set(this.value-this.drain*n*t);let s=this.value<22?(22-this.value)/22:0;e.hud.setDrowsy(s*.85),this.value<15&&(this.blinkT-=t,this.blinkT<0&&(this.blinkT=4+Math.random()*3,e.hud.setLids(.6,.35),setTimeout(()=>e.hud.setLids(0,.35),450),Math.random()<.5&&e.audio.play("yawn"))),this.value<=0&&!this.fired&&(this.fired=!0,this.onEmpty?.())}},Wa=class{constructor(){this.save=Px(),this.canvas=W("#game");let t=this.renderer=new Xo({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});t.toneMapping=zr,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=th,Nd(t.capabilities.getMaxAnisotropy()),this.camera=new Qe(75,innerWidth/innerHeight,.05,400),this.camLook=new R,this.composer=new ya(t),this.renderPass=new va(new Ks,this.camera),this.bloom=new or(new J(innerWidth,innerHeight),.55,.45,.82),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(new xa),this.useBloom=!0,this.input=new da(this.canvas),this.audio=new fa,this.sched=new ua,this.hud=new Ma(this),this.dialogue=new Sa(this),this.clips=new wa,this.menu=new za(this),this.computer=new Fa(this),this.meter=new Bh(this),this.player=new Va(this),this.level=null,this.mode="boot",this.paused=!1,this.runId=0,this.shakeOffset={x:0,y:0,z:0,rx:0,rz:0},this.shakeAmp=0,this.shakeT=0,this.shakeDur=1,this.clockMin=0,this.clockOn=!1,this.unlockT=0,this.menuAngle=0,this.timeScale=1,this.clock=new nr,addEventListener("resize",()=>this.resize()),this.resize(),this.input.onKey=e=>this._onKey(e),this.input.onLockChange=e=>{!e&&this.mode==="explore"&&!this.paused&&this.pause()},this.canvas.addEventListener("click",()=>{this.mode==="explore"&&!this.paused&&this.input.requestLock()}),W("#skip-btn").addEventListener("click",()=>this.skipCutscene()),document.addEventListener("visibilitychange",()=>{document.hidden&&["explore","runner"].includes(this.mode)&&!this.paused&&this.pause()}),this.applySettings()}persist(){try{localStorage.setItem(Uf,JSON.stringify(this.save))}catch{}}resetSave(){let t=this.save.settings;this.save=Nf(),this.save.settings=t,this.persist()}applySettings(){let t=this.save.settings;this.audio.setVolumes({master:t.master,music:t.music,sfx:t.sfx}),this.mode!=="runner"&&(this.camera.fov=t.fov),this.camera.updateProjectionMatrix(),t.quality==="ultra"&&(t.quality="high");let e=t.quality,n=Math.min(devicePixelRatio,e==="low"?1:1.75);this.renderer.setPixelRatio(n),this.composer.setPixelRatio(n),this.composer.setSize(innerWidth,innerHeight),this.useBloom=e==="high",this.renderer.toneMappingExposure=t.brightness??1.15,this.player.spot.castShadow=e!=="low",document.documentElement.style.setProperty("--sub-size",t.subtitles==="large"?"28px":innerWidth<720?"17px":"22px"),this.persist()}resize(){this.renderer.setSize(innerWidth,innerHeight,!1),this.composer?.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()}async boot(){await this.clips.init(),this.menuLevel=new _i(this,{time:"night"}),this.menuLevel.persistent=!0,this.setLevel(this.menuLevel),this.renderer.compile(this.menuLevel.scene,this.camera),this.renderer.setAnimationLoop(()=>this.loop())}start(){this.audio.init();let t=new URLSearchParams(location.search).get("chapter");t&&Xi.find(e=>e.id===t)?this.startChapter(t,{mode:"fresh"}):this.toMenu()}loop(){let t=this.clock.getDelta(),e=Math.min(.05,t),n=e*this.timeScale,s=this.input;if(this._perfCheck(Math.min(t,.5)),s.isTouch&&s.wasPressed("Escape")&&["explore","runner"].includes(this.mode)&&this.togglePause(),!this.paused&&(this.sched.update(n),this.mode==="explore"?(this.player.update(n,this.level?.colliders),this._interact(),!s.isTouch&&!s.locked?(this.unlockT+=e,this.unlockT>.6&&this.hud.setPrompt(s.dragging?null:"Click (or drag) to look around")):this.unlockT=0):this.mode==="menu"&&this._menuCam(n),this.level?.update(n),this.player.updateDust(n),this.meter.update(n),this._updateShake(n),this.clockOn)){this.clockMin+=n/4;let a=Math.floor(this.clockMin)%(24*60),l=Math.floor(a/60),c=a%60;this.hud.setClock(`${(l+11)%12+1}:${String(c).padStart(2,"0")} ${l<12?"AM":"PM"}`)}this.dialogue.update(e),this.hud.update();let r=this.camera,o=this.shakeOffset;r.position.x+=o.x,r.position.y+=o.y,r.rotation.z+=o.rz,this.level&&(this.useBloom?(this.renderPass.scene=this.level.scene,this.composer.render(e)):this.renderer.render(this.level.scene,r)),r.position.x-=o.x,r.position.y-=o.y,r.rotation.z-=o.rz,s.endFrame()}_perfCheck(t){if(this.paused||!["explore","runner"].includes(this.mode)||document.hidden){this._perf=null;return}let e=this._perf||(this._perf={t:0,n:0,skip:1});if(e.skip>0){e.skip-=t;return}if(e.t+=t,e.n++,e.t<4)return;let n=e.n/e.t;this._perf={t:0,n:0,skip:0};let s=this.save.settings;n<28&&s.quality!=="low"&&!this.autoLowered?.[s.quality]&&((this.autoLowered||(this.autoLowered={}))[s.quality]=!0,s.quality=s.quality==="high"?"medium":"low",this.applySettings(),this.hud.toast(`\u2699\uFE0F Graphics set to <b>${s.quality==="medium"?"Medium":"Fast"}</b> for smoother play (change it in Settings)`,"gold"))}_interact(){let t=this.level;if(!t||!this.player.enabled)return;let e=this.camera,n=this.player.forward(),s=null,r=.82,o=new R;for(let a of t.interactables){if(!a.enabled)continue;o.copy(a.pos).sub(e.position);let l=o.length();if(l>a.radius)continue;let c=o.normalize().dot(n)+(l<1.2?.15:0);c>r&&(s=a,r=c)}this.unlockT<=.6&&this.hud.setPrompt(s?s.prompt:null),(s&&this.input.wasPressed("KeyE","Enter")||s&&this.input.locked&&this.input.wasPressed("Mouse0"))&&(this.audio.play("click"),s.onUse?.())}_menuCam(t){this.menuAngle+=t*.045;let e=this.menuAngle,n=ne.trex;this.camera.position.set(n.x+Math.sin(e)*12.5,3.2+Math.sin(e*.7)*.8,n.z+Math.cos(e)*12.5),this.camera.lookAt(n.x,4.2,n.z),this.player.spot.target.position.set(Math.sin(this.menuAngle*3)*1.5,-.1,-6)}_updateShake(t){let e=this.shakeOffset;if(this.shakeT>0){this.shakeT-=t;let n=this.shakeAmp*Math.max(0,this.shakeT/this.shakeDur);e.x=rr(-1,1)*n*.3,e.y=rr(-1,1)*n*.3,e.rz=rr(-1,1)*n*.04}else e.x=e.y=e.rz=0,this.shakeAmp=0}shake(t,e=.5){this.save.settings.shake||(t*=.15),t>=this.shakeAmp*Math.max(0,this.shakeT/this.shakeDur)&&(this.shakeAmp=t,this.shakeT=e,this.shakeDur=e)}_onKey(t){(t.code==="Escape"||t.code==="KeyP")&&(this.mode==="cutscene"&&t.code==="Escape"?this.skipCutscene():["explore","runner"].includes(this.mode)&&this.togglePause()),this.mode==="cutscene"&&(t.code==="Space"||t.code==="Enter")&&this.dialogue.skipLine()}setMode(t){this.mode=t;let e=document.activeElement;e&&e!==document.body&&e.blur&&!e.closest?.(".modal")&&e.blur(),document.body.classList.toggle("playing",t!=="menu"&&t!=="boot");let n=t==="explore";this.player.enabled=n,this.hud.crosshair(n),n||this.hud.setPrompt(null),this.input.showTouch(n?"explore":t==="runner"?"runner":"off"),this.dialogue.allowClickSkip=t==="cutscene",n?this.input.requestLock():this.input.exitLock()}togglePause(){this.paused?this.resume():this.pause()}pause(){if(this.paused)return;this.paused=!0,this.dialogue.setPaused(!0),this.input.exitLock(),this.audio.ctx?.suspend?.();let t=this.pauseModal=zn(`<h2>PAUSED</h2><div class="sub">${this.chapterName()}</div>
      <div class="chapters">
        <button class="btn big pink" data-a="resume">\u25B6 RESUME</button>
        <button class="btn" data-a="settings">SETTINGS</button>
        <button class="btn" data-a="restart">RESTART CHAPTER</button>
        <button class="btn ghost" data-a="menu">QUIT TO MENU</button>
      </div>`,()=>{this.paused&&this.resume()});t.panel.querySelector("[data-a=resume]").onclick=()=>t.close(),t.panel.querySelector("[data-a=settings]").onclick=()=>{this.audio.ctx?.resume?.(),this.menu.settings()},t.panel.querySelector("[data-a=restart]").onclick=()=>{this.paused=!1,t.close(),this.startChapter(this.save.chapter||"intro",{mode:"continue"})},t.panel.querySelector("[data-a=menu]").onclick=()=>{this.paused=!1,t.close(),this.toMenu()}}resume(){if(this.paused){if(this.paused=!1,this.audio.ctx?.resume?.(),this.dialogue.setPaused(!1),this.pauseModal){let t=this.pauseModal;this.pauseModal=null,t.close()}this.clock.getDelta(),this.mode==="explore"&&this.input.requestLock()}}chapterName(){return Xi.find(t=>t.id===this.save.chapter)?.name||""}setLevel(t){this.level&&(this.level.scene.remove(this.camera),this.level.persistent||this.level.dispose()),this.level=t,t.scene.add(this.camera),this.sched.reset()}async loadLevel(t){this.setLevel(t);try{this.renderer.compile(t.scene,this.camera)}catch{}this.clock.getDelta()}_guard(t){let e=this.runId;return Promise.resolve(t).then(n=>e===this.runId?n:new Promise(()=>{}))}wait(t){return this._guard(this.sched.wait(t))}tween(t,e,n){return this._guard(this.sched.tween(t,e,n))}until(t){return this._guard(this.sched.until(t))}say(t,e){return this._guard(this.dialogue.say(t,e))}async fadeOut(t=.5){this.hud.setFade(1,t),await this._guard(new Promise(e=>setTimeout(e,t*1e3+30)))}async fadeIn(t=.8){this.hud.setFade(0,t),await this.wait(t)}async cutscene(t){this.setMode("cutscene"),this.hud.setLetterbox(!0),W("#skip-btn").classList.remove("off"),this.hud.show(!0);try{await t()}finally{this.sched.skipping=!1,this.hud.setLetterbox(!1),W("#skip-btn").classList.add("off"),this.hud.caption("")}}skipCutscene(){this.mode!=="cutscene"||this.sched.skipping||(this.audio.play("whoosh",{vol:.4}),this.sched.skipAll(),this.dialogue.skipLine(),this.computer.typingSkip=!0)}camTo(t,e,n=1.5,s=hs.inOut){let r=this.camera.position.clone(),o=this.camLook.clone(),a=new R(...t),l=new R(...e);return this.tween(n,c=>{this.camera.position.lerpVectors(r,a,c),this.camLook.lerpVectors(o,l,c),this.camera.lookAt(this.camLook)},s)}camSet(t,e){this.camera.position.set(...t),this.camLook.set(...e),this.camera.lookAt(this.camLook)}objective(t,e){this.hud.objective(t,e)}addFragment(t){this.save.fragments.includes(t)||this.save.fragments.push(t),this.persist(),this.hud.setFragments(this.save.fragments)}collectDonut(t){this.save.donuts.includes(t)||this.save.donuts.push(t),this.persist(),this.meter.add(20),this.audio.play("munch"),this.audio.play("pickup"),this.hud.toast(`\u{1F369} Donut found! <b>+20%</b> <span style="opacity:.7">(${this.save.donuts.length}/${Df} hidden donuts)</span>`),this.save.donuts.length===Df&&setTimeout(()=>{this.hud.toast("\u{1F3C6} <b>DONUT HUNTER</b> \u2014 you found every hidden donut!","gold"),this.audio.play("chime")},1200)}async openPuzzle(t,e){this.setMode("puzzle");let n=await this._guard(Lf(this,t,{fragment:e}));return this.setMode("explore"),n&&(this.meter.add(35),this.audio.play("munch",{delay:.2}),this.addFragment(e),this.hud.toast(`\u{1F9E9} Puzzle solved! <b>+1 donut</b> \xB7 fragment <b style="color:var(--mint)">${e}</b>`,"mint")),n}checkpoint(t){this.save.chapter=t,this.save.reached.includes(t)||this.save.reached.push(t),this.persist()}setClock(t,e=!0){this.clockMin=t,this.clockOn=e,this.hud.showClock(e)}async failed(t,e){this.setMode("cutscene"),this.meter.enabled=!1,this.audio.stopMusic(.5),this.audio.play("wahwah"),this.dialogue.stop(),await this._guard(Ba(this,{title:t,sub:e,buttons:[{label:"\u21BB TRY AGAIN",value:"retry",cls:"pink"},{label:"MENU",value:"menu",cls:"ghost"}]}))==="retry"?this.startChapter(this.save.chapter,{mode:"continue"}):this.toMenu()}resetHud(){let t=this.hud;t.show(!1),t.showMeter(!1),t.showClock(!1),t.objective(null),t.setFragments([],{show:!1}),t.showChase(!1),t.showArrow(!1),t.setSpeedLines(0),t.setPrompt(null),t.controlsHint(null),t.setDrowsy(0),t.setLids(0,0),t.setLetterbox(!1),t.setDonutCount(null),t.caption(""),t.loadingTip(null),W("#minimap").classList.add("off"),W("#skip-btn").classList.add("off"),W("#modal-root").innerHTML="",this.computer.close()}async startChapter(t,{mode:e="fresh"}={}){this.runId++,this.paused=!1,this.timeScale=1,this.menu.hide(),this.dialogue.stop(),this.setMode("loading"),await this._guard(this.fadeOut(.45)),this.resetHud(),this.player.eyeOffset=0,this.player.speedMul=1,this.meter.enabled=!1,this.meter.onEmpty=null,this.meter.fired=!1;let n=Oh[t];if(e==="fresh")this.save.fragments=n.fragments.slice(),["intro","dino","roman","chase","maze"].includes(t)&&(this.save.solved={}),this.meter.set(n.meter);else if(e==="continue"){this.meter.set(Math.max(60,n.meter*.85));for(let s of n.fragments)this.save.fragments.includes(s)||this.save.fragments.push(s)}else this.meter.set(Math.max(45,this.meter.value));this.checkpoint(t),this.audio.setReverb(.5),t!=="intro"&&(this.hud.loadingTip(Xi.find(s=>s.id===t)?.name,_f(t)),await this._guard(new Promise(s=>requestAnimationFrame(()=>setTimeout(s,40))))),Mf(this,t,e)}toMenu(){this.runId++,this.paused=!1,this.timeScale=1,this.dialogue.stop(),this.resetHud(),this.meter.enabled=!1,this.setLevel(this.menuLevel),this.setMode("menu"),this.player.hasFlashlight=!0,this.player.flModel.visible=!1,this.player.setFlash(!0),this.player.spot.target.position.set(0,-.1,-6),this.camera.fov=60,this.camera.updateProjectionMatrix(),this.audio.setAmbient("night"),this.audio.setReverb(.6),this.hud.setFade(0,1.2),this.menu.show()}};function kf(i){console.error(i);let t=W("#boot");t&&(t.classList.remove("off","loading"),t.querySelector(".boot-inner").innerHTML=`
    <div class="boot-logo" style="font-size:48px">UH OH \u{1F369}</div>
    <div class="boot-tips" style="max-width:520px">The game couldn't start. Your browser might not support WebGL, or something broke.<br><br>
    <code style="color:#ff8a8a">${String(i?.message||i).replace(/</g,"&lt;")}</code></div>`)}addEventListener("DOMContentLoaded",async()=>{let i=W("#boot"),t;try{t=new Wa,window.game=t}catch(n){kf(n);return}let e=t.boot().catch(kf);W("#boot-start").addEventListener("click",async()=>{i.classList.add("loading"),t.audio.init(),t.audio.play("select");try{if("speechSynthesis"in window){let n=new SpeechSynthesisUtterance(" ");n.volume=0,speechSynthesis.speak(n)}}catch{}await e,i.style.transition="opacity .8s",i.style.opacity="0",setTimeout(()=>i.classList.add("off"),800),t.start()})});})();
