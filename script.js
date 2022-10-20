const app = document.querySelector('#app')
let capsCheck = 0
let shiftCheck = 0
let arrChars = []
let word
let changeLang

if (localStorage.getItem('lang') == null) {
  localStorage.setItem('lang', 0)
  changeLang = 0
} else changeLang = localStorage.getItem('lang')

if (changeLang == 0) {
  app.innerHTML = `
  <div class="keyboard__full">
  <div class="input__zone">
      <p id="kinput"></p>
  </div>
  <div class="keyboard__buttons container">
    <div class="btn unknown bg-dark">\`</div>
    <div class="btn one bg-light">1</div>
    <div class="btn two bg-light">2</div>
    <div class="btn three bg-light">3</div>
    <div class="btn four bg-light">4</div>
    <div class="btn five bg-light">5</div>
    <div class="btn six bg-light">6</div>
    <div class="btn seven bg-light">7</div>
    <div class="btn eight bg-light">8</div>
    <div class="btn nine bg-light">9</div>
    <div class="btn zero bg-light">0</div>
    <div class="btn minus bg-light">-</div>
    <div class="btn equal bg-light">=</div>
    <div class="btn backspace bg-dark width-double">Backspace</div>

    <div class="btn tab bg-dark">Tab</div>
    <div class="btn letter-q bg-light">q</div>
    <div class="btn letter-w bg-light">w</div>
    <div class="btn letter-e bg-light">e</div>
    <div class="btn letter-r bg-light">r</div>
    <div class="btn letter-t bg-light">t</div>
    <div class="btn letter-y bg-light">y</div>
    <div class="btn letter-u bg-light">u</div>
    <div class="btn letter-i bg-light">i</div>
    <div class="btn letter-o bg-light">o</div>
    <div class="btn letter-p bg-light">p</div>
    <div class="btn left-bracket bg-light">[</div>
    <div class="btn right-bracket bg-light">]</div>
    <div class="btn slash-l bg-light">\\</div>  
    <div class="btn delete bg-dark">DEL</div>

    <div class="btn caps bg-dark width-double">Caps Lock</div>
    <div class="btn letter-a bg-light">a</div>  
    <div class="btn letter-s bg-light">s</div>
    <div class="btn letter-d bg-light">d</div>
    <div class="btn letter-f bg-light">f</div>
    <div class="btn letter-g bg-light">g</div>
    <div class="btn letter-h bg-light">h</div>
    <div class="btn letter-j bg-light">j</div>
    <div class="btn letter-k bg-light">k</div>
    <div class="btn letter-l bg-light">l</div>
    <div class="btn semicolon bg-light">;</div>
    <div class="btn quote bg-light">'</div>
    <div class="btn enter bg-dark width-double">ENTER</div>

    <div class="btn shift-l bg-dark width-triple">Shift</div>
    <div class="btn letter-z bg-light">z</div>
    <div class="btn letter-x bg-light">x</div>
    <div class="btn letter-c bg-light">c</div>
    <div class="btn letter-v bg-light">v</div>
    <div class="btn letter-b bg-light">b</div>
    <div class="btn letter-n bg-light">n</div>
    <div class="btn letter-m bg-light">m</div>
    <div class="btn comma bg-light">,</div>
    <div class="btn dot bg-light">.</div>
    <div class="btn slash-r bg-light">/</div>
    <div class="btn arrow-up bg-dark">
        <i class="up"></i>
    </div>
    <div class="btn shift-r bg-dark">Shift</div>

    <div class="btn ctrl-l bg-dark">Ctrl</div>
    <div class="btn win bg-dark">Win</div>  
    <div class="btn alt-l bg-dark">Alt</div>
    <div class="btn space bg-light"></div>
    <div class="btn alt-r bg-dark">Alt</div>
    <div class="btn ctrl-r bg-dark">Ctrl</div>
    <div class="btn arrow-l bg-dark">
        <i class="left"></i>
    </div>
    <div class="btn arrow-down bg-dark">
        <i class="down"></i>
    </div>
    <div class="btn arrow-r bg-dark">
        <i class="right"></i>
    </div>
  </div>
  <h1>use <span class="red">ctrl</span> + <span class="red">alt</span> to change language (используйте <span class="red">ctrl</span> + <span class="red">alt</span> для смены языка)</h1>
  </div>
  <script src="script.js"></script>
  `
} else if (changeLang == 1) {
  app.innerHTML = `
  <div class="keyboard__full">
  <div class="input__zone">
      <p id="kinput"></p>
  </div>
  <div class="keyboard__buttons container">
    <div class="btn unknown bg-dark">ё</div>
    <div class="btn one bg-light">1</div>
    <div class="btn two bg-light">2</div>
    <div class="btn three bg-light">3</div>
    <div class="btn four bg-light">4</div>
    <div class="btn five bg-light">5</div>
    <div class="btn six bg-light">6</div>
    <div class="btn seven bg-light">7</div>
    <div class="btn eight bg-light">8</div>
    <div class="btn nine bg-light">9</div>
    <div class="btn zero bg-light">0</div>
    <div class="btn minus bg-light">-</div>
    <div class="btn equal bg-light">=</div>
    <div class="btn backspace bg-dark width-double">Backspace</div>

    <div class="btn tab bg-dark">Tab</div>
    <div class="btn letter-q bg-light">й</div>
    <div class="btn letter-w bg-light">ц</div>
    <div class="btn letter-e bg-light">у</div>
    <div class="btn letter-r bg-light">к</div>
    <div class="btn letter-t bg-light">е</div>
    <div class="btn letter-y bg-light">н</div>
    <div class="btn letter-u bg-light">г</div>
    <div class="btn letter-i bg-light">ш</div>
    <div class="btn letter-o bg-light">щ</div>
    <div class="btn letter-p bg-light">з</div>
    <div class="btn left-bracket bg-light">х</div>
    <div class="btn right-bracket bg-light">ъ</div>
    <div class="btn slash-l bg-light">\\</div>  
    <div class="btn delete bg-dark">DEL</div>

    <div class="btn caps bg-dark width-double">Caps Lock</div>
    <div class="btn letter-a bg-light">ф</div>  
    <div class="btn letter-s bg-light">ы</div>
    <div class="btn letter-d bg-light">в</div>
    <div class="btn letter-f bg-light">а</div>
    <div class="btn letter-g bg-light">п</div>
    <div class="btn letter-h bg-light">р</div>
    <div class="btn letter-j bg-light">о</div>
    <div class="btn letter-k bg-light">л</div>
    <div class="btn letter-l bg-light">д</div>
    <div class="btn semicolon bg-light">ж</div>
    <div class="btn quote bg-light">э</div>
    <div class="btn enter bg-dark width-double">ENTER</div>

    <div class="btn shift-l bg-dark width-triple">Shift</div>
    <div class="btn letter-z bg-light">я</div>
    <div class="btn letter-x bg-light">ч</div>
    <div class="btn letter-c bg-light">с</div>
    <div class="btn letter-v bg-light">м</div>
    <div class="btn letter-b bg-light">и</div>
    <div class="btn letter-n bg-light">т</div>
    <div class="btn letter-m bg-light">ь</div>
    <div class="btn comma bg-light">б</div>
    <div class="btn dot bg-light">ю</div>
    <div class="btn slash-r bg-light">.</div>
    <div class="btn arrow-up bg-dark">
        <i class="up"></i>
    </div>
    <div class="btn shift-r bg-dark">Shift</div>

    <div class="btn ctrl-l bg-dark">Ctrl</div>
    <div class="btn win bg-dark">Win</div>  
    <div class="btn alt-l bg-dark">Alt</div>
    <div class="btn space bg-light"></div>
    <div class="btn alt-r bg-dark">Alt</div>
    <div class="btn ctrl-r bg-dark">Ctrl</div>
    <div class="btn arrow-l bg-dark">
        <i class="left"></i>
    </div>
    <div class="btn arrow-down bg-dark">
        <i class="down"></i>
    </div>
    <div class="btn arrow-r bg-dark">
        <i class="right"></i>
    </div>
  </div>
  <h1>use <span class="red">ctrl</span> + <span class="red">alt</span> to change language (используйте <span class="red">ctrl</span> + <span class="red">alt</span> для смены языка)</h1>
  </div>
  <script src="script.js"></script>
  `
}

function capsCheckScript() {
  if (capsCheck == 0) {
    capsCheck = 1
  } else {
    capsCheck = 0
  }

  if (changeLang == 0) {
    if (capsCheck == 0) {
      document.querySelector('.letter-q').innerHTML = 'q'
      document.querySelector('.letter-w').innerHTML = 'w'
      document.querySelector('.letter-e').innerHTML = 'e'
      document.querySelector('.letter-r').innerHTML = 'r'
      document.querySelector('.letter-t').innerHTML = 't'
      document.querySelector('.letter-y').innerHTML = 'y'
      document.querySelector('.letter-u').innerHTML = 'u'
      document.querySelector('.letter-i').innerHTML = 'i'
      document.querySelector('.letter-o').innerHTML = 'o'
      document.querySelector('.letter-p').innerHTML = 'p'

      document.querySelector('.letter-a').innerHTML = 'a'
      document.querySelector('.letter-s').innerHTML = 's'
      document.querySelector('.letter-d').innerHTML = 'd'
      document.querySelector('.letter-f').innerHTML = 'f'
      document.querySelector('.letter-g').innerHTML = 'g'
      document.querySelector('.letter-h').innerHTML = 'h'
      document.querySelector('.letter-j').innerHTML = 'j'
      document.querySelector('.letter-k').innerHTML = 'k'
      document.querySelector('.letter-l').innerHTML = 'l'

      document.querySelector('.letter-z').innerHTML = 'z'
      document.querySelector('.letter-x').innerHTML = 'x'
      document.querySelector('.letter-c').innerHTML = 'c'
      document.querySelector('.letter-v').innerHTML = 'v'
      document.querySelector('.letter-b').innerHTML = 'b'
      document.querySelector('.letter-n').innerHTML = 'n'
      document.querySelector('.letter-m').innerHTML = 'm'
    } else if (capsCheck == 1) {
      document.querySelector('.letter-q').innerHTML = 'Q'
      document.querySelector('.letter-w').innerHTML = 'W'
      document.querySelector('.letter-e').innerHTML = 'E'
      document.querySelector('.letter-r').innerHTML = 'R'
      document.querySelector('.letter-t').innerHTML = 'T'
      document.querySelector('.letter-y').innerHTML = 'Y'
      document.querySelector('.letter-u').innerHTML = 'U'
      document.querySelector('.letter-i').innerHTML = 'I'
      document.querySelector('.letter-o').innerHTML = 'O'
      document.querySelector('.letter-p').innerHTML = 'P'

      document.querySelector('.letter-a').innerHTML = 'A'
      document.querySelector('.letter-s').innerHTML = 'S'
      document.querySelector('.letter-d').innerHTML = 'D'
      document.querySelector('.letter-f').innerHTML = 'F'
      document.querySelector('.letter-g').innerHTML = 'G'
      document.querySelector('.letter-h').innerHTML = 'H'
      document.querySelector('.letter-j').innerHTML = 'J'
      document.querySelector('.letter-k').innerHTML = 'K'
      document.querySelector('.letter-l').innerHTML = 'L'

      document.querySelector('.letter-z').innerHTML = 'Z'
      document.querySelector('.letter-x').innerHTML = 'X'
      document.querySelector('.letter-c').innerHTML = 'C'
      document.querySelector('.letter-v').innerHTML = 'V'
      document.querySelector('.letter-b').innerHTML = 'B'
      document.querySelector('.letter-n').innerHTML = 'N'
      document.querySelector('.letter-m').innerHTML = 'M'
    }
  }

  if (changeLang == 1) {
    if (capsCheck == 0) {
      document.querySelector('.letter-q').innerHTML = 'й'
      document.querySelector('.letter-w').innerHTML = 'ц'
      document.querySelector('.letter-e').innerHTML = 'у'
      document.querySelector('.letter-r').innerHTML = 'к'
      document.querySelector('.letter-t').innerHTML = 'е'
      document.querySelector('.letter-y').innerHTML = 'н'
      document.querySelector('.letter-u').innerHTML = 'г'
      document.querySelector('.letter-i').innerHTML = 'ш'
      document.querySelector('.letter-o').innerHTML = 'щ'
      document.querySelector('.letter-p').innerHTML = 'з'
      document.querySelector('.left-bracket').innerHTML = 'х'
      document.querySelector('.right-bracket').innerHTML = 'ъ'

      document.querySelector('.letter-a').innerHTML = 'ф'
      document.querySelector('.letter-s').innerHTML = 'ы'
      document.querySelector('.letter-d').innerHTML = 'в'
      document.querySelector('.letter-f').innerHTML = 'а'
      document.querySelector('.letter-g').innerHTML = 'п'
      document.querySelector('.letter-h').innerHTML = 'р'
      document.querySelector('.letter-j').innerHTML = 'о'
      document.querySelector('.letter-k').innerHTML = 'л'
      document.querySelector('.letter-l').innerHTML = 'д'
      document.querySelector('.semicolon').innerHTML = 'ж'
      document.querySelector('.quote').innerHTML = 'э'

      document.querySelector('.letter-z').innerHTML = 'я'
      document.querySelector('.letter-x').innerHTML = 'ч'
      document.querySelector('.letter-c').innerHTML = 'с'
      document.querySelector('.letter-v').innerHTML = 'м'
      document.querySelector('.letter-b').innerHTML = 'и'
      document.querySelector('.letter-n').innerHTML = 'т'
      document.querySelector('.letter-m').innerHTML = 'ь'
      document.querySelector('.comma').innerHTML = 'б'
      document.querySelector('.dot').innerHTML = 'ю'
    } else if (capsCheck == 1) {
      document.querySelector('.letter-q').innerHTML = 'Й'
      document.querySelector('.letter-w').innerHTML = 'Ц'
      document.querySelector('.letter-e').innerHTML = 'У'
      document.querySelector('.letter-r').innerHTML = 'К'
      document.querySelector('.letter-t').innerHTML = 'Е'
      document.querySelector('.letter-y').innerHTML = 'Н'
      document.querySelector('.letter-u').innerHTML = 'Г'
      document.querySelector('.letter-i').innerHTML = 'Ш'
      document.querySelector('.letter-o').innerHTML = 'Щ'
      document.querySelector('.letter-p').innerHTML = 'З'
      document.querySelector('.left-bracket').innerHTML = 'Х'
      document.querySelector('.right-bracket').innerHTML = 'Ъ'

      document.querySelector('.letter-a').innerHTML = 'Ф'
      document.querySelector('.letter-s').innerHTML = 'Ы'
      document.querySelector('.letter-d').innerHTML = 'В'
      document.querySelector('.letter-f').innerHTML = 'А'
      document.querySelector('.letter-g').innerHTML = 'П'
      document.querySelector('.letter-h').innerHTML = 'Р'
      document.querySelector('.letter-j').innerHTML = 'О'
      document.querySelector('.letter-k').innerHTML = 'Л'
      document.querySelector('.letter-l').innerHTML = 'Д'
      document.querySelector('.semicolon').innerHTML = 'Ж'
      document.querySelector('.quote').innerHTML = 'Э'

      document.querySelector('.letter-z').innerHTML = 'Я'
      document.querySelector('.letter-x').innerHTML = 'Ч'
      document.querySelector('.letter-c').innerHTML = 'С'
      document.querySelector('.letter-v').innerHTML = 'М'
      document.querySelector('.letter-b').innerHTML = 'И'
      document.querySelector('.letter-n').innerHTML = 'Т'
      document.querySelector('.letter-m').innerHTML = 'Ь'
      document.querySelector('.comma').innerHTML = 'Б'
      document.querySelector('.dot').innerHTML = 'Ю'
    }
  }
}

