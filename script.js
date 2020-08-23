function grid(size) {
	const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = "";
    const reset = document.querySelector('#reset');
	for(x=0; x<size; x++) {
	const box = document.createElement('div');
	box.classList.add('box',x);
	//box.textContent = 'Box '+x;
	box.addEventListener("mouseenter", function( event ) {   
    event.target.style.backgroundColor = "purple";
});
	wrapper.appendChild(box);
  }
}
reset.onclick = () => grid(prompt());