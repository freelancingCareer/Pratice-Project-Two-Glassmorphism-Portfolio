// typing effect

var typed = new Typed('.typed-effect', {
    strings: [
        'Web Designer.',
        'Front End Developer.',
    ],
    typeSpeed: 60,
    backSpeed: 75,
    startDelay: 200,
    backDelay: 700,
    cursorChar: '|',
    loop: true,

});

// skill bar area

function skillFunction() {
	let progressBar = document.querySelectorAll('.progress-bar');
	let values = [
		'76%',
		'61%',
		'72%',
		'86%',
		'70%'
	];

	progressBar.forEach((progressing, index)=> {
		progressing.style.width = values[index];
	});
};
 
// collor picker

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => {
    color.addEventListener('click', function() {
        let background = color.style.background;
        document.querySelector('body').style.background = background;
    });
});
