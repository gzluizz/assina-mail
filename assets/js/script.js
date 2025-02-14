function formatPhone(input) {
  let value = input.value.replace(/\D/g, "");
  if (value.length > 11) {
    value = value.substring(0, 11);
  }

  const formattedValue = value
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d)(\d{4})(\d{0,4})/, "$1 $2-$3");

  input.value = formattedValue.trim();
}

document.getElementById("signatureForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const job = document.getElementById("position").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Define o HTML da assinatura com a logo local
  let signatureHtml = `
<table cellpadding="0" cellspacing="0" width="100%" style="max-width: 580px; font-family: Arial, sans-serif;">
    <tr>
        <td style="background: url('images/ffundo.png') no-repeat center center; background-size: cover; padding: 28px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 543px; color: black;">
                <tr>
                    <td valign="top" style="width: 70%; padding-right: 20px;">
                        <table width="100%">
                            <tr>
                                <td style="font-size: 22px; padding-bottom: 0px;"><strong>${name}</strong></td>
                            </tr>
                            <tr>
                                <td style="font-size: 18px; color: #1e1e1e; padding-bottom: 20px;">${job}</td>
                            </tr>
                            <tr>
                                <td style="font-size: 16px;">
                                    <div style="margin-bottom: 10px;">${email}</div>
                                    <div style="margin-bottom: 10px;">${phone}</div>
                                    <a href="" style="color: black; text-decoration: none; float: right;">www.seusiteaqui.com.br</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td valign="top" style="width: 30%; text-align: right;">
                        <img src="images/sua-logo.png" alt="Logo da Empresa" width="110" height="100" style="display: block; float: right;">
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
`;

  // Exibe a assinatura na pré-visualização e código HTML
  document.getElementById("preview").innerHTML = signatureHtml;

  document.getElementById("textCode").style.display = "block";
  document.getElementById("htmlCode").textContent = signatureHtml;
  document.getElementById("htmlCode").style.display = "block";

  // Exibir botões de download e copiar
  document.getElementById("downloadBtn").style.display = "inline-block";
  document.getElementById("copyHtmlBtn").style.display = "inline-block";

  document.getElementById("downloadBtn").onclick = function () {
    const copyMessage = document.getElementById("downloadMsg");
    copyMessage.style.display = "block";
  
    setTimeout(() => {
      copyMessage.style.display = "none";
    }, 3000);
  
    // Substituir a imagem de fundo e a logo apenas no momento do download
    const localSignatureHtml = signatureHtml
      .replace(
        "https://www.menadiagnostico.com.br/images/background/fundo.png",
        "images/ffundo.png" // Caminho da imagem local para o download
      )
      .replace(
        "https://www.menadiagnostico.com.br/images/logo-2.png",
        "images/sua-logo.png" // Caminho local da logo, se necessário
      );
  
    const signatureElement = document.createElement("div");
    signatureElement.innerHTML = localSignatureHtml;
  
    document.body.appendChild(signatureElement);
  
    html2canvas(signatureElement, {
      width: 547,
      height: 287,
      scale: 1,
      backgroundColor: null,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${name}-assinatura.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      document.body.removeChild(signatureElement);
    });
  };
  
  

  // Função alternativa para copiar o código HTML
  function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  // Função para copiar o código HTML da assinatura
  document.getElementById("copyHtmlBtn").onclick = function () {
    // Substitui a logo local pelo link desejado
    const modifiedSignatureHtml = signatureHtml.replace(
      "../images/sua-logo.png",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpagamento.asualogo.com.br%2Fproduto%2Flogo-texto%2F&psig=AOvVaw2fWYmle7nEhE_m8jOwVUpS&ust=1732272672552000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICjrbmg7YkDFQAAAAAdAAAAABAI"
    );

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(modifiedSignatureHtml)
        .then(() => {
          const copyMessage = document.getElementById("copyMessage");
          copyMessage.style.display = "block"; // Torna a mensagem visível

          setTimeout(() => {
            copyMessage.style.display = "none"; // Esconde a mensagem novamente
          }, 3000);
        })
        .catch((err) => {
          console.error("Erro ao copiar para a área de transferência: ", err);
        });
    } else {
      // Se a API Clipboard não estiver disponível, use a alternativa
      copyToClipboard(modifiedSignatureHtml);
      const copyMessage = document.getElementById("copyMessage");
      copyMessage.style.display = "block"; // Torna a mensagem visível

      setTimeout(() => {
        copyMessage.style.display = "none"; // Esconde a mensagem novamente
      }, 3000);
    }
  };
});
