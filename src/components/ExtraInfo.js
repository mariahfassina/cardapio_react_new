import React from 'react';
function ExtraInfo() {
    return (
        <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h4>Informações Adicionais do Cardápio</h4>
            <p>
                Todos os nossos pratos são preparados com ingredientes frescos e de alta qualidade.
                Se você tiver alguma restrição alimentar ou alergia, por favor, informe ao nosso atendente.
            </p>
            <p>
                <strong>Horário de Funcionamento:</strong> Segunda a Sábado, das 18h às 23h.
            </p>
        </div>
    );
}

export default ExtraInfo;