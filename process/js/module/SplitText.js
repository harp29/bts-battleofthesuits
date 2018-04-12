// import $ from 'jquery';
// import gsap from 'greensock';

/*
*
* OBJECTIVE: Retrieve h1 tag from user and break h1 text value into chars
*            and then animate each char onto the screen.
*            *Make it robust/provide options*
*
*            Task:
*            1. retrieve h1 tag/dom element
*            2. place the chars into the h1 via a span tag
*
* */

class SplitText{
    constructor(){

        // this.implementDomElement(domElement);

    }

    implementDomElement(domElement){

        let localvar = domElement;

       let splitDomElement = localvar.textContent.split(''),
           span;
           let spans = [];

       localvar.textContent = '';
        let length =splitDomElement.length;
       for(let i = 0; i < length; i++){
               span = document.createElement('span');
               span.textContent = splitDomElement[i];
               span.className = 'char-heading-primary';
               span.id = 'span'+(i+1);

               if(i == 6 || i == 9 || i == 13){
                   span.style.paddingRight="2rem";
               }

               localvar.appendChild(span);
               spans.push(span);
       };


       // this.styleChars(spans);

       return spans;

    };


};


export default SplitText;