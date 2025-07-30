// formTransferencia.js

export function generarFormularioTransferencia(formContainer, procesarPago) {
    formContainer.innerHTML = `
        <div class="bg-secondary bg-opacity-10 p-4 rounded-3 border border-secondary">
            <h6 class="text-info fw-bold mb-3">Datos para Transferencia Bancaria:</h6>
            <p>CBU: <code>4530000800019268948890</code></p>
            <p>Alias: <code>LAUTARO2.NX</code></p>
            <p>Titular: Lautaro Leal Del Prete</p>
            <div class="mt-3">
                <label class="form-label">Adjuntar comprobante (simulado):</label>
                <input type="file" id="comprobante" class="form-control bg-dark text-light border-secondary">
            </div>
            <button class="btn btn-success mt-3" id="confirmar-transferencia">Confirmar Pago</button>
        </div>
    `;

    setTimeout(() => {
        document.getElementById("confirmar-transferencia")?.addEventListener("click", () => {
            const comprobante = document.getElementById("comprobante").value;
            procesarPago("Transferencia Bancaria", {
                comprobante: comprobante || "comprobante-simulado.pdf"
            });
        });
    }, 100);
}
