
perceptron_maps = ["z",
"z z",
"z z z",
"z abs(z)",
"e^z+e^(i z)",
"e^z+e^(-i z)",
"e^z+e^(z e^(i pi/4))",
"e^z+e^(z e^(i pi/-4))",
"1/(z e^(i 2 pi/3)+1.4)+1/(z e^(i -2 pi/3)+1.4)+1/(z+1.4)",
"conj(e^z+e^(i z))",
"conj(e^z+e^(-i z))",
"conj(e^z+e^(z e^(i pi/4)))",
"conj(e^z+e^(z e^(i pi/-4)))",
"abs(z) e^(2*i arg(z)) *2",
"z z e^(i abs(z))",
"z z z e^(i abs(z))",
"z e^(i abs(z)) abs(z)",
"sin(z)^2",
"cos(z)^2",
"z z+2 log(z)/pi",
"(z+1)/(z-1)+(z-1)/(z+1)",
"(z+i)/(z-i)+(z-i)/(z+i)"];

perceptron_images = ["00000.png","01120.jpg","03600.jpg","04965.jpg","00001.jpg",
"01130.jpg","03700.jpg","04970.jpg","00100.jpg","01140.jpg","03800.jpg",
"04975.jpg","00200.jpg","01200.jpg","03900.jpg","04980.jpg","00300.jpg",
"01300.jpg","03901.jpg","04983.jpg","00400.jpg","01400.jpg","03902.jpg",
"04984.jpg","00500.JPG","01500.jpg","03950.jpg","04986.jpg","00550.jpg",
"01600.jpg","04000.jpg","04990.jpg","00600.jpg","01700.jpg","04001.jpg",
"19.jpg","00800.jpg","01710.jpg","04002.jpg","27.jpg","00900.jpg","01720.jpg",
"04003.jpg","28.jpg","00905.png","01730.jpg","04004.jpg","30.jpg","00910.png",
"01740.jpg","04005.jpg","38.jpg","00915.png","01800.JPG","04006.jpg","42.jpg",
"00920.png","01900.JPG","04100.JPG","53.jpg","00925.png","02000.jpg",
"04150.jpg","NGC55_gendler_c800.jpg","00930.png","02100.jpg","04160.jpg",
"NGC6357_schedler.jpg","00935.png","02200.jpg","04170.jpg",
"Tse2008_200_mo1_big.jpg","00940.png","02300.jpg","04280.jpg","_00000.jpg",
"00941.jpg","02400.jpg","04300.jpg","ic1805_skyfactory_big.jpg","00942.jpg",
"02410.jpg","04400.jpg","ic2118_ssro.jpg","00945.png","02430.jpg","04500.jpg",
"marslayers_hirise.jpg","00950.jpg","02500.jpg","04600.jpg",
"ngc253wide_hst.jpg","00955.png","02600.JPG","04830.jpg","ngc3324_hst.jpg",
"00960.png","02700.jpg","04831.jpg","ngc346_hst_big.jpg","00965.png",
"02800.jpg","04900.jpg","ngc602_hst_large.jpg","00970.jpg","02900.png",
"04905.jpg","ngc7129_fera.jpg","00975.png","03000.jpg","04907.png",
"s136crop_benintende.jpg","00980.jpg","03100.jpg","04910.jpg",
"spicules_sst_big.jpg","00985.png","03200.jpg","04915.jpg",
"trumpler16b_hst.jpg","01000.jpg","03300.jpg","04920.jpg",
"w5wide_spitzer_big.jpg","01100.jpg","03400.jpg","04925.jpg","01110.jpg",
"03500.JPG","04930.jpg"];

function bind_perceptron_key_listener(perceptron_model) {
    document.onkeypress = function(e) {
        var k = (e.which) ? e.which : e.keyCode;
        apply_perceptron_key_event(k, perceptron_model);
        perceptron_model.compile_kernel();
        console.log('Key pressed: '+k);
        console.log(perceptron_model);
    };
}

/** Takes a key code and a perceptron state model, and modified the state model
  */
