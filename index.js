function convert() {
  const numBinary = document.querySelector('.into-bin').value;
  if (numBinary === '') return alert('Por favor, insira um número bináro!');
  numBinary.split('').map((char) => {
      if (char !== '0' && char !== '1') return alert('Por favor, insira um número bináro!');
  });
  const numDecimal = parseInt(numBinary, 2);
  document.querySelector('.out-dec').value = numDecimal;
  return true;
}

