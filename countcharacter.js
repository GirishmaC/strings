const countCharacters = (S) => 
{
  var array1=0,array2=0;
  
    for(let i=0;i<S.length;i++)
    {
         if(S[i]=='A')
         array1++
         else if(S[i]=='D')
         array2++
    }
    var B = new Array(array1,array2)
    return B
};
 