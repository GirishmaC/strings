var Count_Vowels= (S) => 
{
  
    const vowels = S.match(/[aeiou]/gi).length;

    return vowels;  
};
 