'use strict';

var unlockers = ["5ead2b6b355fc4cdb3c88b6acce6bdbe", "1131a38d6b637e4ed2e0f4d036a9a976"];
var unlockerPhrase = "";

var message = `-----BEGIN PGP MESSAGE-----
Version: GnuPG v2

hQEMA/Dn/kCx5LjwAQf/cD3vbTMsV6lRRJCbl+DBVYxTMQEEDGB3+vxIPCoSN8gX
rgTMxJbLn8pqQYeMT2K5K4hzboqjvrtTKIeXjYQTuaDSpwN/q/Qrm4y54pETil+p
Chxc2DXAmKe52xHTx1AErDXcNruZZdB0w5oguaQWAPT9jmWxczZ2pJtgWQgi6gRF
5n7sP4JzxBizPMh4/zdvBO8ETUPFNIlwORe4Td2521hI0DUBqcZR5i2jwhnQMb/c
2w4uWVn1EgZmiGqjd0nLDv+W5T+GNglJMcmA32dOAWMLTH7uKIfN+4aC/URk6cmA
4x/VFHJl+rnohI+4DNXjNJ/x4DVtdhmELH+KFVzcctLpAeAFSEVyQczcXqKJ2WA2
oqTahxiwOrzlnXujxIXyN1DYW2JLmn2z2JK+ibFKGZQfgXvqeGfuk3J5ToN7Y8aO
8yg/8nKNn6iycc5rDhRQIfzenoWsNjfh8iylOm/GV0b0Dp0NUp77IlK08vB0lGn0
O+UEoevhUWm/Zb3G+OmA2DNwSAKNZj5EsXmpbDw/k8+KOuu/KReMj3KnP64Zvvvs
EL1WVf9HeWtZkypAmv4NrbrWdLJTkG2xxRg3iVp4/IbHdp+VantEWrLJ5i7LH5uq
ZHS3lFsI0RBSfeEX8Hko5DfmV6Dm3uvKenICAwOdBPqofGMz1JPfhH4DOgbKSP9K
7qtTc6XkqqvU/DQcQ+/R9kNesgU0PKaJqOfuxDkeX1SH54iMVS5BC7LrXqEzg0fV
xl47pEqBUs0WtCzUPWbDq3JsAoi17bt6Ahyz1MA2s9CG4ialNNHA8yV8OV+pfu7p
PKDPb//V063tlAaBBp1a2gSnoL9lP6ZFwGYtykwLgUxx0GCkakxoXxO2uQCIECsR
qy5rbLL75O4aoZBqO0lawGiFxFwL3Hsm6zSOXcXoYJaHJkD3w/GX9jppWO5dzvmS
dN9aHmvaMQzvJI6xUSS/o4MelHo1zJjTjmxAbX/N3k52biSZNerPL2HL+aeH5mDv
lKo1hdRSgheIep6+Q293lfLAjkh42p/R2OdKqPzpXECjuFNjpVh/hha6ENC/o9Fr
dHaMvihMe35yd0d1yZGR94q02SQlbRKnFlngxNeLO97MmihHJbyCrq2J0K6AZHZK
iTCjMloJgRxX13pHpPKcP+8dsMgLGD+uFppDgSuIT2HZRMKt5UkMb25xKxKo2UHi
l4RAgTJLd+quGhxJITXg0SLm3Ed08WOABY+o51usYFA59LJ6gJ3cZ19F9cmZtiF6
pjFiBg1/A3757y6JarxwsdO6ZbbgFLAIK2dslssQyOba/jNqfX25WkRy0ptqDm73
XlrgMBSvu2QVm9S89NvdoG9p5BYeOpHq6VQynpugMVn9Yqv8M1r2fK8iV9bNhkW0
LBays12YTt0orohLZeWASrFoB+EeJtUDHQXVMX1IGBSiGuivFl8PszG77nm8YlNE
tzdX3duBEEydAc+9Nc6Kyf4=
=fdiB
-----END PGP MESSAGE-----`;

var unlock = function(phrase) {
    let hash = md5(phrase);
    let works = false;

    unlockers.forEach(function(key) {
        if (hash == key) {
            works = true;
        }
    });

    if (works) {
        unlockerPhrase = phrase;
        return true;
    }

    return false;
}

var handleTerminal = function(terminal) {
    var writable = document.getElementById("writable");
    var user = document.getElementById('user');
    var firstLine = document.getElementById("first-line");

    var addLine = (text) => {
        var user = document.getElementById('user');
        var lines = text.split("\n");

        lines.forEach(function(line) {
            user.parentElement.insertAdjacentHTML('beforebegin', '<span class="line">'+line+'</span>')
        });

        terminal.scrollTop = terminal.scrollHeight;
    }

    var adjustWritable = () => {
        writable.style.width = firstLine.offsetWidth  - user.offsetWidth + "px";
    }

    adjustWritable();

    window.addEventListener("resize", function(event) {
        adjustWritable();
    });

    writable.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();

            let text = writable.innerHTML;
            addLine(user.innerHTML + text);
            writable.innerHTML = "";

            if (unlock(text)) {
                addLine("Congratulations! You did it well. You may now type `secret`.");
                return true;
            }

            if (text == 'secret' && unlock(unlockerPhrase)) {
                addLine(message);
                return true;
            }

            addLine('Command `' + text + '` not found. Type `man henri` to get more information.');
            adjustWritable(writable);
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    console.log("Disclaimer: I know how to code.");

    var terminal = document.getElementById("console");
    if (terminal != null) {
        handleTerminal(terminal);
    }
});