let backquote = document.querySelector('.unknown')
backquote.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + backquote.classList[1],
  ).innerHTML
}

let button1 = document.querySelector('.one')
button1.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + button1.classList[1],
  ).innerHTML
}

let button2 = document.querySelector('.two')
button2.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + button2.classList[1],
  ).innerHTML
}

let button3 = document.querySelector('.three')
button3.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + button3.classList[1],
  ).innerHTML
}

let button4 = document.querySelector('.four')
button4.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + button4.classList[1],
  ).innerHTML
}

let button5 = document.querySelector('.five')
button5.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + button5.classList[1],
  ).innerHTML
}

let button6 = document.querySelector('.six')
button6.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + button6.classList[1],
  ).innerHTML
}

let button7 = document.querySelector('.seven')
button7.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + button7.classList[1],
  ).innerHTML
}

let button8 = document.querySelector('.eight')
button8.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + button8.classList[1],
  ).innerHTML
}

let button9 = document.querySelector('.nine')
button9.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + button9.classList[1],
  ).innerHTML
}

let button0 = document.querySelector('.zero')
button0.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + button0.classList[1],
  ).innerHTML
}

let buttonMinus = document.querySelector('.minus')
buttonMinus.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonMinus.classList[1],
  ).innerHTML
}

let buttonEqual = document.querySelector('.equal')
buttonEqual.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonEqual.classList[1],
  ).innerHTML
}

let buttonBackspace = document.querySelector('.backspace')
buttonBackspace.onclick = function () {
  textWrap()
  deleteLast()
}

let buttonTab = document.querySelector('.tab')
buttonTab.onclick = function () {
  document.getElementById('kinput').innerHTML += ' '
}

let buttonQ = document.querySelector('.letter-q')
buttonQ.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonQ.classList[1],
  ).innerHTML
}

let buttonW = document.querySelector('.letter-w')
buttonW.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonW.classList[1],
  ).innerHTML
}

let buttonE = document.querySelector('.letter-e')
buttonE.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonE.classList[1],
  ).innerHTML
}

let buttonR = document.querySelector('.letter-r')
buttonR.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonR.classList[1],
  ).innerHTML
}

let buttonT = document.querySelector('.letter-t')
buttonT.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonT.classList[1],
  ).innerHTML
}

let buttonY = document.querySelector('.letter-y')
buttonY.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonY.classList[1],
  ).innerHTML
}

let buttonU = document.querySelector('.letter-u')
buttonU.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonU.classList[1],
  ).innerHTML
}

let buttonI = document.querySelector('.letter-i')
buttonI.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonI.classList[1],
  ).innerHTML
}

let buttonO = document.querySelector('.letter-o')
buttonO.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonO.classList[1],
  ).innerHTML
}

let buttonP = document.querySelector('.letter-p')
buttonP.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonP.classList[1],
  ).innerHTML
}

let buttonBracketLeft = document.querySelector('.left-bracket')
buttonBracketLeft.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonBracketLeft.classList[1],
  ).innerHTML
}

let buttonBracketRight = document.querySelector('.right-bracket')
buttonBracketRight.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonBracketRight.classList[1],
  ).innerHTML
}

let buttonBackslash = document.querySelector('.slash-l')
buttonBackslash.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonBackslash.classList[1],
  ).innerHTML
}

let buttonDelete = document.querySelector('.delete')

let buttonCaps = document.querySelector('.caps')
buttonCaps.onclick = function () {
  capsCheckScript()
}

let buttonA = document.querySelector('.letter-a')
buttonA.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonA.classList[1],
  ).innerHTML
}

let buttonS = document.querySelector('.letter-s')
buttonS.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonS.classList[1],
  ).innerHTML
}

let buttonD = document.querySelector('.letter-d')
buttonD.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonD.classList[1],
  ).innerHTML
}

let buttonF = document.querySelector('.letter-f')
buttonF.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonF.classList[1],
  ).innerHTML
}

let buttonG = document.querySelector('.letter-g')
buttonG.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonG.classList[1],
  ).innerHTML
}

let buttonH = document.querySelector('.letter-h')
buttonH.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonH.classList[1],
  ).innerHTML
}

let buttonJ = document.querySelector('.letter-j')
buttonJ.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonJ.classList[1],
  ).innerHTML
}

let buttonK = document.querySelector('.letter-k')
buttonK.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonK.classList[1],
  ).innerHTML
}

let buttonL = document.querySelector('.letter-l')
buttonL.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonL.classList[1],
  ).innerHTML
}

let buttonSemicolon = document.querySelector('.semicolon')
buttonSemicolon.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonSemicolon.classList[1],
  ).innerHTML
}

let buttonQuote = document.querySelector('.quote')
buttonQuote.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonQuote.classList[1],
  ).innerHTML
}

let buttonEnter = document.querySelector('.enter')

