document.addEventListener('DOMContentLoaded', function(){
	const flanImg = document.querySelector('.flan img');
	const section = document.querySelector('.section');
	if(!flanImg || !section) return;

	// Make image keyboard-accessible
	flanImg.setAttribute('tabindex','0');
	flanImg.setAttribute('role','button');
	flanImg.style.cursor = 'pointer';

	function toggleSection(){
		section.classList.toggle('show');
	}

	flanImg.addEventListener('click', toggleSection);
	flanImg.addEventListener('keydown', function(e){
		if(e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggleSection();
		}
	});
});
