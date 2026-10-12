(()=>{var Lc="170";var of=0,bh=1,af=2;var Ld=1,Dc=2,ti=3,Ai=0,an=1,He=2,Si=0,Cs=1,po=2,Eh=3,Sh=4,lf=5,Xi=100,cf=101,hf=102,df=103,uf=104,ff=200,pf=201,mf=202,gf=203,ol=204,al=205,yf=206,xf=207,vf=208,_f=209,Mf=210,bf=211,Ef=212,Sf=213,wf=214,ll=0,cl=1,hl=2,Ds=3,dl=4,ul=5,fl=6,pl=7,Dd=0,Tf=1,Af=2,wi=0,Rf=1,Cf=2,Pf=3,Uc=4,If=5,Lf=6,Df=7;var Ud=300,Us=301,Ns=302,ml=303,gl=304,qo=306,xr=1e3,Yi=1001,yl=1002,mn=1003,Uf=1004;var Dr=1005;var Fn=1006,Sa=1007;var $i=1008;var ri=1009,Nd=1010,kd=1011,vr=1012,Nc=1013,Zi=1014,Hn=1015,Ar=1016,kc=1017,Oc=1018,ks=1020,Od=35902,Fd=1021,Hd=1022,Cn=1023,Bd=1024,zd=1025,Ps=1026,Os=1027,Fc=1028,Hc=1029,Vd=1030,Bc=1031;var zc=1033,lo=33776,co=33777,ho=33778,uo=33779,xl=35840,vl=35841,_l=35842,Ml=35843,bl=36196,El=37492,Sl=37496,wl=37808,Tl=37809,Al=37810,Rl=37811,Cl=37812,Pl=37813,Il=37814,Ll=37815,Dl=37816,Ul=37817,Nl=37818,kl=37819,Ol=37820,Fl=37821,fo=36492,Hl=36494,Bl=36495,Gd=36283,zl=36284,Vl=36285,Gl=36286;var mo=2300,Wl=2301,wa=2302,wh=2400,Th=2401,Ah=2402;var Nf=3200,kf=3201;var Wd=0,Of=1,bi="",on="srgb",qs="srgb-linear",Yo="linear",me="srgb";var ls=7680;var Rh=519,Ff=512,Hf=513,Bf=514,Xd=515,zf=516,Vf=517,Gf=518,Wf=519,Xl=35044;var Ch="300 es",ni=2e3,go=2001,Ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ta=Math.PI/180,yo=180/Math.PI;function ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function Xf(i,t){return(i%t+t)%t}function Aa(i,t,e){return(1-e)*i+e*t}function On(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var tt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],y=s[0],m=s[3],g=s[6],_=s[1],v=s[4],x=s[7],C=s[2],T=s[5],w=s[8];return r[0]=o*y+a*_+l*C,r[3]=o*m+a*v+l*T,r[6]=o*g+a*x+l*w,r[1]=c*y+h*_+d*C,r[4]=c*m+h*v+d*T,r[7]=c*g+h*x+d*w,r[2]=u*y+f*_+p*C,r[5]=u*m+f*v+p*T,r[8]=u*g+f*x+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ra=new Yt;function qd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qf(){let i=xo("canvas");return i.style.display="block",i}var Ph={};function fr(i){i in Ph||(Ph[i]=!0,console.warn(i))}function Yf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function $f(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var re={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=Is(i.r),i.g=Is(i.g),i.b=Is(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?Yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ih=[.64,.33,.3,.6,.15,.06],Lh=[.2126,.7152,.0722],Dh=[.3127,.329],Uh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[qs]:{primaries:Ih,whitePoint:Dh,transfer:Yo,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:Lh,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:Ih,whitePoint:Dh,transfer:me,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:Lh,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});var cs,ql=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=xo("canvas")),cs.width=t.width,cs.height=t.height;let n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jf=0,vo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ca(s[o].image)):r.push(Ca(s[o]))}else r=Ca(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kf=0,cn=class i extends Ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,s=Yi,r=Fn,o=$i,a=Cn,l=ri,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=ii(),this.name="",this.source=new vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xr:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xr:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Ud;cn.DEFAULT_ANISOTROPY=1;var ye=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(f+1)/2,C=(g+1)/2,T=(h+u)/4,w=(d+y)/4,A=(p+m)/4;return v>x&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=w/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=A/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=A/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-p)*(m-p)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-y)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yl=class extends Ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new vo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_o=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $l=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=p,t[e+3]=y;return}if(d!==y||l!==u||c!==f||h!==p){let m=1-a,g=l*u+c*f+h*p+d*y,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,g*_);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let x=a*_;if(l=l*m+u*x,c=c*m+f*x,h=h*m+p*x,d=d*m+y*x,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pa=new P,kh=new Bn,ai=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Nr.subVectors(this.max,ir),hs.subVectors(t.a,ir),ds.subVectors(t.b,ir),us.subVectors(t.c,ir),gi.subVectors(ds,hs),yi.subVectors(us,ds),Fi.subVectors(hs,us);let e=[0,-gi.z,gi.y,0,-yi.z,yi.y,0,-Fi.z,Fi.y,gi.z,0,-gi.x,yi.z,0,-yi.x,Fi.z,0,-Fi.x,-gi.y,gi.x,0,-yi.y,yi.x,0,-Fi.y,Fi.x,0];return!Ia(e,hs,ds,us,Nr)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,hs,ds,us,Nr))?!1:(kr.crossVectors(gi,yi),e=[kr.x,kr.y,kr.z],Ia(e,hs,ds,us,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Zn=[new P,new P,new P,new P,new P,new P,new P,new P],Tn=new P,Ur=new ai,hs=new P,ds=new P,us=new P,gi=new P,yi=new P,Fi=new P,ir=new P,Nr=new P,kr=new P,Hi=new P;function Ia(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);let a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var jf=new ai,sr=new P,La=new P,li=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(La)),this.expandByPoint(sr.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new P,Da=new P,Or=new P,xi=new P,Ua=new P,Fr=new P,Na=new P,Zl=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Da.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(Da);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Or),a=xi.dot(this.direction),l=-xi.dot(Or),c=xi.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Da).addScaledVector(Or,u),f}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){Ua.subVectors(e,t),Fr.subVectors(n,t),Na.crossVectors(Ua,Fr);let o=this.direction.dot(Na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,t);let l=a*this.direction.dot(Fr.crossVectors(xi,Fr));if(l<0)return null;let c=a*this.direction.dot(Ua.cross(xi));if(c<0||l+c>o)return null;let h=-a*xi.dot(Na);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,p,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,p,y,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,p,y,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u+y*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u-y*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,y=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qf,t,tp)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),vi.crossVectors(n,fn),vi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),vi.crossVectors(n,fn)),vi.normalize(),Hr.crossVectors(fn,vi),s[0]=vi.x,s[4]=Hr.x,s[8]=fn.x,s[1]=vi.y,s[5]=Hr.y,s[9]=fn.y,s[2]=vi.z,s[6]=Hr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],y=n[6],m=n[10],g=n[14],_=n[3],v=n[7],x=n[11],C=n[15],T=s[0],w=s[4],A=s[8],E=s[12],M=s[1],I=s[5],O=s[9],k=s[13],H=s[2],Z=s[6],G=s[10],it=s[14],W=s[3],ht=s[7],_t=s[11],Tt=s[15];return r[0]=o*T+a*M+l*H+c*W,r[4]=o*w+a*I+l*Z+c*ht,r[8]=o*A+a*O+l*G+c*_t,r[12]=o*E+a*k+l*it+c*Tt,r[1]=h*T+d*M+u*H+f*W,r[5]=h*w+d*I+u*Z+f*ht,r[9]=h*A+d*O+u*G+f*_t,r[13]=h*E+d*k+u*it+f*Tt,r[2]=p*T+y*M+m*H+g*W,r[6]=p*w+y*I+m*Z+g*ht,r[10]=p*A+y*O+m*G+g*_t,r[14]=p*E+y*k+m*it+g*Tt,r[3]=_*T+v*M+x*H+C*W,r[7]=_*w+v*I+x*Z+C*ht,r[11]=_*A+v*O+x*G+C*_t,r[15]=_*E+v*k+x*it+C*Tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],y=t[7],m=t[11],g=t[15];return p*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+y*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+g*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],y=t[13],m=t[14],g=t[15],_=d*m*c-y*u*c+y*l*f-a*m*f-d*l*g+a*u*g,v=p*u*c-h*m*c-p*l*f+o*m*f+h*l*g-o*u*g,x=h*y*c-p*d*c+p*a*f-o*y*f-h*a*g+o*d*g,C=p*d*l-h*y*l-p*a*u+o*y*u+h*a*m-o*d*m,T=e*_+n*v+s*x+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=_*w,t[1]=(y*u*r-d*m*r-y*s*f+n*m*f+d*s*g-n*u*g)*w,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*g+n*l*g)*w,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*w,t[4]=v*w,t[5]=(h*m*r-p*u*r+p*s*f-e*m*f-h*s*g+e*u*g)*w,t[6]=(p*l*r-o*m*r-p*s*c+e*m*c+o*s*g-e*l*g)*w,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*w,t[8]=x*w,t[9]=(p*d*r-h*y*r-p*n*f+e*y*f+h*n*g-e*d*g)*w,t[10]=(o*y*r-p*a*r+p*n*c-e*y*c-o*n*g+e*a*g)*w,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*w,t[12]=C*w,t[13]=(h*y*s-p*d*s+p*n*u-e*y*u-h*n*m+e*d*m)*w,t[14]=(p*a*s-o*y*s-p*n*l+e*y*l+o*n*m-e*a*m)*w,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,y=o*h,m=o*d,g=a*d,_=l*c,v=l*h,x=l*d,C=n.x,T=n.y,w=n.z;return s[0]=(1-(y+g))*C,s[1]=(f+x)*C,s[2]=(p-v)*C,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(u+g))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(p+v)*w,s[9]=(m-_)*w,s[10]=(1-(u+y))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=fs.set(s[0],s[1],s[2]).length(),o=fs.set(s[4],s[5],s[6]).length(),a=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);let c=1/r,h=1/o,d=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,e.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ni){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,p;if(a===ni)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===go)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ni){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,f=(n+s)*h,p,y;if(a===ni)p=(o+r)*d,y=-2*d;else if(a===go)p=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fs=new P,An=new le,Qf=new P(0,0,0),tp=new P(1,1,1),vi=new P,Hr=new P,fn=new P,Oh=new le,Fh=new Bn,zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ep=0,Hh=new P,ps=new Bn,Kn=new le,Br=new P,rr=new P,np=new P,ip=new Bn,Bh=new P(1,0,0),zh=new P(0,1,0),Vh=new P(0,0,1),Gh={type:"added"},sp={type:"removed"},ms={type:"childadded",child:null},ka={type:"childremoved",child:null},Xe=class i extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new zn,n=new Bn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Yt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(zh,t)}rotateZ(t){return this.rotateOnAxis(Vh,t)}translateOnAxis(t,e){return Hh.copy(t).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(zh,t)}translateZ(t){return this.translateOnAxis(Vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(rr,Br,this.up):Kn.lookAt(Br,rr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Kn),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gh),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sp),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gh),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Xe.DEFAULT_UP=new P(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new P,jn=new P,Oa=new P,Qn=new P,gs=new P,ys=new P,Wh=new P,Fa=new P,Ha=new P,Ba=new P,za=new ye,Va=new ye,Ga=new ye,Ei=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),jn.subVectors(n,e),Oa.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(jn),l=Rn.dot(Oa),c=jn.dot(jn),h=jn.dot(Oa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return za.setScalar(0),Va.setScalar(0),Ga.setScalar(0),za.fromBufferAttribute(t,e),Va.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(za,r.x),o.addScaledVector(Va,r.y),o.addScaledVector(Ga,r.z),o}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),jn.subVectors(t,e),Rn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Rn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;gs.subVectors(s,n),ys.subVectors(r,n),Fa.subVectors(t,n);let l=gs.dot(Fa),c=ys.dot(Fa);if(l<=0&&c<=0)return e.copy(n);Ha.subVectors(t,s);let h=gs.dot(Ha),d=ys.dot(Ha);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(gs,o);Ba.subVectors(t,r);let f=gs.dot(Ba),p=ys.dot(Ba);if(p>=0&&f<=p)return e.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ys,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Wh.subVectors(r,s),a=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Wh,a);let g=1/(m+y+u);return o=y*g,a=u*g,e.copy(n).addScaledVector(gs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Xf(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=Yd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return re.fromWorkingColorSpace(tn.copy(this),t),Math.round(Ze(tn.r*255,0,255))*65536+Math.round(Ze(tn.g*255,0,255))*256+Math.round(Ze(tn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=on){re.fromWorkingColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(zr);let n=Aa(_i.h,zr.h,e),s=Aa(_i.s,zr.s,e),r=Aa(_i.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Gt;Gt.NAMES=Yd;var rp=0,Ci=class extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ii(),this.name="",this.blending=Cs,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fe=class extends Ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new P,Vr=new tt,ln=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}};var bo=class extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Eo=class extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}},op=0,Mn=new le,Xa=new Xe,xs=new P,pn=new ai,or=new ai,We=new P,Ke=class i extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qd(t)?Eo:bo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(pn.min,or.min),pn.expandByPoint(We),We.addVectors(pn.max,or.max),pn.expandByPoint(We)):(pn.expandByPoint(or.min),pn.expandByPoint(or.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(t,c),We.add(xs)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new P,l[A]=new P;let c=new P,h=new P,d=new P,u=new tt,f=new tt,p=new tt,y=new P,m=new P;function g(A,E,M){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,A),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,M),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),a[A].add(y),a[E].add(y),a[M].add(y),l[A].add(m),l[E].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let A=0,E=_.length;A<E;++A){let M=_[A],I=M.start,O=M.count;for(let k=I,H=I+O;k<H;k+=3)g(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let v=new P,x=new P,C=new P,T=new P;function w(A){C.fromBufferAttribute(s,A),T.copy(C);let E=a[A];v.copy(E),v.sub(C.multiplyScalar(C.dot(E))).normalize(),x.crossVectors(T,E);let I=x.dot(l[A])<0?-1:1;o.setXYZW(A,v.x,v.y,v.z,I)}for(let A=0,E=_.length;A<E;++A){let M=_[A],I=M.start,O=M.count;for(let k=I,H=I+O;k<H;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new ln(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xh=new le,Bi=new Zl,Gr=new li,qh=new P,Wr=new P,Xr=new P,qr=new P,qa=new P,Yr=new P,Yh=new P,$r=new P,V=class extends Xe{constructor(t=new Ke,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(qa.fromBufferAttribute(d,t),o?Yr.addScaledVector(qa,h):Yr.addScaledVector(qa.sub(e),h))}e.add(Yr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Gr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Gr,qh)===null||Bi.origin.distanceToSquared(qh)>(t.far-t.near)**2))&&(Xh.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=u.length;p<y;p++){let m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,C=v;x<C;x+=3){let T=a.getX(x),w=a.getX(x+1),A=a.getX(x+2);s=Zr(this,g,t,n,c,h,d,T,w,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let _=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=Zr(this,o,t,n,c,h,d,_,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=u.length;p<y;p++){let m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,C=v;x<C;x+=3){let T=x,w=x+1,A=x+2;s=Zr(this,g,t,n,c,h,d,T,w,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let _=m,v=m+1,x=m+2;s=Zr(this,o,t,n,c,h,d,_,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ap(i,t,e,n,s,r,o,a){let l;if(t.side===an?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ai,a),l===null)return null;$r.copy(a),$r.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:i}}function Zr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Wr),i.getVertexPosition(l,Xr),i.getVertexPosition(c,qr);let h=ap(i,t,e,n,Wr,Xr,qr,Yh);if(h){let d=new P;Ei.getBarycoord(Yh,Wr,Xr,qr,d),s&&(h.uv=Ei.getInterpolatedAttribute(s,a,l,c,d,new tt)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,a,l,c,d,new tt)),o&&(h.normal=Ei.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Ei.getNormal(Wr,Xr,qr,u.normal),h.face=u,h.barycoord=d}return h}var ie=class i extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2));function p(y,m,g,_,v,x,C,T,w,A,E){let M=x/w,I=C/A,O=x/2,k=C/2,H=T/2,Z=w+1,G=A+1,it=0,W=0,ht=new P;for(let _t=0;_t<G;_t++){let Tt=_t*I-k;for(let Wt=0;Wt<Z;Wt++){let ce=Wt*M-O;ht[y]=ce*_,ht[m]=Tt*v,ht[g]=H,c.push(ht.x,ht.y,ht.z),ht[y]=0,ht[m]=0,ht[g]=T>0?1:-1,h.push(ht.x,ht.y,ht.z),d.push(Wt/w),d.push(1-_t/A),it+=1}}for(let _t=0;_t<A;_t++)for(let Tt=0;Tt<w;Tt++){let Wt=u+Tt+Z*_t,ce=u+Tt+Z*(_t+1),J=u+(Tt+1)+Z*(_t+1),rt=u+(Tt+1)+Z*_t;l.push(Wt,ce,rt),l.push(ce,J,rt),W+=6}a.addGroup(f,W,E),f+=W,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=Fs(i[e]);for(let s in n)t[s]=n[s]}return t}function lp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $d(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var cp={clone:Fs,merge:nn},hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends Ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},So=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new P,$h=new tt,Zh=new tt,Je=class extends So{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,$h,Zh),e.subVectors(Zh,$h)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vs=-90,_s=1,Jl=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(vs,_s,t,e);s.layers=this.layers,this.add(s);let r=new Je(vs,_s,t,e);r.layers=this.layers,this.add(r);let o=new Je(vs,_s,t,e);o.layers=this.layers,this.add(o);let a=new Je(vs,_s,t,e);a.layers=this.layers,this.add(a);let l=new Je(vs,_s,t,e);l.layers=this.layers,this.add(l);let c=new Je(vs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},wo=class extends cn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kl=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ie(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Si});r.uniforms.tEquirect.value=e;let o=new V(s,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=Fn),new Jl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ya=new P,up=new P,fp=new Yt,ei=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ya.subVectors(n,e).cross(up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fp.getNormalMatrix(t),s=this.coplanarPoint(Ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new li,Jr=new P,Ji=class{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],p=s[9],y=s[10],m=s[11],g=s[12],_=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,u-c,m-f,x-g).normalize(),n[1].setComponents(l+r,u+c,m+f,x+g).normalize(),n[2].setComponents(l+o,u+h,m+p,x+_).normalize(),n[3].setComponents(l-o,u-h,m-p,x-_).normalize(),n[4].setComponents(l-a,u-d,m-y,x-v).normalize(),e===ni)n[5].setComponents(l+a,u+d,m+y,x+v).normalize();else if(e===go)n[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Jr.x=s.normal.x>0?t.max.x:t.min.x,Jr.y=s.normal.y>0?t.max.y:t.min.y,Jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],y=d[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ft=class i extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let _=g*u-o;for(let v=0;v<c;v++){let x=v*d-r;p.push(x,-_,0),y.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let v=_+c*g,x=_+c*(g+1),C=_+1+c*(g+1),T=_+1+c*g;f.push(v,x,T),f.push(x,C,T)}this.setIndex(f),this.setAttribute("position",new te(p,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gp=`#ifdef USE_ALPHAHASH
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
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
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
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
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
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
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
#endif`,Cp=`#ifdef USE_BUMPMAP
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
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
}`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
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
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
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
#endif`,fm=`struct PhysicalMaterial {
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
}`,pm=`
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sm=`#if defined( USE_POINTS_UV )
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
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qm=`float getShadowMask() {
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
}`,t0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
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
}`,M0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,E0=`#define DISTANCE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,I0=`#define LAMBERT
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
}`,L0=`#define MATCAP
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
}`,D0=`#define MATCAP
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
}`,U0=`#define NORMAL
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
}`,N0=`#define NORMAL
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
}`,k0=`#define PHONG
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
}`,O0=`#define PHONG
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
}`,F0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,B0=`#define TOON
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
}`,z0=`#define TOON
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
}`,V0=`uniform float size;
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 color;
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
}`,q0=`uniform float rotation;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:mp,alphahash_pars_fragment:gp,alphamap_fragment:yp,alphamap_pars_fragment:xp,alphatest_fragment:vp,alphatest_pars_fragment:_p,aomap_fragment:Mp,aomap_pars_fragment:bp,batching_pars_vertex:Ep,batching_vertex:Sp,begin_vertex:wp,beginnormal_vertex:Tp,bsdfs:Ap,iridescence_fragment:Rp,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Dp,color_fragment:Up,color_pars_fragment:Np,color_pars_vertex:kp,color_vertex:Op,common:Fp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Bp,displacementmap_pars_vertex:zp,displacementmap_vertex:Vp,emissivemap_fragment:Gp,emissivemap_pars_fragment:Wp,colorspace_fragment:Xp,colorspace_pars_fragment:qp,envmap_fragment:Yp,envmap_common_pars_fragment:$p,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:am,envmap_vertex:Kp,fog_vertex:jp,fog_pars_vertex:Qp,fog_fragment:tm,fog_pars_fragment:em,gradientmap_pars_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:sm,lights_lambert_pars_fragment:rm,lights_pars_begin:om,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:hm,lights_phong_pars_fragment:dm,lights_physical_fragment:um,lights_physical_pars_fragment:fm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:_m,map_fragment:Mm,map_pars_fragment:bm,map_particle_fragment:Em,map_particle_pars_fragment:Sm,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Tm,morphinstance_vertex:Am,morphcolor_vertex:Rm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Im,normal_fragment_begin:Lm,normal_fragment_maps:Dm,normal_pars_fragment:Um,normal_pars_vertex:Nm,normal_vertex:km,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:zm,opaque_fragment:Vm,packing:Gm,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:$m,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:Km,shadowmap_vertex:jm,shadowmask_pars_fragment:Qm,skinbase_vertex:t0,skinning_pars_vertex:e0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:s0,specularmap_pars_fragment:r0,tonemapping_fragment:o0,tonemapping_pars_fragment:a0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:d0,uv_vertex:u0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:y0,cube_vert:x0,cube_frag:v0,depth_vert:_0,depth_frag:M0,distanceRGBA_vert:b0,distanceRGBA_frag:E0,equirect_vert:S0,equirect_frag:w0,linedashed_vert:T0,linedashed_frag:A0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:I0,meshmatcap_vert:L0,meshmatcap_frag:D0,meshnormal_vert:U0,meshnormal_frag:N0,meshphong_vert:k0,meshphong_frag:O0,meshphysical_vert:F0,meshphysical_frag:H0,meshtoon_vert:B0,meshtoon_frag:z0,points_vert:V0,points_frag:G0,shadow_vert:W0,shadow_frag:X0,sprite_vert:q0,sprite_frag:Y0},dt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},kn={basic:{uniforms:nn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:nn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:nn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:nn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:nn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:nn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:nn([dt.points,dt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:nn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:nn([dt.common,dt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:nn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:nn([dt.sprite,dt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:nn([dt.common,dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:nn([dt.lights,dt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};kn.physical={uniforms:nn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Kr={r:0,b:0,g:0},Vi=new zn,$0=new le;function Z0(i,t,e,n,s,r,o){let a=new Gt(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function p(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function y(_){let v=!1,x=p(_);x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){let x=p(v);x&&(x.isCubeTexture||x.mapping===qo)?(h===void 0&&(h=new V(new ie(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Fs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(v.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(Vi)),h.material.toneMapped=re.getTransfer(x.colorSpace)!==me,(d!==x||u!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new V(new Ft(2,2),new Vn({name:"BackgroundMaterial",uniforms:Fs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=re.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,v){_.getRGB(Kr,$d(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,g(a,l)},render:y,addToRenderList:m}}function J0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(M,I,O,k,H){let Z=!1,G=d(k,O,I);r!==G&&(r=G,c(r.object)),Z=f(M,k,O,H),Z&&p(M,k,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(M,I,O,k),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,I,O){let k=O.wireframe===!0,H=n[M.id];H===void 0&&(H={},n[M.id]=H);let Z=H[I.id];Z===void 0&&(Z={},H[I.id]=Z);let G=Z[k];return G===void 0&&(G=u(l()),Z[k]=G),G}function u(M){let I=[],O=[],k=[];for(let H=0;H<e;H++)I[H]=0,O[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,I,O,k){let H=r.attributes,Z=I.attributes,G=0,it=O.getAttributes();for(let W in it)if(it[W].location>=0){let _t=H[W],Tt=Z[W];if(Tt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),_t===void 0||_t.attribute!==Tt||Tt&&_t.data!==Tt.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function p(M,I,O,k){let H={},Z=I.attributes,G=0,it=O.getAttributes();for(let W in it)if(it[W].location>=0){let _t=Z[W];_t===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));let Tt={};Tt.attribute=_t,_t&&_t.data&&(Tt.data=_t.data),H[W]=Tt,G++}r.attributes=H,r.attributesNum=G,r.index=k}function y(){let M=r.newAttributes;for(let I=0,O=M.length;I<O;I++)M[I]=0}function m(M){g(M,0)}function g(M,I){let O=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;O[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),H[M]!==I&&(i.vertexAttribDivisor(M,I),H[M]=I)}function _(){let M=r.newAttributes,I=r.enabledAttributes;for(let O=0,k=I.length;O<k;O++)I[O]!==M[O]&&(i.disableVertexAttribArray(O),I[O]=0)}function v(M,I,O,k,H,Z,G){G===!0?i.vertexAttribIPointer(M,I,O,H,Z):i.vertexAttribPointer(M,I,O,k,H,Z)}function x(M,I,O,k){y();let H=k.attributes,Z=O.getAttributes(),G=I.defaultAttributeValues;for(let it in Z){let W=Z[it];if(W.location>=0){let ht=H[it];if(ht===void 0&&(it==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),it==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),ht!==void 0){let _t=ht.normalized,Tt=ht.itemSize,Wt=t.get(ht);if(Wt===void 0)continue;let ce=Wt.buffer,J=Wt.type,rt=Wt.bytesPerElement,At=J===i.INT||J===i.UNSIGNED_INT||ht.gpuType===Nc;if(ht.isInterleavedBufferAttribute){let at=ht.data,Ut=at.stride,zt=ht.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<W.locationSize;Ot++)g(W.location+Ot,at.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<W.locationSize;Ot++)m(W.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Ot=0;Ot<W.locationSize;Ot++)v(W.location+Ot,Tt/W.locationSize,J,_t,Ut*rt,(zt+Tt/W.locationSize*Ot)*rt,At)}else{if(ht.isInstancedBufferAttribute){for(let at=0;at<W.locationSize;at++)g(W.location+at,ht.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let at=0;at<W.locationSize;at++)m(W.location+at);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let at=0;at<W.locationSize;at++)v(W.location+at,Tt/W.locationSize,J,_t,Tt*rt,Tt/W.locationSize*at*rt,At)}}else if(G!==void 0){let _t=G[it];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(W.location,_t);break;case 3:i.vertexAttrib3fv(W.location,_t);break;case 4:i.vertexAttrib4fv(W.location,_t);break;default:i.vertexAttrib1fv(W.location,_t)}}}}_()}function C(){A();for(let M in n){let I=n[M];for(let O in I){let k=I[O];for(let H in k)h(k[H].object),delete k[H];delete I[O]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let O in I){let k=I[O];for(let H in k)h(k[H].object),delete k[H];delete I[O]}delete n[M.id]}function w(M){for(let I in n){let O=n[I];if(O[M.id]===void 0)continue;let k=O[M.id];for(let H in k)h(k[H].object),delete k[H];delete O[M.id]}}function A(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function K0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let p=0;p<d;p++)f+=h[p];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],u[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let p=0;for(let y=0;y<d;y++)p+=h[y]*u[y];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function j0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Cn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let A=w===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ri&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Hn&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,maxSamples:T}}function Q0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ei,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,v=_*4,x=g.clippingState||null;l.value=x,x=h(p,u,v,f);for(let C=0;C!==v;++C)x[C]=e[C];g.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=f+y*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,x=f;v!==y;++v,x+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function tg(i){let t=new WeakMap;function e(o,a){return a===ml?o.mapping=Us:a===gl&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ml||a===gl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Kl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var To=class extends So{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},As=4,Jh=[.125,.215,.35,.446,.526,.582],qi=20,$a=new To,Kh=new Gt,Za=null,Ja=0,Ka=0,ja=!1,Wi=(1+Math.sqrt(5))/2,Ms=1/Wi,jh=[new P(-Wi,Ms,0),new P(Wi,Ms,0),new P(-Ms,0,Wi),new P(Ms,0,Wi),new P(0,Wi,-Ms),new P(0,Wi,Ms),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Ao=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Za,Ja,Ka),this._renderer.xr.enabled=ja,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ar,format:Cn,colorSpace:qs,depthBuffer:!1},s=Qh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(r)),this._blurMaterial=ng(r,t,e)}return s}_compileMaterial(t){let e=new V(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,n,s){let a=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Kh),h.toneMapping=wi,h.autoClear=!1;let f=new fe({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),p=new V(new ie,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(Kh),y=!0);for(let g=0;g<6;g++){let _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let v=this._cubeSize;jr(s,_*v,g>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Us||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new V(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$a)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jh[(s-r-1)%jh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new V(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qi-1),y=r/p,m=isFinite(r)?1+Math.floor(h*y):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);let g=[],_=0;for(let w=0;w<qi;++w){let A=w/y,E=Math.exp(-A*A/2);g.push(E),w===0?_+=E:w<m&&(_+=2*E)}for(let w=0;w<g.length;w++)g[w]=g[w]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let x=this._sizeLods[s],C=3*x*(s>v-As?s-v+As:0),T=4*(this._cubeSize-x);jr(e,C,T,3*x,2*x),l.setRenderTarget(e),l.render(d,$a)}};function eg(i){let t=[],e=[],n=[],s=i,r=i-As+1+Jh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-As?l=Jh[o-i+As-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,y=3,m=2,g=1,_=new Float32Array(y*p*f),v=new Float32Array(m*p*f),x=new Float32Array(g*p*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,A=T>2?0:-1,E=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];_.set(E,y*p*T),v.set(u,m*p*T);let M=[T,T,T,T,T,T];x.set(M,g*p*T)}let C=new Ke;C.setAttribute("position",new ln(_,y)),C.setAttribute("uv",new ln(v,m)),C.setAttribute("faceIndex",new ln(x,g)),t.push(C),s>As&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qh(i,t,e){let n=new oi(i,t,e);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ng(i,t,e){let n=new Float32Array(qi),s=new P(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function td(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ed(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function ig(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ml||l===gl,h=l===Us||l===Ns;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ao(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ao(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function sg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);for(let p in u.morphAttributes){let y=u.morphAttributes[p];for(let m=0,g=y.length;m<g;m++)t.remove(y[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let p in f){let y=f[p];for(let m=0,g=y.length;m<g;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,p=d.attributes.position,y=0;if(f!==null){let _=f.array;y=f.version;for(let v=0,x=_.length;v<x;v+=3){let C=_[v+0],T=_[v+1],w=_[v+2];u.push(C,T,T,w,w,C)}}else if(p!==void 0){let _=p.array;y=p.version;for(let v=0,x=_.length/3-1;v<x;v+=3){let C=v+0,T=v+1,w=v+2;u.push(C,T,T,w,w,C)}}else return;let m=new(qd(u)?Eo:bo)(u,1);m.version=y;let g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function og(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*o,p),e.update(f,n,p))}function h(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}function d(u,f,p,y){if(p===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)c(u[g]/o,f[g],y[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,y,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_]*y[_];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ag(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lg(i,t,e){let n=new WeakMap,s=new ye;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),y===!0&&(v=3);let x=a.attributes.position.count*v,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*C*4*d),w=new _o(T,x,C,d);w.type=Hn,w.needsUpdate=!0;let A=v*4;for(let M=0;M<d;M++){let I=m[M],O=g[M],k=_[M],H=x*C*4*M;for(let Z=0;Z<I.count;Z++){let G=Z*A;f===!0&&(s.fromBufferAttribute(I,Z),T[H+G+0]=s.x,T[H+G+1]=s.y,T[H+G+2]=s.z,T[H+G+3]=0),p===!0&&(s.fromBufferAttribute(O,Z),T[H+G+4]=s.x,T[H+G+5]=s.y,T[H+G+6]=s.z,T[H+G+7]=0),y===!0&&(s.fromBufferAttribute(k,Z),T[H+G+8]=s.x,T[H+G+9]=s.y,T[H+G+10]=s.z,T[H+G+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new tt(x,C)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ro=class extends cn{constructor(t,e,n,s,r,o,a,l,c,h=Ps){if(h!==Ps&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=Zi),n===void 0&&h===Os&&(n=ks),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Jd=new cn,nd=new Ro(1,1),Kd=new _o,jd=new $l,Qd=new wo,id=[],sd=[],rd=new Float32Array(16),od=new Float32Array(9),ad=new Float32Array(4);function Ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=id[s];if(r===void 0&&(r=new Float32Array(s),id[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $o(i,t){let e=sd[t];e===void 0&&(e=new Int32Array(t),sd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;ad.set(n),i.uniformMatrix2fv(this.addr,!1,ad),Ve(e,n)}}function mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;od.set(n),i.uniformMatrix3fv(this.addr,!1,od),Ve(e,n)}}function gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;rd.set(n),i.uniformMatrix4fv(this.addr,!1,rd),Ve(e,n)}}function yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function Mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nd.compareFunction=Xd,r=nd):r=Jd,e.setTexture2D(t||r,s)}function Tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jd,s)}function Ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qd,s)}function Rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kd,s)}function Cg(i){switch(i){case 5126:return hg;case 35664:return dg;case 35665:return ug;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return yg;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return _g;case 5125:return Mg;case 36294:return bg;case 36295:return Eg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(i,t){i.uniform1fv(this.addr,t)}function Ig(i,t){let e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function Lg(i,t){let e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function Dg(i,t){let e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function Ug(i,t){let e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ng(i,t){let e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kg(i,t){let e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Og(i,t){i.uniform1iv(this.addr,t)}function Fg(i,t){i.uniform2iv(this.addr,t)}function Hg(i,t){i.uniform3iv(this.addr,t)}function Bg(i,t){i.uniform4iv(this.addr,t)}function zg(i,t){i.uniform1uiv(this.addr,t)}function Vg(i,t){i.uniform2uiv(this.addr,t)}function Gg(i,t){i.uniform3uiv(this.addr,t)}function Wg(i,t){i.uniform4uiv(this.addr,t)}function Xg(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Jd,r[o])}function qg(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jd,r[o])}function Yg(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qd,r[o])}function $g(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kd,r[o])}function Zg(i){switch(i){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return kg;case 5124:case 35670:return Og;case 35667:case 35671:return Fg;case 35668:case 35672:return Hg;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return Vg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return $g}}var jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cg(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zg(e.type)}},tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Qa=/(\w+)(\])?(\[|\.)?/g;function ld(i,t){i.seq.push(t),i.map[t.id]=t}function Jg(i,t,e){let n=i.name,s=n.length;for(Qa.lastIndex=0;;){let r=Qa.exec(n),o=Qa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ld(e,c===void 0?new jl(a,i,t):new Ql(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new tc(a),ld(e,d)),e=d}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function cd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Kg=37297,jg=0;function Qg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var hd=new Yt;function ty(i){re._getMatrix(hd,re.workingColorSpace,i);let t=`mat3( ${hd.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Yo:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qg(i.getShaderSource(t),o)}else return s}function ey(i,t){let e=ty(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ny(i,t){let e;switch(t){case Rf:e="Linear";break;case Cf:e="Reinhard";break;case Pf:e="Cineon";break;case Uc:e="ACESFilmic";break;case Lf:e="AgX";break;case Df:e="Neutral";break;case If:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qr=new P;function iy(){re.getLuminanceCoefficients(Qr);let i=Qr.x.toFixed(4),t=Qr.y.toFixed(4),e=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function ry(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function oy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function ud(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(ay,cy)}var ly=new Map;function cy(i,t){let e=Zt[t];if(e===void 0){let n=ly.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ec(e)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(i){return i.replace(hy,dy)}function dy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function md(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function uy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function fy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case qo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function py(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function my(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dd:t="ENVMAP_BLENDING_MULTIPLY";break;case Tf:t="ENVMAP_BLENDING_MIX";break;case Af:t="ENVMAP_BLENDING_ADD";break}return t}function gy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function yy(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=uy(e),c=fy(e),h=py(e),d=my(e),u=gy(e),f=sy(e),p=ry(r),y=s.createProgram(),m,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),g.length>0&&(g+=`
`)):(m=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),g=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==wi?ny("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,ey("linearToOutputTexel",e.outputColorSpace),iy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=ec(o),o=ud(o,e),o=fd(o,e),a=ec(a),a=ud(a,e),a=fd(a,e),o=pd(o),a=pd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=_+m+o,x=_+g+a,C=cd(s,s.VERTEX_SHADER,v),T=cd(s,s.FRAGMENT_SHADER,x);s.attachShader(y,C),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function w(I){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y).trim(),k=s.getShaderInfoLog(C).trim(),H=s.getShaderInfoLog(T).trim(),Z=!0,G=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,T);else{let it=dd(s,C,"vertex"),W=dd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+it+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||H==="")&&(G=!1);G&&(I.diagnostics={runnable:Z,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:H,prefix:g}})}s.deleteShader(C),s.deleteShader(T),A=new Ls(s,y),E=oy(s,y)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Kg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var xy=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ic(t),e.set(t,n)),n}},ic=class{constructor(t){this.id=xy++,this.code=t,this.usedTimes=0}};function vy(i,t,e,n,s,r,o){let a=new Mo,l=new nc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,I,O,k){let H=O.fog,Z=k.geometry,G=E.isMeshStandardMaterial?O.environment:null,it=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),W=it&&it.mapping===qo?it.image.height:null,ht=p[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let _t=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Tt=_t!==void 0?_t.length:0,Wt=0;Z.morphAttributes.position!==void 0&&(Wt=1),Z.morphAttributes.normal!==void 0&&(Wt=2),Z.morphAttributes.color!==void 0&&(Wt=3);let ce,J,rt,At;if(ht){let ue=kn[ht];ce=ue.vertexShader,J=ue.fragmentShader}else ce=E.vertexShader,J=E.fragmentShader,l.update(E),rt=l.getVertexShaderID(E),At=l.getFragmentShaderID(E);let at=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),zt=k.isInstancedMesh===!0,Ot=k.isBatchedMesh===!0,se=!!E.map,j=!!E.matcap,st=!!it,L=!!E.aoMap,Lt=!!E.lightMap,et=!!E.bumpMap,Et=!!E.normalMap,lt=!!E.displacementMap,Nt=!!E.emissiveMap,Mt=!!E.metalnessMap,R=!!E.roughnessMap,b=E.anisotropy>0,F=E.clearcoat>0,Y=E.dispersion>0,Q=E.iridescence>0,$=E.sheen>0,Rt=E.transmission>0,pt=b&&!!E.anisotropyMap,bt=F&&!!E.clearcoatMap,Kt=F&&!!E.clearcoatNormalMap,nt=F&&!!E.clearcoatRoughnessMap,St=Q&&!!E.iridescenceMap,kt=Q&&!!E.iridescenceThicknessMap,Bt=$&&!!E.sheenColorMap,wt=$&&!!E.sheenRoughnessMap,ne=!!E.specularMap,$t=!!E.specularColorMap,xe=!!E.specularIntensityMap,D=Rt&&!!E.transmissionMap,mt=Rt&&!!E.thicknessMap,X=!!E.gradientMap,K=!!E.alphaMap,vt=E.alphaTest>0,gt=!!E.alphaHash,Xt=!!E.extensions,Le=wi;E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Le=i.toneMapping);let je={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:ce,fragmentShader:J,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:At,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&k._colorsTexture!==null,instancing:zt,instancingColor:zt&&k.instanceColor!==null,instancingMorph:zt&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:qs,alphaToCoverage:!!E.alphaToCoverage,map:se,matcap:j,envMap:st,envMapMode:st&&it.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:Lt,bumpMap:et,normalMap:Et,displacementMap:u&&lt,emissiveMap:Nt,normalMapObjectSpace:Et&&E.normalMapType===Of,normalMapTangentSpace:Et&&E.normalMapType===Wd,metalnessMap:Mt,roughnessMap:R,anisotropy:b,anisotropyMap:pt,clearcoat:F,clearcoatMap:bt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:nt,dispersion:Y,iridescence:Q,iridescenceMap:St,iridescenceThicknessMap:kt,sheen:$,sheenColorMap:Bt,sheenRoughnessMap:wt,specularMap:ne,specularColorMap:$t,specularIntensityMap:xe,transmission:Rt,transmissionMap:D,thicknessMap:mt,gradientMap:X,opaque:E.transparent===!1&&E.blending===Cs&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:vt,alphaHash:gt,combine:E.combine,mapUv:se&&y(E.map.channel),aoMapUv:L&&y(E.aoMap.channel),lightMapUv:Lt&&y(E.lightMap.channel),bumpMapUv:et&&y(E.bumpMap.channel),normalMapUv:Et&&y(E.normalMap.channel),displacementMapUv:lt&&y(E.displacementMap.channel),emissiveMapUv:Nt&&y(E.emissiveMap.channel),metalnessMapUv:Mt&&y(E.metalnessMap.channel),roughnessMapUv:R&&y(E.roughnessMap.channel),anisotropyMapUv:pt&&y(E.anisotropyMap.channel),clearcoatMapUv:bt&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:wt&&y(E.sheenRoughnessMap.channel),specularMapUv:ne&&y(E.specularMap.channel),specularColorMapUv:$t&&y(E.specularColorMap.channel),specularIntensityMapUv:xe&&y(E.specularIntensityMap.channel),transmissionMapUv:D&&y(E.transmissionMap.channel),thicknessMapUv:mt&&y(E.thicknessMap.channel),alphaMapUv:K&&y(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Et||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(se||K),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ut,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:se&&E.map.isVideoTexture===!0&&re.getTransfer(E.map.colorSpace)===me,decodeVideoTextureEmissive:Nt&&E.emissiveMap.isVideoTexture===!0&&re.getTransfer(E.emissiveMap.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===He,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&E.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let I in E.defines)M.push(I),M.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(_(M,E),v(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){let M=p[E.type],I;if(M){let O=kn[M];I=cp.clone(O.uniforms)}else I=E.uniforms;return I}function C(E,M){let I;for(let O=0,k=h.length;O<k;O++){let H=h[O];if(H.cacheKey===M){I=H,++I.usedTimes;break}}return I===void 0&&(I=new yy(i,M,E,r),h.push(I)),I}function T(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:A}}function _y(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function My(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,p,y,m){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:p,renderOrder:d.renderOrder,z:y,group:m},i[t]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=y,g.group=m),t++,g}function a(d,u,f,p,y,m){let g=o(d,u,f,p,y,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function l(d,u,f,p,y,m){let g=o(d,u,f,p,y,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function c(d,u){e.length>1&&e.sort(d||My),n.length>1&&n.sort(u||gd),s.length>1&&s.sort(u||gd)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function by(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new yd,i.set(n,[o])):s>=r.length?(o=new yd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ey(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Gt};break;case"SpotLight":e={position:new P,direction:new P,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Sy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var wy=0;function Ty(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ay(i){let t=new Ey,e=Sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new le,o=new le;function a(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,_=0,v=0,x=0,C=0,T=0,w=0;c.sort(Ty);for(let E=0,M=c.length;E<M;E++){let I=c[E],O=I.color,k=I.intensity,H=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*k,d+=O.g*k,u+=O.b*k;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],k);w++}else if(I.isDirectionalLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,W=e.get(I);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=G,f++}else if(I.isSpotLight){let G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(O).multiplyScalar(k),G.distance=H,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[y]=G;let it=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,it.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[y]=it.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,n.spotShadow[y]=W,n.spotShadowMap[y]=Z,x++}y++}else if(I.isRectAreaLight){let G=t.get(I);G.color.copy(O).multiplyScalar(k),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let it=I.shadow,W=e.get(I);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,W.shadowCameraNear=it.camera.near,W.shadowCameraFar=it.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=I.shadow.matrix,v++}n.point[p]=G,p++}else if(I.isHemisphereLight){let G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(k),G.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[g]=G,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let A=n.hash;(A.directionalLength!==f||A.pointLength!==p||A.spotLength!==y||A.rectAreaLength!==m||A.hemiLength!==g||A.numDirectionalShadows!==_||A.numPointShadows!==v||A.numSpotShadows!==x||A.numSpotMaps!==C||A.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,A.directionalLength=f,A.pointLength=p,A.spotLength=y,A.rectAreaLength=m,A.hemiLength=g,A.numDirectionalShadows=_,A.numPointShadows=v,A.numSpotShadows=x,A.numSpotMaps=C,A.numLightProbes=w,n.version=wy++)}function l(c,h){let d=0,u=0,f=0,p=0,y=0,m=h.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){let v=c[g];if(v.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let x=n.rectArea[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let x=n.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function xd(i){let t=new Ay(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ry(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new xd(i),t.set(s,[a])):r>=o.length?(a=new xd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var sc=class extends Ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rc=class extends Ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Py=`uniform sampler2D shadow_pass;
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
}`;function Iy(i,t,e){let n=new Ji,s=new tt,r=new tt,o=new ye,a=new sc({depthPacking:kf}),l=new rc,c={},h=e.maxTextureSize,d={[Ai]:an,[an]:Ai,[He]:He},u=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Cy,fragmentShader:Py}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ke;p.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new V(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let g=this.type;this.render=function(T,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Si),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let k=g!==ti&&this.type===ti,H=g===ti&&this.type!==ti;for(let Z=0,G=T.length;Z<G;Z++){let it=T[Z],W=it.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ht=W.getFrameExtents();if(s.multiply(ht),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,W.mapSize.y=r.y)),W.map===null||k===!0||H===!0){let Tt=this.type!==ti?{minFilter:mn,magFilter:mn}:{};W.map!==null&&W.map.dispose(),W.map=new oi(s.x,s.y,Tt),W.map.texture.name=it.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let _t=W.getViewportCount();for(let Tt=0;Tt<_t;Tt++){let Wt=W.getViewport(Tt);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),O.viewport(o),W.updateMatrices(it,Tt),n=W.getFrustum(),x(w,A,W.camera,it,this.type)}W.isPointLightShadow!==!0&&this.type===ti&&_(W,A),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,I)};function _(T,w){let A=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new oi(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,A,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,A,f,y,null)}function v(T,w,A,E){let M=null,I=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=A.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let O=M.uuid,k=w.uuid,H=c[O];H===void 0&&(H={},c[O]=H);let Z=H[k];Z===void 0&&(Z=M.clone(),H[k]=Z,w.addEventListener("dispose",C)),M=Z}if(M.visible=w.visible,M.wireframe=w.wireframe,E===ti?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=i.properties.get(M);O.light=A}return M}function x(T,w,A,E,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ti)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);let k=t.update(T),H=T.material;if(Array.isArray(H)){let Z=k.groups;for(let G=0,it=Z.length;G<it;G++){let W=Z[G],ht=H[W.materialIndex];if(ht&&ht.visible){let _t=v(T,ht,E,M);T.onBeforeShadow(i,T,w,A,k,_t,W),i.renderBufferDirect(A,null,k,_t,T,W),T.onAfterShadow(i,T,w,A,k,_t,W)}}}else if(H.visible){let Z=v(T,H,E,M);T.onBeforeShadow(i,T,w,A,k,Z,null),i.renderBufferDirect(A,null,k,Z,T,null),T.onAfterShadow(i,T,w,A,k,Z,null)}}let O=T.children;for(let k=0,H=O.length;k<H;k++)x(O[k],w,A,E,M)}function C(T){T.target.removeEventListener("dispose",C);for(let A in c){let E=c[A],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var Ly={[ll]:cl,[hl]:fl,[dl]:pl,[Ds]:ul,[cl]:ll,[fl]:hl,[pl]:dl,[ul]:Ds};function Dy(i,t){function e(){let D=!1,mt=new ye,X=null,K=new ye(0,0,0,0);return{setMask:function(vt){X!==vt&&!D&&(i.colorMask(vt,vt,vt,vt),X=vt)},setLocked:function(vt){D=vt},setClear:function(vt,gt,Xt,Le,je){je===!0&&(vt*=Le,gt*=Le,Xt*=Le),mt.set(vt,gt,Xt,Le),K.equals(mt)===!1&&(i.clearColor(vt,gt,Xt,Le),K.copy(mt))},reset:function(){D=!1,X=null,K.set(-1,0,0,0)}}}function n(){let D=!1,mt=!1,X=null,K=null,vt=null;return{setReversed:function(gt){if(mt!==gt){let Xt=t.get("EXT_clip_control");mt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);let Le=vt;vt=null,this.setClear(Le)}mt=gt},getReversed:function(){return mt},setTest:function(gt){gt?at(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(gt){X!==gt&&!D&&(i.depthMask(gt),X=gt)},setFunc:function(gt){if(mt&&(gt=Ly[gt]),K!==gt){switch(gt){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case dl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=gt}},setLocked:function(gt){D=gt},setClear:function(gt){vt!==gt&&(mt&&(gt=1-gt),i.clearDepth(gt),vt=gt)},reset:function(){D=!1,X=null,K=null,vt=null,mt=!1}}}function s(){let D=!1,mt=null,X=null,K=null,vt=null,gt=null,Xt=null,Le=null,je=null;return{setTest:function(ue){D||(ue?at(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(ue){mt!==ue&&!D&&(i.stencilMask(ue),mt=ue)},setFunc:function(ue,Sn,Yn){(X!==ue||K!==Sn||vt!==Yn)&&(i.stencilFunc(ue,Sn,Yn),X=ue,K=Sn,vt=Yn)},setOp:function(ue,Sn,Yn){(gt!==ue||Xt!==Sn||Le!==Yn)&&(i.stencilOp(ue,Sn,Yn),gt=ue,Xt=Sn,Le=Yn)},setLocked:function(ue){D=ue},setClear:function(ue){je!==ue&&(i.clearStencil(ue),je=ue)},reset:function(){D=!1,mt=null,X=null,K=null,vt=null,gt=null,Xt=null,Le=null,je=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],p=null,y=!1,m=null,g=null,_=null,v=null,x=null,C=null,T=null,w=new Gt(0,0,0),A=0,E=!1,M=null,I=null,O=null,k=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,it=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=it>=1):W.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=it>=2);let ht=null,_t={},Tt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),ce=new ye().fromArray(Tt),J=new ye().fromArray(Wt);function rt(D,mt,X,K){let vt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(D,gt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<X;Xt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(mt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return gt}let At={};At[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(Ds),et(!1),Et(bh),at(i.CULL_FACE),L(Si);function at(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ut(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function zt(D,mt){return d[D]!==mt?(i.bindFramebuffer(D,mt),d[D]=mt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ot(D,mt){let X=f,K=!1;if(D){X=u.get(mt),X===void 0&&(X=[],u.set(mt,X));let vt=D.textures;if(X.length!==vt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Xt=vt.length;gt<Xt;gt++)X[gt]=i.COLOR_ATTACHMENT0+gt;X.length=vt.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function se(D){return p!==D?(i.useProgram(D),p=D,!0):!1}let j={[Xi]:i.FUNC_ADD,[cf]:i.FUNC_SUBTRACT,[hf]:i.FUNC_REVERSE_SUBTRACT};j[df]=i.MIN,j[uf]=i.MAX;let st={[ff]:i.ZERO,[pf]:i.ONE,[mf]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[Mf]:i.SRC_ALPHA_SATURATE,[vf]:i.DST_COLOR,[yf]:i.DST_ALPHA,[gf]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[_f]:i.ONE_MINUS_DST_COLOR,[xf]:i.ONE_MINUS_DST_ALPHA,[bf]:i.CONSTANT_COLOR,[Ef]:i.ONE_MINUS_CONSTANT_COLOR,[Sf]:i.CONSTANT_ALPHA,[wf]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,mt,X,K,vt,gt,Xt,Le,je,ue){if(D===Si){y===!0&&(Ut(i.BLEND),y=!1);return}if(y===!1&&(at(i.BLEND),y=!0),D!==lf){if(D!==m||ue!==E){if((g!==Xi||x!==Xi)&&(i.blendEquation(i.FUNC_ADD),g=Xi,x=Xi),ue)switch(D){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFunc(i.ONE,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,v=null,C=null,T=null,w.set(0,0,0),A=0,m=D,E=ue}return}vt=vt||mt,gt=gt||X,Xt=Xt||K,(mt!==g||vt!==x)&&(i.blendEquationSeparate(j[mt],j[vt]),g=mt,x=vt),(X!==_||K!==v||gt!==C||Xt!==T)&&(i.blendFuncSeparate(st[X],st[K],st[gt],st[Xt]),_=X,v=K,C=gt,T=Xt),(Le.equals(w)===!1||je!==A)&&(i.blendColor(Le.r,Le.g,Le.b,je),w.copy(Le),A=je),m=D,E=!1}function Lt(D,mt){D.side===He?Ut(i.CULL_FACE):at(i.CULL_FACE);let X=D.side===an;mt&&(X=!X),et(X),D.blending===Cs&&D.transparent===!1?L(Si):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Et(D){D!==of?(at(i.CULL_FACE),D!==I&&(D===bh?i.cullFace(i.BACK):D===af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),I=D}function lt(D){D!==O&&(G&&i.lineWidth(D),O=D)}function Nt(D,mt,X){D?(at(i.POLYGON_OFFSET_FILL),(k!==mt||H!==X)&&(i.polygonOffset(mt,X),k=mt,H=X)):Ut(i.POLYGON_OFFSET_FILL)}function Mt(D){D?at(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function R(D){D===void 0&&(D=i.TEXTURE0+Z-1),ht!==D&&(i.activeTexture(D),ht=D)}function b(D,mt,X){X===void 0&&(ht===null?X=i.TEXTURE0+Z-1:X=ht);let K=_t[X];K===void 0&&(K={type:void 0,texture:void 0},_t[X]=K),(K.type!==D||K.texture!==mt)&&(ht!==X&&(i.activeTexture(X),ht=X),i.bindTexture(D,mt||At[D]),K.type=D,K.texture=mt)}function F(){let D=_t[ht];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(D){ce.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function wt(D){J.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),J.copy(D))}function ne(D,mt){let X=c.get(mt);X===void 0&&(X=new WeakMap,c.set(mt,X));let K=X.get(D);K===void 0&&(K=i.getUniformBlockIndex(mt,D.name),X.set(D,K))}function $t(D,mt){let K=c.get(mt).get(D);l.get(mt)!==K&&(i.uniformBlockBinding(mt,K,D.__bindingPointIndex),l.set(mt,K))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,_t={},d={},u=new WeakMap,f=[],p=null,y=!1,m=null,g=null,_=null,v=null,x=null,C=null,T=null,w=new Gt(0,0,0),A=0,E=!1,M=null,I=null,O=null,k=null,H=null,ce.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Ut,bindFramebuffer:zt,drawBuffers:Ot,useProgram:se,setBlending:L,setMaterial:Lt,setFlipSided:et,setCullFace:Et,setLineWidth:lt,setPolygonOffset:Nt,setScissorTest:Mt,activeTexture:R,bindTexture:b,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:St,texImage3D:kt,updateUBOMapping:ne,uniformBlockBinding:$t,texStorage2D:Kt,texStorage3D:nt,texSubImage2D:$,texSubImage3D:Rt,compressedTexSubImage2D:pt,compressedTexSubImage3D:bt,scissor:Bt,viewport:wt,reset:xe}}function vd(i,t,e,n){let s=Uy(n);switch(e){case Fd:return i*t;case Bd:return i*t;case zd:return i*t*2;case Fc:return i*t/s.components*s.byteLength;case Hc:return i*t/s.components*s.byteLength;case Vd:return i*t*2/s.components*s.byteLength;case Bc:return i*t*2/s.components*s.byteLength;case Hd:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case zc:return i*t*4/s.components*s.byteLength;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:case Ml:return Math.max(i,16)*Math.max(t,8)/4;case xl:case _l:return Math.max(i,8)*Math.max(t,8)/2;case bl:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fo:case Hl:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gd:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uy(i){switch(i){case ri:case Nd:return{byteLength:1,components:1};case vr:case kd:case Ar:return{byteLength:2,components:1};case kc:case Oc:return{byteLength:2,components:4};case Zi:case Nc:case Hn:return{byteLength:4,components:1};case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ny(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return f?new OffscreenCanvas(R,b):xo("canvas")}function y(R,b,F){let Y=1,Q=Mt(R);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(Y*Q.width),Rt=Math.floor(Y*Q.height);d===void 0&&(d=p($,Rt));let pt=b?p($,Rt):d;return pt.width=$,pt.height=Rt,pt.getContext("2d").drawImage(R,0,0,$,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Rt+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){i.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(R,b,F,Y,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=b;if(b===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),b===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),b===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),b===i.RGBA){let Rt=Q?Yo:re.getTransfer(Y);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=Rt===me?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(R,b){let F;return R?b===null||b===Zi||b===ks?F=i.DEPTH24_STENCIL8:b===Hn?F=i.DEPTH32F_STENCIL8:b===vr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===ks?F=i.DEPTH_COMPONENT24:b===Hn?F=i.DEPTH_COMPONENT32F:b===vr&&(F=i.DEPTH_COMPONENT16),F}function C(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){let b=R.target;b.removeEventListener("dispose",T),A(b),b.isVideoTexture&&h.delete(b)}function w(R){let b=R.target;b.removeEventListener("dispose",w),M(b)}function A(R){let b=n.get(R);if(b.__webglInit===void 0)return;let F=R.source,Y=u.get(F);if(Y){let Q=Y[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(R),Object.keys(Y).length===0&&u.delete(F)}n.remove(R)}function E(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let F=R.source,Y=u.get(F);delete Y[b.__cacheKey],o.memory.textures--}function M(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let Q=0;Q<b.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let F=R.textures;for(let Y=0,Q=F.length;Y<Q;Y++){let $=n.get(F[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(R)}let I=0;function O(){I=0}function k(){let R=I;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function H(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Z(R,b){let F=n.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,R,b);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+b)}function G(R,b){let F=n.get(R);if(R.version>0&&F.__version!==R.version){J(F,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+b)}function it(R,b){let F=n.get(R);if(R.version>0&&F.__version!==R.version){J(F,R,b);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+b)}function W(R,b){let F=n.get(R);if(R.version>0&&F.__version!==R.version){rt(F,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+b)}let ht={[xr]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[yl]:i.MIRRORED_REPEAT},_t={[mn]:i.NEAREST,[Uf]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},Tt={[Ff]:i.NEVER,[Wf]:i.ALWAYS,[Hf]:i.LESS,[Xd]:i.LEQUAL,[Bf]:i.EQUAL,[Gf]:i.GEQUAL,[zf]:i.GREATER,[Vf]:i.NOTEQUAL};function Wt(R,b){if(b.type===Hn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===Sa||b.magFilter===Dr||b.magFilter===$i||b.minFilter===Fn||b.minFilter===Sa||b.minFilter===Dr||b.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ht[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ht[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ht[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,_t[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===mn||b.minFilter!==Dr&&b.minFilter!==$i||b.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ce(R,b){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));let Y=b.source,Q=u.get(Y);Q===void 0&&(Q={},u.set(Y,Q));let $=H(b);if($!==R.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[$].usedTimes++;let Rt=Q[R.__cacheKey];Rt!==void 0&&(Q[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&E(b)),R.__cacheKey=$,R.__webglTexture=Q[$].texture}return F}function J(R,b,F){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=ce(R,b),$=b.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+F);let Rt=n.get($);if($.version!==Rt.__version||Q===!0){e.activeTexture(i.TEXTURE0+F);let pt=re.getPrimaries(re.workingColorSpace),bt=b.colorSpace===bi?null:re.getPrimaries(b.colorSpace),Kt=b.colorSpace===bi||pt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let nt=y(b.image,!1,s.maxTextureSize);nt=Nt(b,nt);let St=r.convert(b.format,b.colorSpace),kt=r.convert(b.type),Bt=v(b.internalFormat,St,kt,b.colorSpace,b.isVideoTexture);Wt(Y,b);let wt,ne=b.mipmaps,$t=b.isVideoTexture!==!0,xe=Rt.__version===void 0||Q===!0,D=$.dataReady,mt=C(b,nt);if(b.isDepthTexture)Bt=x(b.format===Os,b.type),xe&&($t?e.texStorage2D(i.TEXTURE_2D,1,Bt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,nt.width,nt.height,0,St,kt,null));else if(b.isDataTexture)if(ne.length>0){$t&&xe&&e.texStorage2D(i.TEXTURE_2D,mt,Bt,ne[0].width,ne[0].height);for(let X=0,K=ne.length;X<K;X++)wt=ne[X],$t?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,St,kt,wt.data):e.texImage2D(i.TEXTURE_2D,X,Bt,wt.width,wt.height,0,St,kt,wt.data);b.generateMipmaps=!1}else $t?(xe&&e.texStorage2D(i.TEXTURE_2D,mt,Bt,nt.width,nt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,St,kt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,nt.width,nt.height,0,St,kt,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Bt,ne[0].width,ne[0].height,nt.depth);for(let X=0,K=ne.length;X<K;X++)if(wt=ne[X],b.format!==Cn)if(St!==null)if($t){if(D)if(b.layerUpdates.size>0){let vt=vd(wt.width,wt.height,b.format,b.type);for(let gt of b.layerUpdates){let Xt=wt.data.subarray(gt*vt/wt.data.BYTES_PER_ELEMENT,(gt+1)*vt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,gt,wt.width,wt.height,1,St,Xt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,wt.width,wt.height,nt.depth,St,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Bt,wt.width,wt.height,nt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,wt.width,wt.height,nt.depth,St,kt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Bt,wt.width,wt.height,nt.depth,0,St,kt,wt.data)}else{$t&&xe&&e.texStorage2D(i.TEXTURE_2D,mt,Bt,ne[0].width,ne[0].height);for(let X=0,K=ne.length;X<K;X++)wt=ne[X],b.format!==Cn?St!==null?$t?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Bt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,wt.width,wt.height,St,kt,wt.data):e.texImage2D(i.TEXTURE_2D,X,Bt,wt.width,wt.height,0,St,kt,wt.data)}else if(b.isDataArrayTexture)if($t){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Bt,nt.width,nt.height,nt.depth),D)if(b.layerUpdates.size>0){let X=vd(nt.width,nt.height,b.format,b.type);for(let K of b.layerUpdates){let vt=nt.data.subarray(K*X/nt.data.BYTES_PER_ELEMENT,(K+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,St,kt,vt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,St,kt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,nt.width,nt.height,nt.depth,0,St,kt,nt.data);else if(b.isData3DTexture)$t?(xe&&e.texStorage3D(i.TEXTURE_3D,mt,Bt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,St,kt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,nt.width,nt.height,nt.depth,0,St,kt,nt.data);else if(b.isFramebufferTexture){if(xe)if($t)e.texStorage2D(i.TEXTURE_2D,mt,Bt,nt.width,nt.height);else{let X=nt.width,K=nt.height;for(let vt=0;vt<mt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Bt,X,K,0,St,kt,null),X>>=1,K>>=1}}else if(ne.length>0){if($t&&xe){let X=Mt(ne[0]);e.texStorage2D(i.TEXTURE_2D,mt,Bt,X.width,X.height)}for(let X=0,K=ne.length;X<K;X++)wt=ne[X],$t?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,St,kt,wt):e.texImage2D(i.TEXTURE_2D,X,Bt,St,kt,wt);b.generateMipmaps=!1}else if($t){if(xe){let X=Mt(nt);e.texStorage2D(i.TEXTURE_2D,mt,Bt,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,kt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,St,kt,nt);m(b)&&g(Y),Rt.__version=$.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function rt(R,b,F){if(b.image.length!==6)return;let Y=ce(R,b),Q=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);let $=n.get(Q);if(Q.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);let Rt=re.getPrimaries(re.workingColorSpace),pt=b.colorSpace===bi?null:re.getPrimaries(b.colorSpace),bt=b.colorSpace===bi||Rt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,St=[];for(let K=0;K<6;K++)!Kt&&!nt?St[K]=y(b.image[K],!0,s.maxCubemapSize):St[K]=nt?b.image[K].image:b.image[K],St[K]=Nt(b,St[K]);let kt=St[0],Bt=r.convert(b.format,b.colorSpace),wt=r.convert(b.type),ne=v(b.internalFormat,Bt,wt,b.colorSpace),$t=b.isVideoTexture!==!0,xe=$.__version===void 0||Y===!0,D=Q.dataReady,mt=C(b,kt);Wt(i.TEXTURE_CUBE_MAP,b);let X;if(Kt){$t&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ne,kt.width,kt.height);for(let K=0;K<6;K++){X=St[K].mipmaps;for(let vt=0;vt<X.length;vt++){let gt=X[vt];b.format!==Cn?Bt!==null?$t?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,gt.width,gt.height,Bt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,ne,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,gt.width,gt.height,Bt,wt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,ne,gt.width,gt.height,0,Bt,wt,gt.data)}}}else{if(X=b.mipmaps,$t&&xe){X.length>0&&mt++;let K=Mt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ne,K.width,K.height)}for(let K=0;K<6;K++)if(nt){$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St[K].width,St[K].height,Bt,wt,St[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ne,St[K].width,St[K].height,0,Bt,wt,St[K].data);for(let vt=0;vt<X.length;vt++){let Xt=X[vt].image[K].image;$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,Xt.width,Xt.height,Bt,wt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,ne,Xt.width,Xt.height,0,Bt,wt,Xt.data)}}else{$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Bt,wt,St[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ne,Bt,wt,St[K]);for(let vt=0;vt<X.length;vt++){let gt=X[vt];$t?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,Bt,wt,gt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,ne,Bt,wt,gt.image[K])}}}m(b)&&g(i.TEXTURE_CUBE_MAP),$.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function At(R,b,F,Y,Q,$){let Rt=r.convert(F.format,F.colorSpace),pt=r.convert(F.type),bt=v(F.internalFormat,Rt,pt,F.colorSpace),Kt=n.get(b),nt=n.get(F);if(nt.__renderTarget=b,!Kt.__hasExternalTextures){let St=Math.max(1,b.width>>$),kt=Math.max(1,b.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,bt,St,kt,b.depth,0,Rt,pt,null):e.texImage2D(Q,$,bt,St,kt,0,Rt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,nt.__webglTexture,0,et(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,nt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(R,b,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let Y=b.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,$=x(b.stencilBuffer,Q),Rt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=et(b);Et(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,$,b.width,b.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,R)}else{let Y=b.textures;for(let Q=0;Q<Y.length;Q++){let $=Y[Q],Rt=r.convert($.format,$.colorSpace),pt=r.convert($.type),bt=v($.internalFormat,Rt,pt,$.colorSpace),Kt=et(b);F&&Et(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,bt,b.width,b.height):Et(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,bt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,bt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);let Q=Y.__webglTexture,$=et(b);if(b.depthTexture.format===Ps)Et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Os)Et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function zt(R){let b=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=Y}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ut(b.__webglFramebuffer,R)}else if(F){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),at(b.__webglDepthbuffer[Y],R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),at(b.__webglDepthbuffer,R,!1);else{let Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(R,b,F){let Y=n.get(R);b!==void 0&&At(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&zt(R)}function se(R){let b=R.texture,F=n.get(R),Y=n.get(b);R.addEventListener("dispose",w);let Q=R.textures,$=R.isWebGLCubeRenderTarget===!0,Rt=Q.length>1;if(Rt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[pt]=[];for(let bt=0;bt<b.mipmaps.length;bt++)F.__webglFramebuffer[pt][bt]=i.createFramebuffer()}else F.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)F.__webglFramebuffer[pt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let pt=0,bt=Q.length;pt<bt;pt++){let Kt=n.get(Q[pt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Et(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pt=0;pt<Q.length;pt++){let bt=Q[pt];F.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[pt]);let Kt=r.convert(bt.format,bt.colorSpace),nt=r.convert(bt.type),St=v(bt.internalFormat,Kt,nt,bt.colorSpace,R.isXRRenderTarget===!0),kt=et(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,St,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,F.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),at(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)At(F.__webglFramebuffer[pt][bt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt);else At(F.__webglFramebuffer[pt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(b)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let pt=0,bt=Q.length;pt<bt;pt++){let Kt=Q[pt],nt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Wt(i.TEXTURE_2D,Kt),At(F.__webglFramebuffer,R,Kt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(Kt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Y.__webglTexture),Wt(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)At(F.__webglFramebuffer[bt],R,b,i.COLOR_ATTACHMENT0,pt,bt);else At(F.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,pt,0);m(b)&&g(pt),e.unbindTexture()}R.depthBuffer&&zt(R)}function j(R){let b=R.textures;for(let F=0,Y=b.length;F<Y;F++){let Q=b[F];if(m(Q)){let $=_(R),Rt=n.get(Q).__webglTexture;e.bindTexture($,Rt),g($),e.unbindTexture()}}}let st=[],L=[];function Lt(R){if(R.samples>0){if(Et(R)===!1){let b=R.textures,F=R.width,Y=R.height,Q=i.COLOR_BUFFER_BIT,$=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(R),pt=b.length>1;if(pt)for(let bt=0;bt<b.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let bt=0;bt<b.length;bt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);let Kt=n.get(b[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,i.NEAREST),l===!0&&(st.length=0,L.length=0,st.push(i.COLOR_ATTACHMENT0+bt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push($),L.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let bt=0;bt<b.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);let Kt=n.get(b[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function et(R){return Math.min(s.maxSamples,R.samples)}function Et(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function lt(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Nt(R,b){let F=R.colorSpace,Y=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==qs&&F!==bi&&(re.getTransfer(F)===me?(Y!==Cn||Q!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=it,this.setTextureCube=W,this.rebindTextures=Ot,this.setupRenderTarget=se,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Et}function ky(i,t){function e(n,s=bi){let r,o=re.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Od)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return i.BYTE;if(n===kd)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===Nc)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Ar)return i.HALF_FLOAT;if(n===Fd)return i.ALPHA;if(n===Hd)return i.RGB;if(n===Cn)return i.RGBA;if(n===Bd)return i.LUMINANCE;if(n===zd)return i.LUMINANCE_ALPHA;if(n===Ps)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===Fc)return i.RED;if(n===Hc)return i.RED_INTEGER;if(n===Vd)return i.RG;if(n===Bc)return i.RG_INTEGER;if(n===zc)return i.RGBA_INTEGER;if(n===lo||n===co||n===ho||n===uo)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===vl||n===_l||n===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bl||n===El||n===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bl||n===El)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===kl||n===Ol||n===Fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===Hl||n===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gd||n===zl||n===Vl||n===Gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var oc=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ut=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Oy={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Oy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hy=`
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

}`,ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Vn({vertexShader:Fy,fragmentShader:Hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new V(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lc=class extends Ri{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,y=new ac,m=e.getContextAttributes(),g=null,_=null,v=[],x=[],C=new tt,T=null,w=new Je;w.viewport=new ye;let A=new Je;A.viewport=new ye;let E=[w,A],M=new oc,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let rt=v[J];return rt===void 0&&(rt=new mr,v[J]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(J){let rt=v[J];return rt===void 0&&(rt=new mr,v[J]=rt),rt.getGripSpace()},this.getHand=function(J){let rt=v[J];return rt===void 0&&(rt=new mr,v[J]=rt),rt.getHandSpace()};function k(J){let rt=x.indexOf(J.inputSource);if(rt===-1)return;let At=v[rt];At!==void 0&&(At.update(J.inputSource,J.frame,c||o),At.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<v.length;J++){let rt=x[J];rt!==null&&(x[J]=null,v[J].disconnect(rt))}I=null,O=null,y.reset(),t.setRenderTarget(g),f=null,u=null,d=null,s=null,_=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new oi(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,At=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Os:Ps,At=m.stencil?ks:Zi);let Ut={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new oi(u.textureWidth,u.textureHeight,{format:Cn,type:ri,depthTexture:new Ro(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(J){for(let rt=0;rt<J.removed.length;rt++){let At=J.removed[rt],at=x.indexOf(At);at>=0&&(x[at]=null,v[at].disconnect(At))}for(let rt=0;rt<J.added.length;rt++){let At=J.added[rt],at=x.indexOf(At);if(at===-1){for(let zt=0;zt<v.length;zt++)if(zt>=x.length){x.push(At),at=zt;break}else if(x[zt]===null){x[zt]=At,at=zt;break}if(at===-1)break}let Ut=v[at];Ut&&Ut.connect(At)}}let G=new P,it=new P;function W(J,rt,At){G.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(At.matrixWorld);let at=G.distanceTo(it),Ut=rt.projectionMatrix.elements,zt=At.projectionMatrix.elements,Ot=Ut[14]/(Ut[10]-1),se=Ut[14]/(Ut[10]+1),j=(Ut[9]+1)/Ut[5],st=(Ut[9]-1)/Ut[5],L=(Ut[8]-1)/Ut[0],Lt=(zt[8]+1)/zt[0],et=Ot*L,Et=Ot*Lt,lt=at/(-L+Lt),Nt=lt*-L;if(rt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Nt),J.translateZ(lt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ut[10]===-1)J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Mt=Ot+lt,R=se+lt,b=et-Nt,F=Et+(at-Nt),Y=j*se/R*Mt,Q=st*se/R*Mt;J.projectionMatrix.makePerspective(b,F,Y,Q,Mt,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ht(J,rt){rt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(rt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let rt=J.near,At=J.far;y.texture!==null&&(y.depthNear>0&&(rt=y.depthNear),y.depthFar>0&&(At=y.depthFar)),M.near=A.near=w.near=rt,M.far=A.far=w.far=At,(I!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,O=M.far),w.layers.mask=J.layers.mask|2,A.layers.mask=J.layers.mask|4,M.layers.mask=w.layers.mask|A.layers.mask;let at=J.parent,Ut=M.cameras;ht(M,at);for(let zt=0;zt<Ut.length;zt++)ht(Ut[zt],at);Ut.length===2?W(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),_t(J,M,at)};function _t(J,rt,At){At===null?J.matrix.copy(rt.matrixWorld):(J.matrix.copy(At.matrixWorld),J.matrix.invert(),J.matrix.multiply(rt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=yo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let Tt=null;function Wt(J,rt){if(h=rt.getViewerPose(c||o),p=rt,h!==null){let At=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let at=!1;At.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let zt=0;zt<At.length;zt++){let Ot=At[zt],se=null;if(f!==null)se=f.getViewport(Ot);else{let st=d.getViewSubImage(u,Ot);se=st.viewport,zt===0&&(t.setRenderTargetTextures(_,st.colorTexture,u.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(_))}let j=E[zt];j===void 0&&(j=new Je,j.layers.enable(zt),j.viewport=new ye,E[zt]=j),j.matrix.fromArray(Ot.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ot.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(se.x,se.y,se.width,se.height),zt===0&&(M.matrix.copy(j.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(j)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let zt=d.getDepthInformation(At[0]);zt&&zt.isValid&&zt.texture&&y.init(t,zt,s.renderState)}}for(let At=0;At<v.length;At++){let at=x[At],Ut=v[At];at!==null&&Ut!==void 0&&Ut.update(at,rt,c||o)}Tt&&Tt(J,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),p=null}let ce=new Zd;ce.setAnimationLoop(Wt),this.setAnimationLoop=function(J){Tt=J},this.dispose=function(){}}},Gi=new zn,By=new le;function zy(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$d(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,v,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===an&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===an&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=t.get(g),v=_.envMap,x=_.envMapRotation;v&&(m.envMap.value=v,Gi.copy(x),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(Gi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=v*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===an&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let x=v.program;n.uniformBlockBinding(_,x)}function c(_,v){let x=s[_.id];x===void 0&&(p(_),x=h(_),s[_.id]=x,_.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(_,C);let T=t.render.frame;r[_.id]!==T&&(u(_),r[_.id]=T)}function h(_){let v=d();_.__bindingPointIndex=v;let x=i.createBuffer(),C=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let v=s[_.id],x=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,w=x.length;T<w;T++){let A=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,M=A.length;E<M;E++){let I=A[E];if(f(I,T,E,C)===!0){let O=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],H=0;for(let Z=0;Z<k.length;Z++){let G=k[Z],it=y(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+H,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,H),H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,x,C){let T=_.value,w=v+"_"+x;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{let A=C[w];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return C[w]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function p(_){let v=_.uniforms,x=0,C=16;for(let w=0,A=v.length;w<A;w++){let E=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,I=E.length;M<I;M++){let O=E[M],k=Array.isArray(O.value)?O.value:[O.value];for(let H=0,Z=k.length;H<Z;H++){let G=k[H],it=y(G),W=x%C,ht=W%it.boundary,_t=W+ht;x+=ht,_t!==0&&C-_t<it.storage&&(x+=C-_t),O.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=it.storage}}}let T=x%C;return T>0&&(x+=C-T),_.__size=x,_.__cache={},this}function y(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Co=class{constructor(t={}){let{canvas:e=qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),y=new Int32Array(4),m=null,g=null,_=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=wi,this.toneMappingExposure=1;let x=this,C=!1,T=0,w=0,A=null,E=-1,M=null,I=new ye,O=new ye,k=null,H=new Gt(0),Z=0,G=e.width,it=e.height,W=1,ht=null,_t=null,Tt=new ye(0,0,G,it),Wt=new ye(0,0,G,it),ce=!1,J=new Ji,rt=!1,At=!1,at=new le,Ut=new le,zt=new P,Ot=new ye,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function st(){return A===null?W:1}let L=n;function Lt(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),L===null){let U="webgl2";if(L=Lt(U,S),L===null)throw Lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let et,Et,lt,Nt,Mt,R,b,F,Y,Q,$,Rt,pt,bt,Kt,nt,St,kt,Bt,wt,ne,$t,xe,D;function mt(){et=new sg(L),et.init(),$t=new ky(L,et),Et=new j0(L,et,t,$t),lt=new Dy(L,et),Et.reverseDepthBuffer&&u&&lt.buffers.depth.setReversed(!0),Nt=new ag(L),Mt=new _y,R=new Ny(L,et,lt,Mt,Et,$t,Nt),b=new tg(x),F=new ig(x),Y=new pp(L),xe=new J0(L,Y),Q=new rg(L,Y,Nt,xe),$=new cg(L,Q,Y,Nt),Bt=new lg(L,Et,R),nt=new Q0(Mt),Rt=new vy(x,b,F,et,Et,xe,nt),pt=new zy(x,Mt),bt=new by,Kt=new Ry(et),kt=new Z0(x,b,F,lt,$,f,l),St=new Iy(x,$,Et),D=new Vy(L,Nt,Et,lt),wt=new K0(L,et,Nt),ne=new og(L,et,Nt),Nt.programs=Rt.programs,x.capabilities=Et,x.extensions=et,x.properties=Mt,x.renderLists=bt,x.shadowMap=St,x.state=lt,x.info=Nt}mt();let X=new lc(x,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(G,it,!1))},this.getSize=function(S){return S.set(G,it)},this.setSize=function(S,U,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,it=U,e.width=Math.floor(S*W),e.height=Math.floor(U*W),B===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(G*W,it*W).floor()},this.setDrawingBufferSize=function(S,U,B){G=S,it=U,W=B,e.width=Math.floor(S*B),e.height=Math.floor(U*B),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(Tt)},this.setViewport=function(S,U,B,z){S.isVector4?Tt.set(S.x,S.y,S.z,S.w):Tt.set(S,U,B,z),lt.viewport(I.copy(Tt).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(Wt)},this.setScissor=function(S,U,B,z){S.isVector4?Wt.set(S.x,S.y,S.z,S.w):Wt.set(S,U,B,z),lt.scissor(O.copy(Wt).multiplyScalar(W).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(S){lt.setScissorTest(ce=S)},this.setOpaqueSort=function(S){ht=S},this.setTransparentSort=function(S){_t=S},this.getClearColor=function(S){return S.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(S=!0,U=!0,B=!0){let z=0;if(S){let N=!1;if(A!==null){let ot=A.texture.format;N=ot===zc||ot===Bc||ot===Hc}if(N){let ot=A.texture.type,yt=ot===ri||ot===Zi||ot===vr||ot===ks||ot===kc||ot===Oc,Ct=kt.getClearColor(),Pt=kt.getClearAlpha(),Vt=Ct.r,qt=Ct.g,It=Ct.b;yt?(p[0]=Vt,p[1]=qt,p[2]=It,p[3]=Pt,L.clearBufferuiv(L.COLOR,0,p)):(y[0]=Vt,y[1]=qt,y[2]=It,y[3]=Pt,L.clearBufferiv(L.COLOR,0,y))}else z|=L.COLOR_BUFFER_BIT}U&&(z|=L.DEPTH_BUFFER_BIT),B&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),bt.dispose(),Kt.dispose(),Mt.dispose(),b.dispose(),F.dispose(),$.dispose(),xe.dispose(),D.dispose(),Rt.dispose(),X.dispose(),X.removeEventListener("sessionstart",ph),X.removeEventListener("sessionend",mh),Oi.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=Nt.autoReset,U=St.enabled,B=St.autoUpdate,z=St.needsUpdate,N=St.type;mt(),Nt.autoReset=S,St.enabled=U,St.autoUpdate=B,St.needsUpdate=z,St.type=N}function gt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Xt(S){let U=S.target;U.removeEventListener("dispose",Xt),Le(U)}function Le(S){je(S),Mt.remove(S)}function je(S){let U=Mt.get(S).programs;U!==void 0&&(U.forEach(function(B){Rt.releaseProgram(B)}),S.isShaderMaterial&&Rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,B,z,N,ot){U===null&&(U=se);let yt=N.isMesh&&N.matrixWorld.determinant()<0,Ct=nf(S,U,B,z,N);lt.setMaterial(z,yt);let Pt=B.index,Vt=1;if(z.wireframe===!0){if(Pt=Q.getWireframeAttribute(B),Pt===void 0)return;Vt=2}let qt=B.drawRange,It=B.attributes.position,ae=qt.start*Vt,ve=(qt.start+qt.count)*Vt;ot!==null&&(ae=Math.max(ae,ot.start*Vt),ve=Math.min(ve,(ot.start+ot.count)*Vt)),Pt!==null?(ae=Math.max(ae,0),ve=Math.min(ve,Pt.count)):It!=null&&(ae=Math.max(ae,0),ve=Math.min(ve,It.count));let Ee=ve-ae;if(Ee<0||Ee===1/0)return;xe.setup(N,z,Ct,B,Pt);let rn,he=wt;if(Pt!==null&&(rn=Y.get(Pt),he=ne,he.setIndex(rn)),N.isMesh)z.wireframe===!0?(lt.setLineWidth(z.wireframeLinewidth*st()),he.setMode(L.LINES)):he.setMode(L.TRIANGLES);else if(N.isLine){let Dt=z.linewidth;Dt===void 0&&(Dt=1),lt.setLineWidth(Dt*st()),N.isLineSegments?he.setMode(L.LINES):N.isLineLoop?he.setMode(L.LINE_LOOP):he.setMode(L.LINE_STRIP)}else N.isPoints?he.setMode(L.POINTS):N.isSprite&&he.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)he.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))he.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Dt=N._multiDrawStarts,$n=N._multiDrawCounts,de=N._multiDrawCount,wn=Pt?Y.get(Pt).bytesPerElement:1,as=Mt.get(z).currentProgram.getUniforms();for(let un=0;un<de;un++)as.setValue(L,"_gl_DrawID",un),he.render(Dt[un]/wn,$n[un])}else if(N.isInstancedMesh)he.renderInstances(ae,Ee,N.count);else if(B.isInstancedBufferGeometry){let Dt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,$n=Math.min(B.instanceCount,Dt);he.renderInstances(ae,Ee,$n)}else he.render(ae,Ee)};function ue(S,U,B){S.transparent===!0&&S.side===He&&S.forceSinglePass===!1?(S.side=an,S.needsUpdate=!0,Lr(S,U,B),S.side=Ai,S.needsUpdate=!0,Lr(S,U,B),S.side=He):Lr(S,U,B)}this.compile=function(S,U,B=null){B===null&&(B=S),g=Kt.get(B),g.init(U),v.push(g),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights();let z=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ot=N.material;if(ot)if(Array.isArray(ot))for(let yt=0;yt<ot.length;yt++){let Ct=ot[yt];ue(Ct,B,N),z.add(Ct)}else ue(ot,B,N),z.add(ot)}),v.pop(),g=null,z},this.compileAsync=function(S,U,B=null){let z=this.compile(S,U,B);return new Promise(N=>{function ot(){if(z.forEach(function(yt){Mt.get(yt).currentProgram.isReady()&&z.delete(yt)}),z.size===0){N(S);return}setTimeout(ot,10)}et.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Sn=null;function Yn(S){Sn&&Sn(S)}function ph(){Oi.stop()}function mh(){Oi.start()}let Oi=new Zd;Oi.setAnimationLoop(Yn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(S){Sn=S,X.setAnimationLoop(S),S===null?Oi.stop():Oi.start()},X.addEventListener("sessionstart",ph),X.addEventListener("sessionend",mh),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,A),g=Kt.get(S,v.length),g.init(U),v.push(g),Ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(Ut),At=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,At),m=bt.get(S,_.length),m.init(),_.push(m),X.enabled===!0&&X.isPresenting===!0){let ot=x.xr.getDepthSensingMesh();ot!==null&&Ea(ot,U,-1/0,x.sortObjects)}Ea(S,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ht,_t),j=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,j&&kt.addToRenderList(m,S),this.info.render.frame++,rt===!0&&nt.beginShadows();let B=g.state.shadowsArray;St.render(B,S,U),rt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,N=m.transmissive;if(g.setupLights(),U.isArrayCamera){let ot=U.cameras;if(N.length>0)for(let yt=0,Ct=ot.length;yt<Ct;yt++){let Pt=ot[yt];yh(z,N,S,Pt)}j&&kt.render(S);for(let yt=0,Ct=ot.length;yt<Ct;yt++){let Pt=ot[yt];gh(m,S,Pt,Pt.viewport)}}else N.length>0&&yh(z,N,S,U),j&&kt.render(S),gh(m,S,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(x,S,U),xe.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(g=v[v.length-1],rt===!0&&nt.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ea(S,U,B,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||J.intersectsSprite(S)){z&&Ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ut);let yt=$.update(S),Ct=S.material;Ct.visible&&m.push(S,yt,Ct,B,Ot.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||J.intersectsObject(S))){let yt=$.update(S),Ct=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ot.copy(S.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ot.copy(yt.boundingSphere.center)),Ot.applyMatrix4(S.matrixWorld).applyMatrix4(Ut)),Array.isArray(Ct)){let Pt=yt.groups;for(let Vt=0,qt=Pt.length;Vt<qt;Vt++){let It=Pt[Vt],ae=Ct[It.materialIndex];ae&&ae.visible&&m.push(S,yt,ae,B,Ot.z,It)}}else Ct.visible&&m.push(S,yt,Ct,B,Ot.z,null)}}let ot=S.children;for(let yt=0,Ct=ot.length;yt<Ct;yt++)Ea(ot[yt],U,B,z)}function gh(S,U,B,z){let N=S.opaque,ot=S.transmissive,yt=S.transparent;g.setupLightsView(B),rt===!0&&nt.setGlobalState(x.clippingPlanes,B),z&&lt.viewport(I.copy(z)),N.length>0&&Ir(N,U,B),ot.length>0&&Ir(ot,U,B),yt.length>0&&Ir(yt,U,B),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function yh(S,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[z.id]===void 0&&(g.state.transmissionRenderTarget[z.id]=new oi(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ar:ri,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let ot=g.state.transmissionRenderTarget[z.id],yt=z.viewport||I;ot.setSize(yt.z,yt.w);let Ct=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(H),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),j&&kt.render(B);let Pt=x.toneMapping;x.toneMapping=wi;let Vt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),g.setupLightsView(z),rt===!0&&nt.setGlobalState(x.clippingPlanes,z),Ir(S,B,z),R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot),et.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let It=0,ae=U.length;It<ae;It++){let ve=U[It],Ee=ve.object,rn=ve.geometry,he=ve.material,Dt=ve.group;if(he.side===He&&Ee.layers.test(z.layers)){let $n=he.side;he.side=an,he.needsUpdate=!0,xh(Ee,B,z,rn,he,Dt),he.side=$n,he.needsUpdate=!0,qt=!0}}qt===!0&&(R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot))}x.setRenderTarget(Ct),x.setClearColor(H,Z),Vt!==void 0&&(z.viewport=Vt),x.toneMapping=Pt}function Ir(S,U,B){let z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=S.length;N<ot;N++){let yt=S[N],Ct=yt.object,Pt=yt.geometry,Vt=z===null?yt.material:z,qt=yt.group;Ct.layers.test(B.layers)&&xh(Ct,U,B,Pt,Vt,qt)}}function xh(S,U,B,z,N,ot){S.onBeforeRender(x,U,B,z,N,ot),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,U,B,z,S,ot),N.transparent===!0&&N.side===He&&N.forceSinglePass===!1?(N.side=an,N.needsUpdate=!0,x.renderBufferDirect(B,U,z,N,S,ot),N.side=Ai,N.needsUpdate=!0,x.renderBufferDirect(B,U,z,N,S,ot),N.side=He):x.renderBufferDirect(B,U,z,N,S,ot),S.onAfterRender(x,U,B,z,N,ot)}function Lr(S,U,B){U.isScene!==!0&&(U=se);let z=Mt.get(S),N=g.state.lights,ot=g.state.shadowsArray,yt=N.state.version,Ct=Rt.getParameters(S,N.state,ot,U,B),Pt=Rt.getProgramCacheKey(Ct),Vt=z.programs;z.environment=S.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(S.isMeshStandardMaterial?F:b).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Vt===void 0&&(S.addEventListener("dispose",Xt),Vt=new Map,z.programs=Vt);let qt=Vt.get(Pt);if(qt!==void 0){if(z.currentProgram===qt&&z.lightsStateVersion===yt)return _h(S,Ct),qt}else Ct.uniforms=Rt.getUniforms(S),S.onBeforeCompile(Ct,x),qt=Rt.acquireProgram(Ct,Pt),Vt.set(Pt,qt),z.uniforms=Ct.uniforms;let It=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=nt.uniform),_h(S,Ct),z.needsLights=rf(S),z.lightsStateVersion=yt,z.needsLights&&(It.ambientLightColor.value=N.state.ambient,It.lightProbe.value=N.state.probe,It.directionalLights.value=N.state.directional,It.directionalLightShadows.value=N.state.directionalShadow,It.spotLights.value=N.state.spot,It.spotLightShadows.value=N.state.spotShadow,It.rectAreaLights.value=N.state.rectArea,It.ltc_1.value=N.state.rectAreaLTC1,It.ltc_2.value=N.state.rectAreaLTC2,It.pointLights.value=N.state.point,It.pointLightShadows.value=N.state.pointShadow,It.hemisphereLights.value=N.state.hemi,It.directionalShadowMap.value=N.state.directionalShadowMap,It.directionalShadowMatrix.value=N.state.directionalShadowMatrix,It.spotShadowMap.value=N.state.spotShadowMap,It.spotLightMatrix.value=N.state.spotLightMatrix,It.spotLightMap.value=N.state.spotLightMap,It.pointShadowMap.value=N.state.pointShadowMap,It.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=qt,z.uniformsList=null,qt}function vh(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Ls.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function _h(S,U){let B=Mt.get(S);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function nf(S,U,B,z,N){U.isScene!==!0&&(U=se),R.resetTextureUnits();let ot=U.fog,yt=z.isMeshStandardMaterial?U.environment:null,Ct=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qs,Pt=(z.isMeshStandardMaterial?F:b).get(z.envMap||yt),Vt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,qt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),It=!!B.morphAttributes.position,ae=!!B.morphAttributes.normal,ve=!!B.morphAttributes.color,Ee=wi;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ee=x.toneMapping);let rn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,he=rn!==void 0?rn.length:0,Dt=Mt.get(z),$n=g.state.lights;if(rt===!0&&(At===!0||S!==M)){let _n=S===M&&z.id===E;nt.setState(z,S,_n)}let de=!1;z.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==$n.state.version||Dt.outputColorSpace!==Ct||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==Pt||z.fog===!0&&Dt.fog!==ot||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==nt.numPlanes||Dt.numIntersection!==nt.numIntersection)||Dt.vertexAlphas!==Vt||Dt.vertexTangents!==qt||Dt.morphTargets!==It||Dt.morphNormals!==ae||Dt.morphColors!==ve||Dt.toneMapping!==Ee||Dt.morphTargetsCount!==he)&&(de=!0):(de=!0,Dt.__version=z.version);let wn=Dt.currentProgram;de===!0&&(wn=Lr(z,U,N));let as=!1,un=!1,er=!1,Se=wn.getUniforms(),Nn=Dt.uniforms;if(lt.useProgram(wn.program)&&(as=!0,un=!0,er=!0),z.id!==E&&(E=z.id,un=!0),as||M!==S){lt.buffers.depth.getReversed()?(at.copy(S.projectionMatrix),$f(at),Zf(at),Se.setValue(L,"projectionMatrix",at)):Se.setValue(L,"projectionMatrix",S.projectionMatrix),Se.setValue(L,"viewMatrix",S.matrixWorldInverse);let pi=Se.map.cameraPosition;pi!==void 0&&pi.setValue(L,zt.setFromMatrixPosition(S.matrixWorld)),Et.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Se.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,un=!0,er=!0)}if(N.isSkinnedMesh){Se.setOptional(L,N,"bindMatrix"),Se.setOptional(L,N,"bindMatrixInverse");let _n=N.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Se.setValue(L,"boneTexture",_n.boneTexture,R))}N.isBatchedMesh&&(Se.setOptional(L,N,"batchingTexture"),Se.setValue(L,"batchingTexture",N._matricesTexture,R),Se.setOptional(L,N,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",N._indirectTexture,R),Se.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",N._colorsTexture,R));let nr=B.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&Bt.update(N,B,wn),(un||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,Se.setValue(L,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Nn.envMap.value=Pt,Nn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Nn.envMapIntensity.value=U.environmentIntensity),un&&(Se.setValue(L,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&sf(Nn,er),ot&&z.fog===!0&&pt.refreshFogUniforms(Nn,ot),pt.refreshMaterialUniforms(Nn,z,W,it,g.state.transmissionRenderTarget[S.id]),Ls.upload(L,vh(Dt),Nn,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ls.upload(L,vh(Dt),Nn,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Se.setValue(L,"center",N.center),Se.setValue(L,"modelViewMatrix",N.modelViewMatrix),Se.setValue(L,"normalMatrix",N.normalMatrix),Se.setValue(L,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let _n=z.uniformsGroups;for(let pi=0,mi=_n.length;pi<mi;pi++){let Mh=_n[pi];D.update(Mh,wn),D.bind(Mh,wn)}}return wn}function sf(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function rf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,U,B){Mt.get(S.texture).__webglTexture=U,Mt.get(S.depthTexture).__webglTexture=B;let z=Mt.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let B=Mt.get(S);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,B=0){A=S,T=U,w=B;let z=!0,N=null,ot=!1,yt=!1;if(S){let Pt=Mt.get(S);if(Pt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(Pt.__webglFramebuffer===void 0)R.setupRenderTarget(S);else if(Pt.__hasExternalTextures)R.rebindTextures(S,Mt.get(S.texture).__webglTexture,Mt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let It=S.depthTexture;if(Pt.__boundDepthTexture!==It){if(It!==null&&Mt.has(It)&&(S.width!==It.image.width||S.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(S)}}let Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(yt=!0);let qt=Mt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qt[U])?N=qt[U][B]:N=qt[U],ot=!0):S.samples>0&&R.useMultisampledRTT(S)===!1?N=Mt.get(S).__webglMultisampledFramebuffer:Array.isArray(qt)?N=qt[B]:N=qt,I.copy(S.viewport),O.copy(S.scissor),k=S.scissorTest}else I.copy(Tt).multiplyScalar(W).floor(),O.copy(Wt).multiplyScalar(W).floor(),k=ce;if(lt.bindFramebuffer(L.FRAMEBUFFER,N)&&z&&lt.drawBuffers(S,N),lt.viewport(I),lt.scissor(O),lt.setScissorTest(k),ot){let Pt=Mt.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pt.__webglTexture,B)}else if(yt){let Pt=Mt.get(S.texture),Vt=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.__webglTexture,B||0,Vt)}E=-1},this.readRenderTargetPixels=function(S,U,B,z,N,ot,yt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){lt.bindFramebuffer(L.FRAMEBUFFER,Ct);try{let Pt=S.texture,Vt=Pt.format,qt=Pt.type;if(!Et.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&B>=0&&B<=S.height-N&&L.readPixels(U,B,z,N,$t.convert(Vt),$t.convert(qt),ot)}finally{let Pt=A!==null?Mt.get(A).__webglFramebuffer:null;lt.bindFramebuffer(L.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,U,B,z,N,ot,yt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){let Pt=S.texture,Vt=Pt.format,qt=Pt.type;if(!Et.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-z&&B>=0&&B<=S.height-N){lt.bindFramebuffer(L.FRAMEBUFFER,Ct);let It=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.bufferData(L.PIXEL_PACK_BUFFER,ot.byteLength,L.STREAM_READ),L.readPixels(U,B,z,N,$t.convert(Vt),$t.convert(qt),0);let ae=A!==null?Mt.get(A).__webglFramebuffer:null;lt.bindFramebuffer(L.FRAMEBUFFER,ae);let ve=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Yf(L,ve,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ot),L.deleteBuffer(It),L.deleteSync(ve),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,B=0){S.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let z=Math.pow(2,-B),N=Math.floor(S.image.width*z),ot=Math.floor(S.image.height*z),yt=U!==null?U.x:0,Ct=U!==null?U.y:0;R.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,yt,Ct,N,ot),lt.unbindTexture()},this.copyTextureToTexture=function(S,U,B=null,z=null,N=0){S.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let ot,yt,Ct,Pt,Vt,qt,It,ae,ve,Ee=S.isCompressedTexture?S.mipmaps[N]:S.image;B!==null?(ot=B.max.x-B.min.x,yt=B.max.y-B.min.y,Ct=B.isBox3?B.max.z-B.min.z:1,Pt=B.min.x,Vt=B.min.y,qt=B.isBox3?B.min.z:0):(ot=Ee.width,yt=Ee.height,Ct=Ee.depth||1,Pt=0,Vt=0,qt=0),z!==null?(It=z.x,ae=z.y,ve=z.z):(It=0,ae=0,ve=0);let rn=$t.convert(U.format),he=$t.convert(U.type),Dt;U.isData3DTexture?(R.setTexture3D(U,0),Dt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Dt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Dt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let $n=L.getParameter(L.UNPACK_ROW_LENGTH),de=L.getParameter(L.UNPACK_IMAGE_HEIGHT),wn=L.getParameter(L.UNPACK_SKIP_PIXELS),as=L.getParameter(L.UNPACK_SKIP_ROWS),un=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ee.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ee.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);let er=S.isDataArrayTexture||S.isData3DTexture,Se=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Nn=Mt.get(S),nr=Mt.get(U),_n=Mt.get(Nn.__renderTarget),pi=Mt.get(nr.__renderTarget);lt.bindFramebuffer(L.READ_FRAMEBUFFER,_n.__webglFramebuffer),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let mi=0;mi<Ct;mi++)er&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(S).__webglTexture,N,qt+mi),S.isDepthTexture?(Se&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(U).__webglTexture,N,ve+mi),L.blitFramebuffer(Pt,Vt,ot,yt,It,ae,ot,yt,L.DEPTH_BUFFER_BIT,L.NEAREST)):Se?L.copyTexSubImage3D(Dt,N,It,ae,ve+mi,Pt,Vt,ot,yt):L.copyTexSubImage2D(Dt,N,It,ae,ve+mi,Pt,Vt,ot,yt);lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Se?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Dt,N,It,ae,ve,ot,yt,Ct,rn,he,Ee.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Dt,N,It,ae,ve,ot,yt,Ct,rn,Ee.data):L.texSubImage3D(Dt,N,It,ae,ve,ot,yt,Ct,rn,he,Ee):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,It,ae,ot,yt,rn,he,Ee.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,It,ae,Ee.width,Ee.height,rn,Ee.data):L.texSubImage2D(L.TEXTURE_2D,N,It,ae,ot,yt,rn,he,Ee);L.pixelStorei(L.UNPACK_ROW_LENGTH,$n),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wn),L.pixelStorei(L.UNPACK_SKIP_ROWS,as),L.pixelStorei(L.UNPACK_SKIP_IMAGES,un),N===0&&U.generateMipmaps&&L.generateMipmap(Dt),lt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,B=null,z=null,N=0){return S.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,B,z,N)},this.initRenderTarget=function(S){Mt.get(S).__webglFramebuffer===void 0&&R.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),lt.unbindTexture()},this.resetState=function(){T=0,w=0,A=null,lt.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}},Hs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Bs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Po=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},cc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new P,Io=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_r=class extends Ci{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bs,ar=new P,Es=new P,Ss=new P,ws=new tt,lr=new tt,tu=new le,to=new P,cr=new P,eo=new P,_d=new tt,tl=new tt,Md=new tt,Lo=class extends Xe{constructor(t=new _r){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new Ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cc(e,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Io(n,3,0,!1)),bs.setAttribute("uv",new Io(n,2,3,!1))}this.geometry=bs,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ss.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;no(to.set(-.5,-.5,0),Ss,o,Es,s,r),no(cr.set(.5,-.5,0),Ss,o,Es,s,r),no(eo.set(.5,.5,0),Ss,o,Es,s,r),_d.set(0,0),tl.set(1,0),Md.set(1,1);let a=t.ray.intersectTriangle(to,cr,eo,!1,ar);if(a===null&&(no(cr.set(-.5,.5,0),Ss,o,Es,s,r),tl.set(0,1),a=t.ray.intersectTriangle(to,eo,cr,!1,ar),a===null))return;let l=t.ray.origin.distanceTo(ar);l<t.near||l>t.far||e.push({distance:l,point:ar.clone(),uv:Ei.getInterpolation(ar,to,cr,eo,_d,tl,Md,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function no(i,t,e,n,s,r){ws.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(lr.x=r*ws.x-s*ws.y,lr.y=s*ws.x+r*ws.y):lr.copy(ws),i.copy(t),i.x+=lr.x,i.y+=lr.y,i.applyMatrix4(tu)}var hc=class extends cn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=mn,h=mn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Do=class extends ln{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new le,bd=new le,io=[],Ed=new ai,Gy=new le,hr=new V,dr=new li,Uo=class extends V{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Do(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),Ed.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Ed)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),dr.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),t.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),bd.multiplyMatrices(n,Ts),hr.matrixWorld=bd,hr.raycast(t,io);for(let o=0,a=io.length;o<a;o++){let l=io[o];l.instanceId=r,l.object=this,e.push(l)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Do(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hc(new Float32Array(s*this.count),s,this.count,Fc,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var zs=class extends cn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new tt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],o=[],a=new P,l=new le;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Mr=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dc=class extends Mr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var so=new P,el=new Gc,nl=new Gc,il=new Gc,uc=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(so.subVectors(s[0],s[1]).add(s[0]),c=so);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(so.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=so),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),el.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,y,m),nl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,y,m),il.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,y,m)}else this.curveType==="catmullrom"&&(el.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),nl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),il.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(el.calc(l),nl.calc(l),il.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Sd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Wy(i,t){let e=1-i;return e*e*t}function Xy(i,t){return 2*(1-i)*i*t}function qy(i,t){return i*i*t}function gr(i,t,e,n){return Wy(i,t)+Xy(i,e)+qy(i,n)}function Yy(i,t){let e=1-i;return e*e*e*t}function $y(i,t){let e=1-i;return 3*e*e*i*t}function Zy(i,t){return 3*(1-i)*i*i*t}function Jy(i,t){return i*i*i*t}function yr(i,t,e,n,s){return Yy(i,t)+$y(i,e)+Zy(i,n)+Jy(i,s)}var No=class extends bn{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fc=class extends bn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y),yr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ko=class extends bn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pc=class extends bn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends bn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vs=class extends bn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y),gr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Sd(a,l.x,c.x,h.x,d.x),Sd(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},Ho=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:uc,CubicBezierCurve:No,CubicBezierCurve3:fc,EllipseCurve:Mr,LineCurve:ko,LineCurve3:pc,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:Vs,SplineCurve:Fo}),mc=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ho[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ho[s.type]().fromJSON(s))}return this}},ci=class extends mc{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ko(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Oo(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new No(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Mr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},br=class i extends Ke{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ze(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new P,u=new tt,f=new P,p=new P,y=new P,m=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-m,f.z=g*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(p)}for(let _=0;_<=e;_++){let v=n+_*h*s,x=Math.sin(v),C=Math.cos(v);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*x,d.y=t[T].y,d.z=t[T].x*C,o.push(d.x,d.y,d.z),u.x=_/e,u.y=T/(t.length-1),a.push(u.x,u.y);let w=l[3*T+0]*x,A=l[3*T+1],E=l[3*T+0]*C;c.push(w,A,E)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let x=v+_*t.length,C=x,T=x+t.length,w=x+t.length+1,A=x+1;r.push(C,T,A),r.push(w,A,T)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},En=class i extends br{constructor(t=1,e=1,n=4,s=8){let r=new ci;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},hi=class i extends Ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new P,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},oe=class i extends Ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,y=[],m=n/2,g=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(f,2));function _(){let x=new P,C=new P,T=0,w=(e-t)/n;for(let A=0;A<=r;A++){let E=[],M=A/r,I=M*(e-t)+t;for(let O=0;O<=s;O++){let k=O/s,H=k*l+a,Z=Math.sin(H),G=Math.cos(H);C.x=I*Z,C.y=-M*n+m,C.z=I*G,d.push(C.x,C.y,C.z),x.set(Z,w,G).normalize(),u.push(x.x,x.y,x.z),f.push(k,1-M),E.push(p++)}y.push(E)}for(let A=0;A<s;A++)for(let E=0;E<r;E++){let M=y[E][A],I=y[E+1][A],O=y[E+1][A+1],k=y[E][A+1];(t>0||E!==0)&&(h.push(M,I,k),T+=3),(e>0||E!==r-1)&&(h.push(I,O,k),T+=3)}c.addGroup(g,T,0),g+=T}function v(x){let C=p,T=new tt,w=new P,A=0,E=x===!0?t:e,M=x===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),p++;let I=p;for(let O=0;O<=s;O++){let H=O/s*l+a,Z=Math.cos(H),G=Math.sin(H);w.x=E*G,w.y=m*M,w.z=E*Z,d.push(w.x,w.y,w.z),u.push(0,M,0),T.x=Z*.5+.5,T.y=G*.5*M+.5,f.push(T.x,T.y),p++}for(let O=0;O<s;O++){let k=C+O,H=I+O;x===!0?h.push(H,H+1,k):h.push(H+1,H,k),A+=3}c.addGroup(g,A,x===!0?1:2),g+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pn=class i extends oe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gc=class i extends Ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new P,x=new P,C=new P;for(let T=0;T<e.length;T+=3)f(e[T+0],v),f(e[T+1],x),f(e[T+2],C),l(v,x,C,_)}function l(_,v,x,C){let T=C+1,w=[];for(let A=0;A<=T;A++){w[A]=[];let E=_.clone().lerp(x,A/T),M=v.clone().lerp(x,A/T),I=T-A;for(let O=0;O<=I;O++)O===0&&A===T?w[A][O]=E:w[A][O]=E.clone().lerp(M,O/I)}for(let A=0;A<T;A++)for(let E=0;E<2*(T-A)-1;E++){let M=Math.floor(E/2);E%2===0?(u(w[A][M+1]),u(w[A+1][M]),u(w[A][M])):(u(w[A][M+1]),u(w[A+1][M+1]),u(w[A+1][M]))}}function c(_){let v=new P;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(_),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let _=new P;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let x=m(_)/2/Math.PI+.5,C=g(_)/Math.PI+.5;o.push(x,1-C)}p(),d()}function d(){for(let _=0;_<o.length;_+=6){let v=o[_+0],x=o[_+2],C=o[_+4],T=Math.max(v,x,C),w=Math.min(v,x,C);T>.9&&w<.1&&(v<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,v){let x=_*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function p(){let _=new P,v=new P,x=new P,C=new P,T=new tt,w=new tt,A=new tt;for(let E=0,M=0;E<r.length;E+=9,M+=6){_.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),T.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),C.copy(_).add(v).add(x).divideScalar(3);let I=m(C);y(T,M+0,_,I),y(w,M+2,v,I),y(A,M+4,x,I)}}function y(_,v,x,C){C<0&&_.x===1&&(o[v]=_.x-1),x.x===0&&x.z===0&&(o[v]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Bo=class i extends gc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Gn=class extends ci{constructor(t){super(t),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ci().fromJSON(s))}return this}},Ky={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=eu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=nx(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)d=i[p],u=i[p+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Er(r,o,e,a,l,f,0),o}};function eu(i,t,e,n,s){let r,o;if(s===fx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=wd(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=wd(r,i[r],i[r+1],o);return o&&Zo(o,o.next)&&(wr(o),o=o.next),o}function Ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zo(e,e.next)||Ie(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Er(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ax(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Qy(i,n,s,r):jy(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),wr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tx(Ki(i),t,e),Er(i,t,e,n,s,r,2)):o===2&&ex(i,t,e,n,s,r):Er(Ki(i),t,e,n,s,r,1);break}}}function jy(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Rs(s,a,r,l,o,c,p.x,p.y)&&Ie(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Qy(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<d?h<u?h:u:d<u?d:u,y=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,g=yc(f,p,t,e,n),_=yc(y,m,t,e,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=g&&x&&x.z<=_;){if(v.x>=f&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Rs(a,h,l,d,c,u,v.x,v.y)&&Ie(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=y&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Rs(a,h,l,d,c,u,x.x,x.y)&&Ie(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Rs(a,h,l,d,c,u,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=y&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Rs(a,h,l,d,c,u,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Zo(s,r)&&nu(s,n,n.next,r)&&Sr(s,r)&&Sr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),wr(n),wr(n.next),n=i=r),n=n.next}while(n!==i);return Ki(n)}function ex(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hx(o,a)){let l=iu(o,a);o=Ki(o,o.next),l=Ki(l,l.next),Er(o,t,e,n,s,r,0),Er(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nx(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=eu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(cx(c));for(s.sort(ix),r=0;r<s.length;r++)e=sx(s[r],e);return e}function ix(i,t){return i.x-t.x}function sx(i,t){let e=rx(i,t);if(!e)return t;let n=iu(e,i);return Ki(n,n.next),Ki(e,e.next)}function rx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Rs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Sr(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&ox(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function ox(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function ax(i,t,e,n){let s=i;do s.z===0&&(s.z=yc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lx(s)}function lx(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function yc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Rs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function hx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dx(i,t)&&(Sr(i,t)&&Sr(t,i)&&ux(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||Zo(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zo(i,t){return i.x===t.x&&i.y===t.y}function nu(i,t,e,n){let s=oo(Ie(i,t,e)),r=oo(Ie(i,t,n)),o=oo(Ie(e,n,i)),a=oo(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&ro(i,e,t)||r===0&&ro(i,n,t)||o===0&&ro(e,i,n)||a===0&&ro(e,t,n))}function ro(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function oo(i){return i>0?1:i<0?-1:0}function dx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&nu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Sr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function ux(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function iu(i,t){let e=new xc(i.i,i.x,i.y),n=new xc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wd(i,t,e,n){let s=new xc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ti=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Td(t),Ad(n,t);let o=t.length;e.forEach(Td);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ad(n,e[l]);let a=Ky.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Td(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ad(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gs=class i extends Ke{constructor(t=new Gn([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:px,v,x=!1,C,T,w,A;g&&(v=g.getSpacedPoints(h),x=!0,u=!1,C=g.computeFrenetFrames(h,!1),T=new P,w=new P,A=new P),u||(m=0,f=0,p=0,y=0);let E=a.extractPoints(c),M=E.shape,I=E.holes;if(!Ti.isClockWise(M)){M=M.reverse();for(let j=0,st=I.length;j<st;j++){let L=I[j];Ti.isClockWise(L)&&(I[j]=L.reverse())}}let k=Ti.triangulateShape(M,I),H=M;for(let j=0,st=I.length;j<st;j++){let L=I[j];M=M.concat(L)}function Z(j,st,L){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(st,L)}let G=M.length,it=k.length;function W(j,st,L){let Lt,et,Et,lt=j.x-st.x,Nt=j.y-st.y,Mt=L.x-j.x,R=L.y-j.y,b=lt*lt+Nt*Nt,F=lt*R-Nt*Mt;if(Math.abs(F)>Number.EPSILON){let Y=Math.sqrt(b),Q=Math.sqrt(Mt*Mt+R*R),$=st.x-Nt/Y,Rt=st.y+lt/Y,pt=L.x-R/Q,bt=L.y+Mt/Q,Kt=((pt-$)*R-(bt-Rt)*Mt)/(lt*R-Nt*Mt);Lt=$+lt*Kt-j.x,et=Rt+Nt*Kt-j.y;let nt=Lt*Lt+et*et;if(nt<=2)return new tt(Lt,et);Et=Math.sqrt(nt/2)}else{let Y=!1;lt>Number.EPSILON?Mt>Number.EPSILON&&(Y=!0):lt<-Number.EPSILON?Mt<-Number.EPSILON&&(Y=!0):Math.sign(Nt)===Math.sign(R)&&(Y=!0),Y?(Lt=-Nt,et=lt,Et=Math.sqrt(b)):(Lt=lt,et=Nt,Et=Math.sqrt(b/2))}return new tt(Lt/Et,et/Et)}let ht=[];for(let j=0,st=H.length,L=st-1,Lt=j+1;j<st;j++,L++,Lt++)L===st&&(L=0),Lt===st&&(Lt=0),ht[j]=W(H[j],H[L],H[Lt]);let _t=[],Tt,Wt=ht.concat();for(let j=0,st=I.length;j<st;j++){let L=I[j];Tt=[];for(let Lt=0,et=L.length,Et=et-1,lt=Lt+1;Lt<et;Lt++,Et++,lt++)Et===et&&(Et=0),lt===et&&(lt=0),Tt[Lt]=W(L[Lt],L[Et],L[lt]);_t.push(Tt),Wt=Wt.concat(Tt)}for(let j=0;j<m;j++){let st=j/m,L=f*Math.cos(st*Math.PI/2),Lt=p*Math.sin(st*Math.PI/2)+y;for(let et=0,Et=H.length;et<Et;et++){let lt=Z(H[et],ht[et],Lt);at(lt.x,lt.y,-L)}for(let et=0,Et=I.length;et<Et;et++){let lt=I[et];Tt=_t[et];for(let Nt=0,Mt=lt.length;Nt<Mt;Nt++){let R=Z(lt[Nt],Tt[Nt],Lt);at(R.x,R.y,-L)}}}let ce=p+y;for(let j=0;j<G;j++){let st=u?Z(M[j],Wt[j],ce):M[j];x?(w.copy(C.normals[0]).multiplyScalar(st.x),T.copy(C.binormals[0]).multiplyScalar(st.y),A.copy(v[0]).add(w).add(T),at(A.x,A.y,A.z)):at(st.x,st.y,0)}for(let j=1;j<=h;j++)for(let st=0;st<G;st++){let L=u?Z(M[st],Wt[st],ce):M[st];x?(w.copy(C.normals[j]).multiplyScalar(L.x),T.copy(C.binormals[j]).multiplyScalar(L.y),A.copy(v[j]).add(w).add(T),at(A.x,A.y,A.z)):at(L.x,L.y,d/h*j)}for(let j=m-1;j>=0;j--){let st=j/m,L=f*Math.cos(st*Math.PI/2),Lt=p*Math.sin(st*Math.PI/2)+y;for(let et=0,Et=H.length;et<Et;et++){let lt=Z(H[et],ht[et],Lt);at(lt.x,lt.y,d+L)}for(let et=0,Et=I.length;et<Et;et++){let lt=I[et];Tt=_t[et];for(let Nt=0,Mt=lt.length;Nt<Mt;Nt++){let R=Z(lt[Nt],Tt[Nt],Lt);x?at(R.x,R.y+v[h-1].y,v[h-1].x+L):at(R.x,R.y,d+L)}}}J(),rt();function J(){let j=s.length/3;if(u){let st=0,L=G*st;for(let Lt=0;Lt<it;Lt++){let et=k[Lt];Ut(et[2]+L,et[1]+L,et[0]+L)}st=h+m*2,L=G*st;for(let Lt=0;Lt<it;Lt++){let et=k[Lt];Ut(et[0]+L,et[1]+L,et[2]+L)}}else{for(let st=0;st<it;st++){let L=k[st];Ut(L[2],L[1],L[0])}for(let st=0;st<it;st++){let L=k[st];Ut(L[0]+G*h,L[1]+G*h,L[2]+G*h)}}n.addGroup(j,s.length/3-j,0)}function rt(){let j=s.length/3,st=0;At(H,st),st+=H.length;for(let L=0,Lt=I.length;L<Lt;L++){let et=I[L];At(et,st),st+=et.length}n.addGroup(j,s.length/3-j,1)}function At(j,st){let L=j.length;for(;--L>=0;){let Lt=L,et=L-1;et<0&&(et=j.length-1);for(let Et=0,lt=h+m*2;Et<lt;Et++){let Nt=G*Et,Mt=G*(Et+1),R=st+Lt+Nt,b=st+et+Nt,F=st+et+Mt,Y=st+Lt+Mt;zt(R,b,F,Y)}}}function at(j,st,L){l.push(j),l.push(st),l.push(L)}function Ut(j,st,L){Ot(j),Ot(st),Ot(L);let Lt=s.length/3,et=_.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);se(et[0]),se(et[1]),se(et[2])}function zt(j,st,L,Lt){Ot(j),Ot(st),Ot(Lt),Ot(st),Ot(L),Ot(Lt);let et=s.length/3,Et=_.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);se(Et[0]),se(Et[1]),se(Et[3]),se(Et[1]),se(Et[2]),se(Et[3])}function Ot(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function se(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ho[s.type]().fromJSON(s)),new i(n,t.options)}},px={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new tt(r,o),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],y=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new tt(o,1-l),new tt(c,1-d),new tt(u,1-p),new tt(y,1-g)]:[new tt(a,1-l),new tt(h,1-d),new tt(f,1-p),new tt(m,1-g)]}};function mx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var zo=class i extends Ke{constructor(t=new Gn([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;Ti.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let _=p[m];Ti.isClockWise(_)===!0&&(p[m]=_.reverse())}let y=Ti.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let _=p[m];f=f.concat(_)}for(let m=0,g=f.length;m<g;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,g=y.length;m<g;m++){let _=y[m],v=_[0]+d,x=_[1]+d,C=_[2]+d;n.push(v,x,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return gx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function gx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ee=class i extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],p=[],y=[],m=[];for(let g=0;g<=n;g++){let _=[],v=g/n,x=0;g===0&&o===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let T=C/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),p.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+x,1-v),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let v=h[g][_+1],x=h[g][_],C=h[g+1][_],T=h[g+1][_+1];(g!==0||o>0)&&f.push(v,x,T),(g!==n-1||l<Math.PI)&&f.push(x,C,T)}this.setIndex(f),this.setAttribute("position",new te(p,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gn=class i extends Ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,d=new P,u=new P;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let y=p/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let y=(s+1)*f+p-1,m=(s+1)*(f-1)+p-1,g=(s+1)*(f-1)+p,_=(s+1)*f+p;o.push(y,m,_),o.push(m,g,_)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Vo=class i extends Ke{constructor(t=new Vs(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new tt,h=new P,d=[],u=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(f,2));function y(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),_(),g()}function m(v){h=t.getPointAt(v/e,h);let x=o.normals[v],C=o.binormals[v];for(let T=0;T<=s;T++){let w=T/s*Math.PI*2,A=Math.sin(w),E=-Math.cos(w);l.x=E*x.x+A*C.x,l.y=E*x.y+A*C.y,l.z=E*x.z+A*C.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){let C=(s+1)*(v-1)+(x-1),T=(s+1)*v+(x-1),w=(s+1)*v+x,A=(s+1)*(v-1)+x;p.push(C,T,A),p.push(T,w,A)}}function _(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ho[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ct=class extends Ci{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wd,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ao(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ws=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends Ws{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=t,a=2*e-n;break;case Ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:o=t,l=2*n-e;break;case Ah:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),y=p*p,m=y*p,g=-u*m+2*u*y-u*p,_=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*p+1,v=(-1-f)*m+(1.5+f)*y+.5*p,x=f*m-f*y;for(let C=0;C!==a;++C)r[C]=g*o[h+C]+_*o[c+C]+v*o[l+C]+x*o[d+C];return r}},_c=class extends Ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Mc=class extends Ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},In=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ao(e,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ao(t.times,Array),values:ao(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case Wl:e=this.InterpolantFactoryMethodLinear;break;case wa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return wa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&yx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let y=e[d+p];if(y!==e[u+p]||y!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Wl;var ji=class extends In{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=mo;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends In{};bc.prototype.ValueTypeName="color";var Ec=class extends In{};Ec.prototype.ValueTypeName="number";var Sc=class extends Ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Bn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Go=class extends In{InterpolantFactoryMethodLinear(t){return new Sc(this.times,this.values,this.getValueSize(),t)}};Go.prototype.ValueTypeName="quaternion";Go.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends In{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=mo;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends In{};wc.prototype.ValueTypeName="vector";var Tc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},xx=new Tc,Ac=class{constructor(t){this.manager=t!==void 0?t:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Pi=class extends ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},sl=new le,Rd=new P,Cd=new P,Tr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Rd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rd),Cd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cd),e.updateMatrixWorld(),sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rc=class extends Tr{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=yo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Xs=class extends ts{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Pd=new le,ur=new P,rl=new P,Cc=class extends Tr{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(ur),rl.copy(n.position),rl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(rl),n.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),Pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd)}},De=class extends ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Pc=class extends Tr{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wo=class extends ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Pc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ii=class extends ts{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Id(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Id();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Id(){return performance.now()}var Wc="\\[\\]\\.:\\/",vx=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",_x="[^"+Wc.replace("\\.","")+"]",Mx=/((?:WC+[\/:])*)/.source.replace("WC",Xc),bx=/(WCOD+)?/.source.replace("WCOD",_x),Ex=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),Sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),wx=new RegExp("^"+Mx+bx+Ex+Sx+"$"),Tx=["material","materials","bones","map"],Ic=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vx,"")}static parseTrackName(t){let e=wx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Ic;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);var qe=(i,t,e)=>Math.max(t,Math.min(e,i)),Be=(i,t,e)=>i+(t-i)*e,hn=(i,t,e,n)=>Be(i,t,1-Math.exp(-e*n)),$s=(i=0,t=1)=>i+Math.random()*(t-i);function we(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function su(i,t){let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}var q=(i,t=document)=>t.querySelector(i),Jo=(i,t=document)=>[...t.querySelectorAll(i)];function Jt(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var dn=i=>new Promise(t=>setTimeout(t,i));function Li(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var ru=()=>typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;var es={linear:i=>i,in:i=>i*i*i,out:i=>1-Math.pow(1-i,3),inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,sine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),outElastic:i=>i===0||i===1?i:Math.pow(2,-10*i)*Math.sin((i*10-.75)*(2*Math.PI/3))+1},Ko=class{constructor(){this.time=0,this.waits=[],this.tweens=[],this.skipping=!1}reset(){this.waits=[],this.tweens=[],this.skipping=!1}update(t){if(this.time+=t,this.waits.length){let e=[];this.waits=this.waits.filter(n=>n.t<=this.time||n.cond&&n.cond()?(e.push(n),!1):!0);for(let n of e)n.resolve()}if(this.tweens.length){let e=[];for(let n of this.tweens){n.t+=t;let s=Math.min(1,n.t/n.d);n.fn(n.ease(s)),s>=1&&e.push(n)}if(e.length){this.tweens=this.tweens.filter(n=>!e.includes(n));for(let n of e)n.resolve()}}}wait(t){return this.skipping||t<=0?Promise.resolve():new Promise(e=>this.waits.push({t:this.time+t,resolve:e}))}until(t){return t()?Promise.resolve():new Promise(e=>this.waits.push({t:1/0,cond:t,resolve:e}))}tween(t,e,n=es.inOut){return this.skipping||t<=0?(e(1),Promise.resolve()):(e(0),new Promise(s=>this.tweens.push({t:0,d:t,fn:e,ease:n,resolve:s})))}skipAll(){this.skipping=!0;let t=this.tweens;this.tweens=[];for(let n of t)n.fn(1),n.resolve();let e=this.waits.filter(n=>!n.cond);this.waits=this.waits.filter(n=>n.cond);for(let n of e)n.resolve()}};var jo=class{constructor(t){this.canvas=t,this.down=new Set,this.pressed=new Set,this.mdx=0,this.mdy=0,this.locked=!1,this.isTouch=ru(),this.stick={x:0,y:0},this.onLockChange=null,this.onKey=null,addEventListener("keydown",e=>{e.repeat||(this.down.add(e.code),this.pressed.add(e.code),this.onKey?.(e),this.locked&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.down.delete(e.code)),addEventListener("blur",()=>this.down.clear()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.onLockChange?.(this.locked)}),addEventListener("mousemove",e=>{this.locked&&(this.mdx+=qe(e.movementX,-200,200),this.mdy+=qe(e.movementY,-200,200))}),t.addEventListener("mousedown",e=>{this.pressed.add("Mouse"+e.button),this.down.add("Mouse"+e.button)}),addEventListener("mouseup",e=>this.down.delete("Mouse"+e.button)),this.isTouch&&this._setupTouch()}requestLock(){if(!(this.isTouch||this.locked))try{let t=this.canvas.requestPointerLock?.();t&&t.catch&&t.catch(()=>{})}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}isDown(...t){return t.some(e=>this.down.has(e))}wasPressed(...t){return t.some(e=>this.pressed.has(e))}endFrame(){this.pressed.clear(),this.mdx=0,this.mdy=0}moveAxis(){let t=0,e=0;this.isDown("KeyW","ArrowUp")&&(e+=1),this.isDown("KeyS","ArrowDown")&&(e-=1),this.isDown("KeyD","ArrowRight")&&(t+=1),this.isDown("KeyA","ArrowLeft")&&(t-=1),t+=this.stick.x,e+=-this.stick.y;let n=Math.hypot(t,e);return n>1&&(t/=n,e/=n),{x:t,z:e}}showTouch(t){this.touchRoot&&(this.touchRoot.dataset.mode=t||"off")}_setupTouch(){let t=document.getElementById("touch");if(!t)return;this.touchRoot=t;let e=t.querySelector(".stick"),n=t.querySelector(".knob"),s=null,r=null,o=0,a=0,l=0,c=0,h=null,d=p=>{let y=t.dataset.mode;for(let m of p.changedTouches)if(!m.target.closest(".tbtn")){if(y==="runner"){h={id:m.identifier,x:m.clientX,y:m.clientY,done:!1};continue}y==="explore"&&(m.clientX<innerWidth*.45&&s===null?(s=m.identifier,o=m.clientX,a=m.clientY,e.style.left=o+"px",e.style.top=a+"px",e.classList.add("on")):r===null&&(r=m.identifier,l=m.clientX,c=m.clientY))}},u=p=>{for(let y of p.changedTouches)if(y.identifier===s){let m=y.clientX-o,g=y.clientY-a,_=55,v=Math.hypot(m,g)||1,x=Math.min(1,v/_);this.stick.x=m/v*x,this.stick.y=g/v*x,n.style.transform=`translate(${this.stick.x*_}px, ${this.stick.y*_}px)`}else if(y.identifier===r)this.mdx+=(y.clientX-l)*2.2,this.mdy+=(y.clientY-c)*2.2,l=y.clientX,c=y.clientY;else if(h&&y.identifier===h.id&&!h.done){let m=y.clientX-h.x,g=y.clientY-h.y;Math.hypot(m,g)>28&&(h.done=!0,Math.abs(m)>Math.abs(g)?this.pressed.add(m>0?"SwipeRight":"SwipeLeft"):this.pressed.add(g>0?"SwipeDown":"SwipeUp"))}t.dataset.mode!=="off"&&p.preventDefault()},f=p=>{for(let y of p.changedTouches)y.identifier===s&&(s=null,this.stick.x=0,this.stick.y=0,n.style.transform="",e.classList.remove("on")),y.identifier===r&&(r=null),h&&y.identifier===h.id&&(h=null)};addEventListener("touchstart",d,{passive:!0}),addEventListener("touchmove",u,{passive:!1}),addEventListener("touchend",f),addEventListener("touchcancel",f);for(let p of t.querySelectorAll(".tbtn")){let y=p.dataset.code;p.addEventListener("touchstart",g=>{g.preventDefault(),this.pressed.add(y),this.down.add(y),p.classList.add("on")},{passive:!1});let m=()=>{this.down.delete(y),p.classList.remove("on")};p.addEventListener("touchend",m),p.addEventListener("touchcancel",m)}}};var pe=i=>440*Math.pow(2,(i-69)/12),Ue=Math.random,Qo=class{constructor(){this.ctx=null,this.track=null,this.trackName=null,this.pendingMusic=null,this.ambientNodes=[],this.vol={master:.8,music:.6,sfx:.9}}get now(){return this.ctx?this.ctx.currentTime:0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;if(this.out=e.createDynamicsCompressor(),this.out.threshold.value=-12,this.out.ratio.value=4,this.out.connect(e.destination),this.master=e.createGain(),this.master.connect(this.out),this.musicBus=e.createGain(),this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.ambBus=e.createGain(),this.ambBus.connect(this.sfxBus),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(2.6,2.4),this.revGain=e.createGain(),this.revGain.gain.value=.5,this.reverb.connect(this.revGain),this.revGain.connect(this.master),this.noiseBuf=this._noise(2),this.brownBuf=this._brown(4),this.distCurve=this._curve(60),this.setVolumes(this.vol),this._seq=setInterval(()=>this._tick(),25),this.pendingMusic){let n=this.pendingMusic;this.pendingMusic=null,this.playMusic(n)}this.pendingAmbient&&this.setAmbient(this.pendingAmbient)}setVolumes(t){Object.assign(this.vol,t),this.ctx&&(this.master.gain.value=this.vol.master,this.musicBus.gain.value=this.vol.music*.9,this.sfxBus.gain.value=this.vol.sfx)}setReverb(t){this.revGain&&this.revGain.gain.setTargetAtTime(t,this.now,.3)}_noise(t){let e=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),n=e.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Ue()*2-1;return e}_brown(t){let e=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),n=e.getChannelData(0),s=0;for(let r=0;r<n.length;r++)s=(s+.02*(Ue()*2-1))/1.02,n[r]=s*3.5;return e}_impulse(t,e){let n=this.ctx.sampleRate,s=n*t,r=this.ctx.createBuffer(2,s,n);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++)a[l]=(Ue()*2-1)*Math.pow(1-l/s,e)}return r}_curve(t){let n=new Float32Array(1024);for(let s=0;s<1024;s++){let r=s*2/1024-1;n[s]=(3+t)*r*20*(Math.PI/180)/(Math.PI+t*Math.abs(r))}return n}_route(t,e,n){if(t.connect(e||this.sfxBus),n){let s=this.ctx.createGain();s.gain.value=n,t.connect(s),s.connect(this.reverb)}}tone({type:t="sine",f:e=440,f2:n=null,t:s=this.now,a:r=.005,d:o=.3,g:a=.3,dest:l,send:c=0,detune:h=0,vib:d=0,vibRate:u=5,filter:f=null}){if(!this.ctx)return;let p=this.ctx,y=p.createOscillator();if(y.type=t,y.frequency.setValueAtTime(e,s),n&&y.frequency.exponentialRampToValueAtTime(Math.max(1,n),s+r+o),y.detune.value=h,d){let _=p.createOscillator(),v=p.createGain();_.frequency.value=u,v.gain.value=d,_.connect(v),v.connect(y.frequency),_.start(s),_.stop(s+r+o+.1)}let m=p.createGain();m.gain.setValueAtTime(1e-4,s),m.gain.linearRampToValueAtTime(a,s+r),m.gain.exponentialRampToValueAtTime(1e-4,s+r+o);let g=y;if(f){let _=p.createBiquadFilter();_.type=f.type||"lowpass",_.frequency.value=f.f,_.Q.value=f.q||.7,y.connect(_),g=_}return g.connect(m),this._route(m,l,c),y.start(s),y.stop(s+r+o+.05),y}noise({t=this.now,a:e=.005,d:n=.2,g:s=.3,type:r="bandpass",f:o=1e3,f2:a=null,q:l=1,dest:c,send:h=0,brown:d=!1}){if(!this.ctx)return;let u=this.ctx,f=u.createBufferSource();f.buffer=d?this.brownBuf:this.noiseBuf,f.playbackRate.value=.8+Ue()*.4;let p=u.createBiquadFilter();p.type=r,p.frequency.setValueAtTime(o,t),a&&p.frequency.exponentialRampToValueAtTime(a,t+e+n),p.Q.value=l;let y=u.createGain();y.gain.setValueAtTime(1e-4,t),y.gain.linearRampToValueAtTime(s,t+e),y.gain.exponentialRampToValueAtTime(1e-4,t+e+n),f.connect(p),p.connect(y),this._route(y,c,h),f.start(t,Ue()*1.5),f.stop(t+e+n+.05)}pluck(t,e,n,s,r,o="triangle"){this.tone({type:o,f:e,t,a:.003,d:n,g:s,dest:r})}bell(t,e,n,s){this.tone({type:"sine",f:e,t,a:.002,d:1.6,g:n,dest:s,send:.3}),this.tone({type:"sine",f:e*2.76,t,a:.002,d:.6,g:n*.35,dest:s})}pad(t,e,n,s,r,o=900){if(!this.ctx)return;let a=this.ctx,l=a.createBiquadFilter();l.type="lowpass",l.frequency.value=o;let c=a.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(s,t+Math.min(1.2,n*.3)),c.gain.setValueAtTime(s,t+n*.75),c.gain.linearRampToValueAtTime(1e-4,t+n),l.connect(c),c.connect(r);for(let h of e)for(let d of[-8,8]){let u=a.createOscillator();u.type="sawtooth",u.frequency.value=pe(h),u.detune.value=d,u.connect(l),u.start(t),u.stop(t+n+.05)}}kick(t,e,n){this.tone({type:"sine",f:150,f2:42,t,a:.002,d:.28,g:e,dest:n})}snare(t,e,n){this.noise({t,d:.16,g:e,type:"highpass",f:1400,dest:n}),this.tone({type:"triangle",f:210,f2:150,t,d:.08,g:e*.6,dest:n})}hat(t,e,n,s=!1){this.noise({t,d:s?.18:.04,g:e,type:"highpass",f:7500,dest:n})}bass(t,e,n,s,r,o=700){this.tone({type:"sawtooth",f:e,t,a:.005,d:n,g:s,dest:r,filter:{f:o,q:4}})}distBass(t,e,n,s,r){if(!this.ctx)return;let o=this.ctx,a=o.createOscillator();a.type="sawtooth",a.frequency.value=e;let l=o.createWaveShaper();l.curve=this.distCurve;let c=o.createBiquadFilter();c.type="lowpass",c.frequency.value=1200;let h=o.createGain();h.gain.setValueAtTime(s,t),h.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(l),l.connect(c),c.connect(h),h.connect(r),a.start(t),a.stop(t+n+.05)}play(t,e={}){if(!this.ctx)return;let n=this.now+(e.delay||0),s=e.vol??1;switch(t){case"step":{let r=e.surface||"marble",o=r==="wood"?450:r==="concrete"?1300:r==="carpet"?300:950;this.noise({t:n,a:.002,d:r==="carpet"?.05:.09,g:.14*s,type:"bandpass",f:o*(.85+Ue()*.3),q:1.3,send:.25}),this.tone({type:"sine",f:120,f2:55,t:n,d:.07,g:.12*s});break}case"click":this.tone({type:"square",f:1900,t:n,d:.025,g:.05*s,filter:{f:3e3}});break;case"hover":this.tone({type:"sine",f:1300,t:n,d:.04,g:.035*s});break;case"select":this.tone({type:"triangle",f:660,t:n,d:.08,g:.1*s}),this.tone({type:"triangle",f:990,t:n+.06,d:.12,g:.1*s});break;case"back":this.tone({type:"triangle",f:700,t:n,d:.08,g:.08*s}),this.tone({type:"triangle",f:470,t:n+.06,d:.12,g:.08*s});break;case"chime":{[72,76,79,84,88].forEach((r,o)=>{this.tone({type:"triangle",f:pe(r),t:n+o*.07,d:.7,g:.12*s,send:.4}),this.tone({type:"sine",f:pe(r+12),t:n+o*.07,d:.4,g:.04*s})});break}case"unlock":this.tone({type:"square",f:300,t:n,d:.05,g:.08*s,filter:{f:1500}}),this.tone({type:"square",f:180,t:n+.08,d:.08,g:.1*s,filter:{f:1200}}),this.noise({t:n+.08,d:.1,g:.15*s,f:2500,q:2});break;case"error":this.tone({type:"square",f:150,t:n,d:.13,g:.07*s,filter:{f:900}}),this.tone({type:"square",f:112,t:n+.15,d:.22,g:.07*s,filter:{f:900}});break;case"tick":this.tone({type:"sine",f:2400,t:n,d:.015,g:.05*s});break;case"type":this.noise({t:n,d:.03,g:.12*s,f:3e3+Ue()*1500,q:3});break;case"munch":for(let r=0;r<4;r++)this.noise({t:n+r*(.09+Ue()*.05),d:.06,g:.22*s,f:1500+Ue()*2e3,q:1.5});this.tone({type:"sine",f:300,f2:120,t:n+.42,d:.12,g:.12*s});break;case"pickup":this.tone({type:"sine",f:520,f2:1500,t:n,d:.16,g:.12*s}),[88,91,96].forEach((r,o)=>this.tone({type:"triangle",f:pe(r),t:n+.08+o*.05,d:.3,g:.06*s,send:.4}));break;case"coin":this.tone({type:"square",f:pe(83+(e.pitch||0)),t:n,d:.05,g:.05*s,filter:{f:4e3}}),this.tone({type:"square",f:pe(88+(e.pitch||0)),t:n+.05,d:.14,g:.05*s,filter:{f:4e3}});break;case"flashlight":this.noise({t:n,d:.02,g:.25*s,f:3500,q:4}),this.noise({t:n+.05,d:.02,g:.18*s,f:2500,q:4});break;case"roar":this._roar(n,s,e.short);break;case"growl":this._roar(n,s*.45,!0,!0);break;case"stomp":this.tone({type:"sine",f:70,f2:28,t:n,a:.005,d:.6,g:.7*s,send:.5}),this.noise({t:n,d:.5,g:.35*s,type:"lowpass",f:220,send:.6,brown:!0});break;case"clatter":for(let r=0;r<16;r++){let o=n+Ue()*1.4*(r/16+.2);this.noise({t:o,d:.05+Ue()*.05,g:(.15+Ue()*.15)*s,f:1200+Ue()*2600,q:6,send:.7})}for(let r=0;r<4;r++)this.tone({type:"sine",f:90+Ue()*40,f2:40,t:n+Ue()*1.2,d:.3,g:.3*s,send:.6});break;case"creak":this.tone({type:"sawtooth",f:70,f2:95,t:n,a:.2,d:1.2,g:.05*s,vib:18,vibRate:13,filter:{type:"bandpass",f:700,q:6},send:.6});break;case"whoosh":this.noise({t:n,a:.12,d:.35,g:.3*s,f:400,f2:2500,q:1.5});break;case"heartbeat":this.tone({type:"sine",f:60,f2:40,t:n,d:.14,g:.5*s}),this.tone({type:"sine",f:55,f2:38,t:n+.22,d:.18,g:.4*s});break;case"beep":this.tone({type:"sine",f:760,t:n,a:.004,d:e.dur||.1,g:.14*s});break;case"static":this.noise({t:n,d:e.dur||.35,g:.12*s,type:"highpass",f:2500});break;case"radio":this.noise({t:n,d:.25,g:.14*s,type:"bandpass",f:1800,q:.8}),this.tone({type:"square",f:1200,t:n+.25,d:.06,g:.04*s});break;case"gate":this.tone({type:"sawtooth",f:55,f2:75,t:n,a:.1,d:1.6,g:.12*s,filter:{type:"bandpass",f:400,q:3},send:.4}),this.noise({t:n,a:.1,d:1.6,g:.08*s,f:900,q:4,send:.3}),this.tone({type:"sine",f:90,f2:40,t:n+1.6,d:.3,g:.4*s,send:.4});break;case"bonk":this.tone({type:"sine",f:420,f2:90,t:n,d:.25,g:.4*s}),this.noise({t:n,d:.2,g:.3*s,f:800});break;case"crash":this.noise({t:n,d:1.2,g:.6*s,type:"lowpass",f:3e3,f2:200,send:.6}),this.tone({type:"sine",f:80,f2:30,t:n,d:.8,g:.8*s});for(let r=0;r<10;r++)this.noise({t:n+.1+Ue()*.9,d:.08,g:.12*s,f:2e3+Ue()*3e3,q:5,send:.5});break;case"scratch":this.noise({t:n,a:.01,d:.25,g:.4*s,f:3e3,f2:600,q:2}),this.tone({type:"sawtooth",f:900,f2:120,t:n,d:.25,g:.1*s});break;case"wahwah":{[55,54,53].forEach((r,o)=>this.tone({type:"sawtooth",f:pe(r),t:n+o*.55,a:.05,d:.5,g:.12*s,filter:{f:1100}})),this.tone({type:"sawtooth",f:pe(52),t:n+1.65,a:.05,d:1.5,g:.12*s,vib:6,vibRate:6,filter:{f:1e3}});break}case"kick":this.noise({t:n,a:.05,d:.2,g:.4*s,f:600,f2:3e3}),this.tone({type:"sine",f:160,f2:40,t:n+.22,d:.5,g:.9*s}),this.noise({t:n+.22,d:.4,g:.5*s,type:"lowpass",f:1500});break;case"crt":this.tone({type:"sine",f:9e3,f2:300,t:n,d:.4,g:.05*s}),this.tone({type:"sine",f:90,f2:30,t:n,d:.3,g:.4*s});break;case"glitch":for(let r=0;r<6;r++)this.tone({type:"square",f:100+Ue()*2e3,t:n+r*.04,d:.035,g:.05*s});break;case"alarm":for(let r=0;r<(e.n||3);r++)this.tone({type:"sawtooth",f:620,t:n+r*.8,d:.38,g:.05*s,filter:{f:1800}}),this.tone({type:"sawtooth",f:830,t:n+r*.8+.4,d:.38,g:.05*s,filter:{f:1800}});break;case"yawn":this.tone({type:"sawtooth",f:330,f2:160,t:n,a:.3,d:1.3,g:.06*s,filter:{type:"bandpass",f:800,q:2}});break;case"sparkle":for(let r=0;r<6;r++)this.tone({type:"sine",f:pe(84+Math.floor(Ue()*14)),t:n+r*.05,d:.2,g:.04*s,send:.5});break;case"drip":this.tone({type:"sine",f:1400+Ue()*500,f2:600,t:n,d:.12,g:.06*s,send:.8});break;case"thud":this.tone({type:"sine",f:100,f2:45,t:n,d:.25,g:.4*s,send:.3}),this.noise({t:n,d:.12,g:.2*s,type:"lowpass",f:500});break;case"buzz":this.tone({type:"sawtooth",f:120,t:n,d:.25,g:.05*s,filter:{f:800}});break;case"sting":this.tone({type:"sawtooth",f:pe(45),t:n,a:.01,d:2.2,g:.12*s,filter:{f:900},send:.5}),this.tone({type:"sawtooth",f:pe(46),t:n,a:.01,d:2.2,g:.1*s,filter:{f:900},send:.5}),this.tone({type:"sine",f:pe(81),t:n,a:.01,d:1.5,g:.06*s,vib:8,send:.5}),this.noise({t:n,d:.6,g:.3*s,type:"lowpass",f:400,brown:!0});break;default:break}}_roar(t,e,n=!1,s=!1){let r=this.ctx,o=n?1.2:2.4,a=r.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.9*e,t+.25),a.gain.setValueAtTime(.9*e,t+o*.6),a.gain.exponentialRampToValueAtTime(1e-4,t+o);let l=r.createGain();l.gain.value=.7;let c=r.createOscillator();c.frequency.value=s?9:22;let h=r.createGain();h.gain.value=.3,c.connect(h),h.connect(l.gain),c.start(t),c.stop(t+o);let d=r.createWaveShaper();d.curve=this.distCurve;let u=r.createBiquadFilter();u.type="lowpass",u.Q.value=3,u.frequency.setValueAtTime(350,t),u.frequency.linearRampToValueAtTime(s?600:1700,t+.4),u.frequency.linearRampToValueAtTime(300,t+o),d.connect(u),u.connect(l),l.connect(a),this._route(a,null,.7);for(let[f,p]of[[68,0],[91,12],[113,-9],[46,4]]){let y=r.createOscillator();y.type="sawtooth",y.frequency.setValueAtTime(f*.8,t),y.frequency.linearRampToValueAtTime(f*1.25,t+.35),y.frequency.linearRampToValueAtTime(f*.7,t+o),y.detune.value=p,y.connect(d),y.start(t),y.stop(t+o+.05)}this.noise({t,a:.2,d:o,g:.35*e,type:"bandpass",f:700,f2:300,q:.8,send:.6})}babble(t,e,n){if(!this.ctx)return 0;let s={guard:210,dev:150,aaron:260,museos:520,narrator:180}[e]||200,r=e==="museos"?"sine":e==="dev"?"sawtooth":"triangle",o=this.now+.02,a=String(t).split(/\s+/);for(let l of a){let c=Math.max(1,Math.round(l.replace(/[^a-z]/gi,"").length/2.6));for(let h=0;h<c;h++){let d=s*(.85+Ue()*.45)*(l===l.toUpperCase()&&l.length>1?1.25:1);this.tone({type:r,f:d,f2:d*(.9+Ue()*.2),t:o,a:.01,d:.07,g:.06,dest:n,filter:{f:1800}}),o+=.085}o+=/[.,!?…]$/.test(l)?.22:.05}return o-this.now}playMusic(t,e=1.5){if(!this.ctx){this.pendingMusic=t;return}if(this.trackName===t)return;let n=this.now,s=this.track;if(s){s.dead=!0;let a=s.gain.gain;a.cancelScheduledValues(n),a.setValueAtTime(a.value,n),a.linearRampToValueAtTime(0,n+e),setTimeout(()=>s.gain.disconnect(),e*1e3+400)}this.trackName=t;let r=Ax[t];if(!r){this.track=null;return}let o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(r.vol??.8,n+Math.max(.05,e*.5)),o.connect(this.musicBus),this.track={def:r,gain:o,step:0,next:n+.08,dead:!1}}stopMusic(t=1){this.playMusic(null,t)}_tick(){let t=this.track;if(!t||t.dead||!this.ctx)return;let e=60/t.def.bpm/4;for(t.next<this.now-.3&&(t.next=this.now+.05);t.next<this.now+.15;){try{t.def.step(this,t.step,t.next,e,t.gain)}catch(n){console.warn(n)}t.step++,t.next+=e}}setAmbient(t){if(!this.ctx){this.pendingAmbient=t;return}let e=this.now;for(let s of this.ambientNodes)try{s.g.gain.setTargetAtTime(0,e,.4),setTimeout(()=>s.src.stop(),2e3)}catch{}this.ambientNodes=[],this.ambientKind=t;let n=(s,r,o,a,l,c=1)=>{let h=this.ctx.createBufferSource();h.buffer=s,h.loop=!0,h.playbackRate.value=c;let d=this.ctx.createBiquadFilter();d.type=r,d.frequency.value=o,d.Q.value=a;let u=this.ctx.createGain();return u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(l,e+2),h.connect(d),d.connect(u),u.connect(this.ambBus),h.start(),this.ambientNodes.push({src:h,g:u,fl:d}),{src:h,g:u,fl:d}};if(t==="night")n(this.brownBuf,"lowpass",200,.5,.12),n(this.noiseBuf,"bandpass",5e3,.5,.006);else if(t==="office"){n(this.brownBuf,"lowpass",180,.5,.08);let s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=60;let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=240;let o=this.ctx.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.025,e+2),s.connect(r),r.connect(o),o.connect(this.ambBus),s.start(),this.ambientNodes.push({src:s,g:o})}else if(t==="day"){let s=n(this.brownBuf,"bandpass",500,.6,.18,1.6),r=this.ctx.createOscillator(),o=this.ctx.createGain();r.frequency.value=.3,o.gain.value=.05,r.connect(o),o.connect(s.g.gain),r.start(),this.ambientNodes.push({src:r,g:o}),n(this.noiseBuf,"bandpass",1400,2,.01)}else t==="maze"?(n(this.brownBuf,"lowpass",110,.7,.22),n(this.noiseBuf,"bandpass",300,4,.01)):t==="runner"&&n(this.noiseBuf,"bandpass",600,.4,.04)}},Ax={menu:{bpm:76,vol:.7,step(i,t,e,n,s){let r=Math.floor(t/16)%4,o=t%16,l=[[57,60,64],[53,57,60],[50,53,57],[52,56,59]][r];if(o===0&&(i.pad(e,l.map(c=>c-12),n*16,.035,s,700),i.tone({type:"sine",f:pe(l[0]-24),t:e,a:.1,d:n*15,g:.12,dest:s})),o%2===0){let c=[0,1,2,1,2,1,0,2];i.pluck(e,pe(l[c[o/2%8]]+12),.5,.045,s)}o===10&&r%2===1&&i.bell(e,pe(l[2]+24),.03,s)}},explore:{bpm:54,vol:.75,step(i,t,e,n,s){let r=t%64;r===0&&i.pad(e,[33,40],n*64,.03,s,400);let o=Math.sin(t*12.9898)*43758.5453,a=o-Math.floor(o);if(t%4===0&&a<.3){let l=[69,72,74,76,79,81,84];i.bell(e,pe(l[Math.floor(a*23)%l.length]),.025,s)}r===32&&i.tone({type:"triangle",f:pe(45),t:e,a:.01,d:2,g:.08,dest:s})}},tension:{bpm:84,vol:.8,step(i,t,e,n,s){let r=t%16;r===0&&i.kick(e,.35,s),r===3&&i.kick(e,.22,s),t%32===0&&i.pad(e,[45,46,57],n*32,.03,s,600),t%2===0&&i.tone({type:"sawtooth",f:pe(81+(t%8===0?1:0)),t:e,d:n*1.5,g:.012,dest:s,filter:{f:2e3}})}},chase:{bpm:156,vol:.85,step(i,t,e,n,s){let r=t%16,o=Math.floor(t/16)%4,l=[40,36,38,35][o];r%4===0&&i.kick(e,.55,s),(r===4||r===12)&&i.snare(e,.3,s),r%2===1&&i.hat(e,.08,s,r===15);let c=[0,0,12,0,0,12,0,7,0,0,12,0,10,12,7,5];if(i.bass(e,pe(l+c[r]-12),n*.9,.13,s,900),Math.floor(t/64)%2===1&&r%2===0){let h=[64,67,71,67,76,74,71,67];i.pluck(e,pe(h[r/2%8]+(o===1?-4:o===2?-2:o===3?-5:0)),.14,.05,s,"square")}r===0&&o===0&&i.tone({type:"sawtooth",f:pe(76),f2:pe(64),t:e,d:n*8,g:.03,dest:s,filter:{f:2500}})}},maze:{bpm:92,vol:.75,step(i,t,e,n,s){let r=t%16,o=Math.floor(t/16)%4;if(r%2===0&&i.hat(e,r%4===0?.04:.02,s),r%4===0&&i.bass(e,pe([33,33,34,32][o]),n*3,.1,s,400),r===8&&o%2===1){let a=[69,72,75,78][Math.floor(t/32)%4];i.tone({type:"sine",f:pe(a),t:e,a:.2,d:1.6,g:.05,dest:s,vib:5,vibRate:5,send:.4})}r===0&&o===0&&i.pad(e,[45,51],n*64,.025,s,500)}},morning:{bpm:112,vol:.7,step(i,t,e,n,s){let r=t%16,o=Math.floor(t/16)%4,l=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]][o];r%4===0&&i.bass(e,pe(l[0]-24),n*2,.1,s,500),[0,3,6,8,11,14].includes(r)&&l.forEach(c=>i.pluck(e,pe(c+12),.25,.03,s)),r%4===2&&i.hat(e,.03,s),(r===4||r===12)&&i.snare(e,.06,s),r%8===0&&i.kick(e,.25,s)}},meta:{bpm:100,vol:.7,step(i,t,e,n,s){let r=t%16,o=Math.floor(t/16)%4,l=[[60,64,67,71],[57,60,64,67],[50,53,57,60],[55,59,62,65]][o];[0,6,10].includes(r)&&l.forEach(c=>i.tone({type:"sine",f:pe(c),t:e,a:.01,d:.6,g:.03,dest:s,vib:3,vibRate:4})),r%4===0&&i.pluck(e,pe(l[0]-24+(r===8?7:0)),.4,.12,s,"sine"),r%4===3&&i.noise({t:e,d:.02,g:.05,f:4e3,q:4,dest:s})}},angry:{bpm:150,vol:.9,step(i,t,e,n,s){let r=t%16;r%4===0&&i.kick(e,.7,s),(r===4||r===12)&&i.snare(e,.4,s),r%2===0&&i.distBass(e,pe([28,28,31,28,34,28,33,31][r/2%8]),n*1.8,.12,s),i.hat(e,.06,s)}}};var ou=4;function au(i){ou=Math.min(8,i||4)}function _e(i,t,e){let n=document.createElement("canvas");return n.width=i,n.height=t,[n,n.getContext("2d",e)]}function Te(i,{repeat:t=[1,1],srgb:e=!0}={}){let n=new zs(i);return n.wrapS=n.wrapT=xr,n.repeat.set(t[0],t[1]),e&&(n.colorSpace=on),n.anisotropy=ou,n}function Dn(i,t,e,n,s){let r=i.getImageData(0,0,t,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=(s()-.5)*n;o[a]+=l,o[a+1]+=l,o[a+2]+=l}i.putImageData(r,0,0)}var qc=new Map;function Rx(i,t){return qc.has(i)||qc.set(i,t()),qc.get(i)}function Me(i,t=1,e=1){let s=Rx(i,()=>Cx[i]()).clone();return s.repeat.set(t,e),s.needsUpdate=!0,s}var Cx={marble(){let[t,e]=_e(512,512),n=we(7);for(let s=0;s<2;s++)for(let r=0;r<2;r++){let o=(s+r)%2===1;e.fillStyle=o?"#2b2f38":"#ddd6c8",e.fillRect(s*256,r*256,256,256),e.strokeStyle=o?"rgba(255,255,255,0.10)":"rgba(80,70,60,0.18)";for(let a=0;a<7;a++){e.lineWidth=.6+n()*1.6,e.beginPath();let l=s*256+n()*256,c=r*256;e.moveTo(l,c);for(let h=0;h<8;h++)l+=(n()-.5)*70,c+=32,e.lineTo(l,c);e.stroke()}}e.strokeStyle="rgba(0,0,0,0.5)",e.lineWidth=2;for(let s=0;s<=2;s++)e.beginPath(),e.moveTo(s*256,0),e.lineTo(s*256,512),e.stroke(),e.beginPath(),e.moveTo(0,s*256),e.lineTo(512,s*256),e.stroke();return Dn(e,512,512,14,n),Te(t)},stone(){let[t,e]=_e(512,512),n=we(3),s=4,r=512/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=120+n()*30;e.fillStyle=`rgb(${l+12},${l+6},${l-6})`,e.fillRect(o*r,a*r,r,r);for(let c=0;c<30;c++)e.fillStyle=`rgba(${n()>.5?255:0},${n()>.5?240:0},200,0.04)`,e.beginPath(),e.arc(o*r+n()*r,a*r+n()*r,4+n()*16,0,7),e.fill()}e.strokeStyle="rgba(30,25,20,0.7)",e.lineWidth=3;for(let o=0;o<=s;o++)e.beginPath(),e.moveTo(o*r,0),e.lineTo(o*r,512),e.stroke(),e.beginPath(),e.moveTo(0,o*r),e.lineTo(512,o*r),e.stroke();return Dn(e,512,512,22,n),Te(t)},wood(){let[t,e]=_e(512,512),n=we(11),s=8,r=512/s;for(let o=0;o<s;o++){let a=n()*512;for(let l=-1;l<2;l++){let c=70+n()*30;e.fillStyle=`rgb(${c+50},${c+22},${c-10})`,e.fillRect(a+l*512*.6-512*.3,o*r,512*.6,r),e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(a+l*512*.6-512*.3,o*r,2,r)}for(let l=0;l<14;l++){e.strokeStyle=`rgba(40,20,5,${.1+n()*.15})`,e.lineWidth=1,e.beginPath();let c=o*r+n()*r;e.moveTo(0,c),e.bezierCurveTo(512*.3,c+(n()-.5)*8,512*.6,c+(n()-.5)*8,512,c),e.stroke()}e.fillStyle="rgba(0,0,0,0.5)",e.fillRect(0,o*r,512,2)}return Dn(e,512,512,10,n),Te(t)},plaster(){let[t,e]=_e(256,256),n=we(5);return e.fillStyle="#ffffff",e.fillRect(0,0,256,256),Dn(e,256,256,18,n),Te(t)},mosaic(){let[t,e]=_e(512,512),n=we(9);e.fillStyle="#3a2a20",e.fillRect(0,0,512,512);let s=16,r=["#c96f3b","#d9a066","#e8d3b0","#8c3b2a","#e8d3b0","#e8d3b0","#5a6e7a"];for(let o=0;o<512/s;o++)for(let a=0;a<512/s;a++){let l=o-512/s/2+.5,c=a-512/s/2+.5,h=Math.floor(Math.max(Math.abs(l),Math.abs(c))),d=r[(h+(Math.abs(l)===Math.abs(c)?3:0))%r.length];h>13&&(d=(o+a)%2?"#8c3b2a":"#e8d3b0"),e.fillStyle=d,e.fillRect(o*s+1+n()*1.2,a*s+1+n()*1.2,s-2.5,s-2.5)}return Dn(e,512,512,18,n),Te(t)},concrete(){let[t,e]=_e(512,512),n=we(13);e.fillStyle="#6d6a64",e.fillRect(0,0,512,512);for(let s=0;s<400;s++)e.fillStyle=`rgba(${n()>.5?255:0},${n()>.5?255:0},${n()>.5?255:0},0.03)`,e.beginPath(),e.arc(n()*512,n()*512,2+n()*30,0,7),e.fill();e.strokeStyle="rgba(20,20,20,0.35)";for(let s=0;s<5;s++){e.beginPath();let r=n()*512,o=n()*512;e.moveTo(r,o);for(let a=0;a<6;a++)r+=(n()-.5)*60,o+=(n()-.5)*60,e.lineTo(r,o);e.stroke()}return Dn(e,512,512,30,n),Te(t)},shelves(){let[e,n]=_e(512,512),s=we(21);n.fillStyle="#1b1612",n.fillRect(0,0,512,512);let r=4,o=512/r,a=["#a4824f","#b8955e","#8f6c3c","#c4a574","#9a7a52","#6b5a48"];for(let l=0;l<r;l++){let c=6;for(;c<492;){let h=40+s()*80,d=o*(.45+s()*.45);if(s()<.15){c+=h*.6;continue}n.fillStyle=a[Math.floor(s()*a.length)],n.fillRect(c,(l+1)*o-10-d,h-4,d),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(c,(l+1)*o-10-d,h-4,5),s()<.6&&(n.fillStyle="#efe6cf",n.fillRect(c+h*.2,(l+1)*o-10-d*.6,h*.45,14),n.fillStyle="#333",n.font="bold 9px monospace",n.fillText(["ARCH","FOSSIL","MISC","1974","DO NOT","VASE","BONES?"][Math.floor(s()*7)],c+h*.22,(l+1)*o-10-d*.6+10)),c+=h}n.fillStyle="#5b5550",n.fillRect(0,(l+1)*o-12,512,12),n.fillStyle="rgba(255,255,255,0.15)",n.fillRect(0,(l+1)*o-12,512,2)}return n.fillStyle="#4a4540",n.fillRect(0,0,10,512),n.fillRect(502,0,10,512),Dn(n,512,512,16,s),Te(e)},crate(){let[t,e]=_e(256,256),n=we(17);e.fillStyle="#8a6a40",e.fillRect(0,0,256,256);for(let s=0;s<6;s++)e.fillStyle=s%2?"#7d5f38":"#94744a",e.fillRect(0,s*(256/6),256,256/6-2);return e.strokeStyle="#4b3820",e.lineWidth=18,e.strokeRect(9,9,238,238),e.beginPath(),e.moveTo(9,9),e.lineTo(247,247),e.stroke(),e.fillStyle="rgba(20,10,0,0.7)",e.font="bold 26px monospace",e.fillText("FRAGILE",70,140),Dn(e,256,256,20,n),Te(t)},carpet(){let[e,n]=_e(512,512),s=we(23);n.fillStyle="#6e1420",n.fillRect(0,0,512,512),n.fillStyle="#c9a24a",n.fillRect(0,0,14,512),n.fillRect(498,0,14,512),n.fillStyle="#5a0f19",n.fillRect(512/3-3,0,6,512),n.fillRect(2*512/3-3,0,6,512),n.fillStyle="rgba(201,162,74,0.35)";for(let r=0;r<8;r++)for(let o=0;o<3;o++){let a=(o+.5)*170.66666666666666,l=(r+.5)*(512/8);n.beginPath(),n.moveTo(a,l-14),n.lineTo(a+14,l),n.lineTo(a,l+14),n.lineTo(a-14,l),n.closePath(),n.fill()}return Dn(n,512,512,26,s),Te(e)},ceiling(){let[t,e]=_e(256,256),n=we(31);return e.fillStyle="#cfcac0",e.fillRect(0,0,256,256),e.strokeStyle="#8d877c",e.lineWidth=4,e.strokeRect(0,0,256,256),e.strokeRect(256/2,0,.1,256),e.strokeRect(0,256/2,256,.1),Dn(e,256,256,20,n),Te(t)},bone(){let[t,e]=_e(128,128),n=we(41);e.fillStyle="#d8ccb0",e.fillRect(0,0,128,128);for(let s=0;s<60;s++)e.fillStyle=`rgba(${n()>.5?120:255},${n()>.5?100:240},80,0.12)`,e.fillRect(n()*128,n()*128,1+n()*10,1+n()*3);return Dn(e,128,128,30,n),Te(t)}};function Px(i,t,e){let n=String(t).split(" "),s=[],r="";for(let o of n){let a=r?r+" "+o:o;i.measureText(a).width>e&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function Yc({title:i,body:t="",w:e=512,h:n=320,bg:s="#1c1a17",fg:r="#e9dfc8",accent:o="#c9a24a",titleFont:a="bold 40px Georgia, serif",bodyFont:l="22px Georgia, serif",align:c="left"}){let[h,d]=_e(e,n);d.fillStyle=s,d.fillRect(0,0,e,n),d.strokeStyle=o,d.lineWidth=6,d.strokeRect(10,10,e-20,n-20),d.fillStyle=o,d.font=a,d.textAlign=c;let u=c==="center"?e/2:36;d.fillText(i,u,70),d.fillRect(36,88,e-72,2),d.fillStyle=r,d.font=l;let f=128;for(let p of String(t).split(`
`))for(let y of Px(d,p,e-72))d.fillText(y,u,f),f+=parseInt(l,10)*1.35;return Te(h,{repeat:[1,1]})}function Ae(i,{w:t=512,h:e=128,bg:n="#111",fg:s="#fff",font:r="bold 56px Arial Black, Arial, sans-serif",border:o=null}={}){let[a,l]=_e(t,e);l.fillStyle=n,l.fillRect(0,0,t,e),o&&(l.strokeStyle=o,l.lineWidth=8,l.strokeRect(6,6,t-12,e-12)),l.fillStyle=s,l.font=r,l.textAlign="center",l.textBaseline="middle";let c=String(i).split(`
`),h=e/(c.length+.4);return c.forEach((d,u)=>l.fillText(d,t/2,e/2+(u-(c.length-1)/2)*h)),Te(a)}function lu(i,t="landscape"){let e=we(i),n=256,s=t==="portrait"?320:192,[r,o]=_e(n,s);if(t==="portrait"){let a=o.createLinearGradient(0,0,0,s);a.addColorStop(0,`hsl(${e()*60+20},30%,25%)`),a.addColorStop(1,`hsl(${e()*60},30%,10%)`),o.fillStyle=a,o.fillRect(0,0,n,s),o.fillStyle=`hsl(${e()*360},40%,30%)`,o.beginPath(),o.ellipse(n/2,s*.95,n*.42,s*.38,0,0,7),o.fill(),o.fillStyle="#d9b38c",o.beginPath(),o.ellipse(n/2,s*.42,n*.17,s*.16,0,0,7),o.fill(),o.fillStyle=`hsl(${e()*40},40%,${10+e()*30}%)`,o.beginPath(),o.ellipse(n/2,s*.33,n*.19,s*.1,0,Math.PI,0),o.fill(),o.fillStyle="#222",o.fillRect(n/2-22,s*.42,8,6),o.fillRect(n/2+14,s*.42,8,6),e()<.5&&(o.fillStyle="#c9a24a",o.fillRect(n/2-30,s*.22,60,14))}else{let a=o.createLinearGradient(0,0,0,s),l=e()*360;a.addColorStop(0,`hsl(${l},50%,${50+e()*20}%)`),a.addColorStop(.6,`hsl(${l+30},50%,70%)`),o.fillStyle=a,o.fillRect(0,0,n,s),o.fillStyle=`hsl(${e()*60+30},70%,70%)`,o.beginPath(),o.arc(n*(.2+e()*.6),s*.3,18,0,7),o.fill();for(let c=0;c<3;c++){o.fillStyle=`hsl(${100+e()*60},${30+c*10}%,${35-c*9}%)`,o.beginPath(),o.moveTo(0,s);for(let h=0;h<=n;h+=16)o.lineTo(h,s*(.5+c*.12)+Math.sin(h*.03+e()*6)*14+e()*10);o.lineTo(n,s),o.fill()}}for(let a=0;a<900;a++)o.fillStyle=`rgba(0,0,0,${e()*.08})`,o.fillRect(e()*n,e()*s,3,3);return Te(r)}function cu(i=128,t=.12){let[e,n]=_e(i,i),s=n.createImageData(i,i);for(let r=0;r<s.data.length;r+=4){let o=Math.random()*255;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=t*255}return n.putImageData(s,0,0),e.toDataURL()}var ta=["REX","1974","ZAP","NAP","DONUT","???"],ea=class{constructor(t){this.game=t,this.root=q("#hud"),this.meterEl=q("#meter"),this.meterFill=q(".meter-fill"),this.meterPct=q(".meter-pct"),this.meterDonut=q(".meter-donut"),this.clockEl=q("#clock"),this.objEl=q("#objective"),this.objText=q(".obj-text"),this.fragEl=q("#fragments"),this.fragSlots=q(".frag-slots"),this.prompt=q("#prompt"),this.promptText=q(".prompt-text"),this.cross=q("#crosshair"),this.compass=q("#compass"),this.compassMarker=q(".compass-marker"),this.chase=q("#chase"),this.arrow=q("#arrow"),this.big=q("#bigtext"),this.hint=q("#controls-hint"),this.toasts=q("#toasts"),this.titleEl=q("#titlecard"),this.captionEl=q("#caption"),this.donutCount=q("#donut-count"),this.fade=q("#fx-fade"),this.flashEl=q("#fx-flash"),this.drowsy=q("#fx-drowsy"),this.lids=[q("#fx-eyelids .top"),q("#fx-eyelids .bottom")],this.letterbox=q("#letterbox"),q("#fx-grain").style.backgroundImage=`url(${cu(160,.5)})`,this.target=null,this.lastMeter=-1;for(let e=0;e<6;e++)this.fragSlots.append(Jt("div","frag","\xB7".repeat(Math.min(5,ta[e].length))))}show(t){this.root.classList.toggle("off",!t)}showMeter(t){this.meterEl.classList.toggle("off",!t)}showClock(t){this.clockEl.classList.toggle("off",!t)}setMeter(t){let e=Math.round(t);e!==this.lastMeter&&(e>this.lastMeter&&this.lastMeter>=0&&(this.meterEl.classList.remove("bump"),this.meterEl.offsetWidth,this.meterEl.classList.add("bump")),this.lastMeter=e,this.meterFill.style.width=qe(t,0,100)+"%",this.meterPct.textContent=e+"%",this.meterEl.classList.toggle("low",t<25),this.meterDonut.classList.toggle("bitten",t<60))}setClock(t){this.clockEl.textContent=t}objective(t,e=null){if(this.target=e,!t){this.objEl.classList.add("off"),this.compass.classList.add("off");return}this.objEl.classList.remove("off","new"),this.objEl.offsetWidth,this.objEl.classList.add("new"),this.objText.textContent=t,this.compass.classList.toggle("off",!e||!this.game.save.settings.marker),this.game.audio.play("select",{vol:.6})}setFragments(t,{show:e=!0,missing:n=!1}={}){this.fragEl.classList.toggle("off",!e),[...this.fragSlots.children].forEach((s,r)=>{let o=t.includes(ta[r]),a=s.classList.contains("got");s.textContent=o?ta[r]:n&&r===5?"???":"\xB7".repeat(Math.min(5,ta[r].length)),s.classList.toggle("got",o),s.classList.toggle("missing",n&&r===5),o&&!a&&(s.style.animation="none",s.offsetWidth,s.style.animation="")})}setPrompt(t){if(!t){this.prompt.classList.add("off"),this.cross.classList.remove("hot");return}(this.promptText.textContent!==t||this.prompt.classList.contains("off"))&&(this.promptText.textContent=t,this.prompt.classList.remove("off")),this.cross.classList.add("hot"),this.prompt.querySelector("kbd").textContent=this.game.input.isTouch?"USE":"E"}crosshair(t){this.cross.classList.toggle("hidden",!t)}toast(t,e=""){let n=Jt("div","toast "+e,t);this.toasts.append(n),setTimeout(()=>n.remove(),3100)}titleCard(t,e){q(".tc-chapter",this.titleEl).textContent=t,q(".tc-title",this.titleEl).textContent=e,this.titleEl.classList.remove("show"),this.titleEl.offsetWidth,this.titleEl.classList.add("show"),this.game.audio.play("sting",{vol:.5})}caption(t){this.captionEl.textContent=t||""}bigText(t){this.big.textContent=t,this.big.classList.remove("show"),this.big.offsetWidth,this.big.classList.add("show")}controlsHint(t){if(!t){this.hint.classList.add("off");return}this.hint.innerHTML=t.map(e=>`<span>${e}</span>`).join(""),this.hint.classList.remove("off")}setFade(t,e=.2){this.fade.style.transition=`opacity ${e}s linear`,this.fade.style.opacity=t}flash(t="rgba(255,255,255,0.6)",e=.5){let n=this.flashEl;n.style.transition="none",n.style.background=t,n.style.opacity=1,n.offsetWidth,n.style.transition=`opacity ${e}s`,n.style.opacity=0}setDrowsy(t){this.drowsy.style.opacity=qe(t,0,1)}setLids(t,e=.25){for(let n of this.lids)n.style.transition=`transform ${e}s ease-in-out`;this.lids[0].style.transform=`translateY(${-101+t*101}%)`,this.lids[1].style.transform=`translateY(${101-t*101}%)`}setLetterbox(t){this.letterbox.classList.toggle("on",t)}showChase(t){this.chase.classList.toggle("off",!t)}setChase(t,e,n){let s=qe(t,0,1)*100;q(".chase-fill",this.chase).style.width=s+"%",q(".chase-you",this.chase).style.left=s+"%",q(".chase-rex",this.chase).style.left=Math.max(0,s-4-(1-e)*26)+"%",q(".danger-fill",this.chase).style.width=e*100+"%",n!=null&&this.setDonutCount(`\u{1F369} \xD7 ${n}`)}showArrow(t){this.arrow.classList.toggle("off",!t)}setDonutCount(t){this.donutCount.classList.toggle("off",!t),t&&(this.donutCount.textContent=t)}update(){let t=this.game;if(!this.target||this.compass.classList.contains("off")||!t.player)return;let e=t.player,n=Math.atan2(-(this.target.x-e.pos.x),-(this.target.z-e.pos.z)),s=su(e.yaw,n),r=qe(50-s/(Math.PI/2)*50,-10,110);this.compassMarker.style.left=r+"%",this.compassMarker.style.opacity=Math.abs(s)>Math.PI/2?.25:1;let o=Math.hypot(this.target.x-e.pos.x,this.target.z-e.pos.z);this.compassMarker.textContent=o<3?"\u25CF":"\u25BC"}};var Ix=typeof window<"u"&&window.LOCKED_OUT_CONFIG||{},Di={guardName:"YOU (GUARD)",devName:"THE DEV",title:["LOCKED","OUT"],...Ix};var Rr={guard:{name:()=>Di.guardName,color:"gold"},dev:{name:()=>Di.devName,color:"pink"},aaron:{name:()=>"AARON",color:"sky"},museos:{name:()=>"MUSE-OS",color:"mint"}},ns={guard01:{who:"guard",mood:"happy",text:"Mmm. Number three is the T-Rex. Obviously. Nothing beats the King."},aaron01:{who:"aaron",mood:"normal",text:"Yo, it's Aaron. Heads up \u2014 IT is changing all the computer passwords tonight. So, uh... don't let your session time out. Okay byeee."},guard02:{who:"guard",mood:"normal",text:"Yeah, yeah. Like that's gonna happen."},museos01:{who:"museos",mood:"normal",text:"SESSION EXPIRED."},guard03:{who:"guard",mood:"annoyed",text:"Ugh. Whatever. I'll just log back in."},guard04:{who:"guard",mood:"confused",text:"Huh? Donut-one-two-three. That's literally always my password."},guard05:{who:"guard",mood:"shock",text:"WHAT?! Who changed my password?!"},museos02:{who:"museos",mood:"normal",text:"Password reset protocol activated. To recover access... SOLVE THE PUZZLES."},museos03:{who:"museos",mood:"normal",text:"Puzzle number one sleeps where giants once walked."},guard06:{who:"guard",mood:"happy",text:"Where giants once walked... the Dino exhibit! Oh yeah, I like the Dino exhibit."},guard07:{who:"guard",mood:"happy",text:"Flashlight: check. Donuts: check. Let's go."},guard08:{who:"guard",mood:"happy",text:"Whoa. Never gets old. Hey, big guy."},museos04:{who:"museos",mood:"normal",text:"Fragment one: REX. Next puzzle: the Roman Empire hall."},guard09:{who:"guard",mood:"normal",text:"Roman Hall. Got it. Easy."},guard10:{who:"guard",mood:"confused",text:"...What was that?"},guard11:{who:"guard",mood:"shock",text:"Wait. Where's the T-Rex?"},guard12:{who:"guard",mood:"scared",text:"Oh crap. Oh crap oh crap. This is like Night at the Museum."},guard13:{who:"guard",mood:"scared",text:"Okay. Totally normal. Big dinosaur's just... on a walk. I'm gonna go to the Roman Hall. Quickly."},guard14:{who:"guard",mood:"scared",text:"Nope. Nope nope nope nope."},guard15:{who:"guard",mood:"normal",text:"Okay. Romans. Romans are chill. Romans never chased anybody."},museos05:{who:"museos",mood:"normal",text:"Fragment two: 1974. The remaining puzzles lie... beyond the walls."},guard16:{who:"guard",mood:"confused",text:"Beyond the walls? What does that even mea\u2014"},guard17:{who:"guard",mood:"shock",text:"OH MY GOSH."},guard18:{who:"guard",mood:"scared",text:"AAAAAAAAAAH!"},guard19:{who:"guard",mood:"scared",text:"Why is this hallway so LONG?!"},guard20:{who:"guard",mood:"shock",text:"There! A hole shaped exactly like me! That is SO convenient!"},guard21:{who:"guard",mood:"happy",text:"HA! You can't fit, big guy! Shoulda done more cardio! ...Wait, you don't have lungs."},museos06:{who:"museos",mood:"normal",text:"Welcome to the archives, guard. Three puzzles remain. Also, your sugar levels are... concerning."},guard22:{who:"guard",mood:"annoyed",text:"My sugar levels are FINE."},guard23:{who:"guard",mood:"scared",text:"Is that... an EYE?! Go away! Shoo!"},museos07:{who:"museos",mood:"normal",text:"Fragment three: ZAP."},museos08:{who:"museos",mood:"normal",text:"Fragment four: NAP. ...Interesting word choice."},guard24:{who:"guard",mood:"sleepy",text:"Why would a password have NAP in it... *yaaawn*"},museos09:{who:"museos",mood:"normal",text:"Fragment five: DONUT. Please proceed to the break room."},guard25:{who:"guard",mood:"happy",text:"THE. LAST. DONUT. It is beautiful."},guard26:{who:"guard",mood:"shock",text:"It's... it's PLASTIC?!"},museos10:{who:"museos",mood:"normal",text:"Exhibit 404: replica donut. Not for eating."},guard27:{who:"guard",mood:"sleepy",text:"So... sleepy... just gonna... rest my eyes... five minutes..."},guard28:{who:"guard",mood:"confused",text:"Mmh... huh? It's MORNING?!"},guard29:{who:"guard",mood:"confused",text:"The T-Rex is back. Like nothing happened. ...Is that MY HAT?"},aaron02:{who:"aaron",mood:"normal",text:"Dude. Did you sleep in the dinosaur exhibit? Again?"},guard30:{who:"guard",mood:"shock",text:"Aaron! The T-Rex was ALIVE! It chased me! There was a maze! And a PLASTIC DONUT!"},aaron03:{who:"aaron",mood:"normal",text:"Sure, buddy. Also, your computer's been beeping all morning. You should probably log in."},museos11:{who:"museos",mood:"normal",text:"Fragments entered: five of six. You did not solve the puzzles."},guard31:{who:"guard",mood:"shock",text:"WHAT? I solved like FIVE puzzles!"},museos12:{who:"museos",mood:"normal",text:"Five is not six. Goodbye."},dev01:{who:"dev",mood:"happy",text:"Oh hey! Welcome to my game. I made it myself. It's really good, I promise."},guard32:{who:"guard",mood:"confused",text:"Wait... that's it? That game was WAY too short."},guard33:{who:"guard",mood:"shock",text:"Oh my gosh. Are you serious? This is really it? That's the WHOLE game?!"},dev02:{who:"dev",mood:"tired",text:"Bro, I was up all night making this."},guard34:{who:"guard",mood:"annoyed",text:"...I could do better."},dev03:{who:"dev",mood:"angry",text:"HELL NAW."},dev04:{who:"dev",mood:"angry",text:"GET OUT OF MY GAME!"},dev05:{who:"dev",mood:"annoyed",text:"...Oh. You're back. Fine. You can play it again. But NO complaining."},dev06:{who:"dev",mood:"annoyed",text:"Stop poking the TV."},dev07:{who:"dev",mood:"happy",text:"Psst. Try the Clip Studio. You can put YOURSELF in the game."}};function na(i,t,e,n){i.beginPath(),i.arc(t,e,n,0,Math.PI*2)}function hu(i,t,e,{mood:n,blink:s,t:r,sep:o=26,look:a=0}){for(let l of[-1,1]){let c=t+l*o,h=e,d=1-s;(n==="sleepy"||n==="tired")&&(d*=.35),(n==="shock"||n==="scared")&&(d*=1.25);let u=13,f=14*d;if(i.fillStyle="#fff",i.beginPath(),i.ellipse(c,h,u,Math.max(1.5,f),0,0,Math.PI*2),i.fill(),d>.15){i.fillStyle="#1a1210";let p=n==="shock"||n==="scared"?4.5:6.5;na(i,c+a*4,h+1,Math.min(p,f)),i.fill(),i.fillStyle="#fff",na(i,c+a*4+2,h-2,1.8),i.fill()}i.strokeStyle="#2a1a12",i.lineWidth=2,i.beginPath(),i.ellipse(c,h,u,Math.max(1.5,f),0,0,Math.PI*2),i.stroke()}}function du(i,t,e,n,s="#2a1a12",r=26){i.strokeStyle=s,i.lineWidth=6,i.lineCap="round";for(let o of[-1,1]){let a=0,l=0;(n==="angry"||n==="annoyed")&&(a=8,l=-4),(n==="shock"||n==="scared")&&(a=-10,l=-8),n==="confused"&&(a=o>0?-8:2,l=o>0?-12:0),(n==="tired"||n==="sleepy")&&(a=-3,l=4),i.beginPath(),i.moveTo(t+o*(r-14),e-22+a),i.lineTo(t+o*(r+12),e-24+l),i.stroke()}}function uu(i,t,e,n,s){i.fillStyle="#5a1e1e",i.strokeStyle="#2a1010",i.lineWidth=3;let r=s==="shock"||s==="scared"?14:22,o=3+n*16+(s==="shock"?10:0);if(n<.05&&s==="happy"){i.beginPath(),i.arc(t,e-6,18,.2*Math.PI,.8*Math.PI),i.stroke();return}if(n<.05&&(s==="angry"||s==="annoyed")){i.beginPath(),i.moveTo(t-16,e+2),i.lineTo(t+16,e-2),i.stroke();return}i.beginPath(),i.ellipse(t,e,r,o,0,0,Math.PI*2),i.fill(),i.stroke(),o>8&&(i.fillStyle="#ff7a8a",i.beginPath(),i.ellipse(t,e+o*.45,r*.55,o*.35,0,0,Math.PI*2),i.fill())}function $c(i,t,e){let n=i.createLinearGradient(0,0,0,256);n.addColorStop(0,t),n.addColorStop(1,e),i.fillStyle=n,i.fillRect(0,0,256,256)}function fu(i,t,{t:e=0,talk:n=0,mood:s="normal",blink:r=0}={}){i.save(),i.clearRect(0,0,256,256);let o=Math.sin(e*2)*2+n*2;if(t==="museos"){$c(i,"#031208","#062a14"),i.fillStyle="#0c3a1f",i.fillRect(40,50,176,140),i.strokeStyle="#6dff9e",i.lineWidth=4,i.strokeRect(40,50,176,140),i.fillStyle="#6dff9e";let d=r>.5;i.fillRect(84,92,22,d?4:22),i.fillRect(150,92,22,d?4:22),i.beginPath(),i.lineWidth=4,i.strokeStyle="#6dff9e";for(let u=0;u<=40;u++){let f=78+u*2.5,p=152+Math.sin(u*.9+e*20)*n*14;u?i.lineTo(f,p):i.moveTo(f,p)}i.stroke();for(let u=0;u<256;u+=4)i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(0,u,256,2);i.fillStyle="#6dff9e",i.font="bold 18px monospace",i.fillText("MUSE-OS",92,222),i.restore();return}let a=128,l=132+o;if(t==="dev"){let d=s==="angry";$c(i,d?"#4a0000":"#14162a",d?"#1a0000":"#2a1640"),i.fillStyle=d?"rgba(255,60,60,0.3)":"rgba(80,160,255,0.25)",i.fillRect(150,30,100,70),i.fillStyle=d?"#6a1030":"#3a2a5a",i.beginPath(),i.ellipse(a,270+o,110,90,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(a,l-6,78,86,0,0,Math.PI*2),i.fill(),i.fillStyle=d?"#e8907a":"#f0c4a0",i.beginPath(),i.ellipse(a,l+4,56,62,0,0,Math.PI*2),i.fill(),i.fillStyle="#2a1a10",i.beginPath(),i.moveTo(a-60,l-20);for(let u=0;u<=10;u++){let f=Math.PI+u/10*Math.PI,p=64+(u%2?16:0)+Math.sin(e*3+u)*2;i.lineTo(a+Math.cos(f)*p,l-14+Math.sin(f)*p*.85)}i.lineTo(a+60,l-20),i.quadraticCurveTo(a,l-38,a-60,l-20),i.fill(),i.strokeStyle="#111",i.lineWidth=10,i.beginPath(),i.arc(a,l+60,50,.1*Math.PI,.9*Math.PI),i.stroke(),i.fillStyle="#ff6fae",i.fillRect(a-62,l+62,22,30),i.fillRect(a+40,l+62,22,30),hu(i,a,l,{mood:s,blink:r,t:e,sep:24}),i.strokeStyle="rgba(90,40,90,0.6)",i.lineWidth=3;for(let u of[-1,1])i.beginPath(),i.arc(a+u*24,l+14,12,.15*Math.PI,.85*Math.PI),i.stroke();if(du(i,a,l,s,"#2a1a10",24),uu(i,a,l+36,n,s),d){i.strokeStyle="#b00000",i.lineWidth=4;let u=a+34,f=l-40;i.beginPath(),i.moveTo(u-8,f),i.lineTo(u-2,f),i.moveTo(u+2,f),i.lineTo(u+8,f),i.moveTo(u,f-8),i.lineTo(u,f-2),i.moveTo(u,f+2),i.lineTo(u,f+8),i.stroke()}s==="tired"&&(i.fillStyle="#fff",i.font="bold 26px Arial",i.fillText("z",200,60+Math.sin(e*2)*6),i.font="bold 18px Arial",i.fillText("z",220,40+Math.sin(e*2+1)*6)),i.fillStyle="#eee",i.fillRect(196,190+o,34,40),i.strokeStyle="#eee",i.lineWidth=5,i.beginPath(),i.arc(232,210+o,9,-Math.PI/2,Math.PI/2),i.stroke(),i.fillStyle="#c33",i.font="bold 11px Arial",i.fillText("DEV",202,214+o),i.restore();return}let c=t==="aaron";$c(i,c?"#3a5a7a":"#0e1a30",c?"#1a2a3a":"#050a14"),c||(i.fillStyle="rgba(80,255,140,0.12)",i.fillRect(10,30,70,50),i.fillRect(176,30,70,50)),i.fillStyle="#8fb3e0",i.beginPath(),i.ellipse(a,280+o,112,95,0,0,Math.PI*2),i.fill(),i.fillStyle="#6f93c0",i.beginPath(),i.moveTo(a-30,196+o),i.lineTo(a,226+o),i.lineTo(a+30,196+o),i.fill(),i.fillStyle="#ffd34d",i.beginPath(),i.moveTo(a-62,214+o),i.lineTo(a-48,208+o),i.lineTo(a-36,214+o),i.lineTo(a-40,232+o),i.lineTo(a-58,232+o),i.fill();let h=c?"#b07a52":"#e3b48f";i.fillStyle=h,i.fillRect(a-18,l+40,36,30),i.beginPath(),i.ellipse(a-58,l+6,10,16,0,0,Math.PI*2),i.ellipse(a+58,l+6,10,16,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(a,l+4,58,64,0,0,Math.PI*2),i.fill(),(s==="scared"||s==="shock")&&(i.fillStyle="rgba(120,180,255,0.9)",i.beginPath(),i.ellipse(a+50,l-18+e*40%30,5,8,0,0,Math.PI*2),i.fill()),s==="happy"&&(i.fillStyle="rgba(255,120,120,0.35)",na(i,a-36,l+22,10),i.fill(),na(i,a+36,l+22,10),i.fill()),hu(i,a,l,{mood:s,blink:r,t:e}),du(i,a,l,s),i.fillStyle=c?"#8a5a3a":"#c99070",i.beginPath(),i.ellipse(a,l+16,7,9,0,0,Math.PI*2),i.fill(),c&&(i.fillStyle="#1a1210",i.beginPath(),i.ellipse(a,l+30,24,7,0,0,Math.PI*2),i.fill()),uu(i,a,l+40,n,s),i.fillStyle="#1b2440",i.beginPath(),i.ellipse(a,l-44,64,40,0,Math.PI,0),i.fill(),i.fillRect(a-64,l-46,128,12),i.beginPath(),i.ellipse(a,l-34,72,12,0,0,Math.PI),i.fill(),i.fillStyle="#ffd34d",i.beginPath(),i.moveTo(a,l-76),i.lineTo(a+12,l-66),i.lineTo(a+8,l-52),i.lineTo(a-8,l-52),i.lineTo(a-12,l-66),i.fill(),c&&(i.fillStyle="#111",i.fillRect(a-50,l-70,40,14),i.fillRect(a+10,l-70,40,14),i.fillStyle="#fff",i.font="bold 13px Arial",i.fillText("DAY SHIFT",a-34,248)),s==="sleepy"&&(i.fillStyle="#fff",i.font="bold 26px Arial",i.fillText("Z",200,70+Math.sin(e*2)*6)),i.restore()}var Cr=class{constructor(t,{canvas:e,img:n,video:s,root:r=t,nameEl:o=null}){this.root=r,this.frame=t,this.canvas=e,this.ctx=e.getContext("2d"),this.img=n,this.video=s,this.nameEl=o,this.who="guard",this.mood="normal",this.talk=0,this.speaking=!1,this.blinkT=2,this.blink=0,this.t=0}setMode(t){this.frame.classList.toggle("has-video",t==="video"),this.frame.classList.toggle("has-img",t==="img")}update(t){this.t+=t,this.blinkT-=t,this.blinkT<0&&(this.blink=1,this.blinkT<-.12&&(this.blink=0,this.blinkT=2+Math.random()*3));let e=this.speaking?Math.abs(Math.sin(this.t*17))*(.5+Math.random()*.5):0;this.talk+=(e-this.talk)*Math.min(1,t*25),this.frame.classList.toggle("talking",this.speaking),fu(this.ctx,this.who,{t:this.t,talk:this.talk,mood:this.mood,blink:this.blink})}},ia=class{constructor(t){this.game=t,this.sub=q("#subtitle"),this.subName=q(".sub-name",this.sub),this.subText=q(".sub-text",this.sub),this.fcRoot=q("#facecam");let e=q(".fc-frame",this.fcRoot);if(this.facecam=new Cr(e,{canvas:q("canvas",e),img:q("img",e),video:q("video",e),root:this.fcRoot,nameEl:q(".fc-name",this.fcRoot)}),this.tv=null,this.current=null,this.typeT=0,this.fullText="",this.voices=[],this.allowClickSkip=!1,"speechSynthesis"in window){let s=()=>{this.voices=speechSynthesis.getVoices().filter(r=>/^en/i.test(r.lang))};s(),speechSynthesis.onvoiceschanged=s}let n=s=>{!this.current||!this.allowClickSkip||s.target.closest&&s.target.closest("button, .modal, #menu")||this.skipLine()};addEventListener("mousedown",n),addEventListener("touchstart",n,{passive:!0})}stationFor(t){return this.tv&&(t==="dev"||this.forceTv)?this.tv:this.facecam}skipLine(){this.current&&this.current.skip()}stop(){this.skipLine()}update(t){if(this.current){this.typeT+=t;let e=Math.min(this.fullText.length,Math.floor(this.typeT*55));e!==this.shown&&(this.shown=e,this.subText.textContent=this.fullText.slice(0,e),this.sub.classList.toggle("done",e>=this.fullText.length))}this.fcRoot.classList.contains("off")||this.facecam.update(t),this.tv&&this.tv.update(t)}say(t,e={}){let n=ns[t]||{who:e.who||"guard",text:t,mood:"normal"};return this.sayRaw(n.who,n.text,{mood:n.mood,clip:ns[t]?t:null,...e})}async sayRaw(t,e,{mood:n="normal",clip:s=null,hold:r=.35,showCam:o=!0}={}){let a=this.game;if(a.sched.skipping)return;this.skipLine();let l,c=new Promise(g=>l=g),h={skipped:!1,skip:()=>{h.skipped=!0,l()}};this.current=h;let d=this.stationFor(t);d.who=t,d.mood=n;let u=Rr[t]?.name()||t.toUpperCase(),f=a.save.settings.subtitles!=="off";this.sub.classList.toggle("off",!f),this.sub.dataset.who=t,this.subName.textContent=u,this.fullText=e,this.typeT=0,this.shown=-1,this.subText.textContent="",this.sub.classList.remove("done"),this.sub.style.animation="none",this.sub.offsetWidth,this.sub.style.animation="",d===this.facecam?(this.fcRoot.classList.toggle("off",!o),this.fcRoot.dataset.who=t,d.nameEl.textContent=u,this.fcRoot.style.animation="none",this.fcRoot.offsetWidth,this.fcRoot.style.animation=""):this.tvBubble?.(e);let p=s?await a.clips.resolve(s):null;if(h.skipped)return this._end(h,d);let y=a.clips.portrait(t),m=g=>new Promise(_=>setTimeout(_,g*1e3));if(p){d.setMode("video");let g=d.video;g.src=p.url,g.muted=!1,g.volume=Math.min(1,a.save.settings.master*1.1),g.currentTime=0,d.speaking=!1;let _=new Promise(v=>{g.onended=v,g.onerror=v});try{await g.play()}catch{g.muted=!0,g.play().catch(()=>{})}await Promise.race([_,c,m(30)]),g.pause()}else{y?(d.setMode("img"),d.img.src=y.url):d.setMode("canvas"),d.speaking=!0;let g=1.2+e.length*.055,_=a.save.settings.voice||"tts",v;if(_==="tts"&&"speechSynthesis"in window&&this.voices.length)v=Promise.race([this._tts(t,e),m(g*1.8+2)]);else if(_!=="off"){let x=a.audio.babble(e,t);v=m(Math.max(x,.6))}else v=m(g);await Promise.race([v,c]),"speechSynthesis"in window&&speechSynthesis.cancel(),d.speaking=!1,this.subText.textContent=e,this.sub.classList.add("done"),h.skipped||await Promise.race([m(r),c])}return this._end(h,d)}_end(t,e){this.current===t&&(this.current=null,this.sub.classList.add("off"),e===this.facecam?this.fcRoot.classList.add("off"):this.tvBubble?.(null),e.speaking=!1,e.setMode(this.game.clips.portrait(e.who)?"img":"canvas"))}_tts(t,e){return new Promise(n=>{let s=e.replace(/\*[^*]+\*/g,"").replace(/—/g,", ").replace(/MUSE-OS/g,"Muse O S"),r=new SpeechSynthesisUtterance(s),o=this.voices,a={guard:0,dev:1,aaron:2,museos:3};r.voice=o[(a[t]??0)%o.length],r.pitch={guard:1.05,dev:.85,aaron:1.3,museos:.4}[t]??1,r.rate={guard:1.08,dev:1,aaron:1.12,museos:.88}[t]??1,r.volume=Math.min(1,(this.game.save.settings.master??.8)*1.1),r.onend=n,r.onerror=n,speechSynthesis.cancel(),speechSynthesis.speak(r)})}setPaused(t){let e=this.facecam.video;t?(e.pause(),"speechSynthesis"in window&&speechSynthesis.pause()):(this.current&&e.src&&!e.ended&&this.facecam.frame.classList.contains("has-video")&&e.play().catch(()=>{}),"speechSynthesis"in window&&speechSynthesis.resume())}};var Zs="assets/clips/",Lx=["mp4","webm","mov"],Dx=["png","jpg","jpeg","webp"],Ux=["guard","dev","aaron"];function Nx(){return new Promise((i,t)=>{if(!("indexedDB"in window))return t(new Error("no indexedDB"));let e=indexedDB.open("locked-out-clips",1);e.onupgradeneeded=()=>e.result.createObjectStore("clips"),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}function pu(i,t){return new Promise(e=>{let n=!1,s=document.createElement(t==="video"?"video":"img"),r=o=>{if(!n){if(n=!0,t==="video"){s.removeAttribute("src");try{s.load()}catch{}}e(o)}};t==="video"?(s.preload="metadata",s.muted=!0,s.onloadedmetadata=()=>r(!0)):s.onload=()=>r(!0),s.onerror=()=>r(!1),setTimeout(()=>r(!1),8e3),s.src=i})}var sa=class{constructor(){this.files={},this.recorded={},this.probes={},this.db=null,this.listeners=new Set}async init(){try{this.db=await Nx();let t=await this._req(e=>e.getAllKeys());for(let e of t){let n=await this._req(s=>s.get(e));n&&this._setRecorded(e,n)}}catch(t){console.info("[clips] browser storage unavailable \u2014 recording disabled",t?.message||t)}this._probeAll()}_req(t,e="readonly"){return new Promise((n,s)=>{let r=this.db.transaction("clips",e),o=t(r.objectStore("clips"));o.onsuccess=()=>n(o.result),o.onerror=()=>s(o.error)})}_setRecorded(t,e){this.recorded[t]&&URL.revokeObjectURL(this.recorded[t].url),this.recorded[t]={url:URL.createObjectURL(e),blob:e,type:e.type||"",source:"recorded"}}async _probeAll(){let t=[];for(let s of Object.keys(ns))t.push(()=>this._probeVideo(s));for(let s of Ux)t.push(()=>this._probeImage(s));let e=0,n=async()=>{for(;e<t.length;)await t[e++]()};await Promise.all([n(),n(),n(),n()]),this._emit()}_probeVideo(t){return this.probes[t]||(this.probes[t]=(async()=>{for(let e of Lx){let n=`${Zs}${t}.${e}`;if(await pu(n,"video")){this.files[t]={url:n,source:"file"};return}}})()),this.probes[t]}_probeImage(t){let e="portrait_"+t;return this.probes[e]||(this.probes[e]=(async()=>{for(let n of Dx){let s=`${Zs}${t}.${n}`;if(await pu(s,"img")){this.files[e]={url:s,source:"file"};return}}})()),this.probes[e]}async resolve(t){if(this.recorded[t])return this.recorded[t];if(this.files[t])return this.files[t];let e=this._probeVideo(t);return await Promise.race([e,new Promise(n=>setTimeout(n,350))]),this.recorded[t]||this.files[t]||null}get(t){return this.recorded[t]||this.files[t]||null}portrait(t){let e="portrait_"+t;return this.recorded[e]||this.files[e]||null}async save(t,e){this._setRecorded(t,e),this.db&&await this._req(n=>n.put(e,t),"readwrite"),this._emit()}async remove(t){this.recorded[t]&&URL.revokeObjectURL(this.recorded[t].url),delete this.recorded[t],this.db&&await this._req(e=>e.delete(t),"readwrite"),this._emit()}get canStore(){return!!this.db}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}_emit(){for(let t of this.listeners)t()}};var mu={},be=(i,t)=>mu[i]||(mu[i]=t()),Zc={};function jt(i,t){return Zc[i]||(Zc[i]=new ct(t)),Zc[i]}var ft={marble:()=>jt("marble",{color:15657698,roughness:.35}),stoneWhite:()=>jt("stoneWhite",{color:14275527,roughness:.6}),darkWood:()=>jt("darkWood",{color:4861724,roughness:.6}),wood:()=>jt("wood",{color:9067059,roughness:.7}),metal:()=>jt("metal",{color:9146262,roughness:.35,metalness:.8}),black:()=>jt("black",{color:1381653,roughness:.6}),brass:()=>jt("brass",{color:13214282,roughness:.35,metalness:.9}),velvet:()=>jt("velvet",{color:9048098,roughness:.9}),glass:()=>jt("glass",{color:11193565,roughness:.05,metalness:.1,transparent:!0,opacity:.18,depthWrite:!1}),plant:()=>jt("plant",{color:3107636,roughness:.8,side:He}),terracotta:()=>jt("terracotta",{color:11884591,roughness:.75}),bronze:()=>jt("bronze",{color:9071162,roughness:.4,metalness:.7}),red:()=>jt("red",{color:10230812,roughness:.8}),dough:()=>jt("dough",{color:13933148,roughness:.7})};function Re(i,t=!0,e=!0){return i.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),i}function xt(i,t,e,n,s=0,r=0,o=0){let a=new V(new ie(i,t,e),n);return a.position.set(s,r+t/2,o),a}var gu=[16744118,7027230,16774112,8049663,16765773],yu=[16726843,3918335,16769357,8257387,16777215,12086271];function Wn({frosting:i=0,glow:t=!1,scale:e=1}={}){let n=new ut,s=new V(be("dough",()=>new gn(.12,.062,12,24)),ft.dough());s.rotation.x=Math.PI/2,n.add(s);let r=gu[i%gu.length],o=jt("frost"+r+t,{color:r,roughness:.3,emissive:t?r:0,emissiveIntensity:t?.35:0}),a=new V(be("frost",()=>new gn(.12,.058,10,24,Math.PI*2)),o);a.rotation.x=Math.PI/2,a.scale.set(1.03,1.03,.62),a.position.y=.022,n.add(a);let l=we(i*31+7),c=be("sprinkle",()=>new En(.006,.022,2,4));for(let h=0;h<14;h++){let d=l()*Math.PI*2,u=.09+l()*.06,f=yu[Math.floor(l()*yu.length)],p=new V(c,jt("spr"+f,{color:f,roughness:.4,emissive:t?f:0,emissiveIntensity:t?.3:0}));p.position.set(Math.cos(d)*u,.06,Math.sin(d)*u),p.rotation.set(Math.PI/2,0,l()*Math.PI),n.add(p)}return n.scale.setScalar(e),n}var Jc=null;function xu(i=0){let t=new ut,e=Wn({frosting:i,glow:!0,scale:1.3});if(e.rotation.x=.5,t.add(e),!Jc){let[s,r]=_e(128,128),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,190,220,0.9)"),o.addColorStop(.4,"rgba(255,120,180,0.25)"),o.addColorStop(1,"rgba(255,120,180,0)"),r.fillStyle=o,r.fillRect(0,0,128,128),Jc=Te(s)}let n=new Lo(new _r({map:Jc,transparent:!0,depthWrite:!1,blending:po}));return n.scale.set(.9,.9,1),t.add(n),t.userData.spin=e,t.userData.halo=n,t}function Kc(i=7,t=.45,e=ft.marble()){let n=new ut;n.add(xt(t*2.6,.35,t*2.6,e));let s=new V(be("colshaft"+i+t,()=>new oe(t*.88,t,i-.8,20)),e);return s.position.y=.35+(i-.8)/2,n.add(s),n.add(xt(t*2.4,.15,t*2.4,e,0,i-.45,0)),n.add(xt(t*2.7,.3,t*2.7,e,0,i-.3,0)),Re(n)}function is(i=.8,t=1.1,e=ft.marble()){let n=new ut;return n.add(xt(i*1.15,.1,i*1.15,e)),n.add(xt(i,t-.2,i,e,0,.1,0)),n.add(xt(i*1.15,.1,i*1.15,e,0,t-.1,0)),Re(n)}function ra(i,t=15328474){let e=new ut,n=jt("bust"+t,{color:t,roughness:.45});e.add(is(.7,1.2));let s=new V(be("bustsh",()=>new ee(.32,16,10,0,Math.PI*2,0,Math.PI/2)),n);s.scale.set(1.1,.6,.65),s.position.y=1.2,e.add(s);let r=new V(be("bustneck",()=>new oe(.08,.1,.2,10)),n);r.position.y=1.42,e.add(r);let o=new V(be("busthead",()=>new ee(.15,16,12)),n);o.scale.set(.9,1.1,1),o.position.y=1.62,e.add(o);let a=new V(be("bustnose",()=>new Pn(.03,.08,6)),n);a.rotation.x=Math.PI/2,a.position.set(0,1.62,.15),e.add(a);let l=new V(be("laurel",()=>new gn(.15,.02,6,16)),ft.brass());if(l.rotation.x=Math.PI/2-.2,l.position.y=1.72,e.add(l),i){let c=new V(new Ft(.6,.12),new ct({map:Ae(i,{w:256,h:52,bg:"#2a241c",fg:"#e9d7a8",font:"bold 26px Georgia, serif"}),roughness:.5}));c.position.set(0,.95,.357),e.add(c)}return Re(e)}function vu(){let i=[],t=[[0,0],[.08,0],[.12,.08],[.22,.3],[.26,.5],[.22,.75],[.1,.92],[.08,1.05],[.11,1.1]];for(let[s,r]of t)i.push(new tt(s,r));let e=new ut,n=new V(be("amph",()=>new br(i,18)),ft.terracotta());e.add(n);for(let s of[-1,1]){let r=new V(be("amphh",()=>new gn(.1,.02,6,12,Math.PI)),ft.terracotta());r.position.set(s*.12,.88,0),r.rotation.z=s>0?-Math.PI/2:Math.PI/2,e.add(r)}return Re(e)}function oa(i=2.2){let t=new ut;t.add(xt(i,.08,.5,ft.darkWood(),0,.42,0));for(let e of[-1,1])t.add(xt(.08,.42,.42,ft.metal(),e*(i/2-.2),0,0));return Re(t)}function Js(){let i=new ut;i.add(new V(be("stanb",()=>new oe(.16,.18,.04,14)),ft.brass()));let t=new V(be("stanp",()=>new oe(.03,.03,.95,8)),ft.brass());t.position.y=.48,i.add(t);let e=new V(be("stant",()=>new ee(.05,10,8)),ft.brass());return e.position.y=.98,i.add(e),Re(i)}function Pr(i){let t=new Vs(new P(0,.92,0),new P(i/2,.62,0),new P(i,.92,0)),e=new V(new Vo(t,12,.025,6),ft.velvet());return e.castShadow=!0,e}function jc(i=1){let t=new ut,e=we(i),n=be("leaf",()=>{let r=new Gn;return r.moveTo(0,0),r.quadraticCurveTo(.12,.4,0,.9),r.quadraticCurveTo(-.12,.4,0,0),new zo(r,4)});for(let r=0;r<9;r++){let o=new V(n,ft.plant()),a=r/9*Math.PI*2+e();o.rotation.set(0,a,0),o.rotateX(-.6-e()*.5),o.scale.setScalar(.8+e()*.7),t.add(o)}let s=new V(be("pot",()=>new oe(.25,.2,.35,12)),ft.terracotta());return s.position.y=.17,t.add(s),t.children.forEach((r,o)=>{o<9&&(r.position.y=.33)}),Re(t,!0,!1)}function Qc(i=1,t=1){let e=we(i),n=new Bo(.6*t,1),s=n.attributes.position;for(let o=0;o<s.count;o++)s.setXYZ(o,s.getX(o)*(.8+e()*.4),s.getY(o)*(.6+e()*.3),s.getZ(o)*(.8+e()*.4));n.computeVertexNormals();let r=new V(n,jt("rock",{color:6050634,roughness:.95,flatShading:!0}));return r.position.y=.2*t,r.castShadow=r.receiveShadow=!0,r}function aa(i=1.4,t=1,e=.8,n=null){let s=new ut;s.add(xt(i,.9,e,ft.darkWood()));let r=xt(i,t,e,ft.glass(),0,.9,0);return r.castShadow=!1,s.add(r),s.add(xt(i+.04,.04,e+.04,ft.brass(),0,.9+t,0)),n&&(n.position.y=.9,s.add(n)),Re(s),r.castShadow=!1,s}function ss(i,t,e={}){let n=new ut,s=xt(.08,.9,.08,ft.black());n.add(s);let r=new V(new Ft(.9,.56),new ct({map:Yc({title:i,body:t,...e}),roughness:.6,emissive:16777215,emissiveIntensity:.02}));r.position.set(0,1.05,.05),r.rotation.x=-.5,n.add(r);let o=new V(new ie(.96,.6,.03),ft.black());return o.position.z=-.02,r.add(o),Re(n,!0,!0)}function Ks(i,t,e=2,n=1.25,s={}){return new V(new Ft(e,n),new ct({map:Yc({title:i,body:t,w:512,h:Math.round(512*n/e),...s}),roughness:.6,emissive:16777215,emissiveIntensity:.03}))}function th({title:i="PUZZLE",color:t="#6dff9e"}={}){let e=new ut;e.add(xt(.7,1,.5,ft.black()));let n=xt(.8,.08,.6,ft.metal(),0,1,0);e.add(n);let[s,r]=_e(320,200),o=Te(s),a=new fe({map:o,toneMapped:!1}),l=new V(new Ft(.62,.39),a);l.position.set(0,1.32,.03),l.rotation.x=-.45;let c=xt(.7,.46,.06,ft.black(),0,1.08,0);c.rotation.x=-.45,c.position.set(0,1.31,-.005),e.add(c),e.add(l);let h=new De(t,.8,3.5,2);h.position.set(0,1.5,.5),e.add(h);let d=0,u=(f,p=t,y="")=>{r.fillStyle="#05080a",r.fillRect(0,0,320,200),r.strokeStyle=p,r.lineWidth=6,r.strokeRect(6,6,308,188),r.fillStyle=p,r.font='bold 26px "Courier New", monospace',r.textAlign="center",r.fillText(i,160,48),r.font='bold 22px "Courier New", monospace',f.forEach((m,g)=>r.fillText(m,160,98+g*30)),y&&(r.font='18px "Courier New", monospace',r.fillText(y,160,178));for(let m=0;m<200;m+=4)r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,m,320,2);o.needsUpdate=!0,h.color.set(p)};return u(["LOCKED"],t,"[E] INSPECT"),Re(e),l.castShadow=!1,{group:e,draw:u,light:h,update(f){d+=f,a.color.setScalar(.85+Math.sin(d*6)*.15)}}}function _u(){let i=new ut,t=ft.bronze(),e=xt(1.3,.9,1.1,t,0,.55,0);i.add(e);for(let s of[-1,1]){let r=new V(be("wheel",()=>new gn(.55,.06,8,24)),ft.darkWood());r.position.set(s*.75,.6,0),r.rotation.y=Math.PI/2,i.add(r);for(let o=0;o<4;o++){let a=xt(.04,1.1,.04,ft.darkWood(),s*.75,.05,0);a.rotation.x=o*Math.PI/4,a.position.set(s*.75,.6,0),i.add(a)}}let n=xt(.08,.08,2.2,ft.darkWood(),0,.5,1.6);return i.add(n),Re(i)}function Mu(){let i=new ut,t=jt("trik",{color:13221019,roughness:.8,map:Me("bone",1,1)}),e=new V(be("frill",()=>new hi(.85,24,0,Math.PI)),jt("frillm",{color:12760207,roughness:.8,side:He}));e.position.set(0,.5,-.2),e.rotation.x=-.3,i.add(e);let n=new V(be("trihead",()=>new Pn(.35,1.2,10)),t);n.rotation.x=Math.PI/2+.3,n.position.set(0,.35,.5),i.add(n);let s=be("horn",()=>new Pn(.07,.8,8));for(let o of[-1,1]){let a=new V(s,t);a.position.set(o*.22,.7,.2),a.rotation.set(1.1,0,-o*.2),i.add(a)}let r=new V(s,t);return r.scale.set(.8,.45,.8),r.position.set(0,.5,.95),r.rotation.x=.6,i.add(r),Re(i)}function bu(){let i=new ut,t=jt("ammo",{color:11046506,roughness:.6});for(let e=0;e<4;e++){let n=new V(new gn(.06+e*.045,.02+e*.012,6,18),t);n.position.y=.25,i.add(n)}return i}function Eu(){let i=new ut,t=jt("sarc",{color:13935674,roughness:.35,metalness:.7}),e=jt("sarcb",{color:2047370,roughness:.5}),n=new V(be("sarcb",()=>new En(.32,1.4,4,12)),t);n.scale.set(1,1,.55),n.position.y=1.05,i.add(n);let s=new V(be("sarcf",()=>new ee(.2,12,10)),t);s.position.set(0,1.62,.12),s.scale.set(1,1.2,.6),i.add(s);for(let o of[-1,1]){let a=xt(.12,.6,.05,e,o*.2,1.35,.13);i.add(a)}let r=new V(be("sarce",()=>new ie(.22,.03,.02)),jt("sarceye",{color:1118481}));return r.position.set(0,1.66,.24),i.add(r),Re(i)}function eh(i=1){let t=we(i),e=new ut,n=jt("sheet",{color:14210252,roughness:.95}),s=1.6+t()*.6,r=new oe(.18,.5,s,12,6),o=r.attributes.position;for(let c=0;c<o.count;c++){let h=o.getY(c),d=Math.atan2(o.getZ(c),o.getX(c)),u=1+Math.sin(d*5+h*3)*.06;o.setX(c,o.getX(c)*u),o.setZ(c,o.getZ(c)*u)}r.computeVertexNormals();let a=new V(r,n);a.position.y=s/2,e.add(a);let l=new V(be("sheethead",()=>new ee(.22,12,10)),n);if(l.position.y=s+.1,e.add(l),t()<.5){let c=new V(be("sheetarm",()=>new En(.07,.5,4,6)),n);c.position.set(.3,s*.75,.15),c.rotation.set(-.9,0,-.5),e.add(c)}return Re(e)}function nh(i=1){let t=jt("crate",{map:Me("crate"),roughness:.85}),e=new V(be("crate",()=>new ie(1,1,1)),t);return e.scale.setScalar(i),e.position.y=i/2,e.castShadow=e.receiveShadow=!0,e}function ih(i=1.8,t=.8){let e=new ut;e.add(xt(i,.06,t,ft.darkWood(),0,.74,0));for(let n of[-1,1])e.add(xt(.06,.74,t-.05,ft.darkWood(),n*(i/2-.05),0,0));return e.add(xt(.5,.6,t-.1,ft.darkWood(),i/2-.35,.08,0)),Re(e)}function Su(){let i=new ut,t=jt("chairseat",{color:2238e3,roughness:.7});i.add(xt(.5,.08,.5,t,0,.45,0));let e=xt(.5,.6,.07,t,0,.55,-.24);i.add(e);let n=new V(new oe(.03,.03,.4,8),ft.metal());n.position.y=.25,i.add(n);for(let s=0;s<5;s++){let r=xt(.04,.03,.32,ft.metal(),0,.03,0);r.rotation.y=s/5*Math.PI*2,r.position.set(Math.sin(r.rotation.y)*.16,.03,Math.cos(r.rotation.y)*.16),i.add(r)}return Re(i)}function wu(i=.95,t=.6,e=1024,n=640){let s=new ut;s.add(xt(.25,.03,.2,ft.black())),s.add(xt(.05,.25,.05,ft.black(),0,.03,-.03));let r=xt(i+.06,t+.06,.05,ft.black(),0,.25,-.03);s.add(r);let[o,a]=_e(e,n),l=Te(o),c=new V(new Ft(i,t),new fe({map:l,toneMapped:!1}));c.position.set(0,.28+t/2,0),s.add(c);let h=new De(10471167,1.2,4,2);return h.position.set(0,.6,.5),s.add(h),Re(s),c.castShadow=!1,{group:s,canvas:o,ctx:a,texture:l,screen:c,glow:h}}function Ui(){let i=new ut,t=new V(new oe(.028,.03,.26,12),jt("flbody",{color:1842204,roughness:.4,metalness:.6}));t.rotation.x=Math.PI/2,i.add(t);let e=new V(new oe(.045,.03,.08,14),jt("flhead",{color:2763306,roughness:.3,metalness:.8}));e.rotation.x=Math.PI/2,e.position.z=-.16,i.add(e);let n=new V(new hi(.04,16),new fe({color:16774876}));n.position.z=-.201,n.rotation.y=Math.PI,i.add(n);let s=new V(new oe(.031,.031,.1,12),jt("flgrip",{color:3355443,roughness:.9}));return s.rotation.x=Math.PI/2,s.position.z=.06,i.add(s),i.userData.lens=n,i}function la(){return new V(new ie(.7,.25,.08),[ft.black(),ft.black(),ft.black(),ft.black(),new fe({map:Ae("EXIT",{w:256,h:96,bg:"#0a3d1c",fg:"#6dff9e",font:"bold 64px Arial Black, Arial"}),toneMapped:!1}),ft.black()])}function sh(i,t=""){let e=new ut;e.add(xt(.06,1.6,.06,ft.brass()));let n=new V(new Ft(1.5,.45),new ct({map:Ae(i+(t?"  "+t:""),{w:512,h:150,bg:"#1d2433",fg:"#f3e6c4",font:"bold 44px Arial Black, Arial",border:"#c9a24a"}),roughness:.5,emissive:16777215,emissiveIntensity:.05,side:He}));return n.position.y=1.6,e.add(n),Re(e)}function Tu(){let i=new ut;i.add(ih(1.4,.7));let t=xt(.4,.06,.25,ft.darkWood(),0,.77,0);i.add(t);let e=xt(.25,.03,.05,ft.brass(),0,.86,0);i.add(e);let n=new V(new oe(.035,.035,.03,12),ft.black());n.position.set(.12,.9,0),i.add(n);let s=new ct({color:3348992,emissive:16755251,emissiveIntensity:0}),r=new V(new ee(.09,14,10),s);r.position.set(-.45,1,0),i.add(r);let o=new V(new oe(.05,.07,.2,10),ft.brass());o.position.set(-.45,.86,0),i.add(o);let a=new De(16755251,0,6,2);return a.position.set(-.45,1.15,.2),i.add(a),Re(i),{group:i,setLamp(l){s.emissiveIntensity=l?3:0,a.intensity=l?3:0}}}function Au(){let i=new ut,t=new V(new ee(.6,16,12),jt("beanbag",{color:12729194,roughness:.9}));return t.scale.set(1,.55,1),t.position.y=.3,i.add(t),Re(i)}function Ru(){let i=new ut;i.add(xt(1,2,.8,jt("vend",{color:11739178,roughness:.5})));let t=new V(new Ft(.62,1.3),new fe({map:Ae(`OUT OF
ORDER
(sorry)`,{w:256,h:512,bg:"#1a2a3a",fg:"#ff6b6b",font:"bold 54px Arial Black, Arial"}),toneMapped:!1}));return t.position.set(-.12,1.15,.401),i.add(t),Re(i)}function Xn(i,t,e,n=2){let s=new ie(i,t,e),r=s.attributes.uv,o=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;r.setXY(c,r.getX(c)*o[a][0]/n,r.getY(c)*o[a][1]/n)}return s}function ca(i,t,e=2){let n=new Ft(i,t),s=n.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*i/e,s.getY(r)*t/e);return n}var Ni=class{constructor(t){this.game=t,this.scene=new Po,this.colliders=[],this.interactables=[],this.triggers=[],this.updaters=[],this.collectibles=[],this.surface="marble",this.surfaceAt=null,this.wallT=.4}add(t,e=0,n=0,s=0,r=0){return t.position.set(e,n,s),t.rotation.y=r,this.scene.add(t),t}addCollider(t,e,n,s,r=null){let o={minX:Math.min(t,e),maxX:Math.max(t,e),minZ:Math.min(n,s),maxZ:Math.max(n,s),tag:r,enabled:!0};return this.colliders.push(o),o}addBoxCollider(t,e,n,s,r=0){let o=Math.abs(Math.sin(r))>.7,a=(o?s:n)/2,l=(o?n:s)/2;return this.addCollider(t-a,t+a,e-l,e+l)}addInteractable(t){let e={radius:2.4,enabled:!0,height:1.2,...t};return this.interactables.push(e),e}addTrigger(t){let e={once:!0,fired:!1,enabled:!0,...t};return this.triggers.push(e),e}addUpdater(t){return this.updaters.push(t),t}addCollectible(t,e,n,s,r=0){if(this.game.save.donuts.includes(t))return null;let o=xu(r);o.position.set(e,n,s),this.scene.add(o);let a={id:t,obj:o,base:n,t:Math.random()*6,taken:!1};return this.collectibles.push(a),a}wallX(t,e,n,s,r,o=[],a=2){this._wall("x",t,e,n,s,r,o,a)}wallZ(t,e,n,s,r,o=[],a=2){this._wall("z",t,e,n,s,r,o,a)}_wall(t,e,n,s,r,o,a,l){let c=this.wallT,h=[],d=Math.min(n,s),u=Math.max(n,s);for(let f of[...a].sort((p,y)=>p.c-y.c)){let p=f.c-f.w/2,y=f.c+f.w/2;p>d&&h.push([d,p,0,r]),f.h<r&&h.push([p,y,f.h,r]),d=y}d<u&&h.push([d,u,0,r]);for(let[f,p,y,m]of h){let g=p-f,_=(f+p)/2,v=m-y,x=t==="x"?Xn(g,v,c,l):Xn(c,v,g,l),C=new V(x,o);t==="x"?C.position.set(_,y+v/2,e):C.position.set(e,y+v/2,_),C.receiveShadow=!0,C.castShadow=y>0,this.scene.add(C),y===0&&(t==="x"?this.addCollider(f,p,e-c/2,e+c/2):this.addCollider(e-c/2,e+c/2,f,p))}}floor(t,e,n,s,r,o=0,a=2){let l=e-t,c=s-n,h=new V(ca(l,c,a),r);return h.rotation.x=-Math.PI/2,h.position.set((t+e)/2,o,(n+s)/2),h.receiveShadow=!0,this.scene.add(h),h}ceiling(t,e,n,s,r,o,a=2){let l=e-t,c=s-n,h=new V(ca(l,c,a),o);return h.rotation.x=Math.PI/2,h.position.set((t+e)/2,r,(n+s)/2),this.scene.add(h),h}update(t){for(let s of this.updaters)s(t);let e=this.game,n=e.player;for(let s of this.collectibles)if(!s.taken&&(s.t+=t,s.obj.position.y=s.base+Math.sin(s.t*2)*.08,s.obj.userData.spin.rotation.y+=t*1.6,s.obj.userData.halo.material.opacity=.6+Math.sin(s.t*4)*.3,n&&n.enabled)){let r=n.pos.x-s.obj.position.x,o=n.pos.z-s.obj.position.z;r*r+o*o<1.1*1.1&&Math.abs(s.obj.position.y-1)<1.6&&(s.taken=!0,this.scene.remove(s.obj),e.collectDonut(s.id))}if(n&&n.enabled)for(let s of this.triggers){if(!s.enabled||s.once&&s.fired)continue;let r;s.r!=null?r=Math.hypot(n.pos.x-s.x,n.pos.z-s.z)<s.r:r=n.pos.x>s.minX&&n.pos.x<s.maxX&&n.pos.z>s.minZ&&n.pos.z<s.maxZ,r&&!s.inside&&(s.fired=!0,s.onEnter?.()),s.inside=r}}dispose(){this.scene.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){let e=Array.isArray(t.material)?t.material:[t.material];for(let n of e)n.map&&!n.map.userData?.keep&&n.map.dispose(),n.dispose()}})}};var ha=null;function da(){return ha||(ha={bone:new ct({color:15129796,roughness:.72,map:Me("bone",1,2)}),dark:new ct({color:1380364,roughness:1}),tooth:new ct({color:16183518,roughness:.35}),eye:new ct({color:16723984,emissive:16722432,emissiveIntensity:5})},ha)}var Cu={};function Ye(i,t){return Cu[i]||(Cu[i]=t())}function oh(i,t,e,n,s,r=0){let o=new ie(i,t,e,6,6,10);o.translate(0,0,e/2);let a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l)/(i/2),h=a.getY(l)/(t/2),d=Math.pow(Math.pow(Math.abs(c),2.6)+Math.pow(Math.abs(h),2.6),1/2.6);if(d>1e-6){let p=Math.max(Math.abs(c),Math.abs(h))/d;a.setX(l,a.getX(l)*p),a.setY(l,a.getY(l)*p)}let u=a.getZ(l)/e;a.setX(l,a.getX(l)*(1+(n-1)*u));let f=a.getY(l)*(1+(s-1)*u);f>0&&(f-=r*u*u),a.setY(l,f)}return o.computeVertexNormals(),o}function Oe(i,t,e=!0){let n=new V(i,t);return n.castShadow=e,n.receiveShadow=!1,n}function ki(i,t,e,n){let s=new ut,r=Oe(Ye(`shaft${i}${t}${e}`,()=>new oe(e,t,i,8)),n);r.position.y=-i/2,s.add(r);let o=Oe(Ye(`knob${t}`,()=>new ee(t*1.35,10,8)),n);s.add(o);let a=Oe(Ye(`knob${e}`,()=>new ee(e*1.35,10,8)),n);return a.position.y=-i,s.add(a),s}function ah(i,t){let e=new ut,n=Oe(Ye("vcent",()=>new ee(.13,10,8)),t);n.scale.set(1,.85,1.25),e.add(n);let s=Oe(Ye("vspine",()=>new ie(.05,.34,.11)),t);s.position.y=.2,e.add(s);let r=Oe(Ye("vtrans",()=>new ie(.42,.05,.07)),t);return r.position.y=.05,e.add(r),e.scale.setScalar(i),e}function lh(i=da()){let t=new ut,e=1.65,n=Oe(Ye("skull",()=>oh(.62,.72,e,.55,.62,.12)),i.bone);n.position.z=-.1,t.add(n);let s=Oe(Ye("crest",()=>oh(.46,.16,1,.5,.6)),i.bone);s.position.set(0,.36,-.08),t.add(s);let r=Ye("sph",()=>new ee(.12,10,8)),o=[];for(let h of[-1,1]){let d=Oe(r,i.dark,!1);d.position.set(h*.25,.16,.36),d.scale.set(.7,.95,1.1),t.add(d);let u=new V(Ye("eye",()=>new ee(.06,10,8)),i.eye);u.position.set(h*.29,.16,.39),u.visible=!1,t.add(u),o.push(u);let f=Oe(r,i.dark,!1);f.position.set(h*.2,0,.88),f.scale.set(.55,.75,1.9),t.add(f);let p=Oe(r,i.dark,!1);p.position.set(h*.08,.1,1.46),p.scale.set(.35,.3,.45),t.add(p);let y=Oe(r,i.bone);y.position.set(h*.3,-.18,.05),y.scale.set(.8,1.2,1.4),t.add(y)}let a=Ye("tooth",()=>{let h=new Pn(.035,.17,6);return h.rotateX(Math.PI),h});for(let h of[-1,1])for(let d=0;d<10;d++){let u=.3+d*.125,f=(u+.1)/e,p=Oe(a,i.tooth,!1);p.position.set(h*(.31*(1-.45*f)-.035),-.36*(1-.38*f)-.06,u),p.scale.setScalar(d<2||d>7?.75:1.05),t.add(p)}let l=new ut;l.position.set(0,-.2,-.05),t.add(l);let c=Oe(Ye("jaw",()=>oh(.56,.2,1.55,.5,.8)),i.bone);c.position.set(0,-.27,0),l.add(c);for(let h of[-1,1])for(let d=0;d<9;d++){let u=.35+d*.125,f=u/1.55,p=Oe(a,i.tooth,!1);p.rotation.x=Math.PI,p.position.set(h*(.28*(1-.5*f)-.04),-.27+.1*(1-.2*f)+.06,u),p.scale.setScalar(.85),l.add(p)}return{head:t,jaw:l,eyes:o}}var rs=class{constructor({eyeLight:t=!0}={}){let e=da();this.group=new ut,this.body=new ut,this.body.position.y=3.42,this.group.add(this.body),this.alive=!1;let n=Oe(Ye("pelvis",()=>new ee(.45,14,10)),e.bone);n.scale.set(.9,.75,1.45),n.position.z=.05,this.body.add(n);for(let h of[-1,1]){let d=Oe(Ye("ilium",()=>new ee(.5,12,10)),e.bone);d.scale.set(.14,.55,1.35),d.position.set(h*.26,.14,.05),this.body.add(d);let u=Oe(Ye("pubis",()=>new oe(.05,.08,1,6)),e.bone);u.position.set(h*.15,-.55,.35),u.rotation.x=.5,this.body.add(u)}let s=[];for(let h=0;h<11;h++){let d=h/10,u=-.25+d*3,f=.38+Math.sin(d*Math.PI)*.1+d*.32;s.push([u,f]);let p=ah(1.05-.15*d,e.bone);p.position.set(0,f,u),p.rotation.x=-.1,this.body.add(p)}let r=Math.PI*2-.9;for(let h=0;h<9;h++){let d=h/8,u=.3+d*2.3,f=.38+Math.sin((u+.25)/3*Math.PI)*.1+(u+.25)/3*.32,p=.48+.34*Math.sin((.15+d*.75)*Math.PI),y=Ye(`rib${h}`,()=>new gn(p,.04,6,22,r)),m=Oe(y,e.bone);m.rotation.order="XYZ",m.rotation.x=.38,m.rotation.z=Math.PI/2+.45,m.scale.set(.58,1.12,1),m.position.set(0,f-p*1.05+.05,u-.15),this.body.add(m)}let o=new P(0,.86,2.85),a=new P(0,1.55,3.42);for(let h=0;h<5;h++){let d=o.clone().lerp(a,h/4),u=ah(.95,e.bone);u.position.copy(d),u.rotation.x=-.9,this.body.add(u)}this.headPivot=new ut,this.headPivot.position.set(0,1.72,3.5),this.body.add(this.headPivot);let l=lh(e);this.headPivot.add(l.head),this.jaw=l.jaw,this.eyes=l.eyes,this.eyeLight=null,t&&(this.eyeLight=new De(16722432,0,9,1.6),this.eyeLight.position.set(0,.2,.9),l.head.add(this.eyeLight)),this.arms=[];for(let h of[-1,1]){let d=new ut;d.position.set(h*.5,.15,2.45),d.rotation.set(-.6,0,h*.2),this.body.add(d),d.add(ki(.45,.05,.04,e.bone));let u=new ut;u.position.y=-.45,u.rotation.x=-1.1,d.add(u),u.add(ki(.36,.04,.035,e.bone));for(let f of[-1,1]){let p=ki(.14,.02,.015,e.bone);p.position.set(f*.03,-.36,0),p.rotation.x=-.6,u.add(p)}this.arms.push(d)}this.tail=[];let c=this.body;for(let h=0;h<14;h++){let d=new ut;h===0?d.position.set(0,.32,-.5):d.position.set(0,0,-.5*(1-h*.03)),c.add(d);let u=ah(1-h*.062,e.bone);if(d.add(u),h<9){let f=Oe(Ye("chev",()=>new ie(.04,.32,.08)),e.bone);f.position.y=-.2*(1-h*.08),f.rotation.x=-.4,d.add(f)}this.tail.push(d),c=d}this.legs=[-1,1].map(h=>this._leg(h,e)),this.anim={mode:"pose",phase:0,speed:0,roar:0,roarT:0,headYaw:.28,headPitch:.05,jaw:.28,targetYaw:.28,targetPitch:.05,breathe:0,time:0,lean:0},this.applyPose(0)}_leg(t,e){let n=new ut;n.position.set(t*.44,-.05,.15),this.body.add(n);let s=ki(1.45,.2,.12,e.bone);n.add(s);let r=new ut;r.position.y=-1.45,n.add(r),r.add(ki(1.55,.12,.075,e.bone));let o=ki(1.4,.04,.03,e.bone);o.position.set(0,-.05,-.1),r.add(o);let a=new ut;a.position.y=-1.55,r.add(a),a.add(ki(.8,.08,.07,e.bone));let l=new ut;l.position.y=-.8,a.add(l);for(let c of[-.13,0,.13]){let h=new ut;h.position.set(c,-.04,0),h.rotation.set(Math.PI/2+.1,c*-1.6,0),h.rotation.order="YXZ",l.add(h),h.add(ki(c===0?.55:.45,.05,.035,e.bone));let d=Oe(Ye("claw",()=>new Pn(.035,.14,5)),e.tooth,!1);d.position.y=c===0?-.6:-.5,d.rotation.x=Math.PI,h.add(d)}return{hip:n,knee:r,ankle:a,foot:l,side:t}}setAlive(t){this.alive=t;for(let e of this.eyes)e.visible=t;this.eyeLight&&(this.eyeLight.intensity=t?6:0)}setMode(t,e=0){this.anim.mode=t,this.anim.speed=e}roar(t=2.2){this.anim.roar=t,this.anim.roarT=0}lookAt(t){let e=this.group.worldToLocal(t.clone()),n=new P(0,5.3,3.5),s=e.sub(n);this.anim.targetYaw=Math.max(-.8,Math.min(.8,Math.atan2(s.x,s.z))),this.anim.targetPitch=Math.max(-.4,Math.min(.6,-Math.atan2(s.y,Math.hypot(s.x,s.z))))}update(t){this.anim.time+=t,this.applyPose(t)}applyPose(t){let e=this.anim,n=e.mode,s=0,r=0,o=0,a=0,l=0,c=0;n==="walk"?(c=e.speed/3.6,s=.45,r=.55,o=.12,a=.04,l=.06):n==="run"&&(c=e.speed/6.5,s=.7,r=.9,o=.22,a=.16,l=.04),e.phase+=c*Math.PI*2*t;let h=e.phase;for(let m of this.legs){let g=h+(m.side>0?Math.PI:0),_=Math.max(0,Math.cos(g)),v=-.5-s*Math.sin(g),x=1.1+r*_,C=-.95-r*.6*_;m.hip.rotation.x=v-a,m.knee.rotation.x=x,m.ankle.rotation.x=C,m.foot.rotation.x=-(v-a+x+C)}e.lean=t?hn(e.lean,a,4,t):a,this.body.rotation.x=e.lean;let d=3.42-o*Math.abs(Math.sin(h));this.alive&&n==="idle"&&(d+=Math.sin(e.time*1.6)*.04),this.body.position.y=d;let u=n==="pose"?.05:0;this.tail.forEach((m,g)=>{m.rotation.y=l*Math.sin(h+g*.45)+u*(g>6?1:.3)+(this.alive&&n==="idle"?Math.sin(e.time*.9+g*.3)*.03:0),m.rotation.x=g<5?.035:-.018});let f=n==="pose"?.28:.1,p=e.targetPitch,y=e.targetYaw;if(n==="run"&&(p=.15+Math.sin(h*2)*.05,y=0,f=.35+Math.max(0,Math.sin(h))*.2),n==="walk"&&(p+=Math.sin(h*2)*.04),this.alive&&n==="idle"&&(f=.12+Math.max(0,Math.sin(e.time*.8))*.1),e.roar>0){e.roarT+=t;let m=e.roarT/e.roar;if(m>=1)e.roar=0;else{let g=m<.15?m/.15:m>.8?(1-m)/.2:1;p=-.45*g+(1-g)*p,f=.95*g+Math.sin(e.roarT*40)*.05*g,y+=Math.sin(e.roarT*9)*.08*g}}t?(e.headYaw=hn(e.headYaw,y,6,t),e.headPitch=hn(e.headPitch,p,e.roar>0?10:5,t),e.jaw=hn(e.jaw,f,14,t)):(e.headYaw=y,e.headPitch=p,e.jaw=f),this.headPivot.rotation.set(e.headPitch,e.headYaw,0,"YXZ"),this.jaw.rotation.x=e.jaw;for(let m of this.arms)m.rotation.x=-.6+Math.sin(h*2)*(n==="run"?.3:.05)}};var ch=new Map;function Ge(i,t=.8){let e=i+":"+t;return ch.has(e)||ch.set(e,new ct({color:i,roughness:t})),ch.get(e)}var Pu={},Ne=(i,t)=>Pu[i]||(Pu[i]=t());function ke(i,t){let e=new V(i,t);return e.castShadow=!0,e}var js=class{constructor(t={}){let e=this.opts={shirt:8365785,pants:1911364,skin:14725519,hair:2825492,shoes:1381653,cap:!1,badge:!1,hairStyle:"short",scale:1,nameTag:null,...t};this.group=new ut;let n=this.root=new ut;n.scale.setScalar(e.scale),this.group.add(n);let s=this.hips=new ut;s.position.y=.92,n.add(s);let r=ke(Ne("pelvis",()=>new ie(.34,.2,.21)),Ge(e.pants));s.add(r);let o=this.torso=new ut;o.position.y=.08,s.add(o);let a=ke(Ne("chest",()=>new En(.18,.3,4,10)),Ge(e.shirt));a.scale.set(1.05,1,.72),a.position.y=.27,o.add(a);let l=ke(Ne("belt",()=>new ie(.36,.06,.24)),Ge(1118481,.5));if(l.position.y=.02,o.add(l),e.badge){let x=ke(Ne("badge",()=>new ie(.06,.07,.02)),new ct({color:16765773,metalness:.8,roughness:.3}));x.position.set(-.09,.38,.135),o.add(x);let C=ke(Ne("radio",()=>new ie(.05,.1,.03)),Ge(2236962));C.position.set(.1,.4,.13),o.add(C)}if(e.nameTag){let x=ke(Ne("tag",()=>new ie(.09,.035,.01)),Ge(16777215));x.position.set(.09,.4,.135),o.add(x)}let c=ke(Ne("neck",()=>new oe(.055,.06,.1,8)),Ge(e.skin));c.position.y=.6,o.add(c);let h=this.head=new ut;h.position.y=.64,o.add(h);let d=ke(Ne("head",()=>new ee(.135,16,12)),Ge(e.skin));d.scale.set(.95,1.08,1),d.position.y=.12,h.add(d);let u=Ne("eye",()=>new ee(.018,8,6));for(let x of[-1,1]){let C=ke(u,Ge(1118481,.3));C.position.set(x*.048,.14,.122),h.add(C)}let f=ke(Ne("nose",()=>new ee(.022,8,6)),Ge(e.skin));if(f.position.set(0,.1,.135),h.add(f),this.mouth=ke(Ne("mouth",()=>new ie(.05,.012,.01)),Ge(5909034)),this.mouth.position.set(0,.055,.125),h.add(this.mouth),e.hairStyle!=="bald"){let x=ke(Ne("hair",()=>new ee(.145,16,10,0,Math.PI*2,0,Math.PI*.55)),Ge(e.hair));if(x.position.set(0,.13,-.012),h.add(x),e.hairStyle==="long"){let C=ke(Ne("hairlong",()=>new ie(.26,.28,.08)),Ge(e.hair));C.position.set(0,0,-.09),h.add(C)}}if(e.cap){let x=Ge(1778752,.7),C=ke(Ne("cap",()=>new oe(.135,.15,.1,14)),x);C.position.y=.25,h.add(C);let T=ke(Ne("brim",()=>new ie(.2,.015,.13)),x);T.position.set(0,.205,.17),h.add(T);let w=ke(Ne("capbadge",()=>new ie(.05,.04,.01)),new ct({color:16765773,metalness:.8,roughness:.3}));w.position.set(0,.26,.142),h.add(w),this.cap={crown:C,brim:T,cb:w}}let p=Ne("arm",()=>new En(.058,.2,4,8)),y=Ne("fore",()=>new En(.052,.19,4,8)),m=Ne("hand",()=>new ee(.055,8,6));this.arms=[-1,1].map(x=>{let C=new ut;C.position.set(x*.235,.5,0),o.add(C);let T=ke(p,Ge(e.shirt));T.position.y=-.14,C.add(T);let w=new ut;w.position.y=-.29,C.add(w);let A=ke(y,Ge(e.sleeves==="short"?e.skin:e.shirt));A.position.y=-.13,w.add(A);let E=new ut;return E.position.y=-.28,w.add(E),E.add(ke(m,Ge(e.skin))),{sh:C,el:w,hand:E,side:x}});let g=Ne("thigh",()=>new En(.075,.3,4,8)),_=Ne("shin",()=>new En(.066,.3,4,8)),v=Ne("foot",()=>new ie(.11,.07,.25));this.legs=[-1,1].map(x=>{let C=new ut;C.position.set(x*.095,-.06,0),s.add(C);let T=ke(g,Ge(e.pants));T.position.y=-.21,C.add(T);let w=new ut;w.position.y=-.42,C.add(w);let A=ke(_,Ge(e.pants));A.position.y=-.2,w.add(A);let E=ke(v,Ge(e.shoes,.5));return E.position.set(0,-.42,.05),w.add(E),{hip:C,knee:w,side:x}}),this.anim={mode:"idle",phase:0,speed:0,time:0,talk:0,blend:{}},this.update(0)}attachToHand(t,e=1){return this.arms.find(s=>s.side===e).hand.add(t),t}setMode(t,e=0){this.anim.mode=t,this.anim.speed=e}update(t){let e=this.anim;e.time+=t;let n=e.time,s=e.mode,r=0;s==="walk"&&(r=e.speed/1.5),s==="run"&&(r=e.speed/3.2),e.phase+=r*Math.PI*2*t;let o=e.phase,a={hipsY:.92,hipsRX:0,torsoRX:0,headRX:0,headRY:0,legs:[[0,0],[0,0]],arms:[[0,.15,0],[0,.15,0]]};if(s==="idle")a.hipsY=.92+Math.sin(n*2)*.005,a.headRY=Math.sin(n*.5)*.15,a.arms=[[.05,-.15,.1],[.05,-.15,-.1]];else if(s==="walk"){let h=Math.sin(o);a.legs=[[-.5*h,Math.max(0,-Math.cos(o))*.7],[.5*h,Math.max(0,Math.cos(o))*.7]],a.arms=[[.4*h,-.2,.08],[-.4*h,-.2,-.08]],a.hipsY=.92-Math.abs(Math.cos(o))*.03}else if(s==="run"){let h=Math.sin(o);a.legs=[[-.95*h,.4+Math.max(0,-Math.cos(o))*1.3],[.95*h,.4+Math.max(0,Math.cos(o))*1.3]],a.arms=[[.9*h,-1.3,.1],[-.9*h,-1.3,-.1]],a.torsoRX=.25,a.hipsY=.9-Math.abs(Math.cos(o))*.08}else if(s==="jump")a.legs=[[-.9,1.4],[-.3,.9]],a.arms=[[-2.6,-.3,.3],[-2.6,-.3,-.3]],a.torsoRX=.1;else if(s==="slide")a.hipsY=.35,a.hipsRX=-1.15,a.legs=[[-.4,.2],[-.2,.6]],a.arms=[[-1.6,-.3,.3],[-1.6,-.3,-.3]],a.torsoRX=.1,a.headRX=.7;else if(s==="sit"||s==="eat"||s==="type"){if(a.hipsY=.55,a.legs=[[-1.57,1.57],[-1.57,1.57]],a.torsoRX=.08,a.arms=[[-.7,-.8,.1],[-.7,-.8,-.1]],s==="eat"){let h=(Math.sin(n*2.2)+1)/2;a.arms[1]=[-.4-1.5*h,-1.2-.9*h,-.25*h],a.headRX=.1*h}s==="type"&&(a.arms[0]=[-.9+Math.sin(n*18)*.05,-.7,.15],a.arms[1]=[-.9+Math.sin(n*15+1)*.05,-.7,-.15],a.headRX=.12)}else s==="sleep"?(a.hipsY=.55,a.legs=[[-1.4,1.5],[-1.5,1.4]],a.torsoRX=.5,a.headRX=.6,a.arms=[[-.2,-.3,.2],[-.2,-.3,-.2]]):s==="shock"?(a.arms=[[-2.8,-.3,.4],[-2.8,-.3,-.4]],a.headRX=-.15,a.hipsY=.92+Math.abs(Math.sin(n*20))*.02):s==="point"?(a.arms[1]=[-1.55,0,0],a.headRY=.1):s==="shrug"&&(a.arms=[[-.2,-1.6,.6],[-.2,-1.6,-.6]],a.headRX=-.1);let l=t?1-Math.exp(-14*t):1,c=(h,d,u)=>{h[d]+=(u-h[d])*l};c(this.hips.position,"y",a.hipsY),c(this.hips.rotation,"x",a.hipsRX),c(this.torso.rotation,"x",a.torsoRX),c(this.head.rotation,"x",a.headRX),c(this.head.rotation,"y",a.headRY),this.legs.forEach((h,d)=>{c(h.hip.rotation,"x",a.legs[d][0]),c(h.knee.rotation,"x",a.legs[d][1])}),this.arms.forEach((h,d)=>{c(h.sh.rotation,"x",a.arms[d][0]),c(h.el.rotation,"x",a.arms[d][1]),c(h.sh.rotation,"z",a.arms[d][2]+h.side*.08)}),e.talk>0?(e.talk-=t,this.mouth.scale.y=1+Math.abs(Math.sin(n*22))*5):this.mouth.scale.y=hn(this.mouth.scale.y,1,10,t||1)}},ua=(i={})=>new js({shirt:9417696,pants:1778752,cap:!0,badge:!0,hair:3810322,...i}),kx=[14832981,5613672,15905076,9202646,2864051,15895729,16777215,3355443,16747069,5209049],Ox=[2832981,3355443,7035464,1907997,4878245],Fx=[15845284,14725519,13012580,9263675,6044196,16243136],Hx=[2825492,1118481,9132587,14266986,7027487,10066329];function Iu(i=Math.random){let t=n=>n[Math.floor(i()*n.length)],e=i()<.35;return new js({shirt:t(kx),pants:t(Ox),skin:t(Fx),hair:t(Hx),hairStyle:i()<.4?"long":i()<.1?"bald":"short",sleeves:i()<.5?"short":"long",scale:e?.62+i()*.12:.95+i()*.1})}function qn(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Lu(i,t,e){let n=i.canvas.width,s=i.canvas.height;i.fillStyle="#0f0f0f",i.fillRect(0,0,n,s),i.fillStyle="#ff2b2b",qn(i,24,18,54,38,10),i.fill(),i.fillStyle="#fff",i.beginPath(),i.moveTo(44,27),i.lineTo(62,37),i.lineTo(44,47),i.fill(),i.font="bold 30px Arial",i.fillText("MeTube",88,48),i.fillStyle="#222",qn(i,300,18,440,40,20),i.fill(),i.fillStyle="#aaa",i.font="20px Arial",i.fillText("dinosaurs that could beat you in a race",322,45);let r=24,o=76,a=660,l=372,c=i.createLinearGradient(0,o,0,o+l);c.addColorStop(0,"#ff9a5a"),c.addColorStop(1,"#ffd98a"),i.fillStyle=c,i.fillRect(r,o,a,l),i.fillStyle="#c8763a",i.fillRect(r,o+l*.72,a,l*.28),i.fillStyle="#6b3b2a",i.beginPath(),i.moveTo(r+380,o+l*.72),i.lineTo(r+480,o+120),i.lineTo(r+520,o+120),i.lineTo(r+640,o+l*.72),i.fill(),i.fillStyle="rgba(80,60,60,0.6)",i.beginPath(),i.arc(r+500+Math.sin(t)*10,o+90-t*20%40,26,0,7),i.fill();let h=t*140%(a+300)-150,d=o+l*.72;i.save(),i.translate(r+h,d),i.fillStyle="#2b1d14";let u=Math.abs(Math.sin(t*12))*6;i.beginPath(),i.ellipse(0,-70-u,55,30,-.1,0,7),i.fill(),i.beginPath(),i.moveTo(-50,-75-u),i.lineTo(-130,-60-u),i.lineTo(-48,-60-u),i.fill(),i.beginPath(),i.ellipse(52,-105-u,30,18,-.2,0,7),i.fill(),i.fillRect(20,-100-u,18,30);let f=Math.sin(t*12)*18;i.fillRect(-10+f,-50-u,12,50+u),i.fillRect(10-f,-50-u,12,50+u),i.fillStyle="#ff3b3b",i.beginPath(),i.arc(64,-110-u,4,0,7),i.fill(),i.restore(),i.save(),i.translate(r+h+170,d),i.strokeStyle="#1a1a1a",i.lineWidth=5,i.beginPath(),i.arc(0,-62,10,0,7),i.stroke(),i.beginPath(),i.moveTo(0,-52),i.lineTo(0,-25),i.stroke();let p=Math.sin(t*16)*12;if(i.beginPath(),i.moveTo(0,-25),i.lineTo(p,0),i.moveTo(0,-25),i.lineTo(-p,0),i.stroke(),i.beginPath(),i.moveTo(0,-45),i.lineTo(-p,-32),i.moveTo(0,-45),i.lineTo(p,-30),i.stroke(),i.restore(),i.fillStyle="rgba(0,0,0,0.6)",qn(i,r+16,o+16,120,44,8),i.fill(),i.fillStyle="#fff",i.font="bold 30px Arial",i.fillText("#3",r+52,o+50),i.fillStyle="#444",i.fillRect(r,o+l-6,a,6),i.fillStyle="#ff2b2b",i.fillRect(r,o+l-6,a*(.42+t*.004%.5),6),i.fillStyle="#fff",i.font="bold 24px Arial",i.fillText("TOP 10 DINOSAURS THAT COULD BEAT YOU IN A RACE",r,o+l+40),i.fillText("(#1 WILL SHOCK YOU)",r,o+l+70),i.fillStyle="#aaa",i.font="18px Arial",i.fillText("DinoFacts4Kids  \u2022  2.1M views  \u2022  3 years ago",r,o+l+100),i.fillStyle="#fff",qn(i,r+470,o+l+80,120,36,18),i.fill(),i.fillStyle="#000",i.font="bold 18px Arial",i.fillText("Subscribe",r+488,o+l+104),[["I SURVIVED 24 HRS IN A MUSEUM","#3a6"],["Donut tier list (honest)","#d58"],["Is the T-Rex REAL?? (not clickbait)","#a63"],["Night guard falls asleep on cam","#36a"],["How to remember passwords","#777"]].forEach(([m,g],_)=>{let v=80+_*108;i.fillStyle=g,qn(i,708,v,150,86,8),i.fill(),i.fillStyle="rgba(255,255,255,0.3)",i.beginPath(),i.arc(783,v+43,18,0,7),i.fill(),i.fillStyle="#eee",i.font="bold 16px Arial";let x=m.split(" "),C="",T=v+20;for(let w of x)i.measureText(C+w).width>140&&(i.fillText(C,868,T),C="",T+=20),C+=w+" ";i.fillText(C,868,T),i.fillStyle="#999",i.font="14px Arial",i.fillText(`${(_*3.7+1.2).toFixed(1)}M views`,868,T+22)}),e!=null){let m=e<=5;i.fillStyle=m&&Math.floor(t*4)%2?"#ff2b2b":"#ffcc4d",qn(i,n-360,s-92,340,72,10),i.fill(),i.fillStyle="#111",i.font="bold 22px Arial",i.fillText("\u26A0 MUSE-OS SESSION",n-340,s-62),i.font="bold 22px Arial",i.fillText(`Expires in 0:${String(Math.max(0,Math.ceil(e))).padStart(2,"0")}`,n-340,s-34)}}function fa(i,t,e="SESSION EXPIRED",n="Please log in again."){let s=i.canvas.width,r=i.canvas.height,o=i.createLinearGradient(0,0,s,r);o.addColorStop(0,"#0d2340"),o.addColorStop(1,"#2a0f3d"),i.fillStyle=o,i.fillRect(0,0,s,r),i.fillStyle="rgba(255,255,255,0.06)";for(let a=0;a<12;a++)i.beginPath(),i.arc((a*173+t*20)%s,a*97%r,60+a%3*30,0,7),i.fill();i.textAlign="center",i.fillStyle="#fff",i.font="bold 54px Arial",i.fillText("\u{1F512}",s/2,r/2-90),i.font="bold 48px Arial",i.fillText(e,s/2,r/2),i.font="28px Arial",i.fillStyle="#c9d6ff",i.fillText(n,s/2,r/2+50),i.font='22px "Courier New", monospace',i.fillStyle="#7fa0d0",i.fillText("MUSE-OS v2.3 \u2014 City Museum of Natural History",s/2,r-40),i.textAlign="left"}function Du(i,t,e="",n="",s="#ff6b6b"){fa(i,t,"","");let r=i.canvas.width,o=i.canvas.height;i.fillStyle="rgba(0,0,0,0.45)",qn(i,r/2-260,o/2-170,520,340,18),i.fill(),i.textAlign="center",i.fillStyle="#fff",i.font="bold 34px Arial",i.fillText("NIGHT_GUARD",r/2,o/2-110),i.fillStyle="#fff",qn(i,r/2-200,o/2-70,400,56,10),i.fill(),i.fillStyle="#222",i.font="bold 34px Arial",i.fillText("\u2022".repeat(e.length)+(Math.floor(t*2)%2?"|":""),r/2,o/2-30),i.fillStyle="#4c8dff",qn(i,r/2-200,o/2+6,190,50,10),i.fill(),i.fillStyle="#ffcc4d",qn(i,r/2+10,o/2+6,190,50,10),i.fill(),i.fillStyle="#fff",i.font="bold 24px Arial",i.fillText("LOG IN",r/2-105,o/2+40),i.fillStyle="#111",i.fillText("HINT?",r/2+105,o/2+40),n&&(i.fillStyle=s,i.font="bold 26px Arial",i.fillText(n,r/2,o/2+120)),i.textAlign="left"}function Uu(i,t){let e=i.canvas.width,n=i.canvas.height;i.fillStyle="#000",i.fillRect(0,0,e,n),i.textAlign="center";let s=Math.random()<.1?(Math.random()-.5)*30:0;i.fillStyle="#6dff9e",i.font='bold 64px "Courier New", monospace',i.fillText("SOLVE THE PUZZLES",e/2+s,n/2-20),i.fillStyle="#ff3b6b",i.fillText("SOLVE THE PUZZLES",e/2-s*.5+3,n/2-20+2),i.fillStyle="#6dff9e",i.font='28px "Courier New", monospace',i.fillText("PUZZLE #1 SLEEPS WHERE GIANTS ONCE WALKED",e/2,n/2+50),i.fillText("> DINOSAUR HALL",e/2,n/2+100);for(let r=0;r<n;r+=4)i.fillStyle="rgba(0,0,0,0.3)",i.fillRect(0,r,e,2);i.textAlign="left"}function Nu(i,t){let e=i.canvas.width,n=i.canvas.height;i.fillStyle=Math.floor(t*3)%2?"#3a0000":"#1a0000",i.fillRect(0,0,e,n),i.textAlign="center",i.fillStyle="#ff3b3b",i.font="bold 72px Arial",i.fillText("ACCESS DENIED",e/2,n/2),i.font="28px Arial",i.fillText("Password fragments: 5 / 6",e/2,n/2+60),i.textAlign="left"}function ku(i,t,{trexGone:e=!1,day:n=!1}={}){let s=i.canvas.width,r=i.canvas.height,o=s/3,a=r/2,l=["CAM 1 LOBBY","CAM 2 DINO HALL","CAM 3 ROMAN","CAM 4 ENTRANCE","CAM 5 ARCHIVES","CAM 6 PARKING"];for(let c=0;c<6;c++){let h=c%3*o,d=Math.floor(c/3)*a;i.fillStyle=n?"#3a4a3a":"#0c1410",i.fillRect(h,d,o,a),i.fillStyle=n?"#5a6a5a":"#16241c",i.fillRect(h+10,d+a*.6,o-20,a*.35),c===1&&!e&&(i.strokeStyle=n?"#d8d0b8":"#5a7a66",i.lineWidth=3,i.beginPath(),i.ellipse(h+o*.5,d+a*.45,26,14,0,0,7),i.moveTo(h+o*.5+20,d+a*.4),i.lineTo(h+o*.72,d+a*.25),i.moveTo(h+o*.5-24,d+a*.45),i.lineTo(h+o*.2,d+a*.55),i.moveTo(h+o*.48,d+a*.55),i.lineTo(h+o*.46,d+a*.85),i.moveTo(h+o*.55,d+a*.55),i.lineTo(h+o*.57,d+a*.85),i.stroke());let u=i.getImageData(h,d,o,a),f=u.data;for(let p=0;p<f.length;p+=16){let y=(Math.random()-.5)*(n?30:60);f[p]+=y,f[p+1]+=y,f[p+2]+=y}i.putImageData(u,h,d),i.fillStyle=n?"#ffffff":"#9dffb8",i.font="bold 13px monospace",i.fillText(l[c],h+8,d+18),Math.floor(t*2)%2&&(i.fillStyle="#ff3b3b",i.beginPath(),i.arc(h+o-14,d+13,5,0,7),i.fill()),i.strokeStyle="#000",i.lineWidth=4,i.strokeRect(h,d,o,a)}}var Qt={officeChair:new P(-17.9,0,0),officeStart:new P(-17.2,0,.3),lobbyNorth:new P(0,0,-7.5),dinoDoor:new P(0,0,-12),dinoPanel:new P(2.4,0,-20.6),trex:new P(0,.5,-31),romanDoor:new P(13.5,0,0),romanPanel:new P(37.4,0,0),computer:new P(-18.75,1.05,0)},di=class extends Ni{constructor(t,{time:e="night"}={}){super(t),this.time=e,this.night=e==="night",this.refs={},this.surfaceAt=(s,r)=>s<-12?"wood":s>12?"marble":r<-10?"stone":"marble";let n=this.scene;n.background=new Gt(this.night?131848:12571366),n.fog=this.night?new Hs(197899,.028):new Bs(13622248,40,140),this.mats={officeWall:new ct({map:Me("plaster"),color:12169626,roughness:.9}),lobbyWall:new ct({map:Me("plaster"),color:9410726,roughness:.85}),dinoWall:new ct({map:Me("plaster"),color:8023646,roughness:.9}),romanWall:new ct({map:Me("plaster"),color:11828316,roughness:.85}),wood:new ct({map:Me("wood"),roughness:.7}),marble:new ct({map:Me("marble"),roughness:.25,metalness:.05}),stone:new ct({map:Me("stone"),roughness:.8}),mosaic:new ct({map:Me("mosaic"),roughness:.6}),ceiling:new ct({map:Me("ceiling"),roughness:.9,color:10131086}),darkCeil:new ct({color:1907482,roughness:1}),trim:new ct({color:2761760,roughness:.6})},this._lights(),this._office(),this._lobby(),this._dino(),this._roman(),this._collectibles(),this.night||this._visitors()}_lights(){let t=this.scene,e=this.night;this.ambient=new Ii(e?7372976:16777215,e?.32:.9),t.add(this.ambient),this.hemi=new Pi(e?5925530:15266047,e?1446416:9075302,e?.45:1.4),t.add(this.hemi);let n=new Wo(e?9414911:16773592,e?.55:2.4);n.position.set(12,30,40),n.target.position.set(0,0,-20),t.add(n,n.target),this.sun=n;let s=(r,o,a,l,c,h)=>{let d=new De(r,o,a,2);return d.position.set(l,c,h),t.add(d),d};e?(s(6981375,6,22,0,9,-40),s(16756848,5,14,37,5,0),s(6981375,3,16,0,6,6),this.officeLamp=s(16762746,3.5,7,-18.4,1.4,.9),this.fluoro=s(14674175,2.5,8,-16,3.1,0)):(s(16777215,30,40,0,11,-28),s(16773853,20,30,26,8,0),s(16777215,12,25,0,7,0),this.officeLamp=s(16762746,2,6,-18.4,1.4,.9),this.fluoro=s(16777215,6,10,-16,3.1,0))}_office(){let t=this.mats;this.floor(-20,-12,-5,5,t.wood,0,3),this.ceiling(-20,-12,-5,5,3.4,t.ceiling,1.2),this.wallX(-5,-20,-12,3.4,t.officeWall),this.wallX(5,-20,-12,3.4,t.officeWall),this.wallZ(-20,-5,5,3.4,t.officeWall);let e=new V(new ie(1.4,.06,.4),new fe({color:15397631}));e.position.set(-16,3.36,0),this.scene.add(e),this.refs.fluoroMesh=e;let n=ih(1.9,.85);this.add(n,-18.75,0,0,Math.PI/2),this.addBoxCollider(-18.75,0,1.9,.85,Math.PI/2);let s=wu(.95,.6);this.add(s.group,-18.95,.77,0,Math.PI/2),this.refs.monitor=s;let r=Su();this.add(r,-17.9,0,0,-Math.PI/2),this.refs.chair=r,this.add(xt(.18,.02,.5,ft.black()),-18.55,.77,0);let o=new ut;o.add(xt(.15,.03,.15,ft.black()));let a=xt(.03,.45,.03,ft.black(),0,.03,0);o.add(a);let l=new V(new Pn(.12,.16,12,1,!0),new ct({color:2841914,side:He}));l.position.set(.05,.5,0),l.rotation.z=-.5,o.add(l),this.add(o,-18.9,.77,.75);let c=new ut,h=new ct({color:16230600,roughness:.8});c.add(xt(.55,.07,.38,h));let d=new V(new ie(.55,.01,.38),new ct({map:Ae(`DOZEN
DELUXE`,{w:256,h:180,bg:"#f7a8c8",fg:"#b3125a",font:"bold 52px Arial Black, Arial"})}));d.position.set(0,.25,-.2),d.rotation.x=-1.2,c.add(d),this.refs.boxDonuts=[];for(let A=0;A<6;A++){let E=Wn({frosting:A,scale:.55});E.position.set(-.17+A%3*.17,.08,-.08+Math.floor(A/3)*.17),c.add(E),this.refs.boxDonuts.push(E)}this.add(c,-18.6,.77,-.65,Math.PI/2),this.refs.donutBox=c;let u=Ui();u.position.set(-18.45,.81,.45),u.rotation.y=.6,this.scene.add(u),this.refs.deskFlashlight=u;let f=new V(new oe(.045,.04,.1,12),new ct({color:16777215}));f.position.set(-18.5,.82,-.2),this.scene.add(f);let[p,y]=_e(384,192,{willReadFrequently:!0}),m=Te(p),g=new V(new Ft(2.6,1.3),new fe({map:m,toneMapped:!1}));g.position.set(-16.5,1.95,-4.78),this.scene.add(g),this.add(xt(2.75,1.45,.1,ft.black()),-16.5,1.25,-4.84);let _=0,v=0;this.cctvState={trexGone:!1,day:!this.night},this.addUpdater(A=>{_+=A,v+=A,v>.12&&(v=0,ku(y,_,this.cctvState),m.needsUpdate=!0)});for(let A=0;A<4;A++){let E=xt(.6,2,.5,new ct({color:5202547,roughness:.5,metalness:.4}));this.add(E,-19.4+A*.62,0,4.7)}this.addCollider(-19.8,-16.9,4.4,5);let x=(A,E,M,I,O,k,H)=>{let Z=new V(new Ft(.8,1.05),new ct({map:Ae(A,{w:256,h:340,bg:k,fg:H,font:"bold 34px Arial Black, Arial",border:H})}));Z.position.set(E,M,I),Z.rotation.y=O,this.scene.add(Z)};x(`EMPLOYEE
OF THE
MONTH:
AARON`,-13.5,1.8,-4.78,0,"#ffe08a","#7a4b00"),x(`STAY
AWAKE
(seriously)`,-19.78,2,-3,Math.PI/2,"#16324f","#ffcc4d"),x(`NO
DINOSAURS
IN THE
OFFICE`,-14.8,1.8,4.78,Math.PI,"#fff","#c81e1e");let C=new V(new hi(.25,24),new fe({map:Ae("11:58",{w:128,h:128,bg:"#fff",fg:"#111",font:"bold 34px Arial"})}));C.position.set(-19.78,2.5,1.5),C.rotation.y=Math.PI/2,this.scene.add(C);let T=ua();T.group.position.set(-17.95,0,0),T.group.rotation.y=-Math.PI/2,T.setMode("sit"),T.update(0),this.scene.add(T.group),this.refs.guard=T,this.addUpdater(A=>{T.group.visible&&T.update(A)}),this.refs.computerIt=this.addInteractable({id:"computer",pos:new P(-18.7,1.1,0),prompt:"Log in",enabled:!1});let w=new V(new Ft(2.2,.5),new ct({map:Ae("SECURITY",{w:512,h:116,bg:"#1d2433",fg:"#ffcc4d",font:"bold 64px Arial Black, Arial",border:"#ffcc4d"}),emissive:16777215,emissiveIntensity:.08}));w.position.set(-11.78,2.85,0),w.rotation.y=Math.PI/2,this.scene.add(w)}_lobby(){let t=this.mats,e=this.scene;this.floor(-12,12,-10,10,t.marble,0,4),this.ceiling(-12,12,-10,10,8,t.darkCeil),this.wallX(-10,-12,12,8,t.lobbyWall,[{c:0,w:6,h:6.2}],3),this.wallZ(12,-10,-9,8,t.lobbyWall,[],3),this.wallZ(12,9,10,8,t.lobbyWall,[],3),this.wallZ(-12,-10,10,8,t.lobbyWall,[{c:0,w:2.2,h:2.4}],3),this.wallX(10,-12,12,8,t.lobbyWall,[{c:-7.5,w:4,h:6.5},{c:0,w:6,h:4.2},{c:7.5,w:4,h:6.5}],3);let n=new fe({color:this.night?1846874:15922943,toneMapped:!this.night});for(let y of[-7.5,7.5]){let m=new V(new Ft(4,6.5),n);m.position.set(y,3.25,10.1),m.rotation.y=Math.PI,e.add(m),e.add(xt(.12,6.5,.15,t.trim,y,0,10));for(let g of[2.2,4.4])e.add(xt(4,.1,.15,t.trim,y,g,10));e.add(xt(4,.1,.4,t.trim,y,0,10))}this.addCollider(-9.5,-5.5,9.8,10.2),this.addCollider(5.5,9.5,9.8,10.2);let s=ft.glass();for(let y of[-1.5,1.5]){let m=xt(2.9,4.1,.08,s,y,0,10);m.castShadow=!1,e.add(m),e.add(xt(.08,4.1,.1,ft.metal(),y-1.45,0,10)),e.add(xt(.06,.5,.12,ft.brass(),y+(y<0?1.3:-1.3),1.1,9.92))}let r=new V(new Ft(6,4.2),n);r.position.set(0,2.1,10.3),r.rotation.y=Math.PI,e.add(r),this.addCollider(-3,3,9.8,10.2);let o=xt(1.5,2.55,.1,new ct({color:3881794,metalness:.5,roughness:.4}));o.rotation.y=Math.PI/2,o.position.set(-11.78,1.275,6.5),e.add(o);let a=new V(new Ft(1.4,.35),new ct({map:Ae(`ARCHIVES
STAFF ONLY`,{w:256,h:64,bg:"#a01818",fg:"#fff",font:"bold 22px Arial"})}));a.position.set(-11.75,2.85,6.5),a.rotation.y=Math.PI/2,e.add(a);let l=(y,m,g,_,v,x=5.6)=>{let C=new V(new Ft(x,1.2),new ct({map:Ae(y,{w:1024,h:220,bg:"#14100c",fg:"#e9cf8a",font:"bold 120px Georgia, serif",border:"#c9a24a"}),emissive:16769184,emissiveIntensity:this.night?.12:.02}));C.position.set(m,g,_),C.rotation.y=v,e.add(C)};l("DINOSAUR HALL",0,7.1,-9.77,0),l("ROMAN EMPIRE",11.77,7.1,0,-Math.PI/2);let c=new ut;c.add(xt(4.6,1.1,1,t.trim)),c.add(xt(4.8,.08,1.2,ft.marble(),0,1.1,0));let h=new V(new Ft(3.2,.5),new ct({map:Ae("INFORMATION",{w:512,h:80,bg:"#2a2420",fg:"#c9a24a",font:"bold 48px Georgia, serif"})}));h.position.set(0,.62,-.51),h.rotation.y=Math.PI,c.add(h),Re(c),this.add(c,0,0,4.2),this.addBoxCollider(0,4.2,4.8,1.2);for(let y of[-8,8])for(let m of[-6,6])this.add(Kc(8,.5),y,0,m),this.addBoxCollider(y,m,1.2,1.2);for(let y of[-6,6])this.add(oa(2.2),y,0,0,Math.PI/2),this.addBoxCollider(y,0,2.2,.55,Math.PI/2);for(let[y,m]of[[-11,-9],[11,-9],[-11,9],[11,9],[-4.2,-9],[4.2,-9]])this.add(jc(y*7+m),y,0,m),this.addBoxCollider(y,m,.6,.6);let d=sh("DINOSAURS","\u2191");this.add(d,-2.3,0,-4.5),this.addBoxCollider(-2.3,-4.5,.3,.3);let u=sh("ROMAN EMPIRE","\u2192");this.add(u,5,0,-2.6),this.addBoxCollider(5,-2.6,.3,.3);let f=new V(new Ft(3,5),new ct({map:Ae(`HISTORY
COMES
ALIVE!`,{w:300,h:500,bg:"#7a1022",fg:"#ffd98a",font:"bold 64px Georgia, serif"}),side:He}));f.position.set(-6,5,-2),f.rotation.y=.3,e.add(f);let p=Ks("MUSEUM MAP",`\u2191 North: Dinosaur Hall
\u2192 East: Roman Empire
\u2190 West: Security Office
\u2193 South: Exit (locked at night)`,2.4,1.6,{bg:"#16202e",fg:"#dfe8ff",accent:"#6dc2ff"});p.position.set(11.78,2.2,6.5),p.rotation.y=-Math.PI/2,e.add(p);for(let[y,m,g,_]of[[0,4.55,9.77,Math.PI],[-11.75,2.65,0,Math.PI/2]]){let v=la();v.position.set(y,m,g),v.rotation.y=_,_===Math.PI/2&&(v.position.y=3.3),e.add(v)}}_dino(){let t=this.mats,e=this.scene;this.floor(-15,15,-46,-10,t.stone,0,4),this.ceiling(-15,15,-46,-10,13,t.darkCeil),this.wallX(-46,-15,15,13,t.dinoWall,[],3),this.wallZ(-15,-46,-10,13,t.dinoWall,[],3),this.wallZ(15,-46,-10,13,t.dinoWall,[],3),this.wallX(-10,-15,-12,13,t.dinoWall,[],3),this.wallX(-10,12,15,13,t.dinoWall,[],3),this.wallX(-10.01,-12,12,13,t.dinoWall,[{c:0,w:24.5,h:8}],3);for(let w of[-18,-30,-40]){let A=new V(new Ft(8,4),new fe({color:this.night?1978982:16777215,toneMapped:!this.night}));A.position.set(0,12.95,w),A.rotation.x=Math.PI/2,e.add(A)}let n=new V(Xn(9,.5,15,3),new ct({map:Me("stone"),color:9075306,roughness:.85}));n.position.set(0,.25,-30),n.receiveShadow=!0,e.add(n),e.add(xt(9.2,.1,15.2,t.trim,0,.36,-30)),this.addCollider(-4.6,4.6,-37.6,-22.4,"platform");let s=[];for(let w=-5.2;w<=5.21;w+=2.6)s.push([w,-21.8]);for(let[w,A]of s)this.add(Js(),w,0,A);for(let w=0;w<s.length-1;w++){let A=Pr(2.6);A.position.set(s[w][0],0,s[w][1]),e.add(A)}let r=we(5);for(let w=0;w<10;w++){let A=Qc(w+3,.6+r()*.8);A.position.set((r()-.5)*8,.5+A.position.y,-30+(r()-.5)*14),Math.abs(A.position.x)<1.6&&(A.position.x+=2.8*Math.sign(A.position.x||1)),e.add(A)}for(let w=0;w<6;w++){let A=jc(w+40);A.children.forEach(E=>{E.geometry?.type==="CylinderGeometry"&&(E.visible=!1)}),A.position.set(w%2?3.6:-3.6,.2,-24-w*2.3),A.scale.setScalar(1.6),e.add(A)}let o=new rs;o.group.position.copy(Qt.trex),o.group.rotation.y=.3,o.setMode("pose"),e.add(o.group),this.refs.trex=o,this.addUpdater(w=>o.update(w));let a=ss("TYRANNOSAURUS REX",`"The Tyrant Lizard King." 12 m long, 8 tonnes, teeth like bananas.
Fun fact: despite its size, T. rex had only TWO fingers on each tiny hand.`,{bodyFont:"24px Georgia, serif"});this.add(a,-2.4,0,-20.6),this.addBoxCollider(-2.4,-20.6,.5,.4);let l=th({title:"DINO-LOCK 3000",color:"#6dff9e"});this.add(l.group,Qt.dinoPanel.x,0,Qt.dinoPanel.z),this.addBoxCollider(Qt.dinoPanel.x,Qt.dinoPanel.z,.8,.6),this.addUpdater(w=>l.update(w)),this.refs.console1=l,this.refs.panel1It=this.addInteractable({id:"panel1",pos:new P(Qt.dinoPanel.x,1.2,Qt.dinoPanel.z),prompt:"Inspect cipher panel",enabled:!1}),this.add(is(2.2,.9,new ct({color:5984841,roughness:.9})),-10,0,-19);let c=Mu();c.scale.setScalar(1.4),this.add(c,-10,.9,-19,.5),this.addBoxCollider(-10,-19,2.5,2.5),this.add(ss("TRICERATOPS","Three horns, one frill, zero chill. Ate plants. Probably fine."),-10,0,-16.6),this.add(is(2.6,.7,new ct({color:5984841,roughness:.9})),10,0,-20);let h=new rs({eyeLight:!1});h.group.scale.setScalar(.3),h.anim.headYaw=h.anim.targetYaw=-.5,h.applyPose(0),this.add(h.group,10,.7,-20,-.8),this.addBoxCollider(10,-20,2.9,2.9),this.add(ss("VELOCIRAPTOR","Turkey-sized. Feathery. Smaller than the movies told you. Still bites."),10,0,-17.6),this.add(is(1.1,1),10,0,-40);let d=Qc(77,.8);d.material=new ct({color:3814962,roughness:.6,metalness:.4,flatShading:!0}),this.add(d,10,1,-40),this.addBoxCollider(10,-40,1.3,1.3),this.add(ss("REAL METEORITE","Fell from space 66 million years ago. Please do not lick the meteorite."),10,0,-38.2),this.add(aa(1.6,.8,.9,bu()),-10,0,-40),this.addBoxCollider(-10,-40,1.7,1),this.add(ss("AMMONITES","Ancient squid in spiral shells. Basically sea cinnamon rolls."),-10,0,-38.3);let[u,f]=_e(1024,400),p=f.createLinearGradient(0,0,0,400);p.addColorStop(0,"#3a1f4d"),p.addColorStop(.6,"#d9663a"),p.addColorStop(1,"#f2b25a"),f.fillStyle=p,f.fillRect(0,0,1024,400),f.fillStyle="#2a1410",f.beginPath(),f.moveTo(560,300),f.lineTo(700,120),f.lineTo(740,120),f.lineTo(900,300),f.fill(),f.fillStyle="#ff7a2a",f.beginPath(),f.arc(720,110,30,0,7),f.fill(),f.fillStyle="#1a0f0a",f.fillRect(0,300,1024,100);for(let w=0;w<6;w++)f.beginPath(),f.moveTo(w*180,300),f.lineTo(w*180+40,200-w%2*40),f.lineTo(w*180+80,300),f.fill();f.fillStyle="#f3e6c4",f.font="bold 72px Georgia, serif",f.textAlign="center",f.fillText("THE AGE OF DINOSAURS",512,80),f.font="italic 30px Georgia, serif",f.fillText("252 \u2013 66 million years ago (and, apparently, tonight)",512,125);let y=new V(new Ft(22,8.6),new ct({map:Te(u),roughness:.8}));y.position.set(0,6,-45.78),e.add(y);let m=la();m.position.set(0,6.6,-10.25),m.rotation.y=0,e.add(m);let[g,_]=_e(128,128);_.fillStyle="rgba(30,20,12,0.85)",_.beginPath(),_.ellipse(64,84,22,28,0,0,7),_.fill();for(let[w,A]of[[-.45,52],[0,60],[.45,52]])_.save(),_.translate(64,70),_.rotate(w),_.beginPath(),_.ellipse(0,-A*.6,9,A*.45,0,0,7),_.fill(),_.restore();let v=new fe({map:Te(g),transparent:!0,depthWrite:!1,opacity:.85}),x=new ut,C=[];for(let w=0;w<6;w++)C.push([(w%2?.7:-.7)+Math.sin(w*.3)*.5,-21+w*2.3]);for(let w=0;w<12;w++)C.push([.8+w*1.25,-7.6+w*.65+(w%2?.45:-.45)]);let T=new Ft(1.1,1.1);C.forEach(([w,A],E)=>{let M=new V(T,v);M.rotation.x=-Math.PI/2,M.position.set(w,.02,A);let[I,O]=C[E+1]?[w,A]:C[E-1],[k,H]=C[E+1]||[w,A];M.rotation.z=Math.atan2(-(k-I),-(H-O)),x.add(M)}),x.visible=!1,e.add(x),this.refs.footprints=x}_roman(){let t=this.mats,e=this.scene;this.floor(12,40,-9,9,t.mosaic,0,4),this.ceiling(12,40,-9,9,9,t.darkCeil),this.wallX(-9,12,40,9,t.romanWall,[],3),this.wallX(9,12,40,9,t.romanWall,[],3),this.wallZ(40,-9,9,9,t.romanWall,[],3),this.wallZ(12,-9,9,9,t.romanWall,[{c:0,w:6,h:6.2}],3);let n=new ct({color:9190186,roughness:.7});for(let f of[-3.2,3.2])e.add(xt(24,.012,.3,n,26,0,f));for(let f of[16.5,22,27.5,33])for(let p of[-5.6,5.6])this.add(Kc(9,.48,ft.stoneWhite()),f,0,p),this.addBoxCollider(f,p,1.25,1.25);let s=[["JULIUS CAESAR",19.25,-8],["AUGUSTUS",24.75,-8],["NERO",30.25,-8],["MARCUS AURELIUS",19.25,8],["CALIGULA",24.75,8],["HADRIAN",30.25,8]];for(let[f,p,y]of s)this.add(ra(f),p,0,y,y>0?Math.PI:0),this.addBoxCollider(p,y,.85,.85);this.add(_u(),25,0,0,Math.PI/2+.2),this.addCollider(23.2,27.4,-1.1,1.1);for(let[f,p]of[[22,-2.6],[28,-2.6],[22,2.6],[28,2.6]])this.add(Js(),f,0,p);for(let[f,p]of[[22,-2.6],[22,2.6]]){let y=Pr(6);y.position.set(f,0,p),e.add(y)}this.add(ss("ROMAN CHARIOT","Top speed: 40 km/h. Seatbelts: none. Cupholders: also none."),20.8,0,0,-Math.PI/2);for(let[f,p]of[[36.5,-7.8],[37.4,-7.6],[36.5,7.8],[37.4,7.6],[14,-8],[14,8]])this.add(vu(),f,0,p,f*3),this.addBoxCollider(f,p,.5,.5);let[r,o]=_e(1024,512);o.fillStyle="#cfc6b4",o.fillRect(0,0,1024,512);for(let f=0;f<3e3;f++)o.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,o.fillRect(Math.random()*1024,Math.random()*512,3,3);o.strokeStyle="#8f8676",o.lineWidth=14,o.strokeRect(20,20,984,472),o.fillStyle="#3d3528",o.textAlign="center",o.font="bold 86px Georgia, serif",o.fillText("MVSEVM",512,150),o.fillText("CONDITVM ANNO",512,260),o.font="bold 120px Georgia, serif",o.fillText("MCMLXXIV",512,410);let a=new V(new Ft(5.4,2.7),new ct({map:Te(r),roughness:.9}));a.position.set(39.77,3.6,0),a.rotation.y=-Math.PI/2,e.add(a),e.add(xt(.3,.3,5.8,ft.stoneWhite(),39.7,2.1,0));for(let f of[-4.2,4.2]){let p=new V(new Ft(1.8,4.5),new ct({map:Ae(`S
P
Q
R`,{w:200,h:500,bg:"#8a1022",fg:"#e9c46a",font:"bold 90px Georgia, serif",border:"#e9c46a"}),side:He}));p.position.set(39.7,4.6,f),p.rotation.y=-Math.PI/2,e.add(p)}let l=Ks("ROMAN NUMERALS 101",`I = 1    V = 5    X = 10    L = 50
C = 100    D = 500    M = 1000
Add them up, biggest first: XVI = 10+5+1 = 16.
Small BEFORE big means subtract: IV = 4, IX = 9, XC = 90, CM = 900.`,3.2,2,{bodyFont:"23px Georgia, serif",bg:"#2a1c14",accent:"#e9c46a"});l.position.set(15.6,2.2,-8.78),e.add(l);let c=Ks("GLADIATOR SHIELD",`Property of Maximus. Do not borrow.
Won XXIII fights. Lost I (to a goose).`,2.6,1.2,{bg:"#2a1c14",accent:"#e9c46a"});c.position.set(15.6,2.2,8.78),c.rotation.y=Math.PI,e.add(c);let h=new V(new oe(.7,.7,.08,24),new ct({color:9048098,roughness:.6}));h.rotation.x=Math.PI/2,h.position.set(19,2.6,8.75),e.add(h);let d=th({title:"AQVILA LOCK",color:"#ffcc4d"});this.add(d.group,Qt.romanPanel.x,0,Qt.romanPanel.z,-Math.PI/2),this.addBoxCollider(Qt.romanPanel.x,Qt.romanPanel.z,.8,.6,Math.PI/2),this.addUpdater(f=>d.update(f)),this.refs.console2=d,this.refs.panel2It=this.addInteractable({id:"panel2",pos:new P(Qt.romanPanel.x,1.2,Qt.romanPanel.z),prompt:"Inspect numeral lock",enabled:!1});let u=la();u.position.set(12.25,6.6,0),u.rotation.y=Math.PI/2,e.add(u)}_collectibles(){this.night&&(this.addCollectible("lobby_desk",1.6,1.45,4.2,0),this.addCollectible("office_locker",-14.5,.6,3.6,3),this.addCollectible("dino_tri",-12.6,.8,-21.5,1),this.addCollectible("dino_meteor",12.3,.6,-42.8,4),this.addCollectible("dino_mural",-13,.6,-44.5,2),this.addCollectible("roman_caligula",24.75,2,8,0),this.addCollectible("roman_chariot",25,1.55,0,3),this.addCollectible("roman_amphora",38.3,.6,-6.6,1))}_visitors(){let t=we(99);this.visitors=[];let e=[{minX:-9,maxX:9,minZ:-8,maxZ:2},{minX:-12,maxX:12,minZ:-44,maxZ:-12,avoid:{minX:-5.5,maxX:5.5,minZ:-38,maxZ:-21}},{minX:14,maxX:38,minZ:-7,maxZ:7,avoid:{minX:22,maxX:28.5,minZ:-2,maxZ:2}}],n=s=>{for(let r=0;r<20;r++){let o=s.minX+t()*(s.maxX-s.minX),a=s.minZ+t()*(s.maxZ-s.minZ);if(!(s.avoid&&o>s.avoid.minX&&o<s.avoid.maxX&&a>s.avoid.minZ&&a<s.avoid.maxZ))return new P(o,0,a)}return new P((s.minX+s.maxX)/2,0,s.maxZ)};for(let s=0;s<14;s++){let r=e[s%3===0?0:s%3===1?1:2],o=Iu(t),a=n(r);o.group.position.copy(a),this.scene.add(o.group),this.visitors.push({p:o,area:r,target:n(r),wait:t()*4})}this.addUpdater(s=>{for(let r of this.visitors){let o=r.p.group;if(r.wait>0)r.wait-=s,r.p.setMode("idle");else{let l=r.target.clone().sub(o.position),c=l.length();if(c<.3)r.wait=2+t()*5,r.target=n(r.area);else{l.normalize(),o.position.addScaledVector(l,Math.min(c,1.1*s));let d=Math.atan2(l.x,l.z)-o.rotation.y;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;o.rotation.y+=d*Math.min(1,s*6),r.p.setMode("walk",1.1)}}let a=this.game.player;if(a){let l=a.pos.x-o.position.x,c=a.pos.z-o.position.z,h=Math.hypot(l,c);h<.6&&h>.001&&(a.pos.x+=l/h*(.6-h),a.pos.z+=c/h*(.6-h))}r.p.update(s)}})}makeAaron(){return new js({shirt:9417696,pants:1778752,cap:!0,badge:!0,nameTag:!0,hair:1118481,skin:13012580})}};var xn=[-2.2,0,2.2],yn=24,Ou=8,sn=880;function hh(i=1.15){let t=[[-.45,0],[-.2,0],[-.07,.78],[.07,.78],[.2,0],[.45,0],[.26,.95],[.3,1.38],[.66,.98],[.79,1.1],[.38,1.66],[.12,1.72]];for(let e=1;e<12;e++){let n=-.55+e/12*(Math.PI+1.1);t.push([Math.cos(n)*.23,1.92+Math.sin(n)*.23])}return t.push([-.12,1.72],[-.38,1.66],[-.79,1.1],[-.66,.98],[-.3,1.38],[-.26,.95]),t.map(([e,n])=>[e*i,n*i])}var pa=class extends Ni{constructor(t){super(t);let e=this.scene;e.background=new Gt(328714),e.fog=new Bs(328714,25,120),this.ownsCamera=!0,this.surface="carpet",this.rng=we(1974),e.add(new Pi(8949952,2759188,1.3)),e.add(new Ii(16777215,.25)),this.headLight=new De(16767136,60,40,1.6),e.add(this.headLight),this.alarm=new De(16719904,0,30,1.5),e.add(this.alarm),this.mats={floor:new ct({map:Me("marble"),roughness:.3}),carpet:new ct({map:Me("carpet"),roughness:.9}),wall:new ct({map:Me("plaster"),color:7035514,roughness:.85}),ceil:new ct({color:1578012,roughness:1}),lamp:new fe({color:16773320}),frame:new ct({color:13214282,metalness:.8,roughness:.35})},this.paintMats=[];for(let h=0;h<8;h++)this.paintMats.push(new ct({map:lu(500+h,h%3===0?"portrait":"landscape"),roughness:.7}));this.chunks=[];for(let h=0;h<Ou;h++){let d=this._chunk(h);d.position.z=-h*yn,e.add(d),this.chunks.push(d)}this.guard=ua(),e.add(this.guard.group),this.guard.group.rotation.y=Math.PI,this.guard.setMode("run",8);let n=Ui();n.rotation.x=Math.PI/2,n.scale.setScalar(1.3),this.guard.attachToHand(n,1);let[s,r]=[document.createElement("canvas"),null];s.width=s.height=128;let o=s.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(0,0,0,0.85)"),a.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=a,o.fillRect(0,0,128,128),this.blob=new V(new Ft(1,1),new fe({map:new zs(s),transparent:!0,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.03,e.add(this.blob),this.trex=new rs,this.trex.setAlive(!0),this.trex.group.rotation.y=Math.PI,e.add(this.trex.group);let l=lh(da());for(let h of l.eyes)h.visible=!0;this.lunge=new ut;let c=new ut;c.rotation.y=Math.PI/2+.35,c.add(l.head),this.lunge.add(c),this.lungeJaw=l.jaw,this.lungeHead=l.head,this.lunge.visible=!1,this.lungeT=-1,this.trexBehind=6,this.hideTrex=!1,this._buildWall(),this.obstacles=[],this.donuts=[],this.plan=this._plan(),this.planIdx=0,this.debris=[],this.st={phase:"idle",z:0,x:0,lane:1,prevLane:1,y:0,vy:0,slide:0,speed:0,danger:.3,invuln:0,slow:0,stompT:0,t:0,donutCount:0,arrowShown:!1,alarmT:0},this.camPos=new P,this.camLook=new P}_chunk(t){let e=new ut,n=this.mats,s=new V(ca(10,yn,4),n.floor);s.rotation.x=-Math.PI/2,s.position.z=-yn/2,s.receiveShadow=!0,e.add(s);let r=new V(new Ft(7.2,yn),n.carpet);r.material.map.repeat.set(1,yn/7.2),r.rotation.x=-Math.PI/2,r.position.set(0,.012,-yn/2),e.add(r);for(let a of[-1,1]){let l=new V(Xn(.4,7,yn,3),n.wall);l.position.set(a*5.2,3.5,-yn/2),e.add(l);for(let c=0;c<3;c++){let h=-4-c*8,d=xt(.5,7,.7,ft.stoneWhite(),a*4.9,0,h);if(e.add(d),c<2){let u=this.paintMats[(t*2+c+(a>0?3:0))%this.paintMats.length],f=u.map.image.height>200,p=f?1.6:2.6,y=f?2:1.6,m=new V(new Ft(p,y),u);m.position.set(a*4.98,3,h-4),m.rotation.y=-a*Math.PI/2,e.add(m);let g=xt(.08,y+.2,p+.2,n.frame,a*5,3-(y+.2)/2,h-4);e.add(g);let _=new V(new ee(.12,8,6),n.lamp);_.position.set(a*4.85,4.6,h-4),e.add(_)}}}let o=new V(new Ft(10.4,yn),n.ceil);o.rotation.x=Math.PI/2,o.position.set(0,7,-yn/2),e.add(o);for(let a=0;a<2;a++){let l=xt(2.4,.08,.5,n.lamp,0,6.9,-6-a*12);e.add(l)}return e}_buildWall(){let t=new Gn;t.moveTo(-5.4,0),t.lineTo(5.4,0),t.lineTo(5.4,7),t.lineTo(-5.4,7),t.lineTo(-5.4,0);let e=new ci;hh(1.18).forEach(([c,h],d)=>d===0?e.moveTo(xn[2]+c,h+.001):e.lineTo(xn[2]+c,h+.001)),e.closePath(),t.holes.push(e);let s=new Gs(t,{depth:.6,bevelEnabled:!1}),r=new V(s,new ct({map:Me("plaster"),color:9076594,roughness:.9}));r.material.map.repeat.set(.25,.25),r.position.z=-sn-.6,r.castShadow=r.receiveShadow=!0,this.scene.add(r),this.wall=r;let o=new V(new Ft(4,.9),new ct({map:Ae("ARCHIVES \u2014 STAFF ONLY",{w:1024,h:200,bg:"#a01818",fg:"#fff",font:"bold 84px Arial Black, Arial"})}));o.position.set(-1,4.8,-sn+.02),this.scene.add(o);let a=new V(new Ft(14,8),new fe({color:0}));a.position.set(0,3.5,-sn-5),this.scene.add(a);let l=new V(new Ft(6,2),new fe({map:Ae("GO RIGHT \u279C",{w:1024,h:340,bg:"#ffcc4d",fg:"#111",font:"bold 170px Arial Black, Arial"}),toneMapped:!1,side:He}));l.position.set(0,5.5,-sn+30),this.scene.add(l),this.arrow3d=l}_plan(){let t=this.rng,e=[],n=-70;for(;n>-(sn-90);){let s=-n/sn,r=t(),o={z:n,items:[]},a=Math.floor(t()*3);if(r<.3){for(let l=0;l<3;l++)l!==a&&o.items.push({type:t()<.5?"case":t()<.5?"statue":"cart",lane:l});o.donutLane=a}else if(r<.48){for(let l=0;l<3;l++)o.items.push({type:"rope",lane:l});o.donutArc=Math.floor(t()*3)}else if(r<.64){for(let l=0;l<3;l++)o.items.push({type:"banner",lane:l});o.donutLane=a}else if(r<.8){o.items.push({type:"case",lane:a});let l=(a+1+Math.floor(t()*2))%3;o.items.push({type:t()<.5?"bench":"column",lane:l}),o.donutArc=l}else{let l=["rope","banner","case"],c=Math.floor(t()*3);for(let h=0;h<3;h++)o.items.push({type:l[(h+c)%3],lane:h});o.donutLane=(2-c+3)%3}e.push(o),n-=Be(30,19,s)+t()*6}return e}_spawnRow(t){for(let e of t.items){let n=this._makeObstacle(e.type);n.mesh.position.set(xn[e.lane],0,t.z),this.scene.add(n.mesh),this.obstacles.push({...n,lane:e.lane,z:t.z,type:e.type,hit:!1})}if(t.donutLane!=null)for(let e=0;e<5;e++)this._spawnDonut(xn[t.donutLane],.9,t.z+14-e*2.4);if(t.donutArc!=null)for(let e=0;e<5;e++){let n=e/4;this._spawnDonut(xn[t.donutArc],.9+Math.sin(n*Math.PI)*1.3,t.z+4-n*8)}}_spawnDonut(t,e,n){let s=Wn({frosting:Math.floor(Math.random()*5),glow:!0,scale:1.6});s.rotation.x=Math.PI/2,s.position.set(t,e,n),this.scene.add(s),this.donuts.push({obj:s,taken:!1})}_makeObstacle(t){let e=new ut,n=0,s=2,r=1,o=1.7;if(t==="case"){let a=new V(new ee(.28,14,10),new ct({color:14274472,roughness:.6}));a.scale.y=1.3,a.position.y=.36;let l=new ut;l.add(a);let c=aa(1.6,1.1,1,l);e.add(c),s=2.1,r=1}else if(t==="statue")e.add(ra(null)),s=1.9,r=.9,o=1;else if(t==="cart"){e.add(xt(1.4,1.1,.9,jt("cart",{color:15909166,roughness:.5}),0,.15,0));let a=xt(.06,1.6,.06,ft.wood(),.4,.2,.2);a.rotation.z=.2,e.add(a),e.add(new V(new gn(.12,.03,6,12),ft.black()).translateY(.12).translateX(-.5));let l=new V(new Ft(.9,.5),new ct({map:Ae("WET FLOOR",{w:256,h:140,bg:"#ffd400",fg:"#111",font:"bold 44px Arial Black, Arial"})}));l.position.set(0,.8,.46),e.add(l),s=1.4,r=.9,o=1.5}else if(t==="rope"){let a=Js(),l=Js();a.position.x=-.95,l.position.x=.95,e.add(a,l);let c=Pr(1.9);c.position.x=-.95,e.add(c),s=1,r=.3,o=2}else if(t==="bench"){let a=oa(1.9);e.add(a),s=.55,r=.5,o=1.9}else if(t==="column"){let a=new V(new oe(.38,.38,2,16),ft.stoneWhite());a.rotation.z=Math.PI/2,a.position.y=.38,a.castShadow=!0,e.add(a),s=.76,r=.76,o=2}else if(t==="banner"){let a=new V(new Ft(2.1,1.7),new ct({map:Ae(`EXHIBIT
CLOSED`,{w:300,h:240,bg:"#14243d",fg:"#ffcc4d",font:"bold 62px Arial Black, Arial",border:"#ffcc4d"}),side:He}));a.position.y=2.25,e.add(a);for(let l of[-.9,.9])e.add(xt(.03,3.6,.03,ft.metal(),l,3.1,0));n=1.3,s=3.6,r=.3,o=2.1}return Re(e,!0,!1),{mesh:e,y0:n,y1:s,d:r,w:o}}start(){let t=this.st;return t.phase="intro",t.t=0,this.game.camera.add(this.lunge),this.lunge.position.set(0,2.4,-2.8),this.scene.add(this.game.camera),new Promise(e=>this.resolve=e)}beginRun(){this.st.phase="run",this.st.speed=13}update(t){super.update(t);let e=this.game,n=this.st,s=e.input;n.t+=t;let r=e.camera;for(;this.planIdx<this.plan.length&&this.plan[this.planIdx].z>n.z-130;)this._spawnRow(this.plan[this.planIdx]),this.planIdx++;for(let l of this.chunks)l.position.z-yn>n.z+30&&(l.position.z-=Ou*yn),l.visible=l.position.z>-sn-yn;if(n.phase==="intro")n.speed=9,n.z-=n.speed*t,this.trex.group.visible=!this.hideTrex,this.trex.group.position.set(.5,0,n.z+this.trexBehind),this.trex.setMode("run",9);else if(n.phase==="run"){let l=-n.z/sn,c=Be(13.5,20,qe(l,0,1))*(n.slow>0?.6:1);n.speed=hn(n.speed,c,2,t),n.slow-=t,n.z-=n.speed*t;let h=s.wasPressed("KeyA","ArrowLeft","SwipeLeft"),d=s.wasPressed("KeyD","ArrowRight","SwipeRight"),u=s.wasPressed("KeyW","ArrowUp","Space","SwipeUp"),f=s.wasPressed("KeyS","ArrowDown","SwipeDown");h&&n.lane>0&&(n.prevLane=n.lane,n.lane--,e.audio.play("whoosh",{vol:.4})),d&&n.lane<2&&(n.prevLane=n.lane,n.lane++,e.audio.play("whoosh",{vol:.4})),u&&n.y<=.001&&(n.vy=10.5,n.slide=0,e.audio.play("whoosh",{vol:.5})),f&&(n.y>.05&&(n.vy=-18),n.slide=.75),n.danger=qe(n.danger-t*.035,0,1),n.invuln-=t,n.stompT-=t,n.stompT<=0&&(n.stompT=Be(.62,.36,n.danger),e.audio.play("stomp",{vol:.25+n.danger*.6}),e.shake(.05+n.danger*.18,.25)),Math.random()<t*.08&&e.audio.play("growl",{vol:.5+n.danger}),this._collisions(),!n.arrowShown&&n.z<-(sn-95)&&(n.arrowShown=!0,e.hud.showArrow(!0),e.audio.play("alarm",{n:2})),n.z<-sn+1.2&&(n.lane===2&&Math.abs(n.x-xn[2])<.6?this._escape():this._caught(!0)),e.hud.setChase(qe(-n.z/sn,0,1),n.danger,n.donutCount)}else if(n.phase==="escape"){let l=hn(n.z,-sn-3.4,2.6,t);n.speed=(n.z-l)/Math.max(t,1e-4),n.z=l}n.vy-=32*t,n.y=Math.max(0,n.y+n.vy*t),n.y===0&&(n.vy=Math.max(0,n.vy)),n.slide-=t,n.x=hn(n.x,xn[n.lane],14,t);let o=this.guard;o.group.position.set(n.x,n.y,n.z),n.phase==="escape"&&n.speed<1?o.setMode("idle"):n.y>.05?o.setMode("jump"):n.slide>0?o.setMode("slide"):o.setMode("run",n.speed),o.group.visible=n.invuln<=0||Math.floor(n.t*12)%2===0,o.update(t);let a=1.5+n.danger*5;this.blob.scale.set(a,a*1.6,1),this.blob.position.set(n.x*.5,.03,n.z+3-n.danger*2.5),this.blob.material.opacity=n.phase==="run"?.25+n.danger*.55:0;for(let l of this.donuts)l.taken||(l.obj.rotation.z+=t*3,Math.abs(l.obj.position.z-n.z)<.9&&Math.abs(l.obj.position.x-n.x)<.9&&Math.abs(l.obj.position.y-(n.y+.9))<1.1&&(l.taken=!0,this.scene.remove(l.obj),n.donutCount++,e.meter.add(4),e.audio.play("coin",{pitch:n.donutCount%5*2})),l.obj.position.z>n.z+12&&(l.taken=!0,this.scene.remove(l.obj)));this.obstacles=this.obstacles.filter(l=>l.z>n.z+15?(this.scene.remove(l.mesh),!1):!0);for(let l of this.debris)l.v.y-=20*t,l.m.position.addScaledVector(l.v,t),l.m.rotation.x+=t*6,l.m.position.y<0&&(l.m.position.y=0,l.v.multiplyScalar(.4));if(this.headLight.position.set(n.x*.4,5.5,n.z-7),n.alarmT+=t,this.alarm.position.set(0,6,n.z+6),this.alarm.intensity=n.phase==="run"?Math.sin(n.alarmT*8)>0?25:4:0,this.camMode==="front"?(this.camPos.set(2.3,1.7,n.z-6.8),this.camLook.set(0,3.1,n.z+4)):this.camMode==="chase"&&(this.camPos.set(n.x*.55,3.3+n.y*.3,n.z+6.4),this.camLook.set(n.x*.8,1.2+n.y*.5,n.z-7)),this.camMode!=="free"&&(this.camBlend!=null?(r.position.lerpVectors(this.camFrom,this.camPos,this.camBlend),this._look.lerpVectors(this.lookFrom,this.camLook,this.camBlend),r.lookAt(this._look)):(r.position.copy(this.camPos),r.lookAt(this.camLook))),n.phase==="run"&&(this.trex.group.visible=!1),this.trex.update(t),this.lungeT>=0){this.lungeT+=t;let l=this.lungeT,c=this.lungeDur,h=l<.25?l/.25:l<c-.3?1:Math.max(0,(c-l)/.3);this.lunge.visible=!0,this.lunge.position.set(Be(-3.4,this.lungeFull?-.9:-1.1,h),Be(2.2,this.lungeFull?.2:.5,h),-2.5),this.lunge.rotation.z=Be(.25,-.3,h),this.lungeJaw.rotation.x=l<.3?.9:l<.42?Be(.9,0,(l-.3)/.12):.1,l>c&&(this.lungeT=-1,this.lunge.visible=!1)}}_collisions(){let t=this.st,e=this.game;if(t.invuln>0)return;let n=t.slide>0&&t.y<.1?.8:1.7;for(let s of this.obstacles){if(s.hit||Math.abs(s.z-t.z)>s.d/2+.35||Math.abs(s.mesh.position.x-t.x)>s.w/2+.25)continue;let r=t.y;if(t.y+n<=s.y0||r>=s.y1)continue;s.hit=!0,Math.abs(t.x-xn[t.lane])>.5&&t.prevLane!==t.lane&&s.lane===t.lane?(t.lane=t.prevLane,this._stumble(.2,!1,s)):this._stumble(.4,!0,s);return}}_stumble(t,e,n){let s=this.st,r=this.game;if(s.danger+=t,s.invuln=1.2,r.audio.play("bonk"),r.shake(.35,.4),r.hud.flash("rgba(255,40,40,0.35)"),e){s.slow=1,r.audio.play("crash",{vol:.5}),n.mesh.visible=!1;for(let o=0;o<10;o++){let a=new V(new ie(.2,.2,.2),ft.darkWood());a.position.set(n.mesh.position.x,.8,n.z),this.scene.add(a),this.debris.push({m:a,v:new P((Math.random()-.5)*8,4+Math.random()*6,-Math.random()*10)})}}if(s.danger>=1){this._caught(!1);return}this.lungeT=0,this.lungeDur=.75,this.lungeFull=!1,r.audio.play("roar",{short:!0,vol:.8})}_caught(t){let e=this.st,n=this.game;e.phase==="run"&&(e.phase="caught",e.speed=0,n.hud.showArrow(!1),t&&(n.audio.play("bonk"),n.audio.play("crash",{vol:.6})),n.audio.play("roar"),this.lungeT=0,this.lungeDur=1.4,this.lungeFull=!0,n.shake(.6,1),setTimeout(()=>this.resolve?.("caught"),1300))}_escape(){let t=this.st;t.phase="escape",this.game.hud.showArrow(!1),this.resolve?.("escaped")}setCam(t){this.camMode=t,this.camBlend=null}blendCam(t){this.camFrom=this.game.camera.position.clone();let e=new P;this.game.camera.getWorldDirection(e),this.lookFrom=this.game.camera.position.clone().addScaledVector(e,10),this._look=new P,this.camMode=t,this.camBlend=0}dispose(){this.game.camera.remove(this.lunge),super.dispose()}};var Ht=3.2,$e=7,ui=5,Qs=3,vn=3,Pe=.3,ma=class extends Ni{constructor(t){super(t);let e=this.scene;this.surface="concrete",e.background=new Gt(65794),e.fog=new Hs(131587,.07);let n=this.rng=we(4242);e.add(new Ii(8425648,.22)),e.add(new Pi(4214896,1051656,.3)),this.mats={wall:new ct({map:Me("shelves"),roughness:.85}),floor:new ct({map:Me("concrete"),roughness:.9}),ceil:new ct({map:Me("concrete"),color:5592405,roughness:1}),pipe:new ct({color:5922920,roughness:.5,metalness:.6}),bulb:new fe({color:16764800})};let s=ui*Qs;this.R=s;let r=[],o=[];for(let v=0;v<s;v++)r.push(new Array($e).fill(!0)),o.push(new Array($e).fill(!0));this.entries=[{c:3,r:0}],this.exits=[];for(let v=0;v<Qs;v++){let x=v*ui,C=x+ui-1,T=this.entries[v],w=new Set([`${T.c},${T.r}`]),A=[T];for(;A.length;){let I=A[A.length-1],O=[[1,0],[-1,0],[0,1],[0,-1]].map(([H,Z])=>({c:I.c+H,r:I.r+Z,dc:H,dr:Z})).filter(H=>H.c>=0&&H.c<$e&&H.r>=x&&H.r<=C&&!w.has(`${H.c},${H.r}`));if(!O.length){A.pop();continue}let k=O[Math.floor(n()*O.length)];k.dc===1&&(o[I.r][I.c]=!1),k.dc===-1&&(o[I.r][k.c]=!1),k.dr===1&&(r[I.r][I.c]=!1),k.dr===-1&&(r[k.r][k.c]=!1),w.add(`${k.c},${k.r}`),A.push({c:k.c,r:k.r})}for(let I=0;I<4;I++){let O=x+Math.floor(n()*(ui-1)),k=Math.floor(n()*($e-1));n()<.5?o[O][k]=!1:r[O][k]=!1}let E=this._bfs(T,r,o,x,C),M=null;for(let I=0;I<$e;I++){let O=E[`${I},${C}`];(M==null||O>M.d)&&(M={c:I,r:C,d:O})}this.exits.push(M),this.entries.push({c:M.c,r:C+1}),this[`dead${v}`]=Object.entries(E).map(([I,O])=>{let[k,H]=I.split(",").map(Number);return{c:k,r:H,d:O}}).filter(I=>this._openings(I.c,I.r,r,o,x,C)===1&&!(I.c===M.c&&I.r===M.r)&&!(I.c===T.c&&I.r===T.r)).sort((I,O)=>O.d-I.d)}this.north=r,this.east=o;let a=-Ht/2,l=($e-1)*Ht+Ht/2,c=-(s-1)*Ht-Ht/2-2*Ht,h=Ht/2;this.floor(a-1,l+1,c-1,h+4,this.mats.floor,0,3),this.ceiling(a-1,l+1,c-1,h+4,vn,this.mats.ceil,3);let d=[],u=(v,x)=>d.push({x:x*Ht,z:-v*Ht-Ht/2,rot:0}),f=(v,x)=>d.push({x:x*Ht+Ht/2,z:-v*Ht,rot:Math.PI/2});this.gates=[];for(let v=0;v<s;v++){for(let x=0;x<$e;x++){let C=v%ui===ui-1;if(r[v][x]){let T=this.exits[Math.floor(v/ui)];C&&T.c===x&&T.r===v?this._gateWall(v,x,Math.floor(v/ui)):u(v,x)}x<$e-1&&o[v][x]&&f(v,x)}f(v,-1),f(v,$e-1)}for(let v=0;v<$e;v++)v!==this.entries[0].c&&u(-1,v);let p=Xn(Ht+Pe,vn,Pe,1.6),y=new Uo(p,this.mats.wall,d.length),m=new le,g=new Bn,_=new P(1,1,1);d.forEach((v,x)=>{g.setFromAxisAngle(new P(0,1,0),v.rot),m.compose(new P(v.x,vn/2,v.z),g,_),y.setMatrixAt(x,m);let C=(Ht+Pe)/2,T=Pe/2;v.rot===0?this.addCollider(v.x-C,v.x+C,v.z-T,v.z+T):this.addCollider(v.x-T,v.x+T,v.z-C,v.z+C)}),y.receiveShadow=!0,y.castShadow=!0,e.add(y),this.wallSegs=d,this._entranceWall(),this._finalRoom(),this._stations(),this._decorate()}_bfs(t,e,n,s,r){let o={[`${t.c},${t.r}`]:0},a=[t];for(;a.length;){let l=a.shift(),c=o[`${l.c},${l.r}`],h=[];l.c<$e-1&&!n[l.r][l.c]&&h.push([l.c+1,l.r]),l.c>0&&!n[l.r][l.c-1]&&h.push([l.c-1,l.r]),l.r<r&&!e[l.r][l.c]&&h.push([l.c,l.r+1]),l.r>s&&!e[l.r-1][l.c]&&h.push([l.c,l.r-1]);for(let[d,u]of h){let f=`${d},${u}`;o[f]==null&&(o[f]=c+1,a.push({c:d,r:u}))}}return o}_openings(t,e,n,s,r,o){let a=0;return t<$e-1&&!s[e][t]&&a++,t>0&&!s[e][t-1]&&a++,e<o&&!n[e][t]&&a++,e>r&&!n[e-1][t]&&a++,a}cellPos(t,e){return new P(t*Ht,0,-e*Ht)}_gateWall(t,e,n){let s=this.scene,r=e*Ht,o=-t*Ht-Ht/2,a=1.5,l=(Ht+Pe-a)/2;for(let p of[-1,1]){let y=new V(Xn(l,vn,Pe,1.6),this.mats.wall);y.position.set(r+p*(a/2+l/2),vn/2,o),s.add(y),this.addCollider(r+p*(a/2+l/2)-l/2,r+p*(a/2+l/2)+l/2,o-Pe/2,o+Pe/2)}let c=xt(a,vn-2.3,Pe,ft.metal(),r,2.3,o);s.add(c);let h=new ut,d=new oe(.035,.035,2.3,6);for(let p=0;p<8;p++){let y=new V(d,ft.metal());y.position.set(-a/2+.1+p*((a-.2)/7),1.15,0),y.castShadow=!0,h.add(y)}for(let p of[.3,1.2,2.1])h.add(xt(a,.06,.06,ft.metal(),0,p,0));h.position.set(r,0,o),s.add(h);let u=this.addCollider(r-a/2,r+a/2,o-.2,o+.2),f=new V(new Ft(a,.5),new fe({map:Ae("",{w:128,h:32,bg:"#ffcc00"}),color:16763904}));f.rotation.x=-Math.PI/2,f.position.set(r,.01,o+.5),s.add(f),this.gates[n]={mesh:h,collider:u,open:!1,x:r,z:o}}openGate(t,e=!1){let n=this.gates[t];return!n||n.open?Promise.resolve():(n.open=!0,n.collider.enabled=!1,e?(n.mesh.position.y=2.25,Promise.resolve()):(this.game.audio.play("gate"),this.game.tween(1.6,s=>{n.mesh.position.y=2.25*s})))}_entranceWall(){let t=this.scene,n=this.entries[0].c*Ht,s=Ht/2,r=new Gn,o=(Ht+Pe)/2;r.moveTo(-o,0),r.lineTo(o,0),r.lineTo(o,vn),r.lineTo(-o,vn),r.lineTo(-o,0);let a=new ci;hh(1.18).forEach(([f,p],y)=>y===0?a.moveTo(f,p+.001):a.lineTo(f,p+.001)),r.holes.push(a);let l=new Gs(r,{depth:Pe,bevelEnabled:!1}),c=new V(l,new ct({map:Me("plaster"),color:9076594,roughness:.9}));c.position.set(n,0,s-Pe/2),t.add(c),this.addCollider(n-o,n+o,s-Pe/2,s+Pe/2);let h=new De(16723984,4,6,2);h.position.set(n,1.4,s+1.2),t.add(h),this.entranceLight=h;let d=new V(new Ft(4,3),new fe({color:1705219}));d.position.set(n,1.5,s+2.5),d.rotation.y=Math.PI,t.add(d);let u=new V(new ee(.12,14,10),new ct({color:16723984,emissive:16722432,emissiveIntensity:6}));u.position.set(n,1.9,s+.5),u.visible=!1,t.add(u),this.holeEye=u}_finalRoom(){let t=this.scene,e=this.exits[Qs-1],n=Math.max(0,Math.min($e-3,e.c-1)),s=-(this.R-1)*Ht-Ht/2,r=n*Ht-Ht/2,o=(n+3)*Ht-Ht/2,a=s,l=s-2*Ht,c=(v,x,C,T)=>{let w=Math.hypot(C-v,T-x),A=new V(Xn(w+Pe,vn,Pe,1.6),this.mats.wall);A.position.set((v+C)/2,vn/2,(x+T)/2),v===C&&(A.rotation.y=Math.PI/2),t.add(A),this.addCollider(Math.min(v,C)-Pe/2,Math.max(v,C)+Pe/2,Math.min(x,T)-Pe/2,Math.max(x,T)+Pe/2)};c(r,l,o,l),c(r,a,r,l),c(o,a,o,l);let h=(r+o)/2,d=(a+l)/2;this.finalRoom={x0:r,x1:o,z0:a,z1:l,cx:h,cz:d};let u=new De(16756848,8,12,2);u.position.set(h,2.6,d),t.add(u);let f=new V(new ee(.1,10,8),this.mats.bulb);f.position.set(h,2.7,d),t.add(f);let p=new V(new Ft(2.4,.6),new ct({map:Ae("BREAK ROOM",{w:512,h:128,bg:"#2a1a12",fg:"#ffcf80",font:"bold 64px Arial Black, Arial"}),emissive:16764800,emissiveIntensity:.15}));p.position.set(h,2.3,l+Pe/2+.02),t.add(p),this.add(is(.7,1.05),h,0,d-.6),this.addBoxCollider(h,d-.6,.8,.8);let y=new V(new oe(.32,.32,.6,20,1,!0),ft.glass());y.position.set(h,1.35,d-.6),t.add(y);let m=Wn({frosting:0,glow:!0,scale:1.4});m.position.set(h,1.2,d-.6),m.rotation.x=.4,t.add(m),this.lastDonut=m;let g=new Xs(16766704,10,6,.4,.5,1.5);g.position.set(h,2.9,d-.6),g.target=m,t.add(g);let _=Ks("EXHIBIT 404",`THE LAST DONUT
(c. 1974)`,1.2,.6,{bg:"#1c1a17",titleFont:"bold 46px Georgia, serif",bodyFont:"40px Georgia, serif"});_.position.set(h,.6,d-.6+.42),t.add(_),this.beanbag=this.add(Au(),r+1.1,0,l+1.2),this.add(Ru(),o-.7,0,l+.6),this.addBoxCollider(o-.7,l+.6,1,.8),this.lastDonutIt=this.addInteractable({id:"lastdonut",pos:new P(h,1.2,d-.6),prompt:"Take THE LAST DONUT",enabled:!0,radius:2.2}),this.addUpdater(v=>{m.rotation.y+=v})}_stations(){let t=this.scene;this.stations=[];let e=["lightsout","morse","slider"];for(let n=0;n<Qs;n++){let s=this.exits[n],r=s.c*Ht,o=-s.r*Ht-Ht/2,a=r-1.15,l=o+Pe/2+.02,c=new ut,h=e[n],d=null;if(h==="lightsout"){c.add(xt(.7,.9,.18,jt("fusebox",{color:6976640,metalness:.5,roughness:.5}),0,1,.09));let p=new V(new Ft(.5,.25),new fe({map:Ae("\u26A1 FUSES",{w:256,h:128,bg:"#ffcc00",fg:"#111",font:"bold 50px Arial Black, Arial"})}));p.position.set(0,1.7,.19),c.add(p);for(let y=0;y<9;y++){let m=new V(new ee(.03,6,4),new fe({color:y%3===1?4521830:16724787}));m.position.set(-.18+y%3*.18,1.2-Math.floor(y/3)*.18,.19),c.add(m)}}else if(h==="morse"){c.add(xt(.9,.06,.5,ft.darkWood(),0,.95,.25)),c.add(xt(.06,.95,.06,ft.darkWood(),-.38,0,.45)),c.add(xt(.06,.95,.06,ft.darkWood(),.38,0,.45));let p=Tu();p.group.children[0].visible=!1,p.group.position.set(.1,.2,.25),p.group.scale.setScalar(1),c.add(p.group),d=p;let y=new V(new Ft(.7,.9),new ct({map:Ae(`MORSE
CODE
.- -...`,{w:256,h:330,bg:"#efe6cf",fg:"#222",font:"bold 44px Courier New, monospace"})}));y.position.set(0,1.8,.02),c.add(y)}else{let p=xt(1,1.2,.08,ft.brass(),0,.9,.04);c.add(p);let[y,m]=_e(256,300);m.fillStyle="#222",m.fillRect(0,0,256,300);for(let _=0;_<9;_++)m.fillStyle=`hsl(${_*40},50%,50%)`,m.fillRect(_%3*85+2,Math.floor(_/3)*100+2,81,96);m.fillStyle="#fff",m.font="bold 30px Arial",m.textAlign="center",m.fillText("???",128,160);let g=new V(new Ft(.9,1.1),new ct({map:Te(y)}));g.position.set(0,1.5,.09),c.add(g)}c.position.set(a,0,l),t.add(c),this.addBoxCollider(a,l+.25,.8,.5);let u=new De(h==="morse"?16755251:h==="lightsout"?6750105:16742348,3,5,2);u.position.set(a,2.4,l+.8),t.add(u);let f=this.addInteractable({id:"station"+n,pos:new P(a,1.2,l+.1),prompt:["Fix the fuse box","Use the telegraph","Restore the poster"][n],enabled:!0,radius:2.3});this.stations.push({kind:h,it:f,lamp:d,light:u,band:n,pos:new P(a,0,l+1.2)})}}_decorate(){let t=this.scene,e=this.rng;for(let s=0;s<4;s++){let r=-s*Ht*4-Ht,o=new V(new oe(.08,.08,$e*Ht+2,8),this.mats.pipe);o.rotation.z=Math.PI/2,o.position.set(($e-1)*Ht/2,vn-.2,r),t.add(o)}for(let s=0;s<18;s++){let r=Math.floor(e()*$e),o=Math.floor(e()*this.R),a=new V(new ee(.06,8,6),this.mats.bulb);a.position.set(r*Ht,vn-.45,-o*Ht),t.add(a);let l=xt(.01,.4,.01,ft.black(),r*Ht,vn-.42,-o*Ht);t.add(l)}this.donutCells=[];for(let s=0;s<Qs;s++){let r=this[`dead${s}`];r.slice(0,2).forEach((o,a)=>{let l=this.cellPos(o.c,o.r);this.addCollectible(`maze_${s}_${a}`,l.x,.9,l.z,(s*2+a)%5),this.donutCells.push(o)}),r.slice(2,6).forEach((o,a)=>{let l=this.cellPos(o.c,o.r),c=(s*3+a)%4,h;c===0?h=eh(s*10+a):c===1?h=nh(.9):c===2&&s===1?h=Eu():h=eh(s*7+a+3),h.position.add(new P(l.x,0,l.z)),t.add(h),this.addBoxCollider(l.x,l.z,.9,.9)})}for(let s=0;s<16;s++){let r=Math.floor(e()*$e),o=Math.floor(e()*this.R),a=this.cellPos(r,o),l=nh(.5);l.position.x=a.x+(e()<.5?-1:1)*1.15,l.position.z=a.z+(e()-.5)*1.6,l.rotation.y=e(),t.add(l)}this.peeks=[];let n=new fe({color:0});for(let s=0;s<Qs;s++){let r=s*ui+1+Math.floor(e()*3),o=e()<.5,a=o?-Ht/2+Pe/2+.01:($e-1)*Ht+Ht/2-Pe/2-.01,l=-r*Ht+(e()-.5),c=new V(new hi(.28,14),n);c.position.set(a,1.7,l),c.rotation.y=o?Math.PI/2:-Math.PI/2,c.scale.set(1.4,.8,1),t.add(c);let h=new V(new ee(.1,12,8),new ct({color:16723984,emissive:16722432,emissiveIntensity:6}));h.position.set(a+(o?.02:-.02),1.7,l),h.visible=!1,t.add(h),this.peeks.push({x:o?a+1.5:a-1.5,z:l,eye:h,done:!1})}}spawnFor(t){if(t===0){let n=this.cellPos(this.entries[0].c,0);return{x:n.x,z:n.z+.6,yaw:0}}let e=this.stations[t-1];return{x:e.pos.x+.4,z:e.pos.z+.4,yaw:0}}};var ga=class{constructor(t){this.game=t,this.modal=null}open(){this.close();let t=this.modal=Jt("div","modal");t.style.background="rgba(0,0,0,0.75)",t.innerHTML='<div class="computer"><div class="screen"></div></div>',q("#modal-root").append(t),this.screen=q(".screen",t),this.showLogin()}close(){this.modal?.remove(),this.modal=null}showLogin(){this.screen.className="screen",this.screen.innerHTML=`
      <div class="login-box">
        <div class="login-avatar">\u{1F482}</div>
        <div class="login-user">NIGHT_GUARD</div>
        <div class="login-pw"><span class="dots"></span><span class="caret"></span></div>
        <div class="login-btns"><button class="lb login">LOG IN</button><button class="lb hint">HINT?</button></div>
        <div class="login-msg"></div>
      </div>`,this.dots=q(".dots",this.screen),this.msg=q(".login-msg",this.screen)}async type(t,{visible:e=!1,speed:n=.11}={}){let s=this.game;for(let r of t){if(s.sched.skipping)break;this.dots.textContent+=e?r:"\u2022",s.audio.play("type"),await s.wait(n+Math.random()*.06)}s.sched.skipping&&(this.dots.textContent=e?t:"\u2022".repeat(t.length))}clear(){this.dots&&(this.dots.textContent="")}setMsg(t,e=!1){if(this.msg.textContent=t,this.msg.classList.toggle("ok",e),!e&&t){this.game.audio.play("error");let n=q(".login-box",this.screen);n.classList.remove("shake"),n.offsetWidth,n.classList.add("shake")}}async press(t){let e=q(`.lb.${t}`,this.screen);e&&(e.classList.add("press"),this.game.audio.play("click"),await dn(160),e.classList.remove("press"))}showHint(){this.screen.className="screen",this.screen.style.background="#000",this.screen.innerHTML='<div class="museos-hint"><span class="glitch">SOLVE THE PUZZLES</span>PUZZLE #1 SLEEPS WHERE GIANTS ONCE WALKED<br><br>&gt; DINOSAUR HALL_</div>',this.game.audio.play("glitch")}showDenied(t){this.screen.className="screen denied",this.screen.style.background="",this.screen.innerHTML=`<div class="denied-text">ACCESS DENIED</div>
      <div class="museos-hint" style="color:#ff8a8a;text-shadow:none">PASSWORD FRAGMENTS: ${t.length} / 6<br><span style="font-size:.7em">${t.join(" \xB7 ")} \xB7 ???</span></div>`,this.game.audio.play("error"),this.game.audio.play("glitch",{delay:.2})}};function ya(i,{title:t="GAME OVER",sub:e="",buttons:n=[]}){return new Promise(s=>{let r=Jt("div","",`<div class="go-title">${t}</div><div class="go-sub">${e}</div><div class="row" style="gap:14px;justify-content:center;display:flex;flex-wrap:wrap"></div>`);r.id="gameover-scr";let o=r.querySelector(".row");for(let a of n){let l=Jt("button","btn big "+(a.cls||""),a.label);l.onclick=()=>{i.audio.play("select"),r.remove(),s(a.value)},o.append(l)}document.body.append(r)})}var os=[{id:"intro",name:"Prologue \u2014 Session Expired",blurb:"The security office, 11:52 PM"},{id:"dino",name:"Chapter 1 \u2014 The King",blurb:"Dinosaur Hall"},{id:"roman",name:"Chapter 2 \u2014 All Roads",blurb:"The Roman Empire"},{id:"chase",name:"Chapter 3 \u2014 RUN",blurb:"It is right behind you"},{id:"maze",name:"Chapter 4 \u2014 Behind the Walls",blurb:"The Archives"},{id:"morning",name:"Chapter 5 \u2014 Morning Shift",blurb:"7 hours later\u2026"}],dh={intro:{meter:100,fragments:[]},dino:{meter:100,fragments:[]},roman:{meter:85,fragments:["REX"]},chase:{meter:80,fragments:["REX","1974"]},maze:{meter:75,fragments:["REX","1974"]},morning:{meter:0,fragments:["REX","1974","ZAP","NAP","DONUT"]}},Bx=i=>i.input.isTouch?["Left side: move","Right side: look","USE: interact","\u{1F526}: flashlight","RUN: sprint (eats donuts!)"]:["<kbd>W A S D</kbd> move","<kbd>Mouse</kbd> look","<kbd>E</kbd> use","<kbd>F</kbd> flashlight","<kbd>Shift</kbd> sprint (burns donuts!)"];function zu(i,t,e){let n={intro:zx,dino:Wu,roman:Xu,chase:Vx,maze:Gx,morning:Wx}[t];return n(i,null,e)}var Fu=new Ji,Hu=new le;function Vu(i,t,e=2){return i.camera.updateMatrixWorld(),Hu.multiplyMatrices(i.camera.projectionMatrix,i.camera.matrixWorldInverse),Fu.setFromProjectionMatrix(Hu),Fu.intersectsSphere(new li(t,e))}function xa(i,t,e=.9){return t.clone().sub(i.camera.position).normalize().dot(i.player.forward())>e}function Bu(i,t){return Math.hypot(i.player.pos.x-t.x,i.player.pos.z-t.z)}function uh(i,t,e){let n=t.refs.monitor,s=0,r=0;t.addUpdater(o=>{if(s+=o,r+=o,r<1/15)return;r=0;let a=n.ctx;e.mode==="metube"?Lu(a,s,e.countdown):e.mode==="expired"?fa(a,s):e.mode==="login"?Du(a,s,e.pw||"",e.msg||""):e.mode==="hint"?Uu(a,s):e.mode==="denied"?Nu(a,s):fa(a,s,"LOCKED","Solve the puzzles to log in."),n.texture.needsUpdate=!0})}function Gu(i,t){i.audio.setAmbient("night"),i.hud.show(!0),i.hud.showMeter(!0),i.hud.setFragments(i.save.fragments),i.meter.enabled=!0,i.meter.drain=.5,i.meter.onEmpty=()=>i.failed("YOU FELL ASLEEP","Your donut meter hit zero and you dozed off on the job.<br>Tip: hidden donuts glow pink \u2014 grab them! Sprinting burns donuts faster."),i.player.giveFlashlight(!0),i.camera.fov=i.save.settings.fov,i.camera.updateProjectionMatrix(),t.refs.guard.group.visible=!1;for(let e of t.refs.boxDonuts)e.visible=!1;t.refs.deskFlashlight.visible=!1,uh(i,t,{mode:"locked"})}async function zx(i){let t=new di(i,{time:"night"});await i.loadLevel(t),i.hud.setFade(1,0),i.audio.setAmbient("office"),i.audio.stopMusic(.5);let e={mode:"metube",countdown:45};uh(i,t,e);let n=t.refs.guard,s=Wn({frosting:0,scale:.6});s.position.set(0,-.06,.05),n.attachToHand(s,1),n.setMode("eat");let r=0;return t.addUpdater(o=>{n.anim.mode!=="eat"||!n.group.visible||(r+=o,r>2.86&&(r=0,i.audio.play("munch",{vol:.5})))}),i.player.enabled=!1,i.player.hasFlashlight=!1,i.player.setFlash(!1),i.player.flModel.visible=!1,i.camera.fov=55,i.camera.updateProjectionMatrix(),await i.cutscene(async()=>{i.camSet([-13.6,2.5,3.6],[-18.2,1,-.2]),i.hud.caption(`CITY MUSEUM OF NATURAL HISTORY
11:52 PM`),i.audio.play("tick"),await i.wait(2.8),i.hud.caption("Night shift #47."),await i.wait(2.2),i.hud.caption(""),i.fadeIn(2),i.audio.playMusic("menu"),i.camTo([-15.2,2,2.2],[-18.4,1.1,-.1],7,es.sine),await i.wait(1.5),await i.say("guard01"),i.audio.play("radio"),await i.wait(.4),await i.say("aaron01"),i.audio.play("radio"),await i.say("guard02"),i.audio.stopMusic(1.5),await i.camTo([-17.75,1.42,-.62],[-18.95,1.16,.02],1.6),e.countdown=10;for(let a=10;a>0;a--)e.countdown=a,i.audio.play(a<=5?"beep":"tick",{dur:.06}),await i.wait(.55);e.countdown=0,e.mode="expired",i.audio.play("error"),n.setMode("sit"),await i.say("museos01"),await i.camTo([-16.6,1.75,1.5],[-18.5,1.15,-.1],1.2),await i.say("guard03"),n.setMode("type"),e.mode="login",await i.wait(.5),i.computer.open(),await i.wait(.6),await i.computer.type("donut123"),await i.computer.press("login"),i.computer.setMsg("INCORRECT PASSWORD"),await i.say("guard04"),i.computer.clear(),i.computer.setMsg(""),await i.computer.type("donut123",{speed:.2}),await i.computer.press("login"),i.computer.setMsg("INCORRECT PASSWORD (attempt 2 of \u221E)"),i.shake(.08,.3),await i.say("guard05"),await i.wait(.4),await i.computer.press("hint"),i.computer.showHint(),i.audio.play("sting",{vol:.6}),await i.say("museos02"),await i.say("museos03"),i.computer.close(),e.mode="hint",n.setMode("idle"),n.group.position.set(-17.45,0,.1),n.group.rotation.y=Math.PI/2,i.camSet([-15.7,1.65,.6],[-17.45,1.5,.1]),await i.wait(.4),n.setMode("point"),await i.say("guard06"),n.setMode("idle"),t.refs.deskFlashlight.visible=!1;let o=Ui();o.rotation.x=Math.PI/2,n.attachToHand(o,1),s.visible=!1,i.audio.play("flashlight");for(let a of t.refs.boxDonuts)a.visible=!1;i.audio.play("pickup"),await i.say("guard07"),await i.camTo([-17.45,1.65,.1],[-12,1.55,.1],1.4),n.group.visible=!1}),i.player.setPose(-17.45,.1,-Math.PI/2,-.03),Wu(i,t,"fromIntro")}async function Wu(i,t,e){let n=e==="fromIntro";t||(t=new di(i,{time:"night"}),await i.loadLevel(t),i.player.setPose(Qt.officeStart.x,Qt.officeStart.z,-Math.PI/2)),i.checkpoint("dino"),Gu(i,t),i.setClock(0,!0),i.hud.setFade(0,.8),i.audio.playMusic("explore"),i.setMode("explore"),i.objective("Go to the Dinosaur Hall",Qt.dinoDoor),(n||e==="fresh")&&(i.hud.toast("\u{1F369} This is your <b>DONUT METER</b>. It drains over time. If it hits zero, you fall asleep!","gold"),i.hud.controlsHint(Bx(i)),i.wait(9).then(()=>i.hud.controlsHint(null)));let s=t.refs.trex,r=new P(Qt.trex.x+1.4,5.3,Qt.trex.z+4.8);t.addTrigger({minX:-15,maxX:15,minZ:-46,maxZ:-10.6,onEnter:()=>{i.hud.titleCard("CHAPTER 1","THE KING"),i.objective("Find the puzzle in the Dinosaur Hall",Qt.dinoPanel),t.refs.panel1It.enabled=!0}});let o=!1;t.addUpdater(()=>{!o&&i.mode==="explore"&&i.player.pos.z<-11&&xa(i,r,.93)&&Bu(i,Qt.trex)<24&&(o=!0,i.audio.play("sting",{vol:.5}),i.say("guard08"))});let a=await new Promise(c=>{t.refs.panel1It.onUse=async()=>{await i.openPuzzle("caesar","REX")&&(t.refs.panel1It.enabled=!1,c(!0))}});t.refs.console1.draw(["SOLVED","KEY: REX"],"#6dff9e","NEXT: ROMAN HALL"),await i.say("museos04"),i.say("guard09"),i.objective("Go to the Roman Empire hall",Qt.romanDoor),await i.until(()=>Bu(i,Qt.dinoPanel)>6||i.player.pos.z>-16),await i.until(()=>!Vu(i,new P(Qt.trex.x,3,Qt.trex.z),5.5)),s.group.visible=!1,t.refs.footprints.visible=!0,t.cctvState.trexGone=!0,i.audio.play("clatter"),i.audio.play("stomp",{delay:.6,vol:.6}),i.shake(.15,.6),i.player.flicker(1.2),i.audio.stopMusic(.3),await i.wait(.8),i.say("guard10"),i.objective("...Turn around.",Qt.trex);let l=i.sched.time;return await i.until(()=>xa(i,new P(Qt.trex.x,2.5,Qt.trex.z),.86)||i.sched.time-l>9),i.audio.play("sting"),i.audio.play("heartbeat",{delay:.4}),i.audio.playMusic("tension"),i.objective(""),await i.say("guard11"),await i.say("guard12"),i.checkpoint("roman"),i.say("guard13"),Xu(i,t,"carry")}async function Xu(i,t,e){t||(t=new di(i,{time:"night"}),await i.loadLevel(t),Gu(i,t),t.refs.trex.group.visible=!1,t.refs.footprints.visible=!0,t.cctvState.trexGone=!0,t.refs.console1.draw(["SOLVED","KEY: REX"],"#6dff9e","NEXT: ROMAN HALL"),i.player.setPose(0,-12,Math.PI),i.setClock(62,!0),i.hud.setFade(0,.8),i.audio.playMusic("tension"),i.setMode("explore")),i.checkpoint("roman"),i.objective("Get to the Roman Hall. Quickly.",Qt.romanDoor);let n=t.refs.trex;t.addTrigger({minX:-11,maxX:11.5,minZ:-9,maxZ:9,onEnter:()=>{i.audio.play("stomp",{vol:.8}),i.audio.play("stomp",{vol:.6,delay:.7}),i.audio.play("growl",{delay:1.1}),i.shake(.2,1.2),i.player.flicker(.8),i.wait(1.4).then(()=>i.say("guard14"))}}),await new Promise(l=>t.addTrigger({minX:12.6,maxX:40,minZ:-9,maxZ:9,onEnter:()=>{i.hud.titleCard("CHAPTER 2","ALL ROADS"),i.audio.playMusic("explore"),i.objective("Crack the Roman lock (it's at the far end)",Qt.romanPanel),t.refs.panel2It.enabled=!0,i.wait(2).then(()=>i.say("guard15")),l()}})),await new Promise(l=>{t.refs.panel2It.onUse=async()=>{await i.openPuzzle("roman","1974")&&(t.refs.panel2It.enabled=!1,l())}}),t.refs.console2.draw(["SOLVED","KEY: 1974"],"#ffcc4d","BEYOND THE WALLS..."),i.audio.stopMusic(2),await i.say("museos05"),i.say("guard16"),await i.wait(1.6),i.dialogue.stop(),i.audio.play("growl",{vol:.8}),i.objective("...Something is breathing behind you. Turn around.",Qt.romanDoor);let s=new P(16,4,0);await i.until(()=>!Vu(i,s,3.5)),n.group.position.set(16.8,0,.3),n.group.rotation.y=Math.PI/2-.12,n.group.visible=!0,n.setAlive(!0),n.setMode("idle"),n.anim.jaw=.2;let r=new De(16723992,0,16,1.6);r.position.set(21,3.5,2.5),t.scene.add(r);let o=new P(21.5,5,.2);t.addUpdater(()=>n.lookAt(i.camera.position));let a=i.sched.time;if(await i.until(()=>xa(i,o,.8)||i.sched.time-a>10),!xa(i,o,.8)){let l=i.player.yaw,h=Math.atan2(-(o.x-i.player.pos.x),-(o.z-i.player.pos.z))-l;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;i.player.enabled=!1,await i.tween(.6,d=>{i.player.yaw=l+h*d,i.player.applyCamera(0)})}i.setMode("cutscene"),i.hud.setLetterbox(!0),i.player.flicker(1.5),i.tween(.8,l=>{r.intensity=40*l}),i.audio.play("sting"),await i.wait(.6),n.roar(2.4),i.audio.play("roar"),i.shake(.5,2.2),i.hud.objective(null),await i.wait(.9),i.say("guard17"),await i.wait(1.4),i.hud.bigText("RUN!"),n.setMode("walk",3),t.addUpdater(l=>{n.anim.mode==="walk"&&(n.group.position.x+=3*l)}),i.audio.play("stomp"),await i.wait(1.1),i.hud.setLetterbox(!1),i.startChapter("chase",{mode:"carry"})}async function Vx(i,t,e){let n=new pa(i);await i.loadLevel(n),i.checkpoint("chase"),i.setClock(122,!0),i.hud.show(!0),i.hud.showMeter(!0),i.hud.setFragments(i.save.fragments),i.meter.enabled=!0,i.meter.drain=.25,i.meter.onEmpty=null,i.player.flModel.visible=!1,i.player.setFlash(!1),i.camera.fov=70,i.camera.updateProjectionMatrix(),i.audio.setAmbient("runner"),i.audio.setReverb(.35),i.audio.playMusic("chase",.2),i.setMode("runner");let s=n.start();n.setCam("front"),n.trexBehind=6,i.hud.setFade(0,.25),n.trex.roar(1.6),i.audio.play("roar"),i.audio.play("alarm",{n:3}),i.shake(.3,1.5),i.hud.titleCard("CHAPTER 3","RUN"),i.say("guard18"),await i.wait(2.8),n.blendCam("chase"),await i.tween(1.1,d=>{n.camBlend=d,n.trexBehind=Be(6,26,Math.min(1,d*2))}),n.camBlend=null,n.hideTrex=!0,n.beginRun(),i.hud.showChase(!0),i.hud.controlsHint(i.input.isTouch?["Swipe \u2190 \u2192 change lanes","Swipe \u2191 jump","Swipe \u2193 slide"]:["<kbd>A</kbd><kbd>D</kbd> / <kbd>\u2190</kbd><kbd>\u2192</kbd> change lanes","<kbd>W</kbd> / <kbd>Space</kbd> jump","<kbd>S</kbd> / <kbd>\u2193</kbd> slide"]),i.wait(6).then(()=>i.hud.controlsHint(null)),i.until(()=>n.st.z<-sn*.45).then(()=>n.st.phase==="run"&&i.say("guard19")),i.until(()=>n.st.arrowShown).then(()=>n.st.phase==="run"&&i.say("guard20"));let r=await i._guard(s);if(i.hud.showChase(!1),i.hud.controlsHint(null),r==="caught")return i.audio.stopMusic(.2),i.hud.flash("rgba(120,0,0,0.9)",1.5),i.hud.setFade(1,.6),await i.wait(.7),i.failed("CHOMP.","The T-Rex got you. (Hit stuff and it catches up. Collect donuts, dodge, and at the end \u2014 GO RIGHT.)");i.setMode("cutscene"),i.hud.setLetterbox(!0),i.meter.enabled=!1,i.audio.stopMusic(.6),n.camMode="free";let o=-sn;i.camSet([-3.4,2.6,o+13],[1.2,2.4,o]);let a=n.trex;a.group.visible=!0,a.group.position.set(.8,0,o+24),a.group.rotation.y=Math.PI,a.setMode("run",14),await i.tween(1.15,d=>{a.group.position.z=Be(o+24,o+5.4,d)},es.linear),a.setMode("idle"),i.audio.play("crash"),i.audio.play("clatter"),i.shake(.9,1.4),i.hud.flash("rgba(255,255,255,0.7)",.4);let l=a.body.rotation.x;await i.tween(.35,d=>{a.body.rotation.x=l-.35*Math.sin(d*Math.PI),a.group.position.z=o+5.4+Math.sin(d*Math.PI)*1.2}),a.group.position.z=o+6.5,await i.wait(.5),n.guard.group.rotation.y=0,n.guard.setMode("idle"),i.camSet([xn[2]-1.6,1.7,o-7.2],[xn[2],1.5,o-1]);let c=new V(new ee(.13,12,8),new ct({color:16723984,emissive:16722432,emissiveIntensity:7}));c.position.set(xn[2]+.05,1.95,o+1.4),n.scene.add(c);let h=new De(16719872,6,5,2);h.position.set(xn[2],1.8,o+1),n.scene.add(h),i.audio.play("growl"),await i.wait(.6),n.guard.setMode("point"),await i.say("guard21"),i.audio.play("roar",{short:!0}),i.shake(.3,.8),n.guard.setMode("shock"),await i.wait(.8),c.visible=!1,h.intensity=0,i.audio.play("stomp",{vol:.6}),i.audio.play("stomp",{vol:.4,delay:.6}),await i.wait(1.2),i.hud.setLetterbox(!1),i.startChapter("maze",{mode:"carry"})}async function Gx(i,t,e){let n=new ma(i);await i.loadLevel(n),i.checkpoint("maze");let s=i.save.solved||(i.save.solved={}),r=[0,1,2].filter(f=>s["maze"+f]).length;for(let f=0;f<r;f++)n.openGate(f,!0);let o=n.spawnFor(r);i.player.setPose(o.x,o.z,o.yaw),i.setClock(135+r*15,!0),i.hud.show(!0),i.hud.showMeter(!0),i.hud.setFragments(i.save.fragments),i.meter.enabled=!0,i.meter.drain=.62,i.meter.onEmpty=()=>i.failed("YOU FELL ASLEEP","Right there in the archives. The T-Rex is very disappointed in you.<br>Tip: dead ends often hide donuts."),i.player.giveFlashlight(!0),i.camera.fov=i.save.settings.fov,i.camera.updateProjectionMatrix(),i.audio.setAmbient("maze"),i.audio.setReverb(.25),i.audio.playMusic("maze"),i.hud.setFade(0,.8),i.setMode("explore");let a=["Find the fuse box to open the first gate","Find the old telegraph to open the next gate","Find the torn poster to open the last gate","Get to the break room"];i.objective(a[r]),r===0&&(i.hud.titleCard("CHAPTER 4","BEHIND THE WALLS"),n.holeEye.visible=!0,i.audio.play("growl",{vol:.8}),i.wait(2.5).then(()=>{n.holeEye.visible=!1}),i.wait(1.2).then(async()=>{i.audio.play("radio"),await i.say("museos06"),await i.say("guard22")}));let l=!1,c=18;n.addUpdater(f=>{if(i.mode==="explore"){for(let p of n.peeks)p.done||Math.hypot(i.player.pos.x-p.x,i.player.pos.z-p.z)<3.2&&(p.done=!0,p.eye.visible=!0,i.audio.play("growl",{vol:.9}),i.shake(.15,.6),l||(l=!0,i.say("guard23")),setTimeout(()=>p.eye.visible=!1,2200));c-=f,c<0&&(c=22+Math.random()*20,i.audio.play("stomp",{vol:.5}),i.audio.play("stomp",{vol:.35,delay:.7}),i.shake(.12,1)),Math.random()<f*.15&&i.audio.play("drip")}});let h=["ZAP","NAP","DONUT"],d=["museos07","museos08","museos09"];n.stations.forEach((f,p)=>{f.it.onUse=async()=>{if(s["maze"+p]){i.hud.toast("Already fixed! \u2714","mint");return}await i.openPuzzle(f.kind,h[p])&&(s["maze"+p]=!0,i.persist(),f.light.color.set(6750105),r=Math.max(r,p+1),await n.openGate(p),i.objective(a[Math.min(3,p+1)]),i.audio.play("radio"),await i.say(d[p]),p===1&&await i.say("guard24"))}});let u=n.finalRoom;n.addTrigger({minX:u.x0,maxX:u.x1,minZ:u.z1,maxZ:u.z0-.3,onEnter:()=>{i.objective("Take THE LAST DONUT"),i.audio.playMusic("menu"),i.say("guard25")}}),await new Promise(f=>{n.lastDonutIt.onUse=f}),n.lastDonutIt.enabled=!1,i.meter.onEmpty=null,await i.cutscene(async()=>{i.player.enabled=!1;let f=n.lastDonut,p=f.position.clone();i.audio.play("pickup"),await i.tween(.8,_=>{f.position.lerpVectors(p,new P(i.camera.position.x,i.camera.position.y-.25,i.camera.position.z).lerp(p,.55),_)}),i.audio.play("bonk"),i.audio.play("thud",{delay:.15}),await i.say("guard26"),i.audio.play("radio"),await i.say("museos10"),i.audio.stopMusic(3);let y=i.meter.value;i.audio.play("yawn"),await i.tween(2.6,_=>{i.meter.set(Be(y,0,_)),i.hud.setDrowsy(_*.9)});let m=n.beanbag.position,g=i.player.pos.clone();i.say("guard27"),await i.tween(2.4,_=>{i.player.pos.lerpVectors(g,new P(m.x+.3,0,m.z+.4),_),i.player.eyeOffset=-.95*_,i.player.pitch=Be(0,.35,_),i.player.applyCamera(0)});for(let _ of[.7,.2,.85,.4,1])i.hud.setLids(_,.5),await i.wait(.6);i.audio.play("yawn"),i.hud.setFade(1,1.5),await i.wait(1.6)}),i.hud.setDrowsy(0),i.startChapter("morning",{mode:"carry"})}async function Wx(i){let t=new di(i,{time:"day"});await i.loadLevel(t),i.checkpoint("morning"),i.save.fragments=dh.morning.fragments.slice(),i.hud.setFade(1,0),i.hud.show(!0),i.hud.setLids(1,0),i.hud.setFragments(i.save.fragments),i.meter.enabled=!1,i.audio.setAmbient("day"),i.audio.setReverb(.45),i.player.giveFlashlight(!1),i.player.flModel.visible=!1,i.camera.fov=i.save.settings.fov,i.camera.updateProjectionMatrix(),t.refs.guard.group.visible=!1;for(let d of t.refs.boxDonuts)d.visible=!1;t.refs.deskFlashlight.visible=!1;let e={mode:"locked"};uh(i,t,e);let n=t.refs.trex,s=new ut,r=new ct({color:1778752,roughness:.7}),o=new V(new oe(.2,.23,.15,16),r);s.add(o);let a=xt(.3,.02,.2,r,0,-.07,.2);s.add(a);let l=xt(.07,.06,.01,ft.brass(),0,0,.21);s.add(l),s.position.set(0,.5,.35),s.rotation.z=.2,n.headPivot.children[0].add(s);let c=Wn({frosting:0,scale:.6});c.position.set(.25,-.35,1.2),c.rotation.z=Math.PI/2,n.headPivot.children[0].add(c);let h=t.makeAaron();h.group.position.set(5.5,0,-14),h.group.rotation.y=Math.PI*.8,t.scene.add(h.group),t.addUpdater(d=>h.update(d)),i.player.setPose(.6,-19.6,.05,.55),i.player.eyeOffset=-1.3,i.player.applyCamera(0),i.setClock(0,!1),i.audio.playMusic("morning"),await i.cutscene(async()=>{i.hud.caption("7 HOURS LATER"),i.hud.setFade(.6,0),await i.wait(2.2),i.hud.caption(""),i.hud.setFade(0,1.5);for(let _ of[.6,1,.3,.8,0])i.hud.setLids(_,.45),await i.wait(.55);await i.say("guard28");let d=i.player.pitch;await i.tween(1.4,_=>{i.player.eyeOffset=Be(-1.3,0,_),i.player.pitch=Be(d,.25,_),i.player.applyCamera(0)});let u=i.player.yaw,f=Math.atan2(-(Qt.trex.x+1.5-i.player.pos.x),-(Qt.trex.z+4-i.player.pos.z));await i.tween(1.2,_=>{i.player.yaw=Be(u,f,_),i.player.pitch=Be(.25,.32,_),i.player.applyCamera(0)}),await i.say("guard29");let p=h.group.position.clone(),y=new P(3.4,0,-18.7);h.setMode("walk",1.3),h.group.rotation.y=Math.atan2(y.x-p.x,y.z-p.z);let m=i.player.yaw,g=Math.atan2(-(y.x-i.player.pos.x),-(y.z-i.player.pos.z));await i.tween(2.4,_=>{h.group.position.lerpVectors(p,y,_),i.player.yaw=Be(m,g,_),i.player.pitch=Be(.32,.05,_),i.player.applyCamera(0)},es.linear),h.setMode("idle"),h.group.rotation.y=Math.atan2(i.player.pos.x-y.x,i.player.pos.z-y.z),h.anim.talk=3,await i.say("aaron02"),await i.say("guard30"),h.anim.talk=3,h.setMode("shrug"),await i.say("aaron03"),h.setMode("idle")}),i.setMode("explore"),i.objective("Log in to your computer (Security Office)",Qt.computer),t.refs.computerIt.enabled=!0,await new Promise(d=>{t.refs.computerIt.onUse=d}),t.refs.computerIt.enabled=!1,await i.cutscene(async()=>{i.computer.open(),await i.wait(.5),await i.computer.type("REX1974ZAPNAPDONUT",{visible:!0,speed:.08}),await i.wait(.4),await i.computer.press("login"),i.computer.showDenied(i.save.fragments),e.mode="denied",i.hud.setFragments(i.save.fragments,{missing:!0}),i.audio.stopMusic(.2),await i.say("museos11"),await i.say("guard31"),await i.say("museos12"),i.computer.close()}),i.setMode("cutscene"),i.audio.play("wahwah"),i.save.flags.ending="pending",i.persist(),await i._guard(ya(i,{title:"GAME OVER",sub:'You did not solve the puzzles.<br><span style="color:var(--dim)">(5 of 6 password fragments. So close. So, so close.)</span>',buttons:[{label:"BACK TO MENU",value:"menu",cls:"pink"}]})),i.toMenu()}var Xx=[["guard","THE SECURITY GUARD (you)"],["dev","THE DEV in the menu TV (also you)"],["aaron","AARON (get a friend!)"],["museos","MUSE-OS, the museum computer"]];function qx(i){return/webm/.test(i)?"webm":/mp4/.test(i)?"mp4":/quicktime/.test(i)?"mov":/png/.test(i)?"png":/jpe?g/.test(i)?"jpg":/webp/.test(i)?"webp":"bin"}function Zu(i){let t=i.clips,e=Un(`
    <h2>\u{1F3AC} CLIP STUDIO</h2>
    <div class="sub">Put yourself in the game! Record (or upload) a clip for any line \u2014 it replaces the cartoon actor in cutscenes and in the menu TV.</div>
    <div class="help">${t.canStore?"":`<b style="color:var(--red)">This browser blocked storage, so recordings can't be saved here \u2014 use the file method below.</b><br>`}
      <b>Two ways to add clips:</b><br>
      1. Press <b>\u25CF REC</b> to film with your webcam, or <b>\u2B06</b> to upload a video. Saved in this browser.<br>
      2. For everyone who plays your game: put files in <code>${Zs}</code> named after the line id, e.g. <code>${Zs}guard05.mp4</code>. Press <b>\u2B07</b> to download a recording with the right name.<br>
      Photos work too: <code>${Zs}guard.png</code> / <code>dev.png</code> become your face when there's no video.</div>
    <div class="clip-group">YOUR FACE (photos)</div>
    <div class="clip-list portraits"></div>
    <div class="lines"></div>`,()=>o()),n=q(".portraits",e.panel),s=q(".lines",e.panel),r=()=>{n.innerHTML="";for(let a of["guard","dev","aaron"]){let l="portrait_"+a,c=t.portrait(a),h=Jt("div","clip-row",`
        <div><div class="line">${Rr[a].name()} \u2014 photo</div>
        <div class="meta">${c?`<span class="ok">\u2713 ${c.source==="file"?"from file":"saved in browser"}</span>`:"using the cartoon face"} \xB7 file name: <code>${a}.png</code></div></div>
        <div class="acts"></div>`),d=q(".acts",h);d.append(fi("\u{1F4F7} Snap",()=>$u(i,l,`Smile! This photo becomes ${Rr[a].name()}'s face.`,!0).then(r),!t.canStore)),d.append(fi("\u2B06",()=>Yu(i,l,"image/*").then(r),!t.canStore,"Upload a photo")),t.recorded[l]&&(d.append(fi("\u2B07",()=>qu(l,t.recorded[l]),!1,"Download")),d.append(fi("\u{1F5D1}",()=>t.remove(l).then(r),!1,"Delete"))),n.append(h)}s.innerHTML="";for(let[a,l]of Xx){s.append(Jt("div","clip-group",l));let c=Jt("div","clip-list");for(let[h,d]of Object.entries(ns)){if(d.who!==a)continue;let u=t.get(h),f=Jt("div","clip-row",`
          <div><div class="line">\u201C${Li(d.text)}\u201D</div>
          <div class="meta">id <code>${h}</code> \xB7 ${u?`<span class="ok">\u2713 ${u.source==="file"?"video file found":"recorded"}</span>`:"cartoon + voice"}</div></div>
          <div class="acts"></div>`),p=q(".acts",f);p.append(fi("\u25CF REC",()=>$u(i,h,d.text).then(r),!t.canStore)),p.append(fi("\u2B06",()=>Yu(i,h,"video/*").then(r),!t.canStore,"Upload a video")),u&&p.append(fi("\u25B6",()=>Yx(u.url),!1,"Play")),t.recorded[h]&&(p.append(fi("\u2B07",()=>qu(h,t.recorded[h]),!1,"Download with the right file name")),p.append(fi("\u{1F5D1}",()=>t.remove(h).then(r),!1,"Delete"))),c.append(f)}s.append(c)}},o=t.onChange(r);r()}function fi(i,t,e=!1,n=""){let s=Jt("button","btn small",i);return s.disabled=e,n&&(s.title=n),s.onclick=t,s}function qu(i,t){let e=document.createElement("a");e.href=t.url,e.download=`${i.replace(/^portrait_/,"")}.${qx(t.type)}`,document.body.append(e),e.click(),e.remove()}function Yx(i){let t=Un(`<h2>\u25B6 PREVIEW</h2><div class="rec-stage"><video class="playback" controls autoplay playsinline src="${i}"></video></div>`);q("video",t.panel).play().catch(()=>{})}function Yu(i,t,e){return new Promise(n=>{let s=document.createElement("input");s.type="file",s.accept=e,s.onchange=async()=>{let r=s.files?.[0];r&&(await i.clips.save(t,r),i.audio.play("chime")),n()},s.click()})}async function $u(i,t,e,n=!1){let s;try{s=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!n})}catch(r){Un(`<h2>NO CAMERA \u{1F622}</h2><div class="sub">The browser didn't let the game use your camera${n?"":"/microphone"}.</div>
      <div class="help">Check the camera permission next to the address bar and try again \u2014 or use the \u2B06 button to upload a ${n?"photo":"video"} instead.<br><br>(${Li(r?.message||r)})</div>`);return}return i.audio.stopMusic(.3),new Promise(r=>{let o=null,a=[],l=null,c=null,h=Un(`<h2>${n?"\u{1F4F7} SNAP A PHOTO":"\u25CF RECORD A LINE"}</h2>
      <div class="rec-stage" style="position:relative">
        <div class="rec-line">${n?Li(e):`Say: \u201C${Li(e)}\u201D`}</div>
        <video autoplay muted playsinline></video>
        <div class="rec-count"></div>
        <div class="row rec-btns" style="justify-content:center"></div>
        <div class="help rec-status">${n?"Center your face, then press SNAP.":"Press RECORD, wait for 3-2-1, say the line, then press STOP. Act it out! \u{1F3AD}"}</div>
      </div>`,()=>{s.getTracks().forEach(x=>x.stop()),clearInterval(c),i.audio.playMusic("menu"),r()}),d=q("video",h.panel),u=q(".rec-btns",h.panel),f=q(".rec-count",h.panel),p=q(".rec-status",h.panel);d.srcObject=s;let y=x=>{u.innerHTML="",x.forEach(C=>u.append(C))},m=async()=>{await i.clips.save(t,l),i.audio.play("chime"),h.close()},g=()=>{d.classList.remove("playback"),d.removeAttribute("src"),d.srcObject=s,d.muted=!0,d.controls=!1,d.play().catch(()=>{}),y([v]),p.textContent="Ready when you are!"},_=async()=>{for(let x of["3","2","1"])f.textContent=x,i.audio.play("beep",{dur:.08}),await dn(700);f.textContent=""},v=Jt("button","btn pink",n?"\u{1F4F7} SNAP":"\u25CF RECORD");v.onclick=async()=>{if(y([]),await _(),n){let w=document.createElement("canvas"),A=Math.min(d.videoWidth,d.videoHeight)||480;w.width=w.height=512;let E=w.getContext("2d");E.translate(512,0),E.scale(-1,1),E.drawImage(d,(d.videoWidth-A)/2,(d.videoHeight-A)/2,A,A,0,0,512,512),i.audio.play("flashlight"),i.hud.flash("rgba(255,255,255,0.9)",.3),l=await new Promise(I=>w.toBlob(I,"image/png")),d.srcObject=null,d.src=URL.createObjectURL(l),d.poster=d.src,p.textContent="Looking good!";let M=Jt("img");M.src=URL.createObjectURL(l),M.style.cssText="width:240px;border-radius:16px;border:3px solid var(--gold)",d.replaceWith(M),y([Jt("button","btn mint","\u2713 USE THIS"),Jt("button","btn ghost","\u21BA RETAKE")]),u.children[0].onclick=m,u.children[1].onclick=()=>{M.replaceWith(d),g()};return}let x=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm","video/mp4"].find(w=>window.MediaRecorder?.isTypeSupported?.(w))||"";try{o=new MediaRecorder(s,x?{mimeType:x}:void 0)}catch{p.textContent="Recording is not supported in this browser. Try uploading a video instead.";return}a=[],o.ondataavailable=w=>w.data.size&&a.push(w.data),o.onstop=()=>{clearInterval(c),l=new Blob(a,{type:o.mimeType||"video/webm"}),d.srcObject=null,d.src=URL.createObjectURL(l),d.muted=!1,d.controls=!0,d.classList.add("playback"),d.play().catch(()=>{}),p.textContent="How was that? Save it or try again.";let w=Jt("button","btn mint","\u2713 USE THIS"),A=Jt("button","btn ghost","\u21BA RETAKE");w.onclick=m,A.onclick=g,y([w,A])},o.start(200);let C=0;p.innerHTML='<span class="rec-dot">\u25CF REC</span> 0s',c=setInterval(()=>{C++,p.innerHTML=`<span class="rec-dot">\u25CF REC</span> ${C}s`,C>=20&&o.state==="recording"&&o.stop()},1e3);let T=Jt("button","btn pink","\u25A0 STOP");T.onclick=()=>o.state==="recording"&&o.stop(),y([T])},y([v])})}var va=class{constructor(t){this.game=t,this.root=q("#menu"),this.speaker=null,this.open=!1}_buildSpeaker(){if(this.speaker)return;let t=this.speaker=Jt("div","",`
      <div class="tv">
        <div class="tv-screen"><canvas width="256" height="256"></canvas><img alt=""><video playsinline></video></div>
        <div class="tv-label">${Di.devName} \xB7 LIVE</div>
        <div class="tv-knobs"><i></i><i></i></div>
      </div>`);t.id="speaker",document.body.append(t);let e=q(".tv-screen",t),n=new Cr(e,{canvas:q("canvas",e),img:q("img",e),video:q("video",e),root:t});n.who="dev",n.mood="happy",this.game.dialogue.tv=n;let s=this.game.clips.portrait("dev");n.setMode(s?"img":"canvas"),s&&(n.img.src=s.url);let r=0;t.addEventListener("click",()=>{this.busy||this.game.dialogue.current||(this.game.audio.play("static",{dur:.15}),this.game.say(r++%2?"dev07":"dev06"))})}_removeSpeaker(){this.speaker?.remove(),this.speaker=null,this.game.dialogue.tv=null}show(){let t=this.game,e=t.save;this.open=!0,this._buildSpeaker();let n=e.reached||[],s=e.chapter&&e.chapter!=="intro"?os.find(a=>a.id===e.chapter):null,[r,o]=Di.title;this.root.innerHTML=`
      <div class="menu-left">
        <div class="logo">${r.replace(/O/,'<span class="donut-o"></span>')}<span class="l2">${o.replace(/^O/,'<span class="donut-o"></span>')}</span></div>
        <div class="tagline">One night. One password. Way too many donuts.</div>
        ${e.flags.kicked?'<div><span class="menu-badge">YOU BEAT THE GAME (KIND OF)</span></div>':""}
        ${s?`<button class="btn menu-btn pink" data-act="continue">\u25B6 CONTINUE <small>${s.name}</small></button>`:""}
        <button class="btn menu-btn ${s?"":"pink"}" data-act="new">${s?"NEW GAME":"\u25B6 PLAY"} <small>Prologue</small></button>
        <button class="btn menu-btn" data-act="chapters">CHAPTERS <small>${n.length}/${os.length}</small></button>
        <button class="btn menu-btn mint" data-act="clips">\u{1F3AC} CLIP STUDIO <small>put yourself in the game</small></button>
        <button class="btn menu-btn" data-act="settings">SETTINGS</button>
        <button class="btn menu-btn ghost" data-act="credits">CREDITS</button>
        <div class="menu-foot">${t.input.isTouch?"Touch controls on \xB7 landscape recommended":"WASD move \xB7 Mouse look \xB7 E use \xB7 F flashlight \xB7 Shift sprint"}</div>
      </div>`,this.root.classList.remove("off");for(let a of Jo("[data-act]",this.root))a.addEventListener("mouseenter",()=>t.audio.play("hover")),a.addEventListener("click",()=>this._act(a.dataset.act));t.audio.playMusic(e.flags.ending==="pending"?"meta":"menu"),e.flags.ending==="pending"?this._metaEnding():e.flags.welcomed?e.flags.kicked&&!e.flags.backAgain&&(e.flags.backAgain=!0,t.persist(),setTimeout(()=>this.open&&t.say("dev05"),1200)):(e.flags.welcomed=!0,t.persist(),setTimeout(()=>this.open&&!this.busy&&t.say("dev01"),1200))}hide(){this.open=!1,this.root.classList.add("off"),this._removeSpeaker(),this.game.dialogue.stop()}_act(t){let e=this.game;this.busy||(e.audio.play("select"),t==="new"?e.startChapter("intro"):t==="continue"?e.startChapter(e.save.chapter):t==="chapters"?this.chapters():t==="settings"?this.settings():t==="clips"?Zu(e):t==="credits"&&this.credits())}chapters(){let t=this.game,e=Un(`<h2>CHAPTERS</h2><div class="sub">Replay any part of the night you've reached.</div><div class="chapters"></div>`),n=q(".chapters",e.panel);os.forEach((s,r)=>{let o=t.save.reached.includes(s.id)||r===0,a=Jt("button",`btn chapter-btn ${o?"":"locked"}`,`<span>${s.name}</span><small>${o?s.blurb:"\u{1F512} locked"}</small>`);a.onclick=()=>{e.close(),t.audio.play("select"),t.startChapter(s.id)},n.append(a)})}settings(t){let e=this.game,n=e.save.settings,s=Un('<h2>SETTINGS</h2><div class="sub">Saved automatically.</div><div class="settings"></div>',t),r=q(".settings",s.panel),o=(c,h,d,u,f,p=y=>Math.round(y*100)+"%")=>{let y=Jt("div","setting",`<span>${h}</span><input type="range" min="${d}" max="${u}" step="${f}" value="${n[c]}"><span class="val">${p(n[c])}</span>`),m=q("input",y);m.oninput=()=>{n[c]=Number(m.value),q(".val",y).textContent=p(n[c]),e.applySettings()},r.append(y)},a=(c,h,d)=>{let u=Jt("div","setting",`<span>${h}</span><select>${d.map(([p,y])=>`<option value="${p}" ${String(n[c])===String(p)?"selected":""}>${y}</option>`).join("")}</select><span></span>`),f=q("select",u);f.onchange=()=>{let p=f.value;n[c]=p==="true"?!0:p==="false"?!1:p,e.applySettings(),e.audio.play("click")},r.append(u)};o("master","Master volume",0,1,.05),o("music","Music",0,1,.05),o("sfx","Sound effects",0,1,.05),a("voice","Character voices",[["tts","Robot voices (text-to-speech)"],["babble","Cute beeps"],["off","Off (subtitles only)"]]),a("subtitles","Subtitles",[["medium","On"],["large","Large"],["off","Off"]]),o("sensitivity","Mouse sensitivity",.2,3,.1,c=>c.toFixed(1)+"\xD7"),a("invertY","Invert mouse Y",[[!1,"No"],[!0,"Yes"]]),o("fov","Field of view",60,100,1,c=>c+"\xB0"),a("quality","Graphics",[["high","High (shadows)"],["low","Fast (no shadows)"]]),a("marker","Objective compass",[[!0,"On"],[!1,"Off"]]);let l=Jt("button","btn small ghost","Reset save data");l.style.marginTop="18px",l.onclick=()=>{confirm("Erase your progress, collected donuts and the ending? (Clips you recorded are kept.)")&&(e.resetSave(),s.close(),this.show())},r.append(l)}credits(){Un(`<h2>CREDITS</h2>
      <div class="sub">LOCKED OUT \u2014 a night guard story</div>
      <p style="font-weight:800;line-height:1.7">
        Story, ideas, starring, directing & yelling: <b style="color:var(--pink)">${Di.devName}</b> (who was up all night)<br>
        The Security Guard: <b style="color:var(--gold)">you</b><br>
        The T-Rex: <b>a bunch of cylinders</b><br>
        Aaron: <b>Aaron</b><br>
        Donuts eaten during development: <b>too many</b><br><br>
        Built with three.js. Every sound and song is synthesized in your browser.<br>
        Record yourself in the \u{1F3AC} CLIP STUDIO to replace the cartoon actors!
      </p>`)}async _metaEnding(){let t=this.game;this.busy=!0,Jo("[data-act]",this.root).forEach(c=>c.disabled=!0);let e=q("#facecam");e.classList.add("menu-pos"),await dn(1500),await t.say("guard32");let n=Jt("button","btn pink","\u{1F9E9} +1 BONUS PUZZLE?");n.id="bonus-btn",document.body.append(n);let s=Jt("div","psst","\u2191 psst\u2026 there's more!");document.body.append(s),t.audio.play("sparkle"),await new Promise(c=>n.onclick=c),n.remove(),s.remove(),t.audio.play("select");let r=Un(`<h2>BONUS PUZZLE #6</h2><div class="sub">Loading the final puzzle\u2026</div>
      <div style="height:22px;border-radius:12px;background:#111;border:2px solid var(--gold);overflow:hidden"><div class="ld" style="height:100%;width:0;background:linear-gradient(90deg,var(--pink),var(--gold));transition:width .3s"></div></div>
      <div class="ldtxt help" style="margin-top:10px">0%</div><div class="res"></div>`,null,{noClose:!0}),o=q(".ld",r.panel),a=q(".ldtxt",r.panel);for(let c=0;c<=99;c+=3+Math.floor(Math.random()*9))o.style.width=c+"%",a.textContent=c+"% \u2014 "+["loading puzzle\u2026","generating fun\u2026","adding donuts\u2026","almost there\u2026","reticulating splines\u2026"][Math.floor(c/22)],t.audio.play("tick"),await dn(180);o.style.width="99%",a.textContent="99% \u2014 ...",await dn(1600),t.audio.play("error"),q(".res",r.panel).innerHTML=`<div class="hintbox" style="border-color:var(--red);color:#ffb0b0;font-size:18px;text-align:center">
      <div style="font:30px var(--title);color:var(--red)">ERROR 404: PUZZLE NOT FOUND</div><br>
      There is no puzzle #6.<br>That's it. That was the whole game.<br>Thanks for playing! \u{1F369}</div>
      <div style="text-align:center;margin-top:16px"><button class="btn ok">\u2026what?</button></div>`,await new Promise(c=>q(".ok",r.panel).onclick=c),r.close(),await t.say("guard33"),await dn(300),await t.say("dev02"),await dn(200),await t.say("guard34"),t.audio.stopMusic(.05),t.audio.play("scratch"),await dn(700),this.speaker.classList.add("angry"),t.dialogue.tv.mood="angry",await t.say("dev03"),t.audio.playMusic("angry",.1),t.shake(.2,2),Jo(".menu-left > *",this.root).forEach((c,h)=>{c.style.setProperty("--rot",Math.random()*80-40+"deg"),setTimeout(()=>{c.classList.add("fall"),t.audio.play("thud",{vol:.4})},h*120)}),this.speaker.classList.add("huge"),await t.say("dev04");let l=Jt("div","boot-kick","\u{1F97E}");document.body.append(l),l.offsetWidth,l.classList.add("go"),await dn(380),t.audio.play("kick"),t.hud.flash("rgba(255,255,255,0.9)",.4);for(let c of[this.root,this.speaker,q("#game"),e,q("#dialogue")])c?.classList.add("kicked-away");await dn(900),l.remove(),t.audio.stopMusic(.05),t.audio.play("crt"),document.body.classList.add("crt-off"),await dn(800),t.save.flags.ending="done",t.save.flags.kicked=!0,t.persist(),this.kickedScreen()}kickedScreen(){let t=q("#kicked");document.body.classList.remove("crt-off");let e=[["C:\\MUSEUM\\LOCKED_OUT.EXE",""],["> Process terminated by: "+Di.devName+" (angry)",""],['> Reason: player said "i could do better"',""],["> Exit code: HELL_NAW","err"],["",""],["The developer has kicked you out of the game.","err"]];t.innerHTML=e.map(([n,s],r)=>`<div class="line ${s}" style="animation-delay:${.6+r*.7}s">${n||"&nbsp;"}</div>`).join("")+'<button class="btn ghost">[ reopen game ]</button>',t.classList.remove("off"),q("button",t).onclick=()=>location.reload()}};function Un(i,t,{noClose:e=!1}={}){let n=Jt("div","modal"),s=Jt("div","panel",(e?"":'<button class="close">\u2715</button>')+i);n.append(s),q("#modal-root").append(n);let r=()=>{n.remove(),removeEventListener("keydown",o,!0),t?.()},o=a=>{a.code!=="Escape"||e||q("#modal-root").lastElementChild!==n||(a.stopImmediatePropagation(),r())};return addEventListener("keydown",o,!0),e||(q(".close",s).onclick=r,n.addEventListener("mousedown",a=>{a.target===n&&r()})),{el:n,panel:s,close:r}}var Ju=10;function ju(i,t,{fragment:e="",onSolvedLine:n=null}={}){let s=$x[t];return new Promise(r=>{let o=q("#modal-root"),a=Jt("div","modal"),l=Jt("div","panel puzzle");l.innerHTML=`
      <button class="close" title="Close (Esc)">\u2715</button>
      <h2>${s.title}</h2>
      <div class="sub">${s.sub}</div>
      <div class="pz-body"></div>
      <div class="pz-hint"></div>
      <div class="panel-foot">
        <button class="btn small pz-hintbtn">\u{1F4A1} Hint <small style="opacity:.7">(\u2212${Ju}% \u{1F369})</small></button>
        <span class="help">${i.input.isTouch?"Tap to interact":s.keys||"Esc to close"}</span>
      </div>`,a.append(l),o.append(a);let c=q(".pz-body",l),h=q(".pz-hint",l),d=0,u=!1,f=()=>{removeEventListener("keydown",m,!0),g.dispose?.(),a.remove()},p=()=>{u||(u=!0,i.audio.play("back"),f(),r(!1))},y=()=>{u||(u=!0,g.dispose?.(),i.audio.play("chime"),i.audio.play("unlock",{delay:.1}),q(".pz-hintbtn",l).remove(),h.innerHTML="",c.innerHTML=`
        <div class="solved-banner">
          <div class="big">PUZZLE SOLVED!</div>
          <div class="help" style="margin-top:8px">Password fragment unlocked:</div>
          <div class="frag-reveal">${Li(e)}</div>
          <div style="font-weight:900;font-size:20px;color:var(--pink)">+1 DONUT \u{1F369}</div>
          <div style="margin-top:18px"><button class="btn big mint pz-continue">CONTINUE</button></div>
        </div>`,q(".pz-continue",c).onclick=()=>{i.audio.play("select"),f(),r(!0)},q(".pz-continue",c).focus())},m=_=>{if(_.code==="Escape"){_.stopPropagation(),p();return}if(u){(_.code==="Enter"||_.code==="Space")&&(_.preventDefault(),q(".pz-continue",c)?.click());return}g.onKey?.(_)};addEventListener("keydown",m,!0),q(".close",l).onclick=p,a.addEventListener("mousedown",_=>{_.target===a&&p()}),q(".pz-hintbtn",l).onclick=()=>{let _=g.hints();if(d>=_.length){i.audio.play("error");return}i.meter.add(-Ju),i.audio.play("select"),h.innerHTML=_.slice(0,++d).map(v=>`<div class="hintbox">\u{1F4A1} ${v}</div>`).join(""),g.onHint?.(d)};let g=s.build({game:i,body:c,solve:y,panel:l})})}var tr="ABCDEFGHIJKLMNOPQRSTUVWXYZ",Ku=(i,t)=>tr.includes(i)?tr[(tr.indexOf(i)+t+26*10)%26]:i,$x={caesar:{title:"DINO-LOCK 3000",sub:"An encrypted message is glowing on the screen. Turn the bone wheel to decode it.",keys:"\u2190 \u2192 turn the wheel \xB7 Esc close",build({game:i,body:t,solve:e}){let r=[..."NEXT PUZZLE: ROMAN HALL. KEY IS REX"].map(y=>Ku(y,4)).join(""),o=0,a=null;t.innerHTML=`
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
        <div class="help" style="text-align:center">Outer ring = encrypted letter \xB7 inner ring = real letter</div>`;let l=q(".ring.outer",t),c=q(".ring.inner",t),h=q(".hub b",t),d=q(".cipher-text",t),u=(t.querySelector(".wheel").offsetWidth||250)/2;for(let y=0;y<26;y++){let m=y/26*360,g=Jt("div","lt",tr[y]);g.style.transform=`rotate(${m}deg) translateY(-${u-22}px)`,g.style.marginTop="-12px",l.append(g);let _=Jt("div","lt",tr[y]);_.style.transform=`rotate(${m}deg) translateY(-${u-58}px)`,_.style.marginTop="-12px",c.append(_)}let f=()=>{c.style.transform=`rotate(${o*(360/26)}deg)`,h.textContent=o,d.innerHTML=[...r].map(y=>y===" "?'<div class="sp"></div>':`<div class="ch">${y}<small>${tr.includes(y)?Ku(y,-o):y}</small></div>`).join(""),d.classList.toggle("solved",o===4),o===4&&a==null?(i.audio.play("sparkle"),a=setTimeout(e,1100)):o!==4&&a!=null&&(clearTimeout(a),a=null)},p=y=>{o=(o+y+26)%26,i.audio.play("tick"),i.audio.play("click",{vol:.6}),f()};return q(".rl",t).onclick=()=>p(-1),q(".rr",t).onclick=()=>p(1),t.querySelector(".wheel").addEventListener("wheel",y=>{y.preventDefault(),p(y.deltaY>0?1:-1)},{passive:!1}),f(),{onKey(y){(y.code==="ArrowLeft"||y.code==="KeyA")&&p(-1),(y.code==="ArrowRight"||y.code==="KeyD")&&p(1)},hints:()=>["The plaque next to the T-Rex has a fun fact about its hands.","T. rex had TWO fingers on each hand. Two hands... 2 + 2 = ?","Turn the wheel until the hub says 4."],dispose(){clearTimeout(a)}}}},roman:{title:"AQVILA LOCK",sub:'"ENTER THE YEAR THIS MVSEVM WAS FOVNDED, CITIZEN." \u2014 in normal numbers.',keys:"Click \u25B2\u25BC or type digits \xB7 Esc close",build({game:i,body:t,solve:e,panel:n}){let s=[1,9,7,4],r=[0,0,0,0],o=0,a=!1;t.innerHTML='<div class="aquila">\u{1F985} S \xB7 P \xB7 Q \xB7 R \u{1F985}</div><div class="dials"></div><div class="help" style="text-align:center">Psst \u2014 the founding year is carved somewhere in this hall.</div>';let l=q(".dials",t),c=[];for(let u=0;u<4;u++){let f=Jt("div","dial",'<button class="up">\u25B2</button><div class="num">0</div><button class="dn">\u25BC</button>');l.append(f);let p=q(".num",f);c.push(p),q(".up",f).onclick=()=>d(u,r[u]+1),q(".dn",f).onclick=()=>d(u,r[u]-1),p.addEventListener("wheel",y=>{y.preventDefault(),d(u,r[u]+(y.deltaY>0?-1:1))},{passive:!1})}let h=()=>{!a&&r.every((u,f)=>u===s[f])&&(a=!0,i.audio.play("sparkle"),setTimeout(e,700))},d=(u,f)=>{r[u]=(f+10)%10,c[u].textContent=r[u],c[u].classList.remove("pop"),c[u].offsetWidth,c[u].classList.add("pop"),i.audio.play("tick"),h()};return{onKey(u){(/^Digit\d$/.test(u.code)||/^Numpad\d$/.test(u.code))&&(d(o%4,Number(u.code.slice(-1))),o++,o%4===0&&!r.every((f,p)=>f===s[p])&&(i.audio.play("error"),n.classList.remove("shake"),n.offsetWidth,n.classList.add("shake")))},hints:()=>["Look at the big stone tablet on the far (east) wall. The last line is the year.","Use the ROMAN NUMERALS 101 sign by the entrance. M = 1000, CM = 900...","MCMLXXIV = M (1000) + CM (900) + LXX (70) + IV (4) = 1974."]}}},lightsout:{title:"FUSE BOX",sub:"Turn ALL nine fuses green to power the gate. Each switch also flips its neighbors (up, down, left, right).",keys:"Click the switches \xB7 Esc close",build({game:i,body:t,solve:e}){let s=new Array(9).fill(!0),r=(d,u)=>{let f=Math.floor(u/3),p=u%3,y=d.slice();for(let[m,g]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){let _=f+m,v=p+g;_>=0&&_<3&&v>=0&&v<3&&(y[_*3+v]=!y[_*3+v])}return y};for(let d of[0,4,8,5])s=r(s,d);t.innerHTML='<div class="lights"></div><div class="help" style="text-align:center">Green = power on. Make them all green!</div>';let o=q(".lights",t),a=[],l=!1;for(let d=0;d<9;d++){let u=Jt("button","light");u.onclick=()=>{l||(s=r(s,d),i.audio.play("buzz"),i.audio.play("click"),c(),s.every(Boolean)&&(l=!0,setTimeout(e,600),i.audio.play("sparkle")))},o.append(u),a.push(u)}let c=()=>a.forEach((d,u)=>{d.classList.toggle("on",s[u]),d.classList.remove("hint")});c();let h=()=>{let d=null;for(let u=0;u<512;u++){let f=s.slice(),p=0;for(let y=0;y<9;y++)u&1<<y&&(f=r(f,y),p++);f.every(Boolean)&&(d==null||p<d.n)&&(d={m:u,n:p})}return d?[...Array(9).keys()].filter(u=>d.m&1<<u):[]};return{hints:()=>["Try pressing the switches in the CORNERS and the CENTER first.","The glowing dashed switch is part of the solution. Press it!","Keep asking \u2014 each hint shows another correct switch."],onHint(){let d=h();c(),d.length&&a[d[0]].classList.add("hint")}}}},morse:{title:"TELEGRAPH",sub:"An old telegraph lamp is blinking a word over and over. Decode it with the chart and type it in.",keys:"Type the word \xB7 Enter to submit \xB7 Esc close",build({game:i,body:t,solve:e,panel:n}){let s={A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--.."},r="NAP";t.innerHTML=`
        <div class="morse-lamp"></div>
        <div class="morse-tape"></div>
        <div class="morse-chart">${Object.entries(s).map(([_,v])=>`<div><b>${_}</b> ${v}</div>`).join("")}</div>
        <div class="morse-input"><input maxlength="8" spellcheck="false" autocomplete="off" placeholder="???"><button class="btn mint">SEND</button></div>
        <div class="help" style="text-align:center;margin-top:8px">Short flash = dot ( . ) \xB7 Long flash = dash ( - )</div>`;let o=q(".morse-lamp",t),a=q(".morse-tape",t),l=q("input",t);setTimeout(()=>l.focus(),50);let c=.24,h=[];for(let _ of r){let v=s[_];[...v].forEach((x,C)=>{h.push({on:!0,d:x==="."?c:c*3,sym:x}),h.push({on:!1,d:C<v.length-1?c:c*3,gap:C===v.length-1})})}h[h.length-1].d=c*9,h[h.length-1].reset=!0;let d=0,u=null,f=!0,p="",y=i.level?.stations?.[1]?.lamp,m=()=>{if(!f)return;let _=h[d];o.classList.toggle("on",_.on),y?.setLamp(_.on),_.on?(i.audio.play("beep",{dur:_.d}),p+=_.sym):_.gap&&(p+="   "),a.textContent=p,_.reset&&(p=""),d=(d+1)%h.length,u=setTimeout(m,_.d*1e3)};u=setTimeout(m,600);let g=()=>{l.value.trim().toUpperCase()===r?(f=!1,y?.setLamp(!1),e()):(i.audio.play("error"),n.classList.remove("shake"),n.offsetWidth,n.classList.add("shake"),l.select())};return q(".morse-input .btn",t).onclick=g,l.addEventListener("keydown",_=>{_.key==="Enter"&&g(),_.stopPropagation()}),{hints:()=>["The word has 3 letters. The tape under the lamp shows the dots and dashes.","The first letter is  - .  which is N.","N (-.) \xB7 A (.-) \xB7 P (.--.)  \u2192  something you want to do right now..."],dispose(){f=!1,clearTimeout(u),y?.setLamp(!1)}}}},slider:{title:"TORN POSTER",sub:"Someone cut up the museum's most famous poster. Slide the pieces back into place.",keys:"Click a tile next to the gap (or arrow keys) \xB7 Esc close",build({game:i,body:t,solve:e}){let n=Jx(),s=[1,2,3,4,5,6,7,8,0],r=p=>[p-3,p+3,p%3?p-1:-1,p%3<2?p+1:-1].filter(y=>y>=0&&y<9),o=-1;for(let p=0;p<34;p++){let y=s.indexOf(0),m=r(y).filter(_=>_!==o),g=m[Math.floor(Math.random()*m.length)];[s[y],s[g]]=[s[g],s[y]],o=y}if(s.join()==="1,2,3,4,5,6,7,8,0"){let p=s.indexOf(0),y=r(p)[0];[s[p],s[y]]=[s[y],s[p]]}t.innerHTML='<div class="slider"></div><div class="help" style="text-align:center">Tiny numbers show where each piece belongs.</div>';let a=q(".slider",t),l=!1,c=[];for(let p=0;p<9;p++){let y=Jt("div","tile");y.onclick=()=>d(p),a.append(y),c.push(y)}let h=()=>{c.forEach((p,y)=>{let m=s[y];if(p.classList.toggle("empty",m===0),p.classList.remove("hint"),m){let g=m-1;p.style.backgroundImage=`url(${n})`,p.style.backgroundPosition=`${g%3*50}% ${Math.floor(g/3)*50}%`,p.innerHTML=`<span class="n">${m}</span>`}else p.style.backgroundImage="",p.innerHTML=""})},d=p=>{if(l)return;let y=s.indexOf(0);if(!r(y).includes(p)){i.audio.play("tick");return}[s[y],s[p]]=[s[p],s[y]],i.audio.play("click"),i.audio.play("thud",{vol:.25}),h(),s.join()==="1,2,3,4,5,6,7,8,0"&&(l=!0,h(),i.audio.play("sparkle"),setTimeout(e,700))};h();let u=null,f=()=>{u||(u=Zx());let p=s.join(""),y=u.get(p);if(y==null)return-1;let m=s.indexOf(0);return y.split("").indexOf("0")!==m?y.split("").indexOf("0"):-1};return{onKey(p){let y=s.indexOf(0),m={ArrowUp:y+3,ArrowDown:y-3,ArrowLeft:y%3<2?y+1:-1,ArrowRight:y%3?y-1:-1};m[p.code]!=null&&m[p.code]>=0&&m[p.code]<9&&(p.preventDefault(),d(m[p.code]))},hints:()=>["Solve the TOP row first (1, 2, 3), then don't touch it.","The glowing tile is the best next move. Ask again for more!","Still glowing \u2014 keep following the hints and it will solve itself."],onHint(){let p=f();h(),p>=0&&c[p].classList.add("hint")}}}}};function Zx(){let i="123456780",t=new Map([[i,null]]),e=[i],n=s=>[s-3,s+3,s%3?s-1:-1,s%3<2?s+1:-1].filter(r=>r>=0&&r<9);for(let s=0;s<e.length;s++){let r=e[s],o=r.indexOf("0");for(let a of n(o)){let l=r.split("");[l[o],l[a]]=[l[a],l[o]];let c=l.join("");t.has(c)||(t.set(c,r),e.push(c))}}return t}var _a=null;function Jx(){if(_a)return _a;let i=document.createElement("canvas");i.width=i.height=360;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,360);e.addColorStop(0,"#ff9a5a"),e.addColorStop(1,"#7a1f4d"),t.fillStyle=e,t.fillRect(0,0,360,360),t.fillStyle="rgba(255,255,255,0.15)";for(let s=0;s<12;s++)t.beginPath(),t.moveTo(180,200),t.arc(180,200,300,s*.52,s*.52+.26),t.fill();t.fillStyle="#d49a5c",t.beginPath(),t.arc(180,220,90,0,7),t.fill(),t.fillStyle="#ff7eb6",t.beginPath(),t.arc(180,214,82,0,7),t.fill(),t.fillStyle="#7a1f4d",t.beginPath(),t.arc(180,216,30,0,7),t.fill();let n=["#3bc9ff","#ffe14d","#7dff6b","#fff","#b86bff"];for(let s=0;s<40;s++){let r=Math.random()*7,o=40+Math.random()*36;t.save(),t.translate(180+Math.cos(r)*o,214+Math.sin(r)*o),t.rotate(Math.random()*3),t.fillStyle=n[s%5],t.fillRect(-6,-2,12,4),t.restore()}t.fillStyle="#2b1d14",t.beginPath(),t.moveTo(260,120),t.lineTo(350,90),t.lineTo(360,150),t.lineTo(300,175),t.lineTo(250,160),t.fill(),t.fillStyle="#fff";for(let s=0;s<5;s++)t.beginPath(),t.moveTo(262+s*16,160-s*3),t.lineTo(268+s*16,175-s*3),t.lineTo(274+s*16,158-s*3),t.fill();return t.fillStyle="#ff3b3b",t.beginPath(),t.arc(320,110,7,0,7),t.fill(),t.fillStyle="#fff",t.font="bold 50px Arial Black, Arial",t.textAlign="center",t.strokeStyle="#2b1d14",t.lineWidth=8,t.strokeText("DONUT DAY",180,64),t.fillText("DONUT DAY",180,64),t.font="bold 30px Arial Black, Arial",t.strokeText("MUSEUM GIFT SHOP",180,344),t.fillText("MUSEUM GIFT SHOP",180,344),_a=i.toDataURL(),_a}var Ma=class{constructor(t){this.game=t,this.camera=t.camera,this.pos=new P,this.vel=new P,this.yaw=0,this.pitch=0,this.height=1.65,this.radius=.32,this.enabled=!1,this.lookEnabled=!0,this.bobT=0,this.stepAcc=0,this.sprinting=!1,this.speedMul=1,this.eyeOffset=0;let e=this.spot=new Xs(16773590,0,34,.48,.55,1.4);e.position.set(.18,-.15,.1),e.target.position.set(.05,-.2,-6),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.bias=-4e-4,e.shadow.normalBias=.02,e.shadow.camera.near=.3,e.shadow.camera.far=34,this.camera.add(e,e.target),this.fill=new De(16770752,0,7,2),this.fill.position.set(0,0,-3),this.camera.add(this.fill),this.flModel=Ui(),this.flModel.scale.setScalar(.7),this.flModel.position.set(.24,-.22,-.45),this.camera.add(this.flModel),this.flModel.visible=!1,this.flashOn=!1,this.hasFlashlight=!1,this.flickerT=0,this.baseIntensity=60,this.swayX=0,this.swayY=0}setPose(t,e,n,s=0){this.pos.set(t,0,e),this.vel.set(0,0,0),this.yaw=n,this.pitch=s,this.applyCamera(0)}faceToward(t,e){this.yaw=Math.atan2(-(t-this.pos.x),-(e-this.pos.z))}giveFlashlight(t=!0){this.hasFlashlight=!0,this.flModel.visible=!0,this.setFlash(t)}setFlash(t){this.hasFlashlight||(t=!1),this.flashOn=t,this.spot.intensity=t?this.baseIntensity:0,this.fill.intensity=t?.5:0,this.flModel.userData.lens.material.color.set(t?16774876:3355443)}flicker(t=1.2){this.flickerT=t}forward(){return new P(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}update(t,e){let n=this.game,s=n.input,r=n.save.settings;if(this.enabled&&this.lookEnabled){let l=.0022*(r.sensitivity||1);this.yaw-=s.mdx*l,this.pitch-=s.mdy*l*(r.invertY?-1:1),this.pitch=qe(this.pitch,-1.45,1.45),this.swayX=hn(this.swayX,qe(s.mdx*.002,-.05,.05),10,t),this.swayY=hn(this.swayY,qe(s.mdy*.002,-.05,.05),10,t)}let o=0;if(this.enabled){let l=s.moveAxis();this.sprinting=s.isDown("ShiftLeft","ShiftRight")&&l.z>.1&&n.meter.value>0;let c=(this.sprinting?5.6:3.3)*this.speedMul,h=Math.sin(this.yaw),d=Math.cos(this.yaw),u=(-h*l.z+d*l.x)*c,f=(-d*l.z-h*l.x)*c,p=1-Math.exp(-10*t);if(this.vel.x+=(u-this.vel.x)*p,this.vel.z+=(f-this.vel.z)*p,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,e)for(let y=0;y<2;y++)Kx(this.pos,this.radius,e);o=Math.hypot(this.vel.x,this.vel.z),s.wasPressed("KeyF")&&this.hasFlashlight&&(this.setFlash(!this.flashOn),n.audio.play("flashlight"))}else this.vel.set(0,0,0);this.bobT+=t*o*2.1,this.stepAcc+=o*t;let a=this.sprinting?2.1:1.65;if(this.stepAcc>a){this.stepAcc=0;let l=n.level,c=l?.surfaceAt?l.surfaceAt(this.pos.x,this.pos.z):l?.surface||"marble";n.audio.play("step",{surface:c,vol:this.sprinting?1.2:.9})}this.flickerT>0&&(this.flickerT-=t,this.flashOn&&(this.spot.intensity=Math.random()<.45?$s(0,8):this.baseIntensity),this.flickerT<=0&&this.flashOn&&(this.spot.intensity=this.baseIntensity)),this.applyCamera(t,o)}applyCamera(t,e=0){let n=this.camera,s=Math.min(1,e/3.3),r=Math.sin(this.bobT*2)*.045*s,o=Math.cos(this.bobT)*.03*s;n.position.set(this.pos.x+o,this.height+this.eyeOffset+r,this.pos.z),n.rotation.set(this.pitch,this.yaw,0,"YXZ"),this.flModel.position.set(.27-this.swayX+o*.4,-.25+this.swayY+r*.6,-.5),this.flModel.rotation.set(.05+this.swayY,.08-this.swayX*2,0)}};function Kx(i,t,e){for(let n of e){if(!n.enabled)continue;let s=Math.max(n.minX,Math.min(i.x,n.maxX)),r=Math.max(n.minZ,Math.min(i.z,n.maxZ)),o=i.x-s,a=i.z-r,l=o*o+a*a;if(!(l>=t*t))if(l>1e-9){let c=Math.sqrt(l);i.x+=o/c*(t-c),i.z+=a/c*(t-c)}else{let c=i.x-n.minX,h=n.maxX-i.x,d=i.z-n.minZ,u=n.maxZ-i.z,f=Math.min(c,h,d,u);f===c?i.x=n.minX-t:f===h?i.x=n.maxX+t:f===d?i.z=n.minZ-t:i.z=n.maxZ+t}}}var Qu="locked-out.save.v1",jx=14;function tf(){return{chapter:null,reached:[],solved:{},donuts:[],fragments:[],flags:{},settings:{master:.8,music:.6,sfx:.9,voice:"tts",subtitles:"medium",sensitivity:1,invertY:!1,fov:75,quality:"high",marker:!0}}}function Qx(){let i=tf();try{let t=JSON.parse(localStorage.getItem(Qu)||"null");if(t)return{...i,...t,settings:{...i.settings,...t.settings||{}},flags:{...t.flags||{}}}}catch{}return i}var fh=class{constructor(t){this.g=t,this.value=100,this.drain=0,this.enabled=!1,this.onEmpty=null,this.blinkT=5}set(t){this.value=qe(t,0,100),this.g.hud.setMeter(this.value)}add(t){this.set(this.value+t),t>0&&(this.fired=!1)}update(t){let e=this.g;if(!this.enabled||!["explore","runner"].includes(e.mode))return;let n=e.player?.sprinting&&e.mode==="explore"?2.4:1;this.set(this.value-this.drain*n*t);let s=this.value<22?(22-this.value)/22:0;e.hud.setDrowsy(s*.85),this.value<15&&(this.blinkT-=t,this.blinkT<0&&(this.blinkT=4+Math.random()*3,e.hud.setLids(.6,.35),setTimeout(()=>e.hud.setLids(0,.35),450),Math.random()<.5&&e.audio.play("yawn"))),this.value<=0&&!this.fired&&(this.fired=!0,this.onEmpty?.())}},ba=class{constructor(){this.save=Qx(),this.canvas=q("#game");let t=this.renderer=new Co({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});t.toneMapping=Uc,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=Dc,au(t.capabilities.getMaxAnisotropy()),this.camera=new Je(75,innerWidth/innerHeight,.05,400),this.camLook=new P,this.input=new jo(this.canvas),this.audio=new Qo,this.sched=new Ko,this.hud=new ea(this),this.dialogue=new ia(this),this.clips=new sa,this.menu=new va(this),this.computer=new ga(this),this.meter=new fh(this),this.player=new Ma(this),this.level=null,this.mode="boot",this.paused=!1,this.runId=0,this.shakeOffset={x:0,y:0,z:0,rx:0,rz:0},this.shakeAmp=0,this.shakeT=0,this.shakeDur=1,this.clockMin=0,this.clockOn=!1,this.unlockT=0,this.menuAngle=0,this.timeScale=1,this.clock=new Xo,addEventListener("resize",()=>this.resize()),this.resize(),this.input.onKey=e=>this._onKey(e),this.input.onLockChange=e=>{!e&&this.mode==="explore"&&!this.paused&&this.pause()},this.canvas.addEventListener("click",()=>{this.mode==="explore"&&!this.paused&&this.input.requestLock()}),q("#skip-btn").addEventListener("click",()=>this.skipCutscene()),document.addEventListener("visibilitychange",()=>{document.hidden&&["explore","runner"].includes(this.mode)&&!this.paused&&this.pause()}),this.applySettings()}persist(){try{localStorage.setItem(Qu,JSON.stringify(this.save))}catch{}}resetSave(){let t=this.save.settings;this.save=tf(),this.save.settings=t,this.persist()}applySettings(){let t=this.save.settings;this.audio.setVolumes({master:t.master,music:t.music,sfx:t.sfx}),this.mode!=="runner"&&(this.camera.fov=t.fov),this.camera.updateProjectionMatrix();let e=t.quality!=="low";this.renderer.setPixelRatio(Math.min(devicePixelRatio,e?1.75:1)),this.player.spot.castShadow=e,document.documentElement.style.setProperty("--sub-size",t.subtitles==="large"?"28px":innerWidth<720?"17px":"22px"),this.persist()}resize(){this.renderer.setSize(innerWidth,innerHeight,!1),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()}async boot(){await this.clips.init(),this.menuLevel=new di(this,{time:"night"}),this.menuLevel.persistent=!0,this.setLevel(this.menuLevel),this.renderer.compile(this.menuLevel.scene,this.camera),this.renderer.setAnimationLoop(()=>this.loop())}start(){this.audio.init();let t=new URLSearchParams(location.search).get("chapter");t&&os.find(e=>e.id===t)?this.startChapter(t,{mode:"fresh"}):this.toMenu()}loop(){let t=Math.min(.05,this.clock.getDelta()),e=t*this.timeScale,n=this.input;if(n.isTouch&&n.wasPressed("Escape")&&["explore","runner"].includes(this.mode)&&this.togglePause(),!this.paused&&(this.sched.update(e),this.mode==="explore"?(this.player.update(e,this.level?.colliders),this._interact(),!n.isTouch&&!n.locked?(this.unlockT+=t,this.unlockT>.6&&this.hud.setPrompt("Click to look around")):this.unlockT=0):this.mode==="menu"&&this._menuCam(e),this.level?.update(e),this.meter.update(e),this._updateShake(e),this.clockOn)){this.clockMin+=e/4;let o=Math.floor(this.clockMin)%(24*60),a=Math.floor(o/60),l=o%60;this.hud.setClock(`${(a+11)%12+1}:${String(l).padStart(2,"0")} ${a<12?"AM":"PM"}`)}this.dialogue.update(t),this.hud.update();let s=this.camera,r=this.shakeOffset;s.position.x+=r.x,s.position.y+=r.y,s.rotation.z+=r.rz,this.level&&this.renderer.render(this.level.scene,s),s.position.x-=r.x,s.position.y-=r.y,s.rotation.z-=r.rz,n.endFrame()}_interact(){let t=this.level;if(!t||!this.player.enabled)return;let e=this.camera,n=this.player.forward(),s=null,r=.82,o=new P;for(let a of t.interactables){if(!a.enabled)continue;o.copy(a.pos).sub(e.position);let l=o.length();if(l>a.radius)continue;let c=o.normalize().dot(n)+(l<1.2?.15:0);c>r&&(s=a,r=c)}this.unlockT<=.6&&this.hud.setPrompt(s?s.prompt:null),(s&&this.input.wasPressed("KeyE","Enter")||s&&this.input.locked&&this.input.wasPressed("Mouse0"))&&(this.audio.play("click"),s.onUse?.())}_menuCam(t){this.menuAngle+=t*.045;let e=this.menuAngle,n=Qt.trex;this.camera.position.set(n.x+Math.sin(e)*12.5,3.2+Math.sin(e*.7)*.8,n.z+Math.cos(e)*12.5),this.camera.lookAt(n.x,4.2,n.z),this.player.spot.target.position.set(Math.sin(this.menuAngle*3)*1.5,-.1,-6)}_updateShake(t){let e=this.shakeOffset;if(this.shakeT>0){this.shakeT-=t;let n=this.shakeAmp*Math.max(0,this.shakeT/this.shakeDur);e.x=$s(-1,1)*n*.3,e.y=$s(-1,1)*n*.3,e.rz=$s(-1,1)*n*.04}else e.x=e.y=e.rz=0,this.shakeAmp=0}shake(t,e=.5){t>=this.shakeAmp*Math.max(0,this.shakeT/this.shakeDur)&&(this.shakeAmp=t,this.shakeT=e,this.shakeDur=e)}_onKey(t){(t.code==="Escape"||t.code==="KeyP")&&(this.mode==="cutscene"&&t.code==="Escape"?this.skipCutscene():["explore","runner"].includes(this.mode)&&this.togglePause()),this.mode==="cutscene"&&(t.code==="Space"||t.code==="Enter")&&this.dialogue.skipLine()}setMode(t){this.mode=t;let e=t==="explore";this.player.enabled=e,this.hud.crosshair(e),e||this.hud.setPrompt(null),this.input.showTouch(e?"explore":t==="runner"?"runner":"off"),this.dialogue.allowClickSkip=t==="cutscene",e?this.input.requestLock():this.input.exitLock()}togglePause(){this.paused?this.resume():this.pause()}pause(){if(this.paused)return;this.paused=!0,this.dialogue.setPaused(!0),this.input.exitLock(),this.audio.ctx?.suspend?.();let t=this.pauseModal=Un(`<h2>PAUSED</h2><div class="sub">${this.chapterName()}</div>
      <div class="chapters">
        <button class="btn big pink" data-a="resume">\u25B6 RESUME</button>
        <button class="btn" data-a="settings">SETTINGS</button>
        <button class="btn" data-a="restart">RESTART CHAPTER</button>
        <button class="btn ghost" data-a="menu">QUIT TO MENU</button>
      </div>`,()=>{this.paused&&this.resume()});t.panel.querySelector("[data-a=resume]").onclick=()=>t.close(),t.panel.querySelector("[data-a=settings]").onclick=()=>{this.audio.ctx?.resume?.(),this.menu.settings()},t.panel.querySelector("[data-a=restart]").onclick=()=>{this.paused=!1,t.close(),this.startChapter(this.save.chapter||"intro",{mode:"continue"})},t.panel.querySelector("[data-a=menu]").onclick=()=>{this.paused=!1,t.close(),this.toMenu()}}resume(){if(this.paused){if(this.paused=!1,this.audio.ctx?.resume?.(),this.dialogue.setPaused(!1),this.pauseModal){let t=this.pauseModal;this.pauseModal=null,t.close()}this.clock.getDelta(),this.mode==="explore"&&this.input.requestLock()}}chapterName(){return os.find(t=>t.id===this.save.chapter)?.name||""}setLevel(t){this.level&&(this.level.scene.remove(this.camera),this.level.persistent||this.level.dispose()),this.level=t,t.scene.add(this.camera),this.sched.reset()}async loadLevel(t){this.setLevel(t);try{this.renderer.compile(t.scene,this.camera)}catch{}this.clock.getDelta()}_guard(t){let e=this.runId;return Promise.resolve(t).then(n=>e===this.runId?n:new Promise(()=>{}))}wait(t){return this._guard(this.sched.wait(t))}tween(t,e,n){return this._guard(this.sched.tween(t,e,n))}until(t){return this._guard(this.sched.until(t))}say(t,e){return this._guard(this.dialogue.say(t,e))}async fadeOut(t=.5){this.hud.setFade(1,t),await this._guard(new Promise(e=>setTimeout(e,t*1e3+30)))}async fadeIn(t=.8){this.hud.setFade(0,t),await this.wait(t)}async cutscene(t){this.setMode("cutscene"),this.hud.setLetterbox(!0),q("#skip-btn").classList.remove("off"),this.hud.show(!0);try{await t()}finally{this.sched.skipping=!1,this.hud.setLetterbox(!1),q("#skip-btn").classList.add("off"),this.hud.caption("")}}skipCutscene(){this.mode!=="cutscene"||this.sched.skipping||(this.audio.play("whoosh",{vol:.4}),this.sched.skipAll(),this.dialogue.skipLine(),this.computer.typingSkip=!0)}camTo(t,e,n=1.5,s=es.inOut){let r=this.camera.position.clone(),o=this.camLook.clone(),a=new P(...t),l=new P(...e);return this.tween(n,c=>{this.camera.position.lerpVectors(r,a,c),this.camLook.lerpVectors(o,l,c),this.camera.lookAt(this.camLook)},s)}camSet(t,e){this.camera.position.set(...t),this.camLook.set(...e),this.camera.lookAt(this.camLook)}objective(t,e){this.hud.objective(t,e)}addFragment(t){this.save.fragments.includes(t)||this.save.fragments.push(t),this.persist(),this.hud.setFragments(this.save.fragments)}collectDonut(t){this.save.donuts.includes(t)||this.save.donuts.push(t),this.persist(),this.meter.add(20),this.audio.play("munch"),this.audio.play("pickup"),this.hud.toast(`\u{1F369} Donut found! <b>+20%</b> <span style="opacity:.7">(${this.save.donuts.length}/${jx} hidden donuts)</span>`)}async openPuzzle(t,e){this.setMode("puzzle");let n=await this._guard(ju(this,t,{fragment:e}));return this.setMode("explore"),n&&(this.meter.add(35),this.audio.play("munch",{delay:.2}),this.addFragment(e),this.hud.toast(`\u{1F9E9} Puzzle solved! <b>+1 donut</b> \xB7 fragment <b style="color:var(--mint)">${e}</b>`,"mint")),n}checkpoint(t){this.save.chapter=t,this.save.reached.includes(t)||this.save.reached.push(t),this.persist()}setClock(t,e=!0){this.clockMin=t,this.clockOn=e,this.hud.showClock(e)}async failed(t,e){this.setMode("cutscene"),this.meter.enabled=!1,this.audio.stopMusic(.5),this.audio.play("wahwah"),this.dialogue.stop(),await this._guard(ya(this,{title:t,sub:e,buttons:[{label:"\u21BB TRY AGAIN",value:"retry",cls:"pink"},{label:"MENU",value:"menu",cls:"ghost"}]}))==="retry"?this.startChapter(this.save.chapter,{mode:"continue"}):this.toMenu()}resetHud(){let t=this.hud;t.show(!1),t.showMeter(!1),t.showClock(!1),t.objective(null),t.setFragments([],{show:!1}),t.showChase(!1),t.showArrow(!1),t.setPrompt(null),t.controlsHint(null),t.setDrowsy(0),t.setLids(0,0),t.setLetterbox(!1),t.setDonutCount(null),t.caption(""),q("#skip-btn").classList.add("off"),q("#modal-root").innerHTML="",this.computer.close()}async startChapter(t,{mode:e="fresh"}={}){this.runId++,this.paused=!1,this.timeScale=1,this.menu.hide(),this.dialogue.stop(),this.setMode("loading"),await this._guard(this.fadeOut(.45)),this.resetHud(),this.player.eyeOffset=0,this.player.speedMul=1,this.meter.enabled=!1,this.meter.onEmpty=null,this.meter.fired=!1;let n=dh[t];if(e==="fresh")this.save.fragments=n.fragments.slice(),["intro","dino","roman","chase","maze"].includes(t)&&(this.save.solved={}),this.meter.set(n.meter);else if(e==="continue"){this.meter.set(Math.max(60,n.meter*.85));for(let s of n.fragments)this.save.fragments.includes(s)||this.save.fragments.push(s)}else this.meter.set(Math.max(45,this.meter.value));this.checkpoint(t),this.audio.setReverb(.5),zu(this,t,e)}toMenu(){this.runId++,this.paused=!1,this.timeScale=1,this.dialogue.stop(),this.resetHud(),this.meter.enabled=!1,this.setLevel(this.menuLevel),this.setMode("menu"),this.player.hasFlashlight=!0,this.player.flModel.visible=!1,this.player.setFlash(!0),this.player.spot.target.position.set(0,-.1,-6),this.camera.fov=60,this.camera.updateProjectionMatrix(),this.audio.setAmbient("night"),this.audio.setReverb(.6),this.hud.setFade(0,1.2),this.menu.show()}};function ef(i){console.error(i);let t=q("#boot");t&&(t.classList.remove("off","loading"),t.querySelector(".boot-inner").innerHTML=`
    <div class="boot-logo" style="font-size:48px">UH OH \u{1F369}</div>
    <div class="boot-tips" style="max-width:520px">The game couldn't start. Your browser might not support WebGL, or something broke.<br><br>
    <code style="color:#ff8a8a">${String(i?.message||i).replace(/</g,"&lt;")}</code></div>`)}addEventListener("DOMContentLoaded",async()=>{let i=q("#boot"),t;try{t=new ba,window.game=t}catch(n){ef(n);return}let e=t.boot().catch(ef);q("#boot-start").addEventListener("click",async()=>{i.classList.add("loading"),t.audio.init(),t.audio.play("select"),await e,i.style.transition="opacity .8s",i.style.opacity="0",setTimeout(()=>i.classList.add("off"),800),t.start()})});})();