let buttonShiftLeft = document.querySelector('.shift-l')
buttonShiftLeft.addEventListener('mousedown', function () {
  if (changeLang == 0) {
    capsCheck = 1
    shiftCheck = 1

    document.querySelector('.unknown').innerHTML = '~'
    document.querySelector('.one').innerHTML = '!'
    document.querySelector('.two').innerHTML = '@'
    document.querySelector('.three').innerHTML = '#'
    document.querySelector('.four').innerHTML = '$'
    document.querySelector('.five').innerHTML = '%'
    document.querySelector('.six').innerHTML = '^'
    document.querySelector('.seven').innerHTML = '&'
    document.querySelector('.eight').innerHTML = '*'
    document.querySelector('.nine').innerHTML = '('
    document.querySelector('.zero').innerHTML = ')'
    document.querySelector('.minus').innerHTML = '_'
    document.querySelector('.equal').innerHTML = '+'

    document.querySelector('.letter-q').innerHTML = 'Q'
    document.querySelector('.letter-w').innerHTML = 'W'
    document.querySelector('.letter-e').innerHTML = 'E'
    document.querySelector('.letter-r').innerHTML = 'R'
    document.querySelector('.letter-t').innerHTML = 'T'
    document.querySelector('.letter-y').innerHTML = 'Y'
    document.querySelector('.letter-u').innerHTML = 'U'
    document.querySelector('.letter-i').innerHTML = 'I'
    document.querySelector('.letter-o').innerHTML = 'O'
    document.querySelector('.letter-p').innerHTML = 'P'
    document.querySelector('.left-bracket').innerHTML = '{'
    document.querySelector('.right-bracket').innerHTML = '}'
    document.querySelector('.slash-l').innerHTML = '|'

    document.querySelector('.letter-a').innerHTML = 'A'
    document.querySelector('.letter-s').innerHTML = 'S'
    document.querySelector('.letter-d').innerHTML = 'D'
    document.querySelector('.letter-f').innerHTML = 'F'
    document.querySelector('.letter-g').innerHTML = 'G'
    document.querySelector('.letter-h').innerHTML = 'H'
    document.querySelector('.letter-j').innerHTML = 'J'
    document.querySelector('.letter-k').innerHTML = 'K'
    document.querySelector('.letter-l').innerHTML = 'L'
    document.querySelector('.semicolon').innerHTML = ':'
    document.querySelector('.quote').innerHTML = '"'

    document.querySelector('.letter-z').innerHTML = 'Z'
    document.querySelector('.letter-x').innerHTML = 'X'
    document.querySelector('.letter-c').innerHTML = 'C'
    document.querySelector('.letter-v').innerHTML = 'V'
    document.querySelector('.letter-b').innerHTML = 'B'
    document.querySelector('.letter-n').innerHTML = 'N'
    document.querySelector('.letter-m').innerHTML = 'M'
    document.querySelector('.comma').innerHTML = '<'
    document.querySelector('.dot').innerHTML = '>'
    document.querySelector('.slash-r').innerHTML = '?'
  } else if (changeLang == 1) {
    capsCheck = 1
    shiftCheck = 1

    document.querySelector('.unknown').innerHTML = 'Ё'
    document.querySelector('.one').innerHTML = '!'
    document.querySelector('.two').innerHTML = '"'
    document.querySelector('.three').innerHTML = '№'
    document.querySelector('.four').innerHTML = ';'
    document.querySelector('.five').innerHTML = '%'
    document.querySelector('.six').innerHTML = ':'
    document.querySelector('.seven').innerHTML = '?'
    document.querySelector('.eight').innerHTML = '*'
    document.querySelector('.nine').innerHTML = '('
    document.querySelector('.zero').innerHTML = ')'
    document.querySelector('.minus').innerHTML = '_'
    document.querySelector('.equal').innerHTML = '+'

    document.querySelector('.letter-q').innerHTML = 'Й'
    document.querySelector('.letter-w').innerHTML = 'Ц'
    document.querySelector('.letter-e').innerHTML = 'У'
    document.querySelector('.letter-r').innerHTML = 'К'
    document.querySelector('.letter-t').innerHTML = 'Е'
    document.querySelector('.letter-y').innerHTML = 'Н'
    document.querySelector('.letter-u').innerHTML = 'Г'
    document.querySelector('.letter-i').innerHTML = 'Ш'
    document.querySelector('.letter-o').innerHTML = 'Щ'
    document.querySelector('.letter-p').innerHTML = 'З'
    document.querySelector('.left-bracket').innerHTML = 'Х'
    document.querySelector('.right-bracket').innerHTML = 'Ъ'
    document.querySelector('.slash-l').innerHTML = '/'

    document.querySelector('.letter-a').innerHTML = 'Ф'
    document.querySelector('.letter-s').innerHTML = 'Ы'
    document.querySelector('.letter-d').innerHTML = 'В'
    document.querySelector('.letter-f').innerHTML = 'А'
    document.querySelector('.letter-g').innerHTML = 'П'
    document.querySelector('.letter-h').innerHTML = 'Р'
    document.querySelector('.letter-j').innerHTML = 'О'
    document.querySelector('.letter-k').innerHTML = 'Л'
    document.querySelector('.letter-l').innerHTML = 'Д'
    document.querySelector('.semicolon').innerHTML = 'Ж'
    document.querySelector('.quote').innerHTML = 'Э'

    document.querySelector('.letter-z').innerHTML = 'Я'
    document.querySelector('.letter-x').innerHTML = 'Ч'
    document.querySelector('.letter-c').innerHTML = 'С'
    document.querySelector('.letter-v').innerHTML = 'М'
    document.querySelector('.letter-b').innerHTML = 'И'
    document.querySelector('.letter-n').innerHTML = 'Т'
    document.querySelector('.letter-m').innerHTML = 'Ь'
    document.querySelector('.comma').innerHTML = 'Б'
    document.querySelector('.dot').innerHTML = 'Ю'
    document.querySelector('.slash-r').innerHTML = ','
  }
})
buttonShiftLeft.addEventListener('mouseup', function () {
  if (changeLang == 0) {
    capsCheck = 0
    shiftCheck = 0

    document.querySelector('.unknown').innerHTML = '`'
    document.querySelector('.one').innerHTML = '1'
    document.querySelector('.two').innerHTML = '2'
    document.querySelector('.three').innerHTML = '3'
    document.querySelector('.four').innerHTML = '4'
    document.querySelector('.five').innerHTML = '5'
    document.querySelector('.six').innerHTML = '6'
    document.querySelector('.seven').innerHTML = '7'
    document.querySelector('.eight').innerHTML = '8'
    document.querySelector('.nine').innerHTML = '9'
    document.querySelector('.zero').innerHTML = '0'
    document.querySelector('.minus').innerHTML = '-'
    document.querySelector('.equal').innerHTML = '='

    document.querySelector('.letter-q').innerHTML = 'q'
    document.querySelector('.letter-w').innerHTML = 'w'
    document.querySelector('.letter-e').innerHTML = 'e'
    document.querySelector('.letter-r').innerHTML = 'r'
    document.querySelector('.letter-t').innerHTML = 't'
    document.querySelector('.letter-y').innerHTML = 'y'
    document.querySelector('.letter-u').innerHTML = 'u'
    document.querySelector('.letter-i').innerHTML = 'i'
    document.querySelector('.letter-o').innerHTML = 'o'
    document.querySelector('.letter-p').innerHTML = 'p'
    document.querySelector('.left-bracket').innerHTML = '['
    document.querySelector('.right-bracket').innerHTML = ']'
    document.querySelector('.slash-l').innerHTML = '\\'

    document.querySelector('.letter-a').innerHTML = 'a'
    document.querySelector('.letter-s').innerHTML = 's'
    document.querySelector('.letter-d').innerHTML = 'd'
    document.querySelector('.letter-f').innerHTML = 'f'
    document.querySelector('.letter-g').innerHTML = 'g'
    document.querySelector('.letter-h').innerHTML = 'h'
    document.querySelector('.letter-j').innerHTML = 'j'
    document.querySelector('.letter-k').innerHTML = 'k'
    document.querySelector('.letter-l').innerHTML = 'l'
    document.querySelector('.semicolon').innerHTML = ';'
    document.querySelector('.quote').innerHTML = "'"

    document.querySelector('.letter-z').innerHTML = 'z'
    document.querySelector('.letter-x').innerHTML = 'x'
    document.querySelector('.letter-c').innerHTML = 'c'
    document.querySelector('.letter-v').innerHTML = 'v'
    document.querySelector('.letter-b').innerHTML = 'b'
    document.querySelector('.letter-n').innerHTML = 'n'
    document.querySelector('.letter-m').innerHTML = 'm'
    document.querySelector('.comma').innerHTML = ','
    document.querySelector('.dot').innerHTML = '.'
    document.querySelector('.slash-r').innerHTML = '/'
  } else if (changeLang == 1) {
    capsCheck = 0
    shiftCheck = 0

    document.querySelector('.unknown').innerHTML = 'ё'
    document.querySelector('.one').innerHTML = '1'
    document.querySelector('.two').innerHTML = '2'
    document.querySelector('.three').innerHTML = '3'
    document.querySelector('.four').innerHTML = '4'
    document.querySelector('.five').innerHTML = '5'
    document.querySelector('.six').innerHTML = '6'
    document.querySelector('.seven').innerHTML = '7'
    document.querySelector('.eight').innerHTML = '8'
    document.querySelector('.nine').innerHTML = '9'
    document.querySelector('.zero').innerHTML = '0'
    document.querySelector('.minus').innerHTML = '-'
    document.querySelector('.equal').innerHTML = '='

    document.querySelector('.letter-q').innerHTML = 'й'
    document.querySelector('.letter-w').innerHTML = 'ц'
    document.querySelector('.letter-e').innerHTML = 'у'
    document.querySelector('.letter-r').innerHTML = 'к'
    document.querySelector('.letter-t').innerHTML = 'е'
    document.querySelector('.letter-y').innerHTML = 'н'
    document.querySelector('.letter-u').innerHTML = 'г'
    document.querySelector('.letter-i').innerHTML = 'ш'
    document.querySelector('.letter-o').innerHTML = 'щ'
    document.querySelector('.letter-p').innerHTML = 'з'
    document.querySelector('.left-bracket').innerHTML = 'х'
    document.querySelector('.right-bracket').innerHTML = 'ъ'
    document.querySelector('.slash-l').innerHTML = '\\'

    document.querySelector('.letter-a').innerHTML = 'ф'
    document.querySelector('.letter-s').innerHTML = 'ы'
    document.querySelector('.letter-d').innerHTML = 'в'
    document.querySelector('.letter-f').innerHTML = 'а'
    document.querySelector('.letter-g').innerHTML = 'п'
    document.querySelector('.letter-h').innerHTML = 'р'
    document.querySelector('.letter-j').innerHTML = 'о'
    document.querySelector('.letter-k').innerHTML = 'л'
    document.querySelector('.letter-l').innerHTML = 'д'
    document.querySelector('.semicolon').innerHTML = 'ж'
    document.querySelector('.quote').innerHTML = 'э'

    document.querySelector('.letter-z').innerHTML = 'я'
    document.querySelector('.letter-x').innerHTML = 'ч'
    document.querySelector('.letter-c').innerHTML = 'с'
    document.querySelector('.letter-v').innerHTML = 'м'
    document.querySelector('.letter-b').innerHTML = 'и'
    document.querySelector('.letter-n').innerHTML = 'т'
    document.querySelector('.letter-m').innerHTML = 'ь'
    document.querySelector('.comma').innerHTML = 'б'
    document.querySelector('.dot').innerHTML = 'ю'
    document.querySelector('.slash-r').innerHTML = '.'
  }
})

let buttonZ = document.querySelector('.letter-z')
buttonZ.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonZ.classList[1],
  ).innerHTML
}

let buttonX = document.querySelector('.letter-x')
buttonX.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonX.classList[1],
  ).innerHTML
}

let buttonC = document.querySelector('.letter-c')
buttonC.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonC.classList[1],
  ).innerHTML
}

let buttonV = document.querySelector('.letter-v')
buttonV.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonV.classList[1],
  ).innerHTML
}

let buttonB = document.querySelector('.letter-b')
buttonB.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonB.classList[1],
  ).innerHTML
}

let buttonN = document.querySelector('.letter-n')
buttonN.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonN.classList[1],
  ).innerHTML
}

let buttonM = document.querySelector('.letter-m')
buttonM.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonM.classList[1],
  ).innerHTML
}

let buttonComma = document.querySelector('.comma')
buttonComma.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonComma.classList[1],
  ).innerHTML
}

let buttonPeriod = document.querySelector('.dot')
buttonPeriod.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonPeriod.classList[1],
  ).innerHTML
}

let buttonSlash = document.querySelector('.slash-r')
buttonSlash.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += document.querySelector(
    '.' + buttonSlash.classList[1],
  ).innerHTML
}

let buttonArrowUp = document.querySelector('.arrow-up')
buttonArrowUp.onclick = function () {
  textWrap()
  document.getElementById('kinput').innerHTML += '▲'
}

