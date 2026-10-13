(()=>{var ah="170";var Kf=0,sd=1,Jf=2;var pu=1,lh=2,di=3,Fi=0,pn=1,ke=2,Jn=0,Vs=1,_n=2,rd=3,od=4,jf=5,os=100,Qf=101,tp=102,ep=103,np=104,ip=200,sp=201,rp=202,op=203,Ol=204,Fl=205,ap=206,lp=207,cp=208,hp=209,dp=210,up=211,fp=212,pp=213,mp=214,Hl=0,Bl=1,zl=2,Ys=3,Gl=4,Vl=5,Wl=6,Xl=7,mu=0,gp=1,yp=2,Ni=0,ch=1,hh=2,dh=3,Xr=4,vp=5,uh=6,fh=7;var gu=300,$s=301,Zs=302,ql=303,Yl=304,ha=306,vi=1e3,fi=1001,$l=1002,Hn=1003,xp=1004;var Qr=1005;var Kn=1006,el=1007;var ls=1008;var xi=1009,yu=1010,vu=1011,Nr=1012,ph=1013,cs=1014,pi=1015,Gn=1016,mh=1017,gh=1018,Ks=1020,xu=35902,_u=1021,Mu=1022,Fn=1023,bu=1024,Eu=1025,Ws=1026,Js=1027,Su=1028,yh=1029,wu=1030,vh=1031;var xh=1033,Po=33776,Io=33777,Lo=33778,ko=33779,Zl=35840,Kl=35841,Jl=35842,jl=35843,Ql=36196,tc=37492,ec=37496,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,hc=37816,dc=37817,uc=37818,fc=37819,pc=37820,mc=37821,Do=36492,gc=36494,yc=36495,Tu=36283,vc=36284,xc=36285,_c=36286;var Uo=2300,Mc=2301,nl=2302,ad=2400,ld=2401,cd=2402;var _p=3200,Mp=3201;var Au=0,bp=1,Di="",rn="srgb",cr="srgb-linear",da="linear",me="srgb";var Es=7680;var hd=519,Ep=512,Sp=513,wp=514,Ru=515,Tp=516,Ap=517,Rp=518,Cp=519,bc=35044;var dd="300 es",mi=2e3,No=2001,Hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var il=Math.PI/180,Oo=180/Math.PI;function gi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function tn(n,t,e){return Math.max(t,Math.min(e,n))}function Pp(n,t){return(n%t+t)%t}function sl(n,t,e){return(1-e)*n+e*t}function Zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Q=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],y=s[0],g=s[3],p=s[6],x=s[1],v=s[4],_=s[7],T=s[2],S=s[5],P=s[8];return r[0]=o*y+a*x+l*T,r[3]=o*g+a*v+l*S,r[6]=o*p+a*_+l*P,r[1]=c*y+h*x+d*T,r[4]=c*g+h*v+d*S,r[7]=c*p+h*_+d*P,r[2]=u*y+f*x+m*T,r[5]=u*g+f*v+m*S,r[8]=u*p+f*_+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=d*y,t[1]=(s*c-h*i)*y,t[2]=(a*i-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rl.makeScale(t,e)),this}rotate(t){return this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rl=new Kt;function Cu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ip(){let n=Fo("canvas");return n.style.display="block",n}var ud={};function Ir(n){n in ud||(ud[n]=!0,console.warn(n))}function Lp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function kp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var oe={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(n.r=yi(n.r),n.g=yi(n.g),n.b=yi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(n.r=Xs(n.r),n.g=Xs(n.g),n.b=Xs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Di?da:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fd=[.64,.33,.3,.6,.15,.06],pd=[.2126,.7152,.0722],md=[.3127,.329],gd=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[cr]:{primaries:fd,whitePoint:md,transfer:da,toXYZ:gd,fromXYZ:yd,luminanceCoefficients:pd,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:fd,whitePoint:md,transfer:me,toXYZ:gd,fromXYZ:yd,luminanceCoefficients:pd,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});var Ss,Ec=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ss===void 0&&(Ss=Fo("canvas")),Ss.width=t.width,Ss.height=t.height;let i=Ss.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yi(e[i]/255)*255):e[i]=yi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Up=0,Ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ol(s[o].image)):r.push(ol(s[o]))}else r=ol(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ec.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Np=0,Mn=class n extends Hi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=fi,s=fi,r=Kn,o=ls,a=Fn,l=xi,c=n.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=gi(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vi:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case $l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vi:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case $l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=gu;Mn.DEFAULT_ANISOTROPY=1;var _e=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(f+1)/2,T=(p+1)/2,S=(h+u)/4,P=(d+y)/4,I=(m+g)/4;return v>_&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=S/i,r=P/i):_>T?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=S/s,r=I/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=P/r,s=I/r),this.set(i,s,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-y)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sc=class extends Hi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Sc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Bo=class extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=y;return}if(d!==y||l!==u||c!==f||h!==m){let g=1-a,p=l*u+c*f+h*m+d*y,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let T=Math.sqrt(v),S=Math.atan2(T,p*x);g=Math.sin(g*S)/T,a=Math.sin(a*S)/T}let _=a*x;if(l=l*g+u*_,c=c*g+f*_,h=h*g+m*_,d=d*g+y*_,g===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new A,vd=new An,_i=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),eo.subVectors(this.max,Er),ws.subVectors(t.a,Er),Ts.subVectors(t.b,Er),As.subVectors(t.c,Er),Ri.subVectors(Ts,ws),Ci.subVectors(As,Ts),Qi.subVectors(ws,As);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Qi.z,Qi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Qi.z,0,-Qi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Qi.y,Qi.x,0];return!ll(e,ws,Ts,As,eo)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,ws,Ts,As,eo))?!1:(no.crossVectors(Ri,Ci),e=[no.x,no.y,no.z],ll(e,ws,Ts,As,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},oi=[new A,new A,new A,new A,new A,new A,new A,new A],Un=new A,to=new _i,ws=new A,Ts=new A,As=new A,Ri=new A,Ci=new A,Qi=new A,Er=new A,eo=new A,no=new A,ts=new A;function ll(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ts.fromArray(n,r);let a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=t.dot(ts),c=e.dot(ts),h=i.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Op=new _i,Sr=new A,cl=new A,Bi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Op.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(cl)),this.expandByPoint(Sr.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new A,hl=new A,io=new A,Pi=new A,dl=new A,so=new A,ul=new A,zo=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){hl.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(hl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=Pi.dot(this.direction),l=-Pi.dot(io),c=Pi.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hl).addScaledVector(io,u),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);let i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,s,r){dl.subVectors(e,t),so.subVectors(i,t),ul.crossVectors(dl,so);let o=this.direction.dot(ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,t);let l=a*this.direction.dot(so.crossVectors(Pi,so));if(l<0)return null;let c=a*this.direction.dot(dl.cross(Pi));if(c<0||l+c>o)return null;let h=-a*Pi.dot(ul);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class n{constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,m,y,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,y,g)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,y=c*d;e[0]=u+y*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,y=c*d;e[0]=u-y*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,y=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fp,t,Hp)}lookAt(t,e,i){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ii.crossVectors(i,vn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ii.crossVectors(i,vn)),Ii.normalize(),ro.crossVectors(vn,Ii),s[0]=Ii.x,s[4]=ro.x,s[8]=vn.x,s[1]=Ii.y,s[5]=ro.y,s[9]=vn.y,s[2]=Ii.z,s[6]=ro.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],x=i[3],v=i[7],_=i[11],T=i[15],S=s[0],P=s[4],I=s[8],E=s[12],M=s[1],L=s[5],k=s[9],D=s[13],F=s[2],q=s[6],G=s[10],at=s[14],X=s[3],pt=s[7],xt=s[11],bt=s[15];return r[0]=o*S+a*M+l*F+c*X,r[4]=o*P+a*L+l*q+c*pt,r[8]=o*I+a*k+l*G+c*xt,r[12]=o*E+a*D+l*at+c*bt,r[1]=h*S+d*M+u*F+f*X,r[5]=h*P+d*L+u*q+f*pt,r[9]=h*I+d*k+u*G+f*xt,r[13]=h*E+d*D+u*at+f*bt,r[2]=m*S+y*M+g*F+p*X,r[6]=m*P+y*L+g*q+p*pt,r[10]=m*I+y*k+g*G+p*xt,r[14]=m*E+y*D+g*at+p*bt,r[3]=x*S+v*M+_*F+T*X,r[7]=x*P+v*L+_*q+T*pt,r[11]=x*I+v*k+_*G+T*xt,r[15]=x*E+v*D+_*at+T*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15];return m*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*f-i*l*f)+y*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+g*(+e*c*d-e*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*d+e*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],x=d*g*c-y*u*c+y*l*f-a*g*f-d*l*p+a*u*p,v=m*u*c-h*g*c-m*l*f+o*g*f+h*l*p-o*u*p,_=h*y*c-m*d*c+m*a*f-o*y*f-h*a*p+o*d*p,T=m*d*l-h*y*l-m*a*u+o*y*u+h*a*g-o*d*g,S=e*x+i*v+s*_+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/S;return t[0]=x*P,t[1]=(y*u*r-d*g*r-y*s*f+i*g*f+d*s*p-i*u*p)*P,t[2]=(a*g*r-y*l*r+y*s*c-i*g*c-a*s*p+i*l*p)*P,t[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*P,t[4]=v*P,t[5]=(h*g*r-m*u*r+m*s*f-e*g*f-h*s*p+e*u*p)*P,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*P,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*P,t[8]=_*P,t[9]=(m*d*r-h*y*r-m*i*f+e*y*f+h*i*p-e*d*p)*P,t[10]=(o*y*r-m*a*r+m*i*c-e*y*c-o*i*p+e*a*p)*P,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*f-e*a*f)*P,t[12]=T*P,t[13]=(h*y*s-m*d*s+m*i*u-e*y*u-h*i*g+e*d*g)*P,t[14]=(m*a*s-o*y*s-m*i*l+e*y*l+o*i*g-e*a*g)*P,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*u+e*a*u)*P,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,y=o*h,g=o*d,p=a*d,x=l*c,v=l*h,_=l*d,T=i.x,S=i.y,P=i.z;return s[0]=(1-(y+p))*T,s[1]=(f+_)*T,s[2]=(m-v)*T,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(u+p))*S,s[6]=(g+x)*S,s[7]=0,s[8]=(m+v)*P,s[9]=(g-x)*P,s[10]=(1-(u+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Rs.set(s[0],s[1],s[2]).length(),o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);let c=1/r,h=1/o,d=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,e.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=mi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),f,m;if(a===mi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===No)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=mi){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),u=(e+t)*c,f=(i+s)*h,m,y;if(a===mi)m=(o+r)*d,y=-2*d;else if(a===No)m=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Rs=new A,Nn=new ce,Fp=new A(0,0,0),Hp=new A(1,1,1),Ii=new A,ro=new A,vn=new A,xd=new ce,_d=new An,mn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _d.setFromEuler(this),this.setFromQuaternion(_d,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bp=0,Md=new A,Cs=new An,li=new ce,oo=new A,wr=new A,zp=new A,Gp=new An,bd=new A(1,0,0),Ed=new A(0,1,0),Sd=new A(0,0,1),wd={type:"added"},Vp={type:"removed"},Ps={type:"childadded",child:null},fl={type:"childremoved",child:null},qe=class n extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new A,e=new mn,i=new An,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Kt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(bd,t)}rotateY(t){return this.rotateOnAxis(Ed,t)}rotateZ(t){return this.rotateOnAxis(Sd,t)}translateOnAxis(t,e){return Md.copy(t).applyQuaternion(this.quaternion),this.position.add(Md.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bd,t)}translateY(t){return this.translateOnAxis(Ed,t)}translateZ(t){return this.translateOnAxis(Sd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?oo.copy(t):oo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(wr,oo,this.up):li.lookAt(oo,wr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(li),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wd),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vp),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wd),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};qe.DEFAULT_UP=new A(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new A,ci=new A,pl=new A,hi=new A,Is=new A,Ls=new A,Td=new A,ml=new A,gl=new A,yl=new A,vl=new _e,xl=new _e,_l=new _e,Ui=class n{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){On.subVectors(s,e),ci.subVectors(i,e),pl.subVectors(t,e);let o=On.dot(On),a=On.dot(ci),l=On.dot(pl),c=ci.dot(ci),h=ci.dot(pl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return vl.setScalar(0),xl.setScalar(0),_l.setScalar(0),vl.fromBufferAttribute(t,e),xl.fromBufferAttribute(t,i),_l.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(vl,r.x),o.addScaledVector(xl,r.y),o.addScaledVector(_l,r.z),o}static isFrontFacing(t,e,i,s){return On.subVectors(i,e),ci.subVectors(t,e),On.cross(ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),On.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Is.subVectors(s,i),Ls.subVectors(r,i),ml.subVectors(t,i);let l=Is.dot(ml),c=Ls.dot(ml);if(l<=0&&c<=0)return e.copy(i);gl.subVectors(t,s);let h=Is.dot(gl),d=Ls.dot(gl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Is,o);yl.subVectors(t,r);let f=Is.dot(yl),m=Ls.dot(yl);if(m>=0&&f<=m)return e.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Ls,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Td.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Td,a);let p=1/(g+y+u);return o=y*p,a=u*p,e.copy(i).addScaledVector(Is,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Nt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=Pp(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ml(o,r,t+1/3),this.g=Ml(o,r,t),this.b=Ml(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let i=Pu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return oe.fromWorkingColorSpace(sn.copy(this),t),Math.round(tn(sn.r*255,0,255))*65536+Math.round(tn(sn.g*255,0,255))*256+Math.round(tn(sn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(sn.copy(this),e);let i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=rn){oe.fromWorkingColorSpace(sn.copy(this),t);let e=sn.r,i=sn.g,s=sn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(ao);let i=sl(Li.h,ao.h,e),s=sl(Li.s,ao.s,e),r=sl(Li.l,ao.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Nt;Nt.NAMES=Pu;var Wp=0,Mi=class extends Hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=gi(),this.name="",this.blending=Vs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Fl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ol&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ie=class extends Mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new A,lo=new Q,Be=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bc,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}};var Vo=class extends Be{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Wo=class extends Be{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Yt=class extends Be{constructor(t,e,i){super(new Float32Array(t),e,i)}},Xp=0,Tn=new ce,bl=new qe,ks=new A,xn=new _i,Tr=new _i,je=new A,Ce=class n extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?Wo:Vo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,i){return Tn.makeTranslation(t,e,i),this.applyMatrix4(Tn),this}scale(t,e,i){return Tn.makeScale(t,e,i),this.applyMatrix4(Tn),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(xn.min,Tr.min),xn.expandByPoint(je),je.addVectors(xn.max,Tr.max),xn.expandByPoint(je)):(xn.expandByPoint(Tr.min),xn.expandByPoint(Tr.max))}xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(t,c),je.add(ks)),s=Math.max(s,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new A,l[I]=new A;let c=new A,h=new A,d=new A,u=new Q,f=new Q,m=new Q,y=new A,g=new A;function p(I,E,M){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,M),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[I].add(y),a[E].add(y),a[M].add(y),l[I].add(g),l[E].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,E=x.length;I<E;++I){let M=x[I],L=M.start,k=M.count;for(let D=L,F=L+k;D<F;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let v=new A,_=new A,T=new A,S=new A;function P(I){T.fromBufferAttribute(s,I),S.copy(T);let E=a[I];v.copy(E),v.sub(T.multiplyScalar(T.dot(E))).normalize(),_.crossVectors(S,E);let L=_.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,L)}for(let I=0,E=x.length;I<E;++I){let M=x[I],L=M.start,k=M.count;for(let D=L,F=L+k;D<F;D+=3)P(t.getX(D+0)),P(t.getX(D+1)),P(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Be(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ad=new ce,es=new zo,co=new Bi,Rd=new A,ho=new A,uo=new A,fo=new A,El=new A,po=new A,Cd=new A,mo=new A,B=class extends qe{constructor(t=new Ce,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(El.fromBufferAttribute(d,t),o?po.addScaledVector(El,h):po.addScaledVector(El.sub(e),h))}e.add(po)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(co.containsPoint(es.origin)===!1&&(es.intersectSphere(co,Rd)===null||es.origin.distanceToSquared(Rd)>(t.far-t.near)**2))&&(Ad.copy(r).invert(),es.copy(t.ray).applyMatrix4(Ad),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,T=v;_<T;_+=3){let S=a.getX(_),P=a.getX(_+1),I=a.getX(_+2);s=go(this,p,t,i,c,h,d,S,P,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let x=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=go(this,o,t,i,c,h,d,x,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,T=v;_<T;_+=3){let S=_,P=_+1,I=_+2;s=go(this,p,t,i,c,h,d,S,P,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let x=g,v=g+1,_=g+2;s=go(this,o,t,i,c,h,d,x,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function qp(n,t,e,i,s,r,o,a){let l;if(t.side===pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Fi,a),l===null)return null;mo.copy(a),mo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(mo);return c<e.near||c>e.far?null:{distance:c,point:mo.clone(),object:n}}function go(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ho),n.getVertexPosition(l,uo),n.getVertexPosition(c,fo);let h=qp(n,t,e,i,ho,uo,fo,Cd);if(h){let d=new A;Ui.getBarycoord(Cd,ho,uo,fo,d),s&&(h.uv=Ui.getInterpolatedAttribute(s,a,l,c,d,new Q)),r&&(h.uv1=Ui.getInterpolatedAttribute(r,a,l,c,d,new Q)),o&&(h.normal=Ui.getInterpolatedAttribute(o,a,l,c,d,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new A,materialIndex:0};Ui.getNormal(ho,uo,fo,u.normal),h.face=u,h.barycoord=d}return h}var Qt=class n extends Ce{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function m(y,g,p,x,v,_,T,S,P,I,E){let M=_/P,L=T/I,k=_/2,D=T/2,F=S/2,q=P+1,G=I+1,at=0,X=0,pt=new A;for(let xt=0;xt<G;xt++){let bt=xt*L-D;for(let zt=0;zt<q;zt++){let re=zt*M-k;pt[y]=re*x,pt[g]=bt*v,pt[p]=F,c.push(pt.x,pt.y,pt.z),pt[y]=0,pt[g]=0,pt[p]=S>0?1:-1,h.push(pt.x,pt.y,pt.z),d.push(zt/P),d.push(1-xt/I),at+=1}}for(let xt=0;xt<I;xt++)for(let bt=0;bt<P;bt++){let zt=u+bt+q*xt,re=u+bt+q*(xt+1),K=u+(bt+1)+q*(xt+1),lt=u+(bt+1)+q*xt;l.push(zt,re,lt),l.push(re,K,lt),X+=6}a.addGroup(f,X,E),f+=X,u+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function js(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ln(n){let t={};for(let e=0;e<n.length;e++){let i=js(n[e]);for(let s in i)t[s]=i[s]}return t}function Yp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Iu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Vi={clone:js,merge:ln},$p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ye=class extends Mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$p,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Xo=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new A,Pd=new Q,Id=new Q,Xe=class extends Xo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Pd,Id),e.subVectors(Id,Pd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(il*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ds=-90,Us=1,Tc=class extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(Ds,Us,t,e);s.layers=this.layers,this.add(s);let r=new Xe(Ds,Us,t,e);r.layers=this.layers,this.add(r);let o=new Xe(Ds,Us,t,e);o.layers=this.layers,this.add(o);let a=new Xe(Ds,Us,t,e);a.layers=this.layers,this.add(a);let l=new Xe(Ds,Us,t,e);l.layers=this.layers,this.add(l);let c=new Xe(Ds,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===No)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},qo=class extends Mn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ac=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new qo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Jn});r.uniforms.tEquirect.value=e;let o=new B(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=Kn),new Tc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Sl=new A,Kp=new A,Jp=new Kt,ui=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Sl.subVectors(i,e).cross(Kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Sl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Jp.getNormalMatrix(t),s=this.coplanarPoint(Sl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ns=new Bi,yo=new A,hs=class{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],y=s[10],g=s[11],p=s[12],x=s[13],v=s[14],_=s[15];if(i[0].setComponents(l-r,u-c,g-f,_-p).normalize(),i[1].setComponents(l+r,u+c,g+f,_+p).normalize(),i[2].setComponents(l+o,u+h,g+m,_+x).normalize(),i[3].setComponents(l-o,u-h,g-m,_-x).normalize(),i[4].setComponents(l-a,u-d,g-y,_-v).normalize(),e===mi)i[5].setComponents(l+a,u+d,g+y,_+v).normalize();else if(e===No)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(yo.x=s.normal.x>0?t.max.x:t.min.x,yo.y=s.normal.y>0?t.max.y:t.min.y,yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function jp(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],y=d[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bt=class n extends Ce{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let x=p*u-o;for(let v=0;v<c;v++){let _=v*d-r;m.push(_,-x,0),y.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let v=x+c*p,_=x+c*(p+1),T=x+1+c*(p+1),S=x+1+c*p;f.push(v,_,S),f.push(_,T,S)}this.setIndex(f),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
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
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
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
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
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
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u0=`#ifdef USE_IRIDESCENCE
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
#endif`,f0=`#ifdef USE_BUMPMAP
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,b0=`#define PI 3.141592653589793
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
} // validated`,E0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,S0=`vec3 transformedNormal = objectNormal;
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
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
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
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
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
#endif`,J0=`struct PhysicalMaterial {
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
}`,j0=`
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Om=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
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
}`,rg=`#if DEPTH_PACKING == 3200
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
}`,og=`#define DISTANCE
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
}`,ag=`#define DISTANCE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,vg=`#define NORMAL
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
}`,xg=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,Mg=`#define PHONG
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
}`,bg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Sg=`#define TOON
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
}`,wg=`#define TOON
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
}`,Tg=`uniform float size;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Cg=`uniform vec3 color;
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
}`,Pg=`uniform float rotation;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Qp,alphahash_pars_fragment:t0,alphamap_fragment:e0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:h0,bsdfs:d0,iridescence_fragment:u0,bumpmap_pars_fragment:f0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:y0,color_fragment:v0,color_pars_fragment:x0,color_pars_vertex:_0,color_vertex:M0,common:b0,cube_uv_reflection_fragment:E0,defaultnormal_vertex:S0,displacementmap_pars_vertex:w0,displacementmap_vertex:T0,emissivemap_fragment:A0,emissivemap_pars_fragment:R0,colorspace_fragment:C0,colorspace_pars_fragment:P0,envmap_fragment:I0,envmap_common_pars_fragment:L0,envmap_pars_fragment:k0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:X0,envmap_vertex:U0,fog_vertex:N0,fog_pars_vertex:O0,fog_fragment:F0,fog_pars_fragment:H0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:z0,lights_lambert_fragment:G0,lights_lambert_pars_fragment:V0,lights_pars_begin:W0,lights_toon_fragment:q0,lights_toon_pars_fragment:Y0,lights_phong_fragment:$0,lights_phong_pars_fragment:Z0,lights_physical_fragment:K0,lights_physical_pars_fragment:J0,lights_fragment_begin:j0,lights_fragment_maps:Q0,lights_fragment_end:tm,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:hm,morphinstance_vertex:dm,morphcolor_vertex:um,morphnormal_vertex:fm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:ym,normal_pars_fragment:vm,normal_pars_vertex:xm,normal_vertex:_m,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:wm,opaque_fragment:Tm,packing:Am,premultiplied_alpha_fragment:Rm,project_vertex:Cm,dithering_fragment:Pm,dithering_pars_fragment:Im,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Um,shadowmap_vertex:Nm,shadowmask_pars_fragment:Om,skinbase_vertex:Fm,skinning_pars_vertex:Hm,skinning_vertex:Bm,skinnormal_vertex:zm,specularmap_fragment:Gm,specularmap_pars_fragment:Vm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:qm,transmission_pars_fragment:Ym,uv_pars_fragment:$m,uv_pars_vertex:Zm,uv_vertex:Km,worldpos_vertex:Jm,background_vert:jm,background_frag:Qm,backgroundCube_vert:tg,backgroundCube_frag:eg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distanceRGBA_vert:og,distanceRGBA_frag:ag,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:dg,meshbasic_vert:ug,meshbasic_frag:fg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:yg,meshnormal_vert:vg,meshnormal_frag:xg,meshphong_vert:_g,meshphong_frag:Mg,meshphysical_vert:bg,meshphysical_frag:Eg,meshtoon_vert:Sg,meshtoon_frag:wg,points_vert:Tg,points_frag:Ag,shadow_vert:Rg,shadow_frag:Cg,sprite_vert:Pg,sprite_frag:Ig},gt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},$n={basic:{uniforms:ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:ln([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:ln([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:ln([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:ln([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:ln([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:ln([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:ln([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:ln([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:ln([gt.common,gt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:ln([gt.lights,gt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};$n.physical={uniforms:ln([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var vo={r:0,b:0,g:0},is=new mn,Lg=new ce;function kg(n,t,e,i,s,r,o){let a=new Nt(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function y(x){let v=!1,_=m(x);_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,v){let _=m(v);_&&(_.isCubeTexture||_.mapping===ha)?(h===void 0&&(h=new B(new Qt(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:js($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),is.copy(v.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(is)),h.material.toneMapped=oe.getTransfer(_.colorSpace)!==me,(d!==_||u!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new B(new Bt(2,2),new Ye({name:"BackgroundMaterial",uniforms:js($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=oe.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(vo,Iu(n)),i.buffers.color.setClear(vo.r,vo.g,vo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:y,addToRenderList:g}}function Dg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(M,L,k,D,F){let q=!1,G=d(D,k,L);r!==G&&(r=G,c(r.object)),q=f(M,D,k,F),q&&m(M,D,k,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(M,L,k,D),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,L,k){let D=k.wireframe===!0,F=i[M.id];F===void 0&&(F={},i[M.id]=F);let q=F[L.id];q===void 0&&(q={},F[L.id]=q);let G=q[D];return G===void 0&&(G=u(l()),q[D]=G),G}function u(M){let L=[],k=[],D=[];for(let F=0;F<e;F++)L[F]=0,k[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,L,k,D){let F=r.attributes,q=L.attributes,G=0,at=k.getAttributes();for(let X in at)if(at[X].location>=0){let xt=F[X],bt=q[X];if(bt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),xt===void 0||xt.attribute!==bt||bt&&xt.data!==bt.data)return!0;G++}return r.attributesNum!==G||r.index!==D}function m(M,L,k,D){let F={},q=L.attributes,G=0,at=k.getAttributes();for(let X in at)if(at[X].location>=0){let xt=q[X];xt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor));let bt={};bt.attribute=xt,xt&&xt.data&&(bt.data=xt.data),F[X]=bt,G++}r.attributes=F,r.attributesNum=G,r.index=D}function y(){let M=r.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){let k=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;k[M]=1,D[M]===0&&(n.enableVertexAttribArray(M),D[M]=1),F[M]!==L&&(n.vertexAttribDivisor(M,L),F[M]=L)}function x(){let M=r.newAttributes,L=r.enabledAttributes;for(let k=0,D=L.length;k<D;k++)L[k]!==M[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function v(M,L,k,D,F,q,G){G===!0?n.vertexAttribIPointer(M,L,k,F,q):n.vertexAttribPointer(M,L,k,D,F,q)}function _(M,L,k,D){y();let F=D.attributes,q=k.getAttributes(),G=L.defaultAttributeValues;for(let at in q){let X=q[at];if(X.location>=0){let pt=F[at];if(pt===void 0&&(at==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),at==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),pt!==void 0){let xt=pt.normalized,bt=pt.itemSize,zt=t.get(pt);if(zt===void 0)continue;let re=zt.buffer,K=zt.type,lt=zt.bytesPerElement,Rt=K===n.INT||K===n.UNSIGNED_INT||pt.gpuType===ph;if(pt.isInterleavedBufferAttribute){let ut=pt.data,Ft=ut.stride,Gt=pt.offset;if(ut.isInstancedInterleavedBuffer){for(let Ht=0;Ht<X.locationSize;Ht++)p(X.location+Ht,ut.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ht=0;Ht<X.locationSize;Ht++)g(X.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Ht=0;Ht<X.locationSize;Ht++)v(X.location+Ht,bt/X.locationSize,K,xt,Ft*lt,(Gt+bt/X.locationSize*Ht)*lt,Rt)}else{if(pt.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)p(X.location+ut,pt.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ut=0;ut<X.locationSize;ut++)g(X.location+ut);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ut=0;ut<X.locationSize;ut++)v(X.location+ut,bt/X.locationSize,K,xt,bt*lt,bt/X.locationSize*ut*lt,Rt)}}else if(G!==void 0){let xt=G[at];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(X.location,xt);break;case 3:n.vertexAttrib3fv(X.location,xt);break;case 4:n.vertexAttrib4fv(X.location,xt);break;default:n.vertexAttrib1fv(X.location,xt)}}}}x()}function T(){I();for(let M in i){let L=i[M];for(let k in L){let D=L[k];for(let F in D)h(D[F].object),delete D[F];delete L[k]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;let L=i[M.id];for(let k in L){let D=L[k];for(let F in D)h(D[F].object),delete D[F];delete L[k]}delete i[M.id]}function P(M){for(let L in i){let k=i[L];if(k[M.id]===void 0)continue;let D=k[M.id];for(let F in D)h(D[F].object),delete D[F];delete k[M.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function Ug(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let m=0;for(let y=0;y<d;y++)m+=h[y]*u[y];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ng(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Fn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let I=P===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==xi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==pi&&!I)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:T,maxSamples:S}}function Og(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ui,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let x=r?0:i,v=x*4,_=p.clippingState||null;l.value=_,_=h(m,u,v,f);for(let T=0;T!==v;++T)_[T]=e[T];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=f;v!==y;++v,_+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function Fg(n){let t=new WeakMap;function e(o,a){return a===ql?o.mapping=$s:a===Yl&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ql||a===Yl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ac(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Qs=class extends Xo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zs=4,Ld=[.125,.215,.35,.446,.526,.582],as=20,wl=new Qs,kd=new Nt,Tl=null,Al=0,Rl=0,Cl=!1,rs=(1+Math.sqrt(5))/2,Ns=1/rs,Dd=[new A(-rs,Ns,0),new A(rs,Ns,0),new A(-Ns,0,rs),new A(Ns,0,rs),new A(0,rs,-Ns),new A(0,rs,Ns),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Yo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tl,Al,Rl),this._renderer.xr.enabled=Cl,t.scissorTest=!1,xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Gn,format:Fn,colorSpace:cr,depthBuffer:!1},s=Ud(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(r)),this._blurMaterial=Bg(r,t,e)}return s}_compileMaterial(t){let e=new B(this._lodPlanes[0],t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,i,s){let a=new Xe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(kd),h.toneMapping=Ni,h.autoClear=!1;let f=new ie({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new B(new Qt,f),y=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,y=!0):(f.color.copy(kd),y=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;xo(s,x*v,p>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===$s||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;xo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,wl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dd[(s-r-1)%Dd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new B(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*as-1),y=r/m,g=isFinite(r)?1+Math.floor(h*y):as;g>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${as}`);let p=[],x=0;for(let P=0;P<as;++P){let I=P/y,E=Math.exp(-I*I/2);p.push(E),P===0?x+=E:P<g&&(x+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-i;let _=this._sizeLods[s],T=3*_*(s>v-zs?s-v+zs:0),S=4*(this._cubeSize-_);xo(e,T,S,3*_,2*_),l.setRenderTarget(e),l.render(d,wl)}};function Hg(n){let t=[],e=[],i=[],s=n,r=n-zs+1+Ld.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-zs?l=Ld[o-n+zs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,y=3,g=2,p=1,x=new Float32Array(y*m*f),v=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let S=0;S<f;S++){let P=S%3*2/3-1,I=S>2?0:-1,E=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];x.set(E,y*m*S),v.set(u,g*m*S);let M=[S,S,S,S,S,S];_.set(M,p*m*S)}let T=new Ce;T.setAttribute("position",new Be(x,y)),T.setAttribute("uv",new Be(v,g)),T.setAttribute("faceIndex",new Be(_,p)),t.push(T),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ud(n,t,e){let i=new cn(n,t,e);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Bg(n,t,e){let i=new Float32Array(as),s=new A(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_h(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Nd(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Od(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}function zg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ql||l===Yl,h=l===$s||l===Zs;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Yo(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Yo(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Gg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ir("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Vg(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let y=u.morphAttributes[m];for(let g=0,p=y.length;g<p;g++)t.remove(y[g])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)t.update(u[m],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let y=f[m];for(let g=0,p=y.length;g<p;g++)t.update(y[g],n.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,m=d.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let v=0,_=x.length;v<_;v+=3){let T=x[v+0],S=x[v+1],P=x[v+2];u.push(T,S,S,P,P,T)}}else if(m!==void 0){let x=m.array;y=m.version;for(let v=0,_=x.length/3-1;v<_;v+=3){let T=v+0,S=v+1,P=v+2;u.push(T,S,S,P,P,T)}}else return;let g=new(Cu(u)?Wo:Vo)(u,1);g.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wg(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,u*o,m),e.update(f,i,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,i,1)}function d(u,f,m,y){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,y,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*y[x];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Xg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function qg(n,t,e){let i=new WeakMap,s=new _e;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let _=a.attributes.position.count*v,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*T*4*d),P=new Bo(S,_,T,d);P.type=pi,P.needsUpdate=!0;let I=v*4;for(let M=0;M<d;M++){let L=g[M],k=p[M],D=x[M],F=_*T*4*M;for(let q=0;q<L.count;q++){let G=q*I;f===!0&&(s.fromBufferAttribute(L,q),S[F+G+0]=s.x,S[F+G+1]=s.y,S[F+G+2]=s.z,S[F+G+3]=0),m===!0&&(s.fromBufferAttribute(k,q),S[F+G+4]=s.x,S[F+G+5]=s.y,S[F+G+6]=s.z,S[F+G+7]=0),y===!0&&(s.fromBufferAttribute(D,q),S[F+G+8]=s.x,S[F+G+9]=s.y,S[F+G+10]=s.z,S[F+G+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new Q(_,T)},i.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Yg(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var $o=class extends Mn{constructor(t,e,i,s,r,o,a,l,c,h=Ws){if(h!==Ws&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ws&&(i=cs),i===void 0&&h===Js&&(i=Ks),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ku=new Mn,Fd=new $o(1,1),Du=new Bo,Uu=new wc,Nu=new qo,Hd=[],Bd=[],zd=new Float32Array(16),Gd=new Float32Array(9),Vd=new Float32Array(4);function hr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Hd[s];if(r===void 0&&(r=new Float32Array(s),Hd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function $e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ua(n,t){let e=Bd[t];e===void 0&&(e=new Int32Array(t),Bd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $g(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function jg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;Vd.set(i),n.uniformMatrix2fv(this.addr,!1,Vd),Ze(e,i)}}function Qg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;Gd.set(i),n.uniformMatrix3fv(this.addr,!1,Gd),Ze(e,i)}}function ty(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;zd.set(i),n.uniformMatrix4fv(this.addr,!1,zd),Ze(e,i)}}function ey(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ny(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function ry(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function oy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function ay(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function ly(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function cy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fd.compareFunction=Ru,r=Fd):r=ku,e.setTexture2D(t||r,s)}function hy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Uu,s)}function dy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Nu,s)}function uy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Du,s)}function fy(n){switch(n){case 5126:return $g;case 35664:return Zg;case 35665:return Kg;case 35666:return Jg;case 35674:return jg;case 35675:return Qg;case 35676:return ty;case 5124:case 35670:return ey;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return ry;case 36294:return oy;case 36295:return ay;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return dy;case 36289:case 36303:case 36311:case 36292:return uy}}function py(n,t){n.uniform1fv(this.addr,t)}function my(n,t){let e=hr(t,this.size,2);n.uniform2fv(this.addr,e)}function gy(n,t){let e=hr(t,this.size,3);n.uniform3fv(this.addr,e)}function yy(n,t){let e=hr(t,this.size,4);n.uniform4fv(this.addr,e)}function vy(n,t){let e=hr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function xy(n,t){let e=hr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _y(n,t){let e=hr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function My(n,t){n.uniform1iv(this.addr,t)}function by(n,t){n.uniform2iv(this.addr,t)}function Ey(n,t){n.uniform3iv(this.addr,t)}function Sy(n,t){n.uniform4iv(this.addr,t)}function wy(n,t){n.uniform1uiv(this.addr,t)}function Ty(n,t){n.uniform2uiv(this.addr,t)}function Ay(n,t){n.uniform3uiv(this.addr,t)}function Ry(n,t){n.uniform4uiv(this.addr,t)}function Cy(n,t,e){let i=this.cache,s=t.length,r=ua(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ku,r[o])}function Py(n,t,e){let i=this.cache,s=t.length,r=ua(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uu,r[o])}function Iy(n,t,e){let i=this.cache,s=t.length,r=ua(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nu,r[o])}function Ly(n,t,e){let i=this.cache,s=t.length,r=ua(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Du,r[o])}function ky(n){switch(n){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return yy;case 35674:return vy;case 35675:return xy;case 35676:return _y;case 5124:case 35670:return My;case 35667:case 35671:return by;case 35668:case 35672:return Ey;case 35669:case 35673:return Sy;case 5125:return wy;case 36294:return Ty;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Ly}}var Rc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=fy(e.type)}},Cc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ky(e.type)}},Pc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Pl=/(\w+)(\])?(\[|\.)?/g;function Wd(n,t){n.seq.push(t),n.map[t.id]=t}function Dy(n,t,e){let i=n.name,s=i.length;for(Pl.lastIndex=0;;){let r=Pl.exec(i),o=Pl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wd(e,c===void 0?new Rc(a,n,t):new Cc(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Pc(a),Wd(e,d)),e=d}}}var qs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Dy(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Xd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Uy=37297,Ny=0;function Oy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var qd=new Kt;function Fy(n){oe._getMatrix(qd,oe.workingColorSpace,n);let t=`mat3( ${qd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case da:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Oy(n.getShaderSource(t),o)}else return s}function Hy(n,t){let e=Fy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function By(n,t){let e;switch(t){case ch:e="Linear";break;case hh:e="Reinhard";break;case dh:e="Cineon";break;case Xr:e="ACESFilmic";break;case uh:e="AgX";break;case fh:e="Neutral";break;case vp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _o=new A;function zy(){oe.getLuminanceCoefficients(_o);let n=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function Vy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Wy(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Lr(n){return n!==""}function $d(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(n){return n.replace(Xy,Yy)}var qy=new Map;function Yy(n,t){let e=jt[t];if(e===void 0){let i=qy.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}var $y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(n){return n.replace($y,Zy)}function Zy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ky(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function Jy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $s:case Zs:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function Qy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mu:t="ENVMAP_BLENDING_MULTIPLY";break;case gp:t="ENVMAP_BLENDING_MIX";break;case yp:t="ENVMAP_BLENDING_ADD";break}return t}function tv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ev(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ky(e),c=Jy(e),h=jy(e),d=Qy(e),u=tv(e),f=Gy(e),m=Vy(r),y=s.createProgram(),g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Lr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(g=[Jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[Jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?jt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?By("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Hy("linearToOutputTexel",e.outputColorSpace),zy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Ic(o),o=$d(o,e),o=Zd(o,e),a=Ic(a),a=$d(a,e),a=Zd(a,e),o=Kd(o),a=Kd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=x+g+o,_=x+p+a,T=Xd(s,s.VERTEX_SHADER,v),S=Xd(s,s.FRAGMENT_SHADER,_);s.attachShader(y,T),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(L){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(y).trim(),D=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(S).trim(),q=!0,G=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,T,S);else{let at=Yd(s,T,"vertex"),X=Yd(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+at+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(D===""||F==="")&&(G=!1);G&&(L.diagnostics={runnable:q,programLog:k,vertexShader:{log:D,prefix:g},fragmentShader:{log:F,prefix:p}})}s.deleteShader(T),s.deleteShader(S),I=new qs(s,y),E=Wy(s,y)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Uy)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ny++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=S,this}var nv=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new kc(t),e.set(t,i)),i}},kc=class{constructor(t){this.id=nv++,this.code=t,this.usedTimes=0}};function iv(n,t,e,i,s,r,o){let a=new Go,l=new Lc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,L,k,D){let F=k.fog,q=D.geometry,G=E.isMeshStandardMaterial?k.environment:null,at=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),X=at&&at.mapping===ha?at.image.height:null,pt=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let xt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,bt=xt!==void 0?xt.length:0,zt=0;q.morphAttributes.position!==void 0&&(zt=1),q.morphAttributes.normal!==void 0&&(zt=2),q.morphAttributes.color!==void 0&&(zt=3);let re,K,lt,Rt;if(pt){let ye=$n[pt];re=ye.vertexShader,K=ye.fragmentShader}else re=E.vertexShader,K=E.fragmentShader,l.update(E),lt=l.getVertexShaderID(E),Rt=l.getFragmentShaderID(E);let ut=n.getRenderTarget(),Ft=n.state.buffers.depth.getReversed(),Gt=D.isInstancedMesh===!0,Ht=D.isBatchedMesh===!0,ee=!!E.map,tt=!!E.matcap,z=!!at,R=!!E.aoMap,it=!!E.lightMap,J=!!E.bumpMap,ht=!!E.normalMap,st=!!E.displacementMap,yt=!!E.emissiveMap,mt=!!E.metalnessMap,C=!!E.roughnessMap,b=E.anisotropy>0,H=E.clearcoat>0,$=E.dispersion>0,nt=E.iridescence>0,j=E.sheen>0,Lt=E.transmission>0,vt=b&&!!E.anisotropyMap,At=H&&!!E.clearcoatMap,ne=H&&!!E.clearcoatNormalMap,ct=H&&!!E.clearcoatRoughnessMap,Pt=nt&&!!E.iridescenceMap,Vt=nt&&!!E.iridescenceThicknessMap,Xt=j&&!!E.sheenColorMap,It=j&&!!E.sheenRoughnessMap,le=!!E.specularMap,Jt=!!E.specularColorMap,be=!!E.specularIntensityMap,U=Lt&&!!E.transmissionMap,_t=Lt&&!!E.thicknessMap,Y=!!E.gradientMap,et=!!E.alphaMap,wt=E.alphaTest>0,Et=!!E.alphaHash,$t=!!E.extensions,Oe=Ni;E.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Oe=n.toneMapping);let en={shaderID:pt,shaderType:E.type,shaderName:E.name,vertexShader:re,fragmentShader:K,defines:E.defines,customVertexShaderID:lt,customFragmentShaderID:Rt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ht,batchingColor:Ht&&D._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&D.instanceColor!==null,instancingMorph:Gt&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:cr,alphaToCoverage:!!E.alphaToCoverage,map:ee,matcap:tt,envMap:z,envMapMode:z&&at.mapping,envMapCubeUVHeight:X,aoMap:R,lightMap:it,bumpMap:J,normalMap:ht,displacementMap:u&&st,emissiveMap:yt,normalMapObjectSpace:ht&&E.normalMapType===bp,normalMapTangentSpace:ht&&E.normalMapType===Au,metalnessMap:mt,roughnessMap:C,anisotropy:b,anisotropyMap:vt,clearcoat:H,clearcoatMap:At,clearcoatNormalMap:ne,clearcoatRoughnessMap:ct,dispersion:$,iridescence:nt,iridescenceMap:Pt,iridescenceThicknessMap:Vt,sheen:j,sheenColorMap:Xt,sheenRoughnessMap:It,specularMap:le,specularColorMap:Jt,specularIntensityMap:be,transmission:Lt,transmissionMap:U,thicknessMap:_t,gradientMap:Y,opaque:E.transparent===!1&&E.blending===Vs&&E.alphaToCoverage===!1,alphaMap:et,alphaTest:wt,alphaHash:Et,combine:E.combine,mapUv:ee&&y(E.map.channel),aoMapUv:R&&y(E.aoMap.channel),lightMapUv:it&&y(E.lightMap.channel),bumpMapUv:J&&y(E.bumpMap.channel),normalMapUv:ht&&y(E.normalMap.channel),displacementMapUv:st&&y(E.displacementMap.channel),emissiveMapUv:yt&&y(E.emissiveMap.channel),metalnessMapUv:mt&&y(E.metalnessMap.channel),roughnessMapUv:C&&y(E.roughnessMap.channel),anisotropyMapUv:vt&&y(E.anisotropyMap.channel),clearcoatMapUv:At&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(E.sheenRoughnessMap.channel),specularMapUv:le&&y(E.specularMap.channel),specularColorMapUv:Jt&&y(E.specularColorMap.channel),specularIntensityMapUv:be&&y(E.specularIntensityMap.channel),transmissionMapUv:U&&y(E.transmissionMap.channel),thicknessMapUv:_t&&y(E.thicknessMap.channel),alphaMapUv:et&&y(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ht||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(ee||et),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ft,skinning:D.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ee&&E.map.isVideoTexture===!0&&oe.getTransfer(E.map.colorSpace)===me,decodeVideoTextureEmissive:yt&&E.emissiveMap.isVideoTexture===!0&&oe.getTransfer(E.emissiveMap.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ke,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$t&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&E.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return en.vertexUv1s=c.has(1),en.vertexUv2s=c.has(2),en.vertexUv3s=c.has(3),c.clear(),en}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(x(M,E),v(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function x(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){let M=m[E.type],L;if(M){let k=$n[M];L=Vi.clone(k.uniforms)}else L=E.uniforms;return L}function T(E,M){let L;for(let k=0,D=h.length;k<D;k++){let F=h[k];if(F.cacheKey===M){L=F,++L.usedTimes;break}}return L===void 0&&(L=new ev(n,M,E,r),h.push(L)),L}function S(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function P(E){l.remove(E)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:S,releaseShaderCache:P,programs:h,dispose:I}}function sv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function rv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function jd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,f,m,y,g){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:y,group:g},n[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=y,p.group=g),t++,p}function a(d,u,f,m,y,g){let p=o(d,u,f,m,y,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,m,y,g){let p=o(d,u,f,m,y,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||rv),i.length>1&&i.sort(u||jd),s.length>1&&s.sort(u||jd)}function h(){for(let d=t,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ov(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Qd,n.set(i,[o])):s>=r.length?(o=new Qd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function av(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Nt};break;case"SpotLight":e={position:new A,direction:new A,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function lv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var cv=0;function hv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function dv(n){let t=new av,e=lv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let s=new A,r=new ce,o=new ce;function a(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,x=0,v=0,_=0,T=0,S=0,P=0;c.sort(hv);for(let E=0,M=c.length;E<M;E++){let L=c[E],k=L.color,D=L.intensity,F=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*D,d+=k.g*D,u+=k.b*D;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],D);P++}else if(L.isDirectionalLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let at=L.shadow,X=e.get(L);X.shadowIntensity=at.intensity,X.shadowBias=at.bias,X.shadowNormalBias=at.normalBias,X.shadowRadius=at.radius,X.shadowMapSize=at.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=L.shadow.matrix,x++}i.directional[f]=G,f++}else if(L.isSpotLight){let G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(k).multiplyScalar(D),G.distance=F,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[y]=G;let at=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,at.updateMatrices(L),L.castShadow&&S++),i.spotLightMatrix[y]=at.matrix,L.castShadow){let X=e.get(L);X.shadowIntensity=at.intensity,X.shadowBias=at.bias,X.shadowNormalBias=at.normalBias,X.shadowRadius=at.radius,X.shadowMapSize=at.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=q,_++}y++}else if(L.isRectAreaLight){let G=t.get(L);G.color.copy(k).multiplyScalar(D),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=G,g++}else if(L.isPointLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let at=L.shadow,X=e.get(L);X.shadowIntensity=at.intensity,X.shadowBias=at.bias,X.shadowNormalBias=at.normalBias,X.shadowRadius=at.radius,X.shadowMapSize=at.mapSize,X.shadowCameraNear=at.camera.near,X.shadowCameraFar=at.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=L.shadow.matrix,v++}i.point[m]=G,m++}else if(L.isHemisphereLight){let G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(D),G.groundColor.copy(L.groundColor).multiplyScalar(D),i.hemi[p]=G,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==y||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==v||I.numSpotShadows!==_||I.numSpotMaps!==T||I.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+T-S,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=P,I.directionalLength=f,I.pointLength=m,I.spotLength=y,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=_,I.numSpotMaps=T,I.numLightProbes=P,i.version=cv++)}function l(c,h){let d=0,u=0,f=0,m=0,y=0,g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){let v=c[p];if(v.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(v.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let _=i.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let _=i.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){let _=i.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function tu(n){let t=new dv(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function uv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new tu(n),t.set(s,[a])):r>=o.length?(a=new tu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Dc=class extends Mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uc=class extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
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
}`;function mv(n,t,e){let i=new hs,s=new Q,r=new Q,o=new _e,a=new Dc({depthPacking:Mp}),l=new Uc,c={},h=e.maxTextureSize,d={[Fi]:pn,[pn]:Fi,[ke]:ke},u=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:fv,fragmentShader:pv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ce;m.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new B(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let p=this.type;this.render=function(S,P,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let E=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Jn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let D=p!==di&&this.type===di,F=p===di&&this.type!==di;for(let q=0,G=S.length;q<G;q++){let at=S[q],X=at.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let pt=X.getFrameExtents();if(s.multiply(pt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,X.mapSize.y=r.y)),X.map===null||D===!0||F===!0){let bt=this.type!==di?{minFilter:Hn,magFilter:Hn}:{};X.map!==null&&X.map.dispose(),X.map=new cn(s.x,s.y,bt),X.map.texture.name=at.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let xt=X.getViewportCount();for(let bt=0;bt<xt;bt++){let zt=X.getViewport(bt);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),k.viewport(o),X.updateMatrices(at,bt),i=X.getFrustum(),_(P,I,X.camera,at,this.type)}X.isPointLightShadow!==!0&&this.type===di&&x(X,I),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,M,L)};function x(S,P){let I=t.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new cn(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(P,null,I,u,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(P,null,I,f,y,null)}function v(S,P,I,E){let M=null,L=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let k=M.uuid,D=P.uuid,F=c[k];F===void 0&&(F={},c[k]=F);let q=F[D];q===void 0&&(q=M.clone(),F[D]=q,P.addEventListener("dispose",T)),M=q}if(M.visible=P.visible,M.wireframe=P.wireframe,E===di?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:d[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=n.properties.get(M);k.light=I}return M}function _(S,P,I,E,M){if(S.visible===!1)return;if(S.layers.test(P.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===di)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let D=t.update(S),F=S.material;if(Array.isArray(F)){let q=D.groups;for(let G=0,at=q.length;G<at;G++){let X=q[G],pt=F[X.materialIndex];if(pt&&pt.visible){let xt=v(S,pt,E,M);S.onBeforeShadow(n,S,P,I,D,xt,X),n.renderBufferDirect(I,null,D,xt,S,X),S.onAfterShadow(n,S,P,I,D,xt,X)}}}else if(F.visible){let q=v(S,F,E,M);S.onBeforeShadow(n,S,P,I,D,q,null),n.renderBufferDirect(I,null,D,q,S,null),S.onAfterShadow(n,S,P,I,D,q,null)}}let k=S.children;for(let D=0,F=k.length;D<F;D++)_(k[D],P,I,E,M)}function T(S){S.target.removeEventListener("dispose",T);for(let I in c){let E=c[I],M=S.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var gv={[Hl]:Bl,[zl]:Wl,[Gl]:Xl,[Ys]:Vl,[Bl]:Hl,[Wl]:zl,[Xl]:Gl,[Vl]:Ys};function yv(n,t){function e(){let U=!1,_t=new _e,Y=null,et=new _e(0,0,0,0);return{setMask:function(wt){Y!==wt&&!U&&(n.colorMask(wt,wt,wt,wt),Y=wt)},setLocked:function(wt){U=wt},setClear:function(wt,Et,$t,Oe,en){en===!0&&(wt*=Oe,Et*=Oe,$t*=Oe),_t.set(wt,Et,$t,Oe),et.equals(_t)===!1&&(n.clearColor(wt,Et,$t,Oe),et.copy(_t))},reset:function(){U=!1,Y=null,et.set(-1,0,0,0)}}}function i(){let U=!1,_t=!1,Y=null,et=null,wt=null;return{setReversed:function(Et){if(_t!==Et){let $t=t.get("EXT_clip_control");_t?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let Oe=wt;wt=null,this.setClear(Oe)}_t=Et},getReversed:function(){return _t},setTest:function(Et){Et?ut(n.DEPTH_TEST):Ft(n.DEPTH_TEST)},setMask:function(Et){Y!==Et&&!U&&(n.depthMask(Et),Y=Et)},setFunc:function(Et){if(_t&&(Et=gv[Et]),et!==Et){switch(Et){case Hl:n.depthFunc(n.NEVER);break;case Bl:n.depthFunc(n.ALWAYS);break;case zl:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case Gl:n.depthFunc(n.EQUAL);break;case Vl:n.depthFunc(n.GEQUAL);break;case Wl:n.depthFunc(n.GREATER);break;case Xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=Et}},setLocked:function(Et){U=Et},setClear:function(Et){wt!==Et&&(_t&&(Et=1-Et),n.clearDepth(Et),wt=Et)},reset:function(){U=!1,Y=null,et=null,wt=null,_t=!1}}}function s(){let U=!1,_t=null,Y=null,et=null,wt=null,Et=null,$t=null,Oe=null,en=null;return{setTest:function(ye){U||(ye?ut(n.STENCIL_TEST):Ft(n.STENCIL_TEST))},setMask:function(ye){_t!==ye&&!U&&(n.stencilMask(ye),_t=ye)},setFunc:function(ye,kn,si){(Y!==ye||et!==kn||wt!==si)&&(n.stencilFunc(ye,kn,si),Y=ye,et=kn,wt=si)},setOp:function(ye,kn,si){(Et!==ye||$t!==kn||Oe!==si)&&(n.stencilOp(ye,kn,si),Et=ye,$t=kn,Oe=si)},setLocked:function(ye){U=ye},setClear:function(ye){en!==ye&&(n.clearStencil(ye),en=ye)},reset:function(){U=!1,_t=null,Y=null,et=null,wt=null,Et=null,$t=null,Oe=null,en=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],m=null,y=!1,g=null,p=null,x=null,v=null,_=null,T=null,S=null,P=new Nt(0,0,0),I=0,E=!1,M=null,L=null,k=null,D=null,F=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,at=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=at>=1):X.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=at>=2);let pt=null,xt={},bt=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),re=new _e().fromArray(bt),K=new _e().fromArray(zt);function lt(U,_t,Y,et){let wt=new Uint8Array(4),Et=n.createTexture();n.bindTexture(U,Et),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<Y;$t++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(_t+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return Et}let Rt={};Rt[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),Rt[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Rt[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(n.DEPTH_TEST),o.setFunc(Ys),J(!1),ht(sd),ut(n.CULL_FACE),R(Jn);function ut(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Ft(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Gt(U,_t){return d[U]!==_t?(n.bindFramebuffer(U,_t),d[U]=_t,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=_t),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function Ht(U,_t){let Y=f,et=!1;if(U){Y=u.get(_t),Y===void 0&&(Y=[],u.set(_t,Y));let wt=U.textures;if(Y.length!==wt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,$t=wt.length;Et<$t;Et++)Y[Et]=n.COLOR_ATTACHMENT0+Et;Y.length=wt.length,et=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,et=!0);et&&n.drawBuffers(Y)}function ee(U){return m!==U?(n.useProgram(U),m=U,!0):!1}let tt={[os]:n.FUNC_ADD,[Qf]:n.FUNC_SUBTRACT,[tp]:n.FUNC_REVERSE_SUBTRACT};tt[ep]=n.MIN,tt[np]=n.MAX;let z={[ip]:n.ZERO,[sp]:n.ONE,[rp]:n.SRC_COLOR,[Ol]:n.SRC_ALPHA,[dp]:n.SRC_ALPHA_SATURATE,[cp]:n.DST_COLOR,[ap]:n.DST_ALPHA,[op]:n.ONE_MINUS_SRC_COLOR,[Fl]:n.ONE_MINUS_SRC_ALPHA,[hp]:n.ONE_MINUS_DST_COLOR,[lp]:n.ONE_MINUS_DST_ALPHA,[up]:n.CONSTANT_COLOR,[fp]:n.ONE_MINUS_CONSTANT_COLOR,[pp]:n.CONSTANT_ALPHA,[mp]:n.ONE_MINUS_CONSTANT_ALPHA};function R(U,_t,Y,et,wt,Et,$t,Oe,en,ye){if(U===Jn){y===!0&&(Ft(n.BLEND),y=!1);return}if(y===!1&&(ut(n.BLEND),y=!0),U!==jf){if(U!==g||ye!==E){if((p!==os||_!==os)&&(n.blendEquation(n.FUNC_ADD),p=os,_=os),ye)switch(U){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _n:n.blendFunc(n.ONE,n.ONE);break;case rd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case od:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _n:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case od:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,v=null,T=null,S=null,P.set(0,0,0),I=0,g=U,E=ye}return}wt=wt||_t,Et=Et||Y,$t=$t||et,(_t!==p||wt!==_)&&(n.blendEquationSeparate(tt[_t],tt[wt]),p=_t,_=wt),(Y!==x||et!==v||Et!==T||$t!==S)&&(n.blendFuncSeparate(z[Y],z[et],z[Et],z[$t]),x=Y,v=et,T=Et,S=$t),(Oe.equals(P)===!1||en!==I)&&(n.blendColor(Oe.r,Oe.g,Oe.b,en),P.copy(Oe),I=en),g=U,E=!1}function it(U,_t){U.side===ke?Ft(n.CULL_FACE):ut(n.CULL_FACE);let Y=U.side===pn;_t&&(Y=!Y),J(Y),U.blending===Vs&&U.transparent===!1?R(Jn):R(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let et=U.stencilWrite;a.setTest(et),et&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),yt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):Ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function ht(U){U!==Kf?(ut(n.CULL_FACE),U!==L&&(U===sd?n.cullFace(n.BACK):U===Jf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ft(n.CULL_FACE),L=U}function st(U){U!==k&&(G&&n.lineWidth(U),k=U)}function yt(U,_t,Y){U?(ut(n.POLYGON_OFFSET_FILL),(D!==_t||F!==Y)&&(n.polygonOffset(_t,Y),D=_t,F=Y)):Ft(n.POLYGON_OFFSET_FILL)}function mt(U){U?ut(n.SCISSOR_TEST):Ft(n.SCISSOR_TEST)}function C(U){U===void 0&&(U=n.TEXTURE0+q-1),pt!==U&&(n.activeTexture(U),pt=U)}function b(U,_t,Y){Y===void 0&&(pt===null?Y=n.TEXTURE0+q-1:Y=pt);let et=xt[Y];et===void 0&&(et={type:void 0,texture:void 0},xt[Y]=et),(et.type!==U||et.texture!==_t)&&(pt!==Y&&(n.activeTexture(Y),pt=Y),n.bindTexture(U,_t||Rt[U]),et.type=U,et.texture=_t)}function H(){let U=xt[pt];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(U){re.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function It(U){K.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function le(U,_t){let Y=c.get(_t);Y===void 0&&(Y=new WeakMap,c.set(_t,Y));let et=Y.get(U);et===void 0&&(et=n.getUniformBlockIndex(_t,U.name),Y.set(U,et))}function Jt(U,_t){let et=c.get(_t).get(U);l.get(_t)!==et&&(n.uniformBlockBinding(_t,et,U.__bindingPointIndex),l.set(_t,et))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},pt=null,xt={},d={},u=new WeakMap,f=[],m=null,y=!1,g=null,p=null,x=null,v=null,_=null,T=null,S=null,P=new Nt(0,0,0),I=0,E=!1,M=null,L=null,k=null,D=null,F=null,re.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Ft,bindFramebuffer:Gt,drawBuffers:Ht,useProgram:ee,setBlending:R,setMaterial:it,setFlipSided:J,setCullFace:ht,setLineWidth:st,setPolygonOffset:yt,setScissorTest:mt,activeTexture:C,bindTexture:b,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:nt,texImage2D:Pt,texImage3D:Vt,updateUBOMapping:le,uniformBlockBinding:Jt,texStorage2D:ne,texStorage3D:ct,texSubImage2D:j,texSubImage3D:Lt,compressedTexSubImage2D:vt,compressedTexSubImage3D:At,scissor:Xt,viewport:It,reset:be}}function eu(n,t,e,i){let s=vv(i);switch(e){case _u:return n*t;case bu:return n*t;case Eu:return n*t*2;case Su:return n*t/s.components*s.byteLength;case yh:return n*t/s.components*s.byteLength;case wu:return n*t*2/s.components*s.byteLength;case vh:return n*t*2/s.components*s.byteLength;case Mu:return n*t*3/s.components*s.byteLength;case Fn:return n*t*4/s.components*s.byteLength;case xh:return n*t*4/s.components*s.byteLength;case Po:case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lo:case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kl:case jl:return Math.max(n,16)*Math.max(t,8)/4;case Zl:case Jl:return Math.max(n,8)*Math.max(t,8)/2;case Ql:case tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Do:case gc:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Tu:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xc:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vv(n){switch(n){case xi:case yu:return{byteLength:1,components:1};case Nr:case vu:case Gn:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case cs:case ph:case pi:return{byteLength:4,components:1};case xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,b){return f?new OffscreenCanvas(C,b):Fo("canvas")}function y(C,b,H){let $=1,nt=mt(C);if((nt.width>H||nt.height>H)&&($=H/Math.max(nt.width,nt.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let j=Math.floor($*nt.width),Lt=Math.floor($*nt.height);d===void 0&&(d=m(j,Lt));let vt=b?m(j,Lt):d;return vt.width=j,vt.height=Lt,vt.getContext("2d").drawImage(C,0,0,j,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+j+"x"+Lt+")."),vt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,b,H,$,nt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=b;if(b===n.RED&&(H===n.FLOAT&&(j=n.R32F),H===n.HALF_FLOAT&&(j=n.R16F),H===n.UNSIGNED_BYTE&&(j=n.R8)),b===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.R8UI),H===n.UNSIGNED_SHORT&&(j=n.R16UI),H===n.UNSIGNED_INT&&(j=n.R32UI),H===n.BYTE&&(j=n.R8I),H===n.SHORT&&(j=n.R16I),H===n.INT&&(j=n.R32I)),b===n.RG&&(H===n.FLOAT&&(j=n.RG32F),H===n.HALF_FLOAT&&(j=n.RG16F),H===n.UNSIGNED_BYTE&&(j=n.RG8)),b===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RG8UI),H===n.UNSIGNED_SHORT&&(j=n.RG16UI),H===n.UNSIGNED_INT&&(j=n.RG32UI),H===n.BYTE&&(j=n.RG8I),H===n.SHORT&&(j=n.RG16I),H===n.INT&&(j=n.RG32I)),b===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGB8UI),H===n.UNSIGNED_SHORT&&(j=n.RGB16UI),H===n.UNSIGNED_INT&&(j=n.RGB32UI),H===n.BYTE&&(j=n.RGB8I),H===n.SHORT&&(j=n.RGB16I),H===n.INT&&(j=n.RGB32I)),b===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),H===n.UNSIGNED_INT&&(j=n.RGBA32UI),H===n.BYTE&&(j=n.RGBA8I),H===n.SHORT&&(j=n.RGBA16I),H===n.INT&&(j=n.RGBA32I)),b===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),b===n.RGBA){let Lt=nt?da:oe.getTransfer($);H===n.FLOAT&&(j=n.RGBA32F),H===n.HALF_FLOAT&&(j=n.RGBA16F),H===n.UNSIGNED_BYTE&&(j=Lt===me?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(C,b){let H;return C?b===null||b===cs||b===Ks?H=n.DEPTH24_STENCIL8:b===pi?H=n.DEPTH32F_STENCIL8:b===Nr&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===cs||b===Ks?H=n.DEPTH_COMPONENT24:b===pi?H=n.DEPTH_COMPONENT32F:b===Nr&&(H=n.DEPTH_COMPONENT16),H}function T(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Hn&&C.minFilter!==Kn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function S(C){let b=C.target;b.removeEventListener("dispose",S),I(b),b.isVideoTexture&&h.delete(b)}function P(C){let b=C.target;b.removeEventListener("dispose",P),M(b)}function I(C){let b=i.get(C);if(b.__webglInit===void 0)return;let H=C.source,$=u.get(H);if($){let nt=$[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(C),Object.keys($).length===0&&u.delete(H)}i.remove(C)}function E(C){let b=i.get(C);n.deleteTexture(b.__webglTexture);let H=C.source,$=u.get(H);delete $[b.__cacheKey],o.memory.textures--}function M(C){let b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let nt=0;nt<b.__webglFramebuffer[$].length;nt++)n.deleteFramebuffer(b.__webglFramebuffer[$][nt]);else n.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)n.deleteFramebuffer(b.__webglFramebuffer[$]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=C.textures;for(let $=0,nt=H.length;$<nt;$++){let j=i.get(H[$]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(H[$])}i.remove(C)}let L=0;function k(){L=0}function D(){let C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function F(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function q(C,b){let H=i.get(C);if(C.isVideoTexture&&st(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){let $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,C,b);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+b)}function G(C,b){let H=i.get(C);if(C.version>0&&H.__version!==C.version){K(H,C,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+b)}function at(C,b){let H=i.get(C);if(C.version>0&&H.__version!==C.version){K(H,C,b);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+b)}function X(C,b){let H=i.get(C);if(C.version>0&&H.__version!==C.version){lt(H,C,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+b)}let pt={[vi]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},xt={[Hn]:n.NEAREST,[xp]:n.NEAREST_MIPMAP_NEAREST,[Qr]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[el]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},bt={[Ep]:n.NEVER,[Cp]:n.ALWAYS,[Sp]:n.LESS,[Ru]:n.LEQUAL,[wp]:n.EQUAL,[Rp]:n.GEQUAL,[Tp]:n.GREATER,[Ap]:n.NOTEQUAL};function zt(C,b){if(b.type===pi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Kn||b.magFilter===el||b.magFilter===Qr||b.magFilter===ls||b.minFilter===Kn||b.minFilter===el||b.minFilter===Qr||b.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,pt[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,pt[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,pt[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,xt[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,xt[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,bt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Hn||b.minFilter!==Qr&&b.minFilter!==ls||b.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function re(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",S));let $=b.source,nt=u.get($);nt===void 0&&(nt={},u.set($,nt));let j=F(b);if(j!==C.__cacheKey){nt[j]===void 0&&(nt[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),nt[j].usedTimes++;let Lt=nt[C.__cacheKey];Lt!==void 0&&(nt[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&E(b)),C.__cacheKey=j,C.__webglTexture=nt[j].texture}return H}function K(C,b,H){let $=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=n.TEXTURE_3D);let nt=re(C,b),j=b.source;e.bindTexture($,C.__webglTexture,n.TEXTURE0+H);let Lt=i.get(j);if(j.version!==Lt.__version||nt===!0){e.activeTexture(n.TEXTURE0+H);let vt=oe.getPrimaries(oe.workingColorSpace),At=b.colorSpace===Di?null:oe.getPrimaries(b.colorSpace),ne=b.colorSpace===Di||vt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ct=y(b.image,!1,s.maxTextureSize);ct=yt(b,ct);let Pt=r.convert(b.format,b.colorSpace),Vt=r.convert(b.type),Xt=v(b.internalFormat,Pt,Vt,b.colorSpace,b.isVideoTexture);zt($,b);let It,le=b.mipmaps,Jt=b.isVideoTexture!==!0,be=Lt.__version===void 0||nt===!0,U=j.dataReady,_t=T(b,ct);if(b.isDepthTexture)Xt=_(b.format===Js,b.type),be&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,Xt,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,Xt,ct.width,ct.height,0,Pt,Vt,null));else if(b.isDataTexture)if(le.length>0){Jt&&be&&e.texStorage2D(n.TEXTURE_2D,_t,Xt,le[0].width,le[0].height);for(let Y=0,et=le.length;Y<et;Y++)It=le[Y],Jt?U&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,It.width,It.height,Pt,Vt,It.data):e.texImage2D(n.TEXTURE_2D,Y,Xt,It.width,It.height,0,Pt,Vt,It.data);b.generateMipmaps=!1}else Jt?(be&&e.texStorage2D(n.TEXTURE_2D,_t,Xt,ct.width,ct.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,Pt,Vt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,Xt,ct.width,ct.height,0,Pt,Vt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Xt,le[0].width,le[0].height,ct.depth);for(let Y=0,et=le.length;Y<et;Y++)if(It=le[Y],b.format!==Fn)if(Pt!==null)if(Jt){if(U)if(b.layerUpdates.size>0){let wt=eu(It.width,It.height,b.format,b.type);for(let Et of b.layerUpdates){let $t=It.data.subarray(Et*wt/It.data.BYTES_PER_ELEMENT,(Et+1)*wt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Et,It.width,It.height,1,Pt,$t)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,It.width,It.height,ct.depth,Pt,It.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Xt,It.width,It.height,ct.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,It.width,It.height,ct.depth,Pt,Vt,It.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,Xt,It.width,It.height,ct.depth,0,Pt,Vt,It.data)}else{Jt&&be&&e.texStorage2D(n.TEXTURE_2D,_t,Xt,le[0].width,le[0].height);for(let Y=0,et=le.length;Y<et;Y++)It=le[Y],b.format!==Fn?Pt!==null?Jt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,It.width,It.height,Pt,It.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,Xt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?U&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,It.width,It.height,Pt,Vt,It.data):e.texImage2D(n.TEXTURE_2D,Y,Xt,It.width,It.height,0,Pt,Vt,It.data)}else if(b.isDataArrayTexture)if(Jt){if(be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Xt,ct.width,ct.height,ct.depth),U)if(b.layerUpdates.size>0){let Y=eu(ct.width,ct.height,b.format,b.type);for(let et of b.layerUpdates){let wt=ct.data.subarray(et*Y/ct.data.BYTES_PER_ELEMENT,(et+1)*Y/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,ct.width,ct.height,1,Pt,Vt,wt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Pt,Vt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Xt,ct.width,ct.height,ct.depth,0,Pt,Vt,ct.data);else if(b.isData3DTexture)Jt?(be&&e.texStorage3D(n.TEXTURE_3D,_t,Xt,ct.width,ct.height,ct.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Pt,Vt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,Xt,ct.width,ct.height,ct.depth,0,Pt,Vt,ct.data);else if(b.isFramebufferTexture){if(be)if(Jt)e.texStorage2D(n.TEXTURE_2D,_t,Xt,ct.width,ct.height);else{let Y=ct.width,et=ct.height;for(let wt=0;wt<_t;wt++)e.texImage2D(n.TEXTURE_2D,wt,Xt,Y,et,0,Pt,Vt,null),Y>>=1,et>>=1}}else if(le.length>0){if(Jt&&be){let Y=mt(le[0]);e.texStorage2D(n.TEXTURE_2D,_t,Xt,Y.width,Y.height)}for(let Y=0,et=le.length;Y<et;Y++)It=le[Y],Jt?U&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Pt,Vt,It):e.texImage2D(n.TEXTURE_2D,Y,Xt,Pt,Vt,It);b.generateMipmaps=!1}else if(Jt){if(be){let Y=mt(ct);e.texStorage2D(n.TEXTURE_2D,_t,Xt,Y.width,Y.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Vt,ct)}else e.texImage2D(n.TEXTURE_2D,0,Xt,Pt,Vt,ct);g(b)&&p($),Lt.__version=j.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function lt(C,b,H){if(b.image.length!==6)return;let $=re(C,b),nt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);let j=i.get(nt);if(nt.version!==j.__version||$===!0){e.activeTexture(n.TEXTURE0+H);let Lt=oe.getPrimaries(oe.workingColorSpace),vt=b.colorSpace===Di?null:oe.getPrimaries(b.colorSpace),At=b.colorSpace===Di||Lt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let ne=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let et=0;et<6;et++)!ne&&!ct?Pt[et]=y(b.image[et],!0,s.maxCubemapSize):Pt[et]=ct?b.image[et].image:b.image[et],Pt[et]=yt(b,Pt[et]);let Vt=Pt[0],Xt=r.convert(b.format,b.colorSpace),It=r.convert(b.type),le=v(b.internalFormat,Xt,It,b.colorSpace),Jt=b.isVideoTexture!==!0,be=j.__version===void 0||$===!0,U=nt.dataReady,_t=T(b,Vt);zt(n.TEXTURE_CUBE_MAP,b);let Y;if(ne){Jt&&be&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,le,Vt.width,Vt.height);for(let et=0;et<6;et++){Y=Pt[et].mipmaps;for(let wt=0;wt<Y.length;wt++){let Et=Y[wt];b.format!==Fn?Xt!==null?Jt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,Et.width,Et.height,Xt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,le,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,Et.width,Et.height,Xt,It,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,le,Et.width,Et.height,0,Xt,It,Et.data)}}}else{if(Y=b.mipmaps,Jt&&be){Y.length>0&&_t++;let et=mt(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,le,et.width,et.height)}for(let et=0;et<6;et++)if(ct){Jt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Pt[et].width,Pt[et].height,Xt,It,Pt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,le,Pt[et].width,Pt[et].height,0,Xt,It,Pt[et].data);for(let wt=0;wt<Y.length;wt++){let $t=Y[wt].image[et].image;Jt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,$t.width,$t.height,Xt,It,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,le,$t.width,$t.height,0,Xt,It,$t.data)}}else{Jt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Xt,It,Pt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,le,Xt,It,Pt[et]);for(let wt=0;wt<Y.length;wt++){let Et=Y[wt];Jt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,Xt,It,Et.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,le,Xt,It,Et.image[et])}}}g(b)&&p(n.TEXTURE_CUBE_MAP),j.__version=nt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Rt(C,b,H,$,nt,j){let Lt=r.convert(H.format,H.colorSpace),vt=r.convert(H.type),At=v(H.internalFormat,Lt,vt,H.colorSpace),ne=i.get(b),ct=i.get(H);if(ct.__renderTarget=b,!ne.__hasExternalTextures){let Pt=Math.max(1,b.width>>j),Vt=Math.max(1,b.height>>j);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,j,At,Pt,Vt,b.depth,0,Lt,vt,null):e.texImage2D(nt,j,At,Pt,Vt,0,Lt,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),ht(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,nt,ct.__webglTexture,0,J(b)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,nt,ct.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(C,b,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){let $=b.depthTexture,nt=$&&$.isDepthTexture?$.type:null,j=_(b.stencilBuffer,nt),Lt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=J(b);ht(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt,j,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,j,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,C)}else{let $=b.textures;for(let nt=0;nt<$.length;nt++){let j=$[nt],Lt=r.convert(j.format,j.colorSpace),vt=r.convert(j.type),At=v(j.internalFormat,Lt,vt,j.colorSpace),ne=J(b);H&&ht(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,At,b.width,b.height):ht(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,At,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,At,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);let nt=$.__webglTexture,j=J(b);if(b.depthTexture.format===Ws)ht(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(b.depthTexture.format===Js)ht(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Gt(C){let b=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let $=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",nt)};$.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=$}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ft(b.__webglFramebuffer,C)}else if(H){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=n.createRenderbuffer(),ut(b.__webglDepthbuffer[$],C,!1);else{let nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ut(b.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(C,b,H){let $=i.get(C);b!==void 0&&Rt($.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Gt(C)}function ee(C){let b=C.texture,H=i.get(C),$=i.get(b);C.addEventListener("dispose",P);let nt=C.textures,j=C.isWebGLCubeRenderTarget===!0,Lt=nt.length>1;if(Lt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=b.version,o.memory.textures++),j){H.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[vt]=[];for(let At=0;At<b.mipmaps.length;At++)H.__webglFramebuffer[vt][At]=n.createFramebuffer()}else H.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let vt=0;vt<b.mipmaps.length;vt++)H.__webglFramebuffer[vt]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Lt)for(let vt=0,At=nt.length;vt<At;vt++){let ne=i.get(nt[vt]);ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ht(C)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let vt=0;vt<nt.length;vt++){let At=nt[vt];H.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[vt]);let ne=r.convert(At.format,At.colorSpace),ct=r.convert(At.type),Pt=v(At.internalFormat,ne,ct,At.colorSpace,C.isXRRenderTarget===!0),Vt=J(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Pt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,H.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),zt(n.TEXTURE_CUBE_MAP,b);for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)Rt(H.__webglFramebuffer[vt][At],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At);else Rt(H.__webglFramebuffer[vt],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);g(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let vt=0,At=nt.length;vt<At;vt++){let ne=nt[vt],ct=i.get(ne);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),zt(n.TEXTURE_2D,ne),Rt(H.__webglFramebuffer,C,ne,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,0),g(ne)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,$.__webglTexture),zt(vt,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)Rt(H.__webglFramebuffer[At],C,b,n.COLOR_ATTACHMENT0,vt,At);else Rt(H.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,vt,0);g(b)&&p(vt),e.unbindTexture()}C.depthBuffer&&Gt(C)}function tt(C){let b=C.textures;for(let H=0,$=b.length;H<$;H++){let nt=b[H];if(g(nt)){let j=x(C),Lt=i.get(nt).__webglTexture;e.bindTexture(j,Lt),p(j),e.unbindTexture()}}}let z=[],R=[];function it(C){if(C.samples>0){if(ht(C)===!1){let b=C.textures,H=C.width,$=C.height,nt=n.COLOR_BUFFER_BIT,j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=i.get(C),vt=b.length>1;if(vt)for(let At=0;At<b.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let At=0;At<b.length;At++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),vt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);let ne=i.get(b[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,H,$,0,0,H,$,nt,n.NEAREST),l===!0&&(z.length=0,R.length=0,z.push(n.COLOR_ATTACHMENT0+At),C.depthBuffer&&C.resolveDepthBuffer===!1&&(z.push(j),R.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let At=0;At<b.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);let ne=i.get(b[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,ne,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function J(C){return Math.min(s.maxSamples,C.samples)}function ht(C){let b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function st(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function yt(C,b){let H=C.colorSpace,$=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==cr&&H!==Di&&(oe.getTransfer(H)===me?($!==Fn||nt!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=at,this.setTextureCube=X,this.rebindTextures=Ht,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=ht}function _v(n,t){function e(i,s=Di){let r,o=oe.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===mh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yu)return n.BYTE;if(i===vu)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===ph)return n.INT;if(i===cs)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Gn)return n.HALF_FLOAT;if(i===_u)return n.ALPHA;if(i===Mu)return n.RGB;if(i===Fn)return n.RGBA;if(i===bu)return n.LUMINANCE;if(i===Eu)return n.LUMINANCE_ALPHA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===Js)return n.DEPTH_STENCIL;if(i===Su)return n.RED;if(i===yh)return n.RED_INTEGER;if(i===wu)return n.RG;if(i===vh)return n.RG_INTEGER;if(i===xh)return n.RGBA_INTEGER;if(i===Po||i===Io||i===Lo||i===ko)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zl||i===Kl||i===Jl||i===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ql||i===tc||i===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ql||i===tc)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ec)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===dc||i===uc||i===fc||i===pc||i===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Do||i===gc||i===yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Do)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tu||i===vc||i===xc||i===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Nc=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},dt=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mv={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
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

}`,Oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ye({vertexShader:bv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new Bt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fc=class extends Hi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,y=new Oc,g=e.getContextAttributes(),p=null,x=null,v=[],_=[],T=new Q,S=null,P=new Xe;P.viewport=new _e;let I=new Xe;I.viewport=new _e;let E=[P,I],M=new Nc,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let lt=v[K];return lt===void 0&&(lt=new kr,v[K]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(K){let lt=v[K];return lt===void 0&&(lt=new kr,v[K]=lt),lt.getGripSpace()},this.getHand=function(K){let lt=v[K];return lt===void 0&&(lt=new kr,v[K]=lt),lt.getHandSpace()};function D(K){let lt=_.indexOf(K.inputSource);if(lt===-1)return;let Rt=v[lt];Rt!==void 0&&(Rt.update(K.inputSource,K.frame,c||o),Rt.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",q);for(let K=0;K<v.length;K++){let lt=_[K];lt!==null&&(_[K]=null,v[K].disconnect(lt))}L=null,k=null,y.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,x=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){let lt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new cn(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let lt=null,Rt=null,ut=null;g.depth&&(ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=g.stencil?Js:Ws,Rt=g.stencil?Ks:cs);let Ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new cn(u.textureWidth,u.textureHeight,{format:Fn,type:xi,depthTexture:new $o(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(K){for(let lt=0;lt<K.removed.length;lt++){let Rt=K.removed[lt],ut=_.indexOf(Rt);ut>=0&&(_[ut]=null,v[ut].disconnect(Rt))}for(let lt=0;lt<K.added.length;lt++){let Rt=K.added[lt],ut=_.indexOf(Rt);if(ut===-1){for(let Gt=0;Gt<v.length;Gt++)if(Gt>=_.length){_.push(Rt),ut=Gt;break}else if(_[Gt]===null){_[Gt]=Rt,ut=Gt;break}if(ut===-1)break}let Ft=v[ut];Ft&&Ft.connect(Rt)}}let G=new A,at=new A;function X(K,lt,Rt){G.setFromMatrixPosition(lt.matrixWorld),at.setFromMatrixPosition(Rt.matrixWorld);let ut=G.distanceTo(at),Ft=lt.projectionMatrix.elements,Gt=Rt.projectionMatrix.elements,Ht=Ft[14]/(Ft[10]-1),ee=Ft[14]/(Ft[10]+1),tt=(Ft[9]+1)/Ft[5],z=(Ft[9]-1)/Ft[5],R=(Ft[8]-1)/Ft[0],it=(Gt[8]+1)/Gt[0],J=Ht*R,ht=Ht*it,st=ut/(-R+it),yt=st*-R;if(lt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(yt),K.translateZ(st),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ft[10]===-1)K.projectionMatrix.copy(lt.projectionMatrix),K.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let mt=Ht+st,C=ee+st,b=J-yt,H=ht+(ut-yt),$=tt*ee/C*mt,nt=z*ee/C*mt;K.projectionMatrix.makePerspective(b,H,$,nt,mt,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function pt(K,lt){lt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(lt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let lt=K.near,Rt=K.far;y.texture!==null&&(y.depthNear>0&&(lt=y.depthNear),y.depthFar>0&&(Rt=y.depthFar)),M.near=I.near=P.near=lt,M.far=I.far=P.far=Rt,(L!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),P.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,M.layers.mask=P.layers.mask|I.layers.mask;let ut=K.parent,Ft=M.cameras;pt(M,ut);for(let Gt=0;Gt<Ft.length;Gt++)pt(Ft[Gt],ut);Ft.length===2?X(M,P,I):M.projectionMatrix.copy(P.projectionMatrix),xt(K,M,ut)};function xt(K,lt,Rt){Rt===null?K.matrix.copy(lt.matrixWorld):(K.matrix.copy(Rt.matrixWorld),K.matrix.invert(),K.matrix.multiply(lt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(lt.projectionMatrix),K.projectionMatrixInverse.copy(lt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Oo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let bt=null;function zt(K,lt){if(h=lt.getViewerPose(c||o),m=lt,h!==null){let Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ut=!1;Rt.length!==M.cameras.length&&(M.cameras.length=0,ut=!0);for(let Gt=0;Gt<Rt.length;Gt++){let Ht=Rt[Gt],ee=null;if(f!==null)ee=f.getViewport(Ht);else{let z=d.getViewSubImage(u,Ht);ee=z.viewport,Gt===0&&(t.setRenderTargetTextures(x,z.colorTexture,u.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(x))}let tt=E[Gt];tt===void 0&&(tt=new Xe,tt.layers.enable(Gt),tt.viewport=new _e,E[Gt]=tt),tt.matrix.fromArray(Ht.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Ht.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ee.x,ee.y,ee.width,ee.height),Gt===0&&(M.matrix.copy(tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ut===!0&&M.cameras.push(tt)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let Gt=d.getDepthInformation(Rt[0]);Gt&&Gt.isValid&&Gt.texture&&y.init(t,Gt,s.renderState)}}for(let Rt=0;Rt<v.length;Rt++){let ut=_[Rt],Ft=v[Rt];ut!==null&&Ft!==void 0&&Ft.update(ut,lt,c||o)}bt&&bt(K,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),m=null}let re=new Lu;re.setAnimationLoop(zt),this.setAnimationLoop=function(K){bt=K},this.dispose=function(){}}},ss=new mn,Sv=new ce;function wv(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Iu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=t.get(p),v=x.envMap,_=x.envMapRotation;v&&(g.envMap.value=v,ss.copy(_),ss.x*=-1,ss.y*=-1,ss.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),g.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(ss)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Tv(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let _=v.program;i.uniformBlockBinding(x,_)}function c(x,v){let _=s[x.id];_===void 0&&(m(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",g));let T=v.program;i.updateUBOMapping(x,T);let S=t.render.frame;r[x.id]!==S&&(u(x),r[x.id]=S)}function h(x){let v=d();x.__bindingPointIndex=v;let _=n.createBuffer(),T=x.__size,S=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,T,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let v=s[x.id],_=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let S=0,P=_.length;S<P;S++){let I=Array.isArray(_[S])?_[S]:[_[S]];for(let E=0,M=I.length;E<M;E++){let L=I[E];if(f(L,S,E,T)===!0){let k=L.__offset,D=Array.isArray(L.value)?L.value:[L.value],F=0;for(let q=0;q<D.length;q++){let G=D[q],at=y(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,k+F,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,F),F+=at.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,v,_,T){let S=x.value,P=v+"_"+_;if(T[P]===void 0)return typeof S=="number"||typeof S=="boolean"?T[P]=S:T[P]=S.clone(),!0;{let I=T[P];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return T[P]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function m(x){let v=x.uniforms,_=0,T=16;for(let P=0,I=v.length;P<I;P++){let E=Array.isArray(v[P])?v[P]:[v[P]];for(let M=0,L=E.length;M<L;M++){let k=E[M],D=Array.isArray(k.value)?k.value:[k.value];for(let F=0,q=D.length;F<q;F++){let G=D[F],at=y(G),X=_%T,pt=X%at.boundary,xt=X+pt;_+=pt,xt!==0&&T-xt<at.storage&&(_+=T-xt),k.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=at.storage}}}let S=_%T;return S>0&&(_+=T-S),x.__size=_,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){let v=x.target;v.removeEventListener("dispose",g);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Zo=class{constructor(t={}){let{canvas:e=Ip(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),y=new Int32Array(4),g=null,p=null,x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Ni,this.toneMappingExposure=1;let _=this,T=!1,S=0,P=0,I=null,E=-1,M=null,L=new _e,k=new _e,D=null,F=new Nt(0),q=0,G=e.width,at=e.height,X=1,pt=null,xt=null,bt=new _e(0,0,G,at),zt=new _e(0,0,G,at),re=!1,K=new hs,lt=!1,Rt=!1,ut=new ce,Ft=new ce,Gt=new A,Ht=new _e,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function z(){return I===null?X:1}let R=i;function it(w,N){return e.getContext(w,N)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ah}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),R===null){let N="webgl2";if(R=it(N,w),R===null)throw it(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,ht,st,yt,mt,C,b,H,$,nt,j,Lt,vt,At,ne,ct,Pt,Vt,Xt,It,le,Jt,be,U;function _t(){J=new Gg(R),J.init(),Jt=new _v(R,J),ht=new Ng(R,J,t,Jt),st=new yv(R,J),ht.reverseDepthBuffer&&u&&st.buffers.depth.setReversed(!0),yt=new Xg(R),mt=new sv,C=new xv(R,J,st,mt,ht,Jt,yt),b=new Fg(_),H=new zg(_),$=new jp(R),be=new Dg(R,$),nt=new Vg(R,$,yt,be),j=new Yg(R,nt,$,yt),Xt=new qg(R,ht,C),ct=new Og(mt),Lt=new iv(_,b,H,J,ht,be,ct),vt=new wv(_,mt),At=new ov,ne=new uv(J),Vt=new kg(_,b,H,st,j,f,l),Pt=new mv(_,j,ht),U=new Tv(R,yt,ht,st),It=new Ug(R,J,yt),le=new Wg(R,J,yt),yt.programs=Lt.programs,_.capabilities=ht,_.extensions=J,_.properties=mt,_.renderLists=At,_.shadowMap=Pt,_.state=st,_.info=yt}_t();let Y=new Fc(_,R);this.xr=Y,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(G,at,!1))},this.getSize=function(w){return w.set(G,at)},this.setSize=function(w,N,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,at=N,e.width=Math.floor(w*X),e.height=Math.floor(N*X),V===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(G*X,at*X).floor()},this.setDrawingBufferSize=function(w,N,V){G=w,at=N,X=V,e.width=Math.floor(w*V),e.height=Math.floor(N*V),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(bt)},this.setViewport=function(w,N,V,W){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,N,V,W),st.viewport(L.copy(bt).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(zt)},this.setScissor=function(w,N,V,W){w.isVector4?zt.set(w.x,w.y,w.z,w.w):zt.set(w,N,V,W),st.scissor(k.copy(zt).multiplyScalar(X).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){st.setScissorTest(re=w)},this.setOpaqueSort=function(w){pt=w},this.setTransparentSort=function(w){xt=w},this.getClearColor=function(w){return w.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(w=!0,N=!0,V=!0){let W=0;if(w){let O=!1;if(I!==null){let ft=I.texture.format;O=ft===xh||ft===vh||ft===yh}if(O){let ft=I.texture.type,St=ft===xi||ft===cs||ft===Nr||ft===Ks||ft===mh||ft===gh,kt=Vt.getClearColor(),Dt=Vt.getClearAlpha(),qt=kt.r,Zt=kt.g,Ut=kt.b;St?(m[0]=qt,m[1]=Zt,m[2]=Ut,m[3]=Dt,R.clearBufferuiv(R.COLOR,0,m)):(y[0]=qt,y[1]=Zt,y[2]=Ut,y[3]=Dt,R.clearBufferiv(R.COLOR,0,y))}else W|=R.COLOR_BUFFER_BIT}N&&(W|=R.DEPTH_BUFFER_BIT),V&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),At.dispose(),ne.dispose(),mt.dispose(),b.dispose(),H.dispose(),j.dispose(),be.dispose(),U.dispose(),Lt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Kh),Y.removeEventListener("sessionend",Jh),ji.stop()};function et(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=yt.autoReset,N=Pt.enabled,V=Pt.autoUpdate,W=Pt.needsUpdate,O=Pt.type;_t(),yt.autoReset=w,Pt.enabled=N,Pt.autoUpdate=V,Pt.needsUpdate=W,Pt.type=O}function Et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $t(w){let N=w.target;N.removeEventListener("dispose",$t),Oe(N)}function Oe(w){en(w),mt.remove(w)}function en(w){let N=mt.get(w).programs;N!==void 0&&(N.forEach(function(V){Lt.releaseProgram(V)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,V,W,O,ft){N===null&&(N=ee);let St=O.isMesh&&O.matrixWorld.determinant()<0,kt=Yf(w,N,V,W,O);st.setMaterial(W,St);let Dt=V.index,qt=1;if(W.wireframe===!0){if(Dt=nt.getWireframeAttribute(V),Dt===void 0)return;qt=2}let Zt=V.drawRange,Ut=V.attributes.position,de=Zt.start*qt,Ee=(Zt.start+Zt.count)*qt;ft!==null&&(de=Math.max(de,ft.start*qt),Ee=Math.min(Ee,(ft.start+ft.count)*qt)),Dt!==null?(de=Math.max(de,0),Ee=Math.min(Ee,Dt.count)):Ut!=null&&(de=Math.max(de,0),Ee=Math.min(Ee,Ut.count));let Ae=Ee-de;if(Ae<0||Ae===1/0)return;be.setup(O,W,kt,V,Dt);let fn,fe=It;if(Dt!==null&&(fn=$.get(Dt),fe=le,fe.setIndex(fn)),O.isMesh)W.wireframe===!0?(st.setLineWidth(W.wireframeLinewidth*z()),fe.setMode(R.LINES)):fe.setMode(R.TRIANGLES);else if(O.isLine){let Ot=W.linewidth;Ot===void 0&&(Ot=1),st.setLineWidth(Ot*z()),O.isLineSegments?fe.setMode(R.LINES):O.isLineLoop?fe.setMode(R.LINE_LOOP):fe.setMode(R.LINE_STRIP)}else O.isPoints?fe.setMode(R.POINTS):O.isSprite&&fe.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)fe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))fe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ot=O._multiDrawStarts,ri=O._multiDrawCounts,pe=O._multiDrawCount,Dn=Dt?$.get(Dt).bytesPerElement:1,bs=mt.get(W).currentProgram.getUniforms();for(let yn=0;yn<pe;yn++)bs.setValue(R,"_gl_DrawID",yn),fe.render(Ot[yn]/Dn,ri[yn])}else if(O.isInstancedMesh)fe.renderInstances(de,Ae,O.count);else if(V.isInstancedBufferGeometry){let Ot=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ri=Math.min(V.instanceCount,Ot);fe.renderInstances(de,Ae,ri)}else fe.render(de,Ae)};function ye(w,N,V){w.transparent===!0&&w.side===ke&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,jr(w,N,V),w.side=Fi,w.needsUpdate=!0,jr(w,N,V),w.side=ke):jr(w,N,V)}this.compile=function(w,N,V=null){V===null&&(V=w),p=ne.get(V),p.init(N),v.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==V&&w.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let W=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ft=O.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){let kt=ft[St];ye(kt,V,O),W.add(kt)}else ye(ft,V,O),W.add(ft)}),v.pop(),p=null,W},this.compileAsync=function(w,N,V=null){let W=this.compile(w,N,V);return new Promise(O=>{function ft(){if(W.forEach(function(St){mt.get(St).currentProgram.isReady()&&W.delete(St)}),W.size===0){O(w);return}setTimeout(ft,10)}J.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let kn=null;function si(w){kn&&kn(w)}function Kh(){ji.stop()}function Jh(){ji.start()}let ji=new Lu;ji.setAnimationLoop(si),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(w){kn=w,Y.setAnimationLoop(w),w===null?ji.stop():ji.start()},Y.addEventListener("sessionstart",Kh),Y.addEventListener("sessionend",Jh),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,N,I),p=ne.get(w,v.length),p.init(N),v.push(p),Ft.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Ft),Rt=this.localClippingEnabled,lt=ct.init(this.clippingPlanes,Rt),g=At.get(w,x.length),g.init(),x.push(g),Y.enabled===!0&&Y.isPresenting===!0){let ft=_.xr.getDepthSensingMesh();ft!==null&&tl(ft,N,-1/0,_.sortObjects)}tl(w,N,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(pt,xt),tt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,tt&&Vt.addToRenderList(g,w),this.info.render.frame++,lt===!0&&ct.beginShadows();let V=p.state.shadowsArray;Pt.render(V,w,N),lt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,O=g.transmissive;if(p.setupLights(),N.isArrayCamera){let ft=N.cameras;if(O.length>0)for(let St=0,kt=ft.length;St<kt;St++){let Dt=ft[St];Qh(W,O,w,Dt)}tt&&Vt.render(w);for(let St=0,kt=ft.length;St<kt;St++){let Dt=ft[St];jh(g,w,Dt,Dt.viewport)}}else O.length>0&&Qh(W,O,w,N),tt&&Vt.render(w),jh(g,w,N);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(_,w,N),be.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],lt===!0&&ct.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function tl(w,N,V,W){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){W&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ft);let St=j.update(w),kt=w.material;kt.visible&&g.push(w,St,kt,V,Ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){let St=j.update(w),kt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ht.copy(St.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(Ft)),Array.isArray(kt)){let Dt=St.groups;for(let qt=0,Zt=Dt.length;qt<Zt;qt++){let Ut=Dt[qt],de=kt[Ut.materialIndex];de&&de.visible&&g.push(w,St,de,V,Ht.z,Ut)}}else kt.visible&&g.push(w,St,kt,V,Ht.z,null)}}let ft=w.children;for(let St=0,kt=ft.length;St<kt;St++)tl(ft[St],N,V,W)}function jh(w,N,V,W){let O=w.opaque,ft=w.transmissive,St=w.transparent;p.setupLightsView(V),lt===!0&&ct.setGlobalState(_.clippingPlanes,V),W&&st.viewport(L.copy(W)),O.length>0&&Jr(O,N,V),ft.length>0&&Jr(ft,N,V),St.length>0&&Jr(St,N,V),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Qh(w,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new cn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Gn:xi,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let ft=p.state.transmissionRenderTarget[W.id],St=W.viewport||L;ft.setSize(St.z,St.w);let kt=_.getRenderTarget();_.setRenderTarget(ft),_.getClearColor(F),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),tt&&Vt.render(V);let Dt=_.toneMapping;_.toneMapping=Ni;let qt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),lt===!0&&ct.setGlobalState(_.clippingPlanes,W),Jr(w,V,W),C.updateMultisampleRenderTarget(ft),C.updateRenderTargetMipmap(ft),J.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ut=0,de=N.length;Ut<de;Ut++){let Ee=N[Ut],Ae=Ee.object,fn=Ee.geometry,fe=Ee.material,Ot=Ee.group;if(fe.side===ke&&Ae.layers.test(W.layers)){let ri=fe.side;fe.side=pn,fe.needsUpdate=!0,td(Ae,V,W,fn,fe,Ot),fe.side=ri,fe.needsUpdate=!0,Zt=!0}}Zt===!0&&(C.updateMultisampleRenderTarget(ft),C.updateRenderTargetMipmap(ft))}_.setRenderTarget(kt),_.setClearColor(F,q),qt!==void 0&&(W.viewport=qt),_.toneMapping=Dt}function Jr(w,N,V){let W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ft=w.length;O<ft;O++){let St=w[O],kt=St.object,Dt=St.geometry,qt=W===null?St.material:W,Zt=St.group;kt.layers.test(V.layers)&&td(kt,N,V,Dt,qt,Zt)}}function td(w,N,V,W,O,ft){w.onBeforeRender(_,N,V,W,O,ft),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(_,N,V,W,w,ft),O.transparent===!0&&O.side===ke&&O.forceSinglePass===!1?(O.side=pn,O.needsUpdate=!0,_.renderBufferDirect(V,N,W,O,w,ft),O.side=Fi,O.needsUpdate=!0,_.renderBufferDirect(V,N,W,O,w,ft),O.side=ke):_.renderBufferDirect(V,N,W,O,w,ft),w.onAfterRender(_,N,V,W,O,ft)}function jr(w,N,V){N.isScene!==!0&&(N=ee);let W=mt.get(w),O=p.state.lights,ft=p.state.shadowsArray,St=O.state.version,kt=Lt.getParameters(w,O.state,ft,N,V),Dt=Lt.getProgramCacheKey(kt),qt=W.programs;W.environment=w.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(w.isMeshStandardMaterial?H:b).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,qt===void 0&&(w.addEventListener("dispose",$t),qt=new Map,W.programs=qt);let Zt=qt.get(Dt);if(Zt!==void 0){if(W.currentProgram===Zt&&W.lightsStateVersion===St)return nd(w,kt),Zt}else kt.uniforms=Lt.getUniforms(w),w.onBeforeCompile(kt,_),Zt=Lt.acquireProgram(kt,Dt),qt.set(Dt,Zt),W.uniforms=kt.uniforms;let Ut=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ut.clippingPlanes=ct.uniform),nd(w,kt),W.needsLights=Zf(w),W.lightsStateVersion=St,W.needsLights&&(Ut.ambientLightColor.value=O.state.ambient,Ut.lightProbe.value=O.state.probe,Ut.directionalLights.value=O.state.directional,Ut.directionalLightShadows.value=O.state.directionalShadow,Ut.spotLights.value=O.state.spot,Ut.spotLightShadows.value=O.state.spotShadow,Ut.rectAreaLights.value=O.state.rectArea,Ut.ltc_1.value=O.state.rectAreaLTC1,Ut.ltc_2.value=O.state.rectAreaLTC2,Ut.pointLights.value=O.state.point,Ut.pointLightShadows.value=O.state.pointShadow,Ut.hemisphereLights.value=O.state.hemi,Ut.directionalShadowMap.value=O.state.directionalShadowMap,Ut.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ut.spotShadowMap.value=O.state.spotShadowMap,Ut.spotLightMatrix.value=O.state.spotLightMatrix,Ut.spotLightMap.value=O.state.spotLightMap,Ut.pointShadowMap.value=O.state.pointShadowMap,Ut.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Zt,W.uniformsList=null,Zt}function ed(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=qs.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function nd(w,N){let V=mt.get(w);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Yf(w,N,V,W,O){N.isScene!==!0&&(N=ee),C.resetTextureUnits();let ft=N.fog,St=W.isMeshStandardMaterial?N.environment:null,kt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:cr,Dt=(W.isMeshStandardMaterial?H:b).get(W.envMap||St),qt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Zt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!V.morphAttributes.position,de=!!V.morphAttributes.normal,Ee=!!V.morphAttributes.color,Ae=Ni;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ae=_.toneMapping);let fn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,fe=fn!==void 0?fn.length:0,Ot=mt.get(W),ri=p.state.lights;if(lt===!0&&(Rt===!0||w!==M)){let wn=w===M&&W.id===E;ct.setState(W,w,wn)}let pe=!1;W.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==ri.state.version||Ot.outputColorSpace!==kt||O.isBatchedMesh&&Ot.batching===!1||!O.isBatchedMesh&&Ot.batching===!0||O.isBatchedMesh&&Ot.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ot.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ot.instancing===!1||!O.isInstancedMesh&&Ot.instancing===!0||O.isSkinnedMesh&&Ot.skinning===!1||!O.isSkinnedMesh&&Ot.skinning===!0||O.isInstancedMesh&&Ot.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ot.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ot.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ot.instancingMorph===!1&&O.morphTexture!==null||Ot.envMap!==Dt||W.fog===!0&&Ot.fog!==ft||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ct.numPlanes||Ot.numIntersection!==ct.numIntersection)||Ot.vertexAlphas!==qt||Ot.vertexTangents!==Zt||Ot.morphTargets!==Ut||Ot.morphNormals!==de||Ot.morphColors!==Ee||Ot.toneMapping!==Ae||Ot.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Ot.__version=W.version);let Dn=Ot.currentProgram;pe===!0&&(Dn=jr(W,N,O));let bs=!1,yn=!1,Mr=!1,Re=Dn.getUniforms(),Yn=Ot.uniforms;if(st.useProgram(Dn.program)&&(bs=!0,yn=!0,Mr=!0),W.id!==E&&(E=W.id,yn=!0),bs||M!==w){st.buffers.depth.getReversed()?(ut.copy(w.projectionMatrix),kp(ut),Dp(ut),Re.setValue(R,"projectionMatrix",ut)):Re.setValue(R,"projectionMatrix",w.projectionMatrix),Re.setValue(R,"viewMatrix",w.matrixWorldInverse);let Ti=Re.map.cameraPosition;Ti!==void 0&&Ti.setValue(R,Gt.setFromMatrixPosition(w.matrixWorld)),ht.logarithmicDepthBuffer&&Re.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Re.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,yn=!0,Mr=!0)}if(O.isSkinnedMesh){Re.setOptional(R,O,"bindMatrix"),Re.setOptional(R,O,"bindMatrixInverse");let wn=O.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Re.setValue(R,"boneTexture",wn.boneTexture,C))}O.isBatchedMesh&&(Re.setOptional(R,O,"batchingTexture"),Re.setValue(R,"batchingTexture",O._matricesTexture,C),Re.setOptional(R,O,"batchingIdTexture"),Re.setValue(R,"batchingIdTexture",O._indirectTexture,C),Re.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&Re.setValue(R,"batchingColorTexture",O._colorsTexture,C));let br=V.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0)&&Xt.update(O,V,Dn),(yn||Ot.receiveShadow!==O.receiveShadow)&&(Ot.receiveShadow=O.receiveShadow,Re.setValue(R,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Yn.envMap.value=Dt,Yn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Yn.envMapIntensity.value=N.environmentIntensity),yn&&(Re.setValue(R,"toneMappingExposure",_.toneMappingExposure),Ot.needsLights&&$f(Yn,Mr),ft&&W.fog===!0&&vt.refreshFogUniforms(Yn,ft),vt.refreshMaterialUniforms(Yn,W,X,at,p.state.transmissionRenderTarget[w.id]),qs.upload(R,ed(Ot),Yn,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(qs.upload(R,ed(Ot),Yn,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Re.setValue(R,"center",O.center),Re.setValue(R,"modelViewMatrix",O.modelViewMatrix),Re.setValue(R,"normalMatrix",O.normalMatrix),Re.setValue(R,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let wn=W.uniformsGroups;for(let Ti=0,Ai=wn.length;Ti<Ai;Ti++){let id=wn[Ti];U.update(id,Dn),U.bind(id,Dn)}}return Dn}function $f(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Zf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,N,V){mt.get(w.texture).__webglTexture=N,mt.get(w.depthTexture).__webglTexture=V;let W=mt.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let V=mt.get(w);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,V=0){I=w,S=N,P=V;let W=!0,O=null,ft=!1,St=!1;if(w){let Dt=mt.get(w);if(Dt.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(R.FRAMEBUFFER,null),W=!1;else if(Dt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Dt.__hasExternalTextures)C.rebindTextures(w,mt.get(w.texture).__webglTexture,mt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ut=w.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&mt.has(Ut)&&(w.width!==Ut.image.width||w.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let qt=w.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(St=!0);let Zt=mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[N])?O=Zt[N][V]:O=Zt[N],ft=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?O=mt.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?O=Zt[V]:O=Zt,L.copy(w.viewport),k.copy(w.scissor),D=w.scissorTest}else L.copy(bt).multiplyScalar(X).floor(),k.copy(zt).multiplyScalar(X).floor(),D=re;if(st.bindFramebuffer(R.FRAMEBUFFER,O)&&W&&st.drawBuffers(w,O),st.viewport(L),st.scissor(k),st.setScissorTest(D),ft){let Dt=mt.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Dt.__webglTexture,V)}else if(St){let Dt=mt.get(w.texture),qt=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dt.__webglTexture,V||0,qt)}E=-1},this.readRenderTargetPixels=function(w,N,V,W,O,ft,St){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(kt=kt[St]),kt){st.bindFramebuffer(R.FRAMEBUFFER,kt);try{let Dt=w.texture,qt=Dt.format,Zt=Dt.type;if(!ht.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-W&&V>=0&&V<=w.height-O&&R.readPixels(N,V,W,O,Jt.convert(qt),Jt.convert(Zt),ft)}finally{let Dt=I!==null?mt.get(I).__webglFramebuffer:null;st.bindFramebuffer(R.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(w,N,V,W,O,ft,St){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(kt=kt[St]),kt){let Dt=w.texture,qt=Dt.format,Zt=Dt.type;if(!ht.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-W&&V>=0&&V<=w.height-O){st.bindFramebuffer(R.FRAMEBUFFER,kt);let Ut=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ut),R.bufferData(R.PIXEL_PACK_BUFFER,ft.byteLength,R.STREAM_READ),R.readPixels(N,V,W,O,Jt.convert(qt),Jt.convert(Zt),0);let de=I!==null?mt.get(I).__webglFramebuffer:null;st.bindFramebuffer(R.FRAMEBUFFER,de);let Ee=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Lp(R,Ee,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ut),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ft),R.deleteBuffer(Ut),R.deleteSync(Ee),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,V=0){w.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-V),O=Math.floor(w.image.width*W),ft=Math.floor(w.image.height*W),St=N!==null?N.x:0,kt=N!==null?N.y:0;C.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,St,kt,O,ft),st.unbindTexture()},this.copyTextureToTexture=function(w,N,V=null,W=null,O=0){w.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],N=arguments[2],O=arguments[3]||0,V=null);let ft,St,kt,Dt,qt,Zt,Ut,de,Ee,Ae=w.isCompressedTexture?w.mipmaps[O]:w.image;V!==null?(ft=V.max.x-V.min.x,St=V.max.y-V.min.y,kt=V.isBox3?V.max.z-V.min.z:1,Dt=V.min.x,qt=V.min.y,Zt=V.isBox3?V.min.z:0):(ft=Ae.width,St=Ae.height,kt=Ae.depth||1,Dt=0,qt=0,Zt=0),W!==null?(Ut=W.x,de=W.y,Ee=W.z):(Ut=0,de=0,Ee=0);let fn=Jt.convert(N.format),fe=Jt.convert(N.type),Ot;N.isData3DTexture?(C.setTexture3D(N,0),Ot=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Ot=R.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Ot=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let ri=R.getParameter(R.UNPACK_ROW_LENGTH),pe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Dn=R.getParameter(R.UNPACK_SKIP_PIXELS),bs=R.getParameter(R.UNPACK_SKIP_ROWS),yn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ae.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ae.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Dt),R.pixelStorei(R.UNPACK_SKIP_ROWS,qt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Zt);let Mr=w.isDataArrayTexture||w.isData3DTexture,Re=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Yn=mt.get(w),br=mt.get(N),wn=mt.get(Yn.__renderTarget),Ti=mt.get(br.__renderTarget);st.bindFramebuffer(R.READ_FRAMEBUFFER,wn.__webglFramebuffer),st.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ai=0;Ai<kt;Ai++)Mr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,mt.get(w).__webglTexture,O,Zt+Ai),w.isDepthTexture?(Re&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,mt.get(N).__webglTexture,O,Ee+Ai),R.blitFramebuffer(Dt,qt,ft,St,Ut,de,ft,St,R.DEPTH_BUFFER_BIT,R.NEAREST)):Re?R.copyTexSubImage3D(Ot,O,Ut,de,Ee+Ai,Dt,qt,ft,St):R.copyTexSubImage2D(Ot,O,Ut,de,Ee+Ai,Dt,qt,ft,St);st.bindFramebuffer(R.READ_FRAMEBUFFER,null),st.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Re?w.isDataTexture||w.isData3DTexture?R.texSubImage3D(Ot,O,Ut,de,Ee,ft,St,kt,fn,fe,Ae.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Ot,O,Ut,de,Ee,ft,St,kt,fn,Ae.data):R.texSubImage3D(Ot,O,Ut,de,Ee,ft,St,kt,fn,fe,Ae):w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,O,Ut,de,ft,St,fn,fe,Ae.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,O,Ut,de,Ae.width,Ae.height,fn,Ae.data):R.texSubImage2D(R.TEXTURE_2D,O,Ut,de,ft,St,fn,fe,Ae);R.pixelStorei(R.UNPACK_ROW_LENGTH,ri),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Dn),R.pixelStorei(R.UNPACK_SKIP_ROWS,bs),R.pixelStorei(R.UNPACK_SKIP_IMAGES,yn),O===0&&N.generateMipmaps&&R.generateMipmap(Ot),st.unbindTexture()},this.copyTextureToTexture3D=function(w,N,V=null,W=null,O=0){return w.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,w=arguments[2],N=arguments[3],O=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,V,W,O)},this.initRenderTarget=function(w){mt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),st.unbindTexture()},this.resetState=function(){S=0,P=0,I=null,st.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}},tr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},er=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},nr=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ko=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new A,Or=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ds=class extends Mi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Os,Ar=new A,Fs=new A,Hs=new A,Bs=new Q,Rr=new Q,Ou=new ce,Mo=new A,Cr=new A,bo=new A,nu=new Q,Il=new Q,iu=new Q,ir=class extends qe{constructor(t=new ds){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ko(e,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new Or(i,3,0,!1)),Os.setAttribute("uv",new Or(i,2,3,!1))}this.geometry=Os,this.material=t,this.center=new Q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Hs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Eo(Mo.set(-.5,-.5,0),Hs,o,Fs,s,r),Eo(Cr.set(.5,-.5,0),Hs,o,Fs,s,r),Eo(bo.set(.5,.5,0),Hs,o,Fs,s,r),nu.set(0,0),Il.set(1,0),iu.set(1,1);let a=t.ray.intersectTriangle(Mo,Cr,bo,!1,Ar);if(a===null&&(Eo(Cr.set(-.5,.5,0),Hs,o,Fs,s,r),Il.set(0,1),a=t.ray.intersectTriangle(Mo,bo,Cr,!1,Ar),a===null))return;let l=t.ray.origin.distanceTo(Ar);l<t.near||l>t.far||e.push({distance:l,point:Ar.clone(),uv:Ui.getInterpolation(Ar,Mo,Cr,bo,nu,Il,iu,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Eo(n,t,e,i,s,r){Bs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Rr.x=r*Bs.x-s*Bs.y,Rr.y=s*Bs.x+r*Bs.y):Rr.copy(Bs),n.copy(t),n.x+=Rr.x,n.y+=Rr.y,n.applyMatrix4(Ou)}var Fr=class extends Mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},su=new ce,Hc=new zo,So=new Bi,wo=new A,Jo=class extends qe{constructor(t=new Ce,e=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;su.copy(s).invert(),Hc.copy(t.ray).applyMatrix4(su);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,y=f;m<y;m++){let g=c.getX(m);wo.fromBufferAttribute(d,g),ru(wo,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,y=f;m<y;m++)wo.fromBufferAttribute(d,m),ru(wo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ru(n,t,e,i,s,r,o){let a=Hc.distanceSqToPoint(n);if(a<e){let l=new A;Hc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Bn=class extends Mn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Q:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new A,s=[],r=[],o=[],a=new A,l=new ce;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(tn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(tn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hr=class extends Rn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Q){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bc=class extends Hr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var To=new A,Ll=new Mh,kl=new Mh,Dl=new Mh,zc=class extends Rn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new A){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(To.subVectors(s[0],s[1]).add(s[0]),c=To);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(To.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=To),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Ll.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,y,g),kl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,y,g),Dl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),kl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Dl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ll.calc(l),kl.calc(l),Dl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ou(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Av(n,t){let e=1-n;return e*e*t}function Rv(n,t){return 2*(1-n)*n*t}function Cv(n,t){return n*n*t}function Dr(n,t,e,i){return Av(n,t)+Rv(n,e)+Cv(n,i)}function Pv(n,t){let e=1-n;return e*e*e*t}function Iv(n,t){let e=1-n;return 3*e*e*n*t}function Lv(n,t){return 3*(1-n)*n*n*t}function kv(n,t){return n*n*n*t}function Ur(n,t,e,i,s){return Pv(n,t)+Iv(n,e)+Lv(n,i)+kv(n,s)}var jo=class extends Rn{constructor(t=new Q,e=new Q,i=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Q){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ur(t,s.x,r.x,o.x,a.x),Ur(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Gc=class extends Rn{constructor(t=new A,e=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ur(t,s.x,r.x,o.x,a.x),Ur(t,s.y,r.y,o.y,a.y),Ur(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends Rn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vc=class extends Rn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends Rn{constructor(t=new Q,e=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Q){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sr=class extends Rn{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y),Dr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(ou(a,l.x,c.x,h.x,d.x),ou(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Q().fromArray(s))}return this}},na=Object.freeze({__proto__:null,ArcCurve:Bc,CatmullRomCurve3:zc,CubicBezierCurve:jo,CubicBezierCurve3:Gc,EllipseCurve:Hr,LineCurve:Qo,LineCurve3:Vc,QuadraticBezierCurve:ta,QuadraticBezierCurve3:sr,SplineCurve:ea}),Wc=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new na[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new na[s.type]().fromJSON(s))}return this}},bi=class extends Wc{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Qo(this.currentPoint.clone(),new Q(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ta(this.currentPoint.clone(),new Q(t,e),new Q(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new jo(this.currentPoint.clone(),new Q(t,e),new Q(i,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ea(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Hr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Br=class n extends Ce{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=tn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new A,u=new Q,f=new A,m=new A,y=new A,g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(m)}for(let x=0;x<=e;x++){let v=i+x*h*s,_=Math.sin(v),T=Math.cos(v);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*_,d.y=t[S].y,d.z=t[S].x*T,o.push(d.x,d.y,d.z),u.x=x/e,u.y=S/(t.length-1),a.push(u.x,u.y);let P=l[3*S+0]*_,I=l[3*S+1],E=l[3*S+0]*T;c.push(P,I,E)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){let _=v+x*t.length,T=_,S=_+t.length,P=_+t.length+1,I=_+1;r.push(T,S,I),r.push(P,I,S)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Cn=class n extends Br{constructor(t=1,e=1,i=4,s=8){let r=new bi;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},Ei=class n extends Ce{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},se=class n extends Ce{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,y=[],g=i/2,p=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function x(){let _=new A,T=new A,S=0,P=(e-t)/i;for(let I=0;I<=r;I++){let E=[],M=I/r,L=M*(e-t)+t;for(let k=0;k<=s;k++){let D=k/s,F=D*l+a,q=Math.sin(F),G=Math.cos(F);T.x=L*q,T.y=-M*i+g,T.z=L*G,d.push(T.x,T.y,T.z),_.set(q,P,G).normalize(),u.push(_.x,_.y,_.z),f.push(D,1-M),E.push(m++)}y.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){let M=y[E][I],L=y[E+1][I],k=y[E+1][I+1],D=y[E][I+1];(t>0||E!==0)&&(h.push(M,L,D),S+=3),(e>0||E!==r-1)&&(h.push(L,k,D),S+=3)}c.addGroup(p,S,0),p+=S}function v(_){let T=m,S=new Q,P=new A,I=0,E=_===!0?t:e,M=_===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*M,0),u.push(0,M,0),f.push(.5,.5),m++;let L=m;for(let k=0;k<=s;k++){let F=k/s*l+a,q=Math.cos(F),G=Math.sin(F);P.x=E*G,P.y=g*M,P.z=E*q,d.push(P.x,P.y,P.z),u.push(0,M,0),S.x=q*.5+.5,S.y=G*.5*M+.5,f.push(S.x,S.y),m++}for(let k=0;k<s;k++){let D=T+k,F=L+k;_===!0?h.push(F,F+1,D):h.push(F+1,F,D),I+=3}c.addGroup(p,I,_===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hn=class n extends se{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xc=class n extends Ce{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let v=new A,_=new A,T=new A;for(let S=0;S<e.length;S+=3)f(e[S+0],v),f(e[S+1],_),f(e[S+2],T),l(v,_,T,x)}function l(x,v,_,T){let S=T+1,P=[];for(let I=0;I<=S;I++){P[I]=[];let E=x.clone().lerp(_,I/S),M=v.clone().lerp(_,I/S),L=S-I;for(let k=0;k<=L;k++)k===0&&I===S?P[I][k]=E:P[I][k]=E.clone().lerp(M,k/L)}for(let I=0;I<S;I++)for(let E=0;E<2*(S-I)-1;E++){let M=Math.floor(E/2);E%2===0?(u(P[I][M+1]),u(P[I+1][M]),u(P[I][M])):(u(P[I][M+1]),u(P[I+1][M+1]),u(P[I+1][M]))}}function c(x){let v=new A;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(x),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let x=new A;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let _=g(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;o.push(_,1-T)}m(),d()}function d(){for(let x=0;x<o.length;x+=6){let v=o[x+0],_=o[x+2],T=o[x+4],S=Math.max(v,_,T),P=Math.min(v,_,T);S>.9&&P<.1&&(v<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,v){let _=x*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function m(){let x=new A,v=new A,_=new A,T=new A,S=new Q,P=new Q,I=new Q;for(let E=0,M=0;E<r.length;E+=9,M+=6){x.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),S.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),T.copy(x).add(v).add(_).divideScalar(3);let L=g(T);y(S,M+0,x,L),y(P,M+2,v,L),y(I,M+4,_,L)}}function y(x,v,_,T){T<0&&x.x===1&&(o[v]=x.x-1),_.x===0&&_.z===0&&(o[v]=T/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},ia=class n extends Xc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var jn=class extends bi{constructor(t){super(t),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new bi().fromJSON(s))}return this}},Dv={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Fu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(i&&(r=Hv(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let m=e;m<s;m+=e)d=n[m],u=n[m+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return zr(r,o,e,a,l,f,0),o}};function Fu(n,t,e,i,s){let r,o;if(s===Kv(n,t,e,i)>0)for(r=t;r<e;r+=i)o=au(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=au(r,n[r],n[r+1],o);return o&&fa(o,o.next)&&(Vr(o),o=o.next),o}function us(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(fa(e,e.next)||De(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function zr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Wv(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Nv(n,i,s,r):Uv(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Vr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Ov(us(n),t,e),zr(n,t,e,i,s,r,2)):o===2&&Fv(n,t,e,i,s,r):zr(us(n),t,e,i,s,r,1);break}}}function Uv(n){let t=n.prev,e=n,i=n.next;if(De(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Gs(s,a,r,l,o,c,m.x,m.y)&&De(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Nv(n,t,e,i){let s=n.prev,r=n,o=n.next;if(De(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,y=a>l?a>c?a:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,p=qc(f,m,t,e,i),x=qc(y,g,t,e,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=p&&_&&_.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Gs(a,h,l,d,c,u,v.x,v.y)&&De(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Gs(a,h,l,d,c,u,_.x,_.y)&&De(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Gs(a,h,l,d,c,u,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Gs(a,h,l,d,c,u,_.x,_.y)&&De(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ov(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!fa(s,r)&&Hu(s,i,i.next,r)&&Gr(s,r)&&Gr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Vr(i),Vr(i.next),i=n=r),i=i.next}while(i!==n);return us(i)}function Fv(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yv(o,a)){let l=Bu(o,a);o=us(o,o.next),l=us(l,l.next),zr(o,t,e,i,s,r,0),zr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Hv(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Fu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(qv(c));for(s.sort(Bv),r=0;r<s.length;r++)e=zv(s[r],e);return e}function Bv(n,t){return n.x-t.x}function zv(n,t){let e=Gv(n,t);if(!e)return t;let i=Bu(e,n);return us(i,i.next),us(e,e.next)}function Gv(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Gs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Gr(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Vv(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Vv(n,t){return De(n.prev,n,t.prev)<0&&De(t.next,n,n.next)<0}function Wv(n,t,e,i){let s=n;do s.z===0&&(s.z=qc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Xv(s)}function Xv(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function qc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function qv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Gs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Yv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!$v(n,t)&&(Gr(n,t)&&Gr(t,n)&&Zv(n,t)&&(De(n.prev,n,t.prev)||De(n,t.prev,t))||fa(n,t)&&De(n.prev,n,n.next)>0&&De(t.prev,t,t.next)>0)}function De(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function fa(n,t){return n.x===t.x&&n.y===t.y}function Hu(n,t,e,i){let s=Ro(De(n,t,e)),r=Ro(De(n,t,i)),o=Ro(De(e,i,n)),a=Ro(De(e,i,t));return!!(s!==r&&o!==a||s===0&&Ao(n,e,t)||r===0&&Ao(n,i,t)||o===0&&Ao(e,n,i)||a===0&&Ao(e,t,i))}function Ao(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ro(n){return n>0?1:n<0?-1:0}function $v(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Hu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Gr(n,t){return De(n.prev,n,n.next)<0?De(n,t,n.next)>=0&&De(n,n.prev,t)>=0:De(n,t,n.prev)<0||De(n,n.next,t)<0}function Zv(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Bu(n,t){let e=new Yc(n.i,n.x,n.y),i=new Yc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function au(n,t,e,i){let s=new Yc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Oi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];lu(t),cu(i,t);let o=t.length;e.forEach(lu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,cu(i,e[l]);let a=Dv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function lu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function cu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var rr=class n extends Ce{constructor(t=new jn([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Jv,v,_=!1,T,S,P,I;p&&(v=p.getSpacedPoints(h),_=!0,u=!1,T=p.computeFrenetFrames(h,!1),S=new A,P=new A,I=new A),u||(g=0,f=0,m=0,y=0);let E=a.extractPoints(c),M=E.shape,L=E.holes;if(!Oi.isClockWise(M)){M=M.reverse();for(let tt=0,z=L.length;tt<z;tt++){let R=L[tt];Oi.isClockWise(R)&&(L[tt]=R.reverse())}}let D=Oi.triangulateShape(M,L),F=M;for(let tt=0,z=L.length;tt<z;tt++){let R=L[tt];M=M.concat(R)}function q(tt,z,R){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(z,R)}let G=M.length,at=D.length;function X(tt,z,R){let it,J,ht,st=tt.x-z.x,yt=tt.y-z.y,mt=R.x-tt.x,C=R.y-tt.y,b=st*st+yt*yt,H=st*C-yt*mt;if(Math.abs(H)>Number.EPSILON){let $=Math.sqrt(b),nt=Math.sqrt(mt*mt+C*C),j=z.x-yt/$,Lt=z.y+st/$,vt=R.x-C/nt,At=R.y+mt/nt,ne=((vt-j)*C-(At-Lt)*mt)/(st*C-yt*mt);it=j+st*ne-tt.x,J=Lt+yt*ne-tt.y;let ct=it*it+J*J;if(ct<=2)return new Q(it,J);ht=Math.sqrt(ct/2)}else{let $=!1;st>Number.EPSILON?mt>Number.EPSILON&&($=!0):st<-Number.EPSILON?mt<-Number.EPSILON&&($=!0):Math.sign(yt)===Math.sign(C)&&($=!0),$?(it=-yt,J=st,ht=Math.sqrt(b)):(it=st,J=yt,ht=Math.sqrt(b/2))}return new Q(it/ht,J/ht)}let pt=[];for(let tt=0,z=F.length,R=z-1,it=tt+1;tt<z;tt++,R++,it++)R===z&&(R=0),it===z&&(it=0),pt[tt]=X(F[tt],F[R],F[it]);let xt=[],bt,zt=pt.concat();for(let tt=0,z=L.length;tt<z;tt++){let R=L[tt];bt=[];for(let it=0,J=R.length,ht=J-1,st=it+1;it<J;it++,ht++,st++)ht===J&&(ht=0),st===J&&(st=0),bt[it]=X(R[it],R[ht],R[st]);xt.push(bt),zt=zt.concat(bt)}for(let tt=0;tt<g;tt++){let z=tt/g,R=f*Math.cos(z*Math.PI/2),it=m*Math.sin(z*Math.PI/2)+y;for(let J=0,ht=F.length;J<ht;J++){let st=q(F[J],pt[J],it);ut(st.x,st.y,-R)}for(let J=0,ht=L.length;J<ht;J++){let st=L[J];bt=xt[J];for(let yt=0,mt=st.length;yt<mt;yt++){let C=q(st[yt],bt[yt],it);ut(C.x,C.y,-R)}}}let re=m+y;for(let tt=0;tt<G;tt++){let z=u?q(M[tt],zt[tt],re):M[tt];_?(P.copy(T.normals[0]).multiplyScalar(z.x),S.copy(T.binormals[0]).multiplyScalar(z.y),I.copy(v[0]).add(P).add(S),ut(I.x,I.y,I.z)):ut(z.x,z.y,0)}for(let tt=1;tt<=h;tt++)for(let z=0;z<G;z++){let R=u?q(M[z],zt[z],re):M[z];_?(P.copy(T.normals[tt]).multiplyScalar(R.x),S.copy(T.binormals[tt]).multiplyScalar(R.y),I.copy(v[tt]).add(P).add(S),ut(I.x,I.y,I.z)):ut(R.x,R.y,d/h*tt)}for(let tt=g-1;tt>=0;tt--){let z=tt/g,R=f*Math.cos(z*Math.PI/2),it=m*Math.sin(z*Math.PI/2)+y;for(let J=0,ht=F.length;J<ht;J++){let st=q(F[J],pt[J],it);ut(st.x,st.y,d+R)}for(let J=0,ht=L.length;J<ht;J++){let st=L[J];bt=xt[J];for(let yt=0,mt=st.length;yt<mt;yt++){let C=q(st[yt],bt[yt],it);_?ut(C.x,C.y+v[h-1].y,v[h-1].x+R):ut(C.x,C.y,d+R)}}}K(),lt();function K(){let tt=s.length/3;if(u){let z=0,R=G*z;for(let it=0;it<at;it++){let J=D[it];Ft(J[2]+R,J[1]+R,J[0]+R)}z=h+g*2,R=G*z;for(let it=0;it<at;it++){let J=D[it];Ft(J[0]+R,J[1]+R,J[2]+R)}}else{for(let z=0;z<at;z++){let R=D[z];Ft(R[2],R[1],R[0])}for(let z=0;z<at;z++){let R=D[z];Ft(R[0]+G*h,R[1]+G*h,R[2]+G*h)}}i.addGroup(tt,s.length/3-tt,0)}function lt(){let tt=s.length/3,z=0;Rt(F,z),z+=F.length;for(let R=0,it=L.length;R<it;R++){let J=L[R];Rt(J,z),z+=J.length}i.addGroup(tt,s.length/3-tt,1)}function Rt(tt,z){let R=tt.length;for(;--R>=0;){let it=R,J=R-1;J<0&&(J=tt.length-1);for(let ht=0,st=h+g*2;ht<st;ht++){let yt=G*ht,mt=G*(ht+1),C=z+it+yt,b=z+J+yt,H=z+J+mt,$=z+it+mt;Gt(C,b,H,$)}}}function ut(tt,z,R){l.push(tt),l.push(z),l.push(R)}function Ft(tt,z,R){Ht(tt),Ht(z),Ht(R);let it=s.length/3,J=x.generateTopUV(i,s,it-3,it-2,it-1);ee(J[0]),ee(J[1]),ee(J[2])}function Gt(tt,z,R,it){Ht(tt),Ht(z),Ht(it),Ht(z),Ht(R),Ht(it);let J=s.length/3,ht=x.generateSideWallUV(i,s,J-6,J-3,J-2,J-1);ee(ht[0]),ee(ht[1]),ee(ht[3]),ee(ht[1]),ee(ht[2]),ee(ht[3])}function Ht(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function ee(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return jv(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new na[s.type]().fromJSON(s)),new n(i,t.options)}},Jv={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],y=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-d),new Q(u,1-m),new Q(y,1-p)]:[new Q(a,1-l),new Q(h,1-d),new Q(f,1-m),new Q(g,1-p)]}};function jv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var sa=class n extends Ce{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new A,m=new Q;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let p=r+g/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let y=0;y<s;y++){let g=y*(i+1);for(let p=0;p<i;p++){let x=p+g,v=x,_=x+i+1,T=x+i+2,S=x+1;a.push(v,_,S),a.push(_,T,S)}}this.setIndex(a),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ra=class n extends Ce{constructor(t=new jn([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,m=u.holes;Oi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let x=m[g];Oi.isClockWise(x)===!0&&(m[g]=x.reverse())}let y=Oi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){let x=f[g];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,p=y.length;g<p;g++){let x=y[g],v=x[0]+d,_=x[1]+d,T=x[2]+d;i.push(v,_,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Qv(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Qv(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var te=class n extends Ce{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new A,u=new A,f=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){let x=[],v=p/i,_=0;p===0&&o===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){let S=T/e;d.x=-t*Math.cos(s+S*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(s+S*r)*Math.sin(o+v*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(S+_,1-v),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){let v=h[p][x+1],_=h[p][x],T=h[p+1][x],S=h[p+1][x+1];(p!==0||o>0)&&f.push(v,_,S),(p!==i-1||l<Math.PI)&&f.push(_,T,S)}this.setIndex(f),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ke=class n extends Ce{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new A,d=new A,u=new A;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){let y=m/s*r,g=f/i*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(y),d.y=(t+e*Math.cos(g))*Math.sin(y),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){let y=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,x=(s+1)*f+m;o.push(y,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var oa=class n extends Ce{constructor(t=new sr(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new Q,h=new A,d=[],u=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function y(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),x(),p()}function g(v){h=t.getPointAt(v/e,h);let _=o.normals[v],T=o.binormals[v];for(let S=0;S<=s;S++){let P=S/s*Math.PI*2,I=Math.sin(P),E=-Math.cos(P);l.x=E*_.x+I*T.x,l.y=E*_.y+I*T.y,l.z=E*_.z+I*T.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let T=(s+1)*(v-1)+(_-1),S=(s+1)*v+(_-1),P=(s+1)*v+_,I=(s+1)*(v-1)+_;m.push(T,S,I),m.push(S,P,I)}}function x(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)c.x=v/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new na[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var aa=class extends Ye{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ot=class extends Mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Co(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function t1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var or=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$c=class extends or{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ad,endingEnd:ad}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ld:r=t,a=2*e-i;break;case cd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ld:o=t,l=2*i-e;break;case cd:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),y=m*m,g=y*m,p=-u*g+2*u*y-u*m,x=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,v=(-1-f)*g+(1.5+f)*y+.5*m,_=f*g-f*y;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+x*o[c+T]+v*o[l+T]+_*o[d+T];return r}},Zc=class extends or{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Kc=class extends or{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Co(e,this.TimeBufferType),this.values=Co(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Co(t.times,Array),values:Co(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $c(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Uo:e=this.InterpolantFactoryMethodDiscrete;break;case Mc:e=this.InterpolantFactoryMethodLinear;break;case nl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Mc;case this.InterpolantFactoryMethodSmooth:return nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&t1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===nl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let y=e[d+m];if(y!==e[u+m]||y!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Mc;var fs=class extends zn{constructor(t,e,i){super(t,e,i)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Uo;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends zn{};Jc.prototype.ValueTypeName="color";var jc=class extends zn{};jc.prototype.ValueTypeName="number";var Qc=class extends or{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)An.slerpFlat(r,0,o,c-a,o,c,l);return r}},la=class extends zn{InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends zn{constructor(t,e,i){super(t,e,i)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Uo;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends zn{};th.prototype.ValueTypeName="vector";var eh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},e1=new eh,nh=class{constructor(t){this.manager=t!==void 0?t:e1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ms=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},zi=class extends ms{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ul=new ce,hu=new A,du=new A,Wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(hu),du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(du),e.updateMatrixWorld(),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ih=class extends Wr{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Oo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ar=class extends ms{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ih}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},uu=new ce,Pr=new A,Nl=new A,sh=class extends Wr{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Pr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Pr),Nl.copy(i.position),Nl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Nl),i.updateMatrixWorld(),s.makeTranslation(-Pr.x,-Pr.y,-Pr.z),uu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu)}},Le=class extends ms{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},rh=class extends Wr{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ca=class extends ms{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new rh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gi=class extends ms{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var lr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=fu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function fu(){return performance.now()}var bh="\\[\\]\\.:\\/",n1=new RegExp("["+bh+"]","g"),Eh="[^"+bh+"]",i1="[^"+bh.replace("\\.","")+"]",s1=/((?:WC+[\/:])*)/.source.replace("WC",Eh),r1=/(WCOD+)?/.source.replace("WCOD",i1),o1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),a1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),l1=new RegExp("^"+s1+r1+o1+a1+"$"),c1=["material","materials","bones","map"],oh=class{constructor(t,e,i){let s=i||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ie=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(n1,"")}static parseTrackName(t){let e=l1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);c1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=oh;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);var Je=(n,t,e)=>Math.max(t,Math.min(e,n)),ze=(n,t,e)=>n+(t-n)*e,on=(n,t,e,i)=>ze(n,t,1-Math.exp(-e*i)),dr=(n=0,t=1)=>n+Math.random()*(t-n);function Pe(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function zu(n,t){let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}var Z=(n,t=document)=>t.querySelector(n),pa=(n,t=document)=>[...t.querySelectorAll(n)];function Se(n,t,e){let i=document.createElement(n);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i}var Pn=n=>new Promise(t=>setTimeout(t,n));function Sh(n){return String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Gu=()=>typeof matchMedia>"u"?"ontouchstart"in window:matchMedia("(pointer: coarse)").matches||"ontouchstart"in window&&!matchMedia("(any-pointer: fine)").matches;var In={linear:n=>n,in:n=>n*n*n,out:n=>1-Math.pow(1-n,3),inOut:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,sine:n=>-(Math.cos(Math.PI*n)-1)/2,outBack:n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2),outElastic:n=>n===0||n===1?n:Math.pow(2,-10*n)*Math.sin((n*10-.75)*(2*Math.PI/3))+1},ma=class{constructor(){this.time=0,this.waits=[],this.tweens=[],this.skipping=!1}reset(){this.waits=[],this.tweens=[],this.skipping=!1}update(t){if(this.time+=t,this.waits.length){let e=[];this.waits=this.waits.filter(i=>i.t<=this.time||i.cond&&i.cond()?(e.push(i),!1):!0);for(let i of e)i.resolve()}if(this.tweens.length){let e=[];for(let i of this.tweens){i.t+=t;let s=Math.min(1,i.t/i.d);i.fn(i.ease(s)),s>=1&&e.push(i)}if(e.length){this.tweens=this.tweens.filter(i=>!e.includes(i));for(let i of e)i.resolve()}}}wait(t){return this.skipping||t<=0?Promise.resolve():new Promise(e=>this.waits.push({t:this.time+t,resolve:e}))}until(t){return t()?Promise.resolve():new Promise(e=>this.waits.push({t:1/0,cond:t,resolve:e}))}tween(t,e,i=In.inOut){return this.skipping||t<=0?(e(1),Promise.resolve()):(e(0),new Promise(s=>this.tweens.push({t:0,d:t,fn:e,ease:i,resolve:s})))}skipAll(){this.skipping=!0;let t=this.tweens;this.tweens=[];for(let i of t)i.fn(1),i.resolve();let e=this.waits.filter(i=>!i.cond);this.waits=this.waits.filter(i=>i.cond);for(let i of e)i.resolve()}};var ga=class{constructor(t){this.canvas=t,this.down=new Set,this.pressed=new Set,this.mdx=0,this.mdy=0,this.locked=!1,this.isTouch=Gu(),this.stick={x:0,y:0},this.onLockChange=null,this.onKey=null,addEventListener("keydown",i=>{i.repeat||(this.down.add(i.code),this.pressed.add(i.code),this.onKey?.(i),this.locked&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault())}),addEventListener("keyup",i=>this.down.delete(i.code)),addEventListener("blur",()=>this.down.clear()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.onLockChange?.(this.locked)}),addEventListener("mousemove",i=>{(this.locked||this.dragging&&i.buttons&1)&&(this.mdx+=Je(i.movementX,-200,200),this.mdy+=Je(i.movementY,-200,200))}),t.addEventListener("mousedown",i=>{i.button===0&&(this.dragging=!0),this.pressed.add("Mouse"+i.button),this.down.add("Mouse"+i.button)}),addEventListener("mouseup",i=>{this.down.delete("Mouse"+i.button),i.button===0&&(this.dragging=!1)}),addEventListener("wheel",i=>{i.ctrlKey&&i.preventDefault()},{passive:!1});for(let i of["gesturestart","gesturechange"])document.addEventListener(i,s=>s.preventDefault(),{passive:!1});let e=i=>{i.touches.length>1&&i.cancelable&&i.preventDefault()};addEventListener("touchstart",e,{passive:!1}),addEventListener("touchmove",e,{passive:!1}),this.isTouch&&this._setupTouch()}requestLock(){if(!(this.isTouch||this.locked))try{let t=this.canvas.requestPointerLock?.();t&&t.catch&&t.catch(()=>{})}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}isDown(...t){return t.some(e=>this.down.has(e))}wasPressed(...t){return t.some(e=>this.pressed.has(e))}endFrame(){this.pressed.clear(),this.mdx=0,this.mdy=0}moveAxis(){let t=0,e=0;this.isDown("KeyW","ArrowUp")&&(e+=1),this.isDown("KeyS","ArrowDown")&&(e-=1),this.isDown("KeyD","ArrowRight")&&(t+=1),this.isDown("KeyA","ArrowLeft")&&(t-=1),t+=this.stick.x,e+=-this.stick.y;let i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{x:t,z:e}}showTouch(t){this.touchRoot&&(this.touchRoot.dataset.mode=t||"off")}_setupTouch(){let t=document.getElementById("touch");if(!t)return;this.touchRoot=t;let e=t.querySelector(".stick"),i=t.querySelector(".knob"),s=null,r=null,o=0,a=0,l=0,c=0,h=null,d=m=>{let y=t.dataset.mode;y!=="off"&&m.target===this.canvas&&m.cancelable&&m.preventDefault();for(let g of m.changedTouches)if(!g.target.closest(".tbtn")){if(y==="runner"){h={id:g.identifier,x:g.clientX,y:g.clientY,done:!1};continue}y==="explore"&&(g.clientX<innerWidth*.45&&s===null?(s=g.identifier,o=g.clientX,a=g.clientY,e.style.left=o+"px",e.style.top=a+"px",e.classList.add("on")):r===null&&(r=g.identifier,l=g.clientX,c=g.clientY))}},u=m=>{for(let y of m.changedTouches)if(y.identifier===s){let g=y.clientX-o,p=y.clientY-a,x=55,v=Math.hypot(g,p)||1,_=Math.min(1,v/x);this.stick.x=g/v*_,this.stick.y=p/v*_,i.style.transform=`translate(${this.stick.x*x}px, ${this.stick.y*x}px)`}else if(y.identifier===r)this.mdx+=(y.clientX-l)*2.2,this.mdy+=(y.clientY-c)*2.2,l=y.clientX,c=y.clientY;else if(h&&y.identifier===h.id&&!h.done){let g=y.clientX-h.x,p=y.clientY-h.y;Math.hypot(g,p)>28&&(h.done=!0,Math.abs(g)>Math.abs(p)?this.pressed.add(g>0?"SwipeRight":"SwipeLeft"):this.pressed.add(p>0?"SwipeDown":"SwipeUp"))}t.dataset.mode!=="off"&&m.preventDefault()},f=m=>{for(let y of m.changedTouches)y.identifier===s&&(s=null,this.stick.x=0,this.stick.y=0,i.style.transform="",e.classList.remove("on")),y.identifier===r&&(r=null),h&&y.identifier===h.id&&(h=null)};addEventListener("touchstart",d,{passive:!1}),addEventListener("touchmove",u,{passive:!1}),addEventListener("touchend",f),addEventListener("touchcancel",f);for(let m of t.querySelectorAll(".tbtn")){let y=m.dataset.code;m.addEventListener("touchstart",p=>{p.preventDefault(),this.pressed.add(y),this.down.add(y),m.classList.add("on")},{passive:!1});let g=()=>{this.down.delete(y),m.classList.remove("on")};m.addEventListener("touchend",g),m.addEventListener("touchcancel",g)}}};var ue=n=>440*Math.pow(2,(n-69)/12),Fe=Math.random,ya=class{constructor(){this.ctx=null,this.track=null,this.trackName=null,this.pendingMusic=null,this.ambientNodes=[],this.vol={master:.8,music:.6,sfx:.9}}get now(){return this.ctx?this.ctx.currentTime:0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;if(this.out=e.createDynamicsCompressor(),this.out.threshold.value=-12,this.out.ratio.value=4,this.out.connect(e.destination),this.master=e.createGain(),this.master.connect(this.out),this.musicBus=e.createGain(),this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.ambBus=e.createGain(),this.ambBus.connect(this.sfxBus),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(2.6,2.4),this.revGain=e.createGain(),this.revGain.gain.value=.5,this.reverb.connect(this.revGain),this.revGain.connect(this.master),this.noiseBuf=this._noise(2),this.brownBuf=this._brown(4),this.distCurve=this._curve(60),this.setVolumes(this.vol),this._seq=setInterval(()=>this._tick(),25),this.pendingMusic){let i=this.pendingMusic;this.pendingMusic=null,this.playMusic(i)}this.pendingAmbient&&this.setAmbient(this.pendingAmbient)}setVolumes(t){Object.assign(this.vol,t),this.ctx&&(this.master.gain.value=this.vol.master,this.musicBus.gain.value=this.vol.music*.9,this.sfxBus.gain.value=this.vol.sfx)}setReverb(t){this.revGain&&this.revGain.gain.setTargetAtTime(t,this.now,.3)}_noise(t){let e=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),i=e.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Fe()*2-1;return e}_brown(t){let e=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),i=e.getChannelData(0),s=0;for(let r=0;r<i.length;r++)s=(s+.02*(Fe()*2-1))/1.02,i[r]=s*3.5;return e}_impulse(t,e){let i=this.ctx.sampleRate,s=i*t,r=this.ctx.createBuffer(2,s,i);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++)a[l]=(Fe()*2-1)*Math.pow(1-l/s,e)}return r}_curve(t){let i=new Float32Array(1024);for(let s=0;s<1024;s++){let r=s*2/1024-1;i[s]=(3+t)*r*20*(Math.PI/180)/(Math.PI+t*Math.abs(r))}return i}_route(t,e,i){if(t.connect(e||this.sfxBus),i){let s=this.ctx.createGain();s.gain.value=i,t.connect(s),s.connect(this.reverb)}}tone({type:t="sine",f:e=440,f2:i=null,t:s=this.now,a:r=.005,d:o=.3,g:a=.3,dest:l,send:c=0,detune:h=0,vib:d=0,vibRate:u=5,filter:f=null}){if(!this.ctx)return;let m=this.ctx,y=m.createOscillator();if(y.type=t,y.frequency.setValueAtTime(e,s),i&&y.frequency.exponentialRampToValueAtTime(Math.max(1,i),s+r+o),y.detune.value=h,d){let x=m.createOscillator(),v=m.createGain();x.frequency.value=u,v.gain.value=d,x.connect(v),v.connect(y.frequency),x.start(s),x.stop(s+r+o+.1)}let g=m.createGain();g.gain.setValueAtTime(1e-4,s),g.gain.linearRampToValueAtTime(a,s+r),g.gain.exponentialRampToValueAtTime(1e-4,s+r+o);let p=y;if(f){let x=m.createBiquadFilter();x.type=f.type||"lowpass",x.frequency.value=f.f,x.Q.value=f.q||.7,y.connect(x),p=x}return p.connect(g),this._route(g,l,c),y.start(s),y.stop(s+r+o+.05),y}noise({t=this.now,a:e=.005,d:i=.2,g:s=.3,type:r="bandpass",f:o=1e3,f2:a=null,q:l=1,dest:c,send:h=0,brown:d=!1}){if(!this.ctx)return;let u=this.ctx,f=u.createBufferSource();f.buffer=d?this.brownBuf:this.noiseBuf,f.playbackRate.value=.8+Fe()*.4;let m=u.createBiquadFilter();m.type=r,m.frequency.setValueAtTime(o,t),a&&m.frequency.exponentialRampToValueAtTime(a,t+e+i),m.Q.value=l;let y=u.createGain();y.gain.setValueAtTime(1e-4,t),y.gain.linearRampToValueAtTime(s,t+e),y.gain.exponentialRampToValueAtTime(1e-4,t+e+i),f.connect(m),m.connect(y),this._route(y,c,h),f.start(t,Fe()*1.5),f.stop(t+e+i+.05)}pluck(t,e,i,s,r,o="triangle"){this.tone({type:o,f:e,t,a:.003,d:i,g:s,dest:r})}bell(t,e,i,s){this.tone({type:"sine",f:e,t,a:.002,d:1.6,g:i,dest:s,send:.3}),this.tone({type:"sine",f:e*2.76,t,a:.002,d:.6,g:i*.35,dest:s})}pad(t,e,i,s,r,o=900){if(!this.ctx)return;let a=this.ctx,l=a.createBiquadFilter();l.type="lowpass",l.frequency.value=o;let c=a.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(s,t+Math.min(1.2,i*.3)),c.gain.setValueAtTime(s,t+i*.75),c.gain.linearRampToValueAtTime(1e-4,t+i),l.connect(c),c.connect(r);for(let h of e)for(let d of[-8,8]){let u=a.createOscillator();u.type="sawtooth",u.frequency.value=ue(h),u.detune.value=d,u.connect(l),u.start(t),u.stop(t+i+.05)}}kick(t,e,i){this.tone({type:"sine",f:150,f2:42,t,a:.002,d:.28,g:e,dest:i})}snare(t,e,i){this.noise({t,d:.16,g:e,type:"highpass",f:1400,dest:i}),this.tone({type:"triangle",f:210,f2:150,t,d:.08,g:e*.6,dest:i})}hat(t,e,i,s=!1){this.noise({t,d:s?.18:.04,g:e,type:"highpass",f:7500,dest:i})}bass(t,e,i,s,r,o=700){this.tone({type:"sawtooth",f:e,t,a:.005,d:i,g:s,dest:r,filter:{f:o,q:4}})}distBass(t,e,i,s,r){if(!this.ctx)return;let o=this.ctx,a=o.createOscillator();a.type="sawtooth",a.frequency.value=e;let l=o.createWaveShaper();l.curve=this.distCurve;let c=o.createBiquadFilter();c.type="lowpass",c.frequency.value=1200;let h=o.createGain();h.gain.setValueAtTime(s,t),h.gain.exponentialRampToValueAtTime(1e-4,t+i),a.connect(l),l.connect(c),c.connect(h),h.connect(r),a.start(t),a.stop(t+i+.05)}play(t,e={}){if(!this.ctx)return;let i=this.now+(e.delay||0),s=e.vol??1;switch(t){case"step":{let r=e.surface||"marble",o=r==="wood"?450:r==="concrete"?1300:r==="carpet"?300:950;this.noise({t:i,a:.002,d:r==="carpet"?.05:.09,g:.14*s,type:"bandpass",f:o*(.85+Fe()*.3),q:1.3,send:.25}),this.tone({type:"sine",f:120,f2:55,t:i,d:.07,g:.12*s});break}case"click":this.tone({type:"square",f:1900,t:i,d:.025,g:.05*s,filter:{f:3e3}});break;case"hover":this.tone({type:"sine",f:1300,t:i,d:.04,g:.035*s});break;case"select":this.tone({type:"triangle",f:660,t:i,d:.08,g:.1*s}),this.tone({type:"triangle",f:990,t:i+.06,d:.12,g:.1*s});break;case"back":this.tone({type:"triangle",f:700,t:i,d:.08,g:.08*s}),this.tone({type:"triangle",f:470,t:i+.06,d:.12,g:.08*s});break;case"chime":{[72,76,79,84,88].forEach((r,o)=>{this.tone({type:"triangle",f:ue(r),t:i+o*.07,d:.7,g:.12*s,send:.4}),this.tone({type:"sine",f:ue(r+12),t:i+o*.07,d:.4,g:.04*s})});break}case"unlock":this.tone({type:"square",f:300,t:i,d:.05,g:.08*s,filter:{f:1500}}),this.tone({type:"square",f:180,t:i+.08,d:.08,g:.1*s,filter:{f:1200}}),this.noise({t:i+.08,d:.1,g:.15*s,f:2500,q:2});break;case"error":this.tone({type:"square",f:150,t:i,d:.13,g:.07*s,filter:{f:900}}),this.tone({type:"square",f:112,t:i+.15,d:.22,g:.07*s,filter:{f:900}});break;case"tick":this.tone({type:"sine",f:2400,t:i,d:.015,g:.05*s});break;case"type":this.noise({t:i,d:.03,g:.12*s,f:3e3+Fe()*1500,q:3});break;case"munch":for(let r=0;r<4;r++)this.noise({t:i+r*(.09+Fe()*.05),d:.07,g:.5*s,f:1300+Fe()*1800,q:1.2});this.tone({type:"sine",f:300,f2:120,t:i+.42,d:.12,g:.22*s});break;case"pickup":this.tone({type:"sine",f:520,f2:1500,t:i,d:.16,g:.12*s}),[88,91,96].forEach((r,o)=>this.tone({type:"triangle",f:ue(r),t:i+.08+o*.05,d:.3,g:.06*s,send:.4}));break;case"coin":this.tone({type:"square",f:ue(83+(e.pitch||0)),t:i,d:.05,g:.05*s,filter:{f:4e3}}),this.tone({type:"square",f:ue(88+(e.pitch||0)),t:i+.05,d:.14,g:.05*s,filter:{f:4e3}});break;case"flashlight":this.noise({t:i,d:.02,g:.25*s,f:3500,q:4}),this.noise({t:i+.05,d:.02,g:.18*s,f:2500,q:4});break;case"roar":this._roar(i,s,e.short);break;case"growl":this._roar(i,s*.45,!0,!0);break;case"stomp":this.tone({type:"sine",f:70,f2:28,t:i,a:.005,d:.6,g:.7*s,send:.5}),this.noise({t:i,d:.5,g:.35*s,type:"lowpass",f:220,send:.6,brown:!0});break;case"clatter":for(let r=0;r<16;r++){let o=i+Fe()*1.4*(r/16+.2);this.noise({t:o,d:.05+Fe()*.05,g:(.15+Fe()*.15)*s,f:1200+Fe()*2600,q:6,send:.7})}for(let r=0;r<4;r++)this.tone({type:"sine",f:90+Fe()*40,f2:40,t:i+Fe()*1.2,d:.3,g:.3*s,send:.6});break;case"creak":this.tone({type:"sawtooth",f:70,f2:95,t:i,a:.2,d:1.2,g:.05*s,vib:18,vibRate:13,filter:{type:"bandpass",f:700,q:6},send:.6});break;case"whoosh":this.noise({t:i,a:.12,d:.35,g:.3*s,f:400,f2:2500,q:1.5});break;case"heartbeat":this.tone({type:"sine",f:60,f2:40,t:i,d:.14,g:.5*s}),this.tone({type:"sine",f:55,f2:38,t:i+.22,d:.18,g:.4*s});break;case"beep":this.tone({type:"sine",f:760,t:i,a:.004,d:e.dur||.1,g:.14*s});break;case"static":this.noise({t:i,d:e.dur||.35,g:.12*s,type:"highpass",f:2500});break;case"radio":this.noise({t:i,d:.25,g:.14*s,type:"bandpass",f:1800,q:.8}),this.tone({type:"square",f:1200,t:i+.25,d:.06,g:.04*s});break;case"gate":this.tone({type:"sawtooth",f:55,f2:75,t:i,a:.1,d:1.6,g:.12*s,filter:{type:"bandpass",f:400,q:3},send:.4}),this.noise({t:i,a:.1,d:1.6,g:.08*s,f:900,q:4,send:.3}),this.tone({type:"sine",f:90,f2:40,t:i+1.6,d:.3,g:.4*s,send:.4});break;case"bonk":this.tone({type:"sine",f:420,f2:90,t:i,d:.25,g:.4*s}),this.noise({t:i,d:.2,g:.3*s,f:800});break;case"crash":this.noise({t:i,d:1.2,g:.6*s,type:"lowpass",f:3e3,f2:200,send:.6}),this.tone({type:"sine",f:80,f2:30,t:i,d:.8,g:.8*s});for(let r=0;r<10;r++)this.noise({t:i+.1+Fe()*.9,d:.08,g:.12*s,f:2e3+Fe()*3e3,q:5,send:.5});break;case"scratch":this.noise({t:i,a:.01,d:.25,g:.4*s,f:3e3,f2:600,q:2}),this.tone({type:"sawtooth",f:900,f2:120,t:i,d:.25,g:.1*s});break;case"wahwah":{[55,54,53].forEach((r,o)=>this.tone({type:"sawtooth",f:ue(r),t:i+o*.55,a:.05,d:.5,g:.12*s,filter:{f:1100}})),this.tone({type:"sawtooth",f:ue(52),t:i+1.65,a:.05,d:1.5,g:.12*s,vib:6,vibRate:6,filter:{f:1e3}});break}case"kick":this.noise({t:i,a:.05,d:.2,g:.4*s,f:600,f2:3e3}),this.tone({type:"sine",f:160,f2:40,t:i+.22,d:.5,g:.9*s}),this.noise({t:i+.22,d:.4,g:.5*s,type:"lowpass",f:1500});break;case"crt":this.tone({type:"sine",f:9e3,f2:300,t:i,d:.4,g:.05*s}),this.tone({type:"sine",f:90,f2:30,t:i,d:.3,g:.4*s});break;case"glitch":for(let r=0;r<6;r++)this.tone({type:"square",f:100+Fe()*2e3,t:i+r*.04,d:.035,g:.05*s});break;case"alarm":for(let r=0;r<(e.n||3);r++)this.tone({type:"sawtooth",f:620,t:i+r*.8,d:.38,g:.05*s,filter:{f:1800}}),this.tone({type:"sawtooth",f:830,t:i+r*.8+.4,d:.38,g:.05*s,filter:{f:1800}});break;case"yawn":this.tone({type:"sawtooth",f:330,f2:160,t:i,a:.3,d:1.3,g:.06*s,filter:{type:"bandpass",f:800,q:2}});break;case"sparkle":for(let r=0;r<6;r++)this.tone({type:"sine",f:ue(84+Math.floor(Fe()*14)),t:i+r*.05,d:.2,g:.04*s,send:.5});break;case"drip":this.tone({type:"sine",f:1400+Fe()*500,f2:600,t:i,d:.12,g:.06*s,send:.8});break;case"thud":this.tone({type:"sine",f:100,f2:45,t:i,d:.25,g:.4*s,send:.3}),this.noise({t:i,d:.12,g:.2*s,type:"lowpass",f:500});break;case"buzz":this.tone({type:"sawtooth",f:120,t:i,d:.25,g:.05*s,filter:{f:800}});break;case"sting":this.tone({type:"sawtooth",f:ue(45),t:i,a:.01,d:2.2,g:.12*s,filter:{f:900},send:.5}),this.tone({type:"sawtooth",f:ue(46),t:i,a:.01,d:2.2,g:.1*s,filter:{f:900},send:.5}),this.tone({type:"sine",f:ue(81),t:i,a:.01,d:1.5,g:.06*s,vib:8,send:.5}),this.noise({t:i,d:.6,g:.3*s,type:"lowpass",f:400,brown:!0});break;default:break}}_roar(t,e,i=!1,s=!1){let r=this.ctx,o=i?1.2:2.4,a=r.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.9*e,t+.25),a.gain.setValueAtTime(.9*e,t+o*.6),a.gain.exponentialRampToValueAtTime(1e-4,t+o);let l=r.createGain();l.gain.value=.7;let c=r.createOscillator();c.frequency.value=s?9:22;let h=r.createGain();h.gain.value=.3,c.connect(h),h.connect(l.gain),c.start(t),c.stop(t+o);let d=r.createWaveShaper();d.curve=this.distCurve;let u=r.createBiquadFilter();u.type="lowpass",u.Q.value=3,u.frequency.setValueAtTime(350,t),u.frequency.linearRampToValueAtTime(s?600:1700,t+.4),u.frequency.linearRampToValueAtTime(300,t+o),d.connect(u),u.connect(l),l.connect(a),this._route(a,null,.7);for(let[f,m]of[[68,0],[91,12],[113,-9],[46,4]]){let y=r.createOscillator();y.type="sawtooth",y.frequency.setValueAtTime(f*.8,t),y.frequency.linearRampToValueAtTime(f*1.25,t+.35),y.frequency.linearRampToValueAtTime(f*.7,t+o),y.detune.value=m,y.connect(d),y.start(t),y.stop(t+o+.05)}this.noise({t,a:.2,d:o,g:.35*e,type:"bandpass",f:700,f2:300,q:.8,send:.6})}babble(t,e,i){if(!this.ctx)return 0;let s={guard:210,dev:150,aaron:260,mummy:120,museos:520,narrator:180}[e]||200,r=e==="museos"?"sine":e==="dev"?"sawtooth":"triangle",o=this.now+.02,a=String(t).split(/\s+/);for(let l of a){let c=Math.max(1,Math.round(l.replace(/[^a-z]/gi,"").length/2.6));for(let h=0;h<c;h++){let d=s*(.85+Fe()*.45)*(l===l.toUpperCase()&&l.length>1?1.25:1);this.tone({type:r,f:d,f2:d*(.9+Fe()*.2),t:o,a:.01,d:.07,g:.06,dest:i,filter:{f:1800}}),o+=.085}o+=/[.,!?…]$/.test(l)?.22:.05}return o-this.now}playMusic(t,e=1.5){if(!this.ctx){this.pendingMusic=t;return}if(this.trackName===t)return;let i=this.now,s=this.track;if(s){s.dead=!0;let a=s.gain.gain;a.cancelScheduledValues(i),a.setValueAtTime(a.value,i),a.linearRampToValueAtTime(0,i+e),setTimeout(()=>s.gain.disconnect(),e*1e3+400)}this.trackName=t;let r=h1[t];if(!r){this.track=null;return}let o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(r.vol??.8,i+Math.max(.05,e*.5)),o.connect(this.musicBus),this.track={def:r,gain:o,step:0,next:i+.08,dead:!1}}stopMusic(t=1){this.playMusic(null,t)}_tick(){let t=this.track;if(!t||t.dead||!this.ctx)return;let e=60/t.def.bpm/4;for(t.next<this.now-.3&&(t.next=this.now+.05);t.next<this.now+.15;){try{t.def.step(this,t.step,t.next,e,t.gain)}catch(i){console.warn(i)}t.step++,t.next+=e}}setAmbient(t){if(!this.ctx){this.pendingAmbient=t;return}let e=this.now;for(let s of this.ambientNodes)try{s.g.gain.setTargetAtTime(0,e,.4),setTimeout(()=>s.src.stop(),2e3)}catch{}this.ambientNodes=[],this.ambientKind=t;let i=(s,r,o,a,l,c=1)=>{let h=this.ctx.createBufferSource();h.buffer=s,h.loop=!0,h.playbackRate.value=c;let d=this.ctx.createBiquadFilter();d.type=r,d.frequency.value=o,d.Q.value=a;let u=this.ctx.createGain();return u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(l,e+2),h.connect(d),d.connect(u),u.connect(this.ambBus),h.start(),this.ambientNodes.push({src:h,g:u,fl:d}),{src:h,g:u,fl:d}};if(t==="night")i(this.brownBuf,"lowpass",200,.5,.12),i(this.noiseBuf,"bandpass",5e3,.5,.006);else if(t==="office"){i(this.brownBuf,"lowpass",180,.5,.08);let s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=60;let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=240;let o=this.ctx.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.025,e+2),s.connect(r),r.connect(o),o.connect(this.ambBus),s.start(),this.ambientNodes.push({src:s,g:o})}else if(t==="day"){let s=i(this.brownBuf,"bandpass",500,.6,.18,1.6),r=this.ctx.createOscillator(),o=this.ctx.createGain();r.frequency.value=.3,o.gain.value=.05,r.connect(o),o.connect(s.g.gain),r.start(),this.ambientNodes.push({src:r,g:o}),i(this.noiseBuf,"bandpass",1400,2,.01)}else t==="maze"?(i(this.brownBuf,"lowpass",110,.7,.22),i(this.noiseBuf,"bandpass",300,4,.01)):t==="runner"&&i(this.noiseBuf,"bandpass",600,.4,.04)}},h1={menu:{bpm:76,vol:1.25,step(n,t,e,i,s){let r=Math.floor(t/16)%4,o=t%16,l=[[57,60,64],[53,57,60],[50,53,57],[52,56,59]][r];if(o===0&&(n.pad(e,l.map(c=>c-12),i*16,.035,s,700),n.tone({type:"sine",f:ue(l[0]-24),t:e,a:.1,d:i*15,g:.12,dest:s})),o%2===0){let c=[0,1,2,1,2,1,0,2];n.pluck(e,ue(l[c[o/2%8]]+12),.5,.045,s)}o===10&&r%2===1&&n.bell(e,ue(l[2]+24),.03,s)}},explore:{bpm:54,vol:1.1,step(n,t,e,i,s){let r=t%64;r===0&&n.pad(e,[33,40],i*64,.03,s,400);let o=Math.sin(t*12.9898)*43758.5453,a=o-Math.floor(o);if(t%4===0&&a<.3){let l=[69,72,74,76,79,81,84];n.bell(e,ue(l[Math.floor(a*23)%l.length]),.025,s)}r===32&&n.tone({type:"triangle",f:ue(45),t:e,a:.01,d:2,g:.08,dest:s})}},tension:{bpm:84,vol:.8,step(n,t,e,i,s){let r=t%16;r===0&&n.kick(e,.35,s),r===3&&n.kick(e,.22,s),t%32===0&&n.pad(e,[45,46,57],i*32,.03,s,600),t%2===0&&n.tone({type:"sawtooth",f:ue(81+(t%8===0?1:0)),t:e,d:i*1.5,g:.012,dest:s,filter:{f:2e3}})}},chase:{bpm:156,vol:.85,step(n,t,e,i,s){let r=t%16,o=Math.floor(t/16)%4,l=[40,36,38,35][o];r%4===0&&n.kick(e,.55,s),(r===4||r===12)&&n.snare(e,.3,s),r%2===1&&n.hat(e,.08,s,r===15);let c=[0,0,12,0,0,12,0,7,0,0,12,0,10,12,7,5];if(n.bass(e,ue(l+c[r]-12),i*.9,.13,s,900),Math.floor(t/64)%2===1&&r%2===0){let h=[64,67,71,67,76,74,71,67];n.pluck(e,ue(h[r/2%8]+(o===1?-4:o===2?-2:o===3?-5:0)),.14,.05,s,"square")}r===0&&o===0&&n.tone({type:"sawtooth",f:ue(76),f2:ue(64),t:e,d:i*8,g:.03,dest:s,filter:{f:2500}})}},egypt:{bpm:96,vol:1.2,step(n,t,e,i,s){let r=t%16,o=Math.floor(t/16)%4;t%64===0&&n.pad(e,[38,45,50],i*64,.026,s,520),(r===0||r===6)&&n.kick(e,r===0?.26:.18,s),[3,4,10,12,14].includes(r)&&n.hat(e,r===12?.05:.03,s);let a=[62,63,66,67,69,70,72,74],l=[[0,-1,2,-1,3,2,1,0],[4,-1,3,2,3,-1,1,2],[4,5,4,3,2,-1,3,1],[2,1,0,-1,1,-1,0,-1]][o];if(r%2===0&&Math.floor(t/64)%2===1){let c=l[r/2];c>=0&&n.pluck(e,ue(a[c]),.35,.045,s)}r===8&&o===3&&n.tone({type:"sine",f:ue(74),f2:ue(72),t:e,a:.3,d:2,g:.03,dest:s,vib:6,vibRate:5,send:.4})}},maze:{bpm:92,vol:1.15,step(n,t,e,i,s){let r=t%16,o=Math.floor(t/16)%4;if(r%2===0&&n.hat(e,r%4===0?.04:.02,s),r%4===0&&n.bass(e,ue([33,33,34,32][o]),i*3,.1,s,400),r===8&&o%2===1){let a=[69,72,75,78][Math.floor(t/32)%4];n.tone({type:"sine",f:ue(a),t:e,a:.2,d:1.6,g:.05,dest:s,vib:5,vibRate:5,send:.4})}r===0&&o===0&&n.pad(e,[45,51],i*64,.025,s,500)}},morning:{bpm:112,vol:1.6,step(n,t,e,i,s){let r=t%16,o=Math.floor(t/16)%4,l=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]][o];r%4===0&&n.bass(e,ue(l[0]-24),i*2,.1,s,500),[0,3,6,8,11,14].includes(r)&&l.forEach(c=>n.pluck(e,ue(c+12),.25,.03,s)),r%4===2&&n.hat(e,.03,s),(r===4||r===12)&&n.snare(e,.06,s),r%8===0&&n.kick(e,.25,s)}},meta:{bpm:100,vol:2,step(n,t,e,i,s){let r=t%16,o=Math.floor(t/16)%4,l=[[60,64,67,71],[57,60,64,67],[50,53,57,60],[55,59,62,65]][o];[0,6,10].includes(r)&&l.forEach(c=>n.tone({type:"sine",f:ue(c),t:e,a:.01,d:.6,g:.03,dest:s,vib:3,vibRate:4})),r%4===0&&n.pluck(e,ue(l[0]-24+(r===8?7:0)),.4,.12,s,"sine"),r%4===3&&n.noise({t:e,d:.02,g:.05,f:4e3,q:4,dest:s})}},angry:{bpm:150,vol:.9,step(n,t,e,i,s){let r=t%16;r%4===0&&n.kick(e,.7,s),(r===4||r===12)&&n.snare(e,.4,s),r%2===0&&n.distBass(e,ue([28,28,31,28,34,28,33,31][r/2%8]),i*1.8,.12,s),n.hat(e,.06,s)}}};var Vu=4;function Wu(n){Vu=Math.min(8,n||4)}function ae(n,t,e){let i=document.createElement("canvas");return i.width=n,i.height=t,[i,i.getContext("2d",e)]}function he(n,{repeat:t=[1,1],srgb:e=!0}={}){let i=new Bn(n);return i.wrapS=i.wrapT=vi,i.repeat.set(t[0],t[1]),e&&(i.colorSpace=rn),i.anisotropy=Vu,i}function Vn(n,t,e,i,s){let r=n.getImageData(0,0,t,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=(s()-.5)*i;o[a]+=l,o[a+1]+=l,o[a+2]+=l}n.putImageData(r,0,0)}var wh=new Map;function d1(n,t){return wh.has(n)||wh.set(n,t()),wh.get(n)}function ve(n,t=1,e=1){let s=d1(n,()=>u1[n]()).clone();return s.repeat.set(t,e),s.needsUpdate=!0,s}var u1={marble(){let[t,e]=ae(512,512),i=Pe(7);for(let s=0;s<2;s++)for(let r=0;r<2;r++){let o=(s+r)%2===1;e.fillStyle=o?"#2b2f38":"#ddd6c8",e.fillRect(s*256,r*256,256,256),e.strokeStyle=o?"rgba(255,255,255,0.10)":"rgba(80,70,60,0.18)";for(let a=0;a<7;a++){e.lineWidth=.6+i()*1.6,e.beginPath();let l=s*256+i()*256,c=r*256;e.moveTo(l,c);for(let h=0;h<8;h++)l+=(i()-.5)*70,c+=32,e.lineTo(l,c);e.stroke()}}e.strokeStyle="rgba(0,0,0,0.5)",e.lineWidth=2;for(let s=0;s<=2;s++)e.beginPath(),e.moveTo(s*256,0),e.lineTo(s*256,512),e.stroke(),e.beginPath(),e.moveTo(0,s*256),e.lineTo(512,s*256),e.stroke();return Vn(e,512,512,14,i),he(t)},stone(){let[t,e]=ae(512,512),i=Pe(3),s=4,r=512/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=120+i()*30;e.fillStyle=`rgb(${l+12},${l+6},${l-6})`,e.fillRect(o*r,a*r,r,r);for(let c=0;c<30;c++)e.fillStyle=`rgba(${i()>.5?255:0},${i()>.5?240:0},200,0.04)`,e.beginPath(),e.arc(o*r+i()*r,a*r+i()*r,4+i()*16,0,7),e.fill()}e.strokeStyle="rgba(30,25,20,0.7)",e.lineWidth=3;for(let o=0;o<=s;o++)e.beginPath(),e.moveTo(o*r,0),e.lineTo(o*r,512),e.stroke(),e.beginPath(),e.moveTo(0,o*r),e.lineTo(512,o*r),e.stroke();return Vn(e,512,512,22,i),he(t)},wood(){let[t,e]=ae(512,512),i=Pe(11),s=8,r=512/s;for(let o=0;o<s;o++){let a=i()*512;for(let l=-1;l<2;l++){let c=70+i()*30;e.fillStyle=`rgb(${c+50},${c+22},${c-10})`,e.fillRect(a+l*512*.6-512*.3,o*r,512*.6,r),e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(a+l*512*.6-512*.3,o*r,2,r)}for(let l=0;l<14;l++){e.strokeStyle=`rgba(40,20,5,${.1+i()*.15})`,e.lineWidth=1,e.beginPath();let c=o*r+i()*r;e.moveTo(0,c),e.bezierCurveTo(512*.3,c+(i()-.5)*8,512*.6,c+(i()-.5)*8,512,c),e.stroke()}e.fillStyle="rgba(0,0,0,0.5)",e.fillRect(0,o*r,512,2)}return Vn(e,512,512,10,i),he(t)},plaster(){let[t,e]=ae(256,256),i=Pe(5);return e.fillStyle="#ffffff",e.fillRect(0,0,256,256),Vn(e,256,256,18,i),he(t)},mosaic(){let[t,e]=ae(512,512),i=Pe(9);e.fillStyle="#3a2a20",e.fillRect(0,0,512,512);let s=16,r=["#c96f3b","#d9a066","#e8d3b0","#8c3b2a","#e8d3b0","#e8d3b0","#5a6e7a"];for(let o=0;o<512/s;o++)for(let a=0;a<512/s;a++){let l=o-512/s/2+.5,c=a-512/s/2+.5,h=Math.floor(Math.max(Math.abs(l),Math.abs(c))),d=r[(h+(Math.abs(l)===Math.abs(c)?3:0))%r.length];h>13&&(d=(o+a)%2?"#8c3b2a":"#e8d3b0"),e.fillStyle=d,e.fillRect(o*s+1+i()*1.2,a*s+1+i()*1.2,s-2.5,s-2.5)}return Vn(e,512,512,18,i),he(t)},concrete(){let[t,e]=ae(512,512),i=Pe(13);e.fillStyle="#6d6a64",e.fillRect(0,0,512,512);for(let s=0;s<400;s++)e.fillStyle=`rgba(${i()>.5?255:0},${i()>.5?255:0},${i()>.5?255:0},0.03)`,e.beginPath(),e.arc(i()*512,i()*512,2+i()*30,0,7),e.fill();e.strokeStyle="rgba(20,20,20,0.35)";for(let s=0;s<5;s++){e.beginPath();let r=i()*512,o=i()*512;e.moveTo(r,o);for(let a=0;a<6;a++)r+=(i()-.5)*60,o+=(i()-.5)*60,e.lineTo(r,o);e.stroke()}return Vn(e,512,512,30,i),he(t)},shelves(){let[e,i]=ae(512,512),s=Pe(21);i.fillStyle="#1b1612",i.fillRect(0,0,512,512);let r=4,o=512/r,a=["#a4824f","#b8955e","#8f6c3c","#c4a574","#9a7a52","#6b5a48"];for(let l=0;l<r;l++){let c=6;for(;c<492;){let h=40+s()*80,d=o*(.45+s()*.45);if(s()<.15){c+=h*.6;continue}i.fillStyle=a[Math.floor(s()*a.length)],i.fillRect(c,(l+1)*o-10-d,h-4,d),i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(c,(l+1)*o-10-d,h-4,5),s()<.6&&(i.fillStyle="#efe6cf",i.fillRect(c+h*.2,(l+1)*o-10-d*.6,h*.45,14),i.fillStyle="#333",i.font="bold 9px monospace",i.fillText(["ARCH","FOSSIL","MISC","1974","DO NOT","VASE","BONES?"][Math.floor(s()*7)],c+h*.22,(l+1)*o-10-d*.6+10)),c+=h}i.fillStyle="#5b5550",i.fillRect(0,(l+1)*o-12,512,12),i.fillStyle="rgba(255,255,255,0.15)",i.fillRect(0,(l+1)*o-12,512,2)}return i.fillStyle="#4a4540",i.fillRect(0,0,10,512),i.fillRect(502,0,10,512),Vn(i,512,512,16,s),he(e)},crate(){let[t,e]=ae(256,256),i=Pe(17);e.fillStyle="#8a6a40",e.fillRect(0,0,256,256);for(let s=0;s<6;s++)e.fillStyle=s%2?"#7d5f38":"#94744a",e.fillRect(0,s*(256/6),256,256/6-2);return e.strokeStyle="#4b3820",e.lineWidth=18,e.strokeRect(9,9,238,238),e.beginPath(),e.moveTo(9,9),e.lineTo(247,247),e.stroke(),e.fillStyle="rgba(20,10,0,0.7)",e.font="bold 26px monospace",e.fillText("FRAGILE",70,140),Vn(e,256,256,20,i),he(t)},carpet(){let[e,i]=ae(512,512),s=Pe(23);i.fillStyle="#6e1420",i.fillRect(0,0,512,512),i.fillStyle="#c9a24a",i.fillRect(0,0,14,512),i.fillRect(498,0,14,512),i.fillStyle="#5a0f19",i.fillRect(512/3-3,0,6,512),i.fillRect(2*512/3-3,0,6,512),i.fillStyle="rgba(201,162,74,0.35)";for(let r=0;r<8;r++)for(let o=0;o<3;o++){let a=(o+.5)*170.66666666666666,l=(r+.5)*(512/8);i.beginPath(),i.moveTo(a,l-14),i.lineTo(a+14,l),i.lineTo(a,l+14),i.lineTo(a-14,l),i.closePath(),i.fill()}return Vn(i,512,512,26,s),he(e)},ceiling(){let[t,e]=ae(256,256),i=Pe(31);return e.fillStyle="#cfcac0",e.fillRect(0,0,256,256),e.strokeStyle="#8d877c",e.lineWidth=4,e.strokeRect(0,0,256,256),e.strokeRect(256/2,0,.1,256),e.strokeRect(0,256/2,256,.1),Vn(e,256,256,20,i),he(t)},bone(){let[t,e]=ae(128,128),i=Pe(41);e.fillStyle="#d8ccb0",e.fillRect(0,0,128,128);for(let s=0;s<60;s++)e.fillStyle=`rgba(${i()>.5?120:255},${i()>.5?100:240},80,0.12)`,e.fillRect(i()*128,i()*128,1+i()*10,1+i()*3);return Vn(e,128,128,30,i),he(t)}};function f1(n,t,e){let i=String(t).split(" "),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>e&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function Th({title:n,body:t="",w:e=512,h:i=320,bg:s="#1c1a17",fg:r="#e9dfc8",accent:o="#c9a24a",titleFont:a="bold 40px Georgia, serif",bodyFont:l="22px Georgia, serif",align:c="left"}){let[h,d]=ae(e,i);d.fillStyle=s,d.fillRect(0,0,e,i),d.strokeStyle=o,d.lineWidth=6,d.strokeRect(10,10,e-20,i-20),d.fillStyle=o,d.font=a,d.textAlign=c;let u=c==="center"?e/2:36;d.fillText(n,u,70),d.fillRect(36,88,e-72,2),d.fillStyle=r,d.font=l;let f=128;for(let m of String(t).split(`
`))for(let y of f1(d,m,e-72))d.fillText(y,u,f),f+=parseInt(l,10)*1.35;return he(h,{repeat:[1,1]})}function Me(n,{w:t=512,h:e=128,bg:i="#111",fg:s="#fff",font:r="bold 56px Arial Black, Arial, sans-serif",border:o=null}={}){let[a,l]=ae(t,e);l.fillStyle=i,l.fillRect(0,0,t,e),o&&(l.strokeStyle=o,l.lineWidth=8,l.strokeRect(6,6,t-12,e-12)),l.fillStyle=s,l.font=r,l.textAlign="center",l.textBaseline="middle";let c=String(n).split(`
`),h=e/(c.length+.4);return c.forEach((d,u)=>l.fillText(d,t/2,e/2+(u-(c.length-1)/2)*h)),he(a)}function Xu(n,t="landscape"){let e=Pe(n),i=256,s=t==="portrait"?320:192,[r,o]=ae(i,s);if(t==="portrait"){let a=o.createLinearGradient(0,0,0,s);a.addColorStop(0,`hsl(${e()*60+20},30%,25%)`),a.addColorStop(1,`hsl(${e()*60},30%,10%)`),o.fillStyle=a,o.fillRect(0,0,i,s),o.fillStyle=`hsl(${e()*360},40%,30%)`,o.beginPath(),o.ellipse(i/2,s*.95,i*.42,s*.38,0,0,7),o.fill(),o.fillStyle="#d9b38c",o.beginPath(),o.ellipse(i/2,s*.42,i*.17,s*.16,0,0,7),o.fill(),o.fillStyle=`hsl(${e()*40},40%,${10+e()*30}%)`,o.beginPath(),o.ellipse(i/2,s*.33,i*.19,s*.1,0,Math.PI,0),o.fill(),o.fillStyle="#222",o.fillRect(i/2-22,s*.42,8,6),o.fillRect(i/2+14,s*.42,8,6),e()<.5&&(o.fillStyle="#c9a24a",o.fillRect(i/2-30,s*.22,60,14))}else{let a=o.createLinearGradient(0,0,0,s),l=e()*360;a.addColorStop(0,`hsl(${l},50%,${50+e()*20}%)`),a.addColorStop(.6,`hsl(${l+30},50%,70%)`),o.fillStyle=a,o.fillRect(0,0,i,s),o.fillStyle=`hsl(${e()*60+30},70%,70%)`,o.beginPath(),o.arc(i*(.2+e()*.6),s*.3,18,0,7),o.fill();for(let c=0;c<3;c++){o.fillStyle=`hsl(${100+e()*60},${30+c*10}%,${35-c*9}%)`,o.beginPath(),o.moveTo(0,s);for(let h=0;h<=i;h+=16)o.lineTo(h,s*(.5+c*.12)+Math.sin(h*.03+e()*6)*14+e()*10);o.lineTo(i,s),o.fill()}}for(let a=0;a<900;a++)o.fillStyle=`rgba(0,0,0,${e()*.08})`,o.fillRect(e()*i,e()*s,3,3);return he(r)}function qu(n=128,t=.12){let[e,i]=ae(n,n),s=i.createImageData(n,n);for(let r=0;r<s.data.length;r+=4){let o=Math.random()*255;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=t*255}return i.putImageData(s,0,0),e.toDataURL()}var va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},p1=new Qs(-1,1,1,-1,0,1),Ah=class extends Ce{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}},m1=new Ah,Wi=class{constructor(t){this._mesh=new B(m1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,p1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var xa=class extends En{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vi.clone(t.uniforms),this.material=new Ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Wi(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var qr=class extends En{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_a=class extends En{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ma=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Q);this._width=i.width,this._height=i.height,e=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xa(va),this.copyPass.material.blending=Jn,this.clock=new lr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qr!==void 0&&(o instanceof qr?i=!0:o instanceof _a&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ba=class extends En{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Nt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Yu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ur=class n extends En{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new Nt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(r,o,{type:Gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new cn(r,o,{type:Gn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new cn(r,o,{type:Gn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Yu;this.highPassUniforms=Vi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ye({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Q(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=va;this.copyUniforms=Vi.clone(h.uniforms),this.blendMaterial=new Ye({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Nt,this.oldClearAlpha=1,this.basic=new ie,this.fsQuad=new Wi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ur.BlurDirectionX=new Q(1,0);ur.BlurDirectionY=new Q(0,1);var $u={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ea=class extends En{constructor(){super();let t=$u;this.uniforms=Vi.clone(t.uniforms),this.material=new aa({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ch?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var gs=["REX","MUMMY","1974","ZAP","DONUT","???"];var Sa=class{constructor(t){this.game=t,this.root=Z("#hud"),this.meterEl=Z("#meter"),this.meterFill=Z(".meter-fill"),this.meterPct=Z(".meter-pct"),this.meterDonut=Z(".meter-donut"),this.clockEl=Z("#clock"),this.objEl=Z("#objective"),this.objText=Z(".obj-text"),this.fragEl=Z("#fragments"),this.fragSlots=Z(".frag-slots"),this.prompt=Z("#prompt"),this.promptText=Z(".prompt-text"),this.cross=Z("#crosshair"),this.compass=Z("#compass"),this.compassMarker=Z(".compass-marker"),this.chase=Z("#chase"),this.arrow=Z("#arrow"),this.big=Z("#bigtext"),this.hint=Z("#controls-hint"),this.toasts=Z("#toasts"),this.titleEl=Z("#titlecard"),this.captionEl=Z("#caption"),this.donutCount=Z("#donut-count"),this.fade=Z("#fx-fade"),this.flashEl=Z("#fx-flash"),this.drowsy=Z("#fx-drowsy"),this.lids=[Z("#fx-eyelids .top"),Z("#fx-eyelids .bottom")],this.letterbox=Z("#letterbox"),Z("#fx-grain").style.backgroundImage=`url(${qu(160,.5)})`,this.target=null,this.lastMeter=-1;for(let e=0;e<6;e++)this.fragSlots.append(Se("div","frag","\xB7".repeat(Math.min(5,gs[e].length))))}show(t){this.root.classList.toggle("off",!t)}showMeter(t){this.meterEl.classList.toggle("off",!t)}showClock(t){this.clockEl.classList.toggle("off",!t)}setMeter(t){let e=Math.round(t);e!==this.lastMeter&&(e>this.lastMeter&&this.lastMeter>=0&&(this.meterEl.classList.remove("bump"),this.meterEl.offsetWidth,this.meterEl.classList.add("bump")),this.lastMeter=e,this.meterFill.style.width=Je(t,0,100)+"%",this.meterPct.textContent=e+"%",this.meterEl.classList.toggle("low",t<25),this.meterDonut.classList.toggle("bitten",t<60))}setClock(t){this.clockEl.textContent=t}objective(t,e=null){if(this.target=e,!t){this.objEl.classList.add("off"),this.compass.classList.add("off");return}this.objEl.classList.remove("off","new"),this.objEl.offsetWidth,this.objEl.classList.add("new"),this.objText.textContent=t,this.compass.classList.toggle("off",!e||!this.game.save.settings.marker),this.game.audio.play("select",{vol:.6})}setFragments(t,{show:e=!0,missing:i=!1}={}){this.fragEl.classList.toggle("off",!e),[...this.fragSlots.children].forEach((s,r)=>{let o=t.includes(gs[r]),a=s.classList.contains("got");s.textContent=o?gs[r]:i&&r===5?"???":"\xB7".repeat(Math.min(5,gs[r].length)),s.classList.toggle("got",o),s.classList.toggle("missing",i&&r===5),o&&!a&&(s.style.animation="none",s.offsetWidth,s.style.animation="")})}setPrompt(t){if(!t){this.prompt.classList.add("off"),this.cross.classList.remove("hot");return}(this.promptText.textContent!==t||this.prompt.classList.contains("off"))&&(this.promptText.textContent=t,this.prompt.classList.remove("off")),this.cross.classList.add("hot"),this.prompt.querySelector("kbd").textContent=this.game.input.isTouch?"USE":"E"}crosshair(t){this.cross.classList.toggle("hidden",!t)}toast(t,e=""){let i=Se("div","toast "+e,t);this.toasts.append(i),setTimeout(()=>i.remove(),3100)}titleCard(t,e){Z(".tc-chapter",this.titleEl).textContent=t,Z(".tc-title",this.titleEl).textContent=e,this.titleEl.classList.remove("show"),this.titleEl.offsetWidth,this.titleEl.classList.add("show"),this.game.audio.play("sting",{vol:.5})}caption(t){this.captionEl.textContent=t||""}bigText(t){this.big.textContent=t,this.big.classList.remove("show"),this.big.offsetWidth,this.big.classList.add("show")}controlsHint(t){if(!t){this.hint.classList.add("off");return}this.hint.innerHTML=t.map(e=>`<span>${e}</span>`).join(""),this.hint.classList.remove("off")}loadingTip(t,e){let i=Z("#loadtip");if(!t){i.classList.add("off");return}Z(".lt-chapter",i).textContent=t,Z(".lt-tip",i).innerHTML=e?"\u{1F4A1} "+e:"",i.classList.remove("off")}setFade(t,e=.2){t===0&&this.loadingTip(null),this.fade.style.transition=`opacity ${e}s linear`,this.fade.style.opacity=t}flash(t="rgba(255,255,255,0.6)",e=.5){let i=this.flashEl;i.style.transition="none",i.style.background=t,i.style.opacity=1,i.offsetWidth,i.style.transition=`opacity ${e}s`,i.style.opacity=0}setDrowsy(t){this.drowsy.style.opacity=Je(t,0,1)}setLids(t,e=.25){for(let i of this.lids)i.style.transition=`transform ${e}s ease-in-out`;this.lids[0].style.transform=`translateY(${-101+t*101}%)`,this.lids[1].style.transform=`translateY(${101-t*101}%)`}setLetterbox(t){this.letterbox.classList.toggle("on",t)}showChase(t){this.chase.classList.toggle("off",!t)}setChase(t,e,i){let s=Je(t,0,1)*100;Z(".chase-fill",this.chase).style.width=s+"%",Z(".chase-you",this.chase).style.left=s+"%",Z(".chase-rex",this.chase).style.left=Math.max(0,s-4-(1-e)*26)+"%",Z(".danger-fill",this.chase).style.width=e*100+"%",Z(".chase-dist",this.chase).textContent=Math.round(t*880)+" m",i!=null&&this.setDonutCount(`\u{1F369} \xD7 ${i}`)}setSpeedLines(t){Z("#fx-speed").style.opacity=Je(t,0,1)}showArrow(t){this.arrow.classList.toggle("off",!t)}setDonutCount(t){this.donutCount.classList.toggle("off",!t),t&&(this.donutCount.textContent=t)}update(){let t=this.game;if(!this.target||this.compass.classList.contains("off")||!t.player)return;let e=t.player,i=Math.atan2(-(this.target.x-e.pos.x),-(this.target.z-e.pos.z)),s=zu(e.yaw,i),r=Je(50-s/(Math.PI/2)*50,-10,110);this.compassMarker.style.left=r+"%",this.compassMarker.style.opacity=Math.abs(s)>Math.PI/2?.25:1;let o=Math.hypot(this.target.x-e.pos.x,this.target.z-e.pos.z);this.compassMarker.textContent=o<3?"\u25CF":"\u25BC"}};var g1=typeof window<"u"&&window.LOCKED_OUT_CONFIG||{},Xi={guardName:"YOU (GUARD)",devName:"THE DEV",title:["LOCKED","OUT"],...g1};var Ku={guard:{name:()=>Xi.guardName,color:"gold"},dev:{name:()=>Xi.devName,color:"pink"},aaron:{name:()=>"AARON",color:"sky"},mummy:{name:()=>"THE MUMMY",color:"sand"},museos:{name:()=>"MUSE-OS",color:"mint"}},y1={normal:{emoji:"\u{1F642}",label:"Normal",act:"Your regular face. Just chilling."},happy:{emoji:"\u{1F604}",label:"Happy",act:"Big smile!"},hungry:{emoji:"\u{1F924}",label:"Hungry",act:"Stare at an imaginary donut. Lick your lips."},cool:{emoji:"\u{1F60E}",label:"Cool",act:"Smug grin, one eyebrow up. You are the best."},confused:{emoji:"\u{1F914}",label:"Confused",act:'Squint and tilt your head. "Huh?"'},annoyed:{emoji:"\u{1F612}",label:"Annoyed",act:"Roll your eyes. Ugh."},angry:{emoji:"\u{1F620}",label:"Angry",act:"Frown as hard as you can. Grrr."},shocked:{emoji:"\u{1F632}",label:"Shocked",act:"Eyes huge, mouth wide open. WHAT?!"},scared:{emoji:"\u{1F631}",label:"Scared",act:"Hands on your cheeks. Silent scream."},sad:{emoji:"\u{1F622}",label:"Sad",act:"Big pout. Fake cry."},sleepy:{emoji:"\u{1F634}",label:"Sleepy",act:"Huge yawn, eyes half closed."}},v1={shock:"shocked",tired:"sleepy"},x1=n=>y1[n]?n:v1[n]||"normal",ys={guard01:{who:"guard",mood:"hungry",text:"Mmm. Number three is the T-Rex. Obviously. Nothing beats the King."},aaron01:{who:"aaron",mood:"normal",text:"Yo, it's Aaron. Heads up \u2014 IT is changing all the computer passwords tonight. So, uh... don't let your session time out. Okay byeee."},guard02:{who:"guard",mood:"cool",text:"Yeah, yeah. Like that's gonna happen."},museos01:{who:"museos",mood:"normal",text:"SESSION EXPIRED."},guard03:{who:"guard",mood:"annoyed",text:"Ugh. Whatever. I'll just log back in."},guard04:{who:"guard",mood:"confused",text:"Huh? Donut-one-two-three. That's literally always my password."},guard05:{who:"guard",mood:"shocked",text:"WHAT?! Who changed my password?!"},museos02:{who:"museos",mood:"normal",text:"Password reset protocol activated. To recover access... SOLVE THE PUZZLES."},museos03:{who:"museos",mood:"normal",text:"Puzzle number one sleeps where giants once walked."},guard06:{who:"guard",mood:"happy",text:"Where giants once walked... the Dino exhibit! Oh yeah, I like the Dino exhibit."},guard07:{who:"guard",mood:"cool",text:"Flashlight: check. Donuts: check. Let's go."},guard08:{who:"guard",mood:"happy",text:"Whoa. Never gets old. Hey, big guy."},museos04:{who:"museos",mood:"normal",text:"Fragment one: REX. Next puzzle: the Egyptian Wing."},guard09:{who:"guard",mood:"cool",text:"Egyptian Wing. Got it. Easy."},guard10:{who:"guard",mood:"confused",text:"...What was that?"},guard11:{who:"guard",mood:"shocked",text:"Wait. Where's the T-Rex?"},guard12:{who:"guard",mood:"scared",text:"Oh crap. Oh crap oh crap. This is like Night at the Museum."},guard13:{who:"guard",mood:"scared",text:"Okay. Totally normal. Big dinosaur's just... on a walk. I'm gonna go to the Egyptian Wing. Quickly."},guard35:{who:"guard",mood:"scared",text:"The Egyptian Wing. Why is it ALWAYS so creepy in here?"},museos13:{who:"museos",mood:"normal",text:"Puzzle number two: the Pharaoh's Lock. Its secret is written on four pillars. Count the lines."},guard42:{who:"guard",mood:"scared",text:"That footprint is the size of a bathtub. The T-Rex came through here."},guard36:{who:"guard",mood:"happy",text:"All four pillars. Now, to the Pharaoh's Lock."},museos14:{who:"museos",mood:"normal",text:"Fragment two: MUMMY. Next puzzle: the Roman Empire hall."},guard37:{who:"guard",mood:"scared",text:"Uh... why is the coffin making noises?"},guard38:{who:"guard",mood:"scared",text:"AAAH! A MUMMY! Stay back! I have a flashlight and I'm not afraid to... shine it!"},mummy01:{who:"mummy",mood:"hungry",text:"Mmmph... mmh mmph? *(Is that... a DONUT?)*"},guard39:{who:"guard",mood:"confused",text:"...You want a donut? You've been in there for three thousand years and you want a DONUT?"},mummy02:{who:"mummy",mood:"sad",text:"Mmmph. *(Please.)*"},guard40:{who:"guard",mood:"annoyed",text:"Ugh. FINE. One donut. But you owe me."},mummy03:{who:"mummy",mood:"happy",text:"MMMMMMH! *(Best. Snack. In. Three. Thousand. Years.)*"},guard41:{who:"guard",mood:"cool",text:"Yeah, they're pretty good. Okay. Back to bed, little buddy."},guard14:{who:"guard",mood:"scared",text:"Nope. Nope nope nope nope."},guard15:{who:"guard",mood:"normal",text:"Okay. Romans. Romans are chill. Romans never chased anybody."},museos05:{who:"museos",mood:"normal",text:"Fragment three: 1974. The remaining puzzles lie... beyond the walls."},guard16:{who:"guard",mood:"confused",text:"Beyond the walls? What does that even mea\u2014"},guard17:{who:"guard",mood:"shocked",text:"OH MY GOSH."},guard18:{who:"guard",mood:"scared",text:"AAAAAAAAAAH!"},guard19:{who:"guard",mood:"scared",text:"Why is this hallway so LONG?!"},guard20:{who:"guard",mood:"happy",text:"There! A hole shaped exactly like me! That is SO convenient!"},guard21:{who:"guard",mood:"cool",text:"HA! You can't fit, big guy! Shoulda done more cardio! ...Wait, you don't have lungs."},museos06:{who:"museos",mood:"normal",text:"Welcome to the archives, guard. Three locked gates stand between you and the break room. Also, your sugar levels are... concerning."},guard22:{who:"guard",mood:"annoyed",text:"My sugar levels are FINE."},guard23:{who:"guard",mood:"scared",text:"Is that... an EYE?! Go away! Shoo!"},museos07:{who:"museos",mood:"normal",text:"Fragment four: ZAP."},museos08:{who:"museos",mood:"normal",text:"The next gate needs three keys: red, blue and yellow. They were lost somewhere in this section. Classic."},guard24:{who:"guard",mood:"annoyed",text:"Three keys for ONE gate. Who designs these places?"},museos09:{who:"museos",mood:"normal",text:"Fragment five: DONUT. Please proceed to the break room."},guard25:{who:"guard",mood:"hungry",text:"THE. LAST. DONUT. It is beautiful."},guard26:{who:"guard",mood:"shocked",text:"It's... it's PLASTIC?!"},museos10:{who:"museos",mood:"normal",text:"Exhibit 404: replica donut. Not for eating."},guard27:{who:"guard",mood:"sleepy",text:"So... sleepy... just gonna... rest my eyes... five minutes..."},guard28:{who:"guard",mood:"confused",text:"Mmh... huh? It's MORNING?!"},guard29:{who:"guard",mood:"confused",text:"The T-Rex is back. Like nothing happened. ...Is that MY HAT?"},aaron02:{who:"aaron",mood:"annoyed",text:"Dude. Did you sleep in the dinosaur exhibit? Again?"},guard30:{who:"guard",mood:"shocked",text:"Aaron! The T-Rex was ALIVE! It chased me! There was a MUMMY! And a PLASTIC DONUT!"},aaron03:{who:"aaron",mood:"cool",text:"Sure, buddy. Also, your computer's been beeping all morning. You should probably log in."},museos11:{who:"museos",mood:"normal",text:"Fragments entered: five of six. You did not solve the puzzles."},guard31:{who:"guard",mood:"angry",text:"WHAT? I solved like FIVE puzzles!"},museos12:{who:"museos",mood:"normal",text:"Five is not six. Goodbye."},dev01:{who:"dev",mood:"happy",text:"Oh hey! Welcome to my game. I made it myself. It's really good, I promise."},guard32:{who:"guard",mood:"confused",text:"Wait... that's it? That game was WAY too short."},guard33:{who:"guard",mood:"shocked",text:"Oh my gosh. Are you serious? This is really it? That's the WHOLE game?!"},dev02:{who:"dev",mood:"sad",text:"Bro, I was up all night making this."},guard34:{who:"guard",mood:"annoyed",text:"...I could do better."},dev03:{who:"dev",mood:"angry",text:"HELL NAW."},dev04:{who:"dev",mood:"angry",text:"GET OUT OF MY GAME!"},dev05:{who:"dev",mood:"annoyed",text:"...Oh. You're back. Fine. You can play it again. But NO complaining."},dev06:{who:"dev",mood:"annoyed",text:"Stop poking the TV."},dev07:{who:"dev",mood:"happy",text:"Psst. There's a MUMMY in this game now. I made it at three in the morning."}};for(let n of Object.values(ys))n.mood=x1(n.mood);var Yr={},Zu;for(let n of Object.values(ys))(Yr[Zu=n.who]||(Yr[Zu]=new Set)).add(n.mood);var ge=Math.PI*2,wa="#2a1a12";function Wn(n,t,e,i){n.beginPath(),n.arc(t,e,i,0,ge)}function Ta(n,t,e){let i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,t),i.addColorStop(1,e),n.fillStyle=i,n.fillRect(0,0,256,256)}function Rh(n,t,e,{mood:i,blink:s,t:r,sep:o=26,skin:a,line:l=wa,rim:c=null}){if(i==="cool"){n.fillStyle="#0d0d12";for(let h of[-1,1])n.beginPath(),n.roundRect?n.roundRect(t+h*o-19,e-12,38,24,[4,4,12,12]):n.rect(t+h*o-19,e-12,38,24),n.fill(),c&&(n.strokeStyle=c,n.lineWidth=3,n.stroke());n.fillRect(t-o+15,e-9,(o-15)*2,5),n.fillStyle="rgba(255,255,255,0.55)";for(let h of[-1,1])n.beginPath(),n.moveTo(t+h*o-12,e-7),n.lineTo(t+h*o-4,e-7),n.lineTo(t+h*o-12,e+4),n.fill();return}if(i==="happy"){n.strokeStyle=l,n.lineWidth=5,n.lineCap="round";for(let h of[-1,1])n.beginPath(),n.arc(t+h*o,e+5,11,1.15*Math.PI,1.85*Math.PI),n.stroke();return}for(let h of[-1,1]){let d=t+h*o,u=e,f={sleepy:.3,annoyed:.55,angry:.8,shocked:1.35,scared:1.25,sad:.9,hungry:1.15}[i]??1;i==="confused"&&h>0&&(f*=.55),f*=1-s;let m=i==="shocked"?14:13,y=14*f;if(n.fillStyle="#fff",n.beginPath(),n.ellipse(d,u,m,Math.max(1.5,y),0,0,ge),n.fill(),f>.15){let g={sad:[0,4],confused:[-3,-3],hungry:[3,-3],sleepy:[0,2]}[i]||[0,1],x=i==="shocked"||i==="scared"?4:i==="hungry"?8:6.5,v=i==="scared"?Math.sin(r*50)*1.2:0;n.fillStyle="#1a1210",Wn(n,d+g[0]+v,u+g[1],Math.min(x,y)),n.fill(),n.fillStyle="#fff",i==="hungry"?Ju(n,d+g[0]+2,u+g[1]-2,4.5):(Wn(n,d+g[0]+2,u+g[1]-2,1.8),n.fill())}n.strokeStyle=wa,n.lineWidth=2,n.beginPath(),n.ellipse(d,u,m,Math.max(1.5,y),0,0,ge),n.stroke(),(i==="annoyed"||i==="angry")&&a&&f>.1&&(n.fillStyle=a,n.beginPath(),i==="annoyed"?n.rect(d-m-2,u-y-3,m*2+4,y*.75+3):(n.moveTo(d-m-2,u-y-3),n.lineTo(d+m+2,u-y-3),n.lineTo(d+h*-m,u-y*.1),n.lineTo(d+h*m,u-y*.7)),n.fill(),n.strokeStyle=wa,n.lineWidth=2.5,n.beginPath(),i==="annoyed"?(n.moveTo(d-m,u-y*.25),n.lineTo(d+m,u-y*.25)):(n.moveTo(d+h*-m,u-y*.1),n.lineTo(d+h*m,u-y*.7)),n.stroke())}}function Ju(n,t,e,i){n.beginPath();for(let s=0;s<8;s++){let r=s/8*ge-Math.PI/2,o=s%2?i*.4:i;s?n.lineTo(t+Math.cos(r)*o,e+Math.sin(r)*o):n.moveTo(t+Math.cos(r)*o,e+Math.sin(r)*o)}n.closePath(),n.fill()}function Ch(n,t,e,i,s=wa,r=26){n.strokeStyle=s,n.lineWidth=6,n.lineCap="round";for(let o of[-1,1]){let[a,l]={normal:[0,-2],happy:[-6,-8],hungry:[-8,-6],annoyed:[3,3],angry:[10,-6],shocked:[-14,-12],scared:[-14,-4],sad:[-10,4],sleepy:[-2,5]}[i]||[0,-2];i==="cool"&&([a,l]=o>0?[-10,-16]:[2,2]),i==="confused"&&([a,l]=o>0?[-10,-14]:[4,2]),n.beginPath(),n.moveTo(t+o*(r-14),e-22+a),n.quadraticCurveTo(t+o*r,e-27+(a+l)/2,t+o*(r+12),e-24+l),n.stroke()}}function Ph(n,t,e,i,s,r){let o=i>.05;n.fillStyle="#5a1e1e",n.strokeStyle="#2a1010",n.lineWidth=3,n.lineCap="round";let a=(l,c,h=.45)=>{n.fillStyle="#ff7a8a",n.beginPath(),n.ellipse(t,e+c*h,l*.55,c*.35,0,0,ge),n.fill()};if(s==="shocked"){let l=16+i*8;n.beginPath(),n.ellipse(t,e+4,12,l,0,0,ge),n.fill(),n.stroke();return}if(s==="happy"||s==="hungry"){let c=14+i*10;if(n.beginPath(),n.moveTo(t-26,e-4),n.quadraticCurveTo(t,e-8,t+26,e-4),n.quadraticCurveTo(t+26*.8,e+c*1.6,t,e+c*1.4),n.quadraticCurveTo(t-26*.8,e+c*1.6,t-26,e-4),n.fill(),n.stroke(),n.save(),n.clip(),a(26,c*1.4,.75),n.fillStyle="#fff",n.fillRect(t-26,e-9,26*2,7),n.restore(),s==="hungry"){let h=r*.7%1;n.fillStyle="rgba(150,210,255,0.95)",n.beginPath(),n.ellipse(t+18,e+10+h*22,4,6+h*4,0,0,ge),n.fill()}return}if(s==="angry"){let l=o?10+i*16:8;if(n.beginPath(),n.moveTo(t-22,e+2),n.lineTo(t+22,e+2),n.lineTo(t+16,e+2+l),n.lineTo(t-16,e+2+l),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(t-19,e+3,38,Math.min(6,l*.45)),!o){n.strokeStyle="#999",n.lineWidth=1.5;for(let c=-12;c<=12;c+=8)n.beginPath(),n.moveTo(t+c,e+3),n.lineTo(t+c,e+9),n.stroke()}return}if(s==="scared"){let l=6+i*10;n.beginPath();for(let c=0;c<=20;c++){let h=t-24+c*2.4;n.lineTo(h,e-2+Math.sin(c*1.4+r*30)*2)}for(let c=20;c>=0;c--){let h=t-24+c*2.4;n.lineTo(h,e+l+Math.sin(c*1.4+r*30+1)*2)}n.closePath(),n.fillStyle="#fff",n.fill(),n.stroke(),n.strokeStyle="#bbb",n.lineWidth=1.5,n.beginPath(),n.moveTo(t-22,e+l/2),n.lineTo(t+22,e+l/2),n.stroke();return}if(s==="sad"){o&&(n.beginPath(),n.ellipse(t,e+4,14,3+i*10,0,0,ge),n.fill(),n.stroke()),n.strokeStyle="#2a1010",n.lineWidth=3.5,n.beginPath(),n.arc(t,e+22,18,1.2*Math.PI,1.8*Math.PI),n.stroke();return}if(s==="cool"){if(o){n.beginPath(),n.ellipse(t+8,e+2,14,3+i*9,-.15,0,ge),n.fill(),n.stroke();return}n.beginPath(),n.moveTo(t-14,e+4),n.quadraticCurveTo(t+6,e+8,t+20,e-4),n.stroke();return}if(s==="confused"){if(o){n.beginPath(),n.ellipse(t-6,e+2,9,3+i*9,0,0,ge),n.fill(),n.stroke();return}n.beginPath(),n.moveTo(t-18,e+2);for(let l=1;l<=6;l++)n.lineTo(t-18+l*6,e+2+(l%2?-4:3));n.stroke();return}if(s==="sleepy"){let l=6+i*8+Math.max(0,Math.sin(r*.9))*8;n.beginPath(),n.ellipse(t,e+4,10,l,0,0,ge),n.fill(),n.stroke();return}if(s==="annoyed"){if(o){n.beginPath(),n.ellipse(t,e+2,16,2+i*8,.08,0,ge),n.fill(),n.stroke();return}n.beginPath(),n.moveTo(t-16,e+3),n.lineTo(t+16,e-1),n.stroke();return}if(o){let l=3+i*16;n.beginPath(),n.ellipse(t,e,20,l,0,0,ge),n.fill(),n.stroke(),l>8&&a(20,l);return}n.beginPath(),n.arc(t,e-8,16,.25*Math.PI,.75*Math.PI),n.stroke()}function Ih(n,t,e,i,s,r){let[o,a,l,c]=r;if(i==="happy"&&(n.fillStyle="rgba(255,110,120,0.4)",Wn(n,t-38,e+22,11),n.fill(),Wn(n,t+38,e+22,11),n.fill()),i==="angry"){n.save(),n.beginPath(),n.ellipse(o,a,l,c,0,0,ge),n.clip(),n.fillStyle="rgba(230,30,20,0.28)",n.fillRect(0,0,256,256),n.restore(),n.strokeStyle="#d00000",n.lineWidth=4;let h=t+44,d=e-46;for(let[u,f]of[[[-9,-3],[-3,-3]],[[3,-3],[9,-3]],[[-3,-9],[-3,-3]],[[3,3],[3,9]],[[-9,3],[-3,3]],[[3,-9],[3,-3]],[[-3,3],[-3,9]],[[3,3],[9,3]]])n.beginPath(),n.moveTo(h+u[0],d+u[1]),n.lineTo(h+f[0],d+f[1]),n.stroke();n.fillStyle="rgba(255,255,255,0.7)";for(let u of[-1,1]){let f=(s*.8+(u>0?.5:0))%1;Wn(n,t+u*(l+10+f*8),e-10-f*40,6+f*6),n.fill()}}if(i==="scared"||i==="sad"){n.save(),n.beginPath(),n.ellipse(o,a,l,c,0,0,ge),n.clip();let h=n.createLinearGradient(0,a-c,0,a);h.addColorStop(0,i==="scared"?"rgba(90,110,200,0.55)":"rgba(90,110,200,0.3)"),h.addColorStop(1,"rgba(90,110,200,0)"),n.fillStyle=h,n.fillRect(0,0,256,256),n.restore()}if((i==="scared"||i==="shocked")&&(n.fillStyle="rgba(140,200,255,0.95)",n.beginPath(),n.ellipse(t+50,e-18+s*40%30,5,8,0,0,ge),n.fill()),i==="sad"){n.fillStyle="rgba(120,190,255,0.9)";for(let h of[-1,1])for(let d=0;d<2;d++){let u=(s*.9+d*.5+(h>0?.25:0))%1;n.beginPath(),n.ellipse(t+h*30,e+12+u*46,4,6,0,0,ge),n.fill()}}if(i==="shocked"&&(n.fillStyle="#ffdd33",n.font="bold 54px Arial Black, Arial",n.fillText("!",202,72+Math.sin(s*8)*3)),i==="confused"&&(n.fillStyle="#ffdd33",n.font="bold 50px Arial Black, Arial",n.fillText("?",196,70+Math.sin(s*3)*5)),i==="sleepy"){n.fillStyle="#fff";for(let h=0;h<3;h++){let d=(s*.5+h/3)%1;n.globalAlpha=1-d,n.font=`bold ${16+h*6}px Arial`,n.fillText("Z",190+d*30,90-d*60)}n.globalAlpha=1}if(i==="hungry"){n.fillStyle="rgba(255,255,255,0.92)",Wn(n,206,48,30),n.fill(),Wn(n,176,84,7),n.fill(),Wn(n,166,98,4),n.fill(),n.fillStyle="#d49a5c",Wn(n,206,48,19),n.fill(),n.fillStyle="#ff7eb6",Wn(n,206,46,16),n.fill(),n.fillStyle="rgba(255,255,255,0.92)",Wn(n,206,47,6),n.fill();let h=["#3bc9ff","#ffe14d","#7dff6b"];for(let d=0;d<6;d++)n.fillStyle=h[d%3],n.fillRect(206+Math.cos(d)*11-2,46+Math.sin(d*1.7)*10,4,2)}i==="cool"&&(n.fillStyle="rgba(255,255,255,0.9)",Ju(n,214,46+Math.sin(s*3)*3,9+Math.sin(s*5)*2))}function ju(n,t,{t:e=0,talk:i=0,mood:s="normal",blink:r=0}={}){n.save(),n.clearRect(0,0,256,256);let o=Math.sin(e*2)*2+i*2,a=s==="scared"?Math.sin(e*45)*1.5:0,l={t:e,talk:i,mood:s,blink:r,bob:o,cx:128+a,cy:132+o};t==="museos"?E1(n,l):t==="mummy"?b1(n,l):t==="dev"?M1(n,l):_1(n,l,t==="aaron"),n.restore()}function _1(n,{t,talk:e,mood:i,blink:s,bob:r,cx:o,cy:a},l){Ta(n,l?"#3a5a7a":"#0e1a30",l?"#1a2a3a":"#050a14"),l||(n.fillStyle="rgba(80,255,140,0.12)",n.fillRect(10,30,70,50),n.fillRect(176,30,70,50)),n.fillStyle="#8fb3e0",n.beginPath(),n.ellipse(o,280+r,112,95,0,0,ge),n.fill(),n.fillStyle="#6f93c0",n.beginPath(),n.moveTo(o-30,196+r),n.lineTo(o,226+r),n.lineTo(o+30,196+r),n.fill(),n.fillStyle="#ffd34d",n.beginPath(),n.moveTo(o-62,214+r),n.lineTo(o-48,208+r),n.lineTo(o-36,214+r),n.lineTo(o-40,232+r),n.lineTo(o-58,232+r),n.fill();let c=l?"#b07a52":"#e3b48f";n.fillStyle=c,n.fillRect(o-18,a+40,36,30),n.beginPath(),n.ellipse(o-58,a+6,10,16,0,0,ge),n.ellipse(o+58,a+6,10,16,0,0,ge),n.fill(),n.beginPath(),n.ellipse(o,a+4,58,64,0,0,ge),n.fill(),Rh(n,o,a,{mood:i,blink:s,t,skin:c}),Ch(n,o,a,i),n.fillStyle=l?"#8a5a3a":"#c99070",n.beginPath(),n.ellipse(o,a+16,7,9,0,0,ge),n.fill(),l&&(n.fillStyle="#1a1210",n.beginPath(),n.ellipse(o,a+30,24,7,0,0,ge),n.fill()),Ph(n,o,a+40,e,i,t),Ih(n,o,a,i,t,[o,a+4,58,64]),n.fillStyle="#1b2440",n.beginPath(),n.ellipse(o,a-44,64,40,0,Math.PI,0),n.fill(),n.fillRect(o-64,a-46,128,12),n.beginPath(),n.ellipse(o,a-34,72,12,0,0,Math.PI),n.fill(),n.fillStyle="#ffd34d",n.beginPath(),n.moveTo(o,a-76),n.lineTo(o+12,a-66),n.lineTo(o+8,a-52),n.lineTo(o-8,a-52),n.lineTo(o-12,a-66),n.fill(),l&&(n.fillStyle="#111",n.fillRect(o-50,a-70,40,14),n.fillRect(o+10,a-70,40,14),n.fillStyle="#fff",n.font="bold 13px Arial",n.fillText("DAY SHIFT",o-34,248))}function M1(n,{t,talk:e,mood:i,blink:s,bob:r,cx:o,cy:a}){let l=i==="angry";Ta(n,l?"#4a0000":"#14162a",l?"#1a0000":"#2a1640"),n.fillStyle=l?"rgba(255,60,60,0.3)":"rgba(80,160,255,0.25)",n.fillRect(150,30,100,70),n.fillStyle=l?"#6a1030":"#3a2a5a",n.beginPath(),n.ellipse(o,270+r,110,90,0,0,ge),n.fill(),n.beginPath(),n.ellipse(o,a-6,78,86,0,0,ge),n.fill();let c="#f0c4a0";n.fillStyle=c,n.beginPath(),n.ellipse(o,a+4,56,62,0,0,ge),n.fill(),n.fillStyle="#2a1a10",n.beginPath(),n.moveTo(o-60,a-20);for(let h=0;h<=10;h++){let d=Math.PI+h/10*Math.PI,u=64+(h%2?16:0)+Math.sin(t*3+h)*2;n.lineTo(o+Math.cos(d)*u,a-14+Math.sin(d)*u*.85)}if(n.lineTo(o+60,a-20),n.quadraticCurveTo(o,a-38,o-60,a-20),n.fill(),n.strokeStyle="#111",n.lineWidth=10,n.beginPath(),n.arc(o,a+60,50,.1*Math.PI,.9*Math.PI),n.stroke(),n.fillStyle="#ff6fae",n.fillRect(o-62,a+62,22,30),n.fillRect(o+40,a+62,22,30),Rh(n,o,a,{mood:i,blink:s,t,sep:24,skin:c}),i!=="cool"&&i!=="happy"){n.strokeStyle="rgba(90,40,90,0.6)",n.lineWidth=3;for(let h of[-1,1])n.beginPath(),n.arc(o+h*24,a+14,12,.15*Math.PI,.85*Math.PI),n.stroke()}Ch(n,o,a,i,"#2a1a10",24),Ph(n,o,a+36,e,i,t),Ih(n,o,a,i,t,[o,a+4,56,62]),n.fillStyle="#eee",n.fillRect(196,190+r,34,40),n.strokeStyle="#eee",n.lineWidth=5,n.beginPath(),n.arc(232,210+r,9,-Math.PI/2,Math.PI/2),n.stroke(),n.fillStyle="#c33",n.font="bold 11px Arial",n.fillText("DEV",202,214+r)}function b1(n,{t,talk:e,mood:i,blink:s,bob:r,cx:o,cy:a}){Ta(n,"#2a1d0a","#0e0904"),n.fillStyle="rgba(232,201,154,0.12)",n.font="bold 26px serif",["\u2625","\u25C9","\u25EC","\u263C"].forEach((d,u)=>n.fillText(d,14+u%2*196,50+u*46));let l="#e6dcc2",c="#b9ab88";n.fillStyle=l,n.beginPath(),n.ellipse(o,282+r,106,92,0,0,ge),n.fill(),n.beginPath(),n.ellipse(o,a+4,58,66,0,0,ge),n.fill(),n.save(),n.beginPath(),n.ellipse(o,a+4,58,66,0,0,ge),n.clip(),n.strokeStyle=c,n.lineWidth=3;for(let d=-6;d<9;d++)n.beginPath(),n.moveTo(o-70,a+d*14+6),n.lineTo(o+70,a+d*14-6+d%2*8),n.stroke();n.fillStyle="#1a1208",n.beginPath(),n.ellipse(o,a,52,17,0,0,ge),n.fill(),n.restore(),n.strokeStyle=l,n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(o+44,a-40),n.quadraticCurveTo(o+80,a-52+Math.sin(t*2)*6,o+92,a-20+Math.sin(t*2.5)*8),n.stroke(),Rh(n,o,a,{mood:i,blink:s,t,sep:24,skin:"#1a1208",line:"#fff3c4",rim:"#d4a43a"}),Ch(n,o,a-4,i,c,24);let h=a+40;e>.05||["shocked","happy","hungry"].includes(i)?Ph(n,o,h,e*.7,i,t):(n.strokeStyle="#6a5a3a",n.lineWidth=3,n.beginPath(),n.moveTo(o-14,h),n.lineTo(o+14,h),n.stroke()),Ih(n,o,a,i,t,[o,a+4,58,66])}function E1(n,{t,talk:e,blink:i}){Ta(n,"#031208","#062a14"),n.fillStyle="#0c3a1f",n.fillRect(40,50,176,140),n.strokeStyle="#6dff9e",n.lineWidth=4,n.strokeRect(40,50,176,140),n.fillStyle="#6dff9e";let s=i>.5;n.fillRect(84,92,22,s?4:22),n.fillRect(150,92,22,s?4:22),n.beginPath(),n.lineWidth=4,n.strokeStyle="#6dff9e";for(let r=0;r<=40;r++){let o=78+r*2.5,a=152+Math.sin(r*.9+t*20)*e*14;r?n.lineTo(o,a):n.moveTo(o,a)}n.stroke();for(let r=0;r<256;r+=4)n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,r,256,2);n.fillStyle="#6dff9e",n.font="bold 18px monospace",n.fillText("MUSE-OS",92,222)}var $r=class{constructor(t,{canvas:e,img:i,video:s,root:r=t,nameEl:o=null}){this.root=r,this.frame=t,this.canvas=e,this.ctx=e.getContext("2d"),this.img=i,this.video=s,this.nameEl=o,this.who="guard",this.mood="normal",this.talk=0,this.speaking=!1,this.blinkT=2,this.blink=0,this.t=0}setMode(t){this.frame.classList.toggle("has-video",t==="video"),this.frame.classList.toggle("has-img",t==="img")}showFace(t){let e=this.video;t?.kind==="video"?(this.setMode("video"),e.getAttribute("src")!==t.url&&(e.src=t.url),e.muted=!0,e.loop=!0,e.play().catch(()=>{})):(e.paused||e.pause(),e.loop=!1,t?(this.setMode("img"),this.img.getAttribute("src")!==t.url&&(this.img.src=t.url)):this.setMode("canvas"))}update(t){this.t+=t,this.blinkT-=t,this.blinkT<0&&(this.blink=1,this.blinkT<-.12&&(this.blink=0,this.blinkT=2+Math.random()*3));let e=this.speaking?Math.abs(Math.sin(this.t*17))*(.5+Math.random()*.5):0;this.talk+=(e-this.talk)*Math.min(1,t*25),this.frame.classList.toggle("talking",this.speaking),ju(this.ctx,this.who,{t:this.t,talk:this.talk,mood:this.mood,blink:this.blink})}},Aa=class{constructor(t){this.game=t,this.sub=Z("#subtitle"),this.subName=Z(".sub-name",this.sub),this.subText=Z(".sub-text",this.sub),this.fcRoot=Z("#facecam");let e=Z(".fc-frame",this.fcRoot);if(this.facecam=new $r(e,{canvas:Z("canvas",e),img:Z("img",e),video:Z("video",e),root:this.fcRoot,nameEl:Z(".fc-name",this.fcRoot)}),this.tv=null,this.current=null,this.typeT=0,this.fullText="",this.voices=[],this.allowClickSkip=!1,"speechSynthesis"in window){let s=()=>{this.voices=speechSynthesis.getVoices().filter(r=>/^en/i.test(r.lang))};s(),speechSynthesis.onvoiceschanged=s}let i=s=>{!this.current||!this.allowClickSkip||s.target.closest&&s.target.closest("button, .modal, #menu")||this.skipLine()};addEventListener("mousedown",i),addEventListener("touchstart",i,{passive:!0})}stationFor(t){return this.tv&&(t==="dev"||this.forceTv)?this.tv:this.facecam}skipLine(){this.current&&this.current.skip()}stop(){this.skipLine()}update(t){if(this.current){this.typeT+=t;let e=Math.min(this.fullText.length,Math.floor(this.typeT*55));e!==this.shown&&(this.shown=e,this.subText.textContent=this.fullText.slice(0,e),this.sub.classList.toggle("done",e>=this.fullText.length))}this.fcRoot.classList.contains("off")||this.facecam.update(t),this.tv&&this.tv.update(t)}say(t,e={}){let i=ys[t]||{who:e.who||"guard",text:t,mood:"normal"};return this.sayRaw(i.who,i.text,{mood:i.mood,clip:ys[t]?t:null,...e})}async sayRaw(t,e,{mood:i="normal",clip:s=null,hold:r=.35,showCam:o=!0}={}){let a=this.game;if(a.sched.skipping)return;this.skipLine();let l,c=new Promise(g=>l=g),h={skipped:!1,skip:()=>{h.skipped=!0,l()}};this.current=h,document.body.classList.add("talking");let d=this.stationFor(t);d.who=t,d.mood=i;let u=Ku[t]?.name()||t.toUpperCase(),f=a.save.settings.subtitles!=="off";this.sub.classList.toggle("off",!f),this.sub.dataset.who=t,this.sub.dataset.place=d===this.tv?"tv":this.fcRoot.classList.contains("menu-pos")?"left":"",this.subName.textContent=u,this.fullText=e.replace(/\*([^*]+)\*/g,"$1"),this.typeT=0,this.shown=-1,this.subText.textContent="",this.sub.classList.remove("done"),this.sub.style.animation="none",this.sub.offsetWidth,this.sub.style.animation="",d===this.facecam?(this.fcRoot.classList.toggle("off",!o),this.fcRoot.dataset.who=t,d.nameEl.textContent=u,this.fcRoot.style.animation="none",this.fcRoot.offsetWidth,this.fcRoot.style.animation=""):this.tvBubble?.(e);let m=await a.clips.forLine(s,t,i);if(h.skipped)return this._end(h,d);let y=g=>new Promise(p=>setTimeout(p,g*1e3));if(m?.type==="line"){d.setMode("video");let g=d.video;g.src=m.url,g.loop=!1,g.muted=!1,g.volume=Math.min(1,a.save.settings.master*1.1),g.currentTime=0,d.speaking=!1;let p=new Promise(x=>{g.onended=x,g.onerror=x});try{await g.play()}catch{g.muted=!0,g.play().catch(()=>{})}await Promise.race([p,c,y(30)]),g.pause()}else{d.showFace(m),d.speaking=!0;let g=1.2+e.length*.055,p=a.save.settings.voice||"tts",x;if(p==="tts"&&"speechSynthesis"in window&&this.voices.length&&!this.ttsBroken)x=Promise.race([this._tts(t,e),y(g*1.8+2)]).then(v=>{if(v==="nostart"&&!h.skipped)return this.ttsBroken=!0,y(Math.max(a.audio.babble(e,t),.6))});else if(p!=="off"){let v=a.audio.babble(e,t);x=y(Math.max(v,.6))}else x=y(g);await Promise.race([x,c]),"speechSynthesis"in window&&speechSynthesis.cancel(),d.speaking=!1,this.subText.textContent=this.fullText,this.sub.classList.add("done"),h.skipped||await Promise.race([y(r),c])}return this._end(h,d)}_end(t,e){this.current===t&&(this.current=null,document.body.classList.remove("talking"),this.sub.classList.add("off"),e===this.facecam?this.fcRoot.classList.add("off"):this.tvBubble?.(null),e.speaking=!1,e.showFace(e===this.facecam?null:this.game.clips.face(e.who,e.mood)))}_tts(t,e){return new Promise(i=>{let s=e.replace(/\*[^*]+\*/g,"").replace(/—/g,", ").replace(/MUSE-OS/g,"Muse O S"),r=new SpeechSynthesisUtterance(s),o=this.voices,a={guard:0,dev:1,aaron:2,museos:3,mummy:1};r.voice=o[(a[t]??0)%o.length],r.pitch={guard:1.05,dev:.85,aaron:1.3,museos:.4,mummy:.1}[t]??1,r.rate={guard:1.08,dev:1,aaron:1.12,museos:.88,mummy:.75}[t]??1,r.volume=Math.min(1,(this.game.save.settings.master??.8)*1.1);let l=!1;r.onstart=()=>{l=!0},r.onend=()=>i("end"),r.onerror=()=>i(l?"end":"nostart"),speechSynthesis.cancel(),speechSynthesis.speak(r),setTimeout(()=>{!l&&!speechSynthesis.speaking&&(speechSynthesis.cancel(),i("nostart"))},1500)})}setPaused(t){let e=this.facecam.video;t?(e.pause(),"speechSynthesis"in window&&speechSynthesis.pause()):(this.current&&e.src&&!e.ended&&this.facecam.frame.classList.contains("has-video")&&e.play().catch(()=>{}),"speechSynthesis"in window&&speechSynthesis.resume())}};var S1="assets/clips/",w1=["mp4","webm","mov"],T1=["jpg","jpeg","png","webp"],Qu=["guard","dev","aaron","mummy"];function A1(n,t){return new Promise(e=>{let i=!1,s=document.createElement(t==="video"?"video":"img"),r=o=>{if(!i){if(i=!0,t==="video"){s.removeAttribute("src");try{s.load()}catch{}}e(o)}};t==="video"?(s.preload="metadata",s.muted=!0,s.onloadedmetadata=()=>r(!0)):s.onload=()=>r(!0),s.onerror=()=>r(!1),setTimeout(()=>r(!1),8e3),s.src=n})}var Ra=class{constructor(){this.found={},this.probes={},this.listeners=new Set}init(){let t=[],e=r=>{t.push(()=>this._find(`img:${r}`,r,"img"));for(let o of Yr[r]||[])t.push(()=>this._find(`emoimg:${r}-${o}`,`${r}-${o}`,"img")),t.push(()=>this._find(`emovid:${r}-${o}`,`${r}-${o}`,"video"))};e("dev");for(let r of Qu)r!=="dev"&&e(r);for(let r of Object.keys(ys))t.push(()=>this._find(`line:${r}`,r,"video"));let i=0,s=async()=>{for(;i<t.length;)await t[i++]()};Promise.all([s(),s(),s(),s(),s(),s()]).then(()=>this._emit())}_find(t,e,i){return this.probes[t]||(this.probes[t]=(async()=>{for(let s of i==="video"?w1:T1){let r=`${S1}${e}.${s}`;if(await A1(r,i))return this.found[t]={url:r,kind:i},this._emit(),this.found[t]}return null})()),this.probes[t]}_candidates(t,e,i){let s=[];return t&&s.push([`line:${t}`,t,"video","line"]),Qu.includes(e)&&(s.push([`emovid:${e}-${i}`,`${e}-${i}`,"video","emotion"]),s.push([`emoimg:${e}-${i}`,`${e}-${i}`,"img","emotion"]),s.push([`img:${e}`,e,"img","photo"])),s}async forLine(t,e,i){let s=performance.now()+450;for(let[r,o,a,l]of this._candidates(t,e,i)){if(this.found[r])return{...this.found[r],type:l};let c=s-performance.now(),h=c>0?await Promise.race([this._find(r,o,a),new Promise(d=>setTimeout(()=>d(null),c))]):null;if(h)return{...h,type:l}}return null}face(t,e="normal"){for(let[i]of this._candidates(null,t,e))if(this.found[i])return this.found[i];return null}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}_emit(){for(let t of this.listeners)t()}};function fr(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ce,c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=tf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][u]);let m=tf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function tf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Be(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let y=h.getComponent(u,m);a.setComponent(u+d,m,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function R1(n){return Object.keys(n.attributes).sort().map(e=>e+n.attributes[e].itemSize).join(",")+(n.index?"|i":"|n")}function Si(n,t=()=>!1){n.updateMatrixWorld(!0);let e=new ce().copy(n.matrixWorld).invert(),i=new Map,s=l=>{if(!(l!==n&&t(l))){if(l.isMesh&&!l.isInstancedMesh&&!l.isSkinnedMesh&&l!==n&&l.visible&&l.children.length===0&&!Array.isArray(l.material)&&!l.material.transparent&&!l.userData.noBatch&&l.geometry?.attributes?.position){let c=`${l.material.uuid}|${l.castShadow}|${l.receiveShadow}|${l.renderOrder}|${R1(l.geometry)}`;i.has(c)||i.set(c,[]),i.get(c).push(l)}for(let c of[...l.children])c.visible&&s(c)}};s(n);let r=0,o=0,a=new ce;for(let l of i.values()){if(l.length<2)continue;let c=l.map(f=>{let m=f.geometry.clone();for(let y of Object.keys(m.morphAttributes))delete m.morphAttributes[y];return a.multiplyMatrices(e,f.matrixWorld),m.applyMatrix4(a),m}),h;try{h=fr(c,!1)}catch{h=null}for(let f of c)f.dispose();if(!h)continue;let d=l[0],u=new B(h,d.material);u.castShadow=d.castShadow,u.receiveShadow=d.receiveShadow,u.renderOrder=d.renderOrder,u.name="batched",n.add(u);for(let f of l)f.parent?.remove(f),o++;r++}return{merged:r,removed:o}}function Ca(n,t=[]){let e=new Set(n),i=new Set(t),s=0;for(let r of n){let o=Si(r,a=>e.has(a)||i.has(a));s+=o.removed}return s}var ef={},we=(n,t)=>ef[n]||(ef[n]=t()),Lh={};function Wt(n,t){return Lh[n]||(Lh[n]=new ot(t)),Lh[n]}var Tt={marble:()=>Wt("marble",{color:15657698,roughness:.35}),stoneWhite:()=>Wt("stoneWhite",{color:14275527,roughness:.6}),darkWood:()=>Wt("darkWood",{color:4861724,roughness:.6}),wood:()=>Wt("wood",{color:9067059,roughness:.7}),metal:()=>Wt("metal",{color:9146262,roughness:.35,metalness:.8}),black:()=>Wt("black",{color:1381653,roughness:.6}),brass:()=>Wt("brass",{color:13214282,roughness:.35,metalness:.9}),velvet:()=>Wt("velvet",{color:9048098,roughness:.9}),glass:()=>Wt("glass",{color:11193565,roughness:.05,metalness:.1,transparent:!0,opacity:.18,depthWrite:!1}),plant:()=>Wt("plant",{color:3107636,roughness:.8,side:ke}),terracotta:()=>Wt("terracotta",{color:11884591,roughness:.75}),bronze:()=>Wt("bronze",{color:9071162,roughness:.4,metalness:.7}),red:()=>Wt("red",{color:10230812,roughness:.8}),dough:()=>Wt("dough",{color:13933148,roughness:.7})};function Te(n,t=!0,e=!0){return n.traverse(i=>{i.isMesh&&(i.castShadow=t,i.receiveShadow=e)}),n}function rt(n,t,e,i,s=0,r=0,o=0){let a=new B(new Qt(n,t,e),i);return a.position.set(s,r+t/2,o),a}var nf=[16744118,7027230,16774112,8049663,16765773],sf=[16726843,3918335,16769357,8257387,16777215,12086271];function Xn({frosting:n=0,glow:t=!1,scale:e=1}={}){let i=new dt,s=new B(we("dough",()=>new Ke(.12,.062,12,24)),Tt.dough());s.rotation.x=Math.PI/2,i.add(s);let r=nf[n%nf.length],o=Wt("frost"+r+t,{color:r,roughness:.3,emissive:t?r:0,emissiveIntensity:t?.35:0}),a=new B(we("frost",()=>new Ke(.12,.058,10,24,Math.PI*2)),o);a.rotation.x=Math.PI/2,a.scale.set(1.03,1.03,.62),a.position.y=.022,i.add(a);let l=we("sprinkles"+n%5,()=>{let c=Pe(n*31+7),h=new Cn(.006,.022,2,4),d=[],u=new Nt,f=new ce,m=new An,y=new mn;for(let g=0;g<14;g++){let p=c()*Math.PI*2,x=.09+c()*.06;u.set(sf[Math.floor(c()*sf.length)]);let v=h.clone();m.setFromEuler(y.set(Math.PI/2,0,c()*Math.PI)),v.applyMatrix4(f.compose(new A(Math.cos(p)*x,.06,Math.sin(p)*x),m,new A(1,1,1)));let _=v.attributes.position.count,T=new Float32Array(_*3);for(let S=0;S<_;S++)T[S*3]=u.r,T[S*3+1]=u.g,T[S*3+2]=u.b;v.setAttribute("color",new Be(T,3)),d.push(v)}return fr(d,!1)});return i.add(new B(l,Wt("sprinkleMat"+t,{vertexColors:!0,roughness:.4,emissive:t?4473924:0}))),i.scale.setScalar(e),i}var kh=null;function rf(n=0){let t=new dt,e=Xn({frosting:n,glow:!0,scale:1.3});if(e.rotation.x=.5,t.add(e),!kh){let[s,r]=ae(128,128),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,190,220,0.9)"),o.addColorStop(.4,"rgba(255,120,180,0.25)"),o.addColorStop(1,"rgba(255,120,180,0)"),r.fillStyle=o,r.fillRect(0,0,128,128),kh=he(s)}let i=new ir(new ds({map:kh,transparent:!0,depthWrite:!1,blending:_n}));return i.scale.set(.9,.9,1),t.add(i),t.userData.spin=e,t.userData.halo=i,t}function Dh(n=7,t=.45,e=Tt.marble()){let i=new dt;i.add(rt(t*2.6,.35,t*2.6,e));let s=new B(we("colshaft"+n+t,()=>new se(t*.88,t,n-.8,20)),e);return s.position.y=.35+(n-.8)/2,i.add(s),i.add(rt(t*2.4,.15,t*2.4,e,0,n-.45,0)),i.add(rt(t*2.7,.3,t*2.7,e,0,n-.3,0)),Te(i)}function vs(n=.8,t=1.1,e=Tt.marble()){let i=new dt;return i.add(rt(n*1.15,.1,n*1.15,e)),i.add(rt(n,t-.2,n,e,0,.1,0)),i.add(rt(n*1.15,.1,n*1.15,e,0,t-.1,0)),Te(i)}function Pa(n,t=15328474){let e=new dt,i=Wt("bust"+t,{color:t,roughness:.45});e.add(vs(.7,1.2));let s=new B(we("bustsh",()=>new te(.32,16,10,0,Math.PI*2,0,Math.PI/2)),i);s.scale.set(1.1,.6,.65),s.position.y=1.2,e.add(s);let r=new B(we("bustneck",()=>new se(.08,.1,.2,10)),i);r.position.y=1.42,e.add(r);let o=new B(we("busthead",()=>new te(.15,16,12)),i);o.scale.set(.9,1.1,1),o.position.y=1.62,e.add(o);let a=new B(we("bustnose",()=>new hn(.03,.08,6)),i);a.rotation.x=Math.PI/2,a.position.set(0,1.62,.15),e.add(a);let l=new B(we("laurel",()=>new Ke(.15,.02,6,16)),Tt.brass());if(l.rotation.x=Math.PI/2-.2,l.position.y=1.72,e.add(l),n){let c=new B(new Bt(.6,.12),new ot({map:Me(n,{w:256,h:52,bg:"#2a241c",fg:"#e9d7a8",font:"bold 26px Georgia, serif"}),roughness:.5}));c.position.set(0,.95,.357),e.add(c)}return Te(e)}function of(){let n=[],t=[[0,0],[.08,0],[.12,.08],[.22,.3],[.26,.5],[.22,.75],[.1,.92],[.08,1.05],[.11,1.1]];for(let[s,r]of t)n.push(new Q(s,r));let e=new dt,i=new B(we("amph",()=>new Br(n,18)),Tt.terracotta());e.add(i);for(let s of[-1,1]){let r=new B(we("amphh",()=>new Ke(.1,.02,6,12,Math.PI)),Tt.terracotta());r.position.set(s*.12,.88,0),r.rotation.z=s>0?-Math.PI/2:Math.PI/2,e.add(r)}return Te(e)}function Ia(n=2.2){let t=new dt;t.add(rt(n,.08,.5,Tt.darkWood(),0,.42,0));for(let e of[-1,1])t.add(rt(.08,.42,.42,Tt.metal(),e*(n/2-.2),0,0));return Te(t)}function pr(){let n=new dt;n.add(new B(we("stanb",()=>new se(.16,.18,.04,14)),Tt.brass()));let t=new B(we("stanp",()=>new se(.03,.03,.95,8)),Tt.brass());t.position.y=.48,n.add(t);let e=new B(we("stant",()=>new te(.05,10,8)),Tt.brass());return e.position.y=.98,n.add(e),Te(n)}function Zr(n){let t=new sr(new A(0,.92,0),new A(n/2,.62,0),new A(n,.92,0)),e=new B(new oa(t,12,.025,6),Tt.velvet());return e.castShadow=!0,e}function Uh(n=1){let t=new dt,e=Pe(n),i=we("leaf",()=>{let r=new jn;return r.moveTo(0,0),r.quadraticCurveTo(.12,.4,0,.9),r.quadraticCurveTo(-.12,.4,0,0),new ra(r,4)});for(let r=0;r<9;r++){let o=new B(i,Tt.plant()),a=r/9*Math.PI*2+e();o.rotation.set(0,a,0),o.rotateX(-.6-e()*.5),o.scale.setScalar(.8+e()*.7),t.add(o)}let s=new B(we("pot",()=>new se(.25,.2,.35,12)),Tt.terracotta());return s.position.y=.17,t.add(s),t.children.forEach((r,o)=>{o<9&&(r.position.y=.33)}),Te(t,!0,!1)}function Nh(n=1,t=1){let e=Pe(n),i=new ia(.6*t,1),s=i.attributes.position;for(let o=0;o<s.count;o++)s.setXYZ(o,s.getX(o)*(.8+e()*.4),s.getY(o)*(.6+e()*.3),s.getZ(o)*(.8+e()*.4));i.computeVertexNormals();let r=new B(i,Wt("rock",{color:6050634,roughness:.95,flatShading:!0}));return r.position.y=.2*t,r.castShadow=r.receiveShadow=!0,r}function Kr(n=1.4,t=1,e=.8,i=null){let s=new dt;s.add(rt(n,.9,e,Tt.darkWood()));let r=rt(n,t,e,Tt.glass(),0,.9,0);return r.castShadow=!1,s.add(r),s.add(rt(n+.04,.04,e+.04,Tt.brass(),0,.9+t,0)),i&&(i.position.y=.9,s.add(i)),Te(s),r.castShadow=!1,s}function qi(n,t,e={}){let i=new dt,s=rt(.08,.9,.08,Tt.black());i.add(s);let r=new B(new Bt(.9,.56),new ot({map:Th({title:n,body:t,...e}),roughness:.6,emissive:16777215,emissiveIntensity:.02}));r.position.set(0,1.05,.05),r.rotation.x=-.5,i.add(r);let o=new B(new Qt(.96,.6,.03),Tt.black());return o.position.z=-.02,r.add(o),Te(i,!0,!0)}function mr(n,t,e=2,i=1.25,s={}){return new B(new Bt(e,i),new ot({map:Th({title:n,body:t,w:512,h:Math.round(512*i/e),...s}),roughness:.6,emissive:16777215,emissiveIntensity:.03}))}function La({title:n="PUZZLE",color:t="#6dff9e"}={}){let e=new dt;e.add(rt(.7,1,.5,Tt.black()));let i=rt(.8,.08,.6,Tt.metal(),0,1,0);e.add(i);let[s,r]=ae(320,200),o=he(s),a=new ie({map:o,toneMapped:!1}),l=new B(new Bt(.62,.39),a);l.position.set(0,1.32,.03),l.rotation.x=-.45;let c=rt(.7,.46,.06,Tt.black(),0,1.08,0);c.rotation.x=-.45,c.position.set(0,1.31,-.005),e.add(c),e.add(l);let h=new Le(t,.8,3.5,2);h.position.set(0,1.5,.5),e.add(h);let d=0,u=(f,m=t,y="")=>{r.fillStyle="#05080a",r.fillRect(0,0,320,200),r.strokeStyle=m,r.lineWidth=6,r.strokeRect(6,6,308,188),r.fillStyle=m,r.font='bold 26px "Courier New", monospace',r.textAlign="center",r.fillText(n,160,48),r.font='bold 22px "Courier New", monospace',f.forEach((g,p)=>r.fillText(g,160,98+p*30)),y&&(r.font='18px "Courier New", monospace',r.fillText(y,160,178));for(let g=0;g<200;g+=4)r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,g,320,2);o.needsUpdate=!0,h.color.set(m)};return u(["LOCKED"],t,"[E] INSPECT"),Te(e),l.castShadow=!1,{group:e,draw:u,light:h,update(f){d+=f,a.color.setScalar(.85+Math.sin(d*6)*.15)}}}function af(){let n=new dt,t=Tt.bronze(),e=rt(1.3,.9,1.1,t,0,.55,0);n.add(e);for(let s of[-1,1]){let r=new B(we("wheel",()=>new Ke(.55,.06,8,24)),Tt.darkWood());r.position.set(s*.75,.6,0),r.rotation.y=Math.PI/2,n.add(r);for(let o=0;o<4;o++){let a=rt(.04,1.1,.04,Tt.darkWood(),s*.75,.05,0);a.rotation.x=o*Math.PI/4,a.position.set(s*.75,.6,0),n.add(a)}}let i=rt(.08,.08,2.2,Tt.darkWood(),0,.5,1.6);return n.add(i),Te(n)}function lf(){let n=new dt,t=Wt("trik",{color:13221019,roughness:.8,map:ve("bone",1,1)}),e=new B(we("frill",()=>new Ei(.85,24,0,Math.PI)),Wt("frillm",{color:12760207,roughness:.8,side:ke}));e.position.set(0,.5,-.2),e.rotation.x=-.3,n.add(e);let i=new B(we("trihead",()=>new hn(.35,1.2,10)),t);i.rotation.x=Math.PI/2+.3,i.position.set(0,.35,.5),n.add(i);let s=we("horn",()=>new hn(.07,.8,8));for(let o of[-1,1]){let a=new B(s,t);a.position.set(o*.22,.7,.2),a.rotation.set(1.1,0,-o*.2),n.add(a)}let r=new B(s,t);return r.scale.set(.8,.45,.8),r.position.set(0,.5,.95),r.rotation.x=.6,n.add(r),Te(n)}function cf(){let n=new dt,t=Wt("ammo",{color:11046506,roughness:.6});for(let e=0;e<4;e++){let i=new B(new Ke(.06+e*.045,.02+e*.012,6,18),t);i.position.y=.25,n.add(i)}return n}function hf(){let n=new dt,t=Wt("sarc",{color:13935674,roughness:.35,metalness:.7}),e=Wt("sarcb",{color:2047370,roughness:.5}),i=new B(we("sarcb",()=>new Cn(.32,1.4,4,12)),t);i.scale.set(1,1,.55),i.position.y=1.05,n.add(i);let s=new B(we("sarcf",()=>new te(.2,12,10)),t);s.position.set(0,1.62,.12),s.scale.set(1,1.2,.6),n.add(s);for(let o of[-1,1]){let a=rt(.12,.6,.05,e,o*.2,1.35,.13);n.add(a)}let r=new B(we("sarce",()=>new Qt(.22,.03,.02)),Wt("sarceye",{color:1118481}));return r.position.set(0,1.66,.24),n.add(r),Te(n)}function Oh(n=1){let t=Pe(n),e=new dt,i=Wt("sheet",{color:14210252,roughness:.95}),s=1.6+t()*.6,r=new se(.18,.5,s,12,6),o=r.attributes.position;for(let c=0;c<o.count;c++){let h=o.getY(c),d=Math.atan2(o.getZ(c),o.getX(c)),u=1+Math.sin(d*5+h*3)*.06;o.setX(c,o.getX(c)*u),o.setZ(c,o.getZ(c)*u)}r.computeVertexNormals();let a=new B(r,i);a.position.y=s/2,e.add(a);let l=new B(we("sheethead",()=>new te(.22,12,10)),i);if(l.position.y=s+.1,e.add(l),t()<.5){let c=new B(we("sheetarm",()=>new Cn(.07,.5,4,6)),i);c.position.set(.3,s*.75,.15),c.rotation.set(-.9,0,-.5),e.add(c)}return Te(e)}function df(n=1){let t=Wt("crate",{map:ve("crate"),roughness:.85}),e=new B(we("crate",()=>new Qt(1,1,1)),t);return e.scale.setScalar(n),e.position.y=n/2,e.castShadow=e.receiveShadow=!0,e}function uf(n=1.8,t=.8){let e=new dt;e.add(rt(n,.06,t,Tt.darkWood(),0,.74,0));for(let i of[-1,1])e.add(rt(.06,.74,t-.05,Tt.darkWood(),i*(n/2-.05),0,0));return e.add(rt(.5,.6,t-.1,Tt.darkWood(),n/2-.35,.08,0)),Te(e)}function ff(){let n=new dt,t=Wt("chairseat",{color:2238e3,roughness:.7});n.add(rt(.5,.08,.5,t,0,.45,0));let e=rt(.5,.6,.07,t,0,.55,-.24);n.add(e);let i=new B(new se(.03,.03,.4,8),Tt.metal());i.position.y=.25,n.add(i);for(let s=0;s<5;s++){let r=rt(.04,.03,.32,Tt.metal(),0,.03,0);r.rotation.y=s/5*Math.PI*2,r.position.set(Math.sin(r.rotation.y)*.16,.03,Math.cos(r.rotation.y)*.16),n.add(r)}return Te(n)}function pf(n=.95,t=.6,e=1024,i=640){let s=new dt;s.add(rt(.25,.03,.2,Tt.black())),s.add(rt(.05,.25,.05,Tt.black(),0,.03,-.03));let r=rt(n+.06,t+.06,.05,Tt.black(),0,.25,-.03);s.add(r);let[o,a]=ae(e,i),l=he(o),c=new B(new Bt(n,t),new ie({map:l,toneMapped:!1}));c.position.set(0,.28+t/2,0),s.add(c);let h=new Le(10471167,1.2,4,2);return h.position.set(0,.6,.5),s.add(h),Te(s),c.castShadow=!1,{group:s,canvas:o,ctx:a,texture:l,screen:c,glow:h}}function Yi(){let n=new dt,t=new B(new se(.028,.03,.26,12),Wt("flbody",{color:1842204,roughness:.4,metalness:.6}));t.rotation.x=Math.PI/2,n.add(t);let e=new B(new se(.045,.03,.08,14),Wt("flhead",{color:2763306,roughness:.3,metalness:.8}));e.rotation.x=Math.PI/2,e.position.z=-.16,n.add(e);let i=new B(new Ei(.04,16),new ie({color:16774876}));i.position.z=-.201,i.rotation.y=Math.PI,n.add(i);let s=new B(new se(.031,.031,.1,12),Wt("flgrip",{color:3355443,roughness:.9}));return s.rotation.x=Math.PI/2,s.position.z=.06,n.add(s),n.userData.lens=i,n}function ka(){return new B(new Qt(.7,.25,.08),[Tt.black(),Tt.black(),Tt.black(),Tt.black(),new ie({map:Me("EXIT",{w:256,h:96,bg:"#0a3d1c",fg:"#6dff9e",font:"bold 64px Arial Black, Arial"}),toneMapped:!1}),Tt.black()])}function Fh(n,t=""){let e=new dt;e.add(rt(.06,1.6,.06,Tt.brass()));let i=new B(new Bt(1.5,.45),new ot({map:Me(n+(t?"  "+t:""),{w:512,h:150,bg:"#1d2433",fg:"#f3e6c4",font:"bold 44px Arial Black, Arial",border:"#c9a24a"}),roughness:.5,emissive:16777215,emissiveIntensity:.05,side:ke}));return i.position.y=1.6,e.add(i),Te(e)}function mf(){let n=new dt,t=new B(new te(.6,16,12),Wt("beanbag",{color:12729194,roughness:.9}));return t.scale.set(1,.55,1),t.position.y=.3,n.add(t),Te(n)}function gf(){let n=new dt;n.add(rt(1,2,.8,Wt("vend",{color:11739178,roughness:.5})));let t=new B(new Bt(.62,1.3),new ie({map:Me(`OUT OF
ORDER
(sorry)`,{w:256,h:512,bg:"#1a2a3a",fg:"#ff6b6b",font:"bold 54px Arial Black, Arial"}),toneMapped:!1}));return t.position.set(-.12,1.15,.401),n.add(t),Te(n)}function Qn(n,t,e,i=2){let s=new Qt(n,t,e),r=s.attributes.uv,o=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;r.setXY(c,r.getX(c)*o[a][0]/i,r.getY(c)*o[a][1]/i)}return s}function Da(n,t,e=2){let i=new Bt(n,t),s=i.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*n/e,s.getY(r)*t/e);return i}var $i=class{constructor(t){this.game=t,this.scene=new nr,this.colliders=[],this.interactables=[],this.triggers=[],this.updaters=[],this.collectibles=[],this.surface="marble",this.surfaceAt=null,this.wallT=.4}add(t,e=0,i=0,s=0,r=0){return t.position.set(e,i,s),t.rotation.y=r,this.scene.add(t),t}addCollider(t,e,i,s,r=null){let o={minX:Math.min(t,e),maxX:Math.max(t,e),minZ:Math.min(i,s),maxZ:Math.max(i,s),tag:r,enabled:!0};return this.colliders.push(o),o}addBoxCollider(t,e,i,s,r=0){let o=Math.abs(Math.sin(r))>.7,a=(o?s:i)/2,l=(o?i:s)/2;return this.addCollider(t-a,t+a,e-l,e+l)}addInteractable(t){let e={radius:2.4,enabled:!0,height:1.2,...t};return this.interactables.push(e),e}addTrigger(t){let e={once:!0,fired:!1,enabled:!0,...t};return this.triggers.push(e),e}addUpdater(t){return this.updaters.push(t),t}addCollectible(t,e,i,s,r=0){if(this.game.save.donuts.includes(t))return null;let o=rf(r);o.position.set(e,i,s),this.scene.add(o);let a={id:t,obj:o,base:i,t:Math.random()*6,taken:!1};return this.collectibles.push(a),a}wallX(t,e,i,s,r,o=[],a=2){this._wall("x",t,e,i,s,r,o,a)}wallZ(t,e,i,s,r,o=[],a=2){this._wall("z",t,e,i,s,r,o,a)}_wall(t,e,i,s,r,o,a,l){let c=this.wallT,h=[],d=Math.min(i,s),u=Math.max(i,s);for(let f of[...a].sort((m,y)=>m.c-y.c)){let m=f.c-f.w/2,y=f.c+f.w/2;m>d&&h.push([d,m,0,r]),f.h<r&&h.push([m,y,f.h,r]),d=y}d<u&&h.push([d,u,0,r]);for(let[f,m,y,g]of h){let p=m-f,x=(f+m)/2,v=g-y,_=t==="x"?Qn(p,v,c,l):Qn(c,v,p,l),T=new B(_,o);t==="x"?T.position.set(x,y+v/2,e):T.position.set(e,y+v/2,x),T.receiveShadow=!0,T.castShadow=y>0,this.scene.add(T),y===0&&(t==="x"?this.addCollider(f,m,e-c/2,e+c/2):this.addCollider(e-c/2,e+c/2,f,m))}}floor(t,e,i,s,r,o=0,a=2){let l=e-t,c=s-i,h=new B(Da(l,c,a),r);return h.rotation.x=-Math.PI/2,h.position.set((t+e)/2,o,(i+s)/2),h.receiveShadow=!0,this.scene.add(h),h}ceiling(t,e,i,s,r,o,a=2){let l=e-t,c=s-i,h=new B(Da(l,c,a),o);return h.rotation.x=Math.PI/2,h.position.set((t+e)/2,r,(i+s)/2),this.scene.add(h),h}update(t){for(let s of this.updaters)s(t);let e=this.game,i=e.player;for(let s of this.collectibles)if(!s.taken&&(s.t+=t,s.obj.position.y=s.base+Math.sin(s.t*2)*.08,s.obj.userData.spin.rotation.y+=t*1.6,s.obj.userData.halo.material.opacity=.6+Math.sin(s.t*4)*.3,i&&i.enabled)){let r=i.pos.x-s.obj.position.x,o=i.pos.z-s.obj.position.z;r*r+o*o<1.1*1.1&&Math.abs(s.obj.position.y-1)<1.6&&(s.taken=!0,this.scene.remove(s.obj),e.collectDonut(s.id))}if(i&&i.enabled)for(let s of this.triggers){if(!s.enabled||s.once&&s.fired)continue;let r;s.r!=null?r=Math.hypot(i.pos.x-s.x,i.pos.z-s.z)<s.r:r=i.pos.x>s.minX&&i.pos.x<s.maxX&&i.pos.z>s.minZ&&i.pos.z<s.maxZ,r&&!s.inside&&(s.fired=!0,s.onEnter?.()),s.inside=r}}dispose(){this.scene.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){let e=Array.isArray(t.material)?t.material:[t.material];for(let i of e)i.map&&!i.map.userData?.keep&&i.map.dispose(),i.dispose()}})}};var Ua=null;function Na(){return Ua||(Ua={bone:new ot({color:15129796,roughness:.72,map:ve("bone",1,2)}),dark:new ot({color:1380364,roughness:1}),tooth:new ot({color:16183518,roughness:.35}),eye:new ot({color:16723984,emissive:16722432,emissiveIntensity:5})},Ua)}var yf={};function Qe(n,t){return yf[n]||(yf[n]=t())}function Bh(n,t,e,i,s,r=0){let o=new Qt(n,t,e,6,6,10);o.translate(0,0,e/2);let a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l)/(n/2),h=a.getY(l)/(t/2),d=Math.pow(Math.pow(Math.abs(c),2.6)+Math.pow(Math.abs(h),2.6),1/2.6);if(d>1e-6){let m=Math.max(Math.abs(c),Math.abs(h))/d;a.setX(l,a.getX(l)*m),a.setY(l,a.getY(l)*m)}let u=a.getZ(l)/e;a.setX(l,a.getX(l)*(1+(i-1)*u));let f=a.getY(l)*(1+(s-1)*u);f>0&&(f-=r*u*u),a.setY(l,f)}return o.computeVertexNormals(),o}function Ge(n,t,e=!0){let i=new B(n,t);return i.castShadow=e,i.receiveShadow=!1,i}function Zi(n,t,e,i){let s=new dt,r=Ge(Qe(`shaft${n}${t}${e}`,()=>new se(e,t,n,8)),i);r.position.y=-n/2,s.add(r);let o=Ge(Qe(`knob${t}`,()=>new te(t*1.35,10,8)),i);s.add(o);let a=Ge(Qe(`knob${e}`,()=>new te(e*1.35,10,8)),i);return a.position.y=-n,s.add(a),s}function zh(n,t){let e=new dt,i=Ge(Qe("vcent",()=>new te(.13,10,8)),t);i.scale.set(1,.85,1.25),e.add(i);let s=Ge(Qe("vspine",()=>new Qt(.05,.34,.11)),t);s.position.y=.2,e.add(s);let r=Ge(Qe("vtrans",()=>new Qt(.42,.05,.07)),t);return r.position.y=.05,e.add(r),e.scale.setScalar(n),e}function Gh(n=Na()){let t=new dt,e=1.65,i=Ge(Qe("skull",()=>Bh(.62,.72,e,.55,.62,.12)),n.bone);i.position.z=-.1,t.add(i);let s=Ge(Qe("crest",()=>Bh(.46,.16,1,.5,.6)),n.bone);s.position.set(0,.36,-.08),t.add(s);let r=Qe("sph",()=>new te(.12,10,8)),o=[];for(let h of[-1,1]){let d=Ge(r,n.dark,!1);d.position.set(h*.25,.16,.36),d.scale.set(.7,.95,1.1),t.add(d);let u=new B(Qe("eye",()=>new te(.06,10,8)),n.eye);u.position.set(h*.29,.16,.39),u.visible=!1,t.add(u),o.push(u);let f=Ge(r,n.dark,!1);f.position.set(h*.2,0,.88),f.scale.set(.55,.75,1.9),t.add(f);let m=Ge(r,n.dark,!1);m.position.set(h*.08,.1,1.46),m.scale.set(.35,.3,.45),t.add(m);let y=Ge(r,n.bone);y.position.set(h*.3,-.18,.05),y.scale.set(.8,1.2,1.4),t.add(y)}let a=Qe("tooth",()=>{let h=new hn(.035,.17,6);return h.rotateX(Math.PI),h});for(let h of[-1,1])for(let d=0;d<10;d++){let u=.3+d*.125,f=(u+.1)/e,m=Ge(a,n.tooth,!1);m.position.set(h*(.31*(1-.45*f)-.035),-.36*(1-.38*f)-.06,u),m.scale.setScalar(d<2||d>7?.75:1.05),t.add(m)}let l=new dt;l.position.set(0,-.2,-.05),t.add(l);let c=Ge(Qe("jaw",()=>Bh(.56,.2,1.55,.5,.8)),n.bone);c.position.set(0,-.27,0),l.add(c);for(let h of[-1,1])for(let d=0;d<9;d++){let u=.35+d*.125,f=u/1.55,m=Ge(a,n.tooth,!1);m.rotation.x=Math.PI,m.position.set(h*(.28*(1-.5*f)-.04),-.27+.1*(1-.2*f)+.06,u),m.scale.setScalar(.85),l.add(m)}return{head:t,jaw:l,eyes:o}}var xs=class{constructor({eyeLight:t=!0}={}){let e=Na();this.group=new dt,this.body=new dt,this.body.position.y=3.42,this.group.add(this.body),this.alive=!1;let i=Ge(Qe("pelvis",()=>new te(.45,14,10)),e.bone);i.scale.set(.9,.75,1.45),i.position.z=.05,this.body.add(i);for(let d of[-1,1]){let u=Ge(Qe("ilium",()=>new te(.5,12,10)),e.bone);u.scale.set(.14,.55,1.35),u.position.set(d*.26,.14,.05),this.body.add(u);let f=Ge(Qe("pubis",()=>new se(.05,.08,1,6)),e.bone);f.position.set(d*.15,-.55,.35),f.rotation.x=.5,this.body.add(f)}let s=[];for(let d=0;d<11;d++){let u=d/10,f=-.25+u*3,m=.38+Math.sin(u*Math.PI)*.1+u*.32;s.push([f,m]);let y=zh(1.05-.15*u,e.bone);y.position.set(0,m,f),y.rotation.x=-.1,this.body.add(y)}let r=Math.PI*2-.9;for(let d=0;d<9;d++){let u=d/8,f=.3+u*2.3,m=.38+Math.sin((f+.25)/3*Math.PI)*.1+(f+.25)/3*.32,y=.48+.34*Math.sin((.15+u*.75)*Math.PI),g=Qe(`rib${d}`,()=>new Ke(y,.04,6,22,r)),p=Ge(g,e.bone);p.rotation.order="XYZ",p.rotation.x=.38,p.rotation.z=Math.PI/2+.45,p.scale.set(.58,1.12,1),p.position.set(0,m-y*1.05+.05,f-.15),this.body.add(p)}let o=new A(0,.86,2.85),a=new A(0,1.55,3.42);for(let d=0;d<5;d++){let u=o.clone().lerp(a,d/4),f=zh(.95,e.bone);f.position.copy(u),f.rotation.x=-.9,this.body.add(f)}this.headPivot=new dt,this.headPivot.position.set(0,1.72,3.5),this.body.add(this.headPivot);let l=Gh(e);this.headPivot.add(l.head),this.jaw=l.jaw,this.eyes=l.eyes,this.eyeLight=null,t&&(this.eyeLight=new Le(16722432,0,9,1.6),this.eyeLight.position.set(0,.2,.9),l.head.add(this.eyeLight)),this.arms=[];for(let d of[-1,1]){let u=new dt;u.position.set(d*.5,.15,2.45),u.rotation.set(-.6,0,d*.2),this.body.add(u),u.add(Zi(.45,.05,.04,e.bone));let f=new dt;f.position.y=-.45,f.rotation.x=-1.1,u.add(f),f.add(Zi(.36,.04,.035,e.bone));for(let m of[-1,1]){let y=Zi(.14,.02,.015,e.bone);y.position.set(m*.03,-.36,0),y.rotation.x=-.6,f.add(y)}this.arms.push(u)}this.tail=[];let c=this.body;for(let d=0;d<14;d++){let u=new dt;d===0?u.position.set(0,.32,-.5):u.position.set(0,0,-.5*(1-d*.03)),c.add(u);let f=zh(1-d*.062,e.bone);if(u.add(f),d<9){let m=Ge(Qe("chev",()=>new Qt(.04,.32,.08)),e.bone);m.position.y=-.2*(1-d*.08),m.rotation.x=-.4,u.add(m)}this.tail.push(u),c=u}this.legs=[-1,1].map(d=>this._leg(d,e)),this.anim={mode:"pose",phase:0,speed:0,roar:0,roarT:0,headYaw:.28,headPitch:.05,jaw:.28,targetYaw:.28,targetPitch:.05,breathe:0,time:0,lean:0},this.applyPose(0);let h=[this.body,this.headPivot,this.jaw,...this.tail,...this.arms,...this.legs.flatMap(d=>[d.hip,d.knee,d.ankle,d.foot])];Ca(h,this.eyes)}_leg(t,e){let i=new dt;i.position.set(t*.44,-.05,.15),this.body.add(i);let s=Zi(1.45,.2,.12,e.bone);i.add(s);let r=new dt;r.position.y=-1.45,i.add(r),r.add(Zi(1.55,.12,.075,e.bone));let o=Zi(1.4,.04,.03,e.bone);o.position.set(0,-.05,-.1),r.add(o);let a=new dt;a.position.y=-1.55,r.add(a),a.add(Zi(.8,.08,.07,e.bone));let l=new dt;l.position.y=-.8,a.add(l);for(let c of[-.13,0,.13]){let h=new dt;h.position.set(c,-.04,0),h.rotation.set(Math.PI/2+.1,c*-1.6,0),h.rotation.order="YXZ",l.add(h),h.add(Zi(c===0?.55:.45,.05,.035,e.bone));let d=Ge(Qe("claw",()=>new hn(.035,.14,5)),e.tooth,!1);d.position.y=c===0?-.6:-.5,d.rotation.x=Math.PI,h.add(d)}return{hip:i,knee:r,ankle:a,foot:l,side:t}}setAlive(t){this.alive=t;for(let e of this.eyes)e.visible=t;this.eyeLight&&(this.eyeLight.intensity=t?6:0)}setMode(t,e=0){this.anim.mode=t,this.anim.speed=e}roar(t=2.2){this.anim.roar=t,this.anim.roarT=0}lookAt(t){let e=this.group.worldToLocal(t.clone()),i=new A(0,5.3,3.5),s=e.sub(i);this.anim.targetYaw=Math.max(-.8,Math.min(.8,Math.atan2(s.x,s.z))),this.anim.targetPitch=Math.max(-.4,Math.min(.6,-Math.atan2(s.y,Math.hypot(s.x,s.z))))}update(t){this.anim.time+=t,this.applyPose(t)}applyPose(t){let e=this.anim,i=e.mode,s=0,r=0,o=0,a=0,l=0,c=0;i==="walk"?(c=e.speed/3.6,s=.45,r=.55,o=.12,a=.04,l=.06):i==="run"&&(c=e.speed/6.5,s=.7,r=.9,o=.22,a=.16,l=.04),e.phase+=c*Math.PI*2*t;let h=e.phase;for(let g of this.legs){let p=h+(g.side>0?Math.PI:0),x=Math.max(0,Math.cos(p)),v=-.5-s*Math.sin(p),_=1.1+r*x,T=-.95-r*.6*x;g.hip.rotation.x=v-a,g.knee.rotation.x=_,g.ankle.rotation.x=T,g.foot.rotation.x=-(v-a+_+T)}e.lean=t?on(e.lean,a,4,t):a,this.body.rotation.x=e.lean;let d=3.42-o*Math.abs(Math.sin(h));this.alive&&i==="idle"&&(d+=Math.sin(e.time*1.6)*.04),this.body.position.y=d;let u=i==="pose"?.05:0;this.tail.forEach((g,p)=>{g.rotation.y=l*Math.sin(h+p*.45)+u*(p>6?1:.3)+(this.alive&&i==="idle"?Math.sin(e.time*.9+p*.3)*.03:0),g.rotation.x=p<5?.035:-.018});let f=i==="pose"?.28:.1,m=e.targetPitch,y=e.targetYaw;if(i==="run"&&(m=.15+Math.sin(h*2)*.05,y=0,f=.35+Math.max(0,Math.sin(h))*.2),i==="walk"&&(m+=Math.sin(h*2)*.04),this.alive&&i==="idle"&&(f=.12+Math.max(0,Math.sin(e.time*.8))*.1),e.roar>0){e.roarT+=t;let g=e.roarT/e.roar;if(g>=1)e.roar=0;else{let p=g<.15?g/.15:g>.8?(1-g)/.2:1;m=-.45*p+(1-p)*m,f=.95*p+Math.sin(e.roarT*40)*.05*p,y+=Math.sin(e.roarT*9)*.08*p}}t?(e.headYaw=on(e.headYaw,y,6,t),e.headPitch=on(e.headPitch,m,e.roar>0?10:5,t),e.jaw=on(e.jaw,f,14,t)):(e.headYaw=y,e.headPitch=m,e.jaw=f),this.headPivot.rotation.set(e.headPitch,e.headYaw,0,"YXZ"),this.jaw.rotation.x=e.jaw;for(let g of this.arms)g.rotation.x=-.6+Math.sin(h*2)*(i==="run"?.3:.05)}};var Vh=new Map;function Ve(n,t=.8){let e=n+":"+t;return Vh.has(e)||Vh.set(e,new ot({color:n,roughness:t})),Vh.get(e)}var vf={},Ue=(n,t)=>vf[n]||(vf[n]=t());function Ne(n,t){let e=new B(n,t);return e.castShadow=!0,e}var _s=class{constructor(t={}){let e=this.opts={shirt:8365785,pants:1911364,skin:14725519,hair:2825492,shoes:1381653,cap:!1,badge:!1,hairStyle:"short",scale:1,nameTag:null,...t};this.group=new dt;let i=this.root=new dt;i.scale.setScalar(e.scale),this.group.add(i);let s=this.hips=new dt;s.position.y=.92,i.add(s);let r=Ne(Ue("pelvis",()=>new Qt(.34,.2,.21)),Ve(e.pants));s.add(r);let o=this.torso=new dt;o.position.y=.08,s.add(o);let a=Ne(Ue("chest",()=>new Cn(.18,.3,4,10)),Ve(e.shirt));a.scale.set(1.05,1,.72),a.position.y=.27,o.add(a);let l=Ne(Ue("belt",()=>new Qt(.36,.06,.24)),Ve(1118481,.5));if(l.position.y=.02,o.add(l),e.badge){let _=Ne(Ue("badge",()=>new Qt(.06,.07,.02)),new ot({color:16765773,metalness:.8,roughness:.3}));_.position.set(-.09,.38,.135),o.add(_);let T=Ne(Ue("radio",()=>new Qt(.05,.1,.03)),Ve(2236962));T.position.set(.1,.4,.13),o.add(T)}if(e.nameTag){let _=Ne(Ue("tag",()=>new Qt(.09,.035,.01)),Ve(16777215));_.position.set(.09,.4,.135),o.add(_)}let c=Ne(Ue("neck",()=>new se(.055,.06,.1,8)),Ve(e.skin));c.position.y=.6,o.add(c);let h=this.head=new dt;h.position.y=.64,o.add(h);let d=Ne(Ue("head",()=>new te(.135,16,12)),Ve(e.skin));d.scale.set(.95,1.08,1),d.position.y=.12,h.add(d);let u=Ue("eye",()=>new te(.018,8,6));for(let _ of[-1,1]){let T=Ne(u,Ve(1118481,.3));T.position.set(_*.048,.14,.122),h.add(T)}let f=Ne(Ue("nose",()=>new te(.022,8,6)),Ve(e.skin));if(f.position.set(0,.1,.135),h.add(f),this.mouth=Ne(Ue("mouth",()=>new Qt(.05,.012,.01)),Ve(5909034)),this.mouth.position.set(0,.055,.125),h.add(this.mouth),e.hairStyle!=="bald"){let _=Ne(Ue("hair",()=>new te(.145,16,10,0,Math.PI*2,0,Math.PI*.55)),Ve(e.hair));if(_.position.set(0,.13,-.012),h.add(_),e.hairStyle==="long"){let T=Ne(Ue("hairlong",()=>new Qt(.26,.28,.08)),Ve(e.hair));T.position.set(0,0,-.09),h.add(T)}}if(e.cap){let _=Ve(1778752,.7),T=Ne(Ue("cap",()=>new te(.148,16,8,0,Math.PI*2,0,Math.PI*.5)),_);T.scale.set(1.04,.62,1.08),T.position.y=.19,h.add(T);let S=Ne(Ue("capband",()=>new se(.152,.152,.035,16)),Ve(922406,.6));S.position.y=.19,h.add(S);let P=Ne(Ue("brim",()=>new se(.11,.11,.014,16,1,!1,-Math.PI/2,Math.PI)),_);P.scale.set(1.1,1,1.2),P.position.set(0,.185,.12),P.rotation.x=.12,h.add(P);let I=Ne(Ue("capbadge",()=>new Qt(.045,.035,.01)),new ot({color:16765773,metalness:.8,roughness:.3}));I.position.set(0,.235,.152),h.add(I),this.cap={crown:T,brim:P,cb:I}}let m=Ue("arm",()=>new Cn(.058,.2,4,8)),y=Ue("fore",()=>new Cn(.052,.19,4,8)),g=Ue("hand",()=>new te(.055,8,6));this.arms=[-1,1].map(_=>{let T=new dt;T.position.set(_*.235,.5,0),o.add(T);let S=Ne(m,Ve(e.shirt));S.position.y=-.14,T.add(S);let P=new dt;P.position.y=-.29,T.add(P);let I=Ne(y,Ve(e.sleeves==="short"?e.skin:e.shirt));I.position.y=-.13,P.add(I);let E=new dt;return E.position.y=-.28,P.add(E),E.add(Ne(g,Ve(e.skin))),{sh:T,el:P,hand:E,side:_}});let p=Ue("thigh",()=>new Cn(.075,.3,4,8)),x=Ue("shin",()=>new Cn(.066,.3,4,8)),v=Ue("foot",()=>new Qt(.11,.07,.25));this.legs=[-1,1].map(_=>{let T=new dt;T.position.set(_*.095,-.06,0),s.add(T);let S=Ne(p,Ve(e.pants));S.position.y=-.21,T.add(S);let P=new dt;P.position.y=-.42,T.add(P);let I=Ne(x,Ve(e.pants));I.position.y=-.2,P.add(I);let E=Ne(v,Ve(e.shoes,.5));return E.position.set(0,-.42,.05),P.add(E),{hip:T,knee:P,side:_}}),this.anim={mode:"idle",phase:0,speed:0,time:0,talk:0,sit:0,blend:{}},Ca([s,o,h,...this.arms.flatMap(_=>[_.sh,_.el,_.hand]),...this.legs.flatMap(_=>[_.hip,_.knee])],[this.mouth]),this.update(0)}attachToHand(t,e=1){return this.arms.find(s=>s.side===e).hand.add(t),t}setMode(t,e=0){this.anim.mode=t,this.anim.speed=e}update(t){let e=this.anim;e.time+=t;let i=e.time,s=e.mode,r=0;(s==="walk"||s==="zombie")&&(r=e.speed/1.5),s==="run"&&(r=e.speed/3.2),e.phase+=r*Math.PI*2*t;let o=e.phase,a={hipsY:.92,hipsRX:0,torsoRX:0,headRX:0,headRY:0,legs:[[0,0],[0,0]],arms:[[0,.15,0],[0,.15,0]]};if(s==="idle")a.hipsY=.92+Math.sin(i*2)*.005,a.headRY=Math.sin(i*.5)*.15,a.arms=[[.05,-.15,.1],[.05,-.15,-.1]];else if(s==="walk"){let h=Math.sin(o);a.legs=[[-.5*h,Math.max(0,-Math.cos(o))*.7],[.5*h,Math.max(0,Math.cos(o))*.7]],a.arms=[[.4*h,-.2,.08],[-.4*h,-.2,-.08]],a.hipsY=.92-Math.abs(Math.cos(o))*.03}else if(s==="run"){let h=Math.sin(o);a.legs=[[-.95*h,.4+Math.max(0,-Math.cos(o))*1.3],[.95*h,.4+Math.max(0,Math.cos(o))*1.3]],a.arms=[[.9*h,-1.3,.1],[-.9*h,-1.3,-.1]],a.torsoRX=.25,a.hipsY=.9-Math.abs(Math.cos(o))*.08}else if(s==="jump")a.legs=[[-.9,1.4],[-.3,.9]],a.arms=[[-2.6,-.3,.3],[-2.6,-.3,-.3]],a.torsoRX=.1;else if(s==="slide")a.hipsY=.35,a.hipsRX=-1.15,a.legs=[[-.4,.2],[-.2,.6]],a.arms=[[-1.6,-.3,.3],[-1.6,-.3,-.3]],a.torsoRX=.1,a.headRX=.7;else if(s==="sit"||s==="eat"||s==="type"){if(a.hipsY=.55,a.legs=[[-1.57,1.57],[-1.57,1.57]],a.torsoRX=.08,a.arms=[[-.7,-.8,.1],[-.7,-.8,-.1]],s==="eat"){let h=(Math.sin(i*2.2)+1)/2;a.arms[1]=[-.4-1.5*h,-1.2-.9*h,-.25*h],a.headRX=.1*h}s==="type"&&(a.arms[0]=[-.9+Math.sin(i*18)*.05,-.7,.15],a.arms[1]=[-.9+Math.sin(i*15+1)*.05,-.7,-.15],a.headRX=.12)}else if(s==="sleep")a.hipsY=.55,a.legs=[[-1.4,1.5],[-1.5,1.4]],a.torsoRX=.5,a.headRX=.6,a.arms=[[-.2,-.3,.2],[-.2,-.3,-.2]];else if(s==="shock")a.arms=[[-2.8,-.3,.4],[-2.8,-.3,-.4]],a.headRX=-.15,a.hipsY=.92+Math.abs(Math.sin(i*20))*.02;else if(s==="point")a.arms[1]=[-1.55,0,0],a.headRY=.1;else if(s==="shrug")a.arms=[[-.2,-1.6,.6],[-.2,-1.6,-.6]],a.headRX=-.1;else if(s==="zombie"){let h=Math.sin(o);a.legs=[[-.25*h,.1],[.25*h,.1]],a.arms=[[-1.5+.05*h,-.05,.08],[-1.5-.05*h,-.05,-.08]],a.torsoRX=.06,a.headRY=Math.sin(i*1.3)*.12,a.hipsY=.92-Math.abs(h)*.02}else if(s==="liesit"){let h=e.sit;a.legs=[[-1.55*h,.05*h],[-1.55*h,.05*h]],a.arms=[[-1.5*h,-1.9*(1-h),.35*(1-h)],[-1.5*h,-1.9*(1-h),-.35*(1-h)]],a.headRX=.1*(1-h)}else if(s==="munch"){let h=(Math.sin(i*9)+1)/2;a.arms[1]=[-.6-1.1*h,-1.6-.4*h,-.25],a.arms[0]=[-.2,-.4,.1],a.headRX=.12*h}else s==="wave"?(a.arms[1]=[-2.7,-.3,-.5+Math.sin(i*10)*.45],a.arms[0]=[.05,-.15,.1],a.headRY=.15,a.hipsY=.92+Math.abs(Math.sin(i*6))*.04):s==="sad"&&(a.headRX=.45,a.torsoRX=.15,a.arms=[[.1,-.1,.05],[.1,-.1,-.05]]);let l=t?1-Math.exp(-14*t):1,c=(h,d,u)=>{h[d]+=(u-h[d])*l};c(this.hips.position,"y",a.hipsY),c(this.hips.rotation,"x",a.hipsRX),c(this.torso.rotation,"x",a.torsoRX),c(this.head.rotation,"x",a.headRX),c(this.head.rotation,"y",a.headRY),this.legs.forEach((h,d)=>{c(h.hip.rotation,"x",a.legs[d][0]),c(h.knee.rotation,"x",a.legs[d][1])}),this.arms.forEach((h,d)=>{c(h.sh.rotation,"x",a.arms[d][0]),c(h.el.rotation,"x",a.arms[d][1]),c(h.sh.rotation,"z",a.arms[d][2]+h.side*.08)}),e.talk>0?(e.talk-=t,this.mouth.scale.y=1+Math.abs(Math.sin(i*22))*5):this.mouth.scale.y=on(this.mouth.scale.y,1,10,t||1)}},Oa=(n={})=>new _s({shirt:9417696,pants:1778752,cap:!0,badge:!0,hair:3810322,...n}),C1=[14832981,5613672,15905076,9202646,2864051,15895729,16777215,3355443,16747069,5209049],P1=[2832981,3355443,7035464,1907997,4878245],I1=[15845284,14725519,13012580,9263675,6044196,16243136],L1=[2825492,1118481,9132587,14266986,7027487,10066329];function xf(n=Math.random){let t=i=>i[Math.floor(n()*i.length)],e=n()<.35;return new _s({shirt:t(C1),pants:t(P1),skin:t(I1),hair:t(L1),hairStyle:n()<.4?"long":n()<.1?"bald":"short",sleeves:n()<.5?"short":"long",scale:e?.62+n()*.12:.95+n()*.1})}function k1(){let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d");t.fillStyle="#cdbf9c",t.fillRect(0,0,128,128);for(let i=0;i<400;i++)t.fillStyle=`rgba(70,50,25,${Math.random()*.16})`,t.fillRect(Math.random()*128,Math.random()*128,2,2);for(let i=-128;i<256;i+=14)t.strokeStyle="rgba(80,60,30,0.75)",t.lineWidth=3,t.beginPath(),t.moveTo(0,i),t.lineTo(128,i+34),t.stroke(),t.strokeStyle="rgba(255,250,235,0.35)",t.lineWidth=2,t.beginPath(),t.moveTo(0,i+4),t.lineTo(128,i+38),t.stroke();let e=new Bn(n);return e.colorSpace=rn,e.wrapS=e.wrapT=vi,e.repeat.set(2,2),e}function _f(){let n=new _s({shirt:14932156,pants:14208174,skin:15129794,hair:14208174,shoes:13813416,hairStyle:"bald"}),t=new ot({map:k1(),color:13221542,roughness:1}),e=new ot({color:16774832,emissive:16769126,emissiveIntensity:3}),i=Ve(1118481,.3);n.group.traverse(o=>{!o.isMesh||o===n.mouth||(o.material=o.material===i?e:t)}),n.mouth.visible=!1;let s=new B(new Qt(.2,.06,.03),new ot({color:1708554,roughness:1}));s.position.set(0,.14,.112),n.head.add(s);let r=new B(new Qt(.05,.32,.01),t);return r.position.set(.1,-.05,-.14),r.rotation.set(.3,0,-.25),n.head.add(r),n}var gr={bird:"Bird",eye:"Eye",snake:"Snake",ankh:"Ankh",scarab:"Beetle",sun:"Sun",feather:"Feather",water:"Water"},Ki=Object.keys(gr),Mf=["bird","eye","snake","ankh"];function ti(n,t,e,i,s,r="#1d3f8f"){n.save(),n.translate(e,i),n.scale(s/100,s/100),n.fillStyle=r,n.strokeStyle=r,n.lineWidth=7,n.lineCap="round",n.lineJoin="round";let o=a=>{n.beginPath(),a.forEach(([l,c],h)=>h?n.lineTo(l,c):n.moveTo(l,c))};switch(t){case"eye":{n.beginPath(),n.moveTo(-42,0),n.quadraticCurveTo(0,-34,42,0),n.quadraticCurveTo(0,26,-42,0),n.stroke(),n.beginPath(),n.arc(0,-2,12,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(-36,-22),n.quadraticCurveTo(0,-46,40,-24),n.stroke(),o([[-6,14],[-10,40]]),n.stroke(),n.beginPath(),n.moveTo(8,12),n.quadraticCurveTo(20,40,36,30),n.quadraticCurveTo(44,20,30,18),n.stroke();break}case"bird":{n.beginPath(),n.ellipse(4,0,30,18,-.2,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(-26,-26,11,0,Math.PI*2),n.fill(),o([[-30,-22],[-48,8]]),n.stroke(),o([[-18,-20],[-12,-6]]),n.stroke(),o([[30,-6],[46,4],[30,10]]),n.fill(),o([[0,16],[-6,44]]),n.stroke(),o([[12,16],[16,44]]),n.stroke();break}case"snake":{n.lineWidth=10,n.beginPath(),n.moveTo(-44,36),n.bezierCurveTo(-10,46,10,20,26,26),n.bezierCurveTo(44,32,40,4,22,-2),n.stroke(),n.beginPath(),n.ellipse(18,-20,15,24,.1,0,Math.PI*2),n.fill(),n.fillStyle="#e8d5a8",n.beginPath(),n.arc(14,-28,3.5,0,Math.PI*2),n.fill(),n.strokeStyle=r,n.lineWidth=4,o([[22,-44],[24,-54]]),n.stroke();break}case"ankh":{n.lineWidth=12,n.beginPath(),n.ellipse(0,-26,15,20,0,0,Math.PI*2),n.stroke(),o([[-34,2],[34,2]]),n.stroke(),o([[0,-6],[0,46]]),n.stroke();break}case"scarab":{n.beginPath(),n.ellipse(0,6,22,28,0,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(0,-28,14,10,0,0,Math.PI*2),n.fill();for(let a of[-1,1])for(let l of[-1,0,1])o([[a*18,l*16+4],[a*38,l*20-4],[a*44,l*24+6]]),n.stroke();n.strokeStyle="#e8d5a8",n.lineWidth=3,o([[0,-18],[0,32]]),n.stroke();break}case"sun":{n.beginPath(),n.arc(0,0,22,0,Math.PI*2),n.fill(),n.lineWidth=6;for(let a=0;a<12;a++){let l=a/12*Math.PI*2;o([[Math.cos(l)*30,Math.sin(l)*30],[Math.cos(l)*44,Math.sin(l)*44]]),n.stroke()}break}case"feather":{n.beginPath(),n.moveTo(-4,46),n.quadraticCurveTo(-30,-6,6,-46),n.quadraticCurveTo(28,-8,6,30),n.closePath(),n.fill(),n.strokeStyle="#e8d5a8",n.lineWidth=3,n.beginPath(),n.moveTo(-2,44),n.quadraticCurveTo(-4,0,6,-40),n.stroke(),n.strokeStyle=r,n.lineWidth=7,o([[-4,46],[-8,50]]),n.stroke();break}case"water":{n.lineWidth=6;for(let a of[-20,0,20]){n.beginPath();for(let l=0;l<=8;l++)n.lineTo(-42+l*10.5,a+(l%2?-8:8));n.stroke()}break}default:break}n.restore()}function bf(n,t,e,i,s,r="#7a1a10"){n.save(),n.fillStyle=r;let o=s*.16,a=s*.22,l=t*o+(t-1)*a;for(let c=0;c<t;c++)n.fillRect(e-l/2+c*(o+a),i-s/2,o,s);n.restore()}function ei(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function Ef(n,t,e){let i=n.canvas.width,s=n.canvas.height;n.fillStyle="#0f0f0f",n.fillRect(0,0,i,s),n.fillStyle="#ff2b2b",ei(n,24,18,54,38,10),n.fill(),n.fillStyle="#fff",n.beginPath(),n.moveTo(44,27),n.lineTo(62,37),n.lineTo(44,47),n.fill(),n.font="bold 30px Arial",n.fillText("MeTube",88,48),n.fillStyle="#222",ei(n,300,18,440,40,20),n.fill(),n.fillStyle="#aaa",n.font="20px Arial",n.fillText("dinosaurs that could beat you in a race",322,45);let r=24,o=76,a=660,l=372,c=n.createLinearGradient(0,o,0,o+l);c.addColorStop(0,"#ff9a5a"),c.addColorStop(1,"#ffd98a"),n.fillStyle=c,n.fillRect(r,o,a,l),n.fillStyle="#c8763a",n.fillRect(r,o+l*.72,a,l*.28),n.fillStyle="#6b3b2a",n.beginPath(),n.moveTo(r+380,o+l*.72),n.lineTo(r+480,o+120),n.lineTo(r+520,o+120),n.lineTo(r+640,o+l*.72),n.fill(),n.fillStyle="rgba(80,60,60,0.6)",n.beginPath(),n.arc(r+500+Math.sin(t)*10,o+90-t*20%40,26,0,7),n.fill();let h=t*140%(a+300)-150,d=o+l*.72;n.save(),n.translate(r+h,d),n.fillStyle="#2b1d14";let u=Math.abs(Math.sin(t*12))*6;n.beginPath(),n.ellipse(0,-70-u,55,30,-.1,0,7),n.fill(),n.beginPath(),n.moveTo(-50,-75-u),n.lineTo(-130,-60-u),n.lineTo(-48,-60-u),n.fill(),n.beginPath(),n.ellipse(52,-105-u,30,18,-.2,0,7),n.fill(),n.fillRect(20,-100-u,18,30);let f=Math.sin(t*12)*18;n.fillRect(-10+f,-50-u,12,50+u),n.fillRect(10-f,-50-u,12,50+u),n.fillStyle="#ff3b3b",n.beginPath(),n.arc(64,-110-u,4,0,7),n.fill(),n.restore(),n.save(),n.translate(r+h+170,d),n.strokeStyle="#1a1a1a",n.lineWidth=5,n.beginPath(),n.arc(0,-62,10,0,7),n.stroke(),n.beginPath(),n.moveTo(0,-52),n.lineTo(0,-25),n.stroke();let m=Math.sin(t*16)*12;if(n.beginPath(),n.moveTo(0,-25),n.lineTo(m,0),n.moveTo(0,-25),n.lineTo(-m,0),n.stroke(),n.beginPath(),n.moveTo(0,-45),n.lineTo(-m,-32),n.moveTo(0,-45),n.lineTo(m,-30),n.stroke(),n.restore(),n.fillStyle="rgba(0,0,0,0.6)",ei(n,r+16,o+16,120,44,8),n.fill(),n.fillStyle="#fff",n.font="bold 30px Arial",n.fillText("#3",r+52,o+50),n.fillStyle="#444",n.fillRect(r,o+l-6,a,6),n.fillStyle="#ff2b2b",n.fillRect(r,o+l-6,a*(.42+t*.004%.5),6),n.fillStyle="#fff",n.font="bold 24px Arial",n.fillText("TOP 10 DINOSAURS THAT COULD BEAT YOU IN A RACE",r,o+l+40),n.fillText("(#1 WILL SHOCK YOU)",r,o+l+70),n.fillStyle="#aaa",n.font="18px Arial",n.fillText("DinoFacts4Kids  \u2022  2.1M views  \u2022  3 years ago",r,o+l+100),n.fillStyle="#fff",ei(n,r+470,o+l+80,120,36,18),n.fill(),n.fillStyle="#000",n.font="bold 18px Arial",n.fillText("Subscribe",r+488,o+l+104),[["I SURVIVED 24 HRS IN A MUSEUM","#3a6"],["Donut tier list (honest)","#d58"],["Is the T-Rex REAL?? (not clickbait)","#a63"],["Night guard falls asleep on cam","#36a"],["How to remember passwords","#777"]].forEach(([g,p],x)=>{let v=80+x*108;n.fillStyle=p,ei(n,708,v,150,86,8),n.fill(),n.fillStyle="rgba(255,255,255,0.3)",n.beginPath(),n.arc(783,v+43,18,0,7),n.fill(),n.fillStyle="#eee",n.font="bold 16px Arial";let _=g.split(" "),T="",S=v+20;for(let P of _)n.measureText(T+P).width>140&&(n.fillText(T,868,S),T="",S+=20),T+=P+" ";n.fillText(T,868,S),n.fillStyle="#999",n.font="14px Arial",n.fillText(`${(x*3.7+1.2).toFixed(1)}M views`,868,S+22)}),e!=null){let g=e<=5;n.fillStyle=g&&Math.floor(t*4)%2?"#ff2b2b":"#ffcc4d",ei(n,i-360,s-92,340,72,10),n.fill(),n.fillStyle="#111",n.font="bold 22px Arial",n.fillText("\u26A0 MUSE-OS SESSION",i-340,s-62),n.font="bold 22px Arial",n.fillText(`Expires in 0:${String(Math.max(0,Math.ceil(e))).padStart(2,"0")}`,i-340,s-34)}}function Fa(n,t,e="SESSION EXPIRED",i="Please log in again."){let s=n.canvas.width,r=n.canvas.height,o=n.createLinearGradient(0,0,s,r);o.addColorStop(0,"#0d2340"),o.addColorStop(1,"#2a0f3d"),n.fillStyle=o,n.fillRect(0,0,s,r),n.fillStyle="rgba(255,255,255,0.06)";for(let a=0;a<12;a++)n.beginPath(),n.arc((a*173+t*20)%s,a*97%r,60+a%3*30,0,7),n.fill();n.textAlign="center",n.fillStyle="#fff",n.font="bold 54px Arial",n.fillText("\u{1F512}",s/2,r/2-90),n.font="bold 48px Arial",n.fillText(e,s/2,r/2),n.font="28px Arial",n.fillStyle="#c9d6ff",n.fillText(i,s/2,r/2+50),n.font='22px "Courier New", monospace',n.fillStyle="#7fa0d0",n.fillText("MUSE-OS v2.3 \u2014 City Museum of Natural History",s/2,r-40),n.textAlign="left"}function Sf(n,t,e="",i="",s="#ff6b6b"){Fa(n,t,"","");let r=n.canvas.width,o=n.canvas.height;n.fillStyle="rgba(0,0,0,0.45)",ei(n,r/2-260,o/2-170,520,340,18),n.fill(),n.textAlign="center",n.fillStyle="#fff",n.font="bold 34px Arial",n.fillText("NIGHT_GUARD",r/2,o/2-110),n.fillStyle="#fff",ei(n,r/2-200,o/2-70,400,56,10),n.fill(),n.fillStyle="#222",n.font="bold 34px Arial",n.fillText("\u2022".repeat(e.length)+(Math.floor(t*2)%2?"|":""),r/2,o/2-30),n.fillStyle="#4c8dff",ei(n,r/2-200,o/2+6,190,50,10),n.fill(),n.fillStyle="#ffcc4d",ei(n,r/2+10,o/2+6,190,50,10),n.fill(),n.fillStyle="#fff",n.font="bold 24px Arial",n.fillText("LOG IN",r/2-105,o/2+40),n.fillStyle="#111",n.fillText("HINT?",r/2+105,o/2+40),i&&(n.fillStyle=s,n.font="bold 26px Arial",n.fillText(i,r/2,o/2+120)),n.textAlign="left"}function wf(n,t){let e=n.canvas.width,i=n.canvas.height;n.fillStyle="#000",n.fillRect(0,0,e,i),n.textAlign="center";let s=Math.random()<.1?(Math.random()-.5)*30:0;n.fillStyle="#6dff9e",n.font='bold 64px "Courier New", monospace',n.fillText("SOLVE THE PUZZLES",e/2+s,i/2-20),n.fillStyle="#ff3b6b",n.fillText("SOLVE THE PUZZLES",e/2-s*.5+3,i/2-20+2),n.fillStyle="#6dff9e",n.font='28px "Courier New", monospace',n.fillText("PUZZLE #1 SLEEPS WHERE GIANTS ONCE WALKED",e/2,i/2+50),n.fillText("> DINOSAUR HALL",e/2,i/2+100);for(let r=0;r<i;r+=4)n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(0,r,e,2);n.textAlign="left"}function Tf(n,t){let e=n.canvas.width,i=n.canvas.height;n.fillStyle=Math.floor(t*3)%2?"#3a0000":"#1a0000",n.fillRect(0,0,e,i),n.textAlign="center",n.fillStyle="#ff3b3b",n.font="bold 72px Arial",n.fillText("ACCESS DENIED",e/2,i/2),n.font="28px Arial",n.fillText("Password fragments: 5 / 6",e/2,i/2+60),n.textAlign="left"}function Af(n,t,{trexGone:e=!1,day:i=!1}={}){let s=n.canvas.width,r=n.canvas.height,o=s/3,a=r/2,l=["CAM 1 LOBBY","CAM 2 DINO HALL","CAM 3 ROMAN","CAM 4 ENTRANCE","CAM 5 ARCHIVES","CAM 6 PARKING"];for(let c=0;c<6;c++){let h=c%3*o,d=Math.floor(c/3)*a;n.fillStyle=i?"#3a4a3a":"#0c1410",n.fillRect(h,d,o,a),n.fillStyle=i?"#5a6a5a":"#16241c",n.fillRect(h+10,d+a*.6,o-20,a*.35),c===1&&!e&&(n.strokeStyle=i?"#d8d0b8":"#5a7a66",n.lineWidth=3,n.beginPath(),n.ellipse(h+o*.5,d+a*.45,26,14,0,0,7),n.moveTo(h+o*.5+20,d+a*.4),n.lineTo(h+o*.72,d+a*.25),n.moveTo(h+o*.5-24,d+a*.45),n.lineTo(h+o*.2,d+a*.55),n.moveTo(h+o*.48,d+a*.55),n.lineTo(h+o*.46,d+a*.85),n.moveTo(h+o*.55,d+a*.55),n.lineTo(h+o*.57,d+a*.85),n.stroke());let u=n.getImageData(h,d,o,a),f=u.data;for(let m=0;m<f.length;m+=16){let y=(Math.random()-.5)*(i?30:60);f[m]+=y,f[m+1]+=y,f[m+2]+=y}n.putImageData(u,h,d),n.fillStyle=i?"#ffffff":"#9dffb8",n.font="bold 13px monospace",n.fillText(l[c],h+8,d+18),Math.floor(t*2)%2&&(n.fillStyle="#ff3b3b",n.beginPath(),n.arc(h+o-14,d+13,5,0,7),n.fill()),n.strokeStyle="#000",n.lineWidth=4,n.strokeRect(h,d,o,a)}}var Mt={officeChair:new A(-17.9,0,0),officeStart:new A(-17.2,0,.3),lobbyNorth:new A(0,0,-7.5),dinoDoor:new A(0,0,-12),dinoPanel:new A(2.4,0,-20.6),trex:new A(0,.5,-31),romanDoor:new A(13.5,0,0),romanPanel:new A(37.4,0,0),computer:new A(-18.75,1.05,0),egyptDoor:new A(15.2,0,-24),egyptPanel:new A(24.4,0,-20.6),sarcophagus:new A(27.5,0,-25),romanNorthDoor:new A(24.75,0,-9.2)},yr={x0:15.42,x1:39,z0:-37,z1:-9.42,h:8.5},D1=[{n:1,glyph:"bird",x:19.2,z:-29.4},{n:2,glyph:"eye",x:31.6,z:-33.4},{n:3,glyph:"snake",x:36.4,z:-19.6},{n:4,glyph:"ankh",x:18.4,z:-15.2}],ni=class extends $i{constructor(t,{time:e="night"}={}){super(t),this.time=e,this.night=e==="night",this.refs={},this.surfaceAt=(o,a)=>o<-12?"wood":o>15.2&&a<-9.3?"stone":o>12?"marble":a<-10?"stone":"marble";let i=this.scene;i.background=new Nt(this.night?131848:12571366),i.fog=this.night?new tr(197899,.028):new er(13622248,40,140),this.mats={officeWall:new ot({map:ve("plaster"),color:12169626,roughness:.9}),lobbyWall:new ot({map:ve("plaster"),color:9410726,roughness:.85}),dinoWall:new ot({map:ve("plaster"),color:8023646,roughness:.9}),romanWall:new ot({map:ve("plaster"),color:11828316,roughness:.85}),wood:new ot({map:ve("wood"),roughness:.7}),marble:new ot({map:ve("marble"),roughness:.25,metalness:.05}),stone:new ot({map:ve("stone"),roughness:.8}),mosaic:new ot({map:ve("mosaic"),roughness:.6}),ceiling:new ot({map:ve("ceiling"),roughness:.9,color:10131086}),darkCeil:new ot({color:this.night?1907482:12170150,roughness:1}),trim:new ot({color:2761760,roughness:.6})},this._lights(),this._office(),this._lobby(),this._dino(),this._roman(),this._egypt(),this._collectibles(),this.night||this._visitors();let s=this.refs,r=new Set([s.trex.group,s.guard.group,s.donutBox,s.deskFlashlight,s.footprints,s.sarcLid,s.mummy.holder,...s.flames.map(o=>o.flame),...this.collectibles.map(o=>o.obj),...(this.visitors||[]).map(o=>o.p.group)]);Si(this.scene,o=>r.has(o))}_lights(){let t=this.scene,e=this.night;this.ambient=new Gi(e?7372976:16777215,e?.32:.9),t.add(this.ambient),this.hemi=new zi(e?5925530:15266047,e?1446416:9075302,e?.45:1.4),t.add(this.hemi);let i=new ca(e?9414911:16773592,e?.55:2.4);i.position.set(12,30,40),i.target.position.set(0,0,-20),t.add(i,i.target),this.sun=i;let s=(r,o,a,l,c,h)=>{let d=new Le(r,o,a,2);return d.position.set(l,c,h),t.add(d),d};e?(s(6981375,6,22,0,9,-40),s(16756848,5,14,37,5,0),s(6981375,3,16,0,6,6),s(9071359,4,18,27,7,-30),this.officeLamp=s(16762746,3.5,7,-18.4,1.4,.9),this.fluoro=s(14674175,2.5,8,-16,3.1,0)):(s(16777215,30,40,0,11,-28),s(16773853,20,30,26,8,0),s(16777215,12,25,0,7,0),s(16773853,22,32,27,7.5,-23),this.officeLamp=s(16762746,2,6,-18.4,1.4,.9),this.fluoro=s(16777215,6,10,-16,3.1,0))}_office(){let t=this.mats;this.floor(-20,-12,-5,5,t.wood,0,3),this.ceiling(-20,-12,-5,5,3.4,t.ceiling,1.2),this.wallX(-5,-20,-12,3.4,t.officeWall),this.wallX(5,-20,-12,3.4,t.officeWall),this.wallZ(-20,-5,5,3.4,t.officeWall);let e=new B(new Qt(1.4,.06,.4),new ie({color:15397631}));e.position.set(-16,3.36,0),this.scene.add(e),this.refs.fluoroMesh=e;let i=uf(1.9,.85);this.add(i,-18.75,0,0,Math.PI/2),this.addBoxCollider(-18.75,0,1.9,.85,Math.PI/2);let s=pf(.95,.6);this.add(s.group,-18.95,.77,0,Math.PI/2),this.refs.monitor=s;let r=ff();this.add(r,-17.9,0,0,-Math.PI/2),this.refs.chair=r,this.add(rt(.18,.02,.5,Tt.black()),-18.55,.77,0);let o=new dt;o.add(rt(.15,.03,.15,Tt.black()));let a=rt(.03,.45,.03,Tt.black(),0,.03,0);o.add(a);let l=new B(new hn(.12,.16,12,1,!0),new ot({color:2841914,side:ke}));l.position.set(.05,.5,0),l.rotation.z=-.5,o.add(l),this.add(o,-18.9,.77,.75);let c=new dt,h=new ot({color:16230600,roughness:.8});c.add(rt(.55,.07,.38,h));let d=new B(new Qt(.55,.01,.38),new ot({map:Me(`DOZEN
DELUXE`,{w:256,h:180,bg:"#f7a8c8",fg:"#b3125a",font:"bold 52px Arial Black, Arial"})}));d.position.set(0,.25,-.2),d.rotation.x=-1.2,c.add(d),this.refs.boxDonuts=[];for(let I=0;I<6;I++){let E=Xn({frosting:I,scale:.55});E.position.set(-.17+I%3*.17,.08,-.08+Math.floor(I/3)*.17),c.add(E),this.refs.boxDonuts.push(E)}this.add(c,-18.6,.77,-.65,Math.PI/2),this.refs.donutBox=c;let u=Yi();u.position.set(-18.45,.81,.45),u.rotation.y=.6,this.scene.add(u),this.refs.deskFlashlight=u;let f=new B(new se(.045,.04,.1,12),new ot({color:16777215}));f.position.set(-18.5,.82,-.2),this.scene.add(f);let[m,y]=ae(384,192,{willReadFrequently:!0}),g=he(m),p=new B(new Bt(2.6,1.3),new ie({map:g,toneMapped:!1}));p.position.set(-16.5,1.95,-4.78),this.scene.add(p),this.add(rt(2.75,1.45,.1,Tt.black()),-16.5,1.25,-4.84);let x=0,v=0;this.cctvState={trexGone:!1,day:!this.night},this.addUpdater(I=>{x+=I,v+=I,v>.12&&(v=0,Af(y,x,this.cctvState),g.needsUpdate=!0)});for(let I=0;I<4;I++){let E=rt(.6,2,.5,new ot({color:5202547,roughness:.5,metalness:.4}));this.add(E,-19.4+I*.62,0,4.7)}this.addCollider(-19.8,-16.9,4.4,5);let _=(I,E,M,L,k,D,F)=>{let q=new B(new Bt(.8,1.05),new ot({map:Me(I,{w:256,h:340,bg:D,fg:F,font:"bold 34px Arial Black, Arial",border:F})}));q.position.set(E,M,L),q.rotation.y=k,this.scene.add(q)};_(`EMPLOYEE
OF THE
MONTH:
AARON`,-13.5,1.8,-4.78,0,"#ffe08a","#7a4b00"),_(`STAY
AWAKE
(seriously)`,-19.78,2,-3,Math.PI/2,"#16324f","#ffcc4d"),_(`NO
DINOSAURS
IN THE
OFFICE`,-14.8,1.8,4.78,Math.PI,"#fff","#c81e1e");let T=new B(new Ei(.25,24),new ie({map:Me("11:58",{w:128,h:128,bg:"#fff",fg:"#111",font:"bold 34px Arial"})}));T.position.set(-19.78,2.5,1.5),T.rotation.y=Math.PI/2,this.scene.add(T);let S=Oa();S.group.position.set(-17.95,0,0),S.group.rotation.y=-Math.PI/2,S.setMode("sit"),S.update(0),this.scene.add(S.group),this.refs.guard=S,this.addUpdater(I=>{S.group.visible&&S.update(I)}),this.refs.computerIt=this.addInteractable({id:"computer",pos:new A(-18.7,1.1,0),prompt:"Log in",enabled:!1});let P=new B(new Bt(2.2,.5),new ot({map:Me("SECURITY",{w:512,h:116,bg:"#1d2433",fg:"#ffcc4d",font:"bold 64px Arial Black, Arial",border:"#ffcc4d"}),emissive:16777215,emissiveIntensity:.08}));P.position.set(-11.78,2.85,0),P.rotation.y=Math.PI/2,this.scene.add(P)}_lobby(){let t=this.mats,e=this.scene;this.floor(-12,12,-10,10,t.marble,0,4),this.ceiling(-12,12,-10,10,8,t.darkCeil),this.wallX(-10,-12,12,8,t.lobbyWall,[{c:0,w:6,h:6.2}],3),this.wallZ(12,-10,-9,8,t.lobbyWall,[],3),this.wallZ(12,9,10,8,t.lobbyWall,[],3),this.wallZ(-12,-10,10,8,t.lobbyWall,[{c:0,w:2.2,h:2.4}],3),this.wallX(10,-12,12,8,t.lobbyWall,[{c:-7.5,w:4,h:6.5},{c:0,w:6,h:4.2},{c:7.5,w:4,h:6.5}],3);let i=new ie({color:this.night?1846874:15922943,toneMapped:!this.night});for(let y of[-7.5,7.5]){let g=new B(new Bt(4,6.5),i);g.position.set(y,3.25,10.1),g.rotation.y=Math.PI,e.add(g),e.add(rt(.12,6.5,.15,t.trim,y,0,10));for(let p of[2.2,4.4])e.add(rt(4,.1,.15,t.trim,y,p,10));e.add(rt(4,.1,.4,t.trim,y,0,10))}this.addCollider(-9.5,-5.5,9.8,10.2),this.addCollider(5.5,9.5,9.8,10.2);let s=Tt.glass();for(let y of[-1.5,1.5]){let g=rt(2.9,4.1,.08,s,y,0,10);g.castShadow=!1,e.add(g),e.add(rt(.08,4.1,.1,Tt.metal(),y-1.45,0,10)),e.add(rt(.06,.5,.12,Tt.brass(),y+(y<0?1.3:-1.3),1.1,9.92))}let r=new B(new Bt(6,4.2),i);r.position.set(0,2.1,10.3),r.rotation.y=Math.PI,e.add(r),this.addCollider(-3,3,9.8,10.2);let o=rt(1.5,2.55,.1,new ot({color:3881794,metalness:.5,roughness:.4}));o.rotation.y=Math.PI/2,o.position.set(-11.78,1.275,6.5),e.add(o);let a=new B(new Bt(1.4,.35),new ot({map:Me(`ARCHIVES
STAFF ONLY`,{w:256,h:64,bg:"#a01818",fg:"#fff",font:"bold 22px Arial"})}));a.position.set(-11.75,2.85,6.5),a.rotation.y=Math.PI/2,e.add(a);let l=(y,g,p,x,v,_=5.6)=>{let T=new B(new Bt(_,1.2),new ot({map:Me(y,{w:1024,h:220,bg:"#14100c",fg:"#e9cf8a",font:"bold 120px Georgia, serif",border:"#c9a24a"}),emissive:16769184,emissiveIntensity:this.night?.12:.02}));T.position.set(g,p,x),T.rotation.y=v,e.add(T)};l("DINOSAUR HALL",0,7.1,-9.77,0),l("ROMAN EMPIRE",11.77,7.1,0,-Math.PI/2);let c=new dt;c.add(rt(4.6,1.1,1,t.trim)),c.add(rt(4.8,.08,1.2,Tt.marble(),0,1.1,0));let h=new B(new Bt(3.2,.5),new ot({map:Me("INFORMATION",{w:512,h:80,bg:"#2a2420",fg:"#c9a24a",font:"bold 48px Georgia, serif"})}));h.position.set(0,.62,-.51),h.rotation.y=Math.PI,c.add(h),Te(c),this.add(c,0,0,4.2),this.addBoxCollider(0,4.2,4.8,1.2);for(let y of[-8,8])for(let g of[-6,6])this.add(Dh(8,.5),y,0,g),this.addBoxCollider(y,g,1.2,1.2);for(let y of[-6,6])this.add(Ia(2.2),y,0,0,Math.PI/2),this.addBoxCollider(y,0,2.2,.55,Math.PI/2);for(let[y,g]of[[-11,-9],[11,-9],[-11,9],[11,9],[-4.2,-9],[4.2,-9]])this.add(Uh(y*7+g),y,0,g),this.addBoxCollider(y,g,.6,.6);let d=Fh("DINOSAURS","\u2191");this.add(d,-2.3,0,-4.5),this.addBoxCollider(-2.3,-4.5,.3,.3);let u=Fh("ROMAN EMPIRE","\u2192");this.add(u,5,0,-2.6),this.addBoxCollider(5,-2.6,.3,.3);let f=new B(new Bt(3,5),new ot({map:Me(`HISTORY
COMES
ALIVE!`,{w:300,h:500,bg:"#7a1022",fg:"#ffd98a",font:"bold 64px Georgia, serif"}),side:ke}));f.position.set(-6,5,-2),f.rotation.y=.3,e.add(f);let m=mr("MUSEUM MAP",`\u2191 North: Dinosaur Hall (\u2192 Egyptian Wing)
\u2192 East: Roman Empire
\u2190 West: Security Office
\u2193 South: Exit (locked at night)`,2.4,1.6,{bg:"#16202e",fg:"#dfe8ff",accent:"#6dc2ff"});m.position.set(11.78,2.2,6.5),m.rotation.y=-Math.PI/2,e.add(m);for(let[y,g,p,x]of[[0,4.55,9.77,Math.PI],[-11.75,2.65,0,Math.PI/2]]){let v=ka();v.position.set(y,g,p),v.rotation.y=x,x===Math.PI/2&&(v.position.y=3.3),e.add(v)}}_dino(){let t=this.mats,e=this.scene;this.floor(-15,15,-46,-10,t.stone,0,4),this.ceiling(-15,15,-46,-10,13,t.darkCeil),this.wallX(-46,-15,15,13,t.dinoWall,[],3),this.wallZ(-15,-46,-10,13,t.dinoWall,[],3),this.wallZ(15,-46,-10,13,t.dinoWall,[{c:Mt.egyptDoor.z,w:3.2,h:4.4}],3),this.wallX(-10,-15,-12,13,t.dinoWall,[],3),this.wallX(-10,12,15,13,t.dinoWall,[],3),this.wallX(-10.01,-12,12,13,t.dinoWall,[{c:0,w:24.5,h:8}],3);let[i,s]=ae(64,256),r=s.createImageData(64,256);for(let k=0;k<256;k++)for(let D=0;D<64;D++){let F=Math.pow(Math.sin(D/63*Math.PI),2.2),q=Math.pow(1-k/255,1.6),G=(k*64+D)*4;r.data[G]=r.data[G+1]=r.data[G+2]=255,r.data[G+3]=255*F*q}s.putImageData(r,0,0);let o=he(i,{srgb:!1});o.wrapS=o.wrapT=fi;let a=new ie({map:o,color:this.night?7377151:16773320,transparent:!0,opacity:this.night?.05:.12,blending:_n,depthWrite:!1,side:ke,fog:!1});for(let k of[-18,-30,-40])for(let D of[0,1]){let F=new B(new Bt(7,14),a);F.position.set(1.5,6.1,k-2.2),F.rotation.set(0,D*Math.PI/2,.22),D&&F.position.set(1.5,6.1,k-2.2),e.add(F)}for(let k of[-18,-30,-40]){let D=new B(new Bt(8,4),new ie({color:this.night?1978982:16777215,toneMapped:!this.night}));D.position.set(0,12.95,k),D.rotation.x=Math.PI/2,e.add(D)}let l=new B(Qn(9,.5,15,3),new ot({map:ve("stone"),color:9075306,roughness:.85}));l.position.set(0,.25,-30),l.receiveShadow=!0,e.add(l),e.add(rt(9.2,.1,15.2,t.trim,0,.36,-30)),this.addCollider(-4.6,4.6,-37.6,-22.4,"platform");let c=[];for(let k=-5.2;k<=5.21;k+=2.6)c.push([k,-21.8]);for(let[k,D]of c)this.add(pr(),k,0,D);for(let k=0;k<c.length-1;k++){let D=Zr(2.6);D.position.set(c[k][0],0,c[k][1]),e.add(D)}let h=Pe(5);for(let k=0;k<10;k++){let D=Nh(k+3,.6+h()*.8);D.position.set((h()-.5)*8,.5+D.position.y,-30+(h()-.5)*14),Math.abs(D.position.x)<1.6&&(D.position.x+=2.8*Math.sign(D.position.x||1)),e.add(D)}for(let k=0;k<6;k++){let D=Uh(k+40);D.children.forEach(F=>{F.geometry?.type==="CylinderGeometry"&&(F.visible=!1)}),D.position.set(k%2?3.6:-3.6,.2,-24-k*2.3),D.scale.setScalar(1.6),e.add(D)}let d=new xs;d.group.position.copy(Mt.trex),d.group.rotation.y=.3,d.setMode("pose"),e.add(d.group),this.refs.trex=d,this.addUpdater(k=>d.update(k));let u=qi("TYRANNOSAURUS REX",`"The Tyrant Lizard King." 12 m long, 8 tonnes, teeth like bananas.
Fun fact: despite its size, T. rex had only TWO fingers on each tiny hand.`,{bodyFont:"24px Georgia, serif"});this.add(u,-2.4,0,-20.6),this.addBoxCollider(-2.4,-20.6,.5,.4);let f=La({title:"DINO-LOCK 3000",color:"#6dff9e"});this.add(f.group,Mt.dinoPanel.x,0,Mt.dinoPanel.z),this.addBoxCollider(Mt.dinoPanel.x,Mt.dinoPanel.z,.8,.6),this.addUpdater(k=>f.update(k)),this.refs.console1=f,this.refs.panel1It=this.addInteractable({id:"panel1",pos:new A(Mt.dinoPanel.x,1.2,Mt.dinoPanel.z),prompt:"Inspect cipher panel",enabled:!1}),this.add(vs(2.2,.9,new ot({color:5984841,roughness:.9})),-10,0,-19);let m=lf();m.scale.setScalar(1.4),this.add(m,-10,.9,-19,.5),this.addBoxCollider(-10,-19,2.5,2.5),this.add(qi("TRICERATOPS","Three horns, one frill, zero chill. Ate plants. Probably fine."),-10,0,-16.6),this.add(vs(2.6,.7,new ot({color:5984841,roughness:.9})),10,0,-20);let y=new xs({eyeLight:!1});y.group.scale.setScalar(.3),y.anim.headYaw=y.anim.targetYaw=-.5,y.applyPose(0),this.add(y.group,10,.7,-20,-.8),this.addBoxCollider(10,-20,2.9,2.9),this.add(qi("VELOCIRAPTOR","Turkey-sized. Feathery. Smaller than the movies told you. Still bites."),10,0,-17.6),this.add(vs(1.1,1),10,0,-40);let g=Nh(77,.8);g.material=new ot({color:3814962,roughness:.6,metalness:.4,flatShading:!0}),this.add(g,10,1,-40),this.addBoxCollider(10,-40,1.3,1.3),this.add(qi("REAL METEORITE","Fell from space 66 million years ago. Please do not lick the meteorite."),10,0,-38.2),this.add(Kr(1.6,.8,.9,cf()),-10,0,-40),this.addBoxCollider(-10,-40,1.7,1),this.add(qi("AMMONITES","Ancient squid in spiral shells. Basically sea cinnamon rolls."),-10,0,-38.3);let[p,x]=ae(1024,400),v=x.createLinearGradient(0,0,0,400);v.addColorStop(0,"#3a1f4d"),v.addColorStop(.6,"#d9663a"),v.addColorStop(1,"#f2b25a"),x.fillStyle=v,x.fillRect(0,0,1024,400),x.fillStyle="#2a1410",x.beginPath(),x.moveTo(560,300),x.lineTo(700,120),x.lineTo(740,120),x.lineTo(900,300),x.fill(),x.fillStyle="#ff7a2a",x.beginPath(),x.arc(720,110,30,0,7),x.fill(),x.fillStyle="#1a0f0a",x.fillRect(0,300,1024,100);for(let k=0;k<6;k++)x.beginPath(),x.moveTo(k*180,300),x.lineTo(k*180+40,200-k%2*40),x.lineTo(k*180+80,300),x.fill();x.fillStyle="#f3e6c4",x.font="bold 72px Georgia, serif",x.textAlign="center",x.fillText("THE AGE OF DINOSAURS",512,80),x.font="italic 30px Georgia, serif",x.fillText("252 \u2013 66 million years ago (and, apparently, tonight)",512,125);let _=new B(new Bt(22,8.6),new ot({map:he(p),roughness:.8}));_.position.set(0,6,-45.78),e.add(_);let T=ka();T.position.set(0,6.6,-10.25),T.rotation.y=0,e.add(T);let[S,P]=ae(128,128);P.fillStyle="rgba(30,20,12,0.85)",P.beginPath(),P.ellipse(64,84,22,28,0,0,7),P.fill();for(let[k,D]of[[-.45,52],[0,60],[.45,52]])P.save(),P.translate(64,70),P.rotate(k),P.beginPath(),P.ellipse(0,-D*.6,9,D*.45,0,0,7),P.fill(),P.restore();let I=new ie({map:he(S),transparent:!0,depthWrite:!1,opacity:.85}),E=new dt,M=[];for(let k=0;k<9;k++)M.push([5.4+k*1.25,-27.4+k*.4+(k%2?.45:-.45)]);for(let k=0;k<10;k++)M.push([17.2+k*1.7,-23.4+k*.85+(k%2?.45:-.45)]);for(let k=0;k<6;k++)M.push([32.4-k*1.4,-14.6+k*.75+(k%2?.45:-.45)]);let L=new Bt(1.1,1.1);M.forEach(([k,D],F)=>{let q=new B(L,I);q.rotation.x=-Math.PI/2,q.position.set(k,.02,D);let[G,at]=M[F+1]?[k,D]:M[F-1],[X,pt]=M[F+1]||[k,D];q.rotation.z=Math.atan2(-(X-G),-(pt-at)),E.add(q)}),E.visible=!1,e.add(E),this.refs.footprints=E}_roman(){let t=this.mats,e=this.scene;this.floor(12,40,-9,9,t.mosaic,0,4),this.ceiling(12,40,-9,9,9,t.darkCeil),this.wallX(-9,12,40,9,t.romanWall,[{c:Mt.romanNorthDoor.x,w:3.2,h:4.4}],3),this.wallX(9,12,40,9,t.romanWall,[],3),this.wallZ(40,-9,9,9,t.romanWall,[],3),this.wallZ(12,-9,9,9,t.romanWall,[{c:0,w:6,h:6.2}],3);let i=new ot({color:9190186,roughness:.7});for(let f of[-3.2,3.2])e.add(rt(24,.012,.3,i,26,0,f));for(let f of[16.5,22,27.5,33])for(let m of[-5.6,5.6])this.add(Dh(9,.48,Tt.stoneWhite()),f,0,m),this.addBoxCollider(f,m,1.25,1.25);let s=[["JULIUS CAESAR",19.25,-8],["NERO",30.25,-8],["MARCUS AURELIUS",19.25,8],["CALIGULA",24.75,8],["HADRIAN",30.25,8]];for(let[f,m,y]of s)this.add(Pa(f),m,0,y,y>0?Math.PI:0),this.addBoxCollider(m,y,.85,.85);this.add(af(),25,0,0,Math.PI/2+.2),this.addCollider(23.2,27.4,-1.1,1.1);for(let[f,m]of[[22,-2.6],[28,-2.6],[22,2.6],[28,2.6]])this.add(pr(),f,0,m);for(let[f,m]of[[22,-2.6],[22,2.6]]){let y=Zr(6);y.position.set(f,0,m),e.add(y)}this.add(qi("ROMAN CHARIOT","Top speed: 40 km/h. Seatbelts: none. Cupholders: also none."),20.8,0,0,-Math.PI/2);for(let[f,m]of[[36.5,-7.8],[37.4,-7.6],[36.5,7.8],[37.4,7.6],[14,-8],[14,8]])this.add(of(),f,0,m,f*3),this.addBoxCollider(f,m,.5,.5);let[r,o]=ae(1024,512);o.fillStyle="#cfc6b4",o.fillRect(0,0,1024,512);for(let f=0;f<3e3;f++)o.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,o.fillRect(Math.random()*1024,Math.random()*512,3,3);o.strokeStyle="#8f8676",o.lineWidth=14,o.strokeRect(20,20,984,472),o.fillStyle="#3d3528",o.textAlign="center",o.font="bold 86px Georgia, serif",o.fillText("MVSEVM",512,150),o.fillText("CONDITVM ANNO",512,260),o.font="bold 120px Georgia, serif",o.fillText("MCMLXXIV",512,410);let a=new B(new Bt(5.4,2.7),new ot({map:he(r),roughness:.9}));a.position.set(39.77,3.6,0),a.rotation.y=-Math.PI/2,e.add(a),e.add(rt(.3,.3,5.8,Tt.stoneWhite(),39.7,2.1,0));for(let f of[-4.2,4.2]){let m=new B(new Bt(1.8,4.5),new ot({map:Me(`S
P
Q
R`,{w:200,h:500,bg:"#8a1022",fg:"#e9c46a",font:"bold 90px Georgia, serif",border:"#e9c46a"}),side:ke}));m.position.set(39.7,4.6,f),m.rotation.y=-Math.PI/2,e.add(m)}let l=mr("ROMAN NUMERALS 101",`I = 1    V = 5    X = 10    L = 50
C = 100    D = 500    M = 1000
Add them up, biggest first: XVI = 10+5+1 = 16.
Small BEFORE big means subtract: IV = 4, IX = 9, XC = 90, CM = 900.`,3.2,2,{bodyFont:"23px Georgia, serif",bg:"#2a1c14",accent:"#e9c46a"});l.position.set(15.6,2.2,-8.78),e.add(l);let c=mr("GLADIATOR SHIELD",`Property of Maximus. Do not borrow.
Won XXIII fights. Lost I (to a goose).`,2.6,1.2,{bg:"#2a1c14",accent:"#e9c46a"});c.position.set(15.6,2.2,8.78),c.rotation.y=Math.PI,e.add(c);let h=new B(new se(.7,.7,.08,24),new ot({color:9048098,roughness:.6}));h.rotation.x=Math.PI/2,h.position.set(19,2.6,8.75),e.add(h);let d=La({title:"AQVILA LOCK",color:"#ffcc4d"});this.add(d.group,Mt.romanPanel.x,0,Mt.romanPanel.z,-Math.PI/2),this.addBoxCollider(Mt.romanPanel.x,Mt.romanPanel.z,.8,.6,Math.PI/2),this.addUpdater(f=>d.update(f)),this.refs.console2=d,this.refs.panel2It=this.addInteractable({id:"panel2",pos:new A(Mt.romanPanel.x,1.2,Mt.romanPanel.z),prompt:"Inspect numeral lock",enabled:!1});let u=ka();u.position.set(12.25,6.6,0),u.rotation.y=Math.PI/2,e.add(u)}_egypt(){let t=this.scene,e=this.night,i=yr,s=new ot({map:ve("plaster"),color:13214828,roughness:.9}),r=new ot({map:ve("stone"),color:14203274,roughness:.85}),o=Wt("sandstone",{color:13150584,roughness:.85}),a=Wt("egyptDark",{color:9073488,roughness:.9}),l=Wt("basalt",{color:1776159,roughness:.35,metalness:.2}),c=Tt.brass(),h=Wt("lapis",{color:2047370,roughness:.5});this.floor(i.x0,i.x1,i.z0,i.z1,r,0,3),this.ceiling(i.x0,i.x1,i.z0,i.z1,i.h,this.mats.darkCeil),this.wallZ(i.x0,i.z0,i.z1,i.h,s,[{c:Mt.egyptDoor.z,w:3.2,h:4.4}],3),this.wallZ(i.x1,i.z0,i.z1,i.h,s,[],3),this.wallX(i.z0,i.x0,i.x1,i.h,s,[],3),this.wallX(i.z1,i.x0,i.x1,i.h,s,[{c:Mt.romanNorthDoor.x,w:3.2,h:4.4}],3);let d=(z,R,it)=>{for(let st of[-1,1]){let yt=st*1.4700000000000002,mt=z==="z"?rt(.95,4.4,.26,o,R,0,it+yt):rt(.26,4.4,.95,o,R+yt,0,it);t.add(mt),z==="z"?this.addCollider(R-.95/2,R+.95/2,it+yt-.26/2,it+yt+.26/2):this.addCollider(R+yt-.26/2,R+yt+.26/2,it-.95/2,it+.95/2)}t.add(z==="z"?rt(.95+.1,.6,3.5,o,R,4.3,it):rt(3.5,.6,.95+.1,o,R,4.3,it)),t.add(z==="z"?rt(.95+.14,.1,3.6,c,R,4.4,it):rt(3.6,.1,.95+.14,c,R,4.4,it))};d("z",(i.x0+15)/2,Mt.egyptDoor.z),d("x",Mt.romanNorthDoor.x,(i.z1-9)/2);let[u,f]=ae(1024,128);f.fillStyle="#d9b57a",f.fillRect(0,0,1024,128),f.fillStyle="#8a2a18",f.fillRect(0,0,1024,10),f.fillRect(0,118,1024,10),f.fillStyle="#1f3d8a",f.fillRect(0,12,1024,5),f.fillRect(0,111,1024,5),Ki.forEach((z,R)=>ti(f,z,64+R*128,64,80,["#1f3d8a","#8a2a18","#1a1a1a"][R%3]));let m=(z,R,it,J)=>{let ht=he(u);ht.wrapS=vi,ht.repeat.set(z/7,1);let st=new B(new Bt(z,.9),new ot({map:ht,roughness:.8}));st.position.set(R,5.6,it),st.rotation.y=J,t.add(st)},y=this.wallT/2+.01;m(i.x1-i.x0,(i.x0+i.x1)/2,i.z0+y,0),m(i.x1-i.x0,(i.x0+i.x1)/2,i.z1-y,Math.PI),m(i.z1-i.z0,i.x1-y,(i.z0+i.z1)/2,-Math.PI/2),m(i.z1-i.z0,i.x0+y,(i.z0+i.z1)/2,Math.PI/2);let[g,p]=ae(1024,512),x=p.createLinearGradient(0,0,0,512);x.addColorStop(0,"#2a1a3a"),x.addColorStop(.55,"#c86a2a"),x.addColorStop(1,"#e8c07a"),p.fillStyle=x,p.fillRect(0,0,1024,512),p.fillStyle="#7a4a1e";for(let[z,R,it]of[[180,300,210],[470,380,280],[800,260,170]])p.beginPath(),p.moveTo(z-R/2,512),p.lineTo(z,512-it),p.lineTo(z+R/2,512),p.fill();p.fillStyle="#ffd36a",p.beginPath(),p.arc(512,120,54,0,7),p.fill(),ti(p,"eye",512,260,190,"#14244f"),p.fillStyle="#f3e6c4",p.font="bold 54px Georgia, serif",p.textAlign="center",p.fillText("THE LAND OF THE PHARAOHS",512,60);let v=new B(new Bt(10,5),new ot({map:he(g),roughness:.8}));v.position.set((i.x0+i.x1)/2,3.2,i.z0+y),t.add(v),this.refs.pillars=[],D1.forEach(({n:z,glyph:R,x:it,z:J})=>{let ht=new dt;ht.add(rt(1.4,.3,1.4,a,0,0,0)),ht.add(rt(1.1,i.h-.6,1.1,o,0,.3,0)),ht.add(rt(1.4,.3,1.4,a,0,i.h-.3,0));let[st,yt]=ae(256,768);yt.fillStyle="#e3c992",yt.fillRect(0,0,256,768);for(let H=0;H<600;H++)yt.fillStyle=`rgba(90,60,20,${Math.random()*.1})`,yt.fillRect(Math.random()*256,Math.random()*768,3,3);yt.strokeStyle="#8a2a18",yt.lineWidth=10,yt.strokeRect(12,12,232,744),yt.fillStyle="#1f3d8a",yt.fillRect(12,250,232,10),yt.fillRect(12,600,232,10),bf(yt,z,128,140,150,"#b0301a"),ti(yt,R,128,430,220,"#14244f");for(let H=0;H<4;H++)ti(yt,Ki[(z*3+H)%Ki.length],50+H%2*156,650+Math.floor(H/2)*70,50,"rgba(60,40,20,0.55)");let mt=he(st),C=new ot({map:mt,roughness:.75});for(let H=0;H<4;H++){let $=new B(new Bt(1,3),C),nt=H*Math.PI/2;$.position.set(Math.sin(nt)*.56,2.05,Math.cos(nt)*.56),$.rotation.y=nt,ht.add($)}this.add(ht,it,0,J),this.addBoxCollider(it,J,1.4,1.4);let b=this.addInteractable({id:"pillar"+z,pos:new A(it,1.7,J),prompt:"Read the pillar",enabled:!1,radius:2.9});this.refs.pillars.push({n:z,glyph:R,it:b,x:it,z:J})});let _=La({title:"PHARAOH'S LOCK",color:"#e9c46a"});this.add(_.group,Mt.egyptPanel.x,0,Mt.egyptPanel.z),this.addBoxCollider(Mt.egyptPanel.x,Mt.egyptPanel.z,.8,.6),this.addUpdater(z=>_.update(z)),this.refs.consoleE=_,this.refs.panelEIt=this.addInteractable({id:"panelE",pos:new A(Mt.egyptPanel.x,1.2,Mt.egyptPanel.z),prompt:"Open the Pharaoh's Lock",enabled:!1});let T=Mt.sarcophagus,S=new B(Qn(4.6,.45,6,2),new ot({map:ve("stone"),color:10125144,roughness:.85}));S.position.set(T.x,.225,T.z),S.receiveShadow=!0,t.add(S),t.add(rt(4.7,.06,6.1,c,T.x,.45,T.z)),t.add(rt(2.6,.22,.7,a,T.x,0,T.z+3.3)),this.addCollider(T.x-2.3,T.x+2.3,T.z-3,T.z+3);let[P,I]=ae(512,256);for(let z=0;z<16;z++)I.fillStyle=z%2?"#1f3d8a":"#d4a43a",I.fillRect(z*32,0,32,256);I.fillStyle="#d4a43a",I.fillRect(0,96,512,64),Ki.forEach((z,R)=>ti(I,z,32+R*64,128,50,"#14244f"));let E=new ot({map:he(P),roughness:.45,metalness:.4}),M=Wt("sarcInside",{color:1708554,roughness:1}),L=new dt,k=1.3,D=.9,F=2.6,q=.1;L.add(rt(k,q,F,M,0,0,0)),L.add(rt(q,D,F,E,-k/2+q/2,0,0)),L.add(rt(q,D,F,E,k/2-q/2,0,0)),L.add(rt(k,D,q,E,0,0,-F/2+q/2)),L.add(rt(k,D,q,E,0,0,F/2-q/2)),L.add(rt(k-2*q,.02,F-2*q,M,0,q,0)),this.add(L,T.x,.45,T.z);let G=new dt,[at,X]=ae(256,512);X.fillStyle="#d4a43a",X.fillRect(0,0,256,512);for(let z=0;z<9;z++)X.fillStyle=z%2?"#1f3d8a":"#e9c46a",X.fillRect(40,150+z*22,176,22);ti(X,"ankh",128,400,120,"#14244f"),ti(X,"scarab",128,90,110,"#14244f");let pt=new B(new Qt(k+.06,.16,F+.06),[E,E,new ot({map:he(at),roughness:.4,metalness:.5}),E,E,E]);pt.castShadow=!0,G.add(pt);let xt=new B(new te(.28,16,12,0,Math.PI*2,0,Math.PI/2),c);xt.scale.set(1,.55,1.15),xt.position.set(0,.08,-F/2+.42),G.add(xt);for(let z of[-1,1])G.add(rt(.14,.06,.6,h,z*.3,.06,-F/2+.55));G.position.set(T.x,.45+D+.08,T.z),t.add(G),this.refs.sarcLid=G,this.refs.sarcLidBase=G.position.clone();let bt=_f(),zt=new dt,re=new dt;zt.add(re),re.add(bt.group),bt.group.position.y=-.92,re.rotation.x=-Math.PI/2,bt.anim.sit=0,bt.setMode("liesit"),bt.update(0),zt.position.set(T.x,.45+q+.16,T.z+.05),t.add(zt),this.refs.mummy={person:bt,holder:zt,pivot:re,home:zt.position.clone()},this.addUpdater(z=>bt.update(z));let K=()=>{let z=new dt;z.add(rt(1,.7,1.4,a,0,0,0)),z.add(rt(.62,1.2,.5,l,0,.7,-.1)),z.add(rt(.66,.5,.9,l,0,.7,.15));for(let J of[-1,1])z.add(rt(.18,.6,.2,l,J*.2,.7,.55));let R=new B(new Ke(.3,.07,6,16),c);R.rotation.x=Math.PI/2,R.position.set(0,1.86,-.1),z.add(R);let it=new dt;it.add(rt(.38,.36,.42,l,0,0,0)),it.add(rt(.18,.14,.42,l,0,.04,.34));for(let J of[-1,1]){let ht=new B(new hn(.08,.42,4),l);ht.position.set(J*.12,.5,-.06),it.add(ht);let st=rt(.06,.03,.02,c,J*.1,.22,.21);it.add(st)}return it.position.set(0,1.9,-.05),z.add(it),z.scale.setScalar(1.5),Te(z)};for(let z of[-1,1])this.add(K(),T.x+z*3.4,0,T.z-2.6),this.addBoxCollider(T.x+z*3.4,T.z-2.6,1.6,2.2);let lt=K();if(e){this.add(lt,35.4,.75,-15.4,0),lt.rotation.set(.15,-.6,Math.PI/2),lt.updateMatrixWorld(!0);let z=new _i().setFromObject(lt);this.addCollider(z.min.x+.2,z.max.x-.2,z.min.z+.2,z.max.z-.2)}else this.add(lt,35.6,0,-15.4,-Math.PI/2),this.addBoxCollider(35.6,-15.4,2.2,1.6);let Rt=new B(new se(.32,.5,6,4,1),o);Rt.rotation.y=Math.PI/4,Rt.position.set(36.6,3.3,-34.2),Rt.castShadow=!0,t.add(Rt);let ut=new B(new hn(.33,.6,4),c);ut.rotation.y=Math.PI/4,ut.position.set(36.6,6.6,-34.2),t.add(ut),t.add(rt(1.4,.3,1.4,a,36.6,0,-34.2)),this.addBoxCollider(36.6,-34.2,1.4,1.4);let Ft=new dt,Gt=new B(new hn(.5,.6,4),Wt("pyr",{color:14730378,roughness:.8}));Gt.rotation.y=Math.PI/4,Gt.position.y=.3,Ft.add(Gt),this.add(Kr(1.4,.9,1.4,Ft),19.6,0,-34.4),this.addBoxCollider(19.6,-34.4,1.5,1.5),t.add(rt(.7,.7,2.4,a,16.2,0,-31.6)),this.addCollider(15.8,16.6,-32.85,-30.35),["jackal","falcon","baboon","human"].forEach((z,R)=>{let it=new dt;it.add(new B(new se(.11,.08,.32,12),Wt("alabaster",{color:15327436,roughness:.5})));let J=new B(new te(.1,10,8),[c,l,Wt("alabaster",{color:15327436,roughness:.5}),a][R]);J.position.y=.22,it.add(J),it.position.set(16.2,.86,-32.35+R*.5),t.add(it)});let Ht=(z,R,it,J,ht)=>this.add(qi(z,R,{bg:"#2a1c0c",accent:"#d4a43a"}),it,0,J,ht);Ht("EGYPTIAN NUMBERS",`Ancient Egyptians counted with lines:
| = 1    || = 2    ||| = 3    |||| = 4
(10 was a little upside-down U. Fancy.)`,17.6,-20.8,-2.5),Ht("THE MUMMY",`Wrapped in about 20 layers of linen, 3,000 years ago.
Favorite food: unknown. (Probably not donuts.)`,30.8,-20.6,0),Ht("THE ANKH",`The Egyptian symbol of life. It looks like a key.
It is not a key. We checked.`,21.6,-14.6,Math.PI),Ht("SCARAB BEETLE",`Scarabs roll balls of poop across the sand.
The Egyptians thought this was beautiful. They were right.`,33.6,-31.6,-Math.PI/2),this.refs.flames=[];for(let[z,R]of[[18.2,-26.6],[23,-18.6],[21,-11.6],[33,-28.2]]){let it=new dt;for(let yt=0;yt<3;yt++){let mt=yt/3*Math.PI*2,C=new B(new se(.025,.025,1.1,5),c);C.position.set(Math.cos(mt)*.22,.52,Math.sin(mt)*.22),C.rotation.set(Math.sin(mt)*.2,0,-Math.cos(mt)*.2),it.add(C)}let J=new B(new se(.34,.2,.24,14),c);J.position.y=1.1,it.add(J),this.add(Te(it,!0,!1),z,0,R),this.addBoxCollider(z,R,.7,.7);let ht=new B(new hn(.22,.6,8),new ie({color:16752704,transparent:!0,opacity:.9,blending:_n,depthWrite:!1}));ht.position.set(z,1.5,R),t.add(ht);let st=new Le(16751168,e?7:2,10,2);st.position.set(z,1.9,R),t.add(st),this.refs.flames.push({flame:ht,light:st,base:st.intensity,ph:z*3.1})}let ee=0;this.addUpdater(z=>{ee+=z;for(let R of this.refs.flames){let it=.8+Math.sin(ee*13+R.ph)*.1+Math.sin(ee*7.3+R.ph*2)*.1;R.light.intensity=R.base*it,R.flame.scale.set(1,.85+it*.3,1),R.flame.rotation.y+=z*2}});let tt=(z,R,it,J,ht)=>{let st=new B(new Bt(5.2,1.1),new ot({map:Me(z,{w:1024,h:220,bg:"#2a1c0c",fg:"#e9c46a",font:"bold 104px Georgia, serif",border:"#d4a43a"}),emissive:16769184,emissiveIntensity:e?.12:.02}));st.position.set(R,it,J),st.rotation.y=ht,t.add(st)};tt("EGYPTIAN WING",14.78,5.6,Mt.egyptDoor.z,-Math.PI/2),tt("ROMAN EMPIRE",Mt.romanNorthDoor.x,5.4,i.z1-y-.01,Math.PI),tt("EGYPTIAN WING",Mt.romanNorthDoor.x,5.6,-8.78,0)}_collectibles(){this.night&&(this.addCollectible("lobby_desk",1.6,1.45,4.2,0),this.addCollectible("office_locker",-14.5,.6,3.6,3),this.addCollectible("dino_tri",-12.6,.8,-21.5,1),this.addCollectible("dino_meteor",12.3,.6,-42.8,4),this.addCollectible("dino_mural",-13,.6,-44.5,2),this.addCollectible("roman_caligula",24.75,2,8,0),this.addCollectible("roman_chariot",25,1.55,0,3),this.addCollectible("roman_amphora",38.3,.6,-6.6,1),this.addCollectible("egypt_jars",16.4,.95,-29.6,2),this.addCollectible("egypt_obelisk",38,.6,-36,4))}_visitors(){let t=Pe(99);this.visitors=[];let e=[{minX:-9,maxX:9,minZ:-8,maxZ:2},{minX:-12,maxX:12,minZ:-44,maxZ:-12,avoid:{minX:-5.5,maxX:5.5,minZ:-38,maxZ:-21}},{minX:14,maxX:38,minZ:-7,maxZ:7,avoid:{minX:22,maxX:28.5,minZ:-2,maxZ:2}}],i=s=>{for(let r=0;r<20;r++){let o=s.minX+t()*(s.maxX-s.minX),a=s.minZ+t()*(s.maxZ-s.minZ);if(!(s.avoid&&o>s.avoid.minX&&o<s.avoid.maxX&&a>s.avoid.minZ&&a<s.avoid.maxZ))return new A(o,0,a)}return new A((s.minX+s.maxX)/2,0,s.maxZ)};for(let s=0;s<14;s++){let r=e[s%e.length],o=xf(t),a=i(r);o.group.position.copy(a),this.scene.add(o.group),this.visitors.push({p:o,area:r,target:i(r),wait:t()*4})}this.addUpdater(s=>{for(let r of this.visitors){let o=r.p.group;if(r.wait>0)r.wait-=s,r.p.setMode("idle");else{let l=r.target.clone().sub(o.position),c=l.length();if(c<.3)r.wait=2+t()*5,r.target=i(r.area);else{l.normalize(),o.position.addScaledVector(l,Math.min(c,1.1*s));let d=Math.atan2(l.x,l.z)-o.rotation.y;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;o.rotation.y+=d*Math.min(1,s*6),r.p.setMode("walk",1.1)}}let a=this.game.player;if(a){let l=a.pos.x-o.position.x,c=a.pos.z-o.position.z,h=Math.hypot(l,c);h<.6&&h>.001&&(a.pos.x+=l/h*(.6-h),a.pos.z+=c/h*(.6-h))}r.p.update(s)}})}makeAaron(){return new _s({shirt:9417696,pants:1778752,cap:!0,badge:!0,nameTag:!0,hair:1118481,skin:13012580})}};var gn=[-2.2,0,2.2],Sn=24,Rf=8,dn=880;function Wh(n=1.15){let t=[[-.45,0],[-.2,0],[-.07,.78],[.07,.78],[.2,0],[.45,0],[.26,.95],[.3,1.38],[.66,.98],[.79,1.1],[.38,1.66],[.12,1.72]];for(let e=1;e<12;e++){let i=-.55+e/12*(Math.PI+1.1);t.push([Math.cos(i)*.23,1.92+Math.sin(i)*.23])}return t.push([-.12,1.72],[-.38,1.66],[-.79,1.1],[-.66,.98],[-.3,1.38],[-.26,.95]),t.map(([e,i])=>[e*n,i*n])}var Ha=class extends $i{constructor(t){super(t);let e=this.scene;e.background=new Nt(2301232),e.fog=new er(2301232,40,150),this.ownsCamera=!0,this.surface="carpet",this.rng=Pe(1974),e.add(new zi(13160703,5915700,1.8)),e.add(new Gi(16777215,.4)),this.headLight=new Le(16769720,70,50,1.5),e.add(this.headLight),this.aheadLight=new Le(16773336,90,60,1.5),e.add(this.aheadLight),this.alarm=new Le(16719904,0,30,1.5),e.add(this.alarm),this.mats={floor:new ot({map:ve("marble"),roughness:.3}),carpet:new ot({map:ve("carpet"),roughness:.9}),wall:new ot({map:ve("plaster"),color:9206938,roughness:.85}),ceil:new ot({color:2893364,roughness:1}),lamp:new ie({color:16773320}),frame:new ot({color:13214282,metalness:.8,roughness:.35})},this.paintMats=[];for(let f=0;f<8;f++)this.paintMats.push(new ot({map:Xu(500+f,f%3===0?"portrait":"landscape"),roughness:.7}));this.chunks=[];for(let f=0;f<Rf;f++){let m=this._chunk(f);m.position.z=-f*Sn,e.add(m),this.chunks.push(m)}this.guard=Oa(),e.add(this.guard.group),this.guard.group.rotation.y=Math.PI,this.guard.setMode("run",8);let i=Yi();i.rotation.x=Math.PI/2,i.scale.setScalar(1.3),this.guard.attachToHand(i,1);let[s,r]=[document.createElement("canvas"),null];s.width=s.height=128;let o=s.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(0,0,0,0.85)"),a.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=a,o.fillRect(0,0,128,128),this.blob=new B(new Bt(1,1),new ie({map:new Bn(s),transparent:!0,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.03,e.add(this.blob),this.trex=new xs,this.trex.setAlive(!0),this.trex.group.traverse(f=>f.layers.set(1)),this.trex.eyeLight?.layers.enableAll(),this.mirrorCam=new Xe(64,2.4,.1,90),this.mirrorCam.layers.enable(1),this.mirrorEl=document.getElementById("mirror"),t.camera.layers.enable(1),this.trex.group.rotation.y=Math.PI,e.add(this.trex.group);let l=Gh(Na());for(let f of l.eyes)f.visible=!0;this.lunge=new dt;let c=new dt;c.rotation.y=Math.PI/2+.35,c.add(l.head),this.lunge.add(c),this.lungeJaw=l.jaw,this.lungeHead=l.head,this.lunge.visible=!1,this.lungeT=-1,this.trexBehind=6,this.hideTrex=!1,this._buildWall();let[h]=[document.createElement("canvas")];h.width=h.height=32;let d=h.getContext("2d"),u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.3,"rgba(255,150,210,0.9)"),u.addColorStop(1,"rgba(255,100,180,0)"),d.fillStyle=u,d.fillRect(0,0,32,32),this.sparkTex=new Bn(h),this.sparks=[];for(let f=0;f<48;f++){let m=new ir(new ds({map:this.sparkTex,transparent:!0,depthWrite:!1,blending:_n}));m.visible=!1,m.scale.setScalar(.35),this.scene.add(m),this.sparks.push({s:m,v:new A,life:0})}this.sparkIdx=0,this.stepT=0,this.wasAir=!1,this.roll=0,this.obstacles=[],this.donuts=[],this.plan=this._plan(),this.planIdx=0,this.debris=[],this.st={phase:"idle",z:0,x:0,lane:1,prevLane:1,y:0,vy:0,slide:0,speed:0,danger:.25,invuln:0,slow:0,stompT:0,t:0,donutCount:0,arrowShown:!1,alarmT:0},this.camPos=new A,this.camLook=new A}_chunk(t){let e=new dt,i=this.mats,s=new B(Da(10,Sn,4),i.floor);s.rotation.x=-Math.PI/2,s.position.z=-Sn/2,s.receiveShadow=!0,e.add(s);let r=new B(new Bt(7.2,Sn),i.carpet);r.material.map.repeat.set(1,Sn/7.2),r.rotation.x=-Math.PI/2,r.position.set(0,.012,-Sn/2),e.add(r);for(let a of[-1,1]){let l=new B(Qn(.4,7,Sn,3),i.wall);l.position.set(a*5.2,3.5,-Sn/2),e.add(l);for(let c=0;c<3;c++){let h=-4-c*8,d=rt(.5,7,.7,Tt.stoneWhite(),a*4.9,0,h);if(e.add(d),c<2){let u=this.paintMats[(t*2+c+(a>0?3:0))%this.paintMats.length],f=u.map.image.height>200,m=f?1.6:2.6,y=f?2:1.6,g=new B(new Bt(m,y),u);g.position.set(a*4.98,3,h-4),g.rotation.y=-a*Math.PI/2,e.add(g);let p=rt(.08,y+.2,m+.2,i.frame,a*5,3-(y+.2)/2,h-4);e.add(p);let x=new B(new te(.12,8,6),i.lamp);x.position.set(a*4.85,4.6,h-4),e.add(x)}}}let o=new B(new Bt(10.4,Sn),i.ceil);o.rotation.x=Math.PI/2,o.position.set(0,7,-Sn/2),e.add(o);for(let a=0;a<2;a++){let l=rt(2.4,.08,.5,i.lamp,0,6.9,-6-a*12);e.add(l)}return Si(e),e}_buildWall(){let t=new jn;t.moveTo(-5.4,0),t.lineTo(5.4,0),t.lineTo(5.4,7),t.lineTo(-5.4,7),t.lineTo(-5.4,0);let e=new bi;Wh(1.18).forEach(([c,h],d)=>d===0?e.moveTo(gn[2]+c,h+.001):e.lineTo(gn[2]+c,h+.001)),e.closePath(),t.holes.push(e);let s=new rr(t,{depth:.6,bevelEnabled:!1}),r=new B(s,new ot({map:ve("plaster"),color:9076594,roughness:.9}));r.material.map.repeat.set(.25,.25),r.position.z=-dn-.6,r.castShadow=r.receiveShadow=!0,this.scene.add(r),this.wall=r;let o=new B(new Bt(4,.9),new ot({map:Me("ARCHIVES \u2014 STAFF ONLY",{w:1024,h:200,bg:"#a01818",fg:"#fff",font:"bold 84px Arial Black, Arial"})}));o.position.set(-1,4.8,-dn+.02),this.scene.add(o);let a=new B(new Bt(14,8),new ie({color:0}));a.position.set(0,3.5,-dn-5),this.scene.add(a);let l=new B(new Bt(6,2),new ie({map:Me("GO RIGHT \u279C",{w:1024,h:340,bg:"#ffcc4d",fg:"#111",font:"bold 170px Arial Black, Arial"}),toneMapped:!1,side:ke}));l.position.set(0,5.5,-dn+30),this.scene.add(l),this.arrow3d=l}_plan(){let t=this.rng,e=[],i=-70;for(;i>-(dn-90);){let s=-i/dn,r=t(),o={z:i,items:[]},a=Math.floor(t()*3);if(r<.3){for(let l=0;l<3;l++)l!==a&&o.items.push({type:t()<.5?"case":t()<.5?"statue":"cart",lane:l});o.donutLane=a}else if(r<.48){for(let l=0;l<3;l++)o.items.push({type:"rope",lane:l});o.donutArc=Math.floor(t()*3)}else if(r<.64){for(let l=0;l<3;l++)o.items.push({type:"banner",lane:l});o.donutLane=a}else if(r<.8){o.items.push({type:"case",lane:a});let l=(a+1+Math.floor(t()*2))%3;o.items.push({type:t()<.5?"bench":"column",lane:l}),o.donutArc=l}else{let l=["rope","banner","case"],c=Math.floor(t()*3);for(let h=0;h<3;h++)o.items.push({type:l[(h+c)%3],lane:h});o.donutLane=(2-c+3)%3}e.push(o),i-=ze(30,19,s)+t()*6}return e}_spawnRow(t){for(let e of t.items){let i=this._makeObstacle(e.type);i.mesh.position.set(gn[e.lane],0,t.z),this.scene.add(i.mesh),this.obstacles.push({...i,lane:e.lane,z:t.z,type:e.type,hit:!1})}if(t.donutLane!=null)for(let e=0;e<5;e++)this._spawnDonut(gn[t.donutLane],.9,t.z+14-e*2.4);if(t.donutArc!=null)for(let e=0;e<5;e++){let i=e/4;this._spawnDonut(gn[t.donutArc],.9+Math.sin(i*Math.PI)*1.3,t.z+4-i*8)}}_burst(t){for(let e=0;e<8;e++){let i=this.sparks[this.sparkIdx++%this.sparks.length];i.s.position.copy(t),i.s.visible=!0,i.v.set((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*3-this.st.speed*.6),i.life=.5+Math.random()*.3}}_spawnDonut(t,e,i){let s=Xn({frosting:Math.floor(Math.random()*5),glow:!0,scale:1.6});s.rotation.x=Math.PI/2,s.position.set(t,e,i),this.scene.add(s),this.donuts.push({obj:s,taken:!1})}_makeObstacle(t){let e=new dt,i=0,s=2,r=1,o=1.7;if(t==="case"){let a=new B(new te(.28,14,10),new ot({color:14274472,roughness:.6}));a.scale.y=1.3,a.position.y=.36;let l=new dt;l.add(a);let c=Kr(1.6,1.1,1,l);e.add(c),s=2.1,r=1}else if(t==="statue")e.add(Pa(null)),s=1.9,r=.9,o=1;else if(t==="cart"){e.add(rt(1.4,1.1,.9,Wt("cart",{color:15909166,roughness:.5}),0,.15,0));let a=rt(.06,1.6,.06,Tt.wood(),.4,.2,.2);a.rotation.z=.2,e.add(a),e.add(new B(new Ke(.12,.03,6,12),Tt.black()).translateY(.12).translateX(-.5));let l=new B(new Bt(.9,.5),new ot({map:Me("WET FLOOR",{w:256,h:140,bg:"#ffd400",fg:"#111",font:"bold 44px Arial Black, Arial"})}));l.position.set(0,.8,.46),e.add(l),s=1.4,r=.9,o=1.5}else if(t==="rope"){let a=pr(),l=pr();a.position.x=-.95,l.position.x=.95,e.add(a,l);let c=Zr(1.9);c.position.x=-.95,e.add(c),s=1,r=.3,o=2}else if(t==="bench"){let a=Ia(1.9);e.add(a),s=.55,r=.5,o=1.9}else if(t==="column"){let a=new B(new se(.38,.38,2,16),Tt.stoneWhite());a.rotation.z=Math.PI/2,a.position.y=.38,a.castShadow=!0,e.add(a),s=.76,r=.76,o=2}else if(t==="banner"){let a=new B(new Bt(2.1,1.7),new ot({map:Me(`EXHIBIT
CLOSED`,{w:300,h:240,bg:"#14243d",fg:"#ffcc4d",font:"bold 62px Arial Black, Arial",border:"#ffcc4d"}),side:ke}));a.position.y=2.25,e.add(a);for(let l of[-.9,.9])e.add(rt(.03,3.6,.03,Tt.metal(),l,3.1,0));i=1.3,s=3.6,r=.3,o=2.1}return Te(e,!0,!1),Si(e),{mesh:e,y0:i,y1:s,d:r,w:o}}start(){let t=this.st;return t.phase="intro",t.t=0,this.game.camera.add(this.lunge),this.lunge.position.set(0,2.4,-2.8),this.scene.add(this.game.camera),new Promise(e=>this.resolve=e)}beginRun(){this.game.camera.layers.disable(1),this.mirrorEl?.classList.remove("off"),this.st.phase="run",this.st.speed=13}update(t){super.update(t);let e=this.game,i=this.st,s=e.input;i.t+=t;let r=e.camera;for(;this.planIdx<this.plan.length&&this.plan[this.planIdx].z>i.z-130;)this._spawnRow(this.plan[this.planIdx]),this.planIdx++;for(let c of this.chunks)c.position.z-Sn>i.z+30&&(c.position.z-=Rf*Sn),c.visible=c.position.z>-dn-Sn;if(i.phase==="intro")i.speed=9,i.z-=i.speed*t,this.trex.group.visible=!this.hideTrex,this.trex.group.position.set(.5,0,i.z+this.trexBehind),this.trex.setMode("run",9);else if(i.phase==="run"){let c=-i.z/dn,h=ze(13.5,20,Je(c,0,1))*(i.slow>0?.6:1);i.speed=on(i.speed,h,2,t),i.slow-=t,i.z-=i.speed*t;let d=s.wasPressed("KeyA","ArrowLeft","SwipeLeft"),u=s.wasPressed("KeyD","ArrowRight","SwipeRight"),f=s.wasPressed("KeyW","ArrowUp","Space","SwipeUp"),m=s.wasPressed("KeyS","ArrowDown","SwipeDown");d&&i.lane>0&&(i.prevLane=i.lane,i.lane--,e.audio.play("whoosh",{vol:.4})),u&&i.lane<2&&(i.prevLane=i.lane,i.lane++,e.audio.play("whoosh",{vol:.4})),f&&i.y<=.001&&(i.vy=10.5,i.slide=0,e.audio.play("whoosh",{vol:.5})),m&&(i.y>.05&&(i.vy=-18),i.slide=.75),i.danger=Je(i.danger-t*.045,0,1),i.invuln-=t,i.stompT-=t,i.stompT<=0&&(i.stompT=ze(.62,.36,i.danger),e.audio.play("stomp",{vol:.25+i.danger*.6}),e.shake(.05+i.danger*.18,.25)),Math.random()<t*.08&&e.audio.play("growl",{vol:.5+i.danger}),this._collisions(),!i.arrowShown&&i.z<-(dn-95)&&(i.arrowShown=!0,e.hud.showArrow(!0),e.audio.play("alarm",{n:2})),i.z<-dn+1.2&&(i.lane===2&&Math.abs(i.x-gn[2])<.6?this._escape():this._caught(!0)),e.hud.setChase(Je(-i.z/dn,0,1),i.danger,i.donutCount)}else if(i.phase==="escape"){let c=on(i.z,-dn-3.4,2.6,t);i.speed=(i.z-c)/Math.max(t,1e-4),i.z=c}i.vy-=32*t,i.y=Math.max(0,i.y+i.vy*t),i.y===0&&(i.vy=Math.max(0,i.vy));let o=i.y>.02;this.wasAir&&!o&&i.phase==="run"&&(e.audio.play("thud",{vol:.35}),e.shake(.06,.15)),this.wasAir=o,i.phase==="run"&&!o&&(this.stepT+=t*i.speed,this.stepT>3.4&&(this.stepT=0,e.audio.play("step",{surface:"carpet",vol:.8})));for(let c of this.sparks)c.life<=0||(c.life-=t,c.v.y-=9*t,c.s.position.addScaledVector(c.v,t),c.s.material.opacity=Math.min(1,c.life*2.5),c.life<=0&&(c.s.visible=!1));if(i.phase==="run"){let c=(i.speed-13)/7;e.hud.setSpeedLines(.15+c*.55),r.fov=on(r.fov,70+c*9,3,t),r.updateProjectionMatrix()}else e.hud.setSpeedLines(0);this.roll=on(this.roll,(gn[i.lane]-i.x)*-.035,8,t),i.slide-=t,i.x=on(i.x,gn[i.lane],14,t);let a=this.guard;a.group.position.set(i.x,i.y,i.z),i.phase==="escape"&&i.speed<1?a.setMode("idle"):i.y>.05?a.setMode("jump"):i.slide>0?a.setMode("slide"):a.setMode("run",i.speed),a.group.visible=i.invuln<=0||Math.floor(i.t*12)%2===0,a.update(t);let l=1.5+i.danger*5;this.blob.scale.set(l,l*1.6,1),this.blob.position.set(i.x*.5,.03,i.z+3-i.danger*2.5),this.blob.material.opacity=i.phase==="run"?.25+i.danger*.55:0;for(let c of this.donuts)c.taken||(c.obj.rotation.z+=t*3,Math.abs(c.obj.position.z-i.z)<.9&&Math.abs(c.obj.position.x-i.x)<.9&&Math.abs(c.obj.position.y-(i.y+.9))<1.1&&(c.taken=!0,this.scene.remove(c.obj),i.donutCount++,e.meter.add(4),this._burst(c.obj.position),e.audio.play("coin",{pitch:i.donutCount%5*2})),c.obj.position.z>i.z+12&&(c.taken=!0,this.scene.remove(c.obj)));this.obstacles=this.obstacles.filter(c=>c.z>i.z+15?(this.scene.remove(c.mesh),!1):!0);for(let c of this.debris)c.v.y-=20*t,c.m.position.addScaledVector(c.v,t),c.m.rotation.x+=t*6,c.m.position.y<0&&(c.m.position.y=0,c.v.multiplyScalar(.4));if(this.headLight.position.set(i.x*.4,5.5,i.z-7),this.aheadLight.position.set(0,6,i.z-30),i.alarmT+=t,this.alarm.position.set(0,6,i.z+6),this.alarm.intensity=i.phase==="run"?Math.sin(i.alarmT*8)>0?25:4:0,this.camMode==="front"?(this.camPos.set(2.3,1.7,i.z-6.8),this.camLook.set(0,3.1,i.z+4)):this.camMode==="chase"&&(this.camPos.set(i.x*.55,3.3+i.y*.3,i.z+6.4),this.camLook.set(i.x*.8,1.2+i.y*.5,i.z-7)),this.camMode!=="free"&&(this.camBlend!=null?(r.position.lerpVectors(this.camFrom,this.camPos,this.camBlend),this._look.lerpVectors(this.lookFrom,this.camLook,this.camBlend),r.lookAt(this._look)):(r.position.copy(this.camPos),r.lookAt(this.camLook),this.camMode==="chase"&&r.rotateZ(this.roll))),i.phase==="run"){let c=this.trex.group;c.visible=!0,c.position.set(i.x*.5,0,i.z+ze(17,5.2,i.danger)),c.rotation.y=Math.PI,this.trex.setMode("run",i.speed*.8)}if(this.trex.update(t),this.lungeT>=0){this.lungeT+=t;let c=this.lungeT,h=this.lungeDur,d=c<.25?c/.25:c<h-.3?1:Math.max(0,(h-c)/.3);this.lunge.visible=!0,this.lunge.position.set(ze(-3.4,this.lungeFull?-.9:-1.1,d),ze(2.2,this.lungeFull?.2:.5,d),-2.5),this.lunge.rotation.z=ze(.25,-.3,d),this.lungeJaw.rotation.x=c<.3?.9:c<.42?ze(.9,0,(c-.3)/.12):.1,c>h&&(this.lungeT=-1,this.lunge.visible=!1)}}_collisions(){let t=this.st,e=this.game;if(t.invuln>0)return;let i=t.slide>0&&t.y<.1?.8:1.7;for(let s of this.obstacles){if(s.hit||Math.abs(s.z-t.z)>s.d/2+.35||Math.abs(s.mesh.position.x-t.x)>s.w/2+.25)continue;let r=t.y;if(t.y+i<=s.y0||r>=s.y1)continue;s.hit=!0,Math.abs(t.x-gn[t.lane])>.5&&t.prevLane!==t.lane&&s.lane===t.lane?(t.lane=t.prevLane,this._stumble(.18,!1,s)):this._stumble(.34,!0,s);return}}_stumble(t,e,i){let s=this.st,r=this.game;if(s.danger+=t,s.invuln=1.2,r.audio.play("bonk"),r.shake(.35,.4),r.hud.flash("rgba(255,40,40,0.35)"),e){s.slow=1,r.audio.play("crash",{vol:.5}),i.mesh.visible=!1;for(let o=0;o<10;o++){let a=new B(new Qt(.2,.2,.2),Tt.darkWood());a.position.set(i.mesh.position.x,.8,i.z),this.scene.add(a),this.debris.push({m:a,v:new A((Math.random()-.5)*8,4+Math.random()*6,-Math.random()*10)})}}if(s.danger>=1){this._caught(!1);return}this.lungeT=0,this.lungeDur=.75,this.lungeFull=!1,r.audio.play("roar",{short:!0,vol:.8})}_caught(t){let e=this.st,i=this.game;e.phase==="run"&&(this.mirrorEl?.classList.add("off"),e.phase="caught",e.speed=0,i.hud.showArrow(!1),t&&(i.audio.play("bonk"),i.audio.play("crash",{vol:.6})),i.audio.play("roar"),this.lungeT=0,this.lungeDur=1.4,this.lungeFull=!0,i.shake(.6,1),setTimeout(()=>this.resolve?.("caught"),1300))}_escape(){let t=this.st;this.mirrorEl?.classList.add("off"),this.game.camera.layers.enable(1),t.phase="escape",this.game.hud.showArrow(!1),this.resolve?.("escaped")}setCam(t){this.camMode=t,this.camBlend=null}blendCam(t){this.camFrom=this.game.camera.position.clone();let e=new A;this.game.camera.getWorldDirection(e),this.lookFrom=this.game.camera.position.clone().addScaledVector(e,10),this._look=new A,this.camMode=t,this.camBlend=0}renderExtra(t){let e=this.mirrorEl;if(!e||e.classList.contains("off")||this.st.phase!=="run"||this.game.paused)return;let i=e.getBoundingClientRect();if(i.width<10)return;let s=this.st,r=this.mirrorCam;r.aspect=i.width/i.height,r.updateProjectionMatrix(),r.position.set(s.x*.8,1.9+s.y*.5,s.z-3.4),r.lookAt(s.x*.6,3.5,s.z+9);let o=innerHeight-i.bottom;t.setScissorTest(!0),t.setScissor(i.left,o,i.width,i.height),t.setViewport(i.left,o,i.width,i.height),t.clearDepth(),t.render(this.scene,r),t.setScissorTest(!1),t.setViewport(0,0,innerWidth,innerHeight)}dispose(){this.game.camera.layers.set(0),this.mirrorEl?.classList.add("off"),this.game.camera.remove(this.lunge),super.dispose()}};var Xh=[.1,.8,1.5,2.2];function U1(){let[n,t]=ae(256,256);t.fillStyle="#e2b47c",t.fillRect(0,0,256,256);for(let e=0;e<256;e+=6)t.fillStyle=`rgba(120,70,20,${.04+Math.random()*.04})`,t.fillRect(e,0,2,256);for(let e=0;e<400;e++)t.fillStyle=`rgba(80,40,10,${Math.random()*.08})`,t.fillRect(Math.random()*256,Math.random()*256,3,3);t.fillStyle="rgba(240,210,150,0.75)",t.fillRect(0,0,256,34),t.fillStyle="rgba(255,255,255,0.15)",t.fillRect(0,6,256,4),t.fillStyle="#f4f1e8",t.fillRect(64,120,128,72),t.strokeStyle="rgba(0,0,0,0.25)",t.lineWidth=2,t.strokeRect(64,120,128,72),t.fillStyle="#2b2b2b",t.font="bold 26px Courier New, monospace",t.textAlign="center",t.fillText("MUSEUM",128,152),t.fillRect(80,166,96,4),t.fillRect(80,176,64,4),t.fillStyle="rgba(60,30,10,0.55)";for(let e of[28,228])t.beginPath(),t.moveTo(e,210),t.lineTo(e-12,230),t.lineTo(e+12,230),t.fill(),t.fillRect(e-4,230,8,16);return he(n)}function N1(){let[n,t]=ae(256,256);t.fillStyle="#eeeae0",t.fillRect(0,0,256,256);for(let e=0;e<300;e++)t.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,t.fillRect(Math.random()*256,Math.random()*256,3,3);return t.fillStyle="rgba(0,0,0,0.12)",t.fillRect(0,44,256,6),t.strokeStyle="#2a2a2a",t.lineWidth=5,t.strokeRect(70,80,116,70),t.fillStyle="#2a2a2a",t.font="bold 22px Courier New, monospace",t.textAlign="center",t.fillText("FILES",128,112),t.fillRect(86,124,84,3),t.fillRect(86,134,60,3),t.fillStyle="#3a342c",t.beginPath(),t.ellipse(128,196,34,12,0,0,Math.PI*2),t.fill(),he(n)}function Cf(){return{frame:new ot({color:7041664,roughness:.45,metalness:.6}),back:new ot({color:2893603,roughness:.95}),cardboard:new ot({map:U1(),vertexColors:!0,roughness:.9}),archive:new ot({map:N1(),vertexColors:!0,roughness:.85}),bin:new ot({vertexColors:!0,roughness:.35,metalness:.05}),pillar:new ot({color:5591887,roughness:.9})}}var Ba=new ce,za=new An,Ga=new mn,Va=new A,Pf=new A(1,1,1);function vr(n,t,e,i,s,r,o=0,a=null){let l=new Qt(n,t,e);if(Ga.set(0,o,0),za.setFromEuler(Ga),Va.set(i,s,r),Ba.compose(Va,za,Pf),l.applyMatrix4(Ba),a){let c=l.attributes.position.count,h=new Float32Array(c*3);for(let d=0;d<c;d++)h[d*3]=a.r,h[d*3+1]=a.g,h[d*3+2]=a.b;l.setAttribute("color",new Be(h,3))}return l}var Wa=class{constructor(t,e){this.rng=t,this.H=e,this.parts={frame:[],back:[],cardboard:[],archive:[],bin:[],pillar:[]}}unit(t,e,i,s,r,o=[]){let a=this.rng,l=this.H,c=[],h=(f,m)=>c.push([f,m]),d=r/2,u=d-.04;h("back",vr(s,l,.05,0,l/2,0));for(let f of[-1,1]){for(let m of Xh)h("frame",vr(s,.035,u,0,m,f*(.025+u/2)));for(let m of[-s/2+.03,0,s/2-.03])h("frame",vr(.04,l-.04,.04,m,l/2,f*(d-.03)));Xh.forEach((m,y)=>{let g=(Xh[y+1]??l)-m-.08,p=-s/2+.06;for(;p<s/2-.25;){if(a()<.14){p+=.25+a()*.35;continue}let x=a(),v=x<.55?"cardboard":x<.85?"archive":"bin",_=v==="archive"?.3+a()*.12:.3+a()*.32,T=v==="bin"?.18+a()*.12:.22+a()*Math.min(.4,g-.22);v==="archive"&&(T=Math.min(g,.26+a()*.06));let S=Math.min(u-.02,.2+a()*.08);if(_=Math.min(_,s/2-.06-p),_<.2)break;let P=p+_/2;if(!o.some(I=>I.side===f&&I.level===y&&P+_/2>I.from&&P-_/2<I.to)){let I=.72+a()*.3,E=v==="bin"?new Nt().setHSL([.58,.6,.08,0][Math.floor(a()*4)],a()<.25?0:.45,.42*I):new Nt(I,I*(.94+a()*.06),I*(.88+a()*.1)),M=m+.0175+T/2,L=f*(.05+S/2+a()*.03);if(h(v,vr(_,T,S,P,M,L,(a()-.5)*.12,E)),v!=="bin"&&g-T>.24&&a()<.25){let k=_*(.55+a()*.3),D=Math.min(g-T-.02,.14+a()*.14);h("cardboard",vr(k,D,S*.85,P+(a()-.5)*.1,M+T/2+D/2,L,(a()-.5)*.3,new Nt(I*.95,I*.88,I*.78)))}}p+=_+.02+a()*.08}})}Ga.set(0,i,0),za.setFromEuler(Ga),Va.set(t,0,e),Ba.compose(Va,za,Pf);for(let[f,m]of c)m.applyMatrix4(Ba),this.parts[f].push(m)}pillar(t,e,i){this.parts.pillar.push(vr(i,this.H,i,t,this.H/2,e))}build(t){let e=[];for(let[i,s]of Object.entries(this.parts)){if(!s.length)continue;let r=fr(s,!1);for(let a of s)a.dispose();let o=new B(r,t[i]);o.castShadow=!0,o.receiveShadow=!0,e.push(o)}return e}};var Ct=3.2,He=7,ii=5,xr=3,Ln=3,qn=.3,un=.64,Xa=[["red",16729413],["blue",4892927],["yellow",16765503]],qa=class extends $i{constructor(t){super(t);let e=this.scene;this.surface="concrete",e.background=new Nt(65794),e.fog=new tr(131587,.07);let i=this.rng=Pe(4242);e.add(new Gi(8425648,.22)),e.add(new zi(4214896,1051656,.3)),this.shelfMats=Cf(),this.mats={wall:new ot({map:ve("plaster"),color:9076594,roughness:.9}),floor:new ot({map:ve("concrete"),roughness:.9}),ceil:new ot({map:ve("concrete"),color:5592405,roughness:1}),pipe:new ot({color:5922920,roughness:.5,metalness:.6}),bulb:new ie({color:16764800})};let s=ii*xr;this.R=s;let r=[],o=[];for(let v=0;v<s;v++)r.push(new Array(He).fill(!0)),o.push(new Array(He).fill(!0));this.entries=[{c:3,r:0}],this.exits=[];for(let v=0;v<xr;v++){let _=v*ii,T=_+ii-1,S=this.entries[v],P=new Set([`${S.c},${S.r}`]),I=[S];for(;I.length;){let L=I[I.length-1],k=[[1,0],[-1,0],[0,1],[0,-1]].map(([F,q])=>({c:L.c+F,r:L.r+q,dc:F,dr:q})).filter(F=>F.c>=0&&F.c<He&&F.r>=_&&F.r<=T&&!P.has(`${F.c},${F.r}`));if(!k.length){I.pop();continue}let D=k[Math.floor(i()*k.length)];D.dc===1&&(o[L.r][L.c]=!1),D.dc===-1&&(o[L.r][D.c]=!1),D.dr===1&&(r[L.r][L.c]=!1),D.dr===-1&&(r[D.r][D.c]=!1),P.add(`${D.c},${D.r}`),I.push({c:D.c,r:D.r})}for(let L=0;L<4;L++){let k=_+Math.floor(i()*(ii-1)),D=Math.floor(i()*(He-1));i()<.5?o[k][D]=!1:r[k][D]=!1}let E=this._bfs(S,r,o,_,T);this[`dist${v}`]=E;let M=null;for(let L=0;L<He;L++){let k=E[`${L},${T}`];(M==null||k>M.d)&&(M={c:L,r:T,d:k})}this.exits.push(M),this.entries.push({c:M.c,r:T+1}),this[`dead${v}`]=Object.entries(E).map(([L,k])=>{let[D,F]=L.split(",").map(Number);return{c:D,r:F,d:k}}).filter(L=>this._openings(L.c,L.r,r,o,_,T)===1&&!(L.c===M.c&&L.r===M.r)&&!(L.c===S.c&&L.r===S.r)).sort((L,k)=>k.d-L.d)}this.north=r,this.east=o;let a=-Ct/2,l=(He-1)*Ct+Ct/2,c=-(s-1)*Ct-Ct/2-2*Ct,h=Ct/2;this.floor(a-1,l+1,c-1,h+4,this.mats.floor,0,3),this.ceiling(a-1,l+1,c-1,h+4,Ln,this.mats.ceil,3);let d=[],u=(v,_)=>d.push({x:_*Ct,z:-v*Ct-Ct/2,rot:0}),f=(v,_)=>d.push({x:_*Ct+Ct/2,z:-v*Ct,rot:Math.PI/2});this.gates=[];for(let v=0;v<s;v++){for(let _=0;_<He;_++){let T=v%ii===ii-1;if(r[v][_]){let S=this.exits[Math.floor(v/ii)];T&&S.c===_&&S.r===v?this._gateWall(v,_,Math.floor(v/ii)):u(v,_)}_<He-1&&o[v][_]&&f(v,_)}f(v,-1),f(v,He-1)}for(let v=0;v<He;v++)v!==this.entries[0].c&&u(-1,v);this._planPeeks();let m=new Wa(i,Ln),y=new Set,g=(v,_)=>y.add(`${Math.round(v*100)},${Math.round(_*100)}`),p=Ct-un;d.forEach(v=>{let _=v.rot===0,T=this.peeks.find(E=>E.seg===`${v.x.toFixed(2)},${v.z.toFixed(2)}`),S=T?[{side:T.west?1:-1,level:2,from:-.55,to:.55}]:[];m.unit(v.x,v.z,v.rot,p,un,S);let P=(Ct+un)/2,I=un/2;_?(this.addCollider(v.x-P,v.x+P,v.z-I,v.z+I),g(v.x-Ct/2,v.z),g(v.x+Ct/2,v.z)):(this.addCollider(v.x-I,v.x+I,v.z-P,v.z+P),g(v.x,v.z-Ct/2),g(v.x,v.z+Ct/2))});for(let v of this.gateSpots)g(v.x-Ct/2,v.z),g(v.x+Ct/2,v.z);g(this.entries[0].c*Ct-Ct/2,Ct/2),g(this.entries[0].c*Ct+Ct/2,Ct/2);for(let v of y){let[_,T]=v.split(",").map(S=>Number(S)/100);m.pillar(_,T,un)}for(let v of m.build(this.shelfMats))e.add(v);this.wallSegs=d,this._entranceWall(),this._finalRoom(),this._stations(),this._decorate(),this._keys();let x=new Set([this.lastDonut,...this.gates.map(v=>v.mesh),...this.collectibles.map(v=>v.obj),...this.keys.map(v=>v.obj),...this.keySlots]);Si(this.scene,v=>x.has(v))}_bfs(t,e,i,s,r){let o={[`${t.c},${t.r}`]:0},a=[t];for(;a.length;){let l=a.shift(),c=o[`${l.c},${l.r}`],h=[];l.c<He-1&&!i[l.r][l.c]&&h.push([l.c+1,l.r]),l.c>0&&!i[l.r][l.c-1]&&h.push([l.c-1,l.r]),l.r<r&&!e[l.r][l.c]&&h.push([l.c,l.r+1]),l.r>s&&!e[l.r-1][l.c]&&h.push([l.c,l.r-1]);for(let[d,u]of h){let f=`${d},${u}`;o[f]==null&&(o[f]=c+1,a.push({c:d,r:u}))}}return o}_openings(t,e,i,s,r,o){let a=0;return t<He-1&&!s[e][t]&&a++,t>0&&!s[e][t-1]&&a++,e<o&&!i[e][t]&&a++,e>r&&!i[e-1][t]&&a++,a}cellPos(t,e){return new A(t*Ct,0,-e*Ct)}_gateWall(t,e,i){let s=this.scene,r=e*Ct,o=-t*Ct-Ct/2;(this.gateSpots||(this.gateSpots=[])).push({x:r,z:o});let a=1.5,l=(Ct-un-a)/2;for(let y of[-1,1]){let g=new B(Qn(l,Ln,un,1.6),this.shelfMats.pillar);g.position.set(r+y*(a/2+l/2),Ln/2,o),s.add(g),this.addCollider(r+y*(a/2+l/2)-l/2-un/2,r+y*(a/2+l/2)+l/2+un/2,o-un/2,o+un/2)}let c=new ie({map:Me("",{w:64,h:256,bg:"#ffcc00"}),color:14263040});for(let y of[-1,1]){let g=new B(new Bt(.08,2.3),c);g.position.set(r+y*(a/2+.04),1.15,o+un/2+.005),s.add(g)}let h=rt(a,Ln-2.3,un,Tt.metal(),r,2.3,o);s.add(h);let d=new dt,u=new se(.035,.035,2.3,6);for(let y=0;y<8;y++){let g=new B(u,Tt.metal());g.position.set(-a/2+.1+y*((a-.2)/7),1.15,0),g.castShadow=!0,d.add(g)}for(let y of[.3,1.2,2.1])d.add(rt(a,.06,.06,Tt.metal(),0,y,0));d.position.set(r,0,o),s.add(d);let f=this.addCollider(r-a/2,r+a/2,o-.2,o+.2),m=new B(new Bt(a,.5),new ie({map:Me("",{w:128,h:32,bg:"#ffcc00"}),color:16763904}));m.rotation.x=-Math.PI/2,m.position.set(r,.01,o+.5),s.add(m),this.gates[i]={mesh:d,collider:f,open:!1,x:r,z:o}}openGate(t,e=!1){let i=this.gates[t];return!i||i.open?Promise.resolve():(i.open=!0,i.collider.enabled=!1,e?(i.mesh.position.y=2.25,Promise.resolve()):(this.game.audio.play("gate"),this.game.tween(1.6,s=>{i.mesh.position.y=2.25*s})))}_entranceWall(){let t=this.scene,i=this.entries[0].c*Ct,s=Ct/2,r=new jn,o=(Ct-un)/2+.02;r.moveTo(-o,0),r.lineTo(o,0),r.lineTo(o,Ln),r.lineTo(-o,Ln),r.lineTo(-o,0);let a=new bi;Wh(1.18).forEach(([f,m],y)=>y===0?a.moveTo(f,m+.001):a.lineTo(f,m+.001)),r.holes.push(a);let l=new rr(r,{depth:qn,bevelEnabled:!1}),c=new B(l,new ot({map:ve("plaster"),color:9076594,roughness:.9}));c.position.set(i,0,s-qn/2),t.add(c),this.addCollider(i-o,i+o,s-qn/2,s+qn/2);let h=new Le(16723984,4,6,2);h.position.set(i,1.4,s+1.2),t.add(h),this.entranceLight=h;let d=new B(new Bt(4,3),new ie({color:1705219}));d.position.set(i,1.5,s+2.5),d.rotation.y=Math.PI,t.add(d);let u=new B(new te(.12,14,10),new ot({color:16723984,emissive:16722432,emissiveIntensity:6}));u.position.set(i,1.9,s+.5),u.visible=!1,t.add(u),this.holeEye=u}_finalRoom(){let t=this.scene,e=this.exits[xr-1],i=Math.max(0,Math.min(He-3,e.c-1)),s=-(this.R-1)*Ct-Ct/2,r=i*Ct-Ct/2,o=(i+3)*Ct-Ct/2,a=s,l=s-2*Ct,c=(v,_,T,S)=>{let P=Math.hypot(T-v,S-_),I=new B(Qn(P+qn,Ln,qn,1.6),this.mats.wall);I.position.set((v+T)/2,Ln/2,(_+S)/2),v===T&&(I.rotation.y=Math.PI/2),t.add(I),this.addCollider(Math.min(v,T)-qn/2,Math.max(v,T)+qn/2,Math.min(_,S)-qn/2,Math.max(_,S)+qn/2)};c(r,l,o,l),c(r,a,r,l),c(o,a,o,l);let h=(r+o)/2,d=(a+l)/2;this.finalRoom={x0:r,x1:o,z0:a,z1:l,cx:h,cz:d};let u=new Le(16756848,8,12,2);u.position.set(h,2.6,d),t.add(u);let f=new B(new te(.1,10,8),this.mats.bulb);f.position.set(h,2.7,d),t.add(f);let m=new B(new Bt(2.4,.6),new ot({map:Me("BREAK ROOM",{w:512,h:128,bg:"#2a1a12",fg:"#ffcf80",font:"bold 64px Arial Black, Arial"}),emissive:16764800,emissiveIntensity:.15}));m.position.set(h,2.3,l+qn/2+.02),t.add(m),this.add(vs(.7,1.05),h,0,d-.6),this.addBoxCollider(h,d-.6,.8,.8);let y=new B(new se(.32,.32,.6,20,1,!0),Tt.glass());y.position.set(h,1.35,d-.6),t.add(y);let g=Xn({frosting:0,glow:!0,scale:1.4});g.position.set(h,1.2,d-.6),g.rotation.x=.4,t.add(g),this.lastDonut=g;let p=new ar(16766704,10,6,.4,.5,1.5);p.position.set(h,2.9,d-.6),p.target=g,t.add(p);let x=mr("EXHIBIT 404",`THE LAST DONUT
(c. 1974)`,1.2,.6,{bg:"#1c1a17",titleFont:"bold 46px Georgia, serif",bodyFont:"40px Georgia, serif"});x.position.set(h,.6,d-.6+.42),t.add(x),this.beanbag=this.add(mf(),r+1.1,0,l+1.2),this.add(gf(),o-.7,0,l+.6),this.addBoxCollider(o-.7,l+.6,1,.8),this.lastDonutIt=this.addInteractable({id:"lastdonut",pos:new A(h,1.2,d-.6),prompt:"Take THE LAST DONUT",enabled:!0,radius:2.2}),this.addUpdater(v=>{g.rotation.y+=v})}_stations(){let t=this.scene;this.stations=[];let e=["lightsout","keys","slider"];this.keySlots=[];for(let i=0;i<xr;i++){let s=this.exits[i],r=s.c*Ct,o=-s.r*Ct-Ct/2,a=r-1.15,l=o+un/2+.02,c=new dt,h=e[i],d=null;if(h==="lightsout"){c.add(rt(.7,.9,.18,Wt("fusebox",{color:6976640,metalness:.5,roughness:.5}),0,1,.09));let m=new B(new Bt(.5,.25),new ie({map:Me("\u26A1 FUSES",{w:256,h:128,bg:"#ffcc00",fg:"#111",font:"bold 50px Arial Black, Arial"})}));m.position.set(0,1.7,.19),c.add(m);for(let y=0;y<9;y++){let g=new B(new te(.03,6,4),new ie({color:y%3===1?4521830:16724787}));g.position.set(-.18+y%3*.18,1.2-Math.floor(y/3)*.18,.19),c.add(g)}}else if(h==="keys"){c.add(rt(.66,.9,.1,Wt("lockplate",{color:4936288,metalness:.7,roughness:.35}),0,.85,.05));let m=new B(new Bt(.56,.22),new ie({map:Me("3 KEYS",{w:256,h:100,bg:"#1a1d24",fg:"#ffd23f",font:"bold 54px Arial Black, Arial"})}));m.position.set(0,1.92,.11),c.add(m),Xa.forEach(([,y],g)=>{let p=1.55-g*.26,x=new B(new Ke(.075,.02,8,18),new ot({color:y,emissive:y,emissiveIntensity:.6,metalness:.5,roughness:.4}));x.position.set(0,p,.11),c.add(x),c.add(rt(.025,.07,.01,Tt.black(),0,p-.035,.105));let v=new dt,_=new ot({color:y,emissive:y,emissiveIntensity:1.2,metalness:.6,roughness:.3}),T=new B(new Ke(.05,.016,6,14),_);T.position.z=.16,v.add(T),v.add(rt(.02,.02,.1,_,0,0,.11)),v.position.set(0,p,0),v.visible=!1,c.add(v),this.keySlots.push(v)})}else{let m=rt(1,1.2,.08,Tt.brass(),0,.9,.04);c.add(m);let[y,g]=ae(256,300);g.fillStyle="#222",g.fillRect(0,0,256,300);for(let x=0;x<9;x++)g.fillStyle=`hsl(${x*40},50%,50%)`,g.fillRect(x%3*85+2,Math.floor(x/3)*100+2,81,96);g.fillStyle="#fff",g.font="bold 30px Arial",g.textAlign="center",g.fillText("???",128,160);let p=new B(new Bt(.9,1.1),new ot({map:he(y)}));p.position.set(0,1.5,.09),c.add(p)}c.position.set(a,0,l),t.add(c),this.addBoxCollider(a,l+.25,.8,.5);let u=new Le(h==="keys"?16765503:h==="lightsout"?6750105:16742348,3,5,2);u.position.set(a,2.4,l+.8),t.add(u);let f=this.addInteractable({id:"station"+i,pos:new A(a,1.2,l+.1),prompt:["Fix the fuse box","Unlock the gate","Restore the poster"][i],enabled:!0,radius:2.3});this.stations.push({kind:h,it:f,lamp:d,light:u,band:i,pos:new A(a,0,l+1.2)})}}_decorate(){let t=this.scene,e=this.rng;for(let i=0;i<4;i++){let s=-i*Ct*4-Ct,r=new B(new se(.08,.08,He*Ct+2,8),this.mats.pipe);r.rotation.z=Math.PI/2,r.position.set((He-1)*Ct/2,Ln-.2,s),t.add(r)}for(let i=0;i<18;i++){let s=Math.floor(e()*He),r=Math.floor(e()*this.R),o=new B(new te(.06,8,6),this.mats.bulb);o.position.set(s*Ct,Ln-.45,-r*Ct),t.add(o);let a=rt(.01,.4,.01,Tt.black(),s*Ct,Ln-.42,-r*Ct);t.add(a)}this.donutCells=[],this.propCells=[];for(let i=0;i<xr;i++){let s=this[`dead${i}`],r=i===1?3:0;s.slice(0,2).forEach((o,a)=>{let l=this.cellPos(o.c,o.r);this.addCollectible(`maze_${i}_${a}`,l.x,.9,l.z,(i*2+a)%5),this.donutCells.push(o)}),s.slice(2+r,6+r).forEach((o,a)=>{this.propCells.push(o);let l=this.cellPos(o.c,o.r),c=(i*3+a)%4,h;c===0?h=Oh(i*10+a):c===1?h=df(.9):c===2&&i===1?h=hf():h=Oh(i*7+a+3),h.position.add(new A(l.x,0,l.z)),t.add(h),this.addBoxCollider(l.x,l.z,.9,.9)})}}_planPeeks(){let t=this.scene,e=this.rng;this.peeks=[];let i=new ie({color:0});for(let s=0;s<xr;s++){let r=s*ii+1+Math.floor(e()*3),o=e()<.5,a=o?-Ct/2:(He-1)*Ct+Ct/2,l=-r*Ct,c=a+(o?.03:-.03),h=new B(new Ei(.28,14),i);h.position.set(c,1.75,l),h.rotation.y=o?Math.PI/2:-Math.PI/2,h.scale.set(1.4,.8,1),t.add(h);let d=new B(new te(.1,12,8),new ot({color:16723984,emissive:16722432,emissiveIntensity:6}));d.position.set(c+(o?.02:-.02),1.75,l),d.visible=!1,t.add(d),this.peeks.push({x:o?a+1.7:a-1.7,z:l,eye:d,done:!1,west:o,seg:`${a.toFixed(2)},${l.toFixed(2)}`})}}_keys(){let t=this.scene,e=new Set([...this.donutCells,...this.propCells].map(o=>`${o.c},${o.r}`)),i=this.dist1,s=this.exits[1],r=[...this.dead1.slice(2),...Object.entries(i).map(([o,a])=>{let[l,c]=o.split(",").map(Number);return{c:l,r:c,d:a}}).sort((o,a)=>a.d-o.d)].filter(o=>!e.has(`${o.c},${o.r}`)&&!(o.c===s.c&&o.r===s.r)&&!(o.c===this.entries[1].c&&o.r===this.entries[1].r));this.keys=[];for(let[o,a]of Xa){let l=r.find(y=>!e.has(`${y.c},${y.r}`));e.add(`${l.c},${l.r}`);let c=this.cellPos(l.c,l.r),h=new dt,d=new ot({color:a,emissive:a,emissiveIntensity:1.6,metalness:.6,roughness:.3}),u=new B(new Ke(.09,.028,8,20),d);u.position.y=.16,h.add(u),h.add(rt(.035,.3,.035,d,0,-.16,0)),h.add(rt(.08,.035,.035,d,.04,-.14,0)),h.add(rt(.06,.035,.035,d,.03,-.06,0));let f=new B(new sa(.22,.32,24),new ie({color:a,transparent:!0,opacity:.35,side:ke,depthWrite:!1}));h.add(f),h.position.set(c.x,1.1,c.z),t.add(h);let m=new Le(a,2.2,3.5,2);m.position.set(c.x,1.4,c.z),t.add(m),this.keys.push({name:o,color:a,obj:h,light:m,cell:l,taken:!1,t:Math.random()*6})}this.addUpdater(o=>{for(let a of this.keys)a.taken||(a.t+=o,a.obj.rotation.y+=o*1.8,a.obj.position.y=1.1+Math.sin(a.t*2)*.08)})}takeKey(t){t.taken=!0,t.obj.visible=!1,t.light.intensity=0}_mapCell(t,e){return{c:Math.round(t/Ct),r:Math.round(-e/Ct)}}revealAround(t,e){this.seen||(this.seen=new Set);let{c:i,r:s}=this._mapCell(t,e);this.seen.add(`${i},${s}`),s>=0&&s<this.R&&i>=0&&i<He&&(i<He-1&&!this.east[s][i]&&this.seen.add(`${i+1},${s}`),i>0&&!this.east[s][i-1]&&this.seen.add(`${i-1},${s}`),s<this.R-1&&!this.north[s][i]&&this.seen.add(`${i},${s+1}`),s>0&&!this.north[s-1][i]&&this.seen.add(`${i},${s-1}`))}drawMap(t,e){let r=this.R+2,o=t.canvas.width,a=t.canvas.height;t.clearRect(0,0,o,a),t.fillStyle="rgba(239,228,200,0.92)",t.fillRect(0,0,o,a);let l=g=>8+g*12,c=g=>8+(r-1-g)*12,h=this.finalRoom,d=Math.round((h.x0+Ct/2)/Ct),u=this.seen||new Set;for(let g of u){let[p,x]=g.split(",").map(Number);p<0||p>=He||x<0||x>=r||(t.fillStyle=x>=this.R?"#ffd9ec":"#fffaf0",t.fillRect(l(p),c(x),12,12))}t.strokeStyle="#3b2a1a",t.lineWidth=2,t.lineCap="round";let f=(g,p,x,v)=>{t.beginPath(),t.moveTo(g,p),t.lineTo(x,v),t.stroke()};for(let g of u){let[p,x]=g.split(",").map(Number);if(p<0||p>=He||x<0)continue;let v=l(p),_=c(x);if(x>=this.R){p===d&&f(v,_,v,_+12),p===d+2&&f(v+12,_,v+12,_+12),x===this.R+1&&f(v,_,v+12,_);continue}if(this.north[x][p])if(this.exits.some(S=>S.c===p&&S.r===x)){let S=this.gates[Math.floor(x/ii)]?.open;t.strokeStyle=S?"#2fbf71":"#ff8a00",t.lineWidth=3,f(v,_,v+12,_),t.strokeStyle="#3b2a1a",t.lineWidth=2}else f(v,_,v+12,_);(p===He-1||this.east[x][p])&&f(v+12,_,v+12,_+12),p===0&&f(v,_,v,_+12),x===0&&p!==this.entries[0].c&&f(v,_+12,v+12,_+12)}t.font="10px sans-serif",t.textAlign="center",t.textBaseline="middle",this.stations.forEach((g,p)=>{let x=this.exits[p];u.has(`${x.c},${x.r}`)&&t.fillText(["\u26A1","\u{1F512}","\u{1F5BC}\uFE0F"][p],l(x.c)+12/2,c(x.r)+12/2)});for(let g of this.keys)g.taken||!u.has(`${g.cell.c},${g.cell.r}`)||(t.fillStyle="#"+g.color.toString(16).padStart(6,"0"),t.strokeStyle="#3b2a1a",t.lineWidth=1.5,t.beginPath(),t.arc(l(g.cell.c)+12/2,c(g.cell.r)+12/2,4,0,7),t.fill(),t.stroke());for(let g of this.collectibles){if(g.taken)continue;let{c:p,r:x}=this._mapCell(g.obj.position.x,g.obj.position.z);u.has(`${p},${x}`)&&(t.fillStyle="#ff4f9a",t.beginPath(),t.arc(l(p)+12/2,c(x)+12/2,3,0,7),t.fill())}u.has(`${d+1},${this.R}`)&&t.fillText("\u{1F369}",l(d+1)+12/2,c(this.R+1)+12/2);let m=8+(e.pos.x/Ct+.5)*12,y=8+(r-1+e.pos.z/Ct+.5)*12;t.save(),t.translate(m,y),t.rotate(-e.yaw),t.fillStyle="#e8262b",t.beginPath(),t.moveTo(0,-6),t.lineTo(4,4),t.lineTo(0,2),t.lineTo(-4,4),t.closePath(),t.fill(),t.restore()}spawnFor(t){if(t===0){let i=this.cellPos(this.entries[0].c,0);return{x:i.x,z:i.z+.6,yaw:0}}let e=this.stations[t-1];return{x:e.pos.x+.4,z:e.pos.z+.4,yaw:0}}};var Ya=class{constructor(t){this.game=t,this.modal=null}open(){this.close();let t=this.modal=Se("div","modal");t.style.background="rgba(0,0,0,0.75)",t.innerHTML='<div class="computer"><div class="screen"></div></div>',Z("#modal-root").append(t),this.screen=Z(".screen",t),this.showLogin()}close(){this.modal?.remove(),this.modal=null}showLogin(){this.screen.className="screen",this.screen.innerHTML=`
      <div class="login-box">
        <div class="login-avatar">\u{1F482}</div>
        <div class="login-user">NIGHT_GUARD</div>
        <div class="login-pw"><span class="dots"></span><span class="caret"></span></div>
        <div class="login-btns"><button class="lb login">LOG IN</button><button class="lb hint">HINT?</button></div>
        <div class="login-msg"></div>
      </div>`,this.dots=Z(".dots",this.screen),this.msg=Z(".login-msg",this.screen)}async type(t,{visible:e=!1,speed:i=.11}={}){let s=this.game;for(let r of t){if(s.sched.skipping)break;this.dots.textContent+=e?r:"\u2022",s.audio.play("type"),await s.wait(i+Math.random()*.06)}s.sched.skipping&&(this.dots.textContent=e?t:"\u2022".repeat(t.length))}clear(){this.dots&&(this.dots.textContent="")}setMsg(t,e=!1){if(this.msg.textContent=t,this.msg.classList.toggle("ok",e),!e&&t){this.game.audio.play("error");let i=Z(".login-box",this.screen);i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake")}}async press(t){let e=Z(`.lb.${t}`,this.screen);e&&(e.classList.add("press"),this.game.audio.play("click"),await Pn(160),e.classList.remove("press"))}showHint(){this.screen.className="screen",this.screen.style.background="#000",this.screen.innerHTML='<div class="museos-hint"><span class="glitch">SOLVE THE PUZZLES</span>PUZZLE #1 SLEEPS WHERE GIANTS ONCE WALKED<br><br>&gt; DINOSAUR HALL_</div>',this.game.audio.play("glitch")}showDenied(t){this.screen.className="screen denied",this.screen.style.background="",this.screen.innerHTML=`<div class="denied-text">ACCESS DENIED</div>
      <div class="museos-hint" style="color:#ff8a8a;text-shadow:none">PASSWORD FRAGMENTS: ${t.length} / 6<br><span style="font-size:.7em">${t.join(" \xB7 ")} \xB7 ???</span></div>`,this.game.audio.play("error"),this.game.audio.play("glitch",{delay:.2})}};function $a(n,{title:t="GAME OVER",sub:e="",buttons:i=[]}){return new Promise(s=>{let r=Se("div","",`<div class="go-title">${t}</div><div class="go-sub">${e}</div><div class="row" style="gap:14px;justify-content:center;display:flex;flex-wrap:wrap"></div>`);r.id="gameover-scr";let o=r.querySelector(".row");for(let a of i){let l=Se("button","btn big "+(a.cls||""),a.label);l.onclick=()=>{n.audio.play("select"),r.remove(),s(a.value)},o.append(l)}document.body.append(r)})}var wi=[{id:"intro",name:"Prologue \u2014 Session Expired",blurb:"The security office, 11:52 PM"},{id:"dino",name:"Chapter 1 \u2014 The King",blurb:"Dinosaur Hall"},{id:"egypt",name:"Chapter 2 \u2014 Curse of the Pharaoh",blurb:"The Egyptian Wing"},{id:"roman",name:"Chapter 3 \u2014 All Roads",blurb:"The Roman Empire"},{id:"chase",name:"Chapter 4 \u2014 RUN",blurb:"It is right behind you"},{id:"maze",name:"Chapter 5 \u2014 Behind the Walls",blurb:"The Archives"},{id:"morning",name:"Chapter 6 \u2014 Morning Shift",blurb:"7 hours later\u2026"}],O1={intro:"Headphones on. It's a quiet night... for now.",dino:"Read the plaques \u2014 museums <b>love</b> fun facts.",egypt:"Ancient Egyptians wrote numbers with lines: | = 1, || = 2, ||| = 3, |||| = 4.",roman:"Roman numerals: M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1.",chase:"\u2190 \u2192 switch lanes \xB7 \u2191 jump \xB7 \u2193 slide. Hitting things lets the T-Rex catch up.",maze:"Dead ends hide donuts \u2014 and keys. Your map fills in as you explore (M).",morning:"Good morning! Your shift ended two hours ago."},If=[`There are <b>${16} hidden donuts</b>. They glow pink.`,"Sprinting burns your donut meter about twice as fast.","Stuck on a puzzle? A hint costs a little donut.","The mummy has a <b>serious</b> sweet tooth.","Aaron has been Employee of the Month 11 months in a row."];function Uf(n){return Math.random()<.6?O1[n]:If[Math.floor(Math.random()*If.length)]}var qh={intro:{meter:100,fragments:[]},dino:{meter:100,fragments:[]},egypt:{meter:90,fragments:["REX"]},roman:{meter:85,fragments:["REX","MUMMY"]},chase:{meter:80,fragments:["REX","MUMMY","1974"]},maze:{meter:75,fragments:["REX","MUMMY","1974"]},morning:{meter:0,fragments:["REX","MUMMY","1974","ZAP","DONUT"]}},F1=n=>n.input.isTouch?["Left side: move","Right side: look","USE: interact","\u{1F526}: flashlight","RUN: sprint (eats donuts!)"]:["<kbd>W A S D</kbd> move","<kbd>Mouse</kbd> look","<kbd>E</kbd> use","<kbd>F</kbd> flashlight","<kbd>Shift</kbd> sprint (burns donuts!)"];function Nf(n,t,e){let i={intro:H1,dino:Ff,egypt:Hf,roman:Bf,chase:z1,maze:G1,morning:V1}[t];return i(n,null,e)}var Lf=new hs,kf=new ce;function Of(n,t,e=2){return n.camera.updateMatrixWorld(),kf.multiplyMatrices(n.camera.projectionMatrix,n.camera.matrixWorldInverse),Lf.setFromProjectionMatrix(kf),Lf.intersectsSphere(new Bi(t,e))}function Za(n,t,e=.9){return t.clone().sub(n.camera.position).normalize().dot(n.player.forward())>e}function Df(n,t){return Math.hypot(n.player.pos.x-t.x,n.player.pos.z-t.z)}function Yh(n,t,e){if(t.screenState)return Object.assign(t.screenState,e),t.screenState;t.screenState=e;let i=t.refs.monitor,s=0,r=0;return t.addUpdater(o=>{if(s+=o,r+=o,r<1/15)return;r=0;let a=i.ctx;e.mode==="metube"?Ef(a,s,e.countdown):e.mode==="expired"?Fa(a,s):e.mode==="login"?Sf(a,s,e.pw||"",e.msg||""):e.mode==="hint"?wf(a,s):e.mode==="denied"?Tf(a,s):Fa(a,s,"LOCKED","Solve the puzzles to log in."),i.texture.needsUpdate=!0}),e}function $h(n,t){n.audio.setAmbient("night"),n.hud.show(!0),n.hud.showMeter(!0),n.hud.setFragments(n.save.fragments),n.meter.enabled=!0,n.meter.drain=.5,n.meter.onEmpty=()=>n.failed("YOU FELL ASLEEP","Your donut meter hit zero and you dozed off on the job.<br>Tip: hidden donuts glow pink \u2014 grab them! Sprinting burns donuts faster."),n.player.giveFlashlight(!0),n.camera.fov=n.save.settings.fov,n.camera.updateProjectionMatrix(),t.refs.guard.group.visible=!1;for(let e of t.refs.boxDonuts)e.visible=!1;t.refs.deskFlashlight.visible=!1,Yh(n,t,{mode:"locked"})}async function H1(n){let t=new ni(n,{time:"night"});await n.loadLevel(t),n.hud.setFade(1,0),n.audio.setAmbient("office"),n.audio.stopMusic(.5);let e={mode:"metube",countdown:45};Yh(n,t,e);let i=t.refs.guard,s=Xn({frosting:0,scale:.6});s.position.set(0,-.06,.05),i.attachToHand(s,1),i.setMode("eat");let r=0;return t.addUpdater(o=>{i.anim.mode!=="eat"||!i.group.visible||(r+=o,r>2.86&&(r=0,n.audio.play("munch",{vol:.5})))}),n.player.enabled=!1,n.player.hasFlashlight=!1,n.player.setFlash(!1),n.player.flModel.visible=!1,n.camera.fov=55,n.camera.updateProjectionMatrix(),await n.cutscene(async()=>{n.camSet([-13.6,2.5,3.6],[-18.2,1,-.2]),n.hud.caption(`CITY MUSEUM OF NATURAL HISTORY
11:52 PM`),n.audio.play("tick"),await n.wait(2.8),n.hud.caption("Night shift #47."),await n.wait(2.2),n.hud.caption(""),n.fadeIn(2),n.audio.playMusic("menu"),n.camTo([-15.2,2,2.2],[-18.4,1.1,-.1],7,In.sine),await n.wait(1.5),await n.say("guard01"),n.audio.play("radio"),await n.wait(.4),await n.say("aaron01"),n.audio.play("radio"),await n.say("guard02"),n.audio.stopMusic(1.5),await n.camTo([-17.75,1.42,-.62],[-18.95,1.16,.02],1.6),e.countdown=10;for(let a=10;a>0;a--)e.countdown=a,n.audio.play(a<=5?"beep":"tick",{dur:.06}),await n.wait(.55);e.countdown=0,e.mode="expired",n.audio.play("error"),i.setMode("sit"),await n.say("museos01"),await n.camTo([-16.6,1.75,1.5],[-18.5,1.15,-.1],1.2),await n.say("guard03"),i.setMode("type"),e.mode="login",await n.wait(.5),n.computer.open(),await n.wait(.6),await n.computer.type("donut123"),await n.computer.press("login"),n.computer.setMsg("INCORRECT PASSWORD"),await n.say("guard04"),n.computer.clear(),n.computer.setMsg(""),await n.computer.type("donut123",{speed:.2}),await n.computer.press("login"),n.computer.setMsg("INCORRECT PASSWORD (attempt 2 of \u221E)"),n.shake(.08,.3),await n.say("guard05"),await n.wait(.4),await n.computer.press("hint"),n.computer.showHint(),n.audio.play("sting",{vol:.6}),await n.say("museos02"),await n.say("museos03"),n.computer.close(),e.mode="hint",i.setMode("idle"),i.group.position.set(-17.45,0,.1),i.group.rotation.y=Math.PI/2,n.camSet([-15.7,1.65,.6],[-17.45,1.5,.1]),await n.wait(.4),i.setMode("point"),await n.say("guard06"),i.setMode("idle"),t.refs.deskFlashlight.visible=!1;let o=Yi();o.rotation.x=Math.PI/2,i.attachToHand(o,1),s.visible=!1,n.audio.play("flashlight");for(let a of t.refs.boxDonuts)a.visible=!1;n.audio.play("pickup"),await n.say("guard07"),await n.camTo([-17.45,1.65,.1],[-12,1.55,.1],1.4),i.group.visible=!1}),n.player.setPose(-17.45,.1,-Math.PI/2,-.03),Ff(n,t,"fromIntro")}async function Ff(n,t,e){let i=e==="fromIntro";t||(t=new ni(n,{time:"night"}),await n.loadLevel(t),n.player.setPose(Mt.officeStart.x,Mt.officeStart.z,-Math.PI/2)),n.checkpoint("dino"),$h(n,t),n.setClock(0,!0),n.hud.setFade(0,.8),n.audio.playMusic("explore"),n.setMode("explore"),n.objective("Go to the Dinosaur Hall",Mt.dinoDoor),(i||e==="fresh")&&(n.hud.toast("\u{1F369} This is your <b>DONUT METER</b>. It drains over time. If it hits zero, you fall asleep!","gold"),n.hud.controlsHint(F1(n)),n.wait(9).then(()=>n.hud.controlsHint(null)));let s=t.refs.trex,r=new A(Mt.trex.x+1.4,5.3,Mt.trex.z+4.8);t.addTrigger({minX:-15,maxX:15,minZ:-46,maxZ:-10.6,onEnter:()=>{n.hud.titleCard("CHAPTER 1","THE KING"),n.objective("Find the puzzle in the Dinosaur Hall",Mt.dinoPanel),t.refs.panel1It.enabled=!0}});let o=!1;t.addUpdater(()=>{!o&&n.mode==="explore"&&n.player.pos.z<-11&&Za(n,r,.93)&&Df(n,Mt.trex)<24&&(o=!0,n.audio.play("sting",{vol:.5}),n.say("guard08"))});let a=await new Promise(c=>{t.refs.panel1It.onUse=async()=>{await n.openPuzzle("caesar","REX")&&(t.refs.panel1It.enabled=!1,c(!0))}});t.refs.console1.draw(["SOLVED","KEY: REX"],"#6dff9e","NEXT: EGYPT WING"),await n.say("museos04"),n.say("guard09"),n.objective("Go to the Egyptian Wing",Mt.egyptDoor),await n.until(()=>Df(n,Mt.dinoPanel)>6||n.player.pos.z>-16),await n.until(()=>!Of(n,new A(Mt.trex.x,3,Mt.trex.z),5.5)),s.group.visible=!1,t.refs.footprints.visible=!0,t.cctvState.trexGone=!0,n.audio.play("clatter"),n.audio.play("stomp",{delay:.6,vol:.6}),n.shake(.15,.6),n.player.flicker(1.2),n.audio.stopMusic(.3),await n.wait(.8),n.say("guard10"),n.objective("...Turn around.",Mt.trex);let l=n.sched.time;return await n.until(()=>Za(n,new A(Mt.trex.x,2.5,Mt.trex.z),.86)||n.sched.time-l>9),n.audio.play("sting"),n.audio.play("heartbeat",{delay:.4}),n.audio.playMusic("tension"),n.objective(""),await n.say("guard11"),await n.say("guard12"),n.checkpoint("egypt"),n.say("guard13"),Hf(n,t)}async function Hf(n,t){t||(t=new ni(n,{time:"night"}),await n.loadLevel(t),$h(n,t),t.refs.trex.group.visible=!1,t.refs.footprints.visible=!0,t.cctvState.trexGone=!0,t.refs.console1.draw(["SOLVED","KEY: REX"],"#6dff9e","NEXT: EGYPT WING"),n.player.setPose(Mt.egyptDoor.x-3,Mt.egyptDoor.z,-Math.PI/2),n.setClock(40,!0),n.hud.setFade(0,.8),n.audio.playMusic("tension"),n.setMode("explore")),n.checkpoint("egypt"),n.objective("Follow the footprints to the Egyptian Wing",Mt.egyptDoor);let e=n.save.solved.pillars||(n.save.solved.pillars={}),i=t.refs.pillars,s=()=>i.filter(a=>e[a.n]).length,r=!1,o=()=>{if(r)return;let a=s();a<4?n.objective(`Find and read the 4 pillars (${a}/4)`):n.objective("Open the Pharaoh's Lock",Mt.egyptPanel)};t.addTrigger({x:33.4,z:-16.2,r:4.2,onEnter:()=>{n.mode==="explore"&&n.say("guard42")}}),await new Promise(a=>t.addTrigger({minX:yr.x0,maxX:yr.x1,minZ:yr.z0,maxZ:yr.z1,onEnter:()=>{n.hud.titleCard("CHAPTER 2","CURSE OF THE PHARAOH"),n.audio.playMusic("egypt");for(let l of i)l.it.enabled=!0;t.refs.panelEIt.enabled=!0,o(),n.wait(1.4).then(async()=>{await n.say("guard35"),n.audio.play("radio"),await n.say("museos13")}),a()}}));for(let a of i)a.it.onUse=()=>{let l=!e[a.n];e[a.n]=a.glyph,n.persist(),n.audio.play(l?"chime":"click"),n.hud.toast(`\u{1F4DC} Pillar <b style="letter-spacing:2px">${"|".repeat(a.n)}</b> \u2014 the <b>${gr[a.glyph].toUpperCase()}</b> <span style="opacity:.75">(${s()}/4 in your notes)</span>`,"gold"),l&&s()===4&&n.say("guard36"),o()};await new Promise(a=>{t.refs.panelEIt.onUse=async()=>{await n.openPuzzle("pharaoh","MUMMY")&&(t.refs.panelEIt.enabled=!1,a())}}),r=!0;for(let a of i)a.it.enabled=!1;return t.refs.consoleE.draw(["SOLVED","KEY: MUMMY"],"#e9c46a","NEXT: ROMAN HALL"),n.objective(null),n.audio.play("radio"),await n.say("museos14"),await B1(n,t),n.setMode("explore"),t.addTrigger({x:Mt.romanNorthDoor.x,z:-12.8,r:3.4,onEnter:()=>{n.audio.play("stomp",{vol:.8}),n.audio.play("stomp",{vol:.6,delay:.7}),n.audio.play("growl",{delay:1.1}),n.shake(.2,1.2),n.player.flicker(.8),n.wait(1.4).then(()=>n.say("guard14"))}}),Bf(n,t,"carry")}async function B1(n,t){let e=t.refs.mummy,i=t.refs.sarcLid,s=t.refs.sarcLidBase,r=new A(Mt.sarcophagus.x,0,-17.2),o=new A(Mt.sarcophagus.x,.92,-20.7),a=new A(Mt.sarcophagus.x,.92,-19.3),l=new A(r.x,1.65,r.z),c=new A,h=(f=1.35)=>{c.copy(e.holder.position),c.y+=f-.92+.6,n.camLook.lerp(c,.2),n.camera.lookAt(n.camLook)},d=()=>{e.holder.position.copy(e.home),e.holder.rotation.set(0,0,0),e.pivot.rotation.x=-Math.PI/2,e.person.anim.sit=0,e.person.setMode("liesit"),i.position.copy(s),i.rotation.set(0,0,0)},u=null;n.player.setPose(r.x,r.z,0,0),await n.cutscene(async()=>{n.camSet([l.x,l.y,l.z],[Mt.sarcophagus.x,1,Mt.sarcophagus.z]),n.audio.stopMusic(1.2),n.audio.play("creak"),n.shake(.08,1.2),await n.wait(.7),n.camSet([Mt.sarcophagus.x+2.3,2.1,Mt.sarcophagus.z+3.6],[Mt.sarcophagus.x,1.1,Mt.sarcophagus.z-.2]),n.say("guard37"),n.audio.play("gate"),await n.tween(1.7,v=>{i.position.x=s.x+.95*v,i.rotation.z=-.1*v}),await n.tween(.35,v=>{i.position.y=s.y-.75*v,i.rotation.z=-.1-.45*v},In.in),n.audio.play("thud"),n.shake(.3,.5),await n.wait(.6),n.audio.play("growl",{vol:.35}),n.audio.playMusic("tension"),await n.tween(1.5,v=>{e.pivot.rotation.x=-Math.PI/2*(1-v),e.person.anim.sit=v}),n.player.flicker(.6),await n.say("guard38"),n.camSet([l.x,l.y,l.z],[Mt.sarcophagus.x,1.5,Mt.sarcophagus.z]);let f=e.holder.position.clone();e.person.setMode("jump"),await n.tween(.8,v=>{e.holder.position.lerpVectors(f,o,v),e.holder.position.y+=Math.sin(v*Math.PI)*.9,e.pivot.rotation.x=0,h()},In.linear),n.audio.play("thud",{vol:.6}),n.shake(.15,.3),e.person.setMode("zombie",.7),await n.tween(2.4,v=>{e.holder.position.lerpVectors(o,a,v),h()},In.linear),e.person.setMode("point"),await n.say("mummy01"),e.person.setMode("idle"),await n.say("guard39"),e.person.setMode("sad"),await n.say("mummy02"),e.person.setMode("idle"),await n.say("guard40"),u=Xn({frosting:2,scale:.7}),t.scene.add(u);let m=new A(l.x+.2,1.3,l.z-.5),y=new A;n.audio.play("whoosh",{vol:.4}),n.meter.add(-15),n.hud.toast("\u{1F369} You gave the mummy a donut. <b>\u221215%</b>","pink"),e.person.setMode("point"),await n.tween(.7,v=>{e.person.arms[1].hand.getWorldPosition(y),u.position.lerpVectors(m,y,v),u.position.y+=Math.sin(v*Math.PI)*.4,u.rotation.x+=.2}),e.person.setMode("munch");for(let v=0;v<3;v++)n.audio.play("munch"),await n.tween(.55,_=>{e.person.arms[1].hand.getWorldPosition(u.position),u.scale.setScalar(.7*(1-(v+_)/3.2))});u.visible=!1,e.person.setMode("wave"),await n.say("mummy03"),await n.say("guard41"),e.holder.rotation.y=Math.PI,e.person.setMode("zombie",.7),await n.tween(2.2,v=>{e.holder.position.lerpVectors(a,o,v),h()},In.linear),e.holder.rotation.y=0,e.person.setMode("liesit"),e.person.anim.sit=1;let g=e.holder.position.clone();await n.tween(.8,v=>{e.holder.position.lerpVectors(g,e.home,v),e.holder.position.y+=Math.sin(v*Math.PI)*.9,h()},In.linear),n.audio.play("thud",{vol:.5}),await n.tween(1,v=>{e.pivot.rotation.x=-Math.PI/2*v,e.person.anim.sit=1-v}),n.audio.play("gate");let p=i.position.clone(),x=i.rotation.z;await n.tween(1.3,v=>{i.position.lerpVectors(p,s,v),i.rotation.z=x*(1-v)}),n.audio.play("thud"),n.shake(.2,.4),await n.wait(.4)}),u&&t.scene.remove(u),d(),n.player.setPose(r.x,r.z,Math.atan2(-(Mt.romanNorthDoor.x-r.x),-(Mt.romanNorthDoor.z-r.z)),0)}async function Bf(n,t,e){t||(t=new ni(n,{time:"night"}),await n.loadLevel(t),$h(n,t),t.refs.trex.group.visible=!1,t.refs.footprints.visible=!0,t.cctvState.trexGone=!0,t.refs.console1.draw(["SOLVED","KEY: REX"],"#6dff9e","NEXT: EGYPT WING"),t.refs.consoleE.draw(["SOLVED","KEY: MUMMY"],"#e9c46a","NEXT: ROMAN HALL"),n.player.setPose(Mt.romanNorthDoor.x,-12.5,Math.PI),n.setClock(62,!0),n.hud.setFade(0,.8),n.audio.playMusic("tension"),n.setMode("explore")),n.checkpoint("roman"),n.objective("Get to the Roman Hall. Quickly.",Mt.romanNorthDoor);let i=t.refs.trex;await new Promise(l=>t.addTrigger({minX:12.6,maxX:40,minZ:-9,maxZ:9,onEnter:()=>{n.hud.titleCard("CHAPTER 3","ALL ROADS"),n.audio.playMusic("explore"),n.objective("Crack the Roman lock (it's at the far end)",Mt.romanPanel),t.refs.panel2It.enabled=!0,n.wait(2).then(()=>n.say("guard15")),l()}})),await new Promise(l=>{t.refs.panel2It.onUse=async()=>{await n.openPuzzle("roman","1974")&&(t.refs.panel2It.enabled=!1,l())}}),t.refs.console2.draw(["SOLVED","KEY: 1974"],"#ffcc4d","BEYOND THE WALLS..."),n.audio.stopMusic(2),n.player.speedMul=0,await n.say("museos05"),n.say("guard16"),await n.wait(1.6),n.dialogue.stop(),n.audio.play("growl",{vol:.8}),n.objective("...Something is breathing behind you. Turn around.",Mt.romanDoor);let s=new A(16,4,0);await n.until(()=>!Of(n,s,3.5)),i.group.position.set(16.8,0,.3),i.group.rotation.y=Math.PI/2-.12,i.group.visible=!0,i.setAlive(!0),i.setMode("idle"),i.anim.jaw=.2;let r=new Le(16723992,0,16,1.6);r.position.set(21,3.5,2.5),t.scene.add(r);let o=new A(21.5,5,.2);t.addUpdater(()=>i.lookAt(n.camera.position));let a=n.sched.time;if(await n.until(()=>Za(n,o,.8)||n.sched.time-a>10),!Za(n,o,.8)){let l=n.player.yaw,h=Math.atan2(-(o.x-n.player.pos.x),-(o.z-n.player.pos.z))-l;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;n.player.enabled=!1,await n.tween(.6,d=>{n.player.yaw=l+h*d,n.player.applyCamera(0)})}n.setMode("cutscene"),n.hud.setLetterbox(!0),n.player.flicker(1.5),n.tween(.8,l=>{r.intensity=40*l}),n.audio.play("sting"),await n.wait(.6),i.roar(2.4),n.audio.play("roar"),n.shake(.5,2.2),n.hud.objective(null),await n.wait(.9),n.say("guard17"),await n.wait(1.4),n.hud.bigText("RUN!"),i.setMode("walk",3),t.addUpdater(l=>{i.anim.mode==="walk"&&(i.group.position.x+=3*l)}),n.audio.play("stomp"),await n.wait(1.1),n.hud.setLetterbox(!1),n.startChapter("chase",{mode:"carry"})}async function z1(n,t,e){let i=new Ha(n);await n.loadLevel(i),n.checkpoint("chase"),n.setClock(122,!1),n.hud.show(!0),n.hud.showMeter(!0),n.hud.setFragments(n.save.fragments,{show:!1}),n.meter.enabled=!0,n.meter.drain=.25,n.meter.onEmpty=null,n.player.flModel.visible=!1,n.player.setFlash(!1),n.camera.fov=70,n.camera.updateProjectionMatrix(),n.audio.setAmbient("runner"),n.audio.setReverb(.35),n.audio.playMusic("chase",.2),n.setMode("runner");let s=i.start();i.setCam("front"),i.trexBehind=6,n.hud.setFade(0,.25),i.trex.roar(1.6),n.audio.play("roar"),n.audio.play("alarm",{n:3}),n.shake(.3,1.5),n.hud.titleCard("CHAPTER 4","RUN"),n.say("guard18"),await n.wait(2.8),i.blendCam("chase"),await n.tween(1.1,d=>{i.camBlend=d,i.trexBehind=ze(6,26,Math.min(1,d*2))}),i.camBlend=null,i.hideTrex=!0,i.beginRun(),n.hud.showChase(!0),n.hud.controlsHint(n.input.isTouch?["Swipe \u2190 \u2192 change lanes","Swipe \u2191 jump","Swipe \u2193 slide"]:["<kbd>A</kbd><kbd>D</kbd> / <kbd>\u2190</kbd><kbd>\u2192</kbd> change lanes","<kbd>W</kbd> / <kbd>Space</kbd> jump","<kbd>S</kbd> / <kbd>\u2193</kbd> slide"]),n.wait(6).then(()=>n.hud.controlsHint(null)),n.until(()=>i.st.z<-dn*.45).then(()=>i.st.phase==="run"&&n.say("guard19")),n.until(()=>i.st.arrowShown).then(()=>i.st.phase==="run"&&n.say("guard20"));let r=await n._guard(s);if(n.hud.showChase(!1),n.hud.controlsHint(null),r==="caught")return n.audio.stopMusic(.2),n.hud.flash("rgba(120,0,0,0.9)",1.5),n.hud.setFade(1,.6),await n.wait(.7),n.failed("CHOMP.","The T-Rex got you. (Hit stuff and it catches up. Collect donuts, dodge, and at the end \u2014 GO RIGHT.)");n.setMode("cutscene"),n.hud.setLetterbox(!0),n.meter.enabled=!1,n.audio.stopMusic(.6),i.camMode="free";let o=-dn;n.camSet([-3.4,2.6,o+13],[1.2,2.4,o]);let a=i.trex;a.group.visible=!0,a.group.position.set(.8,0,o+24),a.group.rotation.y=Math.PI,a.setMode("run",14),await n.tween(1.15,d=>{a.group.position.z=ze(o+24,o+5.4,d)},In.linear),a.setMode("idle"),n.audio.play("crash"),n.audio.play("clatter"),n.shake(.9,1.4),n.hud.flash("rgba(255,255,255,0.7)",.4);let l=a.body.rotation.x;await n.tween(.35,d=>{a.body.rotation.x=l-.35*Math.sin(d*Math.PI),a.group.position.z=o+5.4+Math.sin(d*Math.PI)*1.2}),a.group.position.z=o+6.5,await n.wait(.5),i.guard.group.rotation.y=0,i.guard.setMode("idle"),n.camSet([gn[2]-1.6,1.7,o-7.2],[gn[2],1.5,o-1]);let c=new B(new te(.13,12,8),new ot({color:16723984,emissive:16722432,emissiveIntensity:7}));c.position.set(gn[2]+.05,1.95,o+1.4),i.scene.add(c);let h=new Le(16719872,6,5,2);h.position.set(gn[2],1.8,o+1),i.scene.add(h),n.audio.play("growl"),await n.wait(.6),i.guard.setMode("point"),await n.say("guard21"),n.audio.play("roar",{short:!0}),n.shake(.3,.8),i.guard.setMode("shock"),await n.wait(.8),c.visible=!1,h.intensity=0,n.audio.play("stomp",{vol:.6}),n.audio.play("stomp",{vol:.4,delay:.6}),await n.wait(1.2),n.hud.setLetterbox(!1),n.startChapter("maze",{mode:"carry"})}async function G1(n,t,e){let i=new qa(n);await n.loadLevel(i),n.checkpoint("maze");let s=n.save.solved||(n.save.solved={}),r=[0,1,2].filter(p=>s["maze"+p]).length;for(let p=0;p<r;p++)i.openGate(p,!0);let o=i.spawnFor(r);n.player.setPose(o.x,o.z,o.yaw),n.setClock(135+r*15,!0),n.hud.show(!0),n.hud.showMeter(!0),n.hud.setFragments(n.save.fragments),n.meter.enabled=!0,n.meter.drain=.48,n.meter.onEmpty=()=>n.failed("YOU FELL ASLEEP","Right there in the archives. The T-Rex is very disappointed in you.<br>Tip: dead ends often hide donuts."),n.player.giveFlashlight(!0),n.camera.fov=n.save.settings.fov,n.camera.updateProjectionMatrix(),n.audio.setAmbient("maze"),n.audio.setReverb(.25),n.audio.playMusic("maze"),n.hud.setFade(0,.8),n.setMode("explore");let a=()=>Xa.filter(([p])=>s["key_"+p]).length,l=p=>["Find the fuse box to open the first gate",`Find the 3 lost keys (${a()}/3) to open the next gate`,"Find the torn poster to open the last gate","Get to the break room"][p];n.objective(l(r));for(let p of i.keys)(s["key_"+p.name]||r>=2)&&i.takeKey(p);if(r>=2)for(let p of i.keySlots)p.visible=!0;r===0&&(n.hud.titleCard("CHAPTER 5","BEHIND THE WALLS"),i.holeEye.visible=!0,n.audio.play("growl",{vol:.8}),n.wait(2.5).then(()=>{i.holeEye.visible=!1}),n.wait(1.2).then(async()=>{n.audio.play("radio"),await n.say("museos06"),await n.say("guard22")}));let c=document.getElementById("minimap"),h=c.querySelector("canvas").getContext("2d");c.classList.remove("off"),n.hud.toast("\u{1F5FA}\uFE0F Your map fills in as you explore. Press <b>M</b> to hide it.","gold");let d=1;i.addUpdater(p=>{n.input.wasPressed("KeyM")&&c.classList.toggle("off"),i.revealAround(n.player.pos.x,n.player.pos.z),d+=p,d>.1&&!c.classList.contains("off")&&(d=0,i.drawMap(h,n.player))});let u=!1,f=18;i.addUpdater(p=>{if(n.mode==="explore"){for(let x of i.peeks)x.done||Math.hypot(n.player.pos.x-x.x,n.player.pos.z-x.z)<3.2&&(x.done=!0,x.eye.visible=!0,n.audio.play("growl",{vol:.9}),n.shake(.15,.6),u||(u=!0,n.say("guard23")),setTimeout(()=>x.eye.visible=!1,2200));f-=p,f<0&&(f=22+Math.random()*20,n.audio.play("stomp",{vol:.5}),n.audio.play("stomp",{vol:.35,delay:.7}),n.shake(.12,1)),Math.random()<p*.15&&n.audio.play("drip")}});let m=!1;i.addUpdater(()=>{if(n.mode==="explore")for(let p of i.keys){if(p.taken||Math.hypot(n.player.pos.x-p.obj.position.x,n.player.pos.z-p.obj.position.z)>1.1)continue;i.takeKey(p),s["key_"+p.name]=!0,n.persist(),n.audio.play("pickup"),n.audio.play("chime",{delay:.12});let x="#"+p.color.toString(16).padStart(6,"0");n.hud.toast(`\u{1F511} Found the <b style="color:${x}">${p.name.toUpperCase()}</b> key! <b>(${a()}/3)</b>`,"gold"),r===1&&!m&&n.objective(a()<3?l(1):"All 3 keys! Unlock the gate")}});let y=["ZAP",null,"DONUT"];i.stations.forEach((p,x)=>{p.it.onUse=async()=>{if(s["maze"+x]){n.hud.toast("Already open! \u2714","mint");return}if(p.kind==="keys"){let v=a();if(v<3){n.audio.play("error"),n.hud.toast(`\u{1F512} This gate needs 3 keys \u2014 you have <b>${v}/3</b>. They're hidden somewhere in this part of the archives.`,"gold");return}p.it.enabled=!1,i.keySlots.forEach((_,T)=>setTimeout(()=>{_.visible=!0,n.audio.play("click")},150+T*280)),await n.wait(1.1),n.audio.play("unlock")}else if(!await n.openPuzzle(p.kind,y[x]))return;s["maze"+x]=!0,n.persist(),p.light.color.set(6750105),r=Math.max(r,x+1),await i.openGate(x),m||n.objective(l(Math.min(3,x+1))),x===0?(n.audio.play("radio"),await n.say("museos07"),await n.say("museos08")):x===1?await n.say("guard24"):(n.audio.play("radio"),await n.say("museos09"))}});let g=i.finalRoom;i.addTrigger({minX:g.x0,maxX:g.x1,minZ:g.z1,maxZ:g.z0-.3,onEnter:()=>{m=!0,n.objective("Take THE LAST DONUT"),n.audio.playMusic("menu"),n.say("guard25")}}),await new Promise(p=>{i.lastDonutIt.onUse=p}),i.lastDonutIt.enabled=!1,n.meter.onEmpty=null,await n.cutscene(async()=>{n.player.enabled=!1;let p=i.lastDonut,x=p.position.clone();n.audio.play("pickup"),await n.tween(.8,S=>{p.position.lerpVectors(x,new A(n.camera.position.x,n.camera.position.y-.25,n.camera.position.z).lerp(x,.55),S)}),n.audio.play("bonk"),n.audio.play("thud",{delay:.15}),await n.say("guard26"),n.audio.play("radio"),await n.say("museos10"),n.audio.stopMusic(3);let v=n.meter.value;n.audio.play("yawn"),await n.tween(2.6,S=>{n.meter.set(ze(v,0,S)),n.hud.setDrowsy(S*.9)});let _=i.beanbag.position,T=n.player.pos.clone();n.say("guard27"),await n.tween(2.4,S=>{n.player.pos.lerpVectors(T,new A(_.x+.3,0,_.z+.4),S),n.player.eyeOffset=-.95*S,n.player.pitch=ze(0,.35,S),n.player.applyCamera(0)});for(let S of[.7,.2,.85,.4,1])n.hud.setLids(S,.5),await n.wait(.6);n.audio.play("yawn"),n.hud.setFade(1,1.5),await n.wait(1.6)}),n.hud.setDrowsy(0),n.startChapter("morning",{mode:"carry"})}async function V1(n){let t=new ni(n,{time:"day"});await n.loadLevel(t),n.checkpoint("morning"),n.save.fragments=qh.morning.fragments.slice(),n.hud.setFade(1,0),n.hud.show(!0),n.hud.setLids(1,0),n.hud.setFragments(n.save.fragments),n.meter.enabled=!1,n.audio.setAmbient("day"),n.audio.setReverb(.45),n.player.giveFlashlight(!1),n.player.flModel.visible=!1,n.camera.fov=n.save.settings.fov,n.camera.updateProjectionMatrix(),t.refs.guard.group.visible=!1;for(let d of t.refs.boxDonuts)d.visible=!1;t.refs.deskFlashlight.visible=!1;let e={mode:"locked"};Yh(n,t,e);let i=t.refs.trex,s=new dt,r=new ot({color:1778752,roughness:.7}),o=new B(new se(.2,.23,.15,16),r);s.add(o);let a=rt(.3,.02,.2,r,0,-.07,.2);s.add(a);let l=rt(.07,.06,.01,Tt.brass(),0,0,.21);s.add(l),s.position.set(0,.5,.35),s.rotation.z=.2,i.headPivot.children[0].add(s);let c=Xn({frosting:0,scale:.6});c.position.set(.25,-.35,1.2),c.rotation.z=Math.PI/2,i.headPivot.children[0].add(c);let h=t.makeAaron();h.group.position.set(5.5,0,-14),h.group.rotation.y=Math.PI*.8,t.scene.add(h.group),t.addUpdater(d=>h.update(d)),n.player.setPose(.6,-19.6,.05,.55),n.player.eyeOffset=-1.3,n.player.applyCamera(0),n.setClock(0,!1),n.audio.playMusic("morning"),await n.cutscene(async()=>{n.hud.caption("7 HOURS LATER"),n.hud.setFade(.6,0),await n.wait(2.2),n.hud.caption(""),n.hud.setFade(0,1.5);for(let x of[.6,1,.3,.8,0])n.hud.setLids(x,.45),await n.wait(.55);await n.say("guard28");let d=n.player.pitch;await n.tween(1.4,x=>{n.player.eyeOffset=ze(-1.3,0,x),n.player.pitch=ze(d,.25,x),n.player.applyCamera(0)});let u=n.player.yaw,f=Math.atan2(-(Mt.trex.x+1.5-n.player.pos.x),-(Mt.trex.z+4-n.player.pos.z));await n.tween(1.2,x=>{n.player.yaw=ze(u,f,x),n.player.pitch=ze(.25,.32,x),n.player.applyCamera(0)}),await n.say("guard29");let m=h.group.position.clone(),y=new A(3.4,0,-18.7);h.setMode("walk",1.3),h.group.rotation.y=Math.atan2(y.x-m.x,y.z-m.z);let g=n.player.yaw,p=Math.atan2(-(y.x-n.player.pos.x),-(y.z-n.player.pos.z));await n.tween(2.4,x=>{h.group.position.lerpVectors(m,y,x),n.player.yaw=ze(g,p,x),n.player.pitch=ze(.32,.05,x),n.player.applyCamera(0)},In.linear),h.setMode("idle"),h.group.rotation.y=Math.atan2(n.player.pos.x-y.x,n.player.pos.z-y.z),h.anim.talk=3,await n.say("aaron02"),await n.say("guard30"),h.anim.talk=3,h.setMode("shrug"),await n.say("aaron03"),h.setMode("idle")}),n.setMode("explore"),n.objective("Log in to your computer (Security Office)",Mt.computer),t.refs.computerIt.enabled=!0,await new Promise(d=>{t.refs.computerIt.onUse=d}),t.refs.computerIt.enabled=!1,await n.cutscene(async()=>{n.computer.open(),await n.wait(.5),await n.computer.type("REXMUMMY1974ZAPDONUT",{visible:!0,speed:.08}),await n.wait(.4),await n.computer.press("login"),n.computer.showDenied(n.save.fragments),e.mode="denied",n.hud.setFragments(n.save.fragments,{missing:!0}),n.audio.stopMusic(.2),await n.say("museos11"),await n.say("guard31"),await n.say("museos12"),n.computer.close()}),n.setMode("cutscene"),n.audio.play("wahwah"),n.save.flags.ending="pending",n.persist(),await n._guard($a(n,{title:"GAME OVER",sub:'You did not solve the puzzles.<br><span style="color:var(--dim)">(5 of 6 password fragments. So close. So, so close.)</span>',buttons:[{label:"BACK TO MENU",value:"menu",cls:"pink"}]})),n.toMenu()}var Ka=class{constructor(t){this.game=t,this.root=Z("#menu"),this.speaker=null,this.open=!1}_buildSpeaker(){if(this.speaker)return;let t=this.speaker=Se("div","",`
      <div class="tv">
        <div class="tv-screen"><canvas width="256" height="256"></canvas><img alt=""><video playsinline></video></div>
        <div class="tv-label">${Xi.devName} \xB7 LIVE</div>
        <div class="tv-knobs"><i></i><i></i></div>
      </div>`);t.id="speaker",document.body.append(t);let e=Z(".tv-screen",t),i=new $r(e,{canvas:Z("canvas",e),img:Z("img",e),video:Z("video",e),root:t});i.who="dev",i.mood="happy",this.game.dialogue.tv=i;let s=()=>{this.speaker&&!this.game.dialogue.current&&i.showFace(this.game.clips.face("dev",i.mood))};s(),this._offClips=this.game.clips.onChange(s);let r=0;t.addEventListener("click",()=>{this.busy||this.game.dialogue.current||(this.game.audio.play("static",{dur:.15}),this.game.say(r++%2?"dev07":"dev06"))})}_removeSpeaker(){this._offClips?.(),this._offClips=null,this.speaker?.remove(),this.speaker=null,this.game.dialogue.tv=null}show(){let t=this.game,e=t.save;this.open=!0,this._buildSpeaker();let i=e.reached||[],s=e.chapter&&e.chapter!=="intro"?wi.find(a=>a.id===e.chapter):null,[r,o]=Xi.title;this.root.innerHTML=`
      <div class="menu-left">
        <div class="logo">${r.replace(/O/,'<span class="donut-o"></span>')}<span class="l2">${o.replace(/^O/,'<span class="donut-o"></span>')}</span></div>
        <div class="tagline">One night. One password. Way too many donuts.</div>
        <div class="menu-badges">${e.flags.kicked?'<span class="menu-badge">\u{1F3C1} YOU BEAT THE GAME (KIND OF)</span>':""}${e.donuts.length?`<span class="menu-badge ${e.donuts.length>=16?"gold":"dim"}">\u{1F369} ${e.donuts.length}/${16} donuts${e.donuts.length>=16?" \u2014 DONUT HUNTER":""}</span>`:""}</div>
        ${s?`<button class="btn menu-btn pink" data-act="continue">\u25B6 CONTINUE <small>${s.name}</small></button>`:""}
        <button class="btn menu-btn ${s?"":"pink"}" data-act="new">${s?"NEW GAME":"\u25B6 PLAY"} <small>Prologue</small></button>
        <button class="btn menu-btn" data-act="chapters">CHAPTERS <small>${i.length}/${wi.length}</small></button>
        <button class="btn menu-btn" data-act="settings">SETTINGS</button>
        <button class="btn menu-btn ghost" data-act="controls">CONTROLS</button>
        <button class="btn menu-btn ghost" data-act="credits">CREDITS</button>
        <div class="menu-foot">${t.input.isTouch?"Touch controls on \xB7 landscape recommended":"WASD move \xB7 Mouse look \xB7 E use \xB7 F flashlight \xB7 Shift sprint"}</div>
      </div>`,this.root.classList.remove("off");for(let a of pa("[data-act]",this.root))a.addEventListener("mouseenter",()=>t.audio.play("hover")),a.addEventListener("click",()=>this._act(a.dataset.act));t.audio.playMusic(e.flags.ending==="pending"?"meta":"menu"),e.flags.ending==="pending"?this._metaEnding():e.flags.welcomed?e.flags.kicked&&!e.flags.backAgain&&(e.flags.backAgain=!0,t.persist(),setTimeout(()=>this.open&&t.say("dev05"),1200)):(e.flags.welcomed=!0,t.persist(),setTimeout(()=>this.open&&!this.busy&&t.say("dev01"),1200))}hide(){this.open=!1,this.root.classList.add("off"),this._removeSpeaker(),this.game.dialogue.stop()}_act(t){let e=this.game;this.busy||(e.audio.play("select"),t==="new"?e.startChapter("intro"):t==="continue"?e.startChapter(e.save.chapter):t==="chapters"?this.chapters():t==="settings"?this.settings():t==="credits"?this.credits():t==="controls"&&this.controls())}chapters(){let t=this.game,e=Ms(`<h2>CHAPTERS</h2><div class="sub">Replay any part of the night you've reached.</div><div class="chapters"></div>`),i=Z(".chapters",e.panel),s=Math.max(0,...wi.map((r,o)=>t.save.reached.includes(r.id)?o:0));wi.forEach((r,o)=>{let a=o<=s,l=Se("button",`btn chapter-btn ${a?"":"locked"}`,`<span>${r.name}</span><small>${a?r.blurb:"\u{1F512} locked"}</small>`);l.onclick=()=>{e.close(),t.audio.play("select"),t.startChapter(r.id)},i.append(l)})}settings(t){let e=this.game,i=e.save.settings,s=Ms('<h2>SETTINGS</h2><div class="sub">Saved automatically.</div><div class="settings"></div>',t),r=Z(".settings",s.panel),o=(h,d,u,f,m,y=g=>Math.round(g*100)+"%")=>{let g=Se("div","setting",`<span>${d}</span><input type="range" min="${u}" max="${f}" step="${m}" value="${i[h]}"><span class="val">${y(i[h])}</span>`),p=Z("input",g);p.oninput=()=>{i[h]=Number(p.value),Z(".val",g).textContent=y(i[h]),e.applySettings()},r.append(g)},a=(h,d,u)=>{let f=Se("div","setting",`<span>${d}</span><select>${u.map(([y,g])=>`<option value="${y}" ${String(i[h])===String(y)?"selected":""}>${g}</option>`).join("")}</select><span></span>`),m=Z("select",f);m.onchange=()=>{let y=m.value;i[h]=y==="true"?!0:y==="false"?!1:y,e.applySettings(),e.audio.play("click")},r.append(f)};o("master","Master volume",0,1,.05),o("music","Music",0,1,.05),o("sfx","Sound effects",0,1,.05),a("voice","Character voices",[["tts","Robot voices (text-to-speech)"],["babble","Cute beeps"],["off","Off (subtitles only)"]]),a("subtitles","Subtitles",[["medium","On"],["large","Large"],["off","Off"]]),o("sensitivity","Mouse sensitivity",.2,3,.1,h=>h.toFixed(1)+"\xD7"),a("invertY","Invert mouse Y",[[!1,"No"],[!0,"Yes"]]),o("fov","Field of view",60,100,1,h=>h+"\xB0"),o("brightness","Brightness",.7,1.8,.05,h=>Math.round(h*100)+"%"),a("quality","Graphics",[["high","High (glow + shadows)"],["medium","Medium (shadows)"],["low","Fast (for slow computers)"]]),a("shake","Camera shake",[[!0,"On"],[!1,"Reduced"]]),a("marker","Objective compass",[[!0,"On"],[!1,"Off"]]);let l=Se("button","btn small ghost","Reset save data");l.style.marginTop="18px";let c=null;l.onclick=()=>{if(!c){l.textContent="Click again to erase progress, donuts and the ending",l.style.borderColor="var(--red)",c=setTimeout(()=>{c=null,l.textContent="Reset save data",l.style.borderColor=""},4e3);return}clearTimeout(c),e.resetSave(),s.close(),this.show(),e.hud.toast("Save data erased.","gold")},r.append(l)}controls(){let t=(e,i)=>`<div class="setting" style="grid-template-columns:200px 1fr"><span>${e}</span><span style="font-weight:700;color:var(--dim)">${i}</span></div>`;Ms(`<h2>CONTROLS</h2><div class="sub">Keyboard + mouse \xB7 touch controls appear automatically on phones and tablets.</div>
      ${t("<kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>","Walk (touch: left side of the screen)")}
      ${t("<kbd>Mouse</kbd>","Look around \u2014 click the game first (touch: drag on the right side)")}
      ${t("<kbd>E</kbd> or click","Use / inspect the thing in the middle of the screen (touch: USE)")}
      ${t("<kbd>F</kbd>","Flashlight on / off (touch: \u{1F526})")}
      ${t("<kbd>Shift</kbd>","Sprint \u2014 burns your donut meter faster (touch: RUN)")}
      ${t("<kbd>M</kbd>","Show / hide the map (in the archives)")}
      ${t("<kbd>Esc</kbd> / <kbd>P</kbd>","Pause (in cutscenes: skip)")}
      ${t("<kbd>Space</kbd> / <kbd>Enter</kbd>","Skip a line of dialogue")}
      <div class="clip-group">DURING THE CHASE</div>
      ${t("<kbd>A</kbd> <kbd>D</kbd> / <kbd>\u2190</kbd> <kbd>\u2192</kbd>","Change lanes (touch: swipe left / right)")}
      ${t("<kbd>W</kbd> / <kbd>Space</kbd> / <kbd>\u2191</kbd>","Jump over ropes, benches and fallen columns (swipe up)")}
      ${t("<kbd>S</kbd> / <kbd>\u2193</kbd>","Slide under hanging signs (swipe down)")}`)}credits(){Ms(`<h2>CREDITS</h2>
      <div class="sub">LOCKED OUT \u2014 a night guard story</div>
      <p style="font-weight:800;line-height:1.7">
        Story, ideas, starring, directing & yelling: <b style="color:var(--pink)">${Xi.devName}</b> (who was up all night)<br>
        The Security Guard: <b style="color:var(--gold)">you</b><br>
        The T-Rex: <b>a bunch of cylinders</b><br>
        Aaron: <b>Aaron</b><br>
        The Mummy: <b>a guy who really likes donuts</b><br>
        Donuts eaten during development: <b>too many</b><br><br>
        Built with three.js. Every sound and song is synthesized in your browser.
      </p>`)}async _metaEnding(){let t=this.game;this.busy=!0,pa("[data-act]",this.root).forEach(c=>c.disabled=!0);let e=Z("#facecam");e.classList.add("menu-pos"),await Pn(1500),await t.say("guard32");let i=Se("button","btn pink","\u{1F9E9} +1 BONUS PUZZLE?");i.id="bonus-btn",document.body.append(i);let s=Se("div","psst","\u2191 psst\u2026 there's more!");document.body.append(s),t.audio.play("sparkle"),await new Promise(c=>i.onclick=c),i.remove(),s.remove(),t.audio.play("select");let r=Ms(`<h2>BONUS PUZZLE #6</h2><div class="sub">Loading the final puzzle\u2026</div>
      <div style="height:22px;border-radius:12px;background:#111;border:2px solid var(--gold);overflow:hidden"><div class="ld" style="height:100%;width:0;background:linear-gradient(90deg,var(--pink),var(--gold));transition:width .3s"></div></div>
      <div class="ldtxt help" style="margin-top:10px">0%</div><div class="res"></div>`,null,{noClose:!0}),o=Z(".ld",r.panel),a=Z(".ldtxt",r.panel);for(let c=0;c<=99;c+=3+Math.floor(Math.random()*9))o.style.width=c+"%",a.textContent=c+"% \u2014 "+["loading puzzle\u2026","generating fun\u2026","adding donuts\u2026","almost there\u2026","reticulating splines\u2026"][Math.floor(c/22)],t.audio.play("tick"),await Pn(180);o.style.width="99%",a.textContent="99% \u2014 ...",await Pn(1600),t.audio.play("error"),Z(".res",r.panel).innerHTML=`<div class="hintbox" style="border-color:var(--red);color:#ffb0b0;font-size:18px;text-align:center">
      <div style="font:30px var(--title);color:var(--red)">ERROR 404: PUZZLE NOT FOUND</div><br>
      There is no puzzle #6.<br>That's it. That was the whole game.<br>Thanks for playing! \u{1F369}</div>
      <div style="text-align:center;margin-top:16px"><button class="btn ok">\u2026what?</button></div>`,await new Promise(c=>Z(".ok",r.panel).onclick=c),r.close(),await t.say("guard33"),await Pn(300),await t.say("dev02"),await Pn(200),await t.say("guard34"),t.audio.stopMusic(.05),t.audio.play("scratch"),await Pn(700),this.speaker.classList.add("angry"),t.dialogue.tv.mood="angry",t.dialogue.tv.showFace(t.clips.face("dev","angry")),await t.say("dev03"),t.audio.playMusic("angry",.1),t.shake(.2,2),pa(".menu-left > *",this.root).forEach((c,h)=>{c.style.setProperty("--rot",Math.random()*80-40+"deg"),setTimeout(()=>{c.classList.add("fall"),t.audio.play("thud",{vol:.4})},h*120)}),this.speaker.classList.add("huge"),await t.say("dev04");let l=Se("div","boot-kick","\u{1F97E}");document.body.append(l),l.offsetWidth,l.classList.add("go"),await Pn(380),t.audio.play("kick"),t.hud.flash("rgba(255,255,255,0.9)",.4);for(let c of[this.root,this.speaker,Z("#game"),e,Z("#dialogue")])c?.classList.add("kicked-away");await Pn(900),l.remove(),t.audio.stopMusic(.05),t.audio.play("crt"),document.body.classList.add("crt-off"),await Pn(800),t.save.flags.ending="done",t.save.flags.kicked=!0,t.persist(),this.kickedScreen()}kickedScreen(){let t=Z("#kicked");document.body.classList.remove("crt-off");let e=[["C:\\MUSEUM\\LOCKED_OUT.EXE",""],["> Process terminated by: "+Xi.devName+" (angry)",""],['> Reason: player said "i could do better"',""],["> Exit code: HELL_NAW","err"],["",""],["The developer has kicked you out of the game.","err"]];t.innerHTML=e.map(([i,s],r)=>`<div class="line ${s}" style="animation-delay:${.6+r*.7}s">${i||"&nbsp;"}</div>`).join("")+'<button class="btn ghost">[ reopen game ]</button>',t.classList.remove("off"),Z("button",t).onclick=()=>location.reload()}};function Ms(n,t,{noClose:e=!1}={}){let i=Se("div","modal"),s=Se("div","panel",(e?"":'<button class="close">\u2715</button>')+n);i.append(s),Z("#modal-root").append(i);let r=()=>{i.remove(),removeEventListener("keydown",o,!0),t?.()},o=a=>{a.code!=="Escape"||e||Z("#modal-root").lastElementChild!==i||(a.stopImmediatePropagation(),r())};return addEventListener("keydown",o,!0),e||(Z(".close",s).onclick=r,i.addEventListener("mousedown",a=>{a.target===i&&r()})),{el:i,panel:s,close:r}}var zf=10;function Vf(n,t,{fragment:e="",onSolvedLine:i=null}={}){let s=W1[t];return new Promise(r=>{let o=Z("#modal-root"),a=Se("div","modal"),l=Se("div","panel puzzle");l.innerHTML=`
      <button class="close" title="Close (Esc)">\u2715</button>
      <h2>${s.title}</h2>
      <div class="sub">${s.sub}</div>
      <div class="pz-body"></div>
      <div class="pz-hint"></div>
      <div class="panel-foot">
        <button class="btn small pz-hintbtn">\u{1F4A1} Hint <small style="opacity:.7">(\u2212${zf}% \u{1F369})</small></button>
        <span class="help">${n.input.isTouch?"Tap to interact":s.keys||"Esc to close"}</span>
      </div>`,a.append(l),o.append(a);let c=Z(".pz-body",l);c.classList.add("pz-"+t);let h=Z(".pz-hint",l),d=0,u=!1,f=()=>{removeEventListener("keydown",g,!0),p.dispose?.(),a.remove()},m=()=>{u||(u=!0,n.audio.play("back"),f(),r(!1))},y=()=>{u||(u=!0,p.dispose?.(),n.audio.play("chime"),n.audio.play("unlock",{delay:.1}),Z(".pz-hintbtn",l).remove(),h.innerHTML="",c.innerHTML=`
        <div class="solved-banner">
          <div class="big">PUZZLE SOLVED!</div>
          <div class="help" style="margin-top:8px">Password fragment unlocked:</div>
          <div class="frag-reveal">${Sh(e)}</div>
          <div style="font-weight:900;font-size:20px;color:var(--pink)">+1 DONUT \u{1F369}</div>
          <div style="margin-top:18px"><button class="btn big mint pz-continue">CONTINUE</button></div>
        </div>`,Z(".pz-continue",c).onclick=()=>{n.audio.play("select"),f(),r(!0)},Z(".pz-continue",c).focus())},g=x=>{if(x.code==="Escape"){x.stopPropagation(),m();return}if(u){(x.code==="Enter"||x.code==="Space")&&(x.preventDefault(),Z(".pz-continue",c)?.click());return}p.onKey?.(x)};addEventListener("keydown",g,!0),Z(".close",l).onclick=m,a.addEventListener("mousedown",x=>{x.target===a&&m()}),Z(".pz-hintbtn",l).onclick=()=>{let x=p.hints();if(d>=x.length){n.audio.play("error");return}n.meter.add(-zf),n.audio.play("select"),h.innerHTML=x.slice(0,++d).map(v=>`<div class="hintbox">\u{1F4A1} ${v}</div>`).join(""),p.onHint?.(d)};let p=s.build({game:n,body:c,solve:y,panel:l})})}var _r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",Gf=(n,t)=>_r.includes(n)?_r[(_r.indexOf(n)+t+26*10)%26]:n,W1={caesar:{title:"DINO-LOCK 3000",sub:"An encrypted message is glowing on the screen. Turn the bone wheel to decode it.",keys:"\u2190 \u2192 turn the wheel \xB7 Esc close",build({game:n,body:t,solve:e}){let r=[..."NEXT PUZZLE: EGYPT WING. KEY IS REX"].map(y=>Gf(y,4)).join(""),o=0,a=null;t.innerHTML=`
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
        <div class="help" style="text-align:center">Outer ring = encrypted letter \xB7 inner ring = real letter</div>`;let l=Z(".ring.outer",t),c=Z(".ring.inner",t),h=Z(".hub b",t),d=Z(".cipher-text",t),u=(t.querySelector(".wheel").offsetWidth||250)/2;for(let y=0;y<26;y++){let g=y/26*360,p=Se("div","lt",_r[y]);p.style.transform=`rotate(${g}deg) translateY(-${u*.83}px)`,p.style.marginTop="-12px",l.append(p);let x=Se("div","lt",_r[y]);x.style.transform=`rotate(${g}deg) translateY(-${u*.54}px)`,x.style.marginTop="-12px",c.append(x)}let f=()=>{c.style.transform=`rotate(${o*(360/26)}deg)`,h.textContent=o,d.innerHTML=[...r].map(y=>y===" "?'<div class="sp"></div>':`<div class="ch">${y}<small>${_r.includes(y)?Gf(y,-o):y}</small></div>`).join(""),d.classList.toggle("solved",o===4),o===4&&a==null?(n.audio.play("sparkle"),a=setTimeout(e,1100)):o!==4&&a!=null&&(clearTimeout(a),a=null)},m=y=>{o=(o+y+26)%26,n.audio.play("tick"),n.audio.play("click",{vol:.6}),f()};return Z(".rl",t).onclick=()=>m(-1),Z(".rr",t).onclick=()=>m(1),t.querySelector(".wheel").addEventListener("wheel",y=>{y.preventDefault(),m(y.deltaY>0?1:-1)},{passive:!1}),f(),{onKey(y){(y.code==="ArrowLeft"||y.code==="KeyA")&&m(-1),(y.code==="ArrowRight"||y.code==="KeyD")&&m(1)},hints:()=>["The plaque next to the T-Rex has a fun fact about its hands.","T. rex had TWO fingers on each hand. Two hands... 2 + 2 = ?","Turn the wheel until the hub says 4."],dispose(){clearTimeout(a)}}}},pharaoh:{title:"PHARAOH'S LOCK",sub:"Four symbols, in the right order. The four pillars in this hall know the answer \u2014 count the lines on top of each one.",keys:"Click the symbols (or keys 1\u20138) \xB7 Backspace undo \xB7 Esc close",build({game:n,body:t,solve:e,panel:i}){let s=n.save.solved.pillars||{},r=[],o=!1,a=(u,f=56,m="#1d3f8f")=>{let y=document.createElement("canvas");return y.width=y.height=f*2,ti(y.getContext("2d"),u,f,f,f*1.7,m),y},l=u=>'<span class="strokes">'+"<i></i>".repeat(u)+"</span>";t.innerHTML=`
        <div class="cartouche">${[1,2,3,4].map(u=>`<div class="cslot"><div class="cg"></div>${l(u)}</div>`).join("")}</div>
        <div class="glyph-grid">${Ki.map((u,f)=>`<button class="glyph" data-k="${u}"><span class="gi"></span><small>${f+1} \xB7 ${gr[u]}</small></button>`).join("")}</div>
        <div class="pillar-notes"><b>Your notes:</b> ${[1,2,3,4].map(u=>`<span class="pn">${l(u)} <span class="pg" data-n="${u}">?</span></span>`).join("")}</div>`;let c=[...t.querySelectorAll(".cslot")];t.querySelectorAll(".glyph").forEach(u=>{u.querySelector(".gi").append(a(u.dataset.k,30)),u.onclick=()=>d(u.dataset.k)}),t.querySelectorAll(".pg").forEach(u=>{let f=s[u.dataset.n];f&&(u.textContent="",u.append(a(f,14,"#e9c46a")),u.title=gr[f])}),c.forEach((u,f)=>u.onclick=()=>{f<r.length&&!o&&(r.splice(f),h(),n.audio.play("back"))});let h=()=>c.forEach((u,f)=>{let m=Z(".cg",u);m.innerHTML="",r[f]&&m.append(a(r[f],30,"#ffd98a")),u.classList.toggle("filled",!!r[f])}),d=u=>{o||r.length>=4||(r.push(u),n.audio.play("click"),n.audio.play("tick",{delay:.05}),h(),r.length===4&&(r.every((f,m)=>f===Mf[m])?(o=!0,i.querySelector(".cartouche").classList.add("ok"),n.audio.play("sparkle"),setTimeout(e,800)):(n.audio.play("error"),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake"),setTimeout(()=>{o||(r.length=0,h())},650))))};return{onKey(u){let f=/^(?:Digit|Numpad)([1-8])$/.exec(u.code);f&&d(Ki[Number(f[1])-1]),u.code==="Backspace"&&r.length&&!o&&(u.preventDefault(),r.pop(),h(),n.audio.play("back"))},hints:()=>["Find the four pillars in this hall. Walk up to each one and press USE (E) to read it \u2014 it goes in your notes.","The lines on top of a pillar tell you its place in the code: | is first, || is second, ||| third, |||| last.","The code is: BIRD, EYE, SNAKE, ANKH."]}}},roman:{title:"AQVILA LOCK",sub:'"ENTER THE YEAR THIS MVSEVM WAS FOVNDED, CITIZEN." \u2014 in normal numbers. Each dial gets one piece of the Roman numeral.',keys:"Click \u25B2\u25BC or type digits \xB7 Esc close",build({game:n,body:t,solve:e,panel:i}){let s=[1,9,7,4],r=["M","CM","LXX","IV"],o=["thousands","hundreds","tens","ones"],a=[0,0,0,0],l=0,c=!1;t.innerHTML=`<div class="aquila">\u{1F985} S \xB7 P \xB7 Q \xB7 R \u{1F985}</div>
        <div class="roman-year">FOUNDED IN <b>MCMLXXIV</b></div>
        <div class="dials"></div>
        <div class="numeral-key">${[["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1e3]].map(([y,g])=>`<span><b>${y}</b> = ${g}</span>`).join("")}</div>
        <div class="help" style="text-align:center">Add the letters up. A small letter <b>before</b> a bigger one is taken away: <b>IV</b> = 5 \u2212 1 = 4.<br>A dial turns <b style="color:var(--mint)">green</b> when it's right!</div>`;let h=Z(".dials",t),d=[],u=[];for(let y=0;y<4;y++){let g=Se("div","dial",`<div class="chunk">${r[y]}</div><button class="up">\u25B2</button><div class="num">0</div><button class="dn">\u25BC</button><div class="place">${o[y]}</div>`);h.append(g),u.push(g);let p=Z(".num",g);d.push(p),Z(".up",g).onclick=()=>m(y,a[y]+1),Z(".dn",g).onclick=()=>m(y,a[y]-1),p.addEventListener("wheel",x=>{x.preventDefault(),m(y,a[y]+(x.deltaY>0?-1:1))},{passive:!1})}let f=()=>{!c&&a.every((y,g)=>y===s[g])&&(c=!0,n.audio.play("sparkle"),setTimeout(e,700))},m=(y,g)=>{a[y]=(g+10)%10,d[y].textContent=a[y],d[y].classList.remove("pop"),d[y].offsetWidth,d[y].classList.add("pop");let p=a[y]===s[y];p&&!u[y].classList.contains("ok")&&n.audio.play("chime",{vol:.35}),u[y].classList.toggle("ok",p),n.audio.play("tick"),f()};return{onKey(y){(/^Digit\d$/.test(y.code)||/^Numpad\d$/.test(y.code))&&(m(l%4,Number(y.code.slice(-1))),l++,l%4===0&&!a.every((g,p)=>g===s[p])&&(n.audio.play("error"),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake")))},hints:()=>["M is 1000 \u2014 one thousand \u2014 so the first dial is 1.","CM is 1000 take away 100 = 900, so the second dial is 9. LXX is 50 + 10 + 10 = 70, so the third dial is 7.","IV is 5 take away 1 = 4. The year is 1 9 7 4."]}}},lightsout:{title:"FUSE BOX",sub:"Switch ALL nine fuses ON to power the gate. Each switch also flips its neighbors (up, down, left, right).",keys:"Click the switches (or keys 1\u20139) \xB7 Esc close",build({game:n,body:t,solve:e}){let s=new Array(9).fill(!0),r=(d,u)=>{let f=Math.floor(u/3),m=u%3,y=d.slice();for(let[g,p]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){let x=f+g,v=m+p;x>=0&&x<3&&v>=0&&v<3&&(y[x*3+v]=!y[x*3+v])}return y};for(let d of[0,4,8,5])s=r(s,d);t.innerHTML='<div class="lights"></div><div class="help" style="text-align:center">Make every switch say <b>ON</b> (green, with a lit bulb).</div>';let o=Z(".lights",t),a=[],l=!1;for(let d=0;d<9;d++){let u=Se("button","light");u.onclick=()=>{l||(s=r(s,d),n.audio.play("buzz"),n.audio.play("click"),c(),s.every(Boolean)&&(l=!0,setTimeout(e,600),n.audio.play("sparkle")))},o.append(u),a.push(u)}let c=()=>a.forEach((d,u)=>{d.classList.toggle("on",s[u]),d.classList.remove("hint")});c();let h=()=>{let d=null;for(let u=0;u<512;u++){let f=s.slice(),m=0;for(let y=0;y<9;y++)u&1<<y&&(f=r(f,y),m++);f.every(Boolean)&&(d==null||m<d.n)&&(d={m:u,n:m})}return d?[...Array(9).keys()].filter(u=>d.m&1<<u):[]};return{onKey(d){let u=/^(?:Digit|Numpad)([1-9])$/.exec(d.code);u&&a[Number(u[1])-1].click()},hints:()=>["Try pressing the switches in the CORNERS and the CENTER first.","The glowing dashed switch is part of the solution. Press it!","Keep asking \u2014 each hint shows another correct switch."],onHint(){let d=h();c(),d.length&&a[d[0]].classList.add("hint")}}}},slider:{title:"TORN POSTER",sub:"Someone cut up the museum's most famous poster. Slide the pieces back into place.",keys:"Click a tile next to the gap (or arrow keys) \xB7 Esc close",build({game:n,body:t,solve:e}){let i=q1(),s=[1,2,3,4,5,6,7,8,0],r=m=>[m-3,m+3,m%3?m-1:-1,m%3<2?m+1:-1].filter(y=>y>=0&&y<9),o=-1;for(let m=0;m<34;m++){let y=s.indexOf(0),g=r(y).filter(x=>x!==o),p=g[Math.floor(Math.random()*g.length)];[s[y],s[p]]=[s[p],s[y]],o=y}if(s.join()==="1,2,3,4,5,6,7,8,0"){let m=s.indexOf(0),y=r(m)[0];[s[m],s[y]]=[s[y],s[m]]}t.innerHTML='<div class="slider"></div><div class="help" style="text-align:center">Tiny numbers show where each piece belongs.</div>';let a=Z(".slider",t),l=!1,c=[];for(let m=0;m<9;m++){let y=Se("div","tile");y.onclick=()=>d(m),a.append(y),c.push(y)}let h=()=>{c.forEach((m,y)=>{let g=s[y];if(m.classList.toggle("empty",g===0),m.classList.remove("hint"),g){let p=g-1;m.style.backgroundImage=`url(${i})`,m.style.backgroundPosition=`${p%3*50}% ${Math.floor(p/3)*50}%`,m.innerHTML=`<span class="n">${g}</span>`}else m.style.backgroundImage="",m.innerHTML=""})},d=m=>{if(l)return;let y=s.indexOf(0);if(!r(y).includes(m)){n.audio.play("tick");return}[s[y],s[m]]=[s[m],s[y]],n.audio.play("click"),n.audio.play("thud",{vol:.25}),h(),s.join()==="1,2,3,4,5,6,7,8,0"&&(l=!0,h(),n.audio.play("sparkle"),setTimeout(e,700))};h();let u=null,f=()=>{u||(u=X1());let m=s.join(""),y=u.get(m);if(y==null)return-1;let g=s.indexOf(0);return y.split("").indexOf("0")!==g?y.split("").indexOf("0"):-1};return{onKey(m){let y=s.indexOf(0),g={ArrowUp:y+3,ArrowDown:y-3,ArrowLeft:y%3<2?y+1:-1,ArrowRight:y%3?y-1:-1};g[m.code]!=null&&g[m.code]>=0&&g[m.code]<9&&(m.preventDefault(),d(g[m.code]))},hints:()=>["Solve the TOP row first (1, 2, 3), then don't touch it.","The glowing tile is the best next move. Ask again for more!","Still glowing \u2014 keep following the hints and it will solve itself."],onHint(){let m=f();h(),m>=0&&c[m].classList.add("hint")}}}}};function X1(){let n="123456780",t=new Map([[n,null]]),e=[n],i=s=>[s-3,s+3,s%3?s-1:-1,s%3<2?s+1:-1].filter(r=>r>=0&&r<9);for(let s=0;s<e.length;s++){let r=e[s],o=r.indexOf("0");for(let a of i(o)){let l=r.split("");[l[o],l[a]]=[l[a],l[o]];let c=l.join("");t.has(c)||(t.set(c,r),e.push(c))}}return t}var Ja=null;function q1(){if(Ja)return Ja;let n=document.createElement("canvas");n.width=n.height=360;let t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,360);e.addColorStop(0,"#ff9a5a"),e.addColorStop(1,"#7a1f4d"),t.fillStyle=e,t.fillRect(0,0,360,360),t.fillStyle="rgba(255,255,255,0.15)";for(let s=0;s<12;s++)t.beginPath(),t.moveTo(180,200),t.arc(180,200,300,s*.52,s*.52+.26),t.fill();t.fillStyle="#d49a5c",t.beginPath(),t.arc(180,220,90,0,7),t.fill(),t.fillStyle="#ff7eb6",t.beginPath(),t.arc(180,214,82,0,7),t.fill(),t.fillStyle="#7a1f4d",t.beginPath(),t.arc(180,216,30,0,7),t.fill();let i=["#3bc9ff","#ffe14d","#7dff6b","#fff","#b86bff"];for(let s=0;s<40;s++){let r=Math.random()*7,o=40+Math.random()*36;t.save(),t.translate(180+Math.cos(r)*o,214+Math.sin(r)*o),t.rotate(Math.random()*3),t.fillStyle=i[s%5],t.fillRect(-6,-2,12,4),t.restore()}t.fillStyle="#2b1d14",t.beginPath(),t.moveTo(260,120),t.lineTo(350,90),t.lineTo(360,150),t.lineTo(300,175),t.lineTo(250,160),t.fill(),t.fillStyle="#fff";for(let s=0;s<5;s++)t.beginPath(),t.moveTo(262+s*16,160-s*3),t.lineTo(268+s*16,175-s*3),t.lineTo(274+s*16,158-s*3),t.fill();return t.fillStyle="#ff3b3b",t.beginPath(),t.arc(320,110,7,0,7),t.fill(),t.fillStyle="#fff",t.font="bold 50px Arial Black, Arial",t.textAlign="center",t.strokeStyle="#2b1d14",t.lineWidth=8,t.strokeText("DONUT DAY",180,64),t.fillText("DONUT DAY",180,64),t.font="bold 30px Arial Black, Arial",t.strokeText("MUSEUM GIFT SHOP",180,344),t.fillText("MUSEUM GIFT SHOP",180,344),Ja=n.toDataURL(),Ja}var ja=class{constructor(t){this.game=t,this.camera=t.camera,this.pos=new A,this.vel=new A,this.yaw=0,this.pitch=0,this.height=1.65,this.radius=.32,this.enabled=!1,this.lookEnabled=!0,this.bobT=0,this.stepAcc=0,this.sprinting=!1,this.speedMul=1,this.eyeOffset=0;let e=this.spot=new ar(16773590,0,36,.48,.6,1.2);e.position.set(.18,-.15,.1),e.target.position.set(.05,-.2,-6),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.bias=-4e-4,e.shadow.normalBias=.02,e.shadow.camera.near=.3,e.shadow.camera.far=34,this.camera.add(e,e.target),this.fill=new Le(16770752,0,7,2),this.fill.position.set(0,0,-3),this.camera.add(this.fill),this.flModel=Yi(),this.flModel.scale.setScalar(.7),this.flModel.position.set(.24,-.22,-.45),this.camera.add(this.flModel),this.flModel.visible=!1,this._makeDust(),this.flashOn=!1,this.hasFlashlight=!1,this.flickerT=0,this.baseIntensity=32,this.swayX=0,this.swayY=0}_makeDust(){let e=new Float32Array(420);this.dustSeed=new Float32Array(140*3);for(let l=0;l<140;l++)this.dustSeed[l*3]=Math.random(),this.dustSeed[l*3+1]=Math.random(),this.dustSeed[l*3+2]=Math.random();let i=new Ce;i.setAttribute("position",new Be(e,3));let s=document.createElement("canvas");s.width=s.height=32;let r=s.getContext("2d"),o=r.createRadialGradient(16,16,0,16,16,16);o.addColorStop(0,"rgba(255,240,210,1)"),o.addColorStop(1,"rgba(255,240,210,0)"),r.fillStyle=o,r.fillRect(0,0,32,32);let a=new Fr({size:.014,map:new Bn(s),transparent:!0,opacity:.32,depthWrite:!1,blending:_n,sizeAttenuation:!0});this.dust=new Jo(i,a),this.dust.frustumCulled=!1,this.dust.visible=!1,this.camera.add(this.dust),this.dustT=0}updateDust(t){let e=this.flashOn&&this.flModel.visible&&["explore","cutscene","puzzle"].includes(this.game.mode);if(this.dust.visible=e,!e)return;this.dustT+=t;let i=this.dust.geometry.attributes.position,s=this.dustSeed,r=this.dustT;for(let o=0;o<i.count;o++){let a=s[o*3],l=s[o*3+1],h=-.6-(s[o*3+2]*7+r*.12*(.5+a))%7,d=Math.tan(.4)*-h*Math.sqrt(l),u=a*Math.PI*2+r*.15*(l-.5);i.setXYZ(o,.1+Math.cos(u)*d+Math.sin(r*.7+o)*.03,-.15+Math.sin(u)*d*.9+Math.cos(r*.5+o*1.3)*.03,h)}i.needsUpdate=!0}setPose(t,e,i,s=0){this.pos.set(t,0,e),this.vel.set(0,0,0),this.yaw=i,this.pitch=s,this.applyCamera(0)}faceToward(t,e){this.yaw=Math.atan2(-(t-this.pos.x),-(e-this.pos.z))}giveFlashlight(t=!0){this.hasFlashlight=!0,this.flModel.visible=!0,this.setFlash(t)}setFlash(t){this.hasFlashlight||(t=!1),this.flashOn=t,this.spot.intensity=t?this.baseIntensity:0,this.fill.intensity=t?.5:0,this.flModel.userData.lens.material.color.set(t?16774876:3355443)}flicker(t=1.2){this.flickerT=t}forward(){return new A(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}update(t,e){let i=this.game,s=i.input,r=i.save.settings;if(this.enabled&&this.lookEnabled){let l=.0022*(r.sensitivity||1);this.yaw-=s.mdx*l,this.pitch-=s.mdy*l*(r.invertY?-1:1),this.pitch=Je(this.pitch,-1.45,1.45),this.swayX=on(this.swayX,Je(s.mdx*.002,-.05,.05),10,t),this.swayY=on(this.swayY,Je(s.mdy*.002,-.05,.05),10,t)}let o=0;if(this.enabled){let l=s.moveAxis();this.sprinting=s.isDown("ShiftLeft","ShiftRight")&&l.z>.1&&i.meter.value>0;let c=(this.sprinting?5.6:3.3)*this.speedMul,h=Math.sin(this.yaw),d=Math.cos(this.yaw),u=(-h*l.z+d*l.x)*c,f=(-d*l.z-h*l.x)*c,m=1-Math.exp(-10*t);if(this.vel.x+=(u-this.vel.x)*m,this.vel.z+=(f-this.vel.z)*m,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,e)for(let y=0;y<2;y++)Y1(this.pos,this.radius,e);o=Math.hypot(this.vel.x,this.vel.z),s.wasPressed("KeyF")&&this.hasFlashlight&&(this.setFlash(!this.flashOn),i.audio.play("flashlight"))}else this.vel.set(0,0,0);this.bobT+=t*o*2.1,this.stepAcc+=o*t;let a=this.sprinting?2.1:1.65;if(this.stepAcc>a){this.stepAcc=0;let l=i.level,c=l?.surfaceAt?l.surfaceAt(this.pos.x,this.pos.z):l?.surface||"marble";i.audio.play("step",{surface:c,vol:this.sprinting?1.2:.9})}this.flickerT>0&&(this.flickerT-=t,this.flashOn&&(this.spot.intensity=Math.random()<.45?dr(0,8):this.baseIntensity),this.flickerT<=0&&this.flashOn&&(this.spot.intensity=this.baseIntensity)),this.applyCamera(t,o)}applyCamera(t,e=0){let i=this.camera,s=Math.min(1,e/3.3),r=Math.sin(this.bobT*2)*.045*s,o=Math.cos(this.bobT)*.03*s;i.position.set(this.pos.x+o,this.height+this.eyeOffset+r,this.pos.z),i.rotation.set(this.pitch,this.yaw,0,"YXZ"),this.flModel.position.set(.27-this.swayX+o*.4,-.25+this.swayY+r*.6,-.5),this.flModel.rotation.set(.05+this.swayY,.08-this.swayX*2,0)}};function Y1(n,t,e){for(let i of e){if(!i.enabled)continue;let s=Math.max(i.minX,Math.min(n.x,i.maxX)),r=Math.max(i.minZ,Math.min(n.z,i.maxZ)),o=n.x-s,a=n.z-r,l=o*o+a*a;if(!(l>=t*t))if(l>1e-9){let c=Math.sqrt(l);n.x+=o/c*(t-c),n.z+=a/c*(t-c)}else{let c=n.x-i.minX,h=i.maxX-n.x,d=n.z-i.minZ,u=i.maxZ-n.z,f=Math.min(c,h,d,u);f===c?n.x=i.minX-t:f===h?n.x=i.maxX+t:f===d?n.z=i.minZ-t:n.z=i.maxZ+t}}}var Wf="locked-out.save.v1";function Xf(){return{chapter:null,reached:[],solved:{},donuts:[],fragments:[],flags:{},settings:{master:.8,music:.6,sfx:.9,voice:"tts",subtitles:"medium",sensitivity:1,invertY:!1,fov:75,quality:"high",marker:!0,shake:!0,brightness:1.15}}}function $1(){let n=Xf();try{matchMedia("(prefers-reduced-motion: reduce)").matches&&(n.settings.shake=!1)}catch{}try{let t=JSON.parse(localStorage.getItem(Wf)||"null");if(t){let e={...n,...t,settings:{...n.settings,...t.settings||{}},flags:{...t.flags||{}}};return e.fragments=(e.fragments||[]).filter(i=>gs.includes(i)),e}}catch{}return n}var Zh=class{constructor(t){this.g=t,this.value=100,this.drain=0,this.enabled=!1,this.onEmpty=null,this.blinkT=5}set(t){this.value=Je(t,0,100),this.g.hud.setMeter(this.value)}add(t){this.set(this.value+t),t>0&&(this.fired=!1)}update(t){let e=this.g;if(!this.enabled||!["explore","runner"].includes(e.mode))return;let i=e.player?.sprinting&&e.mode==="explore"?2.4:1;this.set(this.value-this.drain*i*t);let s=this.value<22?(22-this.value)/22:0;e.hud.setDrowsy(s*.85),this.value<15&&(this.blinkT-=t,this.blinkT<0&&(this.blinkT=4+Math.random()*3,e.hud.setLids(.6,.35),setTimeout(()=>e.hud.setLids(0,.35),450),Math.random()<.5&&e.audio.play("yawn"))),this.value<=0&&!this.fired&&(this.fired=!0,this.onEmpty?.())}},Qa=class{constructor(){this.save=$1(),this.canvas=Z("#game");let t=this.renderer=new Zo({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});t.toneMapping=Xr,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=lh,Wu(t.capabilities.getMaxAnisotropy()),this.camera=new Xe(75,innerWidth/innerHeight,.05,400),this.camLook=new A,this.composer=new Ma(t),this.renderPass=new ba(new nr,this.camera),this.bloom=new ur(new Q(innerWidth,innerHeight),.55,.45,.82),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(new Ea),this.useBloom=!0,this.input=new ga(this.canvas),this.audio=new ya,this.sched=new ma,this.hud=new Sa(this),this.dialogue=new Aa(this),this.clips=new Ra,this.menu=new Ka(this),this.computer=new Ya(this),this.meter=new Zh(this),this.player=new ja(this),this.level=null,this.mode="boot",this.paused=!1,this.runId=0,this.shakeOffset={x:0,y:0,z:0,rx:0,rz:0},this.shakeAmp=0,this.shakeT=0,this.shakeDur=1,this.clockMin=0,this.clockOn=!1,this.unlockT=0,this.menuAngle=0,this.timeScale=1,this.clock=new lr,this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.persist();let i=document.createElement("div");i.id="gameover-scr",i.innerHTML=`<div class="go-title" style="font-size:clamp(36px,7vw,72px)">GRAPHICS HICCUP</div>
        <div class="go-sub">Your computer's graphics driver restarted. Your progress is saved.</div>
        <button class="btn big pink">\u21BB RELOAD</button>`,i.querySelector("button").onclick=()=>location.reload(),document.body.append(i)}),addEventListener("resize",()=>this.resize()),this.resize(),this.input.onKey=e=>this._onKey(e),this.input.onLockChange=e=>{!e&&this.mode==="explore"&&!this.paused&&this.pause()},this.canvas.addEventListener("click",()=>{this.mode==="explore"&&!this.paused&&this.input.requestLock()}),Z("#skip-btn").addEventListener("click",()=>this.skipCutscene()),document.addEventListener("visibilitychange",()=>{document.hidden&&["explore","runner"].includes(this.mode)&&!this.paused&&this.pause()}),this.applySettings()}persist(){try{localStorage.setItem(Wf,JSON.stringify(this.save))}catch{}}resetSave(){let t=this.save.settings;this.save=Xf(),this.save.settings=t,this.persist()}applySettings(){let t=this.save.settings;this.audio.setVolumes({master:t.master,music:t.music,sfx:t.sfx}),this.mode!=="runner"&&(this.camera.fov=t.fov),this.camera.updateProjectionMatrix(),t.quality==="ultra"&&(t.quality="high");let e=t.quality,i=Math.min(devicePixelRatio,e==="low"?1:1.75);this.renderer.setPixelRatio(i),this.composer.setPixelRatio(i),this.composer.setSize(innerWidth,innerHeight),this.useBloom=e==="high",this.renderer.toneMappingExposure=t.brightness??1.15,this.player.spot.castShadow=e!=="low",document.documentElement.style.setProperty("--sub-size",t.subtitles==="large"?"28px":innerWidth<720?"17px":"22px"),this.persist()}resize(){this.renderer.setSize(innerWidth,innerHeight,!1),this.composer?.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()}async boot(){this.clips.init(),this.menuLevel=new ni(this,{time:"night"}),this.menuLevel.persistent=!0,this.setLevel(this.menuLevel),this.renderer.compile(this.menuLevel.scene,this.camera),this.renderer.setAnimationLoop(()=>this.loop())}start(){this.audio.init();let t=new URLSearchParams(location.search).get("chapter");t&&wi.find(e=>e.id===t)?this.startChapter(t,{mode:"fresh"}):this.toMenu()}loop(){let t=this.clock.getDelta(),e=Math.min(.05,t),i=e*this.timeScale,s=this.input;if(this._perfCheck(Math.min(t,.5)),s.isTouch&&s.wasPressed("Escape")&&["explore","runner"].includes(this.mode)&&this.togglePause(),!this.paused&&(this.sched.update(i),this.mode==="explore"?(this.player.update(i,this.level?.colliders),this._interact(),!s.isTouch&&!s.locked?(this.unlockT+=e,this.unlockT>.6&&this.hud.setPrompt(s.dragging?null:"Click (or drag) to look around")):this.unlockT=0):this.mode==="menu"&&this._menuCam(i),this.level?.update(i),this.player.updateDust(i),this.meter.update(i),this._updateShake(i),this.clockOn)){this.clockMin+=i/4;let a=Math.floor(this.clockMin)%(24*60),l=Math.floor(a/60),c=a%60;this.hud.setClock(`${(l+11)%12+1}:${String(c).padStart(2,"0")} ${l<12?"AM":"PM"}`)}this.dialogue.update(e),this.hud.update();let r=this.camera,o=this.shakeOffset;r.position.x+=o.x,r.position.y+=o.y,r.rotation.z+=o.rz,this.level&&(this.useBloom?(this.renderPass.scene=this.level.scene,this.composer.render(e)):this.renderer.render(this.level.scene,r),this.level.renderExtra?.(this.renderer)),r.position.x-=o.x,r.position.y-=o.y,r.rotation.z-=o.rz,s.endFrame()}_perfCheck(t){if(this.paused||!["explore","runner"].includes(this.mode)||document.hidden){this._perf=null;return}let e=this._perf||(this._perf={t:0,n:0,skip:1});if(e.skip>0){e.skip-=t;return}if(e.t+=t,e.n++,e.t<4)return;let i=e.n/e.t;this._perf={t:0,n:0,skip:0};let s=this.save.settings;i<28&&s.quality!=="low"&&!this.autoLowered?.[s.quality]&&((this.autoLowered||(this.autoLowered={}))[s.quality]=!0,s.quality=s.quality==="high"?"medium":"low",this.applySettings(),this.hud.toast(`\u2699\uFE0F Graphics set to <b>${s.quality==="medium"?"Medium":"Fast"}</b> for smoother play (change it in Settings)`,"gold"))}_interact(){let t=this.level;if(!t||!this.player.enabled)return;let e=this.camera,i=this.player.forward(),s=null,r=.82,o=new A;for(let a of t.interactables){if(!a.enabled)continue;o.copy(a.pos).sub(e.position);let l=o.length();if(l>a.radius)continue;let c=o.normalize().dot(i)+(l<1.2?.15:0);c>r&&(s=a,r=c)}this.unlockT<=.6&&this.hud.setPrompt(s?s.prompt:null),(s&&this.input.wasPressed("KeyE","Enter")||s&&this.input.locked&&this.input.wasPressed("Mouse0"))&&(this.audio.play("click"),s.onUse?.())}_menuCam(t){this.menuAngle+=t*.045;let e=this.menuAngle,i=Mt.trex;this.camera.position.set(i.x+Math.sin(e)*12.5,3.2+Math.sin(e*.7)*.8,i.z+Math.cos(e)*12.5),this.camera.lookAt(i.x,4.2,i.z),this.player.spot.target.position.set(Math.sin(this.menuAngle*3)*1.5,-.1,-6)}_updateShake(t){let e=this.shakeOffset;if(this.shakeT>0){this.shakeT-=t;let i=this.shakeAmp*Math.max(0,this.shakeT/this.shakeDur);e.x=dr(-1,1)*i*.3,e.y=dr(-1,1)*i*.3,e.rz=dr(-1,1)*i*.04}else e.x=e.y=e.rz=0,this.shakeAmp=0}shake(t,e=.5){this.save.settings.shake||(t*=.15),t>=this.shakeAmp*Math.max(0,this.shakeT/this.shakeDur)&&(this.shakeAmp=t,this.shakeT=e,this.shakeDur=e)}_onKey(t){(t.code==="Escape"||t.code==="KeyP")&&(this.mode==="cutscene"&&t.code==="Escape"?this.skipCutscene():["explore","runner"].includes(this.mode)&&this.togglePause()),this.mode==="cutscene"&&(t.code==="Space"||t.code==="Enter")&&this.dialogue.skipLine()}setMode(t){this.mode=t;let e=document.activeElement;e&&e!==document.body&&e.blur&&!e.closest?.(".modal")&&e.blur(),document.body.classList.toggle("playing",t!=="menu"&&t!=="boot");let i=t==="explore";this.player.enabled=i,this.hud.crosshair(i),i||this.hud.setPrompt(null),this.input.showTouch(i?"explore":t==="runner"?"runner":"off"),this.dialogue.allowClickSkip=t==="cutscene",i?this.input.requestLock():this.input.exitLock()}togglePause(){this.paused?this.resume():this.pause()}pause(){if(this.paused)return;this.paused=!0,this.dialogue.setPaused(!0),this.input.exitLock(),this.audio.ctx?.suspend?.();let t=this.pauseModal=Ms(`<h2>PAUSED</h2><div class="sub">${this.chapterName()}</div>
      <div class="chapters">
        <button class="btn big pink" data-a="resume">\u25B6 RESUME</button>
        <button class="btn" data-a="settings">SETTINGS</button>
        <button class="btn" data-a="controls">CONTROLS</button>
        <button class="btn" data-a="restart">RESTART CHAPTER</button>
        <button class="btn ghost" data-a="menu">QUIT TO MENU</button>
      </div>`,()=>{this.paused&&this.resume()});t.panel.querySelector("[data-a=resume]").onclick=()=>t.close(),t.panel.querySelector("[data-a=settings]").onclick=()=>{this.audio.ctx?.resume?.(),this.menu.settings()},t.panel.querySelector("[data-a=controls]").onclick=()=>this.menu.controls(),t.panel.querySelector("[data-a=restart]").onclick=()=>{this.paused=!1,t.close(),this.startChapter(this.save.chapter||"intro",{mode:"continue"})},t.panel.querySelector("[data-a=menu]").onclick=()=>{this.paused=!1,t.close(),this.toMenu()}}resume(){if(this.paused){if(this.paused=!1,this.audio.ctx?.resume?.(),this.dialogue.setPaused(!1),this.pauseModal){let t=this.pauseModal;this.pauseModal=null,t.close()}this.clock.getDelta(),this.mode==="explore"&&this.input.requestLock()}}chapterName(){return wi.find(t=>t.id===this.save.chapter)?.name||""}setLevel(t){this.level&&(this.level.scene.remove(this.camera),this.level.persistent||this.level.dispose()),this.level=t,t.scene.add(this.camera),this.sched.reset()}async loadLevel(t){this.setLevel(t);try{this.renderer.compile(t.scene,this.camera)}catch{}this.clock.getDelta()}_guard(t){let e=this.runId;return Promise.resolve(t).then(i=>e===this.runId?i:new Promise(()=>{}))}wait(t){return this._guard(this.sched.wait(t))}tween(t,e,i){return this._guard(this.sched.tween(t,e,i))}until(t){return this._guard(this.sched.until(t))}say(t,e){return this._guard(this.dialogue.say(t,e))}async fadeOut(t=.5){this.hud.setFade(1,t),await this._guard(new Promise(e=>setTimeout(e,t*1e3+30)))}async fadeIn(t=.8){this.hud.setFade(0,t),await this.wait(t)}async cutscene(t){this.setMode("cutscene"),this.hud.setLetterbox(!0),Z("#skip-btn").classList.remove("off"),this.hud.show(!0);try{await t()}finally{this.sched.skipping=!1,this.hud.setLetterbox(!1),Z("#skip-btn").classList.add("off"),this.hud.caption("")}}skipCutscene(){this.mode!=="cutscene"||this.sched.skipping||(this.audio.play("whoosh",{vol:.4}),this.sched.skipAll(),this.dialogue.skipLine(),this.computer.typingSkip=!0)}camTo(t,e,i=1.5,s=In.inOut){let r=this.camera.position.clone(),o=this.camLook.clone(),a=new A(...t),l=new A(...e);return this.tween(i,c=>{this.camera.position.lerpVectors(r,a,c),this.camLook.lerpVectors(o,l,c),this.camera.lookAt(this.camLook)},s)}camSet(t,e){this.camera.position.set(...t),this.camLook.set(...e),this.camera.lookAt(this.camLook)}objective(t,e){this.hud.objective(t,e)}addFragment(t){this.save.fragments.includes(t)||this.save.fragments.push(t),this.persist(),this.hud.setFragments(this.save.fragments)}collectDonut(t){this.save.donuts.includes(t)||this.save.donuts.push(t),this.persist(),this.meter.add(20),this.audio.play("munch"),this.audio.play("pickup"),this.hud.toast(`\u{1F369} Donut found! <b>+20%</b> <span style="opacity:.7">(${this.save.donuts.length}/${16} hidden donuts)</span>`),this.save.donuts.length===16&&setTimeout(()=>{this.hud.toast("\u{1F3C6} <b>DONUT HUNTER</b> \u2014 you found every hidden donut!","gold"),this.audio.play("chime")},1200)}async openPuzzle(t,e){this.setMode("puzzle");let i=await this._guard(Vf(this,t,{fragment:e}));return this.setMode("explore"),i&&(this.meter.add(35),this.audio.play("munch",{delay:.2}),this.addFragment(e),this.hud.toast(`\u{1F9E9} Puzzle solved! <b>+1 donut</b> \xB7 fragment <b style="color:var(--mint)">${e}</b>`,"mint")),i}checkpoint(t){this.save.chapter=t,this.save.reached.includes(t)||this.save.reached.push(t),this.persist()}setClock(t,e=!0){this.clockMin=t,this.clockOn=e,this.hud.showClock(e)}async failed(t,e){this.setMode("cutscene"),this.meter.enabled=!1,this.audio.stopMusic(.5),this.audio.play("wahwah"),this.dialogue.stop(),await this._guard($a(this,{title:t,sub:e,buttons:[{label:"\u21BB TRY AGAIN",value:"retry",cls:"pink"},{label:"MENU",value:"menu",cls:"ghost"}]}))==="retry"?this.startChapter(this.save.chapter,{mode:"continue"}):this.toMenu()}resetHud(){let t=this.hud;t.show(!1),t.showMeter(!1),t.showClock(!1),t.objective(null),t.setFragments([],{show:!1}),t.showChase(!1),t.showArrow(!1),t.setSpeedLines(0),Z("#mirror").classList.add("off"),t.setPrompt(null),t.controlsHint(null),t.setDrowsy(0),t.setLids(0,0),t.setLetterbox(!1),t.setDonutCount(null),t.caption(""),t.loadingTip(null),Z("#minimap").classList.add("off"),Z("#skip-btn").classList.add("off"),Z("#modal-root").innerHTML="",this.computer.close()}async startChapter(t,{mode:e="fresh"}={}){this.runId++,this.paused=!1,this.timeScale=1,this.menu.hide(),this.dialogue.stop(),this.setMode("loading"),await this._guard(this.fadeOut(.45)),this.resetHud(),this.player.eyeOffset=0,this.player.speedMul=1,this.meter.enabled=!1,this.meter.onEmpty=null,this.meter.fired=!1;let i=qh[t];if(e==="fresh")this.save.fragments=i.fragments.slice(),["intro","dino","egypt","roman","chase","maze"].includes(t)&&(this.save.solved={}),this.meter.set(i.meter);else if(e==="continue"){this.meter.set(Math.max(60,i.meter*.85));for(let s of i.fragments)this.save.fragments.includes(s)||this.save.fragments.push(s)}else this.meter.set(Math.max(45,this.meter.value));this.checkpoint(t),this.audio.setReverb(.5),t!=="intro"&&(this.hud.loadingTip(wi.find(s=>s.id===t)?.name,Uf(t)),await this._guard(new Promise(s=>requestAnimationFrame(()=>setTimeout(s,40))))),Nf(this,t,e)}toMenu(){this.runId++,this.paused=!1,this.timeScale=1,this.dialogue.stop(),this.resetHud(),this.meter.enabled=!1,this.setLevel(this.menuLevel),this.setMode("menu"),this.player.hasFlashlight=!0,this.player.flModel.visible=!1,this.player.setFlash(!0),this.player.spot.target.position.set(0,-.1,-6),this.camera.fov=60,this.camera.updateProjectionMatrix(),this.audio.setAmbient("night"),this.audio.setReverb(.6),this.hud.setFade(0,1.2),this.menu.show()}};function qf(n){console.error(n);let t=Z("#boot");t&&(t.classList.remove("off","loading"),t.querySelector(".boot-inner").innerHTML=`
    <div class="boot-logo" style="font-size:48px">UH OH \u{1F369}</div>
    <div class="boot-tips" style="max-width:520px">The game couldn't start. Your browser might not support WebGL, or something broke.<br><br>
    <code style="color:#ff8a8a">${String(n?.message||n).replace(/</g,"&lt;")}</code></div>`)}addEventListener("DOMContentLoaded",async()=>{let n=Z("#boot"),t;try{t=new Qa,window.game=t}catch(i){qf(i);return}let e=t.boot().catch(qf);Z("#boot-start").addEventListener("click",async()=>{n.classList.add("loading"),t.audio.init(),t.audio.play("select");try{if("speechSynthesis"in window){let i=new SpeechSynthesisUtterance(" ");i.volume=0,speechSynthesis.speak(i)}}catch{}await e,n.style.transition="opacity .8s",n.style.opacity="0",setTimeout(()=>n.classList.add("off"),800),t.start()})});})();
