// 1 Slideshow  NECESSARY SELECTORS

const productContainer01 = document.querySelector('#product-container01');
const nxtBtn01 = document.querySelector('#nxt-btn01');
const preBtn01 = document.querySelector('#pre-btn01');
currentIndicatorIndexSliderShow01 = 0;
let sliderShowIndicatorFlex01 = document.querySelector("#slider-show-indicator-flex01");
let transformatTablet01 = false;
let transformatTel01 = false;
let indicatorTimeout01;

// BUTONS CLICK EVENTS 1 CAROUSEL 

nxtBtn01.addEventListener('click', () => {
    
    scrollLeft(productContainer01);

    let countofIndicators = count_indicators(sliderShowIndicatorFlex01);
    
    if(currentIndicatorIndexSliderShow01 < countofIndicators - 1)
    {
        currentIndicatorIndexSliderShow01 += 1;
        remove_Current_from_All(sliderShowIndicatorFlex01);
        update_Indicator(currentIndicatorIndexSliderShow01, sliderShowIndicatorFlex01);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn01, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn01, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn01, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn01, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex01, 350, indicatorTimeout01);
    

})

preBtn01.addEventListener('click', () => {
    
    scrollRight(productContainer01);
    
    if(currentIndicatorIndexSliderShow01 > 0)
    {
        currentIndicatorIndexSliderShow01 -= 1;
        remove_Current_from_All(sliderShowIndicatorFlex01);
        update_Indicator(currentIndicatorIndexSliderShow01, sliderShowIndicatorFlex01);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn01, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn01, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn01, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn01, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex01, 350, indicatorTimeout01);
    
    
    
})

// INITIAL RESPONSIVE 1 Slideshow

if(window.innerWidth >= 1280)
{
    sliderShowIndicatorFlex01.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators01 = Array.from(sliderShowIndicatorFlex01.children);
    transformatTablet01 = false;

    
}
if(window.innerWidth <= 1280 && transformatTablet01 == false && window.innerWidth >= 1021)
{
    sliderShowIndicatorFlex01.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators01 = Array.from(sliderShowIndicatorFlex01.children);;
    transformatTablet01 = true;
    transformatTel01 = false;
}
if(window.innerWidth <= 1020 && transformatTel01 == false)
{
    sliderShowIndicatorFlex01.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    create_Indicator(sliderShowIndicatorFlex01);
    sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators01 = Array.from(sliderShowIndicatorFlex01.children);
    transformatTablet01 = false;
    transformatTel01 = true;
       
}

let sliderShowIndicators01 = Array.from(sliderShowIndicatorFlex01.children);
sliderShowIndicators01.forEach(indicator =>
        
        indicator.addEventListener('click', (e) =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex01);

            remove_Current_from_All(sliderShowIndicatorFlex01);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex01);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer01);
            currentIndicatorIndexSliderShow01 += neededScrolls;
            dezactivate_All_Arrows(preBtn01, nxtBtn01);
            dezactivate_Indicators(sliderShowIndicatorFlex01, 550, indicatorTimeout01);
        }

))

// ACTUAL RESPONSIVE DESIGN 1 Slideshow

window.addEventListener('resize', () =>
{
    
    if((window.innerWidth >= 1280) && (transformatTablet01 == true || transformatTel01 == true))
    {
        sliderShowIndicatorFlex01.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
        transformatTablet01 = false;
        transformatTel01 = false;
        scroll4Right(productContainer01);
        currentIndicatorIndexSliderShow01 = 0;
    }
    if(window.innerWidth <= 1280 && transformatTablet01 == false && window.innerWidth >= 1021)
    {
        sliderShowIndicatorFlex01.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
        transformatTablet01 = true;
        transformatTel01 = false;
        scroll4Right(productContainer01);
        currentIndicatorIndexSliderShow01 = 0;
    }
    if(window.innerWidth <= 1020 && transformatTel01 == false)
    {
        sliderShowIndicatorFlex01.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        create_Indicator(sliderShowIndicatorFlex01);
        sliderShowIndicatorFlex01.children[0].children[0].classList.add('current-indicator');
        transformatTablet01 = false;
        scroll4Right(productContainer01);
        transformatTel01 = true;
        currentIndicatorIndexSliderShow01 = 0;
    }

    let sliderShowIndicators01 = Array.from(sliderShowIndicatorFlex01.children);
    

    sliderShowIndicators01.forEach(indicator =>
        
        indicator.addEventListener('click', () =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex01);

            remove_Current_from_All(sliderShowIndicatorFlex01);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex01);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer01);
            currentIndicatorIndexSliderShow01 += neededScrolls;
            dezactivate_All_Arrows(preBtn01, nxtBtn01);
            clearTimeout(indicatorTimeout01);
            dezactivate_Indicators(sliderShowIndicatorFlex01, 550, indicatorTimeout01);

        }


    
    ))
})

// 2 Carousel

// 2 Slideshow  NECESSARY SELECTORS

const productContainer02= document.querySelector('#product-container02');
const nxtBtn02 = document.querySelector('#nxt-btn02');
const preBtn02 = document.querySelector('#pre-btn02');
currentIndicatorIndexSliderShow02 = 0;
let sliderShowIndicatorFlex02 = document.querySelector("#slider-show-indicator-flex02");
let transformatTablet02 = false;
let transformatTel02 = false;
let indicatorTimeout02;

// BUTONS CLICK EVENTS 2 CAROUSEL 

nxtBtn02.addEventListener('click', () => {
    
    scrollLeft(productContainer02);

    let countofIndicators = count_indicators(sliderShowIndicatorFlex02);
    
    if(currentIndicatorIndexSliderShow02 < countofIndicators - 1)
    {
        currentIndicatorIndexSliderShow02 += 1;
        remove_Current_from_All(sliderShowIndicatorFlex02);
        update_Indicator(currentIndicatorIndexSliderShow02, sliderShowIndicatorFlex02);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn02, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn02, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn02, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn02, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex02, 350, indicatorTimeout02);
    

})

preBtn02.addEventListener('click', () => {
    
    scrollRight(productContainer02);
    
    if(currentIndicatorIndexSliderShow02 > 0)
    {
        currentIndicatorIndexSliderShow02 -= 1;
        remove_Current_from_All(sliderShowIndicatorFlex02);
        update_Indicator(currentIndicatorIndexSliderShow02, sliderShowIndicatorFlex02);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn02, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn02, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn02, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn02, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex02, 350, indicatorTimeout02);
    
    
    
})

// INITIAL RESPONSIVE 2 Slideshow

if(window.innerWidth >= 1280)
{
    sliderShowIndicatorFlex02.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex02);
    create_Indicator(sliderShowIndicatorFlex02);
    sliderShowIndicatorFlex02.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators02 = Array.from(sliderShowIndicatorFlex02.children);
    transformatTablet02 = false;

    
}
if(window.innerWidth <= 1280 && transformatTablet02 == false && window.innerWidth >= 1021)
{
    sliderShowIndicatorFlex02.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex02);
    create_Indicator(sliderShowIndicatorFlex02);
    create_Indicator(sliderShowIndicatorFlex02);
    sliderShowIndicatorFlex02.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators02 = Array.from(sliderShowIndicatorFlex02.children);;
    transformatTablet02 = true;
    transformatTel02 = false;
}
if(window.innerWidth <= 1020 && transformatTel02 == false)
{
    sliderShowIndicatorFlex02.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex02);
    create_Indicator(sliderShowIndicatorFlex02);
    create_Indicator(sliderShowIndicatorFlex02);
    create_Indicator(sliderShowIndicatorFlex02);
    sliderShowIndicatorFlex02.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators02 = Array.from(sliderShowIndicatorFlex02.children);
    transformatTablet02 = false;
    transformatTel02 = true;
       
}

let sliderShowIndicators02 = Array.from(sliderShowIndicatorFlex02.children);
sliderShowIndicators02.forEach(indicator =>
        
        indicator.addEventListener('click', (e) =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex02);

            remove_Current_from_All(sliderShowIndicatorFlex02);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex02);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer02);
            currentIndicatorIndexSliderShow02 += neededScrolls;
            dezactivate_All_Arrows(preBtn02, nxtBtn02);
            dezactivate_Indicators(sliderShowIndicatorFlex02, 550, indicatorTimeout02);
        }

))