let buttonShiftRight = document.querySelector('.shift-r')
buttonShiftRight.addEventListener('mousedown', function () {
  if (changeLang == 0) {
    capsCheck = 1
    shiftCheck = 1

    document.querySelector('.unknown').innerHTML = '~'
    document.querySelector('.one').innerHTML = '!'
    document.querySelector('.two').innerHTML = '@'
    document.querySelector('.three').innerHTML = '#'
    document.querySelector('.four').innerHTML = '$'
    document.querySelector('.five').innerHTML = '%'
    document.querySelector('.six').innerHTML = '^'
    document.querySelector('.seven').innerHTML = '&'
    document.querySelector('.eight').innerHTML = '*'
    document.querySelector('.nine').innerHTML = '('
    document.querySelector('.zero').innerHTML = ')'
    document.querySelector('.minus').innerHTML = '_'
    document.querySelector('.equal').innerHTML = '+'

    document.querySelector('.letter-q').innerHTML = 'Q'
    document.querySelector('.letter-w').innerHTML = 'W'
    document.querySelector('.letter-e').innerHTML = 'E'
    document.querySelector('.letter-r').innerHTML = 'R'
    document.querySelector('.letter-t').innerHTML = 'T'
    document.querySelector('.letter-y').innerHTML = 'Y'
    document.querySelector('.letter-u').innerHTML = 'U'
    document.querySelector('.letter-i').innerHTML = 'I'
    document.querySelector('.letter-o').innerHTML = 'O'
    document.querySelector('.letter-p').innerHTML = 'P'
    document.querySelector('.left-bracket').innerHTML = '{'
    document.querySelector('.right-bracket').innerHTML = '}'
    document.querySelector('.slash-l').innerHTML = '|'

    document.querySelector('.letter-a').innerHTML = 'A'
    document.querySelector('.letter-s').innerHTML = 'S'
    document.querySelector('.letter-d').innerHTML = 'D'
    document.querySelector('.letter-f').innerHTML = 'F'
    document.querySelector('.letter-g').innerHTML = 'G'
    document.querySelector('.letter-h').innerHTML = 'H'
    document.querySelector('.letter-j').innerHTML = 'J'
    document.querySelector('.letter-k').innerHTML = 'K'
    document.querySelector('.letter-l').innerHTML = 'L'
    document.querySelector('.semicolon').innerHTML = ':'
    document.querySelector('.quote').innerHTML = '"'

    document.querySelector('.letter-z').innerHTML = 'Z'
    document.querySelector('.letter-x').innerHTML = 'X'
    document.querySelector('.letter-c').innerHTML = 'C'
    document.querySelector('.letter-v').innerHTML = 'V'
    document.querySelector('.letter-b').innerHTML = 'B'
    document.querySelector('.letter-n').innerHTML = 'N'
    document.querySelector('.letter-m').innerHTML = 'M'
    document.querySelector('.comma').innerHTML = '<'
    document.querySelector('.dot').innerHTML = '>'
    document.querySelector('.slash-r').innerHTML = '?'
  } else if (changeLang == 1) {
    capsCheck = 1
    shiftCheck = 1

    document.querySelector('.unknown').innerHTML = 'Ё'
    document.querySelector('.one').innerHTML = '!'
    document.querySelector('.two').innerHTML = '"'
    document.querySelector('.three').innerHTML = '№'
    document.querySelector('.four').innerHTML = ';'
    document.querySelector('.five').innerHTML = '%'
    document.querySelector('.six').innerHTML = ':'
    document.querySelector('.seven').innerHTML = '?'
    document.querySelector('.eight').innerHTML = '*'
    document.querySelector('.nine').innerHTML = '('
    document.querySelector('.zero').innerHTML = ')'
    document.querySelector('.minus').innerHTML = '_'
    document.querySelector('.equal').innerHTML = '+'

    document.querySelector('.letter-q').innerHTML = 'Й'
    document.querySelector('.letter-w').innerHTML = 'Ц'
    document.querySelector('.letter-e').innerHTML = 'У'
    document.querySelector('.letter-r').innerHTML = 'К'
    document.querySelector('.letter-t').innerHTML = 'Е'
    document.querySelector('.letter-y').innerHTML = 'Н'
    document.querySelector('.letter-u').innerHTML = 'Г'
    document.querySelector('.letter-i').innerHTML = 'Ш'
    document.querySelector('.letter-o').innerHTML = 'Щ'
    document.querySelector('.letter-p').innerHTML = 'З'
    document.querySelector('.left-bracket').innerHTML = 'Х'
    document.querySelector('.right-bracket').innerHTML = 'Ъ'
    document.querySelector('.slash-l').innerHTML = '/'

    document.querySelector('.letter-a').innerHTML = 'Ф'
    document.querySelector('.letter-s').innerHTML = 'Ы'
    document.querySelector('.letter-d').innerHTML = 'В'
    document.querySelector('.letter-f').innerHTML = 'А'
    document.querySelector('.letter-g').innerHTML = 'П'
    document.querySelector('.letter-h').innerHTML = 'Р'
    document.querySelector('.letter-j').innerHTML = 'О'
    document.querySelector('.letter-k').innerHTML = 'Л'
    document.querySelector('.letter-l').innerHTML = 'Д'
    document.querySelector('.semicolon').innerHTML = 'Ж'
    document.querySelector('.quote').innerHTML = 'Э'

    document.querySelector('.letter-z').innerHTML = 'Я'
    document.querySelector('.letter-x').innerHTML = 'Ч'
    document.querySelector('.letter-c').innerHTML = 'С'
    document.querySelector('.letter-v').innerHTML = 'М'
    document.querySelector('.letter-b').innerHTML = 'И'
    document.querySelector('.letter-n').innerHTML = 'Т'
    document.querySelector('.letter-m').innerHTML = 'Ь'
    document.querySelector('.comma').innerHTML = 'Б'
    document.querySelector('.dot').innerHTML = 'Ю'
    document.querySelector('.slash-r').innerHTML = ','
  }
})
buttonShiftRight.addEventListener('mouseup', function () {
  if (changeLang == 0) {
    capsCheck = 0
    shiftCheck = 0

    document.querySelector('.unknown').innerHTML = '`'
    document.querySelector('.one').innerHTML = '1'
    document.querySelector('.two').innerHTML = '2'
    document.querySelector('.three').innerHTML = '3'
    document.querySelector('.four').innerHTML = '4'
    document.querySelector('.five').innerHTML = '5'
    document.querySelector('.six').innerHTML = '6'
    document.querySelector('.seven').innerHTML = '7'
    document.querySelector('.eight').innerHTML = '8'
    document.querySelector('.nine').innerHTML = '9'
    document.querySelector('.zero').innerHTML = '0'
    document.querySelector('.minus').innerHTML = '-'
    document.querySelector('.equal').innerHTML = '='

    document.querySelector('.letter-q').innerHTML = 'q'
    document.querySelector('.letter-w').innerHTML = 'w'
    document.querySelector('.letter-e').innerHTML = 'e'
    document.querySelector('.letter-r').innerHTML = 'r'
    document.querySelector('.letter-t').innerHTML = 't'
    document.querySelector('.letter-y').innerHTML = 'y'
    document.querySelector('.letter-u').innerHTML = 'u'
    document.querySelector('.letter-i').innerHTML = 'i'
    document.querySelector('.letter-o').innerHTML = 'o'
    document.querySelector('.letter-p').innerHTML = 'p'
    document.querySelector('.left-bracket').innerHTML = '['
    document.querySelector('.right-bracket').innerHTML = ']'
    document.querySelector('.slash-l').innerHTML = '\\'

    document.querySelector('.letter-a').innerHTML = 'a'
    document.querySelector('.letter-s').innerHTML = 's'
    document.querySelector('.letter-d').innerHTML = 'd'
    document.querySelector('.letter-f').innerHTML = 'f'
    document.querySelector('.letter-g').innerHTML = 'g'
    document.querySelector('.letter-h').innerHTML = 'h'
    document.querySelector('.letter-j').innerHTML = 'j'
    document.querySelector('.letter-k').innerHTML = 'k'
    document.querySelector('.letter-l').innerHTML = 'l'
    document.querySelector('.semicolon').innerHTML = ';'
    document.querySelector('.quote').innerHTML = "'"

    document.querySelector('.letter-z').innerHTML = 'z'
    document.querySelector('.letter-x').innerHTML = 'x'
    document.querySelector('.letter-c').innerHTML = 'c'
    document.querySelector('.letter-v').innerHTML = 'v'
    document.querySelector('.letter-b').innerHTML = 'b'
    document.querySelector('.letter-n').innerHTML = 'n'
    document.querySelector('.letter-m').innerHTML = 'm'
    document.querySelector('.comma').innerHTML = ','
    document.querySelector('.dot').innerHTML = '.'
    document.querySelector('.slash-r').innerHTML = '/'
  } else if (changeLang == 1) {
    capsCheck = 0
    shiftCheck = 0

    document.querySelector('.unknown').innerHTML = 'ё'
    document.querySelector('.one').innerHTML = '1'
    document.querySelector('.two').innerHTML = '2'
    document.querySelector('.three').innerHTML = '3'
    document.querySelector('.four').innerHTML = '4'
    document.querySelector('.five').innerHTML = '5'
    document.querySelector('.six').innerHTML = '6'
    document.querySelector('.seven').innerHTML = '7'
    document.querySelector('.eight').innerHTML = '8'
    document.querySelector('.nine').innerHTML = '9'
    document.querySelector('.zero').innerHTML = '0'
    document.querySelector('.minus').innerHTML = '-'
    document.querySelector('.equal').innerHTML = '='

    document.querySelector('.letter-q').innerHTML = 'й'
    document.querySelector('.letter-w').innerHTML = 'ц'
    document.querySelector('.letter-e').innerHTML = 'у'
    document.querySelector('.letter-r').innerHTML = 'к'
    document.querySelector('.letter-t').innerHTML = 'е'
    document.querySelector('.letter-y').innerHTML = 'н'
    document.querySelector('.letter-u').innerHTML = 'г'
    document.querySelector('.letter-i').innerHTML = 'ш'
    document.querySelector('.letter-o').innerHTML = 'щ'
    document.querySelector('.letter-p').innerHTML = 'з'
    document.querySelector('.left-bracket').innerHTML = 'х'
    document.querySelector('.right-bracket').innerHTML = 'ъ'
    document.querySelector('.slash-l').innerHTML = '\\'

    document.querySelector('.letter-a').innerHTML = 'ф'
    document.querySelector('.letter-s').innerHTML = 'ы'
    document.querySelector('.letter-d').innerHTML = 'в'
    document.querySelector('.letter-f').innerHTML = 'а'
    document.querySelector('.letter-g').innerHTML = 'п'
    document.querySelector('.letter-h').innerHTML = 'р'
    document.querySelector('.letter-j').innerHTML = 'о'
    document.querySelector('.letter-k').innerHTML = 'л'
    document.querySelector('.letter-l').innerHTML = 'д'
    document.querySelector('.semicolon').innerHTML = 'ж'
    document.querySelector('.quote').innerHTML = 'э'

    document.querySelector('.letter-z').innerHTML = 'я'
    document.querySelector('.letter-x').innerHTML = 'ч'
    document.querySelector('.letter-c').innerHTML = 'с'
    document.querySelector('.letter-v').innerHTML = 'м'
    document.querySelector('.letter-b').innerHTML = 'и'
    document.querySelector('.letter-n').innerHTML = 'т'
    document.querySelector('.letter-m').innerHTML = 'ь'
    document.querySelector('.comma').innerHTML = 'б'
    document.querySelector('.dot').innerHTML = 'ю'
    document.querySelector('.slash-r').innerHTML = '.'
  }
})

let buttonControlLeft = document.querySelector('.ctrl-l')
buttonControlLeft.addEventListener('mousedown', function () {
  arrChars.push('ControlLeft')
  languageCheck()
})
buttonControlLeft.addEventListener('mouseup', function () {
  arrChars.splice(arrChars.indexOf('ControlLeft'), 1)
})

let buttonMetaLeft = document.querySelector('.win')

let buttonAltLeft = document.querySelector('.alt-l')
buttonAltLeft.addEventListener('mousedown', function () {
  arrChars.push('AltLeft')
  languageCheck()
})
buttonAltLeft.addEventListener('mouseup', function () {
  arrChars.splice(arrChars.indexOf('AltLeft'), 1)
})

let buttonSpace = document.querySelector('.space')
buttonSpace.onclick = function () {
  document.getElementById('kinput').innerHTML += ' '
}

let buttonAltRight = document.querySelector('.alt-r')
buttonAltRight.addEventListener('mousedown', function () {
  arrChars.push('AltRight')
  languageCheck()
})
buttonAltRight.addEventListener('mouseup', function () {
  arrChars.splice(arrChars.indexOf('AltRight'), 1)
})

let buttonControlRight = document.querySelector('.ctrl-r')
buttonControlRight.addEventListener('mousedown', function () {
  arrChars.push('ControlRight')
  languageCheck()
})
buttonControlRight.addEventListener('mouseup', function () {
  arrChars.splice(arrChars.indexOf('ControlRight'), 1)
})

let buttonArrowLeft = document.querySelector('.arrow-l')
buttonArrowLeft.onclick = function () {
  document.getElementById('kinput').innerHTML += '◄'
}

let buttonArrowDown = document.querySelector('.arrow-down')
buttonArrowDown.onclick = function () {
  document.getElementById('kinput').innerHTML += '▼'
}

let buttonArrowRight = document.querySelector('.arrow-r')
buttonArrowRight.onclick = function () {
  document.getElementById('kinput').innerHTML += '►'
}

