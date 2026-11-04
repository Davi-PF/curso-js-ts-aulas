// Jeito que o Professor fez:
// 705.484.450-52 070.87.720-03
class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  éSequencia() {
    //                          tamanho de um CPF
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);
    this.novoCpf = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfsemDigitos) {
    let total = 0;
    let reverso = cpfsemDigitos.length + 1;

    for (let stringNumerica of cpfsemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.éSequencia()) return false;
    this.geraNovoCpf();

    return this.novoCpf === this.cpfLimpo;
  }
}
let validaCpf = new ValidaCpf("070.987.720-03");
// validaCpf = new ValidaCpf("999.999.999-99");

if (validaCpf.valida()) {
  console.log("CPF válido");
} else {
  console.log("CPF inválido");
}

// Jeito que EU adapte a constructor function de validar cpf
// da aula 77
// class Cpf {
//   constructor(cpf) {
//     this.cpf = cpf.replace(/\D+/g, "");
//   }

//   //   limpaCpf(){
//   //     this.cpf = cpf.replace(/\D+/g, "")
//   //   }

//   criaDigito(cpfParcial) {
//     const cpfArray = Array.from(cpfParcial);
//     let regressivo = cpfArray.length + 1;
//     const total = cpfArray.reduce((ac, val) => {
//       ac += regressivo * Number(val);
//       regressivo--;
//       return ac;
//     }, 0);

//     const digito = 11 - (total % 11);
//     return digito > 9 ? "0" : String(digito);
//   }

//   isSequencia() {
//     const sequencia = this.cpf[0].repeat(this.cpf.length);
//     return sequencia === this.cpf;
//   }

//   valida() {
//     if (typeof this.cpf === "undefined") return false;
//     if (this.cpf.length !== 11) return false;
//     if (this.isSequencia()) return false;

//     const cpfParcial = this.cpf.slice(0, -2);
//     const digito1 = this.criaDigito(cpfParcial);
//     const digito2 = this.criaDigito(cpfParcial + digito1);

//     const novoCpf = cpfParcial + digito1 + digito2;
//     return novoCpf === this.cpf;
//   }
// }

// const cpf = new Cpf("131.961.179-60");

// console.log(cpf.cpf);

// if (cpf.valida()) {
//   console.log("Cpf Válido");
// } else {
//   console.log("Cpf Inválido");
// }
