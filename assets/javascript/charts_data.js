//name
var langData = [
    'needless', //[0]
    'Ruby',     //[1]
    'Python',   //[2]
    'Assembly', //[3]
    'C',        //[4]
    'C++',      //[5]
    'C#',       //[6]
    'PHP',      //[7]
    'javasript',//[8]
    'SQL',      //[9]
    'html/css', //[10]
    'prolog',   //[11]
    'shell',    //[12]
    'rust',     //[13]
]

var frameworkData = [
    'frameworkless',    //[0]
    'rails',            //[1]
    'django',           //[2]
    'unity',            //[3]
    'symfony'           //[4]
]

var dbData = [
    'needless',
    'elastic search',
    'mysql',
    'postgresql'
]

var categoryData = [
    'none',             //[0]
    'image processing', //[1]
    'infography',       //[2]
    'web',              //[3]
    'algorithms',       //[4]
    'videogames',       //[5]
    'kernel',           //[6]
    'security',         //[7]
    'machine learning', //[8]
    'metaprogramming',  //[9]
    'optimization',     //[10]
    'logic programming',//[11]
    'R&D',              //[12]
    'DevOps',           //[13]
    'parsing',          //[14]
    'knewline sharing', //[15]
]

// name, main lang, sec langs, frameworks, databases, time (days), categories
var projectsData = [
    ['piscine C', 4, [0], 0, 0, 30, [0], false],
    ['libft', 4, [0], 0, 0, 15, [0], false],
    ['getNextLine', 4, [0], 0, 0, 15, [0], false],
    ['fdf', 4, [0], 0, 0, 31, [2], false],
    ['fractol', 4, [0], 0, 0, 31, [2, 10], false],
    ['2048', 4, [0], 0, 0, 7, [5], false],
    ['pushswap', 4, [0], 0, 0, 31, [4, 10], false],
    ['computor v1', 4, [0], 0, 0, 31, [4], false],
    ['cluedo', 11, [0], 0, 0, 7, [11], false],
    ['piscine PHP', 7, [8, 10], 0, 2, 30, [3], false],
    ['libft ASM', 3, [0], 0, 0, 14, [10], false],
    ['exams C', 4, [0], 0, 0, 7, [0],false],
    ['piscine C++', 5, [0], 0, 0, 30, [5, 4], false],
    ['stage DxO', 5, [0], 0, 0, 190, [10, 9, 1, 12], false],
    ['Fillit', 4, [0], 0, 0, 15, [4, 10], false],
    ['piscine Unity', 6, [0], 3, 0, 30, [5], false],
    ['wolf 3D', 4, [0], 0, 0, 30, [5, 2], true],
    ['piscine Django', 2, [8, 10], 2, 2, 30, [3], false],
    ['stage Wekean', 7, [8, 10], 4, 3, 100, [3, 10], false],
    ['printf', 4, [0], 0, 0, 30, [14], false],
    ['roger skyline', 12, [0], 0, 0, 30, [13], false],
    ['dr quine', 4, [8], 0, 0, 20, [4], false],
    ['Filler', 4, [0], 0, 0, 30, [4, 5], true],
    ['Rootme', 4, [12, 2], 0, 0, 60, [7], true],
    ['LFS', 12, [4], 0, 0, 15, [6], false],
    ['automatic clothes recognition', 2, [13, 0], 0, 0, 95, [1, 12], false],
    ['instant study explorer', 1, [8, 10], 1, 1, 115, [12, 3], false],
    ['Learning C', 4, [0], 0, 0, 7, [15], false],
]