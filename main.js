window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);
		
		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});


		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);

		});
	})
})

window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-date");
    const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
        e.preventDefault();

		const date = input.value;
		
		const date_el = document.createElement('div');
		date_el.classList.add('date');

		const date_content_el = document.createElement('div');
		date_content_el.classList.add('content');

		date_el.appendChild(date_content_el);

		const date_input_el = document.createElement('input');
		date_input_el.classList.add('text');
		date_input_el.type = 'text';
		date_input_el.value = date;
		date_input_el.setAttribute('readonly', 'readonly');

		date_content_el.appendChild(date_input_el);

		const date_actions_el = document.createElement('div');
		date_actions_el.classList.add('actions');
		
		const date_edit_el = document.createElement('button');
		date_edit_el.classList.add('edit');
		date_edit_el.innerText = 'Edit';

		const date_delete_el = document.createElement('button');
		date_delete_el.classList.add('delete');
		date_delete_el.innerText = 'Delete';

		date_actions_el.appendChild(date_edit_el);
		date_actions_el.appendChild(date_delete_el);

		date_el.appendChild(date_actions_el);

		list_el.appendChild(date_el);

		input.value = '';

		date_edit_el.addEventListener('click', (e) => {
			if (date_edit_el.innerText.toLowerCase() == "edit") {
				date_edit_el.innerText = "Save";
				date_input_el.removeAttribute("readonly");
				date_input_el.focus();
			} else {
				date_edit_el.innerText = "Edit";
				date_input_el.setAttribute("readonly", "readonly");
			}

			date_delete_el.addEventListener('click', (e) => {
				list_el.removeChild(date_el);
		});
	})
})
})