document.addEventListener('keydown', function (event) {
  event.preventDefault()
  textWrap()

  if (changeLang == 0) {
    if (event.code == 'Backquote') {
      backquote.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '`' : '~'
    } else if (event.code == 'Digit1') {
      button1.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '1' : '!'
    } else if (event.code == 'Digit2') {
      button2.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '2' : '@'
    } else if (event.code == 'Digit3') {
      button3.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '3' : '#'
    } else if (event.code == 'Digit4') {
      button4.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '4' : '$'
    } else if (event.code == 'Digit5') {
      button5.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '5' : '%'
    } else if (event.code == 'Digit6') {
      button6.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '6' : '^'
    } else if (event.code == 'Digit7') {
      button7.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '7' : '&'
    } else if (event.code == 'Digit8') {
      button8.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '8' : '*'
    } else if (event.code == 'Digit9') {
      button9.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '9' : '('
    } else if (event.code == 'Digit0') {
      button0.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '0' : ')'
    } else if (event.code == 'Minus') {
      buttonMinus.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '-' : '_'
    } else if (event.code == 'Equal') {
      buttonEqual.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '=' : '+'
    } else if (event.code == 'Backspace') {
      buttonBackspace.classList.add('active')
      deleteLast()
    } else if (event.code == 'Tab') {
      buttonTab.classList.add('active')
      document.getElementById('kinput').innerHTML += '    '
    } else if (event.code == 'KeyQ') {
      buttonQ.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'q' : 'Q'
    } else if (event.code == 'KeyW') {
      buttonW.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'w' : 'W'
    } else if (event.code == 'KeyE') {
      buttonE.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'e' : 'E'
    } else if (event.code == 'KeyR') {
      buttonR.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'r' : 'R'
    } else if (event.code == 'KeyT') {
      buttonT.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 't' : 'T'
    } else if (event.code == 'KeyY') {
      buttonY.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'y' : 'Y'
    } else if (event.code == 'KeyU') {
      buttonU.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'u' : 'U'
    } else if (event.code == 'KeyI') {
      buttonI.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'i' : 'I'
    } else if (event.code == 'KeyO') {
      buttonO.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'o' : 'O'
    } else if (event.code == 'KeyP') {
      buttonP.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'p' : 'P'
    } else if (event.code == 'BracketLeft') {
      buttonBracketLeft.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '[' : '{'
    } else if (event.code == 'BracketRight') {
      buttonBracketRight.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? ']' : '}'
    } else if (event.code == 'Backslash') {
      buttonBackslash.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '\\' : '|'
    } else if (event.code == 'Delete') {
      buttonDelete.classList.add('active')
    } else if (event.code == 'CapsLock') {
      buttonCaps.classList.add('active')
    } else if (event.code == 'KeyA') {
      buttonA.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'a' : 'A'
    } else if (event.code == 'KeyS') {
      buttonS.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 's' : 'S'
    } else if (event.code == 'KeyD') {
      buttonD.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'd' : 'D'
    } else if (event.code == 'KeyF') {
      buttonF.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'f' : 'F'
    } else if (event.code == 'KeyG') {
      buttonG.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'g' : 'G'
    } else if (event.code == 'KeyH') {
      buttonH.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'h' : 'H'
    } else if (event.code == 'KeyJ') {
      buttonJ.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'j' : 'J'
    } else if (event.code == 'KeyK') {
      buttonK.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'k' : 'K'
    } else if (event.code == 'KeyL') {
      buttonL.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'l' : 'L'
    } else if (event.code == 'Semicolon') {
      buttonSemicolon.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? ';' : ':'
    } else if (event.code == 'Quote') {
      buttonQuote.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? "'" : '"'
    } else if (event.code == 'Enter') {
      buttonEnter.classList.add('active')
    } else if (event.code == 'ShiftLeft') {
      buttonShiftLeft.classList.add('active')

      capsCheck = 1
      shiftCheck = 1

      document.querySelector('.unknown').innerHTML = '~'
      document.querySelector('.one').innerHTML = '!'
      document.querySelector('.two').innerHTML = '@'
      document.querySelector('.three').innerHTML = '#'
      document.querySelector('.four').innerHTML = '$'
      document.querySelector('.five').innerHTML = '%'
      document.querySelector('.six').innerHTML = '^'
      document.querySelector('.seven').innerHTML = '&'
      document.querySelector('.eight').innerHTML = '*'
      document.querySelector('.nine').innerHTML = '('
      document.querySelector('.zero').innerHTML = ')'
      document.querySelector('.minus').innerHTML = '_'
      document.querySelector('.equal').innerHTML = '+'

      document.querySelector('.letter-q').innerHTML = 'Q'
      document.querySelector('.letter-w').innerHTML = 'W'
      document.querySelector('.letter-e').innerHTML = 'E'
      document.querySelector('.letter-r').innerHTML = 'R'
      document.querySelector('.letter-t').innerHTML = 'T'
      document.querySelector('.letter-y').innerHTML = 'Y'
      document.querySelector('.letter-u').innerHTML = 'U'
      document.querySelector('.letter-i').innerHTML = 'I'
      document.querySelector('.letter-o').innerHTML = 'O'
      document.querySelector('.letter-p').innerHTML = 'P'
      document.querySelector('.left-bracket').innerHTML = '{'
      document.querySelector('.right-bracket').innerHTML = '}'
      document.querySelector('.slash-l').innerHTML = '|'

      document.querySelector('.letter-a').innerHTML = 'A'
      document.querySelector('.letter-s').innerHTML = 'S'
      document.querySelector('.letter-d').innerHTML = 'D'
      document.querySelector('.letter-f').innerHTML = 'F'
      document.querySelector('.letter-g').innerHTML = 'G'
      document.querySelector('.letter-h').innerHTML = 'H'
      document.querySelector('.letter-j').innerHTML = 'J'
      document.querySelector('.letter-k').innerHTML = 'K'
      document.querySelector('.letter-l').innerHTML = 'L'
      document.querySelector('.semicolon').innerHTML = ':'
      document.querySelector('.quote').innerHTML = '"'

      document.querySelector('.letter-z').innerHTML = 'Z'
      document.querySelector('.letter-x').innerHTML = 'X'
      document.querySelector('.letter-c').innerHTML = 'C'
      document.querySelector('.letter-v').innerHTML = 'V'
      document.querySelector('.letter-b').innerHTML = 'B'
      document.querySelector('.letter-n').innerHTML = 'N'
      document.querySelector('.letter-m').innerHTML = 'M'
      document.querySelector('.comma').innerHTML = '<'
      document.querySelector('.dot').innerHTML = '>'
      document.querySelector('.slash-r').innerHTML = '?'
    } else if (event.code == 'KeyZ') {
      buttonZ.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'z' : 'Z'
    } else if (event.code == 'KeyX') {
      buttonX.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'x' : 'X'
    } else if (event.code == 'KeyC') {
      buttonC.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'c' : 'C'
    } else if (event.code == 'KeyV') {
      buttonV.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'v' : 'V'
    } else if (event.code == 'KeyB') {
      buttonB.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'b' : 'B'
    } else if (event.code == 'KeyN') {
      buttonN.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'n' : 'N'
    } else if (event.code == 'KeyM') {
      buttonM.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'm' : 'M'
    } else if (event.code == 'Comma') {
      buttonComma.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? ',' : '<'
    } else if (event.code == 'Period') {
      buttonPeriod.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '.' : '>'
    } else if (event.code == 'Slash') {
      buttonSlash.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '/' : '?'
    } else if (event.code == 'ArrowUp') {
      buttonArrowUp.classList.add('active')
      document.getElementById('kinput').innerHTML += '▲'
    } else if (event.code == 'ShiftRight') {
      buttonShiftRight.classList.add('active')

      capsCheck = 1
      shiftCheck = 1

      document.querySelector('.unknown').innerHTML = '~'
      document.querySelector('.one').innerHTML = '!'
      document.querySelector('.two').innerHTML = '@'
      document.querySelector('.three').innerHTML = '#'
      document.querySelector('.four').innerHTML = '$'
      document.querySelector('.five').innerHTML = '%'
      document.querySelector('.six').innerHTML = '^'
      document.querySelector('.seven').innerHTML = '&'
      document.querySelector('.eight').innerHTML = '*'
      document.querySelector('.nine').innerHTML = '('
      document.querySelector('.zero').innerHTML = ')'
      document.querySelector('.minus').innerHTML = '_'
      document.querySelector('.equal').innerHTML = '+'

      document.querySelector('.letter-q').innerHTML = 'Q'
      document.querySelector('.letter-w').innerHTML = 'W'
      document.querySelector('.letter-e').innerHTML = 'E'
      document.querySelector('.letter-r').innerHTML = 'R'
      document.querySelector('.letter-t').innerHTML = 'T'
      document.querySelector('.letter-y').innerHTML = 'Y'
      document.querySelector('.letter-u').innerHTML = 'U'
      document.querySelector('.letter-i').innerHTML = 'I'
      document.querySelector('.letter-o').innerHTML = 'O'
      document.querySelector('.letter-p').innerHTML = 'P'
      document.querySelector('.left-bracket').innerHTML = '{'
      document.querySelector('.right-bracket').innerHTML = '}'
      document.querySelector('.slash-l').innerHTML = '|'

      document.querySelector('.letter-a').innerHTML = 'A'
      document.querySelector('.letter-s').innerHTML = 'S'
      document.querySelector('.letter-d').innerHTML = 'D'
      document.querySelector('.letter-f').innerHTML = 'F'
      document.querySelector('.letter-g').innerHTML = 'G'
      document.querySelector('.letter-h').innerHTML = 'H'
      document.querySelector('.letter-j').innerHTML = 'J'
      document.querySelector('.letter-k').innerHTML = 'K'
      document.querySelector('.letter-l').innerHTML = 'L'
      document.querySelector('.semicolon').innerHTML = ':'
      document.querySelector('.quote').innerHTML = '"'

      document.querySelector('.letter-z').innerHTML = 'Z'
      document.querySelector('.letter-x').innerHTML = 'X'
      document.querySelector('.letter-c').innerHTML = 'C'
      document.querySelector('.letter-v').innerHTML = 'V'
      document.querySelector('.letter-b').innerHTML = 'B'
      document.querySelector('.letter-n').innerHTML = 'N'
      document.querySelector('.letter-m').innerHTML = 'M'
      document.querySelector('.comma').innerHTML = '<'
      document.querySelector('.dot').innerHTML = '>'
      document.querySelector('.slash-r').innerHTML = '?'
    } else if (event.code == 'ControlLeft') {
      buttonControlLeft.classList.add('active')
    } else if (event.code == 'MetaLeft') {
      buttonMetaLeft.classList.add('active')
    } else if (event.code == 'AltLeft') {
      buttonAltLeft.classList.add('active')
    } else if (event.code == 'Space') {
      buttonSpace.classList.add('active')
      document.getElementById('kinput').innerHTML += ' '
    } else if (event.code == 'AltRight') {
      buttonAltRight.classList.add('active')
    } else if (event.code == 'ControlRight') {
      buttonControlRight.classList.add('active')
    } else if (event.code == 'ArrowLeft') {
      buttonArrowLeft.classList.add('active')
      document.getElementById('kinput').innerHTML += '◄'
    } else if (event.code == 'ArrowDown') {
      buttonArrowDown.classList.add('active')
      document.getElementById('kinput').innerHTML += '▼'
    } else if (event.code == 'ArrowRight') {
      buttonArrowRight.classList.add('active')
      document.getElementById('kinput').innerHTML += '►'
    }
  }

  if (changeLang == 1) {
    if (event.code == 'Backquote') {
      backquote.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'ё' : 'Ё'
    } else if (event.code == 'Digit1') {
      button1.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '1' : '!'
    } else if (event.code == 'Digit2') {
      button2.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '2' : '"'
    } else if (event.code == 'Digit3') {
      button3.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '3' : '#'
    } else if (event.code == 'Digit4') {
      button4.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '4' : '$'
    } else if (event.code == 'Digit5') {
      button5.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '5' : '%'
    } else if (event.code == 'Digit6') {
      button6.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '6' : '^'
    } else if (event.code == 'Digit7') {
      button7.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '7' : '&'
    } else if (event.code == 'Digit8') {
      button8.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '8' : '*'
    } else if (event.code == 'Digit9') {
      button9.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '9' : '('
    } else if (event.code == 'Digit0') {
      button0.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '0' : ')'
    } else if (event.code == 'Minus') {
      buttonMinus.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '-' : '_'
    } else if (event.code == 'Equal') {
      buttonEqual.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '=' : '+'
    } else if (event.code == 'Backspace') {
      buttonBackspace.classList.add('active')
      document.getElementById('kinput').innerHTML = document
        .getElementById('kinput')
        .innerHTML.replace(/.$/, '')
    } else if (event.code == 'Tab') {
      buttonTab.classList.add('active')
      document.getElementById('kinput').innerHTML += '    '
    } else if (event.code == 'KeyQ') {
      buttonQ.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'й' : 'Й'
    } else if (event.code == 'KeyW') {
      buttonW.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'ц' : 'Ц'
    } else if (event.code == 'KeyE') {
      buttonE.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'у' : 'У'
    } else if (event.code == 'KeyR') {
      buttonR.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'к' : 'К'
    } else if (event.code == 'KeyT') {
      buttonT.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'е' : 'Е'
    } else if (event.code == 'KeyY') {
      buttonY.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'н' : 'Н'
    } else if (event.code == 'KeyU') {
      buttonU.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'г' : 'Г'
    } else if (event.code == 'KeyI') {
      buttonI.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'ш' : 'Ш'
    } else if (event.code == 'KeyO') {
      buttonO.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'щ' : 'Щ'
    } else if (event.code == 'KeyP') {
      buttonP.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'з' : 'З'
    } else if (event.code == 'BracketLeft') {
      buttonBracketLeft.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'х' : 'Х'
    } else if (event.code == 'BracketRight') {
      buttonBracketRight.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'ъ' : 'Ъ'
    } else if (event.code == 'Backslash') {
      buttonBackslash.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '\\' : '/'
    } else if (event.code == 'Delete') {
      buttonDelete.classList.add('active')
    } else if (event.code == 'CapsLock') {
      buttonCaps.classList.add('active')
    } else if (event.code == 'KeyA') {
      buttonA.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'ф' : 'Ф'
    } else if (event.code == 'KeyS') {
      buttonS.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'ы' : 'Ы'
    } else if (event.code == 'KeyD') {
      buttonD.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'в' : 'В'
    } else if (event.code == 'KeyF') {
      buttonF.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'а' : 'А'
    } else if (event.code == 'KeyG') {
      buttonG.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'п' : 'П'
    } else if (event.code == 'KeyH') {
      buttonH.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'р' : 'Р'
    } else if (event.code == 'KeyJ') {
      buttonJ.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'о' : 'О'
    } else if (event.code == 'KeyK') {
      buttonK.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'л' : 'Л'
    } else if (event.code == 'KeyL') {
      buttonL.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'д' : 'Д'
    } else if (event.code == 'Semicolon') {
      buttonSemicolon.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'ж' : 'Ж'
    } else if (event.code == 'Quote') {
      buttonQuote.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'э' : 'Э'
    } else if (event.code == 'Enter') {
      buttonEnter.classList.add('active')
    } else if (event.code == 'ShiftLeft') {
      buttonShiftLeft.classList.add('active')

      capsCheck = 1
      shiftCheck = 1

      document.querySelector('.unknown').innerHTML = 'Ё'
      document.querySelector('.one').innerHTML = '!'
      document.querySelector('.two').innerHTML = '"'
      document.querySelector('.three').innerHTML = '№'
      document.querySelector('.four').innerHTML = ';'
      document.querySelector('.five').innerHTML = '%'
      document.querySelector('.six').innerHTML = ':'
      document.querySelector('.seven').innerHTML = '?'
      document.querySelector('.eight').innerHTML = '*'
      document.querySelector('.nine').innerHTML = '('
      document.querySelector('.zero').innerHTML = ')'
      document.querySelector('.minus').innerHTML = '_'
      document.querySelector('.equal').innerHTML = '+'

      document.querySelector('.letter-q').innerHTML = 'Й'
      document.querySelector('.letter-w').innerHTML = 'Ц'
      document.querySelector('.letter-e').innerHTML = 'У'
      document.querySelector('.letter-r').innerHTML = 'К'
      document.querySelector('.letter-t').innerHTML = 'Е'
      document.querySelector('.letter-y').innerHTML = 'Н'
      document.querySelector('.letter-u').innerHTML = 'Г'
      document.querySelector('.letter-i').innerHTML = 'Ш'
      document.querySelector('.letter-o').innerHTML = 'Щ'
      document.querySelector('.letter-p').innerHTML = 'З'
      document.querySelector('.left-bracket').innerHTML = 'Х'
      document.querySelector('.right-bracket').innerHTML = 'Ъ'
      document.querySelector('.slash-l').innerHTML = '/'

      document.querySelector('.letter-a').innerHTML = 'Ф'
      document.querySelector('.letter-s').innerHTML = 'Ы'
      document.querySelector('.letter-d').innerHTML = 'В'
      document.querySelector('.letter-f').innerHTML = 'А'
      document.querySelector('.letter-g').innerHTML = 'П'
      document.querySelector('.letter-h').innerHTML = 'Р'
      document.querySelector('.letter-j').innerHTML = 'О'
      document.querySelector('.letter-k').innerHTML = 'Л'
      document.querySelector('.letter-l').innerHTML = 'Д'
      document.querySelector('.semicolon').innerHTML = 'Ж'
      document.querySelector('.quote').innerHTML = 'Э'

      document.querySelector('.letter-z').innerHTML = 'Я'
      document.querySelector('.letter-x').innerHTML = 'Ч'
      document.querySelector('.letter-c').innerHTML = 'С'
      document.querySelector('.letter-v').innerHTML = 'М'
      document.querySelector('.letter-b').innerHTML = 'И'
      document.querySelector('.letter-n').innerHTML = 'Т'
      document.querySelector('.letter-m').innerHTML = 'Ь'
      document.querySelector('.comma').innerHTML = 'Б'
      document.querySelector('.dot').innerHTML = 'Ю'
      document.querySelector('.slash-r').innerHTML = ','
    } else if (event.code == 'KeyZ') {
      buttonZ.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'я' : 'Я'
    } else if (event.code == 'KeyX') {
      buttonX.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'ч' : 'Ч'
    } else if (event.code == 'KeyC') {
      buttonC.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'с' : 'С'
    } else if (event.code == 'KeyV') {
      buttonV.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'м' : 'М'
    } else if (event.code == 'KeyB') {
      buttonB.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'и' : 'И'
    } else if (event.code == 'KeyN') {
      buttonN.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'т' : 'Т'
    } else if (event.code == 'KeyM') {
      buttonM.classList.add('active')
      document.getElementById('kinput').innerHTML += !capsCheck ? 'ь' : 'Ь'
    } else if (event.code == 'Comma') {
      buttonComma.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? 'б' : 'Б'
    } else if (event.code == 'Period') {
      buttonPeriod.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? 'ю' : 'Ю'
    } else if (event.code == 'Slash') {
      buttonSlash.classList.add('active')
      document.getElementById('kinput').innerHTML += !shiftCheck ? '.' : ','
    } else if (event.code == 'ArrowUp') {
      buttonArrowUp.classList.add('active')
      document.getElementById('kinput').innerHTML += '▲'
    } else if (event.code == 'ShiftRight') {
      buttonShiftRight.classList.add('active')

      capsCheck = 1
      shiftCheck = 1

      document.querySelector('.unknown').innerHTML = 'Ё'
      document.querySelector('.one').innerHTML = '!'
      document.querySelector('.two').innerHTML = '"'
      document.querySelector('.three').innerHTML = '№'
      document.querySelector('.four').innerHTML = ';'
      document.querySelector('.five').innerHTML = '%'
      document.querySelector('.six').innerHTML = ':'
      document.querySelector('.seven').innerHTML = '?'
      document.querySelector('.eight').innerHTML = '*'
      document.querySelector('.nine').innerHTML = '('
      document.querySelector('.zero').innerHTML = ')'
      document.querySelector('.minus').innerHTML = '_'
      document.querySelector('.equal').innerHTML = '+'

      document.querySelector('.letter-q').innerHTML = 'Й'
      document.querySelector('.letter-w').innerHTML = 'Ц'
      document.querySelector('.letter-e').innerHTML = 'У'
      document.querySelector('.letter-r').innerHTML = 'К'
      document.querySelector('.letter-t').innerHTML = 'Е'
      document.querySelector('.letter-y').innerHTML = 'Н'
      document.querySelector('.letter-u').innerHTML = 'Г'
      document.querySelector('.letter-i').innerHTML = 'Ш'
      document.querySelector('.letter-o').innerHTML = 'Щ'
      document.querySelector('.letter-p').innerHTML = 'З'
      document.querySelector('.left-bracket').innerHTML = 'Х'
      document.querySelector('.right-bracket').innerHTML = 'Ъ'
      document.querySelector('.slash-l').innerHTML = '|'

      document.querySelector('.letter-a').innerHTML = 'Ф'
      document.querySelector('.letter-s').innerHTML = 'Ы'
      document.querySelector('.letter-d').innerHTML = 'В'
      document.querySelector('.letter-f').innerHTML = 'А'
      document.querySelector('.letter-g').innerHTML = 'П'
      document.querySelector('.letter-h').innerHTML = 'Р'
      document.querySelector('.letter-j').innerHTML = 'О'
      document.querySelector('.letter-k').innerHTML = 'Л'
      document.querySelector('.letter-l').innerHTML = 'Д'
      document.querySelector('.semicolon').innerHTML = 'Ж'
      document.querySelector('.quote').innerHTML = 'Э'

      document.querySelector('.letter-z').innerHTML = 'Я'
      document.querySelector('.letter-x').innerHTML = 'Ч'
      document.querySelector('.letter-c').innerHTML = 'С'
      document.querySelector('.letter-v').innerHTML = 'М'
      document.querySelector('.letter-b').innerHTML = 'И'
      document.querySelector('.letter-n').innerHTML = 'Т'
      document.querySelector('.letter-m').innerHTML = 'Ь'
      document.querySelector('.comma').innerHTML = 'Б'
      document.querySelector('.dot').innerHTML = 'Ю'
      document.querySelector('.slash-r').innerHTML = ','
    } else if (event.code == 'ControlLeft') {
      buttonControlLeft.classList.add('active')
    } else if (event.code == 'MetaLeft') {
      buttonMetaLeft.classList.add('active')
    } else if (event.code == 'AltLeft') {
      buttonAltLeft.classList.add('active')
    } else if (event.code == 'Space') {
      buttonSpace.classList.add('active')
      document.getElementById('kinput').innerHTML += ' '
    } else if (event.code == 'AltRight') {
      buttonAltRight.classList.add('active')
    } else if (event.code == 'ControlRight') {
      buttonControlRight.classList.add('active')
    } else if (event.code == 'ArrowLeft') {
      buttonArrowLeft.classList.add('active')
      document.getElementById('kinput').innerHTML += '◄'
    } else if (event.code == 'ArrowDown') {
      buttonArrowDown.classList.add('active')
      document.getElementById('kinput').innerHTML += '▼'
    } else if (event.code == 'ArrowRight') {
      buttonArrowRight.classList.add('active')
      document.getElementById('kinput').innerHTML += '►'
    }
  }
})

