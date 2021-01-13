var allEventsMainConainer = document.querySelectorAll('.events__right--maincontainer');
Array.from(allEventsMainConainer).forEach( (maincontainer,index) => {
    let subcontainer = maincontainer.children[0];
    let card = subcontainer.children[0];
    let buttons = maincontainer.parentElement.querySelectorAll('.events__right--buttons .events__right--button');
    let hit = 'left';
    let timeout;

    function animate(){
        let offset = maincontainer.getBoundingClientRect().left;

        let offsetwidth = maincontainer.getBoundingClientRect().width;
        let subleft = subcontainer.getBoundingClientRect().left;
        let subwidth = subcontainer.getBoundingClientRect().width;
        let cardwidth = card.getBoundingClientRect().width+20;

        if(hit == 'left'){
            let spaceleft = subleft - offset + subwidth - offsetwidth;
            if( spaceleft > cardwidth ){
                subcontainer.style.left = subleft - offset - cardwidth+'px';
            }else{
                hit = "right";
                subcontainer.style.left = subleft - offset - spaceleft+'px';
            }
        }
        else{
            let spaceleft = offset - subleft;
            if( spaceleft > cardwidth ){
                subcontainer.style.left = subleft - offset + cardwidth +'px';
            }else{
                subcontainer.style.left = '0px';
                hit = 'left';
            }
        }

        timeout = setTimeout(
            function(){
                animate();
            },6500
        )

    }

    timeout = setTimeout(
        function(){
            animate();
        },6500
    )

    Array.from(buttons).forEach( (button) => {

        function animatebybutton(){
            clearTimeout(timeout);
            let offset = maincontainer.getBoundingClientRect().left;
            let offsetwidth = maincontainer.getBoundingClientRect().width;
            let subleft = subcontainer.getBoundingClientRect().left;
            let subwidth = subcontainer.getBoundingClientRect().width;
            let cardwidth = card.getBoundingClientRect().width+20;

            if(button.classList.contains('left')){
                let spaceleft = subleft - offset + subwidth - offsetwidth;
                if( spaceleft > cardwidth ){
                    subcontainer.style.left = subleft - offset - cardwidth+'px';
                }else{
                    hit = "right";
                    subcontainer.style.left = subleft - offset - spaceleft+'px';
                }
            }
            else{
                let spaceleft = offset - subleft;
                if( spaceleft > cardwidth ){
                    subcontainer.style.left = subleft - offset + cardwidth +'px';
                }else{
                    subcontainer.style.left = '0px';
                    hit = 'left';
                }
            }

            timeout = setTimeout(
                function(){
                    animate()
                },6500
            )

        }


        button.addEventListener( 'click', animatebybutton );
    } );
} );