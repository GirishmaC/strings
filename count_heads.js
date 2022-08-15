var Count_Occ = (s) => 
{
   let count=1;
let string='';
let output="";
for(let i=0;i<s.length;i++){
for(j=i+1;j<s.length;j++){
if(s[i]==s[j]){
count++;
}
}
if(count>1){
string=s[i];
output=output+" "+s[i]+count;
s=s.replace(string,' ');
s=s.split(string).join('');
}
count=1;
}
return output.split(' ').sort().join(''); 
};
 