var Game_Winner = (S) => 
{
  var a=0,d=0
  for(let i=0;i<S.length;i++)
  {
    if(S[i]=='A')
    a++
    else
    d++
  }
  if(a>d)
  return 'Aditya'
  else if(a<d)
  return 'Danish'
  else
  return 'Draw'
}