// ACTUAL RESPONSIVE DESIGN 2 Slideshow

window.addEventListener('resize', () =>
{
    
    if((window.innerWidth >= 1280) && (transformatTablet02 == true || transformatTel02 == true))
    {
        sliderShowIndicatorFlex02.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex02);
        create_Indicator(sliderShowIndicatorFlex02);
        sliderShowIndicatorFlex02.children[0].children[0].classList.add('current-indicator');
        transformatTablet02 = false;
        transformatTel02 = false;
        scroll4Right(productContainer02);
        currentIndicatorIndexSliderShow02 = 0;
    }
    if(window.innerWidth <= 1280 && transformatTablet02 == false && window.innerWidth >= 1021)
    {
        sliderShowIndicatorFlex02.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex02);
        create_Indicator(sliderShowIndicatorFlex02);
        create_Indicator(sliderShowIndicatorFlex02);
        sliderShowIndicatorFlex02.children[0].children[0].classList.add('current-indicator');
        transformatTablet02 = true;
        transformatTel02 = false;
        scroll4Right(productContainer02);
        currentIndicatorIndexSliderShow02 = 0;
    }
    if(window.innerWidth <= 1020 && transformatTel02 == false)
    {
        sliderShowIndicatorFlex02.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex02);
        create_Indicator(sliderShowIndicatorFlex02);
        create_Indicator(sliderShowIndicatorFlex02);
        create_Indicator(sliderShowIndicatorFlex02);
        sliderShowIndicatorFlex02.children[0].children[0].classList.add('current-indicator');
        transformatTablet02 = false;
        scroll4Right(productContainer02);
        transformatTel02 = true;
        currentIndicatorIndexSliderShow02 = 0;
    }

    let sliderShowIndicators02 = Array.from(sliderShowIndicatorFlex02.children);
    

    sliderShowIndicators02.forEach(indicator =>
        
        indicator.addEventListener('click', () =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex02);

            remove_Current_from_All(sliderShowIndicatorFlex02);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex02);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer02);
            currentIndicatorIndexSliderShow02 += neededScrolls;
            dezactivate_All_Arrows(preBtn02, nxtBtn02);
            clearTimeout(indicatorTimeout02);
            dezactivate_Indicators(sliderShowIndicatorFlex02, 550, indicatorTimeout02);

        }


    
    ))
})


// 3 Carousel

// 3 Slideshow  NECESSARY SELECTORS

const productContainer03= document.querySelector('#product-container03');
const nxtBtn03 = document.querySelector('#nxt-btn03');
const preBtn03 = document.querySelector('#pre-btn03');
currentIndicatorIndexSliderShow03 = 0;
let sliderShowIndicatorFlex03 = document.querySelector("#slider-show-indicator-flex03");
let transformatTablet03 = false;
let transformatTel03 = false;
let indicatorTimeout03;

// BUTONS CLICK EVENTS 3 CAROUSEL 

nxtBtn03.addEventListener('click', () => {
    
    scrollLeft(productContainer03);

    let countofIndicators = count_indicators(sliderShowIndicatorFlex03);
    
    if(currentIndicatorIndexSliderShow03 < countofIndicators - 1)
    {
        currentIndicatorIndexSliderShow03 += 1;
        remove_Current_from_All(sliderShowIndicatorFlex03);
        update_Indicator(currentIndicatorIndexSliderShow03, sliderShowIndicatorFlex03);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn03, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn03, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn03, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn03, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex03, 350, indicatorTimeout03);
    

})

preBtn03.addEventListener('click', () => {
    
    scrollRight(productContainer03);
    
    if(currentIndicatorIndexSliderShow03 > 0)
    {
        currentIndicatorIndexSliderShow03 -= 1;
        remove_Current_from_All(sliderShowIndicatorFlex03);
        update_Indicator(currentIndicatorIndexSliderShow03, sliderShowIndicatorFlex03);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn03, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn03, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn03, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn03, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex03, 350, indicatorTimeout03);
    
    
    
})

// INITIAL RESPONSIVE 3 Slideshow

if(window.innerWidth >= 1280)
{
    sliderShowIndicatorFlex03.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex03);
    create_Indicator(sliderShowIndicatorFlex03);
    sliderShowIndicatorFlex03.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators03 = Array.from(sliderShowIndicatorFlex03.children);
    transformatTablet03 = false;

    
}
if(window.innerWidth <= 1280 && transformatTablet03 == false && window.innerWidth >= 1021)
{
    sliderShowIndicatorFlex03.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex03);
    create_Indicator(sliderShowIndicatorFlex03);
    create_Indicator(sliderShowIndicatorFlex03);
    sliderShowIndicatorFlex03.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators03 = Array.from(sliderShowIndicatorFlex03.children);;
    transformatTablet03 = true;
    transformatTel03 = false;
}
if(window.innerWidth <= 1020 && transformatTel03 == false)
{
    sliderShowIndicatorFlex03.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex03);
    create_Indicator(sliderShowIndicatorFlex03);
    create_Indicator(sliderShowIndicatorFlex03);
    create_Indicator(sliderShowIndicatorFlex03);
    sliderShowIndicatorFlex03.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators03 = Array.from(sliderShowIndicatorFlex03.children);
    transformatTablet03 = false;
    transformatTel03 = true;
       
}

let sliderShowIndicators03 = Array.from(sliderShowIndicatorFlex03.children);
sliderShowIndicators03.forEach(indicator =>
        
        indicator.addEventListener('click', (e) =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex03);

            remove_Current_from_All(sliderShowIndicatorFlex03);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex03);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer03);
            currentIndicatorIndexSliderShow03 += neededScrolls;
            dezactivate_All_Arrows(preBtn03, nxtBtn03);
            dezactivate_Indicators(sliderShowIndicatorFlex03, 550, indicatorTimeout03);
        }

))

// ACTUAL RESPONSIVE DESIGN 3 Slideshow

window.addEventListener('resize', () =>
{
    
    if((window.innerWidth >= 1280) && (transformatTablet03 == true || transformatTel03 == true))
    {
        sliderShowIndicatorFlex03.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex03);
        create_Indicator(sliderShowIndicatorFlex03);
        sliderShowIndicatorFlex03.children[0].children[0].classList.add('current-indicator');
        transformatTablet03 = false;
        transformatTel03 = false;
        scroll4Right(productContainer03);
        currentIndicatorIndexSliderShow03 = 0;
    }
    if(window.innerWidth <= 1280 && transformatTablet03 == false && window.innerWidth >= 1021)
    {
        sliderShowIndicatorFlex03.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex03);
        create_Indicator(sliderShowIndicatorFlex03);
        create_Indicator(sliderShowIndicatorFlex03);
        sliderShowIndicatorFlex03.children[0].children[0].classList.add('current-indicator');
        transformatTablet03 = true;
        transformatTel03 = false;
        scroll4Right(productContainer03);
        currentIndicatorIndexSliderShow03 = 0;
    }
    if(window.innerWidth <= 1020 && transformatTel03 == false)
    {
        sliderShowIndicatorFlex03.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex03);
        create_Indicator(sliderShowIndicatorFlex03);
        create_Indicator(sliderShowIndicatorFlex03);
        create_Indicator(sliderShowIndicatorFlex03);
        sliderShowIndicatorFlex03.children[0].children[0].classList.add('current-indicator');
        transformatTablet03 = false;
        scroll4Right(productContainer03);
        transformatTel03 = true;
        currentIndicatorIndexSliderShow03 = 0;
    }

    let sliderShowIndicators03 = Array.from(sliderShowIndicatorFlex03.children);
    

    sliderShowIndicators03.forEach(indicator =>
        
        indicator.addEventListener('click', () =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex03);

            remove_Current_from_All(sliderShowIndicatorFlex03);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex03);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer03);
            currentIndicatorIndexSliderShow03 += neededScrolls;
            dezactivate_All_Arrows(preBtn03, nxtBtn03);
            clearTimeout(indicatorTimeout03);
            dezactivate_Indicators(sliderShowIndicatorFlex03, 550, indicatorTimeout03);

        }


    
    ))
})

