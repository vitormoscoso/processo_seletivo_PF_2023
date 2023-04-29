function casamento(A, B) {
  //Transforma os números em um array em que cada dígito é um elemento do array
  let arrayA = Array.from(String(A), Number);
  let arrayB = Array.from(String(B), Number);

  //Formata os arrays criados para que eles fiquem do mesmo tamanho
  if (arrayA.length < arrayB.length) {
    for (let i = 0; i < arrayB.length - arrayA.length; i++) {
      arrayA.unshift(0);
    }
  } else if (arrayB.length < arrayA.length) {
    for (let i = 0; i < arrayA.length - arrayB.length; i++) {
      arrayB.unshift(0);
    }
  }

  //Criação de novos arrays que serão usados na saída da função
  let newArrayA = [];
  let newArrayB = [];

  //Loop com a lógica central para comparar os dígitos
  for (let i = 0; i < arrayA.length; i++) {
    //Se o dígito de A for maior que o de B, o adiciona no array correspondente à A
    if (arrayA[i] > arrayB[i]) {
      newArrayA.push(arrayA[i]);
      //Se o dígito de B for maior que o de A, o adiciona no array correspondente à B
    } else if (arrayA[i] < arrayB[i]) {
      newArrayB.push(arrayB[i]);
      //Se os dígitos forem iguais, mantemo-se ambos os dígitos
    } else {
      newArrayA.push(arrayA[i]);
      newArrayB.push(arrayB[i]);
    }
  }

  //Converte os arrays de volta para números, ou atribui-se -1 se o array estiver vazio
  const newNumberA =
    newArrayA.length === 0 ? -1 : parseInt(newArrayA.join(""), 10);
  const newNumberB =
    newArrayB.length === 0 ? -1 : parseInt(newArrayB.join(""), 10);

  //Ordena e imprime os números resultantes em ordem não decresente
  if (newNumberA > newNumberB) {
    console.log("A: ", newNumberB);
    console.log("B: ", newNumberA);
  } else {
    console.log("A: ", newNumberA);
    console.log("B: ", newNumberB);
  }
}

casamento(200, 100);
