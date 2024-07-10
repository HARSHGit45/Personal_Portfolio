








function changeprofs()
{
  const texts=["Tech Enthusiast","AIML Enthusiast","WEB Developer"];
  const tspeed=100;
  const espeed=50;
  const ptime=1500;
  const prof = document.querySelector('.profs');

  let ti=0;
  let ci=0;
  let isdel = false;


  function type()
  {
    const curr = texts[ti];

    if(!isdel && ci<curr.length){
      prof.textContent+=curr[ci];
      ci++;
      setTimeout(type,tspeed);
    }
    else if(isdel && ci>0)
    {
      prof.textContent=curr.substring(0,ci-1);
      ci--;
      setTimeout(type,espeed);
    }
    else{
      isdel=!isdel;
      if(!isdel)
      {
        ti =(ti+1)%texts.length;
      }
      setTimeout(type,ptime);


    }

   
  }
  type();
}





changeprofs();