document.addEventListener('keyup', function (event) {
  if (changeLang == 0) {
    if (event.code == 'Backquote') {
      backquote.classList.remove('active')
    } else if (event.code == 'Digit1') {
      button1.classList.remove('active')
    } else if (event.code == 'Digit2') {
      button2.classList.remove('active')
    } else if (event.code == 'Digit3') {
      button3.classList.remove('active')
    } else if (event.code == 'Digit4') {
      button4.classList.remove('active')
    } else if (event.code == 'Digit5') {
      button5.classList.remove('active')
    } else if (event.code == 'Digit6') {
      button6.classList.remove('active')
    } else if (event.code == 'Digit7') {
      button7.classList.remove('active')
    } else if (event.code == 'Digit8') {
      button8.classList.remove('active')
    } else if (event.code == 'Digit9') {
      button9.classList.remove('active')
    } else if (event.code == 'Digit0') {
      button0.classList.remove('active')
    } else if (event.code == 'Minus') {
      buttonMinus.classList.remove('active')
    } else if (event.code == 'Equal') {
      buttonEqual.classList.remove('active')
    } else if (event.code == 'Backspace') {
      buttonBackspace.classList.remove('active')
    } else if (event.code == 'Tab') {
      buttonTab.classList.remove('active')
    } else if (event.code == 'KeyQ') {
      buttonQ.classList.remove('active')
    } else if (event.code == 'KeyW') {
      buttonW.classList.remove('active')
    } else if (event.code == 'KeyE') {
      buttonE.classList.remove('active')
    } else if (event.code == 'KeyR') {
      buttonR.classList.remove('active')
    } else if (event.code == 'KeyT') {
      buttonT.classList.remove('active')
    } else if (event.code == 'KeyY') {
      buttonY.classList.remove('active')
    } else if (event.code == 'KeyU') {
      buttonU.classList.remove('active')
    } else if (event.code == 'KeyI') {
      buttonI.classList.remove('active')
    } else if (event.code == 'KeyO') {
      buttonO.classList.remove('active')
    } else if (event.code == 'KeyP') {
      buttonP.classList.remove('active')
    } else if (event.code == 'BracketLeft') {
      buttonBracketLeft.classList.remove('active')
    } else if (event.code == 'BracketRight') {
      buttonBracketRight.classList.remove('active')
    } else if (event.code == 'Backslash') {
      buttonBackslash.classList.remove('active')
    } else if (event.code == 'Delete') {
      buttonDelete.classList.remove('active')
    } else if (event.code == 'CapsLock') {
      buttonCaps.classList.remove('active')
      capsCheckScript()
    } else if (event.code == 'KeyA') {
      buttonA.classList.remove('active')
    } else if (event.code == 'KeyS') {
      buttonS.classList.remove('active')
    } else if (event.code == 'KeyD') {
      buttonD.classList.remove('active')
    } else if (event.code == 'KeyF') {
      buttonF.classList.remove('active')
    } else if (event.code == 'KeyG') {
      buttonG.classList.remove('active')
    } else if (event.code == 'KeyH') {
      buttonH.classList.remove('active')
    } else if (event.code == 'KeyJ') {
      buttonJ.classList.remove('active')
    } else if (event.code == 'KeyK') {
      buttonK.classList.remove('active')
    } else if (event.code == 'KeyL') {
      buttonL.classList.remove('active')
    } else if (event.code == 'Semicolon') {
      buttonSemicolon.classList.remove('active')
    } else if (event.code == 'Quote') {
      buttonQuote.classList.remove('active')
    } else if (event.code == 'Enter') {
      buttonEnter.classList.remove('active')
    }

    if (event.code == 'ShiftLeft') {
      buttonShiftLeft.classList.remove('active')

      capsCheck = 0
      shiftCheck = 0

      document.querySelector('.unknown').innerHTML = '`'
      document.querySelector('.one').innerHTML = '1'
      document.querySelector('.two').innerHTML = '2'
      document.querySelector('.three').innerHTML = '3'
      document.querySelector('.four').innerHTML = '4'
      document.querySelector('.five').innerHTML = '5'
      document.querySelector('.six').innerHTML = '6'
      document.querySelector('.seven').innerHTML = '7'
      document.querySelector('.eight').innerHTML = '8'
      document.querySelector('.nine').innerHTML = '9'
      document.querySelector('.zero').innerHTML = '0'
      document.querySelector('.minus').innerHTML = '-'
      document.querySelector('.equal').innerHTML = '='

      document.querySelector('.letter-q').innerHTML = 'q'
      document.querySelector('.letter-w').innerHTML = 'w'
      document.querySelector('.letter-e').innerHTML = 'e'
      document.querySelector('.letter-r').innerHTML = 'r'
      document.querySelector('.letter-t').innerHTML = 't'
      document.querySelector('.letter-y').innerHTML = 'y'
      document.querySelector('.letter-u').innerHTML = 'u'
      document.querySelector('.letter-i').innerHTML = 'i'
      document.querySelector('.letter-o').innerHTML = 'o'
      document.querySelector('.letter-p').innerHTML = 'p'
      document.querySelector('.left-bracket').innerHTML = '['
      document.querySelector('.right-bracket').innerHTML = ']'
      document.querySelector('.slash-l').innerHTML = '\\'

      document.querySelector('.letter-a').innerHTML = 'a'
      document.querySelector('.letter-s').innerHTML = 's'
      document.querySelector('.letter-d').innerHTML = 'd'
      document.querySelector('.letter-f').innerHTML = 'f'
      document.querySelector('.letter-g').innerHTML = 'g'
      document.querySelector('.letter-h').innerHTML = 'h'
      document.querySelector('.letter-j').innerHTML = 'j'
      document.querySelector('.letter-k').innerHTML = 'k'
      document.querySelector('.letter-l').innerHTML = 'l'
      document.querySelector('.semicolon').innerHTML = ';'
      document.querySelector('.quote').innerHTML = "'"

      document.querySelector('.letter-z').innerHTML = 'z'
      document.querySelector('.letter-x').innerHTML = 'x'
      document.querySelector('.letter-c').innerHTML = 'c'
      document.querySelector('.letter-v').innerHTML = 'v'
      document.querySelector('.letter-b').innerHTML = 'b'
      document.querySelector('.letter-n').innerHTML = 'n'
      document.querySelector('.letter-m').innerHTML = 'm'
      document.querySelector('.comma').innerHTML = ','
      document.querySelector('.dot').innerHTML = '.'
      document.querySelector('.slash-r').innerHTML = '/'
    } else if (event.code == 'KeyZ') {
      buttonZ.classList.remove('active')
    } else if (event.code == 'KeyX') {
      buttonX.classList.remove('active')
    } else if (event.code == 'KeyC') {
      buttonC.classList.remove('active')
    } else if (event.code == 'KeyV') {
      buttonV.classList.remove('active')
    } else if (event.code == 'KeyB') {
      buttonB.classList.remove('active')
    } else if (event.code == 'KeyN') {
      buttonN.classList.remove('active')
    } else if (event.code == 'KeyM') {
      buttonM.classList.remove('active')
    } else if (event.code == 'Comma') {
      buttonComma.classList.remove('active')
    } else if (event.code == 'Period') {
      buttonPeriod.classList.remove('active')
    } else if (event.code == 'Slash') {
      buttonSlash.classList.remove('active')
    } else if (event.code == 'ArrowUp') {
      buttonArrowUp.classList.remove('active')
    } else if (event.code == 'ShiftRight') {
      buttonShiftRight.classList.remove('active')

      capsCheck = 0
      shiftCheck = 0

      document.querySelector('.unknown').innerHTML = '`'
      document.querySelector('.one').innerHTML = '1'
      document.querySelector('.two').innerHTML = '2'
      document.querySelector('.three').innerHTML = '3'
      document.querySelector('.four').innerHTML = '4'
      document.querySelector('.five').innerHTML = '5'
      document.querySelector('.six').innerHTML = '6'
      document.querySelector('.seven').innerHTML = '7'
      document.querySelector('.eight').innerHTML = '8'
      document.querySelector('.nine').innerHTML = '9'
      document.querySelector('.zero').innerHTML = '0'
      document.querySelector('.minus').innerHTML = '-'
      document.querySelector('.equal').innerHTML = '='

      document.querySelector('.letter-q').innerHTML = 'q'
      document.querySelector('.letter-w').innerHTML = 'w'
      document.querySelector('.letter-e').innerHTML = 'e'
      document.querySelector('.letter-r').innerHTML = 'r'
      document.querySelector('.letter-t').innerHTML = 't'
      document.querySelector('.letter-y').innerHTML = 'y'
      document.querySelector('.letter-u').innerHTML = 'u'
      document.querySelector('.letter-i').innerHTML = 'i'
      document.querySelector('.letter-o').innerHTML = 'o'
      document.querySelector('.letter-p').innerHTML = 'p'
      document.querySelector('.left-bracket').innerHTML = '['
      document.querySelector('.right-bracket').innerHTML = ']'
      document.querySelector('.slash-l').innerHTML = '\\'

      document.querySelector('.letter-a').innerHTML = 'a'
      document.querySelector('.letter-s').innerHTML = 's'
      document.querySelector('.letter-d').innerHTML = 'd'
      document.querySelector('.letter-f').innerHTML = 'f'
      document.querySelector('.letter-g').innerHTML = 'g'
      document.querySelector('.letter-h').innerHTML = 'h'
      document.querySelector('.letter-j').innerHTML = 'j'
      document.querySelector('.letter-k').innerHTML = 'k'
      document.querySelector('.letter-l').innerHTML = 'l'
      document.querySelector('.semicolon').innerHTML = ';'
      document.querySelector('.quote').innerHTML = "'"

      document.querySelector('.letter-z').innerHTML = 'z'
      document.querySelector('.letter-x').innerHTML = 'x'
      document.querySelector('.letter-c').innerHTML = 'c'
      document.querySelector('.letter-v').innerHTML = 'v'
      document.querySelector('.letter-b').innerHTML = 'b'
      document.querySelector('.letter-n').innerHTML = 'n'
      document.querySelector('.letter-m').innerHTML = 'm'
      document.querySelector('.comma').innerHTML = ','
      document.querySelector('.dot').innerHTML = '.'
      document.querySelector('.slash-r').innerHTML = '/'
    } else if (event.code == 'ControlLeft') {
      buttonControlLeft.classList.remove('active')
    } else if (event.code == 'MetaLeft') {
      buttonMetaLeft.classList.remove('active')
    } else if (event.code == 'AltLeft') {
      buttonAltLeft.classList.remove('active')
    } else if (event.code == 'Space') {
      buttonSpace.classList.remove('active')
    } else if (event.code == 'AltRight') {
      buttonAltRight.classList.remove('active')
    } else if (event.code == 'ControlRight') {
      buttonControlRight.classList.remove('active')
    } else if (event.code == 'ArrowLeft') {
      buttonArrowLeft.classList.remove('active')
    } else if (event.code == 'ArrowDown') {
      buttonArrowDown.classList.remove('active')
    } else if (event.code == 'ArrowRight') {
      buttonArrowRight.classList.remove('active')
    }
  }

  if (changeLang == 1) {
    if (event.code == 'Backquote') {
      backquote.classList.remove('active')
    } else if (event.code == 'Digit1') {
      button1.classList.remove('active')
    } else if (event.code == 'Digit2') {
      button2.classList.remove('active')
    } else if (event.code == 'Digit3') {
      button3.classList.remove('active')
    } else if (event.code == 'Digit4') {
      button4.classList.remove('active')
    } else if (event.code == 'Digit5') {
      button5.classList.remove('active')
    } else if (event.code == 'Digit6') {
      button6.classList.remove('active')
    } else if (event.code == 'Digit7') {
      button7.classList.remove('active')
    } else if (event.code == 'Digit8') {
      button8.classList.remove('active')
    } else if (event.code == 'Digit9') {
      button9.classList.remove('active')
    } else if (event.code == 'Digit0') {
      button0.classList.remove('active')
    } else if (event.code == 'Minus') {
      buttonMinus.classList.remove('active')
    } else if (event.code == 'Equal') {
      buttonEqual.classList.remove('active')
    } else if (event.code == 'Backspace') {
      buttonBackspace.classList.remove('active')
    } else if (event.code == 'Tab') {
      buttonTab.classList.remove('active')
    } else if (event.code == 'KeyQ') {
      buttonQ.classList.remove('active')
    } else if (event.code == 'KeyW') {
      buttonW.classList.remove('active')
    } else if (event.code == 'KeyE') {
      buttonE.classList.remove('active')
    } else if (event.code == 'KeyR') {
      buttonR.classList.remove('active')
    } else if (event.code == 'KeyT') {
      buttonT.classList.remove('active')
    } else if (event.code == 'KeyY') {
      buttonY.classList.remove('active')
    } else if (event.code == 'KeyU') {
      buttonU.classList.remove('active')
    } else if (event.code == 'KeyI') {
      buttonI.classList.remove('active')
    } else if (event.code == 'KeyO') {
      buttonO.classList.remove('active')
    } else if (event.code == 'KeyP') {
      buttonP.classList.remove('active')
    } else if (event.code == 'BracketLeft') {
      buttonBracketLeft.classList.remove('active')
    } else if (event.code == 'BracketRight') {
      buttonBracketRight.classList.remove('active')
    } else if (event.code == 'Backslash') {
      buttonBackslash.classList.remove('active')
    } else if (event.code == 'Delete') {
      buttonDelete.classList.remove('active')
    } else if (event.code == 'CapsLock') {
      buttonCaps.classList.remove('active')
      capsCheckScript()
    } else if (event.code == 'KeyA') {
      buttonA.classList.remove('active')
    } else if (event.code == 'KeyS') {
      buttonS.classList.remove('active')
    } else if (event.code == 'KeyD') {
      buttonD.classList.remove('active')
    } else if (event.code == 'KeyF') {
      buttonF.classList.remove('active')
    } else if (event.code == 'KeyG') {
      buttonG.classList.remove('active')
    } else if (event.code == 'KeyH') {
      buttonH.classList.remove('active')
    } else if (event.code == 'KeyJ') {
      buttonJ.classList.remove('active')
    } else if (event.code == 'KeyK') {
      buttonK.classList.remove('active')
    } else if (event.code == 'KeyL') {
      buttonL.classList.remove('active')
    } else if (event.code == 'Semicolon') {
      buttonSemicolon.classList.remove('active')
    } else if (event.code == 'Quote') {
      buttonQuote.classList.remove('active')
    } else if (event.code == 'Enter') {
      buttonEnter.classList.remove('active')
    }

    if (event.code == 'ShiftLeft') {
      buttonShiftLeft.classList.remove('active')

      capsCheck = 0
      shiftCheck = 0

      document.querySelector('.unknown').innerHTML = 'ё'
      document.querySelector('.one').innerHTML = '1'
      document.querySelector('.two').innerHTML = '2'
      document.querySelector('.three').innerHTML = '3'
      document.querySelector('.four').innerHTML = '4'
      document.querySelector('.five').innerHTML = '5'
      document.querySelector('.six').innerHTML = '6'
      document.querySelector('.seven').innerHTML = '7'
      document.querySelector('.eight').innerHTML = '8'
      document.querySelector('.nine').innerHTML = '9'
      document.querySelector('.zero').innerHTML = '0'
      document.querySelector('.minus').innerHTML = '-'
      document.querySelector('.equal').innerHTML = '='

      document.querySelector('.letter-q').innerHTML = 'й'
      document.querySelector('.letter-w').innerHTML = 'ц'
      document.querySelector('.letter-e').innerHTML = 'у'
      document.querySelector('.letter-r').innerHTML = 'к'
      document.querySelector('.letter-t').innerHTML = 'е'
      document.querySelector('.letter-y').innerHTML = 'н'
      document.querySelector('.letter-u').innerHTML = 'г'
      document.querySelector('.letter-i').innerHTML = 'ш'
      document.querySelector('.letter-o').innerHTML = 'щ'
      document.querySelector('.letter-p').innerHTML = 'з'
      document.querySelector('.left-bracket').innerHTML = 'х'
      document.querySelector('.right-bracket').innerHTML = 'ъ'
      document.querySelector('.slash-l').innerHTML = '\\'

      document.querySelector('.letter-a').innerHTML = 'ф'
      document.querySelector('.letter-s').innerHTML = 'ы'
      document.querySelector('.letter-d').innerHTML = 'в'
      document.querySelector('.letter-f').innerHTML = 'а'
      document.querySelector('.letter-g').innerHTML = 'п'
      document.querySelector('.letter-h').innerHTML = 'р'
      document.querySelector('.letter-j').innerHTML = 'о'
      document.querySelector('.letter-k').innerHTML = 'л'
      document.querySelector('.letter-l').innerHTML = 'д'
      document.querySelector('.semicolon').innerHTML = 'ж'
      document.querySelector('.quote').innerHTML = 'э'

      document.querySelector('.letter-z').innerHTML = 'я'
      document.querySelector('.letter-x').innerHTML = 'ч'
      document.querySelector('.letter-c').innerHTML = 'с'
      document.querySelector('.letter-v').innerHTML = 'м'
      document.querySelector('.letter-b').innerHTML = 'и'
      document.querySelector('.letter-n').innerHTML = 'т'
      document.querySelector('.letter-m').innerHTML = 'ь'
      document.querySelector('.comma').innerHTML = 'б'
      document.querySelector('.dot').innerHTML = 'ю'
      document.querySelector('.slash-r').innerHTML = '.'
    } else if (event.code == 'KeyZ') {
      buttonZ.classList.remove('active')
    } else if (event.code == 'KeyX') {
      buttonX.classList.remove('active')
    } else if (event.code == 'KeyC') {
      buttonC.classList.remove('active')
    } else if (event.code == 'KeyV') {
      buttonV.classList.remove('active')
    } else if (event.code == 'KeyB') {
      buttonB.classList.remove('active')
    } else if (event.code == 'KeyN') {
      buttonN.classList.remove('active')
    } else if (event.code == 'KeyM') {
      buttonM.classList.remove('active')
    } else if (event.code == 'Comma') {
      buttonComma.classList.remove('active')
    } else if (event.code == 'Period') {
      buttonPeriod.classList.remove('active')
    } else if (event.code == 'Slash') {
      buttonSlash.classList.remove('active')
    } else if (event.code == 'ArrowUp') {
      buttonArrowUp.classList.remove('active')
    } else if (event.code == 'ShiftRight') {
      buttonShiftRight.classList.remove('active')

      capsCheck = 0
      shiftCheck = 0

      document.querySelector('.unknown').innerHTML = 'ё'
      document.querySelector('.one').innerHTML = '1'
      document.querySelector('.two').innerHTML = '2'
      document.querySelector('.three').innerHTML = '3'
      document.querySelector('.four').innerHTML = '4'
      document.querySelector('.five').innerHTML = '5'
      document.querySelector('.six').innerHTML = '6'
      document.querySelector('.seven').innerHTML = '7'
      document.querySelector('.eight').innerHTML = '8'
      document.querySelector('.nine').innerHTML = '9'
      document.querySelector('.zero').innerHTML = '0'
      document.querySelector('.minus').innerHTML = '-'
      document.querySelector('.equal').innerHTML = '='

      document.querySelector('.letter-q').innerHTML = 'й'
      document.querySelector('.letter-w').innerHTML = 'ц'
      document.querySelector('.letter-e').innerHTML = 'у'
      document.querySelector('.letter-r').innerHTML = 'к'
      document.querySelector('.letter-t').innerHTML = 'е'
      document.querySelector('.letter-y').innerHTML = 'н'
      document.querySelector('.letter-u').innerHTML = 'г'
      document.querySelector('.letter-i').innerHTML = 'ш'
      document.querySelector('.letter-o').innerHTML = 'щ'
      document.querySelector('.letter-p').innerHTML = 'з'
      document.querySelector('.left-bracket').innerHTML = 'х'
      document.querySelector('.right-bracket').innerHTML = 'ъ'
      document.querySelector('.slash-l').innerHTML = '\\'

      document.querySelector('.letter-a').innerHTML = 'ф'
      document.querySelector('.letter-s').innerHTML = 'ы'
      document.querySelector('.letter-d').innerHTML = 'в'
      document.querySelector('.letter-f').innerHTML = 'а'
      document.querySelector('.letter-g').innerHTML = 'п'
      document.querySelector('.letter-h').innerHTML = 'р'
      document.querySelector('.letter-j').innerHTML = 'о'
      document.querySelector('.letter-k').innerHTML = 'л'
      document.querySelector('.letter-l').innerHTML = 'д'
      document.querySelector('.semicolon').innerHTML = 'ж'
      document.querySelector('.quote').innerHTML = 'э'

      document.querySelector('.letter-z').innerHTML = 'я'
      document.querySelector('.letter-x').innerHTML = 'ч'
      document.querySelector('.letter-c').innerHTML = 'с'
      document.querySelector('.letter-v').innerHTML = 'м'
      document.querySelector('.letter-b').innerHTML = 'и'
      document.querySelector('.letter-n').innerHTML = 'т'
      document.querySelector('.letter-m').innerHTML = 'ь'
      document.querySelector('.comma').innerHTML = 'б'
      document.querySelector('.dot').innerHTML = 'ю'
      document.querySelector('.slash-r').innerHTML = '.'
    } else if (event.code == 'ControlLeft') {
      buttonControlLeft.classList.remove('active')
    } else if (event.code == 'MetaLeft') {
      buttonMetaLeft.classList.remove('active')
    } else if (event.code == 'AltLeft') {
      buttonAltLeft.classList.remove('active')
    } else if (event.code == 'Space') {
      buttonSpace.classList.remove('active')
    } else if (event.code == 'AltRight') {
      buttonAltRight.classList.remove('active')
    } else if (event.code == 'ControlRight') {
      buttonControlRight.classList.remove('active')
    } else if (event.code == 'ArrowLeft') {
      buttonArrowLeft.classList.remove('active')
    } else if (event.code == 'ArrowDown') {
      buttonArrowDown.classList.remove('active')
    } else if (event.code == 'ArrowRight') {
      buttonArrowRight.classList.remove('active')
    }
  }
})