// 4 Carousel

// 4 Slideshow  NECESSARY SELECTORS

const productContainer04= document.querySelector('#product-container04');
const nxtBtn04 = document.querySelector('#nxt-btn04');
const preBtn04 = document.querySelector('#pre-btn04');
currentIndicatorIndexSliderShow04 = 0;
let sliderShowIndicatorFlex04 = document.querySelector("#slider-show-indicator-flex04");
let transformatTablet04 = false;
let transformatTel04 = false;
let indicatorTimeout04;

// BUTONS CLICK EVENTS 4 CAROUSEL 

nxtBtn04.addEventListener('click', () => {
    
    scrollLeft(productContainer04);

    let countofIndicators = count_indicators(sliderShowIndicatorFlex04);
    
    if(currentIndicatorIndexSliderShow04 < countofIndicators - 1)
    {
        currentIndicatorIndexSliderShow04 += 1;
        remove_Current_from_All(sliderShowIndicatorFlex04);
        update_Indicator(currentIndicatorIndexSliderShow04, sliderShowIndicatorFlex04);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn04, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn04, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn04, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn04, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex04, 350, indicatorTimeout04);
    

})

preBtn04.addEventListener('click', () => {
    
    scrollRight(productContainer04);
    
    if(currentIndicatorIndexSliderShow04 > 0)
    {
        currentIndicatorIndexSliderShow04 -= 1;
        remove_Current_from_All(sliderShowIndicatorFlex04);
        update_Indicator(currentIndicatorIndexSliderShow04, sliderShowIndicatorFlex04);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn04, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn04, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn04, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn04, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex04, 350, indicatorTimeout04);
    
    
    
})

// INITIAL RESPONSIVE 4 Slideshow

if(window.innerWidth >= 1280)
{
    sliderShowIndicatorFlex04.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex04);
    create_Indicator(sliderShowIndicatorFlex04);
    sliderShowIndicatorFlex04.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators04 = Array.from(sliderShowIndicatorFlex04.children);
    transformatTablet04 = false;

    
}
if(window.innerWidth <= 1280 && transformatTablet04 == false && window.innerWidth >= 1021)
{
    sliderShowIndicatorFlex04.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex04);
    create_Indicator(sliderShowIndicatorFlex04);
    create_Indicator(sliderShowIndicatorFlex04);
    sliderShowIndicatorFlex04.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators04 = Array.from(sliderShowIndicatorFlex04.children);;
    transformatTablet04 = true;
    transformatTel04 = false;
}
if(window.innerWidth <= 1020 && transformatTel04 == false)
{
    sliderShowIndicatorFlex04.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex04);
    create_Indicator(sliderShowIndicatorFlex04);
    create_Indicator(sliderShowIndicatorFlex04);
    create_Indicator(sliderShowIndicatorFlex04);
    sliderShowIndicatorFlex04.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators04 = Array.from(sliderShowIndicatorFlex04.children);
    transformatTablet04 = false;
    transformatTel04 = true;
       
}

let sliderShowIndicators04 = Array.from(sliderShowIndicatorFlex04.children);
sliderShowIndicators04.forEach(indicator =>
        
        indicator.addEventListener('click', (e) =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex04);

            remove_Current_from_All(sliderShowIndicatorFlex04);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex04);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer04);
            currentIndicatorIndexSliderShow04 += neededScrolls;
            dezactivate_All_Arrows(preBtn04, nxtBtn04);
            dezactivate_Indicators(sliderShowIndicatorFlex04, 550, indicatorTimeout04);
        }

))

// ACTUAL RESPONSIVE DESIGN 4 Slideshow

window.addEventListener('resize', () =>
{
    
    if((window.innerWidth >= 1280) && (transformatTablet04 == true || transformatTel04 == true))
    {
        sliderShowIndicatorFlex04.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex04);
        create_Indicator(sliderShowIndicatorFlex04);
        sliderShowIndicatorFlex04.children[0].children[0].classList.add('current-indicator');
        transformatTablet04 = false;
        transformatTel04 = false;
        scroll4Right(productContainer04);
        currentIndicatorIndexSliderShow04 = 0;
    }
    if(window.innerWidth <= 1280 && transformatTablet04 == false && window.innerWidth >= 1021)
    {
        sliderShowIndicatorFlex04.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex04);
        create_Indicator(sliderShowIndicatorFlex04);
        create_Indicator(sliderShowIndicatorFlex04);
        sliderShowIndicatorFlex04.children[0].children[0].classList.add('current-indicator');
        transformatTablet04 = true;
        transformatTel04 = false;
        scroll4Right(productContainer04);
        currentIndicatorIndexSliderShow04 = 0;
    }
    if(window.innerWidth <= 1020 && transformatTel04 == false)
    {
        sliderShowIndicatorFlex04.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex04);
        create_Indicator(sliderShowIndicatorFlex04);
        create_Indicator(sliderShowIndicatorFlex04);
        create_Indicator(sliderShowIndicatorFlex04);
        sliderShowIndicatorFlex04.children[0].children[0].classList.add('current-indicator');
        transformatTablet04 = false;
        scroll4Right(productContainer04);
        transformatTel04 = true;
        currentIndicatorIndexSliderShow04 = 0;
    }

    let sliderShowIndicators04 = Array.from(sliderShowIndicatorFlex04.children);
    

    sliderShowIndicators04.forEach(indicator =>
        
        indicator.addEventListener('click', () =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex04);

            remove_Current_from_All(sliderShowIndicatorFlex04);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex04);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer04);
            currentIndicatorIndexSliderShow04 += neededScrolls;
            dezactivate_All_Arrows(preBtn04, nxtBtn04);
            clearTimeout(indicatorTimeout04);
            dezactivate_Indicators(sliderShowIndicatorFlex04, 550, indicatorTimeout04);

        }


    
    ))
})



// 5 Carousel

// 5 Slideshow  NECESSARY SELECTORS

const productContainer05= document.querySelector('#product-container05');
const nxtBtn05 = document.querySelector('#nxt-btn05');
const preBtn05 = document.querySelector('#pre-btn05');
currentIndicatorIndexSliderShow05 = 0;
let sliderShowIndicatorFlex05 = document.querySelector("#slider-show-indicator-flex05");
let transformatTablet05 = false;
let transformatTel05 = false;
let indicatorTimeout05;

// BUTONS CLICK EVENTS 5 CAROUSEL 

nxtBtn05.addEventListener('click', () => {
    
    scrollLeft(productContainer05);

    let countofIndicators = count_indicators(sliderShowIndicatorFlex05);
    
    if(currentIndicatorIndexSliderShow05 < countofIndicators - 1)
    {
        currentIndicatorIndexSliderShow05 += 1;
        remove_Current_from_All(sliderShowIndicatorFlex05);
        update_Indicator(currentIndicatorIndexSliderShow05, sliderShowIndicatorFlex05);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn05, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn05, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn05, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn05, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex05, 350, indicatorTimeout05);
    

})

preBtn05.addEventListener('click', () => {
    
    scrollRight(productContainer05);
    
    if(currentIndicatorIndexSliderShow05 > 0)
    {
        currentIndicatorIndexSliderShow05 -= 1;
        remove_Current_from_All(sliderShowIndicatorFlex05);
        update_Indicator(currentIndicatorIndexSliderShow05, sliderShowIndicatorFlex05);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn05, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn05, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn05, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn05, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex05, 350, indicatorTimeout05);
    
    
    
})

// INITIAL RESPONSIVE 5 Slideshow

