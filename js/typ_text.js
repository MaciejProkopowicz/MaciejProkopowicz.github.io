// typed_text ver2
var appTyping = document.getElementById('appTyping');

var typewriter = new Typewriter(appTyping, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('<span style="color:white";>I am Maciej,</span>')
  .pauseFor(300)
  .start();

  //  EXAMPLE:
  // .pauseFor(2500)
  // .typeString('A simple yet powerful native javascript')
  // .pauseFor(300)
  // .deleteChars(10)
  // .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  // .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  // .pauseFor(1000)
  // .start();



// // typed text
// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");
//
// const textArray = ["producer.", "programmer.", "designer.", "web developer.", "cool guy !"];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;
//
// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   }
//   else {
//     cursorSpan.classList.remove("typing");
//     setTimeout(erase, newTextDelay);
//   }
// }
//
// function erase() {
//   if (charIndex > 0) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   }
//   else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }
//
// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   if(textArray.length) setTimeout(type, newTextDelay + 250);
// });
//
// // end
