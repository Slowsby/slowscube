import{A as h}from"./index-BKa_qxEF.js";function A(g,b){const s=[],n=[];for(const t of b.split(`
`)){const a=t.split(" ");if(!t.startsWith("SetOrder ")){if(t.startsWith("Alg ")){const e=h.fromString(t.substring(4));n.push({alg:e,transformation:g.algToTransformation(e)})}else if(t.startsWith("SubgroupSizes "))for(let e=1;e<a.length;e++)s.push(parseInt(a[e]))}}const u={ordering:new Array(s.length)},f=[];let l=0;f.push(0);const d=h.fromString(""),D=g.identityTransformation();for(let t=0;t<s.length;t++)l+=s[t],f.push(l),n.splice(l-1,0,{alg:d,transformation:D});if(n.length!==l)throw Error(`Bad sgs; expected ${l-s.length} algs but saw ${n.length-s.length}`);const p={};for(const t of g.definition.orbits)p[t.orbitName]=new Array(t.numPieces).fill(!1);for(let t=s.length-1;t>=0;t--){const a=[];for(let o=f[t];o<f[t+1];o++){const m=n[o].transformation;for(const i of g.definition.orbits)for(let r=0;r<i.numPieces;r++)(m.transformationData[i.orbitName].permutation[r]!==r||m.transformationData[i.orbitName].orientationDelta[r]!==0)&&(p[i.orbitName][r]||(a.push({orbitName:i.orbitName,permutationIdx:r}),p[i.orbitName][r]=!0))}const e={};for(let o=f[t];o<f[t+1];o++){const m=n[o].transformation.invert();let i="";for(let r=0;r<a.length;r++){const c=a[r];i=`${i} ${m.transformationData[c.orbitName].permutation[c.permutationIdx]} ${m.transformationData[c.orbitName].orientationDelta[c.permutationIdx]}`}e[i]=n[o],n[o].alg=n[o].alg.invert(),n[o].transformation=n[o].transformation.invert()}u.ordering[t]={pieceOrdering:a,lookup:e}}return u}export{A as p};