if(window.innerWidth >= 1280)
{
    sliderShowIndicatorFlex05.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex05);
    create_Indicator(sliderShowIndicatorFlex05);
    sliderShowIndicatorFlex05.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators05 = Array.from(sliderShowIndicatorFlex05.children);
    transformatTablet05 = false;

    
}
if(window.innerWidth <= 1280 && transformatTablet05 == false && window.innerWidth >= 1021)
{
    sliderShowIndicatorFlex05.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex05);
    create_Indicator(sliderShowIndicatorFlex05);
    create_Indicator(sliderShowIndicatorFlex05);
    sliderShowIndicatorFlex05.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators05 = Array.from(sliderShowIndicatorFlex05.children);;
    transformatTablet05 = true;
    transformatTel05 = false;
}
if(window.innerWidth <= 1020 && transformatTel05 == false)
{
    sliderShowIndicatorFlex05.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex05);
    create_Indicator(sliderShowIndicatorFlex05);
    create_Indicator(sliderShowIndicatorFlex05);
    create_Indicator(sliderShowIndicatorFlex05);
    sliderShowIndicatorFlex05.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators05 = Array.from(sliderShowIndicatorFlex05.children);
    transformatTablet05 = false;
    transformatTel05 = true;
       
}

let sliderShowIndicators05 = Array.from(sliderShowIndicatorFlex05.children);
sliderShowIndicators05.forEach(indicator =>
        
        indicator.addEventListener('click', (e) =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex05);

            remove_Current_from_All(sliderShowIndicatorFlex05);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex05);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer05);
            currentIndicatorIndexSliderShow05 += neededScrolls;
            dezactivate_All_Arrows(preBtn05, nxtBtn05);
            dezactivate_Indicators(sliderShowIndicatorFlex05, 550, indicatorTimeout05);
        }

))

// ACTUAL RESPONSIVE DESIGN 5 Slideshow

window.addEventListener('resize', () =>
{
    
    if((window.innerWidth >= 1280) && (transformatTablet05 == true || transformatTel05 == true))
    {
        sliderShowIndicatorFlex05.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex05);
        create_Indicator(sliderShowIndicatorFlex05);
        sliderShowIndicatorFlex05.children[0].children[0].classList.add('current-indicator');
        transformatTablet05 = false;
        transformatTel05 = false;
        scroll4Right(productContainer05);
        currentIndicatorIndexSliderShow05 = 0;
    }
    if(window.innerWidth <= 1280 && transformatTablet05 == false && window.innerWidth >= 1021)
    {
        sliderShowIndicatorFlex05.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex05);
        create_Indicator(sliderShowIndicatorFlex05);
        create_Indicator(sliderShowIndicatorFlex05);
        sliderShowIndicatorFlex05.children[0].children[0].classList.add('current-indicator');
        transformatTablet05 = true;
        transformatTel05 = false;
        scroll4Right(productContainer05);
        currentIndicatorIndexSliderShow05 = 0;
    }
    if(window.innerWidth <= 1020 && transformatTel05 == false)
    {
        sliderShowIndicatorFlex05.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex05);
        create_Indicator(sliderShowIndicatorFlex05);
        create_Indicator(sliderShowIndicatorFlex05);
        create_Indicator(sliderShowIndicatorFlex05);
        sliderShowIndicatorFlex05.children[0].children[0].classList.add('current-indicator');
        transformatTablet05 = false;
        scroll4Right(productContainer05);
        transformatTel05 = true;
        currentIndicatorIndexSliderShow05 = 0;
    }

    let sliderShowIndicators05 = Array.from(sliderShowIndicatorFlex05.children);
    

    sliderShowIndicators05.forEach(indicator =>
        
        indicator.addEventListener('click', () =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex05);

            remove_Current_from_All(sliderShowIndicatorFlex05);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex05);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer05);
            currentIndicatorIndexSliderShow05 += neededScrolls;
            dezactivate_All_Arrows(preBtn05, nxtBtn05);
            clearTimeout(indicatorTimeout05);
            dezactivate_Indicators(sliderShowIndicatorFlex05, 550, indicatorTimeout05);

        }


    
    ))
})


// 6 Carousel

// 6 Slideshow  NECESSARY SELECTORS

const productContainer06= document.querySelector('#product-container06');
const nxtBtn06 = document.querySelector('#nxt-btn06');
const preBtn06 = document.querySelector('#pre-btn06');
currentIndicatorIndexSliderShow06 = 0;
let sliderShowIndicatorFlex06 = document.querySelector("#slider-show-indicator-flex06");
let transformatTablet06 = false;
let transformatTel06 = false;
let indicatorTimeout06;

// BUTONS CLICK EVENTS 6 CAROUSEL 

nxtBtn06.addEventListener('click', () => {
    
    scrollLeft(productContainer06);

    let countofIndicators = count_indicators(sliderShowIndicatorFlex06);
    
    if(currentIndicatorIndexSliderShow06 < countofIndicators - 1)
    {
        currentIndicatorIndexSliderShow06 += 1;
        remove_Current_from_All(sliderShowIndicatorFlex06);
        update_Indicator(currentIndicatorIndexSliderShow06, sliderShowIndicatorFlex06);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn06, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn06, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn06, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn06, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex06, 350, indicatorTimeout06);
    

})

preBtn06.addEventListener('click', () => {
    
    scrollRight(productContainer06);
    
    if(currentIndicatorIndexSliderShow06 > 0)
    {
        currentIndicatorIndexSliderShow06 -= 1;
        remove_Current_from_All(sliderShowIndicatorFlex06);
        update_Indicator(currentIndicatorIndexSliderShow06, sliderShowIndicatorFlex06);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn06, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn06, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn06, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn06, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex06, 350, indicatorTimeout06);
    
    
    
})

// INITIAL RESPONSIVE 6 Slideshow

if(window.innerWidth >= 1280)
{
    sliderShowIndicatorFlex06.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex06);
    create_Indicator(sliderShowIndicatorFlex06);
    sliderShowIndicatorFlex06.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators06 = Array.from(sliderShowIndicatorFlex06.children);
    transformatTablet06 = false;

    
}
if(window.innerWidth <= 1280 && transformatTablet06 == false && window.innerWidth >= 1021)
{
    sliderShowIndicatorFlex06.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex06);
    create_Indicator(sliderShowIndicatorFlex06);
    create_Indicator(sliderShowIndicatorFlex06);
    sliderShowIndicatorFlex06.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators06 = Array.from(sliderShowIndicatorFlex06.children);;
    transformatTablet06 = true;
    transformatTel06 = false;
}
if(window.innerWidth <= 1020 && transformatTel06 == false)
{
    sliderShowIndicatorFlex06.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex06);
    create_Indicator(sliderShowIndicatorFlex06);
    create_Indicator(sliderShowIndicatorFlex06);
    create_Indicator(sliderShowIndicatorFlex06);
    sliderShowIndicatorFlex06.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators06 = Array.from(sliderShowIndicatorFlex06.children);
    transformatTablet06 = false;
    transformatTel06 = true;
       
}

let sliderShowIndicators06 = Array.from(sliderShowIndicatorFlex06.children);
sliderShowIndicators06.forEach(indicator =>
        
        indicator.addEventListener('click', (e) =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex06);

            remove_Current_from_All(sliderShowIndicatorFlex06);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex06);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer06);
            currentIndicatorIndexSliderShow06 += neededScrolls;
            dezactivate_All_Arrows(preBtn06, nxtBtn06);
            dezactivate_Indicators(sliderShowIndicatorFlex06, 550, indicatorTimeout06);
        }

))

// ACTUAL RESPONSIVE DESIGN 6 Slideshow