function apply_perceptron_key_event(k, P) {
    // Common key codes (not exclusive)
    // # denotes numeric keypad codes (distinct from numbers in a row
    // above QWERTY
    switch (k) {
        case  8: /*BACKSP*/ break;
        case  9: /*TAB*/ break;
        case 13: /*ENTER*/ break;
        case 16: /*SHFT*/ break;
        case 17: /*CTRL*/ break;
        case 18: /*ALT*/ break;
        case 19: /*PAUSE*/ break;
        case 20: /*CAPS*/ break;
        case 27: /*ESC*/ break;
        case 32: /*SPACE*/ break;
        case 33: /*PGUP*/ break;
        case 34: /*PGDOWN*/ break;
        case 35: /*END*/ break;
        case 36: /*HOME*/ break;
        case 37: /*LEFT*/ break;
        case 38: /*RIGHT*/ break;
        case 39: /*UP*/ break;
        case 40: /*DOWN*/ break;
        case 42: /*PRINTSC*/ break;
        case 45: /*INS*/ break;
        case 46: /*DEL*/ break;
        case 91: /*LEFTWIN*/ break;
        case 92: /*RIGHTWIN*/ break;
        case 93: /*SELECT*/ break;
        case 144: /*NUMLOCK*/ break;
        case 145: /*SCROLLLOCK*/ break;

        case 126: /*~*/ break;
        case 33: /*!*/ break;
        case 64: /*@*/ break;
        case 35: /*#*/ break;
        case 36: /*$*/ break;
        case 37: /*%*/ break;
        case 94: /*^*/ break;
        case 38: /*&*/ break;
        case 42: /***/ break;
        case 106: /*#**/ break;
        case 40: /*(*/ break;
        case 41: /*)*/ break;
        case 95: /*_*/ 
        break;

        case 43: /*+*/ 
        // only applies to keydown? otherwise a letter? case 107: /*#+*/ 
        break;

        case 48 : /*0*/ 
        // only applies to keydown? otherwise a letter? case 96 : /*#0*/    
        break;
        case 49 : /*1*/ 
        // only applies to keydown? otherwise a letter? case 97 : /*#1*/ 
        break;
        case 50 : /*2*/ 
        // only applies to keydown? otherwise a letter? case 98 : /*#2*/ 
        break;
        case 51 : /*3*/ 
        // only applies to keydown? otherwise a letter? case 99 : /*#3*/ 
        break;
        case 52 : /*4*/ 
        // only applies to keydown? otherwise a letter? case 100: /*#4*/ 
        break;
        case 53 : /*5*/ 
        // only applies to keydown? otherwise a letter? case 101: /*#5*/ 
        break;
        case 54 : /*6*/ 
        // only applies to keydown? otherwise a letter? case 102: /*#6*/ 
        break;
        case 55 : /*7*/ 
        // only applies to keydown? otherwise a letter? case 103: /*#7*/ 
        break;
        case 56 : /*8*/ 
        // only applies to keydown? otherwise a letter? case 104: /*#8*/ 
        break;
        case 57 : /*9*/ 
        // only applies to keydown? otherwise a letter? case 105: /*#9*/ 
        break;

        case 97 : /*a*/
            P.aux_mode = (P.aux_mode+1)%3;
            break;
        case 65 : /*A*/ break;
        case 98 : /*b*/ 
            P.bounds_mode = (P.bounds_mode+1)%5;
            break;
        case 66 : /*B*/ break;
        case 99 : /*c*/ 
            P.do_conbrite ^= true;
            break;
        case 67 : /*C*/ break;
        case 100: /*d*/ break;
        case 68 : /*D*/ break;
        case 101: /*e*/ 
            P.aux_reflection_mode = (P.aux_reflection_mode+1)%5;
            break;
        case 69 : /*E*/ break;
        case 102: /*f*/ break;
        case 70 : /*F*/ break;
        case 103: /*g*/ 
            P.do_gradient ^= true;
            break;
        case 71 : /*G*/ break;
        case 104: /*h*/
            P.do_huesat ^= true;
            break;
        case 72 : /*H*/ break;
        case 105: /*i*/ 
            P.do_invert ^= true;
            break;
        case 73 : /*I*/ break;
        case 106: /*j*/ break;
        case 74 : /*J*/ break;
        case 107: /*k*/ break;
        case 75 : /*K*/ break;
        case 108: /*l*/ break;
        case 76 : /*L*/ break;
        case 109: /*m*/ 
            P.do_mblur ^= true;
            break;
        case 77 : /*M*/ break;
        case 110: /*n*/
            P.do_noise ^= true;
            break;
        case 78 : /*N*/ break;
        case 111: /*o*/ break;
        case 79 : /*O*/ break;
        case 112: /*p*/ break;
        case 80 : /*P*/ break;
        case 113: /*q*/ 
            P.map_index = (P.map_index+1)%(perceptron_maps.length);
            P.map = perceptron_maps[P.map_index];
            break;
        case 81 : /*Q*/ break;
        case 114: /*r*/ 
            P.reflection_mode = (P.reflection_mode+1)%5;
            break;
        case 82 : /*R*/ break;
        case 115: /*s*/ break;
        case 83 : /*S*/ break;
        case 116: /*t*/ break;
        case 84 : /*T*/ break;
        case 117: /*u*/ break;
        case 85 : /*U*/ break;
        case 118: /*v*/ break;
        case 86 : /*V*/ break;
        case 119: /*w*/ 
            P.map_index = (P.map_index+perceptron_maps.length-1)%(perceptron_maps.length);
            P.map = perceptron_maps[P.map_index];
            break;
        case 87 : /*W*/ break;
        case 120: /*x*/ break;
        case 88 : /*X*/ break;
        case 121: /*y*/ break;
        case 89 : /*Y*/ break;
        case 122: /*z*/ 
        break;
        case 90 : /*Z*/ break;

        case 112: /*F1*/ break;
        case 113: /*F2*/ break;
        case 114: /*F3*/ break;
        case 115: /*F4*/ break;
        case 116: /*F5*/ break;
        case 117: /*F6*/ break;
        case 118: /*F7*/ break;
        case 119: /*F8*/ break;
        case 120: /*F9*/ break;
        case 121: /*F10*/ break;
        case 122: /*F11*/ break;
        case 123: /*F12*/ break;

        case 186: /*;*/ break;
        case 187: /*=*/ break;
        case 188: /*,*/ break;
        case 189: /*-*/ break;
        case 108: /*#-*/ break;
        case 190: /*.*/ break;
        case 109: /*#.*/ break;
        case 191: /*/*/ break;
        case 110: /*#/*/ break;
        case 192: /*\*/ break;
        case 193: /*`*/ break;
        case 194: /*[*/ break;
        case 195: /*]*/ break;
        case 196: /*'*/ break;
        
        // OSX can generate many more key-typed events
        // including combinind modifiers, etc. 
        // they are not documented here. 
    }
}
