const interviewTitle = document.getElementById('poll__title');
const interviewOptions = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', function () {
	if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
		let interviewObject = JSON.parse(xhr.responseText).data;
		interviewTitle.innerText = interviewObject.title;
		for (let option of interviewObject.answers) {
			interviewOptions.innerHTML +=
				`<button class="poll__answer" style="margin: 3px">
                    ${option}
                </button>`;
		}
	}
})
interviewOptions.addEventListener('click', () => {
	const popUpMsg = document.querySelector('body');
	popUpMsg.insertAdjacentHTML("beforeEnd",
		`<div class="modal_mask">
       <div class="modal">
            <div class="modal_msg">Спасибо, ваш голос засчитан!</div>
            <button class="close_btn">Закрыть</button>
        </div>
    </div>`
	);
	const closeModalBtn = document.querySelector('.close_btn');
	closeModalBtn.addEventListener('click', (ev) => ev.target.closest('div.modal_mask').remove());
});