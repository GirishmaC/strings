var Count_Vowels= (S) => 
{
     S=S.toUpperCase();
      let vowels=0
      let i
      for(i=0;i<S.length;i++){
        if(S[i]=='A' || S[i]=='E' || S[i]=='O' || S[i]=='I' || S[i]=='U'){
          vowels=vowels+1
        }
      }
      return vowels
};
var Count_Consonants= (S) => 
{
       S=S.toUpperCase();
      let vowels=0
      let consonant=0
      let i
      for(i=0;i<S.length;i++){
        if(S[i]=='A' || S[i]=='E' || S[i]=='O' || S[i]=='I' || S[i]=='U'){
          vowels=vowels+1
        }
        else{
          consonant=consonant+1
        }
      }
      return consonant
};
