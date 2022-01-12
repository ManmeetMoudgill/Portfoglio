$(document).ready(function(){
    $("#toggle_menu").click(function(){
       $(this).fadeOut("fast",()=>{
          
           $("#close_menu").removeClass("hidden");
           $("#close_menu").addClass("flex","transition-all");
           $("#open_menu").addClass('translate-x-0','transition-all','transform');
           $("#open_menu").removeClass('translate-x-full');
       });
      });


      /* CLOSE THE MENU */
      $("#close_menu").click(()=>{
         
          $("#close_menu").addClass("hidden");
          $("#close_menu").removeClass("flex");
          $("#toggle_menu").fadeIn("fast");
          $("#open_menu").removeClass('translate-x-0');
          $("#open_menu").addClass('translate-x-full');
         
      })


      var tab1=document.getElementById('tab-1');
      var tab2=document.getElementById('tab-2');
      var tab3=document.getElementById('tab-3');
      var tab4=document.getElementById('tab-4');

      tab1.addEventListener('click',()=>{
          if(tab1.classList.contains('active_class') && (tab1.classList.contains('border-gray-400'))){

          }else if(!tab1.classList.contains('active_class')){
              tab1.classList.add('active_class')
              tab1.classList.remove('border-gray-400')
          }
          tab2.classList.remove('active_class')
          tab3.classList.remove('active_class')
          tab4.classList.remove('active_class')


          tab2.classList.add('border-gray-400')
          tab3.classList.add('border-gray-400')
          tab4.classList.add('border-gray-400')
      })

    //   script here for tab2
      
      tab2.addEventListener('click',()=>{
          if(!tab2.classList.contains('active_class')){
              tab2.classList.add('active_class')
              tab2.classList.remove('border-gray-400')
          }
          tab1.classList.remove('active_class')
          tab3.classList.remove('active_class')
          tab4.classList.remove('active_class')

          //adding border-gray classes 
          tab1.classList.add('border-gray-400')
          tab3.classList.add('border-gray-400')
          tab4.classList.add('border-gray-400')
      })
//script for tab 3
      tab3.addEventListener('click',()=>{
        if(!tab3.classList.contains('active_class')){
            tab3.classList.add('active_class')
            tab3.classList.remove('border-gray-400')

        }

        tab1.classList.remove('active_class')
          tab2.classList.remove('active_class')
          tab4.classList.remove('active_class')


          tab1.classList.add('border-gray-400')
          tab2.classList.add('border-gray-400')
          tab4.classList.add('border-gray-400')
    })


    //script for tab 4
    tab4.addEventListener('click',()=>{
        if(!tab4.classList.contains('active_class')){
            tab4.classList.add('active_class')
            tab4.classList.remove('border-gray-400')

        }

        tab2.classList.remove('active_class')
        tab3.classList.remove('active_class')
        tab1.classList.remove('active_class')



          tab2.classList.add('border-gray-400')
          tab3.classList.add('border-gray-400')
          tab1.classList.add('border-gray-400')
    })


     
        
         
        

          
    
      
     
})