document.addEventListener('keydown', function (event) {
  event.preventDefault()
  if (event.repeat) return
  arrChars.push(event.code)

  languageCheck()
})

document.addEventListener('keyup', function (event) {
  if (arrChars.length == 0) return
  arrChars.length = 0
})

function languageCheck() {
  if (arrChars.includes('AltLeft') && arrChars.includes('ControlLeft')) {
    languageSwap()
  } else if (
    arrChars.includes('AltLeft') &&
    arrChars.includes('ControlRight')
  ) {
    languageSwap()
  } else if (
    arrChars.includes('AltRight') &&
    arrChars.includes('ControlLeft')
  ) {
    languageSwap()
  } else if (
    arrChars.includes('AltRight') &&
    arrChars.includes('ControlRight')
  ) {
    languageSwap()
  }
}

function languageSwap() {
  // changeLang = (changeLang == 0) ? 1 : 0;

  if (changeLang == 0) {
    localStorage.setItem('lang', 1)
    changeLang = localStorage.getItem('lang')
  } else {
    localStorage.setItem('lang', 0)
    changeLang = localStorage.getItem('lang')
  }

  if (changeLang == 1) {
    document.querySelector('.unknown').innerHTML = 'ё'
    document.querySelector('.letter-q').innerHTML = 'й'
    document.querySelector('.letter-w').innerHTML = 'ц'
    document.querySelector('.letter-e').innerHTML = 'у'
    document.querySelector('.letter-r').innerHTML = 'к'
    document.querySelector('.letter-t').innerHTML = 'е'
    document.querySelector('.letter-y').innerHTML = 'н'
    document.querySelector('.letter-u').innerHTML = 'г'
    document.querySelector('.letter-i').innerHTML = 'ш'
    document.querySelector('.letter-o').innerHTML = 'щ'
    document.querySelector('.letter-p').innerHTML = 'з'
    document.querySelector('.left-bracket').innerHTML = 'х'
    document.querySelector('.right-bracket').innerHTML = 'ъ'

    document.querySelector('.letter-a').innerHTML = 'ф'
    document.querySelector('.letter-s').innerHTML = 'ы'
    document.querySelector('.letter-d').innerHTML = 'в'
    document.querySelector('.letter-f').innerHTML = 'а'
    document.querySelector('.letter-g').innerHTML = 'п'
    document.querySelector('.letter-h').innerHTML = 'р'
    document.querySelector('.letter-j').innerHTML = 'о'
    document.querySelector('.letter-k').innerHTML = 'л'
    document.querySelector('.letter-l').innerHTML = 'д'
    document.querySelector('.semicolon').innerHTML = 'ж'
    document.querySelector('.quote').innerHTML = 'э'

    document.querySelector('.letter-z').innerHTML = 'я'
    document.querySelector('.letter-x').innerHTML = 'ч'
    document.querySelector('.letter-c').innerHTML = 'с'
    document.querySelector('.letter-v').innerHTML = 'м'
    document.querySelector('.letter-b').innerHTML = 'и'
    document.querySelector('.letter-n').innerHTML = 'т'
    document.querySelector('.letter-m').innerHTML = 'ь'
    document.querySelector('.comma').innerHTML = 'б'
    document.querySelector('.dot').innerHTML = 'ю'
    document.querySelector('.slash-r').innerHTML = '.'
  }

  if (changeLang == 0) {
    document.querySelector('.unknown').innerHTML = '`'
    document.querySelector('.letter-q').innerHTML = 'q'
    document.querySelector('.letter-w').innerHTML = 'w'
    document.querySelector('.letter-e').innerHTML = 'e'
    document.querySelector('.letter-r').innerHTML = 'r'
    document.querySelector('.letter-t').innerHTML = 't'
    document.querySelector('.letter-y').innerHTML = 'y'
    document.querySelector('.letter-u').innerHTML = 'u'
    document.querySelector('.letter-i').innerHTML = 'i'
    document.querySelector('.letter-o').innerHTML = 'o'
    document.querySelector('.letter-p').innerHTML = 'p'
    document.querySelector('.left-bracket').innerHTML = '['
    document.querySelector('.right-bracket').innerHTML = ']'

    document.querySelector('.letter-a').innerHTML = 'a'
    document.querySelector('.letter-s').innerHTML = 's'
    document.querySelector('.letter-d').innerHTML = 'd'
    document.querySelector('.letter-f').innerHTML = 'f'
    document.querySelector('.letter-g').innerHTML = 'g'
    document.querySelector('.letter-h').innerHTML = 'h'
    document.querySelector('.letter-j').innerHTML = 'j'
    document.querySelector('.letter-k').innerHTML = 'k'
    document.querySelector('.letter-l').innerHTML = 'l'
    document.querySelector('.semicolon').innerHTML = ';'
    document.querySelector('.quote').innerHTML = "'"

    document.querySelector('.letter-z').innerHTML = 'z'
    document.querySelector('.letter-x').innerHTML = 'x'
    document.querySelector('.letter-c').innerHTML = 'c'
    document.querySelector('.letter-v').innerHTML = 'v'
    document.querySelector('.letter-b').innerHTML = 'b'
    document.querySelector('.letter-n').innerHTML = 'n'
    document.querySelector('.letter-m').innerHTML = 'm'
    document.querySelector('.comma').innerHTML = ','
    document.querySelector('.dot').innerHTML = '.'
    document.querySelector('.slash-r').innerHTML = '/'
  }
}

function textWrap() {
  if (document.getElementById('kinput').offsetWidth > 926) {
    word = document.getElementById('kinput').innerHTML

    console.log('deleted')
    document.getElementById('kinput').innerHTML = word.slice(0, -1)

    document.getElementById('kinput').innerHTML += ' '
  }
}

function deleteLast() {
  if (
    document.getElementById('kinput').innerHTML.lastIndexOf('&') + 5 ==
    document.getElementById('kinput').innerHTML.length
  ) {
    document.getElementById('kinput').innerHTML = document
      .getElementById('kinput')
      .innerHTML.slice(
        0,
        document.getElementById('kinput').innerHTML.length - 5,
      )
  } else if (
    document.getElementById('kinput').innerHTML.lastIndexOf('&') + 4 ==
    document.getElementById('kinput').innerHTML.length
  ) {
    document.getElementById('kinput').innerHTML = document
      .getElementById('kinput')
      .innerHTML.slice(
        0,
        document.getElementById('kinput').innerHTML.length - 4,
      )
  } else
    document.getElementById('kinput').innerHTML = document
      .getElementById('kinput')
      .innerHTML.replace(/.$/, '')
}