window.addEventListener('resize', () =>
{
    
    if((window.innerWidth >= 1280) && (transformatTablet06 == true || transformatTel06 == true))
    {
        sliderShowIndicatorFlex06.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex06);
        create_Indicator(sliderShowIndicatorFlex06);
        sliderShowIndicatorFlex06.children[0].children[0].classList.add('current-indicator');
        transformatTablet06 = false;
        transformatTel06 = false;
        scroll4Right(productContainer06);
        currentIndicatorIndexSliderShow06 = 0;
    }
    if(window.innerWidth <= 1280 && transformatTablet06 == false && window.innerWidth >= 1061)
    {
        sliderShowIndicatorFlex06.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex06);
        create_Indicator(sliderShowIndicatorFlex06);
        create_Indicator(sliderShowIndicatorFlex06);
        sliderShowIndicatorFlex06.children[0].children[0].classList.add('current-indicator');
        transformatTablet06 = true;
        transformatTel06 = false;
        scroll4Right(productContainer06);
        currentIndicatorIndexSliderShow06 = 0;
    }
    if(window.innerWidth <= 1020 && transformatTel06 == false)
    {
        sliderShowIndicatorFlex06.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex06);
        create_Indicator(sliderShowIndicatorFlex06);
        create_Indicator(sliderShowIndicatorFlex06);
        create_Indicator(sliderShowIndicatorFlex06);
        sliderShowIndicatorFlex06.children[0].children[0].classList.add('current-indicator');
        transformatTablet06 = false;
        scroll4Right(productContainer06);
        transformatTel06 = true;
        currentIndicatorIndexSliderShow06 = 0;
    }

    let sliderShowIndicators06 = Array.from(sliderShowIndicatorFlex06.children);
    

    sliderShowIndicators06.forEach(indicator =>
        
        indicator.addEventListener('click', () =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex06);

            remove_Current_from_All(sliderShowIndicatorFlex06);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex06);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer06);
            currentIndicatorIndexSliderShow06 += neededScrolls;
            dezactivate_All_Arrows(preBtn06, nxtBtn06);
            clearTimeout(indicatorTimeout06);
            dezactivate_Indicators(sliderShowIndicatorFlex06, 550, indicatorTimeout06);

        }


    
    ))
})


// 7 Carousel

// 7 Slideshow  NECESSARY SELECTORS

const productContainer07= document.querySelector('#product-container07');
const nxtBtn07 = document.querySelector('#nxt-btn07');
const preBtn07 = document.querySelector('#pre-btn07');
currentIndicatorIndexSliderShow07 = 0;
let sliderShowIndicatorFlex07 = document.querySelector("#slider-show-indicator-flex07");
let transformatTablet07 = false;
let transformatTel07 = false;
let indicatorTimeout07;

// BUTONS CLICK EVENTS 7 CAROUSEL 

nxtBtn07.addEventListener('click', () => {
    
    scrollLeft(productContainer07);

    let countofIndicators = count_indicators(sliderShowIndicatorFlex07);
    
    if(currentIndicatorIndexSliderShow07 < countofIndicators - 1)
    {
        currentIndicatorIndexSliderShow07 += 1;
        remove_Current_from_All(sliderShowIndicatorFlex07);
        update_Indicator(currentIndicatorIndexSliderShow07, sliderShowIndicatorFlex07);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn07, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn07, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn07, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn07, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex07, 350, indicatorTimeout07);
    

})

preBtn07.addEventListener('click', () => {
    
    scrollRight(productContainer07);
    
    if(currentIndicatorIndexSliderShow07 > 0)
    {
        currentIndicatorIndexSliderShow07 -= 1;
        remove_Current_from_All(sliderShowIndicatorFlex07);
        update_Indicator(currentIndicatorIndexSliderShow07, sliderShowIndicatorFlex07);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn07, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn07, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn07, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn07, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex07, 350, indicatorTimeout07);
    
    
    
})

// INITIAL RESPONSIVE 7 Slideshow

if(window.innerWidth >= 1280)
{
    sliderShowIndicatorFlex07.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex07);
    create_Indicator(sliderShowIndicatorFlex07);
    sliderShowIndicatorFlex07.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators07 = Array.from(sliderShowIndicatorFlex07.children);
    transformatTablet07 = false;

    
}
if(window.innerWidth <= 1280 && transformatTablet07 == false && window.innerWidth >= 1021)
{
    sliderShowIndicatorFlex07.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex07);
    create_Indicator(sliderShowIndicatorFlex07);
    create_Indicator(sliderShowIndicatorFlex07);
    sliderShowIndicatorFlex07.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators07 = Array.from(sliderShowIndicatorFlex07.children);;
    transformatTablet07 = true;
    transformatTel07 = false;
}
if(window.innerWidth <= 1020 && transformatTel07 == false)
{
    sliderShowIndicatorFlex07.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex07);
    create_Indicator(sliderShowIndicatorFlex07);
    create_Indicator(sliderShowIndicatorFlex07);
    create_Indicator(sliderShowIndicatorFlex07);
    sliderShowIndicatorFlex07.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators07 = Array.from(sliderShowIndicatorFlex07.children);
    transformatTablet07 = false;
    transformatTel07 = true;
       
}

let sliderShowIndicators07 = Array.from(sliderShowIndicatorFlex07.children);
sliderShowIndicators07.forEach(indicator =>
        
        indicator.addEventListener('click', (e) =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex07);

            remove_Current_from_All(sliderShowIndicatorFlex07);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex07);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer07);
            currentIndicatorIndexSliderShow07 += neededScrolls;
            dezactivate_All_Arrows(preBtn07, nxtBtn07);
            dezactivate_Indicators(sliderShowIndicatorFlex07, 550, indicatorTimeout07);
        }

))

// ACTUAL RESPONSIVE DESIGN 7 Slideshow

window.addEventListener('resize', () =>
{
    
    if((window.innerWidth >= 1280) && (transformatTablet07 == true || transformatTel07 == true))
    {
        sliderShowIndicatorFlex07.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex07);
        create_Indicator(sliderShowIndicatorFlex07);
        sliderShowIndicatorFlex07.children[0].children[0].classList.add('current-indicator');
        transformatTablet07 = false;
        transformatTel07 = false;
        scroll4Right(productContainer07);
        currentIndicatorIndexSliderShow07 = 0;
    }
    if(window.innerWidth <= 1280 && transformatTablet07 == false && window.innerWidth >= 1021)
    {
        sliderShowIndicatorFlex07.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex07);
        create_Indicator(sliderShowIndicatorFlex07);
        create_Indicator(sliderShowIndicatorFlex07);
        sliderShowIndicatorFlex07.children[0].children[0].classList.add('current-indicator');
        transformatTablet07 = true;
        transformatTel07 = false;
        scroll4Right(productContainer07);
        currentIndicatorIndexSliderShow07 = 0;
    }
    if(window.innerWidth <= 1020 && transformatTel07 == false)
    {
        sliderShowIndicatorFlex07.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex07);
        create_Indicator(sliderShowIndicatorFlex07);
        create_Indicator(sliderShowIndicatorFlex07);
        create_Indicator(sliderShowIndicatorFlex07);
        sliderShowIndicatorFlex07.children[0].children[0].classList.add('current-indicator');
        transformatTablet07 = false;
        scroll4Right(productContainer07);
        transformatTel07 = true;
        currentIndicatorIndexSliderShow07 = 0;
    }

    let sliderShowIndicators07 = Array.from(sliderShowIndicatorFlex07.children);
    

    sliderShowIndicators07.forEach(indicator =>
        
        indicator.addEventListener('click', () =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex07);

            remove_Current_from_All(sliderShowIndicatorFlex07);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex07);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer07);
            currentIndicatorIndexSliderShow07 += neededScrolls;
            dezactivate_All_Arrows(preBtn07, nxtBtn07);
            clearTimeout(indicatorTimeout07);
            dezactivate_Indicators(sliderShowIndicatorFlex07, 550, indicatorTimeout07);

        }


    
    ))
})

// 8 Carousel

// 8 Slideshow  NECESSARY SELECTORS

const productContainer08= document.querySelector('#product-container08');
const nxtBtn08 = document.querySelector('#nxt-btn08');
const preBtn08 = document.querySelector('#pre-btn08');
currentIndicatorIndexSliderShow08 = 0;
let sliderShowIndicatorFlex08 = document.querySelector("#slider-show-indicator-flex08");
let transformatTablet08 = false;
let transformatTel08 = false;
let indicatorTimeout08;

// BUTONS CLICK EVENTS 8 CAROUSEL 

nxtBtn08.addEventListener('click', () => {
    
    scrollLeft(productContainer08);

    let countofIndicators = count_indicators(sliderShowIndicatorFlex08);
    
    if(currentIndicatorIndexSliderShow08 < countofIndicators - 1)
    {
        currentIndicatorIndexSliderShow08 += 1;
        remove_Current_from_All(sliderShowIndicatorFlex08);
        update_Indicator(currentIndicatorIndexSliderShow08, sliderShowIndicatorFlex08);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn08, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn08, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn08, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn08, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex08, 350, indicatorTimeout08);
    

})

