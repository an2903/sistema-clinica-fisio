document.addEventListener("DOMContentLoaded", () => {

    iniciarPacientes();
    iniciarFisioterapeutas();
    iniciarFuncionarios();

});

/* ===========================================
                PACIENTES
=========================================== */

function iniciarPacientes() {

    const form = document.getElementById("formPaciente");

    if (!form) return;

    mostrarPacientes();

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let pacientes =
            JSON.parse(localStorage.getItem("pacientes")) || [];

        pacientes.push({

            id: Date.now(),

            nome: document.getElementById("nomePaciente").value,

            cpf: document.getElementById("cpfPaciente").value,

            nascimento: document.getElementById("dataNascPaciente").value,

            historico: document.getElementById("historicoPaciente").value

        });

        localStorage.setItem("pacientes", JSON.stringify(pacientes));

        alert("Paciente cadastrado com sucesso!");

        form.reset();

        mostrarPacientes();

    });

}

function mostrarPacientes() {

    let tabela = document.getElementById("listaPacientes");

    if (!tabela) return;

    let pacientes =
        JSON.parse(localStorage.getItem("pacientes")) || [];

    tabela.innerHTML = "";

    pacientes.forEach((p) => {

        tabela.innerHTML += `

<tr>

<td>${p.nome}</td>

<td>${p.cpf}</td>

<td>${p.nascimento}</td>

<td>

<button class="btn btn-danger btn-sm"

onclick="excluirPaciente(${p.id})">

Excluir

</button>

</td>

</tr>

`;

    });

}

function excluirPaciente(id) {

    let pacientes =
        JSON.parse(localStorage.getItem("pacientes")) || [];

    pacientes = pacientes.filter(p => p.id != id);

    localStorage.setItem("pacientes", JSON.stringify(pacientes));

    mostrarPacientes();

}

/* ===========================================
            FISIOTERAPEUTAS
=========================================== */

function iniciarFisioterapeutas() {

    const form = document.getElementById("formFisio");

    if (!form) return;

    mostrarFisioterapeutas();

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let lista =
            JSON.parse(localStorage.getItem("fisioterapeutas")) || [];

        lista.push({

            id: Date.now(),

            nome: document.getElementById("nomeFisio").value,

            cpf: document.getElementById("cpfFisio").value,

            crefito: document.getElementById("crefitoFisio").value,

            telefone: document.getElementById("telefoneFisio").value,

            especialidade: document.getElementById("especialidadeFisio").value

        });

        localStorage.setItem("fisioterapeutas", JSON.stringify(lista));

        alert("Fisioterapeuta cadastrado!");

        form.reset();

        mostrarFisioterapeutas();

    });

}

function mostrarFisioterapeutas() {

    let tabela = document.getElementById("listaFisio");

    if (!tabela) return;

    let lista =
        JSON.parse(localStorage.getItem("fisioterapeutas")) || [];

    tabela.innerHTML = "";

    lista.forEach((f) => {

        tabela.innerHTML += `

<tr>

<td>${f.nome}</td>

<td>${f.cpf}</td>

<td>${f.especialidade}</td>

<td>

<button class="btn btn-danger btn-sm"

onclick="excluirFisio(${f.id})">

Excluir

</button>

</td>

</tr>

`;

    });

}

function excluirFisio(id) {

    let lista =
        JSON.parse(localStorage.getItem("fisioterapeutas")) || [];

    lista = lista.filter(f => f.id != id);

    localStorage.setItem("fisioterapeutas", JSON.stringify(lista));

    mostrarFisioterapeutas();

}

/* ===========================================
              FUNCIONÁRIOS
=========================================== */

function iniciarFuncionarios() {

    const form = document.getElementById("formFuncionario");

    if (!form) return;

    mostrarFuncionarios();

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let lista =
            JSON.parse(localStorage.getItem("funcionarios")) || [];

        lista.push({

            id: Date.now(),

            nome: document.getElementById("nomeFuncionario").value,

            cpf: document.getElementById("cpfFuncionario").value,

            telefone: document.getElementById("telefoneFuncionario").value,

            cargo: document.getElementById("cargoFuncionario").value

        });

        localStorage.setItem("funcionarios", JSON.stringify(lista));

        alert("Funcionário cadastrado!");

        form.reset();

        mostrarFuncionarios();

    });

}

function mostrarFuncionarios() {

    let tabela = document.getElementById("listaFuncionarios");

    if (!tabela) return;

    let lista =
        JSON.parse(localStorage.getItem("funcionarios")) || [];

    tabela.innerHTML = "";

    lista.forEach((f) => {

        tabela.innerHTML += `

<tr>

<td>${f.nome}</td>

<td>${f.cpf}</td>

<td>${f.cargo}</td>

<td>

<button class="btn btn-danger btn-sm"

onclick="excluirFuncionario(${f.id})">

Excluir

</button>

</td>

</tr>

`;

    });

}

function excluirFuncionario(id) {

    let lista =
        JSON.parse(localStorage.getItem("funcionarios")) || [];

    lista = lista.filter(f => f.id != id);

    localStorage.setItem("funcionarios", JSON.stringify(lista));

    mostrarFuncionarios();

}
document.addEventListener("DOMContentLoaded", atualizarDashboard);

function atualizarDashboard(){

    const pacientes =
        JSON.parse(localStorage.getItem("pacientes")) || [];

    const fisioterapeutas =
        JSON.parse(localStorage.getItem("fisioterapeutas")) || [];

    const funcionarios =
        JSON.parse(localStorage.getItem("funcionarios")) || [];

    const totalPacientes =
        document.getElementById("totalPacientes");

    const totalFisio =
        document.getElementById("totalFisio");

    const totalFuncionarios =
        document.getElementById("totalFuncionarios");

    if(totalPacientes){
        totalPacientes.textContent = pacientes.length;
    }

    if(totalFisio){
        totalFisio.textContent = fisioterapeutas.length;
    }

    if(totalFuncionarios){
        totalFuncionarios.textContent = funcionarios.length;
    }

}