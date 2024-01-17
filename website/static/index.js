function deleteTask(taskId) {
  fetch('/delete-task', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taskId: taskId }),
  }).then((_res) => {
      console.log('Task deleted successfully');
      // You might want to reload the page or update the UI after deletion
  });
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
}
}, false);

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);