preBtn08.addEventListener('click', () => {
    
    scrollRight(productContainer08);
    
    if(currentIndicatorIndexSliderShow08 > 0)
    {
        currentIndicatorIndexSliderShow08 -= 1;
        remove_Current_from_All(sliderShowIndicatorFlex08);
        update_Indicator(currentIndicatorIndexSliderShow08, sliderShowIndicatorFlex08);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn08, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn08, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn08, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn08, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex08, 350, indicatorTimeout08);
    
    
    
})

// INITIAL RESPONSIVE 8 Slideshow

if(window.innerWidth >= 1280)
{
    sliderShowIndicatorFlex08.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex08);
    create_Indicator(sliderShowIndicatorFlex08);
    sliderShowIndicatorFlex08.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators08 = Array.from(sliderShowIndicatorFlex08.children);
    transformatTablet08 = false;

    
}
if(window.innerWidth <= 1280 && transformatTablet08 == false && window.innerWidth >= 1021)
{
    sliderShowIndicatorFlex08.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex08);
    create_Indicator(sliderShowIndicatorFlex08);
    create_Indicator(sliderShowIndicatorFlex08);
    sliderShowIndicatorFlex08.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators08 = Array.from(sliderShowIndicatorFlex08.children);;
    transformatTablet08 = true;
    transformatTel08 = false;
}
if(window.innerWidth <= 1020 && transformatTel08 == false)
{
    sliderShowIndicatorFlex08.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex08);
    create_Indicator(sliderShowIndicatorFlex08);
    create_Indicator(sliderShowIndicatorFlex08);
    create_Indicator(sliderShowIndicatorFlex08);
    sliderShowIndicatorFlex08.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators08 = Array.from(sliderShowIndicatorFlex08.children);
    transformatTablet08 = false;
    transformatTel08 = true;
       
}

let sliderShowIndicators08 = Array.from(sliderShowIndicatorFlex08.children);
sliderShowIndicators08.forEach(indicator =>
        
        indicator.addEventListener('click', (e) =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex08);

            remove_Current_from_All(sliderShowIndicatorFlex08);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex08);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer08);
            currentIndicatorIndexSliderShow08 += neededScrolls;
            dezactivate_All_Arrows(preBtn08, nxtBtn08);
            dezactivate_Indicators(sliderShowIndicatorFlex08, 550, indicatorTimeout08);
        }

))

// ACTUAL RESPONSIVE DESIGN 8 Slideshow

window.addEventListener('resize', () =>
{
    
    if((window.innerWidth >= 1280) && (transformatTablet08 == true || transformatTel08 == true))
    {
        sliderShowIndicatorFlex08.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex08);
        create_Indicator(sliderShowIndicatorFlex08);
        sliderShowIndicatorFlex08.children[0].children[0].classList.add('current-indicator');
        transformatTablet08 = false;
        transformatTel08 = false;
        scroll4Right(productContainer08);
        currentIndicatorIndexSliderShow08 = 0;
    }
    if(window.innerWidth <= 1280 && transformatTablet08 == false && window.innerWidth >= 1021)
    {
        sliderShowIndicatorFlex08.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex08);
        create_Indicator(sliderShowIndicatorFlex08);
        create_Indicator(sliderShowIndicatorFlex08);
        sliderShowIndicatorFlex08.children[0].children[0].classList.add('current-indicator');
        transformatTablet08 = true;
        transformatTel08 = false;
        scroll4Right(productContainer08);
        currentIndicatorIndexSliderShow08 = 0;
    }
    if(window.innerWidth <= 1020 && transformatTel08 == false)
    {
        sliderShowIndicatorFlex08.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex08);
        create_Indicator(sliderShowIndicatorFlex08);
        create_Indicator(sliderShowIndicatorFlex08);
        create_Indicator(sliderShowIndicatorFlex08);
        sliderShowIndicatorFlex08.children[0].children[0].classList.add('current-indicator');
        transformatTablet08 = false;
        scroll4Right(productContainer08);
        transformatTel08 = true;
        currentIndicatorIndexSliderShow08 = 0;
    }

    let sliderShowIndicators08 = Array.from(sliderShowIndicatorFlex08.children);
    

    sliderShowIndicators08.forEach(indicator =>
        
        indicator.addEventListener('click', () =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex08);

            remove_Current_from_All(sliderShowIndicatorFlex08);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex08);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer08);
            currentIndicatorIndexSliderShow08 += neededScrolls;
            dezactivate_All_Arrows(preBtn08, nxtBtn08);
            clearTimeout(indicatorTimeout08);
            dezactivate_Indicators(sliderShowIndicatorFlex08, 550, indicatorTimeout08);

        }


    
    ))
})


// 9 Carousel

// 9 Slideshow  NECESSARY SELECTORS

const productContainer09= document.querySelector('#product-container09');
const nxtBtn09 = document.querySelector('#nxt-btn09');
const preBtn09 = document.querySelector('#pre-btn09');
currentIndicatorIndexSliderShow09 = 0;
let sliderShowIndicatorFlex09 = document.querySelector("#slider-show-indicator-flex09");
let transformatTablet09 = false;
let transformatTel09 = false;
let indicatorTimeout09;

// BUTONS CLICK EVENTS 9 CAROUSEL 

nxtBtn09.addEventListener('click', () => {
    
    scrollLeft(productContainer09);

    let countofIndicators = count_indicators(sliderShowIndicatorFlex09);
    
    if(currentIndicatorIndexSliderShow09 < countofIndicators - 1)
    {
        currentIndicatorIndexSliderShow09 += 1;
        remove_Current_from_All(sliderShowIndicatorFlex09);
        update_Indicator(currentIndicatorIndexSliderShow09, sliderShowIndicatorFlex09);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn09, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn09, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn09, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn09, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex09, 350, indicatorTimeout09);
    

})

preBtn09.addEventListener('click', () => {
    
    scrollRight(productContainer09);
    
    if(currentIndicatorIndexSliderShow09 > 0)
    {
        currentIndicatorIndexSliderShow09 -= 1;
        remove_Current_from_All(sliderShowIndicatorFlex09);
        update_Indicator(currentIndicatorIndexSliderShow09, sliderShowIndicatorFlex09);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn09, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn09, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn09, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn09, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex09, 350, indicatorTimeout09);
    
    
    
})

// INITIAL RESPONSIVE 9 Slideshow

if(window.innerWidth >= 1280)
{
    sliderShowIndicatorFlex09.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex09);
    create_Indicator(sliderShowIndicatorFlex09);
    sliderShowIndicatorFlex09.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators09 = Array.from(sliderShowIndicatorFlex09.children);
    transformatTablet09 = false;

    
}
if(window.innerWidth <= 1280 && transformatTablet09 == false && window.innerWidth >= 1021)
{
    sliderShowIndicatorFlex09.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex09);
    create_Indicator(sliderShowIndicatorFlex09);
    create_Indicator(sliderShowIndicatorFlex09);
    sliderShowIndicatorFlex09.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators09 = Array.from(sliderShowIndicatorFlex09.children);;
    transformatTablet09 = true;
    transformatTel09 = false;
}
if(window.innerWidth <= 1020 && transformatTel09 == false)
{
    sliderShowIndicatorFlex09.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex09);
    create_Indicator(sliderShowIndicatorFlex09);
    create_Indicator(sliderShowIndicatorFlex09);
    create_Indicator(sliderShowIndicatorFlex09);
    sliderShowIndicatorFlex09.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators09 = Array.from(sliderShowIndicatorFlex09.children);
    transformatTablet09 = false;
    transformatTel09 = true;
       
}

let sliderShowIndicators09 = Array.from(sliderShowIndicatorFlex09.children);
sliderShowIndicators09.forEach(indicator =>
        
        indicator.addEventListener('click', (e) =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex09);

            remove_Current_from_All(sliderShowIndicatorFlex09);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex09);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer09);
            currentIndicatorIndexSliderShow09 += neededScrolls;
            dezactivate_All_Arrows(preBtn09, nxtBtn09);
            dezactivate_Indicators(sliderShowIndicatorFlex09, 550, indicatorTimeout09);
        }

))

