let capsCheck = 0;
let shiftCheck = 0;

let word;

function capsCheckScript() {

  if (capsCheck == 0) { capsCheck = 1 } else {capsCheck = 0};

  if (changeLang == 0) {

    if (capsCheck == 0) {

      document.querySelector('.letter-q').innerHTML = 'q';
      document.querySelector('.letter-w').innerHTML = 'w';
      document.querySelector('.letter-e').innerHTML = 'e';
      document.querySelector('.letter-r').innerHTML = 'r';
      document.querySelector('.letter-t').innerHTML = 't';
      document.querySelector('.letter-y').innerHTML = 'y';
      document.querySelector('.letter-u').innerHTML = 'u';
      document.querySelector('.letter-i').innerHTML = 'i';
      document.querySelector('.letter-o').innerHTML = 'o';
      document.querySelector('.letter-p').innerHTML = 'p';

      document.querySelector('.letter-a').innerHTML = 'a';
      document.querySelector('.letter-s').innerHTML = 's';
      document.querySelector('.letter-d').innerHTML = 'd';
      document.querySelector('.letter-f').innerHTML = 'f';
      document.querySelector('.letter-g').innerHTML = 'g';
      document.querySelector('.letter-h').innerHTML = 'h';
      document.querySelector('.letter-j').innerHTML = 'j';
      document.querySelector('.letter-k').innerHTML = 'k';
      document.querySelector('.letter-l').innerHTML = 'l';

      document.querySelector('.letter-z').innerHTML = 'z';
      document.querySelector('.letter-x').innerHTML = 'x';
      document.querySelector('.letter-c').innerHTML = 'c';
      document.querySelector('.letter-v').innerHTML = 'v';
      document.querySelector('.letter-b').innerHTML = 'b';
      document.querySelector('.letter-n').innerHTML = 'n';
      document.querySelector('.letter-m').innerHTML = 'm';

    } else if (capsCheck == 1) {

      document.querySelector('.letter-q').innerHTML = 'Q';
      document.querySelector('.letter-w').innerHTML = 'W';
      document.querySelector('.letter-e').innerHTML = 'E';
      document.querySelector('.letter-r').innerHTML = 'R';
      document.querySelector('.letter-t').innerHTML = 'T';
      document.querySelector('.letter-y').innerHTML = 'Y';
      document.querySelector('.letter-u').innerHTML = 'U';
      document.querySelector('.letter-i').innerHTML = 'I';
      document.querySelector('.letter-o').innerHTML = 'O';
      document.querySelector('.letter-p').innerHTML = 'P';

      document.querySelector('.letter-a').innerHTML = 'A';
      document.querySelector('.letter-s').innerHTML = 'S';
      document.querySelector('.letter-d').innerHTML = 'D';
      document.querySelector('.letter-f').innerHTML = 'F';
      document.querySelector('.letter-g').innerHTML = 'G';
      document.querySelector('.letter-h').innerHTML = 'H';
      document.querySelector('.letter-j').innerHTML = 'J';
      document.querySelector('.letter-k').innerHTML = 'K';
      document.querySelector('.letter-l').innerHTML = 'L';

      document.querySelector('.letter-z').innerHTML = 'Z';
      document.querySelector('.letter-x').innerHTML = 'X';
      document.querySelector('.letter-c').innerHTML = 'C';
      document.querySelector('.letter-v').innerHTML = 'V';
      document.querySelector('.letter-b').innerHTML = 'B';
      document.querySelector('.letter-n').innerHTML = 'N';
      document.querySelector('.letter-m').innerHTML = 'M';

    }

  }

  if (changeLang == 1) {

    if (capsCheck == 0) {

      document.querySelector('.letter-q').innerHTML = 'й';
      document.querySelector('.letter-w').innerHTML = 'ц';
      document.querySelector('.letter-e').innerHTML = 'у';
      document.querySelector('.letter-r').innerHTML = 'к';
      document.querySelector('.letter-t').innerHTML = 'е';
      document.querySelector('.letter-y').innerHTML = 'н';
      document.querySelector('.letter-u').innerHTML = 'г';
      document.querySelector('.letter-i').innerHTML = 'ш';
      document.querySelector('.letter-o').innerHTML = 'щ';
      document.querySelector('.letter-p').innerHTML = 'з';
      document.querySelector('.left-bracket').innerHTML = 'х';
      document.querySelector('.right-bracket').innerHTML = 'ъ';

      document.querySelector('.letter-a').innerHTML = 'ф';
      document.querySelector('.letter-s').innerHTML = 'ы';
      document.querySelector('.letter-d').innerHTML = 'в';
      document.querySelector('.letter-f').innerHTML = 'а';
      document.querySelector('.letter-g').innerHTML = 'п';
      document.querySelector('.letter-h').innerHTML = 'р';
      document.querySelector('.letter-j').innerHTML = 'о';
      document.querySelector('.letter-k').innerHTML = 'л';
      document.querySelector('.letter-l').innerHTML = 'д';
      document.querySelector('.semicolon').innerHTML = 'ж';
      document.querySelector('.quote').innerHTML = 'э';

      document.querySelector('.letter-z').innerHTML = 'я';
      document.querySelector('.letter-x').innerHTML = 'ч';
      document.querySelector('.letter-c').innerHTML = 'с';
      document.querySelector('.letter-v').innerHTML = 'м';
      document.querySelector('.letter-b').innerHTML = 'и';
      document.querySelector('.letter-n').innerHTML = 'т';
      document.querySelector('.letter-m').innerHTML = 'ь';
      document.querySelector('.comma').innerHTML = 'б';
      document.querySelector('.dot').innerHTML = 'ю';

    } else if (capsCheck == 1) {

      document.querySelector('.letter-q').innerHTML = 'Й';
      document.querySelector('.letter-w').innerHTML = 'Ц';
      document.querySelector('.letter-e').innerHTML = 'У';
      document.querySelector('.letter-r').innerHTML = 'К';
      document.querySelector('.letter-t').innerHTML = 'Е';
      document.querySelector('.letter-y').innerHTML = 'Н';
      document.querySelector('.letter-u').innerHTML = 'Г';
      document.querySelector('.letter-i').innerHTML = 'Ш';
      document.querySelector('.letter-o').innerHTML = 'Щ';
      document.querySelector('.letter-p').innerHTML = 'З';
      document.querySelector('.left-bracket').innerHTML = 'Х';
      document.querySelector('.right-bracket').innerHTML = 'Ъ';

      document.querySelector('.letter-a').innerHTML = 'Ф';
      document.querySelector('.letter-s').innerHTML = 'Ы';
      document.querySelector('.letter-d').innerHTML = 'В';
      document.querySelector('.letter-f').innerHTML = 'А';
      document.querySelector('.letter-g').innerHTML = 'П';
      document.querySelector('.letter-h').innerHTML = 'Р';
      document.querySelector('.letter-j').innerHTML = 'О';
      document.querySelector('.letter-k').innerHTML = 'Л';
      document.querySelector('.letter-l').innerHTML = 'Д';
      document.querySelector('.semicolon').innerHTML = 'Ж';
      document.querySelector('.quote').innerHTML = 'Э';

      document.querySelector('.letter-z').innerHTML = 'Я';
      document.querySelector('.letter-x').innerHTML = 'Ч';
      document.querySelector('.letter-c').innerHTML = 'С';
      document.querySelector('.letter-v').innerHTML = 'М';
      document.querySelector('.letter-b').innerHTML = 'И';
      document.querySelector('.letter-n').innerHTML = 'Т';
      document.querySelector('.letter-m').innerHTML = 'Ь';
      document.querySelector('.comma').innerHTML = 'Б';
      document.querySelector('.dot').innerHTML = 'Ю';

    }
    
  }

}

let backquote = document.querySelector('.unknown');
let button1 = document.querySelector('.one');
let button2 = document.querySelector('.two');
let button3 = document.querySelector('.three');
let button4 = document.querySelector('.four');
let button5 = document.querySelector('.five');
let button6 = document.querySelector('.six');
let button7 = document.querySelector('.seven');
let button8 = document.querySelector('.eight');
let button9 = document.querySelector('.nine');
let button0 = document.querySelector('.zero');
let buttonMinus = document.querySelector('.minus');
let buttonEqual = document.querySelector('.equal');
let buttonBackspace = document.querySelector('.backspace');

let buttonTab = document.querySelector('.tab');
let buttonQ = document.querySelector('.letter-q');
let buttonW = document.querySelector('.letter-w');
let buttonE = document.querySelector('.letter-e');
let buttonR = document.querySelector('.letter-r');
let buttonT = document.querySelector('.letter-t');
let buttonY = document.querySelector('.letter-y');
let buttonU = document.querySelector('.letter-u');
let buttonI = document.querySelector('.letter-i');
let buttonO = document.querySelector('.letter-o');
let buttonP = document.querySelector('.letter-p');
let buttonBracketLeft = document.querySelector('.left-bracket');
let buttonBracketRight = document.querySelector('.right-bracket');
let buttonBackslash = document.querySelector('.slash-l');
let buttonDelete = document.querySelector('.delete');

let buttonCaps = document.querySelector('.caps');
let buttonA = document.querySelector('.letter-a');
let buttonS = document.querySelector('.letter-s');
let buttonD = document.querySelector('.letter-d');
let buttonF = document.querySelector('.letter-f');
let buttonG = document.querySelector('.letter-g');
let buttonH = document.querySelector('.letter-h');
let buttonJ = document.querySelector('.letter-j');
let buttonK = document.querySelector('.letter-k');
let buttonL = document.querySelector('.letter-l');
let buttonSemicolon = document.querySelector('.semicolon');
let buttonQuote = document.querySelector('.quote');
let buttonEnter = document.querySelector('.enter');

let buttonShiftLeft = document.querySelector('.shift-l');
let buttonZ = document.querySelector('.letter-z');
let buttonX = document.querySelector('.letter-x');
let buttonC = document.querySelector('.letter-c');
let buttonV = document.querySelector('.letter-v');
let buttonB = document.querySelector('.letter-b');
let buttonN = document.querySelector('.letter-n');
let buttonM = document.querySelector('.letter-m');
let buttonComma = document.querySelector('.comma');
let buttonPeriod = document.querySelector('.dot');
let buttonSlash = document.querySelector('.slash-r');
let buttonArrowUp = document.querySelector('.arrow-up');
let buttonShiftRight = document.querySelector('.shift-r');

let buttonControlLeft = document.querySelector('.ctrl-l');
let buttonMetaLeft = document.querySelector('.win');
let buttonAltLeft = document.querySelector('.alt-l');
let buttonSpace = document.querySelector('.space');
let buttonAltRight = document.querySelector('.alt-r');
let buttonControlRight = document.querySelector('.ctrl-r');
let buttonArrowLeft = document.querySelector('.arrow-l');
let buttonArrowDown = document.querySelector('.arrow-down');
let buttonArrowRight = document.querySelector('.arrow-r');

