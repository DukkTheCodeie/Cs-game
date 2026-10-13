(()=>{var ch="170";var ip=0,ad=1,sp=2;var yu=1,hh=2,hi=3,Fi=0,yn=1,ke=2,Qn=0,Vs=1,En=2,ld=3,cd=4,rp=5,os=100,op=101,ap=102,lp=103,cp=104,hp=200,dp=201,up=202,fp=203,Fl=204,Bl=205,pp=206,mp=207,gp=208,yp=209,vp=210,xp=211,_p=212,Mp=213,bp=214,zl=0,Gl=1,Vl=2,qs=3,Wl=4,Xl=5,Yl=6,ql=7,vu=0,Ep=1,wp=2,Oi=0,dh=1,uh=2,fh=3,Vr=4,Sp=5,ph=6,mh=7;var xu=300,$s=301,Zs=302,$l=303,Zl=304,ha=306,yi=1e3,ui=1001,Kl=1002,zn=1003,Tp=1004;var jr=1005;var jn=1006,il=1007;var ls=1008;var vi=1009,_u=1010,Mu=1011,Dr=1012,gh=1013,cs=1014,fi=1015,Wn=1016,yh=1017,vh=1018,Ks=1020,bu=35902,Eu=1021,wu=1022,Bn=1023,Su=1024,Tu=1025,Ws=1026,Js=1027,Au=1028,xh=1029,Ru=1030,_h=1031;var Mh=1033,Co=33776,Po=33777,Io=33778,Lo=33779,Jl=35840,jl=35841,Ql=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37808,rc=37809,oc=37810,ac=37811,lc=37812,cc=37813,hc=37814,dc=37815,uc=37816,fc=37817,pc=37818,mc=37819,gc=37820,yc=37821,ko=36492,vc=36494,xc=36495,Cu=36283,_c=36284,Mc=36285,bc=36286;var Do=2300,Ec=2301,sl=2302,hd=2400,dd=2401,ud=2402;var Ap=3200,Rp=3201;var Pu=0,Cp=1,Ui="",ln="srgb",lr="srgb-linear",da="linear",me="srgb";var Es=7680;var fd=519,Pp=512,Ip=513,Lp=514,Iu=515,kp=516,Dp=517,Up=518,Np=519,wc=35044;var pd="300 es",pi=2e3,Uo=2001,Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rl=Math.PI/180,No=180/Math.PI;function mi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function nn(n,t,e){return Math.max(t,Math.min(e,n))}function Op(n,t){return(n%t+t)%t}function ol(n,t,e){return(1-e)*n+e*t}function Jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var st=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],g=i[8],y=s[0],p=s[3],m=s[6],x=s[1],_=s[4],v=s[7],w=s[2],S=s[5],R=s[8];return r[0]=o*y+a*x+l*w,r[3]=o*p+a*_+l*S,r[6]=o*m+a*v+l*R,r[1]=c*y+h*x+d*w,r[4]=c*p+h*_+d*S,r[7]=c*m+h*v+d*R,r[2]=f*y+u*x+g*w,r[5]=f*p+u*_+g*S,r[8]=f*m+u*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=e*d+i*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*i)*y,t[2]=(a*i-s*o)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=u*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(al.makeScale(t,e)),this}rotate(t){return this.premultiply(al.makeRotation(-t)),this}translate(t,e){return this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},al=new jt;function Lu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hp(){let n=Oo("canvas");return n.style.display="block",n}var md={};function Cr(n){n in md||(md[n]=!0,console.warn(n))}function Fp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Bp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ae={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(n.r=gi(n.r),n.g=gi(n.g),n.b=gi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(n.r=Xs(n.r),n.g=Xs(n.g),n.b=Xs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ui?da:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var gd=[.64,.33,.3,.6,.15,.06],yd=[.2126,.7152,.0722],vd=[.3127,.329],xd=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_d=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[lr]:{primaries:gd,whitePoint:vd,transfer:da,toXYZ:xd,fromXYZ:_d,luminanceCoefficients:yd,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:gd,whitePoint:vd,transfer:me,toXYZ:xd,fromXYZ:_d,luminanceCoefficients:yd,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}});var ws,Sc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ws===void 0&&(ws=Oo("canvas")),ws.width=t.width,ws.height=t.height;let i=ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Oo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gi(e[i]/255)*255):e[i]=gi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gp=0,Ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ll(s[o].image)):r.push(ll(s[o]))}else r=ll(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vp=0,wn=class n extends Bi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ui,s=ui,r=jn,o=ls,a=Bn,l=vi,c=n.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=mi(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yi:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yi:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=xu;wn.DEFAULT_ANISOTROPY=1;var Me=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(u+1)/2,w=(m+1)/2,S=(h+f)/4,R=(d+y)/4,I=(g+p)/4;return _>v&&_>w?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=S/i,r=R/i):v>w?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=I/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=I/r),this.set(i,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-y)/x,this.z=(f-h)/x,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tc=class extends Bi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Tc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Fo=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ac=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],u=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=u,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==f||c!==u||h!==g){let p=1-a,m=l*f+c*u+h*g+d*y,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let w=Math.sqrt(_),S=Math.atan2(w,m*x);p=Math.sin(p*S)/w,a=Math.sin(a*S)/w}let v=a*x;if(l=l*p+f*v,c=c*p+u*v,h=h*p+g*v,d=d*p+y*v,p===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-a*u,t[e+2]=c*g+h*u+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>d){let u=2*Math.sqrt(1+i-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-i-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*i+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Md.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Md.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cl.copy(this).projectOnVector(t),this.sub(cl)}reflect(t){return this.sub(cl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cl=new A,Md=new Pn,xi=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),to.subVectors(this.max,Mr),Ss.subVectors(t.a,Mr),Ts.subVectors(t.b,Mr),As.subVectors(t.c,Mr),Ci.subVectors(Ts,Ss),Pi.subVectors(As,Ts),Qi.subVectors(Ss,As);let e=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-Qi.z,Qi.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,Qi.z,0,-Qi.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-Qi.y,Qi.x,0];return!hl(e,Ss,Ts,As,to)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,Ss,Ts,As,to))?!1:(eo.crossVectors(Ci,Pi),e=[eo.x,eo.y,eo.z],hl(e,Ss,Ts,As,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ri=[new A,new A,new A,new A,new A,new A,new A,new A],On=new A,Qr=new xi,Ss=new A,Ts=new A,As=new A,Ci=new A,Pi=new A,Qi=new A,Mr=new A,to=new A,eo=new A,ts=new A;function hl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ts.fromArray(n,r);let a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=t.dot(ts),c=e.dot(ts),h=i.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Wp=new xi,br=new A,dl=new A,zi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Wp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);let e=br.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(dl)),this.expandByPoint(br.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},oi=new A,ul=new A,no=new A,Ii=new A,fl=new A,io=new A,pl=new A,Bo=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ul.copy(t).add(e).multiplyScalar(.5),no.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(ul);let r=t.distanceTo(e)*.5,o=-this.direction.dot(no),a=Ii.dot(this.direction),l=-Ii.dot(no),c=Ii.lengthSq(),h=Math.abs(1-o*o),d,f,u,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let y=1/h;d*=y,f*=y,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ul).addScaledVector(no,f),u}intersectSphere(t,e){oi.subVectors(t.center,this.origin);let i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,i,s,r){fl.subVectors(e,t),io.subVectors(i,t),pl.crossVectors(fl,io);let o=this.direction.dot(pl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);let l=a*this.direction.dot(io.crossVectors(Ii,io));if(l<0)return null;let c=a*this.direction.dot(fl.cross(Ii));if(c<0||l+c>o)return null;let h=-a*Ii.dot(pl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class n{constructor(t,e,i,s,r,o,a,l,c,h,d,f,u,g,y,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,f,u,g,y,p)}set(t,e,i,s,r,o,a,l,c,h,d,f,u,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,g=c*h,y=c*d;e[0]=f+y*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,g=c*h,y=c*d;e[0]=f-y*a,e[4]=-o*d,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+y,e[1]=l*d,e[5]=y*c+f,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-f*d,e[8]=g*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-y*d}else if(t.order==="XZY"){let f=o*l,u=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+y,e[5]=o*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=a*h,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xp,t,Yp)}lookAt(t,e,i){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Li.crossVectors(i,Mn),Li.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Li.crossVectors(i,Mn)),Li.normalize(),so.crossVectors(Mn,Li),s[0]=Li.x,s[4]=so.x,s[8]=Mn.x,s[1]=Li.y,s[5]=so.y,s[9]=Mn.y,s[2]=Li.z,s[6]=so.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],g=i[2],y=i[6],p=i[10],m=i[14],x=i[3],_=i[7],v=i[11],w=i[15],S=s[0],R=s[4],I=s[8],b=s[12],M=s[1],L=s[5],k=s[9],D=s[13],B=s[2],$=s[6],V=s[10],ht=s[14],X=s[3],ut=s[7],vt=s[11],xt=s[15];return r[0]=o*S+a*M+l*B+c*X,r[4]=o*R+a*L+l*$+c*ut,r[8]=o*I+a*k+l*V+c*vt,r[12]=o*b+a*D+l*ht+c*xt,r[1]=h*S+d*M+f*B+u*X,r[5]=h*R+d*L+f*$+u*ut,r[9]=h*I+d*k+f*V+u*vt,r[13]=h*b+d*D+f*ht+u*xt,r[2]=g*S+y*M+p*B+m*X,r[6]=g*R+y*L+p*$+m*ut,r[10]=g*I+y*k+p*V+m*vt,r[14]=g*b+y*D+p*ht+m*xt,r[3]=x*S+_*M+v*B+w*X,r[7]=x*R+_*L+v*$+w*ut,r[11]=x*I+_*k+v*V+w*vt,r[15]=x*b+_*D+v*ht+w*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],y=t[7],p=t[11],m=t[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*u-i*l*u)+y*(+e*l*u-e*c*f+r*o*f-s*o*u+s*c*h-r*l*h)+p*(+e*c*d-e*a*u-r*o*d+i*o*u+r*a*h-i*c*h)+m*(-s*a*h-e*l*d+e*a*f+s*o*d-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],y=t[13],p=t[14],m=t[15],x=d*p*c-y*f*c+y*l*u-a*p*u-d*l*m+a*f*m,_=g*f*c-h*p*c-g*l*u+o*p*u+h*l*m-o*f*m,v=h*y*c-g*d*c+g*a*u-o*y*u-h*a*m+o*d*m,w=g*d*l-h*y*l-g*a*f+o*y*f+h*a*p-o*d*p,S=e*x+i*_+s*v+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return t[0]=x*R,t[1]=(y*f*r-d*p*r-y*s*u+i*p*u+d*s*m-i*f*m)*R,t[2]=(a*p*r-y*l*r+y*s*c-i*p*c-a*s*m+i*l*m)*R,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*u-i*l*u)*R,t[4]=_*R,t[5]=(h*p*r-g*f*r+g*s*u-e*p*u-h*s*m+e*f*m)*R,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*R,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*u+e*l*u)*R,t[8]=v*R,t[9]=(g*d*r-h*y*r-g*i*u+e*y*u+h*i*m-e*d*m)*R,t[10]=(o*y*r-g*a*r+g*i*c-e*y*c-o*i*m+e*a*m)*R,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*u-e*a*u)*R,t[12]=w*R,t[13]=(h*y*s-g*d*s+g*i*f-e*y*f-h*i*p+e*d*p)*R,t[14]=(g*a*s-o*y*s-g*i*l+e*y*l+o*i*p-e*a*p)*R,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*f+e*a*f)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,g=r*d,y=o*h,p=o*d,m=a*d,x=l*c,_=l*h,v=l*d,w=i.x,S=i.y,R=i.z;return s[0]=(1-(y+m))*w,s[1]=(u+v)*w,s[2]=(g-_)*w,s[3]=0,s[4]=(u-v)*S,s[5]=(1-(f+m))*S,s[6]=(p+x)*S,s[7]=0,s[8]=(g+_)*R,s[9]=(p-x)*R,s[10]=(1-(f+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Rs.set(s[0],s[1],s[2]).length(),o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Hn.copy(this);let c=1/r,h=1/o,d=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,e.setFromRotationMatrix(Hn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=pi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),u,g;if(a===pi)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Uo)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=pi){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),f=(e+t)*c,u=(i+s)*h,g,y;if(a===pi)g=(o+r)*d,y=-2*d;else if(a===Uo)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Rs=new A,Hn=new ce,Xp=new A(0,0,0),Yp=new A(1,1,1),Li=new A,so=new A,Mn=new A,bd=new ce,Ed=new Pn,vn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var zo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qp=0,wd=new A,Cs=new Pn,ai=new ce,ro=new A,Er=new A,$p=new A,Zp=new Pn,Sd=new A(1,0,0),Td=new A(0,1,0),Ad=new A(0,0,1),Rd={type:"added"},Kp={type:"removed"},Ps={type:"childadded",child:null},ml={type:"childremoved",child:null},$e=class n extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new A,e=new vn,i=new Pn,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new jt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Sd,t)}rotateY(t){return this.rotateOnAxis(Td,t)}rotateZ(t){return this.rotateOnAxis(Ad,t)}translateOnAxis(t,e){return wd.copy(t).applyQuaternion(this.quaternion),this.position.add(wd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sd,t)}translateY(t){return this.translateOnAxis(Td,t)}translateZ(t){return this.translateOnAxis(Ad,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ro.copy(t):ro.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Er,ro,this.up):ai.lookAt(ro,Er,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ai),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rd),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kp),ml.child=t,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rd),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,$p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Zp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};$e.DEFAULT_UP=new A(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new A,li=new A,gl=new A,ci=new A,Is=new A,Ls=new A,Cd=new A,yl=new A,vl=new A,xl=new A,_l=new Me,Ml=new Me,bl=new Me,Ni=class n{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Fn.subVectors(s,e),li.subVectors(i,e),gl.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(li),l=Fn.dot(gl),c=li.dot(li),h=li.dot(gl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return _l.setScalar(0),Ml.setScalar(0),bl.setScalar(0),_l.fromBufferAttribute(t,e),Ml.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_l,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(bl,r.z),o}static isFrontFacing(t,e,i,s){return Fn.subVectors(i,e),li.subVectors(t,e),Fn.cross(li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Fn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Is.subVectors(s,i),Ls.subVectors(r,i),yl.subVectors(t,i);let l=Is.dot(yl),c=Ls.dot(yl);if(l<=0&&c<=0)return e.copy(i);vl.subVectors(t,s);let h=Is.dot(vl),d=Ls.dot(vl);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Is,o);xl.subVectors(t,r);let u=Is.dot(xl),g=Ls.dot(xl);if(g>=0&&u<=g)return e.copy(r);let y=u*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ls,a);let p=h*g-u*d;if(p<=0&&d-h>=0&&u-g>=0)return Cd.subVectors(r,s),a=(d-h)/(d-h+(u-g)),e.copy(s).addScaledVector(Cd,a);let m=1/(p+y+f);return o=y*m,a=f*m,e.copy(i).addScaledVector(Is,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},oo={h:0,s:0,l:0};function El(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ft=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=Op(t,1),e=nn(e,0,1),i=nn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=El(o,r,t+1/3),this.g=El(o,r,t),this.b=El(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let i=ku[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ae.fromWorkingColorSpace(an.copy(this),t),Math.round(nn(an.r*255,0,255))*65536+Math.round(nn(an.g*255,0,255))*256+Math.round(nn(an.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(an.copy(this),e);let i=an.r,s=an.g,r=an.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=ln){ae.fromWorkingColorSpace(an.copy(this),t);let e=an.r,i=an.g,s=an.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(oo);let i=ol(ki.h,oo.h,e),s=ol(ki.s,oo.s,e),r=ol(ki.l,oo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Ft;Ft.NAMES=ku;var Jp=0,_i=class extends Bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=mi(),this.name="",this.blending=Vs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Bl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},de=class extends _i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Xe=new A,ao=new st,ze=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wc,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wc&&(t.usage=this.usage),t}};var Go=class extends ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Vo=class extends ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Zt=class extends ze{constructor(t,e,i){super(new Float32Array(t),e,i)}},jp=0,Cn=new ce,wl=new $e,ks=new A,bn=new xi,wr=new xi,Qe=new A,Re=class n extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lu(t)?Vo:Go)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return wl.lookAt(t),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let i=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(bn.min,wr.min),bn.expandByPoint(Qe),Qe.addVectors(bn.max,wr.max),bn.expandByPoint(Qe)):(bn.expandByPoint(wr.min),bn.expandByPoint(wr.max))}bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(t,c),Qe.add(ks)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new A,l[I]=new A;let c=new A,h=new A,d=new A,f=new st,u=new st,g=new st,y=new A,p=new A;function m(I,b,M){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,I),u.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),u.sub(f),g.sub(f);let L=1/(u.x*g.y-g.x*u.y);isFinite(L)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(L),p.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(L),a[I].add(y),a[b].add(y),a[M].add(y),l[I].add(p),l[b].add(p),l[M].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,b=x.length;I<b;++I){let M=x[I],L=M.start,k=M.count;for(let D=L,B=L+k;D<B;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let _=new A,v=new A,w=new A,S=new A;function R(I){w.fromBufferAttribute(s,I),S.copy(w);let b=a[I];_.copy(b),_.sub(w.multiplyScalar(w.dot(b))).normalize(),v.crossVectors(S,b);let L=v.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,L)}for(let I=0,b=x.length;I<b;++I){let M=x[I],L=M.start,k=M.count;for(let D=L,B=L+k;D<B;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let f=0,u=t.count;f<u;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?u=l[y]*a.data.stride+a.offset:u=l[y]*h;for(let m=0;m<h;m++)f[g++]=c[u++]}return new ze(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,i);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pd=new ce,es=new Bo,lo=new zi,Id=new A,co=new A,ho=new A,uo=new A,Sl=new A,fo=new A,Ld=new A,po=new A,H=class extends $e{constructor(t=new Re,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Sl.fromBufferAttribute(d,t),o?fo.addScaledVector(Sl,h):fo.addScaledVector(Sl.sub(e),h))}e.add(fo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(lo.containsPoint(es.origin)===!1&&(es.intersectSphere(lo,Id)===null||es.origin.distanceToSquared(Id)>(t.far-t.near)**2))&&(Pd.copy(r).invert(),es.copy(t.ray).applyMatrix4(Pd),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],x=Math.max(p.start,u.start),_=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let v=x,w=_;v<w;v+=3){let S=a.getX(v),R=a.getX(v+1),I=a.getX(v+2);s=mo(this,m,t,i,c,h,d,S,R,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let p=g,m=y;p<m;p+=3){let x=a.getX(p),_=a.getX(p+1),v=a.getX(p+2);s=mo(this,o,t,i,c,h,d,x,_,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],x=Math.max(p.start,u.start),_=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let v=x,w=_;v<w;v+=3){let S=v,R=v+1,I=v+2;s=mo(this,m,t,i,c,h,d,S,R,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let p=g,m=y;p<m;p+=3){let x=p,_=p+1,v=p+2;s=mo(this,o,t,i,c,h,d,x,_,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Qp(n,t,e,i,s,r,o,a){let l;if(t.side===yn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Fi,a),l===null)return null;po.copy(a),po.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(po);return c<e.near||c>e.far?null:{distance:c,point:po.clone(),object:n}}function mo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,co),n.getVertexPosition(l,ho),n.getVertexPosition(c,uo);let h=Qp(n,t,e,i,co,ho,uo,Ld);if(h){let d=new A;Ni.getBarycoord(Ld,co,ho,uo,d),s&&(h.uv=Ni.getInterpolatedAttribute(s,a,l,c,d,new st)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,l,c,d,new st)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,l,c,d,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new A,materialIndex:0};Ni.getNormal(co,ho,uo,f.normal),h.face=f,h.barycoord=d}return h}var ee=class n extends Re{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function g(y,p,m,x,_,v,w,S,R,I,b){let M=v/R,L=w/I,k=v/2,D=w/2,B=S/2,$=R+1,V=I+1,ht=0,X=0,ut=new A;for(let vt=0;vt<V;vt++){let xt=vt*L-D;for(let Ht=0;Ht<$;Ht++){let Yt=Ht*M-k;ut[y]=Yt*x,ut[p]=xt*_,ut[m]=B,c.push(ut.x,ut.y,ut.z),ut[y]=0,ut[p]=0,ut[m]=S>0?1:-1,h.push(ut.x,ut.y,ut.z),d.push(Ht/R),d.push(1-vt/I),ht+=1}}for(let vt=0;vt<I;vt++)for(let xt=0;xt<R;xt++){let Ht=f+xt+$*vt,Yt=f+xt+$*(vt+1),K=f+(xt+1)+$*(vt+1),F=f+(xt+1)+$*vt;l.push(Ht,Yt,F),l.push(Yt,K,F),X+=6}a.addGroup(u,X,b),u+=X,f+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function js(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function un(n){let t={};for(let e=0;e<n.length;e++){let i=js(n[e]);for(let s in i)t[s]=i[s]}return t}function t0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Du(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Wi={clone:js,merge:un},e0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends _i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=t0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Wo=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new A,kd=new st,Dd=new st,qe=class extends Wo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=No*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return No*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,kd,Dd),e.subVectors(Dd,kd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ds=-90,Us=1,Rc=class extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(Ds,Us,t,e);s.layers=this.layers,this.add(s);let r=new qe(Ds,Us,t,e);r.layers=this.layers,this.add(r);let o=new qe(Ds,Us,t,e);o.layers=this.layers,this.add(o);let a=new qe(Ds,Us,t,e);a.layers=this.layers,this.add(a);let l=new qe(Ds,Us,t,e);l.layers=this.layers,this.add(l);let c=new qe(Ds,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Xo=class extends wn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cc=class extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Xo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ee(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Qn});r.uniforms.tEquirect.value=e;let o=new H(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=jn),new Rc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Tl=new A,i0=new A,s0=new jt,di=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Tl.subVectors(i,e).cross(i0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Tl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||s0.getNormalMatrix(t),s=this.coplanarPoint(Tl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ns=new zi,go=new A,hs=class{constructor(t=new di,e=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],u=s[8],g=s[9],y=s[10],p=s[11],m=s[12],x=s[13],_=s[14],v=s[15];if(i[0].setComponents(l-r,f-c,p-u,v-m).normalize(),i[1].setComponents(l+r,f+c,p+u,v+m).normalize(),i[2].setComponents(l+o,f+h,p+g,v+x).normalize(),i[3].setComponents(l-o,f-h,p-g,v-x).normalize(),i[4].setComponents(l-a,f-d,p-y,v-_).normalize(),e===pi)i[5].setComponents(l+a,f+d,p+y,v+_).normalize();else if(e===Uo)i[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(go.x=s.normal.x>0?t.max.x:t.min.x,go.y=s.normal.y>0?t.max.y:t.min.y,go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function r0(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){let g=d[f],y=d[u];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){let y=d[u];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Gt=class n extends Re{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,u=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let x=m*f-o;for(let _=0;_<c;_++){let v=_*d-r;g.push(v,-x,0),y.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let _=x+c*m,v=x+c*(m+1),w=x+1+c*(m+1),S=x+1+c*m;u.push(_,v,S),u.push(v,w,S)}this.setIndex(u),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},o0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a0=`#ifdef USE_ALPHAHASH
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
#endif`,l0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
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
#endif`,f0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p0=`#ifdef USE_BATCHING
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
#endif`,m0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,C0=`#define PI 3.141592653589793
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
} // validated`,P0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I0=`vec3 transformedNormal = objectNormal;
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
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
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
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
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
#endif`,sm=`struct PhysicalMaterial {
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
}`,rm=`
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mm=`#if defined( USE_POINTS_UV )
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
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
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
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wm=`float getShadowMask() {
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
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
}`,fg=`#define DISTANCE
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
}`,pg=`#define DISTANCE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,Mg=`#define LAMBERT
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
}`,bg=`#define LAMBERT
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
}`,Eg=`#define MATCAP
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
}`,wg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define PHONG
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define STANDARD
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
}`,Ig=`#define TOON
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
}`,Lg=`#define TOON
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
}`,kg=`uniform float size;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 color;
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
}`,Og=`uniform float rotation;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:o0,alphahash_pars_fragment:a0,alphamap_fragment:l0,alphamap_pars_fragment:c0,alphatest_fragment:h0,alphatest_pars_fragment:d0,aomap_fragment:u0,aomap_pars_fragment:f0,batching_pars_vertex:p0,batching_vertex:m0,begin_vertex:g0,beginnormal_vertex:y0,bsdfs:v0,iridescence_fragment:x0,bumpmap_pars_fragment:_0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:E0,clipping_planes_vertex:w0,color_fragment:S0,color_pars_fragment:T0,color_pars_vertex:A0,color_vertex:R0,common:C0,cube_uv_reflection_fragment:P0,defaultnormal_vertex:I0,displacementmap_pars_vertex:L0,displacementmap_vertex:k0,emissivemap_fragment:D0,emissivemap_pars_fragment:U0,colorspace_fragment:N0,colorspace_pars_fragment:O0,envmap_fragment:H0,envmap_common_pars_fragment:F0,envmap_pars_fragment:B0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:j0,envmap_vertex:G0,fog_vertex:V0,fog_pars_vertex:W0,fog_fragment:X0,fog_pars_fragment:Y0,gradientmap_pars_fragment:q0,lightmap_pars_fragment:$0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:K0,lights_pars_begin:J0,lights_toon_fragment:Q0,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:om,lights_fragment_end:am,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:dm,map_fragment:um,map_pars_fragment:fm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:ym,morphinstance_vertex:vm,morphcolor_vertex:xm,morphnormal_vertex:_m,morphtarget_pars_vertex:Mm,morphtarget_vertex:bm,normal_fragment_begin:Em,normal_fragment_maps:wm,normal_pars_fragment:Sm,normal_pars_vertex:Tm,normal_vertex:Am,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Lm,opaque_fragment:km,packing:Dm,premultiplied_alpha_fragment:Um,project_vertex:Nm,dithering_fragment:Om,dithering_pars_fragment:Hm,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Gm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:Ym,skinning_vertex:qm,skinnormal_vertex:$m,specularmap_fragment:Zm,specularmap_pars_fragment:Km,tonemapping_fragment:Jm,tonemapping_pars_fragment:jm,transmission_fragment:Qm,transmission_pars_fragment:tg,uv_pars_fragment:eg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:sg,background_vert:rg,background_frag:og,backgroundCube_vert:ag,backgroundCube_frag:lg,cube_vert:cg,cube_frag:hg,depth_vert:dg,depth_frag:ug,distanceRGBA_vert:fg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:yg,linedashed_frag:vg,meshbasic_vert:xg,meshbasic_frag:_g,meshlambert_vert:Mg,meshlambert_frag:bg,meshmatcap_vert:Eg,meshmatcap_frag:wg,meshnormal_vert:Sg,meshnormal_frag:Tg,meshphong_vert:Ag,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Pg,meshtoon_vert:Ig,meshtoon_frag:Lg,points_vert:kg,points_frag:Dg,shadow_vert:Ug,shadow_frag:Ng,sprite_vert:Og,sprite_frag:Hg},Et={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Kn={basic:{uniforms:un([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:un([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ft(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:un([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:un([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:un([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Ft(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:un([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:un([Et.points,Et.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:un([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:un([Et.common,Et.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:un([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:un([Et.sprite,Et.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:un([Et.common,Et.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:un([Et.lights,Et.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Kn.physical={uniforms:un([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var yo={r:0,b:0,g:0},is=new vn,Fg=new ce;function Bg(n,t,e,i,s,r,o){let a=new Ft(0),l=r===!0?0:1,c,h,d=null,f=0,u=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function y(x){let _=!1,v=g(x);v===null?m(a,l):v&&v.isColor&&(m(v,1),_=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(x,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===ha)?(h===void 0&&(h=new H(new ee(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:js(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),is.copy(_.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(is)),h.material.toneMapped=ae.getTransfer(v.colorSpace)!==me,(d!==v||f!==v.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,u=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new H(new Gt(2,2),new Ze({name:"BackgroundMaterial",uniforms:js(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ae.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,u=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,_){x.getRGB(yo,Du(n)),i.buffers.color.setClear(yo.r,yo.g,yo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:y,addToRenderList:p}}function zg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(M,L,k,D,B){let $=!1,V=d(D,k,L);r!==V&&(r=V,c(r.object)),$=u(M,D,k,B),$&&g(M,D,k,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(M,L,k,D),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,L,k){let D=k.wireframe===!0,B=i[M.id];B===void 0&&(B={},i[M.id]=B);let $=B[L.id];$===void 0&&($={},B[L.id]=$);let V=$[D];return V===void 0&&(V=f(l()),$[D]=V),V}function f(M){let L=[],k=[],D=[];for(let B=0;B<e;B++)L[B]=0,k[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:D,object:M,attributes:{},index:null}}function u(M,L,k,D){let B=r.attributes,$=L.attributes,V=0,ht=k.getAttributes();for(let X in ht)if(ht[X].location>=0){let vt=B[X],xt=$[X];if(xt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),vt===void 0||vt.attribute!==xt||xt&&vt.data!==xt.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function g(M,L,k,D){let B={},$=L.attributes,V=0,ht=k.getAttributes();for(let X in ht)if(ht[X].location>=0){let vt=$[X];vt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor));let xt={};xt.attribute=vt,vt&&vt.data&&(xt.data=vt.data),B[X]=xt,V++}r.attributes=B,r.attributesNum=V,r.index=D}function y(){let M=r.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function p(M){m(M,0)}function m(M,L){let k=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;k[M]=1,D[M]===0&&(n.enableVertexAttribArray(M),D[M]=1),B[M]!==L&&(n.vertexAttribDivisor(M,L),B[M]=L)}function x(){let M=r.newAttributes,L=r.enabledAttributes;for(let k=0,D=L.length;k<D;k++)L[k]!==M[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function _(M,L,k,D,B,$,V){V===!0?n.vertexAttribIPointer(M,L,k,B,$):n.vertexAttribPointer(M,L,k,D,B,$)}function v(M,L,k,D){y();let B=D.attributes,$=k.getAttributes(),V=L.defaultAttributeValues;for(let ht in $){let X=$[ht];if(X.location>=0){let ut=B[ht];if(ut===void 0&&(ht==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),ht==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),ut!==void 0){let vt=ut.normalized,xt=ut.itemSize,Ht=t.get(ut);if(Ht===void 0)continue;let Yt=Ht.buffer,K=Ht.type,F=Ht.bytesPerElement,it=K===n.INT||K===n.UNSIGNED_INT||ut.gpuType===gh;if(ut.isInterleavedBufferAttribute){let z=ut.data,nt=z.stride,gt=ut.offset;if(z.isInstancedInterleavedBuffer){for(let _t=0;_t<X.locationSize;_t++)m(X.location+_t,z.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let _t=0;_t<X.locationSize;_t++)p(X.location+_t);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let _t=0;_t<X.locationSize;_t++)_(X.location+_t,xt/X.locationSize,K,vt,nt*F,(gt+xt/X.locationSize*_t)*F,it)}else{if(ut.isInstancedBufferAttribute){for(let z=0;z<X.locationSize;z++)m(X.location+z,ut.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let z=0;z<X.locationSize;z++)p(X.location+z);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let z=0;z<X.locationSize;z++)_(X.location+z,xt/X.locationSize,K,vt,xt*F,xt/X.locationSize*z*F,it)}}else if(V!==void 0){let vt=V[ht];if(vt!==void 0)switch(vt.length){case 2:n.vertexAttrib2fv(X.location,vt);break;case 3:n.vertexAttrib3fv(X.location,vt);break;case 4:n.vertexAttrib4fv(X.location,vt);break;default:n.vertexAttrib1fv(X.location,vt)}}}}x()}function w(){I();for(let M in i){let L=i[M];for(let k in L){let D=L[k];for(let B in D)h(D[B].object),delete D[B];delete L[k]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;let L=i[M.id];for(let k in L){let D=L[k];for(let B in D)h(D[B].object),delete D[B];delete L[k]}delete i[M.id]}function R(M){for(let L in i){let k=i[L];if(k[M.id]===void 0)continue;let D=k[M.id];for(let B in D)h(D[B].object),delete D[B];delete k[M.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:x}}function Gg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,i,1)}function l(c,h,d,f){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*f[y];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Bn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==vi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fi&&!I)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,maxSamples:S}}function Wg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new di,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||i!==0||s;return s=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let x=r?0:i,_=x*4,v=m.clippingState||null;l.value=v,v=h(g,f,_,u);for(let w=0;w!==_;++w)v[w]=e[w];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=u+y*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,v=u;_!==y;++_,v+=4)o.copy(d[_]).applyMatrix4(x,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function Xg(n){let t=new WeakMap;function e(o,a){return a===$l?o.mapping=$s:a===Zl&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===$l||a===Zl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Cc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Qs=class extends Wo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zs=4,Ud=[.125,.215,.35,.446,.526,.582],as=20,Al=new Qs,Nd=new Ft,Rl=null,Cl=0,Pl=0,Il=!1,rs=(1+Math.sqrt(5))/2,Ns=1/rs,Od=[new A(-rs,Ns,0),new A(rs,Ns,0),new A(-Ns,0,rs),new A(Ns,0,rs),new A(0,rs,-Ns),new A(0,rs,Ns),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Yo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rl,Cl,Pl),this._renderer.xr.enabled=Il,t.scissorTest=!1,vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Wn,format:Bn,colorSpace:lr,depthBuffer:!1},s=Hd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hd(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yg(r)),this._blurMaterial=qg(r,t,e)}return s}_compileMaterial(t){let e=new H(this._lodPlanes[0],t);this._renderer.compile(e,Al)}_sceneToCubeUV(t,e,i,s){let a=new qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Nd),h.toneMapping=Oi,h.autoClear=!1;let u=new de({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new H(new ee,u),y=!1,p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,y=!0):(u.color.copy(Nd),y=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let _=this._cubeSize;vo(s,x*_,m>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===$s||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new H(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;vo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Al)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Od[(s-r-1)%Od.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new H(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*as-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):as;p>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${as}`);let m=[],x=0;for(let R=0;R<as;++R){let I=R/y,b=Math.exp(-I*I/2);m.push(b),R===0?x+=b:R<p&&(x+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/x;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;let v=this._sizeLods[s],w=3*v*(s>_-zs?s-_+zs:0),S=4*(this._cubeSize-v);vo(e,w,S,3*v,2*v),l.setRenderTarget(e),l.render(d,Al)}};function Yg(n){let t=[],e=[],i=[],s=n,r=n-zs+1+Ud.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-zs?l=Ud[o-n+zs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,y=3,p=2,m=1,x=new Float32Array(y*g*u),_=new Float32Array(p*g*u),v=new Float32Array(m*g*u);for(let S=0;S<u;S++){let R=S%3*2/3-1,I=S>2?0:-1,b=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];x.set(b,y*g*S),_.set(f,p*g*S);let M=[S,S,S,S,S,S];v.set(M,m*g*S)}let w=new Re;w.setAttribute("position",new ze(x,y)),w.setAttribute("uv",new ze(_,p)),w.setAttribute("faceIndex",new ze(v,m)),t.push(w),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Hd(n,t,e){let i=new fn(n,t,e);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function qg(n,t,e){let i=new Float32Array(as),s=new A(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Fd(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Bd(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function bh(){return`

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
	`}function $g(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===$l||l===Zl,h=l===$s||l===Zs;if(c||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Yo(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new Yo(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Zg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Kg(n,t,e,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)t.remove(y[p])}f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(t.remove(u),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let u=d.morphAttributes;for(let g in u){let y=u[g];for(let p=0,m=y.length;p<m;p++)t.update(y[p],n.ARRAY_BUFFER)}}function c(d){let f=[],u=d.index,g=d.attributes.position,y=0;if(u!==null){let x=u.array;y=u.version;for(let _=0,v=x.length;_<v;_+=3){let w=x[_+0],S=x[_+1],R=x[_+2];f.push(w,S,S,R,R,w)}}else if(g!==void 0){let x=g.array;y=g.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let w=_+0,S=_+1,R=_+2;f.push(w,S,S,R,R,w)}}else return;let p=new(Lu(f)?Vo:Go)(f,1);p.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Jg(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*o),e.update(u,i,1)}function c(f,u,g){g!==0&&(n.drawElementsInstanced(i,u,r,f*o,g),e.update(u,i,g))}function h(f,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=u[m];e.update(p,i,1)}function d(f,u,g,y){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,u[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(i,u,0,r,f,0,y,0,g);let m=0;for(let x=0;x<g;x++)m+=u[x]*y[x];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function jg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Qg(n,t,e){let i=new WeakMap,s=new Me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;u===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let v=a.attributes.position.count*_,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*w*4*d),R=new Fo(S,v,w,d);R.type=fi,R.needsUpdate=!0;let I=_*4;for(let M=0;M<d;M++){let L=p[M],k=m[M],D=x[M],B=v*w*4*M;for(let $=0;$<L.count;$++){let V=$*I;u===!0&&(s.fromBufferAttribute(L,$),S[B+V+0]=s.x,S[B+V+1]=s.y,S[B+V+2]=s.z,S[B+V+3]=0),g===!0&&(s.fromBufferAttribute(k,$),S[B+V+4]=s.x,S[B+V+5]=s.y,S[B+V+6]=s.z,S[B+V+7]=0),y===!0&&(s.fromBufferAttribute(D,$),S[B+V+8]=s.x,S[B+V+9]=s.y,S[B+V+10]=s.z,S[B+V+11]=D.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new st(v,w)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function ty(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var qo=class extends wn{constructor(t,e,i,s,r,o,a,l,c,h=Ws){if(h!==Ws&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ws&&(i=cs),i===void 0&&h===Js&&(i=Ks),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Nu=new wn,zd=new qo(1,1),Ou=new Fo,Hu=new Ac,Fu=new Xo,Gd=[],Vd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),Yd=new Float32Array(4);function cr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Gd[s];if(r===void 0&&(r=new Float32Array(s),Gd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ua(n,t){let e=Vd[t];e===void 0&&(e=new Int32Array(t),Vd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ey(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ny(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),Je(e,t)}}function iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),Je(e,t)}}function sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),Je(e,t)}}function ry(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,i))return;Yd.set(i),n.uniformMatrix2fv(this.addr,!1,Yd),Je(e,i)}}function oy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,i))return;Xd.set(i),n.uniformMatrix3fv(this.addr,!1,Xd),Je(e,i)}}function ay(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,i))return;Wd.set(i),n.uniformMatrix4fv(this.addr,!1,Wd),Je(e,i)}}function ly(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function cy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),Je(e,t)}}function hy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),Je(e,t)}}function dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),Je(e,t)}}function uy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function fy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),Je(e,t)}}function py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),Je(e,t)}}function my(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),Je(e,t)}}function gy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zd.compareFunction=Iu,r=zd):r=Nu,e.setTexture2D(t||r,s)}function yy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Hu,s)}function vy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Fu,s)}function xy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ou,s)}function _y(n){switch(n){case 5126:return ey;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return oy;case 35676:return ay;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return hy;case 35669:case 35673:return dy;case 5125:return uy;case 36294:return fy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return vy;case 36289:case 36303:case 36311:case 36292:return xy}}function My(n,t){n.uniform1fv(this.addr,t)}function by(n,t){let e=cr(t,this.size,2);n.uniform2fv(this.addr,e)}function Ey(n,t){let e=cr(t,this.size,3);n.uniform3fv(this.addr,e)}function wy(n,t){let e=cr(t,this.size,4);n.uniform4fv(this.addr,e)}function Sy(n,t){let e=cr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ty(n,t){let e=cr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ay(n,t){let e=cr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ry(n,t){n.uniform1iv(this.addr,t)}function Cy(n,t){n.uniform2iv(this.addr,t)}function Py(n,t){n.uniform3iv(this.addr,t)}function Iy(n,t){n.uniform4iv(this.addr,t)}function Ly(n,t){n.uniform1uiv(this.addr,t)}function ky(n,t){n.uniform2uiv(this.addr,t)}function Dy(n,t){n.uniform3uiv(this.addr,t)}function Uy(n,t){n.uniform4uiv(this.addr,t)}function Ny(n,t,e){let i=this.cache,s=t.length,r=ua(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Nu,r[o])}function Oy(n,t,e){let i=this.cache,s=t.length,r=ua(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hu,r[o])}function Hy(n,t,e){let i=this.cache,s=t.length,r=ua(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fu,r[o])}function Fy(n,t,e){let i=this.cache,s=t.length,r=ua(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ou,r[o])}function By(n){switch(n){case 5126:return My;case 35664:return by;case 35665:return Ey;case 35666:return wy;case 35674:return Sy;case 35675:return Ty;case 35676:return Ay;case 5124:case 35670:return Ry;case 35667:case 35671:return Cy;case 35668:case 35672:return Py;case 35669:case 35673:return Iy;case 5125:return Ly;case 36294:return ky;case 36295:return Dy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Fy}}var Pc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_y(e.type)}},Ic=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=By(e.type)}},Lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function qd(n,t){n.seq.push(t),n.map[t.id]=t}function zy(n,t,e){let i=n.name,s=i.length;for(Ll.lastIndex=0;;){let r=Ll.exec(i),o=Ll.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qd(e,c===void 0?new Pc(a,n,t):new Ic(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Lc(a),qd(e,d)),e=d}}}var Ys=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);zy(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function $d(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Gy=37297,Vy=0;function Wy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Zd=new jt;function Xy(n){ae._getMatrix(Zd,ae.workingColorSpace,n);let t=`mat3( ${Zd.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case da:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Kd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wy(n.getShaderSource(t),o)}else return s}function Yy(n,t){let e=Xy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qy(n,t){let e;switch(t){case dh:e="Linear";break;case uh:e="Reinhard";break;case fh:e="Cineon";break;case Vr:e="ACESFilmic";break;case ph:e="AgX";break;case mh:e="Neutral";break;case Sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xo=new A;function $y(){ae.getLuminanceCoefficients(xo);let n=xo.x.toFixed(4),t=xo.y.toFixed(4),e=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function Ky(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Jy(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Pr(n){return n!==""}function Jd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace(jy,tv)}var Qy=new Map;function tv(n,t){let e=te[t];if(e===void 0){let i=Qy.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}var ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(n){return n.replace(ev,nv)}function nv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function iv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function sv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $s:case Zs:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function ov(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vu:t="ENVMAP_BLENDING_MULTIPLY";break;case Ep:t="ENVMAP_BLENDING_MIX";break;case wp:t="ENVMAP_BLENDING_ADD";break}return t}function av(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function lv(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=iv(e),c=sv(e),h=rv(e),d=ov(e),f=av(e),u=Zy(e),g=Ky(r),y=s.createProgram(),p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(p=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?te.tonemapping_pars_fragment:"",e.toneMapping!==Oi?qy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Yy("linearToOutputTexel",e.outputColorSpace),$y(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),o=kc(o),o=Jd(o,e),o=jd(o,e),a=kc(a),a=Jd(a,e),a=jd(a,e),o=Qd(o),a=Qd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+p+o,v=x+m+a,w=$d(s,s.VERTEX_SHADER,_),S=$d(s,s.FRAGMENT_SHADER,v);s.attachShader(y,w),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(L){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(y).trim(),D=s.getShaderInfoLog(w).trim(),B=s.getShaderInfoLog(S).trim(),$=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,S);else{let ht=Kd(s,w,"vertex"),X=Kd(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+ht+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(D===""||B==="")&&(V=!1);V&&(L.diagnostics={runnable:$,programLog:k,vertexShader:{log:D,prefix:p},fragmentShader:{log:B,prefix:m}})}s.deleteShader(w),s.deleteShader(S),I=new Ys(s,y),b=Jy(s,y)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Gy)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vy++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=S,this}var cv=0,Dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Uc(t),e.set(t,i)),i}},Uc=class{constructor(t){this.id=cv++,this.code=t,this.usedTimes=0}};function hv(n,t,e,i,s,r,o){let a=new zo,l=new Dc,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,L,k,D){let B=k.fog,$=D.geometry,V=b.isMeshStandardMaterial?k.environment:null,ht=(b.isMeshStandardMaterial?e:t).get(b.envMap||V),X=ht&&ht.mapping===ha?ht.image.height:null,ut=g[b.type];b.precision!==null&&(u=s.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let vt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xt=vt!==void 0?vt.length:0,Ht=0;$.morphAttributes.position!==void 0&&(Ht=1),$.morphAttributes.normal!==void 0&&(Ht=2),$.morphAttributes.color!==void 0&&(Ht=3);let Yt,K,F,it;if(ut){let ye=Kn[ut];Yt=ye.vertexShader,K=ye.fragmentShader}else Yt=b.vertexShader,K=b.fragmentShader,l.update(b),F=l.getVertexShaderID(b),it=l.getFragmentShaderID(b);let z=n.getRenderTarget(),nt=n.state.buffers.depth.getReversed(),gt=D.isInstancedMesh===!0,_t=D.isBatchedMesh===!0,Wt=!!b.map,Q=!!b.matcap,W=!!ht,C=!!b.aoMap,lt=!!b.lightMap,tt=!!b.bumpMap,mt=!!b.normalMap,dt=!!b.displacementMap,wt=!!b.emissiveMap,bt=!!b.metalnessMap,P=!!b.roughnessMap,E=b.anisotropy>0,G=b.clearcoat>0,J=b.dispersion>0,at=b.iridescence>0,et=b.sheen>0,Dt=b.transmission>0,St=E&&!!b.anisotropyMap,It=G&&!!b.clearcoatMap,re=G&&!!b.clearcoatNormalMap,ft=G&&!!b.clearcoatRoughnessMap,Lt=at&&!!b.iridescenceMap,Xt=at&&!!b.iridescenceThicknessMap,qt=et&&!!b.sheenColorMap,kt=et&&!!b.sheenRoughnessMap,le=!!b.specularMap,Qt=!!b.specularColorMap,be=!!b.specularIntensityMap,U=Dt&&!!b.transmissionMap,Tt=Dt&&!!b.thicknessMap,Z=!!b.gradientMap,rt=!!b.alphaMap,Pt=b.alphaTest>0,Rt=!!b.alphaHash,Kt=!!b.extensions,Fe=Oi;b.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Fe=n.toneMapping);let rn={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:Yt,fragmentShader:K,defines:b.defines,customVertexShaderID:F,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:_t,batchingColor:_t&&D._colorsTexture!==null,instancing:gt,instancingColor:gt&&D.instanceColor!==null,instancingMorph:gt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:lr,alphaToCoverage:!!b.alphaToCoverage,map:Wt,matcap:Q,envMap:W,envMapMode:W&&ht.mapping,envMapCubeUVHeight:X,aoMap:C,lightMap:lt,bumpMap:tt,normalMap:mt,displacementMap:f&&dt,emissiveMap:wt,normalMapObjectSpace:mt&&b.normalMapType===Cp,normalMapTangentSpace:mt&&b.normalMapType===Pu,metalnessMap:bt,roughnessMap:P,anisotropy:E,anisotropyMap:St,clearcoat:G,clearcoatMap:It,clearcoatNormalMap:re,clearcoatRoughnessMap:ft,dispersion:J,iridescence:at,iridescenceMap:Lt,iridescenceThicknessMap:Xt,sheen:et,sheenColorMap:qt,sheenRoughnessMap:kt,specularMap:le,specularColorMap:Qt,specularIntensityMap:be,transmission:Dt,transmissionMap:U,thicknessMap:Tt,gradientMap:Z,opaque:b.transparent===!1&&b.blending===Vs&&b.alphaToCoverage===!1,alphaMap:rt,alphaTest:Pt,alphaHash:Rt,combine:b.combine,mapUv:Wt&&y(b.map.channel),aoMapUv:C&&y(b.aoMap.channel),lightMapUv:lt&&y(b.lightMap.channel),bumpMapUv:tt&&y(b.bumpMap.channel),normalMapUv:mt&&y(b.normalMap.channel),displacementMapUv:dt&&y(b.displacementMap.channel),emissiveMapUv:wt&&y(b.emissiveMap.channel),metalnessMapUv:bt&&y(b.metalnessMap.channel),roughnessMapUv:P&&y(b.roughnessMap.channel),anisotropyMapUv:St&&y(b.anisotropyMap.channel),clearcoatMapUv:It&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:re&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:kt&&y(b.sheenRoughnessMap.channel),specularMapUv:le&&y(b.specularMap.channel),specularColorMapUv:Qt&&y(b.specularColorMap.channel),specularIntensityMapUv:be&&y(b.specularIntensityMap.channel),transmissionMapUv:U&&y(b.transmissionMap.channel),thicknessMapUv:Tt&&y(b.thicknessMap.channel),alphaMapUv:rt&&y(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(mt||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!$.attributes.uv&&(Wt||rt),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:nt,skinning:D.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Wt&&b.map.isVideoTexture===!0&&ae.getTransfer(b.map.colorSpace)===me,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&ae.getTransfer(b.emissiveMap.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ke,flipSided:b.side===yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Kt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&b.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return rn.vertexUv1s=c.has(1),rn.vertexUv2s=c.has(2),rn.vertexUv3s=c.has(3),c.clear(),rn}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(M,b),_(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let M=g[b.type],L;if(M){let k=Kn[M];L=Wi.clone(k.uniforms)}else L=b.uniforms;return L}function w(b,M){let L;for(let k=0,D=h.length;k<D;k++){let B=h[k];if(B.cacheKey===M){L=B,++L.usedTimes;break}}return L===void 0&&(L=new lv(n,M,b,r),h.push(L)),L}function S(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:R,programs:h,dispose:I}}function dv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function uv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function eu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function nu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,u,g,y,p){let m=n[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},n[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=u,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=y,m.group=p),t++,m}function a(d,f,u,g,y,p){let m=o(d,f,u,g,y,p);u.transmission>0?i.push(m):u.transparent===!0?s.push(m):e.push(m)}function l(d,f,u,g,y,p){let m=o(d,f,u,g,y,p);u.transmission>0?i.unshift(m):u.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,f){e.length>1&&e.sort(d||uv),i.length>1&&i.sort(f||eu),s.length>1&&s.sort(f||eu)}function h(){for(let d=t,f=n.length;d<f;d++){let u=n[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function fv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new nu,n.set(i,[o])):s>=r.length?(o=new nu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function pv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Ft};break;case"SpotLight":e={position:new A,direction:new A,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function mv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var gv=0;function yv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function vv(n){let t=new pv,e=mv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let s=new A,r=new ce,o=new ce;function a(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let u=0,g=0,y=0,p=0,m=0,x=0,_=0,v=0,w=0,S=0,R=0;c.sort(yv);for(let b=0,M=c.length;b<M;b++){let L=c[b],k=L.color,D=L.intensity,B=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*D,d+=k.g*D,f+=k.b*D;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],D);R++}else if(L.isDirectionalLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ht=L.shadow,X=e.get(L);X.shadowIntensity=ht.intensity,X.shadowBias=ht.bias,X.shadowNormalBias=ht.normalBias,X.shadowRadius=ht.radius,X.shadowMapSize=ht.mapSize,i.directionalShadow[u]=X,i.directionalShadowMap[u]=$,i.directionalShadowMatrix[u]=L.shadow.matrix,x++}i.directional[u]=V,u++}else if(L.isSpotLight){let V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(k).multiplyScalar(D),V.distance=B,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[y]=V;let ht=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,ht.updateMatrices(L),L.castShadow&&S++),i.spotLightMatrix[y]=ht.matrix,L.castShadow){let X=e.get(L);X.shadowIntensity=ht.intensity,X.shadowBias=ht.bias,X.shadowNormalBias=ht.normalBias,X.shadowRadius=ht.radius,X.shadowMapSize=ht.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=$,v++}y++}else if(L.isRectAreaLight){let V=t.get(L);V.color.copy(k).multiplyScalar(D),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=V,p++}else if(L.isPointLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let ht=L.shadow,X=e.get(L);X.shadowIntensity=ht.intensity,X.shadowBias=ht.bias,X.shadowNormalBias=ht.normalBias,X.shadowRadius=ht.radius,X.shadowMapSize=ht.mapSize,X.shadowCameraNear=ht.camera.near,X.shadowCameraFar=ht.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=L.shadow.matrix,_++}i.point[g]=V,g++}else if(L.isHemisphereLight){let V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(D),V.groundColor.copy(L.groundColor).multiplyScalar(D),i.hemi[m]=V,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==u||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==x||I.numPointShadows!==_||I.numSpotShadows!==v||I.numSpotMaps!==w||I.numLightProbes!==R)&&(i.directional.length=u,i.spot.length=y,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=R,I.directionalLength=u,I.pointLength=g,I.spotLength=y,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=x,I.numPointShadows=_,I.numSpotShadows=v,I.numSpotMaps=w,I.numLightProbes=R,i.version=gv++)}function l(c,h){let d=0,f=0,u=0,g=0,y=0,p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let _=c[m];if(_.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(_.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(_.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function iu(n){let t=new vv(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function xv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new iu(n),t.set(s,[a])):r>=o.length?(a=new iu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Nc=class extends _i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oc=class extends _i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},_v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
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
}`;function bv(n,t,e){let i=new hs,s=new st,r=new st,o=new Me,a=new Nc({depthPacking:Rp}),l=new Oc,c={},h=e.maxTextureSize,d={[Fi]:yn,[yn]:Fi,[ke]:ke},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:_v,fragmentShader:Mv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new H(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let m=this.type;this.render=function(S,R,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let b=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Qn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let D=m!==hi&&this.type===hi,B=m===hi&&this.type!==hi;for(let $=0,V=S.length;$<V;$++){let ht=S[$],X=ht.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ut=X.getFrameExtents();if(s.multiply(ut),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,X.mapSize.y=r.y)),X.map===null||D===!0||B===!0){let xt=this.type!==hi?{minFilter:zn,magFilter:zn}:{};X.map!==null&&X.map.dispose(),X.map=new fn(s.x,s.y,xt),X.map.texture.name=ht.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let vt=X.getViewportCount();for(let xt=0;xt<vt;xt++){let Ht=X.getViewport(xt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),k.viewport(o),X.updateMatrices(ht,xt),i=X.getFrustum(),v(R,I,X.camera,ht,this.type)}X.isPointLightShadow!==!0&&this.type===hi&&x(X,I),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(b,M,L)};function x(S,R){let I=t.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new fn(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,I,f,y,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,I,u,y,null)}function _(S,R,I,b){let M=null,L=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=M.uuid,D=R.uuid,B=c[k];B===void 0&&(B={},c[k]=B);let $=B[D];$===void 0&&($=M.clone(),B[D]=$,R.addEventListener("dispose",w)),M=$}if(M.visible=R.visible,M.wireframe=R.wireframe,b===hi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=n.properties.get(M);k.light=I}return M}function v(S,R,I,b,M){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===hi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let D=t.update(S),B=S.material;if(Array.isArray(B)){let $=D.groups;for(let V=0,ht=$.length;V<ht;V++){let X=$[V],ut=B[X.materialIndex];if(ut&&ut.visible){let vt=_(S,ut,b,M);S.onBeforeShadow(n,S,R,I,D,vt,X),n.renderBufferDirect(I,null,D,vt,S,X),S.onAfterShadow(n,S,R,I,D,vt,X)}}}else if(B.visible){let $=_(S,B,b,M);S.onBeforeShadow(n,S,R,I,D,$,null),n.renderBufferDirect(I,null,D,$,S,null),S.onAfterShadow(n,S,R,I,D,$,null)}}let k=S.children;for(let D=0,B=k.length;D<B;D++)v(k[D],R,I,b,M)}function w(S){S.target.removeEventListener("dispose",w);for(let I in c){let b=c[I],M=S.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Ev={[zl]:Gl,[Vl]:Yl,[Wl]:ql,[qs]:Xl,[Gl]:zl,[Yl]:Vl,[ql]:Wl,[Xl]:qs};function wv(n,t){function e(){let U=!1,Tt=new Me,Z=null,rt=new Me(0,0,0,0);return{setMask:function(Pt){Z!==Pt&&!U&&(n.colorMask(Pt,Pt,Pt,Pt),Z=Pt)},setLocked:function(Pt){U=Pt},setClear:function(Pt,Rt,Kt,Fe,rn){rn===!0&&(Pt*=Fe,Rt*=Fe,Kt*=Fe),Tt.set(Pt,Rt,Kt,Fe),rt.equals(Tt)===!1&&(n.clearColor(Pt,Rt,Kt,Fe),rt.copy(Tt))},reset:function(){U=!1,Z=null,rt.set(-1,0,0,0)}}}function i(){let U=!1,Tt=!1,Z=null,rt=null,Pt=null;return{setReversed:function(Rt){if(Tt!==Rt){let Kt=t.get("EXT_clip_control");Tt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);let Fe=Pt;Pt=null,this.setClear(Fe)}Tt=Rt},getReversed:function(){return Tt},setTest:function(Rt){Rt?z(n.DEPTH_TEST):nt(n.DEPTH_TEST)},setMask:function(Rt){Z!==Rt&&!U&&(n.depthMask(Rt),Z=Rt)},setFunc:function(Rt){if(Tt&&(Rt=Ev[Rt]),rt!==Rt){switch(Rt){case zl:n.depthFunc(n.NEVER);break;case Gl:n.depthFunc(n.ALWAYS);break;case Vl:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case Wl:n.depthFunc(n.EQUAL);break;case Xl:n.depthFunc(n.GEQUAL);break;case Yl:n.depthFunc(n.GREATER);break;case ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=Rt}},setLocked:function(Rt){U=Rt},setClear:function(Rt){Pt!==Rt&&(Tt&&(Rt=1-Rt),n.clearDepth(Rt),Pt=Rt)},reset:function(){U=!1,Z=null,rt=null,Pt=null,Tt=!1}}}function s(){let U=!1,Tt=null,Z=null,rt=null,Pt=null,Rt=null,Kt=null,Fe=null,rn=null;return{setTest:function(ye){U||(ye?z(n.STENCIL_TEST):nt(n.STENCIL_TEST))},setMask:function(ye){Tt!==ye&&!U&&(n.stencilMask(ye),Tt=ye)},setFunc:function(ye,Un,ii){(Z!==ye||rt!==Un||Pt!==ii)&&(n.stencilFunc(ye,Un,ii),Z=ye,rt=Un,Pt=ii)},setOp:function(ye,Un,ii){(Rt!==ye||Kt!==Un||Fe!==ii)&&(n.stencilOp(ye,Un,ii),Rt=ye,Kt=Un,Fe=ii)},setLocked:function(ye){U=ye},setClear:function(ye){rn!==ye&&(n.clearStencil(ye),rn=ye)},reset:function(){U=!1,Tt=null,Z=null,rt=null,Pt=null,Rt=null,Kt=null,Fe=null,rn=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,u=[],g=null,y=!1,p=null,m=null,x=null,_=null,v=null,w=null,S=null,R=new Ft(0,0,0),I=0,b=!1,M=null,L=null,k=null,D=null,B=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ht=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ht>=1):X.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ht>=2);let ut=null,vt={},xt=n.getParameter(n.SCISSOR_BOX),Ht=n.getParameter(n.VIEWPORT),Yt=new Me().fromArray(xt),K=new Me().fromArray(Ht);function F(U,Tt,Z,rt){let Pt=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(U,Rt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Kt=0;Kt<Z;Kt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(Tt+Kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return Rt}let it={};it[n.TEXTURE_2D]=F(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=F(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=F(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=F(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),z(n.DEPTH_TEST),o.setFunc(qs),tt(!1),mt(ad),z(n.CULL_FACE),C(Qn);function z(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function nt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function gt(U,Tt){return d[U]!==Tt?(n.bindFramebuffer(U,Tt),d[U]=Tt,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Tt),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function _t(U,Tt){let Z=u,rt=!1;if(U){Z=f.get(Tt),Z===void 0&&(Z=[],f.set(Tt,Z));let Pt=U.textures;if(Z.length!==Pt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Kt=Pt.length;Rt<Kt;Rt++)Z[Rt]=n.COLOR_ATTACHMENT0+Rt;Z.length=Pt.length,rt=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,rt=!0);rt&&n.drawBuffers(Z)}function Wt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}let Q={[os]:n.FUNC_ADD,[op]:n.FUNC_SUBTRACT,[ap]:n.FUNC_REVERSE_SUBTRACT};Q[lp]=n.MIN,Q[cp]=n.MAX;let W={[hp]:n.ZERO,[dp]:n.ONE,[up]:n.SRC_COLOR,[Fl]:n.SRC_ALPHA,[vp]:n.SRC_ALPHA_SATURATE,[gp]:n.DST_COLOR,[pp]:n.DST_ALPHA,[fp]:n.ONE_MINUS_SRC_COLOR,[Bl]:n.ONE_MINUS_SRC_ALPHA,[yp]:n.ONE_MINUS_DST_COLOR,[mp]:n.ONE_MINUS_DST_ALPHA,[xp]:n.CONSTANT_COLOR,[_p]:n.ONE_MINUS_CONSTANT_COLOR,[Mp]:n.CONSTANT_ALPHA,[bp]:n.ONE_MINUS_CONSTANT_ALPHA};function C(U,Tt,Z,rt,Pt,Rt,Kt,Fe,rn,ye){if(U===Qn){y===!0&&(nt(n.BLEND),y=!1);return}if(y===!1&&(z(n.BLEND),y=!0),U!==rp){if(U!==p||ye!==b){if((m!==os||v!==os)&&(n.blendEquation(n.FUNC_ADD),m=os,v=os),ye)switch(U){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case En:n.blendFunc(n.ONE,n.ONE);break;case ld:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case En:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ld:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,_=null,w=null,S=null,R.set(0,0,0),I=0,p=U,b=ye}return}Pt=Pt||Tt,Rt=Rt||Z,Kt=Kt||rt,(Tt!==m||Pt!==v)&&(n.blendEquationSeparate(Q[Tt],Q[Pt]),m=Tt,v=Pt),(Z!==x||rt!==_||Rt!==w||Kt!==S)&&(n.blendFuncSeparate(W[Z],W[rt],W[Rt],W[Kt]),x=Z,_=rt,w=Rt,S=Kt),(Fe.equals(R)===!1||rn!==I)&&(n.blendColor(Fe.r,Fe.g,Fe.b,rn),R.copy(Fe),I=rn),p=U,b=!1}function lt(U,Tt){U.side===ke?nt(n.CULL_FACE):z(n.CULL_FACE);let Z=U.side===yn;Tt&&(Z=!Z),tt(Z),U.blending===Vs&&U.transparent===!1?C(Qn):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let rt=U.stencilWrite;a.setTest(rt),rt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),wt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?z(n.SAMPLE_ALPHA_TO_COVERAGE):nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function mt(U){U!==ip?(z(n.CULL_FACE),U!==L&&(U===ad?n.cullFace(n.BACK):U===sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):nt(n.CULL_FACE),L=U}function dt(U){U!==k&&(V&&n.lineWidth(U),k=U)}function wt(U,Tt,Z){U?(z(n.POLYGON_OFFSET_FILL),(D!==Tt||B!==Z)&&(n.polygonOffset(Tt,Z),D=Tt,B=Z)):nt(n.POLYGON_OFFSET_FILL)}function bt(U){U?z(n.SCISSOR_TEST):nt(n.SCISSOR_TEST)}function P(U){U===void 0&&(U=n.TEXTURE0+$-1),ut!==U&&(n.activeTexture(U),ut=U)}function E(U,Tt,Z){Z===void 0&&(ut===null?Z=n.TEXTURE0+$-1:Z=ut);let rt=vt[Z];rt===void 0&&(rt={type:void 0,texture:void 0},vt[Z]=rt),(rt.type!==U||rt.texture!==Tt)&&(ut!==Z&&(n.activeTexture(Z),ut=Z),n.bindTexture(U,Tt||it[U]),rt.type=U,rt.texture=Tt)}function G(){let U=vt[ut];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(U){Yt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Yt.copy(U))}function kt(U){K.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function le(U,Tt){let Z=c.get(Tt);Z===void 0&&(Z=new WeakMap,c.set(Tt,Z));let rt=Z.get(U);rt===void 0&&(rt=n.getUniformBlockIndex(Tt,U.name),Z.set(U,rt))}function Qt(U,Tt){let rt=c.get(Tt).get(U);l.get(Tt)!==rt&&(n.uniformBlockBinding(Tt,rt,U.__bindingPointIndex),l.set(Tt,rt))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ut=null,vt={},d={},f=new WeakMap,u=[],g=null,y=!1,p=null,m=null,x=null,_=null,v=null,w=null,S=null,R=new Ft(0,0,0),I=0,b=!1,M=null,L=null,k=null,D=null,B=null,Yt.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:z,disable:nt,bindFramebuffer:gt,drawBuffers:_t,useProgram:Wt,setBlending:C,setMaterial:lt,setFlipSided:tt,setCullFace:mt,setLineWidth:dt,setPolygonOffset:wt,setScissorTest:bt,activeTexture:P,bindTexture:E,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:at,texImage2D:Lt,texImage3D:Xt,updateUBOMapping:le,uniformBlockBinding:Qt,texStorage2D:re,texStorage3D:ft,texSubImage2D:et,texSubImage3D:Dt,compressedTexSubImage2D:St,compressedTexSubImage3D:It,scissor:qt,viewport:kt,reset:be}}function su(n,t,e,i){let s=Sv(i);switch(e){case Eu:return n*t;case Su:return n*t;case Tu:return n*t*2;case Au:return n*t/s.components*s.byteLength;case xh:return n*t/s.components*s.byteLength;case Ru:return n*t*2/s.components*s.byteLength;case _h:return n*t*2/s.components*s.byteLength;case wu:return n*t*3/s.components*s.byteLength;case Bn:return n*t*4/s.components*s.byteLength;case Mh:return n*t*4/s.components*s.byteLength;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Io:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jl:case tc:return Math.max(n,16)*Math.max(t,8)/4;case Jl:case Ql:return Math.max(n,8)*Math.max(t,8)/2;case ec:case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case yc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ko:case vc:case xc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Cu:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Mc:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sv(n){switch(n){case vi:case _u:return{byteLength:1,components:1};case Dr:case Mu:case Wn:return{byteLength:2,components:1};case yh:case vh:return{byteLength:2,components:4};case cs:case gh:case fi:return{byteLength:4,components:1};case bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Tv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,d,f=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return u?new OffscreenCanvas(P,E):Oo("canvas")}function y(P,E,G){let J=1,at=bt(P);if((at.width>G||at.height>G)&&(J=G/Math.max(at.width,at.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let et=Math.floor(J*at.width),Dt=Math.floor(J*at.height);d===void 0&&(d=g(et,Dt));let St=E?g(et,Dt):d;return St.width=et,St.height=Dt,St.getContext("2d").drawImage(P,0,0,et,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+et+"x"+Dt+")."),St}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(P,E,G,J,at=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=E;if(E===n.RED&&(G===n.FLOAT&&(et=n.R32F),G===n.HALF_FLOAT&&(et=n.R16F),G===n.UNSIGNED_BYTE&&(et=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.R8UI),G===n.UNSIGNED_SHORT&&(et=n.R16UI),G===n.UNSIGNED_INT&&(et=n.R32UI),G===n.BYTE&&(et=n.R8I),G===n.SHORT&&(et=n.R16I),G===n.INT&&(et=n.R32I)),E===n.RG&&(G===n.FLOAT&&(et=n.RG32F),G===n.HALF_FLOAT&&(et=n.RG16F),G===n.UNSIGNED_BYTE&&(et=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.RG8UI),G===n.UNSIGNED_SHORT&&(et=n.RG16UI),G===n.UNSIGNED_INT&&(et=n.RG32UI),G===n.BYTE&&(et=n.RG8I),G===n.SHORT&&(et=n.RG16I),G===n.INT&&(et=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.RGB8UI),G===n.UNSIGNED_SHORT&&(et=n.RGB16UI),G===n.UNSIGNED_INT&&(et=n.RGB32UI),G===n.BYTE&&(et=n.RGB8I),G===n.SHORT&&(et=n.RGB16I),G===n.INT&&(et=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),G===n.UNSIGNED_INT&&(et=n.RGBA32UI),G===n.BYTE&&(et=n.RGBA8I),G===n.SHORT&&(et=n.RGBA16I),G===n.INT&&(et=n.RGBA32I)),E===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),E===n.RGBA){let Dt=at?da:ae.getTransfer(J);G===n.FLOAT&&(et=n.RGBA32F),G===n.HALF_FLOAT&&(et=n.RGBA16F),G===n.UNSIGNED_BYTE&&(et=Dt===me?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(P,E){let G;return P?E===null||E===cs||E===Ks?G=n.DEPTH24_STENCIL8:E===fi?G=n.DEPTH32F_STENCIL8:E===Dr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===cs||E===Ks?G=n.DEPTH_COMPONENT24:E===fi?G=n.DEPTH_COMPONENT32F:E===Dr&&(G=n.DEPTH_COMPONENT16),G}function w(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==zn&&P.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function S(P){let E=P.target;E.removeEventListener("dispose",S),I(E),E.isVideoTexture&&h.delete(E)}function R(P){let E=P.target;E.removeEventListener("dispose",R),M(E)}function I(P){let E=i.get(P);if(E.__webglInit===void 0)return;let G=P.source,J=f.get(G);if(J){let at=J[E.__cacheKey];at.usedTimes--,at.usedTimes===0&&b(P),Object.keys(J).length===0&&f.delete(G)}i.remove(P)}function b(P){let E=i.get(P);n.deleteTexture(E.__webglTexture);let G=P.source,J=f.get(G);delete J[E.__cacheKey],o.memory.textures--}function M(P){let E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let at=0;at<E.__webglFramebuffer[J].length;at++)n.deleteFramebuffer(E.__webglFramebuffer[J][at]);else n.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)n.deleteFramebuffer(E.__webglFramebuffer[J]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=P.textures;for(let J=0,at=G.length;J<at;J++){let et=i.get(G[J]);et.__webglTexture&&(n.deleteTexture(et.__webglTexture),o.memory.textures--),i.remove(G[J])}i.remove(P)}let L=0;function k(){L=0}function D(){let P=L;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function B(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function $(P,E){let G=i.get(P);if(P.isVideoTexture&&dt(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,P,E);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function V(P,E){let G=i.get(P);if(P.version>0&&G.__version!==P.version){K(G,P,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function ht(P,E){let G=i.get(P);if(P.version>0&&G.__version!==P.version){K(G,P,E);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function X(P,E){let G=i.get(P);if(P.version>0&&G.__version!==P.version){F(G,P,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}let ut={[yi]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[Kl]:n.MIRRORED_REPEAT},vt={[zn]:n.NEAREST,[Tp]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},xt={[Pp]:n.NEVER,[Np]:n.ALWAYS,[Ip]:n.LESS,[Iu]:n.LEQUAL,[Lp]:n.EQUAL,[Up]:n.GEQUAL,[kp]:n.GREATER,[Dp]:n.NOTEQUAL};function Ht(P,E){if(E.type===fi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===il||E.magFilter===jr||E.magFilter===ls||E.minFilter===jn||E.minFilter===il||E.minFilter===jr||E.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ut[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ut[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ut[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,vt[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,xt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zn||E.minFilter!==jr&&E.minFilter!==ls||E.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Yt(P,E){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",S));let J=E.source,at=f.get(J);at===void 0&&(at={},f.set(J,at));let et=B(E);if(et!==P.__cacheKey){at[et]===void 0&&(at[et]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),at[et].usedTimes++;let Dt=at[P.__cacheKey];Dt!==void 0&&(at[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&b(E)),P.__cacheKey=et,P.__webglTexture=at[et].texture}return G}function K(P,E,G){let J=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=n.TEXTURE_3D);let at=Yt(P,E),et=E.source;e.bindTexture(J,P.__webglTexture,n.TEXTURE0+G);let Dt=i.get(et);if(et.version!==Dt.__version||at===!0){e.activeTexture(n.TEXTURE0+G);let St=ae.getPrimaries(ae.workingColorSpace),It=E.colorSpace===Ui?null:ae.getPrimaries(E.colorSpace),re=E.colorSpace===Ui||St===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ft=y(E.image,!1,s.maxTextureSize);ft=wt(E,ft);let Lt=r.convert(E.format,E.colorSpace),Xt=r.convert(E.type),qt=_(E.internalFormat,Lt,Xt,E.colorSpace,E.isVideoTexture);Ht(J,E);let kt,le=E.mipmaps,Qt=E.isVideoTexture!==!0,be=Dt.__version===void 0||at===!0,U=et.dataReady,Tt=w(E,ft);if(E.isDepthTexture)qt=v(E.format===Js,E.type),be&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,qt,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,qt,ft.width,ft.height,0,Lt,Xt,null));else if(E.isDataTexture)if(le.length>0){Qt&&be&&e.texStorage2D(n.TEXTURE_2D,Tt,qt,le[0].width,le[0].height);for(let Z=0,rt=le.length;Z<rt;Z++)kt=le[Z],Qt?U&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,kt.width,kt.height,Lt,Xt,kt.data):e.texImage2D(n.TEXTURE_2D,Z,qt,kt.width,kt.height,0,Lt,Xt,kt.data);E.generateMipmaps=!1}else Qt?(be&&e.texStorage2D(n.TEXTURE_2D,Tt,qt,ft.width,ft.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,Lt,Xt,ft.data)):e.texImage2D(n.TEXTURE_2D,0,qt,ft.width,ft.height,0,Lt,Xt,ft.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Qt&&be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,qt,le[0].width,le[0].height,ft.depth);for(let Z=0,rt=le.length;Z<rt;Z++)if(kt=le[Z],E.format!==Bn)if(Lt!==null)if(Qt){if(U)if(E.layerUpdates.size>0){let Pt=su(kt.width,kt.height,E.format,E.type);for(let Rt of E.layerUpdates){let Kt=kt.data.subarray(Rt*Pt/kt.data.BYTES_PER_ELEMENT,(Rt+1)*Pt/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Rt,kt.width,kt.height,1,Lt,Kt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,kt.width,kt.height,ft.depth,Lt,kt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,qt,kt.width,kt.height,ft.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,kt.width,kt.height,ft.depth,Lt,Xt,kt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,qt,kt.width,kt.height,ft.depth,0,Lt,Xt,kt.data)}else{Qt&&be&&e.texStorage2D(n.TEXTURE_2D,Tt,qt,le[0].width,le[0].height);for(let Z=0,rt=le.length;Z<rt;Z++)kt=le[Z],E.format!==Bn?Lt!==null?Qt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,kt.width,kt.height,Lt,kt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,qt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?U&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,kt.width,kt.height,Lt,Xt,kt.data):e.texImage2D(n.TEXTURE_2D,Z,qt,kt.width,kt.height,0,Lt,Xt,kt.data)}else if(E.isDataArrayTexture)if(Qt){if(be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,qt,ft.width,ft.height,ft.depth),U)if(E.layerUpdates.size>0){let Z=su(ft.width,ft.height,E.format,E.type);for(let rt of E.layerUpdates){let Pt=ft.data.subarray(rt*Z/ft.data.BYTES_PER_ELEMENT,(rt+1)*Z/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,ft.width,ft.height,1,Lt,Xt,Pt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Lt,Xt,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,qt,ft.width,ft.height,ft.depth,0,Lt,Xt,ft.data);else if(E.isData3DTexture)Qt?(be&&e.texStorage3D(n.TEXTURE_3D,Tt,qt,ft.width,ft.height,ft.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Lt,Xt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,qt,ft.width,ft.height,ft.depth,0,Lt,Xt,ft.data);else if(E.isFramebufferTexture){if(be)if(Qt)e.texStorage2D(n.TEXTURE_2D,Tt,qt,ft.width,ft.height);else{let Z=ft.width,rt=ft.height;for(let Pt=0;Pt<Tt;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,qt,Z,rt,0,Lt,Xt,null),Z>>=1,rt>>=1}}else if(le.length>0){if(Qt&&be){let Z=bt(le[0]);e.texStorage2D(n.TEXTURE_2D,Tt,qt,Z.width,Z.height)}for(let Z=0,rt=le.length;Z<rt;Z++)kt=le[Z],Qt?U&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Lt,Xt,kt):e.texImage2D(n.TEXTURE_2D,Z,qt,Lt,Xt,kt);E.generateMipmaps=!1}else if(Qt){if(be){let Z=bt(ft);e.texStorage2D(n.TEXTURE_2D,Tt,qt,Z.width,Z.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Lt,Xt,ft)}else e.texImage2D(n.TEXTURE_2D,0,qt,Lt,Xt,ft);p(E)&&m(J),Dt.__version=et.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function F(P,E,G){if(E.image.length!==6)return;let J=Yt(P,E),at=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);let et=i.get(at);if(at.version!==et.__version||J===!0){e.activeTexture(n.TEXTURE0+G);let Dt=ae.getPrimaries(ae.workingColorSpace),St=E.colorSpace===Ui?null:ae.getPrimaries(E.colorSpace),It=E.colorSpace===Ui||Dt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let re=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let rt=0;rt<6;rt++)!re&&!ft?Lt[rt]=y(E.image[rt],!0,s.maxCubemapSize):Lt[rt]=ft?E.image[rt].image:E.image[rt],Lt[rt]=wt(E,Lt[rt]);let Xt=Lt[0],qt=r.convert(E.format,E.colorSpace),kt=r.convert(E.type),le=_(E.internalFormat,qt,kt,E.colorSpace),Qt=E.isVideoTexture!==!0,be=et.__version===void 0||J===!0,U=at.dataReady,Tt=w(E,Xt);Ht(n.TEXTURE_CUBE_MAP,E);let Z;if(re){Qt&&be&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,le,Xt.width,Xt.height);for(let rt=0;rt<6;rt++){Z=Lt[rt].mipmaps;for(let Pt=0;Pt<Z.length;Pt++){let Rt=Z[Pt];E.format!==Bn?qt!==null?Qt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,Rt.width,Rt.height,qt,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,le,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,Rt.width,Rt.height,qt,kt,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,le,Rt.width,Rt.height,0,qt,kt,Rt.data)}}}else{if(Z=E.mipmaps,Qt&&be){Z.length>0&&Tt++;let rt=bt(Lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,le,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ft){Qt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Lt[rt].width,Lt[rt].height,qt,kt,Lt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,le,Lt[rt].width,Lt[rt].height,0,qt,kt,Lt[rt].data);for(let Pt=0;Pt<Z.length;Pt++){let Kt=Z[Pt].image[rt].image;Qt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,Kt.width,Kt.height,qt,kt,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,le,Kt.width,Kt.height,0,qt,kt,Kt.data)}}else{Qt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,qt,kt,Lt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,le,qt,kt,Lt[rt]);for(let Pt=0;Pt<Z.length;Pt++){let Rt=Z[Pt];Qt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,qt,kt,Rt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,le,qt,kt,Rt.image[rt])}}}p(E)&&m(n.TEXTURE_CUBE_MAP),et.__version=at.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function it(P,E,G,J,at,et){let Dt=r.convert(G.format,G.colorSpace),St=r.convert(G.type),It=_(G.internalFormat,Dt,St,G.colorSpace),re=i.get(E),ft=i.get(G);if(ft.__renderTarget=E,!re.__hasExternalTextures){let Lt=Math.max(1,E.width>>et),Xt=Math.max(1,E.height>>et);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,et,It,Lt,Xt,E.depth,0,Dt,St,null):e.texImage2D(at,et,It,Lt,Xt,0,Dt,St,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),mt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,at,ft.__webglTexture,0,tt(E)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,at,ft.__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function z(P,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){let J=E.depthTexture,at=J&&J.isDepthTexture?J.type:null,et=v(E.stencilBuffer,at),Dt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=tt(E);mt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,et,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,et,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,et,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,P)}else{let J=E.textures;for(let at=0;at<J.length;at++){let et=J[at],Dt=r.convert(et.format,et.colorSpace),St=r.convert(et.type),It=_(et.internalFormat,Dt,St,et.colorSpace),re=tt(E);G&&mt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,It,E.width,E.height):mt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,It,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,It,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);let at=J.__webglTexture,et=tt(E);if(E.depthTexture.format===Ws)mt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(E.depthTexture.format===Js)mt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function gt(P){let E=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let at=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",at)};J.addEventListener("dispose",at),E.__depthDisposeCallback=at}E.__boundDepthTexture=J}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");nt(E.__webglFramebuffer,P)}else if(G){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=n.createRenderbuffer(),z(E.__webglDepthbuffer[J],P,!1);else{let at=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,et)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),z(E.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(P,E,G){let J=i.get(P);E!==void 0&&it(J.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&gt(P)}function Wt(P){let E=P.texture,G=i.get(P),J=i.get(E);P.addEventListener("dispose",R);let at=P.textures,et=P.isWebGLCubeRenderTarget===!0,Dt=at.length>1;if(Dt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=E.version,o.memory.textures++),et){G.__webglFramebuffer=[];for(let St=0;St<6;St++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[St]=[];for(let It=0;It<E.mipmaps.length;It++)G.__webglFramebuffer[St][It]=n.createFramebuffer()}else G.__webglFramebuffer[St]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let St=0;St<E.mipmaps.length;St++)G.__webglFramebuffer[St]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let St=0,It=at.length;St<It;St++){let re=i.get(at[St]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&mt(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let St=0;St<at.length;St++){let It=at[St];G.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[St]);let re=r.convert(It.format,It.colorSpace),ft=r.convert(It.type),Lt=_(It.internalFormat,re,ft,It.colorSpace,P.isXRRenderTarget===!0),Xt=tt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,Lt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,G.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),z(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,E);for(let St=0;St<6;St++)if(E.mipmaps&&E.mipmaps.length>0)for(let It=0;It<E.mipmaps.length;It++)it(G.__webglFramebuffer[St][It],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,It);else it(G.__webglFramebuffer[St],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);p(E)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let St=0,It=at.length;St<It;St++){let re=at[St],ft=i.get(re);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),Ht(n.TEXTURE_2D,re),it(G.__webglFramebuffer,P,re,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,0),p(re)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let St=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(St=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,J.__webglTexture),Ht(St,E),E.mipmaps&&E.mipmaps.length>0)for(let It=0;It<E.mipmaps.length;It++)it(G.__webglFramebuffer[It],P,E,n.COLOR_ATTACHMENT0,St,It);else it(G.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,St,0);p(E)&&m(St),e.unbindTexture()}P.depthBuffer&&gt(P)}function Q(P){let E=P.textures;for(let G=0,J=E.length;G<J;G++){let at=E[G];if(p(at)){let et=x(P),Dt=i.get(at).__webglTexture;e.bindTexture(et,Dt),m(et),e.unbindTexture()}}}let W=[],C=[];function lt(P){if(P.samples>0){if(mt(P)===!1){let E=P.textures,G=P.width,J=P.height,at=n.COLOR_BUFFER_BIT,et=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(P),St=E.length>1;if(St)for(let It=0;It<E.length;It++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let It=0;It<E.length;It++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),St){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[It]);let re=i.get(E[It]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,G,J,0,0,G,J,at,n.NEAREST),l===!0&&(W.length=0,C.length=0,W.push(n.COLOR_ATTACHMENT0+It),P.depthBuffer&&P.resolveDepthBuffer===!1&&(W.push(et),C.push(et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,W))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let It=0;It<E.length;It++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[It]);let re=i.get(E[It]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,re,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function tt(P){return Math.min(s.maxSamples,P.samples)}function mt(P){let E=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function dt(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function wt(P,E){let G=P.colorSpace,J=P.format,at=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==lr&&G!==Ui&&(ae.getTransfer(G)===me?(J!==Bn||at!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function bt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=ht,this.setTextureCube=X,this.rebindTextures=_t,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=mt}function Av(n,t){function e(i,s=Ui){let r,o=ae.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===yh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_u)return n.BYTE;if(i===Mu)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===gh)return n.INT;if(i===cs)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===Eu)return n.ALPHA;if(i===wu)return n.RGB;if(i===Bn)return n.RGBA;if(i===Su)return n.LUMINANCE;if(i===Tu)return n.LUMINANCE_ALPHA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===Js)return n.DEPTH_STENCIL;if(i===Au)return n.RED;if(i===xh)return n.RED_INTEGER;if(i===Ru)return n.RG;if(i===_h)return n.RG_INTEGER;if(i===Mh)return n.RGBA_INTEGER;if(i===Co||i===Po||i===Io||i===Lo)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jl||i===jl||i===Ql||i===tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ec||i===nc||i===ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ec||i===nc)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ic)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===dc||i===uc||i===fc||i===pc||i===mc||i===gc||i===yc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ko||i===vc||i===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ko)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cu||i===_c||i===Mc||i===bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Hc=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pt=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rv={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new pt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pv=`
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

}`,Fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new wn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ze({vertexShader:Cv,fragmentShader:Pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new H(new Gt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends Bi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null,y=new Fc,p=e.getContextAttributes(),m=null,x=null,_=[],v=[],w=new st,S=null,R=new qe;R.viewport=new Me;let I=new qe;I.viewport=new Me;let b=[R,I],M=new Hc,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let F=_[K];return F===void 0&&(F=new Ir,_[K]=F),F.getTargetRaySpace()},this.getControllerGrip=function(K){let F=_[K];return F===void 0&&(F=new Ir,_[K]=F),F.getGripSpace()},this.getHand=function(K){let F=_[K];return F===void 0&&(F=new Ir,_[K]=F),F.getHandSpace()};function D(K){let F=v.indexOf(K.inputSource);if(F===-1)return;let it=_[F];it!==void 0&&(it.update(K.inputSource,K.frame,c||o),it.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",$);for(let K=0;K<_.length;K++){let F=v[K];F!==null&&(v[K]=null,_[K].disconnect(F))}L=null,k=null,y.reset(),t.setRenderTarget(m),u=null,f=null,d=null,s=null,x=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",B),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){let F={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,F),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new fn(u.framebufferWidth,u.framebufferHeight,{format:Bn,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let F=null,it=null,z=null;p.depth&&(z=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=p.stencil?Js:Ws,it=p.stencil?Ks:cs);let nt={colorFormat:e.RGBA8,depthFormat:z,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new fn(f.textureWidth,f.textureHeight,{format:Bn,type:vi,depthTexture:new qo(f.textureWidth,f.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(K){for(let F=0;F<K.removed.length;F++){let it=K.removed[F],z=v.indexOf(it);z>=0&&(v[z]=null,_[z].disconnect(it))}for(let F=0;F<K.added.length;F++){let it=K.added[F],z=v.indexOf(it);if(z===-1){for(let gt=0;gt<_.length;gt++)if(gt>=v.length){v.push(it),z=gt;break}else if(v[gt]===null){v[gt]=it,z=gt;break}if(z===-1)break}let nt=_[z];nt&&nt.connect(it)}}let V=new A,ht=new A;function X(K,F,it){V.setFromMatrixPosition(F.matrixWorld),ht.setFromMatrixPosition(it.matrixWorld);let z=V.distanceTo(ht),nt=F.projectionMatrix.elements,gt=it.projectionMatrix.elements,_t=nt[14]/(nt[10]-1),Wt=nt[14]/(nt[10]+1),Q=(nt[9]+1)/nt[5],W=(nt[9]-1)/nt[5],C=(nt[8]-1)/nt[0],lt=(gt[8]+1)/gt[0],tt=_t*C,mt=_t*lt,dt=z/(-C+lt),wt=dt*-C;if(F.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(wt),K.translateZ(dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),nt[10]===-1)K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{let bt=_t+dt,P=Wt+dt,E=tt-wt,G=mt+(z-wt),J=Q*Wt/P*bt,at=W*Wt/P*bt;K.projectionMatrix.makePerspective(E,G,J,at,bt,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ut(K,F){F===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(F.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let F=K.near,it=K.far;y.texture!==null&&(y.depthNear>0&&(F=y.depthNear),y.depthFar>0&&(it=y.depthFar)),M.near=I.near=R.near=F,M.far=I.far=R.far=it,(L!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),R.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;let z=K.parent,nt=M.cameras;ut(M,z);for(let gt=0;gt<nt.length;gt++)ut(nt[gt],z);nt.length===2?X(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),vt(K,M,z)};function vt(K,F,it){it===null?K.matrix.copy(F.matrixWorld):(K.matrix.copy(it.matrixWorld),K.matrix.invert(),K.matrix.multiply(F.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=No*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let xt=null;function Ht(K,F){if(h=F.getViewerPose(c||o),g=F,h!==null){let it=h.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let z=!1;it.length!==M.cameras.length&&(M.cameras.length=0,z=!0);for(let gt=0;gt<it.length;gt++){let _t=it[gt],Wt=null;if(u!==null)Wt=u.getViewport(_t);else{let W=d.getViewSubImage(f,_t);Wt=W.viewport,gt===0&&(t.setRenderTargetTextures(x,W.colorTexture,f.ignoreDepthValues?void 0:W.depthStencilTexture),t.setRenderTarget(x))}let Q=b[gt];Q===void 0&&(Q=new qe,Q.layers.enable(gt),Q.viewport=new Me,b[gt]=Q),Q.matrix.fromArray(_t.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(_t.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),gt===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),z===!0&&M.cameras.push(Q)}let nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")){let gt=d.getDepthInformation(it[0]);gt&&gt.isValid&&gt.texture&&y.init(t,gt,s.renderState)}}for(let it=0;it<_.length;it++){let z=v[it],nt=_[it];z!==null&&nt!==void 0&&nt.update(z,F,c||o)}xt&&xt(K,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),g=null}let Yt=new Uu;Yt.setAnimationLoop(Ht),this.setAnimationLoop=function(K){xt=K},this.dispose=function(){}}},ss=new vn,Iv=new ce;function Lv(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Du(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&u(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===yn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===yn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,v=x.envMapRotation;_&&(p.envMap.value=_,ss.copy(v),ss.x*=-1,ss.y*=-1,ss.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),p.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(ss)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kv(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let v=_.program;i.uniformBlockBinding(x,v)}function c(x,_){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",p));let w=_.program;i.updateUBOMapping(x,w);let S=t.render.frame;r[x.id]!==S&&(f(x),r[x.id]=S)}function h(x){let _=d();x.__bindingPointIndex=_;let v=n.createBuffer(),w=x.__size,S=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,w,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let _=s[x.id],v=x.uniforms,w=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,R=v.length;S<R;S++){let I=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,M=I.length;b<M;b++){let L=I[b];if(u(L,S,b,w)===!0){let k=L.__offset,D=Array.isArray(L.value)?L.value:[L.value],B=0;for(let $=0;$<D.length;$++){let V=D[$],ht=y(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,k+B,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,B),B+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(x,_,v,w){let S=x.value,R=_+"_"+v;if(w[R]===void 0)return typeof S=="number"||typeof S=="boolean"?w[R]=S:w[R]=S.clone(),!0;{let I=w[R];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return w[R]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function g(x){let _=x.uniforms,v=0,w=16;for(let R=0,I=_.length;R<I;R++){let b=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,L=b.length;M<L;M++){let k=b[M],D=Array.isArray(k.value)?k.value:[k.value];for(let B=0,$=D.length;B<$;B++){let V=D[B],ht=y(V),X=v%w,ut=X%ht.boundary,vt=X+ut;v+=ut,vt!==0&&w-vt<ht.storage&&(v+=w-vt),k.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=ht.storage}}}let S=v%w;return S>0&&(v+=w-S),x.__size=v,x.__cache={},this}function y(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){let _=x.target;_.removeEventListener("dispose",p);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var $o=class{constructor(t={}){let{canvas:e=Hp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),y=new Int32Array(4),p=null,m=null,x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Oi,this.toneMappingExposure=1;let v=this,w=!1,S=0,R=0,I=null,b=-1,M=null,L=new Me,k=new Me,D=null,B=new Ft(0),$=0,V=e.width,ht=e.height,X=1,ut=null,vt=null,xt=new Me(0,0,V,ht),Ht=new Me(0,0,V,ht),Yt=!1,K=new hs,F=!1,it=!1,z=new ce,nt=new ce,gt=new A,_t=new Me,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function W(){return I===null?X:1}let C=i;function lt(T,N){return e.getContext(T,N)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ch}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),C===null){let N="webgl2";if(C=lt(N,T),C===null)throw lt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let tt,mt,dt,wt,bt,P,E,G,J,at,et,Dt,St,It,re,ft,Lt,Xt,qt,kt,le,Qt,be,U;function Tt(){tt=new Zg(C),tt.init(),Qt=new Av(C,tt),mt=new Vg(C,tt,t,Qt),dt=new wv(C,tt),mt.reverseDepthBuffer&&f&&dt.buffers.depth.setReversed(!0),wt=new jg(C),bt=new dv,P=new Tv(C,tt,dt,bt,mt,Qt,wt),E=new Xg(v),G=new $g(v),J=new r0(C),be=new zg(C,J),at=new Kg(C,J,wt,be),et=new ty(C,at,J,wt),qt=new Qg(C,mt,P),ft=new Wg(bt),Dt=new hv(v,E,G,tt,mt,be,ft),St=new Lv(v,bt),It=new fv,re=new xv(tt),Xt=new Bg(v,E,G,dt,et,u,l),Lt=new bv(v,et,mt),U=new kv(C,wt,mt,dt),kt=new Gg(C,tt,wt),le=new Jg(C,tt,wt),wt.programs=Dt.programs,v.capabilities=mt,v.extensions=tt,v.properties=bt,v.renderLists=It,v.shadowMap=Lt,v.state=dt,v.info=wt}Tt();let Z=new Bc(v,C);this.xr=Z,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(V,ht,!1))},this.getSize=function(T){return T.set(V,ht)},this.setSize=function(T,N,Y=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,ht=N,e.width=Math.floor(T*X),e.height=Math.floor(N*X),Y===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(V*X,ht*X).floor()},this.setDrawingBufferSize=function(T,N,Y){V=T,ht=N,X=Y,e.width=Math.floor(T*Y),e.height=Math.floor(N*Y),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(xt)},this.setViewport=function(T,N,Y,q){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,N,Y,q),dt.viewport(L.copy(xt).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(Ht)},this.setScissor=function(T,N,Y,q){T.isVector4?Ht.set(T.x,T.y,T.z,T.w):Ht.set(T,N,Y,q),dt.scissor(k.copy(Ht).multiplyScalar(X).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(T){dt.setScissorTest(Yt=T)},this.setOpaqueSort=function(T){ut=T},this.setTransparentSort=function(T){vt=T},this.getClearColor=function(T){return T.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(T=!0,N=!0,Y=!0){let q=0;if(T){let O=!1;if(I!==null){let yt=I.texture.format;O=yt===Mh||yt===_h||yt===xh}if(O){let yt=I.texture.type,Ct=yt===vi||yt===cs||yt===Dr||yt===Ks||yt===yh||yt===vh,Ut=Xt.getClearColor(),Nt=Xt.getClearAlpha(),$t=Ut.r,Jt=Ut.g,Ot=Ut.b;Ct?(g[0]=$t,g[1]=Jt,g[2]=Ot,g[3]=Nt,C.clearBufferuiv(C.COLOR,0,g)):(y[0]=$t,y[1]=Jt,y[2]=Ot,y[3]=Nt,C.clearBufferiv(C.COLOR,0,y))}else q|=C.COLOR_BUFFER_BIT}N&&(q|=C.DEPTH_BUFFER_BIT),Y&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),It.dispose(),re.dispose(),bt.dispose(),E.dispose(),G.dispose(),et.dispose(),be.dispose(),U.dispose(),Dt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Qh),Z.removeEventListener("sessionend",td),ji.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let T=wt.autoReset,N=Lt.enabled,Y=Lt.autoUpdate,q=Lt.needsUpdate,O=Lt.type;Tt(),wt.autoReset=T,Lt.enabled=N,Lt.autoUpdate=Y,Lt.needsUpdate=q,Lt.type=O}function Rt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Kt(T){let N=T.target;N.removeEventListener("dispose",Kt),Fe(N)}function Fe(T){rn(T),bt.remove(T)}function rn(T){let N=bt.get(T).programs;N!==void 0&&(N.forEach(function(Y){Dt.releaseProgram(Y)}),T.isShaderMaterial&&Dt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,Y,q,O,yt){N===null&&(N=Wt);let Ct=O.isMesh&&O.matrixWorld.determinant()<0,Ut=tp(T,N,Y,q,O);dt.setMaterial(q,Ct);let Nt=Y.index,$t=1;if(q.wireframe===!0){if(Nt=at.getWireframeAttribute(Y),Nt===void 0)return;$t=2}let Jt=Y.drawRange,Ot=Y.attributes.position,he=Jt.start*$t,Ee=(Jt.start+Jt.count)*$t;yt!==null&&(he=Math.max(he,yt.start*$t),Ee=Math.min(Ee,(yt.start+yt.count)*$t)),Nt!==null?(he=Math.max(he,0),Ee=Math.min(Ee,Nt.count)):Ot!=null&&(he=Math.max(he,0),Ee=Math.min(Ee,Ot.count));let Te=Ee-he;if(Te<0||Te===1/0)return;be.setup(O,q,Ut,Y,Nt);let gn,fe=kt;if(Nt!==null&&(gn=J.get(Nt),fe=le,fe.setIndex(gn)),O.isMesh)q.wireframe===!0?(dt.setLineWidth(q.wireframeLinewidth*W()),fe.setMode(C.LINES)):fe.setMode(C.TRIANGLES);else if(O.isLine){let Bt=q.linewidth;Bt===void 0&&(Bt=1),dt.setLineWidth(Bt*W()),O.isLineSegments?fe.setMode(C.LINES):O.isLineLoop?fe.setMode(C.LINE_LOOP):fe.setMode(C.LINE_STRIP)}else O.isPoints?fe.setMode(C.POINTS):O.isSprite&&fe.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)fe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))fe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Bt=O._multiDrawStarts,si=O._multiDrawCounts,pe=O._multiDrawCount,Nn=Nt?J.get(Nt).bytesPerElement:1,bs=bt.get(q).currentProgram.getUniforms();for(let _n=0;_n<pe;_n++)bs.setValue(C,"_gl_DrawID",_n),fe.render(Bt[_n]/Nn,si[_n])}else if(O.isInstancedMesh)fe.renderInstances(he,Te,O.count);else if(Y.isInstancedBufferGeometry){let Bt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,si=Math.min(Y.instanceCount,Bt);fe.renderInstances(he,Te,si)}else fe.render(he,Te)};function ye(T,N,Y){T.transparent===!0&&T.side===ke&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,Jr(T,N,Y),T.side=Fi,T.needsUpdate=!0,Jr(T,N,Y),T.side=ke):Jr(T,N,Y)}this.compile=function(T,N,Y=null){Y===null&&(Y=T),m=re.get(Y),m.init(N),_.push(m),Y.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==Y&&T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let q=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let yt=O.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){let Ut=yt[Ct];ye(Ut,Y,O),q.add(Ut)}else ye(yt,Y,O),q.add(yt)}),_.pop(),m=null,q},this.compileAsync=function(T,N,Y=null){let q=this.compile(T,N,Y);return new Promise(O=>{function yt(){if(q.forEach(function(Ct){bt.get(Ct).currentProgram.isReady()&&q.delete(Ct)}),q.size===0){O(T);return}setTimeout(yt,10)}tt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Un=null;function ii(T){Un&&Un(T)}function Qh(){ji.stop()}function td(){ji.start()}let ji=new Uu;ji.setAnimationLoop(ii),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(T){Un=T,Z.setAnimationLoop(T),T===null?ji.stop():ji.start()},Z.addEventListener("sessionstart",Qh),Z.addEventListener("sessionend",td),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,I),m=re.get(T,_.length),m.init(N),_.push(m),nt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(nt),it=this.localClippingEnabled,F=ft.init(this.clippingPlanes,it),p=It.get(T,x.length),p.init(),x.push(p),Z.enabled===!0&&Z.isPresenting===!0){let yt=v.xr.getDepthSensingMesh();yt!==null&&nl(yt,N,-1/0,v.sortObjects)}nl(T,N,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ut,vt),Q=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Q&&Xt.addToRenderList(p,T),this.info.render.frame++,F===!0&&ft.beginShadows();let Y=m.state.shadowsArray;Lt.render(Y,T,N),F===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=p.opaque,O=p.transmissive;if(m.setupLights(),N.isArrayCamera){let yt=N.cameras;if(O.length>0)for(let Ct=0,Ut=yt.length;Ct<Ut;Ct++){let Nt=yt[Ct];nd(q,O,T,Nt)}Q&&Xt.render(T);for(let Ct=0,Ut=yt.length;Ct<Ut;Ct++){let Nt=yt[Ct];ed(p,T,Nt,Nt.viewport)}}else O.length>0&&nd(q,O,T,N),Q&&Xt.render(T),ed(p,T,N);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(v,T,N),be.resetDefaultState(),b=-1,M=null,_.pop(),_.length>0?(m=_[_.length-1],F===!0&&ft.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function nl(T,N,Y,q){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){q&&_t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(nt);let Ct=et.update(T),Ut=T.material;Ut.visible&&p.push(T,Ct,Ut,Y,_t.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){let Ct=et.update(T),Ut=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_t.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),_t.copy(Ct.boundingSphere.center)),_t.applyMatrix4(T.matrixWorld).applyMatrix4(nt)),Array.isArray(Ut)){let Nt=Ct.groups;for(let $t=0,Jt=Nt.length;$t<Jt;$t++){let Ot=Nt[$t],he=Ut[Ot.materialIndex];he&&he.visible&&p.push(T,Ct,he,Y,_t.z,Ot)}}else Ut.visible&&p.push(T,Ct,Ut,Y,_t.z,null)}}let yt=T.children;for(let Ct=0,Ut=yt.length;Ct<Ut;Ct++)nl(yt[Ct],N,Y,q)}function ed(T,N,Y,q){let O=T.opaque,yt=T.transmissive,Ct=T.transparent;m.setupLightsView(Y),F===!0&&ft.setGlobalState(v.clippingPlanes,Y),q&&dt.viewport(L.copy(q)),O.length>0&&Kr(O,N,Y),yt.length>0&&Kr(yt,N,Y),Ct.length>0&&Kr(Ct,N,Y),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function nd(T,N,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new fn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Wn:vi,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let yt=m.state.transmissionRenderTarget[q.id],Ct=q.viewport||L;yt.setSize(Ct.z,Ct.w);let Ut=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(B),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Xt.render(Y);let Nt=v.toneMapping;v.toneMapping=Oi;let $t=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),F===!0&&ft.setGlobalState(v.clippingPlanes,q),Kr(T,Y,q),P.updateMultisampleRenderTarget(yt),P.updateRenderTargetMipmap(yt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ot=0,he=N.length;Ot<he;Ot++){let Ee=N[Ot],Te=Ee.object,gn=Ee.geometry,fe=Ee.material,Bt=Ee.group;if(fe.side===ke&&Te.layers.test(q.layers)){let si=fe.side;fe.side=yn,fe.needsUpdate=!0,id(Te,Y,q,gn,fe,Bt),fe.side=si,fe.needsUpdate=!0,Jt=!0}}Jt===!0&&(P.updateMultisampleRenderTarget(yt),P.updateRenderTargetMipmap(yt))}v.setRenderTarget(Ut),v.setClearColor(B,$),$t!==void 0&&(q.viewport=$t),v.toneMapping=Nt}function Kr(T,N,Y){let q=N.isScene===!0?N.overrideMaterial:null;for(let O=0,yt=T.length;O<yt;O++){let Ct=T[O],Ut=Ct.object,Nt=Ct.geometry,$t=q===null?Ct.material:q,Jt=Ct.group;Ut.layers.test(Y.layers)&&id(Ut,N,Y,Nt,$t,Jt)}}function id(T,N,Y,q,O,yt){T.onBeforeRender(v,N,Y,q,O,yt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,N,Y,q,T,yt),O.transparent===!0&&O.side===ke&&O.forceSinglePass===!1?(O.side=yn,O.needsUpdate=!0,v.renderBufferDirect(Y,N,q,O,T,yt),O.side=Fi,O.needsUpdate=!0,v.renderBufferDirect(Y,N,q,O,T,yt),O.side=ke):v.renderBufferDirect(Y,N,q,O,T,yt),T.onAfterRender(v,N,Y,q,O,yt)}function Jr(T,N,Y){N.isScene!==!0&&(N=Wt);let q=bt.get(T),O=m.state.lights,yt=m.state.shadowsArray,Ct=O.state.version,Ut=Dt.getParameters(T,O.state,yt,N,Y),Nt=Dt.getProgramCacheKey(Ut),$t=q.programs;q.environment=T.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",Kt),$t=new Map,q.programs=$t);let Jt=$t.get(Nt);if(Jt!==void 0){if(q.currentProgram===Jt&&q.lightsStateVersion===Ct)return rd(T,Ut),Jt}else Ut.uniforms=Dt.getUniforms(T),T.onBeforeCompile(Ut,v),Jt=Dt.acquireProgram(Ut,Nt),$t.set(Nt,Jt),q.uniforms=Ut.uniforms;let Ot=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=ft.uniform),rd(T,Ut),q.needsLights=np(T),q.lightsStateVersion=Ct,q.needsLights&&(Ot.ambientLightColor.value=O.state.ambient,Ot.lightProbe.value=O.state.probe,Ot.directionalLights.value=O.state.directional,Ot.directionalLightShadows.value=O.state.directionalShadow,Ot.spotLights.value=O.state.spot,Ot.spotLightShadows.value=O.state.spotShadow,Ot.rectAreaLights.value=O.state.rectArea,Ot.ltc_1.value=O.state.rectAreaLTC1,Ot.ltc_2.value=O.state.rectAreaLTC2,Ot.pointLights.value=O.state.point,Ot.pointLightShadows.value=O.state.pointShadow,Ot.hemisphereLights.value=O.state.hemi,Ot.directionalShadowMap.value=O.state.directionalShadowMap,Ot.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ot.spotShadowMap.value=O.state.spotShadowMap,Ot.spotLightMatrix.value=O.state.spotLightMatrix,Ot.spotLightMap.value=O.state.spotLightMap,Ot.pointShadowMap.value=O.state.pointShadowMap,Ot.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Jt,q.uniformsList=null,Jt}function sd(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=Ys.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function rd(T,N){let Y=bt.get(T);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function tp(T,N,Y,q,O){N.isScene!==!0&&(N=Wt),P.resetTextureUnits();let yt=N.fog,Ct=q.isMeshStandardMaterial?N.environment:null,Ut=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:lr,Nt=(q.isMeshStandardMaterial?G:E).get(q.envMap||Ct),$t=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Jt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ot=!!Y.morphAttributes.position,he=!!Y.morphAttributes.normal,Ee=!!Y.morphAttributes.color,Te=Oi;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Te=v.toneMapping);let gn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fe=gn!==void 0?gn.length:0,Bt=bt.get(q),si=m.state.lights;if(F===!0&&(it===!0||T!==M)){let Rn=T===M&&q.id===b;ft.setState(q,T,Rn)}let pe=!1;q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==si.state.version||Bt.outputColorSpace!==Ut||O.isBatchedMesh&&Bt.batching===!1||!O.isBatchedMesh&&Bt.batching===!0||O.isBatchedMesh&&Bt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Bt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Bt.instancing===!1||!O.isInstancedMesh&&Bt.instancing===!0||O.isSkinnedMesh&&Bt.skinning===!1||!O.isSkinnedMesh&&Bt.skinning===!0||O.isInstancedMesh&&Bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Bt.instancingMorph===!1&&O.morphTexture!==null||Bt.envMap!==Nt||q.fog===!0&&Bt.fog!==yt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ft.numPlanes||Bt.numIntersection!==ft.numIntersection)||Bt.vertexAlphas!==$t||Bt.vertexTangents!==Jt||Bt.morphTargets!==Ot||Bt.morphNormals!==he||Bt.morphColors!==Ee||Bt.toneMapping!==Te||Bt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Bt.__version=q.version);let Nn=Bt.currentProgram;pe===!0&&(Nn=Jr(q,N,O));let bs=!1,_n=!1,xr=!1,Ae=Nn.getUniforms(),Zn=Bt.uniforms;if(dt.useProgram(Nn.program)&&(bs=!0,_n=!0,xr=!0),q.id!==b&&(b=q.id,_n=!0),bs||M!==T){dt.buffers.depth.getReversed()?(z.copy(T.projectionMatrix),Bp(z),zp(z),Ae.setValue(C,"projectionMatrix",z)):Ae.setValue(C,"projectionMatrix",T.projectionMatrix),Ae.setValue(C,"viewMatrix",T.matrixWorldInverse);let Ai=Ae.map.cameraPosition;Ai!==void 0&&Ai.setValue(C,gt.setFromMatrixPosition(T.matrixWorld)),mt.logarithmicDepthBuffer&&Ae.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ae.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,_n=!0,xr=!0)}if(O.isSkinnedMesh){Ae.setOptional(C,O,"bindMatrix"),Ae.setOptional(C,O,"bindMatrixInverse");let Rn=O.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ae.setValue(C,"boneTexture",Rn.boneTexture,P))}O.isBatchedMesh&&(Ae.setOptional(C,O,"batchingTexture"),Ae.setValue(C,"batchingTexture",O._matricesTexture,P),Ae.setOptional(C,O,"batchingIdTexture"),Ae.setValue(C,"batchingIdTexture",O._indirectTexture,P),Ae.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&Ae.setValue(C,"batchingColorTexture",O._colorsTexture,P));let _r=Y.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&qt.update(O,Y,Nn),(_n||Bt.receiveShadow!==O.receiveShadow)&&(Bt.receiveShadow=O.receiveShadow,Ae.setValue(C,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Zn.envMap.value=Nt,Zn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(Zn.envMapIntensity.value=N.environmentIntensity),_n&&(Ae.setValue(C,"toneMappingExposure",v.toneMappingExposure),Bt.needsLights&&ep(Zn,xr),yt&&q.fog===!0&&St.refreshFogUniforms(Zn,yt),St.refreshMaterialUniforms(Zn,q,X,ht,m.state.transmissionRenderTarget[T.id]),Ys.upload(C,sd(Bt),Zn,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ys.upload(C,sd(Bt),Zn,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ae.setValue(C,"center",O.center),Ae.setValue(C,"modelViewMatrix",O.modelViewMatrix),Ae.setValue(C,"normalMatrix",O.normalMatrix),Ae.setValue(C,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Rn=q.uniformsGroups;for(let Ai=0,Ri=Rn.length;Ai<Ri;Ai++){let od=Rn[Ai];U.update(od,Nn),U.bind(od,Nn)}}return Nn}function ep(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function np(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,N,Y){bt.get(T.texture).__webglTexture=N,bt.get(T.depthTexture).__webglTexture=Y;let q=bt.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){let Y=bt.get(T);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,Y=0){I=T,S=N,R=Y;let q=!0,O=null,yt=!1,Ct=!1;if(T){let Nt=bt.get(T);if(Nt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(Nt.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Nt.__hasExternalTextures)P.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ot=T.depthTexture;if(Nt.__boundDepthTexture!==Ot){if(Ot!==null&&bt.has(Ot)&&(T.width!==Ot.image.width||T.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}let $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);let Jt=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Jt[N])?O=Jt[N][Y]:O=Jt[N],yt=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?O=bt.get(T).__webglMultisampledFramebuffer:Array.isArray(Jt)?O=Jt[Y]:O=Jt,L.copy(T.viewport),k.copy(T.scissor),D=T.scissorTest}else L.copy(xt).multiplyScalar(X).floor(),k.copy(Ht).multiplyScalar(X).floor(),D=Yt;if(dt.bindFramebuffer(C.FRAMEBUFFER,O)&&q&&dt.drawBuffers(T,O),dt.viewport(L),dt.scissor(k),dt.setScissorTest(D),yt){let Nt=bt.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Nt.__webglTexture,Y)}else if(Ct){let Nt=bt.get(T.texture),$t=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Nt.__webglTexture,Y||0,$t)}b=-1},this.readRenderTargetPixels=function(T,N,Y,q,O,yt,Ct){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){dt.bindFramebuffer(C.FRAMEBUFFER,Ut);try{let Nt=T.texture,$t=Nt.format,Jt=Nt.type;if(!mt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-q&&Y>=0&&Y<=T.height-O&&C.readPixels(N,Y,q,O,Qt.convert($t),Qt.convert(Jt),yt)}finally{let Nt=I!==null?bt.get(I).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(T,N,Y,q,O,yt,Ct){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){let Nt=T.texture,$t=Nt.format,Jt=Nt.type;if(!mt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-q&&Y>=0&&Y<=T.height-O){dt.bindFramebuffer(C.FRAMEBUFFER,Ut);let Ot=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.bufferData(C.PIXEL_PACK_BUFFER,yt.byteLength,C.STREAM_READ),C.readPixels(N,Y,q,O,Qt.convert($t),Qt.convert(Jt),0);let he=I!==null?bt.get(I).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,he);let Ee=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Fp(C,Ee,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,yt),C.deleteBuffer(Ot),C.deleteSync(Ee),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,Y=0){T.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);let q=Math.pow(2,-Y),O=Math.floor(T.image.width*q),yt=Math.floor(T.image.height*q),Ct=N!==null?N.x:0,Ut=N!==null?N.y:0;P.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,Y,0,0,Ct,Ut,O,yt),dt.unbindTexture()},this.copyTextureToTexture=function(T,N,Y=null,q=null,O=0){T.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],N=arguments[2],O=arguments[3]||0,Y=null);let yt,Ct,Ut,Nt,$t,Jt,Ot,he,Ee,Te=T.isCompressedTexture?T.mipmaps[O]:T.image;Y!==null?(yt=Y.max.x-Y.min.x,Ct=Y.max.y-Y.min.y,Ut=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,$t=Y.min.y,Jt=Y.isBox3?Y.min.z:0):(yt=Te.width,Ct=Te.height,Ut=Te.depth||1,Nt=0,$t=0,Jt=0),q!==null?(Ot=q.x,he=q.y,Ee=q.z):(Ot=0,he=0,Ee=0);let gn=Qt.convert(N.format),fe=Qt.convert(N.type),Bt;N.isData3DTexture?(P.setTexture3D(N,0),Bt=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(P.setTexture2DArray(N,0),Bt=C.TEXTURE_2D_ARRAY):(P.setTexture2D(N,0),Bt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);let si=C.getParameter(C.UNPACK_ROW_LENGTH),pe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Nn=C.getParameter(C.UNPACK_SKIP_PIXELS),bs=C.getParameter(C.UNPACK_SKIP_ROWS),_n=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Te.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Te.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nt),C.pixelStorei(C.UNPACK_SKIP_ROWS,$t),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Jt);let xr=T.isDataArrayTexture||T.isData3DTexture,Ae=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Zn=bt.get(T),_r=bt.get(N),Rn=bt.get(Zn.__renderTarget),Ai=bt.get(_r.__renderTarget);dt.bindFramebuffer(C.READ_FRAMEBUFFER,Rn.__webglFramebuffer),dt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ri=0;Ri<Ut;Ri++)xr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,bt.get(T).__webglTexture,O,Jt+Ri),T.isDepthTexture?(Ae&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,bt.get(N).__webglTexture,O,Ee+Ri),C.blitFramebuffer(Nt,$t,yt,Ct,Ot,he,yt,Ct,C.DEPTH_BUFFER_BIT,C.NEAREST)):Ae?C.copyTexSubImage3D(Bt,O,Ot,he,Ee+Ri,Nt,$t,yt,Ct):C.copyTexSubImage2D(Bt,O,Ot,he,Ee+Ri,Nt,$t,yt,Ct);dt.bindFramebuffer(C.READ_FRAMEBUFFER,null),dt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ae?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Bt,O,Ot,he,Ee,yt,Ct,Ut,gn,fe,Te.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Bt,O,Ot,he,Ee,yt,Ct,Ut,gn,Te.data):C.texSubImage3D(Bt,O,Ot,he,Ee,yt,Ct,Ut,gn,fe,Te):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,Ot,he,yt,Ct,gn,fe,Te.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,Ot,he,Te.width,Te.height,gn,Te.data):C.texSubImage2D(C.TEXTURE_2D,O,Ot,he,yt,Ct,gn,fe,Te);C.pixelStorei(C.UNPACK_ROW_LENGTH,si),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,bs),C.pixelStorei(C.UNPACK_SKIP_IMAGES,_n),O===0&&N.generateMipmaps&&C.generateMipmap(Bt),dt.unbindTexture()},this.copyTextureToTexture3D=function(T,N,Y=null,q=null,O=0){return T.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,T=arguments[2],N=arguments[3],O=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,Y,q,O)},this.initRenderTarget=function(T){bt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),dt.unbindTexture()},this.resetState=function(){S=0,R=0,I=null,dt.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}},tr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},er=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},nr=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Zo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wc,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new A,Ur=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ds=class extends _i{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Os,Sr=new A,Hs=new A,Fs=new A,Bs=new st,Tr=new st,Bu=new ce,_o=new A,Ar=new A,Mo=new A,ru=new st,kl=new st,ou=new st,ir=class extends $e{constructor(t=new ds){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new Re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zo(e,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new Ur(i,3,0,!1)),Os.setAttribute("uv",new Ur(i,2,3,!1))}this.geometry=Os,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Bu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Fs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;bo(_o.set(-.5,-.5,0),Fs,o,Hs,s,r),bo(Ar.set(.5,-.5,0),Fs,o,Hs,s,r),bo(Mo.set(.5,.5,0),Fs,o,Hs,s,r),ru.set(0,0),kl.set(1,0),ou.set(1,1);let a=t.ray.intersectTriangle(_o,Ar,Mo,!1,Sr);if(a===null&&(bo(Ar.set(-.5,.5,0),Fs,o,Hs,s,r),kl.set(0,1),a=t.ray.intersectTriangle(_o,Mo,Ar,!1,Sr),a===null))return;let l=t.ray.origin.distanceTo(Sr);l<t.near||l>t.far||e.push({distance:l,point:Sr.clone(),uv:Ni.getInterpolation(Sr,_o,Ar,Mo,ru,kl,ou,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function bo(n,t,e,i,s,r){Bs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Tr.x=r*Bs.x-s*Bs.y,Tr.y=s*Bs.x+r*Bs.y):Tr.copy(Bs),n.copy(t),n.x+=Tr.x,n.y+=Tr.y,n.applyMatrix4(Bu)}var Nr=class extends _i{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},au=new ce,zc=new Bo,Eo=new zi,wo=new A,Ko=class extends $e{constructor(t=new Re,e=new Nr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;au.copy(s).invert(),zc.copy(t.ray).applyMatrix4(au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=f,y=u;g<y;g++){let p=c.getX(g);wo.fromBufferAttribute(d,p),lu(wo,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let g=f,y=u;g<y;g++)wo.fromBufferAttribute(d,g),lu(wo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lu(n,t,e,i,s,r,o){let a=zc.distanceSqToPoint(n);if(a<e){let l=new A;zc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Gn=class extends wn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new A,s=[],r=[],o=[],a=new A,l=new ce;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(nn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(nn(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Or=class extends In{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Gc=class extends Or{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var So=new A,Dl=new Eh,Ul=new Eh,Nl=new Eh,Vc=class extends In{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new A){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(So.subVectors(s[0],s[1]).add(s[0]),c=So);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(So.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),u),y=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Dl.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,y,p),Ul.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,y,p),Nl.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Ul.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Nl.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Dl.calc(l),Ul.calc(l),Nl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Dv(n,t){let e=1-n;return e*e*t}function Uv(n,t){return 2*(1-n)*n*t}function Nv(n,t){return n*n*t}function Lr(n,t,e,i){return Dv(n,t)+Uv(n,e)+Nv(n,i)}function Ov(n,t){let e=1-n;return e*e*e*t}function Hv(n,t){let e=1-n;return 3*e*e*n*t}function Fv(n,t){return 3*(1-n)*n*n*t}function Bv(n,t){return n*n*n*t}function kr(n,t,e,i,s){return Ov(n,t)+Hv(n,e)+Fv(n,i)+Bv(n,s)}var Jo=class extends In{constructor(t=new st,e=new st,i=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wc=class extends In{constructor(t=new A,e=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y),kr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jo=class extends In{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xc=class extends In{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends In{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sr=class extends In{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y),Lr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(cu(a,l.x,c.x,h.x,d.x),cu(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},ea=Object.freeze({__proto__:null,ArcCurve:Gc,CatmullRomCurve3:Vc,CubicBezierCurve:Jo,CubicBezierCurve3:Wc,EllipseCurve:Or,LineCurve:jo,LineCurve3:Xc,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:sr,SplineCurve:ta}),Yc=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ea[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new ea[s.type]().fromJSON(s))}return this}},Mi=class extends Yc{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new jo(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Qo(this.currentPoint.clone(),new st(t,e),new st(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Jo(this.currentPoint.clone(),new st(t,e),new st(i,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ta(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Or(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Hr=class n extends Re{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=nn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new A,f=new st,u=new A,g=new A,y=new A,p=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,u.x=m*1,u.y=-p,u.z=m*0,y.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,u.x=m*1,u.y=-p,u.z=m*0,g.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),l.push(u.x,u.y,u.z),y.copy(g)}for(let x=0;x<=e;x++){let _=i+x*h*s,v=Math.sin(_),w=Math.cos(_);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*v,d.y=t[S].y,d.z=t[S].x*w,o.push(d.x,d.y,d.z),f.x=x/e,f.y=S/(t.length-1),a.push(f.x,f.y);let R=l[3*S+0]*v,I=l[3*S+1],b=l[3*S+0]*w;c.push(R,I,b)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){let v=_+x*t.length,w=v,S=v+t.length,R=v+t.length+1,I=v+1;r.push(w,S,I),r.push(R,I,S)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Ln=class n extends Hr{constructor(t=1,e=1,i=4,s=8){let r=new Mi;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},bi=class n extends Re{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let u=i+d/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ne=class n extends Re{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],g=0,y=[],p=i/2,m=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(u,2));function x(){let v=new A,w=new A,S=0,R=(e-t)/i;for(let I=0;I<=r;I++){let b=[],M=I/r,L=M*(e-t)+t;for(let k=0;k<=s;k++){let D=k/s,B=D*l+a,$=Math.sin(B),V=Math.cos(B);w.x=L*$,w.y=-M*i+p,w.z=L*V,d.push(w.x,w.y,w.z),v.set($,R,V).normalize(),f.push(v.x,v.y,v.z),u.push(D,1-M),b.push(g++)}y.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let M=y[b][I],L=y[b+1][I],k=y[b+1][I+1],D=y[b][I+1];(t>0||b!==0)&&(h.push(M,L,D),S+=3),(e>0||b!==r-1)&&(h.push(L,k,D),S+=3)}c.addGroup(m,S,0),m+=S}function _(v){let w=g,S=new st,R=new A,I=0,b=v===!0?t:e,M=v===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,p*M,0),f.push(0,M,0),u.push(.5,.5),g++;let L=g;for(let k=0;k<=s;k++){let B=k/s*l+a,$=Math.cos(B),V=Math.sin(B);R.x=b*V,R.y=p*M,R.z=b*$,d.push(R.x,R.y,R.z),f.push(0,M,0),S.x=$*.5+.5,S.y=V*.5*M+.5,u.push(S.x,S.y),g++}for(let k=0;k<s;k++){let D=w+k,B=L+k;v===!0?h.push(B,B+1,D):h.push(B+1,B,D),I+=3}c.addGroup(m,I,v===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cn=class n extends ne{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qc=class n extends Re{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let _=new A,v=new A,w=new A;for(let S=0;S<e.length;S+=3)u(e[S+0],_),u(e[S+1],v),u(e[S+2],w),l(_,v,w,x)}function l(x,_,v,w){let S=w+1,R=[];for(let I=0;I<=S;I++){R[I]=[];let b=x.clone().lerp(v,I/S),M=_.clone().lerp(v,I/S),L=S-I;for(let k=0;k<=L;k++)k===0&&I===S?R[I][k]=b:R[I][k]=b.clone().lerp(M,k/L)}for(let I=0;I<S;I++)for(let b=0;b<2*(S-I)-1;b++){let M=Math.floor(b/2);b%2===0?(f(R[I][M+1]),f(R[I+1][M]),f(R[I][M])):(f(R[I][M+1]),f(R[I+1][M+1]),f(R[I+1][M]))}}function c(x){let _=new A;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(x),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let x=new A;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let v=p(x)/2/Math.PI+.5,w=m(x)/Math.PI+.5;o.push(v,1-w)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){let _=o[x+0],v=o[x+2],w=o[x+4],S=Math.max(_,v,w),R=Math.min(_,v,w);S>.9&&R<.1&&(_<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),w<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function u(x,_){let v=x*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){let x=new A,_=new A,v=new A,w=new A,S=new st,R=new st,I=new st;for(let b=0,M=0;b<r.length;b+=9,M+=6){x.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),S.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),w.copy(x).add(_).add(v).divideScalar(3);let L=p(w);y(S,M+0,x,L),y(R,M+2,_,L),y(I,M+4,v,L)}}function y(x,_,v,w){w<0&&x.x===1&&(o[_]=x.x-1),v.x===0&&v.z===0&&(o[_]=w/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},na=class n extends qc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var ti=class extends Mi{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Mi().fromJSON(s))}return this}},zv={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=zu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,f,u;if(i&&(r=Yv(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)d=n[g],f=n[g+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Fr(r,o,e,a,l,u,0),o}};function zu(n,t,e,i,s){let r,o;if(s===i1(n,t,e,i)>0)for(r=t;r<e;r+=i)o=hu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=hu(r,n[r],n[r+1],o);return o&&fa(o,o.next)&&(zr(o),o=o.next),o}function us(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(fa(e,e.next)||De(e.prev,e,e.next)===0)){if(zr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Fr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Jv(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Vv(n,i,s,r):Gv(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),zr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Wv(us(n),t,e),Fr(n,t,e,i,s,r,2)):o===2&&Xv(n,t,e,i,s,r):Fr(us(n),t,e,i,s,r,1);break}}}function Gv(n){let t=n.prev,e=n,i=n.next;if(De(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=u&&Gs(s,a,r,l,o,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vv(n,t,e,i){let s=n.prev,r=n,o=n.next;if(De(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<d?h<f?h:f:d<f?d:f,y=a>l?a>c?a:c:l>c?l:c,p=h>d?h>f?h:f:d>f?d:f,m=$c(u,g,t,e,i),x=$c(y,p,t,e,i),_=n.prevZ,v=n.nextZ;for(;_&&_.z>=m&&v&&v.z<=x;){if(_.x>=u&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Gs(a,h,l,d,c,f,_.x,_.y)&&De(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=u&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Gs(a,h,l,d,c,f,v.x,v.y)&&De(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=u&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Gs(a,h,l,d,c,f,_.x,_.y)&&De(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=u&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Gs(a,h,l,d,c,f,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Wv(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!fa(s,r)&&Gu(s,i,i.next,r)&&Br(s,r)&&Br(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),zr(i),zr(i.next),i=n=r),i=i.next}while(i!==n);return us(i)}function Xv(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&t1(o,a)){let l=Vu(o,a);o=us(o,o.next),l=us(l,l.next),Fr(o,t,e,i,s,r,0),Fr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Yv(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=zu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Qv(c));for(s.sort(qv),r=0;r<s.length;r++)e=$v(s[r],e);return e}function qv(n,t){return n.x-t.x}function $v(n,t){let e=Zv(n,t);if(!e)return t;let i=Vu(e,n);return us(i,i.next),us(e,e.next)}function Zv(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Gs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Br(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Kv(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Kv(n,t){return De(n.prev,n,t.prev)<0&&De(t.next,n,n.next)<0}function Jv(n,t,e,i){let s=n;do s.z===0&&(s.z=$c(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,jv(s)}function jv(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function $c(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Qv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Gs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function t1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!e1(n,t)&&(Br(n,t)&&Br(t,n)&&n1(n,t)&&(De(n.prev,n,t.prev)||De(n,t.prev,t))||fa(n,t)&&De(n.prev,n,n.next)>0&&De(t.prev,t,t.next)>0)}function De(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function fa(n,t){return n.x===t.x&&n.y===t.y}function Gu(n,t,e,i){let s=Ao(De(n,t,e)),r=Ao(De(n,t,i)),o=Ao(De(e,i,n)),a=Ao(De(e,i,t));return!!(s!==r&&o!==a||s===0&&To(n,e,t)||r===0&&To(n,i,t)||o===0&&To(e,n,i)||a===0&&To(e,t,i))}function To(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ao(n){return n>0?1:n<0?-1:0}function e1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Gu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Br(n,t){return De(n.prev,n,n.next)<0?De(n,t,n.next)>=0&&De(n,n.prev,t)>=0:De(n,t,n.prev)<0||De(n,n.next,t)<0}function n1(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Vu(n,t){let e=new Zc(n.i,n.x,n.y),i=new Zc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function hu(n,t,e,i){let s=new Zc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function i1(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Hi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];du(t),uu(i,t);let o=t.length;e.forEach(du);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,uu(i,e[l]);let a=zv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function du(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function uu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var rr=class n extends Re{constructor(t=new ti([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:s1,_,v=!1,w,S,R,I;m&&(_=m.getSpacedPoints(h),v=!0,f=!1,w=m.computeFrenetFrames(h,!1),S=new A,R=new A,I=new A),f||(p=0,u=0,g=0,y=0);let b=a.extractPoints(c),M=b.shape,L=b.holes;if(!Hi.isClockWise(M)){M=M.reverse();for(let Q=0,W=L.length;Q<W;Q++){let C=L[Q];Hi.isClockWise(C)&&(L[Q]=C.reverse())}}let D=Hi.triangulateShape(M,L),B=M;for(let Q=0,W=L.length;Q<W;Q++){let C=L[Q];M=M.concat(C)}function $(Q,W,C){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(W,C)}let V=M.length,ht=D.length;function X(Q,W,C){let lt,tt,mt,dt=Q.x-W.x,wt=Q.y-W.y,bt=C.x-Q.x,P=C.y-Q.y,E=dt*dt+wt*wt,G=dt*P-wt*bt;if(Math.abs(G)>Number.EPSILON){let J=Math.sqrt(E),at=Math.sqrt(bt*bt+P*P),et=W.x-wt/J,Dt=W.y+dt/J,St=C.x-P/at,It=C.y+bt/at,re=((St-et)*P-(It-Dt)*bt)/(dt*P-wt*bt);lt=et+dt*re-Q.x,tt=Dt+wt*re-Q.y;let ft=lt*lt+tt*tt;if(ft<=2)return new st(lt,tt);mt=Math.sqrt(ft/2)}else{let J=!1;dt>Number.EPSILON?bt>Number.EPSILON&&(J=!0):dt<-Number.EPSILON?bt<-Number.EPSILON&&(J=!0):Math.sign(wt)===Math.sign(P)&&(J=!0),J?(lt=-wt,tt=dt,mt=Math.sqrt(E)):(lt=dt,tt=wt,mt=Math.sqrt(E/2))}return new st(lt/mt,tt/mt)}let ut=[];for(let Q=0,W=B.length,C=W-1,lt=Q+1;Q<W;Q++,C++,lt++)C===W&&(C=0),lt===W&&(lt=0),ut[Q]=X(B[Q],B[C],B[lt]);let vt=[],xt,Ht=ut.concat();for(let Q=0,W=L.length;Q<W;Q++){let C=L[Q];xt=[];for(let lt=0,tt=C.length,mt=tt-1,dt=lt+1;lt<tt;lt++,mt++,dt++)mt===tt&&(mt=0),dt===tt&&(dt=0),xt[lt]=X(C[lt],C[mt],C[dt]);vt.push(xt),Ht=Ht.concat(xt)}for(let Q=0;Q<p;Q++){let W=Q/p,C=u*Math.cos(W*Math.PI/2),lt=g*Math.sin(W*Math.PI/2)+y;for(let tt=0,mt=B.length;tt<mt;tt++){let dt=$(B[tt],ut[tt],lt);z(dt.x,dt.y,-C)}for(let tt=0,mt=L.length;tt<mt;tt++){let dt=L[tt];xt=vt[tt];for(let wt=0,bt=dt.length;wt<bt;wt++){let P=$(dt[wt],xt[wt],lt);z(P.x,P.y,-C)}}}let Yt=g+y;for(let Q=0;Q<V;Q++){let W=f?$(M[Q],Ht[Q],Yt):M[Q];v?(R.copy(w.normals[0]).multiplyScalar(W.x),S.copy(w.binormals[0]).multiplyScalar(W.y),I.copy(_[0]).add(R).add(S),z(I.x,I.y,I.z)):z(W.x,W.y,0)}for(let Q=1;Q<=h;Q++)for(let W=0;W<V;W++){let C=f?$(M[W],Ht[W],Yt):M[W];v?(R.copy(w.normals[Q]).multiplyScalar(C.x),S.copy(w.binormals[Q]).multiplyScalar(C.y),I.copy(_[Q]).add(R).add(S),z(I.x,I.y,I.z)):z(C.x,C.y,d/h*Q)}for(let Q=p-1;Q>=0;Q--){let W=Q/p,C=u*Math.cos(W*Math.PI/2),lt=g*Math.sin(W*Math.PI/2)+y;for(let tt=0,mt=B.length;tt<mt;tt++){let dt=$(B[tt],ut[tt],lt);z(dt.x,dt.y,d+C)}for(let tt=0,mt=L.length;tt<mt;tt++){let dt=L[tt];xt=vt[tt];for(let wt=0,bt=dt.length;wt<bt;wt++){let P=$(dt[wt],xt[wt],lt);v?z(P.x,P.y+_[h-1].y,_[h-1].x+C):z(P.x,P.y,d+C)}}}K(),F();function K(){let Q=s.length/3;if(f){let W=0,C=V*W;for(let lt=0;lt<ht;lt++){let tt=D[lt];nt(tt[2]+C,tt[1]+C,tt[0]+C)}W=h+p*2,C=V*W;for(let lt=0;lt<ht;lt++){let tt=D[lt];nt(tt[0]+C,tt[1]+C,tt[2]+C)}}else{for(let W=0;W<ht;W++){let C=D[W];nt(C[2],C[1],C[0])}for(let W=0;W<ht;W++){let C=D[W];nt(C[0]+V*h,C[1]+V*h,C[2]+V*h)}}i.addGroup(Q,s.length/3-Q,0)}function F(){let Q=s.length/3,W=0;it(B,W),W+=B.length;for(let C=0,lt=L.length;C<lt;C++){let tt=L[C];it(tt,W),W+=tt.length}i.addGroup(Q,s.length/3-Q,1)}function it(Q,W){let C=Q.length;for(;--C>=0;){let lt=C,tt=C-1;tt<0&&(tt=Q.length-1);for(let mt=0,dt=h+p*2;mt<dt;mt++){let wt=V*mt,bt=V*(mt+1),P=W+lt+wt,E=W+tt+wt,G=W+tt+bt,J=W+lt+bt;gt(P,E,G,J)}}}function z(Q,W,C){l.push(Q),l.push(W),l.push(C)}function nt(Q,W,C){_t(Q),_t(W),_t(C);let lt=s.length/3,tt=x.generateTopUV(i,s,lt-3,lt-2,lt-1);Wt(tt[0]),Wt(tt[1]),Wt(tt[2])}function gt(Q,W,C,lt){_t(Q),_t(W),_t(lt),_t(W),_t(C),_t(lt);let tt=s.length/3,mt=x.generateSideWallUV(i,s,tt-6,tt-3,tt-2,tt-1);Wt(mt[0]),Wt(mt[1]),Wt(mt[3]),Wt(mt[1]),Wt(mt[2]),Wt(mt[3])}function _t(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Wt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return r1(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ea[s.type]().fromJSON(s)),new n(i,t.options)}},s1={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,o),new st(a,l),new st(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],f=t[s*3],u=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new st(o,1-l),new st(c,1-d),new st(f,1-g),new st(y,1-m)]:[new st(a,1-l),new st(h,1-d),new st(u,1-g),new st(p,1-m)]}};function r1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ia=class n extends Re{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,f=(e-t)/s,u=new A,g=new st;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let m=r+p/i*o;u.x=d*Math.cos(m),u.y=d*Math.sin(m),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let y=0;y<s;y++){let p=y*(i+1);for(let m=0;m<i;m++){let x=m+p,_=x,v=x+i+1,w=x+i+2,S=x+1;a.push(_,v,S),a.push(v,w,S)}}this.setIndex(a),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},sa=class n extends Re{constructor(t=new ti([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function c(h){let d=s.length/3,f=h.extractPoints(e),u=f.shape,g=f.holes;Hi.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){let x=g[p];Hi.isClockWise(x)===!0&&(g[p]=x.reverse())}let y=Hi.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){let x=g[p];u=u.concat(x)}for(let p=0,m=u.length;p<m;p++){let x=u[p];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,m=y.length;p<m;p++){let x=y[p],_=x[0]+d,v=x[1]+d,w=x[2]+d;i.push(_,v,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return o1(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function o1(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var ie=class n extends Re{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new A,f=new A,u=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){let x=[],_=m/i,v=0;m===0&&o===0?v=.5/e:m===i&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){let S=w/e;d.x=-t*Math.cos(s+S*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+S*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),p.push(S+v,1-_),x.push(c++)}h.push(x)}for(let m=0;m<i;m++)for(let x=0;x<e;x++){let _=h[m][x+1],v=h[m][x],w=h[m+1][x],S=h[m+1][x+1];(m!==0||o>0)&&u.push(_,v,S),(m!==i-1||l<Math.PI)&&u.push(v,w,S)}this.setIndex(u),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ge=class n extends Re{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new A,d=new A,f=new A;for(let u=0;u<=i;u++)for(let g=0;g<=s;g++){let y=g/s*r,p=u/i*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(y),d.y=(t+e*Math.cos(p))*Math.sin(y),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(u/i)}for(let u=1;u<=i;u++)for(let g=1;g<=s;g++){let y=(s+1)*u+g-1,p=(s+1)*(u-1)+g-1,m=(s+1)*(u-1)+g,x=(s+1)*u+g;o.push(y,p,x),o.push(p,m,x)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ra=class n extends Re{constructor(t=new sr(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new st,h=new A,d=[],f=[],u=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(u,2));function y(){for(let _=0;_<e;_++)p(_);p(r===!1?e:0),x(),m()}function p(_){h=t.getPointAt(_/e,h);let v=o.normals[_],w=o.binormals[_];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,I=Math.sin(R),b=-Math.cos(R);l.x=b*v.x+I*w.x,l.y=b*v.y+I*w.y,l.z=b*v.z+I*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let w=(s+1)*(_-1)+(v-1),S=(s+1)*_+(v-1),R=(s+1)*_+v,I=(s+1)*(_-1)+v;g.push(w,S,I),g.push(S,R,I)}}function x(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)c.x=_/e,c.y=v/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new ea[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var oa=class extends Ze{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ct=class extends _i{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ro(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function a1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var or=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kc=class extends or{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hd,endingEnd:hd}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dd:r=t,a=2*e-i;break;case ud:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case dd:o=t,l=2*i-e;break;case ud:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,x=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,_=(-1-u)*p+(1.5+u)*y+.5*g,v=u*p-u*y;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+x*o[c+w]+_*o[l+w]+v*o[d+w];return r}},Jc=class extends or{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},jc=class extends or{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Vn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ro(e,this.TimeBufferType),this.values=Ro(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ro(t.times,Array),values:Ro(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Do:e=this.InterpolantFactoryMethodDiscrete;break;case Ec:e=this.InterpolantFactoryMethodLinear;break;case sl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Ec;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&a1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,u=d+i;for(let g=0;g!==i;++g){let y=e[d+g];if(y!==e[f+g]||y!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let u=0;u!==i;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Ec;var fs=class extends Vn{constructor(t,e,i){super(t,e,i)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Do;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends Vn{};Qc.prototype.ValueTypeName="color";var th=class extends Vn{};th.prototype.ValueTypeName="number";var eh=class extends or{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},aa=class extends Vn{InterpolantFactoryMethodLinear(t){return new eh(this.times,this.values,this.getValueSize(),t)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends Vn{constructor(t,e,i){super(t,e,i)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Do;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var nh=class extends Vn{};nh.prototype.ValueTypeName="vector";var ih=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},l1=new ih,sh=class{constructor(t){this.manager=t!==void 0?t:l1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};sh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ms=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Gi=class extends ms{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ol=new ce,fu=new A,pu=new A,Gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pu),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},rh=class extends Gr{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=No*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},la=class extends ms{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},mu=new ce,Rr=new A,Hl=new A,oh=class extends Gr{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Rr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Rr),Hl.copy(i.position),Hl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Hl),i.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),mu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu)}},Ie=class extends ms{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ah=class extends Gr{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ca=class extends ms{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Vi=class extends ms{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ar=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=gu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function gu(){return performance.now()}var wh="\\[\\]\\.:\\/",c1=new RegExp("["+wh+"]","g"),Sh="[^"+wh+"]",h1="[^"+wh.replace("\\.","")+"]",d1=/((?:WC+[\/:])*)/.source.replace("WC",Sh),u1=/(WCOD+)?/.source.replace("WCOD",h1),f1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),p1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),m1=new RegExp("^"+d1+u1+f1+p1+"$"),g1=["material","materials","bones","map"],lh=class{constructor(t,e,i){let s=i||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(c1,"")}static parseTrackName(t){let e=m1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);g1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=lh;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ax=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);var je=(n,t,e)=>Math.max(t,Math.min(e,n)),Ue=(n,t,e)=>n+(t-n)*e,hn=(n,t,e,i)=>Ue(n,t,1-Math.exp(-e*i)),hr=(n=0,t=1)=>n+Math.random()*(t-n);function ve(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Wu(n,t){let e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}var j=(n,t=document)=>t.querySelector(n),pa=(n,t=document)=>[...t.querySelectorAll(n)];function we(n,t,e){let i=document.createElement(n);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i}var kn=n=>new Promise(t=>setTimeout(t,n));function Th(n){return String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Xu=()=>typeof matchMedia>"u"?"ontouchstart"in window:matchMedia("(pointer: coarse)").matches||"ontouchstart"in window&&!matchMedia("(any-pointer: fine)").matches;var Dn={linear:n=>n,in:n=>n*n*n,out:n=>1-Math.pow(1-n,3),inOut:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,sine:n=>-(Math.cos(Math.PI*n)-1)/2,outBack:n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2),outElastic:n=>n===0||n===1?n:Math.pow(2,-10*n)*Math.sin((n*10-.75)*(2*Math.PI/3))+1},ma=class{constructor(){this.time=0,this.waits=[],this.tweens=[],this.skipping=!1}reset(){this.waits=[],this.tweens=[],this.skipping=!1}update(t){if(this.time+=t,this.waits.length){let e=[];this.waits=this.waits.filter(i=>i.t<=this.time||i.cond&&i.cond()?(e.push(i),!1):!0);for(let i of e)i.resolve()}if(this.tweens.length){let e=[];for(let i of this.tweens){i.t+=t;let s=Math.min(1,i.t/i.d);i.fn(i.ease(s)),s>=1&&e.push(i)}if(e.length){this.tweens=this.tweens.filter(i=>!e.includes(i));for(let i of e)i.resolve()}}}wait(t){return this.skipping||t<=0?Promise.resolve():new Promise(e=>this.waits.push({t:this.time+t,resolve:e}))}until(t){return t()?Promise.resolve():new Promise(e=>this.waits.push({t:1/0,cond:t,resolve:e}))}tween(t,e,i=Dn.inOut){return this.skipping||t<=0?(e(1),Promise.resolve()):(e(0),new Promise(s=>this.tweens.push({t:0,d:t,fn:e,ease:i,resolve:s})))}skipAll(){this.skipping=!0;let t=this.tweens;this.tweens=[];for(let i of t)i.fn(1),i.resolve();let e=this.waits.filter(i=>!i.cond);this.waits=this.waits.filter(i=>i.cond);for(let i of e)i.resolve()}};var ga=class{constructor(t){this.canvas=t,this.down=new Set,this.pressed=new Set,this.mdx=0,this.mdy=0,this.locked=!1,this.isTouch=Xu(),this.stick={x:0,y:0},this.onLockChange=null,this.onKey=null,addEventListener("keydown",i=>{i.repeat||(this.down.add(i.code),this.pressed.add(i.code),this.onKey?.(i),this.locked&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault())}),addEventListener("keyup",i=>this.down.delete(i.code)),addEventListener("blur",()=>this.down.clear()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.onLockChange?.(this.locked)}),addEventListener("mousemove",i=>{(this.locked||this.dragging&&i.buttons&1)&&(this.mdx+=je(i.movementX,-200,200),this.mdy+=je(i.movementY,-200,200))}),t.addEventListener("mousedown",i=>{i.button===0&&(this.dragging=!0),this.pressed.add("Mouse"+i.button),this.down.add("Mouse"+i.button)}),addEventListener("mouseup",i=>{this.down.delete("Mouse"+i.button),i.button===0&&(this.dragging=!1)}),addEventListener("wheel",i=>{i.ctrlKey&&i.preventDefault()},{passive:!1});for(let i of["gesturestart","gesturechange"])document.addEventListener(i,s=>s.preventDefault(),{passive:!1});let e=i=>{i.touches.length>1&&i.cancelable&&i.preventDefault()};addEventListener("touchstart",e,{passive:!1}),addEventListener("touchmove",e,{passive:!1}),this.isTouch&&this._setupTouch()}requestLock(){if(!(this.isTouch||this.locked))try{let t=this.canvas.requestPointerLock?.();t&&t.catch&&t.catch(()=>{})}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}isDown(...t){return t.some(e=>this.down.has(e))}wasPressed(...t){return t.some(e=>this.pressed.has(e))}endFrame(){this.pressed.clear(),this.mdx=0,this.mdy=0}moveAxis(){let t=0,e=0;this.isDown("KeyW","ArrowUp")&&(e+=1),this.isDown("KeyS","ArrowDown")&&(e-=1),this.isDown("KeyD","ArrowRight")&&(t+=1),this.isDown("KeyA","ArrowLeft")&&(t-=1),t+=this.stick.x,e+=-this.stick.y;let i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{x:t,z:e}}showTouch(t){this.touchRoot&&(this.touchRoot.dataset.mode=t||"off")}_setupTouch(){let t=document.getElementById("touch");if(!t)return;this.touchRoot=t;let e=t.querySelector(".stick"),i=t.querySelector(".knob"),s=null,r=null,o=0,a=0,l=0,c=0,h=null,d=g=>{let y=t.dataset.mode;y!=="off"&&g.target===this.canvas&&g.cancelable&&g.preventDefault();for(let p of g.changedTouches)if(!p.target.closest(".tbtn")){if(y==="runner"){h={id:p.identifier,x:p.clientX,y:p.clientY,done:!1};continue}y==="explore"&&(p.clientX<innerWidth*.45&&s===null?(s=p.identifier,o=p.clientX,a=p.clientY,e.style.left=o+"px",e.style.top=a+"px",e.classList.add("on")):r===null&&(r=p.identifier,l=p.clientX,c=p.clientY))}},f=g=>{for(let y of g.changedTouches)if(y.identifier===s){let p=y.clientX-o,m=y.clientY-a,x=55,_=Math.hypot(p,m)||1,v=Math.min(1,_/x);this.stick.x=p/_*v,this.stick.y=m/_*v,i.style.transform=`translate(${this.stick.x*x}px, ${this.stick.y*x}px)`}else if(y.identifier===r)this.mdx+=(y.clientX-l)*2.2,this.mdy+=(y.clientY-c)*2.2,l=y.clientX,c=y.clientY;else if(h&&y.identifier===h.id&&!h.done){let p=y.clientX-h.x,m=y.clientY-h.y;Math.hypot(p,m)>28&&(h.done=!0,Math.abs(p)>Math.abs(m)?this.pressed.add(p>0?"SwipeRight":"SwipeLeft"):this.pressed.add(m>0?"SwipeDown":"SwipeUp"))}t.dataset.mode!=="off"&&g.preventDefault()},u=g=>{for(let y of g.changedTouches)y.identifier===s&&(s=null,this.stick.x=0,this.stick.y=0,i.style.transform="",e.classList.remove("on")),y.identifier===r&&(r=null),h&&y.identifier===h.id&&(h=null)};addEventListener("touchstart",d,{passive:!1}),addEventListener("touchmove",f,{passive:!1}),addEventListener("touchend",u),addEventListener("touchcancel",u);for(let g of t.querySelectorAll(".tbtn")){let y=g.dataset.code;g.addEventListener("touchstart",m=>{m.preventDefault(),this.pressed.add(y),this.down.add(y),g.classList.add("on")},{passive:!1});let p=()=>{this.down.delete(y),g.classList.remove("on")};g.addEventListener("touchend",p),g.addEventListener("touchcancel",p)}}};var ue=n=>440*Math.pow(2,(n-69)/12),Be=Math.random,ya=class{constructor(){this.ctx=null,this.track=null,this.trackName=null,this.pendingMusic=null,this.ambientNodes=[],this.vol={master:.8,music:.6,sfx:.9}}get now(){return this.ctx?this.ctx.currentTime:0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;if(this.out=e.createDynamicsCompressor(),this.out.threshold.value=-12,this.out.ratio.value=4,this.out.connect(e.destination),this.master=e.createGain(),this.master.connect(this.out),this.musicBus=e.createGain(),this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.ambBus=e.createGain(),this.ambBus.connect(this.sfxBus),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(2.6,2.4),this.revGain=e.createGain(),this.revGain.gain.value=.5,this.reverb.connect(this.revGain),this.revGain.connect(this.master),this.noiseBuf=this._noise(2),this.brownBuf=this._brown(4),this.distCurve=this._curve(60),this.setVolumes(this.vol),this._seq=setInterval(()=>this._tick(),25),this.pendingMusic){let i=this.pendingMusic;this.pendingMusic=null,this.playMusic(i)}this.pendingAmbient&&this.setAmbient(this.pendingAmbient)}setVolumes(t){Object.assign(this.vol,t),this.ctx&&(this.master.gain.value=this.vol.master,this.musicBus.gain.value=this.vol.music*.9,this.sfxBus.gain.value=this.vol.sfx)}setReverb(t){this.revGain&&this.revGain.gain.setTargetAtTime(t,this.now,.3)}_noise(t){let e=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),i=e.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Be()*2-1;return e}_brown(t){let e=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),i=e.getChannelData(0),s=0;for(let r=0;r<i.length;r++)s=(s+.02*(Be()*2-1))/1.02,i[r]=s*3.5;return e}_impulse(t,e){let i=this.ctx.sampleRate,s=i*t,r=this.ctx.createBuffer(2,s,i);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++)a[l]=(Be()*2-1)*Math.pow(1-l/s,e)}return r}_curve(t){let i=new Float32Array(1024);for(let s=0;s<1024;s++){let r=s*2/1024-1;i[s]=(3+t)*r*20*(Math.PI/180)/(Math.PI+t*Math.abs(r))}return i}_route(t,e,i){if(t.connect(e||this.sfxBus),i){let s=this.ctx.createGain();s.gain.value=i,t.connect(s),s.connect(this.reverb)}}tone({type:t="sine",f:e=440,f2:i=null,t:s=this.now,a:r=.005,d:o=.3,g:a=.3,dest:l,send:c=0,detune:h=0,vib:d=0,vibRate:f=5,filter:u=null}){if(!this.ctx)return;let g=this.ctx,y=g.createOscillator();if(y.type=t,y.frequency.setValueAtTime(e,s),i&&y.frequency.exponentialRampToValueAtTime(Math.max(1,i),s+r+o),y.detune.value=h,d){let x=g.createOscillator(),_=g.createGain();x.frequency.value=f,_.gain.value=d,x.connect(_),_.connect(y.frequency),x.start(s),x.stop(s+r+o+.1)}let p=g.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.linearRampToValueAtTime(a,s+r),p.gain.exponentialRampToValueAtTime(1e-4,s+r+o);let m=y;if(u){let x=g.createBiquadFilter();x.type=u.type||"lowpass",x.frequency.value=u.f,x.Q.value=u.q||.7,y.connect(x),m=x}return m.connect(p),this._route(p,l,c),y.start(s),y.stop(s+r+o+.05),y}noise({t=this.now,a:e=.005,d:i=.2,g:s=.3,type:r="bandpass",f:o=1e3,f2:a=null,q:l=1,dest:c,send:h=0,brown:d=!1}){if(!this.ctx)return;let f=this.ctx,u=f.createBufferSource();u.buffer=d?this.brownBuf:this.noiseBuf,u.playbackRate.value=.8+Be()*.4;let g=f.createBiquadFilter();g.type=r,g.frequency.setValueAtTime(o,t),a&&g.frequency.exponentialRampToValueAtTime(a,t+e+i),g.Q.value=l;let y=f.createGain();y.gain.setValueAtTime(1e-4,t),y.gain.linearRampToValueAtTime(s,t+e),y.gain.exponentialRampToValueAtTime(1e-4,t+e+i),u.connect(g),g.connect(y),this._route(y,c,h),u.start(t,Be()*1.5),u.stop(t+e+i+.05)}pluck(t,e,i,s,r,o="triangle"){this.tone({type:o,f:e,t,a:.003,d:i,g:s,dest:r})}bell(t,e,i,s){this.tone({type:"sine",f:e,t,a:.002,d:1.6,g:i,dest:s,send:.3}),this.tone({type:"sine",f:e*2.76,t,a:.002,d:.6,g:i*.35,dest:s})}pad(t,e,i,s,r,o=900){if(!this.ctx)return;let a=this.ctx,l=a.createBiquadFilter();l.type="lowpass",l.frequency.value=o;let c=a.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(s,t+Math.min(1.2,i*.3)),c.gain.setValueAtTime(s,t+i*.75),c.gain.linearRampToValueAtTime(1e-4,t+i),l.connect(c),c.connect(r);for(let h of e)for(let d of[-8,8]){let f=a.createOscillator();f.type="sawtooth",f.frequency.value=ue(h),f.detune.value=d,f.connect(l),f.start(t),f.stop(t+i+.05)}}kick(t,e,i){this.tone({type:"sine",f:150,f2:42,t,a:.002,d:.28,g:e,dest:i})}snare(t,e,i){this.noise({t,d:.16,g:e,type:"highpass",f:1400,dest:i}),this.tone({type:"triangle",f:210,f2:150,t,d:.08,g:e*.6,dest:i})}hat(t,e,i,s=!1){this.noise({t,d:s?.18:.04,g:e,type:"highpass",f:7500,dest:i})}bass(t,e,i,s,r,o=700){this.tone({type:"sawtooth",f:e,t,a:.005,d:i,g:s,dest:r,filter:{f:o,q:4}})}distBass(t,e,i,s,r){if(!this.ctx)return;let o=this.ctx,a=o.createOscillator();a.type="sawtooth",a.frequency.value=e;let l=o.createWaveShaper();l.curve=this.distCurve;let c=o.createBiquadFilter();c.type="lowpass",c.frequency.value=1200;let h=o.createGain();h.gain.setValueAtTime(s,t),h.gain.exponentialRampToValueAtTime(1e-4,t+i),a.connect(l),l.connect(c),c.connect(h),h.connect(r),a.start(t),a.stop(t+i+.05)}play(t,e={}){if(!this.ctx)return;let i=this.now+(e.delay||0),s=e.vol??1;switch(t){case"step":{let r=e.surface||"marble",o=r==="wood"?450:r==="concrete"?1300:r==="carpet"?300:950;this.noise({t:i,a:.002,d:r==="carpet"?.05:.09,g:.14*s,type:"bandpass",f:o*(.85+Be()*.3),q:1.3,send:.25}),this.tone({type:"sine",f:120,f2:55,t:i,d:.07,g:.12*s});break}case"click":this.tone({type:"square",f:1900,t:i,d:.025,g:.05*s,filter:{f:3e3}});break;case"hover":this.tone({type:"sine",f:1300,t:i,d:.04,g:.035*s});break;case"select":this.tone({type:"triangle",f:660,t:i,d:.08,g:.1*s}),this.tone({type:"triangle",f:990,t:i+.06,d:.12,g:.1*s});break;case"back":this.tone({type:"triangle",f:700,t:i,d:.08,g:.08*s}),this.tone({type:"triangle",f:470,t:i+.06,d:.12,g:.08*s});break;case"chime":{[72,76,79,84,88].forEach((r,o)=>{this.tone({type:"triangle",f:ue(r),t:i+o*.07,d:.7,g:.12*s,send:.4}),this.tone({type:"sine",f:ue(r+12),t:i+o*.07,d:.4,g:.04*s})});break}case"unlock":this.tone({type:"square",f:300,t:i,d:.05,g:.08*s,filter:{f:1500}}),this.tone({type:"square",f:180,t:i+.08,d:.08,g:.1*s,filter:{f:1200}}),this.noise({t:i+.08,d:.1,g:.15*s,f:2500,q:2});break;case"error":this.tone({type:"square",f:150,t:i,d:.13,g:.07*s,filter:{f:900}}),this.tone({type:"square",f:112,t:i+.15,d:.22,g:.07*s,filter:{f:900}});break;case"tick":this.tone({type:"sine",f:2400,t:i,d:.015,g:.05*s});break;case"type":this.noise({t:i,d:.03,g:.12*s,f:3e3+Be()*1500,q:3});break;case"munch":for(let r=0;r<4;r++)this.noise({t:i+r*(.09+Be()*.05),d:.07,g:.5*s,f:1300+Be()*1800,q:1.2});this.tone({type:"sine",f:300,f2:120,t:i+.42,d:.12,g:.22*s});break;case"pickup":this.tone({type:"sine",f:520,f2:1500,t:i,d:.16,g:.12*s}),[88,91,96].forEach((r,o)=>this.tone({type:"triangle",f:ue(r),t:i+.08+o*.05,d:.3,g:.06*s,send:.4}));break;case"coin":this.tone({type:"square",f:ue(83+(e.pitch||0)),t:i,d:.05,g:.05*s,filter:{f:4e3}}),this.tone({type:"square",f:ue(88+(e.pitch||0)),t:i+.05,d:.14,g:.05*s,filter:{f:4e3}});break;case"flashlight":this.noise({t:i,d:.02,g:.25*s,f:3500,q:4}),this.noise({t:i+.05,d:.02,g:.18*s,f:2500,q:4});break;case"roar":this._roar(i,s,e.short);break;case"growl":this._roar(i,s*.45,!0,!0);break;case"stomp":this.tone({type:"sine",f:70,f2:28,t:i,a:.005,d:.6,g:.7*s,send:.5}),this.noise({t:i,d:.5,g:.35*s,type:"lowpass",f:220,send:.6,brown:!0});break;case"clatter":for(let r=0;r<16;r++){let o=i+Be()*1.4*(r/16+.2);this.noise({t:o,d:.05+Be()*.05,g:(.15+Be()*.15)*s,f:1200+Be()*2600,q:6,send:.7})}for(let r=0;r<4;r++)this.tone({type:"sine",f:90+Be()*40,f2:40,t:i+Be()*1.2,d:.3,g:.3*s,send:.6});break;case"creak":this.tone({type:"sawtooth",f:70,f2:95,t:i,a:.2,d:1.2,g:.05*s,vib:18,vibRate:13,filter:{type:"bandpass",f:700,q:6},send:.6});break;case"whoosh":this.noise({t:i,a:.12,d:.35,g:.3*s,f:400,f2:2500,q:1.5});break;case"heartbeat":this.tone({type:"sine",f:60,f2:40,t:i,d:.14,g:.5*s}),this.tone({type:"sine",f:55,f2:38,t:i+.22,d:.18,g:.4*s});break;case"note":this.tone({type:"triangle",f:e.f||523,t:i,a:.005,d:e.dur||.3,g:.16*s}),this.tone({type:"sine",f:(e.f||523)*2,t:i,a:.005,d:(e.dur||.3)*.6,g:.04*s});break;case"beep":this.tone({type:"sine",f:760,t:i,a:.004,d:e.dur||.1,g:.14*s});break;case"static":this.noise({t:i,d:e.dur||.35,g:.12*s,type:"highpass",f:2500});break;case"radio":this.noise({t:i,d:.25,g:.14*s,type:"bandpass",f:1800,q:.8}),this.tone({type:"square",f:1200,t:i+.25,d:.06,g:.04*s});break;case"gate":this.tone({type:"sawtooth",f:55,f2:75,t:i,a:.1,d:1.6,g:.12*s,filter:{type:"bandpass",f:400,q:3},send:.4}),this.noise({t:i,a:.1,d:1.6,g:.08*s,f:900,q:4,send:.3}),this.tone({type:"sine",f:90,f2:40,t:i+1.6,d:.3,g:.4*s,send:.4});break;case"bonk":this.tone({type:"sine",f:420,f2:90,t:i,d:.25,g:.4*s}),this.noise({t:i,d:.2,g:.3*s,f:800});break;case"crash":this.noise({t:i,d:1.2,g:.6*s,type:"lowpass",f:3e3,f2:200,send:.6}),this.tone({type:"sine",f:80,f2:30,t:i,d:.8,g:.8*s});for(let r=0;r<10;r++)this.noise({t:i+.1+Be()*.9,d:.08,g:.12*s,f:2e3+Be()*3e3,q:5,send:.5});break;case"scratch":this.noise({t:i,a:.01,d:.25,g:.4*s,f:3e3,f2:600,q:2}),this.tone({type:"sawtooth",f:900,f2:120,t:i,d:.25,g:.1*s});break;case"wahwah":{[55,54,53].forEach((r,o)=>this.tone({type:"sawtooth",f:ue(r),t:i+o*.55,a:.05,d:.5,g:.12*s,filter:{f:1100}})),this.tone({type:"sawtooth",f:ue(52),t:i+1.65,a:.05,d:1.5,g:.12*s,vib:6,vibRate:6,filter:{f:1e3}});break}case"kick":this.noise({t:i,a:.05,d:.2,g:.4*s,f:600,f2:3e3}),this.tone({type:"sine",f:160,f2:40,t:i+.22,d:.5,g:.9*s}),this.noise({t:i+.22,d:.4,g:.5*s,type:"lowpass",f:1500});break;case"crt":this.tone({type:"sine",f:9e3,f2:300,t:i,d:.4,g:.05*s}),this.tone({type:"sine",f:90,f2:30,t:i,d:.3,g:.4*s});break;case"glitch":for(let r=0;r<6;r++)this.tone({type:"square",f:100+Be()*2e3,t:i+r*.04,d:.035,g:.05*s});break;case"alarm":for(let r=0;r<(e.n||3);r++)this.tone({type:"sawtooth",f:620,t:i+r*.8,d:.38,g:.05*s,filter:{f:1800}}),this.tone({type:"sawtooth",f:830,t:i+r*.8+.4,d:.38,g:.05*s,filter:{f:1800}});break;case"yawn":this.tone({type:"sawtooth",f:330,f2:160,t:i,a:.3,d:1.3,g:.06*s,filter:{type:"bandpass",f:800,q:2}});break;case"sparkle":for(let r=0;r<6;r++)this.tone({type:"sine",f:ue(84+Math.floor(Be()*14)),t:i+r*.05,d:.2,g:.04*s,send:.5});break;case"drip":this.tone({type:"sine",f:1400+Be()*500,f2:600,t:i,d:.12,g:.06*s,send:.8});break;case"thud":this.tone({type:"sine",f:100,f2:45,t:i,d:.25,g:.4*s,send:.3}),this.noise({t:i,d:.12,g:.2*s,type:"lowpass",f:500});break;case"buzz":this.tone({type:"sawtooth",f:120,t:i,d:.25,g:.05*s,filter:{f:800}});break;case"sting":this.tone({type:"sawtooth",f:ue(45),t:i,a:.01,d:2.2,g:.12*s,filter:{f:900},send:.5}),this.tone({type:"sawtooth",f:ue(46),t:i,a:.01,d:2.2,g:.1*s,filter:{f:900},send:.5}),this.tone({type:"sine",f:ue(81),t:i,a:.01,d:1.5,g:.06*s,vib:8,send:.5}),this.noise({t:i,d:.6,g:.3*s,type:"lowpass",f:400,brown:!0});break;default:break}}_roar(t,e,i=!1,s=!1){let r=this.ctx,o=i?1.2:2.4,a=r.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.9*e,t+.25),a.gain.setValueAtTime(.9*e,t+o*.6),a.gain.exponentialRampToValueAtTime(1e-4,t+o);let l=r.createGain();l.gain.value=.7;let c=r.createOscillator();c.frequency.value=s?9:22;let h=r.createGain();h.gain.value=.3,c.connect(h),h.connect(l.gain),c.start(t),c.stop(t+o);let d=r.createWaveShaper();d.curve=this.distCurve;let f=r.createBiquadFilter();f.type="lowpass",f.Q.value=3,f.frequency.setValueAtTime(350,t),f.frequency.linearRampToValueAtTime(s?600:1700,t+.4),f.frequency.linearRampToValueAtTime(300,t+o),d.connect(f),f.connect(l),l.connect(a),this._route(a,null,.7);for(let[u,g]of[[68,0],[91,12],[113,-9],[46,4]]){let y=r.createOscillator();y.type="sawtooth",y.frequency.setValueAtTime(u*.8,t),y.frequency.linearRampToValueAtTime(u*1.25,t+.35),y.frequency.linearRampToValueAtTime(u*.7,t+o),y.detune.value=g,y.connect(d),y.start(t),y.stop(t+o+.05)}this.noise({t,a:.2,d:o,g:.35*e,type:"bandpass",f:700,f2:300,q:.8,send:.6})}babble(t,e,i){if(!this.ctx)return 0;let s={guard:210,dev:150,aaron:260,mummy:120,museos:520,narrator:180}[e]||200,r=e==="museos"?"sine":e==="dev"?"sawtooth":"triangle",o=this.now+.02,a=String(t).split(/\s+/);for(let l of a){let c=Math.max(1,Math.round(l.replace(/[^a-z]/gi,"").length/2.6));for(let h=0;h<c;h++){let d=s*(.85+Be()*.45)*(l===l.toUpperCase()&&l.length>1?1.25:1);this.tone({type:r,f:d,f2:d*(.9+Be()*.2),t:o,a:.01,d:.07,g:.06,dest:i,filter:{f:1800}}),o+=.085}o+=/[.,!?…]$/.test(l)?.22:.05}return o-this.now}playMusic(t,e=1.5){if(!this.ctx){this.pendingMusic=t;return}if(this.trackName===t)return;let i=this.now,s=this.track;if(s){s.dead=!0;let a=s.gain.gain;a.cancelScheduledValues(i),a.setValueAtTime(a.value,i),a.linearRampToValueAtTime(0,i+e),setTimeout(()=>s.gain.disconnect(),e*1e3+400)}this.trackName=t;let r=y1[t];if(!r){this.track=null;return}let o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(r.vol??.8,i+Math.max(.05,e*.5)),o.connect(this.musicBus),this.track={def:r,gain:o,step:0,next:i+.08,dead:!1}}stopMusic(t=1){this.playMusic(null,t)}_tick(){let t=this.track;if(!t||t.dead||!this.ctx)return;let e=60/t.def.bpm/4;for(t.next<this.now-.3&&(t.next=this.now+.05);t.next<this.now+.15;){try{t.def.step(this,t.step,t.next,e,t.gain)}catch(i){console.warn(i)}t.step++,t.next+=e}}setAmbient(t){if(!this.ctx){this.pendingAmbient=t;return}let e=this.now;for(let s of this.ambientNodes)try{s.g.gain.setTargetAtTime(0,e,.4),setTimeout(()=>s.src.stop(),2e3)}catch{}this.ambientNodes=[],this.ambientKind=t;let i=(s,r,o,a,l,c=1)=>{let h=this.ctx.createBufferSource();h.buffer=s,h.loop=!0,h.playbackRate.value=c;let d=this.ctx.createBiquadFilter();d.type=r,d.frequency.value=o,d.Q.value=a;let f=this.ctx.createGain();return f.gain.setValueAtTime(0,e),f.gain.linearRampToValueAtTime(l,e+2),h.connect(d),d.connect(f),f.connect(this.ambBus),h.start(),this.ambientNodes.push({src:h,g:f,fl:d}),{src:h,g:f,fl:d}};if(t==="night")i(this.brownBuf,"lowpass",200,.5,.12),i(this.noiseBuf,"bandpass",5e3,.5,.006);else if(t==="office"){i(this.brownBuf,"lowpass",180,.5,.08);let s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=60;let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=240;let o=this.ctx.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.025,e+2),s.connect(r),r.connect(o),o.connect(this.ambBus),s.start(),this.ambientNodes.push({src:s,g:o})}else if(t==="day"){let s=i(this.brownBuf,"bandpass",500,.6,.18,1.6),r=this.ctx.createOscillator(),o=this.ctx.createGain();r.frequency.value=.3,o.gain.value=.05,r.connect(o),o.connect(s.g.gain),r.start(),this.ambientNodes.push({src:r,g:o}),i(this.noiseBuf,"bandpass",1400,2,.01)}else t==="maze"?(i(this.brownBuf,"lowpass",110,.7,.22),i(this.noiseBuf,"bandpass",300,4,.01)):t==="runner"&&i(this.noiseBuf,"bandpass",600,.4,.04)}},y1={menu:{bpm:76,vol:1.25,step(n,t,e,i,s){let r=Math.floor(t/16)%4,o=t%16,l=[[57,60,64],[53,57,60],[50,53,57],[52,56,59]][r];if(o===0&&(n.pad(e,l.map(c=>c-12),i*16,.035,s,700),n.tone({type:"sine",f:ue(l[0]-24),t:e,a:.1,d:i*15,g:.12,dest:s})),o%2===0){let c=[0,1,2,1,2,1,0,2];n.pluck(e,ue(l[c[o/2%8]]+12),.5,.045,s)}o===10&&r%2===1&&n.bell(e,ue(l[2]+24),.03,s)}},explore:{bpm:54,vol:1.1,step(n,t,e,i,s){let r=t%64;r===0&&n.pad(e,[33,40],i*64,.03,s,400);let o=Math.sin(t*12.9898)*43758.5453,a=o-Math.floor(o);if(t%4===0&&a<.3){let l=[69,72,74,76,79,81,84];n.bell(e,ue(l[Math.floor(a*23)%l.length]),.025,s)}r===32&&n.tone({type:"triangle",f:ue(45),t:e,a:.01,d:2,g:.08,dest:s})}},tension:{bpm:84,vol:.8,step(n,t,e,i,s){let r=t%16;r===0&&n.kick(e,.35,s),r===3&&n.kick(e,.22,s),t%32===0&&n.pad(e,[45,46,57],i*32,.03,s,600),t%2===0&&n.tone({type:"sawtooth",f:ue(81+(t%8===0?1:0)),t:e,d:i*1.5,g:.012,dest:s,filter:{f:2e3}})}},chase:{bpm:156,vol:.85,step(n,t,e,i,s){let r=t%16,o=Math.floor(t/16)%4,l=[40,36,38,35][o];r%4===0&&n.kick(e,.55,s),(r===4||r===12)&&n.snare(e,.3,s),r%2===1&&n.hat(e,.08,s,r===15);let c=[0,0,12,0,0,12,0,7,0,0,12,0,10,12,7,5];if(n.bass(e,ue(l+c[r]-12),i*.9,.13,s,900),Math.floor(t/64)%2===1&&r%2===0){let h=[64,67,71,67,76,74,71,67];n.pluck(e,ue(h[r/2%8]+(o===1?-4:o===2?-2:o===3?-5:0)),.14,.05,s,"square")}r===0&&o===0&&n.tone({type:"sawtooth",f:ue(76),f2:ue(64),t:e,d:i*8,g:.03,dest:s,filter:{f:2500}})}},egypt:{bpm:96,vol:1.2,step(n,t,e,i,s){let r=t%16,o=Math.floor(t/16)%4;t%64===0&&n.pad(e,[38,45,50],i*64,.026,s,520),(r===0||r===6)&&n.kick(e,r===0?.26:.18,s),[3,4,10,12,14].includes(r)&&n.hat(e,r===12?.05:.03,s);let a=[62,63,66,67,69,70,72,74],l=[[0,-1,2,-1,3,2,1,0],[4,-1,3,2,3,-1,1,2],[4,5,4,3,2,-1,3,1],[2,1,0,-1,1,-1,0,-1]][o];if(r%2===0&&Math.floor(t/64)%2===1){let c=l[r/2];c>=0&&n.pluck(e,ue(a[c]),.35,.045,s)}r===8&&o===3&&n.tone({type:"sine",f:ue(74),f2:ue(72),t:e,a:.3,d:2,g:.03,dest:s,vib:6,vibRate:5,send:.4})}},maze:{bpm:92,vol:1.15,step(n,t,e,i,s){let r=t%16,o=Math.floor(t/16)%4;if(r%2===0&&n.hat(e,r%4===0?.04:.02,s),r%4===0&&n.bass(e,ue([33,33,34,32][o]),i*3,.1,s,400),r===8&&o%2===1){let a=[69,72,75,78][Math.floor(t/32)%4];n.tone({type:"sine",f:ue(a),t:e,a:.2,d:1.6,g:.05,dest:s,vib:5,vibRate:5,send:.4})}r===0&&o===0&&n.pad(e,[45,51],i*64,.025,s,500)}},morning:{bpm:112,vol:1.6,step(n,t,e,i,s){let r=t%16,o=Math.floor(t/16)%4,l=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]][o];r%4===0&&n.bass(e,ue(l[0]-24),i*2,.1,s,500),[0,3,6,8,11,14].includes(r)&&l.forEach(c=>n.pluck(e,ue(c+12),.25,.03,s)),r%4===2&&n.hat(e,.03,s),(r===4||r===12)&&n.snare(e,.06,s),r%8===0&&n.kick(e,.25,s)}},meta:{bpm:100,vol:2,step(n,t,e,i,s){let r=t%16,o=Math.floor(t/16)%4,l=[[60,64,67,71],[57,60,64,67],[50,53,57,60],[55,59,62,65]][o];[0,6,10].includes(r)&&l.forEach(c=>n.tone({type:"sine",f:ue(c),t:e,a:.01,d:.6,g:.03,dest:s,vib:3,vibRate:4})),r%4===0&&n.pluck(e,ue(l[0]-24+(r===8?7:0)),.4,.12,s,"sine"),r%4===3&&n.noise({t:e,d:.02,g:.05,f:4e3,q:4,dest:s})}},angry:{bpm:150,vol:.9,step(n,t,e,i,s){let r=t%16;r%4===0&&n.kick(e,.7,s),(r===4||r===12)&&n.snare(e,.4,s),r%2===0&&n.distBass(e,ue([28,28,31,28,34,28,33,31][r/2%8]),i*1.8,.12,s),n.hat(e,.06,s)}}};var Yu=4;function qu(n){Yu=Math.min(8,n||4)}function se(n,t,e){let i=document.createElement("canvas");return i.width=n,i.height=t,[i,i.getContext("2d",e)]}function oe(n,{repeat:t=[1,1],srgb:e=!0}={}){let i=new Gn(n);return i.wrapS=i.wrapT=yi,i.repeat.set(t[0],t[1]),e&&(i.colorSpace=ln),i.anisotropy=Yu,i}function Xn(n,t,e,i,s){let r=n.getImageData(0,0,t,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=(s()-.5)*i;o[a]+=l,o[a+1]+=l,o[a+2]+=l}n.putImageData(r,0,0)}var Ah=new Map;function v1(n,t){return Ah.has(n)||Ah.set(n,t()),Ah.get(n)}function xe(n,t=1,e=1){let s=v1(n,()=>x1[n]()).clone();return s.repeat.set(t,e),s.needsUpdate=!0,s}var x1={marble(){let[t,e]=se(512,512),i=ve(7);for(let s=0;s<2;s++)for(let r=0;r<2;r++){let o=(s+r)%2===1;e.fillStyle=o?"#2b2f38":"#ddd6c8",e.fillRect(s*256,r*256,256,256),e.strokeStyle=o?"rgba(255,255,255,0.10)":"rgba(80,70,60,0.18)";for(let a=0;a<7;a++){e.lineWidth=.6+i()*1.6,e.beginPath();let l=s*256+i()*256,c=r*256;e.moveTo(l,c);for(let h=0;h<8;h++)l+=(i()-.5)*70,c+=32,e.lineTo(l,c);e.stroke()}}e.strokeStyle="rgba(0,0,0,0.5)",e.lineWidth=2;for(let s=0;s<=2;s++)e.beginPath(),e.moveTo(s*256,0),e.lineTo(s*256,512),e.stroke(),e.beginPath(),e.moveTo(0,s*256),e.lineTo(512,s*256),e.stroke();return Xn(e,512,512,14,i),oe(t)},stone(){let[t,e]=se(512,512),i=ve(3),s=4,r=512/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=120+i()*30;e.fillStyle=`rgb(${l+12},${l+6},${l-6})`,e.fillRect(o*r,a*r,r,r);for(let c=0;c<30;c++)e.fillStyle=`rgba(${i()>.5?255:0},${i()>.5?240:0},200,0.04)`,e.beginPath(),e.arc(o*r+i()*r,a*r+i()*r,4+i()*16,0,7),e.fill()}e.strokeStyle="rgba(30,25,20,0.7)",e.lineWidth=3;for(let o=0;o<=s;o++)e.beginPath(),e.moveTo(o*r,0),e.lineTo(o*r,512),e.stroke(),e.beginPath(),e.moveTo(0,o*r),e.lineTo(512,o*r),e.stroke();return Xn(e,512,512,22,i),oe(t)},wood(){let[t,e]=se(512,512),i=ve(11),s=8,r=512/s;for(let o=0;o<s;o++){let a=i()*512;for(let l=-1;l<2;l++){let c=70+i()*30;e.fillStyle=`rgb(${c+50},${c+22},${c-10})`,e.fillRect(a+l*512*.6-512*.3,o*r,512*.6,r),e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(a+l*512*.6-512*.3,o*r,2,r)}for(let l=0;l<14;l++){e.strokeStyle=`rgba(40,20,5,${.1+i()*.15})`,e.lineWidth=1,e.beginPath();let c=o*r+i()*r;e.moveTo(0,c),e.bezierCurveTo(512*.3,c+(i()-.5)*8,512*.6,c+(i()-.5)*8,512,c),e.stroke()}e.fillStyle="rgba(0,0,0,0.5)",e.fillRect(0,o*r,512,2)}return Xn(e,512,512,10,i),oe(t)},plaster(){let[t,e]=se(256,256),i=ve(5);return e.fillStyle="#ffffff",e.fillRect(0,0,256,256),Xn(e,256,256,18,i),oe(t)},mosaic(){let[t,e]=se(512,512),i=ve(9);e.fillStyle="#3a2a20",e.fillRect(0,0,512,512);let s=16,r=["#c96f3b","#d9a066","#e8d3b0","#8c3b2a","#e8d3b0","#e8d3b0","#5a6e7a"];for(let o=0;o<512/s;o++)for(let a=0;a<512/s;a++){let l=o-512/s/2+.5,c=a-512/s/2+.5,h=Math.floor(Math.max(Math.abs(l),Math.abs(c))),d=r[(h+(Math.abs(l)===Math.abs(c)?3:0))%r.length];h>13&&(d=(o+a)%2?"#8c3b2a":"#e8d3b0"),e.fillStyle=d,e.fillRect(o*s+1+i()*1.2,a*s+1+i()*1.2,s-2.5,s-2.5)}return Xn(e,512,512,18,i),oe(t)},concrete(){let[t,e]=se(512,512),i=ve(13);e.fillStyle="#6d6a64",e.fillRect(0,0,512,512);for(let s=0;s<400;s++)e.fillStyle=`rgba(${i()>.5?255:0},${i()>.5?255:0},${i()>.5?255:0},0.03)`,e.beginPath(),e.arc(i()*512,i()*512,2+i()*30,0,7),e.fill();e.strokeStyle="rgba(20,20,20,0.35)";for(let s=0;s<5;s++){e.beginPath();let r=i()*512,o=i()*512;e.moveTo(r,o);for(let a=0;a<6;a++)r+=(i()-.5)*60,o+=(i()-.5)*60,e.lineTo(r,o);e.stroke()}return Xn(e,512,512,30,i),oe(t)},shelves(){let[e,i]=se(512,512),s=ve(21);i.fillStyle="#1b1612",i.fillRect(0,0,512,512);let r=4,o=512/r,a=["#a4824f","#b8955e","#8f6c3c","#c4a574","#9a7a52","#6b5a48"];for(let l=0;l<r;l++){let c=6;for(;c<492;){let h=40+s()*80,d=o*(.45+s()*.45);if(s()<.15){c+=h*.6;continue}i.fillStyle=a[Math.floor(s()*a.length)],i.fillRect(c,(l+1)*o-10-d,h-4,d),i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(c,(l+1)*o-10-d,h-4,5),s()<.6&&(i.fillStyle="#efe6cf",i.fillRect(c+h*.2,(l+1)*o-10-d*.6,h*.45,14),i.fillStyle="#333",i.font="bold 9px monospace",i.fillText(["ARCH","FOSSIL","MISC","1974","DO NOT","VASE","BONES?"][Math.floor(s()*7)],c+h*.22,(l+1)*o-10-d*.6+10)),c+=h}i.fillStyle="#5b5550",i.fillRect(0,(l+1)*o-12,512,12),i.fillStyle="rgba(255,255,255,0.15)",i.fillRect(0,(l+1)*o-12,512,2)}return i.fillStyle="#4a4540",i.fillRect(0,0,10,512),i.fillRect(502,0,10,512),Xn(i,512,512,16,s),oe(e)},crate(){let[t,e]=se(256,256),i=ve(17);e.fillStyle="#8a6a40",e.fillRect(0,0,256,256);for(let s=0;s<6;s++)e.fillStyle=s%2?"#7d5f38":"#94744a",e.fillRect(0,s*(256/6),256,256/6-2);return e.strokeStyle="#4b3820",e.lineWidth=18,e.strokeRect(9,9,238,238),e.beginPath(),e.moveTo(9,9),e.lineTo(247,247),e.stroke(),e.fillStyle="rgba(20,10,0,0.7)",e.font="bold 26px monospace",e.fillText("FRAGILE",70,140),Xn(e,256,256,20,i),oe(t)},carpet(){let[e,i]=se(512,512),s=ve(23);i.fillStyle="#6e1420",i.fillRect(0,0,512,512),i.fillStyle="#c9a24a",i.fillRect(0,0,14,512),i.fillRect(498,0,14,512),i.fillStyle="#5a0f19",i.fillRect(512/3-3,0,6,512),i.fillRect(2*512/3-3,0,6,512),i.fillStyle="rgba(201,162,74,0.35)";for(let r=0;r<8;r++)for(let o=0;o<3;o++){let a=(o+.5)*170.66666666666666,l=(r+.5)*(512/8);i.beginPath(),i.moveTo(a,l-14),i.lineTo(a+14,l),i.lineTo(a,l+14),i.lineTo(a-14,l),i.closePath(),i.fill()}return Xn(i,512,512,26,s),oe(e)},ceiling(){let[t,e]=se(256,256),i=ve(31);return e.fillStyle="#cfcac0",e.fillRect(0,0,256,256),e.strokeStyle="#8d877c",e.lineWidth=4,e.strokeRect(0,0,256,256),e.strokeRect(256/2,0,.1,256),e.strokeRect(0,256/2,256,.1),Xn(e,256,256,20,i),oe(t)},bone(){let[t,e]=se(128,128),i=ve(41);e.fillStyle="#d8ccb0",e.fillRect(0,0,128,128);for(let s=0;s<60;s++)e.fillStyle=`rgba(${i()>.5?120:255},${i()>.5?100:240},80,0.12)`,e.fillRect(i()*128,i()*128,1+i()*10,1+i()*3);return Xn(e,128,128,30,i),oe(t)}};function _1(n,t,e){let i=String(t).split(" "),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>e&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function Rh({title:n,body:t="",w:e=512,h:i=320,bg:s="#1c1a17",fg:r="#e9dfc8",accent:o="#c9a24a",titleFont:a="bold 40px Georgia, serif",bodyFont:l="22px Georgia, serif",align:c="left"}){let[h,d]=se(e,i);d.fillStyle=s,d.fillRect(0,0,e,i),d.strokeStyle=o,d.lineWidth=6,d.strokeRect(10,10,e-20,i-20),d.fillStyle=o,d.font=a,d.textAlign=c;let f=c==="center"?e/2:36;d.fillText(n,f,70),d.fillRect(36,88,e-72,2),d.fillStyle=r,d.font=l;let u=128;for(let g of String(t).split(`
`))for(let y of _1(d,g,e-72))d.fillText(y,f,u),u+=parseInt(l,10)*1.35;return oe(h,{repeat:[1,1]})}function Ce(n,{w:t=512,h:e=128,bg:i="#111",fg:s="#fff",font:r="bold 56px Arial Black, Arial, sans-serif",border:o=null}={}){let[a,l]=se(t,e);l.fillStyle=i,l.fillRect(0,0,t,e),o&&(l.strokeStyle=o,l.lineWidth=8,l.strokeRect(6,6,t-12,e-12)),l.fillStyle=s,l.font=r,l.textAlign="center",l.textBaseline="middle";let c=String(n).split(`
`),h=e/(c.length+.4);return c.forEach((d,f)=>l.fillText(d,t/2,e/2+(f-(c.length-1)/2)*h)),oe(a)}function $u(n,t="landscape"){let e=ve(n),i=256,s=t==="portrait"?320:192,[r,o]=se(i,s);if(t==="portrait"){let a=o.createLinearGradient(0,0,0,s);a.addColorStop(0,`hsl(${e()*60+20},30%,25%)`),a.addColorStop(1,`hsl(${e()*60},30%,10%)`),o.fillStyle=a,o.fillRect(0,0,i,s),o.fillStyle=`hsl(${e()*360},40%,30%)`,o.beginPath(),o.ellipse(i/2,s*.95,i*.42,s*.38,0,0,7),o.fill(),o.fillStyle="#d9b38c",o.beginPath(),o.ellipse(i/2,s*.42,i*.17,s*.16,0,0,7),o.fill(),o.fillStyle=`hsl(${e()*40},40%,${10+e()*30}%)`,o.beginPath(),o.ellipse(i/2,s*.33,i*.19,s*.1,0,Math.PI,0),o.fill(),o.fillStyle="#222",o.fillRect(i/2-22,s*.42,8,6),o.fillRect(i/2+14,s*.42,8,6),e()<.5&&(o.fillStyle="#c9a24a",o.fillRect(i/2-30,s*.22,60,14))}else{let a=o.createLinearGradient(0,0,0,s),l=e()*360;a.addColorStop(0,`hsl(${l},50%,${50+e()*20}%)`),a.addColorStop(.6,`hsl(${l+30},50%,70%)`),o.fillStyle=a,o.fillRect(0,0,i,s),o.fillStyle=`hsl(${e()*60+30},70%,70%)`,o.beginPath(),o.arc(i*(.2+e()*.6),s*.3,18,0,7),o.fill();for(let c=0;c<3;c++){o.fillStyle=`hsl(${100+e()*60},${30+c*10}%,${35-c*9}%)`,o.beginPath(),o.moveTo(0,s);for(let h=0;h<=i;h+=16)o.lineTo(h,s*(.5+c*.12)+Math.sin(h*.03+e()*6)*14+e()*10);o.lineTo(i,s),o.fill()}}for(let a=0;a<900;a++)o.fillStyle=`rgba(0,0,0,${e()*.08})`,o.fillRect(e()*i,e()*s,3,3);return oe(r)}function Zu(n=128,t=.12){let[e,i]=se(n,n),s=i.createImageData(n,n);for(let r=0;r<s.data.length;r+=4){let o=Math.random()*255;s.data[r]=s.data[r+1]=s.data[r+2]=o,s.data[r+3]=t*255}return i.putImageData(s,0,0),e.toDataURL()}var va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},M1=new Qs(-1,1,1,-1,0,1),Ch=class extends Re{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},b1=new Ch,Xi=class{constructor(t){this._mesh=new H(b1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,M1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var xa=class extends Tn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wi.clone(t.uniforms),this.material=new Ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Xi(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Wr=class extends Tn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_a=class extends Tn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ma=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new st);this._width=i.width,this._height=i.height,e=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xa(va),this.copyPass.material.blending=Qn,this.clock=new ar}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Wr!==void 0&&(o instanceof Wr?i=!0:o instanceof _a&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ba=class extends Tn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Ku={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var dr=class n extends Tn{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new Ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(r,o,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new fn(r,o,{type:Wn});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new fn(r,o,{type:Wn});u.texture.name="UnrealBloomPass.v"+d,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Ku;this.highPassUniforms=Wi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new st(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=va;this.copyUniforms=Wi.clone(h.uniforms),this.blendMaterial=new Ze({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:En,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ft,this.oldClearAlpha=1,this.basic=new de,this.fsQuad=new Xi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ze({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};dr.BlurDirectionX=new st(1,0);dr.BlurDirectionY=new st(0,1);var Ju={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ea=class extends Tn{constructor(){super();let t=Ju;this.uniforms=Wi.clone(t.uniforms),this.material=new oa({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var wa=["office_locker","office_poster","lobby_desk","dino_meteor","dino_mural","dino_tri","egypt_obelisk","egypt_jars","roman_chariot","roman_caligula","maze_0_0","maze_0_1","maze_1_0","maze_1_1","maze_2_0","maze_2_1"],Ei=wa.length,gs=["REX","MUMMY","1974","ZAP","DONUT","???"];var Sa=class{constructor(t){this.game=t,this.root=j("#hud"),this.meterEl=j("#meter"),this.meterFill=j(".meter-fill"),this.meterPct=j(".meter-pct"),this.meterDonut=j(".meter-donut"),this.clockEl=j("#clock"),this.objEl=j("#objective"),this.objText=j(".obj-text"),this.fragEl=j("#fragments"),this.fragSlots=j(".frag-slots"),this.prompt=j("#prompt"),this.promptText=j(".prompt-text"),this.cross=j("#crosshair"),this.compass=j("#compass"),this.compassMarker=j(".compass-marker"),this.chase=j("#chase"),this.arrow=j("#arrow"),this.big=j("#bigtext"),this.hint=j("#controls-hint"),this.toasts=j("#toasts"),this.titleEl=j("#titlecard"),this.captionEl=j("#caption"),this.donutCount=j("#donut-count"),this.fade=j("#fx-fade"),this.flashEl=j("#fx-flash"),this.drowsy=j("#fx-drowsy"),this.lids=[j("#fx-eyelids .top"),j("#fx-eyelids .bottom")],this.letterbox=j("#letterbox"),j("#fx-grain").style.backgroundImage=`url(${Zu(160,.5)})`,this.target=null,this.lastMeter=-1;for(let e=0;e<6;e++)this.fragSlots.append(we("div","frag","\xB7".repeat(Math.min(5,gs[e].length))))}show(t){this.root.classList.toggle("off",!t)}showMeter(t){this.meterEl.classList.toggle("off",!t)}showClock(t){this.clockEl.classList.toggle("off",!t)}setMeter(t){let e=Math.round(t);e!==this.lastMeter&&(e>this.lastMeter&&this.lastMeter>=0&&(this.meterEl.classList.remove("bump"),this.meterEl.offsetWidth,this.meterEl.classList.add("bump")),this.lastMeter=e,this.meterFill.style.width=je(t,0,100)+"%",this.meterPct.textContent=e+"%",this.meterEl.classList.toggle("low",t<25),this.meterDonut.classList.toggle("bitten",t<60))}setClock(t){this.clockEl.textContent=t}objective(t,e=null){if(this.target=e,!t){this.objEl.classList.add("off"),this.compass.classList.add("off");return}this.objEl.classList.remove("off","new"),this.objEl.offsetWidth,this.objEl.classList.add("new"),this.objText.textContent=t,this.compass.classList.toggle("off",!e||!this.game.save.settings.marker),this.game.audio.play("select",{vol:.6})}setFragments(t,{show:e=!0,missing:i=!1}={}){this.fragEl.classList.toggle("off",!e),[...this.fragSlots.children].forEach((s,r)=>{let o=t.includes(gs[r]),a=s.classList.contains("got");s.textContent=o?gs[r]:i&&r===5?"???":"\xB7".repeat(Math.min(5,gs[r].length)),s.classList.toggle("got",o),s.classList.toggle("missing",i&&r===5),o&&!a&&(s.style.animation="none",s.offsetWidth,s.style.animation="")})}setPrompt(t){if(!t){this.prompt.classList.add("off"),this.cross.classList.remove("hot");return}(this.promptText.textContent!==t||this.prompt.classList.contains("off"))&&(this.promptText.textContent=t,this.prompt.classList.remove("off")),this.cross.classList.add("hot"),this.prompt.querySelector("kbd").textContent=this.game.input.isTouch?"USE":"E"}crosshair(t){this.cross.classList.toggle("hidden",!t)}toast(t,e=""){let i=we("div","toast "+e,t);this.toasts.append(i),setTimeout(()=>i.remove(),3100)}titleCard(t,e){j(".tc-chapter",this.titleEl).textContent=t,j(".tc-title",this.titleEl).textContent=e,this.titleEl.classList.remove("show"),this.titleEl.offsetWidth,this.titleEl.classList.add("show"),this.game.audio.play("sting",{vol:.5})}caption(t){this.captionEl.textContent=t||""}bigText(t){this.big.textContent=t,this.big.classList.remove("show"),this.big.offsetWidth,this.big.classList.add("show")}controlsHint(t){if(!t){this.hint.classList.add("off");return}this.hint.innerHTML=t.map(e=>`<span>${e}</span>`).join(""),this.hint.classList.remove("off")}loadingTip(t,e){let i=j("#loadtip");if(!t){i.classList.add("off");return}j(".lt-chapter",i).textContent=t,j(".lt-tip",i).innerHTML=e?"\u{1F4A1} "+e:"",i.classList.remove("off")}setFade(t,e=.2){t===0&&this.loadingTip(null),this.fade.style.transition=`opacity ${e}s linear`,this.fade.style.opacity=t}flash(t="rgba(255,255,255,0.6)",e=.5){let i=this.flashEl;i.style.transition="none",i.style.background=t,i.style.opacity=1,i.offsetWidth,i.style.transition=`opacity ${e}s`,i.style.opacity=0}setDrowsy(t){this.drowsy.style.opacity=je(t,0,1)}setLids(t,e=.25){for(let i of this.lids)i.style.transition=`transform ${e}s ease-in-out`;this.lids[0].style.transform=`translateY(${-101+t*101}%)`,this.lids[1].style.transform=`translateY(${101-t*101}%)`}setLetterbox(t){this.letterbox.classList.toggle("on",t)}showChase(t){this.chase.classList.toggle("off",!t)}setChase(t,e,i){let s=je(t,0,1)*100;j(".chase-fill",this.chase).style.width=s+"%",j(".chase-you",this.chase).style.left=s+"%",j(".chase-rex",this.chase).style.left=Math.max(0,s-4-(1-e)*26)+"%",j(".danger-fill",this.chase).style.width=e*100+"%",j(".chase-dist",this.chase).textContent=Math.round(t*880)+" m",i!=null&&this.setDonutCount(`\u{1F369} \xD7 ${i}`)}setSpeedLines(t){j("#fx-speed").style.opacity=je(t,0,1)}showArrow(t){this.arrow.classList.toggle("off",!t)}setDonutCount(t){this.donutCount.classList.toggle("off",!t),t&&(this.donutCount.textContent=t)}update(){let t=this.game;if(!this.target||this.compass.classList.contains("off")||!t.player)return;let e=t.player,i=Math.atan2(-(this.target.x-e.pos.x),-(this.target.z-e.pos.z)),s=Wu(e.yaw,i),r=je(50-s/(Math.PI/2)*50,-10,110);this.compassMarker.style.left=r+"%",this.compassMarker.style.opacity=Math.abs(s)>Math.PI/2?.25:1;let o=Math.hypot(this.target.x-e.pos.x,this.target.z-e.pos.z);this.compassMarker.textContent=o<3?"\u25CF":"\u25BC"}};var E1=typeof window<"u"&&window.LOCKED_OUT_CONFIG||{},Yi={guardName:"YOU (GUARD)",devName:"THE DEV",title:["LOCKED","OUT"],...E1};var Qu={guard:{name:()=>Yi.guardName,color:"gold"},dev:{name:()=>Yi.devName,color:"pink"},aaron:{name:()=>"AARON",color:"sky"},mummy:{name:()=>"THE MUMMY",color:"sand"},museos:{name:()=>"MUSE-OS",color:"mint"}},w1={normal:{emoji:"\u{1F642}",label:"Normal",act:"Your regular face. Just chilling."},happy:{emoji:"\u{1F604}",label:"Happy",act:"Big smile!"},hungry:{emoji:"\u{1F924}",label:"Hungry",act:"Stare at an imaginary donut. Lick your lips."},cool:{emoji:"\u{1F60E}",label:"Cool",act:"Smug grin, one eyebrow up. You are the best."},confused:{emoji:"\u{1F914}",label:"Confused",act:'Squint and tilt your head. "Huh?"'},annoyed:{emoji:"\u{1F612}",label:"Annoyed",act:"Roll your eyes. Ugh."},angry:{emoji:"\u{1F620}",label:"Angry",act:"Frown as hard as you can. Grrr."},shocked:{emoji:"\u{1F632}",label:"Shocked",act:"Eyes huge, mouth wide open. WHAT?!"},scared:{emoji:"\u{1F631}",label:"Scared",act:"Hands on your cheeks. Silent scream."},sad:{emoji:"\u{1F622}",label:"Sad",act:"Big pout. Fake cry."},sleepy:{emoji:"\u{1F634}",label:"Sleepy",act:"Huge yawn, eyes half closed."}},S1={shock:"shocked",tired:"sleepy"},T1=n=>w1[n]?n:S1[n]||"normal",ys={guard01:{who:"guard",mood:"hungry",text:"Mmm. Number three is the T-Rex. Obviously. Nothing beats the King."},aaron01:{who:"aaron",mood:"normal",text:"Yo, it's Aaron. Heads up \u2014 IT is changing all the computer passwords tonight. So, uh... don't let your session time out. Okay byeee."},guard02:{who:"guard",mood:"cool",text:"Yeah, yeah. Like that's gonna happen."},museos01:{who:"museos",mood:"normal",text:"SESSION EXPIRED."},guard03:{who:"guard",mood:"annoyed",text:"Ugh. Whatever. I'll just log back in."},guard04:{who:"guard",mood:"confused",text:"Huh? Donut-one-two-three. That's literally always my password."},guard05:{who:"guard",mood:"shocked",text:"WHAT?! Who changed my password?!"},museos02:{who:"museos",mood:"normal",text:"Password reset protocol activated. To recover access... SOLVE THE PUZZLES."},museos03:{who:"museos",mood:"normal",text:"Puzzle number one sleeps where giants once walked."},guard06:{who:"guard",mood:"happy",text:"Where giants once walked... the Dino exhibit! Oh yeah, I like the Dino exhibit."},guard07:{who:"guard",mood:"cool",text:"Flashlight: check. Donuts: check. Let's go."},guard08:{who:"guard",mood:"happy",text:"Whoa. Never gets old. Hey, big guy."},museos04:{who:"museos",mood:"normal",text:"Fragment one: REX. Next puzzle: the Egyptian Wing."},guard09:{who:"guard",mood:"cool",text:"Egyptian Wing. Got it. Easy."},guard10:{who:"guard",mood:"confused",text:"...What was that?"},guard11:{who:"guard",mood:"shocked",text:"Wait. Where's the T-Rex?"},guard12:{who:"guard",mood:"scared",text:"Oh crap. Oh crap oh crap. This is like Night at the Museum."},guard13:{who:"guard",mood:"scared",text:"Okay. Totally normal. Big dinosaur's just... on a walk. I'm gonna go to the Egyptian Wing. Quickly."},guard35:{who:"guard",mood:"scared",text:"The Egyptian Wing. Why is it ALWAYS so creepy in here?"},museos13:{who:"museos",mood:"normal",text:"Puzzle number two: the Pharaoh's Lock. Its secret is written on four pillars. Count the lines."},guard42:{who:"guard",mood:"scared",text:"That footprint is the size of a bathtub. The T-Rex came through here."},guard36:{who:"guard",mood:"happy",text:"All four pillars. Now, to the Pharaoh's Lock."},museos14:{who:"museos",mood:"normal",text:"Fragment two: MUMMY. Next puzzle: the Roman Empire hall."},guard37:{who:"guard",mood:"scared",text:"Uh... why is the coffin making noises?"},guard38:{who:"guard",mood:"scared",text:"AAAH! A MUMMY! Stay back! I have a flashlight and I'm not afraid to... shine it!"},mummy01:{who:"mummy",mood:"hungry",text:"Mmmph... mmh mmph? *(Is that... a DONUT?)*"},guard39:{who:"guard",mood:"confused",text:"...You want a donut? You've been in there for three thousand years and you want a DONUT?"},mummy02:{who:"mummy",mood:"sad",text:"Mmmph. *(Please.)*"},guard40:{who:"guard",mood:"annoyed",text:"Ugh. FINE. One donut. But you owe me."},mummy03:{who:"mummy",mood:"happy",text:"MMMMMMH! *(Best. Snack. In. Three. Thousand. Years.)*"},guard41:{who:"guard",mood:"cool",text:"Yeah, they're pretty good. Okay. Back to bed, little buddy."},guard14:{who:"guard",mood:"scared",text:"Nope. Nope nope nope nope."},guard15:{who:"guard",mood:"normal",text:"Okay. Romans. Romans are chill. Romans never chased anybody."},museos05:{who:"museos",mood:"normal",text:"Fragment three: 1974. The remaining puzzles lie... beyond the walls."},guard16:{who:"guard",mood:"confused",text:"Beyond the walls? What does that even mea\u2014"},guard17:{who:"guard",mood:"shocked",text:"OH MY GOSH."},guard18:{who:"guard",mood:"scared",text:"AAAAAAAAAAH!"},guard19:{who:"guard",mood:"scared",text:"Why is this hallway so LONG?!"},guard20:{who:"guard",mood:"happy",text:"There! A hole shaped exactly like me! That is SO convenient!"},guard21:{who:"guard",mood:"cool",text:"HA! You can't fit, big guy! Shoulda done more cardio! ...Wait, you don't have lungs."},museos06:{who:"museos",mood:"normal",text:"Welcome to the archives, guard. The last password fragments are behind these gates. Also, your sugar levels are... concerning."},guard22:{who:"guard",mood:"annoyed",text:"My sugar levels are FINE."},guard23:{who:"guard",mood:"scared",text:"Is that... an EYE?! Go away! Shoo!"},museos07:{who:"museos",mood:"normal",text:"Fragment four: ZAP."},museos08:{who:"museos",mood:"normal",text:"The next gate needs three keys: red, blue and yellow. They were lost somewhere in this section. Classic."},guard24:{who:"guard",mood:"annoyed",text:"Three keys for ONE gate. Who designs these places?"},museos09:{who:"museos",mood:"normal",text:"Fragment five: DONUT. Only one fragment left. It is behind the next gate."},guard43:{who:"guard",mood:"annoyed",text:"ANOTHER gate? How big IS this place?!"},museos15:{who:"museos",mood:"normal",text:"Fragment six was not here. Have you tried the next gate?"},museos16:{who:"museos",mood:"normal",text:"Still no fragment six. It is definitely behind the next gate. Probably."},guard45:{who:"guard",mood:"confused",text:"Wait. These shelves look familiar. Am I going in circles?"},museos17:{who:"museos",mood:"normal",text:"Fun fact: nobody has ever reached the end of the archives."},museos18:{who:"museos",mood:"normal",text:"Your sugar levels are now... alarming. Please keep solving puzzles."},guard44:{who:"guard",mood:"sleepy",text:"Need... donut... so... tired..."},guard46:{who:"guard",mood:"happy",text:"A secret room! With a DONUT in it!"},guard27:{who:"guard",mood:"sleepy",text:"So... sleepy... just gonna... rest my eyes... five minutes..."},museos19:{who:"museos",mood:"normal",text:"Guard? ...Guard? Sugar level: zero. The guard is asleep. Logging out."},guard28:{who:"guard",mood:"confused",text:"Mmh... huh? It's MORNING?!"},guard29:{who:"guard",mood:"confused",text:"The T-Rex is back. Like nothing happened. ...Is that MY HAT?"},aaron02:{who:"aaron",mood:"annoyed",text:"Dude. Did you sleep in the dinosaur exhibit? Again?"},guard30:{who:"guard",mood:"shocked",text:"Aaron! The T-Rex was ALIVE! It chased me! There was a MUMMY! And the archives NEVER END!"},aaron03:{who:"aaron",mood:"cool",text:"Sure, buddy. Also, your computer's been beeping all morning. You should probably log in."},museos11:{who:"museos",mood:"normal",text:"Fragments entered: five of six. You did not solve the puzzles."},guard31:{who:"guard",mood:"angry",text:"WHAT? I solved like FIVE puzzles!"},museos12:{who:"museos",mood:"normal",text:"Five is not six. Goodbye."},dev01:{who:"dev",mood:"happy",text:"Oh hey! Welcome to my game. I made it myself. It's really good, I promise."},guard32:{who:"guard",mood:"confused",text:"Wait... that's it? That game was WAY too short."},guard33:{who:"guard",mood:"shocked",text:"Oh my gosh. Are you serious? This is really it? That's the WHOLE game?!"},dev02:{who:"dev",mood:"sad",text:"Bro, I was up all night making this."},guard34:{who:"guard",mood:"annoyed",text:"...I could do better."},dev03:{who:"dev",mood:"angry",text:"HELL NAW."},dev04:{who:"dev",mood:"angry",text:"GET OUT OF MY GAME!"},dev05:{who:"dev",mood:"annoyed",text:"...Oh. You're back. Fine. You can play it again. But NO complaining."},dev06:{who:"dev",mood:"annoyed",text:"Stop poking the TV."},dev07:{who:"dev",mood:"happy",text:"Psst. There's a MUMMY in this game now. I made it at three in the morning."}};for(let n of Object.values(ys))n.mood=T1(n.mood);var Xr={},ju;for(let n of Object.values(ys))(Xr[ju=n.who]||(Xr[ju]=new Set)).add(n.mood);var ge=Math.PI*2,Ta="#2a1a12";function Yn(n,t,e,i){n.beginPath(),n.arc(t,e,i,0,ge)}function Aa(n,t,e){let i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,t),i.addColorStop(1,e),n.fillStyle=i,n.fillRect(0,0,256,256)}function Ph(n,t,e,{mood:i,blink:s,t:r,sep:o=26,skin:a,line:l=Ta,rim:c=null}){if(i==="cool"){n.fillStyle="#0d0d12";for(let h of[-1,1])n.beginPath(),n.roundRect?n.roundRect(t+h*o-19,e-12,38,24,[4,4,12,12]):n.rect(t+h*o-19,e-12,38,24),n.fill(),c&&(n.strokeStyle=c,n.lineWidth=3,n.stroke());n.fillRect(t-o+15,e-9,(o-15)*2,5),n.fillStyle="rgba(255,255,255,0.55)";for(let h of[-1,1])n.beginPath(),n.moveTo(t+h*o-12,e-7),n.lineTo(t+h*o-4,e-7),n.lineTo(t+h*o-12,e+4),n.fill();return}if(i==="happy"){n.strokeStyle=l,n.lineWidth=5,n.lineCap="round";for(let h of[-1,1])n.beginPath(),n.arc(t+h*o,e+5,11,1.15*Math.PI,1.85*Math.PI),n.stroke();return}for(let h of[-1,1]){let d=t+h*o,f=e,u={sleepy:.3,annoyed:.55,angry:.8,shocked:1.35,scared:1.25,sad:.9,hungry:1.15}[i]??1;i==="confused"&&h>0&&(u*=.55),u*=1-s;let g=i==="shocked"?14:13,y=14*u;if(n.fillStyle="#fff",n.beginPath(),n.ellipse(d,f,g,Math.max(1.5,y),0,0,ge),n.fill(),u>.15){let p={sad:[0,4],confused:[-3,-3],hungry:[3,-3],sleepy:[0,2]}[i]||[0,1],x=i==="shocked"||i==="scared"?4:i==="hungry"?8:6.5,_=i==="scared"?Math.sin(r*50)*1.2:0;n.fillStyle="#1a1210",Yn(n,d+p[0]+_,f+p[1],Math.min(x,y)),n.fill(),n.fillStyle="#fff",i==="hungry"?tf(n,d+p[0]+2,f+p[1]-2,4.5):(Yn(n,d+p[0]+2,f+p[1]-2,1.8),n.fill())}n.strokeStyle=Ta,n.lineWidth=2,n.beginPath(),n.ellipse(d,f,g,Math.max(1.5,y),0,0,ge),n.stroke(),(i==="annoyed"||i==="angry")&&a&&u>.1&&(n.fillStyle=a,n.beginPath(),i==="annoyed"?n.rect(d-g-2,f-y-3,g*2+4,y*.75+3):(n.moveTo(d-g-2,f-y-3),n.lineTo(d+g+2,f-y-3),n.lineTo(d+h*-g,f-y*.1),n.lineTo(d+h*g,f-y*.7)),n.fill(),n.strokeStyle=Ta,n.lineWidth=2.5,n.beginPath(),i==="annoyed"?(n.moveTo(d-g,f-y*.25),n.lineTo(d+g,f-y*.25)):(n.moveTo(d+h*-g,f-y*.1),n.lineTo(d+h*g,f-y*.7)),n.stroke())}}function tf(n,t,e,i){n.beginPath();for(let s=0;s<8;s++){let r=s/8*ge-Math.PI/2,o=s%2?i*.4:i;s?n.lineTo(t+Math.cos(r)*o,e+Math.sin(r)*o):n.moveTo(t+Math.cos(r)*o,e+Math.sin(r)*o)}n.closePath(),n.fill()}function Ih(n,t,e,i,s=Ta,r=26){n.strokeStyle=s,n.lineWidth=6,n.lineCap="round";for(let o of[-1,1]){let[a,l]={normal:[0,-2],happy:[-6,-8],hungry:[-8,-6],annoyed:[3,3],angry:[10,-6],shocked:[-14,-12],scared:[-14,-4],sad:[-10,4],sleepy:[-2,5]}[i]||[0,-2];i==="cool"&&([a,l]=o>0?[-10,-16]:[2,2]),i==="confused"&&([a,l]=o>0?[-10,-14]:[4,2]),n.beginPath(),n.moveTo(t+o*(r-14),e-22+a),n.quadraticCurveTo(t+o*r,e-27+(a+l)/2,t+o*(r+12),e-24+l),n.stroke()}}function Lh(n,t,e,i,s,r){let o=i>.05;n.fillStyle="#5a1e1e",n.strokeStyle="#2a1010",n.lineWidth=3,n.lineCap="round";let a=(l,c,h=.45)=>{n.fillStyle="#ff7a8a",n.beginPath(),n.ellipse(t,e+c*h,l*.55,c*.35,0,0,ge),n.fill()};if(s==="shocked"){let l=16+i*8;n.beginPath(),n.ellipse(t,e+4,12,l,0,0,ge),n.fill(),n.stroke();return}if(s==="happy"||s==="hungry"){let c=14+i*10;if(n.beginPath(),n.moveTo(t-26,e-4),n.quadraticCurveTo(t,e-8,t+26,e-4),n.quadraticCurveTo(t+26*.8,e+c*1.6,t,e+c*1.4),n.quadraticCurveTo(t-26*.8,e+c*1.6,t-26,e-4),n.fill(),n.stroke(),n.save(),n.clip(),a(26,c*1.4,.75),n.fillStyle="#fff",n.fillRect(t-26,e-9,26*2,7),n.restore(),s==="hungry"){let h=r*.7%1;n.fillStyle="rgba(150,210,255,0.95)",n.beginPath(),n.ellipse(t+18,e+10+h*22,4,6+h*4,0,0,ge),n.fill()}return}if(s==="angry"){let l=o?10+i*16:8;if(n.beginPath(),n.moveTo(t-22,e+2),n.lineTo(t+22,e+2),n.lineTo(t+16,e+2+l),n.lineTo(t-16,e+2+l),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(t-19,e+3,38,Math.min(6,l*.45)),!o){n.strokeStyle="#999",n.lineWidth=1.5;for(let c=-12;c<=12;c+=8)n.beginPath(),n.moveTo(t+c,e+3),n.lineTo(t+c,e+9),n.stroke()}return}if(s==="scared"){let l=6+i*10;n.beginPath();for(let c=0;c<=20;c++){let h=t-24+c*2.4;n.lineTo(h,e-2+Math.sin(c*1.4+r*30)*2)}for(let c=20;c>=0;c--){let h=t-24+c*2.4;n.lineTo(h,e+l+Math.sin(c*1.4+r*30+1)*2)}n.closePath(),n.fillStyle="#fff",n.fill(),n.stroke(),n.strokeStyle="#bbb",n.lineWidth=1.5,n.beginPath(),n.moveTo(t-22,e+l/2),n.lineTo(t+22,e+l/2),n.stroke();return}if(s==="sad"){o&&(n.beginPath(),n.ellipse(t,e+4,14,3+i*10,0,0,ge),n.fill(),n.stroke()),n.strokeStyle="#2a1010",n.lineWidth=3.5,n.beginPath(),n.arc(t,e+22,18,1.2*Math.PI,1.8*Math.PI),n.stroke();return}if(s==="cool"){if(o){n.beginPath(),n.ellipse(t+8,e+2,14,3+i*9,-.15,0,ge),n.fill(),n.stroke();return}n.beginPath(),n.moveTo(t-14,e+4),n.quadraticCurveTo(t+6,e+8,t+20,e-4),n.stroke();return}if(s==="confused"){if(o){n.beginPath(),n.ellipse(t-6,e+2,9,3+i*9,0,0,ge),n.fill(),n.stroke();return}n.beginPath(),n.moveTo(t-18,e+2);for(let l=1;l<=6;l++)n.lineTo(t-18+l*6,e+2+(l%2?-4:3));n.stroke();return}if(s==="sleepy"){let l=6+i*8+Math.max(0,Math.sin(r*.9))*8;n.beginPath(),n.ellipse(t,e+4,10,l,0,0,ge),n.fill(),n.stroke();return}if(s==="annoyed"){if(o){n.beginPath(),n.ellipse(t,e+2,16,2+i*8,.08,0,ge),n.fill(),n.stroke();return}n.beginPath(),n.moveTo(t-16,e+3),n.lineTo(t+16,e-1),n.stroke();return}if(o){let l=3+i*16;n.beginPath(),n.ellipse(t,e,20,l,0,0,ge),n.fill(),n.stroke(),l>8&&a(20,l);return}n.beginPath(),n.arc(t,e-8,16,.25*Math.PI,.75*Math.PI),n.stroke()}function kh(n,t,e,i,s,r){let[o,a,l,c]=r;if(i==="happy"&&(n.fillStyle="rgba(255,110,120,0.4)",Yn(n,t-38,e+22,11),n.fill(),Yn(n,t+38,e+22,11),n.fill()),i==="angry"){n.save(),n.beginPath(),n.ellipse(o,a,l,c,0,0,ge),n.clip(),n.fillStyle="rgba(230,30,20,0.28)",n.fillRect(0,0,256,256),n.restore(),n.strokeStyle="#d00000",n.lineWidth=4;let h=t+44,d=e-46;for(let[f,u]of[[[-9,-3],[-3,-3]],[[3,-3],[9,-3]],[[-3,-9],[-3,-3]],[[3,3],[3,9]],[[-9,3],[-3,3]],[[3,-9],[3,-3]],[[-3,3],[-3,9]],[[3,3],[9,3]]])n.beginPath(),n.moveTo(h+f[0],d+f[1]),n.lineTo(h+u[0],d+u[1]),n.stroke();n.fillStyle="rgba(255,255,255,0.7)";for(let f of[-1,1]){let u=(s*.8+(f>0?.5:0))%1;Yn(n,t+f*(l+10+u*8),e-10-u*40,6+u*6),n.fill()}}if(i==="scared"||i==="sad"){n.save(),n.beginPath(),n.ellipse(o,a,l,c,0,0,ge),n.clip();let h=n.createLinearGradient(0,a-c,0,a);h.addColorStop(0,i==="scared"?"rgba(90,110,200,0.55)":"rgba(90,110,200,0.3)"),h.addColorStop(1,"rgba(90,110,200,0)"),n.fillStyle=h,n.fillRect(0,0,256,256),n.restore()}if((i==="scared"||i==="shocked")&&(n.fillStyle="rgba(140,200,255,0.95)",n.beginPath(),n.ellipse(t+50,e-18+s*40%30,5,8,0,0,ge),n.fill()),i==="sad"){n.fillStyle="rgba(120,190,255,0.9)";for(let h of[-1,1])for(let d=0;d<2;d++){let f=(s*.9+d*.5+(h>0?.25:0))%1;n.beginPath(),n.ellipse(t+h*30,e+12+f*46,4,6,0,0,ge),n.fill()}}if(i==="shocked"&&(n.fillStyle="#ffdd33",n.font="bold 54px Arial Black, Arial",n.fillText("!",202,72+Math.sin(s*8)*3)),i==="confused"&&(n.fillStyle="#ffdd33",n.font="bold 50px Arial Black, Arial",n.fillText("?",196,70+Math.sin(s*3)*5)),i==="sleepy"){n.fillStyle="#fff";for(let h=0;h<3;h++){let d=(s*.5+h/3)%1;n.globalAlpha=1-d,n.font=`bold ${16+h*6}px Arial`,n.fillText("Z",190+d*30,90-d*60)}n.globalAlpha=1}if(i==="hungry"){n.fillStyle="rgba(255,255,255,0.92)",Yn(n,206,48,30),n.fill(),Yn(n,176,84,7),n.fill(),Yn(n,166,98,4),n.fill(),n.fillStyle="#d49a5c",Yn(n,206,48,19),n.fill(),n.fillStyle="#ff7eb6",Yn(n,206,46,16),n.fill(),n.fillStyle="rgba(255,255,255,0.92)",Yn(n,206,47,6),n.fill();let h=["#3bc9ff","#ffe14d","#7dff6b"];for(let d=0;d<6;d++)n.fillStyle=h[d%3],n.fillRect(206+Math.cos(d)*11-2,46+Math.sin(d*1.7)*10,4,2)}i==="cool"&&(n.fillStyle="rgba(255,255,255,0.9)",tf(n,214,46+Math.sin(s*3)*3,9+Math.sin(s*5)*2))}function ef(n,t,{t:e=0,talk:i=0,mood:s="normal",blink:r=0}={}){n.save(),n.clearRect(0,0,256,256);let o=Math.sin(e*2)*2+i*2,a=s==="scared"?Math.sin(e*45)*1.5:0,l={t:e,talk:i,mood:s,blink:r,bob:o,cx:128+a,cy:132+o};t==="museos"?P1(n,l):t==="mummy"?C1(n,l):t==="dev"?R1(n,l):A1(n,l,t==="aaron"),n.restore()}function A1(n,{t,talk:e,mood:i,blink:s,bob:r,cx:o,cy:a},l){Aa(n,l?"#3a5a7a":"#0e1a30",l?"#1a2a3a":"#050a14"),l||(n.fillStyle="rgba(80,255,140,0.12)",n.fillRect(10,30,70,50),n.fillRect(176,30,70,50)),n.fillStyle="#8fb3e0",n.beginPath(),n.ellipse(o,280+r,112,95,0,0,ge),n.fill(),n.fillStyle="#6f93c0",n.beginPath(),n.moveTo(o-30,196+r),n.lineTo(o,226+r),n.lineTo(o+30,196+r),n.fill(),n.fillStyle="#ffd34d",n.beginPath(),n.moveTo(o-62,214+r),n.lineTo(o-48,208+r),n.lineTo(o-36,214+r),n.lineTo(o-40,232+r),n.lineTo(o-58,232+r),n.fill();let c=l?"#b07a52":"#e3b48f";n.fillStyle=c,n.fillRect(o-18,a+40,36,30),n.beginPath(),n.ellipse(o-58,a+6,10,16,0,0,ge),n.ellipse(o+58,a+6,10,16,0,0,ge),n.fill(),n.beginPath(),n.ellipse(o,a+4,58,64,0,0,ge),n.fill(),Ph(n,o,a,{mood:i,blink:s,t,skin:c}),Ih(n,o,a,i),n.fillStyle=l?"#8a5a3a":"#c99070",n.beginPath(),n.ellipse(o,a+16,7,9,0,0,ge),n.fill(),l&&(n.fillStyle="#1a1210",n.beginPath(),n.ellipse(o,a+30,24,7,0,0,ge),n.fill()),Lh(n,o,a+40,e,i,t),kh(n,o,a,i,t,[o,a+4,58,64]),n.fillStyle="#1b2440",n.beginPath(),n.ellipse(o,a-44,64,40,0,Math.PI,0),n.fill(),n.fillRect(o-64,a-46,128,12),n.beginPath(),n.ellipse(o,a-34,72,12,0,0,Math.PI),n.fill(),n.fillStyle="#ffd34d",n.beginPath(),n.moveTo(o,a-76),n.lineTo(o+12,a-66),n.lineTo(o+8,a-52),n.lineTo(o-8,a-52),n.lineTo(o-12,a-66),n.fill(),l&&(n.fillStyle="#111",n.fillRect(o-50,a-70,40,14),n.fillRect(o+10,a-70,40,14),n.fillStyle="#fff",n.font="bold 13px Arial",n.fillText("DAY SHIFT",o-34,248))}function R1(n,{t,talk:e,mood:i,blink:s,bob:r,cx:o,cy:a}){let l=i==="angry";Aa(n,l?"#4a0000":"#14162a",l?"#1a0000":"#2a1640"),n.fillStyle=l?"rgba(255,60,60,0.3)":"rgba(80,160,255,0.25)",n.fillRect(150,30,100,70),n.fillStyle=l?"#6a1030":"#3a2a5a",n.beginPath(),n.ellipse(o,270+r,110,90,0,0,ge),n.fill(),n.beginPath(),n.ellipse(o,a-6,78,86,0,0,ge),n.fill();let c="#f0c4a0";n.fillStyle=c,n.beginPath(),n.ellipse(o,a+4,56,62,0,0,ge),n.fill(),n.fillStyle="#2a1a10",n.beginPath(),n.moveTo(o-60,a-20);for(let h=0;h<=10;h++){let d=Math.PI+h/10*Math.PI,f=64+(h%2?16:0)+Math.sin(t*3+h)*2;n.lineTo(o+Math.cos(d)*f,a-14+Math.sin(d)*f*.85)}if(n.lineTo(o+60,a-20),n.quadraticCurveTo(o,a-38,o-60,a-20),n.fill(),n.strokeStyle="#111",n.lineWidth=10,n.beginPath(),n.arc(o,a+60,50,.1*Math.PI,.9*Math.PI),n.stroke(),n.fillStyle="#ff6fae",n.fillRect(o-62,a+62,22,30),n.fillRect(o+40,a+62,22,30),Ph(n,o,a,{mood:i,blink:s,t,sep:24,skin:c}),i!=="cool"&&i!=="happy"){n.strokeStyle="rgba(90,40,90,0.6)",n.lineWidth=3;for(let h of[-1,1])n.beginPath(),n.arc(o+h*24,a+14,12,.15*Math.PI,.85*Math.PI),n.stroke()}Ih(n,o,a,i,"#2a1a10",24),Lh(n,o,a+36,e,i,t),kh(n,o,a,i,t,[o,a+4,56,62]),n.fillStyle="#eee",n.fillRect(196,190+r,34,40),n.strokeStyle="#eee",n.lineWidth=5,n.beginPath(),n.arc(232,210+r,9,-Math.PI/2,Math.PI/2),n.stroke(),n.fillStyle="#c33",n.font="bold 11px Arial",n.fillText("DEV",202,214+r)}function C1(n,{t,talk:e,mood:i,blink:s,bob:r,cx:o,cy:a}){Aa(n,"#2a1d0a","#0e0904"),n.fillStyle="rgba(232,201,154,0.12)",n.font="bold 26px serif",["\u2625","\u25C9","\u25EC","\u263C"].forEach((d,f)=>n.fillText(d,14+f%2*196,50+f*46));let l="#e6dcc2",c="#b9ab88";n.fillStyle=l,n.beginPath(),n.ellipse(o,282+r,106,92,0,0,ge),n.fill(),n.beginPath(),n.ellipse(o,a+4,58,66,0,0,ge),n.fill(),n.save(),n.beginPath(),n.ellipse(o,a+4,58,66,0,0,ge),n.clip(),n.strokeStyle=c,n.lineWidth=3;for(let d=-6;d<9;d++)n.beginPath(),n.moveTo(o-70,a+d*14+6),n.lineTo(o+70,a+d*14-6+d%2*8),n.stroke();n.fillStyle="#1a1208",n.beginPath(),n.ellipse(o,a,52,17,0,0,ge),n.fill(),n.restore(),n.strokeStyle=l,n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(o+44,a-40),n.quadraticCurveTo(o+80,a-52+Math.sin(t*2)*6,o+92,a-20+Math.sin(t*2.5)*8),n.stroke(),Ph(n,o,a,{mood:i,blink:s,t,sep:24,skin:"#1a1208",line:"#fff3c4",rim:"#d4a43a"}),Ih(n,o,a-4,i,c,24);let h=a+40;e>.05||["shocked","happy","hungry"].includes(i)?Lh(n,o,h,e*.7,i,t):(n.strokeStyle="#6a5a3a",n.lineWidth=3,n.beginPath(),n.moveTo(o-14,h),n.lineTo(o+14,h),n.stroke()),kh(n,o,a,i,t,[o,a+4,58,66])}function P1(n,{t,talk:e,blink:i}){Aa(n,"#031208","#062a14"),n.fillStyle="#0c3a1f",n.fillRect(40,50,176,140),n.strokeStyle="#6dff9e",n.lineWidth=4,n.strokeRect(40,50,176,140),n.fillStyle="#6dff9e";let s=i>.5;n.fillRect(84,92,22,s?4:22),n.fillRect(150,92,22,s?4:22),n.beginPath(),n.lineWidth=4,n.strokeStyle="#6dff9e";for(let r=0;r<=40;r++){let o=78+r*2.5,a=152+Math.sin(r*.9+t*20)*e*14;r?n.lineTo(o,a):n.moveTo(o,a)}n.stroke();for(let r=0;r<256;r+=4)n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,r,256,2);n.fillStyle="#6dff9e",n.font="bold 18px monospace",n.fillText("MUSE-OS",92,222)}var Yr=class{constructor(t,{canvas:e,img:i,video:s,root:r=t,nameEl:o=null}){this.root=r,this.frame=t,this.canvas=e,this.ctx=e.getContext("2d"),this.img=i,this.video=s,this.nameEl=o,this.who="guard",this.mood="normal",this.talk=0,this.speaking=!1,this.blinkT=2,this.blink=0,this.t=0}setMode(t){this.frame.classList.toggle("has-video",t==="video"),this.frame.classList.toggle("has-img",t==="img")}showFace(t){let e=this.video;t?.kind==="video"?(this.setMode("video"),e.getAttribute("src")!==t.url&&(e.src=t.url),e.muted=!0,e.loop=!0,e.play().catch(()=>{})):(e.paused||e.pause(),e.loop=!1,t?(this.setMode("img"),this.img.getAttribute("src")!==t.url&&(this.img.src=t.url)):this.setMode("canvas"))}update(t){this.t+=t,this.blinkT-=t,this.blinkT<0&&(this.blink=1,this.blinkT<-.12&&(this.blink=0,this.blinkT=2+Math.random()*3));let e=this.speaking?Math.abs(Math.sin(this.t*17))*(.5+Math.random()*.5):0;this.talk+=(e-this.talk)*Math.min(1,t*25),this.frame.classList.toggle("talking",this.speaking),ef(this.ctx,this.who,{t:this.t,talk:this.talk,mood:this.mood,blink:this.blink})}},Ra=class{constructor(t){this.game=t,this.sub=j("#subtitle"),this.subName=j(".sub-name",this.sub),this.subText=j(".sub-text",this.sub),this.fcRoot=j("#facecam");let e=j(".fc-frame",this.fcRoot);if(this.facecam=new Yr(e,{canvas:j("canvas",e),img:j("img",e),video:j("video",e),root:this.fcRoot,nameEl:j(".fc-name",this.fcRoot)}),this.tv=null,this.current=null,this.typeT=0,this.fullText="",this.voices=[],this.allowClickSkip=!1,"speechSynthesis"in window){let s=()=>{this.voices=speechSynthesis.getVoices().filter(r=>/^en/i.test(r.lang))};s(),speechSynthesis.onvoiceschanged=s}let i=s=>{!this.current||!this.allowClickSkip||s.target.closest&&s.target.closest("button, .modal, #menu")||this.skipLine()};addEventListener("mousedown",i),addEventListener("touchstart",i,{passive:!0})}stationFor(t){return this.tv&&(t==="dev"||this.forceTv)?this.tv:this.facecam}skipLine(){this.current&&this.current.skip()}stop(){this.skipLine()}update(t){if(this.current){this.typeT+=t;let e=Math.min(this.fullText.length,Math.floor(this.typeT*55));e!==this.shown&&(this.shown=e,this.subText.textContent=this.fullText.slice(0,e),this.sub.classList.toggle("done",e>=this.fullText.length))}this.fcRoot.classList.contains("off")||this.facecam.update(t),this.tv&&this.tv.update(t)}say(t,e={}){let i=ys[t]||{who:e.who||"guard",text:t,mood:"normal"};return this.sayRaw(i.who,i.text,{mood:i.mood,clip:ys[t]?t:null,...e})}async sayRaw(t,e,{mood:i="normal",clip:s=null,hold:r=.35,showCam:o=!0}={}){let a=this.game;if(a.sched.skipping)return;this.skipLine();let l,c=new Promise(p=>l=p),h={skipped:!1,skip:()=>{h.skipped=!0,l()}};this.current=h,document.body.classList.add("talking");let d=this.stationFor(t);d.who=t,d.mood=i;let f=Qu[t]?.name()||t.toUpperCase(),u=a.save.settings.subtitles!=="off";this.sub.classList.toggle("off",!u),this.sub.dataset.who=t,this.sub.dataset.place=d===this.tv?"tv":this.fcRoot.classList.contains("menu-pos")?"left":"",this.subName.textContent=f,this.fullText=e.replace(/\*([^*]+)\*/g,"$1"),this.typeT=0,this.shown=-1,this.subText.textContent="",this.sub.classList.remove("done"),this.sub.style.animation="none",this.sub.offsetWidth,this.sub.style.animation="",d===this.facecam?(this.fcRoot.classList.toggle("off",!o),this.fcRoot.dataset.who=t,d.nameEl.textContent=f,this.fcRoot.style.animation="none",this.fcRoot.offsetWidth,this.fcRoot.style.animation=""):this.tvBubble?.(e);let g=await a.clips.forLine(s,t,i);if(h.skipped)return this._end(h,d);let y=p=>new Promise(m=>setTimeout(m,p*1e3));if(g?.type==="line"){d.setMode("video");let p=d.video;p.src=g.url,p.loop=!1,p.muted=!1,p.volume=Math.min(1,a.save.settings.master*1.1),p.currentTime=0,d.speaking=!1;let m=new Promise(x=>{p.onended=x,p.onerror=x});try{await p.play()}catch{p.muted=!0,p.play().catch(()=>{})}await Promise.race([m,c,y(30)]),p.pause()}else{d.showFace(g),d.speaking=!0;let p=1.2+e.length*.055,m=a.save.settings.voice||"tts",x;if(m==="tts"&&"speechSynthesis"in window&&this.voices.length&&!this.ttsBroken)x=Promise.race([this._tts(t,e),y(p*1.8+2)]).then(_=>{if(_==="nostart"&&!h.skipped)return this.ttsBroken=!0,y(Math.max(a.audio.babble(e,t),.6))});else if(m!=="off"){let _=a.audio.babble(e,t);x=y(Math.max(_,.6))}else x=y(p);await Promise.race([x,c]),"speechSynthesis"in window&&speechSynthesis.cancel(),d.speaking=!1,this.subText.textContent=this.fullText,this.sub.classList.add("done"),h.skipped||await Promise.race([y(r),c])}return this._end(h,d)}_end(t,e){this.current===t&&(this.current=null,document.body.classList.remove("talking"),this.sub.classList.add("off"),e===this.facecam?this.fcRoot.classList.add("off"):this.tvBubble?.(null),e.speaking=!1,e.showFace(e===this.facecam?null:this.game.clips.face(e.who,e.mood)))}_tts(t,e){return new Promise(i=>{let s=e.replace(/\*[^*]+\*/g,"").replace(/—/g,", ").replace(/MUSE-OS/g,"Muse O S"),r=new SpeechSynthesisUtterance(s),o=this.voices,a={guard:0,dev:1,aaron:2,museos:3,mummy:1};r.voice=o[(a[t]??0)%o.length],r.pitch={guard:1.05,dev:.85,aaron:1.3,museos:.4,mummy:.1}[t]??1,r.rate={guard:1.08,dev:1,aaron:1.12,museos:.88,mummy:.75}[t]??1,r.volume=Math.min(1,(this.game.save.settings.master??.8)*1.1);let l=!1;r.onstart=()=>{l=!0},r.onend=()=>i("end"),r.onerror=()=>i(l?"end":"nostart"),speechSynthesis.cancel(),speechSynthesis.speak(r),setTimeout(()=>{!l&&!speechSynthesis.speaking&&(speechSynthesis.cancel(),i("nostart"))},1500)})}setPaused(t){let e=this.facecam.video;t?(e.pause(),"speechSynthesis"in window&&speechSynthesis.pause()):(this.current&&e.src&&!e.ended&&this.facecam.frame.classList.contains("has-video")&&e.play().catch(()=>{}),"speechSynthesis"in window&&speechSynthesis.resume())}};var I1="assets/clips/",L1=["mp4","webm","mov"],k1=["jpg","jpeg","png","webp"],nf=["guard","dev","aaron","mummy"];function D1(n,t){return new Promise(e=>{let i=!1,s=document.createElement(t==="video"?"video":"img"),r=o=>{if(!i){if(i=!0,t==="video"){s.removeAttribute("src");try{s.load()}catch{}}e(o)}};t==="video"?(s.preload="metadata",s.muted=!0,s.onloadedmetadata=()=>r(!0)):s.onload=()=>r(!0),s.onerror=()=>r(!1),setTimeout(()=>r(!1),8e3),s.src=n})}var Ca=class{constructor(){this.found={},this.probes={},this.listeners=new Set}init(){let t=[],e=r=>{t.push(()=>this._find(`img:${r}`,r,"img"));for(let o of Xr[r]||[])t.push(()=>this._find(`emoimg:${r}-${o}`,`${r}-${o}`,"img")),t.push(()=>this._find(`emovid:${r}-${o}`,`${r}-${o}`,"video"))};e("dev");for(let r of nf)r!=="dev"&&e(r);for(let r of Object.keys(ys))t.push(()=>this._find(`line:${r}`,r,"video"));let i=0,s=async()=>{for(;i<t.length;)await t[i++]()};Promise.all([s(),s(),s(),s(),s(),s()]).then(()=>this._emit())}_find(t,e,i){return this.probes[t]||(this.probes[t]=(async()=>{for(let s of i==="video"?L1:k1){let r=`${I1}${e}.${s}`;if(await D1(r,i))return this.found[t]={url:r,kind:i},this._emit(),this.found[t]}return null})()),this.probes[t]}_candidates(t,e,i){let s=[];return t&&s.push([`line:${t}`,t,"video","line"]),nf.includes(e)&&(s.push([`emovid:${e}-${i}`,`${e}-${i}`,"video","emotion"]),s.push([`emoimg:${e}-${i}`,`${e}-${i}`,"img","emotion"]),s.push([`img:${e}`,e,"img","photo"])),s}async forLine(t,e,i){let s=performance.now()+450;for(let[r,o,a,l]of this._candidates(t,e,i)){if(this.found[r])return{...this.found[r],type:l};let c=s-performance.now(),h=c>0?await Promise.race([this._find(r,o,a),new Promise(d=>setTimeout(()=>d(null),c))]):null;if(h)return{...h,type:l}}return null}face(t,e="normal"){for(let[i]of this._candidates(null,t,e))if(this.found[i])return this.found[i];return null}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}_emit(){for(let t of this.listeners)t()}};function ur(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Re,c=0;for(let h=0;h<n.length;++h){let d=n[h],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,d=[];for(let f=0;f<n.length;++f){let u=n[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=sf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let y=0;y<o[h].length;++y)u.push(o[h][y][f]);let g=sf(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function sf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ze(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);a.setComponent(f+d,g,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function U1(n){return Object.keys(n.attributes).sort().map(e=>e+n.attributes[e].itemSize).join(",")+(n.index?"|i":"|n")}function wi(n,t=()=>!1){n.updateMatrixWorld(!0);let e=new ce().copy(n.matrixWorld).invert(),i=new Map,s=l=>{if(!(l!==n&&t(l))){if(l.isMesh&&!l.isInstancedMesh&&!l.isSkinnedMesh&&l!==n&&l.visible&&l.children.length===0&&!Array.isArray(l.material)&&!l.material.transparent&&!l.userData.noBatch&&l.geometry?.attributes?.position){let c=`${l.material.uuid}|${l.castShadow}|${l.receiveShadow}|${l.renderOrder}|${U1(l.geometry)}`;i.has(c)||i.set(c,[]),i.get(c).push(l)}for(let c of[...l.children])c.visible&&s(c)}};s(n);let r=0,o=0,a=new ce;for(let l of i.values()){if(l.length<2)continue;let c=l.map(u=>{let g=u.geometry.clone();for(let y of Object.keys(g.morphAttributes))delete g.morphAttributes[y];return a.multiplyMatrices(e,u.matrixWorld),g.applyMatrix4(a),g}),h;try{h=ur(c,!1)}catch{h=null}for(let u of c)u.dispose();if(!h)continue;let d=l[0],f=new H(h,d.material);f.castShadow=d.castShadow,f.receiveShadow=d.receiveShadow,f.renderOrder=d.renderOrder,f.name="batched",n.add(f);for(let u of l)u.parent?.remove(u),o++;r++}return{merged:r,removed:o}}function Pa(n,t=[]){let e=new Set(n),i=new Set(t),s=0;for(let r of n){let o=wi(r,a=>e.has(a)||i.has(a));s+=o.removed}return s}var rf={},Se=(n,t)=>rf[n]||(rf[n]=t()),Dh={};function zt(n,t){return Dh[n]||(Dh[n]=new ct(t)),Dh[n]}var Mt={marble:()=>zt("marble",{color:15657698,roughness:.35}),stoneWhite:()=>zt("stoneWhite",{color:14275527,roughness:.6}),darkWood:()=>zt("darkWood",{color:4861724,roughness:.6}),wood:()=>zt("wood",{color:9067059,roughness:.7}),metal:()=>zt("metal",{color:9146262,roughness:.35,metalness:.8}),black:()=>zt("black",{color:1381653,roughness:.6}),brass:()=>zt("brass",{color:13214282,roughness:.35,metalness:.9}),velvet:()=>zt("velvet",{color:9048098,roughness:.9}),glass:()=>zt("glass",{color:11193565,roughness:.05,metalness:.1,transparent:!0,opacity:.18,depthWrite:!1}),plant:()=>zt("plant",{color:3107636,roughness:.8,side:ke}),terracotta:()=>zt("terracotta",{color:11884591,roughness:.75}),bronze:()=>zt("bronze",{color:9071162,roughness:.4,metalness:.7}),red:()=>zt("red",{color:10230812,roughness:.8}),dough:()=>zt("dough",{color:13933148,roughness:.7})};function Le(n,t=!0,e=!0){return n.traverse(i=>{i.isMesh&&(i.castShadow=t,i.receiveShadow=e)}),n}function ot(n,t,e,i,s=0,r=0,o=0){let a=new H(new ee(n,t,e),i);return a.position.set(s,r+t/2,o),a}var of=[16744118,7027230,16774112,8049663,16765773],af=[16726843,3918335,16769357,8257387,16777215,12086271];function Si({frosting:n=0,glow:t=!1,scale:e=1}={}){let i=new pt,s=new H(Se("dough",()=>new Ge(.12,.062,12,24)),Mt.dough());s.rotation.x=Math.PI/2,i.add(s);let r=of[n%of.length],o=zt("frost"+r+t,{color:r,roughness:.3,emissive:t?r:0,emissiveIntensity:t?.35:0}),a=new H(Se("frost",()=>new Ge(.12,.058,10,24,Math.PI*2)),o);a.rotation.x=Math.PI/2,a.scale.set(1.03,1.03,.62),a.position.y=.022,i.add(a);let l=Se("sprinkles"+n%5,()=>{let c=ve(n*31+7),h=new Ln(.006,.022,2,4),d=[],f=new Ft,u=new ce,g=new Pn,y=new vn;for(let p=0;p<14;p++){let m=c()*Math.PI*2,x=.09+c()*.06;f.set(af[Math.floor(c()*af.length)]);let _=h.clone();g.setFromEuler(y.set(Math.PI/2,0,c()*Math.PI)),_.applyMatrix4(u.compose(new A(Math.cos(m)*x,.06,Math.sin(m)*x),g,new A(1,1,1)));let v=_.attributes.position.count,w=new Float32Array(v*3);for(let S=0;S<v;S++)w[S*3]=f.r,w[S*3+1]=f.g,w[S*3+2]=f.b;_.setAttribute("color",new ze(w,3)),d.push(_)}return ur(d,!1)});return i.add(new H(l,zt("sprinkleMat"+t,{vertexColors:!0,roughness:.4,emissive:t?4473924:0}))),i.scale.setScalar(e),i}var Uh=null;function lf(n=0){let t=new pt,e=Si({frosting:n,glow:!0,scale:1.3});if(e.rotation.x=.5,t.add(e),!Uh){let[s,r]=se(128,128),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,190,220,0.9)"),o.addColorStop(.4,"rgba(255,120,180,0.25)"),o.addColorStop(1,"rgba(255,120,180,0)"),r.fillStyle=o,r.fillRect(0,0,128,128),Uh=oe(s)}let i=new ir(new ds({map:Uh,transparent:!0,depthWrite:!1,blending:En}));return i.scale.set(.9,.9,1),t.add(i),t.userData.spin=e,t.userData.halo=i,t}function Nh(n=7,t=.45,e=Mt.marble()){let i=new pt;i.add(ot(t*2.6,.35,t*2.6,e));let s=new H(Se("colshaft"+n+t,()=>new ne(t*.88,t,n-.8,20)),e);return s.position.y=.35+(n-.8)/2,i.add(s),i.add(ot(t*2.4,.15,t*2.4,e,0,n-.45,0)),i.add(ot(t*2.7,.3,t*2.7,e,0,n-.3,0)),Le(i)}function fr(n=.8,t=1.1,e=Mt.marble()){let i=new pt;return i.add(ot(n*1.15,.1,n*1.15,e)),i.add(ot(n,t-.2,n,e,0,.1,0)),i.add(ot(n*1.15,.1,n*1.15,e,0,t-.1,0)),Le(i)}function Ia(n,t=15328474){let e=new pt,i=zt("bust"+t,{color:t,roughness:.45});e.add(fr(.7,1.2));let s=new H(Se("bustsh",()=>new ie(.32,16,10,0,Math.PI*2,0,Math.PI/2)),i);s.scale.set(1.1,.6,.65),s.position.y=1.2,e.add(s);let r=new H(Se("bustneck",()=>new ne(.08,.1,.2,10)),i);r.position.y=1.42,e.add(r);let o=new H(Se("busthead",()=>new ie(.15,16,12)),i);o.scale.set(.9,1.1,1),o.position.y=1.62,e.add(o);let a=new H(Se("bustnose",()=>new cn(.03,.08,6)),i);a.rotation.x=Math.PI/2,a.position.set(0,1.62,.15),e.add(a);let l=new H(Se("laurel",()=>new Ge(.15,.02,6,16)),Mt.brass());if(l.rotation.x=Math.PI/2-.2,l.position.y=1.72,e.add(l),n){let c=new H(new Gt(.6,.12),new ct({map:Ce(n,{w:256,h:52,bg:"#2a241c",fg:"#e9d7a8",font:"bold 26px Georgia, serif"}),roughness:.5}));c.position.set(0,.95,.357),e.add(c)}return Le(e)}function cf(){let n=[],t=[[0,0],[.08,0],[.12,.08],[.22,.3],[.26,.5],[.22,.75],[.1,.92],[.08,1.05],[.11,1.1]];for(let[s,r]of t)n.push(new st(s,r));let e=new pt,i=new H(Se("amph",()=>new Hr(n,18)),Mt.terracotta());e.add(i);for(let s of[-1,1]){let r=new H(Se("amphh",()=>new Ge(.1,.02,6,12,Math.PI)),Mt.terracotta());r.position.set(s*.12,.88,0),r.rotation.z=s>0?-Math.PI/2:Math.PI/2,e.add(r)}return Le(e)}function La(n=2.2){let t=new pt;t.add(ot(n,.08,.5,Mt.darkWood(),0,.42,0));for(let e of[-1,1])t.add(ot(.08,.42,.42,Mt.metal(),e*(n/2-.2),0,0));return Le(t)}function pr(){let n=new pt;n.add(new H(Se("stanb",()=>new ne(.16,.18,.04,14)),Mt.brass()));let t=new H(Se("stanp",()=>new ne(.03,.03,.95,8)),Mt.brass());t.position.y=.48,n.add(t);let e=new H(Se("stant",()=>new ie(.05,10,8)),Mt.brass());return e.position.y=.98,n.add(e),Le(n)}function qr(n){let t=new sr(new A(0,.92,0),new A(n/2,.62,0),new A(n,.92,0)),e=new H(new ra(t,12,.025,6),Mt.velvet());return e.castShadow=!0,e}function Oh(n=1){let t=new pt,e=ve(n),i=Se("leaf",()=>{let r=new ti;return r.moveTo(0,0),r.quadraticCurveTo(.12,.4,0,.9),r.quadraticCurveTo(-.12,.4,0,0),new sa(r,4)});for(let r=0;r<9;r++){let o=new H(i,Mt.plant()),a=r/9*Math.PI*2+e();o.rotation.set(0,a,0),o.rotateX(-.6-e()*.5),o.scale.setScalar(.8+e()*.7),t.add(o)}let s=new H(Se("pot",()=>new ne(.25,.2,.35,12)),Mt.terracotta());return s.position.y=.17,t.add(s),t.children.forEach((r,o)=>{o<9&&(r.position.y=.33)}),Le(t,!0,!1)}function Hh(n=1,t=1){let e=ve(n),i=new na(.6*t,1),s=i.attributes.position;for(let o=0;o<s.count;o++)s.setXYZ(o,s.getX(o)*(.8+e()*.4),s.getY(o)*(.6+e()*.3),s.getZ(o)*(.8+e()*.4));i.computeVertexNormals();let r=new H(i,zt("rock",{color:6050634,roughness:.95,flatShading:!0}));return r.position.y=.2*t,r.castShadow=r.receiveShadow=!0,r}function $r(n=1.4,t=1,e=.8,i=null){let s=new pt;s.add(ot(n,.9,e,Mt.darkWood()));let r=ot(n,t,e,Mt.glass(),0,.9,0);return r.castShadow=!1,s.add(r),s.add(ot(n+.04,.04,e+.04,Mt.brass(),0,.9+t,0)),i&&(i.position.y=.9,s.add(i)),Le(s),r.castShadow=!1,s}function qi(n,t,e={}){let i=new pt,s=ot(.08,.9,.08,Mt.black());i.add(s);let r=new H(new Gt(.9,.56),new ct({map:Rh({title:n,body:t,...e}),roughness:.6,emissive:16777215,emissiveIntensity:.02}));r.position.set(0,1.05,.05),r.rotation.x=-.5,i.add(r);let o=new H(new ee(.96,.6,.03),Mt.black());return o.position.z=-.02,r.add(o),Le(i,!0,!0)}function ka(n,t,e=2,i=1.25,s={}){return new H(new Gt(e,i),new ct({map:Rh({title:n,body:t,w:512,h:Math.round(512*i/e),...s}),roughness:.6,emissive:16777215,emissiveIntensity:.03}))}function Da({title:n="PUZZLE",color:t="#6dff9e"}={}){let e=new pt;e.add(ot(.7,1,.5,Mt.black()));let i=ot(.8,.08,.6,Mt.metal(),0,1,0);e.add(i);let[s,r]=se(320,200),o=oe(s),a=new de({map:o,toneMapped:!1}),l=new H(new Gt(.62,.39),a);l.position.set(0,1.32,.03),l.rotation.x=-.45;let c=ot(.7,.46,.06,Mt.black(),0,1.08,0);c.rotation.x=-.45,c.position.set(0,1.31,-.005),e.add(c),e.add(l);let h=new Ie(t,.8,3.5,2);h.position.set(0,1.5,.5),e.add(h);let d=0,f=(u,g=t,y="")=>{r.fillStyle="#05080a",r.fillRect(0,0,320,200),r.strokeStyle=g,r.lineWidth=6,r.strokeRect(6,6,308,188),r.fillStyle=g,r.font='bold 26px "Courier New", monospace',r.textAlign="center",r.fillText(n,160,48),r.font='bold 22px "Courier New", monospace',u.forEach((p,m)=>r.fillText(p,160,98+m*30)),y&&(r.font='18px "Courier New", monospace',r.fillText(y,160,178));for(let p=0;p<200;p+=4)r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,p,320,2);o.needsUpdate=!0,h.color.set(g)};return f(["LOCKED"],t,"[E] INSPECT"),Le(e),l.castShadow=!1,{group:e,draw:f,light:h,update(u){d+=u,a.color.setScalar(.85+Math.sin(d*6)*.15)}}}function hf(){let n=new pt,t=Mt.bronze(),e=ot(1.3,.9,1.1,t,0,.55,0);n.add(e);for(let s of[-1,1]){let r=new H(Se("wheel",()=>new Ge(.55,.06,8,24)),Mt.darkWood());r.position.set(s*.75,.6,0),r.rotation.y=Math.PI/2,n.add(r);for(let o=0;o<4;o++){let a=ot(.04,1.1,.04,Mt.darkWood(),s*.75,.05,0);a.rotation.x=o*Math.PI/4,a.position.set(s*.75,.6,0),n.add(a)}}let i=ot(.08,.08,2.2,Mt.darkWood(),0,.5,1.6);return n.add(i),Le(n)}function df(){let n=new pt,t=zt("trik",{color:13221019,roughness:.8,map:xe("bone",1,1)}),e=new H(Se("frill",()=>new bi(.85,24,0,Math.PI)),zt("frillm",{color:12760207,roughness:.8,side:ke}));e.position.set(0,.5,-.2),e.rotation.x=-.3,n.add(e);let i=new H(Se("trihead",()=>new cn(.35,1.2,10)),t);i.rotation.x=Math.PI/2+.3,i.position.set(0,.35,.5),n.add(i);let s=Se("horn",()=>new cn(.07,.8,8));for(let o of[-1,1]){let a=new H(s,t);a.position.set(o*.22,.7,.2),a.rotation.set(1.1,0,-o*.2),n.add(a)}let r=new H(s,t);return r.scale.set(.8,.45,.8),r.position.set(0,.5,.95),r.rotation.x=.6,n.add(r),Le(n)}function uf(){let n=new pt,t=zt("ammo",{color:11046506,roughness:.6});for(let e=0;e<4;e++){let i=new H(new Ge(.06+e*.045,.02+e*.012,6,18),t);i.position.y=.25,n.add(i)}return n}function ff(){let n=new pt,t=zt("sarc",{color:13935674,roughness:.35,metalness:.7}),e=zt("sarcb",{color:2047370,roughness:.5}),i=new H(Se("sarcb",()=>new Ln(.32,1.4,4,12)),t);i.scale.set(1,1,.55),i.position.y=1.05,n.add(i);let s=new H(Se("sarcf",()=>new ie(.2,12,10)),t);s.position.set(0,1.62,.12),s.scale.set(1,1.2,.6),n.add(s);for(let o of[-1,1]){let a=ot(.12,.6,.05,e,o*.2,1.35,.13);n.add(a)}let r=new H(Se("sarce",()=>new ee(.22,.03,.02)),zt("sarceye",{color:1118481}));return r.position.set(0,1.66,.24),n.add(r),Le(n)}function pf(n=1){let t=ve(n),e=new pt,i=zt("sheet",{color:14210252,roughness:.95}),s=1.6+t()*.6,r=new ne(.18,.5,s,12,6),o=r.attributes.position;for(let c=0;c<o.count;c++){let h=o.getY(c),d=Math.atan2(o.getZ(c),o.getX(c)),f=1+Math.sin(d*5+h*3)*.06;o.setX(c,o.getX(c)*f),o.setZ(c,o.getZ(c)*f)}r.computeVertexNormals();let a=new H(r,i);a.position.y=s/2,e.add(a);let l=new H(Se("sheethead",()=>new ie(.22,12,10)),i);if(l.position.y=s+.1,e.add(l),t()<.5){let c=new H(Se("sheetarm",()=>new Ln(.07,.5,4,6)),i);c.position.set(.3,s*.75,.15),c.rotation.set(-.9,0,-.5),e.add(c)}return Le(e)}function mf(n=1){let t=zt("crate",{map:xe("crate"),roughness:.85}),e=new H(Se("crate",()=>new ee(1,1,1)),t);return e.scale.setScalar(n),e.position.y=n/2,e.castShadow=e.receiveShadow=!0,e}function gf(n=1.8,t=.8){let e=new pt;e.add(ot(n,.06,t,Mt.darkWood(),0,.74,0));for(let i of[-1,1])e.add(ot(.06,.74,t-.05,Mt.darkWood(),i*(n/2-.05),0,0));return e.add(ot(.5,.6,t-.1,Mt.darkWood(),n/2-.35,.08,0)),Le(e)}function yf(){let n=new pt,t=zt("chairseat",{color:2238e3,roughness:.7});n.add(ot(.5,.08,.5,t,0,.45,0));let e=ot(.5,.6,.07,t,0,.55,-.24);n.add(e);let i=new H(new ne(.03,.03,.4,8),Mt.metal());i.position.y=.25,n.add(i);for(let s=0;s<5;s++){let r=ot(.04,.03,.32,Mt.metal(),0,.03,0);r.rotation.y=s/5*Math.PI*2,r.position.set(Math.sin(r.rotation.y)*.16,.03,Math.cos(r.rotation.y)*.16),n.add(r)}return Le(n)}function vf(n=.95,t=.6,e=1024,i=640){let s=new pt;s.add(ot(.25,.03,.2,Mt.black())),s.add(ot(.05,.25,.05,Mt.black(),0,.03,-.03));let r=ot(n+.06,t+.06,.05,Mt.black(),0,.25,-.03);s.add(r);let[o,a]=se(e,i),l=oe(o),c=new H(new Gt(n,t),new de({map:l,toneMapped:!1}));c.position.set(0,.28+t/2,0),s.add(c);let h=new Ie(10471167,1.2,4,2);return h.position.set(0,.6,.5),s.add(h),Le(s),c.castShadow=!1,{group:s,canvas:o,ctx:a,texture:l,screen:c,glow:h}}function $i(){let n=new pt,t=new H(new ne(.028,.03,.26,12),zt("flbody",{color:1842204,roughness:.4,metalness:.6}));t.rotation.x=Math.PI/2,n.add(t);let e=new H(new ne(.045,.03,.08,14),zt("flhead",{color:2763306,roughness:.3,metalness:.8}));e.rotation.x=Math.PI/2,e.position.z=-.16,n.add(e);let i=new H(new bi(.04,16),new de({color:16774876}));i.position.z=-.201,i.rotation.y=Math.PI,n.add(i);let s=new H(new ne(.031,.031,.1,12),zt("flgrip",{color:3355443,roughness:.9}));return s.rotation.x=Math.PI/2,s.position.z=.06,n.add(s),n.userData.lens=i,n}function Ua(){return new H(new ee(.7,.25,.08),[Mt.black(),Mt.black(),Mt.black(),Mt.black(),new de({map:Ce("EXIT",{w:256,h:96,bg:"#0a3d1c",fg:"#6dff9e",font:"bold 64px Arial Black, Arial"}),toneMapped:!1}),Mt.black()])}function Fh(n,t=""){let e=new pt;e.add(ot(.06,1.6,.06,Mt.brass()));let i=new H(new Gt(1.5,.45),new ct({map:Ce(n+(t?"  "+t:""),{w:512,h:150,bg:"#1d2433",fg:"#f3e6c4",font:"bold 44px Arial Black, Arial",border:"#c9a24a"}),roughness:.5,emissive:16777215,emissiveIntensity:.05,side:ke}));return i.position.y=1.6,e.add(i),Le(e)}function qn(n,t,e,i=2){let s=new ee(n,t,e),r=s.attributes.uv,o=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;r.setXY(c,r.getX(c)*o[a][0]/i,r.getY(c)*o[a][1]/i)}return s}function vs(n,t,e=2){let i=new Gt(n,t),s=i.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*n/e,s.getY(r)*t/e);return i}var Zi=class{constructor(t){this.game=t,this.scene=new nr,this.colliders=[],this.interactables=[],this.triggers=[],this.updaters=[],this.collectibles=[],this.surface="marble",this.surfaceAt=null,this.wallT=.4}add(t,e=0,i=0,s=0,r=0){return t.position.set(e,i,s),t.rotation.y=r,this.scene.add(t),t}addCollider(t,e,i,s,r=null){let o={minX:Math.min(t,e),maxX:Math.max(t,e),minZ:Math.min(i,s),maxZ:Math.max(i,s),tag:r,enabled:!0};return this.colliders.push(o),o}addBoxCollider(t,e,i,s,r=0){let o=Math.abs(Math.sin(r))>.7,a=(o?s:i)/2,l=(o?i:s)/2;return this.addCollider(t-a,t+a,e-l,e+l)}addInteractable(t){let e={radius:2.4,enabled:!0,height:1.2,...t};return this.interactables.push(e),e}addTrigger(t){let e={once:!0,fired:!1,enabled:!0,...t};return this.triggers.push(e),e}addUpdater(t){return this.updaters.push(t),t}addCollectible(t,e,i,s,r=0){if(this.game.save.donuts.includes(t))return null;let o=lf(r);o.position.set(e,i,s),this.scene.add(o);let a={id:t,obj:o,base:i,t:Math.random()*6,taken:!1};return this.collectibles.push(a),a}wallX(t,e,i,s,r,o=[],a=2){this._wall("x",t,e,i,s,r,o,a)}wallZ(t,e,i,s,r,o=[],a=2){this._wall("z",t,e,i,s,r,o,a)}_wall(t,e,i,s,r,o,a,l){let c=this.wallT,h=[],d=Math.min(i,s),f=Math.max(i,s);for(let u of[...a].sort((g,y)=>g.c-y.c)){let g=u.c-u.w/2,y=u.c+u.w/2;g>d&&h.push([d,g,0,r]),u.h<r&&h.push([g,y,u.h,r]),d=y}d<f&&h.push([d,f,0,r]);for(let[u,g,y,p]of h){let m=g-u,x=(u+g)/2,_=p-y,v=t==="x"?qn(m,_,c,l):qn(c,_,m,l),w=new H(v,o);t==="x"?w.position.set(x,y+_/2,e):w.position.set(e,y+_/2,x),w.receiveShadow=!0,w.castShadow=y>0,this.scene.add(w),y===0&&(t==="x"?this.addCollider(u,g,e-c/2,e+c/2):this.addCollider(e-c/2,e+c/2,u,g))}}floor(t,e,i,s,r,o=0,a=2){let l=e-t,c=s-i,h=new H(vs(l,c,a),r);return h.rotation.x=-Math.PI/2,h.position.set((t+e)/2,o,(i+s)/2),h.receiveShadow=!0,this.scene.add(h),h}ceiling(t,e,i,s,r,o,a=2){let l=e-t,c=s-i,h=new H(vs(l,c,a),o);return h.rotation.x=Math.PI/2,h.position.set((t+e)/2,r,(i+s)/2),this.scene.add(h),h}update(t){for(let s of this.updaters)s(t);let e=this.game,i=e.player;for(let s of this.collectibles)if(!s.taken&&(s.t+=t,s.obj.position.y=s.base+Math.sin(s.t*2)*.08,s.obj.userData.spin.rotation.y+=t*1.6,s.obj.userData.halo.material.opacity=.6+Math.sin(s.t*4)*.3,i&&i.enabled)){let r=i.pos.x-s.obj.position.x,o=i.pos.z-s.obj.position.z;r*r+o*o<1.1*1.1&&Math.abs(s.obj.position.y-1)<1.6&&(s.taken=!0,s.obj.parent?.remove(s.obj),e.collectDonut(s.id,s.amount),this.onCollected?.(s))}if(i&&i.enabled)for(let s of this.triggers){if(!s.enabled||s.once&&s.fired)continue;let r;s.r!=null?r=Math.hypot(i.pos.x-s.x,i.pos.z-s.z)<s.r:r=i.pos.x>s.minX&&i.pos.x<s.maxX&&i.pos.z>s.minZ&&i.pos.z<s.maxZ,r&&!s.inside&&(s.fired=!0,s.onEnter?.()),s.inside=r}}dispose(){this.scene.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){let e=Array.isArray(t.material)?t.material:[t.material];for(let i of e)i.map&&!i.map.userData?.keep&&i.map.dispose(),i.dispose()}})}};var Na=null;function Oa(){return Na||(Na={bone:new ct({color:15129796,roughness:.72,map:xe("bone",1,2)}),dark:new ct({color:1380364,roughness:1}),tooth:new ct({color:16183518,roughness:.35}),eye:new ct({color:16723984,emissive:16722432,emissiveIntensity:5})},Na)}var xf={};function tn(n,t){return xf[n]||(xf[n]=t())}function zh(n,t,e,i,s,r=0){let o=new ee(n,t,e,6,6,10);o.translate(0,0,e/2);let a=o.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l)/(n/2),h=a.getY(l)/(t/2),d=Math.pow(Math.pow(Math.abs(c),2.6)+Math.pow(Math.abs(h),2.6),1/2.6);if(d>1e-6){let g=Math.max(Math.abs(c),Math.abs(h))/d;a.setX(l,a.getX(l)*g),a.setY(l,a.getY(l)*g)}let f=a.getZ(l)/e;a.setX(l,a.getX(l)*(1+(i-1)*f));let u=a.getY(l)*(1+(s-1)*f);u>0&&(u-=r*f*f),a.setY(l,u)}return o.computeVertexNormals(),o}function Ve(n,t,e=!0){let i=new H(n,t);return i.castShadow=e,i.receiveShadow=!1,i}function Ki(n,t,e,i){let s=new pt,r=Ve(tn(`shaft${n}${t}${e}`,()=>new ne(e,t,n,8)),i);r.position.y=-n/2,s.add(r);let o=Ve(tn(`knob${t}`,()=>new ie(t*1.35,10,8)),i);s.add(o);let a=Ve(tn(`knob${e}`,()=>new ie(e*1.35,10,8)),i);return a.position.y=-n,s.add(a),s}function Gh(n,t){let e=new pt,i=Ve(tn("vcent",()=>new ie(.13,10,8)),t);i.scale.set(1,.85,1.25),e.add(i);let s=Ve(tn("vspine",()=>new ee(.05,.34,.11)),t);s.position.y=.2,e.add(s);let r=Ve(tn("vtrans",()=>new ee(.42,.05,.07)),t);return r.position.y=.05,e.add(r),e.scale.setScalar(n),e}function Vh(n=Oa()){let t=new pt,e=1.65,i=Ve(tn("skull",()=>zh(.62,.72,e,.55,.62,.12)),n.bone);i.position.z=-.1,t.add(i);let s=Ve(tn("crest",()=>zh(.46,.16,1,.5,.6)),n.bone);s.position.set(0,.36,-.08),t.add(s);let r=tn("sph",()=>new ie(.12,10,8)),o=[];for(let h of[-1,1]){let d=Ve(r,n.dark,!1);d.position.set(h*.25,.16,.36),d.scale.set(.7,.95,1.1),t.add(d);let f=new H(tn("eye",()=>new ie(.06,10,8)),n.eye);f.position.set(h*.29,.16,.39),f.visible=!1,t.add(f),o.push(f);let u=Ve(r,n.dark,!1);u.position.set(h*.2,0,.88),u.scale.set(.55,.75,1.9),t.add(u);let g=Ve(r,n.dark,!1);g.position.set(h*.08,.1,1.46),g.scale.set(.35,.3,.45),t.add(g);let y=Ve(r,n.bone);y.position.set(h*.3,-.18,.05),y.scale.set(.8,1.2,1.4),t.add(y)}let a=tn("tooth",()=>{let h=new cn(.035,.17,6);return h.rotateX(Math.PI),h});for(let h of[-1,1])for(let d=0;d<10;d++){let f=.3+d*.125,u=(f+.1)/e,g=Ve(a,n.tooth,!1);g.position.set(h*(.31*(1-.45*u)-.035),-.36*(1-.38*u)-.06,f),g.scale.setScalar(d<2||d>7?.75:1.05),t.add(g)}let l=new pt;l.position.set(0,-.2,-.05),t.add(l);let c=Ve(tn("jaw",()=>zh(.56,.2,1.55,.5,.8)),n.bone);c.position.set(0,-.27,0),l.add(c);for(let h of[-1,1])for(let d=0;d<9;d++){let f=.35+d*.125,u=f/1.55,g=Ve(a,n.tooth,!1);g.rotation.x=Math.PI,g.position.set(h*(.28*(1-.5*u)-.04),-.27+.1*(1-.2*u)+.06,f),g.scale.setScalar(.85),l.add(g)}return{head:t,jaw:l,eyes:o}}var xs=class{constructor({eyeLight:t=!0}={}){let e=Oa();this.group=new pt,this.body=new pt,this.body.position.y=3.42,this.group.add(this.body),this.alive=!1;let i=Ve(tn("pelvis",()=>new ie(.45,14,10)),e.bone);i.scale.set(.9,.75,1.45),i.position.z=.05,this.body.add(i);for(let d of[-1,1]){let f=Ve(tn("ilium",()=>new ie(.5,12,10)),e.bone);f.scale.set(.14,.55,1.35),f.position.set(d*.26,.14,.05),this.body.add(f);let u=Ve(tn("pubis",()=>new ne(.05,.08,1,6)),e.bone);u.position.set(d*.15,-.55,.35),u.rotation.x=.5,this.body.add(u)}let s=[];for(let d=0;d<11;d++){let f=d/10,u=-.25+f*3,g=.38+Math.sin(f*Math.PI)*.1+f*.32;s.push([u,g]);let y=Gh(1.05-.15*f,e.bone);y.position.set(0,g,u),y.rotation.x=-.1,this.body.add(y)}let r=Math.PI*2-.9;for(let d=0;d<9;d++){let f=d/8,u=.3+f*2.3,g=.38+Math.sin((u+.25)/3*Math.PI)*.1+(u+.25)/3*.32,y=.48+.34*Math.sin((.15+f*.75)*Math.PI),p=tn(`rib${d}`,()=>new Ge(y,.04,6,22,r)),m=Ve(p,e.bone);m.rotation.order="XYZ",m.rotation.x=.38,m.rotation.z=Math.PI/2+.45,m.scale.set(.58,1.12,1),m.position.set(0,g-y*1.05+.05,u-.15),this.body.add(m)}let o=new A(0,.86,2.85),a=new A(0,1.55,3.42);for(let d=0;d<5;d++){let f=o.clone().lerp(a,d/4),u=Gh(.95,e.bone);u.position.copy(f),u.rotation.x=-.9,this.body.add(u)}this.headPivot=new pt,this.headPivot.position.set(0,1.72,3.5),this.body.add(this.headPivot);let l=Vh(e);this.headPivot.add(l.head),this.jaw=l.jaw,this.eyes=l.eyes,this.eyeLight=null,t&&(this.eyeLight=new Ie(16722432,0,9,1.6),this.eyeLight.position.set(0,.2,.9),l.head.add(this.eyeLight)),this.arms=[];for(let d of[-1,1]){let f=new pt;f.position.set(d*.5,.15,2.45),f.rotation.set(-.6,0,d*.2),this.body.add(f),f.add(Ki(.45,.05,.04,e.bone));let u=new pt;u.position.y=-.45,u.rotation.x=-1.1,f.add(u),u.add(Ki(.36,.04,.035,e.bone));for(let g of[-1,1]){let y=Ki(.14,.02,.015,e.bone);y.position.set(g*.03,-.36,0),y.rotation.x=-.6,u.add(y)}this.arms.push(f)}this.tail=[];let c=this.body;for(let d=0;d<14;d++){let f=new pt;d===0?f.position.set(0,.32,-.5):f.position.set(0,0,-.5*(1-d*.03)),c.add(f);let u=Gh(1-d*.062,e.bone);if(f.add(u),d<9){let g=Ve(tn("chev",()=>new ee(.04,.32,.08)),e.bone);g.position.y=-.2*(1-d*.08),g.rotation.x=-.4,f.add(g)}this.tail.push(f),c=f}this.legs=[-1,1].map(d=>this._leg(d,e)),this.anim={mode:"pose",phase:0,speed:0,roar:0,roarT:0,headYaw:.28,headPitch:.05,jaw:.28,targetYaw:.28,targetPitch:.05,breathe:0,time:0,lean:0},this.applyPose(0);let h=[this.body,this.headPivot,this.jaw,...this.tail,...this.arms,...this.legs.flatMap(d=>[d.hip,d.knee,d.ankle,d.foot])];Pa(h,this.eyes)}_leg(t,e){let i=new pt;i.position.set(t*.44,-.05,.15),this.body.add(i);let s=Ki(1.45,.2,.12,e.bone);i.add(s);let r=new pt;r.position.y=-1.45,i.add(r),r.add(Ki(1.55,.12,.075,e.bone));let o=Ki(1.4,.04,.03,e.bone);o.position.set(0,-.05,-.1),r.add(o);let a=new pt;a.position.y=-1.55,r.add(a),a.add(Ki(.8,.08,.07,e.bone));let l=new pt;l.position.y=-.8,a.add(l);for(let c of[-.13,0,.13]){let h=new pt;h.position.set(c,-.04,0),h.rotation.set(Math.PI/2+.1,c*-1.6,0),h.rotation.order="YXZ",l.add(h),h.add(Ki(c===0?.55:.45,.05,.035,e.bone));let d=Ve(tn("claw",()=>new cn(.035,.14,5)),e.tooth,!1);d.position.y=c===0?-.6:-.5,d.rotation.x=Math.PI,h.add(d)}return{hip:i,knee:r,ankle:a,foot:l,side:t}}setAlive(t){this.alive=t;for(let e of this.eyes)e.visible=t;this.eyeLight&&(this.eyeLight.intensity=t?6:0)}setMode(t,e=0){this.anim.mode=t,this.anim.speed=e}roar(t=2.2){this.anim.roar=t,this.anim.roarT=0}lookAt(t){let e=this.group.worldToLocal(t.clone()),i=new A(0,5.3,3.5),s=e.sub(i);this.anim.targetYaw=Math.max(-.8,Math.min(.8,Math.atan2(s.x,s.z))),this.anim.targetPitch=Math.max(-.4,Math.min(.6,-Math.atan2(s.y,Math.hypot(s.x,s.z))))}update(t){this.anim.time+=t,this.applyPose(t)}applyPose(t){let e=this.anim,i=e.mode,s=0,r=0,o=0,a=0,l=0,c=0;i==="walk"?(c=e.speed/3.6,s=.45,r=.55,o=.12,a=.04,l=.06):i==="run"&&(c=e.speed/6.5,s=.7,r=.9,o=.22,a=.16,l=.04),e.phase+=c*Math.PI*2*t;let h=e.phase;for(let p of this.legs){let m=h+(p.side>0?Math.PI:0),x=Math.max(0,Math.cos(m)),_=-.5-s*Math.sin(m),v=1.1+r*x,w=-.95-r*.6*x;p.hip.rotation.x=_-a,p.knee.rotation.x=v,p.ankle.rotation.x=w,p.foot.rotation.x=-(_-a+v+w)}e.lean=t?hn(e.lean,a,4,t):a,this.body.rotation.x=e.lean;let d=3.42-o*Math.abs(Math.sin(h));this.alive&&i==="idle"&&(d+=Math.sin(e.time*1.6)*.04),this.body.position.y=d;let f=i==="pose"?.05:0;this.tail.forEach((p,m)=>{p.rotation.y=l*Math.sin(h+m*.45)+f*(m>6?1:.3)+(this.alive&&i==="idle"?Math.sin(e.time*.9+m*.3)*.03:0),p.rotation.x=m<5?.035:-.018});let u=i==="pose"?.28:.1,g=e.targetPitch,y=e.targetYaw;if(i==="run"&&(g=.15+Math.sin(h*2)*.05,y=0,u=.35+Math.max(0,Math.sin(h))*.2),i==="walk"&&(g+=Math.sin(h*2)*.04),this.alive&&i==="idle"&&(u=.12+Math.max(0,Math.sin(e.time*.8))*.1),e.roar>0){e.roarT+=t;let p=e.roarT/e.roar;if(p>=1)e.roar=0;else{let m=p<.15?p/.15:p>.8?(1-p)/.2:1;g=-.45*m+(1-m)*g,u=.95*m+Math.sin(e.roarT*40)*.05*m,y+=Math.sin(e.roarT*9)*.08*m}}t?(e.headYaw=hn(e.headYaw,y,6,t),e.headPitch=hn(e.headPitch,g,e.roar>0?10:5,t),e.jaw=hn(e.jaw,u,14,t)):(e.headYaw=y,e.headPitch=g,e.jaw=u),this.headPivot.rotation.set(e.headPitch,e.headYaw,0,"YXZ"),this.jaw.rotation.x=e.jaw;for(let p of this.arms)p.rotation.x=-.6+Math.sin(h*2)*(i==="run"?.3:.05)}};var Wh=new Map;function We(n,t=.8){let e=n+":"+t;return Wh.has(e)||Wh.set(e,new ct({color:n,roughness:t})),Wh.get(e)}var _f={},Ne=(n,t)=>_f[n]||(_f[n]=t());function Oe(n,t){let e=new H(n,t);return e.castShadow=!0,e}var _s=class{constructor(t={}){let e=this.opts={shirt:8365785,pants:1911364,skin:14725519,hair:2825492,shoes:1381653,cap:!1,badge:!1,hairStyle:"short",scale:1,nameTag:null,...t};this.group=new pt;let i=this.root=new pt;i.scale.setScalar(e.scale),this.group.add(i);let s=this.hips=new pt;s.position.y=.92,i.add(s);let r=Oe(Ne("pelvis",()=>new ee(.34,.2,.21)),We(e.pants));s.add(r);let o=this.torso=new pt;o.position.y=.08,s.add(o);let a=Oe(Ne("chest",()=>new Ln(.18,.3,4,10)),We(e.shirt));a.scale.set(1.05,1,.72),a.position.y=.27,o.add(a);let l=Oe(Ne("belt",()=>new ee(.36,.06,.24)),We(1118481,.5));if(l.position.y=.02,o.add(l),e.badge){let v=Oe(Ne("badge",()=>new ee(.06,.07,.02)),new ct({color:16765773,metalness:.8,roughness:.3}));v.position.set(-.09,.38,.135),o.add(v);let w=Oe(Ne("radio",()=>new ee(.05,.1,.03)),We(2236962));w.position.set(.1,.4,.13),o.add(w)}if(e.nameTag){let v=Oe(Ne("tag",()=>new ee(.09,.035,.01)),We(16777215));v.position.set(.09,.4,.135),o.add(v)}let c=Oe(Ne("neck",()=>new ne(.055,.06,.1,8)),We(e.skin));c.position.y=.6,o.add(c);let h=this.head=new pt;h.position.y=.64,o.add(h);let d=Oe(Ne("head",()=>new ie(.135,16,12)),We(e.skin));d.scale.set(.95,1.08,1),d.position.y=.12,h.add(d);let f=Ne("eye",()=>new ie(.018,8,6));for(let v of[-1,1]){let w=Oe(f,We(1118481,.3));w.position.set(v*.048,.14,.122),h.add(w)}let u=Oe(Ne("nose",()=>new ie(.022,8,6)),We(e.skin));if(u.position.set(0,.1,.135),h.add(u),this.mouth=Oe(Ne("mouth",()=>new ee(.05,.012,.01)),We(5909034)),this.mouth.position.set(0,.055,.125),h.add(this.mouth),e.hairStyle!=="bald"){let v=Oe(Ne("hair",()=>new ie(.145,16,10,0,Math.PI*2,0,Math.PI*.55)),We(e.hair));if(v.position.set(0,.13,-.012),h.add(v),e.hairStyle==="long"){let w=Oe(Ne("hairlong",()=>new ee(.26,.28,.08)),We(e.hair));w.position.set(0,0,-.09),h.add(w)}}if(e.cap){let v=We(1778752,.7),w=Oe(Ne("cap",()=>new ie(.148,16,8,0,Math.PI*2,0,Math.PI*.5)),v);w.scale.set(1.04,.62,1.08),w.position.y=.19,h.add(w);let S=Oe(Ne("capband",()=>new ne(.152,.152,.035,16)),We(922406,.6));S.position.y=.19,h.add(S);let R=Oe(Ne("brim",()=>new ne(.11,.11,.014,16,1,!1,-Math.PI/2,Math.PI)),v);R.scale.set(1.1,1,1.2),R.position.set(0,.185,.12),R.rotation.x=.12,h.add(R);let I=Oe(Ne("capbadge",()=>new ee(.045,.035,.01)),new ct({color:16765773,metalness:.8,roughness:.3}));I.position.set(0,.235,.152),h.add(I),this.cap={crown:w,brim:R,cb:I}}let g=Ne("arm",()=>new Ln(.058,.2,4,8)),y=Ne("fore",()=>new Ln(.052,.19,4,8)),p=Ne("hand",()=>new ie(.055,8,6));this.arms=[-1,1].map(v=>{let w=new pt;w.position.set(v*.235,.5,0),o.add(w);let S=Oe(g,We(e.shirt));S.position.y=-.14,w.add(S);let R=new pt;R.position.y=-.29,w.add(R);let I=Oe(y,We(e.sleeves==="short"?e.skin:e.shirt));I.position.y=-.13,R.add(I);let b=new pt;return b.position.y=-.28,R.add(b),b.add(Oe(p,We(e.skin))),{sh:w,el:R,hand:b,side:v}});let m=Ne("thigh",()=>new Ln(.075,.3,4,8)),x=Ne("shin",()=>new Ln(.066,.3,4,8)),_=Ne("foot",()=>new ee(.11,.07,.25));this.legs=[-1,1].map(v=>{let w=new pt;w.position.set(v*.095,-.06,0),s.add(w);let S=Oe(m,We(e.pants));S.position.y=-.21,w.add(S);let R=new pt;R.position.y=-.42,w.add(R);let I=Oe(x,We(e.pants));I.position.y=-.2,R.add(I);let b=Oe(_,We(e.shoes,.5));return b.position.set(0,-.42,.05),R.add(b),{hip:w,knee:R,side:v}}),this.anim={mode:"idle",phase:0,speed:0,time:0,talk:0,sit:0,blend:{}},Pa([s,o,h,...this.arms.flatMap(v=>[v.sh,v.el,v.hand]),...this.legs.flatMap(v=>[v.hip,v.knee])],[this.mouth]),this.update(0)}attachToHand(t,e=1){return this.arms.find(s=>s.side===e).hand.add(t),t}setMode(t,e=0){this.anim.mode=t,this.anim.speed=e}update(t){let e=this.anim;e.time+=t;let i=e.time,s=e.mode,r=0;(s==="walk"||s==="zombie")&&(r=e.speed/1.5),s==="run"&&(r=e.speed/3.2),e.phase+=r*Math.PI*2*t;let o=e.phase,a={hipsY:.92,hipsRX:0,torsoRX:0,headRX:0,headRY:0,legs:[[0,0],[0,0]],arms:[[0,.15,0],[0,.15,0]]};if(s==="idle")a.hipsY=.92+Math.sin(i*2)*.005,a.headRY=Math.sin(i*.5)*.15,a.arms=[[.05,-.15,.1],[.05,-.15,-.1]];else if(s==="walk"){let h=Math.sin(o);a.legs=[[-.5*h,Math.max(0,-Math.cos(o))*.7],[.5*h,Math.max(0,Math.cos(o))*.7]],a.arms=[[.4*h,-.2,.08],[-.4*h,-.2,-.08]],a.hipsY=.92-Math.abs(Math.cos(o))*.03}else if(s==="run"){let h=Math.sin(o);a.legs=[[-.95*h,.4+Math.max(0,-Math.cos(o))*1.3],[.95*h,.4+Math.max(0,Math.cos(o))*1.3]],a.arms=[[.9*h,-1.3,.1],[-.9*h,-1.3,-.1]],a.torsoRX=.25,a.hipsY=.9-Math.abs(Math.cos(o))*.08}else if(s==="jump")a.legs=[[-.9,1.4],[-.3,.9]],a.arms=[[-2.6,-.3,.3],[-2.6,-.3,-.3]],a.torsoRX=.1;else if(s==="slide")a.hipsY=.35,a.hipsRX=-1.15,a.legs=[[-.4,.2],[-.2,.6]],a.arms=[[-1.6,-.3,.3],[-1.6,-.3,-.3]],a.torsoRX=.1,a.headRX=.7;else if(s==="sit"||s==="eat"||s==="type"){if(a.hipsY=.55,a.legs=[[-1.57,1.57],[-1.57,1.57]],a.torsoRX=.08,a.arms=[[-.7,-.8,.1],[-.7,-.8,-.1]],s==="eat"){let h=(Math.sin(i*2.2)+1)/2;a.arms[1]=[-.4-1.5*h,-1.2-.9*h,-.25*h],a.headRX=.1*h}s==="type"&&(a.arms[0]=[-.9+Math.sin(i*18)*.05,-.7,.15],a.arms[1]=[-.9+Math.sin(i*15+1)*.05,-.7,-.15],a.headRX=.12)}else if(s==="sleep")a.hipsY=.55,a.legs=[[-1.4,1.5],[-1.5,1.4]],a.torsoRX=.5,a.headRX=.6,a.arms=[[-.2,-.3,.2],[-.2,-.3,-.2]];else if(s==="shock")a.arms=[[-2.8,-.3,.4],[-2.8,-.3,-.4]],a.headRX=-.15,a.hipsY=.92+Math.abs(Math.sin(i*20))*.02;else if(s==="point")a.arms[1]=[-1.55,0,0],a.headRY=.1;else if(s==="shrug")a.arms=[[-.2,-1.6,.6],[-.2,-1.6,-.6]],a.headRX=-.1;else if(s==="zombie"){let h=Math.sin(o);a.legs=[[-.25*h,.1],[.25*h,.1]],a.arms=[[-1.5+.05*h,-.05,.08],[-1.5-.05*h,-.05,-.08]],a.torsoRX=.06,a.headRY=Math.sin(i*1.3)*.12,a.hipsY=.92-Math.abs(h)*.02}else if(s==="liesit"){let h=e.sit;a.legs=[[-1.55*h,.05*h],[-1.55*h,.05*h]],a.arms=[[-1.5*h,-1.9*(1-h),.35*(1-h)],[-1.5*h,-1.9*(1-h),-.35*(1-h)]],a.headRX=.1*(1-h)}else if(s==="munch"){let h=(Math.sin(i*9)+1)/2;a.arms[1]=[-.6-1.1*h,-1.6-.4*h,-.25],a.arms[0]=[-.2,-.4,.1],a.headRX=.12*h}else s==="wave"?(a.arms[1]=[-2.7,-.3,-.5+Math.sin(i*10)*.45],a.arms[0]=[.05,-.15,.1],a.headRY=.15,a.hipsY=.92+Math.abs(Math.sin(i*6))*.04):s==="sad"&&(a.headRX=.45,a.torsoRX=.15,a.arms=[[.1,-.1,.05],[.1,-.1,-.05]]);let l=t?1-Math.exp(-14*t):1,c=(h,d,f)=>{h[d]+=(f-h[d])*l};c(this.hips.position,"y",a.hipsY),c(this.hips.rotation,"x",a.hipsRX),c(this.torso.rotation,"x",a.torsoRX),c(this.head.rotation,"x",a.headRX),c(this.head.rotation,"y",a.headRY),this.legs.forEach((h,d)=>{c(h.hip.rotation,"x",a.legs[d][0]),c(h.knee.rotation,"x",a.legs[d][1])}),this.arms.forEach((h,d)=>{c(h.sh.rotation,"x",a.arms[d][0]),c(h.el.rotation,"x",a.arms[d][1]),c(h.sh.rotation,"z",a.arms[d][2]+h.side*.08)}),e.talk>0?(e.talk-=t,this.mouth.scale.y=1+Math.abs(Math.sin(i*22))*5):this.mouth.scale.y=hn(this.mouth.scale.y,1,10,t||1)}},Ha=(n={})=>new _s({shirt:9417696,pants:1778752,cap:!0,badge:!0,hair:3810322,...n}),N1=[14832981,5613672,15905076,9202646,2864051,15895729,16777215,3355443,16747069,5209049],O1=[2832981,3355443,7035464,1907997,4878245],H1=[15845284,14725519,13012580,9263675,6044196,16243136],F1=[2825492,1118481,9132587,14266986,7027487,10066329];function Mf(n=Math.random){let t=i=>i[Math.floor(n()*i.length)],e=n()<.35;return new _s({shirt:t(N1),pants:t(O1),skin:t(H1),hair:t(F1),hairStyle:n()<.4?"long":n()<.1?"bald":"short",sleeves:n()<.5?"short":"long",scale:e?.62+n()*.12:.95+n()*.1})}function B1(){let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d");t.fillStyle="#cdbf9c",t.fillRect(0,0,128,128);for(let i=0;i<400;i++)t.fillStyle=`rgba(70,50,25,${Math.random()*.16})`,t.fillRect(Math.random()*128,Math.random()*128,2,2);for(let i=-128;i<256;i+=14)t.strokeStyle="rgba(80,60,30,0.75)",t.lineWidth=3,t.beginPath(),t.moveTo(0,i),t.lineTo(128,i+34),t.stroke(),t.strokeStyle="rgba(255,250,235,0.35)",t.lineWidth=2,t.beginPath(),t.moveTo(0,i+4),t.lineTo(128,i+38),t.stroke();let e=new Gn(n);return e.colorSpace=ln,e.wrapS=e.wrapT=yi,e.repeat.set(2,2),e}function bf(){let n=new _s({shirt:14932156,pants:14208174,skin:15129794,hair:14208174,shoes:13813416,hairStyle:"bald"}),t=new ct({map:B1(),color:13221542,roughness:1}),e=new ct({color:16774832,emissive:16769126,emissiveIntensity:3}),i=We(1118481,.3);n.group.traverse(o=>{!o.isMesh||o===n.mouth||(o.material=o.material===i?e:t)}),n.mouth.visible=!1;let s=new H(new ee(.2,.06,.03),new ct({color:1708554,roughness:1}));s.position.set(0,.14,.112),n.head.add(s);let r=new H(new ee(.05,.32,.01),t);return r.position.set(.1,-.05,-.14),r.rotation.set(.3,0,-.25),n.head.add(r),n}var mr={bird:"Bird",eye:"Eye",snake:"Snake",ankh:"Ankh",scarab:"Beetle",sun:"Sun",feather:"Feather",water:"Water"},Ji=Object.keys(mr),Ef=["bird","eye","snake","ankh"];function $n(n,t,e,i,s,r="#1d3f8f"){n.save(),n.translate(e,i),n.scale(s/100,s/100),n.fillStyle=r,n.strokeStyle=r,n.lineWidth=7,n.lineCap="round",n.lineJoin="round";let o=a=>{n.beginPath(),a.forEach(([l,c],h)=>h?n.lineTo(l,c):n.moveTo(l,c))};switch(t){case"eye":{n.beginPath(),n.moveTo(-42,0),n.quadraticCurveTo(0,-34,42,0),n.quadraticCurveTo(0,26,-42,0),n.stroke(),n.beginPath(),n.arc(0,-2,12,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(-36,-22),n.quadraticCurveTo(0,-46,40,-24),n.stroke(),o([[-6,14],[-10,40]]),n.stroke(),n.beginPath(),n.moveTo(8,12),n.quadraticCurveTo(20,40,36,30),n.quadraticCurveTo(44,20,30,18),n.stroke();break}case"bird":{n.beginPath(),n.ellipse(4,0,30,18,-.2,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(-26,-26,11,0,Math.PI*2),n.fill(),o([[-30,-22],[-48,8]]),n.stroke(),o([[-18,-20],[-12,-6]]),n.stroke(),o([[30,-6],[46,4],[30,10]]),n.fill(),o([[0,16],[-6,44]]),n.stroke(),o([[12,16],[16,44]]),n.stroke();break}case"snake":{n.lineWidth=10,n.beginPath(),n.moveTo(-44,36),n.bezierCurveTo(-10,46,10,20,26,26),n.bezierCurveTo(44,32,40,4,22,-2),n.stroke(),n.beginPath(),n.ellipse(18,-20,15,24,.1,0,Math.PI*2),n.fill(),n.fillStyle="#e8d5a8",n.beginPath(),n.arc(14,-28,3.5,0,Math.PI*2),n.fill(),n.strokeStyle=r,n.lineWidth=4,o([[22,-44],[24,-54]]),n.stroke();break}case"ankh":{n.lineWidth=12,n.beginPath(),n.ellipse(0,-26,15,20,0,0,Math.PI*2),n.stroke(),o([[-34,2],[34,2]]),n.stroke(),o([[0,-6],[0,46]]),n.stroke();break}case"scarab":{n.beginPath(),n.ellipse(0,6,22,28,0,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(0,-28,14,10,0,0,Math.PI*2),n.fill();for(let a of[-1,1])for(let l of[-1,0,1])o([[a*18,l*16+4],[a*38,l*20-4],[a*44,l*24+6]]),n.stroke();n.strokeStyle="#e8d5a8",n.lineWidth=3,o([[0,-18],[0,32]]),n.stroke();break}case"sun":{n.beginPath(),n.arc(0,0,22,0,Math.PI*2),n.fill(),n.lineWidth=6;for(let a=0;a<12;a++){let l=a/12*Math.PI*2;o([[Math.cos(l)*30,Math.sin(l)*30],[Math.cos(l)*44,Math.sin(l)*44]]),n.stroke()}break}case"feather":{n.beginPath(),n.moveTo(-4,46),n.quadraticCurveTo(-30,-6,6,-46),n.quadraticCurveTo(28,-8,6,30),n.closePath(),n.fill(),n.strokeStyle="#e8d5a8",n.lineWidth=3,n.beginPath(),n.moveTo(-2,44),n.quadraticCurveTo(-4,0,6,-40),n.stroke(),n.strokeStyle=r,n.lineWidth=7,o([[-4,46],[-8,50]]),n.stroke();break}case"water":{n.lineWidth=6;for(let a of[-20,0,20]){n.beginPath();for(let l=0;l<=8;l++)n.lineTo(-42+l*10.5,a+(l%2?-8:8));n.stroke()}break}default:break}n.restore()}function wf(n,t,e,i,s,r="#7a1a10"){n.save(),n.fillStyle=r;let o=s*.16,a=s*.22,l=t*o+(t-1)*a;for(let c=0;c<t;c++)n.fillRect(e-l/2+c*(o+a),i-s/2,o,s);n.restore()}function ei(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function Sf(n,t,e){let i=n.canvas.width,s=n.canvas.height;n.fillStyle="#0f0f0f",n.fillRect(0,0,i,s),n.fillStyle="#ff2b2b",ei(n,24,18,54,38,10),n.fill(),n.fillStyle="#fff",n.beginPath(),n.moveTo(44,27),n.lineTo(62,37),n.lineTo(44,47),n.fill(),n.font="bold 30px Arial",n.fillText("MeTube",88,48),n.fillStyle="#222",ei(n,300,18,440,40,20),n.fill(),n.fillStyle="#aaa",n.font="20px Arial",n.fillText("dinosaurs that could beat you in a race",322,45);let r=24,o=76,a=660,l=372,c=n.createLinearGradient(0,o,0,o+l);c.addColorStop(0,"#ff9a5a"),c.addColorStop(1,"#ffd98a"),n.fillStyle=c,n.fillRect(r,o,a,l),n.fillStyle="#c8763a",n.fillRect(r,o+l*.72,a,l*.28),n.fillStyle="#6b3b2a",n.beginPath(),n.moveTo(r+380,o+l*.72),n.lineTo(r+480,o+120),n.lineTo(r+520,o+120),n.lineTo(r+640,o+l*.72),n.fill(),n.fillStyle="rgba(80,60,60,0.6)",n.beginPath(),n.arc(r+500+Math.sin(t)*10,o+90-t*20%40,26,0,7),n.fill();let h=t*140%(a+300)-150,d=o+l*.72;n.save(),n.translate(r+h,d),n.fillStyle="#2b1d14";let f=Math.abs(Math.sin(t*12))*6;n.beginPath(),n.ellipse(0,-70-f,55,30,-.1,0,7),n.fill(),n.beginPath(),n.moveTo(-50,-75-f),n.lineTo(-130,-60-f),n.lineTo(-48,-60-f),n.fill(),n.beginPath(),n.ellipse(52,-105-f,30,18,-.2,0,7),n.fill(),n.fillRect(20,-100-f,18,30);let u=Math.sin(t*12)*18;n.fillRect(-10+u,-50-f,12,50+f),n.fillRect(10-u,-50-f,12,50+f),n.fillStyle="#ff3b3b",n.beginPath(),n.arc(64,-110-f,4,0,7),n.fill(),n.restore(),n.save(),n.translate(r+h+170,d),n.strokeStyle="#1a1a1a",n.lineWidth=5,n.beginPath(),n.arc(0,-62,10,0,7),n.stroke(),n.beginPath(),n.moveTo(0,-52),n.lineTo(0,-25),n.stroke();let g=Math.sin(t*16)*12;if(n.beginPath(),n.moveTo(0,-25),n.lineTo(g,0),n.moveTo(0,-25),n.lineTo(-g,0),n.stroke(),n.beginPath(),n.moveTo(0,-45),n.lineTo(-g,-32),n.moveTo(0,-45),n.lineTo(g,-30),n.stroke(),n.restore(),n.fillStyle="rgba(0,0,0,0.6)",ei(n,r+16,o+16,120,44,8),n.fill(),n.fillStyle="#fff",n.font="bold 30px Arial",n.fillText("#3",r+52,o+50),n.fillStyle="#444",n.fillRect(r,o+l-6,a,6),n.fillStyle="#ff2b2b",n.fillRect(r,o+l-6,a*(.42+t*.004%.5),6),n.fillStyle="#fff",n.font="bold 24px Arial",n.fillText("TOP 10 DINOSAURS THAT COULD BEAT YOU IN A RACE",r,o+l+40),n.fillText("(#1 WILL SHOCK YOU)",r,o+l+70),n.fillStyle="#aaa",n.font="18px Arial",n.fillText("DinoFacts4Kids  \u2022  2.1M views  \u2022  3 years ago",r,o+l+100),n.fillStyle="#fff",ei(n,r+470,o+l+80,120,36,18),n.fill(),n.fillStyle="#000",n.font="bold 18px Arial",n.fillText("Subscribe",r+488,o+l+104),[["I SURVIVED 24 HRS IN A MUSEUM","#3a6"],["Donut tier list (honest)","#d58"],["Is the T-Rex REAL?? (not clickbait)","#a63"],["Night guard falls asleep on cam","#36a"],["How to remember passwords","#777"]].forEach(([p,m],x)=>{let _=80+x*108;n.fillStyle=m,ei(n,708,_,150,86,8),n.fill(),n.fillStyle="rgba(255,255,255,0.3)",n.beginPath(),n.arc(783,_+43,18,0,7),n.fill(),n.fillStyle="#eee",n.font="bold 16px Arial";let v=p.split(" "),w="",S=_+20;for(let R of v)n.measureText(w+R).width>140&&(n.fillText(w,868,S),w="",S+=20),w+=R+" ";n.fillText(w,868,S),n.fillStyle="#999",n.font="14px Arial",n.fillText(`${(x*3.7+1.2).toFixed(1)}M views`,868,S+22)}),e!=null){let p=e<=5;n.fillStyle=p&&Math.floor(t*4)%2?"#ff2b2b":"#ffcc4d",ei(n,i-360,s-92,340,72,10),n.fill(),n.fillStyle="#111",n.font="bold 22px Arial",n.fillText("\u26A0 MUSE-OS SESSION",i-340,s-62),n.font="bold 22px Arial",n.fillText(`Expires in 0:${String(Math.max(0,Math.ceil(e))).padStart(2,"0")}`,i-340,s-34)}}function Fa(n,t,e="SESSION EXPIRED",i="Please log in again."){let s=n.canvas.width,r=n.canvas.height,o=n.createLinearGradient(0,0,s,r);o.addColorStop(0,"#0d2340"),o.addColorStop(1,"#2a0f3d"),n.fillStyle=o,n.fillRect(0,0,s,r),n.fillStyle="rgba(255,255,255,0.06)";for(let a=0;a<12;a++)n.beginPath(),n.arc((a*173+t*20)%s,a*97%r,60+a%3*30,0,7),n.fill();n.textAlign="center",n.fillStyle="#fff",n.font="bold 54px Arial",n.fillText("\u{1F512}",s/2,r/2-90),n.font="bold 48px Arial",n.fillText(e,s/2,r/2),n.font="28px Arial",n.fillStyle="#c9d6ff",n.fillText(i,s/2,r/2+50),n.font='22px "Courier New", monospace',n.fillStyle="#7fa0d0",n.fillText("MUSE-OS v2.3 \u2014 City Museum of Natural History",s/2,r-40),n.textAlign="left"}function Tf(n,t,e="",i="",s="#ff6b6b"){Fa(n,t,"","");let r=n.canvas.width,o=n.canvas.height;n.fillStyle="rgba(0,0,0,0.45)",ei(n,r/2-260,o/2-170,520,340,18),n.fill(),n.textAlign="center",n.fillStyle="#fff",n.font="bold 34px Arial",n.fillText("NIGHT_GUARD",r/2,o/2-110),n.fillStyle="#fff",ei(n,r/2-200,o/2-70,400,56,10),n.fill(),n.fillStyle="#222",n.font="bold 34px Arial",n.fillText("\u2022".repeat(e.length)+(Math.floor(t*2)%2?"|":""),r/2,o/2-30),n.fillStyle="#4c8dff",ei(n,r/2-200,o/2+6,190,50,10),n.fill(),n.fillStyle="#ffcc4d",ei(n,r/2+10,o/2+6,190,50,10),n.fill(),n.fillStyle="#fff",n.font="bold 24px Arial",n.fillText("LOG IN",r/2-105,o/2+40),n.fillStyle="#111",n.fillText("HINT?",r/2+105,o/2+40),i&&(n.fillStyle=s,n.font="bold 26px Arial",n.fillText(i,r/2,o/2+120)),n.textAlign="left"}function Af(n,t){let e=n.canvas.width,i=n.canvas.height;n.fillStyle="#000",n.fillRect(0,0,e,i),n.textAlign="center";let s=Math.random()<.1?(Math.random()-.5)*30:0;n.fillStyle="#6dff9e",n.font='bold 64px "Courier New", monospace',n.fillText("SOLVE THE PUZZLES",e/2+s,i/2-20),n.fillStyle="#ff3b6b",n.fillText("SOLVE THE PUZZLES",e/2-s*.5+3,i/2-20+2),n.fillStyle="#6dff9e",n.font='28px "Courier New", monospace',n.fillText("PUZZLE #1 SLEEPS WHERE GIANTS ONCE WALKED",e/2,i/2+50),n.fillText("> DINOSAUR HALL",e/2,i/2+100);for(let r=0;r<i;r+=4)n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(0,r,e,2);n.textAlign="left"}function Rf(n,t){let e=n.canvas.width,i=n.canvas.height;n.fillStyle=Math.floor(t*3)%2?"#3a0000":"#1a0000",n.fillRect(0,0,e,i),n.textAlign="center",n.fillStyle="#ff3b3b",n.font="bold 72px Arial",n.fillText("ACCESS DENIED",e/2,i/2),n.font="28px Arial",n.fillText("Password fragments: 5 / 6",e/2,i/2+60),n.textAlign="left"}function Cf(n,t,{trexGone:e=!1,day:i=!1}={}){let s=n.canvas.width,r=n.canvas.height,o=s/3,a=r/2,l=["CAM 1 LOBBY","CAM 2 DINO HALL","CAM 3 ROMAN","CAM 4 ENTRANCE","CAM 5 ARCHIVES","CAM 6 PARKING"];for(let c=0;c<6;c++){let h=c%3*o,d=Math.floor(c/3)*a;n.fillStyle=i?"#3a4a3a":"#0c1410",n.fillRect(h,d,o,a),n.fillStyle=i?"#5a6a5a":"#16241c",n.fillRect(h+10,d+a*.6,o-20,a*.35),c===1&&!e&&(n.strokeStyle=i?"#d8d0b8":"#5a7a66",n.lineWidth=3,n.beginPath(),n.ellipse(h+o*.5,d+a*.45,26,14,0,0,7),n.moveTo(h+o*.5+20,d+a*.4),n.lineTo(h+o*.72,d+a*.25),n.moveTo(h+o*.5-24,d+a*.45),n.lineTo(h+o*.2,d+a*.55),n.moveTo(h+o*.48,d+a*.55),n.lineTo(h+o*.46,d+a*.85),n.moveTo(h+o*.55,d+a*.55),n.lineTo(h+o*.57,d+a*.85),n.stroke());let f=n.getImageData(h,d,o,a),u=f.data;for(let g=0;g<u.length;g+=16){let y=(Math.random()-.5)*(i?30:60);u[g]+=y,u[g+1]+=y,u[g+2]+=y}n.putImageData(f,h,d),n.fillStyle=i?"#ffffff":"#9dffb8",n.font="bold 13px monospace",n.fillText(l[c],h+8,d+18),Math.floor(t*2)%2&&(n.fillStyle="#ff3b3b",n.beginPath(),n.arc(h+o-14,d+13,5,0,7),n.fill()),n.strokeStyle="#000",n.lineWidth=4,n.strokeRect(h,d,o,a)}}var At={officeChair:new A(-17.9,0,0),officeStart:new A(-17.2,0,.3),lobbyNorth:new A(0,0,-7.5),dinoDoor:new A(0,0,-12),dinoPanel:new A(2.4,0,-20.6),trex:new A(0,.5,-31),romanDoor:new A(13.5,0,0),romanPanel:new A(37.4,0,0),computer:new A(-18.75,1.05,0),egyptDoor:new A(15.2,0,-24),egyptPanel:new A(24.4,0,-20.6),sarcophagus:new A(27.5,0,-25),romanNorthDoor:new A(24.75,0,-9.2)},gr={x0:15.42,x1:39,z0:-37,z1:-9.42,h:8.5},Pf=[{id:"office_poster",wall:"officeWall",axis:"z",at:-20,from:-4.3,to:-1.7,side:-1,h:2.7,clue:"poster",prompt:"Straighten the crooked poster",style:"nap",sign:"NAP ROOM",frosting:1},{id:"lobby_desk",wall:"lobbyWall",axis:"z",at:-12,from:5.75,to:7.25,side:-1,h:2.55,room:[5.45,8.6],clue:"door",prompt:"Jiggle the STAFF ONLY door",style:"closet",sign:"NOT A SECRET",frosting:0},{id:"dino_mural",wall:"dinoWall",axis:"x",at:-46,from:11.8,to:14.2,side:-1,h:2.7,clue:"brick",prompt:"Push the loose brick",style:"nest",sign:"DO NOT HATCH",frosting:2},{id:"dino_tri",wall:"dinoWall",axis:"z",at:-15,from:-31.2,to:-28.8,side:-1,h:2.7,clue:"fossil",prompt:"Press the strange fossil",style:"bones",sign:"SPARE BONES",frosting:1},{id:"egypt_obelisk",wall:"sandWall",axis:"z",at:39,from:-27.2,to:-24.8,side:1,h:2.7,clue:"eye",prompt:"Press the Eye of Horus",style:"treasure",sign:"PHARAOH'S SNACKS",frosting:4},{id:"egypt_jars",wall:"sandWall",axis:"x",at:-37,from:33.4,to:35.8,side:-1,h:2.7,clue:"scarab",prompt:"Turn the stone scarab",style:"treasure",sign:"TOMB OF DONUTS",frosting:2},{id:"roman_chariot",wall:"romanWall",axis:"z",at:40,from:-8.4,to:-6,side:1,h:2.7,clue:"torch",prompt:"Pull the torch holder",style:"armory",sign:"GLADIATOR LOCKER",frosting:3},{id:"roman_caligula",wall:"romanWall",axis:"x",at:9,from:23.6,to:25.9,side:1,h:2.7,clue:"bust",prompt:"Push the bust of CALIGULA",style:"armory",sign:"CALIGULA WAS HERE",frosting:0}],z1=[{n:1,glyph:"bird",x:19.2,z:-29.4},{n:2,glyph:"eye",x:31.6,z:-33.4},{n:3,glyph:"snake",x:36.4,z:-19.6},{n:4,glyph:"ankh",x:18.4,z:-15.2}],ni=class extends Zi{constructor(t,{time:e="night"}={}){super(t),this.time=e,this.night=e==="night",this.refs={},this.surfaceAt=(o,a)=>o<-12?"wood":o>15.2&&a<-9.3?"stone":o>12?"marble":a<-10?"stone":"marble";let i=this.scene;i.background=new Ft(this.night?131848:12571366),i.fog=this.night?new tr(197899,.028):new er(13622248,40,140),this.mats={officeWall:new ct({map:xe("plaster"),color:12169626,roughness:.9}),lobbyWall:new ct({map:xe("plaster"),color:9410726,roughness:.85}),dinoWall:new ct({map:xe("plaster"),color:8023646,roughness:.9}),romanWall:new ct({map:xe("plaster"),color:11828316,roughness:.85}),sandWall:new ct({map:xe("plaster"),color:13214828,roughness:.9}),wood:new ct({map:xe("wood"),roughness:.7}),marble:new ct({map:xe("marble"),roughness:.25,metalness:.05}),stone:new ct({map:xe("stone"),roughness:.8}),mosaic:new ct({map:xe("mosaic"),roughness:.6}),ceiling:new ct({map:xe("ceiling"),roughness:.9,color:10131086}),darkCeil:new ct({color:this.night?1907482:12170150,roughness:1}),trim:new ct({color:2761760,roughness:.6})},this._lights(),this._office(),this._lobby(),this._dino(),this._roman(),this._egypt(),this._collectibles(),this._secretRooms(),this.night||this._visitors();let s=this.refs,r=new Set([s.trex.group,s.guard.group,s.donutBox,s.deskFlashlight,s.footprints,s.sarcLid,s.mummy.holder,...s.flames.map(o=>o.flame),...s.secrets.flatMap(o=>[o.panel,o.mover].filter(Boolean)),...this.collectibles.map(o=>o.obj),...(this.visitors||[]).map(o=>o.p.group)]);wi(this.scene,o=>r.has(o))}_lights(){let t=this.scene,e=this.night;this.ambient=new Vi(e?7372976:16777215,e?.32:.9),t.add(this.ambient),this.hemi=new Gi(e?5925530:15266047,e?1446416:9075302,e?.45:1.4),t.add(this.hemi);let i=new ca(e?9414911:16773592,e?.55:2.4);i.position.set(12,30,40),i.target.position.set(0,0,-20),t.add(i,i.target),this.sun=i;let s=(r,o,a,l,c,h)=>{let d=new Ie(r,o,a,2);return d.position.set(l,c,h),t.add(d),d};e?(s(6981375,6,22,0,9,-40),s(16756848,5,14,37,5,0),s(6981375,3,16,0,6,6),s(9071359,4,18,27,7,-30),this.officeLamp=s(16762746,3.5,7,-18.4,1.4,.9),this.fluoro=s(14674175,2.5,8,-16,3.1,0)):(s(16777215,30,40,0,11,-28),s(16773853,20,30,26,8,0),s(16777215,12,25,0,7,0),s(16773853,22,32,27,7.5,-23),this.officeLamp=s(16762746,2,6,-18.4,1.4,.9),this.fluoro=s(16777215,6,10,-16,3.1,0))}_office(){let t=this.mats;this.floor(-20,-12,-5,5,t.wood,0,3),this.ceiling(-20,-12,-5,5,3.4,t.ceiling,1.2),this.wallX(-5,-20,-12,3.4,t.officeWall),this.wallX(5,-20,-12,3.4,t.officeWall),this.wallZ(-20,-5,5,3.4,t.officeWall,this._secretOpenings("z",-20));let e=new H(new ee(1.4,.06,.4),new de({color:15397631}));e.position.set(-16,3.36,0),this.scene.add(e),this.refs.fluoroMesh=e;let i=gf(1.9,.85);this.add(i,-18.75,0,0,Math.PI/2),this.addBoxCollider(-18.75,0,1.9,.85,Math.PI/2);let s=vf(.95,.6);this.add(s.group,-18.95,.77,0,Math.PI/2),this.refs.monitor=s;let r=yf();this.add(r,-17.9,0,0,-Math.PI/2),this.refs.chair=r,this.add(ot(.18,.02,.5,Mt.black()),-18.55,.77,0);let o=new pt;o.add(ot(.15,.03,.15,Mt.black()));let a=ot(.03,.45,.03,Mt.black(),0,.03,0);o.add(a);let l=new H(new cn(.12,.16,12,1,!0),new ct({color:2841914,side:ke}));l.position.set(.05,.5,0),l.rotation.z=-.5,o.add(l),this.add(o,-18.9,.77,.75);let c=new pt,h=new ct({color:16230600,roughness:.8});c.add(ot(.55,.07,.38,h));let d=new H(new ee(.55,.01,.38),new ct({map:Ce(`DOZEN
DELUXE`,{w:256,h:180,bg:"#f7a8c8",fg:"#b3125a",font:"bold 52px Arial Black, Arial"})}));d.position.set(0,.25,-.2),d.rotation.x=-1.2,c.add(d),this.refs.boxDonuts=[];for(let I=0;I<6;I++){let b=Si({frosting:I,scale:.55});b.position.set(-.17+I%3*.17,.08,-.08+Math.floor(I/3)*.17),c.add(b),this.refs.boxDonuts.push(b)}this.add(c,-18.6,.77,-.65,Math.PI/2),this.refs.donutBox=c;let f=$i();f.position.set(-18.45,.81,.45),f.rotation.y=.6,this.scene.add(f),this.refs.deskFlashlight=f;let u=new H(new ne(.045,.04,.1,12),new ct({color:16777215}));u.position.set(-18.5,.82,-.2),this.scene.add(u);let[g,y]=se(384,192,{willReadFrequently:!0}),p=oe(g),m=new H(new Gt(2.6,1.3),new de({map:p,toneMapped:!1}));m.position.set(-16.5,1.95,-4.78),this.scene.add(m),this.add(ot(2.75,1.45,.1,Mt.black()),-16.5,1.25,-4.84);let x=0,_=0;this.cctvState={trexGone:!1,day:!this.night},this.addUpdater(I=>{x+=I,_+=I,_>.12&&(_=0,Cf(y,x,this.cctvState),p.needsUpdate=!0)});for(let I=0;I<4;I++){let b=ot(.6,2,.5,new ct({color:5202547,roughness:.5,metalness:.4}));this.add(b,-19.4+I*.62,0,4.7)}this.addCollider(-19.8,-16.9,4.4,5);let v=(I,b,M,L,k,D,B)=>{let $=new H(new Gt(.8,1.05),new ct({map:Ce(I,{w:256,h:340,bg:D,fg:B,font:"bold 34px Arial Black, Arial",border:B})}));$.position.set(b,M,L),$.rotation.y=k,this.scene.add($)};v(`EMPLOYEE
OF THE
MONTH:
AARON`,-13.5,1.8,-4.78,0,"#ffe08a","#7a4b00"),v(`NO
DINOSAURS
IN THE
OFFICE`,-14.8,1.8,4.78,Math.PI,"#fff","#c81e1e");let w=new H(new bi(.25,24),new de({map:Ce("11:58",{w:128,h:128,bg:"#fff",fg:"#111",font:"bold 34px Arial"})}));w.position.set(-19.78,2.5,1.5),w.rotation.y=Math.PI/2,this.scene.add(w);let S=Ha();S.group.position.set(-17.95,0,0),S.group.rotation.y=-Math.PI/2,S.setMode("sit"),S.update(0),this.scene.add(S.group),this.refs.guard=S,this.addUpdater(I=>{S.group.visible&&S.update(I)}),this.refs.computerIt=this.addInteractable({id:"computer",pos:new A(-18.7,1.1,0),prompt:"Log in",enabled:!1});let R=new H(new Gt(2.2,.5),new ct({map:Ce("SECURITY",{w:512,h:116,bg:"#1d2433",fg:"#ffcc4d",font:"bold 64px Arial Black, Arial",border:"#ffcc4d"}),emissive:16777215,emissiveIntensity:.08}));R.position.set(-11.78,2.85,0),R.rotation.y=Math.PI/2,this.scene.add(R)}_lobby(){let t=this.mats,e=this.scene;this.floor(-12,12,-10,10,t.marble,0,4),this.ceiling(-12,12,-10,10,8,t.darkCeil),this.wallX(-10,-12,12,8,t.lobbyWall,[{c:0,w:6,h:6.2}],3),this.wallZ(12,-10,-9,8,t.lobbyWall,[],3),this.wallZ(12,9,10,8,t.lobbyWall,[],3),this.wallZ(-12,-10,10,8,t.lobbyWall,[{c:0,w:2.2,h:2.4},...this._secretOpenings("z",-12)],3),this.wallX(10,-12,12,8,t.lobbyWall,[{c:-7.5,w:4,h:6.5},{c:0,w:6,h:4.2},{c:7.5,w:4,h:6.5}],3);let i=new de({color:this.night?1846874:15922943,toneMapped:!this.night});for(let g of[-7.5,7.5]){let y=new H(new Gt(4,6.5),i);y.position.set(g,3.25,10.1),y.rotation.y=Math.PI,e.add(y),e.add(ot(.12,6.5,.15,t.trim,g,0,10));for(let p of[2.2,4.4])e.add(ot(4,.1,.15,t.trim,g,p,10));e.add(ot(4,.1,.4,t.trim,g,0,10))}this.addCollider(-9.5,-5.5,9.8,10.2),this.addCollider(5.5,9.5,9.8,10.2);let s=Mt.glass();for(let g of[-1.5,1.5]){let y=ot(2.9,4.1,.08,s,g,0,10);y.castShadow=!1,e.add(y),e.add(ot(.08,4.1,.1,Mt.metal(),g-1.45,0,10)),e.add(ot(.06,.5,.12,Mt.brass(),g+(g<0?1.3:-1.3),1.1,9.92))}let r=new H(new Gt(6,4.2),i);r.position.set(0,2.1,10.3),r.rotation.y=Math.PI,e.add(r),this.addCollider(-3,3,9.8,10.2);let o=new H(new Gt(1.4,.35),new ct({map:Ce(`ARCHIVES
STAFF ONLY`,{w:256,h:64,bg:"#a01818",fg:"#fff",font:"bold 22px Arial"})}));o.position.set(-11.75,2.85,6.5),o.rotation.y=Math.PI/2,e.add(o);let a=(g,y,p,m,x,_=5.6)=>{let v=new H(new Gt(_,1.2),new ct({map:Ce(g,{w:1024,h:220,bg:"#14100c",fg:"#e9cf8a",font:"bold 120px Georgia, serif",border:"#c9a24a"}),emissive:16769184,emissiveIntensity:this.night?.12:.02}));v.position.set(y,p,m),v.rotation.y=x,e.add(v)};a("DINOSAUR HALL",0,7.1,-9.77,0),a("ROMAN EMPIRE",11.77,7.1,0,-Math.PI/2);let l=new pt;l.add(ot(4.6,1.1,1,t.trim)),l.add(ot(4.8,.08,1.2,Mt.marble(),0,1.1,0));let c=new H(new Gt(3.2,.5),new ct({map:Ce("INFORMATION",{w:512,h:80,bg:"#2a2420",fg:"#c9a24a",font:"bold 48px Georgia, serif"})}));c.position.set(0,.62,-.51),c.rotation.y=Math.PI,l.add(c),Le(l),this.add(l,0,0,4.2),this.addBoxCollider(0,4.2,4.8,1.2);for(let g of[-8,8])for(let y of[-6,6])this.add(Nh(8,.5),g,0,y),this.addBoxCollider(g,y,1.2,1.2);for(let g of[-6,6])this.add(La(2.2),g,0,0,Math.PI/2),this.addBoxCollider(g,0,2.2,.55,Math.PI/2);for(let[g,y]of[[-11,-9],[11,-9],[-11,9],[11,9],[-4.2,-9],[4.2,-9]])this.add(Oh(g*7+y),g,0,y),this.addBoxCollider(g,y,.6,.6);let h=Fh("DINOSAURS","\u2191");this.add(h,-2.3,0,-4.5),this.addBoxCollider(-2.3,-4.5,.3,.3);let d=Fh("ROMAN EMPIRE","\u2192");this.add(d,5,0,-2.6),this.addBoxCollider(5,-2.6,.3,.3);let f=new H(new Gt(3,5),new ct({map:Ce(`HISTORY
COMES
ALIVE!`,{w:300,h:500,bg:"#7a1022",fg:"#ffd98a",font:"bold 64px Georgia, serif"}),side:ke}));f.position.set(-6,5,-2),f.rotation.y=.3,e.add(f);let u=ka("MUSEUM MAP",`\u2191 North: Dinosaur Hall (\u2192 Egyptian Wing)
\u2192 East: Roman Empire
\u2190 West: Security Office
\u2193 South: Exit (locked at night)`,2.4,1.6,{bg:"#16202e",fg:"#dfe8ff",accent:"#6dc2ff"});u.position.set(11.78,2.2,6.5),u.rotation.y=-Math.PI/2,e.add(u);for(let[g,y,p,m]of[[0,4.55,9.77,Math.PI],[-11.75,2.65,0,Math.PI/2]]){let x=Ua();x.position.set(g,y,p),x.rotation.y=m,m===Math.PI/2&&(x.position.y=3.3),e.add(x)}}_dino(){let t=this.mats,e=this.scene;this.floor(-15,15,-46,-10,t.stone,0,4),this.ceiling(-15,15,-46,-10,13,t.darkCeil),this.wallX(-46,-15,15,13,t.dinoWall,this._secretOpenings("x",-46),3),this.wallZ(-15,-46,-10,13,t.dinoWall,this._secretOpenings("z",-15),3),this.wallZ(15,-46,-10,13,t.dinoWall,[{c:At.egyptDoor.z,w:3.2,h:4.4}],3),this.wallX(-10,-15,-12,13,t.dinoWall,[],3),this.wallX(-10,12,15,13,t.dinoWall,[],3),this.wallX(-10.01,-12,12,13,t.dinoWall,[{c:0,w:24.5,h:8}],3);let[i,s]=se(64,256),r=s.createImageData(64,256);for(let k=0;k<256;k++)for(let D=0;D<64;D++){let B=Math.pow(Math.sin(D/63*Math.PI),2.2),$=Math.pow(1-k/255,1.6),V=(k*64+D)*4;r.data[V]=r.data[V+1]=r.data[V+2]=255,r.data[V+3]=255*B*$}s.putImageData(r,0,0);let o=oe(i,{srgb:!1});o.wrapS=o.wrapT=ui;let a=new de({map:o,color:this.night?7377151:16773320,transparent:!0,opacity:this.night?.05:.12,blending:En,depthWrite:!1,side:ke,fog:!1});for(let k of[-18,-30,-40])for(let D of[0,1]){let B=new H(new Gt(7,14),a);B.position.set(1.5,6.1,k-2.2),B.rotation.set(0,D*Math.PI/2,.22),D&&B.position.set(1.5,6.1,k-2.2),e.add(B)}for(let k of[-18,-30,-40]){let D=new H(new Gt(8,4),new de({color:this.night?1978982:16777215,toneMapped:!this.night}));D.position.set(0,12.95,k),D.rotation.x=Math.PI/2,e.add(D)}let l=new H(qn(9,.5,15,3),new ct({map:xe("stone"),color:9075306,roughness:.85}));l.position.set(0,.25,-30),l.receiveShadow=!0,e.add(l),e.add(ot(9.2,.1,15.2,t.trim,0,.36,-30)),this.addCollider(-4.6,4.6,-37.6,-22.4,"platform");let c=[];for(let k=-5.2;k<=5.21;k+=2.6)c.push([k,-21.8]);for(let[k,D]of c)this.add(pr(),k,0,D);for(let k=0;k<c.length-1;k++){let D=qr(2.6);D.position.set(c[k][0],0,c[k][1]),e.add(D)}let h=ve(5);for(let k=0;k<10;k++){let D=Hh(k+3,.6+h()*.8);D.position.set((h()-.5)*8,.5+D.position.y,-30+(h()-.5)*14),Math.abs(D.position.x)<1.6&&(D.position.x+=2.8*Math.sign(D.position.x||1)),e.add(D)}for(let k=0;k<6;k++){let D=Oh(k+40);D.children.forEach(B=>{B.geometry?.type==="CylinderGeometry"&&(B.visible=!1)}),D.position.set(k%2?3.6:-3.6,.2,-24-k*2.3),D.scale.setScalar(1.6),e.add(D)}let d=new xs;d.group.position.copy(At.trex),d.group.rotation.y=.3,d.setMode("pose"),e.add(d.group),this.refs.trex=d,this.addUpdater(k=>d.update(k));let f=qi("TYRANNOSAURUS REX",`"The Tyrant Lizard King." 12 m long, 8 tonnes, teeth like bananas.
Fun fact: despite its size, T. rex had only TWO fingers on each tiny hand.`,{bodyFont:"24px Georgia, serif"});this.add(f,-2.4,0,-20.6),this.addBoxCollider(-2.4,-20.6,.5,.4);let u=Da({title:"DINO-LOCK 3000",color:"#6dff9e"});this.add(u.group,At.dinoPanel.x,0,At.dinoPanel.z),this.addBoxCollider(At.dinoPanel.x,At.dinoPanel.z,.8,.6),this.addUpdater(k=>u.update(k)),this.refs.console1=u,this.refs.panel1It=this.addInteractable({id:"panel1",pos:new A(At.dinoPanel.x,1.2,At.dinoPanel.z),prompt:"Inspect cipher panel",enabled:!1}),this.add(fr(2.2,.9,new ct({color:5984841,roughness:.9})),-10,0,-19);let g=df();g.scale.setScalar(1.4),this.add(g,-10,.9,-19,.5),this.addBoxCollider(-10,-19,2.5,2.5),this.add(qi("TRICERATOPS","Three horns, one frill, zero chill. Ate plants. Probably fine."),-10,0,-16.6),this.add(fr(2.6,.7,new ct({color:5984841,roughness:.9})),10,0,-20);let y=new xs({eyeLight:!1});y.group.scale.setScalar(.3),y.anim.headYaw=y.anim.targetYaw=-.5,y.applyPose(0),this.add(y.group,10,.7,-20,-.8),this.addBoxCollider(10,-20,2.9,2.9),this.add(qi("VELOCIRAPTOR","Turkey-sized. Feathery. Smaller than the movies told you. Still bites."),10,0,-17.6),this.add(fr(1.1,1),10,0,-40);let p=Hh(77,.8);p.material=new ct({color:3814962,roughness:.6,metalness:.4,flatShading:!0}),this.add(p,10,1,-40),this.addBoxCollider(10,-40,1.3,1.3),this.add(qi("REAL METEORITE","Fell from space 66 million years ago. Please do not lick the meteorite."),10,0,-38.2),this.add($r(1.6,.8,.9,uf()),-10,0,-40),this.addBoxCollider(-10,-40,1.7,1),this.add(qi("AMMONITES","Ancient squid in spiral shells. Basically sea cinnamon rolls."),-10,0,-38.3);let[m,x]=se(1024,400),_=x.createLinearGradient(0,0,0,400);_.addColorStop(0,"#3a1f4d"),_.addColorStop(.6,"#d9663a"),_.addColorStop(1,"#f2b25a"),x.fillStyle=_,x.fillRect(0,0,1024,400),x.fillStyle="#2a1410",x.beginPath(),x.moveTo(560,300),x.lineTo(700,120),x.lineTo(740,120),x.lineTo(900,300),x.fill(),x.fillStyle="#ff7a2a",x.beginPath(),x.arc(720,110,30,0,7),x.fill(),x.fillStyle="#1a0f0a",x.fillRect(0,300,1024,100);for(let k=0;k<6;k++)x.beginPath(),x.moveTo(k*180,300),x.lineTo(k*180+40,200-k%2*40),x.lineTo(k*180+80,300),x.fill();x.fillStyle="#f3e6c4",x.font="bold 72px Georgia, serif",x.textAlign="center",x.fillText("THE AGE OF DINOSAURS",512,80),x.font="italic 30px Georgia, serif",x.fillText("252 \u2013 66 million years ago (and, apparently, tonight)",512,125);let v=new H(new Gt(22,8.6),new ct({map:oe(m),roughness:.8}));v.position.set(0,6,-45.78),e.add(v);let w=Ua();w.position.set(0,6.6,-10.25),w.rotation.y=0,e.add(w);let[S,R]=se(128,128);R.fillStyle="rgba(30,20,12,0.85)",R.beginPath(),R.ellipse(64,84,22,28,0,0,7),R.fill();for(let[k,D]of[[-.45,52],[0,60],[.45,52]])R.save(),R.translate(64,70),R.rotate(k),R.beginPath(),R.ellipse(0,-D*.6,9,D*.45,0,0,7),R.fill(),R.restore();let I=new de({map:oe(S),transparent:!0,depthWrite:!1,opacity:.85}),b=new pt,M=[];for(let k=0;k<9;k++)M.push([5.4+k*1.25,-27.4+k*.4+(k%2?.45:-.45)]);for(let k=0;k<10;k++)M.push([17.2+k*1.7,-23.4+k*.85+(k%2?.45:-.45)]);for(let k=0;k<6;k++)M.push([32.4-k*1.4,-14.6+k*.75+(k%2?.45:-.45)]);let L=new Gt(1.1,1.1);M.forEach(([k,D],B)=>{let $=new H(L,I);$.rotation.x=-Math.PI/2,$.position.set(k,.02,D);let[V,ht]=M[B+1]?[k,D]:M[B-1],[X,ut]=M[B+1]||[k,D];$.rotation.z=Math.atan2(-(X-V),-(ut-ht)),b.add($)}),b.visible=!1,e.add(b),this.refs.footprints=b}_roman(){let t=this.mats,e=this.scene;this.floor(12,40,-9,9,t.mosaic,0,4),this.ceiling(12,40,-9,9,9,t.darkCeil),this.wallX(-9,12,40,9,t.romanWall,[{c:At.romanNorthDoor.x,w:3.2,h:4.4}],3),this.wallX(9,12,40,9,t.romanWall,this._secretOpenings("x",9),3),this.wallZ(40,-9,9,9,t.romanWall,this._secretOpenings("z",40),3),this.wallZ(12,-9,9,9,t.romanWall,[{c:0,w:6,h:6.2}],3);let i=new ct({color:9190186,roughness:.7});for(let u of[-3.2,3.2])e.add(ot(24,.012,.3,i,26,0,u));for(let u of[16.5,22,27.5,33])for(let g of[-5.6,5.6])this.add(Nh(9,.48,Mt.stoneWhite()),u,0,g),this.addBoxCollider(u,g,1.25,1.25);let s=[["JULIUS CAESAR",19.25,-8],["NERO",30.25,-8],["MARCUS AURELIUS",19.25,8],["CALIGULA",24.75,8],["HADRIAN",30.25,8]];for(let[u,g,y]of s){let p=this.add(Ia(u),g,0,y,y>0?Math.PI:0),m=this.addBoxCollider(g,y,.85,.85);u==="CALIGULA"&&(this.refs.caligula={obj:p,col:m})}this.add(hf(),25,0,0,Math.PI/2+.2),this.addCollider(23.2,27.4,-1.1,1.1);for(let[u,g]of[[22,-2.6],[28,-2.6],[22,2.6],[28,2.6]])this.add(pr(),u,0,g);for(let[u,g]of[[22,-2.6],[22,2.6]]){let y=qr(6);y.position.set(u,0,g),e.add(y)}this.add(qi("ROMAN CHARIOT","Top speed: 40 km/h. Seatbelts: none. Cupholders: also none."),20.8,0,0,-Math.PI/2);for(let[u,g]of[[36.5,-7.8],[37.4,-7.6],[36.5,7.8],[37.4,7.6],[14,-8],[14,8]])this.add(cf(),u,0,g,u*3),this.addBoxCollider(u,g,.5,.5);let[r,o]=se(1024,512);o.fillStyle="#cfc6b4",o.fillRect(0,0,1024,512);for(let u=0;u<3e3;u++)o.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,o.fillRect(Math.random()*1024,Math.random()*512,3,3);o.strokeStyle="#8f8676",o.lineWidth=14,o.strokeRect(20,20,984,472),o.fillStyle="#3d3528",o.textAlign="center",o.font="bold 86px Georgia, serif",o.fillText("MVSEVM",512,150),o.fillText("CONDITVM ANNO",512,260),o.font="bold 120px Georgia, serif",o.fillText("MCMLXXIV",512,410);let a=new H(new Gt(5.4,2.7),new ct({map:oe(r),roughness:.9}));a.position.set(39.77,3.6,0),a.rotation.y=-Math.PI/2,e.add(a),e.add(ot(.3,.3,5.8,Mt.stoneWhite(),39.7,2.1,0));for(let u of[-4.2,4.2]){let g=new H(new Gt(1.8,4.5),new ct({map:Ce(`S
P
Q
R`,{w:200,h:500,bg:"#8a1022",fg:"#e9c46a",font:"bold 90px Georgia, serif",border:"#e9c46a"}),side:ke}));g.position.set(39.7,4.6,u),g.rotation.y=-Math.PI/2,e.add(g)}let l=ka("ROMAN NUMERALS 101",`I = 1    V = 5    X = 10    L = 50
C = 100    D = 500    M = 1000
Add them up, biggest first: XVI = 10+5+1 = 16.
Small BEFORE big means subtract: IV = 4, IX = 9, XC = 90, CM = 900.`,3.2,2,{bodyFont:"23px Georgia, serif",bg:"#2a1c14",accent:"#e9c46a"});l.position.set(15.6,2.2,-8.78),e.add(l);let c=ka("GLADIATOR SHIELD",`Property of Maximus. Do not borrow.
Won XXIII fights. Lost I (to a goose).`,2.6,1.2,{bg:"#2a1c14",accent:"#e9c46a"});c.position.set(15.6,2.2,8.78),c.rotation.y=Math.PI,e.add(c);let h=new H(new ne(.7,.7,.08,24),new ct({color:9048098,roughness:.6}));h.rotation.x=Math.PI/2,h.position.set(19,2.6,8.75),e.add(h);let d=Da({title:"AQVILA LOCK",color:"#ffcc4d"});this.add(d.group,At.romanPanel.x,0,At.romanPanel.z,-Math.PI/2),this.addBoxCollider(At.romanPanel.x,At.romanPanel.z,.8,.6,Math.PI/2),this.addUpdater(u=>d.update(u)),this.refs.console2=d,this.refs.panel2It=this.addInteractable({id:"panel2",pos:new A(At.romanPanel.x,1.2,At.romanPanel.z),prompt:"Inspect numeral lock",enabled:!1});let f=Ua();f.position.set(12.25,6.6,0),f.rotation.y=Math.PI/2,e.add(f)}_egypt(){let t=this.scene,e=this.night,i=gr,s=this.mats.sandWall,r=new ct({map:xe("stone"),color:14203274,roughness:.85}),o=zt("sandstone",{color:13150584,roughness:.85}),a=zt("egyptDark",{color:9073488,roughness:.9}),l=zt("basalt",{color:1776159,roughness:.35,metalness:.2}),c=Mt.brass(),h=zt("lapis",{color:2047370,roughness:.5});this.floor(i.x0,i.x1,i.z0,i.z1,r,0,3),this.ceiling(i.x0,i.x1,i.z0,i.z1,i.h,this.mats.darkCeil),this.wallZ(i.x0,i.z0,i.z1,i.h,s,[{c:At.egyptDoor.z,w:3.2,h:4.4}],3),this.wallZ(i.x1,i.z0,i.z1,i.h,s,this._secretOpenings("z",i.x1),3),this.wallX(i.z0,i.x0,i.x1,i.h,s,this._secretOpenings("x",i.z0),3),this.wallX(i.z1,i.x0,i.x1,i.h,s,[{c:At.romanNorthDoor.x,w:3.2,h:4.4}],3);let d=(W,C,lt)=>{for(let dt of[-1,1]){let wt=dt*1.4700000000000002,bt=W==="z"?ot(.95,4.4,.26,o,C,0,lt+wt):ot(.26,4.4,.95,o,C+wt,0,lt);t.add(bt),W==="z"?this.addCollider(C-.95/2,C+.95/2,lt+wt-.26/2,lt+wt+.26/2):this.addCollider(C+wt-.26/2,C+wt+.26/2,lt-.95/2,lt+.95/2)}t.add(W==="z"?ot(.95+.1,.6,3.5,o,C,4.3,lt):ot(3.5,.6,.95+.1,o,C,4.3,lt)),t.add(W==="z"?ot(.95+.14,.1,3.6,c,C,4.4,lt):ot(3.6,.1,.95+.14,c,C,4.4,lt))};d("z",(i.x0+15)/2,At.egyptDoor.z),d("x",At.romanNorthDoor.x,(i.z1-9)/2);let[f,u]=se(1024,128);u.fillStyle="#d9b57a",u.fillRect(0,0,1024,128),u.fillStyle="#8a2a18",u.fillRect(0,0,1024,10),u.fillRect(0,118,1024,10),u.fillStyle="#1f3d8a",u.fillRect(0,12,1024,5),u.fillRect(0,111,1024,5),Ji.forEach((W,C)=>$n(u,W,64+C*128,64,80,["#1f3d8a","#8a2a18","#1a1a1a"][C%3]));let g=(W,C,lt,tt)=>{let mt=oe(f);mt.wrapS=yi,mt.repeat.set(W/7,1);let dt=new H(new Gt(W,.9),new ct({map:mt,roughness:.8}));dt.position.set(C,5.6,lt),dt.rotation.y=tt,t.add(dt)},y=this.wallT/2+.01;g(i.x1-i.x0,(i.x0+i.x1)/2,i.z0+y,0),g(i.x1-i.x0,(i.x0+i.x1)/2,i.z1-y,Math.PI),g(i.z1-i.z0,i.x1-y,(i.z0+i.z1)/2,-Math.PI/2),g(i.z1-i.z0,i.x0+y,(i.z0+i.z1)/2,Math.PI/2);let[p,m]=se(1024,512),x=m.createLinearGradient(0,0,0,512);x.addColorStop(0,"#2a1a3a"),x.addColorStop(.55,"#c86a2a"),x.addColorStop(1,"#e8c07a"),m.fillStyle=x,m.fillRect(0,0,1024,512),m.fillStyle="#7a4a1e";for(let[W,C,lt]of[[180,300,210],[470,380,280],[800,260,170]])m.beginPath(),m.moveTo(W-C/2,512),m.lineTo(W,512-lt),m.lineTo(W+C/2,512),m.fill();m.fillStyle="#ffd36a",m.beginPath(),m.arc(512,120,54,0,7),m.fill(),$n(m,"eye",512,260,190,"#14244f"),m.fillStyle="#f3e6c4",m.font="bold 54px Georgia, serif",m.textAlign="center",m.fillText("THE LAND OF THE PHARAOHS",512,60);let _=new H(new Gt(10,5),new ct({map:oe(p),roughness:.8}));_.position.set((i.x0+i.x1)/2,3.2,i.z0+y),t.add(_),this.refs.pillars=[],z1.forEach(({n:W,glyph:C,x:lt,z:tt})=>{let mt=new pt;mt.add(ot(1.4,.3,1.4,a,0,0,0)),mt.add(ot(1.1,i.h-.6,1.1,o,0,.3,0)),mt.add(ot(1.4,.3,1.4,a,0,i.h-.3,0));let[dt,wt]=se(256,768);wt.fillStyle="#e3c992",wt.fillRect(0,0,256,768);for(let G=0;G<600;G++)wt.fillStyle=`rgba(90,60,20,${Math.random()*.1})`,wt.fillRect(Math.random()*256,Math.random()*768,3,3);wt.strokeStyle="#8a2a18",wt.lineWidth=10,wt.strokeRect(12,12,232,744),wt.fillStyle="#1f3d8a",wt.fillRect(12,250,232,10),wt.fillRect(12,600,232,10),wf(wt,W,128,140,150,"#b0301a"),$n(wt,C,128,430,220,"#14244f");for(let G=0;G<4;G++)$n(wt,Ji[(W*3+G)%Ji.length],50+G%2*156,650+Math.floor(G/2)*70,50,"rgba(60,40,20,0.55)");let bt=oe(dt),P=new ct({map:bt,roughness:.75});for(let G=0;G<4;G++){let J=new H(new Gt(1,3),P),at=G*Math.PI/2;J.position.set(Math.sin(at)*.56,2.05,Math.cos(at)*.56),J.rotation.y=at,mt.add(J)}this.add(mt,lt,0,tt),this.addBoxCollider(lt,tt,1.4,1.4);let E=this.addInteractable({id:"pillar"+W,pos:new A(lt,1.7,tt),prompt:"Read the pillar",enabled:!1,radius:2.9});this.refs.pillars.push({n:W,glyph:C,it:E,x:lt,z:tt})});let v=Da({title:"PHARAOH'S LOCK",color:"#e9c46a"});this.add(v.group,At.egyptPanel.x,0,At.egyptPanel.z),this.addBoxCollider(At.egyptPanel.x,At.egyptPanel.z,.8,.6),this.addUpdater(W=>v.update(W)),this.refs.consoleE=v,this.refs.panelEIt=this.addInteractable({id:"panelE",pos:new A(At.egyptPanel.x,1.2,At.egyptPanel.z),prompt:"Open the Pharaoh's Lock",enabled:!1});let w=At.sarcophagus,S=new H(qn(4.6,.45,6,2),new ct({map:xe("stone"),color:10125144,roughness:.85}));S.position.set(w.x,.225,w.z),S.receiveShadow=!0,t.add(S),t.add(ot(4.7,.06,6.1,c,w.x,.45,w.z)),t.add(ot(2.6,.22,.7,a,w.x,0,w.z+3.3)),this.addCollider(w.x-2.3,w.x+2.3,w.z-3,w.z+3);let[R,I]=se(512,256);for(let W=0;W<16;W++)I.fillStyle=W%2?"#1f3d8a":"#d4a43a",I.fillRect(W*32,0,32,256);I.fillStyle="#d4a43a",I.fillRect(0,96,512,64),Ji.forEach((W,C)=>$n(I,W,32+C*64,128,50,"#14244f"));let b=new ct({map:oe(R),roughness:.45,metalness:.4}),M=zt("sarcInside",{color:1708554,roughness:1}),L=new pt,k=1.3,D=.9,B=2.6,$=.1;L.add(ot(k,$,B,M,0,0,0)),L.add(ot($,D,B,b,-k/2+$/2,0,0)),L.add(ot($,D,B,b,k/2-$/2,0,0)),L.add(ot(k,D,$,b,0,0,-B/2+$/2)),L.add(ot(k,D,$,b,0,0,B/2-$/2)),L.add(ot(k-2*$,.02,B-2*$,M,0,$,0)),this.add(L,w.x,.45,w.z);let V=new pt,[ht,X]=se(256,512);X.fillStyle="#d4a43a",X.fillRect(0,0,256,512);for(let W=0;W<9;W++)X.fillStyle=W%2?"#1f3d8a":"#e9c46a",X.fillRect(40,150+W*22,176,22);$n(X,"ankh",128,400,120,"#14244f"),$n(X,"scarab",128,90,110,"#14244f");let ut=new H(new ee(k+.06,.16,B+.06),[b,b,new ct({map:oe(ht),roughness:.4,metalness:.5}),b,b,b]);ut.castShadow=!0,V.add(ut);let vt=new H(new ie(.28,16,12,0,Math.PI*2,0,Math.PI/2),c);vt.scale.set(1,.55,1.15),vt.position.set(0,.08,-B/2+.42),V.add(vt);for(let W of[-1,1])V.add(ot(.14,.06,.6,h,W*.3,.06,-B/2+.55));V.position.set(w.x,.45+D+.08,w.z),t.add(V),this.refs.sarcLid=V,this.refs.sarcLidBase=V.position.clone();let xt=bf(),Ht=new pt,Yt=new pt;Ht.add(Yt),Yt.add(xt.group),xt.group.position.y=-.92,Yt.rotation.x=-Math.PI/2,xt.anim.sit=0,xt.setMode("liesit"),xt.update(0),Ht.position.set(w.x,.45+$+.16,w.z+.05),t.add(Ht),this.refs.mummy={person:xt,holder:Ht,pivot:Yt,home:Ht.position.clone()},this.addUpdater(W=>xt.update(W));let K=()=>{let W=new pt;W.add(ot(1,.7,1.4,a,0,0,0)),W.add(ot(.62,1.2,.5,l,0,.7,-.1)),W.add(ot(.66,.5,.9,l,0,.7,.15));for(let tt of[-1,1])W.add(ot(.18,.6,.2,l,tt*.2,.7,.55));let C=new H(new Ge(.3,.07,6,16),c);C.rotation.x=Math.PI/2,C.position.set(0,1.86,-.1),W.add(C);let lt=new pt;lt.add(ot(.38,.36,.42,l,0,0,0)),lt.add(ot(.18,.14,.42,l,0,.04,.34));for(let tt of[-1,1]){let mt=new H(new cn(.08,.42,4),l);mt.position.set(tt*.12,.5,-.06),lt.add(mt);let dt=ot(.06,.03,.02,c,tt*.1,.22,.21);lt.add(dt)}return lt.position.set(0,1.9,-.05),W.add(lt),W.scale.setScalar(1.5),Le(W)};for(let W of[-1,1])this.add(K(),w.x+W*3.4,0,w.z-2.6),this.addBoxCollider(w.x+W*3.4,w.z-2.6,1.6,2.2);let F=K();if(e){this.add(F,35.4,.75,-15.4,0),F.rotation.set(.15,-.6,Math.PI/2),F.updateMatrixWorld(!0);let W=new xi().setFromObject(F);this.addCollider(W.min.x+.2,W.max.x-.2,W.min.z+.2,W.max.z-.2)}else this.add(F,35.6,0,-15.4,-Math.PI/2),this.addBoxCollider(35.6,-15.4,2.2,1.6);let it=new H(new ne(.32,.5,6,4,1),o);it.rotation.y=Math.PI/4,it.position.set(36.6,3.3,-34.2),it.castShadow=!0,t.add(it);let z=new H(new cn(.33,.6,4),c);z.rotation.y=Math.PI/4,z.position.set(36.6,6.6,-34.2),t.add(z),t.add(ot(1.4,.3,1.4,a,36.6,0,-34.2)),this.addBoxCollider(36.6,-34.2,1.4,1.4);let nt=new pt,gt=new H(new cn(.5,.6,4),zt("pyr",{color:14730378,roughness:.8}));gt.rotation.y=Math.PI/4,gt.position.y=.3,nt.add(gt),this.add($r(1.4,.9,1.4,nt),19.6,0,-34.4),this.addBoxCollider(19.6,-34.4,1.5,1.5),t.add(ot(.7,.7,2.4,a,16.2,0,-31.6)),this.addCollider(15.8,16.6,-32.85,-30.35),["jackal","falcon","baboon","human"].forEach((W,C)=>{let lt=new pt;lt.add(new H(new ne(.11,.08,.32,12),zt("alabaster",{color:15327436,roughness:.5})));let tt=new H(new ie(.1,10,8),[c,l,zt("alabaster",{color:15327436,roughness:.5}),a][C]);tt.position.y=.22,lt.add(tt),lt.position.set(16.2,.86,-32.35+C*.5),t.add(lt)});let _t=(W,C,lt,tt,mt)=>this.add(qi(W,C,{bg:"#2a1c0c",accent:"#d4a43a"}),lt,0,tt,mt);_t("EGYPTIAN NUMBERS",`Ancient Egyptians counted with lines:
| = 1    || = 2    ||| = 3    |||| = 4
(10 was a little upside-down U. Fancy.)`,17.6,-20.8,-2.5),_t("THE MUMMY",`Wrapped in about 20 layers of linen, 3,000 years ago.
Favorite food: unknown. (Probably not donuts.)`,30.8,-20.6,0),_t("THE ANKH",`The Egyptian symbol of life. It looks like a key.
It is not a key. We checked.`,21.6,-14.6,Math.PI),_t("SCARAB BEETLE",`Scarabs roll balls of poop across the sand.
The Egyptians thought this was beautiful. They were right.`,33.6,-31.6,-Math.PI/2),this.refs.flames=[];for(let[W,C]of[[18.2,-26.6],[23,-18.6],[21,-11.6],[33,-28.2]]){let lt=new pt;for(let wt=0;wt<3;wt++){let bt=wt/3*Math.PI*2,P=new H(new ne(.025,.025,1.1,5),c);P.position.set(Math.cos(bt)*.22,.52,Math.sin(bt)*.22),P.rotation.set(Math.sin(bt)*.2,0,-Math.cos(bt)*.2),lt.add(P)}let tt=new H(new ne(.34,.2,.24,14),c);tt.position.y=1.1,lt.add(tt),this.add(Le(lt,!0,!1),W,0,C),this.addBoxCollider(W,C,.7,.7);let mt=new H(new cn(.22,.6,8),new de({color:16752704,transparent:!0,opacity:.9,blending:En,depthWrite:!1}));mt.position.set(W,1.5,C),t.add(mt);let dt=new Ie(16751168,e?7:2,10,2);dt.position.set(W,1.9,C),t.add(dt),this.refs.flames.push({flame:mt,light:dt,base:dt.intensity,ph:W*3.1})}let Wt=0;this.addUpdater(W=>{Wt+=W;for(let C of this.refs.flames){let lt=.8+Math.sin(Wt*13+C.ph)*.1+Math.sin(Wt*7.3+C.ph*2)*.1;C.light.intensity=C.base*lt,C.flame.scale.set(1,.85+lt*.3,1),C.flame.rotation.y+=W*2}});let Q=(W,C,lt,tt,mt)=>{let dt=new H(new Gt(5.2,1.1),new ct({map:Ce(W,{w:1024,h:220,bg:"#2a1c0c",fg:"#e9c46a",font:"bold 104px Georgia, serif",border:"#d4a43a"}),emissive:16769184,emissiveIntensity:e?.12:.02}));dt.position.set(C,lt,tt),dt.rotation.y=mt,t.add(dt)};Q("EGYPTIAN WING",14.78,5.6,At.egyptDoor.z,-Math.PI/2),Q("ROMAN EMPIRE",At.romanNorthDoor.x,5.4,i.z1-y-.01,Math.PI),Q("EGYPTIAN WING",At.romanNorthDoor.x,5.6,-8.78,0)}_collectibles(){this.night&&(this.addCollectible("office_locker",-14.5,.6,3.6,3),this.addCollectible("dino_meteor",12.3,.6,-42.8,4))}_secretOpenings(t,e){return Pf.filter(i=>i.axis===t&&i.at===e).map(i=>({c:(i.from+i.to)/2,w:i.to-i.from,h:i.h}))}_secretRooms(){if(this.refs.secrets=Pf.map(e=>this._secretRoom(e)),!this.night)return;let t=new Ie(16761466,0,6,2);this.scene.add(t),this.addUpdater(()=>{let e=this.game.player?.pos;if(!e)return;let i=null,s=1/0;for(let r of this.refs.secrets){if(r.lamp.intensity<=0)continue;let o=r.lamp.position.distanceToSquared(e);o<s&&(s=o,i=r.lamp)}t.intensity=i?i.intensity:0,i&&t.position.copy(i.position)})}_secretRoom(t){let e=this.scene,i=this.game,s=this.wallT,r=s/2,o=this.mats[t.wall],a=t.to-t.from,l=(t.from+t.to)/2,[c,h]=t.room||[t.from,t.to],d=h-c,f=(c+h)/2,u=2.6,g=t.h+.3,y=(z,nt)=>t.axis==="z"?[t.at+t.side*nt,z]:[z,t.at+t.side*nt],p=t.axis==="z",m=(z,nt,gt,_t,Wt,Q,W=0)=>{let[C,lt]=y(z,nt),tt=ot(p?_t:gt,Wt,p?gt:_t,Q,C,W,lt);return e.add(tt),tt},x=(z,nt,gt,_t)=>{let[Wt,Q]=y(z,gt),[W,C]=y(nt,_t);return this.addCollider(Math.min(Wt,W),Math.max(Wt,W),Math.min(Q,C),Math.max(Q,C))},_=zt("secretRoom_"+t.wall,{color:o.color.getHex(),map:o.map,roughness:.95}),[v,w]=y(f,r+u/2),S=new H(new Gt(p?u:d,p?d:u),zt("secretFloor",{color:4866104,roughness:.95}));S.rotation.x=-Math.PI/2,S.position.set(v,.01,w),e.add(S);let R=new H(new Gt(p?u:d,p?d:u),zt("secretCeil",{color:2762274,roughness:1}));R.rotation.x=Math.PI/2,R.position.set(v,g,w),e.add(R),m(f,r+u+.1,d+.4,.2,g,_);for(let z of[c-.1,h+.1])m(z,r+u/2,.2,u,g,_);x(c-.2,h+.2,r+u,r+u+.2),x(c-.2,c,r,r+u),x(h,h+.2,r,r+u);let I=new Ie(16761466,0,6,2),[b,M]=y(f,r+u*.5);I.position.set(b,g-.4,M);let[L,k]=y(f,r+u-.01),D=new H(new Gt(1.4,.4),new ct({map:Ce(t.sign,{w:512,h:146,bg:"#1d1712",fg:"#ffd98a",font:"bold 54px Arial Black, Arial",border:"#ffd98a"}),emissive:16767370,emissiveIntensity:.1}));D.position.set(L,2,k),D.rotation.y=p?t.side>0?-Math.PI/2:Math.PI/2:t.side>0?Math.PI:0,e.add(D),this._secretDecor(t,y,m);let[B,$]=y(f,r+u*.55);this.add(fr(.5,.7,zt("secretPed",{color:7035464,roughness:.8})),B,0,$),this.night&&this.addCollectible(t.id,B,1,$,t.frosting??0);let V=new pt,[ht,X]=y(l,0);if(t.clue==="door"){let[z,nt]=y(t.from,0);V.position.set(z,0,nt);let gt=ot(p?.08:a,t.h,p?a:.08,zt("staffDoor",{color:3881794,metalness:.5,roughness:.4}),p?0:a/2,0,p?a/2:0);V.add(gt);let _t=ot(p?.12:.06,.06,p?.06:.12,Mt.brass(),p?0:a-.15,1.05,p?a-.15:0);V.add(_t)}else V.position.set(ht,0,X),V.add(new H(p?qn(s,t.h,a,3):qn(a,t.h,s,3),o)),V.children[0].position.y=t.h/2;e.add(V);let ut=x(t.from,t.to,-r,r),vt=-1,xt=new A,Ht=null,Yt=null,K=(z,nt,gt)=>{let[_t,Wt]=y(nt,vt*(r+.012));z.position.set(_t-(t.clue==="door"?0:ht),gt,Wt-(t.clue==="door"?0:X)),z.rotation.y=p?t.side>0?-Math.PI/2:Math.PI/2:t.side>0?Math.PI:0,V.add(z),xt.set(_t,gt,Wt)},F=(z,nt,gt)=>{let[_t,Wt]=se(256,Math.round(256*gt/nt));return z(Wt,_t),new H(new Gt(nt,gt),new ct({map:oe(_t),transparent:!0,roughness:.8}))};if(t.clue==="poster"){let z=new H(new Gt(.8,1.05),new ct({map:Ce(`STAY
AWAKE
(seriously)`,{w:256,h:340,bg:"#16324f",fg:"#ffcc4d",font:"bold 34px Arial Black, Arial",border:"#ffcc4d"})}));K(z,l,1.85),z.rotation.z=.2,Yt=()=>i.tween(.4,nt=>{z.rotation.z=.2*(1-nt)})}else if(t.clue==="door"){let[z,nt]=y(l,vt*.1);xt.set(z,1.1,nt)}else if(t.clue==="fossil"||t.clue==="eye"||t.clue==="scarab"){let z=F(nt=>{if(t.clue==="fossil"){nt.strokeStyle="#6b5a44",nt.lineWidth=14,nt.lineCap="round",nt.beginPath();for(let gt=0;gt<Math.PI*7;gt+=.1){let _t=8+gt*5.2;nt.lineTo(128+Math.cos(gt)*_t,128+Math.sin(gt)*_t)}nt.stroke()}else $n(nt,t.clue,128,128,200,t.clue==="eye"?"#b8892a":"#1d3f8f")},.62,.62);K(z,l,1.45)}else if(t.clue==="brick"){let z=ot(p?.14:.42,.18,p?.42:.14,zt("looseBrick",{color:10127988,roughness:.9})),[nt,gt]=y(t.from-.55,vt*(r+.04));z.position.set(nt,1.26,gt),e.add(z),xt.set(nt,1.35,gt),Ht=z;let[_t,Wt]=y(t.from-.55,vt*(r-.06));Yt=()=>i.tween(.4,Q=>{z.position.x=Ue(nt,_t,Q),z.position.z=Ue(gt,Wt,Q)})}else if(t.clue==="torch"){let z=new pt;z.add(ot(.1,.18,.1,Mt.bronze(),0,-.09,0));let nt=new H(new ne(.035,.025,.5,8),Mt.darkWood());nt.position.y=.25,z.add(nt);let gt=new H(new cn(.06,.14,8),zt("torchTip",{color:2759184,roughness:1}));gt.position.y=.55,z.add(gt);let[_t,Wt]=y(t.to+.45,vt*(r+.08));z.position.set(_t,1.45,Wt),e.add(z),xt.set(_t,1.6,Wt),Ht=z;let Q=p?"z":"x";Yt=()=>i.tween(.45,W=>{z.rotation[Q]=t.side*.9*W*(p?1:-1)})}else if(t.clue==="bust"){let z=this.refs.caligula;Ht=z.obj,xt.set(z.obj.position.x,1.5,z.obj.position.z);let nt=z.obj.position.x,gt={...z.col};Yt=()=>i.tween(.9,_t=>{z.obj.position.x=nt+1.4*_t,z.col.minX=gt.minX+1.4*_t,z.col.maxX=gt.maxX+1.4*_t})}let it={S:t,panel:V,col:ut,lamp:I,mover:Ht,opened:!1};if(this.night){let z=this.addInteractable({id:"secret_"+t.id,pos:xt.clone(),prompt:t.prompt,enabled:!0,radius:2});it.it=z,z.onUse=async()=>{it.opened||(it.opened=!0,z.enabled=!1,Yt&&(i.audio.play("click"),await Yt()),ut.enabled=!1,t.clue==="door"&&x(t.from,t.from+.3,r,r+a),i.audio.play("gate"),i.shake(.15,1.2),i.foundSecret(),await i.tween(1.4,nt=>{t.clue==="door"?V.rotation.y=t.side*1.45*nt*(p?1:-1):V.position.y=-(t.h+.05)*nt,I.intensity=5*nt}))}}return it}_secretDecor(t,e,i){let s=this.wallT/2,[r,o]=t.room||[t.from,t.to],a=r+.45,l=o-.45,c=s+2,h=(d,f,u={})=>zt(d,{color:f,roughness:.8,...u});if(t.style==="nap")i(a+.3,c,.9,.5,.12,h("blanket",3824282)),i(a+.3,c+.15,.45,.3,.16,h("pillow",15789280),.12);else if(t.style==="closet")i(l,c-.2,.06,.06,1.3,h("mop",9071162)),i(l,c-.2,.3,.3,.32,h("bucket",2976964,{metalness:.3})),i(a,c,.5,.4,.9,h("shelfbox",10123858));else if(t.style==="nest"){let[d,f]=e(a+.2,c),u=new H(new Ge(.35,.12,8,18),h("nest",6965802));u.rotation.x=Math.PI/2,u.position.set(d,.12,f),this.scene.add(u);for(let g=0;g<3;g++){let y=new H(new ie(.16,12,10),h("egg",15260864));y.scale.set(1,1.35,1),y.position.set(d+Math.cos(g*2.1)*.14,.24,f+Math.sin(g*2.1)*.14),this.scene.add(y)}}else if(t.style==="bones")for(let d=0;d<4;d++){let[f,u]=e(a+d*.35,c+d%2*.3),g=new H(new ne(.05,.05,.7,8),h("spareBone",14734520));g.rotation.set(Math.PI/2,0,d*.7),g.position.set(f,.06,u),this.scene.add(g)}else if(t.style==="treasure"){for(let d=0;d<5;d++){let[f,u]=e(a+d%3*.3,c+Math.floor(d/3)*.3),g=new H(new ne(.16,.2,.12+d%2*.08,12),Mt.brass());g.position.set(f,.06,u),this.scene.add(g)}i(l,c,.6,.4,.4,h("chest",6961690))}else if(t.style==="armory"){let[d,f]=e(a+.2,c),u=new H(new ie(.2,14,10,0,Math.PI*2,0,Math.PI/2),Mt.bronze());u.position.set(d,.62,f),this.scene.add(u),i(a+.2,c,.3,.3,.6,h("helmetStand",4861724));let g=new H(new ne(.45,.45,.06,20),Mt.velvet()),[y,p]=e(l,c+.3);g.position.set(y,.5,p),g.rotation.x=Math.PI/2-.3,this.scene.add(g)}}_visitors(){let t=ve(99);this.visitors=[];let e=[{minX:-9,maxX:9,minZ:-8,maxZ:2},{minX:-12,maxX:12,minZ:-44,maxZ:-12,avoid:{minX:-5.5,maxX:5.5,minZ:-38,maxZ:-21}},{minX:14,maxX:38,minZ:-7,maxZ:7,avoid:{minX:22,maxX:28.5,minZ:-2,maxZ:2}}],i=s=>{for(let r=0;r<20;r++){let o=s.minX+t()*(s.maxX-s.minX),a=s.minZ+t()*(s.maxZ-s.minZ);if(!(s.avoid&&o>s.avoid.minX&&o<s.avoid.maxX&&a>s.avoid.minZ&&a<s.avoid.maxZ))return new A(o,0,a)}return new A((s.minX+s.maxX)/2,0,s.maxZ)};for(let s=0;s<14;s++){let r=e[s%e.length],o=Mf(t),a=i(r);o.group.position.copy(a),this.scene.add(o.group),this.visitors.push({p:o,area:r,target:i(r),wait:t()*4})}this.addUpdater(s=>{for(let r of this.visitors){let o=r.p.group;if(r.wait>0)r.wait-=s,r.p.setMode("idle");else{let l=r.target.clone().sub(o.position),c=l.length();if(c<.3)r.wait=2+t()*5,r.target=i(r.area);else{l.normalize(),o.position.addScaledVector(l,Math.min(c,1.1*s));let d=Math.atan2(l.x,l.z)-o.rotation.y;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;o.rotation.y+=d*Math.min(1,s*6),r.p.setMode("walk",1.1)}}let a=this.game.player;if(a){let l=a.pos.x-o.position.x,c=a.pos.z-o.position.z,h=Math.hypot(l,c);h<.6&&h>.001&&(a.pos.x+=l/h*(.6-h),a.pos.z+=c/h*(.6-h))}r.p.update(s)}})}makeAaron(){return new _s({shirt:9417696,pants:1778752,cap:!0,badge:!0,nameTag:!0,hair:1118481,skin:13012580})}};var xn=[-2.2,0,2.2],An=24,If=8,pn=880;function Xh(n=1.15){let t=[[-.45,0],[-.2,0],[-.07,.78],[.07,.78],[.2,0],[.45,0],[.26,.95],[.3,1.38],[.66,.98],[.79,1.1],[.38,1.66],[.12,1.72]];for(let e=1;e<12;e++){let i=-.55+e/12*(Math.PI+1.1);t.push([Math.cos(i)*.23,1.92+Math.sin(i)*.23])}return t.push([-.12,1.72],[-.38,1.66],[-.79,1.1],[-.66,.98],[-.3,1.38],[-.26,.95]),t.map(([e,i])=>[e*n,i*n])}var Ba=class extends Zi{constructor(t){super(t);let e=this.scene;e.background=new Ft(2301232),e.fog=new er(2301232,40,150),this.ownsCamera=!0,this.surface="carpet",this.rng=ve(1974),e.add(new Gi(13160703,5915700,1.8)),e.add(new Vi(16777215,.4)),this.headLight=new Ie(16769720,70,50,1.5),e.add(this.headLight),this.aheadLight=new Ie(16773336,90,60,1.5),e.add(this.aheadLight),this.alarm=new Ie(16719904,0,30,1.5),e.add(this.alarm),this.mats={floor:new ct({map:xe("marble"),roughness:.3}),carpet:new ct({map:xe("carpet"),roughness:.9}),wall:new ct({map:xe("plaster"),color:9206938,roughness:.85}),ceil:new ct({color:2893364,roughness:1}),lamp:new de({color:16773320}),frame:new ct({color:13214282,metalness:.8,roughness:.35})},this.paintMats=[];for(let u=0;u<8;u++)this.paintMats.push(new ct({map:$u(500+u,u%3===0?"portrait":"landscape"),roughness:.7}));this.chunks=[];for(let u=0;u<If;u++){let g=this._chunk(u);g.position.z=-u*An,e.add(g),this.chunks.push(g)}this.guard=Ha(),e.add(this.guard.group),this.guard.group.rotation.y=Math.PI,this.guard.setMode("run",8);let i=$i();i.rotation.x=Math.PI/2,i.scale.setScalar(1.3),this.guard.attachToHand(i,1);let[s,r]=[document.createElement("canvas"),null];s.width=s.height=128;let o=s.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(0,0,0,0.85)"),a.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=a,o.fillRect(0,0,128,128),this.blob=new H(new Gt(1,1),new de({map:new Gn(s),transparent:!0,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.03,e.add(this.blob),this.trex=new xs,this.trex.setAlive(!0),this.trex.group.traverse(u=>u.layers.set(1)),this.trex.eyeLight?.layers.enableAll(),this.mirrorCam=new qe(64,2.4,.1,90),this.mirrorCam.layers.enable(1),this.mirrorEl=document.getElementById("mirror"),t.camera.layers.enable(1),this.trex.group.rotation.y=Math.PI,e.add(this.trex.group);let l=Vh(Oa());for(let u of l.eyes)u.visible=!0;this.lunge=new pt;let c=new pt;c.rotation.y=Math.PI/2+.35,c.add(l.head),this.lunge.add(c),this.lungeJaw=l.jaw,this.lungeHead=l.head,this.lunge.visible=!1,this.lungeT=-1,this.trexBehind=6,this.hideTrex=!1,this._buildWall();let[h]=[document.createElement("canvas")];h.width=h.height=32;let d=h.getContext("2d"),f=d.createRadialGradient(16,16,0,16,16,16);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.3,"rgba(255,150,210,0.9)"),f.addColorStop(1,"rgba(255,100,180,0)"),d.fillStyle=f,d.fillRect(0,0,32,32),this.sparkTex=new Gn(h),this.sparks=[];for(let u=0;u<48;u++){let g=new ir(new ds({map:this.sparkTex,transparent:!0,depthWrite:!1,blending:En}));g.visible=!1,g.scale.setScalar(.35),this.scene.add(g),this.sparks.push({s:g,v:new A,life:0})}this.sparkIdx=0,this.stepT=0,this.wasAir=!1,this.roll=0,this.obstacles=[],this.donuts=[],this.plan=this._plan(),this.planIdx=0,this.debris=[],this.st={phase:"idle",z:0,x:0,lane:1,prevLane:1,y:0,vy:0,slide:0,speed:0,danger:.25,invuln:0,slow:0,stompT:0,t:0,donutCount:0,arrowShown:!1,alarmT:0},this.camPos=new A,this.camLook=new A}_chunk(t){let e=new pt,i=this.mats,s=new H(vs(10,An,4),i.floor);s.rotation.x=-Math.PI/2,s.position.z=-An/2,s.receiveShadow=!0,e.add(s);let r=new H(new Gt(7.2,An),i.carpet);r.material.map.repeat.set(1,An/7.2),r.rotation.x=-Math.PI/2,r.position.set(0,.012,-An/2),e.add(r);for(let a of[-1,1]){let l=new H(qn(.4,7,An,3),i.wall);l.position.set(a*5.2,3.5,-An/2),e.add(l);for(let c=0;c<3;c++){let h=-4-c*8,d=ot(.5,7,.7,Mt.stoneWhite(),a*4.9,0,h);if(e.add(d),c<2){let f=this.paintMats[(t*2+c+(a>0?3:0))%this.paintMats.length],u=f.map.image.height>200,g=u?1.6:2.6,y=u?2:1.6,p=new H(new Gt(g,y),f);p.position.set(a*4.98,3,h-4),p.rotation.y=-a*Math.PI/2,e.add(p);let m=ot(.08,y+.2,g+.2,i.frame,a*5,3-(y+.2)/2,h-4);e.add(m);let x=new H(new ie(.12,8,6),i.lamp);x.position.set(a*4.85,4.6,h-4),e.add(x)}}}let o=new H(new Gt(10.4,An),i.ceil);o.rotation.x=Math.PI/2,o.position.set(0,7,-An/2),e.add(o);for(let a=0;a<2;a++){let l=ot(2.4,.08,.5,i.lamp,0,6.9,-6-a*12);e.add(l)}return wi(e),e}_buildWall(){let t=new ti;t.moveTo(-5.4,0),t.lineTo(5.4,0),t.lineTo(5.4,7),t.lineTo(-5.4,7),t.lineTo(-5.4,0);let e=new Mi;Xh(1.18).forEach(([c,h],d)=>d===0?e.moveTo(xn[2]+c,h+.001):e.lineTo(xn[2]+c,h+.001)),e.closePath(),t.holes.push(e);let s=new rr(t,{depth:.6,bevelEnabled:!1}),r=new H(s,new ct({map:xe("plaster"),color:9076594,roughness:.9}));r.material.map.repeat.set(.25,.25),r.position.z=-pn-.6,r.castShadow=r.receiveShadow=!0,this.scene.add(r),this.wall=r;let o=new H(new Gt(4,.9),new ct({map:Ce("ARCHIVES \u2014 STAFF ONLY",{w:1024,h:200,bg:"#a01818",fg:"#fff",font:"bold 84px Arial Black, Arial"})}));o.position.set(-1,4.8,-pn+.02),this.scene.add(o);let a=new H(new Gt(14,8),new de({color:0}));a.position.set(0,3.5,-pn-5),this.scene.add(a);let l=new H(new Gt(6,2),new de({map:Ce("GO RIGHT \u279C",{w:1024,h:340,bg:"#ffcc4d",fg:"#111",font:"bold 170px Arial Black, Arial"}),toneMapped:!1,side:ke}));l.position.set(0,5.5,-pn+30),this.scene.add(l),this.arrow3d=l}_plan(){let t=this.rng,e=[],i=-70;for(;i>-(pn-90);){let s=-i/pn,r=t(),o={z:i,items:[]},a=Math.floor(t()*3);if(r<.3){for(let l=0;l<3;l++)l!==a&&o.items.push({type:t()<.5?"case":t()<.5?"statue":"cart",lane:l});o.donutLane=a}else if(r<.48){for(let l=0;l<3;l++)o.items.push({type:"rope",lane:l});o.donutArc=Math.floor(t()*3)}else if(r<.64){for(let l=0;l<3;l++)o.items.push({type:"banner",lane:l});o.donutLane=a}else if(r<.8){o.items.push({type:"case",lane:a});let l=(a+1+Math.floor(t()*2))%3;o.items.push({type:t()<.5?"bench":"column",lane:l}),o.donutArc=l}else{let l=["rope","banner","case"],c=Math.floor(t()*3);for(let h=0;h<3;h++)o.items.push({type:l[(h+c)%3],lane:h});o.donutLane=(2-c+3)%3}e.push(o),i-=Ue(30,19,s)+t()*6}return e}_spawnRow(t){for(let e of t.items){let i=this._makeObstacle(e.type);i.mesh.position.set(xn[e.lane],0,t.z),this.scene.add(i.mesh),this.obstacles.push({...i,lane:e.lane,z:t.z,type:e.type,hit:!1})}if(t.donutLane!=null)for(let e=0;e<5;e++)this._spawnDonut(xn[t.donutLane],.9,t.z+14-e*2.4);if(t.donutArc!=null)for(let e=0;e<5;e++){let i=e/4;this._spawnDonut(xn[t.donutArc],.9+Math.sin(i*Math.PI)*1.3,t.z+4-i*8)}}_burst(t){for(let e=0;e<8;e++){let i=this.sparks[this.sparkIdx++%this.sparks.length];i.s.position.copy(t),i.s.visible=!0,i.v.set((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*3-this.st.speed*.6),i.life=.5+Math.random()*.3}}_spawnDonut(t,e,i){let s=Si({frosting:Math.floor(Math.random()*5),glow:!0,scale:1.6});s.rotation.x=Math.PI/2,s.position.set(t,e,i),this.scene.add(s),this.donuts.push({obj:s,taken:!1})}_makeObstacle(t){let e=new pt,i=0,s=2,r=1,o=1.7;if(t==="case"){let a=new H(new ie(.28,14,10),new ct({color:14274472,roughness:.6}));a.scale.y=1.3,a.position.y=.36;let l=new pt;l.add(a);let c=$r(1.6,1.1,1,l);e.add(c),s=2.1,r=1}else if(t==="statue")e.add(Ia(null)),s=1.9,r=.9,o=1;else if(t==="cart"){e.add(ot(1.4,1.1,.9,zt("cart",{color:15909166,roughness:.5}),0,.15,0));let a=ot(.06,1.6,.06,Mt.wood(),.4,.2,.2);a.rotation.z=.2,e.add(a),e.add(new H(new Ge(.12,.03,6,12),Mt.black()).translateY(.12).translateX(-.5));let l=new H(new Gt(.9,.5),new ct({map:Ce("WET FLOOR",{w:256,h:140,bg:"#ffd400",fg:"#111",font:"bold 44px Arial Black, Arial"})}));l.position.set(0,.8,.46),e.add(l),s=1.4,r=.9,o=1.5}else if(t==="rope"){let a=pr(),l=pr();a.position.x=-.95,l.position.x=.95,e.add(a,l);let c=qr(1.9);c.position.x=-.95,e.add(c),s=1,r=.3,o=2}else if(t==="bench"){let a=La(1.9);e.add(a),s=.55,r=.5,o=1.9}else if(t==="column"){let a=new H(new ne(.38,.38,2,16),Mt.stoneWhite());a.rotation.z=Math.PI/2,a.position.y=.38,a.castShadow=!0,e.add(a),s=.76,r=.76,o=2}else if(t==="banner"){let a=new H(new Gt(2.1,1.7),new ct({map:Ce(`EXHIBIT
CLOSED`,{w:300,h:240,bg:"#14243d",fg:"#ffcc4d",font:"bold 62px Arial Black, Arial",border:"#ffcc4d"}),side:ke}));a.position.y=2.25,e.add(a);for(let l of[-.9,.9])e.add(ot(.03,3.6,.03,Mt.metal(),l,3.1,0));i=1.3,s=3.6,r=.3,o=2.1}return Le(e,!0,!1),wi(e),{mesh:e,y0:i,y1:s,d:r,w:o}}start(){let t=this.st;return t.phase="intro",t.t=0,this.game.camera.add(this.lunge),this.lunge.position.set(0,2.4,-2.8),this.scene.add(this.game.camera),new Promise(e=>this.resolve=e)}beginRun(){this.game.camera.layers.disable(1),this.mirrorEl?.classList.remove("off"),this.st.phase="run",this.st.speed=13}update(t){super.update(t);let e=this.game,i=this.st,s=e.input;i.t+=t;let r=e.camera;for(;this.planIdx<this.plan.length&&this.plan[this.planIdx].z>i.z-130;)this._spawnRow(this.plan[this.planIdx]),this.planIdx++;for(let c of this.chunks)c.position.z-An>i.z+30&&(c.position.z-=If*An),c.visible=c.position.z>-pn-An;if(i.phase==="intro")i.speed=9,i.z-=i.speed*t,this.trex.group.visible=!this.hideTrex,this.trex.group.position.set(.5,0,i.z+this.trexBehind),this.trex.setMode("run",9);else if(i.phase==="run"){let c=-i.z/pn,h=Ue(13.5,20,je(c,0,1))*(i.slow>0?.6:1);i.speed=hn(i.speed,h,2,t),i.slow-=t,i.z-=i.speed*t;let d=s.wasPressed("KeyA","ArrowLeft","SwipeLeft"),f=s.wasPressed("KeyD","ArrowRight","SwipeRight"),u=s.wasPressed("KeyW","ArrowUp","Space","SwipeUp"),g=s.wasPressed("KeyS","ArrowDown","SwipeDown");d&&i.lane>0&&(i.prevLane=i.lane,i.lane--,e.audio.play("whoosh",{vol:.4})),f&&i.lane<2&&(i.prevLane=i.lane,i.lane++,e.audio.play("whoosh",{vol:.4})),u&&i.y<=.001&&(i.vy=10.5,i.slide=0,e.audio.play("whoosh",{vol:.5})),g&&(i.y>.05&&(i.vy=-18),i.slide=.75),i.danger=je(i.danger-t*.045,0,1),i.invuln-=t,i.stompT-=t,i.stompT<=0&&(i.stompT=Ue(.62,.36,i.danger),e.audio.play("stomp",{vol:.25+i.danger*.6}),e.shake(.05+i.danger*.18,.25)),Math.random()<t*.08&&e.audio.play("growl",{vol:.5+i.danger}),this._collisions(),!i.arrowShown&&i.z<-(pn-95)&&(i.arrowShown=!0,e.hud.showArrow(!0),e.audio.play("alarm",{n:2})),i.z<-pn+1.2&&(i.lane===2&&Math.abs(i.x-xn[2])<.6?this._escape():this._caught(!0)),e.hud.setChase(je(-i.z/pn,0,1),i.danger,i.donutCount)}else if(i.phase==="escape"){let c=hn(i.z,-pn-3.4,2.6,t);i.speed=(i.z-c)/Math.max(t,1e-4),i.z=c}i.vy-=32*t,i.y=Math.max(0,i.y+i.vy*t),i.y===0&&(i.vy=Math.max(0,i.vy));let o=i.y>.02;this.wasAir&&!o&&i.phase==="run"&&(e.audio.play("thud",{vol:.35}),e.shake(.06,.15)),this.wasAir=o,i.phase==="run"&&!o&&(this.stepT+=t*i.speed,this.stepT>3.4&&(this.stepT=0,e.audio.play("step",{surface:"carpet",vol:.8})));for(let c of this.sparks)c.life<=0||(c.life-=t,c.v.y-=9*t,c.s.position.addScaledVector(c.v,t),c.s.material.opacity=Math.min(1,c.life*2.5),c.life<=0&&(c.s.visible=!1));if(i.phase==="run"){let c=(i.speed-13)/7;e.hud.setSpeedLines(.15+c*.55),r.fov=hn(r.fov,70+c*9,3,t),r.updateProjectionMatrix()}else e.hud.setSpeedLines(0);this.roll=hn(this.roll,(xn[i.lane]-i.x)*-.035,8,t),i.slide-=t,i.x=hn(i.x,xn[i.lane],14,t);let a=this.guard;a.group.position.set(i.x,i.y,i.z),i.phase==="escape"&&i.speed<1?a.setMode("idle"):i.y>.05?a.setMode("jump"):i.slide>0?a.setMode("slide"):a.setMode("run",i.speed),a.group.visible=i.invuln<=0||Math.floor(i.t*12)%2===0,a.update(t);let l=1.5+i.danger*5;this.blob.scale.set(l,l*1.6,1),this.blob.position.set(i.x*.5,.03,i.z+3-i.danger*2.5),this.blob.material.opacity=i.phase==="run"?.25+i.danger*.55:0;for(let c of this.donuts)c.taken||(c.obj.rotation.z+=t*3,Math.abs(c.obj.position.z-i.z)<.9&&Math.abs(c.obj.position.x-i.x)<.9&&Math.abs(c.obj.position.y-(i.y+.9))<1.1&&(c.taken=!0,this.scene.remove(c.obj),i.donutCount++,e.meter.add(4),this._burst(c.obj.position),e.audio.play("coin",{pitch:i.donutCount%5*2})),c.obj.position.z>i.z+12&&(c.taken=!0,this.scene.remove(c.obj)));this.obstacles=this.obstacles.filter(c=>c.z>i.z+15?(this.scene.remove(c.mesh),!1):!0);for(let c of this.debris)c.v.y-=20*t,c.m.position.addScaledVector(c.v,t),c.m.rotation.x+=t*6,c.m.position.y<0&&(c.m.position.y=0,c.v.multiplyScalar(.4));if(this.headLight.position.set(i.x*.4,5.5,i.z-7),this.aheadLight.position.set(0,6,i.z-30),i.alarmT+=t,this.alarm.position.set(0,6,i.z+6),this.alarm.intensity=i.phase==="run"?Math.sin(i.alarmT*8)>0?25:4:0,this.camMode==="front"?(this.camPos.set(2.3,1.7,i.z-6.8),this.camLook.set(0,3.1,i.z+4)):this.camMode==="chase"&&(this.camPos.set(i.x*.55,3.3+i.y*.3,i.z+6.4),this.camLook.set(i.x*.8,1.2+i.y*.5,i.z-7)),this.camMode!=="free"&&(this.camBlend!=null?(r.position.lerpVectors(this.camFrom,this.camPos,this.camBlend),this._look.lerpVectors(this.lookFrom,this.camLook,this.camBlend),r.lookAt(this._look)):(r.position.copy(this.camPos),r.lookAt(this.camLook),this.camMode==="chase"&&r.rotateZ(this.roll))),i.phase==="run"){let c=this.trex.group;c.visible=!0,c.position.set(i.x*.5,0,i.z+Ue(17,5.2,i.danger)),c.rotation.y=Math.PI,this.trex.setMode("run",i.speed*.8)}if(this.trex.update(t),this.lungeT>=0){this.lungeT+=t;let c=this.lungeT,h=this.lungeDur,d=c<.25?c/.25:c<h-.3?1:Math.max(0,(h-c)/.3);this.lunge.visible=!0,this.lunge.position.set(Ue(-3.4,this.lungeFull?-.9:-1.1,d),Ue(2.2,this.lungeFull?.2:.5,d),-2.5),this.lunge.rotation.z=Ue(.25,-.3,d),this.lungeJaw.rotation.x=c<.3?.9:c<.42?Ue(.9,0,(c-.3)/.12):.1,c>h&&(this.lungeT=-1,this.lunge.visible=!1)}}_collisions(){let t=this.st,e=this.game;if(t.invuln>0)return;let i=t.slide>0&&t.y<.1?.8:1.7;for(let s of this.obstacles){if(s.hit||Math.abs(s.z-t.z)>s.d/2+.35||Math.abs(s.mesh.position.x-t.x)>s.w/2+.25)continue;let r=t.y;if(t.y+i<=s.y0||r>=s.y1)continue;s.hit=!0,Math.abs(t.x-xn[t.lane])>.5&&t.prevLane!==t.lane&&s.lane===t.lane?(t.lane=t.prevLane,this._stumble(.18,!1,s)):this._stumble(.34,!0,s);return}}_stumble(t,e,i){let s=this.st,r=this.game;if(s.danger+=t,s.invuln=1.2,r.audio.play("bonk"),r.shake(.35,.4),r.hud.flash("rgba(255,40,40,0.35)"),e){s.slow=1,r.audio.play("crash",{vol:.5}),i.mesh.visible=!1;for(let o=0;o<10;o++){let a=new H(new ee(.2,.2,.2),Mt.darkWood());a.position.set(i.mesh.position.x,.8,i.z),this.scene.add(a),this.debris.push({m:a,v:new A((Math.random()-.5)*8,4+Math.random()*6,-Math.random()*10)})}}if(s.danger>=1){this._caught(!1);return}this.lungeT=0,this.lungeDur=.75,this.lungeFull=!1,r.audio.play("roar",{short:!0,vol:.8})}_caught(t){let e=this.st,i=this.game;e.phase==="run"&&(this.mirrorEl?.classList.add("off"),e.phase="caught",e.speed=0,i.hud.showArrow(!1),t&&(i.audio.play("bonk"),i.audio.play("crash",{vol:.6})),i.audio.play("roar"),this.lungeT=0,this.lungeDur=1.4,this.lungeFull=!0,i.shake(.6,1),setTimeout(()=>this.resolve?.("caught"),1300))}_escape(){let t=this.st;this.mirrorEl?.classList.add("off"),this.game.camera.layers.enable(1),t.phase="escape",this.game.hud.showArrow(!1),this.resolve?.("escaped")}setCam(t){this.camMode=t,this.camBlend=null}blendCam(t){this.camFrom=this.game.camera.position.clone();let e=new A;this.game.camera.getWorldDirection(e),this.lookFrom=this.game.camera.position.clone().addScaledVector(e,10),this._look=new A,this.camMode=t,this.camBlend=0}renderExtra(t){let e=this.mirrorEl;if(!e||e.classList.contains("off")||this.st.phase!=="run"||this.game.paused)return;let i=e.getBoundingClientRect();if(i.width<10)return;let s=this.st,r=this.mirrorCam;r.aspect=i.width/i.height,r.updateProjectionMatrix(),r.position.set(s.x*.8,1.9+s.y*.5,s.z-3.4),r.lookAt(s.x*.6,3.5,s.z+9);let o=innerHeight-i.bottom;t.setScissorTest(!0),t.setScissor(i.left,o,i.width,i.height),t.setViewport(i.left,o,i.width,i.height),t.clearDepth(),t.render(this.scene,r),t.setScissorTest(!1),t.setViewport(0,0,innerWidth,innerHeight)}dispose(){this.game.camera.layers.set(0),this.mirrorEl?.classList.add("off"),this.game.camera.remove(this.lunge),super.dispose()}};var Yh=[.1,.8,1.5,2.2];function G1(){let[n,t]=se(256,256);t.fillStyle="#e2b47c",t.fillRect(0,0,256,256);for(let e=0;e<256;e+=6)t.fillStyle=`rgba(120,70,20,${.04+Math.random()*.04})`,t.fillRect(e,0,2,256);for(let e=0;e<400;e++)t.fillStyle=`rgba(80,40,10,${Math.random()*.08})`,t.fillRect(Math.random()*256,Math.random()*256,3,3);t.fillStyle="rgba(240,210,150,0.75)",t.fillRect(0,0,256,34),t.fillStyle="rgba(255,255,255,0.15)",t.fillRect(0,6,256,4),t.fillStyle="#f4f1e8",t.fillRect(64,120,128,72),t.strokeStyle="rgba(0,0,0,0.25)",t.lineWidth=2,t.strokeRect(64,120,128,72),t.fillStyle="#2b2b2b",t.font="bold 26px Courier New, monospace",t.textAlign="center",t.fillText("MUSEUM",128,152),t.fillRect(80,166,96,4),t.fillRect(80,176,64,4),t.fillStyle="rgba(60,30,10,0.55)";for(let e of[28,228])t.beginPath(),t.moveTo(e,210),t.lineTo(e-12,230),t.lineTo(e+12,230),t.fill(),t.fillRect(e-4,230,8,16);return oe(n)}function V1(){let[n,t]=se(256,256);t.fillStyle="#eeeae0",t.fillRect(0,0,256,256);for(let e=0;e<300;e++)t.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,t.fillRect(Math.random()*256,Math.random()*256,3,3);return t.fillStyle="rgba(0,0,0,0.12)",t.fillRect(0,44,256,6),t.strokeStyle="#2a2a2a",t.lineWidth=5,t.strokeRect(70,80,116,70),t.fillStyle="#2a2a2a",t.font="bold 22px Courier New, monospace",t.textAlign="center",t.fillText("FILES",128,112),t.fillRect(86,124,84,3),t.fillRect(86,134,60,3),t.fillStyle="#3a342c",t.beginPath(),t.ellipse(128,196,34,12,0,0,Math.PI*2),t.fill(),oe(n)}function Lf(){return{frame:new ct({color:7041664,roughness:.45,metalness:.6}),back:new ct({color:2893603,roughness:.95}),cardboard:new ct({map:G1(),vertexColors:!0,roughness:.9}),archive:new ct({map:V1(),vertexColors:!0,roughness:.85}),bin:new ct({vertexColors:!0,roughness:.35,metalness:.05}),pillar:new ct({color:5591887,roughness:.9})}}var za=new ce,Ga=new Pn,Va=new vn,Wa=new A,kf=new A(1,1,1);function yr(n,t,e,i,s,r,o=0,a=null){let l=new ee(n,t,e);if(Va.set(0,o,0),Ga.setFromEuler(Va),Wa.set(i,s,r),za.compose(Wa,Ga,kf),l.applyMatrix4(za),a){let c=l.attributes.position.count,h=new Float32Array(c*3);for(let d=0;d<c;d++)h[d*3]=a.r,h[d*3+1]=a.g,h[d*3+2]=a.b;l.setAttribute("color",new ze(h,3))}return l}var Zr=class{constructor(t,e){this.rng=t,this.H=e,this.parts={frame:[],back:[],cardboard:[],archive:[],bin:[],pillar:[]}}unit(t,e,i,s,r,o=[]){let a=this.rng,l=this.H,c=[],h=(u,g)=>c.push([u,g]),d=r/2,f=d-.04;h("back",yr(s,l,.05,0,l/2,0));for(let u of[-1,1]){for(let g of Yh)h("frame",yr(s,.035,f,0,g,u*(.025+f/2)));for(let g of[-s/2+.03,0,s/2-.03])h("frame",yr(.04,l-.04,.04,g,l/2,u*(d-.03)));Yh.forEach((g,y)=>{let p=(Yh[y+1]??l)-g-.08,m=-s/2+.06;for(;m<s/2-.25;){if(a()<.14){m+=.25+a()*.35;continue}let x=a(),_=x<.55?"cardboard":x<.85?"archive":"bin",v=_==="archive"?.3+a()*.12:.3+a()*.32,w=_==="bin"?.18+a()*.12:.22+a()*Math.min(.4,p-.22);_==="archive"&&(w=Math.min(p,.26+a()*.06));let S=Math.min(f-.02,.2+a()*.08);if(v=Math.min(v,s/2-.06-m),v<.2)break;let R=m+v/2;if(!o.some(I=>I.side===u&&I.level===y&&R+v/2>I.from&&R-v/2<I.to)){let I=.72+a()*.3,b=_==="bin"?new Ft().setHSL([.58,.6,.08,0][Math.floor(a()*4)],a()<.25?0:.45,.42*I):new Ft(I,I*(.94+a()*.06),I*(.88+a()*.1)),M=g+.0175+w/2,L=u*(.05+S/2+a()*.03);if(h(_,yr(v,w,S,R,M,L,(a()-.5)*.12,b)),_!=="bin"&&p-w>.24&&a()<.25){let k=v*(.55+a()*.3),D=Math.min(p-w-.02,.14+a()*.14);h("cardboard",yr(k,D,S*.85,R+(a()-.5)*.1,M+w/2+D/2,L,(a()-.5)*.3,new Ft(I*.95,I*.88,I*.78)))}}m+=v+.02+a()*.08}})}Va.set(0,i,0),Ga.setFromEuler(Va),Wa.set(t,0,e),za.compose(Wa,Ga,kf);for(let[u,g]of c)g.applyMatrix4(za),this.parts[u].push(g)}pillar(t,e,i){this.parts.pillar.push(yr(i,this.H,i,t,this.H/2,e))}build(t){let e=[];for(let[i,s]of Object.entries(this.parts)){if(!s.length)continue;let r=ur(s,!1);for(let a of s)a.dispose();let o=new H(r,t[i]);o.castShadow=!0,o.receiveShadow=!0,e.push(o)}return e}};var Vt=3.2,en=3,sn=7,Ye=5,mn=3,Xa=.3,He=.64,W1=6,qa=[["red",16729413],["blue",4892927],["yellow",16765503],["green",5628026]],Ya=["lightsout","caesar","roman","slider","simon","keys"],Df=["KEEP GOING","NEXT GATE PLEASE","ALMOST THERE","THE TREX IS WATCHING","DONUTS ARE LIFE","DO NOT FALL ASLEEP","FRAGMENT SIX IS AHEAD","NICE TRY GUARD","THE ARCHIVES NEVER END","WHO PUT THIS HERE","SHELVES ALL THE WAY DOWN","STAY AWAKE"],X1={lightsout:"Fix the fuse box",keys:"Unlock the gate",slider:"Restore the poster",caesar:"Use the cipher terminal",roman:"Try the number lock",simon:"Play the memory lock"},Y1={lightsout:6750105,keys:16765503,slider:16742348,caesar:7208862,roman:15320170,simon:10124799},qh={lightsout:"fuse box",keys:"lost keys",slider:"torn poster",caesar:"cipher terminal",roman:"number lock",simon:"memory lock"};function Uf(n,t){let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e}var $a=class extends Zi{constructor(t,{stage:e=0,keysTaken:i=[]}={}){super(t);let s=this.scene;this.surface="concrete",s.background=new Ft(65794),s.fog=new tr(131587,.07),s.add(new Vi(8425648,.22)),s.add(new Gi(4214896,1051656,.3)),this.shelfMats=Lf(),this.mats={floor:new ct({map:xe("concrete"),roughness:.9}),ceil:new ct({map:xe("concrete"),color:5592405,roughness:1}),plaster:new ct({map:xe("plaster"),color:9076594,roughness:.9}),alcove:new ct({map:xe("plaster"),color:5917286,roughness:.9}),pipe:new ct({color:5922920,roughness:.5,metalness:.6}),bulb:new de({color:16764800})},this.lamps=[],this.lightPool=Array.from({length:W1},()=>{let r=new Ie(16777215,0,1,2);return s.add(r),r}),this.layouts=[],this.bands=new Map,this.gates=[],this.keys=[],this.peeks=[],this.secrets=[],this.stations=[],this.gateOpen=new Set,this.keysTaken=new Set(i),this.genTaken=new Set,this.secretsOpened=new Set,this.seen=new Set,this.sealedBelow=-1,this.onCollected=r=>{r.counted||this.genTaken.add(r.id)},this.addUpdater(r=>{for(let o of this.keys)o.taken||(o.t+=r,o.obj.rotation.y+=r*1.8,o.obj.position.y=1.1+Math.sin(o.t*2)*.08)});for(let r=0;r<e;r++)this.gateOpen.add(r);this.curBand=e,this.maxBand=e,e>=2&&(this.sealedBelow=e-2);for(let r=Math.max(0,e-1);r<=e+1;r++)this.ensure(r)}layout(t){if(this.layouts[t])return this.layouts[t];let e=t===0?3:this.layout(t-1).exit.c,i=ve(4242+t*7919),s=[],r=[];for(let p=0;p<Ye;p++)s.push(new Array(sn).fill(!0)),r.push(new Array(sn).fill(!0));let o=new Set([`${e},0`]),a=[{c:e,r:0}];for(;a.length;){let p=a[a.length-1],m=[[1,0],[-1,0],[0,1],[0,-1]].map(([_,v])=>({c:p.c+_,r:p.r+v,dc:_,dr:v})).filter(_=>_.c>=0&&_.c<sn&&_.r>=0&&_.r<Ye&&!o.has(`${_.c},${_.r}`));if(!m.length){a.pop();continue}let x=m[Math.floor(i()*m.length)];x.dc===1&&(r[p.r][p.c]=!1),x.dc===-1&&(r[p.r][x.c]=!1),x.dr===1&&(s[p.r][p.c]=!1),x.dr===-1&&(s[x.r][x.c]=!1),o.add(`${x.c},${x.r}`),a.push({c:x.c,r:x.r})}for(let p=0;p<4;p++){let m=Math.floor(i()*(Ye-1)),x=Math.floor(i()*(sn-1));i()<.5?r[m][x]=!1:s[m][x]=!1}let l=(p,m)=>{let x=[];return p<sn-1&&!r[m][p]&&x.push([p+1,m]),p>0&&!r[m][p-1]&&x.push([p-1,m]),m<Ye-1&&!s[m][p]&&x.push([p,m+1]),m>0&&!s[m-1][p]&&x.push([p,m-1]),x},c={[`${e},0`]:0},h=[[e,0]];for(;h.length;){let[p,m]=h.shift();for(let[x,_]of l(p,m))c[`${x},${_}`]==null&&(c[`${x},${_}`]=c[`${p},${m}`]+1,h.push([x,_]))}let d=null;for(let p=0;p<sn;p++){let m=c[`${p},${Ye-1}`];(!d||m>d.d)&&(d={c:p,r:Ye-1,d:m})}let f=Object.entries(c).map(([p,m])=>{let[x,_]=p.split(",").map(Number);return{c:x,r:_,d:m}}),u=p=>p.c===d.c&&p.r===d.r||p.c===e&&p.r===0,g=f.filter(p=>l(p.c,p.r).length===1&&!u(p)).sort((p,m)=>m.d-p.d),y=f.filter(p=>!u(p)&&p.r>0).sort((p,m)=>m.d-p.d);return this.layouts[t]={b:t,entry:{c:e,r:0},exit:d,north:s,east:r,dist:c,dead:g,far:y}}gateKind(t){if(t<en)return["lightsout","keys","slider"][t];let e=t-en,i=Math.floor(e/Ya.length),s=r=>{let o=Uf(Ya,ve(777+r*131));return r>0&&o[0]===s(r-1)[Ya.length-1]&&(o=[...o.slice(1),o[0]]),o};return s(i)[e%Ya.length]}puzzleParams(t){let e=this.gateKind(t),i=Math.max(0,t-en),s=ve(31337+t*101);if(t<en)return e==="keys"?{count:3}:{};if(e==="lightsout"){let r=i>=6?4:3,o=Math.min(r*r-2,3+Math.floor(i/2)+(r===4?1:0));return{n:r,presses:Uf([...Array(r*r).keys()],s).slice(0,o)}}return e==="slider"?{moves:26+6*i}:e==="roman"?{year:1e3+Math.floor(s()*2999),title:"VAULT LOCK"}:e==="caesar"?{text:Df[Math.floor(s()*Df.length)],shift:1+Math.floor(s()*9)}:e==="simon"?{length:Math.min(10,4+Math.floor(i/2))}:e==="keys"?{count:i<6?2:3}:{}}northWall(t,e){if(e<0)return t!==3;let i=Math.floor(e/Ye),s=e%Ye,r=this.layout(i);return s<Ye-1?r.north[s][t]:t===this.layout(i+1).entry.c?"gate":!0}eastWall(t,e){return t>=sn-1||t<0||e<0?!0:this.layout(Math.floor(e/Ye)).east[e%Ye][t]}cellPos(t,e){return new A(t*Vt,0,-e*Vt)}bandOf(t){return Math.max(0,Math.floor(Math.round(-t/Vt)/Ye))}ensure(t){t<0||this.bands.has(t)||t<=this.sealedBelow||this._buildBand(t)}update(t){super.update(t);let e=this.game.player;if(!e)return;this._assignLights(e.pos);let i=this.bandOf(e.pos.z);if(i!==this.curBand){if(this.curBand=i,i>this.maxBand){this.maxBand=i,this.ensure(i+1);for(let s of[...this.bands.keys()])s<i-1&&this._removeBand(s);i-2>this.sealedBelow&&(this.sealedBelow=i-2,this._applySeal(this.gates[i-2]))}this.onBandChange?.(i)}}_lamp(t,e,i,s,r,o,a){let l=new Ie(t,e,i,2);return l.position.set(s,r,o),this.lamps.push(a(l)),l}_assignLights(t){let e=[];for(let i of this.lamps)i.intensity>0&&e.push([i,(i.position.x-t.x)**2+(i.position.z-t.z)**2]);e.sort((i,s)=>i[1]-s[1]),this.lightPool.forEach((i,s)=>{let r=e[s]?.[0];if(!r){i.intensity=0;return}i.position.copy(r.position),i.color.copy(r.color),i.intensity=r.intensity,i.distance=r.distance})}_applySeal(t){t&&(t.mesh.position.y=0,t.collider.enabled=!0,t.sealed=!0)}_removeBand(t){let e=this.bands.get(t);if(!e)return;this.bands.delete(t),this.scene.remove(e.group),e.group.traverse(s=>{s.geometry?.dispose();let r=s.material?Array.isArray(s.material)?s.material:[s.material]:[];for(let o of r)o.userData.bandOwned&&(o.map?.dispose(),o.dispose())});let i=s=>s.filter(r=>!e.owned.has(r));this.colliders=i(this.colliders),this.interactables=i(this.interactables),this.collectibles=i(this.collectibles),this.keys=i(this.keys),this.peeks=i(this.peeks),this.secrets=i(this.secrets),this.stations=i(this.stations),this.lamps=i(this.lamps)}_buildBand(t){let e=this.layout(t),i=t*Ye,s=ve(9001+t*313),r=new pt,o={b:t,group:r,owned:new Set,dynamic:new Set};this.bands.set(t,o),this.scene.add(r);let a=F=>(o.owned.add(F),F),l=(F,it,z,nt)=>a(this.addCollider(F,it,z,nt)),c=F=>(F.userData.bandOwned=!0,F),h=-Vt/2-3,d=(sn-1)*Vt+Vt/2+3,f=-(i+Ye-1)*Vt-Vt/2,u=-i*Vt+Vt/2+(t===0?4:0),g=new H(vs(d-h,u-f,3),this.mats.floor);g.rotation.x=-Math.PI/2,g.position.set((h+d)/2,0,(f+u)/2),g.receiveShadow=!0,r.add(g);let y=new H(vs(d-h,u-f,3),this.mats.ceil);y.rotation.x=Math.PI/2,y.position.set((h+d)/2,mn,(f+u)/2),r.add(y);let p=i+1+Math.floor(s()*3),m=s()<.5,x=i+1+Math.floor(s()*3),_=s()<.5;x===p&&_===m&&(_=!_);let v=(F,it)=>`${F.toFixed(2)},${it.toFixed(2)}`,w=-Vt/2,S=(sn-1)*Vt+Vt/2,R=v(m?w:S,-p*Vt),I=v(_?w:S,-x*Vt),b=[],M=(F,it)=>b.push({x:it*Vt,z:-F*Vt-Vt/2,rot:0}),L=(F,it)=>b.push({x:it*Vt+Vt/2,z:-F*Vt,rot:Math.PI/2});for(let F=0;F<Ye;F++){let it=i+F;for(let z=0;z<sn;z++)F<Ye-1&&e.north[F][z]&&M(it,z),z<sn-1&&e.east[F][z]&&L(it,z);L(it,-1),L(it,sn-1)}for(let F=0;F<sn;F++)F!==e.entry.c&&M(i-1,F);let k=new Zr(s,mn),D=new Set,B=(F,it)=>D.add(`${Math.round(F*100)},${Math.round(it*100)}`),$=(Vt+He)/2,V=He/2,ht=null;for(let F of b){let it=F.rot===0;it?(B(F.x-Vt/2,F.z),B(F.x+Vt/2,F.z)):(B(F.x,F.z-Vt/2),B(F.x,F.z+Vt/2));let z=v(F.x,F.z);if(z===I){ht=F;continue}let nt=z===R?[{side:m?1:-1,level:2,from:-.55,to:.55}]:[];k.unit(F.x,F.z,F.rot,Vt-He,He,nt),it?l(F.x-$,F.x+$,F.z-V,F.z+V):l(F.x-V,F.x+V,F.z-$,F.z+$)}let X=e.entry.c*Vt,ut=-i*Vt+Vt/2;B(X-Vt/2,ut),B(X+Vt/2,ut);for(let F of D){let[it,z]=F.split(",").map(nt=>Number(nt)/100);k.pillar(it,z,He)}for(let F of k.build(this.shelfMats))r.add(F);t===0?this._entrance(o,X,ut,l):this._gate(o,t-1,X,ut,l,c);{let F=m?w:S,it=-p*Vt,z=F+(m?.03:-.03),nt=new H(new bi(.28,14),Mt.black());nt.position.set(z,1.75,it),nt.rotation.y=m?Math.PI/2:-Math.PI/2,nt.scale.set(1.4,.8,1),r.add(nt);let gt=new H(new ie(.1,12,8),new ct({color:16723984,emissive:16722432,emissiveIntensity:6}));gt.position.set(z+(m?.02:-.02),1.75,it),gt.visible=!1,r.add(gt),o.dynamic.add(gt),this.peeks.push(a({x:m?F+1.7:F-1.7,z:it,eye:gt,done:!1}))}let vt=new Set([`${e.entry.c},0`]),xt=F=>{let it=F.find(z=>!vt.has(`${z.c},${z.r}`));return it&&vt.add(`${it.c},${it.r}`),it};if(this.gateKind(t)==="keys"){let F=this.puzzleParams(t).count;for(let it=0;it<F;it++){let z=xt(e.dead)||xt(e.far);z&&this._key(o,t,it,z,a)}}let Ht=t<en,Yt=xt(e.dead)||xt(e.far);if(Yt){let F=this.cellPos(Yt.c,i+Yt.r);this._donut(o,Ht?`maze_${t}_0`:`gen_${t}_0`,F.x,.9,F.z,t*2%5,Ht?20:Math.max(6,18-3*(t-en)),a)}ht&&this._secretShelf(o,t,ht,_,l,a,c,Ht),e.dead.filter(F=>!vt.has(`${F.c},${F.r}`)).slice(0,2).forEach((F,it)=>{let z=this.cellPos(F.c,i+F.r),nt=(t*3+it)%4,gt=nt===1?mf(.9):nt===2?ff():pf(t*10+it);gt.position.add(new A(z.x,0,z.z)),r.add(gt),a(this.addBoxCollider(z.x,z.z,.9,.9))});let K=new H(new ne(.08,.08,sn*Vt+2,8),this.mats.pipe);K.rotation.z=Math.PI/2,K.position.set((sn-1)*Vt/2,mn-.2,-(i+2)*Vt),r.add(K);for(let F=0;F<6;F++){let it=Math.floor(s()*sn),z=i+Math.floor(s()*Ye),nt=new H(new ie(.06,8,6),this.mats.bulb);nt.position.set(it*Vt,mn-.45,-z*Vt),r.add(nt),r.add(ot(.01,.4,.01,Mt.black(),it*Vt,mn-.42,-z*Vt))}wi(r,F=>o.dynamic.has(F))}_entrance(t,e,i,s){let r=t.group,o=new ti,a=(Vt-He)/2+.02;o.moveTo(-a,0),o.lineTo(a,0),o.lineTo(a,mn),o.lineTo(-a,mn),o.lineTo(-a,0);let l=new Mi;Xh(1.18).forEach(([f,u],g)=>g===0?l.moveTo(f,u+.001):l.lineTo(f,u+.001)),o.holes.push(l);let c=new H(new rr(o,{depth:Xa,bevelEnabled:!1}),this.mats.plaster);c.position.set(e,0,i-Xa/2),r.add(c),s(e-a,e+a,i-Xa/2,i+Xa/2),this.entranceLight=this._lamp(16723984,4,6,e,1.4,i+1.2,f=>(t.owned.add(f),f));let h=new H(new Gt(4,3),new de({color:1705219}));h.position.set(e,1.5,i+2.5),h.rotation.y=Math.PI,r.add(h);let d=new H(new ie(.12,14,10),new ct({color:16723984,emissive:16722432,emissiveIntensity:6}));d.position.set(e,1.9,i+.5),d.visible=!1,r.add(d),t.dynamic.add(d),this.holeEye=d}_gate(t,e,i,s,r,o){let a=t.group,l=1.5,c=(Vt-He-l)/2;for(let p of[-1,1]){let m=new H(qn(c,mn,He,1.6),this.shelfMats.pillar);m.position.set(i+p*(l/2+c/2),mn/2,s),a.add(m),r(i+p*(l/2+c/2)-c/2-He/2,i+p*(l/2+c/2)+c/2+He/2,s-He/2,s+He/2)}let h=o(new de({map:Ce("",{w:64,h:256,bg:"#ffcc00"}),color:14263040}));for(let p of[-1,1]){let m=new H(new Gt(.08,2.3),h);m.position.set(i+p*(l/2+.04),1.15,s+He/2+.005),a.add(m)}a.add(ot(l,mn-2.3,He,Mt.metal(),i,2.3,s));let d=new pt,f=new ne(.035,.035,2.3,6);for(let p=0;p<8;p++){let m=new H(f,Mt.metal());m.position.set(-l/2+.1+p*((l-.2)/7),1.15,0),m.castShadow=!0,d.add(m)}for(let p of[.3,1.2,2.1])d.add(ot(l,.06,.06,Mt.metal(),0,p,0));d.position.set(i,0,s),a.add(d),t.dynamic.add(d);let u=r(i-l/2,i+l/2,s-.2,s+.2),g=new H(new Gt(l,.5),h);g.rotation.x=-Math.PI/2,g.position.set(i,.01,s+.5),a.add(g);let y={k:e,mesh:d,collider:u,open:!1,x:i,z:s};this.gates[e]=y,this.gateOpen.has(e)&&(y.open=!0,u.enabled=!1,d.position.y=2.25),e<=this.sealedBelow&&this._applySeal(y),this._station(t,e,i,s,o)}_station(t,e,i,s,r){let o=t.group,a=this.gateKind(e),l=this.puzzleParams(e),c=i-1.15,h=s+He/2+.02,d=new pt,f=(m,x,_,v,w,S,R="bold 50px Arial Black, Arial")=>{let I=new H(new Gt(x,_),r(new de({map:Ce(m,{w:256,h:Math.round(256*_/x),bg:w,fg:S,font:R})})));I.position.set(0,v,.19),d.add(I)},u=[];if(a==="lightsout"){d.add(ot(.7,.9,.18,zt("fusebox",{color:6976640,metalness:.5,roughness:.5}),0,1,.09)),f("\u26A1 FUSES",.5,.25,1.7,"#ffcc00","#111");for(let m=0;m<9;m++){let x=new H(new ie(.03,6,4),new de({color:m%3===1?4521830:16724787}));x.position.set(-.18+m%3*.18,1.2-Math.floor(m/3)*.18,.19),d.add(x)}}else if(a==="keys"){d.add(ot(.66,.9,.1,zt("lockplate",{color:4936288,metalness:.7,roughness:.35}),0,.85,.05)),f(`${l.count} KEYS`,.56,.22,1.92,"#1a1d24","#ffd23f","bold 54px Arial Black, Arial");let m=l.count<=3?.26:.2;qa.slice(0,l.count).forEach(([,x],_)=>{let v=1.55-_*m,w=new H(new Ge(.075,.02,8,18),new ct({color:x,emissive:x,emissiveIntensity:.6,metalness:.5,roughness:.4}));w.position.set(0,v,.11),d.add(w),d.add(ot(.025,.07,.01,Mt.black(),0,v-.035,.105));let S=new pt,R=new ct({color:x,emissive:x,emissiveIntensity:1.2,metalness:.6,roughness:.3}),I=new H(new Ge(.05,.016,6,14),R);I.position.z=.16,S.add(I),S.add(ot(.02,.02,.1,R,0,0,.11)),S.position.set(0,v,0),S.visible=this.gateOpen.has(e),d.add(S),t.dynamic.add(S),u.push(S)})}else if(a==="slider"){d.add(ot(1,1.2,.08,Mt.brass(),0,.9,.04));let[m,x]=se(256,300);x.fillStyle="#222",x.fillRect(0,0,256,300);for(let v=0;v<9;v++)x.fillStyle=`hsl(${(v*40+e*23)%360},50%,50%)`,x.fillRect(v%3*85+2,Math.floor(v/3)*100+2,81,96);x.fillStyle="#fff",x.font="bold 30px Arial",x.textAlign="center",x.fillText("???",128,160);let _=new H(new Gt(.9,1.1),r(new ct({map:oe(m)})));_.position.set(0,1.5,.09),d.add(_)}else{d.add(ot(.72,.95,.2,zt("terminal",{color:2830136,metalness:.4,roughness:.5}),0,.85,.1));let m={caesar:"CIPHER",roman:"VAULT",simon:"MEMORY"}[a],[x,_]={caesar:["#03140a","#6dff9e"],roman:["#1c1710","#e9c46a"],simon:["#120c24","#c4b0ff"]}[a];if(f(m,.56,.3,1.45,x,_,"bold 64px Courier New, monospace"),a==="simon")[16731469,5089023,5628026,16765503].forEach((v,w)=>{d.add(ot(.16,.16,.04,new ct({color:v,emissive:v,emissiveIntensity:.5}),-.1+w%2*.2,.95-Math.floor(w/2)*.2,.2))});else if(a==="roman")for(let v=0;v<4;v++){let w=new H(new ne(.055,.055,.05,14),Mt.brass());w.rotation.x=Math.PI/2,w.position.set(-.21+v*.14,1.05,.22),d.add(w)}else{let v=new H(new Ge(.14,.03,8,20),zt("bone",{color:15260864,roughness:.6}));v.position.set(0,1,.22),d.add(v)}}d.position.set(c,0,h),o.add(d),t.owned.add(this.addBoxCollider(c,h+.25,.8,.5));let g=this._lamp(Y1[a],3,5,c,2.4,h+.8,m=>(t.owned.add(m),m));this.gateOpen.has(e)&&g.color.set(6750105);let y=this.addInteractable({id:"station"+e,pos:new A(c,1.2,h+.1),prompt:X1[a],enabled:!0,radius:2.3});t.owned.add(y);let p={k:e,kind:a,it:y,light:g,slots:u,pos:new A(c,0,h+1.2)};t.owned.add(p),this.stations.push(p),y.onUse=()=>this.onStationUse?.(e,p)}_key(t,e,i,s,r){let[o,a]=qa[i],l=`k${e}_${o}`,c=this.cellPos(s.c,e*Ye+s.r),h=new pt,d=new ct({color:a,emissive:a,emissiveIntensity:1.6,metalness:.6,roughness:.3}),f=new H(new Ge(.09,.028,8,20),d);f.position.y=.16,h.add(f),h.add(ot(.035,.3,.035,d,0,-.16,0)),h.add(ot(.08,.035,.035,d,.04,-.14,0)),h.add(ot(.06,.035,.035,d,.03,-.06,0));let u=new H(new ia(.22,.32,24),new de({color:a,transparent:!0,opacity:.35,side:ke,depthWrite:!1}));h.add(u),h.position.set(c.x,1.1,c.z),t.group.add(h),t.dynamic.add(h);let g=this._lamp(a,2.2,3.5,c.x,1.4,c.z,r),y=r({id:l,k:e,name:o,color:a,obj:h,light:g,cell:{c:s.c,r:e*Ye+s.r},taken:!1,t:Math.random()*6});this.keys.push(y),this.keysTaken.has(l)&&this.takeKey(y)}takeKey(t){t.taken=!0,t.obj.visible=!1,t.light.intensity=0,this.keysTaken.add(t.id)}keysFor(t){return this.keys.filter(e=>e.k===t)}_donut(t,e,i,s,r,o,a,l){if(e.startsWith("gen_")&&this.genTaken.has(e))return null;let c=this.addCollectible(e,i,s,r,o);return c?(this.scene.remove(c.obj),t.group.add(c.obj),c.amount=a,c.counted=!e.startsWith("gen_"),t.dynamic.add(c.obj),l(c),c):null}_secretShelf(t,e,i,s,r,o,a,l){let c=t.group,h=`sec_${e}`,d=s?1:-1,f=new pt,u=new Zr(ve(555+e),mn);u.unit(0,0,i.rot,Vt-He,He,[{side:d,level:1,from:-.35,to:.35}]);for(let k of u.build(this.shelfMats))f.add(k);let[g,y]=se(128,128);y.fillStyle="#d6337a",y.fillRect(0,0,128,128),y.fillStyle="#ffe3f0",y.font="bold 54px Arial Black, Arial",y.textAlign="center",y.textBaseline="middle",y.fillText("???",64,68);let p=a(new ct({map:oe(g),emissive:16722570,emissiveIntensity:.25,roughness:.7})),m=new H(new ee(.26,.36,.42),p);m.position.set(d*.18,.8+.0175+.18,0),f.add(m),f.position.set(i.x,0,i.z),c.add(f),t.dynamic.add(f);let x=(Vt+He)/2,_=He/2,v=r(i.x-_,i.x+_,i.z-x,i.z+x),w=2.3,S=(Vt-He)/2,R=i.x-d*(He/2+w/2),I=i.x-d*(He/2+w);c.add(ot(.2,mn,Vt-He+.4,this.mats.alcove,I-d*.1,0,i.z));for(let k of[-1,1])c.add(ot(w,mn,.2,this.mats.alcove,R,0,i.z+k*(S+.1)));r(Math.min(I,I-d*.2),Math.max(I,I-d*.2),i.z-S-.2,i.z+S+.2);for(let k of[-1,1])r(R-w/2,R+w/2,i.z+k*(S+.1)-.1,i.z+k*(S+.1)+.1);let b=this._lamp(16742348,0,4.5,R,2.2,i.z,o);c.add(ot(.5,.5,.5,zt("crateWood",{color:9067059,roughness:.8}),R,0,i.z)),this._donut(t,l?`maze_${e}_1`:`gen_${e}_1`,R,.95,i.z,3,l?25:Math.max(8,22-3*(e-en)),o);let M=o(this.addInteractable({id:h,pos:new A(i.x+d*.4,1,i.z),prompt:"Pull the strange box",enabled:!0,radius:2})),L=o({id:h,it:M,unit:f,collider:v,lamp:b,opened:!1});this.secrets.push(L),M.onUse=()=>this.openSecret(L),this.secretsOpened.has(h)&&this.openSecret(L,!0)}openSecret(t,e=!1){if(t.opened)return Promise.resolve();if(t.opened=!0,t.it.enabled=!1,t.collider.enabled=!1,this.secretsOpened.add(t.id),e)return t.unit.position.y=-mn-.1,t.lamp.intensity=3,Promise.resolve();let i=this.game;return i.audio.play("gate"),i.shake(.15,1.2),this.onSecret?.(t),i.tween(1.5,s=>{t.unit.position.y=-(mn+.1)*s,t.lamp.intensity=3*s})}openGate(t,e=!1){let i=this.gates[t];return this.gateOpen.add(t),!i||i.open?Promise.resolve():(i.open=!0,i.collider.enabled=!1,e?(i.mesh.position.y=2.25,Promise.resolve()):(this.game.audio.play("gate"),this.game.tween(1.6,s=>{i.mesh.position.y=2.25*s})))}_mapCell(t,e){return{c:Math.round(t/Vt),r:Math.round(-e/Vt)}}revealAround(t,e){let{c:i,r:s}=this._mapCell(t,e);i<0||i>=sn||s<0||(this.seen.add(`${i},${s}`),this.eastWall(i,s)||this.seen.add(`${i+1},${s}`),i>0&&!this.eastWall(i-1,s)&&this.seen.add(`${i-1},${s}`),this.northWall(i,s)===!1&&this.seen.add(`${i},${s+1}`),s>0&&this.northWall(i,s-1)===!1&&this.seen.add(`${i},${s-1}`))}drawMap(t,e){let r=t.canvas.width,o=t.canvas.height,a=Math.floor((o-8*2)/12),l=Math.round(-e.pos.z/Vt),c=Math.max(a-2,l+Math.floor(a*.55)),h=c-a+1;t.clearRect(0,0,r,o),t.fillStyle="rgba(239,228,200,0.92)",t.fillRect(0,0,r,o);let d=_=>8+_*12,f=_=>8+(c-_)*12,u=_=>_>=h&&_<=c,g=this.seen;for(let _ of g){let[v,w]=_.split(",").map(Number);u(w)&&(t.fillStyle="#fffaf0",t.fillRect(d(v),f(w),12,12))}t.strokeStyle="#3b2a1a",t.lineWidth=2,t.lineCap="round";let y=(_,v,w,S)=>{t.beginPath(),t.moveTo(_,v),t.lineTo(w,S),t.stroke()};for(let _ of g){let[v,w]=_.split(",").map(Number);if(!u(w))continue;let S=d(v),R=f(w),I=this.northWall(v,w);if(I==="gate"){let b=Math.floor(w/Ye);t.strokeStyle=this.gates[b]?.sealed?"#8a8a8a":this.gateOpen.has(b)?"#2fbf71":"#ff8a00",t.lineWidth=3,y(S,R,S+12,R),t.strokeStyle="#3b2a1a",t.lineWidth=2}else I&&y(S,R,S+12,R);this.eastWall(v,w)&&y(S+12,R,S+12,R+12),v===0&&y(S,R,S,R+12),w===0&&v!==3&&y(S,R+12,S+12,R+12)}t.font="10px sans-serif",t.textAlign="center",t.textBaseline="middle";let p={lightsout:"\u26A1",keys:"\u{1F512}",slider:"\u{1F5BC}\uFE0F",caesar:"\u{1F524}",roman:"\u{1F522}",simon:"\u{1F3B5}"};for(let _ of this.stations){let v=this.gates[_.k],w=Math.round(v.x/Vt),S=Math.round(-v.z/Vt-.5);!g.has(`${w},${S}`)||!u(S)||t.fillText(p[_.kind],d(w)+12/2,f(S)+12/2)}for(let _ of this.keys){let{c:v,r:w}=_.cell;_.taken||!g.has(`${v},${w}`)||!u(w)||(t.fillStyle="#"+_.color.toString(16).padStart(6,"0"),t.strokeStyle="#3b2a1a",t.lineWidth=1.5,t.beginPath(),t.arc(d(v)+12/2,f(w)+12/2,4,0,7),t.fill(),t.stroke())}for(let _ of this.collectibles){if(_.taken)continue;let{c:v,r:w}=this._mapCell(_.obj.position.x,_.obj.position.z);!g.has(`${v},${w}`)||!u(w)||(t.fillStyle="#ff4f9a",t.beginPath(),t.arc(d(v)+12/2,f(w)+12/2,3,0,7),t.fill())}let m=8+(e.pos.x/Vt+.5)*12,x=8+(c+e.pos.z/Vt+.5)*12;t.save(),t.translate(m,x),t.rotate(-e.yaw),t.fillStyle="#e8262b",t.beginPath(),t.moveTo(0,-6),t.lineTo(4,4),t.lineTo(0,2),t.lineTo(-4,4),t.closePath(),t.fill(),t.restore()}spawnFor(t){if(t===0){let i=this.cellPos(this.layout(0).entry.c,0);return{x:i.x,z:i.z+.6,yaw:0}}let e=this.gates[t-1];return{x:e.x,z:e.z-1.4,yaw:0}}};var Za=class{constructor(t){this.game=t,this.modal=null}open(){this.close();let t=this.modal=we("div","modal");t.style.background="rgba(0,0,0,0.75)",t.innerHTML='<div class="computer"><div class="screen"></div></div>',j("#modal-root").append(t),this.screen=j(".screen",t),this.showLogin()}close(){this.modal?.remove(),this.modal=null}showLogin(){this.screen.className="screen",this.screen.innerHTML=`
      <div class="login-box">
        <div class="login-avatar">\u{1F482}</div>
        <div class="login-user">NIGHT_GUARD</div>
        <div class="login-pw"><span class="dots"></span><span class="caret"></span></div>
        <div class="login-btns"><button class="lb login">LOG IN</button><button class="lb hint">HINT?</button></div>
        <div class="login-msg"></div>
      </div>`,this.dots=j(".dots",this.screen),this.msg=j(".login-msg",this.screen)}async type(t,{visible:e=!1,speed:i=.11}={}){let s=this.game;for(let r of t){if(s.sched.skipping)break;this.dots.textContent+=e?r:"\u2022",s.audio.play("type"),await s.wait(i+Math.random()*.06)}s.sched.skipping&&(this.dots.textContent=e?t:"\u2022".repeat(t.length))}clear(){this.dots&&(this.dots.textContent="")}setMsg(t,e=!1){if(this.msg.textContent=t,this.msg.classList.toggle("ok",e),!e&&t){this.game.audio.play("error");let i=j(".login-box",this.screen);i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake")}}async press(t){let e=j(`.lb.${t}`,this.screen);e&&(e.classList.add("press"),this.game.audio.play("click"),await kn(160),e.classList.remove("press"))}showHint(){this.screen.className="screen",this.screen.style.background="#000",this.screen.innerHTML='<div class="museos-hint"><span class="glitch">SOLVE THE PUZZLES</span>PUZZLE #1 SLEEPS WHERE GIANTS ONCE WALKED<br><br>&gt; DINOSAUR HALL_</div>',this.game.audio.play("glitch")}showDenied(t){this.screen.className="screen denied",this.screen.style.background="",this.screen.innerHTML=`<div class="denied-text">ACCESS DENIED</div>
      <div class="museos-hint" style="color:#ff8a8a;text-shadow:none">PASSWORD FRAGMENTS: ${t.length} / 6<br><span style="font-size:.7em">${t.join(" \xB7 ")} \xB7 ???</span></div>`,this.game.audio.play("error"),this.game.audio.play("glitch",{delay:.2})}};function Ka(n,{title:t="GAME OVER",sub:e="",buttons:i=[]}){return new Promise(s=>{let r=we("div","",`<div class="go-title">${t}</div><div class="go-sub">${e}</div><div class="row" style="gap:14px;justify-content:center;display:flex;flex-wrap:wrap"></div>`);r.id="gameover-scr";let o=r.querySelector(".row");for(let a of i){let l=we("button","btn big "+(a.cls||""),a.label);l.onclick=()=>{n.audio.play("select"),r.remove(),s(a.value)},o.append(l)}document.body.append(r)})}var Ti=[{id:"intro",name:"Prologue \u2014 Session Expired",blurb:"The security office, 11:52 PM"},{id:"dino",name:"Chapter 1 \u2014 The King",blurb:"Dinosaur Hall"},{id:"egypt",name:"Chapter 2 \u2014 Curse of the Pharaoh",blurb:"The Egyptian Wing"},{id:"roman",name:"Chapter 3 \u2014 All Roads",blurb:"The Roman Empire"},{id:"chase",name:"Chapter 4 \u2014 RUN",blurb:"It is right behind you"},{id:"maze",name:"Chapter 5 \u2014 Behind the Walls",blurb:"The Archives (they never end)"},{id:"morning",name:"Chapter 6 \u2014 Morning Shift",blurb:"7 hours later\u2026"}],q1={intro:"Headphones on. It's a quiet night... for now.",dino:"Read the plaques \u2014 museums <b>love</b> fun facts.",egypt:"Ancient Egyptians wrote numbers with lines: | = 1, || = 2, ||| = 3, |||| = 4.",roman:"Roman numerals: M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1.",chase:"\u2190 \u2192 switch lanes \xB7 \u2191 jump \xB7 \u2193 slide. Hitting things lets the T-Rex catch up.",maze:"The archives go on... and on. Grab every donut you can, and look for strange boxes on the shelves.",morning:"Good morning! Your shift ended two hours ago."},Nf=[`There are <b>${Ei} hidden donuts</b>. They glow pink.`,"Sprinting burns your donut meter about twice as fast.","Stuck on a puzzle? A hint costs a little donut.","The mummy has a <b>serious</b> sweet tooth.","Some walls hide <b>secret rooms</b>. Look for things that seem a little... off.","Aaron has been Employee of the Month 11 months in a row."];function Gf(n){return Math.random()<.6?q1[n]:Nf[Math.floor(Math.random()*Nf.length)]}var Zh={intro:{meter:100,fragments:[]},dino:{meter:100,fragments:[]},egypt:{meter:90,fragments:["REX"]},roman:{meter:85,fragments:["REX","MUMMY"]},chase:{meter:80,fragments:["REX","MUMMY","1974"]},maze:{meter:75,fragments:["REX","MUMMY","1974"]},morning:{meter:0,fragments:["REX","MUMMY","1974","ZAP","DONUT"]}},$1=n=>n.input.isTouch?["Left side: move","Right side: look","USE: interact","\u{1F526}: flashlight","RUN: sprint (eats donuts!)"]:["<kbd>W A S D</kbd> move","<kbd>Mouse</kbd> look","<kbd>E</kbd> use","<kbd>F</kbd> flashlight","<kbd>Shift</kbd> sprint (burns donuts!)"];function Vf(n,t,e){let i={intro:Z1,dino:Xf,egypt:Yf,roman:qf,chase:J1,maze:j1,morning:tx}[t];return i(n,null,e)}var Of=new hs,Hf=new ce;function Wf(n,t,e=2){return n.camera.updateMatrixWorld(),Hf.multiplyMatrices(n.camera.projectionMatrix,n.camera.matrixWorldInverse),Of.setFromProjectionMatrix(Hf),Of.intersectsSphere(new zi(t,e))}function Ja(n,t,e=.9){return t.clone().sub(n.camera.position).normalize().dot(n.player.forward())>e}function Ff(n,t){return Math.hypot(n.player.pos.x-t.x,n.player.pos.z-t.z)}function Kh(n,t,e){if(t.screenState)return Object.assign(t.screenState,e),t.screenState;t.screenState=e;let i=t.refs.monitor,s=0,r=0;return t.addUpdater(o=>{if(s+=o,r+=o,r<1/15)return;r=0;let a=i.ctx;e.mode==="metube"?Sf(a,s,e.countdown):e.mode==="expired"?Fa(a,s):e.mode==="login"?Tf(a,s,e.pw||"",e.msg||""):e.mode==="hint"?Af(a,s):e.mode==="denied"?Rf(a,s):Fa(a,s,"LOCKED","Solve the puzzles to log in."),i.texture.needsUpdate=!0}),e}function Jh(n,t){n.audio.setAmbient("night"),n.hud.show(!0),n.hud.showMeter(!0),n.hud.setFragments(n.save.fragments),n.meter.enabled=!0,n.meter.drain=.5,n.meter.onEmpty=()=>n.failed("YOU FELL ASLEEP","Your donut meter hit zero and you dozed off on the job.<br>Tip: some walls hide secret rooms with donuts in them. Sprinting burns donuts faster."),n.player.giveFlashlight(!0),n.camera.fov=n.save.settings.fov,n.camera.updateProjectionMatrix(),t.refs.guard.group.visible=!1;for(let e of t.refs.boxDonuts)e.visible=!1;t.refs.deskFlashlight.visible=!1,Kh(n,t,{mode:"locked"})}async function Z1(n){let t=new ni(n,{time:"night"});await n.loadLevel(t),n.hud.setFade(1,0),n.audio.setAmbient("office"),n.audio.stopMusic(.5);let e={mode:"metube",countdown:45};Kh(n,t,e);let i=t.refs.guard,s=Si({frosting:0,scale:.6});s.position.set(0,-.06,.05),i.attachToHand(s,1),i.setMode("eat");let r=0;return t.addUpdater(o=>{i.anim.mode!=="eat"||!i.group.visible||(r+=o,r>2.86&&(r=0,n.audio.play("munch",{vol:.5})))}),n.player.enabled=!1,n.player.hasFlashlight=!1,n.player.setFlash(!1),n.player.flModel.visible=!1,n.camera.fov=55,n.camera.updateProjectionMatrix(),await n.cutscene(async()=>{n.camSet([-13.6,2.5,3.6],[-18.2,1,-.2]),n.hud.caption(`CITY MUSEUM OF NATURAL HISTORY
11:52 PM`),n.audio.play("tick"),await n.wait(2.8),n.hud.caption("Night shift #47."),await n.wait(2.2),n.hud.caption(""),n.fadeIn(2),n.audio.playMusic("menu"),n.camTo([-15.2,2,2.2],[-18.4,1.1,-.1],7,Dn.sine),await n.wait(1.5),await n.say("guard01"),n.audio.play("radio"),await n.wait(.4),await n.say("aaron01"),n.audio.play("radio"),await n.say("guard02"),n.audio.stopMusic(1.5),await n.camTo([-17.75,1.42,-.62],[-18.95,1.16,.02],1.6),e.countdown=10;for(let a=10;a>0;a--)e.countdown=a,n.audio.play(a<=5?"beep":"tick",{dur:.06}),await n.wait(.55);e.countdown=0,e.mode="expired",n.audio.play("error"),i.setMode("sit"),await n.say("museos01"),await n.camTo([-16.6,1.75,1.5],[-18.5,1.15,-.1],1.2),await n.say("guard03"),i.setMode("type"),e.mode="login",await n.wait(.5),n.computer.open(),await n.wait(.6),await n.computer.type("donut123"),await n.computer.press("login"),n.computer.setMsg("INCORRECT PASSWORD"),await n.say("guard04"),n.computer.clear(),n.computer.setMsg(""),await n.computer.type("donut123",{speed:.2}),await n.computer.press("login"),n.computer.setMsg("INCORRECT PASSWORD (attempt 2 of \u221E)"),n.shake(.08,.3),await n.say("guard05"),await n.wait(.4),await n.computer.press("hint"),n.computer.showHint(),n.audio.play("sting",{vol:.6}),await n.say("museos02"),await n.say("museos03"),n.computer.close(),e.mode="hint",i.setMode("idle"),i.group.position.set(-17.45,0,.1),i.group.rotation.y=Math.PI/2,n.camSet([-15.7,1.65,.6],[-17.45,1.5,.1]),await n.wait(.4),i.setMode("point"),await n.say("guard06"),i.setMode("idle"),t.refs.deskFlashlight.visible=!1;let o=$i();o.rotation.x=Math.PI/2,i.attachToHand(o,1),s.visible=!1,n.audio.play("flashlight");for(let a of t.refs.boxDonuts)a.visible=!1;n.audio.play("pickup"),await n.say("guard07"),await n.camTo([-17.45,1.65,.1],[-12,1.55,.1],1.4),i.group.visible=!1}),n.player.setPose(-17.45,.1,-Math.PI/2,-.03),Xf(n,t,"fromIntro")}async function Xf(n,t,e){let i=e==="fromIntro";t||(t=new ni(n,{time:"night"}),await n.loadLevel(t),n.player.setPose(At.officeStart.x,At.officeStart.z,-Math.PI/2)),n.checkpoint("dino"),Jh(n,t),n.setClock(0,!0),n.hud.setFade(0,.8),n.audio.playMusic("explore"),n.setMode("explore"),n.objective("Go to the Dinosaur Hall",At.dinoDoor),(i||e==="fresh")&&(n.hud.toast("\u{1F369} This is your <b>DONUT METER</b>. It drains over time. If it hits zero, you fall asleep!","gold"),n.hud.controlsHint($1(n)),n.wait(9).then(()=>n.hud.controlsHint(null)));let s=t.refs.trex,r=new A(At.trex.x+1.4,5.3,At.trex.z+4.8);t.addTrigger({minX:-15,maxX:15,minZ:-46,maxZ:-10.6,onEnter:()=>{n.hud.titleCard("CHAPTER 1","THE KING"),n.objective("Find the puzzle in the Dinosaur Hall",At.dinoPanel),t.refs.panel1It.enabled=!0}});let o=!1;t.addUpdater(()=>{!o&&n.mode==="explore"&&n.player.pos.z<-11&&Ja(n,r,.93)&&Ff(n,At.trex)<24&&(o=!0,n.audio.play("sting",{vol:.5}),n.say("guard08"))});let a=await new Promise(c=>{t.refs.panel1It.onUse=async()=>{await n.openPuzzle("caesar","REX")&&(t.refs.panel1It.enabled=!1,c(!0))}});t.refs.console1.draw(["SOLVED","KEY: REX"],"#6dff9e","NEXT: EGYPT WING"),await n.say("museos04"),n.say("guard09"),n.objective("Go to the Egyptian Wing",At.egyptDoor),await n.until(()=>Ff(n,At.dinoPanel)>6||n.player.pos.z>-16),await n.until(()=>!Wf(n,new A(At.trex.x,3,At.trex.z),5.5)),s.group.visible=!1,t.refs.footprints.visible=!0,t.cctvState.trexGone=!0,n.audio.play("clatter"),n.audio.play("stomp",{delay:.6,vol:.6}),n.shake(.15,.6),n.player.flicker(1.2),n.audio.stopMusic(.3),await n.wait(.8),n.say("guard10"),n.objective("...Turn around.",At.trex);let l=n.sched.time;return await n.until(()=>Ja(n,new A(At.trex.x,2.5,At.trex.z),.86)||n.sched.time-l>9),n.audio.play("sting"),n.audio.play("heartbeat",{delay:.4}),n.audio.playMusic("tension"),n.objective(""),await n.say("guard11"),await n.say("guard12"),n.checkpoint("egypt"),n.say("guard13"),Yf(n,t)}async function Yf(n,t){t||(t=new ni(n,{time:"night"}),await n.loadLevel(t),Jh(n,t),t.refs.trex.group.visible=!1,t.refs.footprints.visible=!0,t.cctvState.trexGone=!0,t.refs.console1.draw(["SOLVED","KEY: REX"],"#6dff9e","NEXT: EGYPT WING"),n.player.setPose(At.egyptDoor.x-3,At.egyptDoor.z,-Math.PI/2),n.setClock(40,!0),n.hud.setFade(0,.8),n.audio.playMusic("tension"),n.setMode("explore")),n.checkpoint("egypt"),n.objective("Follow the footprints to the Egyptian Wing",At.egyptDoor);let e=n.save.solved.pillars||(n.save.solved.pillars={}),i=t.refs.pillars,s=()=>i.filter(a=>e[a.n]).length,r=!1,o=()=>{if(r)return;let a=s();a<4?n.objective(`Find and read the 4 pillars (${a}/4)`):n.objective("Open the Pharaoh's Lock",At.egyptPanel)};t.addTrigger({x:33.4,z:-16.2,r:4.2,onEnter:()=>{n.mode==="explore"&&n.say("guard42")}}),await new Promise(a=>t.addTrigger({minX:gr.x0,maxX:gr.x1,minZ:gr.z0,maxZ:gr.z1,onEnter:()=>{n.hud.titleCard("CHAPTER 2","CURSE OF THE PHARAOH"),n.audio.playMusic("egypt");for(let l of i)l.it.enabled=!0;t.refs.panelEIt.enabled=!0,o(),n.wait(1.4).then(async()=>{await n.say("guard35"),n.audio.play("radio"),await n.say("museos13")}),a()}}));for(let a of i)a.it.onUse=()=>{let l=!e[a.n];e[a.n]=a.glyph,n.persist(),n.audio.play(l?"chime":"click"),n.hud.toast(`\u{1F4DC} Pillar <b style="letter-spacing:2px">${"|".repeat(a.n)}</b> \u2014 the <b>${mr[a.glyph].toUpperCase()}</b> <span style="opacity:.75">(${s()}/4 in your notes)</span>`,"gold"),l&&s()===4&&n.say("guard36"),o()};await new Promise(a=>{t.refs.panelEIt.onUse=async()=>{await n.openPuzzle("pharaoh","MUMMY")&&(t.refs.panelEIt.enabled=!1,a())}}),r=!0;for(let a of i)a.it.enabled=!1;return t.refs.consoleE.draw(["SOLVED","KEY: MUMMY"],"#e9c46a","NEXT: ROMAN HALL"),n.objective(null),n.audio.play("radio"),await n.say("museos14"),await K1(n,t),n.setMode("explore"),t.addTrigger({x:At.romanNorthDoor.x,z:-12.8,r:3.4,onEnter:()=>{n.audio.play("stomp",{vol:.8}),n.audio.play("stomp",{vol:.6,delay:.7}),n.audio.play("growl",{delay:1.1}),n.shake(.2,1.2),n.player.flicker(.8),n.wait(1.4).then(()=>n.say("guard14"))}}),qf(n,t,"carry")}async function K1(n,t){let e=t.refs.mummy,i=t.refs.sarcLid,s=t.refs.sarcLidBase,r=new A(At.sarcophagus.x,0,-17.2),o=new A(At.sarcophagus.x,.92,-20.7),a=new A(At.sarcophagus.x,.92,-19.3),l=new A(r.x,1.65,r.z),c=new A,h=(u=1.35)=>{c.copy(e.holder.position),c.y+=u-.92+.6,n.camLook.lerp(c,.2),n.camera.lookAt(n.camLook)},d=()=>{e.holder.position.copy(e.home),e.holder.rotation.set(0,0,0),e.pivot.rotation.x=-Math.PI/2,e.person.anim.sit=0,e.person.setMode("liesit"),i.position.copy(s),i.rotation.set(0,0,0)},f=null;n.player.setPose(r.x,r.z,0,0),await n.cutscene(async()=>{n.camSet([l.x,l.y,l.z],[At.sarcophagus.x,1,At.sarcophagus.z]),n.audio.stopMusic(1.2),n.audio.play("creak"),n.shake(.08,1.2),await n.wait(.7),n.camSet([At.sarcophagus.x+2.3,2.1,At.sarcophagus.z+3.6],[At.sarcophagus.x,1.1,At.sarcophagus.z-.2]),n.say("guard37"),n.audio.play("gate"),await n.tween(1.7,_=>{i.position.x=s.x+.95*_,i.rotation.z=-.1*_}),await n.tween(.35,_=>{i.position.y=s.y-.75*_,i.rotation.z=-.1-.45*_},Dn.in),n.audio.play("thud"),n.shake(.3,.5),await n.wait(.6),n.audio.play("growl",{vol:.35}),n.audio.playMusic("tension"),await n.tween(1.5,_=>{e.pivot.rotation.x=-Math.PI/2*(1-_),e.person.anim.sit=_}),n.player.flicker(.6),await n.say("guard38"),n.camSet([l.x,l.y,l.z],[At.sarcophagus.x,1.5,At.sarcophagus.z]);let u=e.holder.position.clone();e.person.setMode("jump"),await n.tween(.8,_=>{e.holder.position.lerpVectors(u,o,_),e.holder.position.y+=Math.sin(_*Math.PI)*.9,e.pivot.rotation.x=0,h()},Dn.linear),n.audio.play("thud",{vol:.6}),n.shake(.15,.3),e.person.setMode("zombie",.7),await n.tween(2.4,_=>{e.holder.position.lerpVectors(o,a,_),h()},Dn.linear),e.person.setMode("point"),await n.say("mummy01"),e.person.setMode("idle"),await n.say("guard39"),e.person.setMode("sad"),await n.say("mummy02"),e.person.setMode("idle"),await n.say("guard40"),f=Si({frosting:2,scale:.7}),t.scene.add(f);let g=new A(l.x+.2,1.3,l.z-.5),y=new A;n.audio.play("whoosh",{vol:.4}),n.meter.add(-15),n.hud.toast("\u{1F369} You gave the mummy a donut. <b>\u221215%</b>","pink"),e.person.setMode("point"),await n.tween(.7,_=>{e.person.arms[1].hand.getWorldPosition(y),f.position.lerpVectors(g,y,_),f.position.y+=Math.sin(_*Math.PI)*.4,f.rotation.x+=.2}),e.person.setMode("munch");for(let _=0;_<3;_++)n.audio.play("munch"),await n.tween(.55,v=>{e.person.arms[1].hand.getWorldPosition(f.position),f.scale.setScalar(.7*(1-(_+v)/3.2))});f.visible=!1,e.person.setMode("wave"),await n.say("mummy03"),await n.say("guard41"),e.holder.rotation.y=Math.PI,e.person.setMode("zombie",.7),await n.tween(2.2,_=>{e.holder.position.lerpVectors(a,o,_),h()},Dn.linear),e.holder.rotation.y=0,e.person.setMode("liesit"),e.person.anim.sit=1;let p=e.holder.position.clone();await n.tween(.8,_=>{e.holder.position.lerpVectors(p,e.home,_),e.holder.position.y+=Math.sin(_*Math.PI)*.9,h()},Dn.linear),n.audio.play("thud",{vol:.5}),await n.tween(1,_=>{e.pivot.rotation.x=-Math.PI/2*_,e.person.anim.sit=1-_}),n.audio.play("gate");let m=i.position.clone(),x=i.rotation.z;await n.tween(1.3,_=>{i.position.lerpVectors(m,s,_),i.rotation.z=x*(1-_)}),n.audio.play("thud"),n.shake(.2,.4),await n.wait(.4)}),f&&t.scene.remove(f),d(),n.player.setPose(r.x,r.z,Math.atan2(-(At.romanNorthDoor.x-r.x),-(At.romanNorthDoor.z-r.z)),0)}async function qf(n,t,e){t||(t=new ni(n,{time:"night"}),await n.loadLevel(t),Jh(n,t),t.refs.trex.group.visible=!1,t.refs.footprints.visible=!0,t.cctvState.trexGone=!0,t.refs.console1.draw(["SOLVED","KEY: REX"],"#6dff9e","NEXT: EGYPT WING"),t.refs.consoleE.draw(["SOLVED","KEY: MUMMY"],"#e9c46a","NEXT: ROMAN HALL"),n.player.setPose(At.romanNorthDoor.x,-12.5,Math.PI),n.setClock(62,!0),n.hud.setFade(0,.8),n.audio.playMusic("tension"),n.setMode("explore")),n.checkpoint("roman"),n.objective("Get to the Roman Hall. Quickly.",At.romanNorthDoor);let i=t.refs.trex;await new Promise(l=>t.addTrigger({minX:12.6,maxX:40,minZ:-9,maxZ:9,onEnter:()=>{n.hud.titleCard("CHAPTER 3","ALL ROADS"),n.audio.playMusic("explore"),n.objective("Crack the Roman lock (it's at the far end)",At.romanPanel),t.refs.panel2It.enabled=!0,n.wait(2).then(()=>n.say("guard15")),l()}})),await new Promise(l=>{t.refs.panel2It.onUse=async()=>{await n.openPuzzle("roman","1974")&&(t.refs.panel2It.enabled=!1,l())}}),t.refs.console2.draw(["SOLVED","KEY: 1974"],"#ffcc4d","BEYOND THE WALLS..."),n.audio.stopMusic(2),n.player.speedMul=0,await n.say("museos05"),n.say("guard16"),await n.wait(1.6),n.dialogue.stop(),n.audio.play("growl",{vol:.8}),n.objective("...Something is breathing behind you. Turn around.",At.romanDoor);let s=new A(16,4,0);await n.until(()=>!Wf(n,s,3.5)),i.group.position.set(16.8,0,.3),i.group.rotation.y=Math.PI/2-.12,i.group.visible=!0,i.setAlive(!0),i.setMode("idle"),i.anim.jaw=.2;let r=new Ie(16723992,0,16,1.6);r.position.set(21,3.5,2.5),t.scene.add(r);let o=new A(21.5,5,.2);t.addUpdater(()=>i.lookAt(n.camera.position));let a=n.sched.time;if(await n.until(()=>Ja(n,o,.8)||n.sched.time-a>10),!Ja(n,o,.8)){let l=n.player.yaw,h=Math.atan2(-(o.x-n.player.pos.x),-(o.z-n.player.pos.z))-l;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;n.player.enabled=!1,await n.tween(.6,d=>{n.player.yaw=l+h*d,n.player.applyCamera(0)})}n.setMode("cutscene"),n.hud.setLetterbox(!0),n.player.flicker(1.5),n.tween(.8,l=>{r.intensity=40*l}),n.audio.play("sting"),await n.wait(.6),i.roar(2.4),n.audio.play("roar"),n.shake(.5,2.2),n.hud.objective(null),await n.wait(.9),n.say("guard17"),await n.wait(1.4),n.hud.bigText("RUN!"),i.setMode("walk",3),t.addUpdater(l=>{i.anim.mode==="walk"&&(i.group.position.x+=3*l)}),n.audio.play("stomp"),await n.wait(1.1),n.hud.setLetterbox(!1),n.startChapter("chase",{mode:"carry"})}async function J1(n,t,e){let i=new Ba(n);await n.loadLevel(i),n.checkpoint("chase"),n.setClock(122,!1),n.hud.show(!0),n.hud.showMeter(!0),n.hud.setFragments(n.save.fragments,{show:!1}),n.meter.enabled=!0,n.meter.drain=.25,n.meter.onEmpty=null,n.player.flModel.visible=!1,n.player.setFlash(!1),n.camera.fov=70,n.camera.updateProjectionMatrix(),n.audio.setAmbient("runner"),n.audio.setReverb(.35),n.audio.playMusic("chase",.2),n.setMode("runner");let s=i.start();i.setCam("front"),i.trexBehind=6,n.hud.setFade(0,.25),i.trex.roar(1.6),n.audio.play("roar"),n.audio.play("alarm",{n:3}),n.shake(.3,1.5),n.hud.titleCard("CHAPTER 4","RUN"),n.say("guard18"),await n.wait(2.8),i.blendCam("chase"),await n.tween(1.1,d=>{i.camBlend=d,i.trexBehind=Ue(6,26,Math.min(1,d*2))}),i.camBlend=null,i.hideTrex=!0,i.beginRun(),n.hud.showChase(!0),n.hud.controlsHint(n.input.isTouch?["Swipe \u2190 \u2192 change lanes","Swipe \u2191 jump","Swipe \u2193 slide"]:["<kbd>A</kbd><kbd>D</kbd> / <kbd>\u2190</kbd><kbd>\u2192</kbd> change lanes","<kbd>W</kbd> / <kbd>Space</kbd> jump","<kbd>S</kbd> / <kbd>\u2193</kbd> slide"]),n.wait(6).then(()=>n.hud.controlsHint(null)),n.until(()=>i.st.z<-pn*.45).then(()=>i.st.phase==="run"&&n.say("guard19")),n.until(()=>i.st.arrowShown).then(()=>i.st.phase==="run"&&n.say("guard20"));let r=await n._guard(s);if(n.hud.showChase(!1),n.hud.controlsHint(null),r==="caught")return n.audio.stopMusic(.2),n.hud.flash("rgba(120,0,0,0.9)",1.5),n.hud.setFade(1,.6),await n.wait(.7),n.failed("CHOMP.","The T-Rex got you. (Hit stuff and it catches up. Collect donuts, dodge, and at the end \u2014 GO RIGHT.)");n.setMode("cutscene"),n.hud.setLetterbox(!0),n.meter.enabled=!1,n.audio.stopMusic(.6),i.camMode="free";let o=-pn;n.camSet([-3.4,2.6,o+13],[1.2,2.4,o]);let a=i.trex;a.group.visible=!0,a.group.position.set(.8,0,o+24),a.group.rotation.y=Math.PI,a.setMode("run",14),await n.tween(1.15,d=>{a.group.position.z=Ue(o+24,o+5.4,d)},Dn.linear),a.setMode("idle"),n.audio.play("crash"),n.audio.play("clatter"),n.shake(.9,1.4),n.hud.flash("rgba(255,255,255,0.7)",.4);let l=a.body.rotation.x;await n.tween(.35,d=>{a.body.rotation.x=l-.35*Math.sin(d*Math.PI),a.group.position.z=o+5.4+Math.sin(d*Math.PI)*1.2}),a.group.position.z=o+6.5,await n.wait(.5),i.guard.group.rotation.y=0,i.guard.setMode("idle"),n.camSet([xn[2]-1.6,1.7,o-7.2],[xn[2],1.5,o-1]);let c=new H(new ie(.13,12,8),new ct({color:16723984,emissive:16722432,emissiveIntensity:7}));c.position.set(xn[2]+.05,1.95,o+1.4),i.scene.add(c);let h=new Ie(16719872,6,5,2);h.position.set(xn[2],1.8,o+1),i.scene.add(h),n.audio.play("growl"),await n.wait(.6),i.guard.setMode("point"),await n.say("guard21"),n.audio.play("roar",{short:!0}),n.shake(.3,.8),i.guard.setMode("shock"),await n.wait(.8),c.visible=!1,h.intensity=0,n.audio.play("stomp",{vol:.6}),n.audio.play("stomp",{vol:.4,delay:.6}),await n.wait(1.2),n.hud.setLetterbox(!1),n.startChapter("maze",{mode:"carry"})}var Bf=n=>.48*(1+.25*Math.max(0,n-(en-1))),$h=n=>n<en?35:Math.max(6,30-5*(n-en)),zf=[["guard43","museos15"],["museos16"],["guard45","museos17"],["museos18"],["museos15"],["guard43","museos16"]];async function j1(n){let t=n.save.solved||(n.save.solved={}),e=0;for(;e<en&&t["maze"+e];)e++;let i=qa.filter(([p])=>t["key_"+p]).map(([p])=>`k1_${p}`),s=new $a(n,{stage:e,keysTaken:i});await n.loadLevel(s),n.checkpoint("maze");let r=e,o=()=>r>=en,a=s.spawnFor(e);n.player.setPose(a.x,a.z,a.yaw),n.setClock(135+e*15,!0),n.hud.show(!0),n.hud.showMeter(!0),n.hud.setFragments(n.save.fragments),n.meter.enabled=!0,n.meter.drain=Bf(s.curBand);let l=!1;n.meter.onEmpty=()=>{if(!o())return n.failed("YOU FELL ASLEEP","Right there in the archives. The T-Rex is very disappointed in you.<br>Tip: dead ends hide donuts \u2014 and some shelves hide secret rooms.");l||(l=!0,Q1(n))},s.onBandChange=p=>{n.meter.drain=Bf(p)},n.player.giveFlashlight(!0),n.camera.fov=n.save.settings.fov,n.camera.updateProjectionMatrix(),n.audio.setAmbient("maze"),n.audio.setReverb(.25),n.audio.playMusic("maze"),n.hud.setFade(0,.8),n.setMode("explore");let c=p=>{let m=s.gateKind(p);if(m==="keys"){let x=s.puzzleParams(p).count,_=s.keysFor(p).filter(v=>v.taken).length;return _>=x?"All the keys! Unlock the gate":`${p>=en?`Gate ${p+1}: find`:"Find"} the ${x} lost keys (${_}/${x}) to open the next gate`}return p===0?"Find the fuse box to open the first gate":p<en?`Find the ${qh[m]} to open the next gate`:`Gate ${p+1}: find the ${qh[m]}`};n.objective(c(e)),e===0&&(n.hud.titleCard("CHAPTER 5","BEHIND THE WALLS"),s.holeEye.visible=!0,n.audio.play("growl",{vol:.8}),n.wait(2.5).then(()=>{s.holeEye.visible=!1}),n.wait(1.2).then(async()=>{n.audio.play("radio"),await n.say("museos06"),await n.say("guard22")}));let h=document.getElementById("minimap"),d=h.querySelector("canvas").getContext("2d");h.classList.remove("off"),n.hud.toast("\u{1F5FA}\uFE0F Your map fills in as you explore. Press <b>M</b> to hide it.","gold");let f=1;s.addUpdater(p=>{n.input.wasPressed("KeyM")&&h.classList.toggle("off"),s.revealAround(n.player.pos.x,n.player.pos.z),f+=p,f>.1&&!h.classList.contains("off")&&(f=0,s.drawMap(d,n.player))});let u=!1,g=!1,y=18;s.addUpdater(p=>{if(n.mode==="explore"){for(let m of s.peeks)m.done||Math.hypot(n.player.pos.x-m.x,n.player.pos.z-m.z)<3.2&&(m.done=!0,m.eye.visible=!0,n.audio.play("growl",{vol:.9}),n.shake(.15,.6),u||(u=!0,n.say("guard23")),setTimeout(()=>m.eye.visible=!1,2200));y-=p,y<0&&(y=22+Math.random()*20,n.audio.play("stomp",{vol:.5}),n.audio.play("stomp",{vol:.35,delay:.7}),n.shake(.12,1)),Math.random()<p*.15&&n.audio.play("drip"),o()&&n.meter.value<18&&!g&&(g=!0,n.say("guard44")),n.meter.value>40&&(g=!1)}}),s.addUpdater(()=>{if(n.mode==="explore")for(let p of s.keys){if(p.taken||Math.hypot(n.player.pos.x-p.obj.position.x,n.player.pos.z-p.obj.position.z)>1.1)continue;s.takeKey(p),p.k===1&&(t["key_"+p.name]=!0,n.persist()),n.audio.play("pickup"),n.audio.play("chime",{delay:.12});let m=s.puzzleParams(p.k).count,x=s.keysFor(p.k).filter(v=>v.taken).length,_="#"+p.color.toString(16).padStart(6,"0");n.hud.toast(`\u{1F511} Found the <b style="color:${_}">${p.name.toUpperCase()}</b> key! <b>(${x}/${m})</b>`,"gold"),p.k===r&&n.objective(c(r))}}),s.onSecret=()=>n.foundSecret(),s.onStationUse=async(p,m)=>{if(s.gateOpen.has(p)){n.hud.toast("Already open! \u2714","mint");return}if(m.kind==="keys"){let x=s.puzzleParams(p).count,_=s.keysFor(p).filter(v=>v.taken).length;if(_<x){n.audio.play("error"),n.hud.toast(`\u{1F512} This gate needs ${x} keys \u2014 you have <b>${_}/${x}</b>. They're hidden somewhere in this part of the archives.`,"gold");return}m.it.enabled=!1,m.slots.forEach((v,w)=>setTimeout(()=>{v.visible=!0,n.audio.play("click")},150+w*280)),await n.wait(1.1),n.audio.play("unlock"),p>=en&&(n.meter.add($h(p)),n.hud.toast(`\u{1F513} Unlocked! <b>+${$h(p)}%</b> \u{1F369}`,"mint"))}else{let x=p===0?"ZAP":p===2?"DONUT":null,_=x?null:'<div class="help" style="margin-top:10px">Password fragment six: <b style="color:var(--red)">NOT FOUND</b></div><div style="font-weight:800;margin:6px 0 10px">It must be behind the next gate...</div>';if(!await n.openPuzzle(m.kind,x,{params:s.puzzleParams(p),reward:$h(p),banner:_}))return}if(p<en&&(t["maze"+p]=!0,n.persist()),m.light.color.set(6750105),r=Math.max(r,p+1),await s.openGate(p),n.objective(c(r)),p===0)n.audio.play("radio"),await n.say("museos07"),await n.say("museos08");else if(p===1)await n.say("guard24");else if(p===2)n.audio.play("radio"),await n.say("museos09");else for(let x of zf[(p-en)%zf.length])x.startsWith("museos")&&n.audio.play("radio"),await n.say(x)}}async function Q1(n){n.meter.enabled=!1,n.meter.onEmpty=null,n.audio.stopMusic(3),await n.cutscene(async()=>{n.player.enabled=!1,n.audio.play("yawn"),n.hud.setDrowsy(.9),await n.say("guard27");let t=n.player.pitch;await n.tween(2.4,e=>{n.player.eyeOffset=-.95*e,n.player.pitch=Ue(t,.3,e),n.player.applyCamera(0)});for(let e of[.7,.2,.85,.4,1])n.hud.setLids(e,.5),await n.wait(.6);n.audio.play("radio"),await n.say("museos19"),n.audio.play("yawn"),n.hud.setFade(1,1.5),await n.wait(1.6)}),n.hud.setDrowsy(0),n.startChapter("morning",{mode:"carry"})}async function tx(n){let t=new ni(n,{time:"day"});await n.loadLevel(t),n.checkpoint("morning"),n.save.fragments=Zh.morning.fragments.slice(),n.hud.setFade(1,0),n.hud.show(!0),n.hud.setLids(1,0),n.hud.setFragments(n.save.fragments),n.meter.enabled=!1,n.audio.setAmbient("day"),n.audio.setReverb(.45),n.player.giveFlashlight(!1),n.player.flModel.visible=!1,n.camera.fov=n.save.settings.fov,n.camera.updateProjectionMatrix(),t.refs.guard.group.visible=!1;for(let d of t.refs.boxDonuts)d.visible=!1;t.refs.deskFlashlight.visible=!1;let e={mode:"locked"};Kh(n,t,e);let i=t.refs.trex,s=new pt,r=new ct({color:1778752,roughness:.7}),o=new H(new ne(.2,.23,.15,16),r);s.add(o);let a=ot(.3,.02,.2,r,0,-.07,.2);s.add(a);let l=ot(.07,.06,.01,Mt.brass(),0,0,.21);s.add(l),s.position.set(0,.5,.35),s.rotation.z=.2,i.headPivot.children[0].add(s);let c=Si({frosting:0,scale:.6});c.position.set(.25,-.35,1.2),c.rotation.z=Math.PI/2,i.headPivot.children[0].add(c);let h=t.makeAaron();h.group.position.set(5.5,0,-14),h.group.rotation.y=Math.PI*.8,t.scene.add(h.group),t.addUpdater(d=>h.update(d)),n.player.setPose(.6,-19.6,.05,.55),n.player.eyeOffset=-1.3,n.player.applyCamera(0),n.setClock(0,!1),n.audio.playMusic("morning"),await n.cutscene(async()=>{n.hud.caption("7 HOURS LATER"),n.hud.setFade(.6,0),await n.wait(2.2),n.hud.caption(""),n.hud.setFade(0,1.5);for(let x of[.6,1,.3,.8,0])n.hud.setLids(x,.45),await n.wait(.55);await n.say("guard28");let d=n.player.pitch;await n.tween(1.4,x=>{n.player.eyeOffset=Ue(-1.3,0,x),n.player.pitch=Ue(d,.25,x),n.player.applyCamera(0)});let f=n.player.yaw,u=Math.atan2(-(At.trex.x+1.5-n.player.pos.x),-(At.trex.z+4-n.player.pos.z));await n.tween(1.2,x=>{n.player.yaw=Ue(f,u,x),n.player.pitch=Ue(.25,.32,x),n.player.applyCamera(0)}),await n.say("guard29");let g=h.group.position.clone(),y=new A(3.4,0,-18.7);h.setMode("walk",1.3),h.group.rotation.y=Math.atan2(y.x-g.x,y.z-g.z);let p=n.player.yaw,m=Math.atan2(-(y.x-n.player.pos.x),-(y.z-n.player.pos.z));await n.tween(2.4,x=>{h.group.position.lerpVectors(g,y,x),n.player.yaw=Ue(p,m,x),n.player.pitch=Ue(.32,.05,x),n.player.applyCamera(0)},Dn.linear),h.setMode("idle"),h.group.rotation.y=Math.atan2(n.player.pos.x-y.x,n.player.pos.z-y.z),h.anim.talk=3,await n.say("aaron02"),await n.say("guard30"),h.anim.talk=3,h.setMode("shrug"),await n.say("aaron03"),h.setMode("idle")}),n.setMode("explore"),n.objective("Log in to your computer (Security Office)",At.computer),t.refs.computerIt.enabled=!0,await new Promise(d=>{t.refs.computerIt.onUse=d}),t.refs.computerIt.enabled=!1,await n.cutscene(async()=>{n.computer.open(),await n.wait(.5),await n.computer.type("REXMUMMY1974ZAPDONUT",{visible:!0,speed:.08}),await n.wait(.4),await n.computer.press("login"),n.computer.showDenied(n.save.fragments),e.mode="denied",n.hud.setFragments(n.save.fragments,{missing:!0}),n.audio.stopMusic(.2),await n.say("museos11"),await n.say("guard31"),await n.say("museos12"),n.computer.close()}),n.setMode("cutscene"),n.audio.play("wahwah"),n.save.flags.ending="pending",n.persist(),await n._guard(Ka(n,{title:"GAME OVER",sub:'You did not solve the puzzles.<br><span style="color:var(--dim)">(5 of 6 password fragments. So close. So, so close.)</span>',buttons:[{label:"BACK TO MENU",value:"menu",cls:"pink"}]})),n.toMenu()}var ja=class{constructor(t){this.game=t,this.root=j("#menu"),this.speaker=null,this.open=!1}_buildSpeaker(){if(this.speaker)return;let t=this.speaker=we("div","",`
      <div class="tv">
        <div class="tv-screen"><canvas width="256" height="256"></canvas><img alt=""><video playsinline></video></div>
        <div class="tv-label">${Yi.devName} \xB7 LIVE</div>
        <div class="tv-knobs"><i></i><i></i></div>
      </div>`);t.id="speaker",document.body.append(t);let e=j(".tv-screen",t),i=new Yr(e,{canvas:j("canvas",e),img:j("img",e),video:j("video",e),root:t});i.who="dev",i.mood="happy",this.game.dialogue.tv=i;let s=()=>{this.speaker&&!this.game.dialogue.current&&i.showFace(this.game.clips.face("dev",i.mood))};s(),this._offClips=this.game.clips.onChange(s);let r=0;t.addEventListener("click",()=>{this.busy||this.game.dialogue.current||(this.game.audio.play("static",{dur:.15}),this.game.say(r++%2?"dev07":"dev06"))})}_removeSpeaker(){this._offClips?.(),this._offClips=null,this.speaker?.remove(),this.speaker=null,this.game.dialogue.tv=null}show(){let t=this.game,e=t.save;this.open=!0,this._buildSpeaker();let i=e.reached||[],s=e.chapter&&e.chapter!=="intro"?Ti.find(a=>a.id===e.chapter):null,[r,o]=Yi.title;this.root.innerHTML=`
      <div class="menu-left">
        <div class="logo">${r.replace(/O/,'<span class="donut-o"></span>')}<span class="l2">${o.replace(/^O/,'<span class="donut-o"></span>')}</span></div>
        <div class="tagline">One night. One password. Way too many donuts.</div>
        <div class="menu-badges">${e.flags.kicked?'<span class="menu-badge">\u{1F3C1} YOU BEAT THE GAME (KIND OF)</span>':""}${e.donuts.length?`<span class="menu-badge ${e.donuts.length>=Ei?"gold":"dim"}">\u{1F369} ${e.donuts.length}/${Ei} donuts${e.donuts.length>=Ei?" \u2014 DONUT HUNTER":""}</span>`:""}</div>
        ${s?`<button class="btn menu-btn pink" data-act="continue">\u25B6 CONTINUE <small>${s.name}</small></button>`:""}
        <button class="btn menu-btn ${s?"":"pink"}" data-act="new">${s?"NEW GAME":"\u25B6 PLAY"} <small>Prologue</small></button>
        <button class="btn menu-btn" data-act="chapters">CHAPTERS <small>${i.length}/${Ti.length}</small></button>
        <button class="btn menu-btn" data-act="settings">SETTINGS</button>
        <button class="btn menu-btn ghost" data-act="controls">CONTROLS</button>
        <button class="btn menu-btn ghost" data-act="credits">CREDITS</button>
        <div class="menu-foot">${t.input.isTouch?"Touch controls on \xB7 landscape recommended":"WASD move \xB7 Mouse look \xB7 E use \xB7 F flashlight \xB7 Shift sprint"}</div>
      </div>`,this.root.classList.remove("off");for(let a of pa("[data-act]",this.root))a.addEventListener("mouseenter",()=>t.audio.play("hover")),a.addEventListener("click",()=>this._act(a.dataset.act));t.audio.playMusic(e.flags.ending==="pending"?"meta":"menu"),e.flags.ending==="pending"?this._metaEnding():e.flags.welcomed?e.flags.kicked&&!e.flags.backAgain&&(e.flags.backAgain=!0,t.persist(),setTimeout(()=>this.open&&t.say("dev05"),1200)):(e.flags.welcomed=!0,t.persist(),setTimeout(()=>this.open&&!this.busy&&t.say("dev01"),1200))}hide(){this.open=!1,this.root.classList.add("off"),this._removeSpeaker(),this.game.dialogue.stop()}_act(t){let e=this.game;this.busy||(e.audio.play("select"),t==="new"?e.startChapter("intro"):t==="continue"?e.startChapter(e.save.chapter):t==="chapters"?this.chapters():t==="settings"?this.settings():t==="credits"?this.credits():t==="controls"&&this.controls())}chapters(){let t=this.game,e=Ms(`<h2>CHAPTERS</h2><div class="sub">Replay any part of the night you've reached.</div><div class="chapters"></div>`),i=j(".chapters",e.panel),s=Math.max(0,...Ti.map((r,o)=>t.save.reached.includes(r.id)?o:0));Ti.forEach((r,o)=>{let a=o<=s,l=we("button",`btn chapter-btn ${a?"":"locked"}`,`<span>${r.name}</span><small>${a?r.blurb:"\u{1F512} locked"}</small>`);l.onclick=()=>{e.close(),t.audio.play("select"),t.startChapter(r.id)},i.append(l)})}settings(t){let e=this.game,i=e.save.settings,s=Ms('<h2>SETTINGS</h2><div class="sub">Saved automatically.</div><div class="settings"></div>',t),r=j(".settings",s.panel),o=(h,d,f,u,g,y=p=>Math.round(p*100)+"%")=>{let p=we("div","setting",`<span>${d}</span><input type="range" min="${f}" max="${u}" step="${g}" value="${i[h]}"><span class="val">${y(i[h])}</span>`),m=j("input",p);m.oninput=()=>{i[h]=Number(m.value),j(".val",p).textContent=y(i[h]),e.applySettings()},r.append(p)},a=(h,d,f)=>{let u=we("div","setting",`<span>${d}</span><select>${f.map(([y,p])=>`<option value="${y}" ${String(i[h])===String(y)?"selected":""}>${p}</option>`).join("")}</select><span></span>`),g=j("select",u);g.onchange=()=>{let y=g.value;i[h]=y==="true"?!0:y==="false"?!1:y,e.applySettings(),e.audio.play("click")},r.append(u)};o("master","Master volume",0,1,.05),o("music","Music",0,1,.05),o("sfx","Sound effects",0,1,.05),a("voice","Character voices",[["tts","Robot voices (text-to-speech)"],["babble","Cute beeps"],["off","Off (subtitles only)"]]),a("subtitles","Subtitles",[["medium","On"],["large","Large"],["off","Off"]]),o("sensitivity","Mouse sensitivity",.2,3,.1,h=>h.toFixed(1)+"\xD7"),a("invertY","Invert mouse Y",[[!1,"No"],[!0,"Yes"]]),o("fov","Field of view",60,100,1,h=>h+"\xB0"),o("brightness","Brightness",.7,1.8,.05,h=>Math.round(h*100)+"%"),a("quality","Graphics",[["high","High (glow + shadows)"],["medium","Medium (shadows)"],["low","Fast (for slow computers)"]]),a("shake","Camera shake",[[!0,"On"],[!1,"Reduced"]]),a("marker","Objective compass",[[!0,"On"],[!1,"Off"]]);let l=we("button","btn small ghost","Reset save data");l.style.marginTop="18px";let c=null;l.onclick=()=>{if(!c){l.textContent="Click again to erase progress, donuts and the ending",l.style.borderColor="var(--red)",c=setTimeout(()=>{c=null,l.textContent="Reset save data",l.style.borderColor=""},4e3);return}clearTimeout(c),e.resetSave(),s.close(),this.show(),e.hud.toast("Save data erased.","gold")},r.append(l)}controls(){let t=(e,i)=>`<div class="setting" style="grid-template-columns:200px 1fr"><span>${e}</span><span style="font-weight:700;color:var(--dim)">${i}</span></div>`;Ms(`<h2>CONTROLS</h2><div class="sub">Keyboard + mouse \xB7 touch controls appear automatically on phones and tablets.</div>
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
        Story, ideas, starring, directing & yelling: <b style="color:var(--pink)">${Yi.devName}</b> (who was up all night)<br>
        The Security Guard: <b style="color:var(--gold)">you</b><br>
        The T-Rex: <b>a bunch of cylinders</b><br>
        Aaron: <b>Aaron</b><br>
        The Mummy: <b>a guy who really likes donuts</b><br>
        Donuts eaten during development: <b>too many</b><br><br>
        Built with three.js. Every sound and song is synthesized in your browser.
      </p>`)}async _metaEnding(){let t=this.game;this.busy=!0,pa("[data-act]",this.root).forEach(c=>c.disabled=!0);let e=j("#facecam");e.classList.add("menu-pos"),await kn(1500),await t.say("guard32");let i=we("button","btn pink","\u{1F9E9} +1 BONUS PUZZLE?");i.id="bonus-btn",document.body.append(i);let s=we("div","psst","\u2191 psst\u2026 there's more!");document.body.append(s),t.audio.play("sparkle"),await new Promise(c=>i.onclick=c),i.remove(),s.remove(),t.audio.play("select");let r=Ms(`<h2>BONUS PUZZLE #6</h2><div class="sub">Loading the final puzzle\u2026</div>
      <div style="height:22px;border-radius:12px;background:#111;border:2px solid var(--gold);overflow:hidden"><div class="ld" style="height:100%;width:0;background:linear-gradient(90deg,var(--pink),var(--gold));transition:width .3s"></div></div>
      <div class="ldtxt help" style="margin-top:10px">0%</div><div class="res"></div>`,null,{noClose:!0}),o=j(".ld",r.panel),a=j(".ldtxt",r.panel);for(let c=0;c<=99;c+=3+Math.floor(Math.random()*9))o.style.width=c+"%",a.textContent=c+"% \u2014 "+["loading puzzle\u2026","generating fun\u2026","adding donuts\u2026","almost there\u2026","reticulating splines\u2026"][Math.floor(c/22)],t.audio.play("tick"),await kn(180);o.style.width="99%",a.textContent="99% \u2014 ...",await kn(1600),t.audio.play("error"),j(".res",r.panel).innerHTML=`<div class="hintbox" style="border-color:var(--red);color:#ffb0b0;font-size:18px;text-align:center">
      <div style="font:30px var(--title);color:var(--red)">ERROR 404: PUZZLE NOT FOUND</div><br>
      There is no puzzle #6.<br>That's it. That was the whole game.<br>Thanks for playing! \u{1F369}</div>
      <div style="text-align:center;margin-top:16px"><button class="btn ok">\u2026what?</button></div>`,await new Promise(c=>j(".ok",r.panel).onclick=c),r.close(),await t.say("guard33"),await kn(300),await t.say("dev02"),await kn(200),await t.say("guard34"),t.audio.stopMusic(.05),t.audio.play("scratch"),await kn(700),this.speaker.classList.add("angry"),t.dialogue.tv.mood="angry",t.dialogue.tv.showFace(t.clips.face("dev","angry")),await t.say("dev03"),t.audio.playMusic("angry",.1),t.shake(.2,2),pa(".menu-left > *",this.root).forEach((c,h)=>{c.style.setProperty("--rot",Math.random()*80-40+"deg"),setTimeout(()=>{c.classList.add("fall"),t.audio.play("thud",{vol:.4})},h*120)}),this.speaker.classList.add("huge"),await t.say("dev04");let l=we("div","boot-kick","\u{1F97E}");document.body.append(l),l.offsetWidth,l.classList.add("go"),await kn(380),t.audio.play("kick"),t.hud.flash("rgba(255,255,255,0.9)",.4);for(let c of[this.root,this.speaker,j("#game"),e,j("#dialogue")])c?.classList.add("kicked-away");await kn(900),l.remove(),t.audio.stopMusic(.05),t.audio.play("crt"),document.body.classList.add("crt-off"),await kn(800),t.save.flags.ending="done",t.save.flags.kicked=!0,t.persist(),this.kickedScreen()}kickedScreen(){let t=j("#kicked");document.body.classList.remove("crt-off");let e=[["C:\\MUSEUM\\LOCKED_OUT.EXE",""],["> Process terminated by: "+Yi.devName+" (angry)",""],['> Reason: player said "i could do better"',""],["> Exit code: HELL_NAW","err"],["",""],["The developer has kicked you out of the game.","err"]];t.innerHTML=e.map(([i,s],r)=>`<div class="line ${s}" style="animation-delay:${.6+r*.7}s">${i||"&nbsp;"}</div>`).join("")+'<button class="btn ghost">[ reopen game ]</button>',t.classList.remove("off"),j("button",t).onclick=()=>location.reload()}};function Ms(n,t,{noClose:e=!1}={}){let i=we("div","modal"),s=we("div","panel",(e?"":'<button class="close">\u2715</button>')+n);i.append(s),j("#modal-root").append(i);let r=()=>{i.remove(),removeEventListener("keydown",o,!0),t?.()},o=a=>{a.code!=="Escape"||e||j("#modal-root").lastElementChild!==i||(a.stopImmediatePropagation(),r())};return addEventListener("keydown",o,!0),e||(j(".close",s).onclick=r,i.addEventListener("mousedown",a=>{a.target===i&&r()})),{el:i,panel:s,close:r}}var $f=10;function Kf(n,t,{fragment:e="",params:i={},banner:s=null,rewardText:r="+1 DONUT \u{1F369}"}={}){let o=ex[t];return new Promise(a=>{let l=j("#modal-root"),c=we("div","modal"),h=we("div","panel puzzle");h.innerHTML=`
      <button class="close" title="Close (Esc)">\u2715</button>
      <h2>${i.title||o.title}</h2>
      <div class="sub">${i.sub||o.sub}</div>
      <div class="pz-body"></div>
      <div class="pz-hint"></div>
      <div class="panel-foot">
        <button class="btn small pz-hintbtn">\u{1F4A1} Hint <small style="opacity:.7">(\u2212${$f}% \u{1F369})</small></button>
        <span class="help">${n.input.isTouch?"Tap to interact":o.keys||"Esc to close"}</span>
      </div>`,c.append(h),l.append(c);let d=j(".pz-body",h);d.classList.add("pz-"+t);let f=j(".pz-hint",h),u=0,g=!1,y=()=>{removeEventListener("keydown",x,!0),_.dispose?.(),c.remove()},p=()=>{g||(g=!0,n.audio.play("back"),y(),a(!1))},m=()=>{g||(g=!0,_.dispose?.(),n.audio.play("chime"),n.audio.play("unlock",{delay:.1}),j(".pz-hintbtn",h).remove(),f.innerHTML="",d.innerHTML=`
        <div class="solved-banner">
          <div class="big">PUZZLE SOLVED!</div>
          ${e?`<div class="help" style="margin-top:8px">Password fragment unlocked:</div>
          <div class="frag-reveal">${Th(e)}</div>`:s||""}
          <div style="font-weight:900;font-size:20px;color:var(--pink)">${r}</div>
          <div style="margin-top:18px"><button class="btn big mint pz-continue">CONTINUE</button></div>
        </div>`,j(".pz-continue",d).onclick=()=>{n.audio.play("select"),y(),a(!0)},j(".pz-continue",d).focus())},x=v=>{if(v.code==="Escape"){v.stopPropagation(),p();return}if(g){(v.code==="Enter"||v.code==="Space")&&(v.preventDefault(),j(".pz-continue",d)?.click());return}_.onKey?.(v)};addEventListener("keydown",x,!0),j(".close",h).onclick=p,c.addEventListener("mousedown",v=>{v.target===c&&p()}),j(".pz-hintbtn",h).onclick=()=>{let v=_.hints();if(u>=v.length){n.audio.play("error");return}n.meter.add(-$f),n.audio.play("select"),f.innerHTML=v.slice(0,++u).map(w=>`<div class="hintbox">\u{1F4A1} ${w}</div>`).join(""),_.onHint?.(u)};let _=o.build({game:n,body:d,solve:m,panel:h,params:i})})}var vr="ABCDEFGHIJKLMNOPQRSTUVWXYZ",Zf=(n,t)=>vr.includes(n)?vr[(vr.indexOf(n)+t+26*10)%26]:n,ex={caesar:{title:"DINO-LOCK 3000",sub:"An encrypted message is glowing on the screen. Turn the bone wheel to decode it.",keys:"\u2190 \u2192 turn the wheel \xB7 Esc close",build({game:n,body:t,solve:e,params:i}){let s=i.shift??4,r=i.text??"NEXT PUZZLE: EGYPT WING. KEY IS REX",o=i.text?"NO CLUE THIS TIME. TURN THE WHEEL UNTIL THE MESSAGE MAKES SENSE.":"SHIFT EACH LETTER BACK BY THE NUMBER OF FINGERS ON <u>BOTH</u> OF THE KING'S HANDS.",a=[...r].map(m=>Zf(m,s)).join(""),l=0,c=null;t.innerHTML=`
        <div class="terminal">
          <div style="text-align:center;margin-bottom:8px">&gt; INCOMING TRANSMISSION \u2014 ENCRYPTED</div>
          <div class="cipher-text"></div>
          <div style="text-align:center;color:#ffcc4d">"${o}"</div>
        </div>
        <div class="wheel-wrap">
          <button class="btn rotbtn rl">\u25C0</button>
          <div class="wheel"><div class="pointer"></div><div class="ring outer"></div><div class="ring inner"></div><div class="hub">SHIFT<b>0</b></div></div>
          <button class="btn rotbtn rr">\u25B6</button>
        </div>
        <div class="help" style="text-align:center">Outer ring = encrypted letter \xB7 inner ring = real letter</div>`;let h=j(".ring.outer",t),d=j(".ring.inner",t),f=j(".hub b",t),u=j(".cipher-text",t),g=(t.querySelector(".wheel").offsetWidth||250)/2;for(let m=0;m<26;m++){let x=m/26*360,_=we("div","lt",vr[m]);_.style.transform=`rotate(${x}deg) translateY(-${g*.83}px)`,_.style.marginTop="-12px",h.append(_);let v=we("div","lt",vr[m]);v.style.transform=`rotate(${x}deg) translateY(-${g*.54}px)`,v.style.marginTop="-12px",d.append(v)}let y=()=>{d.style.transform=`rotate(${l*(360/26)}deg)`,f.textContent=l,u.innerHTML=[...a].map(m=>m===" "?'<div class="sp"></div>':`<div class="ch">${m}<small>${vr.includes(m)?Zf(m,-l):m}</small></div>`).join(""),u.classList.toggle("solved",l===s),l===s&&c==null?(n.audio.play("sparkle"),c=setTimeout(e,1100)):l!==s&&c!=null&&(clearTimeout(c),c=null)},p=m=>{l=(l+m+26)%26,n.audio.play("tick"),n.audio.play("click",{vol:.6}),y()};return j(".rl",t).onclick=()=>p(-1),j(".rr",t).onclick=()=>p(1),t.querySelector(".wheel").addEventListener("wheel",m=>{m.preventDefault(),p(m.deltaY>0?1:-1)},{passive:!1}),y(),{onKey(m){(m.code==="ArrowLeft"||m.code==="KeyA")&&p(-1),(m.code==="ArrowRight"||m.code==="KeyD")&&p(1)},hints:()=>i.text?["Click \u25B6 again and again and watch the small green letters under each big one.",`The first word is "${r.split(" ")[0]}".`,`Turn the wheel until the hub says ${s}.`]:["The plaque next to the T-Rex has a fun fact about its hands.","T. rex had TWO fingers on each hand. Two hands... 2 + 2 = ?","Turn the wheel until the hub says 4."],dispose(){clearTimeout(c)}}}},pharaoh:{title:"PHARAOH'S LOCK",sub:"Four symbols, in the right order. The four pillars in this hall know the answer \u2014 count the lines on top of each one.",keys:"Click the symbols (or keys 1\u20138) \xB7 Backspace undo \xB7 Esc close",build({game:n,body:t,solve:e,panel:i}){let s=n.save.solved.pillars||{},r=[],o=!1,a=(f,u=56,g="#1d3f8f")=>{let y=document.createElement("canvas");return y.width=y.height=u*2,$n(y.getContext("2d"),f,u,u,u*1.7,g),y},l=f=>'<span class="strokes">'+"<i></i>".repeat(f)+"</span>";t.innerHTML=`
        <div class="cartouche">${[1,2,3,4].map(f=>`<div class="cslot"><div class="cg"></div>${l(f)}</div>`).join("")}</div>
        <div class="glyph-grid">${Ji.map((f,u)=>`<button class="glyph" data-k="${f}"><span class="gi"></span><small>${u+1} \xB7 ${mr[f]}</small></button>`).join("")}</div>
        <div class="pillar-notes"><b>Your notes:</b> ${[1,2,3,4].map(f=>`<span class="pn">${l(f)} <span class="pg" data-n="${f}">?</span></span>`).join("")}</div>`;let c=[...t.querySelectorAll(".cslot")];t.querySelectorAll(".glyph").forEach(f=>{f.querySelector(".gi").append(a(f.dataset.k,30)),f.onclick=()=>d(f.dataset.k)}),t.querySelectorAll(".pg").forEach(f=>{let u=s[f.dataset.n];u&&(f.textContent="",f.append(a(u,14,"#e9c46a")),f.title=mr[u])}),c.forEach((f,u)=>f.onclick=()=>{u<r.length&&!o&&(r.splice(u),h(),n.audio.play("back"))});let h=()=>c.forEach((f,u)=>{let g=j(".cg",f);g.innerHTML="",r[u]&&g.append(a(r[u],30,"#ffd98a")),f.classList.toggle("filled",!!r[u])}),d=f=>{o||r.length>=4||(r.push(f),n.audio.play("click"),n.audio.play("tick",{delay:.05}),h(),r.length===4&&(r.every((u,g)=>u===Ef[g])?(o=!0,i.querySelector(".cartouche").classList.add("ok"),n.audio.play("sparkle"),setTimeout(e,800)):(n.audio.play("error"),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake"),setTimeout(()=>{o||(r.length=0,h())},650))))};return{onKey(f){let u=/^(?:Digit|Numpad)([1-8])$/.exec(f.code);u&&d(Ji[Number(u[1])-1]),f.code==="Backspace"&&r.length&&!o&&(f.preventDefault(),r.pop(),h(),n.audio.play("back"))},hints:()=>["Find the four pillars in this hall. Walk up to each one and press USE (E) to read it \u2014 it goes in your notes.","The lines on top of a pillar tell you its place in the code: | is first, || is second, ||| third, |||| last.","The code is: BIRD, EYE, SNAKE, ANKH."]}}},roman:{title:"AQVILA LOCK",sub:'"ENTER THE YEAR THIS MVSEVM WAS FOVNDED, CITIZEN." \u2014 in normal numbers. Each dial gets one piece of the Roman numeral.',keys:"Click \u25B2\u25BC or type digits \xB7 Esc close",build({game:n,body:t,solve:e,panel:i,params:s}){let r=s.year??1974,o=String(r).padStart(4,"0").split("").map(Number),a=nx(r),l=a.join(""),c=["thousands","hundreds","tens","ones"],h=[0,0,0,0],d=0,f=!1;t.innerHTML=`<div class="aquila">\u{1F985} S \xB7 P \xB7 Q \xB7 R \u{1F985}</div>
        <div class="roman-year">${s.year?"THE CODE IS":"FOUNDED IN"} <b>${l}</b></div>
        <div class="dials"></div>
        <div class="numeral-key">${[["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1e3]].map(([x,_])=>`<span><b>${x}</b> = ${_}</span>`).join("")}</div>
        <div class="help" style="text-align:center">Add the letters up. A small letter <b>before</b> a bigger one is taken away: <b>IV</b> = 5 \u2212 1 = 4.<br>A dial turns <b style="color:var(--mint)">green</b> when it's right!</div>`;let u=j(".dials",t),g=[],y=[];for(let x=0;x<4;x++){let _=we("div","dial",`<div class="chunk">${a[x]||"\u2014"}</div><button class="up">\u25B2</button><div class="num">0</div><button class="dn">\u25BC</button><div class="place">${c[x]}</div>`);u.append(_),y.push(_);let v=j(".num",_);g.push(v),j(".up",_).onclick=()=>m(x,h[x]+1),j(".dn",_).onclick=()=>m(x,h[x]-1),v.addEventListener("wheel",w=>{w.preventDefault(),m(x,h[x]+(w.deltaY>0?-1:1))},{passive:!1})}let p=()=>{!f&&h.every((x,_)=>x===o[_])&&(f=!0,n.audio.play("sparkle"),setTimeout(e,700))},m=(x,_)=>{h[x]=(_+10)%10,g[x].textContent=h[x],g[x].classList.remove("pop"),g[x].offsetWidth,g[x].classList.add("pop");let v=h[x]===o[x];v&&!y[x].classList.contains("ok")&&n.audio.play("chime",{vol:.35}),y[x].classList.toggle("ok",v),n.audio.play("tick"),p()};return{onKey(x){(/^Digit\d$/.test(x.code)||/^Numpad\d$/.test(x.code))&&(m(d%4,Number(x.code.slice(-1))),d++,d%4===0&&!h.every((_,v)=>_===o[v])&&(n.audio.play("error"),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake")))},hints:()=>s.year?["A dash (\u2014) means that dial is 0. Count each piece: M = 1000, C = 100, X = 10, I = 1.",`${a[0]||"\u2014"} \u2192 ${o[0]} and ${a[1]||"\u2014"} \u2192 ${o[1]}.`,`The code is ${o.join(" ")}.`]:["M is 1000 \u2014 one thousand \u2014 so the first dial is 1.","CM is 1000 take away 100 = 900, so the second dial is 9. LXX is 50 + 10 + 10 = 70, so the third dial is 7.","IV is 5 take away 1 = 4. The year is 1 9 7 4."]}}},lightsout:{title:"FUSE BOX",sub:"Switch ALL nine fuses ON to power the gate. Each switch also flips its neighbors (up, down, left, right).",keys:"Click the switches (or keys 1\u20139) \xB7 Esc close",build({game:n,body:t,solve:e,params:i}){let s=i.n??3,r=s*s,o=new Array(r).fill(!0),a=(u,g)=>{let y=Math.floor(g/s),p=g%s,m=u.slice();for(let[x,_]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){let v=y+x,w=p+_;v>=0&&v<s&&w>=0&&w<s&&(m[v*s+w]=!m[v*s+w])}return m};for(let u of i.presses??[0,4,8,5])o=a(o,u);o.every(Boolean)&&(o=a(o,Math.floor(r/2))),t.innerHTML='<div class="lights"></div><div class="help" style="text-align:center">Make every switch say <b>ON</b> (green, with a lit bulb).</div>';let l=j(".lights",t);s!==3&&l.classList.add("n"+s);let c=[],h=!1;for(let u=0;u<r;u++){let g=we("button","light");g.onclick=()=>{h||(o=a(o,u),n.audio.play("buzz"),n.audio.play("click"),d(),o.every(Boolean)&&(h=!0,setTimeout(e,600),n.audio.play("sparkle")))},l.append(g),c.push(g)}let d=()=>c.forEach((u,g)=>{u.classList.toggle("on",o[g]),u.classList.remove("hint")});d();let f=()=>{let u=null;for(let g=0;g<1<<r;g++){let y=o.slice(),p=0;for(let m=0;m<r;m++)g&1<<m&&(y=a(y,m),p++);y.every(Boolean)&&(u==null||p<u.cnt)&&(u={m:g,cnt:p})}return u?[...Array(r).keys()].filter(g=>u.m&1<<g):[]};return{onKey(u){let g=/^(?:Digit|Numpad)([1-9])$/.exec(u.code);g&&s===3&&c[Number(g[1])-1].click()},hints:()=>["Try pressing the switches in the CORNERS and the CENTER first.","The glowing dashed switch is part of the solution. Press it!","Keep asking \u2014 each hint shows another correct switch."],onHint(){let u=f();d(),u.length&&c[u[0]].classList.add("hint")}}}},slider:{title:"TORN POSTER",sub:"Someone cut up the museum's most famous poster. Slide the pieces back into place.",keys:"Click a tile next to the gap (or arrow keys) \xB7 Esc close",build({game:n,body:t,solve:e,params:i}){let s=sx(),r=[1,2,3,4,5,6,7,8,0],o=y=>[y-3,y+3,y%3?y-1:-1,y%3<2?y+1:-1].filter(p=>p>=0&&p<9),a=-1;for(let y=0;y<(i.moves??34);y++){let p=r.indexOf(0),m=o(p).filter(_=>_!==a),x=m[Math.floor(Math.random()*m.length)];[r[p],r[x]]=[r[x],r[p]],a=p}if(r.join()==="1,2,3,4,5,6,7,8,0"){let y=r.indexOf(0),p=o(y)[0];[r[y],r[p]]=[r[p],r[y]]}t.innerHTML='<div class="slider"></div><div class="help" style="text-align:center">Tiny numbers show where each piece belongs.</div>';let l=j(".slider",t),c=!1,h=[];for(let y=0;y<9;y++){let p=we("div","tile");p.onclick=()=>f(y),l.append(p),h.push(p)}let d=()=>{h.forEach((y,p)=>{let m=r[p];if(y.classList.toggle("empty",m===0),y.classList.remove("hint"),m){let x=m-1;y.style.backgroundImage=`url(${s})`,y.style.backgroundPosition=`${x%3*50}% ${Math.floor(x/3)*50}%`,y.innerHTML=`<span class="n">${m}</span>`}else y.style.backgroundImage="",y.innerHTML=""})},f=y=>{if(c)return;let p=r.indexOf(0);if(!o(p).includes(y)){n.audio.play("tick");return}[r[p],r[y]]=[r[y],r[p]],n.audio.play("click"),n.audio.play("thud",{vol:.25}),d(),r.join()==="1,2,3,4,5,6,7,8,0"&&(c=!0,d(),n.audio.play("sparkle"),setTimeout(e,700))};d();let u=null,g=()=>{u||(u=ix());let y=r.join(""),p=u.get(y);if(p==null)return-1;let m=r.indexOf(0);return p.split("").indexOf("0")!==m?p.split("").indexOf("0"):-1};return{onKey(y){let p=r.indexOf(0),m={ArrowUp:p+3,ArrowDown:p-3,ArrowLeft:p%3<2?p+1:-1,ArrowRight:p%3?p-1:-1};m[y.code]!=null&&m[y.code]>=0&&m[y.code]<9&&(y.preventDefault(),f(m[y.code]))},hints:()=>["Solve the TOP row first (1, 2, 3), then don't touch it.","The glowing tile is the best next move. Ask again for more!","Still glowing \u2014 keep following the hints and it will solve itself."],onHint(){let y=g();d(),y>=0&&h[y].classList.add("hint")}}}},simon:{title:"MEMORY LOCK",sub:"Watch the lights, then press them in the same order.",keys:"Click the pads (or keys 1\u20134) \xB7 Esc close",build({game:n,body:t,solve:e,panel:i,params:s}){let r=s.length??4,o=["RED","BLUE","GREEN","YELLOW"],a=[392,523,659,784],l=Array.from({length:r},()=>Math.floor(Math.random()*4));t.innerHTML=`<div class="simon">${o.map((v,w)=>`<button class="pad p${w}" data-i="${w}"><span>${w+1}</span></button>`).join("")}</div>
        <div class="simon-status">Watch closely\u2026</div>
        <div class="help" style="text-align:center"><button class="btn small simon-replay">\u21BB Show me again</button></div>`;let c=[...t.querySelectorAll(".pad")],h=j(".simon-status",t),d=[],f=!1,u=!1,g=!0,y=0,p=v=>new Promise(w=>setTimeout(w,v)),m=(v,w=360)=>{c[v].classList.add("lit"),n.audio.play("note",{f:a[v],dur:w/1e3}),setTimeout(()=>c[v].classList.remove("lit"),w)},x=async()=>{let v=++y;f=!0,d=[],h.textContent="Watch closely\u2026",await p(700);for(let w of l){if(!g||v!==y)return;m(w),await p(560)}!g||v!==y||(f=!1,h.textContent=`Your turn! (0/${r})`)},_=v=>{if(!(f||u)){if(m(v,220),d.push(v),d[d.length-1]!==l[d.length-1]){n.audio.play("error"),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake"),h.textContent="Oops! Watch again\u2026",f=!0,setTimeout(x,700);return}h.textContent=`Your turn! (${d.length}/${r})`,d.length===r&&(u=!0,h.textContent="Correct!",n.audio.play("sparkle"),setTimeout(e,700))}};return c.forEach((v,w)=>v.onclick=()=>_(w)),j(".simon-replay",t).onclick=()=>{u||x()},x(),{onKey(v){let w=/^(?:Digit|Numpad)([1-4])$/.exec(v.code);w&&_(Number(w[1])-1)},hints:()=>['Say the colors out loud while they flash: "red, blue, blue..." \u2014 it helps!',`It starts with ${l.slice(0,2).map(v=>o[v]).join(", ")}.`,`The whole order is: ${l.map(v=>o[v]).join(", ")}.`],dispose(){g=!1}}}}};function nx(n){let t=String(n).padStart(4,"0").split("").map(Number),e=(i,s,r,o)=>["",s,s+s,s+s+s,s+r,r,r+s,r+s+s,r+s+s+s,s+o][i];return["M".repeat(t[0]),e(t[1],"C","D","M"),e(t[2],"X","L","C"),e(t[3],"I","V","X")]}function ix(){let n="123456780",t=new Map([[n,null]]),e=[n],i=s=>[s-3,s+3,s%3?s-1:-1,s%3<2?s+1:-1].filter(r=>r>=0&&r<9);for(let s=0;s<e.length;s++){let r=e[s],o=r.indexOf("0");for(let a of i(o)){let l=r.split("");[l[o],l[a]]=[l[a],l[o]];let c=l.join("");t.has(c)||(t.set(c,r),e.push(c))}}return t}var Qa=null;function sx(){if(Qa)return Qa;let n=document.createElement("canvas");n.width=n.height=360;let t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,360);e.addColorStop(0,"#ff9a5a"),e.addColorStop(1,"#7a1f4d"),t.fillStyle=e,t.fillRect(0,0,360,360),t.fillStyle="rgba(255,255,255,0.15)";for(let s=0;s<12;s++)t.beginPath(),t.moveTo(180,200),t.arc(180,200,300,s*.52,s*.52+.26),t.fill();t.fillStyle="#d49a5c",t.beginPath(),t.arc(180,220,90,0,7),t.fill(),t.fillStyle="#ff7eb6",t.beginPath(),t.arc(180,214,82,0,7),t.fill(),t.fillStyle="#7a1f4d",t.beginPath(),t.arc(180,216,30,0,7),t.fill();let i=["#3bc9ff","#ffe14d","#7dff6b","#fff","#b86bff"];for(let s=0;s<40;s++){let r=Math.random()*7,o=40+Math.random()*36;t.save(),t.translate(180+Math.cos(r)*o,214+Math.sin(r)*o),t.rotate(Math.random()*3),t.fillStyle=i[s%5],t.fillRect(-6,-2,12,4),t.restore()}t.fillStyle="#2b1d14",t.beginPath(),t.moveTo(260,120),t.lineTo(350,90),t.lineTo(360,150),t.lineTo(300,175),t.lineTo(250,160),t.fill(),t.fillStyle="#fff";for(let s=0;s<5;s++)t.beginPath(),t.moveTo(262+s*16,160-s*3),t.lineTo(268+s*16,175-s*3),t.lineTo(274+s*16,158-s*3),t.fill();return t.fillStyle="#ff3b3b",t.beginPath(),t.arc(320,110,7,0,7),t.fill(),t.fillStyle="#fff",t.font="bold 50px Arial Black, Arial",t.textAlign="center",t.strokeStyle="#2b1d14",t.lineWidth=8,t.strokeText("DONUT DAY",180,64),t.fillText("DONUT DAY",180,64),t.font="bold 30px Arial Black, Arial",t.strokeText("MUSEUM GIFT SHOP",180,344),t.fillText("MUSEUM GIFT SHOP",180,344),Qa=n.toDataURL(),Qa}var tl=class{constructor(t){this.game=t,this.camera=t.camera,this.pos=new A,this.vel=new A,this.yaw=0,this.pitch=0,this.height=1.65,this.radius=.32,this.enabled=!1,this.lookEnabled=!0,this.bobT=0,this.stepAcc=0,this.sprinting=!1,this.speedMul=1,this.eyeOffset=0;let e=this.spot=new la(16773590,0,36,.48,.6,1.2);e.position.set(.18,-.15,.1),e.target.position.set(.05,-.2,-6),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.bias=-4e-4,e.shadow.normalBias=.02,e.shadow.camera.near=.3,e.shadow.camera.far=34,this.camera.add(e,e.target),this.fill=new Ie(16770752,0,7,2),this.fill.position.set(0,0,-3),this.camera.add(this.fill),this.flModel=$i(),this.flModel.scale.setScalar(.7),this.flModel.position.set(.24,-.22,-.45),this.camera.add(this.flModel),this.flModel.visible=!1,this._makeDust(),this.flashOn=!1,this.hasFlashlight=!1,this.flickerT=0,this.baseIntensity=32,this.swayX=0,this.swayY=0}_makeDust(){let e=new Float32Array(420);this.dustSeed=new Float32Array(140*3);for(let l=0;l<140;l++)this.dustSeed[l*3]=Math.random(),this.dustSeed[l*3+1]=Math.random(),this.dustSeed[l*3+2]=Math.random();let i=new Re;i.setAttribute("position",new ze(e,3));let s=document.createElement("canvas");s.width=s.height=32;let r=s.getContext("2d"),o=r.createRadialGradient(16,16,0,16,16,16);o.addColorStop(0,"rgba(255,240,210,1)"),o.addColorStop(1,"rgba(255,240,210,0)"),r.fillStyle=o,r.fillRect(0,0,32,32);let a=new Nr({size:.014,map:new Gn(s),transparent:!0,opacity:.32,depthWrite:!1,blending:En,sizeAttenuation:!0});this.dust=new Ko(i,a),this.dust.frustumCulled=!1,this.dust.visible=!1,this.camera.add(this.dust),this.dustT=0}updateDust(t){let e=this.flashOn&&this.flModel.visible&&["explore","cutscene","puzzle"].includes(this.game.mode);if(this.dust.visible=e,!e)return;this.dustT+=t;let i=this.dust.geometry.attributes.position,s=this.dustSeed,r=this.dustT;for(let o=0;o<i.count;o++){let a=s[o*3],l=s[o*3+1],h=-.6-(s[o*3+2]*7+r*.12*(.5+a))%7,d=Math.tan(.4)*-h*Math.sqrt(l),f=a*Math.PI*2+r*.15*(l-.5);i.setXYZ(o,.1+Math.cos(f)*d+Math.sin(r*.7+o)*.03,-.15+Math.sin(f)*d*.9+Math.cos(r*.5+o*1.3)*.03,h)}i.needsUpdate=!0}setPose(t,e,i,s=0){this.pos.set(t,0,e),this.vel.set(0,0,0),this.yaw=i,this.pitch=s,this.applyCamera(0)}faceToward(t,e){this.yaw=Math.atan2(-(t-this.pos.x),-(e-this.pos.z))}giveFlashlight(t=!0){this.hasFlashlight=!0,this.flModel.visible=!0,this.setFlash(t)}setFlash(t){this.hasFlashlight||(t=!1),this.flashOn=t,this.spot.intensity=t?this.baseIntensity:0,this.fill.intensity=t?.5:0,this.flModel.userData.lens.material.color.set(t?16774876:3355443)}flicker(t=1.2){this.flickerT=t}forward(){return new A(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}update(t,e){let i=this.game,s=i.input,r=i.save.settings;if(this.enabled&&this.lookEnabled){let l=.0022*(r.sensitivity||1);this.yaw-=s.mdx*l,this.pitch-=s.mdy*l*(r.invertY?-1:1),this.pitch=je(this.pitch,-1.45,1.45),this.swayX=hn(this.swayX,je(s.mdx*.002,-.05,.05),10,t),this.swayY=hn(this.swayY,je(s.mdy*.002,-.05,.05),10,t)}let o=0;if(this.enabled){let l=s.moveAxis();this.sprinting=s.isDown("ShiftLeft","ShiftRight")&&l.z>.1&&i.meter.value>0;let c=(this.sprinting?5.6:3.3)*this.speedMul,h=Math.sin(this.yaw),d=Math.cos(this.yaw),f=(-h*l.z+d*l.x)*c,u=(-d*l.z-h*l.x)*c,g=1-Math.exp(-10*t);if(this.vel.x+=(f-this.vel.x)*g,this.vel.z+=(u-this.vel.z)*g,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,e)for(let y=0;y<2;y++)rx(this.pos,this.radius,e);o=Math.hypot(this.vel.x,this.vel.z),s.wasPressed("KeyF")&&this.hasFlashlight&&(this.setFlash(!this.flashOn),i.audio.play("flashlight"))}else this.vel.set(0,0,0);this.bobT+=t*o*2.1,this.stepAcc+=o*t;let a=this.sprinting?2.1:1.65;if(this.stepAcc>a){this.stepAcc=0;let l=i.level,c=l?.surfaceAt?l.surfaceAt(this.pos.x,this.pos.z):l?.surface||"marble";i.audio.play("step",{surface:c,vol:this.sprinting?1.2:.9})}this.flickerT>0&&(this.flickerT-=t,this.flashOn&&(this.spot.intensity=Math.random()<.45?hr(0,8):this.baseIntensity),this.flickerT<=0&&this.flashOn&&(this.spot.intensity=this.baseIntensity)),this.applyCamera(t,o)}applyCamera(t,e=0){let i=this.camera,s=Math.min(1,e/3.3),r=Math.sin(this.bobT*2)*.045*s,o=Math.cos(this.bobT)*.03*s;i.position.set(this.pos.x+o,this.height+this.eyeOffset+r,this.pos.z),i.rotation.set(this.pitch,this.yaw,0,"YXZ"),this.flModel.position.set(.27-this.swayX+o*.4,-.25+this.swayY+r*.6,-.5),this.flModel.rotation.set(.05+this.swayY,.08-this.swayX*2,0)}};function rx(n,t,e){for(let i of e){if(!i.enabled)continue;let s=Math.max(i.minX,Math.min(n.x,i.maxX)),r=Math.max(i.minZ,Math.min(n.z,i.maxZ)),o=n.x-s,a=n.z-r,l=o*o+a*a;if(!(l>=t*t))if(l>1e-9){let c=Math.sqrt(l);n.x+=o/c*(t-c),n.z+=a/c*(t-c)}else{let c=n.x-i.minX,h=i.maxX-n.x,d=n.z-i.minZ,f=i.maxZ-n.z,u=Math.min(c,h,d,f);u===c?n.x=i.minX-t:u===h?n.x=i.maxX+t:u===d?n.z=i.minZ-t:n.z=i.maxZ+t}}}var Jf="locked-out.save.v1";function jf(){return{chapter:null,reached:[],solved:{},donuts:[],fragments:[],flags:{},settings:{master:.8,music:.6,sfx:.9,voice:"tts",subtitles:"medium",sensitivity:1,invertY:!1,fov:75,quality:"high",marker:!0,shake:!0,brightness:1.15}}}function ox(){let n=jf();try{matchMedia("(prefers-reduced-motion: reduce)").matches&&(n.settings.shake=!1)}catch{}try{let t=JSON.parse(localStorage.getItem(Jf)||"null");if(t){let e={...n,...t,settings:{...n.settings,...t.settings||{}},flags:{...t.flags||{}}};return e.fragments=(e.fragments||[]).filter(i=>gs.includes(i)),e.donuts=(e.donuts||[]).filter(i=>wa.includes(i)),e}}catch{}return n}var jh=class{constructor(t){this.g=t,this.value=100,this.drain=0,this.enabled=!1,this.onEmpty=null,this.blinkT=5}set(t){this.value=je(t,0,100),this.g.hud.setMeter(this.value)}add(t){this.set(this.value+t),t>0&&(this.fired=!1)}update(t){let e=this.g;if(!this.enabled||!["explore","runner"].includes(e.mode))return;let i=e.player?.sprinting&&e.mode==="explore"?2.4:1;this.set(this.value-this.drain*i*t);let s=this.value<22?(22-this.value)/22:0;e.hud.setDrowsy(s*.85),this.value<15&&(this.blinkT-=t,this.blinkT<0&&(this.blinkT=4+Math.random()*3,e.hud.setLids(.6,.35),setTimeout(()=>e.hud.setLids(0,.35),450),Math.random()<.5&&e.audio.play("yawn"))),this.value<=0&&!this.fired&&(this.fired=!0,this.onEmpty?.())}},el=class{constructor(){this.save=ox(),this.canvas=j("#game");let t=this.renderer=new $o({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});t.toneMapping=Vr,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=hh,qu(t.capabilities.getMaxAnisotropy()),this.camera=new qe(75,innerWidth/innerHeight,.05,400),this.camLook=new A,this.composer=new Ma(t),this.renderPass=new ba(new nr,this.camera),this.bloom=new dr(new st(innerWidth,innerHeight),.55,.45,.82),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(new Ea),this.useBloom=!0,this.input=new ga(this.canvas),this.audio=new ya,this.sched=new ma,this.hud=new Sa(this),this.dialogue=new Ra(this),this.clips=new Ca,this.menu=new ja(this),this.computer=new Za(this),this.meter=new jh(this),this.player=new tl(this),this.level=null,this.mode="boot",this.paused=!1,this.runId=0,this.shakeOffset={x:0,y:0,z:0,rx:0,rz:0},this.shakeAmp=0,this.shakeT=0,this.shakeDur=1,this.clockMin=0,this.clockOn=!1,this.unlockT=0,this.menuAngle=0,this.timeScale=1,this.clock=new ar,this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.persist();let i=document.createElement("div");i.id="gameover-scr",i.innerHTML=`<div class="go-title" style="font-size:clamp(36px,7vw,72px)">GRAPHICS HICCUP</div>
        <div class="go-sub">Your computer's graphics driver restarted. Your progress is saved.</div>
        <button class="btn big pink">\u21BB RELOAD</button>`,i.querySelector("button").onclick=()=>location.reload(),document.body.append(i)}),addEventListener("resize",()=>this.resize()),this.resize(),this.input.onKey=e=>this._onKey(e),this.input.onLockChange=e=>{!e&&this.mode==="explore"&&!this.paused&&this.pause()},this.canvas.addEventListener("click",()=>{this.mode==="explore"&&!this.paused&&this.input.requestLock()}),j("#skip-btn").addEventListener("click",()=>this.skipCutscene()),document.addEventListener("visibilitychange",()=>{document.hidden&&["explore","runner"].includes(this.mode)&&!this.paused&&this.pause()}),this.applySettings()}persist(){try{localStorage.setItem(Jf,JSON.stringify(this.save))}catch{}}resetSave(){let t=this.save.settings;this.save=jf(),this.save.settings=t,this.persist()}applySettings(){let t=this.save.settings;this.audio.setVolumes({master:t.master,music:t.music,sfx:t.sfx}),this.mode!=="runner"&&(this.camera.fov=t.fov),this.camera.updateProjectionMatrix(),t.quality==="ultra"&&(t.quality="high");let e=t.quality,i=Math.min(devicePixelRatio,e==="low"?1:1.75);this.renderer.setPixelRatio(i),this.composer.setPixelRatio(i),this.composer.setSize(innerWidth,innerHeight),this.useBloom=e==="high",this.renderer.toneMappingExposure=t.brightness??1.15,this.player.spot.castShadow=e!=="low",document.documentElement.style.setProperty("--sub-size",t.subtitles==="large"?"28px":innerWidth<720?"17px":"22px"),this.persist()}resize(){this.renderer.setSize(innerWidth,innerHeight,!1),this.composer?.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()}async boot(){this.clips.init(),this.menuLevel=new ni(this,{time:"night"}),this.menuLevel.persistent=!0,this.setLevel(this.menuLevel),this.renderer.compile(this.menuLevel.scene,this.camera),this.renderer.setAnimationLoop(()=>this.loop())}start(){this.audio.init();let t=new URLSearchParams(location.search).get("chapter");t&&Ti.find(e=>e.id===t)?this.startChapter(t,{mode:"fresh"}):this.toMenu()}loop(){let t=this.clock.getDelta(),e=Math.min(.05,t),i=e*this.timeScale,s=this.input;if(this._perfCheck(Math.min(t,.5)),s.isTouch&&s.wasPressed("Escape")&&["explore","runner"].includes(this.mode)&&this.togglePause(),!this.paused&&(this.sched.update(i),this.mode==="explore"?(this.player.update(i,this.level?.colliders),this._interact(),!s.isTouch&&!s.locked?(this.unlockT+=e,this.unlockT>.6&&this.hud.setPrompt(s.dragging?null:"Click (or drag) to look around")):this.unlockT=0):this.mode==="menu"&&this._menuCam(i),this.level?.update(i),this.player.updateDust(i),this.meter.update(i),this._updateShake(i),this.clockOn)){this.clockMin+=i/4;let a=Math.floor(this.clockMin)%(24*60),l=Math.floor(a/60),c=a%60;this.hud.setClock(`${(l+11)%12+1}:${String(c).padStart(2,"0")} ${l<12?"AM":"PM"}`)}this.dialogue.update(e),this.hud.update();let r=this.camera,o=this.shakeOffset;r.position.x+=o.x,r.position.y+=o.y,r.rotation.z+=o.rz,this.level&&(this.useBloom?(this.renderPass.scene=this.level.scene,this.composer.render(e)):this.renderer.render(this.level.scene,r),this.level.renderExtra?.(this.renderer)),r.position.x-=o.x,r.position.y-=o.y,r.rotation.z-=o.rz,s.endFrame()}_perfCheck(t){if(this.paused||!["explore","runner"].includes(this.mode)||document.hidden){this._perf=null;return}let e=this._perf||(this._perf={t:0,n:0,skip:1});if(e.skip>0){e.skip-=t;return}if(e.t+=t,e.n++,e.t<4)return;let i=e.n/e.t;this._perf={t:0,n:0,skip:0};let s=this.save.settings;i<28&&s.quality!=="low"&&!this.autoLowered?.[s.quality]&&((this.autoLowered||(this.autoLowered={}))[s.quality]=!0,s.quality=s.quality==="high"?"medium":"low",this.applySettings(),this.hud.toast(`\u2699\uFE0F Graphics set to <b>${s.quality==="medium"?"Medium":"Fast"}</b> for smoother play (change it in Settings)`,"gold"))}_interact(){let t=this.level;if(!t||!this.player.enabled)return;let e=this.camera,i=this.player.forward(),s=null,r=.82,o=new A;for(let a of t.interactables){if(!a.enabled)continue;o.copy(a.pos).sub(e.position);let l=o.length();if(l>a.radius)continue;let c=o.normalize().dot(i)+(l<1.2?.15:0);c>r&&(s=a,r=c)}this.unlockT<=.6&&this.hud.setPrompt(s?s.prompt:null),(s&&this.input.wasPressed("KeyE","Enter")||s&&this.input.locked&&this.input.wasPressed("Mouse0"))&&(this.audio.play("click"),s.onUse?.())}_menuCam(t){this.menuAngle+=t*.045;let e=this.menuAngle,i=At.trex;this.camera.position.set(i.x+Math.sin(e)*12.5,3.2+Math.sin(e*.7)*.8,i.z+Math.cos(e)*12.5),this.camera.lookAt(i.x,4.2,i.z),this.player.spot.target.position.set(Math.sin(this.menuAngle*3)*1.5,-.1,-6)}_updateShake(t){let e=this.shakeOffset;if(this.shakeT>0){this.shakeT-=t;let i=this.shakeAmp*Math.max(0,this.shakeT/this.shakeDur);e.x=hr(-1,1)*i*.3,e.y=hr(-1,1)*i*.3,e.rz=hr(-1,1)*i*.04}else e.x=e.y=e.rz=0,this.shakeAmp=0}shake(t,e=.5){this.save.settings.shake||(t*=.15),t>=this.shakeAmp*Math.max(0,this.shakeT/this.shakeDur)&&(this.shakeAmp=t,this.shakeT=e,this.shakeDur=e)}_onKey(t){(t.code==="Escape"||t.code==="KeyP")&&(this.mode==="cutscene"&&t.code==="Escape"?this.skipCutscene():["explore","runner"].includes(this.mode)&&this.togglePause()),this.mode==="cutscene"&&(t.code==="Space"||t.code==="Enter")&&this.dialogue.skipLine()}setMode(t){this.mode=t;let e=document.activeElement;e&&e!==document.body&&e.blur&&!e.closest?.(".modal")&&e.blur(),document.body.classList.toggle("playing",t!=="menu"&&t!=="boot");let i=t==="explore";this.player.enabled=i,this.hud.crosshair(i),i||this.hud.setPrompt(null),this.input.showTouch(i?"explore":t==="runner"?"runner":"off"),this.dialogue.allowClickSkip=t==="cutscene",i?this.input.requestLock():this.input.exitLock()}togglePause(){this.paused?this.resume():this.pause()}pause(){if(this.paused)return;this.paused=!0,this.dialogue.setPaused(!0),this.input.exitLock(),this.audio.ctx?.suspend?.();let t=this.pauseModal=Ms(`<h2>PAUSED</h2><div class="sub">${this.chapterName()}</div>
      <div class="chapters">
        <button class="btn big pink" data-a="resume">\u25B6 RESUME</button>
        <button class="btn" data-a="settings">SETTINGS</button>
        <button class="btn" data-a="controls">CONTROLS</button>
        <button class="btn" data-a="restart">RESTART CHAPTER</button>
        <button class="btn ghost" data-a="menu">QUIT TO MENU</button>
      </div>`,()=>{this.paused&&this.resume()});t.panel.querySelector("[data-a=resume]").onclick=()=>t.close(),t.panel.querySelector("[data-a=settings]").onclick=()=>{this.audio.ctx?.resume?.(),this.menu.settings()},t.panel.querySelector("[data-a=controls]").onclick=()=>this.menu.controls(),t.panel.querySelector("[data-a=restart]").onclick=()=>{this.paused=!1,t.close(),this.startChapter(this.save.chapter||"intro",{mode:"continue"})},t.panel.querySelector("[data-a=menu]").onclick=()=>{this.paused=!1,t.close(),this.toMenu()}}resume(){if(this.paused){if(this.paused=!1,this.audio.ctx?.resume?.(),this.dialogue.setPaused(!1),this.pauseModal){let t=this.pauseModal;this.pauseModal=null,t.close()}this.clock.getDelta(),this.mode==="explore"&&this.input.requestLock()}}chapterName(){return Ti.find(t=>t.id===this.save.chapter)?.name||""}setLevel(t){this.level&&(this.level.scene.remove(this.camera),this.level.persistent||this.level.dispose()),this.level=t,t.scene.add(this.camera),this.sched.reset()}async loadLevel(t){this.setLevel(t);try{this.renderer.compile(t.scene,this.camera)}catch{}this.clock.getDelta()}_guard(t){let e=this.runId;return Promise.resolve(t).then(i=>e===this.runId?i:new Promise(()=>{}))}wait(t){return this._guard(this.sched.wait(t))}tween(t,e,i){return this._guard(this.sched.tween(t,e,i))}until(t){return this._guard(this.sched.until(t))}say(t,e){return this._guard(this.dialogue.say(t,e))}async fadeOut(t=.5){this.hud.setFade(1,t),await this._guard(new Promise(e=>setTimeout(e,t*1e3+30)))}async fadeIn(t=.8){this.hud.setFade(0,t),await this.wait(t)}async cutscene(t){this.setMode("cutscene"),this.hud.setLetterbox(!0),j("#skip-btn").classList.remove("off"),this.hud.show(!0);try{await t()}finally{this.sched.skipping=!1,this.hud.setLetterbox(!1),j("#skip-btn").classList.add("off"),this.hud.caption("")}}skipCutscene(){this.mode!=="cutscene"||this.sched.skipping||(this.audio.play("whoosh",{vol:.4}),this.sched.skipAll(),this.dialogue.skipLine(),this.computer.typingSkip=!0)}camTo(t,e,i=1.5,s=Dn.inOut){let r=this.camera.position.clone(),o=this.camLook.clone(),a=new A(...t),l=new A(...e);return this.tween(i,c=>{this.camera.position.lerpVectors(r,a,c),this.camLook.lerpVectors(o,l,c),this.camera.lookAt(this.camLook)},s)}camSet(t,e){this.camera.position.set(...t),this.camLook.set(...e),this.camera.lookAt(this.camLook)}objective(t,e){this.hud.objective(t,e)}addFragment(t){this.save.fragments.includes(t)||this.save.fragments.push(t),this.persist(),this.hud.setFragments(this.save.fragments)}collectDonut(t,e=20){if(this.meter.add(e),this.audio.play("munch"),this.audio.play("pickup"),!wa.includes(t)){this.hud.toast(`\u{1F369} Donut! <b>+${e}%</b>`);return}this.save.donuts.includes(t)||this.save.donuts.push(t),this.persist(),this.hud.toast(`\u{1F369} Donut found! <b>+${e}%</b> <span style="opacity:.7">(${this.save.donuts.length}/${Ei} hidden donuts)</span>`),this.save.donuts.length===Ei&&setTimeout(()=>{this.hud.toast("\u{1F3C6} <b>DONUT HUNTER</b> \u2014 you found every hidden donut!","gold"),this.audio.play("chime")},1200)}foundSecret(){this.hud.toast("\u{1F92B} You found a <b>secret room</b>!","pink"),this.save.flags.secretLine||(this.save.flags.secretLine=!0,this.persist(),this.wait(1.2).then(()=>this.say("guard46")))}async openPuzzle(t,e,{params:i,reward:s=35,banner:r}={}){this.setMode("puzzle");let o=s>=30?"+1 DONUT \u{1F369}":`+${s}% DONUT \u{1F369} <span style="opacity:.7">(the archive donuts are getting smaller\u2026)</span>`,a=await this._guard(Kf(this,t,{fragment:e,params:i,banner:r,rewardText:o}));return this.setMode("explore"),a&&(this.meter.add(s),this.audio.play("munch",{delay:.2}),e?(this.addFragment(e),this.hud.toast(`\u{1F9E9} Puzzle solved! <b>+1 donut</b> \xB7 fragment <b style="color:var(--mint)">${e}</b>`,"mint")):this.hud.toast(`\u{1F9E9} Puzzle solved! <b>+${s}%</b> \u{1F369} \xB7 no fragment here...`,"mint")),a}checkpoint(t){this.save.chapter=t,this.save.reached.includes(t)||this.save.reached.push(t),this.persist()}setClock(t,e=!0){this.clockMin=t,this.clockOn=e,this.hud.showClock(e)}async failed(t,e){this.setMode("cutscene"),this.meter.enabled=!1,this.audio.stopMusic(.5),this.audio.play("wahwah"),this.dialogue.stop(),await this._guard(Ka(this,{title:t,sub:e,buttons:[{label:"\u21BB TRY AGAIN",value:"retry",cls:"pink"},{label:"MENU",value:"menu",cls:"ghost"}]}))==="retry"?this.startChapter(this.save.chapter,{mode:"continue"}):this.toMenu()}resetHud(){let t=this.hud;t.show(!1),t.showMeter(!1),t.showClock(!1),t.objective(null),t.setFragments([],{show:!1}),t.showChase(!1),t.showArrow(!1),t.setSpeedLines(0),j("#mirror").classList.add("off"),t.setPrompt(null),t.controlsHint(null),t.setDrowsy(0),t.setLids(0,0),t.setLetterbox(!1),t.setDonutCount(null),t.caption(""),t.loadingTip(null),j("#minimap").classList.add("off"),j("#skip-btn").classList.add("off"),j("#modal-root").innerHTML="",this.computer.close()}async startChapter(t,{mode:e="fresh"}={}){this.runId++,this.paused=!1,this.timeScale=1,this.menu.hide(),this.dialogue.stop(),this.setMode("loading"),await this._guard(this.fadeOut(.45)),this.resetHud(),this.player.eyeOffset=0,this.player.speedMul=1,this.meter.enabled=!1,this.meter.onEmpty=null,this.meter.fired=!1;let i=Zh[t];if(e==="fresh")this.save.fragments=i.fragments.slice(),["intro","dino","egypt","roman","chase","maze"].includes(t)&&(this.save.solved={}),this.meter.set(i.meter);else if(e==="continue"){this.meter.set(Math.max(60,i.meter*.85));for(let s of i.fragments)this.save.fragments.includes(s)||this.save.fragments.push(s)}else this.meter.set(Math.max(45,this.meter.value));this.checkpoint(t),this.audio.setReverb(.5),t!=="intro"&&(this.hud.loadingTip(Ti.find(s=>s.id===t)?.name,Gf(t)),await this._guard(new Promise(s=>requestAnimationFrame(()=>setTimeout(s,40))))),Vf(this,t,e)}toMenu(){this.runId++,this.paused=!1,this.timeScale=1,this.dialogue.stop(),this.resetHud(),this.meter.enabled=!1,this.setLevel(this.menuLevel),this.setMode("menu"),this.player.hasFlashlight=!0,this.player.flModel.visible=!1,this.player.setFlash(!0),this.player.spot.target.position.set(0,-.1,-6),this.camera.fov=60,this.camera.updateProjectionMatrix(),this.audio.setAmbient("night"),this.audio.setReverb(.6),this.hud.setFade(0,1.2),this.menu.show()}};function Qf(n){console.error(n);let t=j("#boot");t&&(t.classList.remove("off","loading"),t.querySelector(".boot-inner").innerHTML=`
    <div class="boot-logo" style="font-size:48px">UH OH \u{1F369}</div>
    <div class="boot-tips" style="max-width:520px">The game couldn't start. Your browser might not support WebGL, or something broke.<br><br>
    <code style="color:#ff8a8a">${String(n?.message||n).replace(/</g,"&lt;")}</code></div>`)}addEventListener("DOMContentLoaded",async()=>{let n=j("#boot"),t;try{t=new el,window.game=t}catch(i){Qf(i);return}let e=t.boot().catch(Qf);j("#boot-start").addEventListener("click",async()=>{n.classList.add("loading"),t.audio.init(),t.audio.play("select");try{if("speechSynthesis"in window){let i=new SpeechSynthesisUtterance(" ");i.volume=0,speechSynthesis.speak(i)}}catch{}await e,n.style.transition="opacity .8s",n.style.opacity="0",setTimeout(()=>n.classList.add("off"),800),t.start()})});})();