// ACTUAL RESPONSIVE DESIGN 9 Slideshow

window.addEventListener('resize', () =>
{
    
    if((window.innerWidth >= 1280) && (transformatTablet09 == true || transformatTel09 == true))
    {
        sliderShowIndicatorFlex09.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex09);
        create_Indicator(sliderShowIndicatorFlex09);
        sliderShowIndicatorFlex09.children[0].children[0].classList.add('current-indicator');
        transformatTablet09 = false;
        transformatTel09 = false;
        scroll4Right(productContainer09);
        currentIndicatorIndexSliderShow09 = 0;
    }
    if(window.innerWidth <= 1280 && transformatTablet09 == false && window.innerWidth >= 1021)
    {
        sliderShowIndicatorFlex09.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex09);
        create_Indicator(sliderShowIndicatorFlex09);
        create_Indicator(sliderShowIndicatorFlex09);
        sliderShowIndicatorFlex09.children[0].children[0].classList.add('current-indicator');
        transformatTablet09 = true;
        transformatTel09 = false;
        scroll4Right(productContainer09);
        currentIndicatorIndexSliderShow09 = 0;
    }
    if(window.innerWidth <= 1020 && transformatTel09 == false)
    {
        sliderShowIndicatorFlex09.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex09);
        create_Indicator(sliderShowIndicatorFlex09);
        create_Indicator(sliderShowIndicatorFlex09);
        create_Indicator(sliderShowIndicatorFlex09);
        sliderShowIndicatorFlex09.children[0].children[0].classList.add('current-indicator');
        transformatTablet09 = false;
        scroll4Right(productContainer09);
        transformatTel09 = true;
        currentIndicatorIndexSliderShow09 = 0;
    }

    let sliderShowIndicators09 = Array.from(sliderShowIndicatorFlex09.children);
    

    sliderShowIndicators09.forEach(indicator =>
        
        indicator.addEventListener('click', () =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex09);

            remove_Current_from_All(sliderShowIndicatorFlex09);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex09);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer09);
            currentIndicatorIndexSliderShow09 += neededScrolls;
            dezactivate_All_Arrows(preBtn09, nxtBtn09);
            clearTimeout(indicatorTimeout09);
            dezactivate_Indicators(sliderShowIndicatorFlex09, 550, indicatorTimeout09);

        }


    
    ))
})


// 10 Carousel

// 10 Slideshow  NECESSARY SELECTORS

const productContainer10= document.querySelector('#product-container10');
const nxtBtn10 = document.querySelector('#nxt-btn10');
const preBtn10 = document.querySelector('#pre-btn10');
currentIndicatorIndexSliderShow10 = 0;
let sliderShowIndicatorFlex10 = document.querySelector("#slider-show-indicator-flex10");
let transformatTablet10 = false;
let transformatTel10 = false;
let indicatorTimeout10;

// BUTONS CLICK EVENTS 10 CAROUSEL 

nxtBtn10.addEventListener('click', () => {
    
    scrollLeft(productContainer10);

    let countofIndicators = count_indicators(sliderShowIndicatorFlex10);
    
    if(currentIndicatorIndexSliderShow10 < countofIndicators - 1)
    {
        currentIndicatorIndexSliderShow10 += 1;
        remove_Current_from_All(sliderShowIndicatorFlex10);
        update_Indicator(currentIndicatorIndexSliderShow10, sliderShowIndicatorFlex10);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn10, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn10, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn10, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn10, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex10, 350, indicatorTimeout10);
    

})

preBtn10.addEventListener('click', () => {
    
    scrollRight(productContainer10);
    
    if(currentIndicatorIndexSliderShow10 > 0)
    {
        currentIndicatorIndexSliderShow10 -= 1;
        remove_Current_from_All(sliderShowIndicatorFlex10);
        update_Indicator(currentIndicatorIndexSliderShow10, sliderShowIndicatorFlex10);
    }

    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(nxtBtn10, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(nxtBtn10, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(preBtn10, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(preBtn10, 350)
    }
    dezactivate_Indicators(sliderShowIndicatorFlex10, 350, indicatorTimeout10);
    
    
    
})

// INITIAL RESPONSIVE 10 Slideshow

if(window.innerWidth >= 1280)
{
    sliderShowIndicatorFlex10.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex10);
    create_Indicator(sliderShowIndicatorFlex10);
    sliderShowIndicatorFlex10.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators10 = Array.from(sliderShowIndicatorFlex10.children);
    transformatTablet10 = false;

    
}
if(window.innerWidth <= 1280 && transformatTablet10 == false && window.innerWidth >= 1021)
{
    sliderShowIndicatorFlex10.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex10);
    create_Indicator(sliderShowIndicatorFlex10);
    create_Indicator(sliderShowIndicatorFlex10);
    sliderShowIndicatorFlex10.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators10 = Array.from(sliderShowIndicatorFlex10.children);;
    transformatTablet10 = true;
    transformatTel10 = false;
}
if(window.innerWidth <= 1020 && transformatTel10 == false)
{
    sliderShowIndicatorFlex10.innerHTML = '';
    create_Indicator(sliderShowIndicatorFlex10);
    create_Indicator(sliderShowIndicatorFlex10);
    create_Indicator(sliderShowIndicatorFlex10);
    create_Indicator(sliderShowIndicatorFlex10);
    sliderShowIndicatorFlex10.children[0].children[0].classList.add('current-indicator');
    let sliderShowIndicators10 = Array.from(sliderShowIndicatorFlex10.children);
    transformatTablet10 = false;
    transformatTel10 = true;
       
}

let sliderShowIndicators10 = Array.from(sliderShowIndicatorFlex10.children);
sliderShowIndicators10.forEach(indicator =>
        
        indicator.addEventListener('click', (e) =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex10);

            remove_Current_from_All(sliderShowIndicatorFlex10);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex10);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer10);
            currentIndicatorIndexSliderShow10 += neededScrolls;
            dezactivate_All_Arrows(preBtn10, nxtBtn10);
            dezactivate_Indicators(sliderShowIndicatorFlex10, 550, indicatorTimeout10);
        }

))

// ACTUAL RESPONSIVE DESIGN 10 Slideshow

window.addEventListener('resize', () =>
{
    
    if((window.innerWidth >= 1280) && (transformatTablet10 == true || transformatTel10 == true))
    {
        sliderShowIndicatorFlex10.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex10);
        create_Indicator(sliderShowIndicatorFlex10);
        sliderShowIndicatorFlex10.children[0].children[0].classList.add('current-indicator');
        transformatTablet10 = false;
        transformatTel10 = false;
        scroll4Right(productContainer10);
        currentIndicatorIndexSliderShow10 = 0;
    }
    if(window.innerWidth <= 1280 && transformatTablet10 == false && window.innerWidth >= 1021)
    {
        sliderShowIndicatorFlex10.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex10);
        create_Indicator(sliderShowIndicatorFlex10);
        create_Indicator(sliderShowIndicatorFlex10);
        sliderShowIndicatorFlex10.children[0].children[0].classList.add('current-indicator');
        transformatTablet10 = true;
        transformatTel10 = false;
        scroll4Right(productContainer10);
        currentIndicatorIndexSliderShow10 = 0;
    }
    if(window.innerWidth <= 1020 && transformatTel10 == false)
    {
        sliderShowIndicatorFlex10.innerHTML = '';
        create_Indicator(sliderShowIndicatorFlex10);
        create_Indicator(sliderShowIndicatorFlex10);
        create_Indicator(sliderShowIndicatorFlex10);
        create_Indicator(sliderShowIndicatorFlex10);
        sliderShowIndicatorFlex10.children[0].children[0].classList.add('current-indicator');
        transformatTablet10 = false;
        scroll4Right(productContainer10);
        transformatTel10 = true;
        currentIndicatorIndexSliderShow10 = 0;
    }

    let sliderShowIndicators10 = Array.from(sliderShowIndicatorFlex10.children);
    

    sliderShowIndicators10.forEach(indicator =>
        
        indicator.addEventListener('click', () =>
        {
            let pastIndicatorIndex = get_current_index(sliderShowIndicatorFlex10);

            remove_Current_from_All(sliderShowIndicatorFlex10);

            indicator.children[0].classList.add('current-indicator');

            let currentIndicatorIndex = get_current_index(sliderShowIndicatorFlex10);

            let neededScrolls = currentIndicatorIndex - pastIndicatorIndex;

            scroll_to_Indicator(neededScrolls, productContainer10);
            currentIndicatorIndexSliderShow10 += neededScrolls;
            dezactivate_All_Arrows(preBtn10, nxtBtn10);
            clearTimeout(indicatorTimeout10);
            dezactivate_Indicators(sliderShowIndicatorFlex10, 550, indicatorTimeout10);

        }


    
    ))
})

