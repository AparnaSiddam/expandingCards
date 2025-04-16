const panels = document.querySelectorAll('.panel');
    panels.forEach(function(panel){
            panel.addEventListener('mouseenter', function(){
                updateClass();
                panel.classList.add('active');
            })
           });
         

function updateClass(){
    panels.forEach(function(panel){
        panel.classList.remove('active');
    });
}

