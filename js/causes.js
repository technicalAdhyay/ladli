var allCausesContainer = document.querySelectorAll('.causes__container');
Array.from(allCausesContainer).forEach( (maincontainer,index) => {
    let offsetWidth = maincontainer.getBoundingClientRect().width;
    let container = maincontainer.children[0];
    let containerLeft = 0;
    let containerWidth = container.getBoundingClientRect().width;
    let card = container.children[0];
    let cardWidth = card.getBoundingClientRect().width+20;
    let containerCanLeft = containerWidth-offsetWidth;

    let direction = true;

    function scrollRight(){

        if(direction){
            if( containerLeft + cardWidth < containerCanLeft ){
                containerLeft = containerLeft + cardWidth;
                maincontainer.scrollBy({
                    left: cardWidth,
                    behavior:'smooth'
                })
            }else{
                containerLeft = containerCanLeft;
                maincontainer.scrollBy({
                    left: containerCanLeft - maincontainer.scrollLeft,
                    behavior:'smooth'
                })
                direction = false;
            }
        }else{
            containerLeft = 0;
            direction = true;
            maincontainer.scrollBy({
                left: -containerCanLeft,
                behavior:'smooth'
            })
        }

        
            //console.log(containerLeft);
    }

    var timeFunc = setInterval(
        function(){
            scrollRight();
        },8000
    );

    maincontainer.addEventListener( 'scroll',function(e){
        containerLeft = e.target.scrollLeft;
        //console.log(containerLeft);
    } )

} );