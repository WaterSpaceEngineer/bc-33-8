(() => {

    const openModalBtn = document.querySelector("[data-modal-open]");
    const closeModalBtn = document.querySelector("[data-modal-close]");
    const modal = document.querySelector("[data-modal]");
    const header = document.querySelector('.header');
    let scroll = calcScrooll();

    openModalBtn.addEventListener("click", () => {
        modal.classList.remove("is-hidden");
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        header.style.right = `${scroll / 2}px`;
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("is-hidden");
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        header.style.right = `0px`;
    });

    function calcScrooll () {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}

})();