// USEFULL FUNCTIONS
function dezactivate_All_Arrows(arrow01, arrow02)
{
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(arrow01, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(arrow01, 350)
    }
    if(window.innerWidth >= 1280)
    {
        dezactivate_Arrow(arrow02, 500)
    }
    if(window.innerWidth <= 1280)
    {
        dezactivate_Arrow(arrow02, 350)
    }
}
function dezactivate_Indicators(sliderShowIndicatorFlex, ms, indicatorTimeout)
{
    indicators = Array.from(sliderShowIndicatorFlex.children);
    indicators.forEach((i) =>
    {
        i.classList.add('dezactivated-arrow');
        let indicatorTimeout = setTimeout(() =>
        {
            i.classList.remove('dezactivated-arrow');
        }, ms);
    })
    
}
function dezactivate_Arrow(arrow, ms)
{
    arrow.classList.add('dezactivated-arrow');
    setTimeout(() =>
    {
        arrow.classList.remove('dezactivated-arrow');
    }, ms);
}

function scroll_to_Indicator(neededScrolls, productContainer)
{

    if(neededScrolls == -1)
    {
        scrollRight(productContainer);
    }
    if(neededScrolls == -2)
    {
        scroll2Right(productContainer)
    }
    if(neededScrolls == -3)
    {
        scroll3Right(productContainer)
    }
    if(neededScrolls == -4)
    {
        scroll4Right(productContainer)
    }
    if(neededScrolls == 1)
    {
        scrollLeft(productContainer);
    }
    if(neededScrolls == 2)
    {
        scroll2Left(productContainer);
    }
    if(neededScrolls == 3)
    {
        scroll3Left(productContainer);
    }
    if(neededScrolls == 4)
    {
        scroll4Left(productContainer);
    }
}

function create_Indicator(sliderShowIndicatorFlex)
{
    indicatorButton = document.createElement('button');
    indicatorButton.classList.add('slider-show-indicator');
    indicatorBonus = document.createElement('div');
    indicatorBonus.classList.add('slider-show-indicator-bonus');

    indicatorButton.appendChild(indicatorBonus);

    sliderShowIndicatorFlex.appendChild(indicatorButton);
}



function get_current_index(sliderShowIndicatorFlex)
{
    let sliderShowIndicators = Array.from(sliderShowIndicatorFlex.children);
    let currentIndicatorIndex = 1;
    let actualIndicatorIndex;

    sliderShowIndicators.forEach(indicator =>
        {
            if(!indicator.children[0].classList.contains('current-indicator'))
            {
                    currentIndicatorIndex += 1;
            }
            else 
            {
                    actualIndicatorIndex = currentIndicatorIndex;
            }
        }

    )

    return actualIndicatorIndex;
}

function remove_Current_from_All(sliderShowIndicatorFlex)
{
    indicatorParents = Array.from(sliderShowIndicatorFlex.children);
    indicatorParents.forEach((child) =>
    {
        indicator = child.children[0];
        indicator.classList.remove('current-indicator');
    })
}

function update_Indicator(currentIndicatorIndex, sliderShowIndicatorFlex) {
    indicatorParent = sliderShowIndicatorFlex.children[currentIndicatorIndex];
    currentIndicator = indicatorParent.children[0];
    currentIndicator.classList.add('current-indicator');

}

function count_indicators(sliderShowIndicatorFlex) {
    indicatorParents = Array.from(sliderShowIndicatorFlex.children);
    indicators = 0;
    
    indicatorParents.forEach(parent =>
    {
        indicators += 1;
    })
    return indicators;
}

// SCROLLS

// SCROLL LEFT

function scrollLeft(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft += containerWidth;
}

function scroll2Left(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft += containerWidth + containerWidth;
}
function scroll3Left(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft += containerWidth + containerWidth + containerWidth;
}
function scroll4Left(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft += containerWidth + containerWidth + containerWidth + containerWidth;
}
// SCROLL RIGHT
function scrollRight(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft -= containerWidth;
}
function scroll2Right(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft -= containerWidth + containerWidth;
}
function scroll3Right(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft -= containerWidth + containerWidth + containerWidth;
}
function scroll4Right(productContainer)
{
    let containerDimensions = productContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    productContainer.scrollLeft -= containerWidth + containerWidth + containerWidth + containerWidth;
}


































// Responsive layout text



const welcomeText = document.querySelector('.naked-styled-header')
const ustensileBucatarie = document.querySelector('#ustensile-de-bucatarie-text');

if(window.innerWidth <= 1150)
{
    ustensileBucatarie.innerHTML = 'Ustensile de Bucatarie';
}
else
{
    ustensileBucatarie.innerHTML = 'Ustensile de <br> Bucatarie';
}
if(window.innerWidth <= 960)
{
    welcomeText.innerHTML = 'Bine ati venit la <br><span class="green-styled-text">Divers Angro Shop!</span>'
}
else
{
    welcomeText.innerHTML = 'Bine ati venit la <span class="green-styled-text">Divers Angro Shop!</span>'
}

window.addEventListener('resize', () =>
{
    if(window.innerWidth <= 1150)
    {
        ustensileBucatarie.innerHTML = 'Ustensile de Bucatarie';
    }
    else
    {
        ustensileBucatarie.innerHTML = 'Ustensile de <br> Bucatarie';
    }
    if(window.innerWidth <= 960)
    {
        welcomeText.innerHTML = 'Bine ati venit la <br><span class="green-styled-text">Divers Angro Shop!</span>'
    }
    else
    {
        welcomeText.innerHTML = 'Bine ati venit la <span class="green-styled-text">Divers Angro Shop!</span>'
    }
    
})

//Drop Down Category

const categoryDropDownDiv = document.querySelector('.category-drop-down-div'); 
const categoryDropDownIcon = document.querySelector('.category-drop-down-icon');
const categoryDropDownGrid = document.querySelector('.category-grid');
const categorydropDownHider = document.querySelector('.drop-down-hider');
categoryDropDownSubtracted = false;


categoryDropDownDiv.addEventListener('click', () =>
{
    if(!categoryDropDownSubtracted)
    {
        
        let gridHeight = categoryDropDownGrid.offsetHeight;
        categoryDropDownGrid.style.transform = `translateY(-${gridHeight + 250}px)`;
        categoryDropDownIcon.classList.add('category-drop-down-icon-rotate');
        categoryDropDownSubtracted = true;
        categorydropDownHider.style.height = '0px';
        categoryDropDownIcon.classList.remove('category-drop-down-icon-restore');
    }
    else
    {
        categoryDropDownGrid.style.transform = "translateY(0)";
        categorydropDownHider.style.height = '100%';
        categoryDropDownIcon.classList.remove('category-drop-down-icon-rotate');
        categoryDropDownIcon.classList.add('category-drop-down-icon-restore');
        categoryDropDownSubtracted = false;
    }
    
})

window.addEventListener('resize', () =>
{

    if(categoryDropDownSubtracted && window.innerWidth >= 750)
    {
        categoryDropDownGrid.style.transform = "translateY(0)";
        categorydropDownHider.style.height = '100%';
        categoryDropDownIcon.classList.remove('category-drop-down-icon-rotate');
        categoryDropDownIcon.classList.add('category-drop-down-icon-restore');
        categoryDropDownSubtracted = false;
    }
})