insert = num => {
  const numero = document.getElementById('resultado').textContent
  document.getElementById('resultado').textContent = numero + num
}

clean = () => {
  document.getElementById('resultado').textContent = ''
}

back = () => {
  const resultado = document.getElementById('resultado').textContent
  document.getElementById('resultado').textContent = resultado.substring(
    0,
    resultado.length - 1
  )
}

calcular = () => {
  const resultado = document.getElementById('resultado').textContent
  if (resultado) {
    document.getElementById('resultado').textContent = eval(resultado)
  } else {
    document.getElementById('resultado').textContent = '????????'
  }
}
