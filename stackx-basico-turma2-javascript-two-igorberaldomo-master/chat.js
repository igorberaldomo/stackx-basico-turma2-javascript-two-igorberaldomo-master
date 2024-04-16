/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

let listaMensagens = [];

function adicionarMensagem(apelido, mensagem) {
  listaMensagens.push(
    {
      apelido,
      mensagem
    }
  )
}

function formatarMensagens() {


  let mensagens = '';

  for (i = 0; i < listaMensagens.length; i++) {
    let atributo = listaMensagens[i];
    mensagens +=
      `<div class="chat-message">
      <span class="chat-message-apelido">
      ${atributo.apelido}
      </span>
      <span class="chat-message-item">
      ${atributo.mensagem}
      </span>
    </div>
    `
  }
  return mensagens;
}

function atualizarHTML() {
  let mensagens = formatarMensagens();
  document.getElementById('chat-messages').innerHTML = mensagens
}

function commitMessageClickHandler() {
  let input = document.getElementById('message-input')
  if (input.value.trim().length == 0) {
    input.focus();
    input.value = ''
    return;
  }
  adicionarMensagem('', input.value);
  atualizarHTML();
  input.value = '';
}

// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------