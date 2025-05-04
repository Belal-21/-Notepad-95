const fileMenu = document.getElementById('fileMenu');
const fileInput = document.getElementById('fileInput');
const editor = document.querySelector('.editor');

function triggerFileMenu() {
  fileMenu.classList.toggle('hidden');
}

function saveFile() {
  const blob = new Blob([editor.value], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'note.txt';
  link.click();
  fileMenu.classList.add('hidden');
}

function openFile() {
  fileInput.click();
  fileMenu.classList.add('hidden');
}

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    editor.value = e.target.result;
  };
  reader.readAsText(file);
});