document.addEventListener ("keydown", function(event) {

  textWrap();

  if (changeLang == 0) {

    if (event.code == 'Backquote') { backquote.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '`' : '~' } else
    if (event.code == 'Digit1') { button1.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '1' : '!' } else
    if (event.code == 'Digit2') { button2.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '2' : '@' } else
    if (event.code == 'Digit3') { button3.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '3' : '#' } else
    if (event.code == 'Digit4') { button4.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '4' : '$' } else
    if (event.code == 'Digit5') { button5.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '5' : '%' } else
    if (event.code == 'Digit6') { button6.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '6' : '^' } else
    if (event.code == 'Digit7') { button7.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '7' : '&' } else
    if (event.code == 'Digit8') { button8.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '8' : '*' } else
    if (event.code == 'Digit9') { button9.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '9' : '(' } else
    if (event.code == 'Digit0') { button0.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '0' : ')' } else
    if (event.code == 'Minus') { buttonMinus.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '-' : '_' } else
    if (event.code == 'Equal') { buttonEqual.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '=' : '+' } else
    if (event.code == 'Backspace') { buttonBackspace.classList.add('active'); document.getElementById('kinput').innerHTML = document.getElementById('kinput').innerHTML.replace(/.$/, ''); } else

    if (event.code == 'Tab') { buttonTab.classList.add('active'); document.getElementById('kinput').innerHTML += '    ' } else
    if (event.code == 'KeyQ') { buttonQ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'q' : 'Q' } else
    if (event.code == 'KeyW') { buttonW.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'w' : 'W' } else
    if (event.code == 'KeyE') { buttonE.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'e' : 'E' } else
    if (event.code == 'KeyR') { buttonR.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'r' : 'R' } else
    if (event.code == 'KeyT') { buttonT.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 't' : 'T' } else
    if (event.code == 'KeyY') { buttonY.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'y' : 'Y' } else
    if (event.code == 'KeyU') { buttonU.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'u' : 'U' } else
    if (event.code == 'KeyI') { buttonI.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'i' : 'I' } else
    if (event.code == 'KeyO') { buttonO.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'o' : 'O' } else
    if (event.code == 'KeyP') { buttonP.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'p' : 'P' } else
    if (event.code == 'BracketLeft') { buttonBracketLeft.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '[' : '{' } else
    if (event.code == 'BracketRight') { buttonBracketRight.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? ']' : '}' } else
    if (event.code == 'Backslash') { buttonBackslash.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '\\' : '|' } else
    if (event.code == 'Delete') { buttonDelete.classList.add('active') }  else

    if (event.code == 'CapsLock') { buttonCaps.classList.add('active') } else
    if (event.code == 'KeyA') { buttonA.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'a' : 'A' } else
    if (event.code == 'KeyS') { buttonS.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 's' : 'S' } else
    if (event.code == 'KeyD') { buttonD.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'd' : 'D' } else
    if (event.code == 'KeyF') { buttonF.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'f' : 'F' } else
    if (event.code == 'KeyG') { buttonG.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'g' : 'G' } else
    if (event.code == 'KeyH') { buttonH.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'h' : 'H' } else
    if (event.code == 'KeyJ') { buttonJ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'j' : 'J' } else
    if (event.code == 'KeyK') { buttonK.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'k' : 'K' } else
    if (event.code == 'KeyL') { buttonL.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'l' : 'L' } else
    if (event.code == 'Semicolon') { buttonSemicolon.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? ';' : ':' } else
    if (event.code == 'Quote') { buttonQuote.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '\'' : '"' } else
    if (event.code == 'Enter') { buttonEnter.classList.add('active') } else

    if (event.code == 'ShiftLeft') { buttonShiftLeft.classList.add('active'); 

    capsCheck = 1;
    shiftCheck = 1;


    document.querySelector('.unknown').innerHTML = '~';
    document.querySelector('.one').innerHTML = '!';
    document.querySelector('.two').innerHTML = '@';
    document.querySelector('.three').innerHTML = '#';
    document.querySelector('.four').innerHTML = '$';
    document.querySelector('.five').innerHTML = '%';
    document.querySelector('.six').innerHTML = '^';
    document.querySelector('.seven').innerHTML = '&';
    document.querySelector('.eight').innerHTML = '*';
    document.querySelector('.nine').innerHTML = '(';
    document.querySelector('.zero').innerHTML = ')';
    document.querySelector('.minus').innerHTML = '_';
    document.querySelector('.equal').innerHTML = '+';

    document.querySelector('.letter-q').innerHTML = 'Q';
    document.querySelector('.letter-w').innerHTML = 'W';
    document.querySelector('.letter-e').innerHTML = 'E';
    document.querySelector('.letter-r').innerHTML = 'R';
    document.querySelector('.letter-t').innerHTML = 'T';
    document.querySelector('.letter-y').innerHTML = 'Y';
    document.querySelector('.letter-u').innerHTML = 'U';
    document.querySelector('.letter-i').innerHTML = 'I';
    document.querySelector('.letter-o').innerHTML = 'O';
    document.querySelector('.letter-p').innerHTML = 'P';
    document.querySelector('.left-bracket').innerHTML = '{';
    document.querySelector('.right-bracket').innerHTML = '}';
    document.querySelector('.slash-l').innerHTML = '|';

    document.querySelector('.letter-a').innerHTML = 'A';
    document.querySelector('.letter-s').innerHTML = 'S';
    document.querySelector('.letter-d').innerHTML = 'D';
    document.querySelector('.letter-f').innerHTML = 'F';
    document.querySelector('.letter-g').innerHTML = 'G';
    document.querySelector('.letter-h').innerHTML = 'H';
    document.querySelector('.letter-j').innerHTML = 'J';
    document.querySelector('.letter-k').innerHTML = 'K';
    document.querySelector('.letter-l').innerHTML = 'L';
    document.querySelector('.semicolon').innerHTML = ':';
    document.querySelector('.quote').innerHTML = '"';
    

    document.querySelector('.letter-z').innerHTML = 'Z';
    document.querySelector('.letter-x').innerHTML = 'X';
    document.querySelector('.letter-c').innerHTML = 'C';
    document.querySelector('.letter-v').innerHTML = 'V';
    document.querySelector('.letter-b').innerHTML = 'B';
    document.querySelector('.letter-n').innerHTML = 'N';
    document.querySelector('.letter-m').innerHTML = 'M';
    document.querySelector('.comma').innerHTML = '<';
    document.querySelector('.dot').innerHTML = '>';
    document.querySelector('.slash-r').innerHTML = '?';

    } else
    if (event.code == 'KeyZ') { buttonZ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'z' : 'Z' } else
    if (event.code == 'KeyX') { buttonX.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'x' : 'X' } else
    if (event.code == 'KeyC') { buttonC.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'c' : 'C' } else
    if (event.code == 'KeyV') { buttonV.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'v' : 'V' } else
    if (event.code == 'KeyB') { buttonB.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'b' : 'B' } else
    if (event.code == 'KeyN') { buttonN.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'n' : 'N' } else
    if (event.code == 'KeyM') { buttonM.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'm' : 'M' } else
    if (event.code == 'Comma') { buttonComma.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? ',' : '<' } else
    if (event.code == 'Period') { buttonPeriod.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '.' : '>' } else
    if (event.code == 'Slash') { buttonSlash.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '/' : '?' } else
    if (event.code == 'ArrowUp') { buttonArrowUp.classList.add('active'); document.getElementById('kinput').innerHTML += '▲' } else
    if (event.code == 'ShiftRight') { buttonShiftRight.classList.add('active');

      capsCheck = 1;
      shiftCheck = 1;


      document.querySelector('.unknown').innerHTML = '~';
      document.querySelector('.one').innerHTML = '!';
      document.querySelector('.two').innerHTML = '@';
      document.querySelector('.three').innerHTML = '#';
      document.querySelector('.four').innerHTML = '$';
      document.querySelector('.five').innerHTML = '%';
      document.querySelector('.six').innerHTML = '^';
      document.querySelector('.seven').innerHTML = '&';
      document.querySelector('.eight').innerHTML = '*';
      document.querySelector('.nine').innerHTML = '(';
      document.querySelector('.zero').innerHTML = ')';
      document.querySelector('.minus').innerHTML = '_';
      document.querySelector('.equal').innerHTML = '+';

      document.querySelector('.letter-q').innerHTML = 'Q';
      document.querySelector('.letter-w').innerHTML = 'W';
      document.querySelector('.letter-e').innerHTML = 'E';
      document.querySelector('.letter-r').innerHTML = 'R';
      document.querySelector('.letter-t').innerHTML = 'T';
      document.querySelector('.letter-y').innerHTML = 'Y';
      document.querySelector('.letter-u').innerHTML = 'U';
      document.querySelector('.letter-i').innerHTML = 'I';
      document.querySelector('.letter-o').innerHTML = 'O';
      document.querySelector('.letter-p').innerHTML = 'P';
      document.querySelector('.left-bracket').innerHTML = '{';
      document.querySelector('.right-bracket').innerHTML = '}';
      document.querySelector('.slash-l').innerHTML = '|';

      document.querySelector('.letter-a').innerHTML = 'A';
      document.querySelector('.letter-s').innerHTML = 'S';
      document.querySelector('.letter-d').innerHTML = 'D';
      document.querySelector('.letter-f').innerHTML = 'F';
      document.querySelector('.letter-g').innerHTML = 'G';
      document.querySelector('.letter-h').innerHTML = 'H';
      document.querySelector('.letter-j').innerHTML = 'J';
      document.querySelector('.letter-k').innerHTML = 'K';
      document.querySelector('.letter-l').innerHTML = 'L';
      document.querySelector('.semicolon').innerHTML = ':';
      document.querySelector('.quote').innerHTML = '"';
      

      document.querySelector('.letter-z').innerHTML = 'Z';
      document.querySelector('.letter-x').innerHTML = 'X';
      document.querySelector('.letter-c').innerHTML = 'C';
      document.querySelector('.letter-v').innerHTML = 'V';
      document.querySelector('.letter-b').innerHTML = 'B';
      document.querySelector('.letter-n').innerHTML = 'N';
      document.querySelector('.letter-m').innerHTML = 'M';
      document.querySelector('.comma').innerHTML = '<';
      document.querySelector('.dot').innerHTML = '>';
      document.querySelector('.slash-r').innerHTML = '?';

    } else

    if (event.code == 'ControlLeft') { buttonControlLeft.classList.add('active') } else
    if (event.code == 'MetaLeft') { buttonMetaLeft.classList.add('active') } else
    if (event.code == 'AltLeft') { buttonAltLeft.classList.add('active') } else
    if (event.code == 'Space') { buttonSpace.classList.add('active'); document.getElementById('kinput').innerHTML += ' ' } else
    if (event.code == 'AltRight') { buttonAltRight.classList.add('active') } else
    if (event.code == 'ControlRight') { buttonControlRight.classList.add('active') } else
    if (event.code == 'ArrowLeft') { buttonArrowLeft.classList.add('active'); document.getElementById('kinput').innerHTML += '◄' } else
    if (event.code == 'ArrowDown') { buttonArrowDown.classList.add('active'); document.getElementById('kinput').innerHTML += '▼' } else
    if (event.code == 'ArrowRight') { buttonArrowRight.classList.add('active'); document.getElementById('kinput').innerHTML += '►' }
  }

  if (changeLang == 1) {

    if (event.code == 'Backquote') { backquote.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ё' : 'Ё' } else
    if (event.code == 'Digit1') { button1.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '1' : '!' } else
    if (event.code == 'Digit2') { button2.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '2' : '@' } else
    if (event.code == 'Digit3') { button3.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '3' : '#' } else
    if (event.code == 'Digit4') { button4.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '4' : '$' } else
    if (event.code == 'Digit5') { button5.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '5' : '%' } else
    if (event.code == 'Digit6') { button6.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '6' : '^' } else
    if (event.code == 'Digit7') { button7.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '7' : '&' } else
    if (event.code == 'Digit8') { button8.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '8' : '*' } else
    if (event.code == 'Digit9') { button9.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '9' : '(' } else
    if (event.code == 'Digit0') { button0.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '0' : ')' } else
    if (event.code == 'Minus') { buttonMinus.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '-' : '_' } else
    if (event.code == 'Equal') { buttonEqual.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '=' : '+' } else
    if (event.code == 'Backspace') { buttonBackspace.classList.add('active'); document.getElementById('kinput').innerHTML = document.getElementById('kinput').innerHTML.replace(/.$/, ''); } else

    if (event.code == 'Tab') { buttonTab.classList.add('active'); document.getElementById('kinput').innerHTML += '    ' } else
    if (event.code == 'KeyQ') { buttonQ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'й' : 'Й' } else
    if (event.code == 'KeyW') { buttonW.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ц' : 'Ц' } else
    if (event.code == 'KeyE') { buttonE.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'у' : 'У' } else
    if (event.code == 'KeyR') { buttonR.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'к' : 'К' } else
    if (event.code == 'KeyT') { buttonT.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'е' : 'Е' } else
    if (event.code == 'KeyY') { buttonY.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'н' : 'Н' } else
    if (event.code == 'KeyU') { buttonU.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'г' : 'Г' } else
    if (event.code == 'KeyI') { buttonI.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ш' : 'Ш' } else
    if (event.code == 'KeyO') { buttonO.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'щ' : 'Щ' } else
    if (event.code == 'KeyP') { buttonP.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'з' : 'З' } else
    if (event.code == 'BracketLeft') { buttonBracketLeft.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'х' : 'Х' } else
    if (event.code == 'BracketRight') { buttonBracketRight.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ъ' : 'Ъ' } else
    if (event.code == 'Backslash') { buttonBackslash.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '\\' : '/' } else
    if (event.code == 'Delete') { buttonDelete.classList.add('active') }  else

    if (event.code == 'CapsLock') { buttonCaps.classList.add('active') } else
    if (event.code == 'KeyA') { buttonA.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ф' : 'Ф' } else
    if (event.code == 'KeyS') { buttonS.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ы' : 'Ы' } else
    if (event.code == 'KeyD') { buttonD.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'в' : 'В' } else
    if (event.code == 'KeyF') { buttonF.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'а' : 'А' } else
    if (event.code == 'KeyG') { buttonG.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'п' : 'П' } else
    if (event.code == 'KeyH') { buttonH.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'р' : 'Р' } else
    if (event.code == 'KeyJ') { buttonJ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'о' : 'О' } else
    if (event.code == 'KeyK') { buttonK.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'л' : 'Л' } else
    if (event.code == 'KeyL') { buttonL.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'д' : 'Д' } else
    if (event.code == 'Semicolon') { buttonSemicolon.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ж' : 'Ж' } else
    if (event.code == 'Quote') { buttonQuote.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'э' : 'Э' } else
    if (event.code == 'Enter') { buttonEnter.classList.add('active') } else

    if (event.code == 'ShiftLeft') { buttonShiftLeft.classList.add('active'); 

    capsCheck = 1;
    shiftCheck = 1;


    document.querySelector('.unknown').innerHTML = 'Ё';
    document.querySelector('.one').innerHTML = '!';
    document.querySelector('.two').innerHTML = '@';
    document.querySelector('.three').innerHTML = '№';
    document.querySelector('.four').innerHTML = ';';
    document.querySelector('.five').innerHTML = '%';
    document.querySelector('.six').innerHTML = ':';
    document.querySelector('.seven').innerHTML = '?';
    document.querySelector('.eight').innerHTML = '*';
    document.querySelector('.nine').innerHTML = '(';
    document.querySelector('.zero').innerHTML = ')';
    document.querySelector('.minus').innerHTML = '_';
    document.querySelector('.equal').innerHTML = '+';

    document.querySelector('.letter-q').innerHTML = 'Й';
    document.querySelector('.letter-w').innerHTML = 'Ц';
    document.querySelector('.letter-e').innerHTML = 'У';
    document.querySelector('.letter-r').innerHTML = 'К';
    document.querySelector('.letter-t').innerHTML = 'Е';
    document.querySelector('.letter-y').innerHTML = 'Н';
    document.querySelector('.letter-u').innerHTML = 'Г';
    document.querySelector('.letter-i').innerHTML = 'Ш';
    document.querySelector('.letter-o').innerHTML = 'Щ';
    document.querySelector('.letter-p').innerHTML = 'З';
    document.querySelector('.left-bracket').innerHTML = 'Х';
    document.querySelector('.right-bracket').innerHTML = 'Ъ';
    document.querySelector('.slash-l').innerHTML = '/';

    document.querySelector('.letter-a').innerHTML = 'Ф';
    document.querySelector('.letter-s').innerHTML = 'Ы';
    document.querySelector('.letter-d').innerHTML = 'В';
    document.querySelector('.letter-f').innerHTML = 'А';
    document.querySelector('.letter-g').innerHTML = 'П';
    document.querySelector('.letter-h').innerHTML = 'Р';
    document.querySelector('.letter-j').innerHTML = 'О';
    document.querySelector('.letter-k').innerHTML = 'Л';
    document.querySelector('.letter-l').innerHTML = 'Д';
    document.querySelector('.semicolon').innerHTML = 'Ж';
    document.querySelector('.quote').innerHTML = 'Э';
    

    document.querySelector('.letter-z').innerHTML = 'Я';
    document.querySelector('.letter-x').innerHTML = 'Ч';
    document.querySelector('.letter-c').innerHTML = 'С';
    document.querySelector('.letter-v').innerHTML = 'М';
    document.querySelector('.letter-b').innerHTML = 'И';
    document.querySelector('.letter-n').innerHTML = 'Т';
    document.querySelector('.letter-m').innerHTML = 'Ь';
    document.querySelector('.comma').innerHTML = 'Б';
    document.querySelector('.dot').innerHTML = 'Ю';
    document.querySelector('.slash-r').innerHTML = ',';

    } else
    if (event.code == 'KeyZ') { buttonZ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'я' : 'Я' } else
    if (event.code == 'KeyX') { buttonX.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ч' : 'Ч' } else
    if (event.code == 'KeyC') { buttonC.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'с' : 'С' } else
    if (event.code == 'KeyV') { buttonV.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'м' : 'М' } else
    if (event.code == 'KeyB') { buttonB.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'и' : 'И' } else
    if (event.code == 'KeyN') { buttonN.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'т' : 'Т' } else
    if (event.code == 'KeyM') { buttonM.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ь' : 'Ь' } else
    if (event.code == 'Comma') { buttonComma.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? 'б' : 'Б' } else
    if (event.code == 'Period') { buttonPeriod.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? 'ю' : 'Ю' } else
    if (event.code == 'Slash') { buttonSlash.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '.' : ',' } else
    if (event.code == 'ArrowUp') { buttonArrowUp.classList.add('active'); document.getElementById('kinput').innerHTML += '▲' } else
    if (event.code == 'ShiftRight') { buttonShiftRight.classList.add('active');

    capsCheck = 1;
    shiftCheck = 1;

    document.querySelector('.unknown').innerHTML = 'Ё';
    document.querySelector('.one').innerHTML = '!';
    document.querySelector('.two').innerHTML = '"';
    document.querySelector('.three').innerHTML = '№';
    document.querySelector('.four').innerHTML = ';';
    document.querySelector('.five').innerHTML = '%';
    document.querySelector('.six').innerHTML = ':';
    document.querySelector('.seven').innerHTML = '?';
    document.querySelector('.eight').innerHTML = '*';
    document.querySelector('.nine').innerHTML = '(';
    document.querySelector('.zero').innerHTML = ')';
    document.querySelector('.minus').innerHTML = '_';
    document.querySelector('.equal').innerHTML = '+';

    document.querySelector('.letter-q').innerHTML = 'Й';
    document.querySelector('.letter-w').innerHTML = 'Ц';
    document.querySelector('.letter-e').innerHTML = 'У';
    document.querySelector('.letter-r').innerHTML = 'К';
    document.querySelector('.letter-t').innerHTML = 'Е';
    document.querySelector('.letter-y').innerHTML = 'Н';
    document.querySelector('.letter-u').innerHTML = 'Г';
    document.querySelector('.letter-i').innerHTML = 'Ш';
    document.querySelector('.letter-o').innerHTML = 'Щ';
    document.querySelector('.letter-p').innerHTML = 'З';
    document.querySelector('.left-bracket').innerHTML = 'Х';
    document.querySelector('.right-bracket').innerHTML = 'Ъ';
    document.querySelector('.slash-l').innerHTML = '|';

    document.querySelector('.letter-a').innerHTML = 'Ф';
    document.querySelector('.letter-s').innerHTML = 'Ы';
    document.querySelector('.letter-d').innerHTML = 'В';
    document.querySelector('.letter-f').innerHTML = 'А';
    document.querySelector('.letter-g').innerHTML = 'П';
    document.querySelector('.letter-h').innerHTML = 'Р';
    document.querySelector('.letter-j').innerHTML = 'О';
    document.querySelector('.letter-k').innerHTML = 'Л';
    document.querySelector('.letter-l').innerHTML = 'Д';
    document.querySelector('.semicolon').innerHTML = 'Ж';
    document.querySelector('.quote').innerHTML = 'Э';
    

    document.querySelector('.letter-z').innerHTML = 'Я';
    document.querySelector('.letter-x').innerHTML = 'Ч';
    document.querySelector('.letter-c').innerHTML = 'С';
    document.querySelector('.letter-v').innerHTML = 'М';
    document.querySelector('.letter-b').innerHTML = 'И';
    document.querySelector('.letter-n').innerHTML = 'Т';
    document.querySelector('.letter-m').innerHTML = 'Ь';
    document.querySelector('.comma').innerHTML = 'Б';
    document.querySelector('.dot').innerHTML = 'Ю';
    document.querySelector('.slash-r').innerHTML = ',';

  } else

    if (event.code == 'ControlLeft') { buttonControlLeft.classList.add('active') } else
    if (event.code == 'MetaLeft') { buttonMetaLeft.classList.add('active') } else
    if (event.code == 'AltLeft') { buttonAltLeft.classList.add('active') } else
    if (event.code == 'Space') { buttonSpace.classList.add('active'); document.getElementById('kinput').innerHTML += ' ' } else
    if (event.code == 'AltRight') { buttonAltRight.classList.add('active') } else
    if (event.code == 'ControlRight') { buttonControlRight.classList.add('active') } else
    if (event.code == 'ArrowLeft') { buttonArrowLeft.classList.add('active'); document.getElementById('kinput').innerHTML += '◄' } else
    if (event.code == 'ArrowDown') { buttonArrowDown.classList.add('active'); document.getElementById('kinput').innerHTML += '▼' } else
    if (event.code == 'ArrowRight') { buttonArrowRight.classList.add('active'); document.getElementById('kinput').innerHTML += '►' }
  }
})

document.addEventListener ("keyup", function(event) {
  
  if (changeLang == 0) {

    if (event.code == 'Backquote') { backquote.classList.remove('active') } else
    if (event.code == 'Digit1') { button1.classList.remove('active') } else
    if (event.code == 'Digit2') { button2.classList.remove('active') } else
    if (event.code == 'Digit3') { button3.classList.remove('active') } else
    if (event.code == 'Digit4') { button4.classList.remove('active') } else
    if (event.code == 'Digit5') { button5.classList.remove('active') } else
    if (event.code == 'Digit6') { button6.classList.remove('active') } else
    if (event.code == 'Digit7') { button7.classList.remove('active') } else
    if (event.code == 'Digit8') { button8.classList.remove('active') } else
    if (event.code == 'Digit9') { button9.classList.remove('active') } else
    if (event.code == 'Digit0') { button0.classList.remove('active') } else
    if (event.code == 'Minus') { buttonMinus.classList.remove('active') } else
    if (event.code == 'Equal') { buttonEqual.classList.remove('active') } else
    if (event.code == 'Backspace') { buttonBackspace.classList.remove('active') } else

    if (event.code == 'Tab') { buttonTab.classList.remove('active') } else
    if (event.code == 'KeyQ') { buttonQ.classList.remove('active') } else
    if (event.code == 'KeyW') { buttonW.classList.remove('active') } else
    if (event.code == 'KeyE') { buttonE.classList.remove('active') } else
    if (event.code == 'KeyR') { buttonR.classList.remove('active') } else
    if (event.code == 'KeyT') { buttonT.classList.remove('active') } else
    if (event.code == 'KeyY') { buttonY.classList.remove('active') } else
    if (event.code == 'KeyU') { buttonU.classList.remove('active') } else
    if (event.code == 'KeyI') { buttonI.classList.remove('active') } else
    if (event.code == 'KeyO') { buttonO.classList.remove('active') } else
    if (event.code == 'KeyP') { buttonP.classList.remove('active') } else
    if (event.code == 'BracketLeft') { buttonBracketLeft.classList.remove('active') } else
    if (event.code == 'BracketRight') { buttonBracketRight.classList.remove('active') } else
    if (event.code == 'Backslash') { buttonBackslash.classList.remove('active') } else
    if (event.code == 'Delete') { buttonDelete.classList.remove('active') } else

    if (event.code == 'CapsLock') { buttonCaps.classList.remove('active'); capsCheckScript() } else
    if (event.code == 'KeyA') { buttonA.classList.remove('active') } else
    if (event.code == 'KeyS') { buttonS.classList.remove('active') } else
    if (event.code == 'KeyD') { buttonD.classList.remove('active') } else
    if (event.code == 'KeyF') { buttonF.classList.remove('active') } else
    if (event.code == 'KeyG') { buttonG.classList.remove('active') } else
    if (event.code == 'KeyH') { buttonH.classList.remove('active') } else
    if (event.code == 'KeyJ') { buttonJ.classList.remove('active') } else
    if (event.code == 'KeyK') { buttonK.classList.remove('active') } else
    if (event.code == 'KeyL') { buttonL.classList.remove('active') } else
    if (event.code == 'Semicolon') { buttonSemicolon.classList.remove('active') } else
    if (event.code == 'Quote') { buttonQuote.classList.remove('active') } else
    if (event.code == 'Enter') { buttonEnter.classList.remove('active') }

    if (event.code == 'ShiftLeft') { buttonShiftLeft.classList.remove('active');

      capsCheck = 0;
      shiftCheck = 0;

      document.querySelector('.unknown').innerHTML = '`';
      document.querySelector('.one').innerHTML = '1';
      document.querySelector('.two').innerHTML = '2';
      document.querySelector('.three').innerHTML = '3';
      document.querySelector('.four').innerHTML = '4';
      document.querySelector('.five').innerHTML = '5';
      document.querySelector('.six').innerHTML = '6';
      document.querySelector('.seven').innerHTML = '7';
      document.querySelector('.eight').innerHTML = '8';
      document.querySelector('.nine').innerHTML = '9';
      document.querySelector('.zero').innerHTML = '0';
      document.querySelector('.minus').innerHTML = '-';
      document.querySelector('.equal').innerHTML = '=';

      document.querySelector('.letter-q').innerHTML = 'q';
      document.querySelector('.letter-w').innerHTML = 'w';
      document.querySelector('.letter-e').innerHTML = 'e';
      document.querySelector('.letter-r').innerHTML = 'r';
      document.querySelector('.letter-t').innerHTML = 't';
      document.querySelector('.letter-y').innerHTML = 'y';
      document.querySelector('.letter-u').innerHTML = 'u';
      document.querySelector('.letter-i').innerHTML = 'i';
      document.querySelector('.letter-o').innerHTML = 'o';
      document.querySelector('.letter-p').innerHTML = 'p';
      document.querySelector('.left-bracket').innerHTML = '[';
      document.querySelector('.right-bracket').innerHTML = ']';
      document.querySelector('.slash-l').innerHTML = '\\';

      document.querySelector('.letter-a').innerHTML = 'a';
      document.querySelector('.letter-s').innerHTML = 's';
      document.querySelector('.letter-d').innerHTML = 'd';
      document.querySelector('.letter-f').innerHTML = 'f';
      document.querySelector('.letter-g').innerHTML = 'g';
      document.querySelector('.letter-h').innerHTML = 'h';
      document.querySelector('.letter-j').innerHTML = 'j';
      document.querySelector('.letter-k').innerHTML = 'k';
      document.querySelector('.letter-l').innerHTML = 'l';
      document.querySelector('.semicolon').innerHTML = ';';
      document.querySelector('.quote').innerHTML = '\'';

      document.querySelector('.letter-z').innerHTML = 'z';
      document.querySelector('.letter-x').innerHTML = 'x';
      document.querySelector('.letter-c').innerHTML = 'c';
      document.querySelector('.letter-v').innerHTML = 'v';
      document.querySelector('.letter-b').innerHTML = 'b';
      document.querySelector('.letter-n').innerHTML = 'n';
      document.querySelector('.letter-m').innerHTML = 'm';
      document.querySelector('.comma').innerHTML = ',';
      document.querySelector('.dot').innerHTML = '.';
      document.querySelector('.slash-r').innerHTML = '/';

    } else
    if (event.code == 'KeyZ') { buttonZ.classList.remove('active') } else
    if (event.code == 'KeyX') { buttonX.classList.remove('active') } else
    if (event.code == 'KeyC') { buttonC.classList.remove('active') } else
    if (event.code == 'KeyV') { buttonV.classList.remove('active') } else
    if (event.code == 'KeyB') { buttonB.classList.remove('active') } else
    if (event.code == 'KeyN') { buttonN.classList.remove('active') } else
    if (event.code == 'KeyM') { buttonM.classList.remove('active') } else
    if (event.code == 'Comma') { buttonComma.classList.remove('active') } else
    if (event.code == 'Period') { buttonPeriod.classList.remove('active') } else
    if (event.code == 'Slash') { buttonSlash.classList.remove('active') } else
    if (event.code == 'ArrowUp') { buttonArrowUp.classList.remove('active') } else
    if (event.code == 'ShiftRight') { buttonShiftRight.classList.remove('active');
    
    capsCheck = 0;
    shiftCheck = 0;

    document.querySelector('.unknown').innerHTML = '`';
    document.querySelector('.one').innerHTML = '1';
    document.querySelector('.two').innerHTML = '2';
    document.querySelector('.three').innerHTML = '3';
    document.querySelector('.four').innerHTML = '4';
    document.querySelector('.five').innerHTML = '5';
    document.querySelector('.six').innerHTML = '6';
    document.querySelector('.seven').innerHTML = '7';
    document.querySelector('.eight').innerHTML = '8';
    document.querySelector('.nine').innerHTML = '9';
    document.querySelector('.zero').innerHTML = '0';
    document.querySelector('.minus').innerHTML = '-';
    document.querySelector('.equal').innerHTML = '=';

    document.querySelector('.letter-q').innerHTML = 'q';
    document.querySelector('.letter-w').innerHTML = 'w';
    document.querySelector('.letter-e').innerHTML = 'e';
    document.querySelector('.letter-r').innerHTML = 'r';
    document.querySelector('.letter-t').innerHTML = 't';
    document.querySelector('.letter-y').innerHTML = 'y';
    document.querySelector('.letter-u').innerHTML = 'u';
    document.querySelector('.letter-i').innerHTML = 'i';
    document.querySelector('.letter-o').innerHTML = 'o';
    document.querySelector('.letter-p').innerHTML = 'p';
    document.querySelector('.left-bracket').innerHTML = '[';
    document.querySelector('.right-bracket').innerHTML = ']';
    document.querySelector('.slash-l').innerHTML = '\\';

    document.querySelector('.letter-a').innerHTML = 'a';
    document.querySelector('.letter-s').innerHTML = 's';
    document.querySelector('.letter-d').innerHTML = 'd';
    document.querySelector('.letter-f').innerHTML = 'f';
    document.querySelector('.letter-g').innerHTML = 'g';
    document.querySelector('.letter-h').innerHTML = 'h';
    document.querySelector('.letter-j').innerHTML = 'j';
    document.querySelector('.letter-k').innerHTML = 'k';
    document.querySelector('.letter-l').innerHTML = 'l';
    document.querySelector('.semicolon').innerHTML = ';';
    document.querySelector('.quote').innerHTML = '\'';

    document.querySelector('.letter-z').innerHTML = 'z';
    document.querySelector('.letter-x').innerHTML = 'x';
    document.querySelector('.letter-c').innerHTML = 'c';
    document.querySelector('.letter-v').innerHTML = 'v';
    document.querySelector('.letter-b').innerHTML = 'b';
    document.querySelector('.letter-n').innerHTML = 'n';
    document.querySelector('.letter-m').innerHTML = 'm';
    document.querySelector('.comma').innerHTML = ',';
    document.querySelector('.dot').innerHTML = '.';
    document.querySelector('.slash-r').innerHTML = '/';

  } else
    
    if (event.code == 'ControlLeft') { buttonControlLeft.classList.remove('active') } else
    if (event.code == 'MetaLeft') { buttonMetaLeft.classList.remove('active') } else
    if (event.code == 'AltLeft') { buttonAltLeft.classList.remove('active') } else
    if (event.code == 'Space') { buttonSpace.classList.remove('active') } else
    if (event.code == 'AltRight') { buttonAltRight.classList.remove('active') } else
    if (event.code == 'ControlRight') { buttonControlRight.classList.remove('active') } else
    if (event.code == 'ArrowLeft') { buttonArrowLeft.classList.remove('active') } else
    if (event.code == 'ArrowDown') { buttonArrowDown.classList.remove('active') } else
    if (event.code == 'ArrowRight') { buttonArrowRight.classList.remove('active') }
  }

  if (changeLang == 1) {

    if (event.code == 'Backquote') { backquote.classList.remove('active') } else
    if (event.code == 'Digit1') { button1.classList.remove('active') } else
    if (event.code == 'Digit2') { button2.classList.remove('active') } else
    if (event.code == 'Digit3') { button3.classList.remove('active') } else
    if (event.code == 'Digit4') { button4.classList.remove('active') } else
    if (event.code == 'Digit5') { button5.classList.remove('active') } else
    if (event.code == 'Digit6') { button6.classList.remove('active') } else
    if (event.code == 'Digit7') { button7.classList.remove('active') } else
    if (event.code == 'Digit8') { button8.classList.remove('active') } else
    if (event.code == 'Digit9') { button9.classList.remove('active') } else
    if (event.code == 'Digit0') { button0.classList.remove('active') } else
    if (event.code == 'Minus') { buttonMinus.classList.remove('active') } else
    if (event.code == 'Equal') { buttonEqual.classList.remove('active') } else
    if (event.code == 'Backspace') { buttonBackspace.classList.remove('active') } else

    if (event.code == 'Tab') { buttonTab.classList.remove('active') } else
    if (event.code == 'KeyQ') { buttonQ.classList.remove('active') } else
    if (event.code == 'KeyW') { buttonW.classList.remove('active') } else
    if (event.code == 'KeyE') { buttonE.classList.remove('active') } else
    if (event.code == 'KeyR') { buttonR.classList.remove('active') } else
    if (event.code == 'KeyT') { buttonT.classList.remove('active') } else
    if (event.code == 'KeyY') { buttonY.classList.remove('active') } else
    if (event.code == 'KeyU') { buttonU.classList.remove('active') } else
    if (event.code == 'KeyI') { buttonI.classList.remove('active') } else
    if (event.code == 'KeyO') { buttonO.classList.remove('active') } else
    if (event.code == 'KeyP') { buttonP.classList.remove('active') } else
    if (event.code == 'BracketLeft') { buttonBracketLeft.classList.remove('active') } else
    if (event.code == 'BracketRight') { buttonBracketRight.classList.remove('active') } else
    if (event.code == 'Backslash') { buttonBackslash.classList.remove('active') } else
    if (event.code == 'Delete') { buttonDelete.classList.remove('active') } else

    if (event.code == 'CapsLock') { buttonCaps.classList.remove('active'); capsCheckScript() } else
    if (event.code == 'KeyA') { buttonA.classList.remove('active') } else
    if (event.code == 'KeyS') { buttonS.classList.remove('active') } else
    if (event.code == 'KeyD') { buttonD.classList.remove('active') } else
    if (event.code == 'KeyF') { buttonF.classList.remove('active') } else
    if (event.code == 'KeyG') { buttonG.classList.remove('active') } else
    if (event.code == 'KeyH') { buttonH.classList.remove('active') } else
    if (event.code == 'KeyJ') { buttonJ.classList.remove('active') } else
    if (event.code == 'KeyK') { buttonK.classList.remove('active') } else
    if (event.code == 'KeyL') { buttonL.classList.remove('active') } else
    if (event.code == 'Semicolon') { buttonSemicolon.classList.remove('active') } else
    if (event.code == 'Quote') { buttonQuote.classList.remove('active') } else
    if (event.code == 'Enter') { buttonEnter.classList.remove('active') }

    if (event.code == 'ShiftLeft') { buttonShiftLeft.classList.remove('active');

    capsCheck = 0;
    shiftCheck = 0;

    document.querySelector('.unknown').innerHTML = 'ё';
    document.querySelector('.one').innerHTML = '1';
    document.querySelector('.two').innerHTML = '2';
    document.querySelector('.three').innerHTML = '3';
    document.querySelector('.four').innerHTML = '4';
    document.querySelector('.five').innerHTML = '5';
    document.querySelector('.six').innerHTML = '6';
    document.querySelector('.seven').innerHTML = '7';
    document.querySelector('.eight').innerHTML = '8';
    document.querySelector('.nine').innerHTML = '9';
    document.querySelector('.zero').innerHTML = '0';
    document.querySelector('.minus').innerHTML = '-';
    document.querySelector('.equal').innerHTML = '=';

    document.querySelector('.letter-q').innerHTML = 'й';
    document.querySelector('.letter-w').innerHTML = 'ц';
    document.querySelector('.letter-e').innerHTML = 'у';
    document.querySelector('.letter-r').innerHTML = 'к';
    document.querySelector('.letter-t').innerHTML = 'е';
    document.querySelector('.letter-y').innerHTML = 'н';
    document.querySelector('.letter-u').innerHTML = 'г';
    document.querySelector('.letter-i').innerHTML = 'ш';
    document.querySelector('.letter-o').innerHTML = 'щ';
    document.querySelector('.letter-p').innerHTML = 'з';
    document.querySelector('.left-bracket').innerHTML = 'х';
    document.querySelector('.right-bracket').innerHTML = 'ъ';
    document.querySelector('.slash-l').innerHTML = '\\';

    document.querySelector('.letter-a').innerHTML = 'ф';
    document.querySelector('.letter-s').innerHTML = 'ы';
    document.querySelector('.letter-d').innerHTML = 'в';
    document.querySelector('.letter-f').innerHTML = 'а';
    document.querySelector('.letter-g').innerHTML = 'п';
    document.querySelector('.letter-h').innerHTML = 'р';
    document.querySelector('.letter-j').innerHTML = 'о';
    document.querySelector('.letter-k').innerHTML = 'л';
    document.querySelector('.letter-l').innerHTML = 'д';
    document.querySelector('.semicolon').innerHTML = 'ж';
    document.querySelector('.quote').innerHTML = 'э';

    document.querySelector('.letter-z').innerHTML = 'я';
    document.querySelector('.letter-x').innerHTML = 'ч';
    document.querySelector('.letter-c').innerHTML = 'с';
    document.querySelector('.letter-v').innerHTML = 'м';
    document.querySelector('.letter-b').innerHTML = 'и';
    document.querySelector('.letter-n').innerHTML = 'т';
    document.querySelector('.letter-m').innerHTML = 'ь';
    document.querySelector('.comma').innerHTML = 'б';
    document.querySelector('.dot').innerHTML = 'ю';
    document.querySelector('.slash-r').innerHTML = '.';

  } else
    if (event.code == 'KeyZ') { buttonZ.classList.remove('active') } else
    if (event.code == 'KeyX') { buttonX.classList.remove('active') } else
    if (event.code == 'KeyC') { buttonC.classList.remove('active') } else
    if (event.code == 'KeyV') { buttonV.classList.remove('active') } else
    if (event.code == 'KeyB') { buttonB.classList.remove('active') } else
    if (event.code == 'KeyN') { buttonN.classList.remove('active') } else
    if (event.code == 'KeyM') { buttonM.classList.remove('active') } else
    if (event.code == 'Comma') { buttonComma.classList.remove('active') } else
    if (event.code == 'Period') { buttonPeriod.classList.remove('active') } else
    if (event.code == 'Slash') { buttonSlash.classList.remove('active') } else
    if (event.code == 'ArrowUp') { buttonArrowUp.classList.remove('active') } else
    if (event.code == 'ShiftRight') { buttonShiftRight.classList.remove('active');
    
    capsCheck = 0;
    shiftCheck = 0;

    document.querySelector('.unknown').innerHTML = 'ё';
    document.querySelector('.one').innerHTML = '1';
    document.querySelector('.two').innerHTML = '2';
    document.querySelector('.three').innerHTML = '3';
    document.querySelector('.four').innerHTML = '4';
    document.querySelector('.five').innerHTML = '5';
    document.querySelector('.six').innerHTML = '6';
    document.querySelector('.seven').innerHTML = '7';
    document.querySelector('.eight').innerHTML = '8';
    document.querySelector('.nine').innerHTML = '9';
    document.querySelector('.zero').innerHTML = '0';
    document.querySelector('.minus').innerHTML = '-';
    document.querySelector('.equal').innerHTML = '=';

    document.querySelector('.letter-q').innerHTML = 'й';
    document.querySelector('.letter-w').innerHTML = 'ц';
    document.querySelector('.letter-e').innerHTML = 'у';
    document.querySelector('.letter-r').innerHTML = 'к';
    document.querySelector('.letter-t').innerHTML = 'е';
    document.querySelector('.letter-y').innerHTML = 'н';
    document.querySelector('.letter-u').innerHTML = 'г';
    document.querySelector('.letter-i').innerHTML = 'ш';
    document.querySelector('.letter-o').innerHTML = 'щ';
    document.querySelector('.letter-p').innerHTML = 'з';
    document.querySelector('.left-bracket').innerHTML = 'х';
    document.querySelector('.right-bracket').innerHTML = 'ъ';
    document.querySelector('.slash-l').innerHTML = '\\';

    document.querySelector('.letter-a').innerHTML = 'ф';
    document.querySelector('.letter-s').innerHTML = 'ы';
    document.querySelector('.letter-d').innerHTML = 'в';
    document.querySelector('.letter-f').innerHTML = 'а';
    document.querySelector('.letter-g').innerHTML = 'п';
    document.querySelector('.letter-h').innerHTML = 'р';
    document.querySelector('.letter-j').innerHTML = 'о';
    document.querySelector('.letter-k').innerHTML = 'л';
    document.querySelector('.letter-l').innerHTML = 'д';
    document.querySelector('.semicolon').innerHTML = 'ж';
    document.querySelector('.quote').innerHTML = 'э';

    document.querySelector('.letter-z').innerHTML = 'я';
    document.querySelector('.letter-x').innerHTML = 'ч';
    document.querySelector('.letter-c').innerHTML = 'с';
    document.querySelector('.letter-v').innerHTML = 'м';
    document.querySelector('.letter-b').innerHTML = 'и';
    document.querySelector('.letter-n').innerHTML = 'т';
    document.querySelector('.letter-m').innerHTML = 'ь';
    document.querySelector('.comma').innerHTML = 'б';
    document.querySelector('.dot').innerHTML = 'ю';
    document.querySelector('.slash-r').innerHTML = '.';

  } else
    
    if (event.code == 'ControlLeft') { buttonControlLeft.classList.remove('active') } else
    if (event.code == 'MetaLeft') { buttonMetaLeft.classList.remove('active') } else
    if (event.code == 'AltLeft') { buttonAltLeft.classList.remove('active') } else
    if (event.code == 'Space') { buttonSpace.classList.remove('active') } else
    if (event.code == 'AltRight') { buttonAltRight.classList.remove('active') } else
    if (event.code == 'ControlRight') { buttonControlRight.classList.remove('active') } else
    if (event.code == 'ArrowLeft') { buttonArrowLeft.classList.remove('active') } else
    if (event.code == 'ArrowDown') { buttonArrowDown.classList.remove('active') } else
    if (event.code == 'ArrowRight') { buttonArrowRight.classList.remove('active') }
  }

})

document.addEventListener ("mousedown", function(event) {

  if (changeLang == 0) {

    if (event.code == 'Backquote') { backquote.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '`' : '~' } else
    if (event.code == 'Digit1') { button1.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '1' : '!' } else
    if (event.code == 'Digit2') { button2.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '2' : '@' } else
    if (event.code == 'Digit3') { button3.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '3' : '#' } else
    if (event.code == 'Digit4') { button4.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '4' : '$' } else
    if (event.code == 'Digit5') { button5.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '5' : '%' } else
    if (event.code == 'Digit6') { button6.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '6' : '^' } else
    if (event.code == 'Digit7') { button7.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '7' : '&' } else
    if (event.code == 'Digit8') { button8.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '8' : '*' } else
    if (event.code == 'Digit9') { button9.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '9' : '(' } else
    if (event.code == 'Digit0') { button0.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '0' : ')' } else
    if (event.code == 'Minus') { buttonMinus.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '-' : '_' } else
    if (event.code == 'Equal') { buttonEqual.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '=' : '+' } else
    if (event.code == 'Backspace') { buttonBackspace.classList.add('active'); document.getElementById('kinput').innerHTML = document.getElementById('kinput').innerHTML.replace(/.$/, ''); } else

    if (event.code == 'Tab') { buttonTab.classList.add('active'); document.getElementById('kinput').innerHTML += '    ' } else
    if (event.code == 'KeyQ') { buttonQ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'q' : 'Q' } else
    if (event.code == 'KeyW') { buttonW.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'w' : 'W' } else
    if (event.code == 'KeyE') { buttonE.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'e' : 'E' } else
    if (event.code == 'KeyR') { buttonR.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'r' : 'R' } else
    if (event.code == 'KeyT') { buttonT.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 't' : 'T' } else
    if (event.code == 'KeyY') { buttonY.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'y' : 'Y' } else
    if (event.code == 'KeyU') { buttonU.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'u' : 'U' } else
    if (event.code == 'KeyI') { buttonI.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'i' : 'I' } else
    if (event.code == 'KeyO') { buttonO.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'o' : 'O' } else
    if (event.code == 'KeyP') { buttonP.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'p' : 'P' } else
    if (event.code == 'BracketLeft') { buttonBracketLeft.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '[' : '{' } else
    if (event.code == 'BracketRight') { buttonBracketRight.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? ']' : '}' } else
    if (event.code == 'Backslash') { buttonBackslash.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '\\' : '|' } else
    if (event.code == 'Delete') { buttonDelete.classList.add('active') }  else

    if (event.code == 'CapsLock') { buttonCaps.classList.add('active') } else
    if (event.code == 'KeyA') { buttonA.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'a' : 'A' } else
    if (event.code == 'KeyS') { buttonS.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 's' : 'S' } else
    if (event.code == 'KeyD') { buttonD.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'd' : 'D' } else
    if (event.code == 'KeyF') { buttonF.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'f' : 'F' } else
    if (event.code == 'KeyG') { buttonG.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'g' : 'G' } else
    if (event.code == 'KeyH') { buttonH.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'h' : 'H' } else
    if (event.code == 'KeyJ') { buttonJ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'j' : 'J' } else
    if (event.code == 'KeyK') { buttonK.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'k' : 'K' } else
    if (event.code == 'KeyL') { buttonL.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'l' : 'L' } else
    if (event.code == 'Semicolon') { buttonSemicolon.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? ';' : ':' } else
    if (event.code == 'Quote') { buttonQuote.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '\'' : '"' } else
    if (event.code == 'Enter') { buttonEnter.classList.add('active') } else

    if (event.code == 'ShiftLeft') { buttonShiftLeft.classList.add('active'); 

    capsCheck = 1;
    shiftCheck = 1;


    document.querySelector('.unknown').innerHTML = '~';
    document.querySelector('.one').innerHTML = '!';
    document.querySelector('.two').innerHTML = '@';
    document.querySelector('.three').innerHTML = '#';
    document.querySelector('.four').innerHTML = '$';
    document.querySelector('.five').innerHTML = '%';
    document.querySelector('.six').innerHTML = '^';
    document.querySelector('.seven').innerHTML = '&';
    document.querySelector('.eight').innerHTML = '*';
    document.querySelector('.nine').innerHTML = '(';
    document.querySelector('.zero').innerHTML = ')';
    document.querySelector('.minus').innerHTML = '_';
    document.querySelector('.equal').innerHTML = '+';

    document.querySelector('.letter-q').innerHTML = 'Q';
    document.querySelector('.letter-w').innerHTML = 'W';
    document.querySelector('.letter-e').innerHTML = 'E';
    document.querySelector('.letter-r').innerHTML = 'R';
    document.querySelector('.letter-t').innerHTML = 'T';
    document.querySelector('.letter-y').innerHTML = 'Y';
    document.querySelector('.letter-u').innerHTML = 'U';
    document.querySelector('.letter-i').innerHTML = 'I';
    document.querySelector('.letter-o').innerHTML = 'O';
    document.querySelector('.letter-p').innerHTML = 'P';
    document.querySelector('.left-bracket').innerHTML = '{';
    document.querySelector('.right-bracket').innerHTML = '}';
    document.querySelector('.slash-l').innerHTML = '|';

    document.querySelector('.letter-a').innerHTML = 'A';
    document.querySelector('.letter-s').innerHTML = 'S';
    document.querySelector('.letter-d').innerHTML = 'D';
    document.querySelector('.letter-f').innerHTML = 'F';
    document.querySelector('.letter-g').innerHTML = 'G';
    document.querySelector('.letter-h').innerHTML = 'H';
    document.querySelector('.letter-j').innerHTML = 'J';
    document.querySelector('.letter-k').innerHTML = 'K';
    document.querySelector('.letter-l').innerHTML = 'L';
    document.querySelector('.semicolon').innerHTML = ':';
    document.querySelector('.quote').innerHTML = '"';
    

    document.querySelector('.letter-z').innerHTML = 'Z';
    document.querySelector('.letter-x').innerHTML = 'X';
    document.querySelector('.letter-c').innerHTML = 'C';
    document.querySelector('.letter-v').innerHTML = 'V';
    document.querySelector('.letter-b').innerHTML = 'B';
    document.querySelector('.letter-n').innerHTML = 'N';
    document.querySelector('.letter-m').innerHTML = 'M';
    document.querySelector('.comma').innerHTML = '<';
    document.querySelector('.dot').innerHTML = '>';
    document.querySelector('.slash-r').innerHTML = '?';

    } else
    if (event.code == 'KeyZ') { buttonZ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'z' : 'Z' } else
    if (event.code == 'KeyX') { buttonX.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'x' : 'X' } else
    if (event.code == 'KeyC') { buttonC.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'c' : 'C' } else
    if (event.code == 'KeyV') { buttonV.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'v' : 'V' } else
    if (event.code == 'KeyB') { buttonB.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'b' : 'B' } else
    if (event.code == 'KeyN') { buttonN.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'n' : 'N' } else
    if (event.code == 'KeyM') { buttonM.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'm' : 'M' } else
    if (event.code == 'Comma') { buttonComma.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? ',' : '<' } else
    if (event.code == 'Period') { buttonPeriod.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '.' : '>' } else
    if (event.code == 'Slash') { buttonSlash.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '/' : '?' } else
    if (event.code == 'ArrowUp') { buttonArrowUp.classList.add('active'); document.getElementById('kinput').innerHTML += '▲' } else
    if (event.code == 'ShiftRight') { buttonShiftRight.classList.add('active');

      capsCheck = 1;
      shiftCheck = 1;


      document.querySelector('.unknown').innerHTML = '~';
      document.querySelector('.one').innerHTML = '!';
      document.querySelector('.two').innerHTML = '@';
      document.querySelector('.three').innerHTML = '#';
      document.querySelector('.four').innerHTML = '$';
      document.querySelector('.five').innerHTML = '%';
      document.querySelector('.six').innerHTML = '^';
      document.querySelector('.seven').innerHTML = '&';
      document.querySelector('.eight').innerHTML = '*';
      document.querySelector('.nine').innerHTML = '(';
      document.querySelector('.zero').innerHTML = ')';
      document.querySelector('.minus').innerHTML = '_';
      document.querySelector('.equal').innerHTML = '+';

      document.querySelector('.letter-q').innerHTML = 'Q';
      document.querySelector('.letter-w').innerHTML = 'W';
      document.querySelector('.letter-e').innerHTML = 'E';
      document.querySelector('.letter-r').innerHTML = 'R';
      document.querySelector('.letter-t').innerHTML = 'T';
      document.querySelector('.letter-y').innerHTML = 'Y';
      document.querySelector('.letter-u').innerHTML = 'U';
      document.querySelector('.letter-i').innerHTML = 'I';
      document.querySelector('.letter-o').innerHTML = 'O';
      document.querySelector('.letter-p').innerHTML = 'P';
      document.querySelector('.left-bracket').innerHTML = '{';
      document.querySelector('.right-bracket').innerHTML = '}';
      document.querySelector('.slash-l').innerHTML = '|';

      document.querySelector('.letter-a').innerHTML = 'A';
      document.querySelector('.letter-s').innerHTML = 'S';
      document.querySelector('.letter-d').innerHTML = 'D';
      document.querySelector('.letter-f').innerHTML = 'F';
      document.querySelector('.letter-g').innerHTML = 'G';
      document.querySelector('.letter-h').innerHTML = 'H';
      document.querySelector('.letter-j').innerHTML = 'J';
      document.querySelector('.letter-k').innerHTML = 'K';
      document.querySelector('.letter-l').innerHTML = 'L';
      document.querySelector('.semicolon').innerHTML = ':';
      document.querySelector('.quote').innerHTML = '"';
      

      document.querySelector('.letter-z').innerHTML = 'Z';
      document.querySelector('.letter-x').innerHTML = 'X';
      document.querySelector('.letter-c').innerHTML = 'C';
      document.querySelector('.letter-v').innerHTML = 'V';
      document.querySelector('.letter-b').innerHTML = 'B';
      document.querySelector('.letter-n').innerHTML = 'N';
      document.querySelector('.letter-m').innerHTML = 'M';
      document.querySelector('.comma').innerHTML = '<';
      document.querySelector('.dot').innerHTML = '>';
      document.querySelector('.slash-r').innerHTML = '?';

    } else

    if (event.code == 'ControlLeft') { buttonControlLeft.classList.add('active') } else
    if (event.code == 'MetaLeft') { buttonMetaLeft.classList.add('active') } else
    if (event.code == 'AltLeft') { buttonAltLeft.classList.add('active') } else
    if (event.code == 'Space') { buttonSpace.classList.add('active'); document.getElementById('kinput').innerHTML += ' ' } else
    if (event.code == 'AltRight') { buttonAltRight.classList.add('active') } else
    if (event.code == 'ControlRight') { buttonControlRight.classList.add('active') } else
    if (event.code == 'ArrowLeft') { buttonArrowLeft.classList.add('active'); document.getElementById('kinput').innerHTML += '◄' } else
    if (event.code == 'ArrowDown') { buttonArrowDown.classList.add('active'); document.getElementById('kinput').innerHTML += '▼' } else
    if (event.code == 'ArrowRight') { buttonArrowRight.classList.add('active'); document.getElementById('kinput').innerHTML += '►' }
  }

  if (changeLang == 1) {

    if (event.code == 'Backquote') { backquote.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ё' : 'Ё' } else
    if (event.code == 'Digit1') { button1.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '1' : '!' } else
    if (event.code == 'Digit2') { button2.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '2' : '@' } else
    if (event.code == 'Digit3') { button3.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '3' : '#' } else
    if (event.code == 'Digit4') { button4.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '4' : '$' } else
    if (event.code == 'Digit5') { button5.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '5' : '%' } else
    if (event.code == 'Digit6') { button6.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '6' : '^' } else
    if (event.code == 'Digit7') { button7.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '7' : '&' } else
    if (event.code == 'Digit8') { button8.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '8' : '*' } else
    if (event.code == 'Digit9') { button9.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '9' : '(' } else
    if (event.code == 'Digit0') { button0.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '0' : ')' } else
    if (event.code == 'Minus') { buttonMinus.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '-' : '_' } else
    if (event.code == 'Equal') { buttonEqual.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '=' : '+' } else
    if (event.code == 'Backspace') { buttonBackspace.classList.add('active'); document.getElementById('kinput').innerHTML = document.getElementById('kinput').innerHTML.replace(/.$/, ''); } else

    if (event.code == 'Tab') { buttonTab.classList.add('active'); document.getElementById('kinput').innerHTML += '    ' } else
    if (event.code == 'KeyQ') { buttonQ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'й' : 'Й' } else
    if (event.code == 'KeyW') { buttonW.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ц' : 'Ц' } else
    if (event.code == 'KeyE') { buttonE.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'у' : 'У' } else
    if (event.code == 'KeyR') { buttonR.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'к' : 'К' } else
    if (event.code == 'KeyT') { buttonT.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'е' : 'Е' } else
    if (event.code == 'KeyY') { buttonY.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'н' : 'Н' } else
    if (event.code == 'KeyU') { buttonU.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'г' : 'Г' } else
    if (event.code == 'KeyI') { buttonI.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ш' : 'Ш' } else
    if (event.code == 'KeyO') { buttonO.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'щ' : 'Щ' } else
    if (event.code == 'KeyP') { buttonP.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'з' : 'З' } else
    if (event.code == 'BracketLeft') { buttonBracketLeft.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'х' : 'Х' } else
    if (event.code == 'BracketRight') { buttonBracketRight.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ъ' : 'Ъ' } else
    if (event.code == 'Backslash') { buttonBackslash.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '\\' : '/' } else
    if (event.code == 'Delete') { buttonDelete.classList.add('active') }  else

    if (event.code == 'CapsLock') { buttonCaps.classList.add('active') } else
    if (event.code == 'KeyA') { buttonA.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ф' : 'Ф' } else
    if (event.code == 'KeyS') { buttonS.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ы' : 'Ы' } else
    if (event.code == 'KeyD') { buttonD.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'в' : 'В' } else
    if (event.code == 'KeyF') { buttonF.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'а' : 'А' } else
    if (event.code == 'KeyG') { buttonG.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'п' : 'П' } else
    if (event.code == 'KeyH') { buttonH.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'р' : 'Р' } else
    if (event.code == 'KeyJ') { buttonJ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'о' : 'О' } else
    if (event.code == 'KeyK') { buttonK.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'л' : 'Л' } else
    if (event.code == 'KeyL') { buttonL.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'д' : 'Д' } else
    if (event.code == 'Semicolon') { buttonSemicolon.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ж' : 'Ж' } else
    if (event.code == 'Quote') { buttonQuote.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'э' : 'Э' } else
    if (event.code == 'Enter') { buttonEnter.classList.add('active') } else

    if (event.code == 'ShiftLeft') { buttonShiftLeft.classList.add('active'); 

    capsCheck = 1;
    shiftCheck = 1;


    document.querySelector('.unknown').innerHTML = 'Ё';
    document.querySelector('.one').innerHTML = '!';
    document.querySelector('.two').innerHTML = '@';
    document.querySelector('.three').innerHTML = '№';
    document.querySelector('.four').innerHTML = ';';
    document.querySelector('.five').innerHTML = '%';
    document.querySelector('.six').innerHTML = ':';
    document.querySelector('.seven').innerHTML = '?';
    document.querySelector('.eight').innerHTML = '*';
    document.querySelector('.nine').innerHTML = '(';
    document.querySelector('.zero').innerHTML = ')';
    document.querySelector('.minus').innerHTML = '_';
    document.querySelector('.equal').innerHTML = '+';

    document.querySelector('.letter-q').innerHTML = 'Й';
    document.querySelector('.letter-w').innerHTML = 'Ц';
    document.querySelector('.letter-e').innerHTML = 'У';
    document.querySelector('.letter-r').innerHTML = 'К';
    document.querySelector('.letter-t').innerHTML = 'Е';
    document.querySelector('.letter-y').innerHTML = 'Н';
    document.querySelector('.letter-u').innerHTML = 'Г';
    document.querySelector('.letter-i').innerHTML = 'Ш';
    document.querySelector('.letter-o').innerHTML = 'Щ';
    document.querySelector('.letter-p').innerHTML = 'З';
    document.querySelector('.left-bracket').innerHTML = 'Х';
    document.querySelector('.right-bracket').innerHTML = 'Ъ';
    document.querySelector('.slash-l').innerHTML = '/';

    document.querySelector('.letter-a').innerHTML = 'Ф';
    document.querySelector('.letter-s').innerHTML = 'Ы';
    document.querySelector('.letter-d').innerHTML = 'В';
    document.querySelector('.letter-f').innerHTML = 'А';
    document.querySelector('.letter-g').innerHTML = 'П';
    document.querySelector('.letter-h').innerHTML = 'Р';
    document.querySelector('.letter-j').innerHTML = 'О';
    document.querySelector('.letter-k').innerHTML = 'Л';
    document.querySelector('.letter-l').innerHTML = 'Д';
    document.querySelector('.semicolon').innerHTML = 'Ж';
    document.querySelector('.quote').innerHTML = 'Э';
    

    document.querySelector('.letter-z').innerHTML = 'Я';
    document.querySelector('.letter-x').innerHTML = 'Ч';
    document.querySelector('.letter-c').innerHTML = 'С';
    document.querySelector('.letter-v').innerHTML = 'М';
    document.querySelector('.letter-b').innerHTML = 'И';
    document.querySelector('.letter-n').innerHTML = 'Т';
    document.querySelector('.letter-m').innerHTML = 'Ь';
    document.querySelector('.comma').innerHTML = 'Б';
    document.querySelector('.dot').innerHTML = 'Ю';
    document.querySelector('.slash-r').innerHTML = ',';

    } else
    if (event.code == 'KeyZ') { buttonZ.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'я' : 'Я' } else
    if (event.code == 'KeyX') { buttonX.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ч' : 'Ч' } else
    if (event.code == 'KeyC') { buttonC.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'с' : 'С' } else
    if (event.code == 'KeyV') { buttonV.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'м' : 'М' } else
    if (event.code == 'KeyB') { buttonB.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'и' : 'И' } else
    if (event.code == 'KeyN') { buttonN.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'т' : 'Т' } else
    if (event.code == 'KeyM') { buttonM.classList.add('active'); document.getElementById('kinput').innerHTML += (!capsCheck) ? 'ь' : 'Ь' } else
    if (event.code == 'Comma') { buttonComma.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? 'б' : 'Б' } else
    if (event.code == 'Period') { buttonPeriod.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? 'ю' : 'Ю' } else
    if (event.code == 'Slash') { buttonSlash.classList.add('active'); document.getElementById('kinput').innerHTML += (!shiftCheck) ? '.' : ',' } else
    if (event.code == 'ArrowUp') { buttonArrowUp.classList.add('active'); document.getElementById('kinput').innerHTML += '▲' } else
    if (event.code == 'ShiftRight') { buttonShiftRight.classList.add('active');

    capsCheck = 1;
    shiftCheck = 1;

    document.querySelector('.unknown').innerHTML = 'Ё';
    document.querySelector('.one').innerHTML = '!';
    document.querySelector('.two').innerHTML = '"';
    document.querySelector('.three').innerHTML = '№';
    document.querySelector('.four').innerHTML = ';';
    document.querySelector('.five').innerHTML = '%';
    document.querySelector('.six').innerHTML = ':';
    document.querySelector('.seven').innerHTML = '?';
    document.querySelector('.eight').innerHTML = '*';
    document.querySelector('.nine').innerHTML = '(';
    document.querySelector('.zero').innerHTML = ')';
    document.querySelector('.minus').innerHTML = '_';
    document.querySelector('.equal').innerHTML = '+';

    document.querySelector('.letter-q').innerHTML = 'Й';
    document.querySelector('.letter-w').innerHTML = 'Ц';
    document.querySelector('.letter-e').innerHTML = 'У';
    document.querySelector('.letter-r').innerHTML = 'К';
    document.querySelector('.letter-t').innerHTML = 'Е';
    document.querySelector('.letter-y').innerHTML = 'Н';
    document.querySelector('.letter-u').innerHTML = 'Г';
    document.querySelector('.letter-i').innerHTML = 'Ш';
    document.querySelector('.letter-o').innerHTML = 'Щ';
    document.querySelector('.letter-p').innerHTML = 'З';
    document.querySelector('.left-bracket').innerHTML = 'Х';
    document.querySelector('.right-bracket').innerHTML = 'Ъ';
    document.querySelector('.slash-l').innerHTML = '|';

    document.querySelector('.letter-a').innerHTML = 'Ф';
    document.querySelector('.letter-s').innerHTML = 'Ы';
    document.querySelector('.letter-d').innerHTML = 'В';
    document.querySelector('.letter-f').innerHTML = 'А';
    document.querySelector('.letter-g').innerHTML = 'П';
    document.querySelector('.letter-h').innerHTML = 'Р';
    document.querySelector('.letter-j').innerHTML = 'О';
    document.querySelector('.letter-k').innerHTML = 'Л';
    document.querySelector('.letter-l').innerHTML = 'Д';
    document.querySelector('.semicolon').innerHTML = 'Ж';
    document.querySelector('.quote').innerHTML = 'Э';
    

    document.querySelector('.letter-z').innerHTML = 'Я';
    document.querySelector('.letter-x').innerHTML = 'Ч';
    document.querySelector('.letter-c').innerHTML = 'С';
    document.querySelector('.letter-v').innerHTML = 'М';
    document.querySelector('.letter-b').innerHTML = 'И';
    document.querySelector('.letter-n').innerHTML = 'Т';
    document.querySelector('.letter-m').innerHTML = 'Ь';
    document.querySelector('.comma').innerHTML = 'Б';
    document.querySelector('.dot').innerHTML = 'Ю';
    document.querySelector('.slash-r').innerHTML = ',';

  } else

    if (event.code == 'ControlLeft') { buttonControlLeft.classList.add('active') } else
    if (event.code == 'MetaLeft') { buttonMetaLeft.classList.add('active') } else
    if (event.code == 'AltLeft') { buttonAltLeft.classList.add('active') } else
    if (event.code == 'Space') { buttonSpace.classList.add('active'); document.getElementById('kinput').innerHTML += ' ' } else
    if (event.code == 'AltRight') { buttonAltRight.classList.add('active') } else
    if (event.code == 'ControlRight') { buttonControlRight.classList.add('active') } else
    if (event.code == 'ArrowLeft') { buttonArrowLeft.classList.add('active'); document.getElementById('kinput').innerHTML += '◄' } else
    if (event.code == 'ArrowDown') { buttonArrowDown.classList.add('active'); document.getElementById('kinput').innerHTML += '▼' } else
    if (event.code == 'ArrowRight') { buttonArrowRight.classList.add('active'); document.getElementById('kinput').innerHTML += '►' }
  }
})

document.addEventListener ("mouseup", function(event) {
  
  if (changeLang == 0) {

    if (event.code == 'Backquote') { backquote.classList.remove('active') } else
    if (event.code == 'Digit1') { button1.classList.remove('active') } else
    if (event.code == 'Digit2') { button2.classList.remove('active') } else
    if (event.code == 'Digit3') { button3.classList.remove('active') } else
    if (event.code == 'Digit4') { button4.classList.remove('active') } else
    if (event.code == 'Digit5') { button5.classList.remove('active') } else
    if (event.code == 'Digit6') { button6.classList.remove('active') } else
    if (event.code == 'Digit7') { button7.classList.remove('active') } else
    if (event.code == 'Digit8') { button8.classList.remove('active') } else
    if (event.code == 'Digit9') { button9.classList.remove('active') } else
    if (event.code == 'Digit0') { button0.classList.remove('active') } else
    if (event.code == 'Minus') { buttonMinus.classList.remove('active') } else
    if (event.code == 'Equal') { buttonEqual.classList.remove('active') } else
    if (event.code == 'Backspace') { buttonBackspace.classList.remove('active') } else

    if (event.code == 'Tab') { buttonTab.classList.remove('active') } else
    if (event.code == 'KeyQ') { buttonQ.classList.remove('active') } else
    if (event.code == 'KeyW') { buttonW.classList.remove('active') } else
    if (event.code == 'KeyE') { buttonE.classList.remove('active') } else
    if (event.code == 'KeyR') { buttonR.classList.remove('active') } else
    if (event.code == 'KeyT') { buttonT.classList.remove('active') } else
    if (event.code == 'KeyY') { buttonY.classList.remove('active') } else
    if (event.code == 'KeyU') { buttonU.classList.remove('active') } else
    if (event.code == 'KeyI') { buttonI.classList.remove('active') } else
    if (event.code == 'KeyO') { buttonO.classList.remove('active') } else
    if (event.code == 'KeyP') { buttonP.classList.remove('active') } else
    if (event.code == 'BracketLeft') { buttonBracketLeft.classList.remove('active') } else
    if (event.code == 'BracketRight') { buttonBracketRight.classList.remove('active') } else
    if (event.code == 'Backslash') { buttonBackslash.classList.remove('active') } else
    if (event.code == 'Delete') { buttonDelete.classList.remove('active') } else

    if (event.code == 'CapsLock') { buttonCaps.classList.remove('active'); capsCheckScript() } else
    if (event.code == 'KeyA') { buttonA.classList.remove('active') } else
    if (event.code == 'KeyS') { buttonS.classList.remove('active') } else
    if (event.code == 'KeyD') { buttonD.classList.remove('active') } else
    if (event.code == 'KeyF') { buttonF.classList.remove('active') } else
    if (event.code == 'KeyG') { buttonG.classList.remove('active') } else
    if (event.code == 'KeyH') { buttonH.classList.remove('active') } else
    if (event.code == 'KeyJ') { buttonJ.classList.remove('active') } else
    if (event.code == 'KeyK') { buttonK.classList.remove('active') } else
    if (event.code == 'KeyL') { buttonL.classList.remove('active') } else
    if (event.code == 'Semicolon') { buttonSemicolon.classList.remove('active') } else
    if (event.code == 'Quote') { buttonQuote.classList.remove('active') } else
    if (event.code == 'Enter') { buttonEnter.classList.remove('active') }

    if (event.code == 'ShiftLeft') { buttonShiftLeft.classList.remove('active');

      capsCheck = 0;
      shiftCheck = 0;

      document.querySelector('.unknown').innerHTML = '`';
      document.querySelector('.one').innerHTML = '1';
      document.querySelector('.two').innerHTML = '2';
      document.querySelector('.three').innerHTML = '3';
      document.querySelector('.four').innerHTML = '4';
      document.querySelector('.five').innerHTML = '5';
      document.querySelector('.six').innerHTML = '6';
      document.querySelector('.seven').innerHTML = '7';
      document.querySelector('.eight').innerHTML = '8';
      document.querySelector('.nine').innerHTML = '9';
      document.querySelector('.zero').innerHTML = '0';
      document.querySelector('.minus').innerHTML = '-';
      document.querySelector('.equal').innerHTML = '=';

      document.querySelector('.letter-q').innerHTML = 'q';
      document.querySelector('.letter-w').innerHTML = 'w';
      document.querySelector('.letter-e').innerHTML = 'e';
      document.querySelector('.letter-r').innerHTML = 'r';
      document.querySelector('.letter-t').innerHTML = 't';
      document.querySelector('.letter-y').innerHTML = 'y';
      document.querySelector('.letter-u').innerHTML = 'u';
      document.querySelector('.letter-i').innerHTML = 'i';
      document.querySelector('.letter-o').innerHTML = 'o';
      document.querySelector('.letter-p').innerHTML = 'p';
      document.querySelector('.left-bracket').innerHTML = '[';
      document.querySelector('.right-bracket').innerHTML = ']';
      document.querySelector('.slash-l').innerHTML = '\\';

      document.querySelector('.letter-a').innerHTML = 'a';
      document.querySelector('.letter-s').innerHTML = 's';
      document.querySelector('.letter-d').innerHTML = 'd';
      document.querySelector('.letter-f').innerHTML = 'f';
      document.querySelector('.letter-g').innerHTML = 'g';
      document.querySelector('.letter-h').innerHTML = 'h';
      document.querySelector('.letter-j').innerHTML = 'j';
      document.querySelector('.letter-k').innerHTML = 'k';
      document.querySelector('.letter-l').innerHTML = 'l';
      document.querySelector('.semicolon').innerHTML = ';';
      document.querySelector('.quote').innerHTML = '\'';

      document.querySelector('.letter-z').innerHTML = 'z';
      document.querySelector('.letter-x').innerHTML = 'x';
      document.querySelector('.letter-c').innerHTML = 'c';
      document.querySelector('.letter-v').innerHTML = 'v';
      document.querySelector('.letter-b').innerHTML = 'b';
      document.querySelector('.letter-n').innerHTML = 'n';
      document.querySelector('.letter-m').innerHTML = 'm';
      document.querySelector('.comma').innerHTML = ',';
      document.querySelector('.dot').innerHTML = '.';
      document.querySelector('.slash-r').innerHTML = '/';

    } else
    if (event.code == 'KeyZ') { buttonZ.classList.remove('active') } else
    if (event.code == 'KeyX') { buttonX.classList.remove('active') } else
    if (event.code == 'KeyC') { buttonC.classList.remove('active') } else
    if (event.code == 'KeyV') { buttonV.classList.remove('active') } else
    if (event.code == 'KeyB') { buttonB.classList.remove('active') } else
    if (event.code == 'KeyN') { buttonN.classList.remove('active') } else
    if (event.code == 'KeyM') { buttonM.classList.remove('active') } else
    if (event.code == 'Comma') { buttonComma.classList.remove('active') } else
    if (event.code == 'Period') { buttonPeriod.classList.remove('active') } else
    if (event.code == 'Slash') { buttonSlash.classList.remove('active') } else
    if (event.code == 'ArrowUp') { buttonArrowUp.classList.remove('active') } else
    if (event.code == 'ShiftRight') { buttonShiftRight.classList.remove('active');
    
    capsCheck = 0;
    shiftCheck = 0;

    document.querySelector('.unknown').innerHTML = '`';
    document.querySelector('.one').innerHTML = '1';
    document.querySelector('.two').innerHTML = '2';
    document.querySelector('.three').innerHTML = '3';
    document.querySelector('.four').innerHTML = '4';
    document.querySelector('.five').innerHTML = '5';
    document.querySelector('.six').innerHTML = '6';
    document.querySelector('.seven').innerHTML = '7';
    document.querySelector('.eight').innerHTML = '8';
    document.querySelector('.nine').innerHTML = '9';
    document.querySelector('.zero').innerHTML = '0';
    document.querySelector('.minus').innerHTML = '-';
    document.querySelector('.equal').innerHTML = '=';

    document.querySelector('.letter-q').innerHTML = 'q';
    document.querySelector('.letter-w').innerHTML = 'w';
    document.querySelector('.letter-e').innerHTML = 'e';
    document.querySelector('.letter-r').innerHTML = 'r';
    document.querySelector('.letter-t').innerHTML = 't';
    document.querySelector('.letter-y').innerHTML = 'y';
    document.querySelector('.letter-u').innerHTML = 'u';
    document.querySelector('.letter-i').innerHTML = 'i';
    document.querySelector('.letter-o').innerHTML = 'o';
    document.querySelector('.letter-p').innerHTML = 'p';
    document.querySelector('.left-bracket').innerHTML = '[';
    document.querySelector('.right-bracket').innerHTML = ']';
    document.querySelector('.slash-l').innerHTML = '\\';

    document.querySelector('.letter-a').innerHTML = 'a';
    document.querySelector('.letter-s').innerHTML = 's';
    document.querySelector('.letter-d').innerHTML = 'd';
    document.querySelector('.letter-f').innerHTML = 'f';
    document.querySelector('.letter-g').innerHTML = 'g';
    document.querySelector('.letter-h').innerHTML = 'h';
    document.querySelector('.letter-j').innerHTML = 'j';
    document.querySelector('.letter-k').innerHTML = 'k';
    document.querySelector('.letter-l').innerHTML = 'l';
    document.querySelector('.semicolon').innerHTML = ';';
    document.querySelector('.quote').innerHTML = '\'';

    document.querySelector('.letter-z').innerHTML = 'z';
    document.querySelector('.letter-x').innerHTML = 'x';
    document.querySelector('.letter-c').innerHTML = 'c';
    document.querySelector('.letter-v').innerHTML = 'v';
    document.querySelector('.letter-b').innerHTML = 'b';
    document.querySelector('.letter-n').innerHTML = 'n';
    document.querySelector('.letter-m').innerHTML = 'm';
    document.querySelector('.comma').innerHTML = ',';
    document.querySelector('.dot').innerHTML = '.';
    document.querySelector('.slash-r').innerHTML = '/';

  } else
    
    if (event.code == 'ControlLeft') { buttonControlLeft.classList.remove('active') } else
    if (event.code == 'MetaLeft') { buttonMetaLeft.classList.remove('active') } else
    if (event.code == 'AltLeft') { buttonAltLeft.classList.remove('active') } else
    if (event.code == 'Space') { buttonSpace.classList.remove('active') } else
    if (event.code == 'AltRight') { buttonAltRight.classList.remove('active') } else
    if (event.code == 'ControlRight') { buttonControlRight.classList.remove('active') } else
    if (event.code == 'ArrowLeft') { buttonArrowLeft.classList.remove('active') } else
    if (event.code == 'ArrowDown') { buttonArrowDown.classList.remove('active') } else
    if (event.code == 'ArrowRight') { buttonArrowRight.classList.remove('active') }
  }

  if (changeLang == 1) {

    if (event.code == 'Backquote') { backquote.classList.remove('active') } else
    if (event.code == 'Digit1') { button1.classList.remove('active') } else
    if (event.code == 'Digit2') { button2.classList.remove('active') } else
    if (event.code == 'Digit3') { button3.classList.remove('active') } else
    if (event.code == 'Digit4') { button4.classList.remove('active') } else
    if (event.code == 'Digit5') { button5.classList.remove('active') } else
    if (event.code == 'Digit6') { button6.classList.remove('active') } else
    if (event.code == 'Digit7') { button7.classList.remove('active') } else
    if (event.code == 'Digit8') { button8.classList.remove('active') } else
    if (event.code == 'Digit9') { button9.classList.remove('active') } else
    if (event.code == 'Digit0') { button0.classList.remove('active') } else
    if (event.code == 'Minus') { buttonMinus.classList.remove('active') } else
    if (event.code == 'Equal') { buttonEqual.classList.remove('active') } else
    if (event.code == 'Backspace') { buttonBackspace.classList.remove('active') } else

    if (event.code == 'Tab') { buttonTab.classList.remove('active') } else
    if (event.code == 'KeyQ') { buttonQ.classList.remove('active') } else
    if (event.code == 'KeyW') { buttonW.classList.remove('active') } else
    if (event.code == 'KeyE') { buttonE.classList.remove('active') } else
    if (event.code == 'KeyR') { buttonR.classList.remove('active') } else
    if (event.code == 'KeyT') { buttonT.classList.remove('active') } else
    if (event.code == 'KeyY') { buttonY.classList.remove('active') } else
    if (event.code == 'KeyU') { buttonU.classList.remove('active') } else
    if (event.code == 'KeyI') { buttonI.classList.remove('active') } else
    if (event.code == 'KeyO') { buttonO.classList.remove('active') } else
    if (event.code == 'KeyP') { buttonP.classList.remove('active') } else
    if (event.code == 'BracketLeft') { buttonBracketLeft.classList.remove('active') } else
    if (event.code == 'BracketRight') { buttonBracketRight.classList.remove('active') } else
    if (event.code == 'Backslash') { buttonBackslash.classList.remove('active') } else
    if (event.code == 'Delete') { buttonDelete.classList.remove('active') } else

    if (event.code == 'CapsLock') { buttonCaps.classList.remove('active'); capsCheckScript() } else
    if (event.code == 'KeyA') { buttonA.classList.remove('active') } else
    if (event.code == 'KeyS') { buttonS.classList.remove('active') } else
    if (event.code == 'KeyD') { buttonD.classList.remove('active') } else
    if (event.code == 'KeyF') { buttonF.classList.remove('active') } else
    if (event.code == 'KeyG') { buttonG.classList.remove('active') } else
    if (event.code == 'KeyH') { buttonH.classList.remove('active') } else
    if (event.code == 'KeyJ') { buttonJ.classList.remove('active') } else
    if (event.code == 'KeyK') { buttonK.classList.remove('active') } else
    if (event.code == 'KeyL') { buttonL.classList.remove('active') } else
    if (event.code == 'Semicolon') { buttonSemicolon.classList.remove('active') } else
    if (event.code == 'Quote') { buttonQuote.classList.remove('active') } else
    if (event.code == 'Enter') { buttonEnter.classList.remove('active') }

    if (event.code == 'ShiftLeft') { buttonShiftLeft.classList.remove('active');

    capsCheck = 0;
    shiftCheck = 0;

    document.querySelector('.unknown').innerHTML = 'ё';
    document.querySelector('.one').innerHTML = '1';
    document.querySelector('.two').innerHTML = '2';
    document.querySelector('.three').innerHTML = '3';
    document.querySelector('.four').innerHTML = '4';
    document.querySelector('.five').innerHTML = '5';
    document.querySelector('.six').innerHTML = '6';
    document.querySelector('.seven').innerHTML = '7';
    document.querySelector('.eight').innerHTML = '8';
    document.querySelector('.nine').innerHTML = '9';
    document.querySelector('.zero').innerHTML = '0';
    document.querySelector('.minus').innerHTML = '-';
    document.querySelector('.equal').innerHTML = '=';

    document.querySelector('.letter-q').innerHTML = 'й';
    document.querySelector('.letter-w').innerHTML = 'ц';
    document.querySelector('.letter-e').innerHTML = 'у';
    document.querySelector('.letter-r').innerHTML = 'к';
    document.querySelector('.letter-t').innerHTML = 'е';
    document.querySelector('.letter-y').innerHTML = 'н';
    document.querySelector('.letter-u').innerHTML = 'г';
    document.querySelector('.letter-i').innerHTML = 'ш';
    document.querySelector('.letter-o').innerHTML = 'щ';
    document.querySelector('.letter-p').innerHTML = 'з';
    document.querySelector('.left-bracket').innerHTML = 'х';
    document.querySelector('.right-bracket').innerHTML = 'ъ';
    document.querySelector('.slash-l').innerHTML = '\\';

    document.querySelector('.letter-a').innerHTML = 'ф';
    document.querySelector('.letter-s').innerHTML = 'ы';
    document.querySelector('.letter-d').innerHTML = 'в';
    document.querySelector('.letter-f').innerHTML = 'а';
    document.querySelector('.letter-g').innerHTML = 'п';
    document.querySelector('.letter-h').innerHTML = 'р';
    document.querySelector('.letter-j').innerHTML = 'о';
    document.querySelector('.letter-k').innerHTML = 'л';
    document.querySelector('.letter-l').innerHTML = 'д';
    document.querySelector('.semicolon').innerHTML = 'ж';
    document.querySelector('.quote').innerHTML = 'э';

    document.querySelector('.letter-z').innerHTML = 'я';
    document.querySelector('.letter-x').innerHTML = 'ч';
    document.querySelector('.letter-c').innerHTML = 'с';
    document.querySelector('.letter-v').innerHTML = 'м';
    document.querySelector('.letter-b').innerHTML = 'и';
    document.querySelector('.letter-n').innerHTML = 'т';
    document.querySelector('.letter-m').innerHTML = 'ь';
    document.querySelector('.comma').innerHTML = 'б';
    document.querySelector('.dot').innerHTML = 'ю';
    document.querySelector('.slash-r').innerHTML = '.';

  } else
    if (event.code == 'KeyZ') { buttonZ.classList.remove('active') } else
    if (event.code == 'KeyX') { buttonX.classList.remove('active') } else
    if (event.code == 'KeyC') { buttonC.classList.remove('active') } else
    if (event.code == 'KeyV') { buttonV.classList.remove('active') } else
    if (event.code == 'KeyB') { buttonB.classList.remove('active') } else
    if (event.code == 'KeyN') { buttonN.classList.remove('active') } else
    if (event.code == 'KeyM') { buttonM.classList.remove('active') } else
    if (event.code == 'Comma') { buttonComma.classList.remove('active') } else
    if (event.code == 'Period') { buttonPeriod.classList.remove('active') } else
    if (event.code == 'Slash') { buttonSlash.classList.remove('active') } else
    if (event.code == 'ArrowUp') { buttonArrowUp.classList.remove('active') } else
    if (event.code == 'ShiftRight') { buttonShiftRight.classList.remove('active');
    
    capsCheck = 0;
    shiftCheck = 0;

    document.querySelector('.unknown').innerHTML = 'ё';
    document.querySelector('.one').innerHTML = '1';
    document.querySelector('.two').innerHTML = '2';
    document.querySelector('.three').innerHTML = '3';
    document.querySelector('.four').innerHTML = '4';
    document.querySelector('.five').innerHTML = '5';
    document.querySelector('.six').innerHTML = '6';
    document.querySelector('.seven').innerHTML = '7';
    document.querySelector('.eight').innerHTML = '8';
    document.querySelector('.nine').innerHTML = '9';
    document.querySelector('.zero').innerHTML = '0';
    document.querySelector('.minus').innerHTML = '-';
    document.querySelector('.equal').innerHTML = '=';

    document.querySelector('.letter-q').innerHTML = 'й';
    document.querySelector('.letter-w').innerHTML = 'ц';
    document.querySelector('.letter-e').innerHTML = 'у';
    document.querySelector('.letter-r').innerHTML = 'к';
    document.querySelector('.letter-t').innerHTML = 'е';
    document.querySelector('.letter-y').innerHTML = 'н';
    document.querySelector('.letter-u').innerHTML = 'г';
    document.querySelector('.letter-i').innerHTML = 'ш';
    document.querySelector('.letter-o').innerHTML = 'щ';
    document.querySelector('.letter-p').innerHTML = 'з';
    document.querySelector('.left-bracket').innerHTML = 'х';
    document.querySelector('.right-bracket').innerHTML = 'ъ';
    document.querySelector('.slash-l').innerHTML = '\\';

    document.querySelector('.letter-a').innerHTML = 'ф';
    document.querySelector('.letter-s').innerHTML = 'ы';
    document.querySelector('.letter-d').innerHTML = 'в';
    document.querySelector('.letter-f').innerHTML = 'а';
    document.querySelector('.letter-g').innerHTML = 'п';
    document.querySelector('.letter-h').innerHTML = 'р';
    document.querySelector('.letter-j').innerHTML = 'о';
    document.querySelector('.letter-k').innerHTML = 'л';
    document.querySelector('.letter-l').innerHTML = 'д';
    document.querySelector('.semicolon').innerHTML = 'ж';
    document.querySelector('.quote').innerHTML = 'э';

    document.querySelector('.letter-z').innerHTML = 'я';
    document.querySelector('.letter-x').innerHTML = 'ч';
    document.querySelector('.letter-c').innerHTML = 'с';
    document.querySelector('.letter-v').innerHTML = 'м';
    document.querySelector('.letter-b').innerHTML = 'и';
    document.querySelector('.letter-n').innerHTML = 'т';
    document.querySelector('.letter-m').innerHTML = 'ь';
    document.querySelector('.comma').innerHTML = 'б';
    document.querySelector('.dot').innerHTML = 'ю';
    document.querySelector('.slash-r').innerHTML = '.';

  } else
    
    if (event.code == 'ControlLeft') { buttonControlLeft.classList.remove('active') } else
    if (event.code == 'MetaLeft') { buttonMetaLeft.classList.remove('active') } else
    if (event.code == 'AltLeft') { buttonAltLeft.classList.remove('active') } else
    if (event.code == 'Space') { buttonSpace.classList.remove('active') } else
    if (event.code == 'AltRight') { buttonAltRight.classList.remove('active') } else
    if (event.code == 'ControlRight') { buttonControlRight.classList.remove('active') } else
    if (event.code == 'ArrowLeft') { buttonArrowLeft.classList.remove('active') } else
    if (event.code == 'ArrowDown') { buttonArrowDown.classList.remove('active') } else
    if (event.code == 'ArrowRight') { buttonArrowRight.classList.remove('active') }
  }

})

let arrChars = []; 
let changeLang = 0;                   

document.addEventListener("keydown", function (event) {

  if (event.repeat) return;         
  arrChars.push(event.code);

  if (arrChars.includes('AltLeft') && arrChars.includes('ControlLeft')) { console.log(changeLang); languageSwap() }

});

document.addEventListener("keyup", function (event) {

  if (arrChars.length == 0) return; 
  arrChars.length = 0;          

});

function languageSwap() {

  changeLang = (changeLang == 0) ? 1 : 0

  if (changeLang == 1) {

    document.querySelector('.unknown').innerHTML = 'ё';
    document.querySelector('.letter-q').innerHTML = 'й';
    document.querySelector('.letter-w').innerHTML = 'ц';
    document.querySelector('.letter-e').innerHTML = 'у';
    document.querySelector('.letter-r').innerHTML = 'к';
    document.querySelector('.letter-t').innerHTML = 'е';
    document.querySelector('.letter-y').innerHTML = 'н';
    document.querySelector('.letter-u').innerHTML = 'г';
    document.querySelector('.letter-i').innerHTML = 'ш';
    document.querySelector('.letter-o').innerHTML = 'щ';
    document.querySelector('.letter-p').innerHTML = 'з';
    document.querySelector('.left-bracket').innerHTML = 'х';
    document.querySelector('.right-bracket').innerHTML = 'ъ';

    document.querySelector('.letter-a').innerHTML = 'ф';
    document.querySelector('.letter-s').innerHTML = 'ы';
    document.querySelector('.letter-d').innerHTML = 'в';
    document.querySelector('.letter-f').innerHTML = 'а';
    document.querySelector('.letter-g').innerHTML = 'п';
    document.querySelector('.letter-h').innerHTML = 'р';
    document.querySelector('.letter-j').innerHTML = 'о';
    document.querySelector('.letter-k').innerHTML = 'л';
    document.querySelector('.letter-l').innerHTML = 'д';
    document.querySelector('.semicolon').innerHTML = 'ж';
    document.querySelector('.quote').innerHTML = 'э';

    document.querySelector('.letter-z').innerHTML = 'я';
    document.querySelector('.letter-x').innerHTML = 'ч';
    document.querySelector('.letter-c').innerHTML = 'с';
    document.querySelector('.letter-v').innerHTML = 'м';
    document.querySelector('.letter-b').innerHTML = 'и';
    document.querySelector('.letter-n').innerHTML = 'т';
    document.querySelector('.letter-m').innerHTML = 'ь';
    document.querySelector('.comma').innerHTML = 'б';
    document.querySelector('.dot').innerHTML = 'ю';
    document.querySelector('.slash-r').innerHTML = '.';

  }

  if (changeLang == 0) {

    document.querySelector('.unknown').innerHTML = '`';
    document.querySelector('.letter-q').innerHTML = 'q';
    document.querySelector('.letter-w').innerHTML = 'w';
    document.querySelector('.letter-e').innerHTML = 'e';
    document.querySelector('.letter-r').innerHTML = 'r';
    document.querySelector('.letter-t').innerHTML = 't';
    document.querySelector('.letter-y').innerHTML = 'y';
    document.querySelector('.letter-u').innerHTML = 'u';
    document.querySelector('.letter-i').innerHTML = 'i';
    document.querySelector('.letter-o').innerHTML = 'o';
    document.querySelector('.letter-p').innerHTML = 'p';
    document.querySelector('.left-bracket').innerHTML = '[';
    document.querySelector('.right-bracket').innerHTML = ']';

    document.querySelector('.letter-a').innerHTML = 'a';
    document.querySelector('.letter-s').innerHTML = 's';
    document.querySelector('.letter-d').innerHTML = 'd';
    document.querySelector('.letter-f').innerHTML = 'f';
    document.querySelector('.letter-g').innerHTML = 'g';
    document.querySelector('.letter-h').innerHTML = 'h';
    document.querySelector('.letter-j').innerHTML = 'j';
    document.querySelector('.letter-k').innerHTML = 'k';
    document.querySelector('.letter-l').innerHTML = 'l';
    document.querySelector('.semicolon').innerHTML = ';';
    document.querySelector('.quote').innerHTML = '\'';

    document.querySelector('.letter-z').innerHTML = 'z';
    document.querySelector('.letter-x').innerHTML = 'x';
    document.querySelector('.letter-c').innerHTML = 'c';
    document.querySelector('.letter-v').innerHTML = 'v';
    document.querySelector('.letter-b').innerHTML = 'b';
    document.querySelector('.letter-n').innerHTML = 'n';
    document.querySelector('.letter-m').innerHTML = 'm';
    document.querySelector('.comma').innerHTML = ',';
    document.querySelector('.dot').innerHTML = '.';
    document.querySelector('.slash-r').innerHTML = '/';

  }

}

function textWrap() {

  if (document.getElementById('kinput').offsetWidth > 926) {

    word = document.getElementById('kinput').innerHTML;

    console.log('deleted');
    document.getElementById('kinput').innerHTML = word.slice(0, -1);

    document.getElementById('kinput').innerHTML += ' ';

  }

}