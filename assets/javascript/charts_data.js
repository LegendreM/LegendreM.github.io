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
    'docker',   //[14]
]

var frameworkData = [
    'frameworkless',    //[0]
    'rails',            //[1]
    'django',           //[2]
    'unity',            //[3]
    'symfony',          //[4]
    'rocket',           //[5]
    'dotNET',           //[6]
]

var dbData = [
    'needless',         //[0]
    'elastic search',   //[1]
    'mysql',            //[2]
    'postgresql',       //[3]
    'Micr SQL Server',  //[4]
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
    'data engineering', //[16]
    'API',              //[17]
    'library',          //[18]
]

var placeData = [
    'personal',         //[0]
    '42',               //[1]
    'DxO',              //[2]
    'Wekean',           //[3]
    'Vente-privee',     //[4]
]

// name, main lang, sec langs, frameworks, databases, time (days), categories, public?, place,
var projectsData = [
    ['piscine C', 4, [0], 0, 0, 30, [0], false, 1],
    ['libft', 4, [0], 0, 0, 15, [18], false, 1],
    ['getNextLine', 4, [0], 0, 0, 15, [18], false, 1],
    ['fdf', 4, [0], 0, 0, 31, [2], false, 1],
    ['fractol', 4, [0], 0, 0, 31, [2, 10], false, 1],
    ['2048', 4, [0], 0, 0, 7, [5], false, 1],
    ['pushswap', 4, [0], 0, 0, 31, [4, 10], false, 1],
    ['computor v1', 4, [0], 0, 0, 31, [4], false, 1],
    ['piscine PHP', 7, [8, 10], 0, 2, 20, [3], false, 1],
    ['libft ASM', 3, [0], 0, 0, 14, [10], false, 1],
    ['exams C', 4, [0], 0, 0, 7, [0],false, 1],
    ['piscine C++', 5, [0], 0, 0, 20, [5, 4], false, 1],
    ['stage DxO', 5, [0], 0, 0, 190, [10, 1, 12, 18], false, 2],
    ['Fillit', 4, [0], 0, 0, 15, [4, 10], false, 1],
    ['piscine Unity', 6, [0], 3, 0, 20, [5], false, 1],
    ['wolf 3D', 4, [0], 0, 0, 30, [5, 2], true, 1],
    ['piscine Django', 2, [8, 10], 2, 2, 20, [3], false, 1],
    ['stage Wekean', 7, [8, 10], 4, 3, 100, [3, 10], false, 3],
    ['printf', 4, [0], 0, 0, 30, [14, 18], false, 1],
    ['roger skyline', 12, [0], 0, 0, 30, [13], false, 1],
    ['dr quine', 4, [8], 0, 0, 20, [4], false, 1],
    ['Filler', 4, [0], 0, 0, 30, [4, 5], true, 1],
    ['Rootme', 4, [12, 2], 0, 0, 60, [7], true, 1],
    ['Linux From Scratch', 12, [4], 0, 0, 15, [6], false, 1],
    ['automatic clothes recognition', 13, [2], 0, 0, 95, [1, 12], false, 4],
    ['instant study explorer', 1, [8, 10], 1, 1, 115, [12, 3], false, 4],
    ['Learning C', 4, [0], 0, 0, 7, [15], false, 0],
    ['malloc reimplementation', 4, [0], 0, 0, 31, [18], false, 1],
    ['MTSP solver', 13, [1], 1, 0, 95, [4, 12], false, 4],
    ['npuzzle solver', 13, [0], 0, 0, 20, [4], true, 1],
    ['C package manager', 1, [0], 0, 0, 10, [0], true, 0],
    ['CSV Box', 1, [10], 1, 3, 50, [3, 16], false, 4],
    ['Genetic Algorithm API', 13, [1], 5, 0, 30, [4, 12, 17], false, 1, 4],
    ['impulse API', 6, [0], 6, 4, 20, [16, 17], false, 4],
    ['team production tasks', 14, [12], 0, 0, 20, [13], false, 4],
]

// place, title, content, datebegin, dateend
var jobsData = [
    [1, "42BornToCode", "formation en informatique dans un système de pédagogie peer-to-peer: un fonctionnement participatif qui permet aux étudiants de libérer toute leur créativité grâce à l’apprentissage par projets.", "01/11/2014", "31/12/2017", "http://www.42.fr/"],
    [2, "Stage", "le stagiaire participera au développement des briques de base d’une librairie de traitement d’images versatiles.", "01/09/2015", "29/02/2016", "https://www.dxo.com/"],
    [3, "Fullstack web developer", "Développement informatique web: Back/Front.", "16/05/2016", "15/08/2016", ""],
    [4, "R&D Lab42", "laboratoire de R&D informatique qui permettra, le développement de POC, de répondre à des problématiques stratégiques pour vente-privee.com.", "02/01/2017", "13/12/2017", "http://vente-privee.com"],
    [4, "R&D Impulse Fasttrack", "Transverse team which the job consist to: Accelerate startups, based at Station F, and integrate them in vente-privee business. Implement R&D projects and integrate them in vente-privee. Make some technological watch and promote inner-sourcing in compagny", "02/01/2018", "", "vente-privee.com"],
]