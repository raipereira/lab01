
(() => {
    "use strict";
  
    $(() => {
      $("#btn-start").click(startAnimation);
      $("#btn-stop").click(stopAnimation);
      $("#animation").change(selectAnimation);
      $("#animation-size").change(changeAnimationSize);
      $("#turbo").change(turbo);
    });
  
    let animation = null;
    let timer = null;
    let ANIMATION_INDEX = 0;
    let ANIMATION_SPEED = 250;
    
    const animate = (speed) => {
      animation = ANIMATIONS[$("#animation").val()].split("=====\n");
      if (timer !== null) return;
      
      timer = setInterval(()=> {
        if(ANIMATION_INDEX < animation.length){
          $("#text-area").val(animation[ANIMATION_INDEX]);
          ANIMATION_INDEX++;
        }
        if(ANIMATION_INDEX >= animation.length) ANIMATION_INDEX = 0;
      }, speed); 
    }
  
    const startAnimation = () => {
      $("#btn-start").prop('disabled', true);
      $("#btn-stop").prop('disabled', false);
      $("#text-area").prop('disabled', true);
      $("#animation").prop('disabled', true);
      animate(ANIMATION_SPEED);
    }
  
    const stopAnimation = () => {
      $("#btn-start").prop('disabled', false);
      $("#btn-stop").prop('disabled', true);
      $("#text-area").prop('disabled', false);
      $("#animation").prop('disabled', false);
      clearInterval(timer);
      timer = null;
    }
  
    const selectAnimation = () => {
      let textArea = $("#text-area");
      textArea.val(ANIMATIONS[$("#animation").val()].split("=====\n")[0]);
      ANIMATION_INDEX = 0;
    }    
  
    const changeAnimationSize = () => {
      let textSize = $("#animation-size").val();
      $("#text-area").css("font-size", textSize);
    }
  
    const turbo = () => {
      if($("#turbo").prop('checked')){
        ANIMATION_SPEED = 50;
        clearInterval(timer);
        timer = null;
        if($("#btn-start").prop('disabled')){
          animate(ANIMATION_SPEED)
        }
      }else{
        ANIMATION_SPEED = 250;
        if(!$("#btn-start").prop('disabled')){
          stopAnimation();
        }else{
          clearInterval(timer);
          timer = null;
          animate(ANIMATION_SPEED);
        }
      }
    }
  })();